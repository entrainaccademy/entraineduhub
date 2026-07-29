import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ShieldCheck, TrendingUp, Code, GraduationCap, Sparkles, ChevronDown } from 'lucide-react';
/* ─── Subsidiary Data (self-contained) ─────────────────────────── */
const SUBSIDIARIES = [
  {
    id: "growth-labs",
    name: "Entrain Growth Labs",
    shortName: "Growth Labs",
    tagline: "Full-Funnel Digital Marketing & Brand Acceleration",
    categoryBadge: "Digital Growth & Media",
    iconName: "TrendingUp",
  },
  {
    id: "labs",
    name: "Entrain Labs",
    shortName: "Labs",
    tagline: "Custom Software Engineering & Artificial Intelligence Solutions",
    categoryBadge: "Software & AI Solutions",
    iconName: "Code",
  },
  {
    id: "academy",
    name: "Entrain Academy",
    shortName: "Academy",
    tagline: "Industry-Aligned Training, Software & AI Career Acceleration",
    categoryBadge: "Education & Upskilling",
    iconName: "GraduationCap",
  },
];

/* ─── Animated Stat Counter ─────────────────────────────────────── */
const StatCounter = ({ end, suffix, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const duration = 1800;
        const step = Math.ceil(end / (duration / 16));
        const timer = setInterval(() => {
          start = Math.min(start + step, end);
          setCount(start);
          if (start >= end) clearInterval(timer);
        }, 16);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-center">
      <div className="stat-number text-2xl sm:text-3xl font-extrabold text-white">
        {count}{suffix}
      </div>
      <div className="stat-label text-[10px] uppercase tracking-widest font-semibold mt-1" style={{ color: 'rgba(255,255,255,0.45)' }}>{label}</div>
    </div>
  );
};

/* ─── Main Hero Component ────────────────────────────────────────── */
export const Hero = ({ onSelectBrand, onOpenContact }) => {
  const getBrandIcon = (iconName) => {
    const cls = "w-5 h-5 text-[#3B82F6] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3";
    switch (iconName) {
      case 'TrendingUp': return <TrendingUp className={cls} />;
      case 'Code':       return <Code className={cls} />;
      case 'GraduationCap': return <GraduationCap className={cls} />;
      default:           return <Sparkles className={cls} />;
    }
  };

  return (
    <section className="hero-section relative pt-36 pb-24 md:pt-48 md:pb-36 overflow-hidden select-none"
      style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 20%, #0B1330 0%, #060A16 45%, #030509 100%)',
        fontFamily: "'Outfit', sans-serif",
      }}
    >
      {/* ── Keyframes & Styles ───────────────────────────────────── */}
      <style>{`
        /* ── Outfit font scoped to hero ── */
        .hero-section, .hero-section * {
          font-family: 'Outfit', sans-serif !important;
        }

        /* ── Blue radial glow background ── */
        .hero-bg-glow {
          position: absolute;
          top: -10%;
          left: 50%;
          transform: translateX(-50%);
          width: 900px;
          height: 700px;
          border-radius: 50%;
          background: radial-gradient(
            ellipse at center,
            rgba(37, 99, 235, 0.18) 0%,
            rgba(59, 130, 246, 0.10) 35%,
            transparent 70%
          );
          pointer-events: none;
          z-index: 0;
          filter: blur(40px);
        }

        /* ── Secondary blue glow ── */
        .hero-bg-teal-glow {
          position: absolute;
          top: 30%;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(
            ellipse at center,
            rgba(37, 99, 235, 0.10) 0%,
            transparent 70%
          );
          pointer-events: none;
          z-index: 0;
          filter: blur(60px);
        }

        /* ── Drifting Grid ── */
        .drifting-grid {
          background-image:
            linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 40px 40px;
          animation: driftGrid 25s linear infinite;
        }
        @keyframes driftGrid {
          0%   { background-position: 0 0; }
          100% { background-position: 40px 40px; }
        }

        /* ── Floating Particles ── */
        .particle {
          position: absolute;
          border-radius: 50%;
          background: rgba(59, 130, 246, 0.5);
          animation: particleFloat var(--dur, 8s) ease-in-out infinite alternate;
        }
        @keyframes particleFloat {
          0%   { transform: translate(0, 0) scale(1);    opacity: 0.15; }
          50%  { opacity: 0.6; }
          100% { transform: translate(var(--tx,20px), var(--ty,-30px)) scale(1.5); opacity: 0.15; }
        }

        /* ── Orb Floats ── */
        .orb-1 { animation: floatOrb1 11s ease-in-out infinite alternate; }
        .orb-2 { animation: floatOrb2 13s ease-in-out infinite alternate; }
        @keyframes floatOrb1 {
          0%   { transform: translate(0, 0) scale(1.00); }
          100% { transform: translate(30px,-20px) scale(1.08); }
        }
        @keyframes floatOrb2 {
          0%   { transform: translate(0, 0) scale(1.00); }
          100% { transform: translate(-25px, 20px) scale(1.06); }
        }

        /* ── Staggered Fade-Up Entrance ── */
        .fade-up {
          opacity: 0;
          transform: translateY(28px);
          animation: fadeInUp 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fadeInUp {
          to { opacity: 1; transform: translateY(0); }
        }
        .d1  { animation-delay: 0.10s; }
        .d2  { animation-delay: 0.28s; }
        .d3  { animation-delay: 0.46s; }
        .d4  { animation-delay: 0.64s; }
        .d5  { animation-delay: 0.82s; }
        .d6  { animation-delay: 1.00s; }
        .dc0 { animation-delay: 1.10s; }
        .dc1 { animation-delay: 1.25s; }
        .dc2 { animation-delay: 1.40s; }

        /* ── Top Badge ── */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 6px 8px 6px 14px;
          border-radius: 9999px;
          background: rgba(11, 19, 48, 0.70);
          border: 1px solid rgba(59, 130, 246, 0.25);
          box-shadow: 0 0 18px rgba(37, 99, 235, 0.12), inset 0 1px 0 rgba(255,255,255,0.06);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        .hero-badge-icon {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: linear-gradient(135deg, #2563EB, #3B82F6);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 2px 10px rgba(59,130,246,0.40);
          animation: badgePulse 3s ease-in-out infinite alternate;
        }
        @keyframes badgePulse {
          0%   { box-shadow: 0 2px 10px rgba(59,130,246,0.30); }
          100% { box-shadow: 0 2px 18px rgba(59,130,246,0.60); }
        }

        /* ── Gradient Shimmer Text ── */
        .shimmer-text {
          background: linear-gradient(110deg, #60A5FA 0%, #3B82F6 25%, #FFFFFF 50%, #60A5FA 75%, #3B82F6 100%);
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: shimmerSweep 6s linear infinite;
        }
        @keyframes shimmerSweep {
          0%   { background-position: 0% center; }
          100% { background-position: 200% center; }
        }

        /* ── CTA Buttons ── */
        .hero-cta-btn {
          position: relative;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 13px 28px;
          border-radius: 9999px;
          border: none;
          cursor: pointer;
          font-family: 'Outfit', sans-serif !important;
          font-size: 14px;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.01em;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          white-space: nowrap;
        }
        .hero-cta-btn-primary {
          background: linear-gradient(135deg, #1D4ED8, #2563EB, #3B82F6);
          box-shadow: 0 4px 20px rgba(37, 99, 235, 0.40);
        }
        .hero-cta-btn-primary::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%);
          background-size: 200% 100%;
          background-position: 200% 0;
          transition: background-position 0.55s ease;
          border-radius: inherit;
        }
        .hero-cta-btn-primary:hover::after { background-position: -100% 0; }
        .hero-cta-btn-primary:hover {
          transform: scale(1.045) translateY(-1px);
          box-shadow: 0 8px 32px rgba(37, 99, 235, 0.60);
        }

        .hero-cta-btn-secondary {
          background: #111827;
          border: 1px solid rgba(59, 130, 246, 0.35);
          box-shadow: 0 0 0 0 transparent;
        }
        .hero-cta-btn-secondary:hover {
          transform: scale(1.045) translateY(-1px);
          border-color: rgba(79, 125, 255, 0.65);
          box-shadow: 0 0 20px rgba(37, 99, 235, 0.25);
        }

        /* ── Stats ── */
        .stat-number { font-weight: 800; letter-spacing: -0.03em; }
        .stats-divider {
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(59, 130, 246, 0.40), transparent);
        }

        /* ── Subsidiary Card Hover ── */
        .sub-card {
          transition: all 0.38s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .sub-card:hover {
          transform: translateY(-6px) scale(1.01);
          border-color: rgba(59, 130, 246, 0.35);
          box-shadow:
            0 16px 40px -12px rgba(37, 99, 235, 0.30),
            0 0 0 1px rgba(59, 130, 246, 0.10),
            0 0 20px rgba(37, 99, 235, 0.06);
        }

        /* ── Reduced Motion ── */
        @media (prefers-reduced-motion: reduce) {
          .shimmer-text, .orb-1, .orb-2,
          .drifting-grid, .particle, .fade-up,
          .hero-cta-btn-primary::after {
            animation: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
          .hero-cta-btn:hover, .sub-card:hover {
            transform: none !important;
          }
        }

        /* ── Responsive Heading ── */
        @media (max-width: 640px) {
          .hero-heading { font-size: 2rem !important; }
          .hero-cta-row { flex-direction: column; width: 100%; }
          .hero-cta-btn { width: 100% !important; }
        }
      `}</style>

      {/* ── ANIMATED BACKGROUND (z-0) ───────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Blue radial glow — main */}
        <div className="hero-bg-glow" />
        {/* Teal secondary glow */}
        <div className="hero-bg-teal-glow" />

        {/* Floating blue orbs */}
        <div className="orb-1 absolute top-1/4 left-[15%] w-[360px] h-[360px] rounded-full"
          style={{ background: 'rgba(37,99,235,0.08)', filter: 'blur(90px)' }} />
        <div className="orb-2 absolute bottom-1/4 right-[10%] w-[300px] h-[300px] rounded-full"
          style={{ background: 'rgba(59,130,246,0.07)', filter: 'blur(80px)' }} />

        {/* Drifting Grid */}
        <div className="drifting-grid absolute inset-0 opacity-100" />

        {/* Floating Particles */}
        {[
          { left: '15%', top: '20%', dur: '9s',  tx: '30px',  ty: '-40px' },
          { left: '80%', top: '35%', dur: '11s', tx: '-20px', ty: '-50px' },
          { left: '60%', top: '70%', dur: '7s',  tx: '25px',  ty: '-30px' },
          { left: '30%', top: '80%', dur: '13s', tx: '-35px', ty: '-45px' },
          { left: '92%', top: '15%', dur: '8s',  tx: '-15px', ty: '30px'  },
          { left: '5%',  top: '60%', dur: '10s', tx: '40px',  ty: '-20px' },
          { left: '50%', top: '10%', dur: '12s', tx: '20px',  ty: '40px'  },
          { left: '70%', top: '85%', dur: '6s',  tx: '-30px', ty: '-35px' },
        ].map((p, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: p.left, top: p.top,
              '--dur': p.dur, '--tx': p.tx, '--ty': p.ty,
              animationDelay: `${i * 0.7}s`,
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
            }}
          />
        ))}
      </div>

      {/* ── MAIN CONTENT (z-10) ─────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">

        {/* 1 ▸ STATUS BADGE */}
        <div className="fade-up d1 mb-8">
          <div className="hero-badge">
            <ShieldCheck style={{ width: '15px', height: '15px', color: 'rgba(255,255,255,0.60)', flexShrink: 0 }} />
            <span style={{
              fontSize: '11px',
              fontWeight: 600,
              color: 'rgba(255,255,255,0.85)',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}>
              Parent Corporate Holding Entity
            </span>
            {/* Small blue circle with chevron — decorative, no label change */}
            <div className="hero-badge-icon">
              <ChevronDown style={{ width: '14px', height: '14px', color: '#ffffff' }} />
            </div>
          </div>
        </div>

        {/* 2 ▸ HEADLINE */}
        <div className="text-center max-w-4xl mx-auto space-y-2">
          <h1
            className="fade-up d2 hero-heading tracking-tight leading-[1.12]"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.75rem)',
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: '-0.03em',
            }}
          >
            Architecting the Ecosystem for
          </h1>
          <div
            className="fade-up d3 hero-heading tracking-tight leading-[1.12]"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.75rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
            }}
          >
            <span className="shimmer-text block py-1">
              Technology, Growth &amp; Education
            </span>
          </div>
        </div>

        {/* 3 ▸ SUBHEAD */}
        <p
          className="fade-up d4 mt-7 max-w-2xl text-center leading-relaxed"
          style={{
            fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
            fontWeight: 400,
            color: 'rgba(255,255,255,0.60)',
          }}
        >
          <strong style={{ color: '#FFFFFF', fontWeight: 700 }}>Entrain Edu Hub</strong>{' '}
          drives innovation across digital marketing, custom software engineering, and tech workforce training through three independent subsidiaries.
        </p>

        {/* 4 ▸ CTAs */}
        <div
          className="fade-up d5 hero-cta-row mt-10 flex flex-row flex-wrap items-center justify-center gap-4"
        >
          {/* Primary CTA — "Explore Subsidiaries" (text unchanged) */}
          <a
            href="#brands"
            className="hero-cta-btn hero-cta-btn-primary"
          >
            <span>Explore Subsidiaries</span>
            <ArrowRight style={{ width: '16px', height: '16px', color: '#ffffff' }} />
          </a>

          {/* Secondary CTA — "Partner Consultation" (text unchanged) */}
          <button
            onClick={onOpenContact}
            className="hero-cta-btn hero-cta-btn-secondary"
          >
            <Sparkles style={{ width: '15px', height: '15px', color: 'rgba(255,255,255,0.85)' }} />
            <span>Partner Consultation</span>
          </button>
        </div>

        {/* 5 ▸ ANIMATED STATS ROW */}
        <div className="fade-up d6 mt-14 w-full max-w-3xl">
          <div className="stats-divider mb-8" />
          <div className="grid grid-cols-3 gap-8 text-center">
            <StatCounter end={3}    suffix="+"  label="Operating Entities" />
            <StatCounter end={500}  suffix="+"  label="Students & Clients" />
            <StatCounter end={100}  suffix="%"  label="Industry Focused" />
          </div>
          <div className="stats-divider mt-8" />
        </div>

        {/* 6 ▸ SUBSIDIARY CARDS */}
        <div className="w-full max-w-5xl mt-14 fade-up d6">
          <p
            className="text-center text-xs uppercase tracking-widest font-bold mb-8"
            style={{ color: 'rgba(255,255,255,0.40)' }}
          >
            Specialized Subsidiaries Governed by Entrain Edu Hub
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {SUBSIDIARIES.map((brand, idx) => (
              <div
                key={brand.id}
                onClick={() => onSelectBrand(brand)}
                className={`sub-card fade-up dc${idx} cursor-pointer p-5 rounded-2xl flex items-center gap-4 group`}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.09)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                }}
              >
                {/* Icon Tile */}
                <div
                  className="p-3 rounded-xl flex-shrink-0 transition-colors group-hover:border-blue-400/40"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    transition: 'border-color 0.25s ease',
                  }}
                >
                  {getBrandIcon(brand.iconName)}
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <h3
                    className="text-sm font-bold truncate transition-colors"
                    style={{ color: '#FFFFFF' }}
                  >
                    {brand.name}
                  </h3>
                  <p
                    className="text-[11px] font-medium truncate mt-0.5"
                    style={{ color: 'rgba(255,255,255,0.45)' }}
                  >
                    {brand.categoryBadge}
                  </p>
                </div>

                {/* Arrow nudge */}
                <ArrowRight
                  style={{ width: '14px', height: '14px', color: 'rgba(255,255,255,0.30)', flexShrink: 0, transition: 'all 0.2s ease' }}
                  className="group-hover:text-blue-400 group-hover:translate-x-1"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
