'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Activity, Radio, Cpu } from 'lucide-react';

interface EEGProps {
  activeSimulation: string | null;
  selectedDisease: string | null;
}

export const EEGWaveform: React.FC<EEGProps> = ({ activeSimulation, selectedDisease }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedBand, setSelectedBand] = useState<'ALL' | 'GAMMA' | 'BETA' | 'ALPHA' | 'THETA' | 'DELTA'>('ALL');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let phase = 0;

    const render = () => {
      animId = requestAnimationFrame(render);
      const w = canvas.width;
      const h = canvas.height;
      const centerY = h / 2;

      ctx.clearRect(0, 0, w, h);

      // Grid background
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.08)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = 0; x < w; x += 35) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
      }
      for (let y = 0; y < h; y += 15) {
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
      }
      ctx.stroke();

      // Adjust frequency & speed based on active simulation mode or disease pathology
      let speedMult = 1.0;
      let ampMult = 1.0;
      if (activeSimulation === 'Thinking' || activeSimulation === 'Fear') {
        speedMult = 2.2;
        ampMult = 1.6;
      } else if (activeSimulation === 'Memory' || activeSimulation === 'Dreaming') {
        speedMult = 0.6;
        ampMult = 1.2;
      } else if (selectedDisease === 'epilepsy') {
        speedMult = 3.5;
        ampMult = 2.4;
      }

      phase += 0.06 * speedMult;

      const bands = [
        { id: 'GAMMA', color: '#ff007f', freq: 0.09, amp: 14 * ampMult, label: 'Gamma (40Hz)' },
        { id: 'BETA', color: '#00f0ff', freq: 0.05, amp: 10 * ampMult, label: 'Beta (20Hz)' },
        { id: 'ALPHA', color: '#00ff88', freq: 0.025, amp: 8 * ampMult, label: 'Alpha (10Hz)' },
        { id: 'THETA', color: '#ffaa00', freq: 0.012, amp: 6 * ampMult, label: 'Theta (6Hz)' },
        { id: 'DELTA', color: '#8a2be2', freq: 0.006, amp: 4 * ampMult, label: 'Delta (2Hz)' }
      ];

      bands.forEach(b => {
        if (selectedBand !== 'ALL' && selectedBand !== b.id) return;

        ctx.beginPath();
        ctx.strokeStyle = b.color;
        ctx.lineWidth = 2;
        ctx.shadowColor = b.color;
        ctx.shadowBlur = 8;

        for (let x = 0; x < w; x += 3) {
          const mod = Math.sin(x * 0.012 + phase) * 0.35 + 0.85;
          const y = centerY + Math.sin(x * b.freq + phase) * b.amp * mod;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        ctx.stroke();
        ctx.shadowBlur = 0;
      });
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, [selectedBand, activeSimulation, selectedDisease]);

  return (
    <div className="flex flex-col gap-2 p-3 bg-neuro-panel backdrop-blur-xl border border-neuro-cyan/40 rounded-2xl shadow-hologram w-full">
      
      {/* Header */}
      <div className="flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2 font-bold text-neuro-cyan">
          <Activity className="w-4 h-4 text-neuro-green animate-pulse" />
          <span>REAL-TIME HUMAN BRAIN SIGNAL EEG OSCILLOSCOPE (MULTICHANNEL TELEMETRY)</span>
        </div>
        
        {/* Band Toggles */}
        <div className="flex items-center gap-1">
          {(['ALL', 'GAMMA', 'BETA', 'ALPHA', 'THETA', 'DELTA'] as const).map(band => (
            <button
              key={band}
              onClick={() => setSelectedBand(band)}
              className={`px-2 py-0.5 text-[10px] font-mono rounded border uppercase transition-all ${
                selectedBand === band
                  ? 'bg-neuro-cyan/20 border-neuro-cyan text-white shadow-cyan-glow font-bold'
                  : 'bg-white/5 border-white/10 text-neuro-muted hover:text-white'
              }`}
            >
              {band}
            </button>
          ))}
        </div>
      </div>

      {/* 2D Oscilloscope Canvas */}
      <canvas ref={canvasRef} width={800} height={50} className="w-full h-12 rounded-xl bg-black/70 border border-white/10" />

    </div>
  );
};
