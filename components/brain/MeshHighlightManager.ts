'use client';

import * as THREE from 'three';

export interface HighlightOptions {
  /** Highlight primary color (hex or CSS string, default: '#00f0ff') */
  color?: string | number;
  /** Target emissive color (default: same as primary color) */
  emissiveColor?: string | number;
  /** Target emissive intensity when selected (default: 1.8) */
  emissiveIntensity?: number;
  /** Enable dynamic pulsing animation of emissive intensity */
  pulse?: boolean;
  /** Pulse speed multiplier (default: 5.0) */
  pulseSpeed?: number;
  /** Pulse amplitude added to emissive intensity (default: 0.5) */
  pulseAmplitude?: number;
  /** Color transition animation speed lerp factor per frame (default: 0.1) */
  transitionSpeed?: number;
  /** Enable glowing back-face & wireframe outline overlay (default: true) */
  enableOutline?: boolean;
  /** Outline thickness scale multiplier (default: 1.04) */
  outlineScale?: number;
}

interface SavedMaterialState {
  color: THREE.Color;
  emissive: THREE.Color;
  emissiveIntensity: number;
  opacity: number;
}

interface TransitioningMesh {
  mesh: THREE.Mesh;
  targetColor: THREE.Color;
  targetEmissive: THREE.Color;
  targetEmissiveIntensity: number;
  isReverting: boolean;
}

/**
 * MeshHighlightManager - Reusable, modular Three.js mesh selection, outlining,
 * emissive intensity control, and smooth animated color transition system.
 * 
 * Features:
 * - Outlines selected mesh using a dual-layer glowing inverted hull and crisp edge geometry.
 * - Dynamically changes emissive intensity with optional pulsing animation.
 * - Smoothly animates color and emissive transitions using frame lerping.
 * - Leaves all non-selected meshes completely unchanged in their base state.
 * - Full support for selecting, toggling, and deselecting.
 * - Fully modular and decoupled for usage across procedural or loaded GLB scenes.
 */
export class MeshHighlightManager {
  private selectedMesh: THREE.Mesh | null = null;
  private savedStates: Map<THREE.Mesh, SavedMaterialState> = new Map();
  private activeTransitions: Map<THREE.Mesh, TransitioningMesh> = new Map();
  private outlineGroup: THREE.Group | null = null;
  private options: Required<HighlightOptions>;

  constructor(options: HighlightOptions = {}) {
    this.options = {
      color: options.color ?? 0x00f0ff,
      emissiveColor: options.emissiveColor ?? options.color ?? 0x00f0ff,
      emissiveIntensity: options.emissiveIntensity ?? 1.8,
      pulse: options.pulse ?? true,
      pulseSpeed: options.pulseSpeed ?? 5.0,
      pulseAmplitude: options.pulseAmplitude ?? 0.5,
      transitionSpeed: options.transitionSpeed ?? 0.1,
      enableOutline: options.enableOutline ?? true,
      outlineScale: options.outlineScale ?? 1.04,
    };
  }

  /**
   * Update highlight options dynamically.
   */
  public setOptions(options: Partial<HighlightOptions>): void {
    if (options.color !== undefined) this.options.color = options.color;
    if (options.emissiveColor !== undefined) this.options.emissiveColor = options.emissiveColor;
    if (options.emissiveIntensity !== undefined) this.options.emissiveIntensity = options.emissiveIntensity;
    if (options.pulse !== undefined) this.options.pulse = options.pulse;
    if (options.pulseSpeed !== undefined) this.options.pulseSpeed = options.pulseSpeed;
    if (options.pulseAmplitude !== undefined) this.options.pulseAmplitude = options.pulseAmplitude;
    if (options.transitionSpeed !== undefined) this.options.transitionSpeed = options.transitionSpeed;
    if (options.enableOutline !== undefined) this.options.enableOutline = options.enableOutline;
    if (options.outlineScale !== undefined) this.options.outlineScale = options.outlineScale;
  }

  /**
   * Get the currently selected mesh.
   */
  public getSelectedMesh(): THREE.Mesh | null {
    return this.selectedMesh;
  }

  /**
   * Select a target mesh. If the mesh is already selected, it will be deselected if toggle is true.
   */
  public selectMesh(mesh: THREE.Mesh | null, overrideOptions?: Partial<HighlightOptions>): void {
    if (overrideOptions) {
      this.setOptions(overrideOptions);
    }

    // Toggle off if selecting the same mesh
    if (this.selectedMesh === mesh) {
      if (mesh !== null) {
        this.deselect();
      }
      return;
    }

    // Deselect previous mesh if any
    if (this.selectedMesh) {
      this.startRevertingMesh(this.selectedMesh);
      this.removeOutline();
    }

    this.selectedMesh = mesh;

    if (mesh) {
      this.saveMeshState(mesh);

      const targetColor = new THREE.Color(this.options.color);
      const targetEmissive = new THREE.Color(this.options.emissiveColor);

      this.activeTransitions.set(mesh, {
        mesh,
        targetColor,
        targetEmissive,
        targetEmissiveIntensity: this.options.emissiveIntensity,
        isReverting: false,
      });

      if (this.options.enableOutline) {
        this.createOutline(mesh);
      }
    }
  }

  /**
   * Deselect the currently selected mesh and animate it back to its original state.
   */
  public deselect(): void {
    if (this.selectedMesh) {
      this.startRevertingMesh(this.selectedMesh);
      this.removeOutline();
      this.selectedMesh = null;
    }
  }

  /**
   * Save the original material properties of a mesh before mutating it.
   */
  private saveMeshState(mesh: THREE.Mesh): void {
    if (this.savedStates.has(mesh)) return;

    const mat = mesh.material as THREE.MeshStandardMaterial;
    if (!mat) return;

    this.savedStates.set(mesh, {
      color: mat.color ? mat.color.clone() : new THREE.Color(0xffffff),
      emissive: mat.emissive ? mat.emissive.clone() : new THREE.Color(0x000000),
      emissiveIntensity: mat.emissiveIntensity !== undefined ? mat.emissiveIntensity : 0.0,
      opacity: mat.opacity !== undefined ? mat.opacity : 1.0,
    });
  }

  /**
   * Begin animating a mesh back to its original saved material state.
   */
  private startRevertingMesh(mesh: THREE.Mesh): void {
    const saved = this.savedStates.get(mesh);
    if (!saved) return;

    this.activeTransitions.set(mesh, {
      mesh,
      targetColor: saved.color.clone(),
      targetEmissive: saved.emissive.clone(),
      targetEmissiveIntensity: saved.emissiveIntensity,
      isReverting: true,
    });
  }

  /**
   * Create a modular outline overlay (dual-layer: inverted hull glow + line edges).
   */
  private createOutline(mesh: THREE.Mesh): void {
    this.removeOutline();

    if (!mesh.geometry) return;

    const group = new THREE.Group();
    group.name = 'MeshHighlightOutlineGroup';

    // Layer 1: Inverted Hull Glowing Shell
    const outlineMat = new THREE.MeshBasicMaterial({
      color: this.options.color,
      side: THREE.BackSide,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const glowMesh = new THREE.Mesh(mesh.geometry, outlineMat);
    glowMesh.scale.setScalar(this.options.outlineScale);
    group.add(glowMesh);

    // Layer 2: Sharp Line Edge Wireframe Overlay
    try {
      const edgesGeo = new THREE.EdgesGeometry(mesh.geometry, 30);
      const lineMat = new THREE.LineBasicMaterial({
        color: this.options.color,
        linewidth: 2,
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending,
      });
      const lineSegments = new THREE.LineSegments(edgesGeo, lineMat);
      lineSegments.scale.setScalar(this.options.outlineScale * 1.002);
      group.add(lineSegments);
    } catch (err) {
      // Fallback if EdgesGeometry calculation fails on complex geometry
    }

    mesh.add(group);
    this.outlineGroup = group;
  }

  /**
   * Remove and dispose the current outline group.
   */
  private removeOutline(): void {
    if (this.outlineGroup) {
      if (this.outlineGroup.parent) {
        this.outlineGroup.parent.remove(this.outlineGroup);
      }

      this.outlineGroup.traverse((child) => {
        if ((child as THREE.Mesh).isMesh || (child as THREE.LineSegments).isLineSegments) {
          const obj = child as THREE.Mesh;
          if (obj.geometry) obj.geometry.dispose();
          if (obj.material) {
            if (Array.isArray(obj.material)) {
              obj.material.forEach((m) => m.dispose());
            } else {
              obj.material.dispose();
            }
          }
        }
      });

      this.outlineGroup = null;
    }
  }

  /**
   * Frame animation update callback. Call this in your Three.js render loop (`requestAnimationFrame` or `useFrame`).
   * 
   * @param delta Time step delta in seconds
   * @param elapsedTime Total elapsed time in seconds (for smooth pulsing)
   */
  public update(delta: number = 0.016, elapsedTime: number = performance.now() * 0.001): void {
    const lerpSpeed = Math.min(1.0, this.options.transitionSpeed * (delta / 0.016));

    // Update active color & emissive transitions
    this.activeTransitions.forEach((trans, mesh) => {
      const mat = mesh.material as THREE.MeshStandardMaterial;
      if (!mat) return;

      let currentTargetEmissiveIntensity = trans.targetEmissiveIntensity;

      // Apply pulsing animation if currently selected
      if (!trans.isReverting && mesh === this.selectedMesh && this.options.pulse) {
        const pulse = Math.sin(elapsedTime * this.options.pulseSpeed) * this.options.pulseAmplitude;
        currentTargetEmissiveIntensity = Math.max(0.1, trans.targetEmissiveIntensity + pulse);
      }

      // Smooth color lerp
      if (mat.color && trans.targetColor) {
        mat.color.lerp(trans.targetColor, lerpSpeed);
      }

      // Smooth emissive color lerp
      if (mat.emissive && trans.targetEmissive) {
        mat.emissive.lerp(trans.targetEmissive, lerpSpeed);
      }

      // Smooth emissive intensity lerp
      if (mat.emissiveIntensity !== undefined) {
        mat.emissiveIntensity = THREE.MathUtils.lerp(mat.emissiveIntensity, currentTargetEmissiveIntensity, lerpSpeed);
      }

      // Check if reverting animation has completed
      if (trans.isReverting) {
        const saved = this.savedStates.get(mesh);
        if (saved) {
          const colorDist = mat.color
            ? Math.abs(mat.color.r - saved.color.r) + Math.abs(mat.color.g - saved.color.g) + Math.abs(mat.color.b - saved.color.b)
            : 0;
          const emissiveDist = mat.emissive
            ? Math.abs(mat.emissive.r - saved.emissive.r) + Math.abs(mat.emissive.g - saved.emissive.g) + Math.abs(mat.emissive.b - saved.emissive.b)
            : 0;
          const intensityDist = Math.abs((mat.emissiveIntensity || 0) - saved.emissiveIntensity);

          if (colorDist < 0.01 && emissiveDist < 0.01 && intensityDist < 0.01) {
            // Restore exact saved state and stop tracking transition
            if (mat.color) mat.color.copy(saved.color);
            if (mat.emissive) mat.emissive.copy(saved.emissive);
            if (mat.emissiveIntensity !== undefined) mat.emissiveIntensity = saved.emissiveIntensity;
            this.activeTransitions.delete(mesh);
            this.savedStates.delete(mesh);
          }
        }
      }
    });

    // Update outline pulse if present
    if (this.outlineGroup && this.options.pulse) {
      const pulseOpacity = 0.65 + Math.sin(elapsedTime * this.options.pulseSpeed) * 0.25;
      this.outlineGroup.children.forEach((child) => {
        const mat = (child as THREE.Mesh).material as THREE.Material;
        if (mat) {
          mat.opacity = pulseOpacity;
        }
      });
    }
  }

  /**
   * Clean up and dispose all resources, outline meshes, and saved material states.
   */
  public dispose(): void {
    this.deselect();
    this.savedStates.clear();
    this.activeTransitions.clear();
  }
}

export default MeshHighlightManager;
