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
    <div className="p-4 glass-panel flex flex-col gap-3 text-slate-100 font-sans text-xs">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-neuro-border pb-2.5">
        <span className="font-heading font-bold text-slate-100 flex items-center gap-2">
          <Radio className="w-4 h-4 text-neuro-green animate-pulse" /> 10-20 EEG ELECTRODE BRAIN SIGNAL CHANNELS
        </span>
        <span className="px-2.5 py-1 bg-neuro-green/15 text-neuro-green border border-neuro-green/30 rounded-full text-[10px] font-mono font-semibold flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-neuro-green animate-ping" /> 6 CHANNELS ONLINE
        </span>
      </div>

      {/* 6 Multi-Channel Signal Monitor Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
        {channels.map(ch => {
          const isSpiking = ch.status === 'SPIKING';
          return (
            <div
              key={ch.id}
              className={`p-3 rounded-2xl glass-card flex flex-col gap-1.5 ${
                isSpiking
                  ? 'border-neuro-red/60 shadow-red-glow'
                  : 'hover:border-neuro-cyan/40'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono font-bold text-white text-[11px]">{ch.id}</span>
                <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full font-bold uppercase ${
                  isSpiking ? 'bg-neuro-red/20 text-neuro-red border border-neuro-red/40' : 'bg-neuro-green/15 text-neuro-green border border-neuro-green/30'
                }`}>
                  {ch.status}
                </span>
              </div>

              <span className="text-[10px] text-slate-400 truncate font-sans">{ch.name}</span>

              <div className="flex items-center justify-between text-[11px] font-mono pt-1.5 border-t border-slate-700/40">
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
