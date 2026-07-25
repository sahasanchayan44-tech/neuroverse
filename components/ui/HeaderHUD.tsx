'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Brain, Volume2, VolumeX, Camera, Zap, ChevronDown, ChevronUp } from 'lucide-react';
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

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="absolute top-4 left-4 right-4 z-30 flex items-center justify-between px-5 py-3 glass-panel transition-all duration-300"
    >
      
      {/* Brand & System Status */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2.5">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="w-9 h-9 rounded-2xl bg-[#00E5FF]/15 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.25)]"
          >
            <Brain className="w-5 h-5 animate-pulse" />
          </motion.div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-lg tracking-wider text-[#F8FAFC] uppercase leading-none">
              NEURO<span className="text-[#00E5FF]">VERSE</span>
            </span>
            <span className="text-[10px] font-mono text-[#94A3B8] tracking-widest uppercase mt-0.5">
              NEUROSCIENCE OS v3.2
            </span>
          </div>
        </div>

        {/* System Online Badge */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-[#00FF9C]/10 border border-[#00FF9C]/30 text-[#00FF9C] text-[10px] font-mono font-semibold">
          <div className="w-1.5 h-1.5 rounded-full bg-[#00FF9C] animate-ping" />
          SYSTEM ONLINE // REAL-TIME CONNECTOME
        </div>
      </div>

      {/* Floating Glass Pill Search Bar */}
      <div className="relative flex-1 max-w-md mx-4">
        <div className="relative flex items-center">
          <Search className={`absolute left-4 w-4 h-4 transition-all duration-300 ${isSearching ? 'text-[#00E5FF] filter drop-shadow-[0_0_8px_rgba(0,229,255,0.8)]' : 'text-[#94A3B8]'}`} />
          <input
            type="text"
            value={query}
            onChange={(e) => handleQueryChange(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsSearching(true)}
            onBlur={() => setTimeout(() => setIsSearching(false), 200)}
            placeholder="Search anatomy, neural pathways, or diseases..."
            className="w-full pl-11 pr-5 py-2.5 bg-[rgba(12,18,30,0.45)] backdrop-blur-[22px] border border-[rgba(0,229,255,0.12)] rounded-full text-xs font-sans text-[#F8FAFC] placeholder:text-[#64748B] outline-none focus:border-[#00E5FF] focus:shadow-[0_0_20px_rgba(0,229,255,0.35)] transition-all duration-300"
          />
        </div>

        {/* Autocomplete Dropdown */}
        <AnimatePresence>
          {isSearching && fuzzyResults.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="absolute top-12 left-0 right-0 max-h-64 overflow-y-auto glass-panel p-2 flex flex-col gap-1 text-xs z-50"
            >
              {fuzzyResults.map(({ item: s, score, matchType }) => (
                <button
                  key={s.id}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    handleSelect(s);
                  }}
                  className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#00E5FF]/15 text-left transition-all duration-200 group"
                >
                  <div className="flex flex-col">
                    <span className="font-semibold text-[#F8FAFC] group-hover:text-[#00E5FF] transition-colors">{s.name}</span>
                    {s.latinName && (
                      <span className="text-[10px] font-mono text-[#94A3B8]">{s.latinName}</span>
                    )}
                  </div>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-[#00E5FF]/15 border border-[#00E5FF]/30 text-[#00E5FF] font-semibold uppercase">
                    {matchType}
                  </span>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* View Mode & Tools */}
      <div className="flex items-center gap-2">
        <select
          value={viewMode}
          onChange={(e) => onChangeViewMode(e.target.value as ViewMode)}
          className="px-3.5 py-2 bg-[rgba(12,18,30,0.65)] border border-[rgba(0,229,255,0.18)] rounded-xl text-xs font-mono text-[#F8FAFC] outline-none cursor-pointer focus:border-[#00E5FF] transition-all duration-200"
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

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onOpenNeuronModal}
          className="px-3.5 py-2 rounded-xl bg-[#A855F7]/15 border border-[#A855F7]/30 text-[#A855F7] hover:bg-[#A855F7]/25 text-xs font-mono font-medium transition-all duration-200 flex items-center gap-1.5"
          title="Single Neuron & Synapse Micro Viewer"
        >
          <Zap className="w-3.5 h-3.5 text-[#A855F7]" /> Micro Neuron
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onToggleAudio}
          className={`p-2.5 rounded-xl border transition-all duration-200 ${
            isAudioActive ? 'bg-[#00E5FF]/20 border-[#00E5FF] text-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.3)]' : 'bg-black/30 border-[rgba(0,229,255,0.12)] text-[#94A3B8] hover:text-[#F8FAFC]'
          }`}
          title="Toggle Neural Sound Synth"
        >
          {isAudioActive ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onExportScreenshot}
          className="p-2.5 rounded-xl bg-black/30 border border-[rgba(0,229,255,0.12)] text-[#F8FAFC] hover:bg-[#00E5FF]/20 hover:border-[#00E5FF]/40 transition-all duration-200"
          title="Export Screen Snapshot"
        >
          <Camera className="w-4 h-4" />
        </motion.button>
      </div>

    </motion.header>
  );
};

