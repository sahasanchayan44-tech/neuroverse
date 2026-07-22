'use client';

import { useState, useEffect } from 'react';
import { fetchMeshMetadata, MeshMetadata } from '../services/metadataService';

export function useMeshMetadata(meshId: string | null) {
  const [metadata, setMetadata] = useState<MeshMetadata | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!meshId) {
      setMetadata(null);
      setIsLoading(false);
      setError(null);
      return;
    }

    let isMounted = true;
    setIsLoading(true);
    setError(null);

    fetchMeshMetadata(meshId)
      .then((data) => {
        if (isMounted) {
          setMetadata(data);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message || 'Failed to load metadata');
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [meshId]);

  return { metadata, isLoading, error };
}

export default useMeshMetadata;
