'use client';

import React, { useState, useRef } from 'react';
import { useBrainState } from '@/hooks/useBrainState';
import { BrainCanvas } from '@/components/brain/BrainCanvas';
import { HeaderHUD } from '@/components/ui/HeaderHUD';
import { LayerPanel } from '@/components/ui/LayerPanel';
import { InfoPanel } from '@/components/ui/InfoPanel';

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

  const [hoveredName, setHoveredName] = useState<string | null>(null);
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

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-neuro-dark text-white font-sans">
      
      {/* 3D WebGL Holographic Brain Engine */}
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

      {/* Floating Holographic Structure Information Card */}
      <InfoPanel
        structure={selectedStructure}
        onClose={resetSelection}
      />

      {/* Hover Tooltip Bar */}
      {hoveredName && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 pointer-events-none px-4 py-1.5 bg-neuro-dark/90 backdrop-blur-md border border-neuro-cyan rounded-full shadow-hologram text-xs font-mono text-neuro-cyan tracking-wider">
          TARGET: {hoveredName.toUpperCase()}
        </div>
      )}

    </main>
  );
}
