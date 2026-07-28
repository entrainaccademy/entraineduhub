import React from 'react';
import { Building2, Compass, ShieldCheck, ArrowRight } from 'lucide-react';
import { MISSION, OUR_STORY_TIMELINE, COMPANY_INFO } from '../data/companyData.js';

export const AboutView = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-20 space-y-20">
      
      {/* Header */}
      <section className="bg-[#0A0A0B] text-center max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171A1D] border border-white/10 text-xs font-medium text-[#14B8A6] mb-4">
          <Building2 className="w-3.5 h-3.5" />
          <span>About Entrain EduHub</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#F8FAFC] tracking-tight leading-tight max-w-3xl mx-auto">
          Turning Real-World Experience Into Practical Growth
        </h1>
        <p className="mt-4 text-base text-[#CBD5E1] leading-relaxed max-w-2xl mx-auto">
          {COMPANY_INFO.overview}
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-[#111315] border-y border-white/5">
        <div className="max-w-[1280px] mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A756A]/20 text-[#14B8A6] border border-[#0A756A]/30 text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Our Mission</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#F8FAFC] leading-relaxed max-w-3xl mx-auto">
            "{MISSION.statement}"
          </h2>
        </div>
      </section>

      {/* Story Timeline Section */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-[38px] font-semibold text-[#F8FAFC] tracking-tight">
            Our Story
          </h2>
          <p className="mt-3 text-base text-[#CBD5E1] leading-relaxed">
            Entrain EduHub began with a simple realization: real business lessons often come from real struggles—not textbooks.
          </p>
        </div>

        {/* Timeline Component */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-32 space-y-10 pl-6 sm:pl-10 max-w-4xl mx-auto">
          {OUR_STORY_TIMELINE.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#0A0A0B] border-2 border-[#14B8A6]" />

              {/* Year Label */}
              <div className="sm:absolute sm:-left-36 sm:top-1.5 text-xs font-bold text-[#14B8A6] uppercase tracking-wider mb-1 sm:mb-0">
                {item.year}
              </div>

              {/* Card */}
              <div className="card-flat p-6">
                <h3 className="text-[22px] font-bold text-[#F8FAFC] mb-2">
                  {item.title}
                </h3>
                <p className="text-base text-[#CBD5E1] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Placeholders Banner */}
      <section className="max-w-[1280px] mx-auto px-4">
        <div className="card-flat p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#14B8A6] shrink-0" />
            <div className="text-sm text-[#CBD5E1]">
              <span>Corporate Details: </span>
              <strong className="text-[#F8FAFC]">Founding Year: {COMPANY_INFO.foundedYear}</strong>
              <span className="mx-2">•</span>
              <strong className="text-[#F8FAFC]">Location: {COMPANY_INFO.location}</strong>
            </div>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="btn-primary text-xs flex items-center gap-1.5"
          >
            <span>Partner With Us</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

    </div>
  );
};
