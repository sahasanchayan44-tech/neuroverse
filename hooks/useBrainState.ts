import { useState } from 'react';
import { BRAIN_STRUCTURES_DATABASE, BrainStructureDetail } from '../data/brainData';

export type ViewMode = 
  | 'default' 
  | 'solid' 
  | 'wireframe' 
  | 'exploded' 
  | 'xray' 
  | 'synaptic_network' 
  | 'vascular_tree' 
  | 'functional_mri' 
  | 'thermal_heat' 
  | 'eeg_density';

export interface LayerState {
  greyMatter: boolean;
  whiteMatter: boolean;
  bloodVessels: boolean;
  arteries: boolean;
  veins: boolean;
  capillaries: boolean;
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
    bloodVessels: false,
    arteries: false,
    veins: false,
    capillaries: false,
    neurons: false,
    nerves: false,
    axons: false,
    dendrites: false,
    synapses: false
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [isAudioActive, setIsAudioActive] = useState(false);
  const [timeScale, setTimeScale] = useState(1.0);
  const [transparency, setTransparency] = useState(0.85);

  const toggleLayer = (key: keyof LayerState) => {
    setLayers(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSetSelectedStructure = (structure: BrainStructureDetail | null) => {
    if (!structure) {
      setSelectedStructure(null);
      return;
    }
    if (selectedStructure && selectedStructure.id === structure.id) {
      setSelectedStructure(null);
    } else {
      setSelectedStructure(structure);
      setActiveSimulation(null);
    }
  };

  const selectStructureById = (id: string) => {
    const found = BRAIN_STRUCTURES_DATABASE.find(s => s.id === id);
    if (found) {
      if (selectedStructure && selectedStructure.id === id) {
        setSelectedStructure(null);
      } else {
        setSelectedStructure(found);
        setActiveSimulation(null);
      }
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
    setSelectedStructure: handleSetSelectedStructure,
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
