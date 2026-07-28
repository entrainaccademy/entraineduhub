import React from 'react';
import { Building2, Network, Cpu, Target } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData.js';

export const AboutSection = () => {
  const pillars = [
    {
      icon: <Network className="w-5 h-5 text-[#14B8A6]" />,
      title: "Holding Governance",
      desc: "Providing strategic direction, capital allocation, and compliance oversight across all brand subsidiaries."
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#0A756A]" />,
      title: "Cross-Vertical Synergy",
      desc: "Combining marketing growth, software engineering, and education into a unified 360° business ecosystem."
    },
    {
      icon: <Target className="w-5 h-5 text-[#14B8A6]" />,
      title: "Enterprise Benchmarks",
      desc: "Ensuring all software products, ad campaigns, and courses meet stringent quality standards."
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#0B1120] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A756A]/15 border border-[#0A756A]/30 text-xs font-semibold text-[#14B8A6] mb-3">
              <Building2 className="w-3.5 h-3.5" />
              <span>Parent Organization Overview</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              One Vision. Three Operational Pillars.
            </h2>
          </div>
          <p className="text-xs text-[#94A3B8] max-w-md leading-relaxed">
            {COMPANY_INFO.overview}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#111827] border border-white/10 hover:border-[#14B8A6]/30 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-[#050816] border border-white/10 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
