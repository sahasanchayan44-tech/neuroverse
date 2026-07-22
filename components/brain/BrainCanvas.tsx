'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { BrainStructureDetail } from '@/data/brainData';
import { LayerState, ViewMode } from '@/hooks/useBrainState';
import { MeshHighlightManager } from './MeshHighlightManager';

interface BrainCanvasProps {
  structures: BrainStructureDetail[];
  selectedStructure: BrainStructureDetail | null;
  activeSimulation: string | null;
  viewMode: ViewMode;
  layers: LayerState;
  transparency: number;
  timeScale: number;
  onSelectStructure: (s: BrainStructureDetail | null) => void;
  onHoverStructure: (name: string | null) => void;
}

// Embedded Anatomical Definitions for Real Human Brain Structures
interface EmbeddedPartDef {
  name: string;
  category: 'outer_cortex' | 'embedded_core' | 'embedded_limbic' | 'embedded_stem' | 'cerebellum';
  center: THREE.Vector3;
  scale: THREE.Vector3;
  colorHex: number;
  isBilateral: boolean;
}

const EMBEDDED_BRAIN_PARTS: Record<string, EmbeddedPartDef> = {
  // 1. Outer Cortical Lobes (Forming the outer human brain surface)
  frontal_lobe: { name: 'Frontal Lobe', category: 'outer_cortex', center: new THREE.Vector3(0, 2.6, 3.2), scale: new THREE.Vector3(5.2, 4.0, 4.4), colorHex: 0x00f0ff, isBilateral: true },
  parietal_lobe: { name: 'Parietal Lobe', category: 'outer_cortex', center: new THREE.Vector3(0, 5.0, -1.8), scale: new THREE.Vector3(5.0, 3.8, 4.2), colorHex: 0x00d0ff, isBilateral: true },
  temporal_lobe: { name: 'Temporal Lobe', category: 'outer_cortex', center: new THREE.Vector3(4.2, -0.8, 0.4), scale: new THREE.Vector3(3.5, 3.0, 4.8), colorHex: 0x00e4ff, isBilateral: true },
  occipital_lobe: { name: 'Occipital Lobe', category: 'outer_cortex', center: new THREE.Vector3(0, 2.0, -5.8), scale: new THREE.Vector3(4.5, 3.6, 3.8), colorHex: 0x00c8ff, isBilateral: true },

  // 2. Cerebellum & Brain Stem Stalk
  cerebellum: { name: 'Cerebellum', category: 'cerebellum', center: new THREE.Vector3(0, -4.5, -4.8), scale: new THREE.Vector3(4.4, 3.2, 3.6), colorHex: 0x00aaff, isBilateral: false },
  brain_stem: { name: 'Brain Stem', category: 'embedded_stem', center: new THREE.Vector3(0, -5.5, -1.0), scale: new THREE.Vector3(1.5, 5.2, 1.8), colorHex: 0x00d0ff, isBilateral: false },
  pons: { name: 'Pons', category: 'embedded_stem', center: new THREE.Vector3(0, -4.0, -1.2), scale: new THREE.Vector3(2.0, 1.6, 1.8), colorHex: 0x00d0ff, isBilateral: false },
  medulla: { name: 'Medulla', category: 'embedded_stem', center: new THREE.Vector3(0, -6.8, -1.6), scale: new THREE.Vector3(1.4, 2.4, 1.4), colorHex: 0x00b8ff, isBilateral: false },

  // 3. Embedded Deep Internal Brain Organs (Seated inside the core)
  corpus_callosum: { name: 'Corpus Callosum', category: 'embedded_core', center: new THREE.Vector3(0, 1.8, 0.2), scale: new THREE.Vector3(1.6, 1.2, 4.2), colorHex: 0xffffff, isBilateral: false },
  thalamus: { name: 'Thalamus', category: 'embedded_core', center: new THREE.Vector3(0, 1.0, -0.4), scale: new THREE.Vector3(2.4, 1.8, 2.4), colorHex: 0xffaa44, isBilateral: false },
  hypothalamus: { name: 'Hypothalamus', category: 'embedded_limbic', center: new THREE.Vector3(0, -0.8, 1.0), scale: new THREE.Vector3(1.4, 1.2, 1.4), colorHex: 0xff00ff, isBilateral: false },
  pituitary_gland: { name: 'Pituitary Gland', category: 'embedded_limbic', center: new THREE.Vector3(0, -2.4, 2.0), scale: new THREE.Vector3(0.8, 0.8, 0.8), colorHex: 0xffff00, isBilateral: false },
  pineal_gland: { name: 'Pineal Gland', category: 'embedded_limbic', center: new THREE.Vector3(0, 0.6, -2.2), scale: new THREE.Vector3(0.7, 0.7, 0.7), colorHex: 0xffd700, isBilateral: false },
  amygdala: { name: 'Amygdala', category: 'embedded_limbic', center: new THREE.Vector3(2.4, -1.2, 1.0), scale: new THREE.Vector3(1.2, 1.0, 1.2), colorHex: 0xff007f, isBilateral: true },
  hippocampus: { name: 'Hippocampus', category: 'embedded_limbic', center: new THREE.Vector3(2.6, -0.8, -1.2), scale: new THREE.Vector3(1.4, 1.0, 2.8), colorHex: 0x00ffff, isBilateral: true },
  basal_ganglia: { name: 'Basal Ganglia', category: 'embedded_core', center: new THREE.Vector3(2.2, 0.8, 0.6), scale: new THREE.Vector3(2.4, 2.0, 2.4), colorHex: 0xaa00ff, isBilateral: true },
  ventricles: { name: 'Ventricles', category: 'embedded_core', center: new THREE.Vector3(0, 1.8, -0.2), scale: new THREE.Vector3(2.8, 1.8, 3.6), colorHex: 0x33ccff, isBilateral: false }
};

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

  const partMeshesRef = useRef<Record<string, THREE.Mesh>>({});
  const nanoParticlesRef = useRef<THREE.Points | null>(null);
  const activeImpulsesRef = useRef<THREE.Points | null>(null);
  const neuralNetworkGroupRef = useRef<THREE.Group | null>(null);
  const highlightManagerRef = useRef<MeshHighlightManager | null>(null);

  const mousePosRef = useRef<THREE.Vector2>(new THREE.Vector2(0, 0));
  const targetCamPosRef = useRef<THREE.Vector3 | null>(null);
  const targetCamLookRef = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 0));
  const impulsesDataRef = useRef<Array<{ start: THREE.Vector3; end: THREE.Vector3; t: number; speed: number }>>([]);

  // Initialize modular mesh highlighter instance
  useEffect(() => {
    highlightManagerRef.current = new MeshHighlightManager({
      color: 0x00f0ff,
      emissiveIntensity: 1.8,
      pulse: true,
      enableOutline: true,
      transitionSpeed: 0.12,
    });
    return () => {
      highlightManagerRef.current?.dispose();
    };
  }, []);

  // Synchronize active mesh selection with MeshHighlightManager
  useEffect(() => {
    if (!highlightManagerRef.current) return;
    if (selectedStructure && partMeshesRef.current[selectedStructure.id]) {
      const mesh = partMeshesRef.current[selectedStructure.id];
      const def = EMBEDDED_BRAIN_PARTS[selectedStructure.id];
      const highlightHex = def ? def.colorHex : 0x00f0ff;
      highlightManagerRef.current.selectMesh(mesh, {
        color: highlightHex,
        emissiveColor: highlightHex,
        emissiveIntensity: 1.8,
        pulse: true,
        enableOutline: true,
      });
    } else {
      highlightManagerRef.current.deselect();
    }
  }, [selectedStructure]);

  useEffect(() => {
    if (!mountRef.current) return;

    // 1. Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x000208);
    scene.fog = new THREE.FogExp2(0x000511, 0.012);

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(45, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    camera.position.set(0, 6, 32);
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

    // 7. Build Real Human Brain Geometry with Embedded Internal Organs
    buildEmbeddedHumanBrain(scene);

    // 8. Build Whole-Brain Neural Network (Axon fibers linking embedded parts)
    buildEmbeddedNeuralNetwork(scene);

    // Interaction Raycaster
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handlePointerMove = (e: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      mousePosRef.current.copy(mouse);

      raycaster.setFromCamera(mouse, camera);
      const meshes = Object.values(partMeshesRef.current);
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
      const meshes = Object.values(partMeshesRef.current);
      const intersects = raycaster.intersectObjects(meshes);

      if (intersects.length > 0) {
        const hitMesh = intersects[0].object as THREE.Mesh;
        const structId = hitMesh.userData.structureId;
        const structObj = structures.find(s => s.id === structId);
        if (structObj) {
          onSelectStructure(structObj);
        }
      } else {
        // Deselect when clicking empty background space
        onSelectStructure(null);
      }
    };

    const domEl = renderer.domElement;
    domEl.addEventListener('mousemove', handlePointerMove);
    domEl.addEventListener('click', handleClick);

    // Render Loop
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

      // Update modular mesh highlighting, color transition lerps, and outline pulsing
      if (highlightManagerRef.current) {
        highlightManagerRef.current.update(delta, elapsedTime);
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

      // 2. Animate Embedded Brain Structures & Exploded View Lerping
      const activeSimStructures = activeSimulation ? (SIMULATION_MAP[activeSimulation] || []) : [];
      const hasEmbeddedSelection = selectedStructure && EMBEDDED_BRAIN_PARTS[selectedStructure.id]?.category !== 'outer_cortex';

      Object.entries(partMeshesRef.current).forEach(([id, mesh]) => {
        const def = EMBEDDED_BRAIN_PARTS[id];
        if (!def) return;

        let targetPos = def.center.clone();

        if (viewMode === 'exploded') {
          const dir = def.center.clone().normalize();
          targetPos.add(dir.multiplyScalar(4.2));
        }

        mesh.position.lerp(targetPos, 0.06);

        const isSelected = selectedStructure && selectedStructure.id === id;
        const isSimActive = activeSimStructures.includes(id);
        const mat = mesh.material as THREE.MeshStandardMaterial;

        // When an embedded internal organ is selected, fade outer cortex so the inner organ shines through!
        if (hasEmbeddedSelection && def.category === 'outer_cortex' && !isSelected && !isSimActive) {
          mat.opacity = 0.12;
        } else {
          mat.opacity = transparency * (def.category === 'outer_cortex' ? 0.75 : 0.95);
        }

        if (isSimActive) {
          mat.color.setHex(def.colorHex);
          mat.emissive.setHex(def.colorHex);
          mat.emissiveIntensity = 1.5 + Math.sin(elapsedTime * 6) * 0.5;
          mesh.scale.setScalar(1.05 + Math.sin(elapsedTime * 4) * 0.04);
        } else if (isSelected) {
          mesh.scale.setScalar(1.05 + Math.sin(elapsedTime * 4) * 0.04);
        } else {
          // Leave all non-selected meshes unchanged in their base state!
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
        }
      });

      // 3. Action Potential Impulse Particle Travel between embedded parts
      if (activeImpulsesRef.current) {
        if (Math.random() < 0.5 * timeScale) {
          const keys = Object.keys(EMBEDDED_BRAIN_PARTS);
          const k1 = keys[Math.floor(Math.random() * keys.length)];
          const k2 = keys[Math.floor(Math.random() * keys.length)];
          if (k1 !== k2) {
            const p1 = EMBEDDED_BRAIN_PARTS[k1].center;
            const p2 = EMBEDDED_BRAIN_PARTS[k2].center;
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

      if (neuralNetworkGroupRef.current) {
        neuralNetworkGroupRef.current.visible = layers.neurons;
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
      const def = EMBEDDED_BRAIN_PARTS[selectedStructure.id];
      if (def) {
        targetCamLookRef.current.copy(def.center);
        targetCamPosRef.current = def.center.clone().add(new THREE.Vector3(0, 2, 14));
      }
    }
  }, [selectedStructure]);

  // Build Real Human Brain with Embedded Subcortical Organs
  function buildEmbeddedHumanBrain(scene: THREE.Scene) {
    Object.entries(EMBEDDED_BRAIN_PARTS).forEach(([id, def]) => {
      let geo: THREE.BufferGeometry;

      if (def.category === 'outer_cortex') {
        // High-detail cortical lobe mesh with gyri/sulci folds
        geo = new THREE.SphereGeometry(1, 36, 36);
        const pos = geo.attributes.position;
        for (let i = 0; i < pos.count; i++) {
          let x = pos.getX(i);
          let y = pos.getY(i);
          let z = pos.getZ(i);

          const gyri = Math.sin(x * 2.8) * Math.cos(y * 2.8) * Math.sin(z * 2.8) * 0.28;
          const sulci = Math.sin(x * 4.8) * 0.08;

          pos.setXYZ(i, x + gyri + sulci, y + gyri, z + gyri + sulci);
        }
        geo.computeVertexNormals();
      } else if (def.category === 'cerebellum') {
        // Cerebellar folia folds
        geo = new THREE.SphereGeometry(1, 32, 32);
        const pos = geo.attributes.position;
        for (let i = 0; i < pos.count; i++) {
          let x = pos.getX(i);
          let y = pos.getY(i);
          let z = pos.getZ(i);
          const folia = Math.sin(y * 12.0) * 0.12;
          pos.setXYZ(i, x + folia, y, z + folia);
        }
        geo.computeVertexNormals();
      } else if (def.category === 'embedded_stem') {
        geo = new THREE.CylinderGeometry(0.8, 0.6, 2, 24);
      } else if (id === 'corpus_callosum' || id === 'hippocampus' || id === 'ventricles') {
        // Curved inner bridge/torus geometry
        geo = new THREE.TorusGeometry(1.2, 0.4, 16, 32);
      } else {
        // Embedded inner organ (Thalamus, Amygdala, Hypothalamus, Pituitary, Pineal)
        geo = new THREE.SphereGeometry(1, 24, 24);
      }

      // Translucent Emissive Bio-Holographic Shader Material
      const mat = new THREE.MeshStandardMaterial({
        color: def.colorHex,
        emissive: def.category === 'outer_cortex' ? 0x0066ff : def.colorHex,
        emissiveIntensity: def.category === 'outer_cortex' ? 0.3 : 0.6,
        roughness: 0.15,
        metalness: 0.85,
        transparent: true,
        opacity: transparency * (def.category === 'outer_cortex' ? 0.75 : 0.95),
        blending: THREE.NormalBlending
      });

      const mesh = new THREE.Mesh(geo, mat);
      mesh.scale.copy(def.scale);
      mesh.position.copy(def.center);
      mesh.userData = { structureId: id };

      partMeshesRef.current[id] = mesh;
      scene.add(mesh);
    });
  }

  // Build Whole-Brain Neural Network bridging embedded organs to cortical lobes
  function buildEmbeddedNeuralNetwork(scene: THREE.Scene) {
    const group = new THREE.Group();
    neuralNetworkGroupRef.current = group;

    const sphereGeo = new THREE.SphereGeometry(0.16, 8, 8);
    const linePositions: number[] = [];
    const lineColors: number[] = [];
    const nodePositions: THREE.Vector3[] = [];

    // Distribute neural nodes organically across both outer cortex and embedded deep organs
    Object.values(EMBEDDED_BRAIN_PARTS).forEach(def => {
      for (let i = 0; i < 26; i++) {
        const p = def.center.clone().add(new THREE.Vector3(
          (Math.random() - 0.5) * def.scale.x * 1.1,
          (Math.random() - 0.5) * def.scale.y * 1.1,
          (Math.random() - 0.5) * def.scale.z * 1.1
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
        if (dist < 4.5 && Math.random() < 0.28) {
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
