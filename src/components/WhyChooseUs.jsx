import React from 'react';
import { Lightbulb, ShieldCheck, Users, Layers } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/companyData.js';

export const WhyChooseUs = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Lightbulb': return <Lightbulb className="w-5 h-5 text-[#14B8A6]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#0A756A]" />;
      case 'Users': return <Users className="w-5 h-5 text-[#14B8A6]" />;
      case 'Layers': return <Layers className="w-5 h-5 text-[#0A756A]" />;
      default: return <ShieldCheck className="w-5 h-5 text-[#14B8A6]" />;
    }
  };

  return (
    <section id="why-us" className="py-20 bg-[#0B1120] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827] border border-white/10 text-xs font-semibold text-[#14B8A6] mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Corporate Standards</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Why Partner With Entrain Edu Hub
          </h2>
          <p className="mt-2 text-xs text-[#94A3B8]">
            Built on strategic governance, enterprise quality standards, and dedicated industry leadership.
          </p>
        </div>

        {/* 4 Essential Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-[#111827] border border-white/10 hover:border-[#14B8A6]/30 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-[#050816] border border-white/10 flex items-center justify-center mb-4">
                {getIcon(item.icon)}
              </div>

              <h3 className="text-base font-bold text-white mb-2">
                {item.title}
              </h3>

              <p className="text-xs text-[#94A3B8] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
