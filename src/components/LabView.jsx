import React from 'react';
import { MonitorPlay, CheckCircle2, UserCheck, Clock, Award, DollarSign, ArrowRight, HelpCircle, Users, BarChart2, BookOpen } from 'lucide-react';

const LAB = {
  id: "lab",
  name: "Entrain Lab",
  badge: "Digital Marketing Academy",
  tagline: "Practical, Agency-Style Digital Marketing Training in Kerala",
  overview: "Entrain Lab is a digital marketing academy in Kerala offering practical, agency-style training for aspiring digital marketers. Students work on real client briefs with mentor guidance to build industry-ready skills.",
  targetAudience: [
    "Students",
    "Graduates",
    "Working professionals",
    "Career changers",
    "Freelancers"
  ],
  whyChoose: [
    { title: "Practical Agency-Style Learning", desc: "Work on live-style briefs rather than passive lectures." },
    { title: "Mentor-Led Training", desc: "Direct feedback from experienced agency marketers." },
    { title: "Real Projects", desc: "Build an impressive portfolio with verified project work." },
    { title: "Student Success Stories", desc: "Track record of graduates landing roles across agencies." },
    { title: "Industry-Focused Curriculum", desc: "Updated continuously with modern ad platforms and search algorithms." }
  ],
  courses: [
    {
      name: "Performance Marketing",
      duration: "🔲 [Course Duration]",
      format: "🔲 [Online / Offline]",
      fees: "🔲 [Fees]",
      certification: "🔲 [Certification]",
      description: "Paid advertising, campaign structure, ROAS optimization across Meta & Google Ads."
    },
    {
      name: "Web Development",
      duration: "🔲 [Course Duration]",
      format: "🔲 [Online / Offline]",
      fees: "🔲 [Fees]",
      certification: "🔲 [Certification]",
      description: "Building responsive, modern, high-converting websites and landing portals."
    },
    {
      name: "Search Engine Optimization (SEO)",
      duration: "🔲 [Course Duration]",
      format: "🔲 [Online / Offline]",
      fees: "🔲 [Fees]",
      certification: "🔲 [Certification]",
      description: "Technical SEO audits, keyword strategy, and organic rank acceleration."
    },
    {
      name: "Content Creation",
      duration: "🔲 [Course Duration]",
      format: "🔲 [Online / Offline]",
      fees: "🔲 [Fees]",
      certification: "🔲 [Certification]",
      description: "Copywriting, graphic storytelling, short-form video scripting, and brand narrative."
    },
    {
      name: "Social Media Marketing",
      duration: "🔲 [Course Duration]",
      format: "🔲 [Online / Offline]",
      fees: "🔲 [Fees]",
      certification: "🔲 [Certification]",
      description: "Community engagement, channel strategy, analytics, and viral growth techniques."
    }
  ],
  mentorsPlaceholder: "🔲 [Mentor Profiles]",
  testimonialsPlaceholder: "🔲 [Student Testimonials]",
  statisticsPlaceholder: "🔲 [Statistics]",
  faqList: [
    {
      q: "What makes Entrain Lab different from other institutes?",
      a: "We focus exclusively on agency-style practical learning where students work on real-world scenarios rather than memorizing textbooks."
    },
    {
      q: "Are the courses available both online and offline in Kerala?",
      a: "🔲 [Online / Offline details will be updated]."
    },
    {
      q: "Do I get placement assistance upon course completion?",
      a: "Yes, we provide resume building, portfolio preparation, and placement referral support for our graduates."
    }
  ]
};

export const LabView = ({ onNavigate }) => {
  const lab = LAB;

  return (
    <div className="pt-32 pb-20 space-y-20">
      
      {/* Header */}
      <section className="bg-[#0A0A0B] text-center max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171A1D] border border-white/10 text-xs font-medium text-[#14B8A6] mb-4">
          <MonitorPlay className="w-3.5 h-3.5" />
          <span>{lab.badge}</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#F8FAFC] tracking-tight leading-tight">
          {lab.name}
        </h1>
        <p className="mt-3 text-base font-semibold text-[#14B8A6] max-w-2xl mx-auto">
          "{lab.tagline}"
        </p>
        <p className="mt-4 text-base text-[#CBD5E1] leading-relaxed max-w-2xl mx-auto">
          {lab.overview}
        </p>
      </section>

      {/* Courses Section */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-semibold text-[#F8FAFC] tracking-tight">
            Digital Marketing & Web Development Courses
          </h2>
          <p className="mt-2 text-base text-[#CBD5E1]">Agency-style practical curriculum designed for digital industry success</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lab.courses.map((course, idx) => (
            <div key={idx} className="card-flat p-6 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-[22px] font-bold text-[#F8FAFC] mb-2">{course.name}</h3>
                <p className="text-base text-[#CBD5E1] leading-relaxed mb-4">{course.description}</p>
                
                <div className="space-y-2 border-t border-white/5 pt-4 text-sm font-mono text-[#14B8A6]">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-[#CBD5E1]"><Clock className="w-4 h-4 text-[#14B8A6]" /> Duration:</span>
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-[#CBD5E1]"><MonitorPlay className="w-4 h-4 text-[#14B8A6]" /> Format:</span>
                    <span>{course.format}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-[#CBD5E1]"><DollarSign className="w-4 h-4 text-[#14B8A6]" /> Fees:</span>
                    <span>{course.fees}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-[#CBD5E1]"><Award className="w-4 h-4 text-[#14B8A6]" /> Certification:</span>
                    <span>{course.certification}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onNavigate('contact')}
                className="w-full btn-primary text-xs flex items-center justify-center gap-1.5"
              >
                <span>Enroll in Course</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 bg-[#111315] border-y border-white/5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl font-semibold text-[#F8FAFC] tracking-tight">
              Who It's For
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {lab.targetAudience.map((audience, idx) => (
              <div key={idx} className="card-flat p-5 flex items-center gap-3">
                <UserCheck className="w-5 h-5 text-[#14B8A6] shrink-0" />
                <span className="text-base font-medium text-[#F8FAFC]">{audience}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Entrain Lab */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-semibold text-[#F8FAFC] tracking-tight">
            Why Entrain Lab
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lab.whyChoose.map((point, idx) => (
            <div key={idx} className="card-flat p-6 space-y-2">
              <div className="flex items-center gap-2 text-lg font-semibold text-[#F8FAFC]">
                <CheckCircle2 className="w-5 h-5 text-[#14B8A6]" />
                <span>{point.title}</span>
              </div>
              <p className="text-base text-[#CBD5E1] leading-relaxed pl-7">{point.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Placeholders Sections */}
      <section className="py-16 bg-[#111315] border-y border-white/5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Mentor Profiles */}
            <div className="card-flat p-6 space-y-3">
              <div className="flex items-center gap-2 text-base font-bold text-[#F8FAFC]">
                <Users className="w-5 h-5 text-[#14B8A6]" />
                <span>Mentor Profiles</span>
              </div>
              <p className="text-sm font-mono text-[#14B8A6]">
                {lab.mentorsPlaceholder}
              </p>
              <p className="text-sm text-[#CBD5E1]">
                Industry experts leading performance ad campaigns, SEO, and web engineering.
              </p>
            </div>

            {/* Testimonials */}
            <div className="card-flat p-6 space-y-3">
              <div className="flex items-center gap-2 text-base font-bold text-[#F8FAFC]">
                <UserCheck className="w-5 h-5 text-[#14B8A6]" />
                <span>Student Testimonials</span>
              </div>
              <p className="text-sm font-mono text-[#14B8A6]">
                {lab.testimonialsPlaceholder}
              </p>
              <p className="text-sm text-[#CBD5E1]">
                Success stories of students landing agency roles across Kerala & remote teams.
              </p>
            </div>

            {/* Statistics */}
            <div className="card-flat p-6 space-y-3">
              <div className="flex items-center gap-2 text-base font-bold text-[#F8FAFC]">
                <BarChart2 className="w-5 h-5 text-[#14B8A6]" />
                <span>Academy Statistics</span>
              </div>
              <p className="text-sm font-mono text-[#14B8A6]">
                {lab.statisticsPlaceholder}
              </p>
              <p className="text-sm text-[#CBD5E1]">
                Placement rate, active cohorts, and practical project builds.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Blog & FAQ */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 space-y-12">
        <div>
          <h2 className="text-3xl font-semibold text-[#F8FAFC] mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-[#14B8A6]" />
            <span>Digital Marketing Blog Insights</span>
          </h2>
          <div className="card-flat p-6 space-y-2">
            <h3 className="text-base font-bold text-[#F8FAFC]">Latest Industry Trends & Case Studies</h3>
            <p className="text-base text-[#CBD5E1]">Read practical breakdown articles written by agency mentors covering Performance Marketing ROAS, Technical SEO, and Web Conversion Hacks.</p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-[#F8FAFC] mb-6 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-[#14B8A6]" />
            <span>Frequently Asked Questions</span>
          </h2>
          <div className="space-y-4">
            {lab.faqList.map((faq, idx) => (
              <div key={idx} className="card-flat p-6 space-y-2">
                <h3 className="text-base font-bold text-[#F8FAFC]">{faq.q}</h3>
                <p className="text-base text-[#CBD5E1] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
