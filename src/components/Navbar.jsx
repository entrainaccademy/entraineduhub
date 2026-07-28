import React, { useState, useEffect } from 'react';
import { Layers, Menu, X, ArrowRight, Sparkles } from 'lucide-react';

export const Navbar = ({ activeView, setActiveView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    // { id: 'academy', label: 'Entrain Academy' },
    // { id: 'lab', label: 'Entrain Lab' },
    // { id: 'growth-lab', label: 'Entrain Growth Lab' },
    // { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (viewId) => {
    setActiveView(viewId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'header-blur py-3.5 shadow-sm' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left focus:outline-none group"
          >
            <div className="w-8 h-8 rounded-lg bg-[#0A756A] flex items-center justify-center text-white">
              <Layers className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-base tracking-tight text-[#F8FAFC]">ENTRAIN</span>
                <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-[#171A1D] text-[#14B8A6] border border-white/10">
                  EDU HUB
                </span>
              </div>
              <span className="text-[10px] text-[#94A3B8] font-medium">
                Parent Company
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-colors py-1 relative ${
                  activeView === item.id ? 'text-[#14B8A6]' : 'text-[#CBD5E1] hover:text-[#F8FAFC]'
                }`}
              >
                {item.label}
                {activeView === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#14B8A6] rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('contact')}
              className="btn-primary text-xs flex items-center gap-1.5"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#171A1D] border border-white/10 text-[#F8FAFC]"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#111315] border-b border-white/10 px-4 pt-3 pb-6 space-y-2 shadow-xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left text-sm font-medium py-2.5 px-3 rounded-lg transition-colors flex items-center justify-between ${
                activeView === item.id ? 'bg-[#0A756A]/20 text-[#14B8A6]' : 'text-[#CBD5E1] hover:bg-[#171A1D] hover:text-[#F8FAFC]'
              }`}
            >
              <span>{item.label}</span>
              {activeView === item.id && <Sparkles className="w-3.5 h-3.5 text-[#14B8A6]" />}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full btn-primary text-xs justify-center"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
