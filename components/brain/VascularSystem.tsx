'use client';

import React, { useEffect, useRef, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

export interface HemodynamicsConfig {
  heartRateBPM?: number; // Cardiac pulse frequency in beats per minute (default: 72)
  systolicBP?: number; // Systolic blood pressure in mmHg (default: 120)
  diastolicBP?: number; // Diastolic blood pressure in mmHg (default: 80)
  bloodViscosity?: number; // Blood viscosity relative to water (default: 3.5)
  flowVelocityMultiplier?: number; // Flow speed scale multiplier (default: 1.0)
  occlusionRegion?: string | null; // Simulating vascular stenosis / occlusion (e.g. 'MCA_stroke')
}

export interface VascularProps {
  /** Optional GLB model URL path */
  modelUrl?: string;
  /** Primary blood vessel color hex */
  color?: string | number;
  /** Flow velocity speed */
  flowSpeed?: number;
  /** Cardiac pulsation frequency in Hz */
  pulseFrequency?: number;
  /** Cardiac pulsation amplitude multiplier */
  pulseAmplitude?: number;
  /** Vascular visibility toggle */
  visible?: boolean;
  /** Emissive glow intensity */
  emissiveIntensity?: number;
  /** Hemodynamics simulation configuration */
  hemodynamics?: HemodynamicsConfig;
}

// -----------------------------------------------------------------------------
// GPU Custom Shader for Shader-Based UV Flow Animation & Pulsation
// -----------------------------------------------------------------------------

const VASCULAR_VERTEX_SHADER = /* glsl */ `
  uniform float uTime;
  uniform float uPulseFreq;
  uniform float uPulseAmp;

  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;

  void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);

    // Cardiac Systolic Pulsation: Expand vessel diameter along normal vector
    float pulse = 1.0 + sin(uTime * uPulseFreq * 6.28318) * uPulseAmp;
    vec3 animatedPosition = position + normal * (pulse - 1.0) * 0.12;

    vec4 mvPosition = modelViewMatrix * vec4(animatedPosition, 1.0);
    vPosition = mvPosition.xyz;
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const VASCULAR_FRAGMENT_SHADER = /* glsl */ `
  uniform float uTime;
  uniform float uFlowSpeed;
  uniform vec3 uColor;
  uniform float uEmissiveIntensity;
  uniform float uOcclusion;

  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;

  void main() {
    // Shader-Based UV Animation: Continuous blood fluid flow along vessel length
    vec2 flowUv = vec2(vUv.x, vUv.y - uTime * uFlowSpeed);

    // Dynamic Erythrocyte (Blood Cell) pulse wave pattern
    float bloodCells = sin(flowUv.y * 40.0) * 0.5 + 0.5;
    float microPulses = cos(flowUv.y * 80.0 + uTime * 5.0) * 0.25 + 0.25;

    // Fresnel Rim Glow
    vec3 viewDir = normalize(-vPosition);
    float fresnel = pow(1.0 - max(0.0, dot(vNormal, viewDir)), 2.5);

    // Combine blood flow color + cell wave + fresnel rim
    vec3 baseColor = uColor;
    float flowGlow = (bloodCells * 0.6 + microPulses * 0.4);
    
    // Apply ischemic occlusion factor if active
    if (uOcclusion > 0.5) {
      baseColor *= 0.2;
      flowGlow *= 0.1;
    }

    vec3 finalColor = baseColor * uEmissiveIntensity * (1.0 + flowGlow * 1.2) + (uColor * fresnel * 0.8);

    gl_FragColor = vec4(finalColor, 0.85);
  }
`;

// -----------------------------------------------------------------------------
// Pure Three.js Class: VascularSystem (Supports Arteries, Veins, Capillaries)
// -----------------------------------------------------------------------------

export class VascularSystem {
  public group: THREE.Group;
  public mesh: THREE.Mesh | THREE.Group | null = null;
  public material: THREE.ShaderMaterial;
  private type: 'arteries' | 'veins' | 'capillaries';
  private hemodynamics: Required<HemodynamicsConfig>;

  constructor(
    type: 'arteries' | 'veins' | 'capillaries',
    options: VascularProps = {}
  ) {
    this.type = type;
    this.group = new THREE.Group();
    this.group.name = `VascularSystemGroup_${type}`;

    const colorHex = options.color ?? (type === 'arteries' ? 0xff0044 : type === 'veins' ? 0x0066ff : 0x00ffaa);
    const flowSpeed = options.flowSpeed ?? (type === 'arteries' ? 0.8 : type === 'veins' ? 0.4 : 0.2);
    const pulseFreq = options.pulseFrequency ?? (type === 'arteries' ? 1.2 : type === 'veins' ? 0.6 : 0.3);
    const pulseAmp = options.pulseAmplitude ?? (type === 'arteries' ? 0.08 : type === 'veins' ? 0.03 : 0.01);
    const emissiveIntensity = options.emissiveIntensity ?? (type === 'arteries' ? 1.8 : type === 'veins' ? 1.4 : 1.2);

    this.hemodynamics = {
      heartRateBPM: options.hemodynamics?.heartRateBPM ?? 72,
      systolicBP: options.hemodynamics?.systolicBP ?? 120,
      diastolicBP: options.hemodynamics?.diastolicBP ?? 80,
      bloodViscosity: options.hemodynamics?.bloodViscosity ?? 3.5,
      flowVelocityMultiplier: options.hemodynamics?.flowVelocityMultiplier ?? 1.0,
      occlusionRegion: options.hemodynamics?.occlusionRegion ?? null,
    };

    // Create ShaderMaterial for UV animation & cardiac pulsation
    this.material = new THREE.ShaderMaterial({
      vertexShader: VASCULAR_VERTEX_SHADER,
      fragmentShader: VASCULAR_FRAGMENT_SHADER,
      uniforms: {
        uTime: { value: 0 },
        uFlowSpeed: { value: flowSpeed * this.hemodynamics.flowVelocityMultiplier },
        uPulseFreq: { value: pulseFreq * (this.hemodynamics.heartRateBPM / 70.0) },
        uPulseAmp: { value: pulseAmp },
        uColor: { value: new THREE.Color(colorHex) },
        uEmissiveIntensity: { value: emissiveIntensity },
        uOcclusion: { value: 0.0 },
      },
      transparent: true,
      depthWrite: true,
      blending: THREE.NormalBlending,
      side: THREE.DoubleSide,
    });

    this.buildProceduralMesh();
  }

  /**
   * Procedural vascular tree mesh generator when GLB is not provided.
   */
  private buildProceduralMesh(): void {
    const group = new THREE.Group();
    const branchCount = this.type === 'capillaries' ? 36 : 18;

    for (let i = 0; i < branchCount; i++) {
      const points: THREE.Vector3[] = [];
      const segs = 8;
      
      // Organic vascular branching path originating from central circle of Willis / brainstem
      const startRadius = this.type === 'capillaries' ? 1.0 : 0.4;
      const angle = (i / branchCount) * Math.PI * 2;
      let curr = new THREE.Vector3(
        Math.cos(angle) * startRadius,
        -5.0 + Math.random() * 0.5,
        Math.sin(angle) * startRadius
      );
      points.push(curr.clone());

      for (let s = 1; s <= segs; s++) {
        const dir = new THREE.Vector3(
          (Math.random() - 0.5) * 2.5 + Math.cos(angle) * 1.5,
          1.2 + Math.random() * 0.8,
          (Math.random() - 0.5) * 2.5 + Math.sin(angle) * 1.5
        ).normalize();

        curr = curr.clone().add(dir.multiplyScalar(1.2));
        points.push(curr);
      }

      const curve = new THREE.CatmullRomCurve3(points);
      const radius = this.type === 'arteries' ? 0.18 : this.type === 'veins' ? 0.22 : 0.08;
      const tubeGeo = new THREE.TubeGeometry(curve, 32, radius, 8, false);

      const tubeMesh = new THREE.Mesh(tubeGeo, this.material);
      group.add(tubeMesh);
    }

    this.mesh = group;
    this.group.add(group);
  }

  /**
   * Load custom GLB vascular model mesh into system.
   */
  public setGLBMesh(glbScene: THREE.Group): void {
    if (this.mesh) {
      this.group.remove(this.mesh);
    }

    const cloned = glbScene.clone(true);
    cloned.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        (child as THREE.Mesh).material = this.material;
      }
    });

    this.mesh = cloned;
    this.group.add(cloned);
  }

  /**
   * Update hemodynamics simulation parameters for future blood flow expansion.
   */
  public updateHemodynamics(config: Partial<HemodynamicsConfig>): void {
    if (config.heartRateBPM !== undefined) {
      this.hemodynamics.heartRateBPM = config.heartRateBPM;
      this.material.uniforms.uPulseFreq.value = (config.heartRateBPM / 60.0);
    }
    if (config.flowVelocityMultiplier !== undefined) {
      this.hemodynamics.flowVelocityMultiplier = config.flowVelocityMultiplier;
      this.material.uniforms.uFlowSpeed.value *= config.flowVelocityMultiplier;
    }
    if (config.occlusionRegion !== undefined) {
      this.hemodynamics.occlusionRegion = config.occlusionRegion;
      this.material.uniforms.uOcclusion.value = config.occlusionRegion ? 1.0 : 0.0;
    }
  }

  /**
   * Frame update callback for shader-based UV flow animation & cardiac pulse.
   */
  public update(elapsedTime: number): void {
    if (this.material) {
      this.material.uniforms.uTime.value = elapsedTime;
    }
  }

  /**
   * Set visibility toggle.
   */
  public setVisible(visible: boolean): void {
    this.group.visible = visible;
  }

  /**
   * Clean up geometries and shader materials.
   */
  public dispose(): void {
    if (this.mesh) {
      this.group.remove(this.mesh);
    }
    if (this.material) {
      this.material.dispose();
    }
  }
}

// -----------------------------------------------------------------------------
// React Components: ArterySystem, VeinSystem, CapillarySystem
// -----------------------------------------------------------------------------

export const ArterySystem: React.FC<VascularProps> = (props) => {
  const systemRef = useRef<VascularSystem | null>(null);

  useEffect(() => {
    systemRef.current = new VascularSystem('arteries', props);
    return () => {
      systemRef.current?.dispose();
    };
  }, []);

  useEffect(() => {
    if (systemRef.current && props.visible !== undefined) {
      systemRef.current.setVisible(props.visible);
    }
  }, [props.visible]);

  useFrame((state) => {
    if (systemRef.current) {
      systemRef.current.update(state.clock.getElapsedTime());
    }
  });

  return systemRef.current ? <primitive object={systemRef.current.group} /> : null;
};

export const VeinSystem: React.FC<VascularProps> = (props) => {
  const systemRef = useRef<VascularSystem | null>(null);

  useEffect(() => {
    systemRef.current = new VascularSystem('veins', props);
    return () => {
      systemRef.current?.dispose();
    };
  }, []);

  useEffect(() => {
    if (systemRef.current && props.visible !== undefined) {
      systemRef.current.setVisible(props.visible);
    }
  }, [props.visible]);

  useFrame((state) => {
    if (systemRef.current) {
      systemRef.current.update(state.clock.getElapsedTime());
    }
  });

  return systemRef.current ? <primitive object={systemRef.current.group} /> : null;
};

export const CapillarySystem: React.FC<VascularProps> = (props) => {
  const systemRef = useRef<VascularSystem | null>(null);

  useEffect(() => {
    systemRef.current = new VascularSystem('capillaries', props);
    return () => {
      systemRef.current?.dispose();
    };
  }, []);

  useEffect(() => {
    if (systemRef.current && props.visible !== undefined) {
      systemRef.current.setVisible(props.visible);
    }
  }, [props.visible]);

  useFrame((state) => {
    if (systemRef.current) {
      systemRef.current.update(state.clock.getElapsedTime());
    }
  });

  return systemRef.current ? <primitive object={systemRef.current.group} /> : null;
};
