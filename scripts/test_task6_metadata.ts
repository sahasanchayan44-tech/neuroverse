import { deriveMeshId, fetchMeshMetadata, isMeshMetadataCached, clearMetadataCache } from '../services/metadataService';

console.log('🧪 Starting Task 6 Metadata Loading & Memory Caching Verification Test...\n');

// Mock global fetch for Node testing environment
const mockDataStore: Record<string, any> = {
  frontal_lobe: {
    id: 'frontal_lobe',
    name: 'Frontal Lobe',
    latinName: 'Lobus Frontalis',
    location: 'Anterior portion of cerebral cortex',
    description: 'Executive cognitive control center.',
    functions: ['Executive planning', 'Motor execution'],
    bloodSupply: 'ACA & MCA',
    neurotransmitters: ['Dopamine', 'Glutamate'],
    diseases: ['Frontotemporal Dementia', 'ADHD'],
    clinicalImportance: 'Essential for executive decision making.',
    researchNotes: 'fMRI CEN network co-activation.',
    interestingFacts: ['Matures at age 25.']
  },
  hippocampus: {
    id: 'hippocampus',
    name: 'Hippocampus',
    latinName: 'Hippocampus',
    location: 'Medial temporal lobe',
    description: 'Episodic memory consolidation center.',
    functions: ['Memory consolidation', 'Spatial cognitive mapping'],
    bloodSupply: 'PCA',
    neurotransmitters: ['Glutamate', 'Acetylcholine'],
    diseases: ["Alzheimer's Disease"],
    clinicalImportance: 'First structure affected in Alzheimer\'s.',
    researchNotes: 'Place cell discovery.',
    interestingFacts: ['Enlarged in London taxi drivers.']
  }
};

(globalThis as any).fetch = async (url: string) => {
  const match = url.match(/\/brainData\/([^/]+)\.json$/);
  if (match) {
    const id = match[1];
    if (mockDataStore[id]) {
      return {
        ok: true,
        status: 200,
        json: async () => mockDataStore[id]
      } as any;
    }
  }
  return {
    ok: false,
    status: 404,
    statusText: 'Not Found'
  } as any;
};

async function runTests() {
  clearMetadataCache();

  // TEST 1: ID Derivation
  console.log('👉 TEST 1: Mesh ID Derivation...');
  const derived1 = deriveMeshId('Mesh_Frontal_Lobe');
  const derived2 = deriveMeshId('hippocampus');
  console.log(`   "Mesh_Frontal_Lobe" -> "${derived1}"`);
  console.log(`   "hippocampus" -> "${derived2}"`);

  if (derived1 === 'frontal_lobe' && derived2 === 'hippocampus') {
    console.log('   ✅ TEST 1 PASSED: Mesh ID derived correctly!\n');
  } else {
    console.log('   ❌ TEST 1 FAILED!');
    process.exit(1);
  }

  // TEST 2: Asynchronous Lazy Loading
  console.log('👉 TEST 2: Asynchronous Lazy Loading of public/brainData/<mesh>.json...');
  console.log(`   Initial cache state for "frontal_lobe": ${isMeshMetadataCached('frontal_lobe') ? 'CACHED' : 'NOT CACHED (Lazy)'}`);

  const meta1 = await fetchMeshMetadata('frontal_lobe');
  console.log(`   Fetched Name: "${meta1.name}", Functions Count: ${meta1.functions.length}, isCached: ${meta1.isCached}`);

  if (meta1.name === 'Frontal Lobe' && meta1.isCached === false) {
    console.log('   ✅ TEST 2 PASSED: Metadata lazy loaded asynchronously on demand!\n');
  } else {
    console.log('   ❌ TEST 2 FAILED!');
    process.exit(1);
  }

  // TEST 3: In-Memory Caching
  console.log('👉 TEST 3: In-Memory Cache Verification...');
  console.log(`   Cache state before second call: ${isMeshMetadataCached('frontal_lobe') ? 'CACHED ✅' : 'NOT CACHED ❌'}`);

  const meta2 = await fetchMeshMetadata('frontal_lobe');
  console.log(`   Second fetch isCached property: ${meta2.isCached}`);

  if (meta2.isCached === true && meta2.name === 'Frontal Lobe') {
    console.log('   ✅ TEST 3 PASSED: Loaded metadata retrieved directly from memory cache!\n');
  } else {
    console.log('   ❌ TEST 3 FAILED!');
    process.exit(1);
  }

  // TEST 4: Future Expansion & Fallback Support
  console.log('👉 TEST 4: Future Expansion / Fallback for Unknown GLB Meshes...');
  const unknownMeta = await fetchMeshMetadata('future_glb_node_x99');
  console.log(`   Fallback Metadata Name: "${unknownMeta.name}"`);
  console.log(`   Fallback Location: "${unknownMeta.location}"`);

  if (unknownMeta.id === 'future_glb_node_x99' && unknownMeta.name.includes('Future Glb Node X99')) {
    console.log('   ✅ TEST 4 PASSED: Future expansion supported seamlessly with dynamic fallback metadata!\n');
  } else {
    console.log('   ❌ TEST 4 FAILED!');
    process.exit(1);
  }

  console.log('🎉 ALL TASK 6 METADATA LOADING & CACHING TESTS PASSED SUCCESSFULLY!');
}

runTests();
