'use client';

import React, { useState } from 'react';
import { Eye, Layers, Sparkles, Brain, CheckCircle2, ChevronRight } from 'lucide-react';
import { BrainStructureDetail } from '@/data/brainData';

interface AnatomyViewProps {
  structures: BrainStructureDetail[];
  selectedStructure: BrainStructureDetail | null;
  onSelectStructure: (s: BrainStructureDetail) => void;
  onChangeViewFilter: (filterId: string) => void;
}

const ANATOMY_FILTERS = [
  { id: 'all', name: 'Full Brain Anatomy', icon: Brain, desc: 'Complete human encephalon with all 20 biological regions.' },
  { id: 'cortex', name: 'Cerebral Cortex Lobes', icon: Layers, desc: 'Outer neocortex: Frontal, Parietal, Temporal, and Occipital lobes.' },
  { id: 'limbic', name: 'Deep Subcortical Core', icon: Sparkles, desc: 'Embedded limbic system: Hippocampus, Amygdala, Thalamus, Hypothalamus.' },
  { id: 'stem', name: 'Cerebellum & Brain Stem', icon: Eye, desc: 'Motor timing & autonomic life support: Pons, Medulla, Cerebellum.' }
];

export const AnatomyViewPanel: React.FC<AnatomyViewProps> = ({
  structures,
  selectedStructure,
  onSelectStructure,
  onChangeViewFilter
}) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleSelectFilter = (filterId: string) => {
    setActiveFilter(filterId);
    onChangeViewFilter(filterId);
  };

  const getFilteredStructures = () => {
    if (activeFilter === 'cortex') {
      return structures.filter(s => ['frontal_lobe', 'parietal_lobe', 'temporal_lobe', 'occipital_lobe'].includes(s.id));
    }
    if (activeFilter === 'limbic') {
      return structures.filter(s => ['hippocampus', 'amygdala', 'thalamus', 'hypothalamus', 'corpus_callosum', 'basal_ganglia'].includes(s.id));
    }
    if (activeFilter === 'stem') {
      return structures.filter(s => ['cerebellum', 'brain_stem', 'pons', 'medulla'].includes(s.id));
    }
    return structures;
  };

  return (
    <div className="p-3 bg-neuro-panel backdrop-blur-xl border border-neuro-cyan/40 rounded-2xl shadow-hologram flex flex-col gap-3 text-white font-sans">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-neuro-border pb-2 text-xs font-mono">
        <span className="font-bold text-neuro-cyan flex items-center gap-1.5">
          <Eye className="w-4 h-4 text-neuro-green" /> DYNAMIC ANATOMY VIEW EXPLORER
        </span>
        <span className="px-2 py-0.5 bg-neuro-cyan/20 text-neuro-cyan rounded text-[10px]">
          {getFilteredStructures().length} REGIONS
        </span>
      </div>

      {/* Anatomy View Category Selector */}
      <div className="grid grid-cols-2 gap-2">
        {ANATOMY_FILTERS.map(f => {
          const Icon = f.icon;
          const isActive = activeFilter === f.id;
          return (
            <button
              key={f.id}
              onClick={() => handleSelectFilter(f.id)}
              className={`p-2.5 rounded-xl border text-left transition-all flex flex-col gap-1 ${
                isActive
                  ? 'bg-neuro-cyan/20 border-neuro-cyan text-white shadow-cyan-glow'
                  : 'bg-white/5 border-white/10 text-neuro-muted hover:bg-white/10'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-neuro-cyan' : 'text-gray-400'}`} />
                <span className="text-xs font-bold font-mono">{f.name}</span>
              </div>
              <p className="text-[10px] text-gray-400 leading-tight">{f.desc}</p>
            </button>
          );
        })}
      </div>

      {/* Filtered Structures Quick Selection Grid */}
      <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto pt-1">
        {getFilteredStructures().map(s => {
          const isSelected = selectedStructure && selectedStructure.id === s.id;
          return (
            <button
              key={s.id}
              onClick={() => onSelectStructure(s)}
              className={`px-2.5 py-1 text-xs font-mono rounded-lg border transition-all flex items-center gap-1 ${
                isSelected
                  ? 'bg-neuro-cyan text-black font-bold border-neuro-cyan shadow-cyan-glow'
                  : 'bg-white/5 border-white/10 text-gray-300 hover:border-neuro-cyan hover:text-white'
              }`}
            >
              {isSelected && <CheckCircle2 className="w-3 h-3 text-black" />}
              {s.name}
            </button>
          );
        })}
      </div>

    </div>
  );
};
