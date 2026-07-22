import * as THREE from 'three';
import { NeuralPathwaySystem, NeuralPathwayProps } from '../components/brain/NeuralPathway';

console.log('🧪 Starting Task 7 Animated Neural Pathways & 5000+ GPU Particle Test...\n');

// 1. Instantiate NeuralPathwaySystem with 5000+ paths
const options: NeuralPathwayProps = {
  pathCount: 5000,
  particlesPerPath: 10,
  speed: 1.5,
  particleSize: 4.0,
  glowIntensity: 2.5,
  renderConduits: true,
};

console.log('👉 TEST 1: Initializing NeuralPathwaySystem with 5000+ paths...');
const pathwaySystem = new NeuralPathwaySystem(options);

if (!pathwaySystem.group || !pathwaySystem.particlePoints) {
  console.log('   ❌ TEST 1 FAILED: Particle system group or points missing!');
  process.exit(1);
}

console.log('   ✅ TEST 1 PASSED: NeuralPathwaySystem successfully created.');

// TEST 2: Verify GPU Particles & Attributes
console.log('\n👉 TEST 2: Verifying GPU Buffer Attributes for 50,000 Particles in 1 Draw Call...');
const geo = pathwaySystem.particlePoints.geometry as THREE.BufferGeometry;

const particleCount = geo.attributes.aOffset.count;
const offsetAttr = geo.attributes.aOffset;
const speedAttr = geo.attributes.aSpeed;
const startPosAttr = geo.attributes.aStartPos;

console.log(`   Total GPU Particles Instantiated: ${particleCount}`);
console.log(`   Offset Attribute Count: ${offsetAttr.count}`);
console.log(`   Speed Attribute Count: ${speedAttr.count}`);
console.log(`   Start Position Attribute Count: ${startPosAttr.count}`);

if (particleCount >= 50000) {
  console.log('   ✅ TEST 2 PASSED: 50,000+ GPU particles created in a single draw call!\n');
} else {
  console.log('   ❌ TEST 2 FAILED!');
  process.exit(1);
}

// TEST 3: Verify Glow Effect & Bloom Pass Compatibility
console.log('👉 TEST 3: Verifying Glow Effect & Bloom Pass Compatibility...');
const mat = pathwaySystem.particlePoints.material as THREE.ShaderMaterial;

console.log(`   Material Transparent: ${mat.transparent}`);
console.log(`   Material DepthWrite: ${mat.depthWrite}`);
console.log(`   Material Blending: ${mat.blending === THREE.AdditiveBlending ? 'AdditiveBlending ✅' : 'Other'}`);
console.log(`   uGlowIntensity Uniform Value: ${mat.uniforms.uGlowIntensity.value}`);

if (mat.blending === THREE.AdditiveBlending && !mat.depthWrite && mat.uniforms.uGlowIntensity.value >= 2.0) {
  console.log('   ✅ TEST 3 PASSED: Glow effect & Bloom pass compatibility confirmed!\n');
} else {
  console.log('   ❌ TEST 3 FAILED!');
  process.exit(1);
}

// TEST 4: Configurable Speed & Animation Frame Updates
console.log('👉 TEST 4: Verifying Configurable Speed & GPU Uniform Updates...');
pathwaySystem.update(1.25, 2.0);
console.log(`   Updated uTime Uniform: ${mat.uniforms.uTime.value}`);
console.log(`   Updated uGlobalSpeed Uniform: ${mat.uniforms.uGlobalSpeed.value}`);

pathwaySystem.setSpeed(3.0);
console.log(`   SetSpeed uGlobalSpeed Uniform: ${mat.uniforms.uGlobalSpeed.value}`);

if (mat.uniforms.uTime.value === 1.25 && mat.uniforms.uGlobalSpeed.value === 3.0) {
  console.log('   ✅ TEST 4 PASSED: Dynamic speed configuration & uniform updates verified!\n');
} else {
  console.log('   ❌ TEST 4 FAILED!');
  process.exit(1);
}

// TEST 5: System Disposal
console.log('👉 TEST 5: Testing Clean Resource Disposal...');
pathwaySystem.dispose();
if (pathwaySystem.particlePoints === null && pathwaySystem.conduitLines === null) {
  console.log('   ✅ TEST 5 PASSED: All GPU geometries and materials disposed cleanly!\n');
} else {
  console.log('   ❌ TEST 5 FAILED!');
  process.exit(1);
}

console.log('🎉 ALL TASK 7 ANIMATED NEURAL PATHWAYS & 5000+ GPU PARTICLE TESTS PASSED SUCCESSFULLY!');
