import React from 'react';
import { ENTERPRISE_STATS } from '../data/companyData.js';
import { BarChart3 } from 'lucide-react';

export const StatsSection = () => {
  return (
    <section id="impact" className="py-20 bg-[#050816] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827] border border-white/10 text-xs font-semibold text-[#14B8A6] mb-3">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Key Figures</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Enterprise Scale & Impact
          </h2>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {ENTERPRISE_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#111827] border border-white/10 text-center"
            >
              <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-1">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-xs font-bold text-white mb-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-[#94A3B8]">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
