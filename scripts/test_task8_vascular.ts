import * as THREE from 'three';
import { VascularSystem, ArterySystem, VeinSystem, CapillarySystem } from '../components/brain/VascularSystem';

console.log('🧪 Starting Task 8 Vascular Systems (Arteries, Veins, Capillaries) Verification Test...\n');

// TEST 1: ArterySystem Instantiation & Shader Uniforms
console.log('👉 TEST 1: Initializing ArterySystem (Oxygenated Arterial Flow)...');
const arteries = new VascularSystem('arteries', {
  color: 0xff0044,
  flowSpeed: 1.0,
  pulseFrequency: 1.4,
  pulseAmplitude: 0.1,
  emissiveIntensity: 2.0,
});

if (!arteries.group || !arteries.material) {
  console.log('   ❌ TEST 1 FAILED: ArterySystem missing group or material!');
  process.exit(1);
}

const matA = arteries.material;
console.log(`   Material Color Hex: #${matA.uniforms.uColor.value.getHexString()}`);
console.log(`   uFlowSpeed: ${matA.uniforms.uFlowSpeed.value}`);
console.log(`   uPulseFreq: ${matA.uniforms.uPulseFreq.value}`);
console.log(`   uEmissiveIntensity: ${matA.uniforms.uEmissiveIntensity.value}`);

if (matA.uniforms.uFlowSpeed.value === 1.0 && matA.uniforms.uEmissiveIntensity.value === 2.0) {
  console.log('   ✅ TEST 1 PASSED: ArterySystem instantiated with UV flow shader!\n');
} else {
  console.log('   ❌ TEST 1 FAILED!');
  process.exit(1);
}

// TEST 2: VeinSystem & CapillarySystem Instantiation
console.log('👉 TEST 2: Initializing VeinSystem & CapillarySystem...');
const veins = new VascularSystem('veins', { color: 0x0066ff, flowSpeed: 0.4 });
const capillaries = new VascularSystem('capillaries', { color: 0x00ffaa, flowSpeed: 0.2 });

console.log(`   Vein Color Hex: #${veins.material.uniforms.uColor.value.getHexString()}`);
console.log(`   Capillary Color Hex: #${capillaries.material.uniforms.uColor.value.getHexString()}`);

if (veins.material && capillaries.material) {
  console.log('   ✅ TEST 2 PASSED: VeinSystem and CapillarySystem created!\n');
} else {
  console.log('   ❌ TEST 2 FAILED!');
  process.exit(1);
}

// TEST 3: Shader-Based UV Flow Animation & Frame Updates
console.log('👉 TEST 3: Verifying Shader-Based UV Animation & Pulsation Updates...');
arteries.update(2.5);
console.log(`   Updated uTime Uniform: ${matA.uniforms.uTime.value}`);

if (matA.uniforms.uTime.value === 2.5) {
  console.log('   ✅ TEST 3 PASSED: UV flow animation & pulsation time uniform updated!\n');
} else {
  console.log('   ❌ TEST 3 FAILED!');
  process.exit(1);
}

// TEST 4: Independent Visibility Toggles
console.log('👉 TEST 4: Verifying Independent Visibility Toggles...');
arteries.setVisible(false);
veins.setVisible(true);
capillaries.setVisible(false);

console.log(`   Artery Group Visible: ${arteries.group.visible}`);
console.log(`   Vein Group Visible: ${veins.group.visible}`);
console.log(`   Capillary Group Visible: ${capillaries.group.visible}`);

if (!arteries.group.visible && veins.group.visible && !capillaries.group.visible) {
  console.log('   ✅ TEST 4 PASSED: Independent visibility toggles confirmed!\n');
} else {
  console.log('   ❌ TEST 4 FAILED!');
  process.exit(1);
}

// TEST 5: Hemodynamics Simulation Readiness
console.log('👉 TEST 5: Verifying Hemodynamics Simulation Readiness...');
arteries.updateHemodynamics({ heartRateBPM: 110, occlusionRegion: 'MCA_stroke' });
console.log(`   Occlusion Uniform Value: ${matA.uniforms.uOcclusion.value}`);

if (matA.uniforms.uOcclusion.value === 1.0) {
  console.log('   ✅ TEST 5 PASSED: Hemodynamics simulation parameters updated successfully!\n');
} else {
  console.log('   ❌ TEST 5 FAILED!');
  process.exit(1);
}

// TEST 6: Disposal
console.log('👉 TEST 6: Disposing Vascular Systems...');
arteries.dispose();
veins.dispose();
capillaries.dispose();

console.log('   ✅ TEST 6 PASSED: All vascular resources disposed cleanly.\n');
console.log('🎉 ALL TASK 8 VASCULAR SYSTEM TESTS PASSED SUCCESSFULLY!');
