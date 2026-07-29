import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Check,
  Globe2,
  GraduationCap,
  Laptop,
  Megaphone,
  MousePointerClick,
  Target,
  Users,
} from 'lucide-react';

const outcomes = [
  { icon: Megaphone, title: 'Master modern marketing', text: 'SEO, social media, Google Ads and Meta Ads.' },
  { icon: MousePointerClick, title: 'Run performance campaigns', text: 'Build, track and optimize paid campaigns across platforms.' },
  { icon: BriefcaseBusiness, title: 'Work inside an agency', text: 'Manage live campaigns during a guaranteed internship.' },
  { icon: GraduationCap, title: 'Leave with proof', text: 'Build an agency-ready portfolio for jobs or clients.' },
];

const Reveal = ({ children, className = '', delay = 0 }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 30, filter: 'blur(7px)' }}
    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    viewport={{ once: true, margin: '-70px' }}
    transition={{ duration: .72, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export const LabView = ({ onNavigate }) => {
  const contact = () => {
    onNavigate('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="labs-page">
      <section className="labs-hero">
        <div className="labs-grid-bg" />
        <motion.div
          className="labs-orb labs-orb-one"
          animate={{ x: [0, 50, 0], y: [0, 25, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="labs-shell labs-hero-grid">
          <div className="labs-hero-copy">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .8, delay: .12, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="labs-hero-line">Learn it.</span>
              <span className="labs-hero-brand-line">
                <span className="labs-inline-logo">
                  <img src="/images/logolab-trimmed.png" alt="Entrain Labs" />
                </span>
                <i>Run it.</i>
              </span>
              <span className="labs-hero-outline">Prove it.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .24 }}
            >
              Practical digital marketing education built around real projects,
              industry tools and career-ready skills.
            </motion.p>
            <motion.div
              className="labs-hero-actions"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .34 }}
            >
              <button onClick={contact}>Enquire now <ArrowRight size={17} /></button>
            </motion.div>
          </div>

        </div>
      </section>

      <section className="labs-outcomes">
        <div className="labs-shell">
          <Reveal className="labs-section-heading">
            <span>What this program is for</span>
            <h2>Go from knowing the tools<br />to doing the work.</h2>
          </Reveal>
          <div className="labs-outcome-grid">
            {outcomes.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * .09 }}
                whileHover={{ y: -8 }}
              >
                <span>0{index + 1}</span>
                <item.icon size={24} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="labs-modes">
        <div className="labs-shell">
          <Reveal className="labs-section-heading">
            <span>Choose your learning mode</span>
            <h2>Same outcome.<br />Your preferred environment.</h2>
          </Reveal>
          <div className="labs-mode-grid">
            <motion.article whileHover={{ y: -8 }} transition={{ duration: .25 }}>
              <div><Users size={25} /><span>01</span></div>
              <h3>Offline Classroom</h3>
              <p>Classroom-based learning with direct interaction, practical sessions and expert mentoring.</p>
              <ul><li><Check size={14} />Live instructor</li><li><Check size={14} />Practical sessions</li><li><Check size={14} />Weekly reviews</li><li><Check size={14} />Networking & certificate</li></ul>
              <button onClick={contact}>Join offline batch <ArrowRight size={15} /></button>
            </motion.article>
            <motion.article whileHover={{ y: -8 }} transition={{ duration: .25 }}>
              <div><Laptop size={25} /><span>02</span></div>
              <h3>Online Learning</h3>
              <p>Attend from anywhere with live sessions, recorded videos and continuous mentor support.</p>
              <ul><li><Check size={14} />Live & recorded classes</li><li><Check size={14} />Flexible schedule</li><li><Check size={14} />Practical learning</li><li><Check size={14} />Community support & certificate</li></ul>
              <button onClick={contact}>Explore online plans <ArrowRight size={15} /></button>
            </motion.article>
          </div>
        </div>
      </section>

      <section className="labs-final">
        <div className="labs-shell">
          <motion.div
            className="labs-final-card"
            initial={{ opacity: 0, scale: .97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <div><MousePointerClick size={26} /></div>
            <span>Ready to build real skills?</span>
            <h2>Turn 24 weeks into<br />your next career move.</h2>
            <p>Speak with the Entrain Labs team about the curriculum, upcoming cohort and learning mode.</p>
            <button onClick={contact}>Get program details <ArrowRight size={18} /></button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
