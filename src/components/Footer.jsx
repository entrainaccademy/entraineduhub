import React from 'react';
import { Layers, ArrowUp, ShieldCheck } from 'lucide-react';

const COMPANY_INFO = {
  tagline: "Real Experience. Real Skills. Real Growth.",
};

export const Footer = ({ activeView, setActiveView }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (viewId) => {
    setActiveView(viewId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0B] text-[#CBD5E1] border-t border-white/10 pt-16 pb-10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/5">
          
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#0A756A] flex items-center justify-center text-white">
                <Layers className="w-4 h-4" />
              </div>
              <span className="font-bold text-sm tracking-tight text-[#F8FAFC]">ENTRAIN EDUHUB</span>
            </div>
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              {COMPANY_INFO.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F8FAFC] mb-3">Our Ventures</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => handleNav('academy')} className="hover:text-[#14B8A6] transition-colors">
                  Entrain Academy (Culinary)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('lab')} className="hover:text-[#14B8A6] transition-colors">
                  Entrain Lab (Digital Marketing)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('growth-lab')} className="hover:text-[#14B8A6] transition-colors">
                  Entrain Growth Lab (Organic Agency)
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F8FAFC] mb-3">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => handleNav('home')} className="hover:text-[#14B8A6] transition-colors">Home</button></li>
              <li><button onClick={() => handleNav('about')} className="hover:text-[#14B8A6] transition-colors">About Us & Story</button></li>
              <li><button onClick={() => handleNav('contact')} className="hover:text-[#14B8A6] transition-colors">Contact Us</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F8FAFC] mb-3">Direct Inquiries</h4>
            <button
              onClick={() => handleNav('contact')}
              className="w-full btn-secondary text-xs"
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
            className="p-1.5 rounded-lg bg-[#171A1D] border border-white/5 hover:text-[#F8FAFC] text-xs flex items-center gap-1"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Top</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
