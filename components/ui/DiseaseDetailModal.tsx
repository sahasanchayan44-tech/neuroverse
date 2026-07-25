'use client';

import React from 'react';
import { X, Flame, Stethoscope, Sparkles, Pill, Crosshair, ShieldAlert, Info, Activity, Database, CheckCircle2, Award, HeartPulse } from 'lucide-react';
import { BrainDiseaseDetail } from '@/data/diseaseData';

interface DiseaseDetailModalProps {
  disease: BrainDiseaseDetail | null;
  onClose: () => void;
  onSelectStructureByName?: (regionName: string) => void;
}

export const DiseaseDetailModal: React.FC<DiseaseDetailModalProps> = ({
  disease,
  onClose,
  onSelectStructureByName,
}) => {
  if (!disease) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-neuro-panel/95 backdrop-blur-2xl border border-neuro-red/50 rounded-3xl shadow-hologram p-6 text-white font-sans flex flex-col gap-5 select-text"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header & Close Button */}
        <div className="flex items-start justify-between border-b border-neuro-red/30 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-neuro-red/20 border border-neuro-red flex items-center justify-center text-neuro-red shadow-red-glow">
              <Flame className="w-7 h-7 animate-pulse text-neuro-red" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-white font-sans">{disease.name}</h2>
                <span
                  className={`text-[9px] font-mono font-bold px-2.5 py-0.5 rounded-full border uppercase tracking-wider ${
                    disease.riskLevel === 'Critical / Fatal'
                      ? 'bg-red-950 text-red-400 border-red-500 animate-pulse'
                      : disease.riskLevel === 'High'
                      ? 'bg-red-900/60 text-red-300 border-red-500'
                      : disease.riskLevel === 'Moderate'
                      ? 'bg-yellow-900/60 text-yellow-300 border-yellow-500'
                      : 'bg-green-900/60 text-green-300 border-green-500'
                  }`}
                >
                  {disease.riskLevel} RISK
                </span>
              </div>
              {disease.latinName && (
                <span className="text-xs font-mono text-red-300 italic">{disease.latinName}</span>
              )}
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 border border-white/20 hover:bg-neuro-red/30 hover:border-neuro-red text-gray-300 hover:text-white transition-all"
            title="Close Pop-up Screen"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category & Cure Status Header Banner */}
        <div className="grid grid-cols-2 gap-3 font-mono text-xs">
          <div className="p-3 bg-black/60 border border-neuro-cyan/30 rounded-2xl flex flex-col gap-1">
            <span className="text-[10px] text-neuro-muted uppercase flex items-center gap-1">
              <Database className="w-3 h-3 text-neuro-cyan" /> DISEASE CATEGORY
            </span>
            <strong className="text-neuro-cyan font-bold text-xs truncate">{disease.category}</strong>
          </div>

          <div className="p-3 bg-black/60 border border-neuro-gold/30 rounded-2xl flex flex-col gap-1">
            <span className="text-[10px] text-neuro-muted uppercase flex items-center gap-1">
              <Award className="w-3 h-3 text-neuro-gold" /> PROBABLE CURE STATUS
            </span>
            <span
              className={`text-xs font-bold font-mono px-2 py-0.5 rounded-lg border w-fit ${
                disease.cureStatus === 'Curable'
                  ? 'bg-green-900/40 border-green-500 text-green-300'
                  : disease.cureStatus === 'Preventable'
                  ? 'bg-cyan-900/40 border-cyan-500 text-cyan-300'
                  : disease.cureStatus === 'Terminal / High Mortality'
                  ? 'bg-red-900/40 border-red-500 text-red-300'
                  : 'bg-purple-900/40 border-purple-500 text-purple-300'
              }`}
            >
              {disease.cureStatus}
            </span>
          </div>
        </div>

        {/* Probable Cure & Prognosis Extended Details */}
        {disease.probableCure && (
          <div className="p-4 bg-neuro-cyan/10 border border-neuro-cyan/40 rounded-2xl flex flex-col gap-1.5">
            <span className="font-mono text-xs font-bold text-neuro-cyan flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-neuro-yellow" /> PROBABLE CURE & PROGNOSIS DATA (2026 PIPELINE)
            </span>
            <p className="text-xs text-gray-200 leading-relaxed font-sans">{disease.probableCure}</p>
          </div>
        )}

        {/* Clinical Description & Pathophysiology */}
        <div className="flex flex-col gap-3">
          <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex flex-col gap-1.5 text-xs">
            <span className="font-mono text-xs font-bold text-neuro-purple flex items-center gap-1.5">
              <Info className="w-4 h-4 text-neuro-purple" /> CLINICAL DESCRIPTION & OVERVIEW
            </span>
            <p className="text-gray-300 leading-relaxed font-sans">{disease.description}</p>
          </div>

          <div className="p-4 bg-black/60 border border-white/10 rounded-2xl flex flex-col gap-1.5 text-xs font-mono">
            <span className="text-xs font-bold text-neuro-green flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-neuro-green animate-pulse" /> PATHOPHYSIOLOGY & MOLECULAR MECHANISM
            </span>
            <p className="text-gray-300 leading-relaxed font-sans">{disease.pathophysiology}</p>
          </div>
        </div>

        {/* Affected Brain Structures */}
        {disease.affectedRegions && disease.affectedRegions.length > 0 && (
          <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex flex-col gap-2 text-xs">
            <span className="font-mono text-xs font-bold text-neuro-green flex items-center gap-1.5">
              <Crosshair className="w-4 h-4 text-neuro-green" /> TARGET AFFECTED BRAIN REGIONS
            </span>
            <div className="flex flex-wrap gap-2">
              {disease.affectedRegions.map((region, idx) => (
                <button
                  key={idx}
                  onClick={() => onSelectStructureByName && onSelectStructureByName(region)}
                  className="px-3 py-1 text-xs font-mono bg-neuro-green/15 hover:bg-neuro-green/30 text-neuro-green rounded-xl border border-neuro-green/40 transition-all flex items-center gap-1 hover:scale-105"
                  title={`Focus on ${region} in 3D Brain Viewer`}
                >
                  <Crosshair className="w-3 h-3 text-neuro-green" /> {region}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Pharmacotherapy & FDA Approved Medicines */}
        {disease.medicines && disease.medicines.length > 0 && (
          <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex flex-col gap-2 text-xs">
            <span className="font-mono text-xs font-bold text-neuro-cyan flex items-center gap-1.5">
              <Pill className="w-4 h-4 text-neuro-cyan" /> PHARMACOTHERAPY & FDA-APPROVED MEDICINES
            </span>
            <div className="flex flex-wrap gap-2">
              {disease.medicines.map((med, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-mono bg-neuro-cyan/15 text-cyan-200 rounded-xl border border-neuro-cyan/30 flex items-center gap-1.5 font-bold"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-neuro-cyan" /> {med}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Clinical Treatments & Interventions */}
        {disease.treatments && disease.treatments.length > 0 && (
          <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex flex-col gap-2 text-xs">
            <span className="font-mono text-xs font-bold text-neuro-pink flex items-center gap-1.5">
              <Stethoscope className="w-4 h-4 text-neuro-pink" /> CLINICAL TREATMENTS & SURGICAL THERAPIES
            </span>
            <ul className="list-disc list-inside space-y-1 text-gray-300 text-xs">
              {disease.treatments.map((t, idx) => (
                <li key={idx} className="leading-relaxed">{t}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Mortality Rate & Survival Statistics Card */}
        <div className="p-4 bg-red-950/40 border border-neuro-red/50 rounded-2xl flex flex-col gap-2 text-xs">
          <span className="font-mono text-xs font-bold text-neuro-red flex items-center gap-1.5">
            <ShieldAlert className="w-4 h-4 text-neuro-red animate-pulse" /> MORTALITY RATE & CLINICAL PROGNOSIS
          </span>
          <div className="font-bold text-red-200 font-mono text-sm">
            {disease.mortalityRate}
          </div>
          <p className="text-gray-300 text-xs leading-relaxed font-sans border-t border-red-500/20 pt-2">
            {disease.survivalStats}
          </p>
        </div>

        {/* Close Button Footer */}
        <div className="flex justify-end pt-2">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-neuro-cyan/20 border border-neuro-cyan text-white hover:bg-neuro-cyan/30 transition-all font-mono text-xs font-bold shadow-cyan-glow"
          >
            Close Extended Details
          </button>
        </div>
      </div>
    </div>
  );
};
