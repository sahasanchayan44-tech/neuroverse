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
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neuro-cyan/30 via-neuro-purple/40 to-neuro-pink/30 border border-neuro-cyan flex items-center justify-center text-neuro-cyan shadow-cyan-glow">
            <Brain className="w-4 h-4 animate-pulse text-white" />
          </div>
          <span className="font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-neuro-cyan to-neuro-purple text-sm sm:text-base">
            NEUROVERSE 3D
          </span>
          <span className="px-2 py-0.5 text-[9px] text-neuro-cyan bg-neuro-cyan/20 border border-neuro-cyan/40 rounded hidden md:inline">
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
    <header className="absolute top-3 left-4 right-4 z-30 flex flex-col gap-3 p-3.5 bg-neuro-panel backdrop-blur-xl border border-neuro-cyan/40 rounded-2xl shadow-hologram transition-all">
      
      {/* Top Row: Brand, Search, Controls */}
      <div className="flex items-center justify-between gap-4">
        
        {/* Brand Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neuro-cyan/30 via-neuro-purple/40 to-neuro-pink/30 border border-neuro-cyan flex items-center justify-center text-neuro-cyan shadow-cyan-glow">
            <Brain className="w-6 h-6 animate-pulse text-white" />
          </div>
          <div>
            <h1 className="text-lg font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-neuro-cyan to-neuro-purple flex items-center gap-2">
              NEUROVERSE <span className="px-1.5 py-0.5 text-[10px] font-mono text-neuro-cyan bg-neuro-cyan/20 border border-neuro-cyan rounded">HOLOGRAM 3D</span>
            </h1>
            <span className="text-[10px] font-mono text-neuro-cyan/70 tracking-wider">ULTRALIGHT MEDICAL NEUROSCIENCE ENGINE</span>
          </div>
        </div>

        {/* Global Fuzzy Search Bar */}
        <div className="relative flex-1 max-w-md">
          <div className="relative flex items-center">
            <Search className="absolute left-3 w-4 h-4 text-neuro-cyan" />
            <input
              type="text"
              value={query}
              onChange={(e) => handleQueryChange(e.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={() => setIsSearching(true)}
              onBlur={() => setTimeout(() => setIsSearching(false), 200)}
              placeholder="Fuzzy search (e.g. Hippocampus, Amygdala, Thalamus)..."
              className="w-full pl-9 pr-4 py-2 bg-black/60 border border-neuro-border rounded-xl text-xs font-mono text-white placeholder-gray-500 outline-none focus:border-neuro-cyan focus:shadow-cyan-glow transition-all"
            />
          </div>

          {/* Fuzzy Autocomplete Dropdown */}
          {isSearching && fuzzyResults.length > 0 && (
            <div className="absolute top-11 left-0 right-0 max-h-64 overflow-y-auto bg-neuro-dark border border-neuro-cyan/50 rounded-xl shadow-hologram p-2 flex flex-col gap-1 text-xs z-50">
              {fuzzyResults.map(({ item: s, score, matchType }) => (
                <button
                  key={s.id}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    handleSelect(s);
                  }}
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-neuro-cyan/20 text-left transition-all group"
                >
                  <div className="flex flex-col">
                    <span className="font-bold text-white font-sans group-hover:text-neuro-cyan transition-colors">{s.name}</span>
                    {s.latinName && (
                      <span className="text-[9px] font-mono text-gray-400">{s.latinName}</span>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded border uppercase ${
                      matchType === 'exact'
                        ? 'bg-neuro-green/20 border-neuro-green text-neuro-green'
                        : matchType === 'fuzzy'
                        ? 'bg-neuro-yellow/20 border-neuro-yellow text-neuro-yellow'
                        : 'bg-neuro-cyan/20 border-neuro-cyan text-neuro-cyan'
                    }`}>
                      {matchType} ({score}%)
                    </span>
                  </div>
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
            className="px-3 py-2 bg-black/60 border border-neuro-border rounded-xl text-xs font-mono text-white outline-none cursor-pointer focus:border-neuro-cyan"
          >
            <option value="default">Default Hologram 3D</option>
            <option value="exploded">Exploded Anatomy View</option>
            <option value="cross_section">Cross-Section Clip</option>
            <option value="xray">X-Ray Mode</option>
            <option value="wireframe">Wireframe Mode</option>
          </select>

          <button
            onClick={onOpenNeuronModal}
            className="px-2.5 py-2 rounded-xl bg-neuro-purple/20 border border-neuro-purple text-neuro-purple hover:bg-neuro-purple/30 text-xs font-mono font-bold transition-all flex items-center gap-1.5"
            title="Single Neuron & Synapse Micro Viewer"
          >
            <Zap className="w-3.5 h-3.5" /> Neuron Specs
          </button>

          <button
            onClick={onOpenMetricsModal}
            className="px-2.5 py-2 rounded-xl bg-neuro-cyan/20 border border-neuro-cyan text-neuro-cyan hover:bg-neuro-cyan/30 text-xs font-mono font-bold transition-all flex items-center gap-1.5"
            title="Server Telemetry Metrics"
          >
            <ShieldCheck className="w-3.5 h-3.5" /> Server HUD
          </button>

          <button
            onClick={onToggleAudio}
            className={`p-2 rounded-xl border transition-all ${
              isAudioActive ? 'bg-neuro-cyan/20 border-neuro-cyan text-neuro-cyan shadow-cyan-glow' : 'bg-white/5 border-white/10 text-gray-400'
            }`}
            title="Toggle Neural Sound Synth"
          >
            {isAudioActive ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          <button
            onClick={onExportScreenshot}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/15 transition-all"
            title="Export Screenshot"
          >
            <Camera className="w-4 h-4" />
          </button>

          {onToggleHeaderCollapse && (
            <button
              onClick={onToggleHeaderCollapse}
              className="p-2 rounded-xl bg-neuro-cyan/20 border border-neuro-cyan/50 text-neuro-cyan hover:bg-neuro-cyan/30 hover:text-white transition-all flex items-center gap-1 text-xs font-mono font-bold ml-1"
              title="Minimize Top HUD Bar"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>

      {/* Bottom Row: Functional Simulation Mode Buttons */}
      <div className="flex items-center gap-1.5 overflow-x-auto pt-1 border-t border-white/10">
        <span className="text-[10px] font-mono text-neuro-cyan font-bold whitespace-nowrap flex items-center gap-1 mr-1">
          <Zap className="w-3.5 h-3.5 text-yellow-400 animate-pulse" /> FUNCTIONAL SIMULATIONS:
        </span>
        {SIMULATION_BUTTONS.map(sim => {
          const isActive = activeSimulation === sim;
          return (
            <button
              key={sim}
              onClick={() => onSelectSimulation(sim)}
              className={`px-3 py-1 text-xs font-mono rounded-lg border transition-all whitespace-nowrap ${
                isActive
                  ? 'bg-gradient-to-r from-neuro-cyan to-neuro-purple border-neuro-cyan text-white shadow-cyan-glow font-bold'
                  : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/15 hover:text-white'
              }`}
            >
              {sim}
            </button>
          );
        })}
      </div>

    </header>
  );
};

