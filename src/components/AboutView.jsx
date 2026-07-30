import React from 'react';
import { motion } from 'framer-motion';

const STORY = [
  "Years spent running the family bakery brought firsthand lessons in food production, operations, and business — before floods, the pandemic, and financial strain closed its doors.",
  "Those lessons became the foundation for Entrain Academy, Entrain Lab, and Entrain Growth Lab, bringing real-world experience into culinary education, digital marketing, and business growth.",
  "Today, Entrain EduHub helps students build the skills and confidence to create careers of their own.",
];

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (delay) => ({
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { delay, duration: 1.8, ease: [0.65, 0, 0.35, 1] }, opacity: { delay, duration: 0.2 } },
  }),
};

const BuildingSketch = () => (
  <motion.svg
    className="about-building-sketch"
    viewBox="0 0 1200 650"
    fill="none"
    initial="hidden"
    animate="visible"
    aria-hidden="true"
  >
    <motion.path custom={0.05} variants={draw} d="M82 553H1117" />
    <motion.path custom={0.15} variants={draw} d="M163 553V258L309 137L455 258V553" />
    <motion.path custom={0.28} variants={draw} d="M121 275L309 111L497 275" />
    <motion.path custom={0.36} variants={draw} d="M455 302H956V553H455" />
    <motion.path custom={0.45} variants={draw} d="M455 302L525 225H887L956 302" />
    <motion.path custom={0.58} variants={draw} d="M256 553V371H362V553M277 371V333H341V371" />
    <motion.path custom={0.7} variants={draw} d="M520 553V402H636V553M678 402H803V490H678V402ZM838 402H913V490H838V402Z" />
    <motion.path custom={0.82} variants={draw} d="M498 344H920M520 344L498 382H920L898 344" />
    <motion.path custom={0.94} variants={draw} d="M211 294H407M235 294L218 330H400L383 294" />
    <motion.path custom={1.05} variants={draw} d="M108 553L78 590M1090 553L1122 590M53 590H1150" />
    <motion.path custom={1.18} variants={draw} d="M994 553V366M978 366H1010M994 366C994 334 1034 322 1052 349C1069 326 1110 338 1110 371" />
  </motion.svg>
);

const reveal = {
  hidden: { opacity: 0, y: 38 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
};

const storyReveal = {
  hidden: (index) => ({
    opacity: 0,
    x: index % 2 === 0 ? -72 : 72,
    filter: 'blur(6px)',
  }),
  visible: (index) => ({
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.85,
      delay: index * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const AboutView = () => (
  <div className="about-page about-sketch-page">
    <section className="about-sketch-hero">
      <div className="about-shell about-sketch-layout">
        <div className="about-sketch-copy">
          <h1>
            <span>
              <motion.i
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ delay: 0.35, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
              >
                Entrain EduHub wasn't built in a classroom.
              </motion.i>
            </span>
            <span>
              <motion.i
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ delay: 0.52, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                It grew from running a business, facing setbacks, and learning the hard way.
              </motion.i>
            </span>
          </h1>
        </div>

        <div className="about-sketch-visual">
          <div className="about-sketch-sun" />
          <BuildingSketch />
        </div>
      </div>

      <motion.div
        className="about-sketch-scroll"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 1.7, duration: 0.8, ease: 'easeOut' }}
      />
    </section>

    <section className="about-story-section">
      <div className="about-shell about-story-layout">
        <motion.div
          className="about-sketch-founder"
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Founder image"
        >
          <div>
            <img src="/images/mockimg.jpg" alt="Founder of Entrain EduHub" />
          </div>
          <motion.b
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>

        <div className="about-story-content">
          <div className="about-story-heading">
            <h2>Experience became the curriculum.</h2>
          </div>

          <div className="about-story-timeline">
            {STORY.map((paragraph, index) => (
              <motion.article
                key={paragraph}
                className={index === STORY.length - 1 ? 'about-story-conclusion' : ''}
                custom={index}
                variants={storyReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
              >
                <p>{paragraph}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  </div>
);
