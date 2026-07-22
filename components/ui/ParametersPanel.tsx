'use client';

import React from 'react';
import { Cpu, Activity, Zap, ShieldCheck, Dna, Database } from 'lucide-react';
import { BrainStructureDetail } from '@/data/brainData';

interface ParametersPanelProps {
  structure: BrainStructureDetail | null;
}

export const ParametersPanel: React.FC<ParametersPanelProps> = ({ structure }) => {
  return (
    <div className="p-3 bg-neuro-panel/90 backdrop-blur-xl border border-neuro-cyan/40 rounded-2xl shadow-hologram flex flex-col gap-2.5 text-white font-mono text-xs">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-neuro-border pb-2">
        <span className="font-bold text-neuro-cyan flex items-center gap-1.5">
          <Cpu className="w-4 h-4 text-neuro-cyan animate-pulse" /> COMPUTED BIOPHYSICAL & NEUROLOGICAL PARAMETERS
        </span>
        <span className="px-2 py-0.5 bg-neuro-cyan/20 text-neuro-cyan rounded text-[10px]">
          {structure ? structure.name.toUpperCase() : 'GLOBAL BRAIN AVERAGE'}
        </span>
      </div>

      {/* Computed Parameter Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        
        <div className="p-2.5 rounded-xl bg-black/60 border border-white/10 flex flex-col gap-0.5">
          <span className="text-[10px] text-neuro-muted flex items-center gap-1">
            <Dna className="w-3 h-3 text-neuro-cyan" /> NEURON COUNT
          </span>
          <span className="text-sm font-bold text-neuro-cyan">
            {structure?.neuronCountBillion ? `${structure.neuronCountBillion} B` : '86.1 B Neurons'}
          </span>
        </div>

        <div className="p-2.5 rounded-xl bg-black/60 border border-white/10 flex flex-col gap-0.5">
          <span className="text-[10px] text-neuro-muted flex items-center gap-1">
            <Zap className="w-3 h-3 text-neuro-pink" /> SYNAPSE DENSITY
          </span>
          <span className="text-sm font-bold text-neuro-pink">
            {structure?.synapseDensityTrillion ? `${structure.synapseDensityTrillion} Trillion` : '150 Trillion'}
          </span>
        </div>

        <div className="p-2.5 rounded-xl bg-black/60 border border-white/10 flex flex-col gap-0.5">
          <span className="text-[10px] text-neuro-muted flex items-center gap-1">
            <Activity className="w-3 h-3 text-neuro-green" /> CEREBRAL BLOOD FLOW
          </span>
          <span className="text-sm font-bold text-neuro-green">
            {structure?.cbfMlPer100g ? `${structure.cbfMlPer100g} mL/100g` : '54 mL/100g/min'}
          </span>
        </div>

        <div className="p-2.5 rounded-xl bg-black/60 border border-white/10 flex flex-col gap-0.5">
          <span className="text-[10px] text-neuro-muted flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-neuro-yellow" /> RESTING POTENTIAL
          </span>
          <span className="text-sm font-bold text-neuro-yellow">
            {structure?.restingPotentialMv ? `${structure.restingPotentialMv} mV` : '-70 mV'}
          </span>
        </div>

      </div>

      {/* Extra Biophysical Receptor & Pathway Details */}
      {structure && (
        <div className="p-2.5 rounded-xl bg-black/60 border border-neuro-cyan/30 flex flex-col gap-1 text-[11px]">
          <div className="flex justify-between">
            <span className="text-neuro-muted">Receptor Binding (Bmax):</span>
            <span className="font-bold text-neuro-cyan">{structure.receptorBindingBmax || 'Normal Density'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neuro-muted">Pathology Marker Status:</span>
            <span className="font-bold text-neuro-green">{structure.pathologyMarkers || 'Clear'}</span>
          </div>
        </div>
      )}

    </div>
  );
};
