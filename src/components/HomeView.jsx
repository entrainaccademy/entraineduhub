import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDownRight,
  ArrowRight,
  ChefHat,
  MousePointer2,
  TrendingUp,
} from 'lucide-react';

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

export const HomeView = ({ onNavigate }) => (
  <div className="studio-home">
    <section className="studio-hero">
      <div className="studio-grain" aria-hidden="true" />
      <motion.div
        className="studio-hero-top"
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.1 }}
      >
        <motion.p variants={reveal} className="studio-overline">
          Independent learning ecosystem <span>Kerala, India</span>
        </motion.p>
        <motion.h1 variants={reveal}>
          We turn ambition<br />
          into <em>capability.</em>
        </motion.h1>
        <motion.div variants={reveal} className="studio-hero-note">
          <p>
            Entrain brings practical education and strategic growth together
            under one roof—so people and businesses can move forward with confidence.
          </p>
          <a href="#our-world">
            Discover our world <ArrowDownRight />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="studio-hero-media"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.35, ease }}
      >
        <img src="/images/culinaryimg1.jpg" alt="Learners developing practical culinary skills" />
        <div className="studio-media-shade" />
        <div className="studio-media-label">
          <span>Learning, made real</span>
          <span>Est. in Kerala</span>
        </div>
        <motion.div
          className="studio-orbit"
          animate={{ rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          aria-hidden="true"
        >
          <span>ENTRAIN · EDU HUB · LEARN · BUILD · GROW · </span>
        </motion.div>
      </motion.div>
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
        <button onClick={() => onNavigate('about')}>
          Our approach <ArrowRight />
        </button>
      </Reveal>
    </section>

    <section className="studio-ventures">
      <div className="studio-ventures-head">
        <Reveal className="studio-section-index">
          <span>02</span>
          <p>Our ventures</p>
        </Reveal>
        <Reveal>
          <h2>Three paths.<br /><em>One direction.</em></h2>
        </Reveal>
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
      <div className="studio-statement-track" aria-hidden="true">
        <span>LEARN · BUILD · GROW · LEARN · BUILD · GROW ·</span>
      </div>
      <Reveal>
        <p>Our measure of progress</p>
        <blockquote>
          Not what you know.<br />
          <em>What you can do next.</em>
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
      <Reveal>
        <p>Have an ambition worth building?</p>
        <h2>Let’s make it<br /><em>move.</em></h2>
        <button onClick={() => onNavigate('contact')}>
          Start a conversation <ArrowRight />
        </button>
      </Reveal>
    </section>
  </div>
);
