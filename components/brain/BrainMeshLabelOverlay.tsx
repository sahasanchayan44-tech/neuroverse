'use client';

import React, { useState, useEffect } from 'react';
import * as THREE from 'three';
import { BrainStructureDetail } from '@/data/brainData';
import { Brain, Activity, Sparkles, Check, Database } from 'lucide-react';

interface MeshLabelPos {
  id: string;
  name: string;
  latinName?: string;
  description: string;
  functions: string[];
  worldPos: THREE.Vector3;
  screenX: number;
  screenY: number;
  isBehind: boolean;
  isHovered: boolean;
  isSelected: boolean;
}

interface BrainMeshLabelOverlayProps {
  structures: BrainStructureDetail[];
  selectedStructure: BrainStructureDetail | null;
  hoveredStructureId: string | null;
  camera: THREE.PerspectiveCamera | null;
  domElement: HTMLElement | null;
  partMeshes: Record<string, THREE.Mesh>;
  onSelectStructure: (s: BrainStructureDetail | null) => void;
  onHoverStructure: (id: string | null) => void;
}

export const BrainMeshLabelOverlay: React.FC<BrainMeshLabelOverlayProps> = ({
  structures,
  selectedStructure,
  hoveredStructureId,
  camera,
  domElement,
  partMeshes,
  onSelectStructure,
  onHoverStructure,
}) => {
  const [labels, setLabels] = useState<MeshLabelPos[]>([]);

  useEffect(() => {
    if (!camera || !domElement) return;

    let animId: number;

    const updateLabelPositions = () => {
      animId = requestAnimationFrame(updateLabelPositions);

      const rect = domElement.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      if (width === 0 || height === 0) return;

      const activeLabels: MeshLabelPos[] = [];

      structures.forEach((struct) => {
        const isHovered = hoveredStructureId === struct.id || hoveredStructureId === struct.name;
        const isSelected = selectedStructure?.id === struct.id;

        // Only project label onto screen when the specific 3D GLB brain part is hovered or selected
        if (!isHovered && !isSelected) return;

        let worldPos = new THREE.Vector3();
        const mesh = partMeshes[struct.id];

        if (mesh) {
          mesh.getWorldPosition(worldPos);
          // Offset slightly upward above the 3D part's center
          worldPos.y += 0.8;
        } else {
          return;
        }

        const tempVec = worldPos.clone();
        tempVec.project(camera);

        const isBehind = tempVec.z > 1.0;
        const screenX = (tempVec.x * 0.5 + 0.5) * width;
        const screenY = (-(tempVec.y * 0.5) + 0.5) * height;

        activeLabels.push({
          id: struct.id,
          name: struct.name,
          latinName: struct.latinName,
          description: struct.description,
          functions: struct.functions || [],
          worldPos,
          screenX,
          screenY,
          isBehind,
          isHovered,
          isSelected,
        });
      });

      setLabels(activeLabels);
    };

    updateLabelPositions();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [camera, domElement, structures, selectedStructure, hoveredStructureId, partMeshes]);

  if (!camera || !domElement || labels.length === 0) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-40 overflow-hidden font-mono select-none">
      {labels.map((label) => {
        if (label.isBehind) return null;

        const struct = structures.find((s) => s.id === label.id);
        if (!struct) return null;

        return (
          <div
            key={label.id}
            style={{
              transform: `translate3d(${label.screenX}px, ${label.screenY}px, 0px)`,
            }}
            className="pointer-events-none absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 animate-fade-in"
          >
            {/* Lobe Name Tag Anchored Directly onto 3D GLB Brain Part */}
            <div className="flex flex-col items-center gap-1 pointer-events-none">
              <div
                className={`flex items-center gap-2 px-3 py-1 rounded-xl border text-[11px] font-bold backdrop-blur-md transition-all duration-300 shadow-hologram pointer-events-none ${
                  label.isSelected
                    ? 'bg-neuro-cyan/40 border-neuro-cyan text-white shadow-cyan-glow scale-110 ring-2 ring-neuro-cyan/60'
                    : 'bg-black/80 border-neuro-cyan/80 text-cyan-200'
                }`}
              >
                <Brain className="w-3.5 h-3.5 text-neuro-cyan animate-pulse" />
                <span>{label.name.toUpperCase()}</span>
                {label.latinName && (
                  <span className="text-[9px] text-neuro-cyan/70 font-mono uppercase">
                    ({label.latinName})
                  </span>
                )}
              </div>

              {/* Connector Pin */}
              <div className="w-0.5 h-4 bg-gradient-to-b from-neuro-cyan to-transparent animate-pulse" />
              <div className="w-2 h-2 rounded-full border border-neuro-cyan bg-neuro-cyan/60 shadow-cyan-glow animate-ping" />
            </div>
          </div>
        );
      })}
    </div>
  );
};
