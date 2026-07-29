import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  Check,
  Layers3,
  MessageCircle,
  Search,
  Sprout,
  TrendingUp,
} from 'lucide-react';

const focusAreas = [
  {
    number: '01',
    icon: Search,
    title: 'Organic visibility',
    text: 'Build discoverability through search-led strategies that keep working over time.',
  },
  {
    number: '02',
    icon: Layers3,
    title: 'Owned media',
    text: 'Create useful brand assets and content systems your business can truly own.',
  },
  {
    number: '03',
    icon: MessageCircle,
    title: 'Community growth',
    text: 'Turn consistent brand communication into trust, conversation and loyal audiences.',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Sustainable acquisition',
    text: 'Develop long-term customer growth without permanent dependence on ad spend.',
  },
];

const Reveal = ({ children, className = '', delay = 0 }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 32, filter: 'blur(8px)' }}
    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    viewport={{ once: true, margin: '-70px' }}
    transition={{ duration: .75, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export const GrowthLabView = ({ onNavigate }) => {
  const contact = () => {
    onNavigate('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="growth-page">
      <section className="growth-hero">
        <div className="growth-grid" />
        <motion.div
          className="growth-ring growth-ring-one"
          animate={{ rotate: 360, scale: [1, 1.06, 1] }}
          transition={{ rotate: { duration: 28, repeat: Infinity, ease: 'linear' }, scale: { duration: 6, repeat: Infinity } }}
        />
        <motion.div
          className="growth-ring growth-ring-two"
          animate={{ rotate: -360 }}
          transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
        />

        <div className="growth-shell growth-hero-inner">
          <motion.div
            className="growth-wordmark"
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .65 }}
          >
            <span>en</span>
            <div><strong>Entrain</strong><small>Growth Lab</small></div>
          </motion.div>

          <motion.div
            className="growth-status"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .1 }}
          >
            <i /> Coming soon
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .85, delay: .14, ease: [0.22, 1, 0.36, 1] }}
          >
            Growth that<br />
            <span>keeps growing.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .25 }}
          >
            An organic-growth agency helping businesses build lasting visibility,
            trusted audiences and sustainable reach.
          </motion.p>

          <motion.button
            onClick={contact}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .34 }}
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: .97 }}
          >
            Register early interest <ArrowRight size={17} />
          </motion.button>

          <motion.div
            className="growth-seed"
            initial={{ opacity: 0, scale: .7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: .55, type: 'spring' }}
          >
            <Sprout size={25} />
            <motion.i
              animate={{ height: ['0%', '100%', '0%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </div>
      </section>

      <section className="growth-compound">
        <div className="growth-shell growth-compound-grid">
          <Reveal className="growth-compound-copy">
            <span>Why organic growth</span>
            <h2>Build an asset,<br />not another expense.</h2>
            <p>
              Paid reach stops when the budget stops. Organic growth compounds
              through useful content, discoverability and genuine audience trust.
            </p>
            <div className="growth-principles">
              <div><Check size={14} />Long-term visibility</div>
              <div><Check size={14} />Lower dependency on ads</div>
              <div><Check size={14} />Stronger brand trust</div>
            </div>
          </Reveal>

          <motion.div
            className="growth-staircase"
            initial={{ opacity: 0, scale: .92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: .9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="growth-staircase-top">
              <span>Organic momentum</span>
              <i><b /> Building steadily</i>
            </div>
            <div className="growth-staircase-stage">
              <div className="growth-staircase-lines"><i /><i /><i /><i /></div>
              <div className="growth-staircase-bars">
                {[
                  { label: 'Start', value: 24 },
                  { label: 'Build', value: 39 },
                  { label: 'Trust', value: 56 },
                  { label: 'Reach', value: 75 },
                  { label: 'Grow', value: 94 },
                ].map((bar, index) => (
                  <div className="growth-stair-bar" key={bar.label}>
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${bar.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: .85, delay: .15 + index * .13, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: .55 + index * .13, type: 'spring' }}
                      >
                        {index === 4 ? <TrendingUp size={16} /> : `0${index + 1}`}
                      </motion.span>
                    </motion.div>
                    <small>{bar.label}</small>
                  </div>
                ))}
              </div>
            </div>
            <div className="growth-staircase-footer">
              <div><Search size={14} /><span>Be found</span></div>
              <i />
              <div><MessageCircle size={14} /><span>Build trust</span></div>
              <i />
              <div><Sprout size={14} /><span>Grow naturally</span></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="growth-focus">
        <div className="growth-shell">
          <Reveal className="growth-heading">
            <span>Our focus</span>
            <h2>Four foundations for<br />long-term visibility.</h2>
          </Reveal>
          <div className="growth-focus-grid">
            {focusAreas.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .6, delay: index * .09 }}
                whileHover={{ y: -9 }}
              >
                <div><item.icon size={22} /><span>{item.number}</span></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="growth-final">
        <div className="growth-shell">
          <motion.div
            className="growth-final-card"
            initial={{ opacity: 0, scale: .97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: .75 }}
          >
            <motion.div
              className="growth-final-orbit"
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            >
              <i /><i /><i />
            </motion.div>
            <span>Launching soon</span>
            <h2>Be there from<br />the beginning.</h2>
            <p>Register your interest to hear when Entrain Growth Lab begins working with businesses.</p>
            <button onClick={contact}>Get launch updates <ArrowRight size={17} /></button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
