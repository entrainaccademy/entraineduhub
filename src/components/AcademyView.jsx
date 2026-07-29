import React from 'react';
import { UtensilsCrossed, CheckCircle2, UserCheck, Clock, Award, DollarSign, ArrowRight } from 'lucide-react';

const ACADEMY = {
  id: "academy",
  name: "Entrain Academy",
  badge: "Commercial Culinary Academy",
  tagline: "Learn from real experience. Gain practical skills. Make confident career and business decisions.",
  overview: "Entrain Academy is a commercial culinary training academy under Entrain EduHub, offering practical, industry-focused culinary education for aspiring chefs, food entrepreneurs, business owners, and hospitality professionals. Students receive hands-on training using modern equipment, industry-standard techniques, experienced mentors, and placement support.",
  targetAudience: [
    "Aspiring chefs",
    "Culinary professionals",
    "Food entrepreneurs",
    "Hospitality professionals",
    "Individuals seeking careers abroad"
  ],
  whyChoose: [
    { title: "Real Industry Experience", desc: "Curriculum built from real-world food business operations." },
    { title: "Practical Learning", desc: "Hands-on practice in professional kitchen environments." },
    { title: "Modern Equipment", desc: "Train with commercial-grade culinary infrastructure." },
    { title: "Experienced Mentors", desc: "Direct guidance from seasoned chefs and business owners." },
    { title: "Placement Support", desc: "Career acceleration and domestic & international placement assistance." },
    { title: "Business-Focused Training", desc: "Learn food costing, recipe standardization, and bakery management." }
  ],
  courses: [
    {
      title: "Commercial Culinary & Bakery Arts",
      duration: "🔲 [Duration]",
      fees: "🔲 [Fees]",
      certification: "🔲 [Certification]",
      description: "Hands-on professional culinary and baking techniques for commercial kitchens."
    },
    {
      title: "Food Business Entrepreneurship",
      duration: "🔲 [Duration]",
      fees: "🔲 [Fees]",
      certification: "🔲 [Certification]",
      description: "Comprehensive training on kitchen operations, food safety, inventory, and business launch."
    },
    {
      title: "Hospitality & International Culinary Career Program",
      duration: "🔲 [Duration]",
      fees: "🔲 [Fees]",
      certification: "🔲 [Certification]",
      description: "Specialized training tailored for global culinary placements and career mobility."
    }
  ]
};

const OUR_STORY_TIMELINE = [
  {
    year: "2014",
    title: "Leaving Degree Studies",
    description: "The founder left degree studies to support the family bakery business."
  },
  {
    year: "Years of Experience",
    title: "Hands-on Mastery",
    description: "Immersive learning in food production, bakery operations, customer service, and business management."
  },
  {
    year: "Overcoming Challenges",
    title: "Resilience Through Adversity",
    description: "Navigating major disruptions including floods, COVID-19, and financial difficulties that led to the bakery closing."
  },
  {
    year: "A New Beginning",
    title: "Building Entrain EduHub",
    description: "Turning hard-earned lessons into the foundation of Entrain Academy, later expanding into digital marketing education and organic growth services."
  },
  {
    year: "Today",
    title: "Empowering Next-Gen Leaders",
    description: "Students learn practical culinary skills, business knowledge, and digital strategies to build successful careers and enterprises."
  }
];

export const AcademyView = ({ onNavigate }) => {
  const academy = ACADEMY;

  return (
    <div className="pt-32 pb-20 space-y-20">
      
      {/* Header */}
      <section className="bg-[#0A0A0B] text-center max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171A1D] border border-white/10 text-xs font-medium text-[#14B8A6] mb-4">
          <UtensilsCrossed className="w-3.5 h-3.5" />
          <span>{academy.badge}</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#F8FAFC] tracking-tight leading-tight">
          {academy.name}
        </h1>
        <p className="mt-3 text-base font-semibold text-[#14B8A6] max-w-2xl mx-auto">
          "{academy.tagline}"
        </p>
        <p className="mt-4 text-base text-[#CBD5E1] leading-relaxed max-w-2xl mx-auto">
          {academy.overview}
        </p>
      </section>

      {/* The Story Behind Entrain Academy Timeline */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl font-semibold text-[#F8FAFC] tracking-tight">
            The Story Behind Entrain Academy
          </h2>
          <p className="mt-2 text-base text-[#CBD5E1]">
            Born from real-world bakery experience, overcoming trials, and building genuine expertise.
          </p>
        </div>

        <div className="relative border-l border-white/10 ml-4 sm:ml-28 space-y-8 pl-6 sm:pl-8 max-w-4xl mx-auto">
          {OUR_STORY_TIMELINE.map((item, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#0A0A0B] border-2 border-[#14B8A6]" />
              <div className="sm:absolute sm:-left-32 sm:top-1.5 text-xs font-bold text-[#14B8A6] uppercase tracking-wider mb-1 sm:mb-0">
                {item.year}
              </div>
              <div className="card-flat p-6">
                <h3 className="text-[22px] font-bold text-[#F8FAFC] mb-1">{item.title}</h3>
                <p className="text-base text-[#CBD5E1] leading-relaxed">{item.description}</p>
              </div>
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
            <p className="mt-2 text-base text-[#CBD5E1]">Designed specifically for targeted culinary & hospitality career tracks</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {academy.targetAudience.map((audience, idx) => (
              <div key={idx} className="card-flat p-5 flex items-center gap-3">
                <UserCheck className="w-5 h-5 text-[#14B8A6] shrink-0" />
                <span className="text-base font-medium text-[#F8FAFC]">{audience}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-semibold text-[#F8FAFC] tracking-tight">
            Culinary Courses & Programs
          </h2>
          <p className="mt-2 text-base text-[#CBD5E1]">Hands-on commercial culinary, bakery, and entrepreneurship tracks</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {academy.courses.map((course, idx) => (
            <div key={idx} className="card-flat p-6 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-[22px] font-bold text-[#F8FAFC] mb-2">{course.title}</h3>
                <p className="text-base text-[#CBD5E1] leading-relaxed mb-4">{course.description}</p>
                
                <div className="space-y-2 border-t border-white/5 pt-4 text-sm font-mono text-[#14B8A6]">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-[#CBD5E1]"><Clock className="w-4 h-4 text-[#14B8A6]" /> Duration:</span>
                    <span>{course.duration}</span>
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
                <span>Inquire For Admission</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Entrain Academy */}
      <section className="py-16 bg-[#111315] border-y border-white/5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-semibold text-[#F8FAFC] tracking-tight">
              Why Choose Entrain Academy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academy.whyChoose.map((point, idx) => (
              <div key={idx} className="card-flat p-6 space-y-2">
                <div className="flex items-center gap-2 text-lg font-semibold text-[#F8FAFC]">
                  <CheckCircle2 className="w-5 h-5 text-[#14B8A6]" />
                  <span>{point.title}</span>
                </div>
                <p className="text-base text-[#CBD5E1] leading-relaxed pl-7">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
