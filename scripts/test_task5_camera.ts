import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CinematicCameraController } from '../components/brain/CinematicCameraController';

console.log('🧪 Starting Task 5 Cinematic Camera & Bounding Box Zoom Verification Test...\n');

// 1. Setup Mock DOM canvas for OrbitControls in Node
const mockElement = {
  addEventListener: () => {},
  removeEventListener: () => {},
  getRootNode: () => mockElement,
  ownerDocument: { defaultView: { addEventListener: () => {}, removeEventListener: () => {} } },
  getBoundingClientRect: () => ({ left: 0, top: 0, width: 800, height: 600 }),
  style: {},
  clientWidth: 800,
  clientHeight: 600,
} as unknown as HTMLElement;

// 2. Create Camera & Controls
const camera = new THREE.PerspectiveCamera(45, 800 / 600, 0.1, 1000);
camera.position.set(0, 6, 32);

const controls = new OrbitControls(camera, mockElement);
controls.target.set(0, 0, 0);

const defaultPos = new THREE.Vector3(0, 6, 32);
const defaultTarget = new THREE.Vector3(0, 0, 0);

// Initialize Cinematic Camera Controller
const camController = new CinematicCameraController(camera, controls, {
  defaultPosition: defaultPos,
  defaultTarget: defaultTarget,
});

console.log('✅ CinematicCameraController initialized.');
console.log(`   Initial Camera Pos: (${camera.position.x}, ${camera.position.y}, ${camera.position.z})`);
console.log(`   Initial Target Pos: (${controls.target.x}, ${controls.target.y}, ${controls.target.z})\n`);

// 3. Create Test Mesh placed at offset position (10, 15, -20)
const geo = new THREE.BoxGeometry(4, 6, 8);
const mat = new THREE.MeshStandardMaterial({ color: 0x00f0ff });
const testMesh = new THREE.Mesh(geo, mat);
testMesh.position.set(10, 15, -20);

// Calculate expected bounding box and center
const box = new THREE.Box3().setFromObject(testMesh);
const expectedCenter = new THREE.Vector3();
box.getCenter(expectedCenter);

console.log('📦 Test Mesh Bounding Box Calculated:');
console.log(`   Expected Center: (${expectedCenter.x.toFixed(1)}, ${expectedCenter.y.toFixed(1)}, ${expectedCenter.z.toFixed(1)})`);

// TEST 1: Focus Camera on Selected Mesh using GSAP
console.log('\n👉 TEST 1: Triggering focusOnMesh(testMesh)...');
camController.focusOnMesh(testMesh, { duration: 0.1 }); // Fast duration for test execution

// Simulate GSAP ticker update
setTimeout(() => {
  console.log('   Post-Animation Camera & Target:');
  console.log(`   Controls Target: (${controls.target.x.toFixed(1)}, ${controls.target.y.toFixed(1)}, ${controls.target.z.toFixed(1)})`);
  console.log(`   Camera Position: (${camera.position.x.toFixed(1)}, ${camera.position.y.toFixed(1)}, ${camera.position.z.toFixed(1)})`);

  const targetDistToCenter = controls.target.distanceTo(expectedCenter);
  const cameraDistanceToTarget = camera.position.distanceTo(controls.target);

  if (targetDistToCenter < 0.1 && cameraDistanceToTarget > 5 && cameraDistanceToTarget < 50) {
    console.log('   ✅ TEST 1 PASSED: OrbitControls target animated accurately to mesh center & camera zoomed smoothly!\n');
  } else {
    console.log(`   ❌ TEST 1 FAILED! targetDistToCenter=${targetDistToCenter}`);
    process.exit(1);
  }

  // TEST 2: Reset Camera to Default Home Position
  console.log('👉 TEST 2: Triggering camController.reset()...');
  camController.reset({ duration: 0.1 });

  setTimeout(() => {
    console.log('   Post-Reset Camera & Target:');
    console.log(`   Controls Target: (${controls.target.x.toFixed(1)}, ${controls.target.y.toFixed(1)}, ${controls.target.z.toFixed(1)})`);
    console.log(`   Camera Position: (${camera.position.x.toFixed(1)}, ${camera.position.y.toFixed(1)}, ${camera.position.z.toFixed(1)})`);

    const resetTargetDist = controls.target.distanceTo(defaultTarget);
    const resetCamDist = camera.position.distanceTo(defaultPos);

    if (resetTargetDist < 0.1 && resetCamDist < 0.2) {
      console.log('   ✅ TEST 2 PASSED: Camera and OrbitControls target reset smoothly back to home position!\n');
      console.log('🎉 ALL TASK 5 CINEMATIC CAMERA & BOUNDING BOX TESTS PASSED SUCCESSFULLY!');
      process.exit(0);
    } else {
      console.log(`   ❌ TEST 2 FAILED! resetTargetDist=${resetTargetDist}, resetCamDist=${resetCamDist}`);
      process.exit(1);
    }
  }, 250);

}, 250);
