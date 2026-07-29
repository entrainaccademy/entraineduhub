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
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (viewId) => {
    setActiveView(viewId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
          background: isScrolled
            ? 'rgba(10, 10, 14, 0.88)'
            : 'rgba(14, 14, 20, 0.68)',
          backdropFilter: 'blur(22px)',
          WebkitBackdropFilter: 'blur(22px)',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: isScrolled
            ? '0 8px 40px rgba(0,0,0,0.60), 0 1px 0 rgba(255,255,255,0.06) inset'
            : '0 4px 24px rgba(0,0,0,0.40), 0 1px 0 rgba(255,255,255,0.05) inset',
          padding: isScrolled ? '10px 24px' : '14px 28px',
        }}
      >
        {/* ── Three-column layout: Logo | Nav Pill | CTA ── */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>

          {/* ── Logo (left) ── */}
          <button
            onClick={() => handleNavClick('home')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              textAlign: 'left',
              flexShrink: 0,
            }}
          >
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #0A756A, #14B8A6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              boxShadow: '0 2px 12px rgba(20,184,166,0.35)',
              flexShrink: 0,
            }}>
              <Layers style={{ width: '16px', height: '16px' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontWeight: 700, fontSize: '15px', letterSpacing: '-0.02em', color: '#F8FAFC' }}>
                  ENTRAIN
                </span>
                <span style={{
                  fontSize: '10px',
                  fontWeight: 600,
                  padding: '2px 6px',
                  borderRadius: '4px',
                  background: '#171A1D',
                  color: '#14B8A6',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}>
                  EDU HUB
                </span>
              </div>
              <span style={{ fontSize: '10px', color: '#94A3B8', fontWeight: 500 }}>
                Parent Company
              </span>
            </div>
          </button>

          {/* ── Desktop: Inner glass pill wrapping nav links (center) ── */}
          <nav
            className="navbar-desktop-nav"
            style={{ display: 'none' }}
          >
            {/* Glass pill container */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.10)',
              borderRadius: '9999px',
              padding: '4px 6px', 
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
            }}>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="nav-link-btn"
                  style={{
                    background: activeView === item.id
                      ? 'rgba(10, 10, 18, 0.70)'
                      : 'transparent',
                    border: activeView === item.id
                      ? '1px solid rgba(255,255,255,0.10)'
                      : '1px solid transparent',
                    borderRadius: '9999px',
                    cursor: 'pointer',
                    fontSize: '13.5px',
                    fontWeight: activeView === item.id ? 600 : 500,
                    color: activeView === item.id ? '#F8FAFC' : '#94A3B8',
                    padding: '6px 14px',
                    transition: 'all 0.2s ease',
                    whiteSpace: 'nowrap',
                    letterSpacing: activeView === item.id ? '-0.01em' : 'normal',
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>

          {/* ── Desktop CTA (right) ── */}
          <div
            className="navbar-desktop-cta"
            style={{ display: 'none', alignItems: 'center', gap: '12px', flexShrink: 0 }}
          >
            <button
              onClick={() => handleNavClick('contact')}
              className="navbar-cta-btn"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '13px',
                fontWeight: 700,
                color: '#ffffff',
                background: 'linear-gradient(135deg, #2563EB, #3B82F6)',
                border: 'none',
                borderRadius: '9999px',
                padding: '9px 20px',
                cursor: 'pointer',
                letterSpacing: '-0.01em',
                boxShadow: '0 2px 16px rgba(59,130,246,0.35)',
                transition: 'all 0.22s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(59,130,246,0.55)';
                e.currentTarget.style.transform = 'scale(1.04)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = '0 2px 16px rgba(59,130,246,0.35)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <span>Contact Us</span>
              <ArrowRight style={{ width: '14px', height: '14px' }} />
            </button>
          </div>

          {/* ── Mobile: Hamburger toggle (right) ── */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="navbar-mobile-toggle"
            style={{
              padding: '8px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.10)',
              color: '#F8FAFC',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s ease',
              flexShrink: 0,
            }}
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; }}
          >
            {mobileMenuOpen ? <X style={{ width: '20px', height: '20px' }} /> : <Menu style={{ width: '20px', height: '20px' }} />}
          </button>

        </div>
      </header>

      {/* ── Mobile Dropdown — floats below the navbar pill ── */}
      {mobileMenuOpen && (
        <div
          className="navbar-mobile-menu"
          style={{
            position: 'fixed',
            top: isScrolled ? '68px' : '78px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 49,
            width: 'calc(100% - 32px)',
            maxWidth: '1100px',
            background: 'rgba(10, 10, 14, 0.94)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '24px',
            padding: '16px',
            boxShadow: '0 8px 40px rgba(0,0,0,0.60)',
            transition: 'top 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  fontSize: '14px',
                  fontWeight: activeView === item.id ? 600 : 500,
                  padding: '10px 14px',
                  borderRadius: '12px',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'background 0.2s ease, color 0.2s ease',
                  background: activeView === item.id ? 'rgba(10,10,18,0.70)' : 'transparent',
                  color: activeView === item.id ? '#F8FAFC' : '#94A3B8',
                }}
                onMouseEnter={e => {
                  if (activeView !== item.id) {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.color = '#F8FAFC';
                  }
                }}
                onMouseLeave={e => {
                  if (activeView !== item.id) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#94A3B8';
                  }
                }}
              >
                <span>{item.label}</span>
                {activeView === item.id && <Sparkles style={{ width: '14px', height: '14px', color: '#14B8A6' }} />}
              </button>
            ))}
            <div style={{ paddingTop: '8px', borderTop: '1px solid rgba(255,255,255,0.07)', marginTop: '4px' }}>
              <button
                onClick={() => handleNavClick('contact')}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  fontSize: '13px',
                  fontWeight: 700,
                  color: '#ffffff',
                  background: 'linear-gradient(135deg, #2563EB, #3B82F6)',
                  border: 'none',
                  borderRadius: '9999px',
                  padding: '11px 20px',
                  cursor: 'pointer',
                  boxShadow: '0 2px 16px rgba(59,130,246,0.30)',
                }}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Responsive show/hide rules ── */}
      <style>{`
        @media (min-width: 1024px) {
          .navbar-desktop-nav {
            display: flex !important;
            align-items: center;
            flex: 1;
            justify-content: center;
          }
          .navbar-desktop-cta {
            display: flex !important;
          }
          .navbar-mobile-toggle {
            display: none !important;
          }
          .navbar-mobile-menu {
            display: none !important;
          }
        }

        /* Nav link hover — only for items NOT active */
        .nav-link-btn:hover {
          color: #F8FAFC !important;
          background: rgba(255,255,255,0.07) !important;
        }
      `}</style>
    </>
  );
};
