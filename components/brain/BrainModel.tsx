'use client';

import React, { useMemo, useEffect, useRef, Component, ErrorInfo, ReactNode, Suspense } from 'react';
import * as THREE from 'three';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame, ThreeEvent } from '@react-three/fiber';
import { MeshHighlightManager } from './MeshHighlightManager';

// Default model asset path as per requirement
export const DEFAULT_BRAIN_MODEL_PATH = '/models/brain/brain.glb';

export interface BrainModelProps {
  /** GLB model filepath URL (defaults to /models/brain/brain.glb) */
  modelPath?: string;
  /** Target bounding box scale factor in viewport units */
  targetScale?: number;
  /** Currently selected mesh name for highlight / raycast support */
  selectedMeshName?: string | null;
  /** Currently hovered mesh name */
  hoveredMeshName?: string | null;
  /** Highlight color for selected mesh */
  highlightColor?: string | number;
  /** Enable / disable cast and receive shadows */
  castShadow?: boolean;
  receiveShadow?: boolean;
  /** Wireframe / X-Ray overlay mode */
  wireframe?: boolean;
  /** Overall opacity override */
  opacity?: number;
  /** Callback fired when GLB model nodes and metadata finish parsing */
  onModelLoaded?: (metadata: {
    scene: THREE.Group;
    nodes: Record<string, THREE.Object3D>;
    meshNames: string[];
    bounds: THREE.Box3;
    center: THREE.Vector3;
    size: THREE.Vector3;
  }) => void;
  /** Future support: Mesh click selection callback */
  onMeshClick?: (meshName: string, event: ThreeEvent<MouseEvent>) => void;
  /** Future support: Mesh hover callback */
  onMeshPointerOver?: (meshName: string, event: ThreeEvent<PointerEvent>) => void;
  onMeshPointerOut?: (meshName: string, event: ThreeEvent<PointerEvent>) => void;
}

/**
 * BrainModel - Core React Three Fiber component for rendering the 3D Anatomical Brain GLB.
 * Features:
 * - Automatic centering at (0,0,0) and viewport bounding box scaling.
 * - Preserves all GLB mesh names exactly as stored without merging geometries.
 * - Shadow casting/receiving enabled on every mesh.
 * - Full support for mesh selection, highlighting, animation clips, and metadata.
 */
export const BrainModel: React.FC<BrainModelProps> = ({
  modelPath = DEFAULT_BRAIN_MODEL_PATH,
  targetScale = 10,
  selectedMeshName,
  hoveredMeshName,
  highlightColor = '#00f0ff',
  castShadow = true,
  receiveShadow = true,
  wireframe = false,
  opacity = 1.0,
  onModelLoaded,
  onMeshClick,
  onMeshPointerOver,
  onMeshPointerOut,
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const highlightManagerRef = useRef<MeshHighlightManager | null>(null);

  // 1. Load GLB Asset via Drei useGLTF
  const { scene, nodes, materials, animations } = useGLTF(modelPath);
  const { actions, names: animationNames } = useAnimations(animations, groupRef);

  // Initialize modular mesh highlighter instance
  useEffect(() => {
    highlightManagerRef.current = new MeshHighlightManager({
      color: highlightColor,
      emissiveIntensity: 1.8,
      pulse: true,
      enableOutline: true,
      transitionSpeed: 0.12,
    });
    return () => {
      highlightManagerRef.current?.dispose();
    };
  }, []);

  // Task 2 Requirement: Traverse every mesh and print every mesh name into the browser console
  useEffect(() => {
    if (scene) {
      console.log('🧠 [NeuroVerse GLB Inspection] Traversing model meshes...');
      const meshList: string[] = [];
      scene.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const meshName = child.name || child.userData?.name || `Mesh_${child.id}`;
          meshList.push(meshName);
          console.log(`  ├─ 📦 Mesh Node: "${meshName}"`);
        }
      });
      console.log(`🧠 [NeuroVerse GLB Inspection] Total Meshes Discovered (${meshList.length}):`, meshList);
    }
  }, [scene]);

  // 2. Clone and process scene graph: center (0,0,0), compute bounding box, enable shadows, preserve mesh names
  const { processedScene, meshNames, bounds, center, size, autoScale } = useMemo(() => {
    // Deep clone scene graph to allow independent component instances without mutating cache
    const clonedScene = scene.clone(true);
    const names: string[] = [];

    // Calculate exact axis-aligned bounding box
    const box = new THREE.Box3().setFromObject(clonedScene);
    const boxCenter = new THREE.Vector3();
    const boxSize = new THREE.Vector3();
    box.getCenter(boxCenter);
    box.getSize(boxSize);

    // Center scene contents precisely around origin (0, 0, 0)
    clonedScene.position.x = -boxCenter.x;
    clonedScene.position.y = -boxCenter.y;
    clonedScene.position.z = -boxCenter.z;

    // Calculate auto-scale factor to fit model to requested target scale
    const maxDimension = Math.max(boxSize.x, boxSize.y, boxSize.z);
    const scaleFactor = maxDimension > 0 ? targetScale / maxDimension : 1.0;

    // Traverse scene tree: preserve mesh names, enable shadows, prepare material hooks
    clonedScene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;

        // Preserve exact mesh name from GLB node hierarchy
        const name = mesh.name || mesh.userData?.name || `Mesh_${mesh.id}`;
        mesh.name = name;
        names.push(name);

        // Enable shadows
        mesh.castShadow = castShadow;
        mesh.receiveShadow = receiveShadow;

        // Ensure matrix updates independently for raycasting / selection
        mesh.matrixAutoUpdate = true;

        // Clone material so individual mesh highlighting won't mutate shared materials
        if (mesh.material) {
          if (Array.isArray(mesh.material)) {
            mesh.material = mesh.material.map((mat) => mat.clone());
          } else {
            mesh.material = mesh.material.clone();
          }
        }
      }
    });

    return {
      processedScene: clonedScene,
      meshNames: names,
      bounds: box,
      center: boxCenter,
      size: boxSize,
      autoScale: scaleFactor,
    };
  }, [scene, targetScale, castShadow, receiveShadow]);

  // 3. Notify parent when model metadata is computed
  useEffect(() => {
    if (onModelLoaded) {
      onModelLoaded({
        scene: processedScene,
        nodes: nodes as Record<string, THREE.Object3D>,
        meshNames,
        bounds,
        center,
        size,
      });
    }
  }, [processedScene, nodes, meshNames, bounds, center, size, onModelLoaded]);

  // Synchronize mesh selection with MeshHighlightManager
  useEffect(() => {
    if (!processedScene || !highlightManagerRef.current) return;

    if (selectedMeshName) {
      let targetMesh: THREE.Mesh | null = null;
      processedScene.traverse((child) => {
        if ((child as THREE.Mesh).isMesh && (child.name === selectedMeshName || child.userData?.name === selectedMeshName)) {
          targetMesh = child as THREE.Mesh;
        }
      });
      if (targetMesh) {
        highlightManagerRef.current.selectMesh(targetMesh, { color: highlightColor });
      } else {
        highlightManagerRef.current.deselect();
      }
    } else {
      highlightManagerRef.current.deselect();
    }
  }, [processedScene, selectedMeshName, highlightColor]);

  // 4. Reactive updates for wireframe and opacity
  useEffect(() => {
    if (!processedScene) return;

    processedScene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        const mat = mesh.material as THREE.MeshStandardMaterial;

        if (!mat) return;

        // Apply wireframe and transparency
        mat.wireframe = wireframe;
        if (opacity < 1.0) {
          mat.transparent = true;
          mat.opacity = opacity;
        }
      }
    });
  }, [processedScene, wireframe, opacity]);

  // Render loop update via R3F useFrame
  useFrame((state, delta) => {
    if (highlightManagerRef.current) {
      highlightManagerRef.current.update(delta, state.clock.getElapsedTime());
    }
  });

  // Event handlers for interactivity with deselect support
  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    if (e.object && (e.object as THREE.Mesh).isMesh) {
      const meshName = e.object.name;
      if (meshName === selectedMeshName) {
        // Deselect if already selected
        if (onMeshClick) {
          onMeshClick('', e);
        }
      } else {
        if (onMeshClick) {
          onMeshClick(meshName, e);
        }
      }
    }
  };

  const handlePointerOver = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    if (e.object && (e.object as THREE.Mesh).isMesh) {
      const meshName = e.object.name;
      if (onMeshPointerOver) {
        onMeshPointerOver(meshName, e);
      }
    }
  };

  const handlePointerOut = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    if (e.object && (e.object as THREE.Mesh).isMesh) {
      const meshName = e.object.name;
      if (onMeshPointerOut) {
        onMeshPointerOut(meshName, e);
      }
    }
  };

  return (
    <group
      ref={groupRef}
      scale={[autoScale, autoScale, autoScale]}
      position={[0, 0, 0]}
      onClick={handleClick}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      dispose={null}
    >
      <primitive object={processedScene} />
    </group>
  );
};

// Preload GLB asset for seamless instant rendering
useGLTF.preload(DEFAULT_BRAIN_MODEL_PATH);

// -----------------------------------------------------------------------------
// React Error Boundary for 3D GLB Model Loading
// -----------------------------------------------------------------------------

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class BrainModelErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('BrainModel GLB Loading Error Boundary Caught:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[3, 3, 3]} />
          <meshStandardMaterial color="#ff0055" wireframe />
        </mesh>
      );
    }
    return this.props.children;
  }
}

// -----------------------------------------------------------------------------
// Fallback Loader Mesh for React Suspense
// -----------------------------------------------------------------------------

export const BrainModelFallbackLoader: React.FC<{ color?: string }> = ({ color = '#00f0ff' }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <sphereGeometry args={[2, 16, 16]} />
      <meshStandardMaterial color={color} wireframe transparent opacity={0.4} />
    </mesh>
  );
};

// -----------------------------------------------------------------------------
// Container Component wrapping BrainModel with Suspense & Error Boundary
// -----------------------------------------------------------------------------

export const BrainModelWithSuspense: React.FC<BrainModelProps & { fallback?: ReactNode }> = ({
  fallback,
  ...props
}) => {
  return (
    <BrainModelErrorBoundary fallback={fallback}>
      <Suspense fallback={fallback || <BrainModelFallbackLoader />}>
        <BrainModel {...props} />
      </Suspense>
    </BrainModelErrorBoundary>
  );
};

export default BrainModel;
