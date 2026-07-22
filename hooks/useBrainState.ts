import { useState } from 'react';
import { BRAIN_STRUCTURES_DATABASE, BrainStructureDetail } from '../data/brainData';

export type ViewMode = 'default' | 'exploded' | 'cross_section' | 'xray' | 'wireframe';

export interface LayerState {
  greyMatter: boolean;
  whiteMatter: boolean;
  bloodVessels: boolean;
  neurons: boolean;
  nerves: boolean;
  axons: boolean;
  dendrites: boolean;
  synapses: boolean;
}

export function useBrainState() {
  const [selectedStructure, setSelectedStructure] = useState<BrainStructureDetail | null>(null);
  const [activeSimulation, setActiveSimulation] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('default');
  
  const [layers, setLayers] = useState<LayerState>({
    greyMatter: true,
    whiteMatter: true,
    bloodVessels: true,
    neurons: true,
    nerves: true,
    axons: true,
    dendrites: true,
    synapses: true
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [isAudioActive, setIsAudioActive] = useState(false);
  const [timeScale, setTimeScale] = useState(1.0);
  const [transparency, setTransparency] = useState(0.85);

  const toggleLayer = (key: keyof LayerState) => {
    setLayers(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const selectStructureById = (id: string) => {
    const found = BRAIN_STRUCTURES_DATABASE.find(s => s.id === id);
    if (found) {
      setSelectedStructure(found);
      setActiveSimulation(null);
    }
  };

  const selectSimulation = (simName: string) => {
    if (activeSimulation === simName) {
      setActiveSimulation(null);
    } else {
      setActiveSimulation(simName);
      setSelectedStructure(null);
    }
  };

  const resetSelection = () => {
    setSelectedStructure(null);
    setActiveSimulation(null);
  };

  return {
    structures: BRAIN_STRUCTURES_DATABASE,
    selectedStructure,
    activeSimulation,
    viewMode,
    layers,
    searchQuery,
    isAudioActive,
    timeScale,
    transparency,
    setSelectedStructure,
    selectStructureById,
    selectSimulation,
    resetSelection,
    setViewMode,
    toggleLayer,
    setSearchQuery,
    setIsAudioActive,
    setTimeScale,
    setTransparency
  };
}
