import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

const ventures = [
  ['academy', 'Entrain Academy'],
  ['lab', 'Entrain Lab'],
  ['growth-lab', 'Growth Lab'],
];

export const Footer = ({ setActiveView }) => {
  const navigate = (id) => {
    setActiveView(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="eh-footer">
      <div className="eh-footer-topline" />
      <div className="eh-footer-shell">
        <div className="eh-footer-lead">
          <div className="eh-footer-wordmark">
            <strong>ENTRAIN</strong>
            <span>EDU HUB</span>
          </div>
          <p>Real experience.<br />Real skills. Real growth.</p>
        </div>

        <div className="eh-footer-links">
          <div>
            <p>Explore</p>
            <button onClick={() => navigate('home')}>Home</button>
            <button onClick={() => navigate('about')}>Our story</button>
            <button onClick={() => navigate('contact')}>Contact</button>
          </div>
          <div>
            <p>Ventures</p>
            {ventures.map(([id, label]) => (
              <button key={id} onClick={() => navigate(id)}>{label}</button>
            ))}
          </div>
          <button className="eh-footer-contact" onClick={() => navigate('contact')}>
            Start a conversation <ArrowUpRight />
          </button>
        </div>

        <div className="eh-footer-bottom">
          <span>© {new Date().getFullYear()} Entrain EduHub</span>
          <span>Kerala, India</span>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Back to top <ArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};
