import React, { useState, useEffect } from 'react';
import { Layers, Menu, X, ArrowRight, UtensilsCrossed, MonitorPlay, TrendingUp, Sparkles } from 'lucide-react';

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
    { id: 'academy', label: 'Entrain Academy' },
    { id: 'lab', label: 'Entrain Lab' },
    { id: 'growth-lab', label: 'Entrain Growth Lab' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (viewId) => {
    setActiveView(viewId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-3.5 shadow-2xl' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0A756A] to-[#14B8A6] p-[1px] shadow-glow-primary">
              <div className="w-full h-full bg-[#050816] rounded-[11px] flex items-center justify-center">
                <Layers className="w-4 h-4 text-[#14B8A6]" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base tracking-wider text-white">ENTRAIN</span>
                <span className="font-semibold text-[10px] px-1.5 py-0.5 rounded bg-[#0A756A]/20 text-[#14B8A6] border border-[#0A756A]/30">
                  EDU HUB
                </span>
              </div>
              <span className="text-[9px] uppercase tracking-widest text-[#94A3B8] font-medium">
                Parent Company
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-xs font-semibold transition-colors py-1 relative ${
                  activeView === item.id ? 'text-[#14B8A6]' : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                {item.label}
                {activeView === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#14B8A6] rounded-full animate-in fade-in duration-200" />
                )}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('contact')}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#0A756A] to-[#14B8A6] text-white text-xs font-semibold hover:opacity-95 transition-all shadow-glow-primary flex items-center gap-1.5"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-[#111827] border border-white/10 text-white"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B1120] border-b border-white/10 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left text-xs font-semibold py-2.5 px-3 rounded-lg transition-colors flex items-center justify-between ${
                activeView === item.id ? 'bg-[#0A756A]/20 text-[#14B8A6]' : 'text-[#94A3B8] hover:bg-white/5 hover:text-white'
              }`}
            >
              <span>{item.label}</span>
              {activeView === item.id && <Sparkles className="w-3.5 h-3.5 text-[#14B8A6]" />}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#0A756A] to-[#14B8A6] text-white text-xs font-semibold"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
