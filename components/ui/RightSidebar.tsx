'use client';

import React, { useState } from 'react';
import { Zap, Stethoscope, Clock, Activity, Flame, ChevronRight, RefreshCw } from 'lucide-react';
import { BrainStructureDetail } from '@/data/brainData';

interface RightSidebarProps {
  activeSimulation: string | null;
  selectedDisease: string | null;
  onSelectSimulation: (sim: string) => void;
  onSelectDisease: (diseaseId: string) => void;
  onReset: () => void;
}

const COGNITION_MODES = [
  { id: 'Thinking', name: 'Executive Thinking', wave: 'Beta / Gamma (40Hz)', desc: 'Prefrontal working memory loops and dorsolateral cortex logic activation.' },
  { id: 'Memory', name: 'Memory Encoding', wave: 'Theta (6Hz)', desc: 'Long-term potentiation trisynaptic circuit reverberation in Hippocampus.' },
  { id: 'Speech', name: 'Speech Production', wave: 'Gamma (45Hz)', desc: 'Broca\'s area motor speech planning & Wernicke\'s auditory feedback.' },
  { id: 'Vision', name: 'Visual Perception', wave: 'Gamma (55Hz)', desc: 'Optic nerve relays via LGN Thalamus to Primary Visual Striate Cortex V1.' },
  { id: 'Touch', name: 'Somatosensory Touch', wave: 'Beta (22Hz)', desc: 'Tactile nerve signals route up spinothalamic tracts to Parietal homunculus S1.' },
  { id: 'Emotion', name: 'Emotional Synthesis', wave: 'Theta / Alpha (8Hz)', desc: 'Limbic amygdala-hippocampal emotional memory valence integration.' },
  { id: 'Fear', name: 'Fear & Threat Response', wave: 'High Beta (30Hz)', desc: 'Immediate subcortical amygdala trigger activating sympathetic adrenal fight-or-flight.' },
  { id: 'Walking', name: 'Motor Coordination', wave: 'Beta (20Hz)', desc: 'Spinal motor pathways fine-tuned by cerebellar timing & basal ganglia.' },
  { id: 'Learning', name: 'Neuro-Plasticity', wave: 'Gamma / Theta', desc: 'Synaptogenesis and frontoparietal cognitive network re-wiring.' },
  { id: 'Hearing', name: 'Auditory Processing', wave: 'Gamma (40Hz)', desc: 'Cochlear nerve signals pass through inferior colliculus to auditory cortex A1.' },
  { id: 'Motor Control', name: 'Action Selection', wave: 'Beta (24Hz)', desc: 'Direct GO / Indirect STOP motor selection loops in Basal Ganglia.' }
];

const DISEASE_MODES = [
  { id: 'alzheimers', name: 'Alzheimer\'s Disease', category: 'Neurodegenerative', regions: ['Hippocampus', 'Temporal', 'Parietal', 'Frontal'] },
  { id: 'parkinsons', name: 'Parkinson\'s Disease', category: 'Motor Basal Ganglia', regions: ['Substantia Nigra', 'Basal Ganglia'] },
  { id: 'stroke', name: 'Ischemic Stroke', category: 'Cerebrovascular', regions: ['Frontal', 'Parietal', 'Temporal'] },
  { id: 'epilepsy', name: 'Temporal Epilepsy', category: 'Electrical Channelopathy', regions: ['Hippocampus', 'Temporal Lobe'] },
  { id: 'tumor', name: 'Glioblastoma Tumor', category: 'Oncology Neoplasm', regions: ['Frontal Lobe', 'Temporal Lobe'] },
  { id: 'depression', name: 'Major Depression (MDD)', category: 'Affective Circuitry', regions: ['Prefrontal Cortex', 'Amygdala', 'Limbic'] },
  { id: 'anxiety', name: 'Generalized Anxiety', category: 'Threat Hyper-reactivity', regions: ['Amygdala', 'Hypothalamus', 'PFC'] },
  { id: 'tbi', name: 'Traumatic Brain Injury', category: 'Diffuse Axonal Shear', regions: ['Frontal Lobe', 'Temporal', 'Corpus Callosum'] },
  { id: 'adhd', name: 'ADHD (Executive Deficit)', category: 'Neurodevelopmental', regions: ['Prefrontal Cortex', 'Basal Ganglia'] },
  { id: 'autism', name: 'Autism Spectrum (ASD)', category: 'Connectivity Alteration', regions: ['Frontal Lobe', 'Temporal', 'Cerebellum'] }
];

export const RightSidebar: React.FC<RightSidebarProps> = ({
  activeSimulation,
  selectedDisease,
  onSelectSimulation,
  onSelectDisease,
  onReset
}) => {
  const [activeTab, setActiveTab] = useState<'cognition' | 'pathology' | 'timeline'>('cognition');

  return (
    <aside className="absolute top-28 right-4 bottom-24 z-20 w-80 bg-neuro-panel backdrop-blur-xl border border-neuro-cyan/30 rounded-2xl shadow-hologram p-4 flex flex-col gap-3 overflow-y-auto text-white">
      
      {/* Tab Selector */}
      <div className="flex border-b border-neuro-border pb-2 gap-1 font-mono text-xs">
        <button
          onClick={() => setActiveTab('cognition')}
          className={`flex-1 py-1.5 rounded-lg border transition-all flex items-center justify-center gap-1 font-bold ${
            activeTab === 'cognition' ? 'bg-neuro-cyan/20 border-neuro-cyan text-white shadow-cyan-glow' : 'bg-white/5 border-white/10 text-neuro-muted'
          }`}
        >
          <Zap className="w-3.5 h-3.5" /> COGNITION
        </button>

        <button
          onClick={() => setActiveTab('pathology')}
          className={`flex-1 py-1.5 rounded-lg border transition-all flex items-center justify-center gap-1 font-bold ${
            activeTab === 'pathology' ? 'bg-neuro-red/20 border-neuro-red text-white shadow-red-glow' : 'bg-white/5 border-white/10 text-neuro-muted'
          }`}
        >
          <Stethoscope className="w-3.5 h-3.5" /> PATHOLOGY
        </button>

        <button
          onClick={() => setActiveTab('timeline')}
          className={`flex-1 py-1.5 rounded-lg border transition-all flex items-center justify-center gap-1 font-bold ${
            activeTab === 'timeline' ? 'bg-neuro-purple/20 border-neuro-purple text-white shadow-purple-glow' : 'bg-white/5 border-white/10 text-neuro-muted'
          }`}
        >
          <Clock className="w-3.5 h-3.5" /> TIMELINE
        </button>
      </div>

      {/* Reset Active Mode */}
      {(activeSimulation || selectedDisease) && (
        <button
          onClick={onReset}
          className="py-1.5 px-3 text-xs font-mono rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 text-white transition-all flex items-center justify-center gap-2"
        >
          <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Reset Simulation / Pathology Mode
        </button>
      )}

      {/* Tab 1: Cognition Functional Modes */}
      {activeTab === 'cognition' && (
        <div className="flex flex-col gap-2 flex-1 overflow-y-auto">
          <span className="text-[10px] font-mono text-neuro-cyan font-bold tracking-wider">
            FUNCTIONAL NEURAL PATHWAYS (11 MODES)
          </span>
          {COGNITION_MODES.map(mode => {
            const isActive = activeSimulation === mode.id;
            return (
              <button
                key={mode.id}
                onClick={() => onSelectSimulation(mode.id)}
                className={`p-3 rounded-xl border text-left transition-all flex flex-col gap-1.5 ${
                  isActive
                    ? 'bg-neuro-cyan/20 border-neuro-cyan text-white shadow-cyan-glow'
                    : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold font-sans flex items-center gap-1.5">
                    <Activity className={`w-3.5 h-3.5 ${isActive ? 'text-neuro-green animate-pulse' : 'text-neuro-cyan'}`} />
                    {mode.name}
                  </span>
                  <span className="text-[9px] font-mono px-2 py-0.5 bg-neuro-cyan/15 text-neuro-cyan rounded border border-neuro-cyan/30">
                    {mode.wave}
                  </span>
                </div>
                <p className="text-[11px] text-neuro-muted leading-snug">{mode.desc}</p>
              </button>
            );
          })}
        </div>
      )}

      {/* Tab 2: Medical Pathology Diseases */}
      {activeTab === 'pathology' && (
        <div className="flex flex-col gap-2 flex-1 overflow-y-auto">
          <span className="text-[10px] font-mono text-neuro-red font-bold tracking-wider">
            CLINICAL PATHOLOGY & DISEASE MODES
          </span>
          {DISEASE_MODES.map(d => {
            const isActive = selectedDisease === d.id;
            return (
              <button
                key={d.id}
                onClick={() => onSelectDisease(d.id)}
                className={`p-3 rounded-xl border text-left transition-all flex flex-col gap-1.5 ${
                  isActive
                    ? 'bg-neuro-red/20 border-neuro-red text-white shadow-red-glow'
                    : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold font-sans text-red-200 flex items-center gap-1.5">
                    <Flame className={`w-3.5 h-3.5 ${isActive ? 'text-neuro-red animate-bounce' : 'text-red-400'}`} />
                    {d.name}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-neuro-muted" />
                </div>
                <span className="text-[10px] font-mono text-neuro-muted">{d.category}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Tab 3: Timeline & Embryology */}
      {activeTab === 'timeline' && (
        <div className="flex flex-col gap-3 flex-1 overflow-y-auto font-sans">
          <span className="text-[10px] font-mono text-neuro-purple font-bold tracking-wider">
            EVOLUTIONARY & EMBRYONIC MILESTONES
          </span>

          <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-xs flex flex-col gap-1">
            <span className="font-bold text-neuro-purple font-mono">1. EVOLUTIONARY TREE (500M YRS)</span>
            <p className="text-gray-300 text-[11px] leading-snug">Primitive nerve nets in cnidarians evolved into triune brain encephalization in primates.</p>
          </div>

          <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-xs flex flex-col gap-1">
            <span className="font-bold text-neuro-cyan font-mono">2. EMBRYONIC NEURAL TUBE (WEEKS 3-8)</span>
            <p className="text-gray-300 text-[11px] leading-snug">Ectodermal neural tube differentiates into Prosencephalon, Mesencephalon, and Rhombencephalon.</p>
          </div>

          <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-xs flex flex-col gap-1">
            <span className="font-bold text-neuro-green font-mono">3. ADOLESCENT PRUNING (AGE 12-25)</span>
            <p className="text-gray-300 text-[11px] leading-snug">High-speed myelination of prefrontal executive control networks and synaptic pruning.</p>
          </div>
        </div>
      )}

    </aside>
  );
};
