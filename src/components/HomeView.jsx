import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowDownRight,
  ArrowRight,
  ChefHat,
  MousePointer2,
  TrendingUp,
} from 'lucide-react';
import { Magnetic } from './Magnetic.jsx';

const ease = [0.22, 1, 0.36, 1];

const ventures = [
  {
    id: 'academy',
    number: '01',
    title: 'Entrain Academy',
    label: 'Culinary education',
    copy: 'A commercial culinary academy built around real kitchens, real service, and careers that travel.',
    image: '/images/academy-kitchen-hero.png',
    icon: ChefHat,
  },
  {
    id: 'lab',
    number: '02',
    title: 'Entrain Lab',
    label: 'Digital education',
    copy: 'Practical learning in marketing, design, development, content, and the skills modern teams need.',
    image: '/images/labs1.jpg',
    icon: MousePointer2,
  },
  {
    id: 'growth-lab',
    number: '03',
    title: 'Growth Lab',
    label: 'Organic growth',
    copy: 'A strategy-led growth partner helping ambitious businesses earn attention and build momentum.',
    image: '/images/growth-lab-team.png',
    icon: TrendingUp,
  },
];

const reveal = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease } },
};

function Reveal({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.75, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/** Masked line reveal — text slides up out of an overflow-hidden band. */
function LineReveal({ children, delay = 0, mount = false, className = '' }) {
  const motionProps = mount
    ? { initial: { y: '100%' }, animate: { y: '0%' } }
    : { initial: { y: '100%' }, whileInView: { y: '0%' }, viewport: { once: true, amount: 0.4 } };

  return (
    <span className={`line-mask ${className}`}>
      <motion.span
        className="line-mask-inner"
        {...motionProps}
        transition={{ duration: 0.95, delay, ease }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export const HomeView = ({ onNavigate }) => {
  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const mediaY = useTransform(heroProgress, [0, 1], ['0%', '16%']);

  const { scrollYProgress: pageProgress } = useScroll();

  return (
    <div className="studio-home">
      <motion.div className="studio-progress" style={{ scaleX: pageProgress }} />

      <section className="studio-hero" ref={heroRef}>
        <div className="studio-hero-bg" aria-hidden="true">
          <motion.img
            src="/images/culinaryimg1.jpg"
            alt="Learners developing practical culinary skills"
            className="studio-hero-bg-img"
            style={{ y: mediaY, scale: 1.15 }}
          />
          <div className="studio-hero-bg-shade" />
          <div className="studio-flow">
            <motion.span
              className="studio-flow-blob blob-a"
              animate={{ x: [0, 60, -30, 0], y: [0, -40, 30, 0], scale: [1, 1.12, 0.94, 1] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.span
              className="studio-flow-blob blob-b"
              animate={{ x: [0, -50, 40, 0], y: [0, 30, -20, 0], scale: [1, 0.9, 1.15, 1] }}
              transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.span
              className="studio-flow-blob blob-c"
              animate={{ x: [0, 30, -50, 0], y: [0, -25, 15, 0], scale: [1, 1.1, 0.95, 1] }}
              transition={{ duration: 27, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
          <div className="studio-grain" />
        </div>

        <motion.div
          className="studio-hero-center"
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.div variants={reveal} className="studio-pill">
            <span className="studio-pill-dot" />
            Independent learning ecosystem <span className="studio-pill-sep">·</span> Kerala, India
          </motion.div>

          <h1 className="studio-hero-h1-center">
            <LineReveal mount delay={0.14}>We turn ambition</LineReveal>
            <LineReveal mount delay={0.24}>into <em>capability.</em></LineReveal>
          </h1>

          <motion.p variants={reveal} className="studio-hero-lead">
            Entrain brings practical education and strategic growth together
            under one roof—so people and businesses can move forward with confidence.
          </motion.p>

          <motion.div variants={reveal}>
            <Magnetic as="a" href="#our-world" className="studio-cta-btn" strength={0.4} range={50}>
              Discover our world <ArrowDownRight />
            </Magnetic>
          </motion.div>

          <motion.div className="studio-orbit-wrap" variants={reveal}>
            <motion.div
              className="studio-orbit"
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
              aria-hidden="true"
            >
              <span>ENTRAIN · EDU HUB · LEARN · BUILD · GROW · </span>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="studio-hero-caption">
          <span>Learning, made real</span>
          <span>Est. in Kerala</span>
        </div>
      </section>

      <section className="studio-intro" id="our-world">
        <Reveal className="studio-section-index">
          <span>01</span>
          <p>What we believe</p>
        </Reveal>
        <Reveal className="studio-intro-copy" delay={0.08}>
          <p>
            Education should not sit still. It should meet the world as it is,
            build skills that matter, and create momentum that lasts.
          </p>
        </Reveal>
        <Reveal className="studio-intro-aside" delay={0.14}>
          <p>
            We connect learners, mentors, founders, and teams in one practical
            ecosystem shaped by doing—not just knowing.
          </p>
          <Magnetic as="button" onClick={() => onNavigate('about')} strength={0.4} range={40}>
            Our approach <ArrowRight />
          </Magnetic>
        </Reveal>
      </section>

      <section className="studio-ventures">
        <div className="studio-ventures-head">
          <Reveal className="studio-section-index">
            <span>02</span>
            <p>Our ventures</p>
          </Reveal>
          <h2>
            <LineReveal>Three paths.</LineReveal>
            <LineReveal delay={0.08}><em>One direction.</em></LineReveal>
          </h2>
        </div>

        <div className="studio-project-list">
          {ventures.map((venture, index) => {
            const Icon = venture.icon;
            return (
              <motion.button
                key={venture.id}
                className="studio-project"
                onClick={() => onNavigate(venture.id)}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.08, ease }}
              >
                <div className="studio-project-media">
                  <img src={venture.image} alt="" />
                  <span><Icon /></span>
                </div>
                <div className="studio-project-meta">
                  <span>{venture.number} / {venture.label}</span>
                  <ArrowDownRight />
                </div>
                <h3>{venture.title}</h3>
                <p>{venture.copy}</p>
              </motion.button>
            );
          })}
        </div>
      </section>

      <section className="studio-statement">
        <div className="studio-statement-glow" aria-hidden="true" />
        <div className="studio-statement-track" aria-hidden="true">
          <span>LEARN · BUILD · GROW · LEARN · BUILD · GROW ·</span>
          <span>LEARN · BUILD · GROW · LEARN · BUILD · GROW ·</span>
        </div>
        <Reveal>
          <p>Our measure of progress</p>
          <blockquote>
            <LineReveal>Not what you know.</LineReveal>
            <LineReveal delay={0.08}><em>What you can do next.</em></LineReveal>
          </blockquote>
        </Reveal>
      </section>

      <section className="studio-method">
        <Reveal className="studio-section-index">
          <span>03</span>
          <p>How we work</p>
        </Reveal>
        <div className="studio-method-grid">
          {[
            ['01', 'Learn by doing', 'Practice, feedback, and useful outcomes are built into every experience.'],
            ['02', 'Stay close to industry', 'Our curriculum and strategy evolve with the people doing the work.'],
            ['03', 'Grow together', 'Learners, mentors, founders, and teams strengthen one connected community.'],
          ].map(([number, title, copy], index) => (
            <Reveal key={title} className="studio-method-card" delay={index * 0.08}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="studio-contact">
        <div className="studio-contact-glow" aria-hidden="true" />
        <Reveal>
          <p>Have an ambition worth building?</p>
          <h2>
            <LineReveal>Let’s make it</LineReveal>
            <LineReveal delay={0.08}><em>move.</em></LineReveal>
          </h2>
          <Magnetic as="button" onClick={() => onNavigate('contact')} strength={0.35} range={50}>
            Start a conversation <ArrowRight />
          </Magnetic>
        </Reveal>
      </section>
    </div>
  );
};
