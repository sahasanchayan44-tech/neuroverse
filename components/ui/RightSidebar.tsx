'use client';

import React, { useState } from 'react';
import { 
  Zap, Stethoscope, Clock, Activity, Flame, ChevronRight, ChevronLeft, RefreshCw, Radio,
  Search, Pill, AlertTriangle, CheckCircle2, ArrowLeft, Crosshair, ShieldAlert, Sparkles, Info
} from 'lucide-react';
import { BRAIN_DISEASES_DATABASE, BrainDiseaseDetail } from '@/data/diseaseData';

interface RightSidebarProps {
  activeSimulation: string | null;
  selectedDisease: string | null;
  topOffset?: string;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
  onSelectSimulation: (sim: string) => void;
  onSelectDisease: (diseaseId: string) => void;
  onReset: () => void;
}

const COGNITION_MODES = [
  { id: 'Thinking', name: 'Executive Thinking', wave: 'Beta / Gamma (40Hz)', desc: 'Prefrontal working memory loops and dorsolateral cortex logic activation.' },
  { id: 'Memory', name: 'Memory Encoding', wave: 'Theta (6Hz)', desc: 'Long-term potentiation trisynaptic circuit reverberation in Hippocampus.' },
  { id: 'Speech', name: 'Speech Production', wave: 'Gamma (45Hz)', desc: 'Broca\'s area motor speech planning & Wernicke\'s auditory feedback.' },
  { id: 'Vision', name: 'Visual Perception', wave: 'Gamma (55Hz)', desc: 'Optic nerve relays via LGN Thalamus to Primary Visual Striate Cortex V1.' },
  { id: 'Touch', name: 'Somatosensory Touch', wave: 'Beta (22Hz)', desc: 'Tactile nerve signals route up spinothalamic tracts to Parietal homunculus S1.' },
  { id: 'Emotion', name: 'Emotional Synthesis', wave: 'Theta / Alpha (8Hz)', desc: 'Limbic amygdala-hippocampal emotional memory valence integration.' },
  { id: 'Fear', name: 'Fear & Threat Response', wave: 'High Beta (30Hz)', desc: 'Immediate subcortical amygdala trigger activating sympathetic adrenal fight-or-flight.' },
  { id: 'Walking', name: 'Motor Coordination', wave: 'Beta (20Hz)', desc: 'Spinal motor pathways fine-tuned by cerebellar timing & basal ganglia.' },
  { id: 'Learning', name: 'Neuro-Plasticity', wave: 'Gamma / Theta', desc: 'Synaptogenesis and frontoparietal cognitive network re-wiring.' },
  { id: 'Hearing', name: 'Auditory Processing', wave: 'Gamma (40Hz)', desc: 'Cochlear nerve signals pass through inferior colliculus to auditory cortex A1.' },
  { id: 'Motor Control', name: 'Action Selection', wave: 'Beta (24Hz)', desc: 'Direct GO / Indirect STOP motor selection loops in Basal Ganglia.' }
];

const DISEASE_CATEGORIES = [
  'All',
  'Neurodegenerative',
  'Cerebrovascular',
  'Neuro-Oncology',
  'Autoimmune & Inflammatory',
  'Epilepsy & Seizures',
  'Infectious',
  'Traumatic & Injury',
  'Psychiatric & Affective',
  'Neurodevelopmental & Genetic',
  'Movement & Neuromuscular',
  'Sleep & Circadian',
  'Toxic & Metabolic'
];

export const RightSidebar: React.FC<RightSidebarProps> = ({
  activeSimulation,
  selectedDisease,
  topOffset = 'top-36',
  isCollapsed: controlledIsCollapsed,
  onToggleCollapse,
  onSelectSimulation,
  onSelectDisease,
  onReset
}) => {
  const [activeTab, setActiveTab] = useState<'cognition' | 'pathology' | 'timeline' | 'spectrum'>('cognition');
  const [internalIsCollapsed, setInternalIsCollapsed] = useState(false);
  const [diseaseSearch, setDiseaseSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const collapsed = controlledIsCollapsed !== undefined ? controlledIsCollapsed : internalIsCollapsed;
  const toggleCollapse = onToggleCollapse ? onToggleCollapse : () => setInternalIsCollapsed(!internalIsCollapsed);

  const activeDiseaseDetail = BRAIN_DISEASES_DATABASE.find(d => d.id === selectedDisease);

  const filteredDiseases = BRAIN_DISEASES_DATABASE.filter(d => {
    const matchesCategory = selectedCategory === 'All' || d.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const query = diseaseSearch.toLowerCase();
    const matchesQuery = !query || 
      d.name.toLowerCase().includes(query) ||
      (d.latinName && d.latinName.toLowerCase().includes(query)) ||
      d.category.toLowerCase().includes(query) ||
      d.affectedRegions.some(r => r.toLowerCase().includes(query)) ||
      d.medicines.some(m => m.toLowerCase().includes(query));
    return matchesCategory && matchesQuery;
  });

  if (collapsed) {
    return (
      <button
        onClick={toggleCollapse}
        className={`absolute ${topOffset} right-4 z-30 p-3 bg-neuro-panel backdrop-blur-xl border border-neuro-cyan/40 rounded-2xl shadow-hologram text-neuro-cyan hover:text-white hover:bg-neuro-cyan/20 transition-all flex items-center gap-2 font-mono text-xs`}
        title="Expand Cognition & Pathology Sidebar"
      >
        <ChevronLeft className="w-4 h-4 text-neuro-cyan" />
        <Zap className="w-4 h-4 text-neuro-cyan animate-pulse" />
        <span className="font-bold">MODES</span>
      </button>
    );
  }

  return (
    <aside className={`absolute ${topOffset} right-4 bottom-16 z-20 w-88 md:w-96 max-h-[calc(100vh-10rem)] bg-neuro-panel backdrop-blur-xl border border-neuro-cyan/30 rounded-2xl shadow-hologram p-4 flex flex-col gap-3 overflow-hidden text-white transition-all font-mono`}>
      
      {/* Sci-Fi HUD Tabs Header */}
      <div className="flex items-center justify-between border-b border-neuro-border pb-2 flex-shrink-0">
        <div className="flex gap-1 text-[11px] flex-1">
          <button
            onClick={() => setActiveTab('cognition')}
            className={`flex-1 py-1 rounded-lg border transition-all flex items-center justify-center gap-1 font-bold ${
              activeTab === 'cognition' ? 'bg-neuro-cyan/20 border-neuro-cyan text-white shadow-cyan-glow' : 'bg-white/5 border-white/10 text-neuro-muted'
            }`}
          >
            <Zap className="w-3 h-3" /> COG
          </button>

          <button
            onClick={() => setActiveTab('pathology')}
            className={`flex-1 py-1 rounded-lg border transition-all flex items-center justify-center gap-1 font-bold ${
              activeTab === 'pathology' ? 'bg-neuro-red/20 border-neuro-red text-white shadow-red-glow' : 'bg-white/5 border-white/10 text-neuro-muted'
            }`}
          >
            <Stethoscope className="w-3 h-3" /> PATH ({BRAIN_DISEASES_DATABASE.length})
          </button>

          <button
            onClick={() => setActiveTab('timeline')}
            className={`flex-1 py-1 rounded-lg border transition-all flex items-center justify-center gap-1 font-bold ${
              activeTab === 'timeline' ? 'bg-neuro-purple/20 border-neuro-purple text-white shadow-purple-glow' : 'bg-white/5 border-white/10 text-neuro-muted'
            }`}
          >
            <Clock className="w-3 h-3" /> TIME
          </button>

          <button
            onClick={() => setActiveTab('spectrum')}
            className={`flex-1 py-1 rounded-lg border transition-all flex items-center justify-center gap-1 font-bold ${
              activeTab === 'spectrum' ? 'bg-neuro-green/20 border-neuro-green text-white shadow-green-glow' : 'bg-white/5 border-white/10 text-neuro-muted'
            }`}
          >
            <Radio className="w-3 h-3" /> SPEC
          </button>
        </div>

        <button
          onClick={toggleCollapse}
          className="ml-2 p-1 rounded-lg bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white transition-all"
          title="Minimize Right Sidebar for Full Brain View"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Reset Active Mode */}
      {(activeSimulation || selectedDisease) && (
        <button
          onClick={onReset}
          className="py-1.5 px-3 text-xs font-mono rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 text-white transition-all flex items-center justify-center gap-2 flex-shrink-0"
        >
          <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Clear Active Simulation / Pathology
        </button>
      )}

      {/* Tab 1: Cognition Functional Modes */}
      {activeTab === 'cognition' && (
        <div className="flex flex-col gap-2 flex-1 min-h-0 overflow-y-auto pr-1">
          <span className="text-[10px] font-mono text-neuro-cyan font-bold tracking-wider flex-shrink-0">
            FUNCTIONAL NEURAL PATHWAYS (11 MODES)
          </span>
          {COGNITION_MODES.map(mode => {
            const isActive = activeSimulation === mode.id;
            return (
              <button
                key={mode.id}
                onClick={() => onSelectSimulation(mode.id)}
                className={`p-3 rounded-xl border text-left transition-all flex flex-col gap-1.5 ${
                  isActive
                    ? 'bg-neuro-cyan/20 border-neuro-cyan text-white shadow-cyan-glow'
                    : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold font-sans flex items-center gap-1.5">
                    <Activity className={`w-3.5 h-3.5 ${isActive ? 'text-neuro-green animate-pulse' : 'text-neuro-cyan'}`} />
                    {mode.name}
                  </span>
                  <span className="text-[9px] font-mono px-2 py-0.5 bg-neuro-cyan/15 text-neuro-cyan rounded border border-neuro-cyan/30">
                    {mode.wave}
                  </span>
                </div>
                <p className="text-[11px] text-neuro-muted leading-snug">{mode.desc}</p>
              </button>
            );
          })}
        </div>
      )}

      {/* Tab 2: Clinical Pathology & Diseases */}
      {activeTab === 'pathology' && (
        <div className="flex flex-col gap-2 flex-1 min-h-0 overflow-y-auto pr-1">
          
          {/* Detailed View when a disease is selected */}
          {activeDiseaseDetail ? (
            <div className="flex flex-col gap-3 font-sans animate-fade-in pr-1">
              
              {/* Back button */}
              <button
                onClick={() => onSelectDisease('')}
                className="flex items-center gap-1.5 py-1 px-2.5 rounded-lg bg-white/10 border border-white/20 text-xs font-mono text-neuro-cyan hover:bg-white/20 transition-all w-fit"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back to Disease Index
              </button>

              {/* Title & Category Header */}
              <div className="p-3 bg-neuro-red/10 border border-neuro-red/40 rounded-xl flex flex-col gap-1">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                      <Flame className="w-4 h-4 text-neuro-red animate-pulse" />
                      {activeDiseaseDetail.name}
                    </h3>
                    {activeDiseaseDetail.latinName && (
                      <span className="text-[10px] font-mono text-red-300 block">{activeDiseaseDetail.latinName}</span>
                    )}
                  </div>

                  <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded border uppercase ${
                    activeDiseaseDetail.riskLevel === 'Critical / Fatal'
                      ? 'bg-red-950 text-red-400 border-red-500 animate-pulse'
                      : activeDiseaseDetail.riskLevel === 'High'
                      ? 'bg-red-900/60 text-red-300 border-red-500'
                      : activeDiseaseDetail.riskLevel === 'Moderate'
                      ? 'bg-yellow-900/60 text-yellow-300 border-yellow-500'
                      : 'bg-green-900/60 text-green-300 border-green-500'
                  }`}>
                    {activeDiseaseDetail.riskLevel} RISK
                  </span>
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono mt-1 pt-1 border-t border-red-500/20">
                  <span className="text-neuro-muted">Category:</span>
                  <span className="text-neuro-cyan font-bold">{activeDiseaseDetail.category}</span>
                </div>
              </div>

              {/* Probable Cure & Prognosis Callout */}
              <div className="p-3 bg-black/60 border border-neuro-cyan/40 rounded-xl flex flex-col gap-1 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold text-neuro-cyan flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-neuro-gold" /> PROBABLE CURE & PROGNOSIS
                  </span>
                  <span className={`text-[9px] font-mono px-2 py-0.5 rounded font-bold border ${
                    activeDiseaseDetail.cureStatus === 'Curable'
                      ? 'bg-green-900/40 border-green-500 text-green-300'
                      : activeDiseaseDetail.cureStatus === 'Preventable'
                      ? 'bg-cyan-900/40 border-cyan-500 text-cyan-300'
                      : activeDiseaseDetail.cureStatus === 'Terminal / High Mortality'
                      ? 'bg-red-900/40 border-red-500 text-red-300'
                      : 'bg-purple-900/40 border-purple-500 text-purple-300'
                  }`}>
                    {activeDiseaseDetail.cureStatus}
                  </span>
                </div>
                <p className="text-gray-200 text-xs leading-relaxed mt-1">{activeDiseaseDetail.probableCure}</p>
              </div>

              {/* Description & Pathophysiology */}
              <div className="p-3 bg-white/5 border border-white/10 rounded-xl flex flex-col gap-2 text-xs">
                <span className="font-mono text-[10px] font-bold text-neuro-purple flex items-center gap-1">
                  <Info className="w-3.5 h-3.5 text-neuro-purple" /> PATHOPHYSIOLOGY & MECHANISM
                </span>
                <p className="text-gray-300 leading-snug">{activeDiseaseDetail.description}</p>
                <div className="p-2 bg-black/40 border border-white/5 rounded-lg text-[11px] text-neuro-muted leading-relaxed font-mono">
                  {activeDiseaseDetail.pathophysiology}
                </div>
              </div>

              {/* Affected Brain Regions */}
              <div className="p-3 bg-white/5 border border-white/10 rounded-xl flex flex-col gap-1.5 text-xs">
                <span className="font-mono text-[10px] font-bold text-neuro-green flex items-center gap-1">
                  <Crosshair className="w-3.5 h-3.5 text-neuro-green" /> TARGET BRAIN STRUCTURES
                </span>
                <div className="flex flex-wrap gap-1">
                  {activeDiseaseDetail.affectedRegions.map((region, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-[10px] font-mono bg-neuro-green/15 text-neuro-green rounded border border-neuro-green/30"
                    >
                      {region}
                    </span>
                  ))}
                </div>
              </div>

              {/* FDA-Approved Medicines */}
              <div className="p-3 bg-white/5 border border-white/10 rounded-xl flex flex-col gap-1.5 text-xs">
                <span className="font-mono text-[10px] font-bold text-neuro-cyan flex items-center gap-1">
                  <Pill className="w-3.5 h-3.5 text-neuro-cyan" /> PHARMACOTHERAPY & FDA MEDICINES
                </span>
                <div className="flex flex-wrap gap-1">
                  {activeDiseaseDetail.medicines.map((med, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-[10px] font-mono bg-neuro-cyan/15 text-cyan-200 rounded border border-neuro-cyan/30 flex items-center gap-1"
                    >
                      <CheckCircle2 className="w-3 h-3 text-neuro-cyan" /> {med}
                    </span>
                  ))}
                </div>
              </div>

              {/* Clinical Treatments & Interventions */}
              <div className="p-3 bg-white/5 border border-white/10 rounded-xl flex flex-col gap-1.5 text-xs">
                <span className="font-mono text-[10px] font-bold text-neuro-pink flex items-center gap-1">
                  <Stethoscope className="w-3.5 h-3.5 text-neuro-pink" /> CLINICAL TREATMENTS & SURGERIES
                </span>
                <ul className="list-disc list-inside space-y-1 text-gray-300 text-[11px]">
                  {activeDiseaseDetail.treatments.map((t, idx) => (
                    <li key={idx} className="leading-snug">{t}</li>
                  ))}
                </ul>
              </div>

              {/* Mortality Rate & Life Expectancy */}
              <div className="p-3 bg-red-950/40 border border-neuro-red/50 rounded-xl flex flex-col gap-1.5 text-xs">
                <span className="font-mono text-[10px] font-bold text-neuro-red flex items-center gap-1">
                  <ShieldAlert className="w-3.5 h-3.5 text-neuro-red animate-pulse" /> MORTALITY RATE & SURVIVAL
                </span>
                <div className="font-bold text-red-200 text-xs font-mono">
                  {activeDiseaseDetail.mortalityRate}
                </div>
                <p className="text-gray-300 text-[11px] leading-relaxed font-sans border-t border-red-500/20 pt-1">
                  {activeDiseaseDetail.survivalStats}
                </p>
              </div>

            </div>
          ) : (
            /* Disease Index Catalog */
            <div className="flex flex-col gap-2.5 flex-1 min-h-0">
              
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 w-3.5 h-3.5 text-neuro-cyan" />
                <input
                  type="text"
                  value={diseaseSearch}
                  onChange={(e) => setDiseaseSearch(e.target.value)}
                  placeholder="Search diseases, drugs, or regions..."
                  className="w-full pl-8 pr-3 py-1.5 bg-black/60 border border-neuro-border rounded-xl text-xs font-mono text-white placeholder-gray-500 outline-none focus:border-neuro-cyan"
                />
              </div>

              {/* Category Filter Horizontal Scroll */}
              <div className="flex items-center gap-1 overflow-x-auto pb-1 text-[10px] font-mono no-scrollbar">
                {DISEASE_CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-2 py-0.5 rounded-lg border whitespace-nowrap transition-all ${
                      selectedCategory === cat
                        ? 'bg-neuro-red/20 border-neuro-red text-white font-bold'
                        : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <span className="text-[10px] font-mono text-neuro-red font-bold tracking-wider flex-shrink-0 flex items-center justify-between">
                <span>PATHOLOGY DATABASE ({filteredDiseases.length} DISEASES)</span>
                <span className="text-gray-400 text-[9px]">CLICK FOR CURE & MEDS</span>
              </span>

              {/* Disease Cards List */}
              <div className="flex flex-col gap-2 overflow-y-auto pr-1 flex-1">
                {filteredDiseases.map(d => {
                  const isActive = selectedDisease === d.id;
                  return (
                    <button
                      key={d.id}
                      onClick={() => onSelectDisease(d.id)}
                      className={`p-3 rounded-xl border text-left transition-all flex flex-col gap-1.5 ${
                        isActive
                          ? 'bg-neuro-red/20 border-neuro-red text-white shadow-red-glow'
                          : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold font-sans text-red-200 flex items-center gap-1.5">
                          <Flame className={`w-3.5 h-3.5 ${isActive ? 'text-neuro-red animate-bounce' : 'text-red-400'}`} />
                          {d.name}
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 text-neuro-cyan" />
                      </div>

                      <div className="flex items-center justify-between text-[10px] font-mono">
                        <span className="text-neuro-muted">{d.category}</span>
                        <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold border uppercase ${
                          d.cureStatus === 'Curable'
                            ? 'bg-green-950/60 text-green-400 border-green-500/50'
                            : d.cureStatus === 'Terminal / High Mortality'
                            ? 'bg-red-950/60 text-red-400 border-red-500/50'
                            : 'bg-purple-950/60 text-purple-300 border-purple-500/50'
                        }`}>
                          {d.cureStatus}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-1 pt-0.5">
                        {d.affectedRegions.slice(0, 3).map((r, i) => (
                          <span key={i} className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-white/5 text-gray-400">
                            {r}
                          </span>
                        ))}
                        {d.affectedRegions.length > 3 && (
                          <span className="text-[9px] font-mono text-gray-500">+{d.affectedRegions.length - 3}</span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

            </div>
          )}

        </div>
      )}

      {/* Tab 3: Timeline & Embryology */}
      {activeTab === 'timeline' && (
        <div className="flex flex-col gap-3 flex-1 min-h-0 overflow-y-auto pr-1 font-sans">
          <span className="text-[10px] font-mono text-neuro-purple font-bold tracking-wider flex-shrink-0">
            EVOLUTIONARY & EMBRYONIC MILESTONES
          </span>

          <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-xs flex flex-col gap-1">
            <span className="font-bold text-neuro-purple font-mono">1. EVOLUTIONARY TREE (500M YRS)</span>
            <p className="text-gray-300 text-[11px] leading-snug">Primitive nerve nets in cnidarians evolved into triune brain encephalization in primates.</p>
          </div>

          <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-xs flex flex-col gap-1">
            <span className="font-bold text-neuro-cyan font-mono">2. EMBRYONIC NEURAL TUBE (WEEKS 3-8)</span>
            <p className="text-gray-300 text-[11px] leading-snug">Ectodermal neural tube differentiates into Prosencephalon, Mesencephalon, and Rhombencephalon.</p>
          </div>

          <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-xs flex flex-col gap-1">
            <span className="font-bold text-neuro-green font-mono">3. ADOLESCENT PRUNING (AGE 12-25)</span>
            <p className="text-gray-300 text-[11px] leading-snug">High-speed myelination of prefrontal executive control networks and synaptic pruning.</p>
          </div>
        </div>
      )}

      {/* Tab 4: EEG Power Spectrum Telemetry */}
      {activeTab === 'spectrum' && (
        <div className="flex flex-col gap-3 flex-1 min-h-0 overflow-y-auto pr-1 font-mono text-xs">
          <span className="text-[10px] text-neuro-green font-bold tracking-wider flex-shrink-0">
            EEG POWER SPECTRAL DENSITY
          </span>

          <div className="p-3 bg-black/60 border border-white/10 rounded-xl flex flex-col gap-2">
            <div className="flex justify-between">
              <span className="text-neuro-pink font-bold">Gamma Band (30-100Hz)</span>
              <span className="font-bold text-white">42 μV²</span>
            </div>
            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
              <div className="bg-neuro-pink h-full w-[78%]" />
            </div>
          </div>

          <div className="p-3 bg-black/60 border border-white/10 rounded-xl flex flex-col gap-2">
            <div className="flex justify-between">
              <span className="text-neuro-cyan font-bold">Beta Band (13-30Hz)</span>
              <span className="font-bold text-white">28 μV²</span>
            </div>
            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
              <div className="bg-neuro-cyan h-full w-[62%]" />
            </div>
          </div>

          <div className="p-3 bg-black/60 border border-white/10 rounded-xl flex flex-col gap-2">
            <div className="flex justify-between">
              <span className="text-neuro-green font-bold">Alpha Band (8-12Hz)</span>
              <span className="font-bold text-white">18 μV²</span>
            </div>
            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
              <div className="bg-neuro-green h-full w-[45%]" />
            </div>
          </div>

          <div className="p-3 bg-black/60 border border-white/10 rounded-xl flex flex-col gap-2">
            <div className="flex justify-between">
              <span className="text-neuro-yellow font-bold">Theta / Delta Band (&lt;8Hz)</span>
              <span className="font-bold text-white">12 μV²</span>
            </div>
            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
              <div className="bg-neuro-yellow h-full w-[30%]" />
            </div>
          </div>
        </div>
      )}

    </aside>
  );
};

