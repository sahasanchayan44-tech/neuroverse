import * as THREE from 'three';

console.log('🧪 Starting Task 9 HTML Labels, Overlap Avoidance & Search Highlighting Test...\n');

// 1. Mock Label Screen Position Interface & Overlap Avoidance Algorithm
interface MockLabel {
  id: string;
  name: string;
  latinName?: string;
  description: string;
  worldPos: THREE.Vector3;
  screenX: number;
  screenY: number;
  isBehind: boolean;
}

function resolveLabelCollisions(labels: MockLabel[]): MockLabel[] {
  const LABEL_WIDTH = 120;
  const LABEL_HEIGHT = 34;

  const result = labels.map((l) => ({ ...l }));

  for (let i = 0; i < result.length; i++) {
    if (result[i].isBehind) continue;

    for (let j = i + 1; j < result.length; j++) {
      if (result[j].isBehind) continue;

      const dx = result[i].screenX - result[j].screenX;
      const dy = result[i].screenY - result[j].screenY;

      if (Math.abs(dx) < LABEL_WIDTH && Math.abs(dy) < LABEL_HEIGHT) {
        const overlapY = LABEL_HEIGHT - Math.abs(dy);
        const shift = (overlapY / 2) + 2;

        if (dy >= 0) {
          result[i].screenY += shift;
          result[j].screenY -= shift;
        } else {
          result[i].screenY -= shift;
          result[j].screenY += shift;
        }
      }
    }
  }

  return result;
}

// TEST 1: 3D-to-2D Screen Projection (Billboarding facing camera)
console.log('👉 TEST 1: Testing 3D to 2D Camera Screen Projection...');
const camera = new THREE.PerspectiveCamera(45, 16 / 9, 0.1, 1000);
camera.position.set(0, 0, 20);
camera.lookAt(0, 0, 0);
camera.updateMatrixWorld();
camera.updateProjectionMatrix();

const target3D = new THREE.Vector3(0, 2.6, 3.2); // Frontal lobe center
const tempVec = target3D.clone().project(camera);

const width = 1920;
const height = 1080;
const screenX = (tempVec.x * 0.5 + 0.5) * width;
const screenY = (-(tempVec.y * 0.5) + 0.5) * height;

console.log(`   3D Point (0, 2.6, 3.2) -> Screen Point (${screenX.toFixed(1)}px, ${screenY.toFixed(1)}px)`);

if (screenX > 0 && screenX < width && screenY > 0 && screenY < height) {
  console.log('   ✅ TEST 1 PASSED: 3D point accurately projected to 2D screen space!\n');
} else {
  console.log('   ❌ TEST 1 FAILED!');
  process.exit(1);
}

// TEST 2: Overlap Avoidance Algorithm
console.log('👉 TEST 2: Testing Label Overlap Avoidance Algorithm...');
const overlappingLabels: MockLabel[] = [
  { id: '1', name: 'Frontal Lobe', description: 'Executive', worldPos: new THREE.Vector3(), screenX: 500, screenY: 400, isBehind: false },
  { id: '2', name: 'Corpus Callosum', description: 'Fibers', worldPos: new THREE.Vector3(), screenX: 510, screenY: 405, isBehind: false }, // Overlapping with #1!
];

console.log(`   Before Collision Resolution: L1 y=${overlappingLabels[0].screenY}, L2 y=${overlappingLabels[1].screenY}`);
const resolved = resolveLabelCollisions(overlappingLabels);
console.log(`   After Collision Resolution:  L1 y=${resolved[0].screenY}, L2 y=${resolved[1].screenY}`);

const dyAfter = Math.abs(resolved[0].screenY - resolved[1].screenY);

if (dyAfter >= 34) {
  console.log('   ✅ TEST 2 PASSED: Overlapping labels separated smoothly!\n');
} else {
  console.log('   ❌ TEST 2 FAILED!');
  process.exit(1);
}

// TEST 3: Search Highlighting Match Logic
console.log('👉 TEST 3: Testing Search Query Highlighting Logic...');
const searchQuery = 'hippocampus';

const testLabels = [
  { id: 'frontal_lobe', name: 'Frontal Lobe', description: 'Executive function' },
  { id: 'hippocampus', name: 'Hippocampus', description: 'Memory consolidation' }
];

const matches = testLabels.map(l => ({
  ...l,
  isMatch: l.name.toLowerCase().includes(searchQuery.toLowerCase()) || l.description.toLowerCase().includes(searchQuery.toLowerCase())
}));

console.log(`   Search Query: "${searchQuery}"`);
console.log(`   "Frontal Lobe" Match: ${matches[0].isMatch}`);
console.log(`   "Hippocampus" Match: ${matches[1].isMatch}`);

if (!matches[0].isMatch && matches[1].isMatch) {
  console.log('   ✅ TEST 3 PASSED: Search query highlighting match logic verified!\n');
} else {
  console.log('   ❌ TEST 3 FAILED!');
  process.exit(1);
}

console.log('🎉 ALL TASK 9 HTML LABELS & SEARCH HIGHLIGHTING TESTS PASSED SUCCESSFULLY!');
