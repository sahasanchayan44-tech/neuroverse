'use client';

import React from 'react';
import { X, Zap, Activity, ShieldCheck, Dna } from 'lucide-react';

interface NeuronModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NeuronModal: React.FC<NeuronModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fade-in">
      <div className="relative w-full max-w-4xl bg-neuro-panel backdrop-blur-2xl border border-neuro-cyan rounded-3xl shadow-hologram p-6 flex flex-col gap-5 text-white">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neuro-border pb-3">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-neuro-cyan animate-pulse" />
            <h2 className="text-lg font-bold font-mono text-neuro-cyan tracking-wider">
              MICROSCOPIC SINGLE NEURON & SYNAPTIC TRANSMISSION VIEWER
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 2D Canvas Diagram of Pyramidal Neuron */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <div className="p-4 bg-black/70 border border-neuro-cyan/30 rounded-2xl flex flex-col gap-3">
            <span className="text-xs font-mono text-neuro-cyan font-bold flex items-center gap-1.5">
              <Dna className="w-4 h-4 text-neuro-green" /> CORTICAL PYRAMIDAL NEURON ANATOMY
            </span>
            <div className="flex-1 min-h-[220px] relative flex items-center justify-center border border-white/10 rounded-xl bg-neuro-dark/90 p-4">
              <div className="w-full h-full flex flex-col items-center justify-between text-center text-xs font-mono text-neuro-muted">
                <div className="p-2 border border-neuro-cyan rounded-lg bg-neuro-cyan/10 text-neuro-cyan">
                  🌿 Apical Dendrites (Signal Input)
                </div>
                <div className="w-0.5 h-6 bg-neuro-cyan" />
                <div className="p-3 border border-neuro-pink rounded-xl bg-neuro-pink/10 text-white font-bold">
                  🧠 Soma / Cell Body (-70mV Resting Potential)
                </div>
                <div className="w-0.5 h-8 bg-neuro-cyan animate-pulse" />
                <div className="p-2 border border-neuro-cyan rounded-lg bg-neuro-cyan/10 text-neuro-cyan">
                  ⚡ Myelinated Axon (+30mV Action Potential Spike)
                </div>
                <div className="w-0.5 h-6 bg-neuro-cyan" />
                <div className="p-2 border border-neuro-purple rounded-lg bg-neuro-purple/10 text-neuro-purple">
                  💧 Synaptic Terminal Bouton (Neurotransmitter Release)
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-black/70 border border-neuro-cyan/30 rounded-2xl flex flex-col gap-3 text-xs">
            <span className="text-xs font-mono text-neuro-cyan font-bold flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-neuro-pink" /> BIOPHYSICAL ACTION POTENTIAL SPECS
            </span>

            <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex justify-between">
              <span className="text-neuro-muted">Resting Membrane Potential:</span>
              <span className="font-mono font-bold text-neuro-cyan">-70 mV</span>
            </div>

            <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex justify-between">
              <span className="text-neuro-muted">Depolarization Threshold:</span>
              <span className="font-mono font-bold text-neuro-green">-55 mV</span>
            </div>

            <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex justify-between">
              <span className="text-neuro-muted">Peak Action Spike:</span>
              <span className="font-mono font-bold text-neuro-pink">+30 mV</span>
            </div>

            <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex justify-between">
              <span className="text-neuro-muted">Axonal Conduction Velocity:</span>
              <span className="font-mono font-bold text-white">120 m/s (Myelinated Aα)</span>
            </div>

            <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex justify-between">
              <span className="text-neuro-muted">Synaptic Vesicle Exocytosis:</span>
              <span className="font-mono font-bold text-neuro-purple">0.5 ms Latency</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
