'use client';

import React, { useEffect, useRef, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';

export interface PathwayData {
  id?: string;
  points: THREE.Vector3[];
  color?: string | number;
  speed?: number;
  particleCount?: number;
}

export interface NeuralPathwayProps {
  /** Array of custom pathway data or null to generate auto 5000+ paths */
  pathways?: PathwayData[];
  /** Total number of paths to generate if pathways is omitted (default: 5000 for 5000+ path requirement) */
  pathCount?: number;
  /** GPU particles per pathway curve (default: 10) */
  particlesPerPath?: number;
  /** Global pathway animation speed multiplier (default: 1.0) */
  speed?: number;
  /** Base particle size (default: 3.5) */
  particleSize?: number;
  /** Glow intensity multiplier for bloom compatibility (default: 2.5) */
  glowIntensity?: number;
  /** Default pathway glow color (default: '#00f0ff') */
  color?: string | number;
  /** Render fiber conduit wireframe lines (default: true) */
  renderConduits?: boolean;
}

// -----------------------------------------------------------------------------
// GPU Custom Shaders for Animated Neural Pathway Particles
// -----------------------------------------------------------------------------

const GPU_PARTICLE_VERTEX_SHADER = /* glsl */ `
  uniform float uTime;
  uniform float uGlobalSpeed;
  uniform float uParticleSize;
  uniform float uPixelRatio;

  attribute float aOffset;
  attribute float aSpeed;
  attribute vec3 aColor;

  attribute vec3 aStartPos;
  attribute vec3 aMidPos1;
  attribute vec3 aMidPos2;
  attribute vec3 aEndPos;

  varying vec3 vColor;
  varying float vProgress;

  // Catmull-Rom Spline Evaluation on GPU
  vec3 evaluateCatmullRom(vec3 p0, vec3 p1, vec3 p2, vec3 p3, float t) {
    float t2 = t * t;
    float t3 = t2 * t;
    return 0.5 * (
      (2.0 * p1) +
      (-p0 + p2) * t +
      (2.0 * p0 - 5.0 * p1 + 4.0 * p2 - p3) * t2 +
      (-p0 + 3.0 * p1 - 3.0 * p2 + p3) * t3
    );
  }

  void main() {
    vColor = aColor;

    // Continuous progress loop along Catmull-Rom curve [0.0, 1.0]
    float progress = fract(aOffset + uTime * aSpeed * uGlobalSpeed * 0.12);
    vProgress = progress;

    // Evaluate position on Catmull-Rom curve dynamically on GPU
    vec3 positionOnCurve = evaluateCatmullRom(aStartPos, aMidPos1, aMidPos2, aEndPos, progress);

    vec4 mvPosition = modelViewMatrix * vec4(positionOnCurve, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    // Attenuate particle size based on camera distance
    gl_PointSize = (uParticleSize * uPixelRatio * 30.0) / (-mvPosition.z);
  }
`;

const GPU_PARTICLE_FRAGMENT_SHADER = /* glsl */ `
  uniform float uGlowIntensity;
  varying vec3 vColor;
  varying float vProgress;

  void main() {
    // Soft circular radial glow falloff
    vec2 coord = gl_PointCoord - vec2(0.5);
    float dist = length(coord);

    if (dist > 0.5) discard;

    float glow = pow(1.0 - (dist * 2.0), 1.8);
    
    // High emissive glow multiplier (> 2.0) for Bloom pass compatibility
    vec3 finalColor = vColor * uGlowIntensity * (1.2 + sin(vProgress * 6.28318) * 0.3);

    gl_FragColor = vec4(finalColor, glow * 0.95);
  }
`;

// -----------------------------------------------------------------------------
// Pure Three.js Class: NeuralPathwaySystem (Supports 5000+ Paths in 1 Draw Call)
// -----------------------------------------------------------------------------

export class NeuralPathwaySystem {
  public group: THREE.Group;
  public particlePoints: THREE.Points | null = null;
  public conduitLines: THREE.LineSegments | null = null;
  private particleMaterial: THREE.ShaderMaterial | null = null;

  constructor(options: NeuralPathwayProps = {}) {
    this.group = new THREE.Group();
    this.group.name = 'NeuralPathwaySystemGroup';
    this.build(options);
  }

  /**
   * Build 5000+ Catmull-Rom GPU neural pathways and particle system in 1 draw call.
   */
  public build(options: NeuralPathwayProps = {}): void {
    this.dispose();

    const pathCount = options.pathCount ?? 5000;
    const particlesPerPath = options.particlesPerPath ?? 10;
    const globalSpeed = options.speed ?? 1.0;
    const particleSize = options.particleSize ?? 3.5;
    const glowIntensity = options.glowIntensity ?? 2.5;
    const defaultColorHex = options.color ?? 0x00f0ff;
    const renderConduits = options.renderConduits ?? true;

    // 1. Generate or parse Catmull-Rom 3D Spline Pathways
    const curves: THREE.CatmullRomCurve3[] = [];
    const pathColors: THREE.Color[] = [];
    const pathSpeeds: number[] = [];

    const baseColors = [
      new THREE.Color(0x00f0ff), // Electric Cyan
      new THREE.Color(0x0066ff), // Deep Blue
      new THREE.Color(0xaa00ff), // Neon Purple
      new THREE.Color(0xff007f), // Hot Pink / Magenta
      new THREE.Color(0x00ffaa), // Emerald Green
      new THREE.Color(0xffaa00), // Amber Gold
    ];

    if (options.pathways && options.pathways.length > 0) {
      options.pathways.forEach((p) => {
        if (p.points.length >= 2) {
          const curve = new THREE.CatmullRomCurve3(p.points, false, 'catmullrom', 0.5);
          curves.push(curve);
          pathColors.push(new THREE.Color(p.color ?? defaultColorHex));
          pathSpeeds.push(p.speed ?? (0.8 + Math.random() * 0.8));
        }
      });
    } else {
      // Auto-generate 5000+ anatomical Catmull-Rom pathways in 3D brain volume
      console.log(`🧠 [NeuralPathway] Generating ${pathCount}+ 3D Catmull-Rom neural pathways...`);
      for (let i = 0; i < pathCount; i++) {
        // Random organic start & end points within anatomical brain dimensions
        const r1 = 2.0 + Math.random() * 6.0;
        const theta1 = Math.random() * Math.PI * 2;
        const phi1 = Math.random() * Math.PI;

        const start = new THREE.Vector3(
          r1 * Math.sin(phi1) * Math.cos(theta1),
          r1 * Math.sin(phi1) * Math.sin(theta1),
          r1 * Math.cos(phi1)
        );

        const r2 = 2.0 + Math.random() * 6.0;
        const theta2 = Math.random() * Math.PI * 2;
        const phi2 = Math.random() * Math.PI;

        const end = new THREE.Vector3(
          r2 * Math.sin(phi2) * Math.cos(theta2),
          r2 * Math.sin(phi2) * Math.sin(theta2),
          r2 * Math.cos(phi2)
        );

        // Control points for Catmull-Rom smooth curve trajectory
        const mid1 = start.clone().lerp(end, 0.33).add(new THREE.Vector3(
          (Math.random() - 0.5) * 3.5,
          (Math.random() - 0.5) * 3.5,
          (Math.random() - 0.5) * 3.5
        ));

        const mid2 = start.clone().lerp(end, 0.66).add(new THREE.Vector3(
          (Math.random() - 0.5) * 3.5,
          (Math.random() - 0.5) * 3.5,
          (Math.random() - 0.5) * 3.5
        ));

        const curve = new THREE.CatmullRomCurve3([start, mid1, mid2, end], false, 'catmullrom', 0.5);
        curves.push(curve);

        const col = baseColors[i % baseColors.length].clone();
        pathColors.push(col);
        pathSpeeds.push(0.6 + Math.random() * 1.2);
      }
    }

    const totalPaths = curves.length;
    const totalParticles = totalPaths * particlesPerPath;

    // 2. Build GPU Buffer Attributes for All Particles (Single Draw Call)
    const offsets = new Float32Array(totalParticles);
    const speeds = new Float32Array(totalParticles);
    const colors = new Float32Array(totalParticles * 3);

    const startPositions = new Float32Array(totalParticles * 3);
    const mid1Positions = new Float32Array(totalParticles * 3);
    const mid2Positions = new Float32Array(totalParticles * 3);
    const endPositions = new Float32Array(totalParticles * 3);

    let particleIdx = 0;

    for (let i = 0; i < totalPaths; i++) {
      const curve = curves[i];
      const pts = curve.points;
      const p0 = pts[0] || new THREE.Vector3();
      const p1 = pts[1] || p0;
      const p2 = pts[2] || p1;
      const p3 = pts[3] || p2;

      const col = pathColors[i];
      const spd = pathSpeeds[i];

      for (let j = 0; j < particlesPerPath; j++) {
        const idx = particleIdx;
        const i3 = idx * 3;

        // Distributed starting offset along Catmull-Rom curve [0, 1]
        offsets[idx] = (j / particlesPerPath) + (Math.random() * 0.05);
        speeds[idx] = spd;

        colors[i3] = col.r;
        colors[i3 + 1] = col.g;
        colors[i3 + 2] = col.b;

        startPositions[i3] = p0.x; startPositions[i3 + 1] = p0.y; startPositions[i3 + 2] = p0.z;
        mid1Positions[i3] = p1.x;  mid1Positions[i3 + 1] = p1.y;  mid1Positions[i3 + 2] = p1.z;
        mid2Positions[i3] = p2.x;  mid2Positions[i3 + 1] = p2.y;  mid2Positions[i3 + 2] = p2.z;
        endPositions[i3] = p3.x;   endPositions[i3 + 1] = p3.y;   endPositions[i3 + 2] = p3.z;

        particleIdx++;
      }
    }

    const particleGeo = new THREE.BufferGeometry();
    // Dummy position attribute (actual evaluation done in GPU vertex shader)
    particleGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(totalParticles * 3), 3));
    particleGeo.setAttribute('aOffset', new THREE.BufferAttribute(offsets, 1));
    particleGeo.setAttribute('aSpeed', new THREE.BufferAttribute(speeds, 1));
    particleGeo.setAttribute('aColor', new THREE.BufferAttribute(colors, 3));

    particleGeo.setAttribute('aStartPos', new THREE.BufferAttribute(startPositions, 3));
    particleGeo.setAttribute('aMidPos1', new THREE.BufferAttribute(mid1Positions, 3));
    particleGeo.setAttribute('aMidPos2', new THREE.BufferAttribute(mid2Positions, 3));
    particleGeo.setAttribute('aEndPos', new THREE.BufferAttribute(endPositions, 3));

    const pixelRatio = typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 2) : 1.0;

    this.particleMaterial = new THREE.ShaderMaterial({
      vertexShader: GPU_PARTICLE_VERTEX_SHADER,
      fragmentShader: GPU_PARTICLE_FRAGMENT_SHADER,
      uniforms: {
        uTime: { value: 0 },
        uGlobalSpeed: { value: globalSpeed },
        uParticleSize: { value: particleSize },
        uPixelRatio: { value: pixelRatio },
        uGlowIntensity: { value: glowIntensity },
      },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    this.particlePoints = new THREE.Points(particleGeo, this.particleMaterial);
    this.group.add(this.particlePoints);

    // 3. Optional Fiber Conduit Lines (Single Merged LineSegments)
    if (renderConduits && totalPaths > 0) {
      const linePositions: number[] = [];
      const lineColors: number[] = [];

      // Limit conduit lines to top 1200 paths to maintain high FPS performance
      const linePathCount = Math.min(totalPaths, 1200);

      for (let i = 0; i < linePathCount; i++) {
        const curve = curves[i];
        const col = pathColors[i];
        const samples = curve.getPoints(12);

        for (let s = 0; s < samples.length - 1; s++) {
          linePositions.push(samples[s].x, samples[s].y, samples[s].z);
          linePositions.push(samples[s + 1].x, samples[s + 1].y, samples[s + 1].z);

          lineColors.push(col.r * 0.4, col.g * 0.4, col.b * 0.4);
          lineColors.push(col.r * 0.4, col.g * 0.4, col.b * 0.4);
        }
      }

      const conduitGeo = new THREE.BufferGeometry();
      conduitGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
      conduitGeo.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3));

      const conduitMat = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.35,
        blending: THREE.AdditiveBlending,
      });

      this.conduitLines = new THREE.LineSegments(conduitGeo, conduitMat);
      this.group.add(this.conduitLines);
    }
  }

  /**
   * Update GPU uniforms frame-by-frame.
   * 
   * @param elapsedTime Total time in seconds
   * @param speedMultiplier Dynamic speed override
   */
  public update(elapsedTime: number, speedMultiplier?: number): void {
    if (this.particleMaterial) {
      this.particleMaterial.uniforms.uTime.value = elapsedTime;
      if (speedMultiplier !== undefined) {
        this.particleMaterial.uniforms.uGlobalSpeed.value = speedMultiplier;
      }
    }
  }

  /**
   * Set global pathway speed dynamically.
   */
  public setSpeed(speed: number): void {
    if (this.particleMaterial) {
      this.particleMaterial.uniforms.uGlobalSpeed.value = speed;
    }
  }

  /**
   * Set glow intensity factor (for postprocessing Bloom compatibility).
   */
  public setGlowIntensity(intensity: number): void {
    if (this.particleMaterial) {
      this.particleMaterial.uniforms.uGlowIntensity.value = intensity;
    }
  }

  /**
   * Dispose geometries and materials.
   */
  public dispose(): void {
    if (this.particlePoints) {
      this.group.remove(this.particlePoints);
      this.particlePoints.geometry.dispose();
      this.particlePoints = null;
    }

    if (this.particleMaterial) {
      this.particleMaterial.dispose();
      this.particleMaterial = null;
    }

    if (this.conduitLines) {
      this.group.remove(this.conduitLines);
      this.conduitLines.geometry.dispose();
      (this.conduitLines.material as THREE.Material).dispose();
      this.conduitLines = null;
    }
  }
}

// -----------------------------------------------------------------------------
// React / R3F Reusable Component: NeuralPathway
// -----------------------------------------------------------------------------

export const NeuralPathway: React.FC<NeuralPathwayProps> = (props) => {
  const systemRef = useRef<NeuralPathwaySystem | null>(null);

  useEffect(() => {
    systemRef.current = new NeuralPathwaySystem(props);
    return () => {
      systemRef.current?.dispose();
    };
  }, [props.pathCount, props.particlesPerPath, props.renderConduits]);

  // Update speed & glow intensity when props change
  useEffect(() => {
    if (systemRef.current) {
      if (props.speed !== undefined) systemRef.current.setSpeed(props.speed);
      if (props.glowIntensity !== undefined) systemRef.current.setGlowIntensity(props.glowIntensity);
    }
  }, [props.speed, props.glowIntensity]);

  // Frame animation update via R3F useFrame
  useFrame((state) => {
    if (systemRef.current) {
      systemRef.current.update(state.clock.getElapsedTime());
    }
  });

  return systemRef.current ? <primitive object={systemRef.current.group} /> : null;
};

export default NeuralPathway;
