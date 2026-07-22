'use client';

import React, { useState } from 'react';
import { Layers, Sliders, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { BrainStructureDetail } from '@/data/brainData';
import { LayerState } from '@/hooks/useBrainState';

interface LayerPanelProps {
  structures: BrainStructureDetail[];
  selectedStructure: BrainStructureDetail | null;
  layers: LayerState;
  transparency: number;
  timeScale: number;
  onSelectStructure: (s: BrainStructureDetail) => void;
  onToggleLayer: (key: keyof LayerState) => void;
  onChangeTransparency: (val: number) => void;
  onChangeTimeScale: (val: number) => void;
}

export const LayerPanel: React.FC<LayerPanelProps> = ({
  structures,
  selectedStructure,
  layers,
  transparency,
  timeScale,
  onSelectStructure,
  onToggleLayer,
  onChangeTransparency,
  onChangeTimeScale
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  if (isCollapsed) {
    return (
      <button
        onClick={() => setIsCollapsed(false)}
        className="absolute top-28 left-4 z-30 p-3 bg-neuro-panel backdrop-blur-xl border border-neuro-cyan/40 rounded-2xl shadow-hologram text-neuro-cyan hover:text-white hover:bg-neuro-cyan/20 transition-all flex items-center gap-2 font-mono text-xs"
        title="Expand Anatomical Layers Panel"
      >
        <Layers className="w-4 h-4 text-neuro-cyan animate-pulse" />
        <span className="font-bold">LAYERS</span>
        <ChevronRight className="w-4 h-4 text-neuro-cyan" />
      </button>
    );
  }

  return (
    <aside className="absolute top-28 left-4 bottom-28 z-20 w-72 bg-neuro-panel backdrop-blur-xl border border-neuro-cyan/30 rounded-2xl shadow-hologram p-4 flex flex-col gap-4 overflow-y-auto text-white transition-all">
      
      {/* Header with Collapse Button */}
      <div className="flex items-center justify-between border-b border-neuro-border pb-2">
        <h2 className="text-xs font-mono font-bold text-neuro-cyan tracking-wider flex items-center gap-2">
          <Layers className="w-4 h-4" /> ANATOMICAL LAYERS
        </h2>
        <button
          onClick={() => setIsCollapsed(true)}
          className="p-1 rounded-lg bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white transition-all"
          title="Minimize Left Panel for Full Brain View"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
      </div>

      {/* Layer Toggles */}
      <div className="flex flex-col gap-2 bg-black/50 p-3 rounded-xl border border-white/10 text-xs">
        
        <label className="flex items-center justify-between cursor-pointer">
          <span className="text-gray-300">Grey Matter Cortex</span>
          <input
            type="checkbox"
            checked={layers.greyMatter}
            onChange={() => onToggleLayer('greyMatter')}
            className="accent-neuro-cyan cursor-pointer"
          />
        </label>

        <label className="flex items-center justify-between cursor-pointer">
          <span className="text-gray-300">White Matter Tracts</span>
          <input
            type="checkbox"
            checked={layers.whiteMatter}
            onChange={() => onToggleLayer('whiteMatter')}
            className="accent-neuro-cyan cursor-pointer"
          />
        </label>

        <label className="flex items-center justify-between cursor-pointer">
          <span className="text-gray-300">Cerebral Blood Vessels</span>
          <input
            type="checkbox"
            checked={layers.bloodVessels}
            onChange={() => onToggleLayer('bloodVessels')}
            className="accent-neuro-cyan cursor-pointer"
          />
        </label>

        <label className="flex items-center justify-between cursor-pointer">
          <span className="text-gray-300">Neural Network Nodes</span>
          <input
            type="checkbox"
            checked={layers.neurons}
            onChange={() => onToggleLayer('neurons')}
            className="accent-neuro-cyan cursor-pointer"
          />
        </label>

        <label className="flex items-center justify-between cursor-pointer">
          <span className="text-gray-300">Axon & Dendrite Fibers</span>
          <input
            type="checkbox"
            checked={layers.axons}
            onChange={() => onToggleLayer('axons')}
            className="accent-neuro-cyan cursor-pointer"
          />
        </label>

      </div>

      {/* Sliders */}
      <div className="flex flex-col gap-3 bg-black/50 p-3 rounded-xl border border-white/10 text-xs">
        <span className="text-[10px] font-mono text-neuro-cyan font-bold tracking-wider flex items-center gap-1.5">
          <Sliders className="w-3.5 h-3.5" /> GRAPHICS & TIME SCALE
        </span>

        <div className="flex flex-col gap-1">
          <div className="flex justify-between text-[11px] font-mono text-gray-400">
            <span>Tissue Opacity</span>
            <span>{Math.round(transparency * 100)}%</span>
          </div>
          <input
            type="range"
            min="0.1"
            max="1.0"
            step="0.05"
            value={transparency}
            onChange={(e) => onChangeTransparency(parseFloat(e.target.value))}
            className="accent-neuro-cyan cursor-pointer h-1 bg-white/20 rounded"
          />
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex justify-between text-[11px] font-mono text-gray-400">
            <span>Action Potential Speed</span>
            <span>{timeScale.toFixed(1)}x</span>
          </div>
          <input
            type="range"
            min="0.2"
            max="3.0"
            step="0.1"
            value={timeScale}
            onChange={(e) => onChangeTimeScale(parseFloat(e.target.value))}
            className="accent-neuro-cyan cursor-pointer h-1 bg-white/20 rounded"
          />
        </div>
      </div>

      {/* Structure List */}
      <div className="flex flex-col gap-1.5 flex-1 overflow-y-auto">
        <span className="text-[10px] font-mono text-neuro-cyan font-bold tracking-wider">
          TARGET STRUCTURES CATALOG
        </span>
        {structures.map(s => {
          const isSelected = selectedStructure && selectedStructure.id === s.id;
          return (
            <button
              key={s.id}
              onClick={() => onSelectStructure(s)}
              className={`p-2.5 rounded-xl border text-left transition-all flex items-center justify-between ${
                isSelected
                  ? 'bg-neuro-cyan/20 border-neuro-cyan text-white shadow-cyan-glow font-bold'
                  : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
              }`}
            >
              <span className="text-xs font-sans">{s.name}</span>
              <Eye className={`w-3.5 h-3.5 ${isSelected ? 'text-neuro-cyan' : 'text-gray-500'}`} />
            </button>
          );
        })}
      </div>

    </aside>
  );
};
