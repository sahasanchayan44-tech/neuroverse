'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
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

// 3D Geometry definitions for all 20 anatomical structures
const MESH_DEFINITIONS: Record<string, { color: number; center: THREE.Vector3; scale: THREE.Vector3; shape: 'sphere' | 'cylinder' | 'torus' | 'cortex' }> = {
  frontal_lobe: { color: 0x00f0ff, center: new THREE.Vector3(0, 3.2, 4.0), scale: new THREE.Vector3(4.8, 3.6, 4.2), shape: 'cortex' },
  parietal_lobe: { color: 0x8a2be2, center: new THREE.Vector3(0, 5.5, -1.5), scale: new THREE.Vector3(4.5, 3.4, 3.8), shape: 'cortex' },
  temporal_lobe: { color: 0x00ff88, center: new THREE.Vector3(4.5, -0.6, 0.4), scale: new THREE.Vector3(3.2, 2.8, 4.5), shape: 'cortex' },
  occipital_lobe: { color: 0xffaa00, center: new THREE.Vector3(0, 2.4, -6.2), scale: new THREE.Vector3(4.0, 3.2, 3.5), shape: 'cortex' },
  cerebellum: { color: 0xff3366, center: new THREE.Vector3(0, -4.8, -5.2), scale: new THREE.Vector3(4.2, 3.0, 3.4), shape: 'sphere' },
  brain_stem: { color: 0x00d0ff, center: new THREE.Vector3(0, -5.2, -1.0), scale: new THREE.Vector3(1.6, 5.0, 1.8), shape: 'cylinder' },
  corpus_callosum: { color: 0xffffff, center: new THREE.Vector3(0, 2.0, 0.2), scale: new THREE.Vector3(1.8, 1.2, 4.0), shape: 'torus' },
  thalamus: { color: 0xffaa44, center: new THREE.Vector3(0, 1.2, -0.4), scale: new THREE.Vector3(2.2, 1.6, 2.2), shape: 'sphere' },
  hypothalamus: { color: 0xff00ff, center: new THREE.Vector3(0, -0.8, 1.2), scale: new THREE.Vector3(1.4, 1.2, 1.4), shape: 'sphere' },
  pituitary_gland: { color: 0xffff00, center: new THREE.Vector3(0, -2.4, 2.2), scale: new THREE.Vector3(0.8, 0.8, 0.8), shape: 'sphere' },
  pineal_gland: { color: 0xffd700, center: new THREE.Vector3(0, 0.6, -2.4), scale: new THREE.Vector3(0.7, 0.7, 0.7), shape: 'sphere' },
  amygdala: { color: 0xff007f, center: new THREE.Vector3(2.6, -1.2, 1.2), scale: new THREE.Vector3(1.2, 1.0, 1.2), shape: 'sphere' },
  hippocampus: { color: 0x00ffff, center: new THREE.Vector3(2.8, -0.8, -1.2), scale: new THREE.Vector3(1.4, 1.0, 2.8), shape: 'torus' },
  basal_ganglia: { color: 0xaa00ff, center: new THREE.Vector3(2.2, 0.8, 0.8), scale: new THREE.Vector3(2.4, 2.0, 2.4), shape: 'sphere' },
  pons: { color: 0x00ffcc, center: new THREE.Vector3(0, -4.0, -1.2), scale: new THREE.Vector3(2.0, 1.6, 1.8), shape: 'sphere' },
  medulla: { color: 0x0099ff, center: new THREE.Vector3(0, -6.8, -1.6), scale: new THREE.Vector3(1.4, 2.4, 1.4), shape: 'cylinder' },
  ventricles: { color: 0x33ccff, center: new THREE.Vector3(0, 1.8, -0.2), scale: new THREE.Vector3(2.8, 1.8, 3.6), shape: 'torus' },
  grey_matter: { color: 0x8080a0, center: new THREE.Vector3(0, 2.5, 0), scale: new THREE.Vector3(6.2, 4.8, 7.2), shape: 'cortex' },
  white_matter: { color: 0xe0e8ff, center: new THREE.Vector3(0, 1.8, 0), scale: new THREE.Vector3(5.0, 3.8, 5.8), shape: 'cortex' },
  blood_vessels: { color: 0xff0044, center: new THREE.Vector3(0, -0.5, 0), scale: new THREE.Vector3(4.5, 4.0, 5.0), shape: 'torus' }
};

// Simulation mapping to active structures
const SIMULATION_MAP: Record<string, string[]> = {
  Thinking: ['frontal_lobe', 'parietal_lobe', 'thalamus'],
  Memory: ['hippocampus', 'temporal_lobe', 'frontal_lobe'],
  Speech: ['frontal_lobe', 'temporal_lobe'],
  Vision: ['occipital_lobe', 'thalamus', 'parietal_lobe'],
  Touch: ['parietal_lobe', 'thalamus'],
  Emotion: ['amygdala', 'hypothalamus', 'hippocampus'],
  Fear: ['amygdala', 'hypothalamus', 'brain_stem'],
  Walking: ['cerebellum', 'frontal_lobe', 'basal_ganglia', 'brain_stem'],
  Learning: ['hippocampus', 'frontal_lobe', 'parietal_lobe'],
  Hearing: ['temporal_lobe', 'thalamus'],
  'Motor Control': ['basal_ganglia', 'cerebellum', 'frontal_lobe']
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

  const meshesRef = useRef<Record<string, THREE.Mesh>>({});
  const particlesRef = useRef<THREE.Points | null>(null);
  const neuronsGroupRef = useRef<THREE.Group | null>(null);
  const impulseParticlesRef = useRef<THREE.Points | null>(null);

  const mousePosRef = useRef<THREE.Vector2>(new THREE.Vector2(0, 0));
  const targetCamPosRef = useRef<THREE.Vector3 | null>(null);
  const targetCamLookRef = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 0));
  const impulsesRef = useRef<Array<{ start: THREE.Vector3; end: THREE.Vector3; t: number; speed: number; color: THREE.Color }>>([]);

  useEffect(() => {
    if (!mountRef.current) return;

    // 1. Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x000000);
    scene.fog = new THREE.FogExp2(0x000511, 0.015);

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(45, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    camera.position.set(0, 8, 32);
    cameraRef.current = camera;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    renderer.localClippingEnabled = true;
    rendererRef.current = renderer;

    mountRef.current.appendChild(renderer.domElement);

    // 4. Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.6;
    controls.maxDistance = 65;
    controls.minDistance = 4;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.6;
    controlsRef.current = controls;

    // 5. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const cyanDirLight = new THREE.DirectionalLight(0x00f0ff, 2.0);
    cyanDirLight.position.set(20, 20, 20);
    scene.add(cyanDirLight);

    const purpleDirLight = new THREE.DirectionalLight(0x8a2be2, 1.5);
    purpleDirLight.position.set(-20, -15, -20);
    scene.add(purpleDirLight);

    // 6. Build Igloo-Style Floating Nano Particle Field (Thousands of swirly particles)
    buildNanoParticles(scene);

    // 7. Build Anatomical Brain Meshes
    buildBrainMeshes(scene);

    // 8. Build Neural Network & Action Potential Particles
    buildNeuronsAndImpulses(scene);

    // Interaction Raycasting
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handlePointerMove = (e: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      mousePosRef.current.copy(mouse);

      raycaster.setFromCamera(mouse, camera);
      const activeMeshes = Object.values(meshesRef.current);
      const intersects = raycaster.intersectObjects(activeMeshes);

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
      const activeMeshes = Object.values(meshesRef.current);
      const intersects = raycaster.intersectObjects(activeMeshes);

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

    // Animation Loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta() * timeScale;
      const elapsedTime = clock.getElapsedTime() * timeScale;

      controls.update();

      // Camera lerp targeting selected structure
      if (targetCamPosRef.current) {
        camera.position.lerp(targetCamPosRef.current, 0.05);
        controls.target.lerp(targetCamLookRef.current, 0.05);

        if (camera.position.distanceTo(targetCamPosRef.current) < 0.2) {
          targetCamPosRef.current = null;
        }
      }

      // 1. Swirl Floating Nano Particles (React slightly to cursor & continuous motion)
      if (particlesRef.current) {
        const pos = particlesRef.current.geometry.attributes.position.array as Float32Array;
        for (let i = 0; i < 3000; i++) {
          const idx = i * 3;
          pos[idx + 1] += Math.sin(elapsedTime + pos[idx]) * 0.01;
          pos[idx] += Math.cos(elapsedTime * 0.5 + pos[idx + 2]) * 0.008;

          // Mouse influence
          pos[idx] += mousePosRef.current.x * 0.02;
          pos[idx + 1] += mousePosRef.current.y * 0.02;
        }
        particlesRef.current.geometry.attributes.position.needsUpdate = true;
        particlesRef.current.rotation.y += 0.0005;
      }

      // 2. Animate Brain Structure Meshes & Exploded View Lerping
      const activeSimStructures = activeSimulation ? (SIMULATION_MAP[activeSimulation] || []) : [];

      Object.entries(meshesRef.current).forEach(([id, mesh]) => {
        const def = MESH_DEFINITIONS[id];
        if (!def) return;

        let targetPos = def.center.clone();

        if (viewMode === 'exploded') {
          const dir = def.center.clone().normalize();
          targetPos.add(dir.multiplyScalar(4.0));
        }

        mesh.position.lerp(targetPos, 0.06);

        const isSelected = selectedStructure && selectedStructure.id === id;
        const isSimActive = activeSimStructures.includes(id);
        const mat = mesh.material as THREE.MeshStandardMaterial;

        // Visibility based on layer toggles
        if (id === 'grey_matter') mesh.visible = layers.greyMatter;
        else if (id === 'white_matter') mesh.visible = layers.whiteMatter;
        else if (id === 'blood_vessels') mesh.visible = layers.bloodVessels;
        else mesh.visible = true;

        if (isSimActive || isSelected) {
          mat.color.setHex(def.color);
          mat.emissive.setHex(def.color);
          mat.emissiveIntensity = 1.2 + Math.sin(elapsedTime * 6) * 0.4;
          mesh.scale.setScalar(1.0 + Math.sin(elapsedTime * 4) * 0.04);
        } else {
          mat.color.setHex(def.color);
          mat.emissive.setHex(def.color);
          mat.emissiveIntensity = 0.25;
          mesh.scale.setScalar(1.0);
        }

        if (viewMode === 'wireframe') {
          mat.wireframe = true;
          mat.opacity = 0.6;
        } else if (viewMode === 'xray') {
          mat.wireframe = true;
          mat.opacity = 0.2;
        } else {
          mat.wireframe = false;
          mat.opacity = transparency;
        }
      });

      // 3. Animate Action Potential Impulse Particles along pathways
      if (impulseParticlesRef.current) {
        if (Math.random() < 0.4 * timeScale) {
          const keys = Object.keys(MESH_DEFINITIONS);
          const k1 = keys[Math.floor(Math.random() * keys.length)];
          const k2 = keys[Math.floor(Math.random() * keys.length)];
          if (k1 !== k2) {
            impulsesRef.current.push({
              start: MESH_DEFINITIONS[k1].center,
              end: MESH_DEFINITIONS[k2].center,
              t: 0,
              speed: 0.02 + Math.random() * 0.02,
              color: new THREE.Color(MESH_DEFINITIONS[k1].color)
            });
          }
        }

        const positions = impulseParticlesRef.current.geometry.attributes.position.array as Float32Array;
        const colors = impulseParticlesRef.current.geometry.attributes.color.array as Float32Array;

        for (let i = impulsesRef.current.length - 1; i >= 0; i--) {
          const imp = impulsesRef.current[i];
          imp.t += imp.speed * timeScale;
          if (imp.t >= 1.0) {
            impulsesRef.current.splice(i, 1);
          }
        }

        for (let i = 0; i < 500; i++) {
          if (i < impulsesRef.current.length) {
            const imp = impulsesRef.current[i];
            const p = new THREE.Vector3().lerpVectors(imp.start, imp.end, imp.t);
            positions[i * 3] = p.x;
            positions[i * 3 + 1] = p.y;
            positions[i * 3 + 2] = p.z;

            colors[i * 3] = imp.color.r;
            colors[i * 3 + 1] = imp.color.g;
            colors[i * 3 + 2] = imp.color.b;
          } else {
            positions[i * 3] = 9999;
            positions[i * 3 + 1] = 9999;
            positions[i * 3 + 2] = 9999;
          }
        }

        impulseParticlesRef.current.geometry.attributes.position.needsUpdate = true;
        impulseParticlesRef.current.geometry.attributes.color.needsUpdate = true;
      }

      // 4. Neurons Group visibility
      if (neuronsGroupRef.current) {
        neuronsGroupRef.current.visible = layers.neurons;
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

  // Handle selected structure camera targeting
  useEffect(() => {
    if (selectedStructure && cameraRef.current && controlsRef.current) {
      const def = MESH_DEFINITIONS[selectedStructure.id];
      if (def) {
        targetCamLookRef.current.copy(def.center);
        targetCamPosRef.current = def.center.clone().add(new THREE.Vector3(0, 2, 14));
      }
    }
  }, [selectedStructure]);

  function buildNanoParticles(scene: THREE.Scene) {
    const particleCount = 3000;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const r = 12 + Math.random() * 45;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);

      const c = new THREE.Color().setHSL(0.55 + Math.random() * 0.15, 0.9, 0.7);
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }

    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.35,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(geo, mat);
    particlesRef.current = particles;
    scene.add(particles);
  }

  function buildBrainMeshes(scene: THREE.Scene) {
    Object.entries(MESH_DEFINITIONS).forEach(([id, def]) => {
      let geo: THREE.BufferGeometry;

      if (def.shape === 'sphere') {
        geo = new THREE.SphereGeometry(1, 28, 28);
      } else if (def.shape === 'cylinder') {
        geo = new THREE.CylinderGeometry(0.8, 0.6, 2, 24);
      } else if (def.shape === 'torus') {
        geo = new THREE.TorusGeometry(1.2, 0.4, 16, 32);
      } else {
        geo = new THREE.SphereGeometry(1, 28, 28);
        const pos = geo.attributes.position;
        for (let i = 0; i < pos.count; i++) {
          let x = pos.getX(i);
          let y = pos.getY(i);
          let z = pos.getZ(i);
          const noise = Math.sin(x * 3) * Math.cos(y * 3) * 0.15;
          pos.setXYZ(i, x + noise, y + noise, z + noise);
        }
      }

      const mat = new THREE.MeshStandardMaterial({
        color: def.color,
        emissive: def.color,
        emissiveIntensity: 0.3,
        roughness: 0.2,
        metalness: 0.8,
        transparent: true,
        opacity: transparency
      });

      const mesh = new THREE.Mesh(geo, mat);
      mesh.scale.copy(def.scale);
      mesh.position.copy(def.center);
      mesh.userData = { structureId: id };

      meshesRef.current[id] = mesh;
      scene.add(mesh);
    });
  }

  function buildNeuronsAndImpulses(scene: THREE.Scene) {
    const group = new THREE.Group();
    neuronsGroupRef.current = group;

    const sphereGeo = new THREE.SphereGeometry(0.2, 10, 10);
    const linePositions: number[] = [];
    const lineColors: number[] = [];
    const nodePositions: THREE.Vector3[] = [];

    Object.values(MESH_DEFINITIONS).forEach(def => {
      for (let i = 0; i < 20; i++) {
        const p = def.center.clone().add(new THREE.Vector3(
          (Math.random() - 0.5) * def.scale.x * 1.2,
          (Math.random() - 0.5) * def.scale.y * 1.2,
          (Math.random() - 0.5) * def.scale.z * 1.2
        ));
        nodePositions.push(p);

        const nodeMat = new THREE.MeshBasicMaterial({ color: def.color });
        const nodeMesh = new THREE.Mesh(sphereGeo, nodeMat);
        nodeMesh.position.copy(p);
        group.add(nodeMesh);
      }
    });

    for (let i = 0; i < nodePositions.length; i++) {
      for (let j = i + 1; j < nodePositions.length; j++) {
        const dist = nodePositions[i].distanceTo(nodePositions[j]);
        if (dist < 4.2 && Math.random() < 0.25) {
          linePositions.push(nodePositions[i].x, nodePositions[i].y, nodePositions[i].z);
          linePositions.push(nodePositions[j].x, nodePositions[j].y, nodePositions[j].z);
          lineColors.push(0, 0.9, 1, 0, 0.9, 1);
        }
      }
    }

    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    lineGeo.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3));

    const lineMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending
    });

    group.add(new THREE.LineSegments(lineGeo, lineMat));
    scene.add(group);

    // Action Potential Particles
    const impGeo = new THREE.BufferGeometry();
    const impPos = new Float32Array(500 * 3);
    const impCol = new Float32Array(500 * 3);
    impGeo.setAttribute('position', new THREE.BufferAttribute(impPos, 3));
    impGeo.setAttribute('color', new THREE.BufferAttribute(impCol, 3));

    const impMat = new THREE.PointsMaterial({
      size: 0.65,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending
    });

    const impulseParticles = new THREE.Points(impGeo, impMat);
    impulseParticlesRef.current = impulseParticles;
    scene.add(impulseParticles);
  }

  return (
    <div className="relative w-full h-full">
      <div ref={mountRef} className="w-full h-full" />
    </div>
  );
};
