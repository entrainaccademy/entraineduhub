import React from 'react';
import { Eye, Target, CheckCircle2, Compass } from 'lucide-react';

const VISION_MISSION = [
  {
    title: "Strategic Vision",
    description: "To become the global benchmark enterprise holding entity that harmonizes technological innovation, market expansion, and practical talent development into a self-sustaining growth ecosystem.",
    details: [
      "Empowering enterprises through intelligent software and performance marketing.",
      "Cultivating top-tier technology talent to bridge the global digital skills gap.",
      "Building resilient SaaS platforms that solve real-world industry bottlenecks."
    ]
  },
  {
    title: "Corporate Mission",
    description: "To deliver uncompromising value through three specialized operational verticals—Growth Labs, Labs, and Academy—driven by integrity, technological excellence, and client success.",
    details: [
      "Deliver measurable ROI for client brands via data-led marketing strategies.",
      "Engineer secure, high-performance software systems with zero architectural compromise.",
      "Provide accessible, high-impact education that transforms student career trajectories."
    ]
  }
];

export const VisionMission = () => {
  return (
    <section id="vision" className="py-24 bg-[#0B1120] relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111827] border border-white/10 text-xs font-semibold text-[#14B8A6] mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Strategic Direction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Vision & Corporate Mission
          </h2>
          <p className="mt-4 text-base text-[#94A3B8] leading-relaxed">
            The foundational principles steering Entrain Edu Hub towards long-term industry leadership and enterprise value creation.
          </p>
        </div>

        {/* Dual Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Vision Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#111827] border border-white/10 relative overflow-hidden group hover:border-[#14B8A6]/30 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#14B8A6]/5 rounded-bl-full pointer-events-none" />
            
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-[#050816] border border-white/10 text-[#14B8A6]">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                {VISION_MISSION[0].title}
              </h3>
            </div>

            <p className="text-sm text-[#94A3B8] leading-relaxed mb-8">
              {VISION_MISSION[0].description}
            </p>

            <div className="space-y-3 pt-6 border-t border-white/5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#14B8A6] block mb-2">
                Strategic Targets
              </span>
              {VISION_MISSION[0].details.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#14B8A6] shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mission Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#111827] border border-white/10 relative overflow-hidden group hover:border-[#0A756A]/40 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0A756A]/10 rounded-bl-full pointer-events-none" />

            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-[#050816] border border-white/10 text-[#0A756A]">
                <Target className="w-6 h-6 text-[#14B8A6]" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                {VISION_MISSION[1].title}
              </h3>
            </div>

            <p className="text-sm text-[#94A3B8] leading-relaxed mb-8">
              {VISION_MISSION[1].description}
            </p>

            <div className="space-y-3 pt-6 border-t border-white/5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#14B8A6] block mb-2">
                Operational Mandate
              </span>
              {VISION_MISSION[1].details.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#14B8A6] shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
