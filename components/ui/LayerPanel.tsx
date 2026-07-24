'use client';

import React, { useState } from 'react';
import { Layers, Sliders, Eye, ChevronLeft, ChevronRight, ChevronDown, Cpu, Zap, Activity, Folder, FolderOpen } from 'lucide-react';
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
      <button
        onClick={handleClick}
        style={{ paddingLeft: `${Math.min(depth * 10 + 6, 40)}px` }}
        className={`py-1.5 pr-2 rounded-lg border text-left transition-all flex items-center justify-between text-xs font-sans group ${
          isSelected
            ? 'bg-neuro-cyan/30 border-neuro-cyan text-white shadow-cyan-glow font-bold'
            : hasChildren
            ? 'bg-white/5 border-white/10 text-gray-200 hover:bg-white/10 hover:text-white font-semibold'
            : 'bg-transparent border-transparent text-gray-400 hover:bg-white/5 hover:text-gray-200'
        }`}
      >
        <div className="flex items-center gap-1.5 overflow-hidden">
          {hasChildren ? (
            <span className="p-0.5 rounded text-neuro-cyan flex-shrink-0">
              {isExpanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
            </span>
          ) : (
            <span className="w-3.5 h-3.5 flex items-center justify-center flex-shrink-0">
              <div className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-neuro-cyan animate-ping' : 'bg-white/30'}`} />
            </span>
          )}
          <span className="truncate text-[11px]">{node.name}</span>
        </div>

        {mappedStructure && (
          <Eye className={`w-3 h-3 flex-shrink-0 ${isSelected ? 'text-neuro-cyan' : 'text-gray-600 group-hover:text-gray-400'}`} />
        )}
      </button>

      {hasChildren && isExpanded && (
        <div className="flex flex-col gap-0.5 mt-0.5 border-l border-neuro-cyan/20 ml-2.5">
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
        </div>
      )}
    </div>
  );
};

export const LayerPanel: React.FC<LayerPanelProps> = ({
  structures,
  selectedStructure,
  layers,
  transparency,
  timeScale,
  topOffset = 'top-36',
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
      <button
        onClick={() => setIsCollapsed(false)}
        className={`absolute ${topOffset} left-4 z-30 p-3 bg-neuro-panel backdrop-blur-xl border border-neuro-cyan/40 rounded-2xl shadow-hologram text-neuro-cyan hover:text-white hover:bg-neuro-cyan/20 transition-all flex items-center gap-2 font-mono text-xs`}
        title="Expand Anatomical Layers Panel"
      >
        <Layers className="w-4 h-4 text-neuro-cyan animate-pulse" />
        <span className="font-bold">LAYERS</span>
        <ChevronRight className="w-4 h-4 text-neuro-cyan" />
      </button>
    );
  }

  return (
    <aside className={`absolute ${topOffset} left-4 bottom-16 z-20 w-80 max-h-[calc(100vh-10rem)] bg-neuro-panel backdrop-blur-xl border border-neuro-cyan/30 rounded-2xl shadow-hologram p-4 flex flex-col gap-3 overflow-hidden text-white transition-all font-mono`}>
      
      {/* Header with Minimize Button & Sci-Fi Tabs */}
      <div className="flex items-center justify-between border-b border-neuro-border pb-2 flex-shrink-0">
        <div className="flex gap-1 text-xs flex-1">
          <button
            onClick={() => setActiveTab('anatomy')}
            className={`flex-1 py-1 rounded-lg border transition-all flex items-center justify-center gap-1 font-bold ${
              activeTab === 'anatomy' ? 'bg-neuro-cyan/20 border-neuro-cyan text-white shadow-cyan-glow' : 'bg-white/5 border-white/10 text-neuro-muted'
            }`}
          >
            <Activity className="w-3.5 h-3.5" /> ANATOMY
          </button>

          <button
            onClick={() => setActiveTab('layers')}
            className={`flex-1 py-1 rounded-lg border transition-all flex items-center justify-center gap-1 font-bold ${
              activeTab === 'layers' ? 'bg-neuro-purple/20 border-neuro-purple text-white shadow-purple-glow' : 'bg-white/5 border-white/10 text-neuro-muted'
            }`}
          >
            <Layers className="w-3.5 h-3.5" /> LAYERS
          </button>
        </div>

        <button
          onClick={() => setIsCollapsed(true)}
          className="ml-2 p-1 rounded-lg bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white transition-all"
          title="Minimize Left Panel for Full Brain View"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
      </div>

      {/* Tab 1: 10-Tier Anatomical Tree Hierarchy */}
      {activeTab === 'anatomy' && (
        <div className="flex flex-col gap-2 flex-1 min-h-0 overflow-y-auto pr-1">
          <span className="text-[10px] font-mono text-neuro-cyan font-bold tracking-wider flex-shrink-0">
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

    </aside>
  );
};
