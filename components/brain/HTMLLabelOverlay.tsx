'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import * as THREE from 'three';
import { BrainStructureDetail } from '@/data/brainData';
import { Brain, Sparkles, Activity, Check, Search, ChevronRight } from 'lucide-react';

interface LabelScreenPos {
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
  isSearchMatch: boolean;
}

interface HTMLLabelOverlayProps {
  structures: BrainStructureDetail[];
  selectedStructure: BrainStructureDetail | null;
  hoveredStructureId: string | null;
  searchQuery: string;
  camera: THREE.PerspectiveCamera | null;
  domElement: HTMLElement | null;
  onSelectStructure: (s: BrainStructureDetail | null) => void;
  onHoverStructure: (id: string | null) => void;
}

// 3D Anatomical Mesh Center Map
const MESH_CENTERS_MAP: Record<string, THREE.Vector3> = {
  frontal_lobe: new THREE.Vector3(0, 2.6, 3.2),
  parietal_lobe: new THREE.Vector3(0, 5.0, -1.8),
  temporal_lobe: new THREE.Vector3(4.2, -0.8, 0.4),
  occipital_lobe: new THREE.Vector3(0, 2.0, -5.8),
  cerebellum: new THREE.Vector3(0, -4.5, -4.8),
  brain_stem: new THREE.Vector3(0, -5.5, -1.0),
  pons: new THREE.Vector3(0, -4.0, -1.2),
  medulla: new THREE.Vector3(0, -6.8, -1.6),
  corpus_callosum: new THREE.Vector3(0, 1.8, 0.2),
  thalamus: new THREE.Vector3(0, 1.0, -0.4),
  hypothalamus: new THREE.Vector3(0, -0.8, 1.0),
  pituitary_gland: new THREE.Vector3(0, -2.4, 2.0),
  pineal_gland: new THREE.Vector3(0, 0.6, -2.2),
  amygdala: new THREE.Vector3(2.4, -1.2, 1.0),
  hippocampus: new THREE.Vector3(2.6, -0.8, -1.2),
  basal_ganglia: new THREE.Vector3(2.2, 0.8, 0.6),
  ventricles: new THREE.Vector3(0, 1.8, -0.2),
};

export const HTMLLabelOverlay: React.FC<HTMLLabelOverlayProps> = ({
  structures,
  selectedStructure,
  hoveredStructureId,
  searchQuery,
  camera,
  domElement,
  onSelectStructure,
  onHoverStructure,
}) => {
  const [labelPositions, setLabelPositions] = useState<LabelScreenPos[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Update 2D screen positions & apply collision overlap avoidance
  useEffect(() => {
    if (!camera || !domElement) return;

    let animId: number;

    const updatePositions = () => {
      animId = requestAnimationFrame(updatePositions);

      const rect = domElement.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      if (width === 0 || height === 0) return;

      const rawLabels: LabelScreenPos[] = structures.map((struct) => {
        const worldPos = MESH_CENTERS_MAP[struct.id] || new THREE.Vector3(0, 0, 0);
        const tempVec = worldPos.clone();
        tempVec.project(camera);

        const isBehind = tempVec.z > 1.0;
        const screenX = (tempVec.x * 0.5 + 0.5) * width;
        const screenY = (-(tempVec.y * 0.5) + 0.5) * height;

        const isHovered = hoveredStructureId === struct.id || hoveredStructureId === struct.name;
        const isSelected = selectedStructure?.id === struct.id;
        
        const isSearchMatch = Boolean(
          searchQuery.trim().length > 0 &&
          (struct.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
           struct.latinName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
           struct.description.toLowerCase().includes(searchQuery.toLowerCase()))
        );

        return {
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
          isSearchMatch,
        };
      });

      // Overlap Avoidance Algorithm: Resolve screen-space collisions between labels
      const resolvedLabels = resolveLabelCollisions(rawLabels);
      setLabelPositions(resolvedLabels);
    };

    updatePositions();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [camera, domElement, structures, selectedStructure, hoveredStructureId, searchQuery]);

  /**
   * Force-directed collision avoidance algorithm to prevent overlapping labels.
   */
  function resolveLabelCollisions(labels: LabelScreenPos[]): LabelScreenPos[] {
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

  if (!camera || !domElement) return null;

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-30 overflow-hidden font-mono select-none"
    >
      {labelPositions.map((label) => {
        if (label.isBehind) return null;

        const struct = structures.find((s) => s.id === label.id);
        if (!struct) return null;

        const isDimmed = searchQuery.trim().length > 0 && !label.isSearchMatch;

        return (
          <div
            key={label.id}
            style={{
              transform: `translate3d(${label.screenX}px, ${label.screenY}px, 0px)`,
            }}
            className={`pointer-events-auto absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${
              isDimmed ? 'opacity-25' : 'opacity-100'
            }`}
          >
            {/* HTML Label Badge */}
            <button
              onClick={() => onSelectStructure(struct)}
              onMouseEnter={() => onHoverStructure(label.id)}
              onMouseLeave={() => onHoverStructure(null)}
              className={`group relative flex items-center gap-1.5 px-2.5 py-1 rounded-xl border text-[11px] font-bold backdrop-blur-md transition-all duration-200 shadow-hologram ${
                label.isSelected
                  ? 'bg-neuro-cyan/30 border-neuro-cyan text-white shadow-cyan-glow scale-110 ring-2 ring-neuro-cyan/50'
                  : label.isSearchMatch
                  ? 'bg-neuro-yellow/20 border-neuro-yellow text-neuro-yellow animate-pulse scale-105 shadow-yellow-glow'
                  : label.isHovered
                  ? 'bg-white/20 border-neuro-cyan/80 text-cyan-200 scale-105'
                  : 'bg-black/60 border-neuro-cyan/30 text-cyan-300/80 hover:bg-black/80 hover:text-white'
              }`}
            >
              <div
                className={`w-2 h-2 rounded-full ${
                  label.isSelected
                    ? 'bg-neuro-cyan animate-ping'
                    : label.isSearchMatch
                    ? 'bg-neuro-yellow animate-bounce'
                    : 'bg-neuro-cyan/60'
                }`}
              />

              <span className="truncate max-w-[110px]">{label.name}</span>

              {label.isSearchMatch && (
                <span className="ml-1 text-[9px] px-1 py-0.2 rounded bg-neuro-yellow/30 text-yellow-200 border border-neuro-yellow/50">
                  MATCH
                </span>
              )}
            </button>

            {/* Hover Tooltip Card */}
            {label.isHovered && !label.isSelected && (
              <div className="absolute left-1/2 bottom-full mb-2 -translate-x-1/2 w-64 p-3 bg-neuro-panel backdrop-blur-xl border border-neuro-cyan/50 rounded-xl shadow-hologram text-white text-xs z-50 animate-fadeIn pointer-events-none">
                <div className="flex items-center justify-between border-b border-neuro-border pb-1.5 mb-1.5">
                  <span className="font-bold text-neuro-cyan flex items-center gap-1">
                    <Brain className="w-3.5 h-3.5 text-neuro-cyan" /> {label.name}
                  </span>
                  {label.latinName && (
                    <span className="text-[9px] text-neuro-muted">{label.latinName}</span>
                  )}
                </div>

                <p className="text-[11px] text-gray-300 leading-snug line-clamp-2 mb-2 font-sans">
                  {label.description}
                </p>

                {label.functions.length > 0 && (
                  <div className="text-[10px] text-cyan-300 flex items-center gap-1">
                    <Activity className="w-3 h-3 text-neuro-green" />
                    <span className="truncate">{label.functions[0]}</span>
                  </div>
                )}
              </div>
            )}

            {/* Selected HTML Pointer Line Indicator */}
            {label.isSelected && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 flex flex-col items-center pointer-events-none">
                <div className="w-0.5 h-6 bg-gradient-to-b from-neuro-cyan to-transparent animate-pulse" />
                <div className="w-2 h-2 rounded-full border border-neuro-cyan bg-neuro-cyan/40 shadow-cyan-glow" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default HTMLLabelOverlay;
