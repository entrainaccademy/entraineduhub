import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  ChefHat,
  Check,
  Globe2,
  Languages,
  Sparkles,
  UtensilsCrossed,
} from 'lucide-react';

const offers = [
  {
    icon: UtensilsCrossed,
    number: '01',
    title: 'Practical Culinary Training',
    text: 'Hands-on training in commercial cooking, bakery, fast food, shawarma and focused workshops.',
  },
  {
    icon: BriefcaseBusiness,
    number: '02',
    title: 'Food Business Skills',
    text: 'Learn production, equipment, consistency and the decisions behind running a stronger food business.',
  },
  {
    icon: Award,
    number: '03',
    title: 'Career-Focused Support',
    text: 'Certificates, career guidance and practical preparation for culinary and hospitality opportunities.',
  },
];

const reasons = [
  'Training from experienced chefs',
  'Commercial kitchen methods',
  'Learn by preparing food yourself',
  'Malayalam, English and Hindi',
  'Programs for careers and businesses',
  'Selected accommodation support',
];

const Reveal = ({ children, className = '', delay = 0 }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 34, filter: 'blur(8px)' }}
    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    viewport={{ once: true, margin: '-70px' }}
    transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export const AcademyView = ({ onNavigate }) => {
  const imageStageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageStageRef,
    offset: ['start end', 'end start'],
  });
  const imageScale = useTransform(scrollYProgress, [0, 0.25, 0.72], [0.72, 0.86, 1]);
  const imageRadius = useTransform(scrollYProgress, [0.1, 0.65], [40, 0]);
  const imageY = useTransform(scrollYProgress, [0, 1], [90, -40]);
  const overlayOpacity = useTransform(scrollYProgress, [0.35, 0.64], [0, 1]);

  const contact = () => {
    onNavigate('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="academy-dark-page">
      {/* Brief description */}
      <section className="academy-dark-hero">
        <div className="academy-dark-glow" />
        <div className="academy-dark-shell academy-dark-hero-center">
          <motion.img
            className="academy-dark-logo"
            src="/images/academy-logo-trimmed.png"
            alt="Entrain Academy"
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          />
          <div className="academy-dark-copy">
            <motion.div
              className="academy-dark-eyebrow"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ChefHat size={15} />
              Entrain Culinary Academy · Manjeri
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              Learn beyond<br />
              <span>the recipe.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.18 }}
            >
              Practical culinary education for aspiring chefs, hospitality
              professionals and food-business owners.
            </motion.p>

            <motion.div
              className="academy-dark-scroll-hint"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35 }}
            >
              <span><i /></span>
              Scroll to enter the kitchen
            </motion.div>
          </div>
        </div>
      </section>

      <section className="academy-image-stage" ref={imageStageRef}>
        <div className="academy-image-sticky">
          <motion.div
            className="academy-image-reveal"
            style={{ scale: imageScale, borderRadius: imageRadius, y: imageY }}
          >
            <img
              src="/images/cullinaryimg2.jpg"
              alt="Chefs working in a professional commercial kitchen"
            />
            <div className="academy-image-shade" />
            <motion.div className="academy-image-copy" style={{ opacity: overlayOpacity }}>
              <span>Inside the kitchen</span>
              <h2>Real practice.<br />Real pressure.<br />Real progress.</h2>
              <p>Learn by preparing food yourself with professional methods and experienced guidance.</p>
            </motion.div>
            <div className="academy-image-index">01 — Manjeri</div>
          </motion.div>
        </div>
      </section>

      {/* What we offer */}
      <section className="academy-dark-section">
        <div className="academy-dark-shell">
          <Reveal className="academy-dark-heading">
            <div>
              <span>What we offer</span>
              <h2>Training built around<br />real outcomes.</h2>
            </div>
          </Reveal>

          <div className="academy-dark-offer-grid">
            {offers.map((offer, index) => (
              <motion.article
                key={offer.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -9, scale: 1.015, borderColor: 'rgba(240, 202, 121, .55)' }}
              >
                <div className="academy-dark-offer-top">
                  <motion.span whileHover={{ rotate: -8, scale: 1.12 }}>
                    <offer.icon size={21} />
                  </motion.span>
                  <small>{offer.number}</small>
                </div>
                <motion.h3
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: .16 + index * .1 }}
                >
                  {offer.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: .24 + index * .1 }}
                >
                  {offer.text}
                </motion.p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="academy-dark-why">
        <div className="academy-dark-shell academy-dark-why-grid">
          <Reveal className="academy-dark-why-copy">
            <span className="academy-dark-label">Why choose us</span>
            <h2>Real experience.<br />Practical confidence.</h2>
            <p>
              You learn more than recipes. Our chefs help you understand how a
              professional kitchen produces food consistently and makes better
              day-to-day decisions.
            </p>
            <div className="academy-dark-language">
              <Languages size={19} />
              <span>Multilingual teaching</span>
              <small>Malayalam · English · Hindi</small>
            </div>
          </Reveal>

          <div className="academy-dark-reasons">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason}
                initial={{ opacity: 0, x: 22 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                whileHover={{ x: 7, backgroundColor: 'rgba(255,255,255,.025)' }}
              >
                <span><Check size={15} /></span>
                <p>{reason}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get in touch */}
      <section className="academy-dark-contact">
        <div className="academy-dark-shell">
          <motion.div
            className="academy-dark-contact-card"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-90px' }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="academy-contact-orb"
              animate={{ x: [0, 38, 0], y: [0, -22, 0], scale: [1, 1.16, 1] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="academy-dark-contact-icon"><Globe2 size={27} /></div>
            <div>
              <span>Get in touch</span>
              <h2>Ready to start your<br />culinary journey?</h2>
              <p>Tell us what you want to learn. Our team will help you choose the right program.</p>
            </div>
            <motion.button
              onClick={contact}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Contact the academy <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
