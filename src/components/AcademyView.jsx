import React from 'react';
import { UtensilsCrossed, CheckCircle2, UserCheck, Clock, Award, DollarSign, ArrowRight } from 'lucide-react';
import { COMPANIES, OUR_STORY_TIMELINE } from '../data/companyData.js';

export const AcademyView = ({ onNavigate }) => {
  const academy = COMPANIES.find(c => c.id === 'academy');

  return (
    <div className="pt-28 pb-20 space-y-20">
      
      {/* Header */}
      <section className="bg-[#050816] text-center max-w-4xl mx-auto px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111827] border border-white/10 text-xs font-semibold text-[#14B8A6] mb-4">
          <UtensilsCrossed className="w-3.5 h-3.5" />
          <span>{academy.badge}</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          {academy.name}
        </h1>
        <p className="mt-4 text-base font-semibold text-[#14B8A6] max-w-2xl mx-auto">
          "{academy.tagline}"
        </p>
        <p className="mt-4 text-xs text-[#94A3B8] leading-relaxed max-w-2xl mx-auto">
          {academy.overview}
        </p>
      </section>

      {/* The Story Behind Entrain Academy Timeline */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            The Story Behind Entrain Academy
          </h2>
          <p className="mt-2 text-xs text-[#94A3B8]">
            Born from real-world bakery experience, overcoming trials, and building genuine expertise.
          </p>
        </div>

        <div className="relative border-l border-white/10 ml-4 sm:ml-28 space-y-8 pl-6 sm:pl-8">
          {OUR_STORY_TIMELINE.map((item, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-[#050816] border-2 border-[#14B8A6]" />
              <div className="sm:absolute sm:-left-32 sm:top-1 text-xs font-bold text-[#14B8A6] uppercase tracking-wider mb-1 sm:mb-0">
                {item.year}
              </div>
              <div className="p-5 rounded-xl bg-[#111827] border border-white/10">
                <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-12 bg-[#0B1120] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Who It's For
            </h2>
            <p className="mt-2 text-xs text-[#94A3B8]">Designed specifically for targeted culinary & hospitality career tracks</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {academy.targetAudience.map((audience, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#111827] border border-white/10 flex items-center gap-3">
                <UserCheck className="w-4 h-4 text-[#14B8A6] shrink-0" />
                <span className="text-xs font-semibold text-white">{audience}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Culinary Courses & Programs
          </h2>
          <p className="mt-2 text-xs text-[#94A3B8]">Hands-on commercial culinary, bakery, and entrepreneurship tracks</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {academy.courses.map((course, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-[#111827] border border-white/10 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-base font-bold text-white mb-2">{course.title}</h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">{course.description}</p>
                
                <div className="space-y-2 border-t border-white/5 pt-4 text-xs font-mono text-[#14B8A6]">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-[#94A3B8]"><Clock className="w-3.5 h-3.5 text-[#14B8A6]" /> Duration:</span>
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-[#94A3B8]"><DollarSign className="w-3.5 h-3.5 text-[#14B8A6]" /> Fees:</span>
                    <span>{course.fees}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-[#94A3B8]"><Award className="w-3.5 h-3.5 text-[#14B8A6]" /> Certification:</span>
                    <span>{course.certification}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onNavigate('contact')}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#0A756A] to-[#14B8A6] text-white text-xs font-bold flex items-center justify-center gap-1.5"
              >
                <span>Inquire For Admission</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Entrain Academy */}
      <section className="py-12 bg-[#0B1120] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Why Choose Entrain Academy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academy.whyChoose.map((point, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-[#111827] border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#14B8A6]" />
                  <span>{point.title}</span>
                </div>
                <p className="text-xs text-[#94A3B8] leading-relaxed pl-6">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
