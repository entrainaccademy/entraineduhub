import React from 'react';
import { Building2, Compass, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { MISSION, OUR_STORY_TIMELINE, COMPANY_INFO } from '../data/companyData.js';

export const AboutView = ({ onNavigate }) => {
  return (
    <div className="pt-28 pb-20 space-y-20">
      
      {/* Header */}
      <section className="bg-[#050816] text-center max-w-4xl mx-auto px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111827] border border-white/10 text-xs font-semibold text-[#14B8A6] mb-4">
          <Building2 className="w-3.5 h-3.5" />
          <span>About Entrain EduHub</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Turning Real-World Experience Into Practical Growth
        </h1>
        <p className="mt-4 text-base text-[#94A3B8] leading-relaxed max-w-2xl mx-auto">
          {COMPANY_INFO.overview}
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-12 bg-[#0B1120] border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A756A]/20 text-[#14B8A6] border border-[#0A756A]/30 text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Our Mission</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-relaxed max-w-3xl mx-auto">
            "{MISSION.statement}"
          </h2>
        </div>
      </section>

      {/* Story Timeline Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Our Story
          </h2>
          <p className="mt-3 text-sm text-[#94A3B8] leading-relaxed">
            Entrain EduHub began with a simple realization: real business lessons often come from real struggles—not textbooks.
          </p>
        </div>

        {/* Timeline Component */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-32 space-y-12 pl-6 sm:pl-10">
          {OUR_STORY_TIMELINE.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-5 h-5 rounded-full bg-[#050816] border-2 border-[#14B8A6] flex items-center justify-center group-hover:scale-125 transition-transform" />

              {/* Year Label */}
              <div className="sm:absolute sm:-left-36 sm:top-1 text-xs font-bold text-[#14B8A6] uppercase tracking-wider mb-1 sm:mb-0">
                {item.year}
              </div>

              {/* Card */}
              <div className="p-6 rounded-2xl bg-[#111827] border border-white/10 hover:border-[#14B8A6]/30 transition-all">
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Placeholders Banner */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="p-6 rounded-2xl bg-[#111827] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#14B8A6] shrink-0" />
            <div className="text-xs text-[#94A3B8]">
              <span>Corporate Details: </span>
              <strong className="text-white">Founding Year: {COMPANY_INFO.foundedYear}</strong>
              <span className="mx-2">•</span>
              <strong className="text-white">Headquarters: {COMPANY_INFO.location}</strong>
            </div>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#0A756A] to-[#14B8A6] text-white text-xs font-bold flex items-center gap-1.5"
          >
            <span>Partner With Us</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

    </div>
  );
};
