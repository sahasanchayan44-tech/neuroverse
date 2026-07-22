'use client';

import React from 'react';
import { X, Brain, Activity, Stethoscope, Sparkles, BookOpen, Database, RefreshCw, CheckCircle2 } from 'lucide-react';
import { BrainStructureDetail } from '@/data/brainData';
import { useMeshMetadata } from '@/hooks/useMeshMetadata';

interface InfoPanelProps {
  structure: BrainStructureDetail | null;
  onClose: () => void;
}

export const InfoPanel: React.FC<InfoPanelProps> = ({ structure, onClose }) => {
  const { metadata, isLoading, error } = useMeshMetadata(structure?.id || null);

  if (!structure) return null;

  const activeData = metadata || structure;

  return (
    <div className="fixed top-24 right-6 z-40 w-96 max-h-[calc(100vh-7rem)] overflow-y-auto bg-neuro-panel backdrop-blur-xl border border-neuro-cyan/40 rounded-2xl shadow-hologram p-5 flex flex-col gap-4 text-white pr-2 font-sans">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-neuro-border pb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-neuro-cyan/20 border border-neuro-cyan flex items-center justify-center text-neuro-cyan shadow-cyan-glow">
            <Brain className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h3 className="text-lg font-bold tracking-wide text-white">{activeData.name}</h3>
            {activeData.latinName && (
              <span className="text-[10px] font-mono text-neuro-cyan uppercase">{activeData.latinName}</span>
            )}
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/20 text-white transition-all"
        >
          <X className="w-4 h-4" />
        </button>
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

    </div>
  );
};

