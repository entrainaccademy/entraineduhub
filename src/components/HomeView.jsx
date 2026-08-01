import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ContactView } from './ContactView.jsx';

const CorporateBuildingSketch = () => (
  <motion.svg
    className="home-corporate-building"
    viewBox="0 0 760 540"
    fill="none"
    aria-hidden="true"
    initial={{ opacity: 0, y: 120, scale: .72 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: .35 }}
    transition={{ type: 'spring', stiffness: 95, damping: 13, mass: .9 }}
  >
    <motion.path initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ delay: .12, duration: .72, ease: [0.22, 1, 0.36, 1] }} style={{ transformOrigin: 'center bottom' }} d="M71 452L98 191L322 126V452M322 452V69L470 35L558 83V452M558 452V190L706 166V452M470 35V419L558 452M98 191L322 213M71 452L322 452L470 419L558 452L706 452" />
    <motion.path initial={{ opacity: 0, scale: .78 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: .42, duration: .62 }} style={{ transformOrigin: 'center bottom' }} d="M119 215L301 163V390L91 425M136 222L127 410M164 210L157 406M192 202L187 402M220 193L217 398M248 185L247 394M276 176L277 390M339 105L453 79V389L339 414V105ZM558 219L687 198V403L558 419V219Z" />
    <motion.path initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: .66, duration: .58 }} d="M339 151L453 127M339 199L453 177M339 247L453 226M339 295L453 276M339 343L453 326M582 215V416M610 210V412M638 205V409M666 201V405M558 267L687 248M558 319L687 299M558 371L687 351M98 273L301 222M87 337L301 281" />
    <motion.path initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .82, duration: .52 }} d="M523 452V392H649V452M510 392H668L687 410H528L510 392ZM48 452H722M82 452L55 495H713L690 452M343 414V452M425 395V428" />
    <motion.text x="396" y="102" textAnchor="middle" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .95, duration: .55 }}>ENTRAIN EDUHUB</motion.text>
    <motion.text className="home-building-legal" x="396" y="120" textAnchor="middle" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.05, duration: .45 }}>PRIVATE LIMITED</motion.text>
  </motion.svg>
);

const COMPANY_INFO = {
  tagline: 'Real Experience. Real Skills. Real Growth.',
  overview: 'Entrain EduHub is the foundation of ventures that bridge real-world experience with practical education, helping individuals and businesses learn, grow, and succeed..',
  details: 'From culinary training to digital marketing education to organic growth strategy, Entrain EduHub equips learners and businesses with practical, industry-ready skills.',
  foundedYear: '🔲 [Year]',
  location: '🔲 [Location]',
};

const MISSION = {
  statement: 'We exist to turn learning into doing. We equip aspiring entrepreneurs and professionals with hands-on skills in food, digital marketing, and business growth that actually hold up in the real world',
};

const companies = [
  {
    name: 'Entrain Academy',
    category: 'Culinary Academy',
    description: 'A commercial culinary training academy offering hands-on courses for aspiring chefs, food entrepreneurs, and hospitality professionals in India and abroad.',
    logo: '/images/academy-logo-trimmed.png',
    logoClass: 'home-company-logo academy',
    cta: 'Explore Entrain Academy',
    url: 'https://www.entraincullinaryschool.com/',
  },
  {
    name: 'Entrain Lab',
    category: 'Digital Marketing Academy',
    description: 'A digital marketing academy in Kerala offering practical courses in Performance Marketing, Web Development, SEO, Content Creation, and Social Media Marketing.',
    logo: '/images/logolab-trimmed.png',
    logoClass: 'home-company-logo lab',
    cta: 'Explore Entrain Lab',
    url: 'https://www.theentrainlabs.com/',
  },
  {
    name: 'Entrain Growth Lab',
    category: 'Coming Soon',
    description: 'A digital marketing agency focused purely on organic growth, helping businesses build sustainable reach without depending on paid advertising.',
    logoClass: 'home-company-wordmark',
    cta: 'Coming Soon / Learn More',
    view: 'growth-lab',
  },
];

const Reveal = ({ children, className = '', delay = 0 }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

const PixelBlock = ({ progress, index }) => {
  const row = Math.floor(index / 8);
  const column = index % 8;
  const wave = ((row * 3 + column * 5) % 11) / 100;
  const start = .04 + row * .055 + wave;
  const end = Math.min(start + .28, .92);
  const scaleX = useTransform(progress, [start, end], [1, 0]);
  const opacity = useTransform(progress, [start, end - .03, end], [1, 1, 0]);

  return <motion.i style={{ scaleX, opacity, transformOrigin: column % 2 ? 'right' : 'left' }} />;
};

export const HomeView = ({ onNavigate }) => {
  const aboutRef = useRef(null);
  const { scrollYProgress: aboutProgress } = useScroll({
    target: aboutRef,
    offset: ['start end', 'start 28%'],
  });

  return (
  <div className="home-academy-page">
    <section className="home-academy-hero home-illuminated-hero">
      <div className="home-reference-glow" aria-hidden="true" />
      <div className="home-reference-frame">
        <motion.div className="home-reference-main" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .85 }}>
          <h1>Real Experience.<br /><span>Real Skills. Real Growth.</span></h1>
          <p>{COMPANY_INFO.tagline} {COMPANY_INFO.overview}</p>
          <div className="home-academy-actions">
            <a href="#companies">Explore Our Companies <ArrowRight size={17} /></a>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Contact Us</button>
          </div>
        </motion.div>
      </div>
    </section>

    <section id="about-summary" className="home-academy-about" ref={aboutRef}>
      <div className="home-pixel-curtain" aria-hidden="true">
        {Array.from({ length: 48 }, (_, index) => (
          <PixelBlock key={index} progress={aboutProgress} index={index} />
        ))}
      </div>
      <div className="home-academy-shell home-about-grid">
        <Reveal className="home-about-copy">
          <h2>About Entrain EduHub</h2>
          <p>{COMPANY_INFO.overview}</p>
          <p>{COMPANY_INFO.details}</p>
          <button onClick={() => onNavigate('about')}>Read Full Story &amp; Mission <ArrowRight size={16} /></button>
        </Reveal>
        <Reveal className="home-about-sketch" delay={.12}><CorporateBuildingSketch /></Reveal>
      </div>
    </section>

    <section id="companies" className="home-companies">
      <div className="home-academy-shell">
        <Reveal className="home-companies-heading">
          <h2>Our Operating Companies</h2>
          <p>Each venture under Entrain EduHub serves a specialized focus across food arts, digital marketing, and organic business growth.</p>
        </Reveal>
        <div className="home-company-grid">
          {companies.map((company, index) => (
            <motion.article
              key={company.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: .6, delay: index * .1 }}
              whileHover={{ y: -9 }}
            >
              <div>
                <div className="home-company-brand">
                  {company.logo
                    ? <img src={company.logo} alt={`${company.name} logo`} className={company.logoClass} />
                    : <div className={company.logoClass} aria-label="Entrain Growth Lab logo"><i>ENTRAIN</i><b>GROWTH LAB</b></div>}
                </div>
                <span className="home-company-category">{company.category}</span>
                <h3>{company.name}</h3>
                <p>{company.description}</p>
              </div>
              {company.url ? (
                <a className="home-company-link" href={company.url}>
                  {company.cta} <ArrowRight size={16} />
                </a>
              ) : (
                <button onClick={() => onNavigate(company.view)}>{company.cta} <ArrowRight size={16} /></button>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>

    <ContactView />

    <section className="home-mission">
      <div className="home-academy-shell">
        <Reveal>
          <blockquote>&ldquo;{MISSION.statement}&rdquo;</blockquote>
        </Reveal>
      </div>
    </section>
  </div>
  );
};
