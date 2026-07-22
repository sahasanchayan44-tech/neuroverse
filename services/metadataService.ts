'use client';

export interface MeshMetadata {
  id: string;
  name: string;
  latinName?: string;
  category?: string;
  location: string;
  description: string;
  functions: string[];
  bloodSupply?: string;
  neurotransmitters?: string[];
  diseases?: string[];
  clinicalImportance?: string;
  researchNotes?: string;
  interestingFacts?: string[];
  isCached?: boolean;
  loadedAt?: string;
}

// In-memory cache for loaded metadata JSON files
const metadataCache = new Map<string, MeshMetadata>();

/**
 * Derives a clean mesh ID string from any mesh object, node name, or structure identifier.
 */
export function deriveMeshId(rawNameOrId: string): string {
  if (!rawNameOrId) return 'unknown';
  return rawNameOrId
    .toLowerCase()
    .trim()
    .replace(/^mesh_?/i, '')
    .replace(/[^a-z0-9_]/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_|_$/g, '') || 'unknown';
}

/**
 * Asynchronously loads metadata from /brainData/<mesh>.json.
 * Lazy-loads on demand and caches loaded files in memory to prevent duplicate HTTP requests.
 * Supports future expansion with fallback metadata generation for unknown GLB nodes.
 */
export async function fetchMeshMetadata(meshId: string): Promise<MeshMetadata> {
  const sanitizedId = deriveMeshId(meshId);

  // 1. Check in-memory cache
  if (metadataCache.has(sanitizedId)) {
    const cached = metadataCache.get(sanitizedId)!;
    return { ...cached, isCached: true };
  }

  // 2. Asynchronously fetch public/brainData/<mesh>.json
  try {
    const url = `/brainData/${sanitizedId}.json`;
    console.log(`📡 [MetadataService] Lazy loading metadata from ${url}...`);

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP Error ${response.status}: Failed to fetch ${url}`);
    }

    const data: MeshMetadata = await response.json();
    const result: MeshMetadata = {
      ...data,
      id: sanitizedId,
      isCached: false,
      loadedAt: new Date().toLocaleTimeString(),
    };

    // Cache loaded file in memory
    metadataCache.set(sanitizedId, result);
    return result;
  } catch (error) {
    console.warn(`⚠️ [MetadataService] Could not load /brainData/${sanitizedId}.json. Generating fallback metadata.`, error);
    
    // Fallback for future expansion / unknown GLB meshes
    const fallback = generateFallbackMetadata(sanitizedId, meshId);
    metadataCache.set(sanitizedId, fallback);
    return fallback;
  }
}

/**
 * Generate fallback metadata for future expansion (e.g. newly added GLB mesh nodes).
 */
function generateFallbackMetadata(sanitizedId: string, rawName: string): MeshMetadata {
  const formattedName = rawName
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    id: sanitizedId,
    name: formattedName,
    latinName: `Structure ${formattedName}`,
    category: 'anatomical_node',
    location: 'Central Nervous System / Encephalon Region',
    description: `Detailed anatomical node parsed from 3D GLB model mesh: "${rawName}". Metadata dynamically instantiated via extensible schema.`,
    functions: [
      'Neural signal transduction & pathway relay',
      'Structural integration within local brain sub-network',
    ],
    bloodSupply: 'Cerebral Micro-Vascular System',
    neurotransmitters: ['Glutamate', 'GABA'],
    diseases: ['Localized Neural Lesion', 'Synaptic Dysfunction'],
    clinicalImportance: 'Contributes to overall neuro-architectural connectivity and regional biophysical signal flow.',
    researchNotes: 'Extensible GLB mesh node automatically cataloged by NeuroVerse Metadata Engine.',
    interestingFacts: ['Dynamically generated via fallback schema to support future GLB expansion.'],
    isCached: false,
    loadedAt: new Date().toLocaleTimeString(),
  };
}

/**
 * Pre-warm or manual cache check utility.
 */
export function isMeshMetadataCached(meshId: string): boolean {
  return metadataCache.has(deriveMeshId(meshId));
}

/**
 * Clear metadata cache (testing / debugging).
 */
export function clearMetadataCache(): void {
  metadataCache.clear();
}
