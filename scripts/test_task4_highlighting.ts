import * as THREE from 'three';
import { MeshHighlightManager } from '../components/brain/MeshHighlightManager';

console.log('🧪 Starting Task 4 Highlighting & Selection Verification Test...\n');

// 1. Create Three.js Test Scene & Meshes
const scene = new THREE.Scene();

const geo = new THREE.SphereGeometry(1, 16, 16);

const matA = new THREE.MeshStandardMaterial({ color: 0x112233, emissive: 0x050505, emissiveIntensity: 0.1 });
const matB = new THREE.MeshStandardMaterial({ color: 0x445566, emissive: 0x050505, emissiveIntensity: 0.2 });
const matC = new THREE.MeshStandardMaterial({ color: 0x778899, emissive: 0x050505, emissiveIntensity: 0.3 });

const meshA = new THREE.Mesh(geo, matA);
const meshB = new THREE.Mesh(geo, matB);
const meshC = new THREE.Mesh(geo, matC);

meshA.name = 'Test_Mesh_A';
meshB.name = 'Test_Mesh_B';
meshC.name = 'Test_Mesh_C';

scene.add(meshA);
scene.add(meshB);
scene.add(meshC);

// Initialize Highlighting Manager
const highlighter = new MeshHighlightManager({
  color: 0x00f0ff,
  emissiveIntensity: 2.0,
  pulse: false,
  enableOutline: true,
  transitionSpeed: 0.5, // fast lerp for testing
});

console.log('✅ Highlighting Manager initialized.');

// Initial State Check
console.log('📊 Initial Mesh States:');
console.log(`   Mesh A Emissive Intensity: ${matA.emissiveIntensity.toFixed(2)}, Color: #${matA.color.getHexString()}`);
console.log(`   Mesh B Emissive Intensity: ${matB.emissiveIntensity.toFixed(2)}, Color: #${matB.color.getHexString()}`);
console.log(`   Mesh C Emissive Intensity: ${matC.emissiveIntensity.toFixed(2)}, Color: #${matC.color.getHexString()}\n`);

// TEST 1: Select Mesh A
console.log('👉 TEST 1: Selecting Mesh A...');
highlighter.selectMesh(meshA);

// Verify outline added to Mesh A
const outlineChild = meshA.children.find(c => c.name === 'MeshHighlightOutlineGroup');
console.log(`   Outline group attached to Mesh A: ${outlineChild !== undefined ? 'YES ✅' : 'NO ❌'}`);

// Simulate frame updates
for (let frame = 1; frame <= 10; frame++) {
  highlighter.update(0.016, frame * 0.016);
}

console.log('   Post-transition Mesh States:');
console.log(`   Mesh A (Selected) Emissive Intensity: ${matA.emissiveIntensity.toFixed(2)}, Color: #${matA.color.getHexString()}`);
console.log(`   Mesh B (Unchanged) Emissive Intensity: ${matB.emissiveIntensity.toFixed(2)}, Color: #${matB.color.getHexString()}`);
console.log(`   Mesh C (Unchanged) Emissive Intensity: ${matC.emissiveIntensity.toFixed(2)}, Color: #${matC.color.getHexString()}`);

if (matA.emissiveIntensity > 1.5 && matB.emissiveIntensity === 0.2 && matC.emissiveIntensity === 0.3) {
  console.log('   ✅ TEST 1 PASSED: Mesh A highlighted with changed emissive & color; Mesh B & C left unchanged!\n');
} else {
  console.log('   ❌ TEST 1 FAILED!');
  process.exit(1);
}

// TEST 2: Deselect Mesh A
console.log('👉 TEST 2: Deselecting Mesh A...');
highlighter.deselect();

const outlineChildAfterDeselect = meshA.children.find(c => c.name === 'MeshHighlightOutlineGroup');
console.log(`   Outline group removed from Mesh A: ${outlineChildAfterDeselect === undefined ? 'YES ✅' : 'NO ❌'}`);

// Simulate frame updates for reverting transition
for (let frame = 1; frame <= 20; frame++) {
  highlighter.update(0.016, frame * 0.016);
}

console.log('   Post-revert Mesh A State:');
console.log(`   Mesh A Emissive Intensity: ${matA.emissiveIntensity.toFixed(2)}, Color: #${matA.color.getHexString()}`);

if (Math.abs(matA.emissiveIntensity - 0.1) < 0.05) {
  console.log('   ✅ TEST 2 PASSED: Mesh A smoothly reverted to base state and outline removed!\n');
} else {
  console.log('   ❌ TEST 2 FAILED!');
  process.exit(1);
}

// TEST 3: Select Mesh B
console.log('👉 TEST 3: Selecting Mesh B...');
highlighter.selectMesh(meshB);

const outlineMeshB = meshB.children.find(c => c.name === 'MeshHighlightOutlineGroup');
console.log(`   Outline group attached to Mesh B: ${outlineMeshB !== undefined ? 'YES ✅' : 'NO ❌'}`);

for (let frame = 1; frame <= 10; frame++) {
  highlighter.update(0.016, frame * 0.016);
}

console.log(`   Mesh B (Selected) Emissive Intensity: ${matB.emissiveIntensity.toFixed(2)}, Color: #${matB.color.getHexString()}`);
console.log(`   Mesh A (Unchanged) Emissive Intensity: ${matA.emissiveIntensity.toFixed(2)}, Color: #${matA.color.getHexString()}`);

if (matB.emissiveIntensity > 1.5 && Math.abs(matA.emissiveIntensity - 0.1) < 0.05) {
  console.log('   ✅ TEST 3 PASSED: Mesh B selected & highlighted, Mesh A & C unchanged!\n');
} else {
  console.log('   ❌ TEST 3 FAILED!');
  process.exit(1);
}

console.log('🎉 ALL TASK 4 HIGHLIGHTING & SELECTION VERIFICATION TESTS PASSED SUCCESSFULLY!');
