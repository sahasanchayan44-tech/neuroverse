'use client';

import React, { useState } from 'react';
import { Layers, Sliders, Eye, ChevronLeft, ChevronRight, Cpu, Zap, Activity } from 'lucide-react';
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
  const [activeTab, setActiveTab] = useState<'anatomy' | 'graphics' | 'parameters'>('anatomy');

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
    <aside className="absolute top-24 left-4 bottom-6 z-20 w-80 max-h-[calc(100vh-7rem)] bg-neuro-panel backdrop-blur-xl border border-neuro-cyan/30 rounded-2xl shadow-hologram p-4 flex flex-col gap-3 overflow-hidden text-white transition-all font-mono">
      
      {/* Header with Minimize Button & Sci-Fi Tabs */}
      <div className="flex items-center justify-between border-b border-neuro-border pb-2 flex-shrink-0">
        <div className="flex gap-1 text-xs flex-1">
          <button
            onClick={() => setActiveTab('anatomy')}
            className={`flex-1 py-1 rounded-lg border transition-all flex items-center justify-center gap-1 font-bold ${
              activeTab === 'anatomy' ? 'bg-neuro-cyan/20 border-neuro-cyan text-white shadow-cyan-glow' : 'bg-white/5 border-white/10 text-neuro-muted'
            }`}
          >
            <Layers className="w-3.5 h-3.5" /> ANATOMY
          </button>

          <button
            onClick={() => setActiveTab('graphics')}
            className={`flex-1 py-1 rounded-lg border transition-all flex items-center justify-center gap-1 font-bold ${
              activeTab === 'graphics' ? 'bg-neuro-purple/20 border-neuro-purple text-white shadow-purple-glow' : 'bg-white/5 border-white/10 text-neuro-muted'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" /> SHADERS
          </button>

          <button
            onClick={() => setActiveTab('parameters')}
            className={`flex-1 py-1 rounded-lg border transition-all flex items-center justify-center gap-1 font-bold ${
              activeTab === 'parameters' ? 'bg-neuro-green/20 border-neuro-green text-white shadow-green-glow' : 'bg-white/5 border-white/10 text-neuro-muted'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" /> SPECS
          </button>
        </div>

        <button
          onClick={() => setIsCollapsed(true)}
          className="ml-2 p-1 rounded-lg bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white transition-all"
          title="Minimize Left Panel for Full Brain View"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
      </div>

      {/* Tab 1: Anatomy Layers & Catalog */}
      {activeTab === 'anatomy' && (
        <div className="flex flex-col gap-3 flex-1 min-h-0 overflow-y-auto pr-1">
          
          {/* Layer Toggles */}
          <div className="flex flex-col gap-2 bg-black/50 p-3 rounded-xl border border-white/10 text-xs font-sans flex-shrink-0">
            <span className="text-[10px] font-mono text-neuro-cyan font-bold tracking-wider">BIOPHYSICAL TISSUE LAYERS</span>
            
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
          </div>

          {/* Structure Catalog */}
          <div className="flex flex-col gap-1.5 font-sans">
            <span className="text-[10px] font-mono text-neuro-cyan font-bold tracking-wider flex-shrink-0">
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

        </div>
      )}

      {/* Tab 2: Graphics Shaders & Sliders */}
      {activeTab === 'graphics' && (
        <div className="flex flex-col gap-3 flex-1 min-h-0 overflow-y-auto pr-1">
          <div className="flex flex-col gap-3 bg-black/50 p-3 rounded-xl border border-white/10 text-xs">
            <span className="text-[10px] font-mono text-neuro-purple font-bold tracking-wider flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5" /> HOLOGRAM SHADER CONTROLS
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
        </div>
      )}

      {/* Tab 3: Computed Parameters */}
      {activeTab === 'parameters' && (
        <div className="flex flex-col gap-2 flex-1 min-h-0 overflow-y-auto pr-1 font-mono text-xs">
          <span className="text-[10px] font-mono text-neuro-green font-bold tracking-wider flex items-center gap-1.5 flex-shrink-0">
            <Cpu className="w-3.5 h-3.5" /> COMPUTED NEURO METRICS
          </span>

          <div className="p-2.5 bg-white/5 border border-white/10 rounded-xl flex flex-col gap-1">
            <span className="text-neuro-muted text-[10px]">Total Neurons:</span>
            <span className="font-bold text-neuro-cyan text-xs">
              {selectedStructure?.neuronCountBillion ? `${selectedStructure.neuronCountBillion} Billion` : '86.1 Billion Neurons'}
            </span>
          </div>

          <div className="p-2.5 bg-white/5 border border-white/10 rounded-xl flex flex-col gap-1">
            <span className="text-neuro-muted text-[10px]">Synapse Count:</span>
            <span className="font-bold text-neuro-pink text-xs">
              {selectedStructure?.synapseDensityTrillion ? `${selectedStructure.synapseDensityTrillion} Trillion` : '150 Trillion'}
            </span>
          </div>

          <div className="p-2.5 bg-white/5 border border-white/10 rounded-xl flex flex-col gap-1">
            <span className="text-neuro-muted text-[10px]">Cerebral Blood Flow:</span>
            <span className="font-bold text-neuro-green text-xs">
              {selectedStructure?.cbfMlPer100g ? `${selectedStructure.cbfMlPer100g} mL/100g/min` : '54 mL/100g/min'}
            </span>
          </div>

          <div className="p-2.5 bg-white/5 border border-white/10 rounded-xl flex flex-col gap-1">
            <span className="text-neuro-muted text-[10px]">Action Potential Spike Threshold:</span>
            <span className="font-bold text-neuro-yellow text-xs">
              {selectedStructure?.actionPotentialThresholdMv ? `${selectedStructure.actionPotentialThresholdMv} mV` : '-55 mV'}
            </span>
          </div>
        </div>
      )}

    </aside>
  );
};
