import React, { useState, useEffect, useRef } from 'react';
import { Layers, Menu, X, ArrowRight, Sparkles, ChevronDown } from 'lucide-react';

const COMPANIES_DROPDOWN = [
  { id: 'academy', label: 'Entrain Academy', sub: 'Commercial Culinary Academy' },
  { id: 'lab', label: 'Entrain Lab', sub: 'Digital Marketing Academy' },
  { id: 'growth-lab', label: 'Entrain Growth Lab', sub: 'Organic Growth Agency' },
];

const FLAT_NAV = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar = ({ activeView, setActiveView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileCompOpen, setMobileCompOpen] = useState(false);
  const dropdownRef = useRef(null);

  /* ── scroll listener ── */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── close dropdown when clicking outside ── */
  useEffect(() => {
    const onOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', onOutside);
    return () => document.removeEventListener('mousedown', onOutside);
  }, []);

  const handleNavClick = (viewId) => {
    setActiveView(viewId);
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    setMobileCompOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isCompanyActive = COMPANIES_DROPDOWN.some(c => c.id === activeView);

  /* ── shared button style factory ── */
  const btnStyle = (active) => ({
    background: active ? 'rgba(10, 10, 18, 0.70)' : 'transparent',
    border: active ? '1px solid rgba(255,255,255,0.10)' : '1px solid transparent',
    borderRadius: '9999px',
    cursor: 'pointer',
    fontSize: '13.5px',
    fontWeight: active ? 600 : 500,
    color: active ? '#F8FAFC' : '#94A3B8',
    padding: '6px 14px',
    transition: 'all 0.2s ease',
    whiteSpace: 'nowrap',
    letterSpacing: active ? '-0.01em' : 'normal',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  });

  return (
    <>
      {/* ── Floating Navbar Shell ── */}
      <header
        style={{
          position: 'fixed',
          top: isScrolled ? '10px' : '16px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 50,
          width: 'calc(100% - 32px)',
          maxWidth: '1100px',
          transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
          borderRadius: '9999px',
          background: isScrolled ? 'rgba(10, 10, 14, 0.88)' : 'rgba(14, 14, 20, 0.68)',
          backdropFilter: 'blur(22px)',
          WebkitBackdropFilter: 'blur(22px)',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: isScrolled
            ? '0 8px 40px rgba(0,0,0,0.60), 0 1px 0 rgba(255,255,255,0.06) inset'
            : '0 4px 24px rgba(0,0,0,0.40), 0 1px 0 rgba(255,255,255,0.05) inset',
          padding: isScrolled ? '10px 24px' : '14px 28px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>

          {/* ── Logo ── */}
          <button
            onClick={() => handleNavClick('home')}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'none', border: 'none', cursor: 'pointer', padding: 0, textAlign: 'left', flexShrink: 0 }}
          >
            <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'linear-gradient(135deg, #0A756A, #14B8A6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', boxShadow: '0 2px 12px rgba(20,184,166,0.35)', flexShrink: 0 }}>
              <Layers style={{ width: '16px', height: '16px' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontWeight: 700, fontSize: '15px', letterSpacing: '-0.02em', color: '#F8FAFC' }}>ENTRAIN</span>
                <span style={{ fontSize: '10px', fontWeight: 600, padding: '2px 6px', borderRadius: '4px', background: '#171A1D', color: '#14B8A6', border: '1px solid rgba(255,255,255,0.08)' }}>EDU HUB</span>
              </div>
              <span style={{ fontSize: '10px', color: '#94A3B8', fontWeight: 500 }}>Parent Company</span>
            </div>
          </button>

          {/* ── Desktop Nav (center) ── */}
          <nav className="navbar-desktop-nav" style={{ display: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)', borderRadius: '9999px', padding: '4px 6px', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}>

              {/* Home */}
              <button className="nav-link-btn" onClick={() => handleNavClick('home')} style={btnStyle(activeView === 'home')}>
                Home
              </button>

              {/* About */}
              <button className="nav-link-btn" onClick={() => handleNavClick('about')} style={btnStyle(activeView === 'about')}>
                About
              </button>

              {/* Our Companies dropdown trigger */}
              <div ref={dropdownRef} style={{ position: 'relative' }}>
                <button
                  className="nav-link-btn"
                  onClick={() => setDropdownOpen(o => !o)}
                  style={{
                    ...btnStyle(isCompanyActive || dropdownOpen),
                    gap: '5px',
                  }}
                >
                  Our Companies
                  <ChevronDown style={{ width: '13px', height: '13px', transition: 'transform 0.2s ease', transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                </button>

                {/* Dropdown panel */}
                {dropdownOpen && (
                  <div style={{
                    position: 'absolute',
                    top: 'calc(100% + 10px)',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    minWidth: '220px',
                    background: 'rgba(10, 10, 18, 0.96)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    border: '1px solid rgba(255,255,255,0.10)',
                    borderRadius: '16px',
                    padding: '6px',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.55)',
                    zIndex: 60,
                  }}>
                    {COMPANIES_DROPDOWN.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => handleNavClick(c.id)}
                        className="dropdown-item-btn"
                        style={{
                          width: '100%',
                          textAlign: 'left',
                          padding: '9px 12px',
                          borderRadius: '10px',
                          border: 'none',
                          cursor: 'pointer',
                          background: activeView === c.id ? 'rgba(20,184,166,0.12)' : 'transparent',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '1px',
                          transition: 'background 0.18s ease',
                        }}
                      >
                        <span style={{ fontSize: '13px', fontWeight: 600, color: activeView === c.id ? '#14B8A6' : '#F8FAFC' }}>{c.label}</span>
                        <span style={{ fontSize: '11px', color: '#64748B', fontWeight: 400 }}>{c.sub}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Contact */}
              <button className="nav-link-btn" onClick={() => handleNavClick('contact')} style={btnStyle(activeView === 'contact')}>
                Contact
              </button>

            </div>
          </nav>

          {/* ── Desktop CTA (right) ── */}
          <div className="navbar-desktop-cta" style={{ display: 'none', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
            <button
              onClick={() => handleNavClick('contact')}
              className="navbar-cta-btn"
              style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 700, color: '#ffffff', background: 'linear-gradient(135deg, #0A756A, #14B8A6)', border: 'none', borderRadius: '9999px', padding: '9px 20px', cursor: 'pointer', letterSpacing: '-0.01em', boxShadow: '0 2px 16px rgba(20,184,166,0.35)', transition: 'all 0.22s ease' }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 4px 24px rgba(20,184,166,0.55)'; e.currentTarget.style.transform = 'scale(1.04)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 16px rgba(20,184,166,0.35)'; e.currentTarget.style.transform = 'scale(1)'; }}
            >
              <span>Contact Us</span>
              <ArrowRight style={{ width: '14px', height: '14px' }} />
            </button>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="navbar-mobile-toggle"
            style={{ padding: '8px', borderRadius: '50%', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.10)', color: '#F8FAFC', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s ease', flexShrink: 0 }}
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; }}
          >
            {mobileMenuOpen ? <X style={{ width: '20px', height: '20px' }} /> : <Menu style={{ width: '20px', height: '20px' }} />}
          </button>

        </div>
      </header>

      {/* ── Mobile Dropdown ── */}
      {mobileMenuOpen && (
        <div
          className="navbar-mobile-menu"
          style={{ position: 'fixed', top: isScrolled ? '68px' : '78px', left: '50%', transform: 'translateX(-50%)', zIndex: 49, width: 'calc(100% - 32px)', maxWidth: '1100px', background: 'rgba(10, 10, 14, 0.96)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '24px', padding: '12px', boxShadow: '0 8px 40px rgba(0,0,0,0.60)' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>

            {/* Flat items: Home, About */}
            {FLAT_NAV.filter(i => i.id !== 'contact').map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{ width: '100%', textAlign: 'left', fontSize: '14px', fontWeight: activeView === item.id ? 600 : 500, padding: '10px 14px', borderRadius: '12px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', transition: 'background 0.2s ease, color 0.2s ease', background: activeView === item.id ? 'rgba(10,10,18,0.70)' : 'transparent', color: activeView === item.id ? '#F8FAFC' : '#94A3B8' }}
                onMouseEnter={e => { if (activeView !== item.id) { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#F8FAFC'; } }}
                onMouseLeave={e => { if (activeView !== item.id) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#94A3B8'; } }}
              >
                <span>{item.label}</span>
                {activeView === item.id && <Sparkles style={{ width: '14px', height: '14px', color: '#14B8A6' }} />}
              </button>
            ))}

            {/* Our Companies accordion */}
            <div style={{ borderRadius: '12px', overflow: 'hidden' }}>
              <button
                onClick={() => setMobileCompOpen(o => !o)}
                style={{ width: '100%', textAlign: 'left', fontSize: '14px', fontWeight: isCompanyActive ? 600 : 500, padding: '10px 14px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: isCompanyActive ? 'rgba(10,10,18,0.70)' : 'transparent', color: isCompanyActive ? '#F8FAFC' : '#94A3B8', transition: 'background 0.2s ease' }}
              >
                <span>Our Companies</span>
                <ChevronDown style={{ width: '14px', height: '14px', transition: 'transform 0.2s ease', transform: mobileCompOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
              </button>

              {mobileCompOpen && (
                <div style={{ paddingLeft: '14px', paddingBottom: '4px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  {COMPANIES_DROPDOWN.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => handleNavClick(c.id)}
                      style={{ width: '100%', textAlign: 'left', padding: '8px 12px', borderRadius: '10px', border: 'none', cursor: 'pointer', background: activeView === c.id ? 'rgba(20,184,166,0.12)' : 'transparent', display: 'flex', flexDirection: 'column', gap: '1px', transition: 'background 0.18s ease' }}
                    >
                      <span style={{ fontSize: '13px', fontWeight: 600, color: activeView === c.id ? '#14B8A6' : '#F8FAFC' }}>{c.label}</span>
                      <span style={{ fontSize: '11px', color: '#64748B' }}>{c.sub}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Contact */}
            <button
              onClick={() => handleNavClick('contact')}
              style={{ width: '100%', textAlign: 'left', fontSize: '14px', fontWeight: activeView === 'contact' ? 600 : 500, padding: '10px 14px', borderRadius: '12px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: activeView === 'contact' ? 'rgba(10,10,18,0.70)' : 'transparent', color: activeView === 'contact' ? '#F8FAFC' : '#94A3B8', transition: 'background 0.2s ease, color 0.2s ease' }}
              onMouseEnter={e => { if (activeView !== 'contact') { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#F8FAFC'; } }}
              onMouseLeave={e => { if (activeView !== 'contact') { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#94A3B8'; } }}
            >
              <span>Contact</span>
              {activeView === 'contact' && <Sparkles style={{ width: '14px', height: '14px', color: '#14B8A6' }} />}
            </button>

            {/* Contact CTA */}
            <div style={{ paddingTop: '8px', borderTop: '1px solid rgba(255,255,255,0.07)', marginTop: '4px' }}>
              <button
                onClick={() => handleNavClick('contact')}
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '13px', fontWeight: 700, color: '#ffffff', background: 'linear-gradient(135deg, #0A756A, #14B8A6)', border: 'none', borderRadius: '9999px', padding: '11px 20px', cursor: 'pointer', boxShadow: '0 2px 16px rgba(20,184,166,0.30)' }}
              >
                Contact Us
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ── Responsive rules + dropdown hover ── */}
      <style>{`
        @media (min-width: 1024px) {
          .navbar-desktop-nav    { display: flex !important; align-items: center; flex: 1; justify-content: center; }
          .navbar-desktop-cta    { display: flex !important; }
          .navbar-mobile-toggle  { display: none !important; }
          .navbar-mobile-menu    { display: none !important; }
        }
        .nav-link-btn:hover {
          color: #F8FAFC !important;
          background: rgba(255,255,255,0.07) !important;
        }
        .dropdown-item-btn:hover {
          background: rgba(255,255,255,0.06) !important;
        }
      `}</style>
    </>
  );
};
