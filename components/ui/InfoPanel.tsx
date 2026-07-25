'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Brain, Activity, Stethoscope, Sparkles, BookOpen, Database, RefreshCw, CheckCircle2, ChevronLeft, ChevronRight, Cpu } from 'lucide-react';
import { BrainStructureDetail } from '@/data/brainData';
import { useMeshMetadata } from '@/hooks/useMeshMetadata';

interface InfoPanelProps {
  structure: BrainStructureDetail | null;
  topOffset?: string;
  isRightSidebarOpen?: boolean;
  onClose: () => void;
}

export const InfoPanel: React.FC<InfoPanelProps> = ({
  structure,
  topOffset = 'top-36',
  isRightSidebarOpen = true,
  onClose
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { metadata, isLoading, error } = useMeshMetadata(structure?.id || null);

  if (!structure) return null;

  const activeData = metadata || structure;

  if (isCollapsed) {
    return (
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={() => setIsCollapsed(false)}
        className={`fixed ${topOffset} ${isRightSidebarOpen ? 'right-4 xl:right-[340px]' : 'right-4'} z-40 px-4 py-3 glass-panel text-[#00E5FF] hover:text-[#F8FAFC] transition-all duration-300 flex items-center gap-2 font-mono text-xs`}
        title="Expand Structure Info Panel"
      >
        <Brain className="w-4 h-4 text-[#00E5FF] animate-pulse" />
        <span className="font-heading font-bold text-[#F8FAFC] max-w-[130px] truncate">{activeData.name}</span>
        <ChevronLeft className="w-4 h-4 text-[#00E5FF]" />
      </motion.button>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: -10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -10 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`fixed ${topOffset} ${isRightSidebarOpen ? 'right-4 xl:right-[340px]' : 'right-4'} z-40 w-96 max-h-[calc(100vh-10rem)] overflow-y-auto glass-panel p-5 flex flex-col gap-4 text-[#F8FAFC] transition-all duration-300`}
    >
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-neuro-border pb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-neuro-cyan/15 border border-neuro-cyan/40 flex items-center justify-center text-neuro-cyan shadow-cyan-glow">
            <Brain className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h3 className="text-lg font-heading font-bold tracking-wide text-white">{activeData.name}</h3>
            {activeData.latinName && (
              <span className="text-[10px] font-mono text-neuro-cyan uppercase">{activeData.latinName}</span>
            )}
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setIsCollapsed(true)}
            className="p-2 rounded-xl bg-neuro-card/80 border border-neuro-border hover:bg-neuro-cyan/20 text-slate-400 hover:text-white transition-all duration-200"
            title="Minimize Info Panel"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-neuro-card/80 border border-neuro-border hover:bg-neuro-cyan/20 text-white transition-all duration-200"
            title="Close Info Panel"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Async Lazy Loading & Cache Status Banner */}
      <div className="flex items-center justify-between p-2.5 bg-black/60 border border-neuro-cyan/30 rounded-xl text-[11px] font-mono">
        <div className="flex items-center gap-2">
          <Database className="w-4 h-4 text-neuro-cyan" />
          <span className="text-neuro-muted">SOURCE:</span>
          <span className="text-neuro-cyan font-bold">/brainData/{structure.id}.json</span>
        </div>

        {isLoading ? (
          <span className="flex items-center gap-1 text-neuro-yellow text-[10px] font-bold animate-pulse">
            <RefreshCw className="w-3 h-3 animate-spin text-neuro-yellow" /> LAZY LOADING...
          </span>
        ) : metadata?.isCached ? (
          <span className="flex items-center gap-1 px-2 py-0.5 rounded bg-neuro-green/20 border border-neuro-green/40 text-neuro-green text-[9px] font-bold">
            <CheckCircle2 className="w-3 h-3 text-neuro-green" /> IN MEMORY CACHE
          </span>
        ) : (
          <span className="flex items-center gap-1 px-2 py-0.5 rounded bg-neuro-cyan/20 border border-neuro-cyan/40 text-neuro-cyan text-[9px] font-bold">
            <CheckCircle2 className="w-3 h-3 text-neuro-cyan" /> ASYNC LOADED
          </span>
        )}
      </div>

      {/* Location & Scientific Description */}
      <div className="flex flex-col gap-2">
        <div className="p-2.5 bg-black/50 border border-white/10 rounded-xl text-xs">
          <span className="text-[10px] font-mono text-neuro-cyan font-bold block mb-1">ANATOMICAL LOCATION</span>
          <p className="text-gray-300 font-sans">{activeData.location}</p>
        </div>

        <p className="text-xs text-gray-200 leading-relaxed bg-black/30 p-3 rounded-xl border border-white/10">
          {activeData.description}
        </p>
      </div>

      {/* Functions */}
      {activeData.functions && activeData.functions.length > 0 && (
        <div>
          <span className="text-xs font-mono text-neuro-cyan font-bold flex items-center gap-1.5 mb-1.5">
            <Activity className="w-3.5 h-3.5 text-neuro-green" /> PRIMARY NEUROLOGICAL FUNCTIONS
          </span>
          <ul className="list-disc list-inside text-xs text-gray-300 space-y-1 bg-black/30 p-2.5 rounded-xl border border-white/10">
            {activeData.functions.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Prominent Latest Datasets Banner */}
      <div className="flex flex-col gap-1.5 p-3 bg-black/60 border border-neuro-cyan/40 rounded-xl text-xs font-mono">
        <span className="text-[10px] text-neuro-cyan font-bold uppercase tracking-wider flex items-center gap-1.5">
          <Database className="w-3.5 h-3.5 text-neuro-yellow" /> PROMINENT LATEST DATASETS (2026)
        </span>
        <div className="flex flex-wrap gap-1 mt-1 text-[9px]">
          <span className="px-2 py-0.5 rounded bg-neuro-cyan/20 border border-neuro-cyan/50 text-cyan-200 font-bold">
            HUMAN CONNECTOME (HCP-2026)
          </span>
          <span className="px-2 py-0.5 rounded bg-neuro-purple/20 border border-neuro-purple/50 text-purple-200 font-bold">
            ALLEN BRAIN ATLAS
          </span>
          <span className="px-2 py-0.5 rounded bg-neuro-green/20 border border-neuro-green/50 text-green-200 font-bold">
            BIGBRAIN 20μm CYTOLOGY
          </span>
          <span className="px-2 py-0.5 rounded bg-neuro-gold/20 border border-neuro-gold/50 text-yellow-200 font-bold">
            BODYPARTS3D / FMA
          </span>
        </div>
      </div>

      {/* Quantitative Biophysical Neuroscience Metrics */}
      <div className="flex flex-col gap-1.5">
        <span className="text-xs font-mono text-neuro-cyan font-bold flex items-center gap-1.5">
          <Cpu className="w-3.5 h-3.5 text-neuro-cyan animate-pulse" /> QUANTITATIVE BIOPHYSICAL METRICS
        </span>
        <div className="grid grid-cols-2 gap-2 text-xs font-mono">
          <div className="p-2.5 bg-black/60 border border-neuro-cyan/30 rounded-xl">
            <span className="text-[9px] text-neuro-muted block uppercase">NEURON COUNT</span>
            <strong className="text-neuro-cyan text-sm block mt-0.5">
              {structure.neuronCountBillion ?? 12.5} Billion
            </strong>
          </div>
          <div className="p-2.5 bg-black/60 border border-neuro-purple/30 rounded-xl">
            <span className="text-[9px] text-neuro-muted block uppercase">SYNAPSE DENSITY</span>
            <strong className="text-neuro-purple text-sm block mt-0.5">
              {structure.synapseDensityTrillion ?? 24.0} Trillion
            </strong>
          </div>
          <div className="p-2.5 bg-black/60 border border-neuro-green/30 rounded-xl">
            <span className="text-[9px] text-neuro-muted block uppercase">CONDUCTION SPEED</span>
            <strong className="text-neuro-green text-sm block mt-0.5">
              {structure.conductionVelocityMs ?? 100} m/s
            </strong>
          </div>
          <div className="p-2.5 bg-black/60 border border-neuro-gold/30 rounded-xl">
            <span className="text-[9px] text-neuro-muted block uppercase">BLOOD FLOW (CBF)</span>
            <strong className="text-neuro-gold text-sm block mt-0.5">
              {structure.cbfMlPer100g ?? 54} mL/100g/min
            </strong>
          </div>
        </div>
      </div>

      {/* Advanced Receptor Binding & Pathology Markers */}
      {(structure.receptorBindingBmax || structure.pathologyMarkers) && (
        <div className="flex flex-col gap-1.5 p-3 bg-white/5 border border-white/10 rounded-xl text-xs font-mono">
          {structure.receptorBindingBmax && (
            <div>
              <span className="text-[9px] text-neuro-cyan font-bold block uppercase">RECEPTOR Bmax DENSITY</span>
              <span className="text-white text-[11px] block mt-0.5">{structure.receptorBindingBmax}</span>
            </div>
          )}
          {structure.pathologyMarkers && (
            <div className="mt-1.5 border-t border-white/10 pt-1.5">
              <span className="text-[9px] text-neuro-red font-bold block uppercase">PATHOLOGICAL BIOMARKERS</span>
              <span className="text-red-200 text-[11px] block mt-0.5">{structure.pathologyMarkers}</span>
            </div>
          )}
        </div>
      )}

      {/* Connections & Blood Supply */}
      <div className="grid grid-cols-2 gap-2 text-xs">
        {activeData.bloodSupply && (
          <div className="p-2.5 bg-white/5 border border-white/10 rounded-xl">
            <span className="text-[10px] font-mono text-neuro-cyan block">BLOOD SUPPLY</span>
            <strong className="text-white font-mono text-[11px] block mt-1">{activeData.bloodSupply}</strong>
          </div>
        )}
        {activeData.neurotransmitters && activeData.neurotransmitters.length > 0 && (
          <div className="p-2.5 bg-white/5 border border-white/10 rounded-xl">
            <span className="text-[10px] font-mono text-neuro-purple block">NEUROTRANSMITTERS</span>
            <strong className="text-white font-mono text-[11px] block mt-1">{activeData.neurotransmitters.join(', ')}</strong>
          </div>
        )}
      </div>

      {/* Diseases */}
      {activeData.diseases && activeData.diseases.length > 0 && (
        <div>
          <span className="text-xs font-mono text-neuro-red font-bold flex items-center gap-1.5 mb-1.5">
            <Stethoscope className="w-3.5 h-3.5 text-neuro-red" /> ASSOCIATED CLINICAL DISEASES
          </span>
          <div className="flex flex-wrap gap-1.5">
            {activeData.diseases.map((d, i) => (
              <span key={i} className="px-2 py-0.5 text-[10px] font-mono bg-neuro-red/15 text-red-300 rounded border border-neuro-red/30">
                {d}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Clinical Importance */}
      {activeData.clinicalImportance && (
        <div className="p-3 bg-neuro-cyan/10 border border-neuro-cyan/30 rounded-xl text-xs text-cyan-200">
          <span className="font-bold text-neuro-cyan font-mono block mb-1">CLINICAL IMPORTANCE:</span>
          <p className="leading-snug">{activeData.clinicalImportance}</p>
        </div>
      )}

      {/* Research Notes */}
      {activeData.researchNotes && (
        <div className="p-3 bg-neuro-purple/10 border border-neuro-purple/30 rounded-xl text-xs text-purple-200">
          <span className="font-bold text-neuro-purple font-mono block mb-1 flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5" /> NEUROSCIENCE RESEARCH NOTES:
          </span>
          <p className="leading-snug">{activeData.researchNotes}</p>
        </div>
      )}

      {/* Interesting Facts */}
      {activeData.interestingFacts && activeData.interestingFacts.length > 0 && (
        <div className="p-3 bg-neuro-gold/10 border border-neuro-gold/30 rounded-xl text-xs text-yellow-200">
          <span className="font-bold text-neuro-gold font-mono block mb-1 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" /> DID YOU KNOW?
          </span>
          <p className="italic">{activeData.interestingFacts[0]}</p>
        </div>
      )}

    </motion.div>
  );
};

