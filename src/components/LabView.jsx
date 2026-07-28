import React, { useState } from 'react';
import { MonitorPlay, CheckCircle2, UserCheck, Clock, Award, DollarSign, ArrowRight, HelpCircle, Users, BarChart2, BookOpen } from 'lucide-react';
import { COMPANIES } from '../data/companyData.js';

export const LabView = ({ onNavigate }) => {
  const lab = COMPANIES.find(c => c.id === 'lab');
  const [selectedCourseIdx, setSelectedCourseIdx] = useState(0);

  return (
    <div className="pt-28 pb-20 space-y-20">
      
      {/* Header */}
      <section className="bg-[#050816] text-center max-w-4xl mx-auto px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111827] border border-white/10 text-xs font-semibold text-[#14B8A6] mb-4">
          <MonitorPlay className="w-3.5 h-3.5" />
          <span>{lab.badge}</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          {lab.name}
        </h1>
        <p className="mt-3 text-base font-semibold text-[#14B8A6] max-w-2xl mx-auto">
          "{lab.tagline}"
        </p>
        <p className="mt-4 text-xs text-[#94A3B8] leading-relaxed max-w-2xl mx-auto">
          {lab.overview}
        </p>
      </section>

      {/* Courses Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Digital Marketing & Web Development Courses
          </h2>
          <p className="mt-2 text-xs text-[#94A3B8]">Agency-style practical curriculum designed for digital industry success</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lab.courses.map((course, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-[#111827] border border-white/10 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-base font-bold text-white mb-2">{course.name}</h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">{course.description}</p>
                
                <div className="space-y-2 border-t border-white/5 pt-4 text-xs font-mono text-[#14B8A6]">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-[#94A3B8]"><Clock className="w-3.5 h-3.5 text-[#14B8A6]" /> Duration:</span>
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-[#94A3B8]"><MonitorPlay className="w-3.5 h-3.5 text-[#14B8A6]" /> Format:</span>
                    <span>{course.format}</span>
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
                <span>Enroll in Course</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
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
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {lab.targetAudience.map((audience, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#111827] border border-white/10 flex items-center gap-3">
                <UserCheck className="w-4 h-4 text-[#14B8A6] shrink-0" />
                <span className="text-xs font-semibold text-white">{audience}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Entrain Lab */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Why Entrain Lab
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lab.whyChoose.map((point, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-[#111827] border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <CheckCircle2 className="w-4 h-4 text-[#14B8A6]" />
                <span>{point.title}</span>
              </div>
              <p className="text-xs text-[#94A3B8] leading-relaxed pl-6">{point.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Placeholders Sections: Mentors, Testimonials, Stats */}
      <section className="py-12 bg-[#0B1120] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Mentor Profiles */}
            <div className="p-6 rounded-2xl bg-[#111827] border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <Users className="w-4 h-4 text-[#14B8A6]" />
                <span>Mentor Profiles</span>
              </div>
              <p className="text-xs font-mono text-[#14B8A6]">
                {lab.mentorsPlaceholder}
              </p>
              <p className="text-xs text-[#94A3B8]">
                Industry experts leading performance ad campaigns, SEO, and web engineering.
              </p>
            </div>

            {/* Testimonials */}
            <div className="p-6 rounded-2xl bg-[#111827] border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <UserCheck className="w-4 h-4 text-[#14B8A6]" />
                <span>Student Testimonials</span>
              </div>
              <p className="text-xs font-mono text-[#14B8A6]">
                {lab.testimonialsPlaceholder}
              </p>
              <p className="text-xs text-[#94A3B8]">
                Success stories of students landing agency roles across Kerala & remote teams.
              </p>
            </div>

            {/* Statistics */}
            <div className="p-6 rounded-2xl bg-[#111827] border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <BarChart2 className="w-4 h-4 text-[#14B8A6]" />
                <span>Academy Statistics</span>
              </div>
              <p className="text-xs font-mono text-[#14B8A6]">
                {lab.statisticsPlaceholder}
              </p>
              <p className="text-xs text-[#94A3B8]">
                Placement rate, active cohorts, and practical project builds.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Blog Insights & FAQ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
        <div>
          <h2 className="text-2xl font-extrabold text-white mb-6 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#14B8A6]" />
            <span>Digital Marketing Blog Insights</span>
          </h2>
          <div className="p-6 rounded-2xl bg-[#111827] border border-white/10 text-xs text-[#94A3B8] space-y-2">
            <h3 className="text-sm font-bold text-white">Latest Industry Trends & Case Studies</h3>
            <p>Read practical breakdown articles written by agency mentors covering Performance Marketing ROAS, Technical SEO, and Web Conversion Hacks.</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-extrabold text-white mb-6 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#14B8A6]" />
            <span>Frequently Asked Questions</span>
          </h2>
          <div className="space-y-4">
            {lab.faqList.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-[#111827] border border-white/10 space-y-1.5">
                <h3 className="text-sm font-bold text-white">{faq.q}</h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
