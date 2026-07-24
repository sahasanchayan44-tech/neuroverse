'use client';

import React, { useState } from 'react';
import { X, Brain, Activity, Zap, Share2, ShieldAlert, Cpu, CheckCircle2, ArrowRight, Radio, Sparkles } from 'lucide-react';
import { BrainHierarchyNode } from '@/data/brainHierarchy';
import { BrainStructureDetail } from '@/data/brainData';

interface BrainPartModalProps {
  node: BrainHierarchyNode | null;
  structure: BrainStructureDetail | null;
  onClose: () => void;
  onSelectConnectedPart?: (targetStructureId: string) => void;
}

export const BrainPartModal: React.FC<BrainPartModalProps> = ({
  node,
  structure,
  onClose,
  onSelectConnectedPart
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'function' | 'network' | 'biophysics'>('function');
  const [isFiringPulse, setIsFiringPulse] = useState(false);

  if (!node && !structure) return null;

  const partName = node?.name || structure?.name || 'Brain Region';
  const latinName = node?.latinName || structure?.latinName || 'Structure Segment';
  const description = node?.functionSummary || node?.description || structure?.description || 'Vital cerebral structure governing neural computations and motor/sensory integration.';
  
  const neurotransmitters = node?.neurotransmitters || [
    'Glutamate (Excitatory)',
    'GABA (Inhibitory)',
    'Dopamine (Neuromodulatory)'
  ];

  const connections = node?.connections || [
    'Prefrontal Executive Circuitry',
    'Thalamocortical Relay Network',
    'Limbic Memory Loop',
    'Cerebellar Motor Correction Pathways'
  ];

  const clinicalNotes = node?.clinicalNotes || 'Dysfunction or lesion in this region impairs sensorimotor integration, executive planning, or emotional regulation.';

  const handleFirePulse = () => {
    setIsFiringPulse(true);
    setTimeout(() => setIsFiringPulse(false), 2000);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in font-sans cursor-pointer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-neuro-panel backdrop-blur-2xl border border-neuro-cyan/50 rounded-3xl shadow-hologram overflow-hidden text-white flex flex-col max-h-[85vh] cursor-default"
      >
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between p-5 border-b border-neuro-cyan/30 bg-black/40">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-neuro-cyan/30 via-neuro-purple/40 to-neuro-pink/30 border border-neuro-cyan flex items-center justify-center text-neuro-cyan shadow-cyan-glow">
              <Brain className="w-6 h-6 animate-pulse text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold tracking-wide text-white">{partName}</h2>
                <span className="px-2 py-0.5 text-[9px] font-mono text-neuro-cyan bg-neuro-cyan/20 border border-neuro-cyan/50 rounded-full font-bold">
                  ACTIVE REGION
                </span>
              </div>
              <span className="text-xs font-mono text-neuro-cyan/70 tracking-wider uppercase">{latinName}</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/15 transition-all"
            title="Close Pop-up Screen"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sci-Fi Navigation Tabs */}
        <div className="flex items-center gap-2 px-5 py-2.5 bg-black/60 border-b border-white/10 font-mono text-xs">
          <button
            onClick={() => setActiveSubTab('function')}
            className={`px-4 py-1.5 rounded-xl border font-bold transition-all flex items-center gap-2 ${
              activeSubTab === 'function'
                ? 'bg-neuro-cyan/20 border-neuro-cyan text-white shadow-cyan-glow'
                : 'bg-white/5 border-white/10 text-neuro-muted hover:text-white'
            }`}
          >
            <Activity className="w-3.5 h-3.5" /> FUNCTION & ROLE
          </button>

          <button
            onClick={() => setActiveSubTab('network')}
            className={`px-4 py-1.5 rounded-xl border font-bold transition-all flex items-center gap-2 ${
              activeSubTab === 'network'
                ? 'bg-neuro-purple/20 border-neuro-purple text-white shadow-purple-glow'
                : 'bg-white/5 border-white/10 text-neuro-muted hover:text-white'
            }`}
          >
            <Share2 className="w-3.5 h-3.5" /> NEURAL NETWORK ({connections.length})
          </button>

          <button
            onClick={() => setActiveSubTab('biophysics')}
            className={`px-4 py-1.5 rounded-xl border font-bold transition-all flex items-center gap-2 ${
              activeSubTab === 'biophysics'
                ? 'bg-neuro-green/20 border-neuro-green text-white shadow-green-glow'
                : 'bg-white/5 border-white/10 text-neuro-muted hover:text-white'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" /> BIOPHYSICS & METRICS
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 flex flex-col gap-4 text-xs font-sans">
          
          {/* TAB 1: FUNCTION & PHYSIOLOGICAL ROLE */}
          {activeSubTab === 'function' && (
            <div className="flex flex-col gap-4 animate-fade-in">
              <div className="p-4 rounded-2xl bg-black/50 border border-neuro-cyan/30 flex flex-col gap-2">
                <span className="text-[10px] font-mono text-neuro-cyan font-bold tracking-wider uppercase flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-yellow-400" /> PRIMARY PHYSIOLOGICAL & COGNITIVE DUTIES
                </span>
                <p className="text-gray-200 text-sm leading-relaxed">{description}</p>
              </div>

              <div className="p-4 rounded-2xl bg-black/50 border border-neuro-purple/30 flex flex-col gap-2">
                <span className="text-[10px] font-mono text-neuro-purple font-bold tracking-wider uppercase flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5 text-neuro-pink" /> CLINICAL PATHOLOGY & LESION RISK
                </span>
                <p className="text-gray-300 leading-normal">{clinicalNotes}</p>
              </div>
            </div>
          )}

          {/* TAB 2: NEURAL NETWORK CONNECTIONS GRAPH */}
          {activeSubTab === 'network' && (
            <div className="flex flex-col gap-4 animate-fade-in">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-neuro-cyan font-bold tracking-wider uppercase">
                  CONNECTED AFFERENT & EFFERENT NEURAL TRACTS
                </span>

                <button
                  onClick={handleFirePulse}
                  className={`px-3 py-1.5 rounded-xl border text-xs font-mono font-bold transition-all flex items-center gap-2 ${
                    isFiringPulse
                      ? 'bg-neuro-cyan border-neuro-cyan text-black shadow-cyan-glow animate-pulse'
                      : 'bg-neuro-cyan/20 border-neuro-cyan/50 text-neuro-cyan hover:bg-neuro-cyan/30'
                  }`}
                >
                  <Zap className="w-3.5 h-3.5" />
                  {isFiringPulse ? 'FIRING SYNAPTIC PULSE...' : 'FIRE SYNAPTIC DISCHARGE'}
                </button>
              </div>

              {/* Connected Network Nodes Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {connections.map((conn, idx) => (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-2xl border transition-all flex items-center justify-between group ${
                      isFiringPulse
                        ? 'bg-neuro-cyan/20 border-neuro-cyan text-white shadow-cyan-glow scale-[1.02]'
                        : 'bg-black/50 border-white/10 hover:border-neuro-cyan/50 hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`w-2.5 h-2.5 rounded-full ${isFiringPulse ? 'bg-neuro-cyan animate-ping' : 'bg-neuro-purple'}`} />
                      <span className="font-semibold text-gray-200 text-xs">{conn}</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-neuro-cyan group-hover:translate-x-1 transition-transform" />
                  </div>
                ))}
              </div>

              {isFiringPulse && (
                <div className="p-3 rounded-xl bg-neuro-cyan/10 border border-neuro-cyan text-neuro-cyan font-mono text-xs flex items-center gap-2 animate-fade-in">
                  <Radio className="w-4 h-4 animate-spin" />
                  <span>Action potential traveling at 120 m/s across myelinated axonal fibers to target sub-nodes...</span>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: BIOPHYSICAL & NEUROTRANSMITTER SPECS */}
          {activeSubTab === 'biophysics' && (
            <div className="flex flex-col gap-4 animate-fade-in">
              <div className="p-4 rounded-2xl bg-black/50 border border-neuro-green/30 flex flex-col gap-3">
                <span className="text-[10px] font-mono text-neuro-green font-bold tracking-wider uppercase">
                  NEUROTRANSMITTER SECRETION & MODULATION PROFILE
                </span>
                <div className="flex flex-wrap gap-2">
                  {neurotransmitters.map((nt, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-xl bg-neuro-green/15 border border-neuro-green/40 text-neuro-green font-mono text-xs font-bold"
                    >
                      {nt}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                <div className="p-3 bg-white/5 border border-white/10 rounded-2xl flex flex-col gap-1">
                  <span className="text-neuro-muted text-[10px]">Neuron Population:</span>
                  <span className="font-bold text-neuro-cyan text-sm">
                    {structure?.neuronCountBillion ? `${structure.neuronCountBillion} Billion` : '1.2 - 8.5 Billion'}
                  </span>
                </div>

                <div className="p-3 bg-white/5 border border-white/10 rounded-2xl flex flex-col gap-1">
                  <span className="text-neuro-muted text-[10px]">Synaptic Density:</span>
                  <span className="font-bold text-neuro-pink text-sm">
                    {structure?.synapseDensityTrillion ? `${structure.synapseDensityTrillion} Trillion` : '10 - 25 Trillion'}
                  </span>
                </div>

                <div className="p-3 bg-white/5 border border-white/10 rounded-2xl flex flex-col gap-1">
                  <span className="text-neuro-muted text-[10px]">Cerebral Blood Flow (CBF):</span>
                  <span className="font-bold text-neuro-green text-sm">
                    {structure?.cbfMlPer100g ? `${structure.cbfMlPer100g} mL/100g/min` : '54 mL/100g/min'}
                  </span>
                </div>

                <div className="p-3 bg-white/5 border border-white/10 rounded-2xl flex flex-col gap-1">
                  <span className="text-neuro-muted text-[10px]">Spike Action Potential:</span>
                  <span className="font-bold text-neuro-yellow text-sm">
                    {structure?.actionPotentialThresholdMv ? `${structure.actionPotentialThresholdMv} mV` : '-55 mV'}
                  </span>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer Bar */}
        <div className="p-4 bg-black/60 border-t border-white/10 flex items-center justify-between font-mono text-xs">
          <div className="flex items-center gap-2 text-neuro-muted">
            <CheckCircle2 className="w-4 h-4 text-neuro-green" />
            <span>Target Node Integrated into 3D WebGL Canvas</span>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-neuro-cyan text-black font-bold hover:bg-neuro-cyan/80 transition-all shadow-cyan-glow"
          >
            DISMISS SCREEN
          </button>
        </div>

      </div>
    </div>
  );
};
