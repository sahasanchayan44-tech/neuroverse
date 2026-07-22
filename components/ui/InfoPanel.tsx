'use client';

import React from 'react';
import { X, Brain, Activity, Heart, Bookmark, Stethoscope, Sparkles, BookOpen } from 'lucide-react';
import { BrainStructureDetail } from '@/data/brainData';

interface InfoPanelProps {
  structure: BrainStructureDetail | null;
  onClose: () => void;
}

export const InfoPanel: React.FC<InfoPanelProps> = ({ structure, onClose }) => {
  if (!structure) return null;

  return (
    <div className="fixed top-24 right-6 z-40 w-96 max-h-[calc(100vh-7rem)] overflow-y-auto bg-neuro-panel backdrop-blur-xl border border-neuro-cyan/40 rounded-2xl shadow-hologram p-5 flex flex-col gap-4 text-white pr-2 font-sans">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-neuro-border pb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-neuro-cyan/20 border border-neuro-cyan flex items-center justify-center text-neuro-cyan shadow-cyan-glow">
            <Brain className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h3 className="text-lg font-bold tracking-wide text-white">{structure.name}</h3>
            <span className="text-[10px] font-mono text-neuro-cyan uppercase">{structure.latinName}</span>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/20 text-white transition-all"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Location & Scientific Description */}
      <div className="flex flex-col gap-2">
        <div className="p-2.5 bg-black/50 border border-white/10 rounded-xl text-xs">
          <span className="text-[10px] font-mono text-neuro-cyan font-bold block mb-1">ANATOMICAL LOCATION</span>
          <p className="text-gray-300 font-sans">{structure.location}</p>
        </div>

        <p className="text-xs text-gray-200 leading-relaxed bg-black/30 p-3 rounded-xl border border-white/10">
          {structure.description}
        </p>
      </div>

      {/* Functions */}
      <div>
        <span className="text-xs font-mono text-neuro-cyan font-bold flex items-center gap-1.5 mb-1.5">
          <Activity className="w-3.5 h-3.5 text-neuro-green" /> PRIMARY NEUROLOGICAL FUNCTIONS
        </span>
        <ul className="list-disc list-inside text-xs text-gray-300 space-y-1 bg-black/30 p-2.5 rounded-xl border border-white/10">
          {structure.functions.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </div>

      {/* Connections & Blood Supply */}
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="p-2.5 bg-white/5 border border-white/10 rounded-xl">
          <span className="text-[10px] font-mono text-neuro-cyan block">BLOOD SUPPLY</span>
          <strong className="text-white font-mono text-[11px] block mt-1">{structure.bloodSupply}</strong>
        </div>
        <div className="p-2.5 bg-white/5 border border-white/10 rounded-xl">
          <span className="text-[10px] font-mono text-neuro-purple block">NEUROTRANSMITTERS</span>
          <strong className="text-white font-mono text-[11px] block mt-1">{structure.neurotransmitters.join(', ')}</strong>
        </div>
      </div>

      {/* Diseases */}
      <div>
        <span className="text-xs font-mono text-neuro-red font-bold flex items-center gap-1.5 mb-1.5">
          <Stethoscope className="w-3.5 h-3.5 text-neuro-red" /> ASSOCIATED CLINICAL DISEASES
        </span>
        <div className="flex flex-wrap gap-1.5">
          {structure.diseases.map((d, i) => (
            <span key={i} className="px-2 py-0.5 text-[10px] font-mono bg-neuro-red/15 text-red-300 rounded border border-neuro-red/30">
              {d}
            </span>
          ))}
        </div>
      </div>

      {/* Clinical Importance */}
      <div className="p-3 bg-neuro-cyan/10 border border-neuro-cyan/30 rounded-xl text-xs text-cyan-200">
        <span className="font-bold text-neuro-cyan font-mono block mb-1">CLINICAL IMPORTANCE:</span>
        <p className="leading-snug">{structure.clinicalImportance}</p>
      </div>

      {/* Research Notes */}
      <div className="p-3 bg-neuro-purple/10 border border-neuro-purple/30 rounded-xl text-xs text-purple-200">
        <span className="font-bold text-neuro-purple font-mono block mb-1 flex items-center gap-1">
          <BookOpen className="w-3.5 h-3.5" /> NEUROSCIENCE RESEARCH NOTES:
        </span>
        <p className="leading-snug">{structure.researchNotes}</p>
      </div>

      {/* Interesting Facts */}
      {structure.interestingFacts && structure.interestingFacts.length > 0 && (
        <div className="p-3 bg-neuro-gold/10 border border-neuro-gold/30 rounded-xl text-xs text-yellow-200">
          <span className="font-bold text-neuro-gold font-mono block mb-1 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" /> DID YOU KNOW?
          </span>
          <p className="italic">{structure.interestingFacts[0]}</p>
        </div>
      )}

    </div>
  );
};
