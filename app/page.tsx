'use client';

import React, { useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import { useBrainState } from '@/hooks/useBrainState';
import { HeaderHUD } from '@/components/ui/HeaderHUD';
import { LayerPanel } from '@/components/ui/LayerPanel';
import { RightSidebar } from '@/components/ui/RightSidebar';
import { InfoPanel } from '@/components/ui/InfoPanel';
import { EEGWaveform } from '@/components/ui/EEGWaveform';
import { NeuronModal } from '@/components/ui/NeuronModal';
import { ServerMetricsModal } from '@/components/ui/ServerMetricsModal';

// Dynamically import 3D Three.js WebGL Canvas to disable SSR for WebGL context
const BrainCanvas = dynamic(
  () => import('@/components/brain/BrainCanvas').then((mod) => mod.BrainCanvas),
  { ssr: false }
);

export default function Home() {
  const {
    structures,
    selectedStructure,
    activeSimulation,
    viewMode,
    layers,
    isAudioActive,
    timeScale,
    transparency,
    setSelectedStructure,
    selectSimulation,
    resetSelection,
    setViewMode,
    toggleLayer,
    setIsAudioActive,
    setTimeScale,
    setTransparency
  } = useBrainState();

  const [selectedDisease, setSelectedDisease] = useState<string | null>(null);
  const [hoveredName, setHoveredName] = useState<string | null>(null);
  const [isNeuronModalOpen, setIsNeuronModalOpen] = useState(false);
  const [isMetricsModalOpen, setIsMetricsModalOpen] = useState(false);

  const audioCtxRef = useRef<AudioContext | null>(null);

  const handleToggleAudio = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
      setIsAudioActive(true);
    } else {
      setIsAudioActive(!isAudioActive);
    }
  };

  const handleExportScreenshot = () => {
    const canvas = document.querySelector('canvas');
    if (canvas) {
      const link = document.createElement('a');
      link.download = `neuroverse-hologram-${Date.now()}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    }
  };

  const handleResetAll = () => {
    resetSelection();
    setSelectedDisease(null);
  };

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-neuro-dark text-white font-sans">
      
      {/* 3D WebGL Holographic Brain Engine (No-SSR) */}
      <BrainCanvas
        structures={structures}
        selectedStructure={selectedStructure}
        activeSimulation={activeSimulation}
        viewMode={viewMode}
        layers={layers}
        transparency={transparency}
        timeScale={timeScale}
        onSelectStructure={setSelectedStructure}
        onHoverStructure={setHoveredName}
      />

      {/* Top Header HUD Bar */}
      <HeaderHUD
        structures={structures}
        activeSimulation={activeSimulation}
        viewMode={viewMode}
        isAudioActive={isAudioActive}
        onSelectStructure={setSelectedStructure}
        onSelectSimulation={selectSimulation}
        onChangeViewMode={setViewMode}
        onToggleAudio={handleToggleAudio}
        onExportScreenshot={handleExportScreenshot}
        onOpenNeuronModal={() => setIsNeuronModalOpen(true)}
        onOpenMetricsModal={() => setIsMetricsModalOpen(true)}
      />

      {/* Left Layer Panel & Catalog */}
      <LayerPanel
        structures={structures}
        selectedStructure={selectedStructure}
        layers={layers}
        transparency={transparency}
        timeScale={timeScale}
        onSelectStructure={setSelectedStructure}
        onToggleLayer={toggleLayer}
        onChangeTransparency={setTransparency}
        onChangeTimeScale={setTimeScale}
      />

      {/* Right Sidebar with Cognition, Pathology & Timeline Tabs */}
      <RightSidebar
        activeSimulation={activeSimulation}
        selectedDisease={selectedDisease}
        onSelectSimulation={selectSimulation}
        onSelectDisease={setSelectedDisease}
        onReset={handleResetAll}
      />

      {/* Floating Holographic Structure Information Card */}
      <InfoPanel
        structure={selectedStructure}
        onClose={resetSelection}
      />

      {/* Embedded Real-Time Human Brain Signal EEG Waveform Dock at the bottom */}
      <div className="absolute bottom-3 left-4 right-4 z-20 max-w-4xl mx-auto">
        <EEGWaveform
          activeSimulation={activeSimulation}
          selectedDisease={selectedDisease}
        />
      </div>

      {/* Hover Tooltip Bar */}
      {hoveredName && (
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 pointer-events-none px-4 py-1.5 bg-neuro-dark/90 backdrop-blur-md border border-neuro-cyan rounded-full shadow-hologram text-xs font-mono text-neuro-cyan tracking-wider">
          TARGET: {hoveredName.toUpperCase()}
        </div>
      )}

      {/* Microscopic Single Neuron Viewer Modal */}
      <NeuronModal
        isOpen={isNeuronModalOpen}
        onClose={() => setIsNeuronModalOpen(false)}
      />

      {/* Server Telemetry Metrics Modal */}
      <ServerMetricsModal
        isOpen={isMetricsModalOpen}
        onClose={() => setIsMetricsModalOpen(false)}
      />

    </main>
  );
}
