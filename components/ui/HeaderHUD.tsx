'use client';

import React, { useState } from 'react';
import { Search, Brain, Volume2, VolumeX, Camera, Zap, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';
import { BrainStructureDetail } from '@/data/brainData';
import { ViewMode } from '@/hooks/useBrainState';
import { fuzzySearchStructures } from '@/utils/fuzzySearch';

interface HeaderHUDProps {
  structures: BrainStructureDetail[];
  activeSimulation: string | null;
  viewMode: ViewMode;
  isAudioActive: boolean;
  searchQuery?: string;
  isHeaderCollapsed?: boolean;
  onToggleHeaderCollapse?: () => void;
  onSearchQueryChange?: (q: string) => void;
  onSelectStructure: (s: BrainStructureDetail) => void;
  onSelectSimulation: (sim: string) => void;
  onChangeViewMode: (mode: ViewMode) => void;
  onToggleAudio: () => void;
  onExportScreenshot: () => void;
  onOpenNeuronModal: () => void;
  onOpenMetricsModal: () => void;
}

const SIMULATION_BUTTONS = [
  'Thinking', 'Memory', 'Speech', 'Vision', 'Touch', 'Emotion', 'Fear', 'Walking', 'Learning', 'Hearing', 'Motor Control'
];

export const HeaderHUD: React.FC<HeaderHUDProps> = ({
  structures,
  activeSimulation,
  viewMode,
  isAudioActive,
  searchQuery: externalSearchQuery,
  isHeaderCollapsed = false,
  onToggleHeaderCollapse,
  onSearchQueryChange,
  onSelectStructure,
  onSelectSimulation,
  onChangeViewMode,
  onToggleAudio,
  onExportScreenshot,
  onOpenNeuronModal,
  onOpenMetricsModal
}) => {
  const [internalQuery, setInternalQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const query = externalSearchQuery !== undefined ? externalSearchQuery : internalQuery;

  const handleQueryChange = (val: string) => {
    setInternalQuery(val);
    if (onSearchQueryChange) {
      onSearchQueryChange(val);
    }
    setIsSearching(true);
  };

  const fuzzyResults = fuzzySearchStructures(structures, query);

  const handleSelect = (structure: BrainStructureDetail) => {
    onSelectStructure(structure);
    setIsSearching(false);
    handleQueryChange('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && fuzzyResults.length > 0) {
      handleSelect(fuzzyResults[0].item);
    }
  };

  if (isHeaderCollapsed) {
    return (
      <header className="absolute top-3 left-4 right-4 z-30 flex items-center justify-between px-4 py-2 bg-neuro-panel/90 backdrop-blur-xl border border-neuro-cyan/40 rounded-xl shadow-hologram font-mono text-xs transition-all">
        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 text-[9px] text-neuro-cyan bg-neuro-cyan/20 border border-neuro-cyan/40 rounded">
            HUD MINIMIZED
          </span>
        </div>

        <div className="flex items-center gap-2">
          <select
            value={viewMode}
            onChange={(e) => onChangeViewMode(e.target.value as ViewMode)}
            className="px-2 py-1 bg-black/60 border border-neuro-border rounded-lg text-xs font-mono text-white outline-none cursor-pointer focus:border-neuro-cyan"
          >
            <option value="default">Default Hologram 3D</option>
            <option value="exploded">Exploded Anatomy View</option>
            <option value="cross_section">Cross-Section Clip</option>
            <option value="xray">X-Ray Mode</option>
            <option value="wireframe">Wireframe Mode</option>
          </select>

          {onToggleHeaderCollapse && (
            <button
              onClick={onToggleHeaderCollapse}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neuro-cyan/20 border border-neuro-cyan/50 text-neuro-cyan hover:text-white hover:bg-neuro-cyan/30 transition-all font-bold text-xs"
              title="Expand Header HUD & Controls"
            >
              <ChevronDown className="w-4 h-4" /> EXPAND HUD
            </button>
          )}
        </div>
      </header>
    );
  }

  return (
    <header className="absolute top-4 left-4 right-4 z-30 flex items-center justify-between px-5 py-3 glass-panel transition-all duration-300">
      
      {/* Brand & System Status */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-neuro-cyan/15 border border-neuro-cyan/40 flex items-center justify-center text-neuro-cyan shadow-cyan-glow">
            <Brain className="w-5 h-5 animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-lg tracking-wider text-white uppercase leading-none">
              NEURO<span className="text-neuro-cyan">VERSE</span>
            </span>
            <span className="text-[10px] font-mono text-neuro-textMuted tracking-widest uppercase mt-0.5">
              NEUROSCIENCE OS v3.2
            </span>
          </div>
        </div>

        {/* System Online Badge */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-neuro-green/10 border border-neuro-green/30 text-neuro-green text-[10px] font-mono font-semibold">
          <div className="w-1.5 h-1.5 rounded-full bg-neuro-green animate-ping" />
          SYSTEM ONLINE // REAL-TIME CONNECTOME
        </div>
      </div>

      {/* Global Fuzzy Search Bar */}
      <div className="relative flex-1 max-w-md mx-4">
        <div className="relative flex items-center">
          <Search className="absolute left-3.5 w-4 h-4 text-neuro-cyan" />
          <input
            type="text"
            value={query}
            onChange={(e) => handleQueryChange(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsSearching(true)}
            onBlur={() => setTimeout(() => setIsSearching(false), 200)}
            placeholder="Search anatomy, neural pathways, or diseases..."
            className="w-full pl-10 pr-4 py-2 bg-neuro-card/80 border border-neuro-border rounded-xl text-xs font-sans text-slate-100 placeholder:text-slate-500 outline-none focus:border-neuro-cyan focus:ring-1 focus:ring-neuro-cyan/50 transition-all duration-200"
          />
        </div>

        {/* Autocomplete Dropdown */}
        {isSearching && fuzzyResults.length > 0 && (
          <div className="absolute top-12 left-0 right-0 max-h-64 overflow-y-auto glass-panel p-2 flex flex-col gap-1 text-xs z-50">
            {fuzzyResults.map(({ item: s, score, matchType }) => (
              <button
                key={s.id}
                onMouseDown={(e) => {
                  e.preventDefault();
                  handleSelect(s);
                }}
                className="flex items-center justify-between p-2 rounded-xl hover:bg-neuro-cyan/15 text-left transition-all duration-200 group"
              >
                <div className="flex flex-col">
                  <span className="font-semibold text-slate-100 group-hover:text-neuro-cyan transition-colors">{s.name}</span>
                  {s.latinName && (
                    <span className="text-[10px] font-mono text-slate-400">{s.latinName}</span>
                  )}
                </div>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-neuro-cyan/15 border border-neuro-cyan/30 text-neuro-cyan font-semibold uppercase">
                  {matchType}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* View Mode & Tools */}
      <div className="flex items-center gap-2">
        <select
          value={viewMode}
          onChange={(e) => onChangeViewMode(e.target.value as ViewMode)}
          className="px-3.5 py-2 bg-neuro-card/90 border border-neuro-border rounded-xl text-xs font-mono text-slate-200 outline-none cursor-pointer focus:border-neuro-cyan transition-all duration-200"
          title="Switch 3D Brain Render Mode"
        >
          <option value="default">🌐 Holographic 3D View</option>
          <option value="solid">🧠 Bio-Solid Cortical Mode</option>
          <option value="wireframe">🕸️ Wireframe Mesh</option>
          <option value="exploded">💥 Exploded Anatomy View</option>
          <option value="xray">🦴 X-Ray Translucent Mode</option>
          <option value="synaptic_network">⚡ Synaptic Fiber Mode</option>
          <option value="vascular_tree">🩸 Angiography Vascular Mode</option>
          <option value="functional_mri">🔥 fMRI BOLD Activation</option>
          <option value="thermal_heat">🌡️ Infrared Telemetry</option>
          <option value="eeg_density">📊 EEG Density Mode</option>
        </select>

        <button
          onClick={onOpenNeuronModal}
          className="px-3 py-2 rounded-xl bg-neuro-purple/15 border border-neuro-purple/30 text-neuro-purple hover:bg-neuro-purple/25 text-xs font-mono font-semibold transition-all duration-200 flex items-center gap-1.5"
          title="Single Neuron & Synapse Micro Viewer"
        >
          <Zap className="w-3.5 h-3.5" /> Micro Neuron
        </button>

        <button
          onClick={onToggleAudio}
          className={`p-2 rounded-xl border transition-all duration-200 ${
            isAudioActive ? 'bg-neuro-cyan/20 border-neuro-cyan text-neuro-cyan shadow-cyan-glow' : 'bg-neuro-card/80 border-neuro-border text-slate-400 hover:text-slate-200'
          }`}
          title="Toggle Neural Sound Synth"
        >
          {isAudioActive ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
        </button>

        <button
          onClick={onExportScreenshot}
          className="p-2 rounded-xl bg-neuro-card/80 border border-neuro-border text-slate-200 hover:bg-neuro-cyan/20 hover:border-neuro-cyan/50 transition-all duration-200"
          title="Export Screen Snapshot"
        >
          <Camera className="w-4 h-4" />
        </button>
      </div>

    </header>
  );
};

