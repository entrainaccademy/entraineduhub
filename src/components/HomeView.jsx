import React from 'react';
import { ArrowRight, UtensilsCrossed, MonitorPlay, TrendingUp, Sparkles, Building2, MapPin, Calendar, Compass, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO, COMPANIES, MISSION } from '../data/companyData.js';

export const HomeView = ({ onNavigate }) => {
  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#050816]">
        {/* Soft Ambient Background Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#0A756A]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Headline & Subheadline */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111827] border border-white/10 text-xs font-semibold text-[#14B8A6]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Entrain EduHub Parent Entity</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Real Experience.{' '}
                <span className="gradient-accent-text block mt-1">
                  Real Skills. Real Growth.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#94A3B8] font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {COMPANY_INFO.tagline} {COMPANY_INFO.overview}
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#companies"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#0A756A] to-[#14B8A6] hover:opacity-95 text-white text-xs font-bold shadow-glow-primary transition-all flex items-center justify-center gap-2"
                >
                  <span>Explore Our Companies</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#111827] border border-white/10 hover:bg-white/5 text-white text-xs font-bold transition-all flex items-center justify-center gap-2"
                >
                  <span>Contact Us</span>
                </button>
              </div>
            </div>

            {/* Hero Visual Placeholder */}
            <div className="lg:col-span-5">
              <div className="p-8 rounded-3xl bg-[#111827] border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="aspect-[4/3] rounded-2xl bg-[#050816] border border-white/5 flex flex-col items-center justify-center text-center p-6 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#0A756A]/20 border border-[#14B8A6]/30 flex items-center justify-center text-[#14B8A6]">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-[#14B8A6] uppercase tracking-wider">
                    Hero Visual Representation
                  </span>
                  <p className="text-xs text-[#94A3B8] max-w-xs font-mono">
                    🔲 Student training / professional workspace / abstract growth illustration
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. ABOUT ENTRAIN EDUHUB */}
      <section id="about-summary" className="py-16 bg-[#0B1120] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A756A]/15 border border-[#0A756A]/30 text-xs font-semibold text-[#14B8A6]">
                <Building2 className="w-3.5 h-3.5" />
                <span>Parent Holding Company</span>
              </div>

              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                About Entrain EduHub
              </h2>

              <p className="text-sm text-[#94A3B8] leading-relaxed">
                {COMPANY_INFO.overview}
              </p>

              <p className="text-sm text-[#94A3B8] leading-relaxed">
                {COMPANY_INFO.details}
              </p>

              <button
                onClick={() => onNavigate('about')}
                className="pt-2 text-xs font-bold text-[#14B8A6] hover:underline flex items-center gap-1.5"
              >
                <span>Read Full Story & Mission</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Placeholders Card */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-2xl bg-[#111827] border border-white/10 space-y-4">
                <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#14B8A6]" />
                  <span>Corporate Key Details</span>
                </h3>

                <div className="p-3.5 rounded-xl bg-[#050816] border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
                    <Calendar className="w-4 h-4 text-[#14B8A6]" />
                    <span>Founding Year:</span>
                  </div>
                  <span className="text-xs font-semibold text-white font-mono">{COMPANY_INFO.foundedYear}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#050816] border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
                    <MapPin className="w-4 h-4 text-[#14B8A6]" />
                    <span>Location:</span>
                  </div>
                  <span className="text-xs font-semibold text-white font-mono">{COMPANY_INFO.location}</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. OUR COMPANIES (3 PREMIUM CARDS) */}
      <section id="companies" className="py-16 bg-[#050816]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111827] border border-white/10 text-xs font-semibold text-[#14B8A6] mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Three Independent Brands</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our Operating Companies
            </h2>
            <p className="mt-3 text-xs text-[#94A3B8]">
              Each venture under Entrain EduHub serves a specialized focus across food arts, digital marketing, and organic business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Card 1: Entrain Academy */}
            <div className="glow-card p-8 rounded-3xl bg-[#111827] border border-white/10 hover:border-[#14B8A6]/40 flex flex-col justify-between transition-all group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-2xl bg-[#050816] border border-white/10 text-[#14B8A6]">
                    <UtensilsCrossed className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#0B1120] text-[#14B8A6] border border-white/5">
                    Culinary Academy
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-[#14B8A6] transition-colors mb-2">
                  Entrain Academy
                </h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed mb-6">
                  A commercial culinary training academy offering hands-on courses for aspiring chefs, food entrepreneurs, and hospitality professionals in India and abroad.
                </p>
              </div>

              <button
                onClick={() => onNavigate('academy')}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#0A756A] to-[#14B8A6] text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Explore Entrain Academy</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Card 2: Entrain Lab */}
            <div className="glow-card p-8 rounded-3xl bg-[#111827] border border-white/10 hover:border-[#14B8A6]/40 flex flex-col justify-between transition-all group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-2xl bg-[#050816] border border-white/10 text-[#0A756A]">
                    <MonitorPlay className="w-6 h-6 text-[#14B8A6]" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#0B1120] text-[#14B8A6] border border-white/5">
                    Digital Marketing Academy
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-[#14B8A6] transition-colors mb-2">
                  Entrain Lab
                </h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed mb-6">
                  A digital marketing academy in Kerala offering practical courses in Performance Marketing, Web Development, SEO, Content Creation, and Social Media Marketing.
                </p>
              </div>

              <button
                onClick={() => onNavigate('lab')}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#0A756A] to-[#14B8A6] text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Explore Entrain Lab</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Card 3: Entrain Growth Lab */}
            <div className="glow-card p-8 rounded-3xl bg-[#111827] border border-white/10 hover:border-[#14B8A6]/40 flex flex-col justify-between transition-all group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-2xl bg-[#050816] border border-white/10 text-[#14B8A6]">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#0A756A]/20 text-[#14B8A6] border border-[#0A756A]/30 font-mono">
                    Coming Soon
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-[#14B8A6] transition-colors mb-2">
                  Entrain Growth Lab
                </h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed mb-6">
                  A digital marketing agency focused purely on organic growth, helping businesses build sustainable reach without depending on paid advertising.
                </p>
              </div>

              <button
                onClick={() => onNavigate('growth-lab')}
                className="w-full py-3 rounded-xl bg-[#050816] border border-white/10 text-white text-xs font-bold hover:bg-white/5 transition-all flex items-center justify-center gap-2"
              >
                <span>Coming Soon / Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 4. MISSION STATEMENT */}
      <section className="py-16 bg-[#0B1120] border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-[#14B8A6] uppercase tracking-widest">
            Corporate Mission
          </span>
          <blockquote className="text-xl sm:text-2xl font-extrabold text-white leading-relaxed max-w-3xl mx-auto">
            "{MISSION.statement}"
          </blockquote>
        </div>
      </section>

    </div>
  );
};
