'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { BrainStructureDetail } from '@/data/brainData';
import { LayerState, ViewMode } from '@/hooks/useBrainState';

interface BrainCanvasProps {
  structures: BrainStructureDetail[];
  selectedStructure: BrainStructureDetail | null;
  activeSimulation: string | null;
  viewMode: ViewMode;
  layers: LayerState;
  transparency: number;
  timeScale: number;
  onSelectStructure: (s: BrainStructureDetail) => void;
  onHoverStructure: (name: string | null) => void;
}

const REGION_COLORS: Record<string, number> = {
  frontal_lobe: 0x00f0ff,
  parietal_lobe: 0x00d0ff,
  temporal_lobe: 0x00e4ff,
  occipital_lobe: 0x00c8ff,
  cerebellum: 0x00aaff,
  brain_stem: 0x00d0ff,
  corpus_callosum: 0x00ffff,
  thalamus: 0x00d8ff,
  hypothalamus: 0x00f0ff,
  amygdala: 0x00f0ff,
  hippocampus: 0x00ffff,
  pons: 0x00d0ff,
  medulla: 0x00b8ff,
  angular_gyrus: 0x00e4ff
};

const SIMULATION_MAP: Record<string, string[]> = {
  Thinking: ['frontal_lobe', 'parietal_lobe', 'thalamus'],
  Memory: ['hippocampus', 'temporal_lobe', 'frontal_lobe'],
  Speech: ['frontal_lobe', 'temporal_lobe'],
  Vision: ['occipital_lobe', 'thalamus', 'parietal_lobe'],
  Touch: ['parietal_lobe', 'thalamus'],
  Emotion: ['amygdala', 'hypothalamus', 'hippocampus'],
  Fear: ['amygdala', 'hypothalamus', 'brain_stem'],
  Walking: ['cerebellum', 'frontal_lobe', 'brain_stem'],
  Learning: ['hippocampus', 'frontal_lobe', 'parietal_lobe'],
  Hearing: ['temporal_lobe', 'thalamus'],
  'Motor Control': ['cerebellum', 'frontal_lobe']
};

export const BrainCanvas: React.FC<BrainCanvasProps> = ({
  structures,
  selectedStructure,
  activeSimulation,
  viewMode,
  layers,
  transparency,
  timeScale,
  onSelectStructure,
  onHoverStructure
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);

  const gltfMeshesRef = useRef<Record<string, THREE.Mesh>>({});
  const gltfOriginalCentersRef = useRef<Record<string, THREE.Vector3>>({});
  const nanoParticlesRef = useRef<THREE.Points | null>(null);
  const activeImpulsesRef = useRef<THREE.Points | null>(null);
  const corticalNetworkGroupRef = useRef<THREE.Group | null>(null);

  const mousePosRef = useRef<THREE.Vector2>(new THREE.Vector2(0, 0));
  const targetCamPosRef = useRef<THREE.Vector3 | null>(null);
  const targetCamLookRef = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 0));
  const impulsesDataRef = useRef<Array<{ start: THREE.Vector3; end: THREE.Vector3; t: number; speed: number }>>([]);

  useEffect(() => {
    if (!mountRef.current) return;

    // 1. Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x000208);
    scene.fog = new THREE.FogExp2(0x000511, 0.012);

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(45, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    camera.position.set(0, 6, 30);
    cameraRef.current = camera;

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.4;
    rendererRef.current = renderer;

    mountRef.current.appendChild(renderer.domElement);

    // 4. OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxDistance = 65;
    controls.minDistance = 4;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.6;
    controlsRef.current = controls;

    // 5. Lighting
    const ambientLight = new THREE.AmbientLight(0x004466, 1.2);
    scene.add(ambientLight);

    const cyanLight1 = new THREE.DirectionalLight(0x00f0ff, 2.2);
    cyanLight1.position.set(20, 25, 20);
    scene.add(cyanLight1);

    const cyanLight2 = new THREE.DirectionalLight(0x0066ff, 1.8);
    cyanLight2.position.set(-20, -15, -20);
    scene.add(cyanLight2);

    // 6. Build Floating Nano Particles (Igloo-style particle cloud)
    buildNanoParticleCloud(scene);

    // 7. Load Medically Accurate BodyParts3D GLB Brain Model
    loadBodyParts3DGLBModel(scene);

    // Interaction Raycaster
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handlePointerMove = (e: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      mousePosRef.current.copy(mouse);

      raycaster.setFromCamera(mouse, camera);
      const meshes = Object.values(gltfMeshesRef.current);
      const intersects = raycaster.intersectObjects(meshes);

      if (intersects.length > 0) {
        const hitMesh = intersects[0].object as THREE.Mesh;
        const structId = hitMesh.userData.structureId;
        const structObj = structures.find(s => s.id === structId);
        onHoverStructure(structObj ? structObj.name : null);
        mountRef.current!.style.cursor = 'pointer';
      } else {
        onHoverStructure(null);
        mountRef.current!.style.cursor = 'default';
      }
    };

    const handleClick = (e: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const meshes = Object.values(gltfMeshesRef.current);
      const intersects = raycaster.intersectObjects(meshes);

      if (intersects.length > 0) {
        const hitMesh = intersects[0].object as THREE.Mesh;
        const structId = hitMesh.userData.structureId;
        const structObj = structures.find(s => s.id === structId);
        if (structObj) {
          onSelectStructure(structObj);
        }
      }
    };

    const domEl = renderer.domElement;
    domEl.addEventListener('mousemove', handlePointerMove);
    domEl.addEventListener('click', handleClick);

    // Animation Render Loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta() * timeScale;
      const elapsedTime = clock.getElapsedTime() * timeScale;

      controls.update();

      // Camera lerp targeting selected region
      if (targetCamPosRef.current) {
        camera.position.lerp(targetCamPosRef.current, 0.05);
        controls.target.lerp(targetCamLookRef.current, 0.05);

        if (camera.position.distanceTo(targetCamPosRef.current) < 0.2) {
          targetCamPosRef.current = null;
        }
      }

      // 1. Swirl Nano Particle Cloud
      if (nanoParticlesRef.current) {
        const pos = nanoParticlesRef.current.geometry.attributes.position.array as Float32Array;
        for (let i = 0; i < 3500; i++) {
          const idx = i * 3;
          pos[idx + 1] += Math.sin(elapsedTime * 0.8 + pos[idx]) * 0.012;
          pos[idx] += Math.cos(elapsedTime * 0.4 + pos[idx + 2]) * 0.01;

          pos[idx] += mousePosRef.current.x * 0.025;
          pos[idx + 1] += mousePosRef.current.y * 0.025;
        }
        nanoParticlesRef.current.geometry.attributes.position.needsUpdate = true;
        nanoParticlesRef.current.rotation.y += 0.0006;
      }

      // 2. Animate BodyParts3D GLB Meshes & Exploded View Lerping
      const activeSimStructures = activeSimulation ? (SIMULATION_MAP[activeSimulation] || []) : [];

      Object.entries(gltfMeshesRef.current).forEach(([id, mesh]) => {
        const baseCenter = gltfOriginalCentersRef.current[id];
        if (!baseCenter) return;

        let targetPos = baseCenter.clone();

        if (viewMode === 'exploded') {
          const dir = baseCenter.clone().normalize();
          targetPos.add(dir.multiplyScalar(4.0));
        }

        mesh.position.lerp(targetPos, 0.06);

        const isSelected = selectedStructure && selectedStructure.id === id;
        const isSimActive = activeSimStructures.includes(id);
        const mat = mesh.material as THREE.MeshStandardMaterial;

        const colorHex = REGION_COLORS[id] || 0x00f0ff;

        if (isSimActive || isSelected) {
          mat.color.setHex(0x00ffff);
          mat.emissive.setHex(0x00f0ff);
          mat.emissiveIntensity = 1.4 + Math.sin(elapsedTime * 6) * 0.5;
          mesh.scale.setScalar(1.04 + Math.sin(elapsedTime * 4) * 0.04);
        } else {
          mat.color.setHex(colorHex);
          mat.emissive.setHex(0x0066ff);
          mat.emissiveIntensity = 0.35;
          mesh.scale.setScalar(1.0);
        }

        if (viewMode === 'wireframe') {
          mat.wireframe = true;
          mat.opacity = 0.55;
        } else if (viewMode === 'xray') {
          mat.wireframe = true;
          mat.opacity = 0.2;
        } else {
          mat.wireframe = false;
          mat.opacity = transparency * 0.85;
        }
      });

      // 3. Action Potential Impulse Particle Travel
      if (activeImpulsesRef.current) {
        const keys = Object.keys(gltfOriginalCentersRef.current);
        if (keys.length > 1 && Math.random() < 0.5 * timeScale) {
          const k1 = keys[Math.floor(Math.random() * keys.length)];
          const k2 = keys[Math.floor(Math.random() * keys.length)];
          if (k1 !== k2) {
            const p1 = gltfOriginalCentersRef.current[k1];
            const p2 = gltfOriginalCentersRef.current[k2];
            impulsesDataRef.current.push({
              start: p1,
              end: p2,
              t: 0,
              speed: 0.025 + Math.random() * 0.025
            });
          }
        }

        const positions = activeImpulsesRef.current.geometry.attributes.position.array as Float32Array;
        const colors = activeImpulsesRef.current.geometry.attributes.color.array as Float32Array;

        for (let i = impulsesDataRef.current.length - 1; i >= 0; i--) {
          const imp = impulsesDataRef.current[i];
          imp.t += imp.speed * timeScale;
          if (imp.t >= 1.0) {
            impulsesDataRef.current.splice(i, 1);
          }
        }

        for (let i = 0; i < 600; i++) {
          if (i < impulsesDataRef.current.length) {
            const imp = impulsesDataRef.current[i];
            const p = new THREE.Vector3().lerpVectors(imp.start, imp.end, imp.t);
            positions[i * 3] = p.x;
            positions[i * 3 + 1] = p.y;
            positions[i * 3 + 2] = p.z;

            colors[i * 3] = 0;
            colors[i * 3 + 1] = 0.95;
            colors[i * 3 + 2] = 1.0;
          } else {
            positions[i * 3] = 9999;
            positions[i * 3 + 1] = 9999;
            positions[i * 3 + 2] = 9999;
          }
        }

        activeImpulsesRef.current.geometry.attributes.position.needsUpdate = true;
        activeImpulsesRef.current.geometry.attributes.color.needsUpdate = true;
      }

      if (corticalNetworkGroupRef.current) {
        corticalNetworkGroupRef.current.visible = layers.neurons;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!mountRef.current || !rendererRef.current || !cameraRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      domEl.removeEventListener('mousemove', handlePointerMove);
      domEl.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && rendererRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }
    };
  }, [structures]);

  // Camera targeting
  useEffect(() => {
    if (selectedStructure && cameraRef.current && controlsRef.current) {
      const baseCenter = gltfOriginalCentersRef.current[selectedStructure.id];
      if (baseCenter) {
        targetCamLookRef.current.copy(baseCenter);
        targetCamPosRef.current = baseCenter.clone().add(new THREE.Vector3(0, 2, 14));
      }
    }
  }, [selectedStructure]);

  // Load BodyParts3D GLB Model and configure separate anatomical meshes
  function loadBodyParts3DGLBModel(scene: THREE.Scene) {
    const loader = new GLTFLoader();
    loader.load(
      '/models/brain.glb',
      (gltf) => {
        const root = gltf.scene;

        root.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            const structId = mesh.name; // e.g. frontal_lobe, parietal_lobe, etc.

            mesh.userData = { structureId: structId };

            // Compute center of mesh bounding box
            mesh.geometry.computeBoundingBox();
            const bbox = mesh.geometry.boundingBox;
            const center = new THREE.Vector3();
            if (bbox) bbox.getCenter(center);

            gltfMeshesRef.current[structId] = mesh;
            gltfOriginalCentersRef.current[structId] = center;

            // Electric Blue Bio-Holographic Shader Material
            const colorHex = REGION_COLORS[structId] || 0x00f0ff;
            mesh.material = new THREE.MeshStandardMaterial({
              color: colorHex,
              emissive: 0x0066ff,
              emissiveIntensity: 0.35,
              roughness: 0.15,
              metalness: 0.85,
              transparent: true,
              opacity: transparency * 0.85,
              blending: THREE.NormalBlending
            });
          }
        });

        scene.add(root);
        buildNeuralNetworkOverGLB(scene);
      },
      undefined,
      (err) => {
        console.warn('GLB Load Error, falling back to parametric geometry:', err);
      }
    );
  }

  function buildNeuralNetworkOverGLB(scene: THREE.Scene) {
    const group = new THREE.Group();
    corticalNetworkGroupRef.current = group;

    const sphereGeo = new THREE.SphereGeometry(0.16, 8, 8);
    const linePositions: number[] = [];
    const lineColors: number[] = [];
    const nodePositions: THREE.Vector3[] = [];

    Object.values(gltfOriginalCentersRef.current).forEach((center) => {
      for (let i = 0; i < 24; i++) {
        const p = center.clone().add(new THREE.Vector3(
          (Math.random() - 0.5) * 4.0,
          (Math.random() - 0.5) * 3.5,
          (Math.random() - 0.5) * 4.0
        ));
        nodePositions.push(p);

        const nodeMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
        const nodeMesh = new THREE.Mesh(sphereGeo, nodeMat);
        nodeMesh.position.copy(p);
        group.add(nodeMesh);
      }
    });

    for (let i = 0; i < nodePositions.length; i++) {
      for (let j = i + 1; j < nodePositions.length; j++) {
        const dist = nodePositions[i].distanceTo(nodePositions[j]);
        if (dist < 4.2 && Math.random() < 0.28) {
          linePositions.push(nodePositions[i].x, nodePositions[i].y, nodePositions[i].z);
          linePositions.push(nodePositions[j].x, nodePositions[j].y, nodePositions[j].z);
          lineColors.push(0, 0.95, 1, 0, 0.95, 1);
        }
      }
    }

    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    lineGeo.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3));

    const lineMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending
    });

    group.add(new THREE.LineSegments(lineGeo, lineMat));
    scene.add(group);

    // Active Impulse Particles
    const impGeo = new THREE.BufferGeometry();
    const impPos = new Float32Array(600 * 3);
    const impCol = new Float32Array(600 * 3);
    impGeo.setAttribute('position', new THREE.BufferAttribute(impPos, 3));
    impGeo.setAttribute('color', new THREE.BufferAttribute(impCol, 3));

    const impMat = new THREE.PointsMaterial({
      size: 0.7,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending
    });

    const impulseParticles = new THREE.Points(impGeo, impMat);
    activeImpulsesRef.current = impulseParticles;
    scene.add(impulseParticles);
  }

  function buildNanoParticleCloud(scene: THREE.Scene) {
    const particleCount = 3500;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const r = 10 + Math.random() * 45;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);

      const c = new THREE.Color().setHSL(0.54 + Math.random() * 0.1, 0.95, 0.65);
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }

    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.38,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(geo, mat);
    nanoParticlesRef.current = particles;
    scene.add(particles);
  }

  return (
    <div className="relative w-full h-full">
      <div ref={mountRef} className="w-full h-full" />
    </div>
  );
};
