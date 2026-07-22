'use client';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import _gsap from 'gsap';
const gsap: typeof _gsap = (_gsap as any).default || _gsap;

export interface CameraAnimationOptions {
  /** Animation duration in seconds (default: 1.5) */
  duration?: number;
  /** GSAP easing function string (default: 'power2.inOut') */
  ease?: string;
  /** Camera distance framing margin factor (default: 2.0) */
  marginFactor?: number;
  /** Minimum camera distance bound (default: 8) */
  minDistance?: number;
  /** Maximum camera distance bound (default: 45) */
  maxDistance?: number;
  /** Default home camera position for reset */
  defaultPosition?: THREE.Vector3;
  /** Default home OrbitControls target for reset */
  defaultTarget?: THREE.Vector3;
}

/**
 * CinematicCameraController - Modular Three.js camera & OrbitControls animation controller.
 * 
 * Features:
 * - Calculates 3D bounding box (Box3) and center of any selected mesh or group.
 * - Smoothly animates OrbitControls target to mesh center.
 * - Smoothly zooms camera to optimal framing distance based on mesh dimensions & FOV.
 * - Driven by GSAP with cinematic easing (`power2.inOut`).
 * - Full support for smooth camera reset back to home position & target.
 */
export class CinematicCameraController {
  private camera: THREE.PerspectiveCamera;
  private controls: OrbitControls;
  private defaultPosition: THREE.Vector3;
  private defaultTarget: THREE.Vector3;

  constructor(
    camera: THREE.PerspectiveCamera,
    controls: OrbitControls,
    options: CameraAnimationOptions = {}
  ) {
    this.camera = camera;
    this.controls = controls;
    this.defaultPosition = options.defaultPosition ? options.defaultPosition.clone() : new THREE.Vector3(0, 6, 32);
    this.defaultTarget = options.defaultTarget ? options.defaultTarget.clone() : new THREE.Vector3(0, 0, 0);
  }

  /**
   * Set default home camera position & target for reset actions.
   */
  public setDefaults(position: THREE.Vector3, target: THREE.Vector3): void {
    this.defaultPosition.copy(position);
    this.defaultTarget.copy(target);
  }

  /**
   * Calculate bounding box, compute center, animate OrbitControls target,
   * and smoothly zoom camera to focus on the selected mesh using GSAP.
   */
  public focusOnMesh(mesh: THREE.Object3D, options: CameraAnimationOptions = {}): void {
    if (!mesh || !this.camera || !this.controls) return;

    // 1. Calculate exact 3D bounding box and center vector
    const box = new THREE.Box3().setFromObject(mesh);
    const center = new THREE.Vector3();
    const size = new THREE.Vector3();
    box.getCenter(center);
    box.getSize(size);

    // 2. Calculate optimal cinematic camera distance based on bounding size & FOV
    const maxDimension = Math.max(size.x, size.y, size.z, 1.0);
    const fovRad = this.camera.fov * (Math.PI / 180);
    const margin = options.marginFactor ?? 2.0;

    let targetDistance = (maxDimension / (2 * Math.tan(fovRad / 2))) * margin;
    const minDist = options.minDistance ?? 8;
    const maxDist = options.maxDistance ?? 45;
    targetDistance = THREE.MathUtils.clamp(targetDistance, minDist, maxDist);

    // 3. Compute cinematic camera offset vector
    const currentDirection = new THREE.Vector3()
      .subVectors(this.camera.position, this.controls.target)
      .normalize();

    if (currentDirection.lengthSq() < 0.001) {
      currentDirection.set(0, 0.2, 1).normalize();
    }

    const targetCameraPosition = center.clone().add(currentDirection.multiplyScalar(targetDistance));
    targetCameraPosition.y += maxDimension * 0.15; // Slightly elevated cinematic camera angle

    const duration = options.duration ?? 1.5;
    const ease = options.ease ?? 'power2.inOut';

    // Kill any active GSAP camera animations to prevent conflicts
    gsap.killTweensOf(this.controls.target);
    gsap.killTweensOf(this.camera.position);

    // Disable auto-rotation during focused mesh view
    this.controls.autoRotate = false;

    // Animate OrbitControls target to mesh center
    gsap.to(this.controls.target, {
      x: center.x,
      y: center.y,
      z: center.z,
      duration,
      ease,
      onUpdate: () => {
        this.controls.update();
      },
    });

    // Smoothly zoom camera position to focus on mesh
    gsap.to(this.camera.position, {
      x: targetCameraPosition.x,
      y: targetCameraPosition.y,
      z: targetCameraPosition.z,
      duration: duration + 0.1,
      ease,
      onUpdate: () => {
        this.controls.update();
      },
    });
  }

  /**
   * Reset camera position and OrbitControls target back to home defaults using GSAP.
   */
  public reset(options: CameraAnimationOptions = {}): void {
    if (!this.camera || !this.controls) return;

    const duration = options.duration ?? 1.5;
    const ease = options.ease ?? 'power2.inOut';

    gsap.killTweensOf(this.controls.target);
    gsap.killTweensOf(this.camera.position);

    // Re-enable ambient auto-rotation on reset
    this.controls.autoRotate = true;

    gsap.to(this.controls.target, {
      x: this.defaultTarget.x,
      y: this.defaultTarget.y,
      z: this.defaultTarget.z,
      duration,
      ease,
      onUpdate: () => {
        this.controls.update();
      },
    });

    gsap.to(this.camera.position, {
      x: this.defaultPosition.x,
      y: this.defaultPosition.y,
      z: this.defaultPosition.z,
      duration: duration + 0.1,
      ease,
      onUpdate: () => {
        this.controls.update();
      },
    });
  }

  /**
   * Clean up camera tweens.
   */
  public dispose(): void {
    gsap.killTweensOf(this.controls.target);
    gsap.killTweensOf(this.camera.position);
  }
}

export default CinematicCameraController;
