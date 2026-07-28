import React from 'react';
import { ArrowRight, TrendingUp, Code, GraduationCap, CheckCircle2, Sparkles } from 'lucide-react';
import { SUBSIDIARIES } from '../data/companyData.js';

export const CompaniesSection = ({ onSelectBrand }) => {
  const getBrandIcon = (iconName) => {
    switch (iconName) {
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-[#14B8A6]" />;
      case 'Code': return <Code className="w-5 h-5 text-[#0A756A]" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-[#14B8A6]" />;
      default: return <Code className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="brands" className="py-24 bg-[#050816] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827] border border-white/10 text-xs font-semibold text-[#14B8A6] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Operating Companies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Our Independent Brands
          </h2>
          <p className="mt-3 text-xs text-[#94A3B8] leading-relaxed">
            Three specialized business units under Entrain Edu Hub management delivering marketing performance, software engineering, and industry education.
          </p>
        </div>

        {/* 3 Subsidiary Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {SUBSIDIARIES.map((brand) => (
            <div
              key={brand.id}
              className="glow-card relative rounded-2xl bg-[#111827] border border-white/10 p-7 flex flex-col justify-between transition-all hover:border-[#14B8A6]/40 group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-[#050816] border border-white/10 group-hover:border-[#14B8A6]/40 transition-colors">
                    {getBrandIcon(brand.iconName)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#0B1120] text-[#14B8A6] border border-white/5">
                    {brand.categoryBadge}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-white group-hover:text-[#14B8A6] transition-colors mb-1.5">
                  {brand.name}
                </h3>
                <p className="text-xs font-medium text-[#14B8A6] mb-3">
                  {brand.tagline}
                </p>

                <p className="text-xs text-[#94A3B8] leading-relaxed mb-6">
                  {brand.shortDescription}
                </p>

                {/* Service Bullet Points */}
                <div className="space-y-2 mb-6 border-t border-white/5 pt-4">
                  {brand.services.map((service, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs text-white/90">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#14B8A6] shrink-0" />
                      <span className="truncate">{service.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/5">
                <button
                  onClick={() => onSelectBrand(brand)}
                  className="w-full py-2.5 rounded-xl bg-[#050816] border border-white/10 group-hover:bg-gradient-to-r group-hover:from-[#0A756A] group-hover:to-[#14B8A6] text-white text-xs font-bold transition-all flex items-center justify-center gap-2"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
