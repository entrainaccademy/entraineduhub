import React from 'react';
import { ArrowRight, UtensilsCrossed, MonitorPlay, TrendingUp, Sparkles, Building2, MapPin, Calendar, Compass, ShieldCheck } from 'lucide-react';

const COMPANY_INFO = {
  tagline: "Real Experience. Real Skills. Real Growth.",
  overview: "Entrain EduHub is the foundation of ventures that bridge real-world experience with practical education, helping individuals and businesses learn, grow, and succeed..",
  details: "From culinary training to digital marketing education to organic growth strategy, Entrain EduHub equips learners and businesses with practical, industry-ready skills.",
  foundedYear: "🔲 [Year]",
  location: "🔲 [Location]",
};

const MISSION = {
  statement: "To bridge the gap between real-world experience and formal education by building practical skills, confident entrepreneurs, and industry-ready professionals across food, digital marketing, and business growth.",
};

export const HomeView = ({ onNavigate }) => {
  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#0A0A0B]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Headline & Subheadline */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171A1D] border border-white/10 text-xs font-medium text-[#14B8A6]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Entrain EduHub Parent Entity</span>
              </div> */}

              <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-bold text-[#F8FAFC] tracking-tight leading-[1.15]">
                Real Experience.{' '}
                <span className="text-[#14B8A6] block mt-1">
                  Real Skills. Real Growth.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#CBD5E1] font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {COMPANY_INFO.tagline} {COMPANY_INFO.overview}
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#companies"
                  className="w-full sm:w-auto btn-primary flex items-center justify-center gap-2 text-sm"
                >
                  <span>Explore Our Companies</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full sm:w-auto btn-secondary flex items-center justify-center gap-2 text-sm"
                >
                  <span>Contact Us</span>
                </button>
              </div>
            </div>

            {/* Hero Visual Placeholder */}
            <div className="lg:col-span-5">
              <div className="card-flat p-6 sm:p-8">
                <div className="aspect-[4/3] rounded-xl bg-[#0A0A0B] border border-white/5 flex flex-col items-center justify-center text-center p-6 space-y-3">
                  <div className="w-10 h-10 rounded-full bg-[#0A756A]/20 border border-[#14B8A6]/30 flex items-center justify-center text-[#14B8A6]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-[#14B8A6] uppercase tracking-wider">
                    Hero Visual Placeholder
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
      <section id="about-summary" className="py-20 bg-[#111315] border-y border-white/5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171A1D] border border-white/10 text-xs font-medium text-[#14B8A6]">
                <Building2 className="w-3.5 h-3.5" />
                <span>Parent Holding Company</span>
              </div>

              <h2 className="text-3xl sm:text-[38px] font-semibold text-[#F8FAFC] tracking-tight">
                About Entrain EduHub
              </h2>

              <p className="text-base text-[#CBD5E1] leading-relaxed">
                {COMPANY_INFO.overview}
              </p>

              <p className="text-base text-[#CBD5E1] leading-relaxed">
                {COMPANY_INFO.details}
              </p>

              <button
                onClick={() => onNavigate('about')}
                className="pt-2 text-sm font-semibold text-[#14B8A6] hover:text-[#1BC7B0] transition-colors flex items-center gap-1.5"
              >
                <span>Read Full Story & Mission</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Details Placeholder Card */}
            <div className="lg:col-span-5 space-y-4">
              <div className="card-flat p-6 space-y-4">
                <h3 className="text-sm font-semibold text-[#F8FAFC] uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#14B8A6]" />
                  <span>Corporate Key Details</span>
                </h3>

                <div className="p-3.5 rounded-xl bg-[#0A0A0B] border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-[#CBD5E1]">
                    <Calendar className="w-4 h-4 text-[#14B8A6]" />
                    <span>Founding Year:</span>
                  </div>
                  <span className="text-sm font-semibold text-[#F8FAFC] font-mono">{COMPANY_INFO.foundedYear}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0A0A0B] border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-[#CBD5E1]">
                    <MapPin className="w-4 h-4 text-[#14B8A6]" />
                    <span>Location:</span>
                  </div>
                  <span className="text-sm font-semibold text-[#F8FAFC] font-mono">{COMPANY_INFO.location}</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. OUR COMPANIES (3 FLAT CARDS) */}
      <section id="companies" className="py-20 bg-[#0A0A0B]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171A1D] border border-white/10 text-xs font-medium text-[#14B8A6] mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Three Independent Brands</span>
            </div>
            <h2 className="text-3xl sm:text-[38px] font-semibold text-[#F8FAFC] tracking-tight">
              Our Operating Companies
            </h2>
            <p className="mt-3 text-base text-[#CBD5E1]">
              Each venture under Entrain EduHub serves a specialized focus across food arts, digital marketing, and organic business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Card 1: Entrain Academy */}
            <div className="card-flat p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#0A0A0B] border border-white/10 flex items-center justify-center text-[#14B8A6]">
                    <UtensilsCrossed className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#111315] text-[#14B8A6] border border-white/5">
                    Culinary Academy
                  </span>
                </div>

                <h3 className="text-[22px] font-bold text-[#F8FAFC] mb-3">
                  Entrain Academy
                </h3>
                <p className="text-base text-[#CBD5E1] leading-relaxed mb-6">
                  A commercial culinary training academy offering hands-on courses for aspiring chefs, food entrepreneurs, and hospitality professionals in India and abroad.
                </p>
              </div>

              <button
                onClick={() => onNavigate('academy')}
                className="w-full btn-primary text-xs flex items-center justify-center gap-2"
              >
                <span>Explore Entrain Academy</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Card 2: Entrain Lab */}
            <div className="card-flat p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#0A0A0B] border border-white/10 flex items-center justify-center text-[#14B8A6]">
                    <MonitorPlay className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#111315] text-[#14B8A6] border border-white/5">
                    Digital Marketing Academy
                  </span>
                </div>

                <h3 className="text-[22px] font-bold text-[#F8FAFC] mb-3">
                  Entrain Lab
                </h3>
                <p className="text-base text-[#CBD5E1] leading-relaxed mb-6">
                  A digital marketing academy in Kerala offering practical courses in Performance Marketing, Web Development, SEO, Content Creation, and Social Media Marketing.
                </p>
              </div>

              <button
                onClick={() => onNavigate('lab')}
                className="w-full btn-primary text-xs flex items-center justify-center gap-2"
              >
                <span>Explore Entrain Lab</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Card 3: Entrain Growth Lab */}
            <div className="card-flat p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#0A0A0B] border border-white/10 flex items-center justify-center text-[#14B8A6]">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#111315] text-[#14B8A6] border border-white/5 font-mono">
                    Coming Soon
                  </span>
                </div>

                <h3 className="text-[22px] font-bold text-[#F8FAFC] mb-3">
                  Entrain Growth Lab
                </h3>
                <p className="text-base text-[#CBD5E1] leading-relaxed mb-6">
                  A digital marketing agency focused purely on organic growth, helping businesses build sustainable reach without depending on paid advertising.
                </p>
              </div>

              <button
                onClick={() => onNavigate('growth-lab')}
                className="w-full btn-secondary text-xs flex items-center justify-center gap-2"
              >
                <span>Coming Soon / Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 4. MISSION STATEMENT */}
      <section className="py-20 bg-[#111315] border-y border-white/5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold text-[#14B8A6] uppercase tracking-widest">
            Corporate Mission
          </span>
          <blockquote className="text-2xl sm:text-3xl font-semibold text-[#F8FAFC] leading-relaxed max-w-3xl mx-auto">
            "{MISSION.statement}"
          </blockquote>
        </div>
      </section>

    </div>
  );
};
