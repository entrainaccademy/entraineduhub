import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Mail, ShieldCheck } from 'lucide-react';

export const Footer = ({ setActiveView }) => {
  const handleNav = (viewId) => {
    if (viewId === 'contact') {
      setActiveView('home');
      window.setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 50);
      return;
    }
    setActiveView(viewId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="entrain-footer">
      <div className="entrain-footer-wordmark" aria-hidden="true">
        <motion.span
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: .25 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          Entrain EduHub
        </motion.span>
      </div>

      <div className="entrain-footer-shell">
        <nav className="entrain-footer-simple-links" aria-label="Footer navigation">
          <button onClick={() => handleNav('home')}>Home</button>
          <button onClick={() => handleNav('about')}>About Us</button>
          <a href="https://www.entraincullinaryschool.com/">Entrain Academy</a>
          <a href="https://www.theentrainlabs.com/">Entrain Lab</a>
          <button onClick={() => handleNav('growth-lab')}>Entrain Growth Lab</button>
          <button onClick={() => handleNav('contact')}>Contact Us</button>
        </nav>

        <div className="entrain-footer-socials" aria-label="Social links coming soon">
          <button type="button" aria-label="Email link coming soon"><Mail size={17} /></button>
          <button type="button" aria-label="Facebook link coming soon"><Facebook size={17} /></button>
          <button type="button" aria-label="Instagram link coming soon"><Instagram size={17} /></button>
        </div>

        <div className="entrain-footer-bottom">
          <div>
            <ShieldCheck size={15} />
            <span>© {new Date().getFullYear()} Entrain EduHub. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
