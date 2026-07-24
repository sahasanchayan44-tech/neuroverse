'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { BrainStructureDetail } from '@/data/brainData';
import { LayerState, ViewMode } from '@/hooks/useBrainState';
import { MeshHighlightManager } from './MeshHighlightManager';
import { CinematicCameraController } from './CinematicCameraController';
import { NeuralPathwaySystem } from './NeuralPathway';
import { VascularSystem } from './VascularSystem';
import { BrainMeshLabelOverlay } from './BrainMeshLabelOverlay';

interface BrainCanvasProps {
  structures: BrainStructureDetail[];
  selectedStructure: BrainStructureDetail | null;
  activeSimulation: string | null;
  selectedDisease?: string | null;
  viewMode: ViewMode;
  layers: LayerState;
  transparency: number;
  timeScale: number;
  searchQuery?: string;
  hoveredStructureName?: string | null;
  onSelectStructure: (s: BrainStructureDetail | null) => void;
  onHoverStructure: (name: string | null) => void;
}

const DISEASE_3D_TARGETS: Record<string, string[]> = {
  alzheimers: ['hippocampus', 'temporal_lobe', 'parietal_lobe', 'frontal_lobe'],
  parkinsons: ['basal_ganglia', 'brain_stem', 'pons'],
  glioblastoma: ['temporal_lobe', 'frontal_lobe', 'parietal_lobe'],
  ischemic_stroke: ['parietal_lobe', 'frontal_lobe', 'basal_ganglia'],
  hemorrhagic_stroke: ['basal_ganglia', 'ventricles', 'thalamus'],
  temporal_lobe_epilepsy: ['hippocampus', 'amygdala', 'temporal_lobe'],
  multiple_sclerosis: ['corpus_callosum', 'brain_stem'],
  meningitis: ['frontal_lobe', 'parietal_lobe', 'temporal_lobe', 'occipital_lobe'],
  encephalitis: ['temporal_lobe', 'hippocampus', 'amygdala'],
  brain_abscess: ['frontal_lobe', 'parietal_lobe'],
  tbi: ['frontal_lobe', 'temporal_lobe'],
  concussion: ['frontal_lobe', 'parietal_lobe'],
  major_depression: ['frontal_lobe', 'amygdala', 'hippocampus'],
  schizophrenia: ['frontal_lobe', 'temporal_lobe', 'thalamus', 'ventricles'],
  bipolar_disorder: ['amygdala', 'hippocampus', 'frontal_lobe'],
  als: ['frontal_lobe', 'brain_stem', 'medulla'],
  huntingtons: ['basal_ganglia', 'ventricles'],
  hydrocephalus: ['ventricles'],
  myasthenia_gravis: ['brain_stem'],
  insomnia: ['hypothalamus', 'thalamus', 'pineal_gland'],
  wernicke_korsakoff: ['thalamus', 'hypothalamus'],
  adhd: ['frontal_lobe', 'basal_ganglia'],
  autism_spectrum: ['amygdala', 'cerebellum', 'frontal_lobe']
};

function createCircleTexture(): THREE.Texture {
  if (typeof document === 'undefined') return new THREE.Texture();
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.4, 'rgba(0, 240, 255, 0.8)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(32, 32, 32, 0, Math.PI * 2);
    ctx.fill();
  }
  return new THREE.CanvasTexture(canvas);
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
  selectedDisease,
  viewMode,
  layers,
  transparency,
  timeScale,
  searchQuery,
  hoveredStructureName,
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
  const outerBrainShellGroupRef = useRef<THREE.Group | null>(null);
  const loadedBrainGroupRef = useRef<THREE.Group | null>(null);
  const highlightManagerRef = useRef<MeshHighlightManager | null>(null);
  const camControllerRef = useRef<CinematicCameraController | null>(null);
  const neuralPathwaySystemRef = useRef<NeuralPathwaySystem | null>(null);
  const arterySystemRef = useRef<VascularSystem | null>(null);
  const veinSystemRef = useRef<VascularSystem | null>(null);
  const capillarySystemRef = useRef<VascularSystem | null>(null);

  const mousePosRef = useRef<THREE.Vector2>(new THREE.Vector2(0, 0));
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

  // Synchronize active mesh selection with dynamic material updates & CinematicCameraController
  useEffect(() => {
    const selectedId = selectedStructure?.id || null;
    const meshes = Object.entries(partMeshesRef.current);

    meshes.forEach(([structId, mesh]) => {
      if (!(mesh instanceof THREE.Mesh)) return;
      const isSelected = selectedId === structId;
      const mat = mesh.material as THREE.MeshStandardMaterial;

      if (mat) {
        if (isSelected) {
          // Selected mesh: bright neon cyan color with high emissive intensity
          mat.color.setHex(0x00f0ff);
          mat.emissive.setHex(0x00f0ff);
          mat.emissiveIntensity = 2.2;
          mat.opacity = 0.98;
          mat.transparent = true;
        } else if (selectedId) {
          // Unselected meshes when one structure is selected: drop back to lower opacity & lower emissive state
          mat.color.setHex(0x0066aa);
          mat.emissive.setHex(0x002255);
          mat.emissiveIntensity = 0.15;
          mat.opacity = transparency * 0.25;
          mat.transparent = true;
        } else {
          // Default unselected state when no structure is selected
          mat.color.setHex(0x00aaff);
          mat.emissive.setHex(0x0044bb);
          mat.emissiveIntensity = 0.45;
          mat.opacity = transparency * 0.40;
          mat.transparent = true;
        }
      }
    });

    if (highlightManagerRef.current) {
      if (selectedId && partMeshesRef.current[selectedId]) {
        const mesh = partMeshesRef.current[selectedId];
        highlightManagerRef.current.selectMesh(mesh, {
          color: 0x00f0ff,
          emissiveColor: 0x00f0ff,
          emissiveIntensity: 2.2,
          pulse: true,
          enableOutline: true,
        });
      } else {
        highlightManagerRef.current.deselect();
      }
    }

    // Always keep OrbitControls target locked at (0, 0, 0) so the brain model stays dead-centered
    if (controlsRef.current) {
      controlsRef.current.target.set(0, 0, 0);
    }
  }, [selectedStructure, transparency]);

  useEffect(() => {
    if (!mountRef.current) return;

    // 1. Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x000208);
    scene.fog = new THREE.FogExp2(0x000511, 0.012);

    // 2. Camera setup - Positioned perfectly level at center
    const camera = new THREE.PerspectiveCamera(45, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    camera.position.set(0, 0, 28);
    cameraRef.current = camera;

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.4;
    rendererRef.current = renderer;

    mountRef.current.appendChild(renderer.domElement);

    // 4. OrbitControls centered at 0 0 0
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0, 0);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxDistance = 65;
    controls.minDistance = 4;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.6;
    controlsRef.current = controls;

    // Initialize CinematicCameraController
    camControllerRef.current = new CinematicCameraController(camera, controls, {
      defaultPosition: new THREE.Vector3(0, 0, 28),
      defaultTarget: new THREE.Vector3(0, 0, 0),
    });

    // 5. Improved Multi-Directional Futuristic Lighting
    const ambientLight = new THREE.AmbientLight(0x0099ff, 2.0);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x00f0ff, 3.2);
    keyLight.position.set(25, 30, 25);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x0066ff, 2.6);
    rimLight.position.set(-25, -20, -25);
    scene.add(rimLight);

    const fillLight = new THREE.DirectionalLight(0xff00d0, 1.8);
    fillLight.position.set(0, -20, 20);
    scene.add(fillLight);

    // Catalog and load real .glb child meshes mapped to UI anatomy selections (no placeholder primitives)
    loadAndCatalogGLBBrainModel(scene);

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

      // Update Main Translucent Outer Brain Shell Enclosure Animation
      if (outerBrainShellGroupRef.current) {
        outerBrainShellGroupRef.current.visible = layers.greyMatter;

        const children = outerBrainShellGroupRef.current.children;
        children.forEach(child => {
          if (child instanceof THREE.Mesh) {
            if (child.material instanceof THREE.MeshStandardMaterial) {
              child.material.emissiveIntensity = 0.35 + Math.sin(elapsedTime * 2.0) * 0.15;
              child.material.opacity = transparency * (viewMode === 'exploded' ? 0.12 : viewMode === 'xray' ? 0.08 : 0.28);
            }
          }
        });

        // Separate outer hemispheres in exploded view mode
        if (children.length >= 4) {
          const lPos = viewMode === 'exploded' ? -6.5 : -2.2;
          const rPos = viewMode === 'exploded' ? 6.5 : 2.2;

          children[0].position.x = THREE.MathUtils.lerp(children[0].position.x, lPos, 0.06);
          children[1].position.x = THREE.MathUtils.lerp(children[1].position.x, lPos, 0.06);
          children[2].position.x = THREE.MathUtils.lerp(children[2].position.x, rPos, 0.06);
          children[3].position.x = THREE.MathUtils.lerp(children[3].position.x, rPos, 0.06);
        }
      }

      // Update loaded 3D Human Brain GLB Model Asset Animation & Layer Control
      if (loadedBrainGroupRef.current) {
        loadedBrainGroupRef.current.visible = layers.greyMatter;

        loadedBrainGroupRef.current.traverse((child) => {
          if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
            child.material.emissiveIntensity = 0.35 + Math.sin(elapsedTime * 2.0) * 0.15;
            child.material.opacity = transparency * (viewMode === 'exploded' ? 0.12 : viewMode === 'xray' ? 0.08 : 0.32);
            child.material.wireframe = (viewMode === 'wireframe' || viewMode === 'xray');
          }
        });
      }

      // Update modular mesh highlighting, color transition lerps, and outline pulsing
      if (highlightManagerRef.current) {
        highlightManagerRef.current.update(delta, elapsedTime);
      }

      // Update 5000+ Catmull-Rom GPU Animated Neural Pathways System
      if (neuralPathwaySystemRef.current) {
        neuralPathwaySystemRef.current.update(elapsedTime, timeScale);
        neuralPathwaySystemRef.current.group.visible = layers.neurons;
      }

      // Update Vascular Systems (ArterySystem, VeinSystem, CapillarySystem)
      arterySystemRef.current?.update(elapsedTime);
      veinSystemRef.current?.update(elapsedTime);
      capillarySystemRef.current?.update(elapsedTime);

      if (arterySystemRef.current) {
        arterySystemRef.current.setVisible(layers.bloodVessels && (layers.arteries ?? true));
      }
      if (veinSystemRef.current) {
        veinSystemRef.current.setVisible(layers.bloodVessels && (layers.veins ?? true));
      }
      if (capillarySystemRef.current) {
        capillarySystemRef.current.setVisible(layers.bloodVessels && (layers.capillaries ?? true));
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
      const activeDiseaseTargets = selectedDisease ? (DISEASE_3D_TARGETS[selectedDisease] || []) : [];
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
        const isDiseaseTarget = activeDiseaseTargets.includes(id);
        const mat = mesh.material as THREE.MeshStandardMaterial;

        // When an embedded internal organ is selected, fade outer cortex so the inner organ shines through!
        if (hasEmbeddedSelection && def.category === 'outer_cortex' && !isSelected && !isSimActive && !isDiseaseTarget) {
          mat.opacity = 0.12;
        } else {
          mat.opacity = transparency * (def.category === 'outer_cortex' ? 0.75 : 0.95);
        }

        if (isDiseaseTarget) {
          mat.color.setHex(0xff0044);
          mat.emissive.setHex(0xff0022);
          mat.emissiveIntensity = 2.2 + Math.sin(elapsedTime * 8) * 0.8;
          mesh.scale.setScalar(1.08 + Math.sin(elapsedTime * 6) * 0.05);
        } else if (isSimActive) {
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

        // Render styling for all 9 3D ViewModes
        if (viewMode === 'solid') {
          mat.wireframe = false;
          mat.opacity = 0.95;
          mat.roughness = 0.35;
          mat.metalness = 0.25;
        } else if (viewMode === 'wireframe') {
          mat.wireframe = true;
          mat.opacity = 0.55;
        } else if (viewMode === 'xray') {
          mat.wireframe = true;
          mat.opacity = 0.12;
          mat.color.setHex(0x00d0ff);
          mat.emissive.setHex(0x0088ff);
          mat.emissiveIntensity = 1.2;
        } else if (viewMode === 'synaptic_network') {
          mat.wireframe = false;
          mat.opacity = def.category === 'outer_cortex' ? 0.05 : 0.18;
        } else if (viewMode === 'vascular_tree') {
          mat.wireframe = false;
          mat.opacity = 0.04; // Fade brain tissue to isolate blood vessels
        } else if (viewMode === 'functional_mri') {
          mat.wireframe = false;
          mat.color.setHex(isSimActive ? 0xff3300 : 0x0044aa);
          mat.emissive.setHex(isSimActive ? 0xff2200 : 0x002266);
          mat.emissiveIntensity = 1.8 + Math.sin(elapsedTime * 6.0) * 0.6;
        } else if (viewMode === 'thermal_heat') {
          mat.wireframe = false;
          const thermalHex = 
            def.category === 'outer_cortex' ? 0xffaa00 :
            def.category === 'cerebellum' ? 0xaa00ff :
            def.category === 'embedded_stem' ? 0x0088ff : 0xff00aa;
          mat.color.setHex(thermalHex);
          mat.emissive.setHex(thermalHex);
          mat.emissiveIntensity = 1.2 + Math.sin(elapsedTime * 3.0) * 0.4;
        } else if (viewMode === 'eeg_density') {
          mat.wireframe = false;
          const eegHex = 
            id.includes('frontal') ? 0xff007f :
            id.includes('parietal') ? 0x00f0ff :
            id.includes('occipital') ? 0x00ff88 : 0xffdd00;
          mat.color.setHex(eegHex);
          mat.emissive.setHex(eegHex);
          mat.emissiveIntensity = 1.4 + Math.sin(elapsedTime * 10.0) * 0.6;
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
      camControllerRef.current?.dispose();
      neuralPathwaySystemRef.current?.dispose();
      if (mountRef.current && rendererRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }
    };
  }, [structures]);

  function getStructureIdFromFilename(filename: string): string {
    if (filename.startsWith('1.1.1') || filename.startsWith('1.1.2')) return 'frontal_lobe';
    if (filename.startsWith('1.1.3') || filename.startsWith('1.1.4')) return 'parietal_lobe';
    if (filename.startsWith('1.1.5') || filename.startsWith('1.1.6')) return 'temporal_lobe';
    if (filename.startsWith('1.1.7') || filename.startsWith('1.1.8') || filename.startsWith('1.1.9') || filename.startsWith('1.1.10')) return 'occipital_lobe';
    if (filename.startsWith('2.')) return 'cerebellum';
    if (filename.startsWith('3.1') || filename.startsWith('3.2')) return 'brain_stem';
    if (filename.startsWith('3.3')) return 'pons';
    if (filename.startsWith('3.4')) return 'medulla';
    if (filename.startsWith('4.1') || filename.startsWith('4.2')) return 'thalamus';
    if (filename.startsWith('4.3') || filename.startsWith('4.5')) return 'hypothalamus';
    if (filename.startsWith('4.6')) return 'pituitary_gland';
    if (filename.startsWith('4.7') || filename.startsWith('4.8')) return 'pineal_gland';
    if (filename.startsWith('5.1') || filename.startsWith('5.2')) return 'hippocampus';
    if (filename.startsWith('5.3') || filename.startsWith('5.4') || filename.startsWith('5.5')) return 'amygdala';
    if (filename.startsWith('6.')) return 'basal_ganglia';
    if (filename.startsWith('7.')) return 'ventricles';
    if (filename.startsWith('9.')) return 'corpus_callosum';
    return 'frontal_lobe';
  }

  // Load & Present Assembly of all 131 3D Brain Part GLB Models mapped to floating HUD lobe names
  function loadAll131BrainPartModels(scene: THREE.Scene) {
    const gltfLoader = new GLTFLoader();
    const partsGroup = new THREE.Group();
    partsGroup.name = 'all_131_brain_parts_assembly_group';

    fetch('/models/brain_parts_manifest.json')
      .then((res) => res.json())
      .then((manifest: Array<{ filename: string; url: string; vertexCount: number; faceCount: number }>) => {
        let loadedCount = 0;
        manifest.forEach((item) => {
          gltfLoader.load(
            item.url,
            (gltf) => {
              const partScene = gltf.scene;
              partScene.name = item.filename;
              const structId = getStructureIdFromFilename(item.filename);

              partScene.traverse((child) => {
                if (child instanceof THREE.Mesh) {
                  console.log("Mesh found:", child.name || item.filename);
                  child.userData.structureId = structId;
                  child.material = new THREE.MeshStandardMaterial({
                    color: 0x00aaff,
                    emissive: 0x0044bb,
                    emissiveIntensity: 0.45,
                    roughness: 0.1,
                    metalness: 0.85,
                    transparent: true,
                    opacity: transparency * 0.40,
                    side: THREE.DoubleSide,
                    blending: THREE.NormalBlending
                  });
                  if (!partMeshesRef.current[structId]) {
                    partMeshesRef.current[structId] = child;
                  }
                }
              });
              partsGroup.add(partScene);
              loadedCount++;

              if (loadedCount === manifest.length) {
                const box = new THREE.Box3().setFromObject(partsGroup);
                const center = box.getCenter(new THREE.Vector3());
                const size = box.getSize(new THREE.Vector3());
                const maxDim = Math.max(size.x, size.y, size.z);
                const scaleFactor = 13.5 / (maxDim || 1);

                // Position assembly group perfectly dead-centered at (0, 0, 0)
                partsGroup.position.sub(center.clone().multiplyScalar(scaleFactor));
                partsGroup.scale.setScalar(scaleFactor);

                loadedBrainGroupRef.current = partsGroup;
                scene.add(partsGroup);
                console.log(`🧠 [BrainCanvas] Successfully loaded and presented all ${manifest.length} individual 3D brain part models mapped to anatomical lobes!`);
              }
            },
            undefined,
            () => {}
          );
        });
      })
      .catch((err) => {
        console.warn('Notice: Brain parts manifest load notice:', err);
      });
  }

  // Load Real 3D Human Brain GLB Model Asset
  function loadHumanBrainGLBModel(scene: THREE.Scene) {
    const gltfLoader = new GLTFLoader();
    gltfLoader.load(
      '/models/brain.glb',
      (gltf) => {
        const model = gltf.scene;
        model.name = 'real_human_brain_3d_model';
        loadedBrainGroupRef.current = model;

        // Compute Bounding Box to scale and position model around internal circuits
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());

        const maxDim = Math.max(size.x, size.y, size.z);
        const scaleFactor = 15.0 / (maxDim || 1);

        model.position.sub(center.clone().multiplyScalar(scaleFactor));
        model.position.y += 0.5;
        model.scale.setScalar(scaleFactor);

        // Apply Translucent Bio-Holographic Shader Materials to all GLB sub-meshes
        model.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.material = new THREE.MeshStandardMaterial({
              color: 0x00f0ff,
              emissive: 0x0055ff,
              emissiveIntensity: 0.4,
              roughness: 0.15,
              metalness: 0.85,
              transparent: true,
              opacity: transparency * 0.35,
              side: THREE.DoubleSide,
              blending: THREE.NormalBlending
            });
          }
        });

        scene.add(model);
      },
      undefined,
      (err) => {
        console.warn('Notice: Real Human Brain GLB model asset notice:', err);
      }
    );
  }

  // Build Main Translucent Bio-Holographic Outer Brain Shell Enclosure
  function buildMainBrainOuterShell(scene: THREE.Scene) {
    const group = new THREE.Group();
    group.name = 'main_brain_outer_shell_group';
    outerBrainShellGroupRef.current = group;

    // Hemisphere Base Sphere Geometry with Cortical Gyri/Sulci Displacement
    const hemiGeo = new THREE.SphereGeometry(1, 48, 48);
    const pos = hemiGeo.attributes.position;

    for (let i = 0; i < pos.count; i++) {
      let x = pos.getX(i);
      let y = pos.getY(i);
      let z = pos.getZ(i);

      // Anatomical cortical folds (gyri/sulci)
      const gyri = Math.sin(x * 3.2) * Math.cos(y * 3.2) * Math.sin(z * 3.2) * 0.22;
      const sulci = Math.sin(x * 5.5) * Math.cos(z * 5.5) * 0.08;

      if (x > 0) x = Math.pow(x, 0.85); // Flatten medial surface
      y = y * 1.15;
      z = z * 1.25;

      pos.setXYZ(i, x + gyri + sulci, y + gyri, z + gyri + sulci);
    }
    hemiGeo.computeVertexNormals();

    const shellMaterial = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      emissive: 0x0066ff,
      emissiveIntensity: 0.45,
      roughness: 0.1,
      metalness: 0.9,
      transparent: true,
      opacity: 0.28,
      side: THREE.DoubleSide,
      blending: THREE.NormalBlending
    });

    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
      blending: THREE.AdditiveBlending
    });

    // Left Hemisphere Shell
    const leftMesh = new THREE.Mesh(hemiGeo.clone(), shellMaterial);
    leftMesh.scale.set(4.8, 4.4, 5.8);
    leftMesh.position.set(-2.2, 2.2, -0.4);

    const leftWire = new THREE.Mesh(hemiGeo.clone(), wireframeMaterial);
    leftWire.scale.set(4.82, 4.42, 5.82);
    leftWire.position.set(-2.2, 2.2, -0.4);

    // Right Hemisphere Shell (Mirrored)
    const rightGeo = hemiGeo.clone();
    const rPos = rightGeo.attributes.position;
    for (let i = 0; i < rPos.count; i++) {
      rPos.setX(i, -rPos.getX(i));
    }
    rightGeo.computeVertexNormals();

    const rightMesh = new THREE.Mesh(rightGeo, shellMaterial);
    rightMesh.scale.set(4.8, 4.4, 5.8);
    rightMesh.position.set(2.2, 2.2, -0.4);

    const rightWire = new THREE.Mesh(rightGeo, wireframeMaterial);
    rightWire.scale.set(4.82, 4.42, 5.82);
    rightWire.position.set(2.2, 2.2, -0.4);

    // Cerebellum Shell
    const cerebGeo = new THREE.SphereGeometry(1, 36, 36);
    const cPos = cerebGeo.attributes.position;
    for (let i = 0; i < cPos.count; i++) {
      let x = cPos.getX(i);
      let y = cPos.getY(i);
      let z = cPos.getZ(i);
      const folia = Math.sin(y * 14.0) * 0.1;
      cPos.setXYZ(i, x + folia, y, z + folia);
    }
    cerebGeo.computeVertexNormals();

    const cerebMesh = new THREE.Mesh(cerebGeo, shellMaterial);
    cerebMesh.scale.set(5.2, 3.4, 4.0);
    cerebMesh.position.set(0, -4.5, -4.8);

    const cerebWire = new THREE.Mesh(cerebGeo, wireframeMaterial);
    cerebWire.scale.set(5.22, 3.42, 4.02);
    cerebWire.position.set(0, -4.5, -4.8);

    // Brainstem Shell
    const stemGeo = new THREE.CylinderGeometry(1.2, 0.8, 5.5, 32);
    const stemMesh = new THREE.Mesh(stemGeo, shellMaterial);
    stemMesh.position.set(0, -6.0, -1.2);

    const stemWire = new THREE.Mesh(stemGeo, wireframeMaterial);
    stemWire.scale.set(1.02, 1.02, 1.02);
    stemWire.position.set(0, -6.0, -1.2);

    group.add(leftMesh, leftWire, rightMesh, rightWire, cerebMesh, cerebWire, stemMesh, stemWire);
    scene.add(group);
  }

  const GLB_MESH_NAME_MAPPING: Record<string, string[]> = {
    frontal_lobe: ['1.1.1.1.1', '1.1.1.1.2', '1.1.1.1.3', '1.1.1.3.0', '1.1.1.3.1', '1.1.1.4.0', '1.1.1.5.1', '1.1.1.7.0', '1.1.1.8.0', '1.1.2.0.0', '1.1.2.1.1', 'FrontalLobe', 'Frontal_Lobe', 'left_frontal_lobe', 'right_frontal_lobe'],
    parietal_lobe: ['1.1.3.0.0', '1.1.3.1.0', '1.1.3.1.1', '1.1.3.2.0', '1.1.3.3.0', '1.1.4.0.0', '1.1.4.2.0', '1.1.4.3.1', '1.1.4.3.2', '1.1.4.3.3', 'ParietalLobe', 'Parietal_Lobe', 'left_parietal_lobe', 'right_parietal_lobe'],
    temporal_lobe: ['1.1.5.0.0', '1.1.5.1.0', '1.1.5.2.0', '1.1.5.3.1', '1.1.5.3.2', '1.1.5.3.3', '1.1.5.4.0', '1.1.5.5.0', '1.1.6.4.1', '1.1.6.5.0', 'TemporalLobe', 'Temporal_Lobe', 'left_temporal_lobe', 'right_temporal_lobe'],
    occipital_lobe: ['1.1.7.0.0', '1.1.8.0.0', '1.1.9.0.0', '1.1.10.0.0', 'OccipitalLobe', 'Occipital_Lobe', 'left_occipital_lobe', 'right_occipital_lobe'],
    cerebellum: ['2.1.0.0.0', '2.1.1.0.0', '2.3.0.0.0', '2.4.1.1.0', '2.4.1.2.0', '2.4.1.3.0', 'Cerebellum', 'Cerebellar_Hemispheres'],
    brain_stem: ['3.1.1.0.0', '3.1.2.0.0', '3.2.0.0.0', '3.2.1.0.0', '3.2.2.0.0', 'BrainStem', 'Brain_Stem', 'Midbrain'],
    pons: ['3.3.0.0.0', 'Pons'],
    medulla: ['3.4.0.0.0', '3.4.1.0.0', '3.4.2.0.0', '3.4.3.0.0', '3.4.4.0.0', 'Medulla', 'Medulla_Oblongata'],
    thalamus: ['4.1.0.0.0', '4.1.2.0.0', '4.2.0.0.0', '4.2.1.0.0', 'Thalamus'],
    hypothalamus: ['4.3.1.0.0', '4.3.2.0.0', '4.5.0.0.0', 'Hypothalamus'],
    pituitary_gland: ['4.6.0.0.0', 'Pituitary', 'PituitaryGland'],
    pineal_gland: ['4.7.0.0.0', '4.8.1.0.0', 'Pineal', 'PinealGland'],
    hippocampus: ['5.1.0.0.0', '5.1.1.0.0', '5.2.0.0.0', 'Hippocampus'],
    amygdala: ['5.3.0.0.0', '5.4.0.0.0', '5.5.0.0.0', 'Amygdala'],
    basal_ganglia: ['6.1.0.0.0', '6.2.0.0.0', '6.3.0.0.0', '6.4.0.0.0', 'BasalGanglia', 'Basal_Ganglia', 'Striatum', 'Caudate', 'Putamen'],
    ventricles: ['7.1.0.0.0', '7.1.1.0.0', '7.1.2.0.0', '7.2.0.0.0', 'Ventricles', 'Lateral_Ventricles'],
    corpus_callosum: ['9.1.0.0.0', '9.2.0.0.0', '9.3.0.0.0', 'CorpusCallosum', 'Corpus_Callosum']
  };

  // Load .glb Model & Use Traversal Method (scene.traverse) to Catalog All Internal Child Meshes
  function loadAndCatalogGLBBrainModel(scene: THREE.Scene) {
    const gltfLoader = new GLTFLoader();

    gltfLoader.load(
      '/models/brain.glb',
      (gltf) => {
        const model = gltf.scene;
        model.name = 'real_human_brain_3d_model';
        loadedBrainGroupRef.current = model;

        let meshCount = 0;

        // Traverse loaded .glb scene graph to catalog every internal child mesh
        model.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            meshCount++;
            console.log("Mesh found:", child.name || `unnamed_mesh_${meshCount}`);
            const meshName = child.name || '';
            let matchedStructId = 'frontal_lobe';

            // Match child mesh name against GLB_MESH_NAME_MAPPING
            for (const [structId, possibleNames] of Object.entries(GLB_MESH_NAME_MAPPING)) {
              if (possibleNames.some(name => meshName.toLowerCase().includes(name.toLowerCase()))) {
                matchedStructId = structId;
                break;
              }
            }

            child.userData = {
              structureId: matchedStructId,
              originalColor: child.material?.color ? child.material.color.clone() : new THREE.Color(0x00aaff),
              originalOpacity: 0.40,
            };

            // Base holographic material: bright vibrant cyan/blue emissive glow
            child.material = new THREE.MeshStandardMaterial({
              color: 0x00aaff,
              emissive: 0x0044bb,
              emissiveIntensity: 0.45,
              roughness: 0.1,
              metalness: 0.85,
              transparent: true,
              opacity: transparency * 0.40,
              side: THREE.DoubleSide,
              blending: THREE.NormalBlending
            });

            if (!partMeshesRef.current[matchedStructId]) {
              partMeshesRef.current[matchedStructId] = child;
            }
          }
        });

        // Compute Bounding Box to center and scale real GLB model
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scaleFactor = 13.5 / (maxDim || 1);

        // Position model perfectly dead-centered at (0, 0, 0)
        model.position.sub(center.clone().multiplyScalar(scaleFactor));
        model.scale.setScalar(scaleFactor);

        scene.add(model);
        console.log(`🧠 [BrainCanvas] Traversed and cataloged ${meshCount} real .glb child meshes!`);
      },
      undefined,
      (err) => {
        // Fallback: Catalog 131 individual GLB part models
        loadAll131BrainPartModels(scene);
      }
    );
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

    const circleTex = createCircleTexture();
    const impMat = new THREE.PointsMaterial({
      size: 0.6,
      map: circleTex,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      depthWrite: false
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
      <BrainMeshLabelOverlay
        structures={structures}
        selectedStructure={selectedStructure}
        hoveredStructureId={hoveredStructureName || null}
        camera={cameraRef.current}
        domElement={mountRef.current}
        partMeshes={partMeshesRef.current}
        onSelectStructure={onSelectStructure}
        onHoverStructure={onHoverStructure}
      />
    </div>
  );
};
