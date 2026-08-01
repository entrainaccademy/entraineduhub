import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, Sparkles, ChevronDown } from 'lucide-react';

const COMPANIES_DROPDOWN = [
  { id: 'academy', label: 'Entrain Academy', url: 'https://www.entraincullinaryschool.com/' },
  { id: 'lab', label: 'Entrain Lab', url: 'https://www.theentrainlabs.com/' },
  { id: 'growth-lab', label: 'Entrain Growth Lab' },
];

const FLAT_NAV = [
  { id: 'home',    label: 'Home' },
  { id: 'about',   label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar = ({ activeView, setActiveView }) => {
  const [isScrolled,       setIsScrolled]       = useState(false);
  const [mobileMenuOpen,   setMobileMenuOpen]   = useState(false);
  const [dropdownOpen,     setDropdownOpen]     = useState(false);
  const [mobileCompOpen,   setMobileCompOpen]   = useState(false);
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
    if (viewId === 'contact') {
      setActiveView('home');
      setMobileMenuOpen(false);
      setDropdownOpen(false);
      setMobileCompOpen(false);
      window.setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 50);
      return;
    }
    setActiveView(viewId);
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    setMobileCompOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCompanyClick = (company) => {
    if (company.url) {
      window.location.href = company.url;
      return;
    }
    handleNavClick(company.id);
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
          zIndex: 1000,
          width: 'calc(100% - 32px)',
          maxWidth: '1100px',
          transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
          borderRadius: '9999px',
          background: isScrolled ? 'rgba(17, 29, 56, 0.94)' : 'rgba(17, 29, 56, 0.86)',
          backdropFilter: 'blur(22px)',
          WebkitBackdropFilter: 'blur(22px)',
          border: '1px solid rgba(196,147,62,0.24)',
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
            <div className="navbar-logo-mark" style={{ width: '38px', height: '46px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, padding: '3px 5px', borderRadius: '12px', background: '#F1EDE4', boxShadow: '0 4px 14px rgba(0,0,0,.18)' }}>
              <img className="navbar-logo-image" src="/images/entraineduhub-navbar.png" alt="Entrain EduHub" style={{ width: '25px', height: '40px', objectFit: 'contain' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '5px' }}>
              <span style={{ fontWeight: 750, fontSize: '14px', letterSpacing: '-0.02em', color: '#F8FAFC' }}>ENTRAIN</span>
              <span style={{ fontWeight: 700, fontSize: '11px', color: '#C4933E' }}>EDUHUB</span>
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
                    background: 'rgba(17, 29, 56, 0.97)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    border: '1px solid rgba(196,147,62,0.22)',
                    borderRadius: '16px',
                    padding: '6px',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.55)',
                    zIndex: 60,
                  }}>
                    {COMPANIES_DROPDOWN.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => handleCompanyClick(c)}
                        className="dropdown-item-btn"
                        style={{
                          width: '100%',
                          textAlign: 'left',
                          padding: '9px 12px',
                          borderRadius: '10px',
                          border: 'none',
                          cursor: 'pointer',
                          background: activeView === c.id ? 'rgba(196,147,62,0.14)' : 'transparent',
                          display: 'block',
                          transition: 'background 0.18s ease',
                        }}
                      >
                        <span style={{ fontSize: '13px', fontWeight: 600, color: activeView === c.id ? '#C4933E' : '#F8FAFC' }}>{c.label}</span>
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
              style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 700, color: '#111D38', background: 'linear-gradient(135deg, #A9742D, #C4933E)', border: 'none', borderRadius: '9999px', padding: '9px 20px', cursor: 'pointer', letterSpacing: '-0.01em', boxShadow: '0 2px 16px rgba(196,147,62,0.35)', transition: 'all 0.22s ease' }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 4px 24px rgba(196,147,62,0.52)'; e.currentTarget.style.transform = 'scale(1.04)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 16px rgba(196,147,62,0.35)'; e.currentTarget.style.transform = 'scale(1)'; }}
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
          style={{ position: 'fixed', top: isScrolled ? '80px' : '94px', left: '50%', transform: 'translateX(-50%)', zIndex: 49, width: 'calc(100% - 32px)', maxWidth: '1100px', maxHeight: isScrolled ? 'calc(100dvh - 92px)' : 'calc(100dvh - 106px)', overflowY: 'auto', background: 'rgba(17, 29, 56, 0.97)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', border: '1px solid rgba(196,147,62,0.22)', borderRadius: '20px', padding: '12px', boxShadow: '0 12px 34px rgba(0,0,0,0.46)' }}
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
                {activeView === item.id && <Sparkles style={{ width: '14px', height: '14px', color: '#C4933E' }} />}
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
                      onClick={() => handleCompanyClick(c)}
                      style={{ width: '100%', textAlign: 'left', padding: '10px 12px', borderRadius: '10px', border: 'none', cursor: 'pointer', background: activeView === c.id ? 'rgba(196,147,62,0.14)' : 'transparent', display: 'block', transition: 'background 0.18s ease' }}
                    >
                      <span style={{ fontSize: '13px', fontWeight: 600, color: activeView === c.id ? '#C4933E' : '#F8FAFC' }}>{c.label}</span>
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
              {activeView === 'contact' && <Sparkles style={{ width: '14px', height: '14px', color: '#C4933E' }} />}
            </button>

            {/* Contact CTA */}
            <div style={{ paddingTop: '8px', borderTop: '1px solid rgba(255,255,255,0.07)', marginTop: '4px' }}>
              <button
                onClick={() => handleNavClick('contact')}
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '13px', fontWeight: 700, color: '#111D38', background: 'linear-gradient(135deg, #A9742D, #C4933E)', border: 'none', borderRadius: '9999px', padding: '11px 20px', cursor: 'pointer', boxShadow: '0 2px 16px rgba(196,147,62,0.30)' }}
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
        @media (max-width: 1023px) {
          .navbar-logo-mark { width: 34px !important; height: 42px !important; padding: 3px 5px !important; }
          .navbar-logo-image { width: 22px !important; height: 36px !important; }
          .navbar-mobile-menu { scrollbar-width: thin; scrollbar-color: rgba(196,147,62,.45) transparent; }
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
