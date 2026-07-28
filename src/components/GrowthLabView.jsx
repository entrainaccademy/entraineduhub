import React from 'react';
import { TrendingUp, Sparkles, Shield, ArrowRight } from 'lucide-react';
import { COMPANIES } from '../data/companyData.js';

export const GrowthLabView = ({ onNavigate }) => {
  const growth = COMPANIES.find(c => c.id === 'growth-lab');

  return (
    <div className="pt-32 pb-20 space-y-16">
      
      {/* Header */}
      <section className="bg-[#0A0A0B] text-center max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A756A]/20 text-[#14B8A6] border border-[#0A756A]/30 text-xs font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{growth.statusBadge} Preview</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#F8FAFC] tracking-tight leading-tight">
          {growth.name}
        </h1>
        <p className="mt-3 text-base font-semibold text-[#14B8A6] max-w-2xl mx-auto">
          "{growth.tagline}"
        </p>
        <p className="mt-4 text-base text-[#CBD5E1] leading-relaxed max-w-2xl mx-auto">
          {growth.overview}
        </p>
      </section>

      {/* Sustainable Organic Strategy Breakdown */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="card-flat p-8 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A0A0B] border border-white/10 text-xs font-medium text-[#14B8A6]">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Organic Reach vs Paid Ads</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC]">
                Building Enduring Organic Valuations
              </h2>
              <p className="text-base text-[#CBD5E1] leading-relaxed">
                Rather than depending continuously on escalating ad spend, Entrain Growth Lab builds owned media assets, organic search dominance, and community engagement for long-term customer acquisition.
              </p>
            </div>

            {/* Placeholders Card */}
            <div className="space-y-4 p-6 rounded-xl bg-[#0A0A0B] border border-white/5">
              <h3 className="text-xs font-semibold text-[#F8FAFC] uppercase tracking-wider flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#14B8A6]" />
                <span>Agency Blueprint Specifications</span>
              </h3>

              <div className="p-3.5 rounded-xl bg-[#171A1D] border border-white/5 space-y-1">
                <span className="text-xs font-bold text-[#14B8A6] uppercase">Services:</span>
                <p className="text-sm font-mono text-[#CBD5E1]">{growth.servicesPlaceholder}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#171A1D] border border-white/5 space-y-1">
                <span className="text-xs font-bold text-[#14B8A6] uppercase">Target Audience:</span>
                <p className="text-sm font-mono text-[#CBD5E1]">{growth.targetAudiencePlaceholder}</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Early Interest CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="card-flat p-8 space-y-4">
          <h2 className="text-2xl font-bold text-[#F8FAFC]">
            Register Early Interest
          </h2>
          <p className="text-base text-[#CBD5E1] max-w-md mx-auto">
            Be among the first businesses to partner with Entrain Growth Lab for organic brand expansion.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="btn-primary text-xs inline-flex items-center gap-2"
          >
            <span>Inquire for Early Access</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
};
