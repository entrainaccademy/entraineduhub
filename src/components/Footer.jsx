import React from 'react';
import { Layers, ArrowUp, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData.js';

export const Footer = ({ activeView, setActiveView }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (viewId) => {
    setActiveView(viewId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050816] text-[#94A3B8] border-t border-white/10 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/5">
          
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#0A756A] to-[#14B8A6] p-[1px]">
                <div className="w-full h-full bg-[#050816] rounded-[11px] flex items-center justify-center">
                  <Layers className="w-3.5 h-3.5 text-[#14B8A6]" />
                </div>
              </div>
              <span className="font-extrabold text-sm tracking-wider text-white">ENTRAIN EDUHUB</span>
            </div>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              {COMPANY_INFO.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">Our Ventures</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('academy')} className="hover:text-white transition-colors">
                  Entrain Academy (Culinary)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('lab')} className="hover:text-white transition-colors">
                  Entrain Lab (Digital Marketing)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('growth-lab')} className="hover:text-white transition-colors">
                  Entrain Growth Lab (Organic Agency)
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => handleNav('home')} className="hover:text-white transition-colors">Home</button></li>
              <li><button onClick={() => handleNav('about')} className="hover:text-white transition-colors">About Us & Story</button></li>
              <li><button onClick={() => handleNav('contact')} className="hover:text-white transition-colors">Contact Us</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">Direct Inquiries</h4>
            <button
              onClick={() => handleNav('contact')}
              className="w-full py-2 px-3 rounded-xl bg-[#111827] border border-white/10 text-white text-xs font-semibold hover:bg-white/5 transition-all text-center"
            >
              Contact Entrain EduHub
            </button>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#14B8A6]" />
            <span>© {new Date().getFullYear()} Entrain EduHub. All rights reserved.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-1.5 rounded-lg bg-[#111827] border border-white/5 hover:text-white text-xs flex items-center gap-1"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Top</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
