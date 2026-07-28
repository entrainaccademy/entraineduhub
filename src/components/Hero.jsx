import React from 'react';
import { ArrowRight, ShieldCheck, TrendingUp, Code, GraduationCap, Sparkles } from 'lucide-react';
import { SUBSIDIARIES } from '../data/companyData.js';

export const Hero = ({ onSelectBrand, onOpenContact }) => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-[#050816]">
      {/* Subtle Dark Lighting Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0A756A]/12 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Status Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111827] border border-white/10 text-xs font-semibold text-[#14B8A6]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Parent Corporate Holding Entity</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Architecting the Ecosystem for{' '}
            <span className="gradient-accent-text block mt-1">
              Technology, Growth & Education
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-[#94A3B8] max-w-2xl mx-auto font-normal leading-relaxed">
            <strong className="text-white font-semibold">Entrain Edu Hub</strong> drives innovation across digital marketing, custom software engineering, and tech workforce training through three independent subsidiaries.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#brands"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#0A756A] to-[#14B8A6] hover:opacity-95 text-white text-xs font-bold shadow-glow-primary transition-all flex items-center justify-center gap-2"
            >
              <span>Explore Subsidiaries</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#111827] border border-white/10 hover:bg-white/5 text-white text-xs font-bold transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#14B8A6]" />
              <span>Partner Consultation</span>
            </button>
          </div>
        </div>

        {/* Subsidiary Quick Cards Bar */}
        <div className="mt-16 pt-8 border-t border-white/5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {SUBSIDIARIES.map((brand) => {
              const Icon = brand.iconName === 'TrendingUp' ? TrendingUp : brand.iconName === 'Code' ? Code : GraduationCap;
              return (
                <button
                  key={brand.id}
                  onClick={() => onSelectBrand(brand)}
                  className="p-4 rounded-2xl bg-[#111827]/80 border border-white/10 hover:border-[#14B8A6]/40 text-left transition-all flex items-center gap-3 group"
                >
                  <div className="p-2.5 rounded-xl bg-[#050816] border border-white/5 group-hover:border-[#14B8A6]/40 transition-colors">
                    <Icon className="w-4 h-4 text-[#14B8A6]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white group-hover:text-[#14B8A6] transition-colors">
                      {brand.name}
                    </h3>
                    <p className="text-[10px] text-[#94A3B8] mt-0.5">
                      {brand.categoryBadge}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
