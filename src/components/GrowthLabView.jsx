import React from 'react';
import { TrendingUp, Sparkles, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';
import { COMPANIES } from '../data/companyData.js';

export const GrowthLabView = ({ onNavigate }) => {
  const growth = COMPANIES.find(c => c.id === 'growth-lab');

  return (
    <div className="pt-28 pb-20 space-y-16">
      
      {/* Header */}
      <section className="bg-[#050816] text-center max-w-4xl mx-auto px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A756A]/20 text-[#14B8A6] border border-[#0A756A]/30 text-xs font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{growth.statusBadge} Preview</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          {growth.name}
        </h1>
        <p className="mt-3 text-base font-semibold text-[#14B8A6] max-w-2xl mx-auto">
          "{growth.tagline}"
        </p>
        <p className="mt-4 text-xs text-[#94A3B8] leading-relaxed max-w-2xl mx-auto">
          {growth.overview}
        </p>
      </section>

      {/* Sustainable Organic Strategy Breakdown */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="p-8 rounded-3xl bg-[#111827] border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#050816] border border-white/10 text-xs font-semibold text-[#14B8A6]">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Organic Reach vs Paid Ads</span>
              </div>
              <h2 className="text-2xl font-extrabold text-white">
                Building Enduring Organic Valuations
              </h2>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Rather than depending continuously on escalating ad spend, Entrain Growth Lab builds owned media assets, organic search dominance, and community engagement for long-term customer acquisition.
              </p>
            </div>

            {/* Placeholders Card */}
            <div className="space-y-4 p-6 rounded-2xl bg-[#050816] border border-white/5">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#14B8A6]" />
                <span>Agency Blueprint Specifications</span>
              </h3>

              <div className="p-3.5 rounded-xl bg-[#111827] border border-white/5 space-y-1">
                <span className="text-[11px] font-bold text-[#14B8A6] uppercase">Services:</span>
                <p className="text-xs font-mono text-[#94A3B8]">{growth.servicesPlaceholder}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#111827] border border-white/5 space-y-1">
                <span className="text-[11px] font-bold text-[#14B8A6] uppercase">Target Audience:</span>
                <p className="text-xs font-mono text-[#94A3B8]">{growth.targetAudiencePlaceholder}</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Early Interest CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="p-8 rounded-2xl bg-[#0B1120] border border-white/10 space-y-4">
          <h2 className="text-xl font-extrabold text-white">
            Register Early Interest
          </h2>
          <p className="text-xs text-[#94A3B8] max-w-md mx-auto">
            Be among the first businesses to partner with Entrain Growth Lab for organic brand expansion.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#0A756A] to-[#14B8A6] text-white text-xs font-bold shadow-glow-primary inline-flex items-center gap-2"
          >
            <span>Inquire for Early Access</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
};
