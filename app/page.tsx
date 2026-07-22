'use client';

import React, { useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import { ChevronDown, ChevronUp, Activity, Radio, Eye, Cpu } from 'lucide-react';
import { useBrainState } from '@/hooks/useBrainState';
import { HeaderHUD } from '@/components/ui/HeaderHUD';
import { LayerPanel } from '@/components/ui/LayerPanel';
import { RightSidebar } from '@/components/ui/RightSidebar';
import { InfoPanel } from '@/components/ui/InfoPanel';
import { EEGWaveform } from '@/components/ui/EEGWaveform';
import { BrainSignalsPanel } from '@/components/ui/BrainSignalsPanel';
import { ParametersPanel } from '@/components/ui/ParametersPanel';
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
    searchQuery,
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
    setTransparency,
    setSearchQuery
  } = useBrainState();

  const [selectedDisease, setSelectedDisease] = useState<string | null>(null);
  const [hoveredName, setHoveredName] = useState<string | null>(null);
  const [isNeuronModalOpen, setIsNeuronModalOpen] = useState(false);
  const [isMetricsModalOpen, setIsMetricsModalOpen] = useState(false);
  const [isDockCollapsed, setIsDockCollapsed] = useState(false);
  const [isHeaderCollapsed, setIsHeaderCollapsed] = useState(false);
  const [isRightSidebarCollapsed, setIsRightSidebarCollapsed] = useState(false);

  const audioCtxRef = useRef<AudioContext | null>(null);

  const topOffset = isHeaderCollapsed ? 'top-14' : 'top-36';

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
        searchQuery={searchQuery}
        hoveredStructureName={hoveredName}
        onSelectStructure={setSelectedStructure}
        onHoverStructure={setHoveredName}
      />

      {/* Top Header HUD Bar */}
      <HeaderHUD
        structures={structures}
        activeSimulation={activeSimulation}
        viewMode={viewMode}
        isAudioActive={isAudioActive}
        searchQuery={searchQuery}
        isHeaderCollapsed={isHeaderCollapsed}
        onToggleHeaderCollapse={() => setIsHeaderCollapsed(!isHeaderCollapsed)}
        onSearchQueryChange={setSearchQuery}
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
        topOffset={topOffset}
        onSelectStructure={setSelectedStructure}
        onToggleLayer={toggleLayer}
        onChangeTransparency={setTransparency}
        onChangeTimeScale={setTimeScale}
      />

      {/* Right Sidebar with Cognition, Pathology & Timeline Tabs */}
      <RightSidebar
        activeSimulation={activeSimulation}
        selectedDisease={selectedDisease}
        topOffset={topOffset}
        isCollapsed={isRightSidebarCollapsed}
        onToggleCollapse={() => setIsRightSidebarCollapsed(!isRightSidebarCollapsed)}
        onSelectSimulation={selectSimulation}
        onSelectDisease={setSelectedDisease}
        onReset={handleResetAll}
      />

      {/* Floating Holographic Structure Information Card */}
      <InfoPanel
        structure={selectedStructure}
        topOffset={topOffset}
        isRightSidebarOpen={!isRightSidebarCollapsed}
        onClose={resetSelection}
      />

      {/* Bottom Telemetry & Anatomy Controls Dock */}
      <div className="absolute bottom-3 left-4 right-4 xl:left-[340px] xl:right-[340px] max-w-4xl mx-auto z-30 flex flex-col gap-2 pointer-events-auto transition-all">
        
        {/* Toggle Bar */}
        <div className="flex items-center justify-between px-4 py-1.5 bg-neuro-panel/90 backdrop-blur-md border border-neuro-cyan/40 rounded-xl text-xs font-mono shadow-hologram">
          <div className="flex items-center gap-3">
            <span className="font-bold text-neuro-cyan flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-neuro-green animate-pulse" /> SCI-FI TELEMETRY & SIGNAL DOCK
            </span>
            <span className="text-[10px] text-neuro-muted hidden sm:inline">
              [Computed Biophysics • 10-20 Signals • EEG Waveforms]
            </span>
          </div>

          <button
            onClick={() => setIsDockCollapsed(!isDockCollapsed)}
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-neuro-cyan/20 border border-neuro-cyan/40 text-neuro-cyan hover:text-white hover:bg-neuro-cyan/30 transition-all font-bold"
            title={isDockCollapsed ? "Expand Telemetry Dock" : "Minimize Dock for Unobstructed 3D Brain View"}
          >
            {isDockCollapsed ? (
              <>
                <ChevronUp className="w-4 h-4" /> EXPAND DOCK
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" /> FULL BRAIN VIEW
              </>
            )}
          </button>
        </div>

        {/* Collapsible Content */}
        {!isDockCollapsed && (
          <div className="flex flex-col gap-2 animate-fade-in max-h-[50vh] overflow-y-auto pr-1">
            
            {/* Computed Biophysical Parameters */}
            <ParametersPanel structure={selectedStructure} />

            {/* Brain Signals Panel */}
            <BrainSignalsPanel />

            <EEGWaveform
              activeSimulation={activeSimulation}
              selectedDisease={selectedDisease}
            />
          </div>
        )}

      </div>

      {/* Hover Tooltip Bar */}
      {hoveredName && (
        <div className={`absolute ${topOffset} left-1/2 -translate-x-1/2 z-30 pointer-events-none px-4 py-1.5 bg-neuro-dark/90 backdrop-blur-md border border-neuro-cyan rounded-full shadow-hologram text-xs font-mono text-neuro-cyan tracking-wider transition-all`}>
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
