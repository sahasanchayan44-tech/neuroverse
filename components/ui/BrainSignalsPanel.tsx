'use client';

import React, { useEffect, useState } from 'react';
import { Radio, Activity, Zap, ShieldCheck } from 'lucide-react';

interface SignalChannel {
  id: string;
  name: string;
  location: string;
  freqHz: number;
  microvolts: number;
  status: 'OPTIMAL' | 'SPIKING' | 'SYNCHRONIZED';
}

const INITIAL_CHANNELS: SignalChannel[] = [
  { id: 'FP1-F7', name: 'Left Frontal FP1', location: 'Prefrontal Cortical Loop', freqHz: 42.5, microvolts: 48, status: 'OPTIMAL' },
  { id: 'FP2-F8', name: 'Right Frontal FP2', location: 'Prefrontal Executive Loop', freqHz: 38.0, microvolts: 52, status: 'OPTIMAL' },
  { id: 'T3-C3', name: 'Left Temporal T3', location: 'Hippocampal Memory Channel', freqHz: 12.4, microvolts: 65, status: 'SYNCHRONIZED' },
  { id: 'C4-T4', name: 'Right Temporal T4', location: 'Auditory Cortical Pathway', freqHz: 21.0, microvolts: 38, status: 'OPTIMAL' },
  { id: 'P3-O1', name: 'Left Occipital O1', location: 'Visual Striate Cortex V1', freqHz: 55.2, microvolts: 74, status: 'SPIKING' },
  { id: 'P4-O2', name: 'Right Occipital O2', location: 'Parieto-Occipital Visuospatial', freqHz: 49.8, microvolts: 62, status: 'OPTIMAL' }
];

export const BrainSignalsPanel: React.FC = () => {
  const [channels, setChannels] = useState<SignalChannel[]>(INITIAL_CHANNELS);

  useEffect(() => {
    const interval = setInterval(() => {
      setChannels(prev => prev.map(ch => {
        const jitterFreq = (Math.random() - 0.5) * 1.5;
        const jitterUv = Math.floor((Math.random() - 0.5) * 6);
        const newUv = Math.max(20, Math.min(120, ch.microvolts + jitterUv));
        return {
          ...ch,
          freqHz: parseFloat((ch.freqHz + jitterFreq).toFixed(1)),
          microvolts: newUv,
          status: newUv > 70 ? 'SPIKING' : (newUv > 50 ? 'SYNCHRONIZED' : 'OPTIMAL')
        };
      }));
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-3 bg-neuro-panel backdrop-blur-xl border border-neuro-cyan/40 rounded-2xl shadow-hologram flex flex-col gap-2.5 text-white font-mono text-xs">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-neuro-border pb-2">
        <span className="font-bold text-neuro-cyan flex items-center gap-1.5">
          <Radio className="w-4 h-4 text-neuro-pink animate-pulse" /> 10-20 EEG ELECTRODE BRAIN SIGNAL CHANNELS
        </span>
        <span className="px-2 py-0.5 bg-neuro-green/20 text-neuro-green border border-neuro-green/30 rounded text-[10px]">
          ● 6 CHANNELS ONLINE
        </span>
      </div>

      {/* 6 Multi-Channel Signal Monitor Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {channels.map(ch => {
          const isSpiking = ch.status === 'SPIKING';
          return (
            <div
              key={ch.id}
              className={`p-2.5 rounded-xl border flex flex-col gap-1 transition-all ${
                isSpiking
                  ? 'bg-neuro-pink/20 border-neuro-pink shadow-pink-glow'
                  : 'bg-white/5 border-white/10'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-white text-[11px]">{ch.id}</span>
                <span className={`text-[9px] px-1.5 py-0.2 rounded font-bold ${
                  isSpiking ? 'bg-neuro-pink text-white' : 'bg-neuro-cyan/20 text-neuro-cyan'
                }`}>
                  {ch.status}
                </span>
              </div>

              <span className="text-[10px] text-gray-400 truncate">{ch.name}</span>

              <div className="flex items-center justify-between text-[10px] pt-1 border-t border-white/10">
                <span className="text-neuro-cyan">{ch.freqHz} Hz</span>
                <span className="font-bold text-neuro-green">{ch.microvolts} μV</span>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
