'use client';

import React from 'react';
import { X, ShieldCheck, Server, Cpu, Database, Activity, Radio } from 'lucide-react';

interface MetricsProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ServerMetricsModal: React.FC<MetricsProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fade-in">
      <div className="relative w-full max-w-3xl bg-neuro-panel backdrop-blur-2xl border border-neuro-cyan rounded-3xl shadow-hologram p-6 flex flex-col gap-5 text-white">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neuro-border pb-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-neuro-green animate-pulse" />
            <h2 className="text-lg font-bold font-mono text-neuro-cyan tracking-wider">
              NEUROVERSE SERVER TELEMETRY & SYSTEM DASHBOARD
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Server Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 font-mono text-xs">
          
          <div className="p-3 bg-white/5 border border-white/10 rounded-2xl flex flex-col gap-1">
            <span className="text-neuro-muted flex items-center gap-1">
              <Server className="w-3.5 h-3.5 text-neuro-cyan" /> SERVER HOST
            </span>
            <span className="text-sm font-bold text-white">localhost:8080</span>
            <span className="text-[10px] text-neuro-green">● Unified Production Node</span>
          </div>

          <div className="p-3 bg-white/5 border border-white/10 rounded-2xl flex flex-col gap-1">
            <span className="text-neuro-muted flex items-center gap-1">
              <Cpu className="w-3.5 h-3.5 text-neuro-pink" /> RENDER FRAME RATE
            </span>
            <span className="text-sm font-bold text-neuro-pink">60.0 FPS</span>
            <span className="text-[10px] text-neuro-muted">WebGL 2.0 ACESFilmic</span>
          </div>

          <div className="p-3 bg-white/5 border border-white/10 rounded-2xl flex flex-col gap-1">
            <span className="text-neuro-muted flex items-center gap-1">
              <Database className="w-3.5 h-3.5 text-neuro-purple" /> ANATOMICAL GLB MODEL
            </span>
            <span className="text-sm font-bold text-neuro-purple">3.94 MB</span>
            <span className="text-[10px] text-neuro-cyan">BodyParts3D Open Dataset</span>
          </div>

          <div className="p-3 bg-white/5 border border-white/10 rounded-2xl flex flex-col gap-1">
            <span className="text-neuro-muted flex items-center gap-1">
              <Activity className="w-3.5 h-3.5 text-neuro-green" /> ACTIVE NEURON NODES
            </span>
            <span className="text-sm font-bold text-neuro-green">500 Nodes</span>
            <span className="text-[10px] text-neuro-muted">1,850 Impulses/sec</span>
          </div>

          <div className="p-3 bg-white/5 border border-white/10 rounded-2xl flex flex-col gap-1">
            <span className="text-neuro-muted flex items-center gap-1">
              <Radio className="w-3.5 h-3.5 text-neuro-yellow" /> EEG BAND FREQUENCY
            </span>
            <span className="text-sm font-bold text-neuro-yellow">40Hz Gamma</span>
            <span className="text-[10px] text-neuro-cyan">Multichannel Telemetry</span>
          </div>

          <div className="p-3 bg-white/5 border border-white/10 rounded-2xl flex flex-col gap-1">
            <span className="text-neuro-muted flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-neuro-cyan" /> FIREBASE SYNC
            </span>
            <span className="text-sm font-bold text-neuro-cyan">CONNECTED</span>
            <span className="text-[10px] text-neuro-green">Firestore & Auth Live</span>
          </div>

        </div>

      </div>
    </div>
  );
};
