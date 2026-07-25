'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Sliders, Eye, ChevronLeft, ChevronRight, ChevronDown, Cpu, Zap, Activity } from 'lucide-react';
import { BrainStructureDetail } from '@/data/brainData';
import { LayerState } from '@/hooks/useBrainState';
import { COMPLETE_BRAIN_HIERARCHY, BrainHierarchyNode } from '@/data/brainHierarchy';

interface LayerPanelProps {
  structures: BrainStructureDetail[];
  selectedStructure: BrainStructureDetail | null;
  layers: LayerState;
  transparency: number;
  timeScale: number;
  topOffset?: string;
  onSelectStructure: (s: BrainStructureDetail) => void;
  onSelectNode?: (node: BrainHierarchyNode, mappedStructure: BrainStructureDetail | null) => void;
  onToggleLayer: (key: keyof LayerState) => void;
  onChangeTransparency: (val: number) => void;
  onChangeTimeScale: (val: number) => void;
}

const TreeNode: React.FC<{
  node: BrainHierarchyNode;
  depth: number;
  structures: BrainStructureDetail[];
  selectedNodeId: string | null;
  expandedNodes: Record<string, boolean>;
  onToggleNode: (id: string) => void;
  onSelectNode: (node: BrainHierarchyNode, mappedStructure: BrainStructureDetail | null) => void;
}> = ({ node, depth, structures, selectedNodeId, expandedNodes, onToggleNode, onSelectNode }) => {
  const hasChildren = node.children && node.children.length > 0;
  const isExpanded = expandedNodes[node.id] ?? (depth <= 1);

  const mappedStructure = structures.find((s) => s.id === node.targetStructureId);
  const isSelected = selectedNodeId === node.id;

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasChildren) {
      onToggleNode(node.id);
    }
    onSelectNode(node, mappedStructure || null);
  };

  return (
    <div className="flex flex-col select-none">
      <motion.button
        whileHover={{ x: 2 }}
        onClick={handleClick}
        style={{ paddingLeft: `${Math.min(depth * 10 + 6, 40)}px` }}
        className={`py-1.5 pr-2 rounded-xl border text-left transition-all duration-200 flex items-center justify-between text-xs font-sans group ${
          isSelected
            ? 'bg-[#00E5FF]/25 border-[#00E5FF] text-[#F8FAFC] shadow-[0_0_15px_rgba(0,229,255,0.25)] font-bold'
            : hasChildren
            ? 'bg-black/30 border-[rgba(0,229,255,0.12)] text-[#F8FAFC] hover:bg-[#00E5FF]/15 hover:border-[#00E5FF]/30 font-semibold'
            : 'bg-transparent border-transparent text-[#94A3B8] hover:bg-[#00E5FF]/10 hover:text-[#F8FAFC]'
        }`}
      >
        <div className="flex items-center gap-1.5 overflow-hidden">
          {hasChildren ? (
            <span className="p-0.5 rounded text-[#00E5FF] flex-shrink-0">
              {isExpanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
            </span>
          ) : (
            <span className="w-3.5 h-3.5 flex items-center justify-center flex-shrink-0">
              <div className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-[#00E5FF] animate-ping' : 'bg-[#64748B]'}`} />
            </span>
          )}
          <span className="truncate text-[11px] font-sans">{node.name}</span>
        </div>

        {mappedStructure && (
          <Eye className={`w-3 h-3 flex-shrink-0 ${isSelected ? 'text-[#00E5FF]' : 'text-[#64748B] group-hover:text-[#94A3B8]'}`} />
        )}
      </motion.button>

      <AnimatePresence initial={false}>
        {hasChildren && isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="flex flex-col gap-0.5 mt-0.5 border-l border-[#00E5FF]/20 ml-2.5 overflow-hidden"
          >
            {node.children!.map((child) => (
              <TreeNode
                key={child.id}
                node={child}
                depth={depth + 1}
                structures={structures}
                selectedNodeId={selectedNodeId}
                expandedNodes={expandedNodes}
                onToggleNode={onToggleNode}
                onSelectNode={onSelectNode}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const LayerPanel: React.FC<LayerPanelProps> = ({
  structures,
  selectedStructure,
  layers,
  transparency,
  timeScale,
  topOffset = 'top-20',
  onSelectStructure,
  onSelectNode: parentOnSelectNode,
  onToggleLayer,
  onChangeTransparency,
  onChangeTimeScale
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState<'anatomy' | 'layers'>('anatomy');
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  
  const [expandedNodes, setExpandedNodes] = useState<Record<string, boolean>>({
    'sec-1-cerebrum': true,
    'cerebrum-cortex': true,
    'sec-2-diencephalon': true
  });

  const toggleNode = (nodeId: string) => {
    setExpandedNodes((prev) => ({ ...prev, [nodeId]: !prev[nodeId] }));
  };

  const handleSelectNode = (node: BrainHierarchyNode, mappedStructure: BrainStructureDetail | null) => {
    setSelectedNodeId(node.id);
    if (mappedStructure) {
      onSelectStructure(mappedStructure);
    }
    if (parentOnSelectNode) {
      parentOnSelectNode(node, mappedStructure);
    }
  };

  if (isCollapsed) {
    return (
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={() => setIsCollapsed(false)}
        className={`absolute ${topOffset} left-4 z-30 px-4 py-3 glass-panel text-[#00E5FF] hover:text-[#F8FAFC] hover:border-[#00E5FF] transition-all duration-300 flex items-center gap-2 font-mono text-xs`}
        title="Expand Anatomical Layers Panel"
      >
        <Layers className="w-4 h-4 text-[#00E5FF] animate-pulse" />
        <span className="font-heading font-bold text-xs">ANATOMY TREE</span>
        <ChevronRight className="w-4 h-4 text-[#00E5FF]" />
      </motion.button>
    );
  }

  return (
    <motion.aside
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`absolute ${topOffset} left-4 bottom-16 z-20 w-84 max-h-[calc(100vh-10rem)] glass-panel p-4 flex flex-col gap-3 overflow-hidden text-[#F8FAFC] transition-all duration-300`}
    >
      
      {/* Header with Minimize Button & Glass Tabs */}
      <div className="flex items-center justify-between border-b border-[rgba(0,229,255,0.12)] pb-3 flex-shrink-0">
        <div className="flex gap-1.5 text-xs flex-1">
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setActiveTab('anatomy')}
            className={`relative flex-1 py-1.5 rounded-xl border transition-all duration-200 flex items-center justify-center gap-1.5 font-heading font-semibold text-xs ${
              activeTab === 'anatomy'
                ? 'bg-[#00E5FF]/20 border-[#00E5FF] text-[#F8FAFC] shadow-[0_0_15px_rgba(0,229,255,0.3)] scale-[1.03]'
                : 'bg-[rgba(12,18,30,0.45)] border-[rgba(0,229,255,0.12)] text-[#94A3B8] hover:border-[rgba(0,229,255,0.35)] hover:text-[#F8FAFC]'
            }`}
          >
            <Activity className="w-3.5 h-3.5" /> ANATOMY TREE
          </motion.button>

          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setActiveTab('layers')}
            className={`relative flex-1 py-1.5 rounded-xl border transition-all duration-200 flex items-center justify-center gap-1.5 font-heading font-semibold text-xs ${
              activeTab === 'layers'
                ? 'bg-[#A855F7]/20 border-[#A855F7] text-[#F8FAFC] shadow-[0_0_15px_rgba(168,85,247,0.3)] scale-[1.03]'
                : 'bg-[rgba(12,18,30,0.45)] border-[rgba(0,229,255,0.12)] text-[#94A3B8] hover:border-[#A855F7]/40 hover:text-[#F8FAFC]'
            }`}
          >
            <Layers className="w-3.5 h-3.5" /> LAYERS
          </motion.button>
        </div>

        <button
          onClick={() => setIsCollapsed(true)}
          className="ml-2 p-1.5 rounded-xl bg-black/30 border border-[rgba(0,229,255,0.12)] hover:bg-[#00E5FF]/20 text-[#94A3B8] hover:text-[#F8FAFC] transition-all duration-200"
          title="Minimize Left Panel"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
      </div>

      {/* Tab 1: 10-Tier Anatomical Tree Hierarchy */}
      {activeTab === 'anatomy' && (
        <div className="flex flex-col gap-2 flex-1 min-h-0 overflow-y-auto pr-1">
          <span className="text-[10px] font-mono text-[#00E5FF] font-semibold tracking-wider flex-shrink-0 uppercase">
            COMPREHENSIVE BRAIN ANATOMY HIERARCHY
          </span>

          <div className="flex flex-col gap-1 font-sans">
            {COMPLETE_BRAIN_HIERARCHY.map((rootNode) => (
              <TreeNode
                key={rootNode.id}
                node={rootNode}
                depth={0}
                structures={structures}
                selectedNodeId={selectedNodeId}
                expandedNodes={expandedNodes}
                onToggleNode={toggleNode}
                onSelectNode={handleSelectNode}
              />
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Dedicated Biophysical Layers & Networks */}
      {activeTab === 'layers' && (
        <div className="flex flex-col gap-3 flex-1 min-h-0 overflow-y-auto pr-1">
          {/* Tissue Layers Group */}
          <div className="flex flex-col gap-2 bg-black/50 p-3 rounded-xl border border-neuro-purple/40 text-xs font-sans">
            <span className="text-[10px] font-mono text-neuro-purple font-bold tracking-wider flex items-center gap-1">
              <Layers className="w-3.5 h-3.5" /> BIOPHYSICAL TISSUE LAYERS
            </span>

            <label className="flex items-center justify-between cursor-pointer p-1.5 rounded-lg hover:bg-white/5 transition-all">
              <span className="text-gray-200">Grey Matter Cortex</span>
              <input
                type="checkbox"
                checked={layers.greyMatter}
                onChange={() => onToggleLayer('greyMatter')}
                className="accent-neuro-cyan cursor-pointer w-4 h-4"
              />
            </label>

            <label className="flex items-center justify-between cursor-pointer p-1.5 rounded-lg hover:bg-white/5 transition-all">
              <span className="text-gray-200">White Matter Axon Tracts</span>
              <input
                type="checkbox"
                checked={layers.whiteMatter}
                onChange={() => onToggleLayer('whiteMatter')}
                className="accent-neuro-cyan cursor-pointer w-4 h-4"
              />
            </label>
          </div>

          {/* Vascular Layers Group */}
          <div className="flex flex-col gap-2 bg-black/50 p-3 rounded-xl border border-neuro-cyan/40 text-xs font-sans">
            <span className="text-[10px] font-mono text-neuro-cyan font-bold tracking-wider flex items-center gap-1">
              🩸 VASCULAR ANGIOGRAPHY LAYERS
            </span>

            <label className="flex items-center justify-between cursor-pointer p-1.5 rounded-lg hover:bg-white/5 transition-all">
              <span className="text-gray-200">Main Cerebral Vessels</span>
              <input
                type="checkbox"
                checked={layers.bloodVessels}
                onChange={() => onToggleLayer('bloodVessels')}
                className="accent-neuro-cyan cursor-pointer w-4 h-4"
              />
            </label>

            <label className="flex items-center justify-between cursor-pointer p-1.5 rounded-lg hover:bg-white/5 transition-all">
              <span className="text-gray-200">Arterial Network (Red)</span>
              <input
                type="checkbox"
                checked={layers.arteries}
                onChange={() => onToggleLayer('arteries')}
                className="accent-neuro-cyan cursor-pointer w-4 h-4"
              />
            </label>

            <label className="flex items-center justify-between cursor-pointer p-1.5 rounded-lg hover:bg-white/5 transition-all">
              <span className="text-gray-200">Venous Drainage (Blue)</span>
              <input
                type="checkbox"
                checked={layers.veins}
                onChange={() => onToggleLayer('veins')}
                className="accent-neuro-cyan cursor-pointer w-4 h-4"
              />
            </label>

            <label className="flex items-center justify-between cursor-pointer p-1.5 rounded-lg hover:bg-white/5 transition-all">
              <span className="text-gray-200">Capillary Microbed</span>
              <input
                type="checkbox"
                checked={layers.capillaries}
                onChange={() => onToggleLayer('capillaries')}
                className="accent-neuro-cyan cursor-pointer w-4 h-4"
              />
            </label>
          </div>

          {/* Neuronal & Synaptic Infrastructure */}
          <div className="flex flex-col gap-2 bg-black/50 p-3 rounded-xl border border-neuro-green/40 text-xs font-sans">
            <span className="text-[10px] font-mono text-neuro-green font-bold tracking-wider flex items-center gap-1">
              ⚡ NEURONAL & SYNAPTIC NETWORKS
            </span>

            <label className="flex items-center justify-between cursor-pointer p-1.5 rounded-lg hover:bg-white/5 transition-all">
              <span className="text-gray-200">5,000 GPU Neural Pathways</span>
              <input
                type="checkbox"
                checked={layers.neurons}
                onChange={() => onToggleLayer('neurons')}
                className="accent-neuro-cyan cursor-pointer w-4 h-4"
              />
            </label>

            <label className="flex items-center justify-between cursor-pointer p-1.5 rounded-lg hover:bg-white/5 transition-all">
              <span className="text-gray-200">Cranial Nerves</span>
              <input
                type="checkbox"
                checked={layers.nerves}
                onChange={() => onToggleLayer('nerves')}
                className="accent-neuro-cyan cursor-pointer w-4 h-4"
              />
            </label>

            <label className="flex items-center justify-between cursor-pointer p-1.5 rounded-lg hover:bg-white/5 transition-all">
              <span className="text-gray-200">Axon Conduits</span>
              <input
                type="checkbox"
                checked={layers.axons}
                onChange={() => onToggleLayer('axons')}
                className="accent-neuro-cyan cursor-pointer w-4 h-4"
              />
            </label>

            <label className="flex items-center justify-between cursor-pointer p-1.5 rounded-lg hover:bg-white/5 transition-all">
              <span className="text-gray-200">Dendritic Trees</span>
              <input
                type="checkbox"
                checked={layers.dendrites}
                onChange={() => onToggleLayer('dendrites')}
                className="accent-neuro-cyan cursor-pointer w-4 h-4"
              />
            </label>

            <label className="flex items-center justify-between cursor-pointer p-1.5 rounded-lg hover:bg-white/5 transition-all">
              <span className="text-gray-200">Synaptic Vesicles & Nodes</span>
              <input
                type="checkbox"
                checked={layers.synapses}
                onChange={() => onToggleLayer('synapses')}
                className="accent-neuro-cyan cursor-pointer w-4 h-4"
              />
            </label>
          </div>

          {/* Shaders & Controls Panel embedded inside LAYERS tab */}
          <div className="flex flex-col gap-2 bg-black/50 p-3 rounded-xl border border-white/10 text-xs font-mono">
            <span className="text-[10px] text-neuro-yellow font-bold tracking-wider">
              TISSUE RENDER OPTICS
            </span>

            <div className="flex flex-col gap-1">
              <div className="flex justify-between text-[10px] text-gray-400">
                <span>Tissue Opacity</span>
                <span>{Math.round(transparency * 100)}%</span>
              </div>
              <input
                type="range"
                min="0.1"
                max="1.0"
                step="0.05"
                value={transparency}
                onChange={(e) => onChangeTransparency(parseFloat(e.target.value))}
                className="accent-neuro-cyan cursor-pointer h-1 bg-white/20 rounded"
              />
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex justify-between text-[10px] text-gray-400">
                <span>Conduction Speed</span>
                <span>{timeScale.toFixed(1)}x</span>
              </div>
              <input
                type="range"
                min="0.2"
                max="3.0"
                step="0.1"
                value={timeScale}
                onChange={(e) => onChangeTimeScale(parseFloat(e.target.value))}
                className="accent-neuro-cyan cursor-pointer h-1 bg-white/20 rounded"
              />
            </div>
          </div>
        </div>
      )}

    </motion.aside>
  );
};
