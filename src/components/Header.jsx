'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { catalog } from '../data/catalog';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const lastScrollY = React.useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const isMobile = window.innerWidth <= 768;

      setIsScrolled(currentY > 50);

      // Smart hide/show only for desktop
      if (!isMobile) {
        if (currentY <= 60) {
          // Always show at top
          setIsHidden(false);
        } else if (currentY > lastScrollY.current + 6) {
          // Scrolling down — hide
          setIsHidden(true);
        } else if (currentY < lastScrollY.current - 6) {
          // Scrolling up — show
          setIsHidden(false);
        }
      }

      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const allSearchableItems = React.useMemo(() => {
    let items = [];
    if (!catalog) return items;
    catalog.forEach(category => {
      items.push({ title: category.name, type: 'Category', url: `/products/${category.slug}` });
      category.products?.forEach(product => {
        items.push({ title: product.name, type: `Product (${category.name})`, url: `/products/${category.slug}/${product.slug}` });
        product.models?.forEach(model => {
          items.push({ title: `${model.name} (${model.id})`, type: `Model (${product.name})`, url: `/products/${category.slug}/${product.slug}` });
        });
      });
    });
    return items;
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (!query.trim()) { setSearchResults([]); return; }
    const lower = query.toLowerCase();
    setSearchResults(
      allSearchableItems.filter(item =>
        item.title.toLowerCase().includes(lower) || item.type.toLowerCase().includes(lower)
      ).slice(0, 8)
    );
  };

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/products', label: 'OUR PRODUCTS' },
    { href: '/gallery', label: 'GALLERY' },
    { href: '/amc', label: 'CUSTOMER SERVICE' },
    { href: '/business-opportunity', label: 'BUSINESS OPPORTUNITY' },
    { href: '/contact', label: 'CONTACT' },
  ];

  return (
    <>
      <style>{`
        .hamburger-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          flex-direction: column;
          gap: 5px;
          z-index: 1100;
          color: inherit;
        }
        .hamburger-btn span {
          display: block;
          width: 24px;
          height: 2px;
          background: currentColor;
          border-radius: 2px;
          transition: all 0.3s ease;
        }
        .hamburger-btn.open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .hamburger-btn.open span:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }
        .hamburger-btn.open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }
        .mobile-menu-overlay {
          position: fixed;
          inset: 0;
          background: rgba(3, 20, 60, 0.5);
          z-index: 1050;
          backdrop-filter: blur(4px);
        }
        .mobile-menu-drawer {
          position: fixed;
          top: 0;
          right: 0;
          width: 85%;
          max-width: 340px;
          height: 100dvh;
          background: linear-gradient(160deg, #021a30 0%, #03294d 50%, #054078 100%);
          z-index: 1100;
          display: flex;
          flex-direction: column;
          padding: 0;
          overflow-y: auto;
          box-shadow: -10px 0 40px rgba(0,0,0,0.4);
        }
        .mobile-menu-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .mobile-menu-close {
          background: rgba(255,255,255,0.1);
          border: none;
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          font-size: 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }
        .mobile-menu-close:hover { background: rgba(255,255,255,0.2); }
        .mobile-nav-links {
          padding: 24px 0;
          flex: 1;
        }
        .mobile-nav-link {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 28px;
          color: rgba(255,255,255,0.85);
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          border-left: 3px solid transparent;
          transition: all 0.2s ease;
        }
        .mobile-nav-link:hover, .mobile-nav-link:active {
          color: #38bdf8;
          border-left-color: #38bdf8;
          background: rgba(56,189,248,0.06);
          padding-left: 36px;
        }
        .mobile-nav-link i {
          width: 20px;
          text-align: center;
          opacity: 0.7;
          font-size: 15px;
        }
        .mobile-menu-footer {
          padding: 24px 28px;
          border-top: 1px solid rgba(255,255,255,0.1);
          display: flex;
          gap: 16px;
          align-items: center;
        }
        .mobile-cta-btn {
          flex: 1;
          padding: 14px;
          border-radius: 40px;
          font-size: 13px;
          font-weight: 800;
          text-align: center;
          text-decoration: none;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        .mobile-cta-primary {
          background: linear-gradient(135deg, #38bdf8, #0ea5e9);
          color: white;
        }
        .mobile-cta-secondary {
          background: rgba(255,255,255,0.1);
          color: white;
          border: 1px solid rgba(255,255,255,0.3);
        }

        /* Smart hide on desktop */
        @media (min-width: 769px) {
          .top-header.nav-hidden {
            transform: translateY(-110%);
            pointer-events: none;
          }
        }

        @media (max-width: 768px) {
          .header-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
          .top-header { padding: 8px 20px !important; }
          .top-header.scrolled { padding: 6px 20px !important; }
          .header-logo img { height: 52px !important; }
        }
      `}</style>

      <header className={`top-header ${isScrolled ? 'scrolled' : ''} ${isHidden ? 'nav-hidden' : ''}`}
        style={{ color: isScrolled ? 'var(--froven-dark)' : 'white' }}
      >
        <div className="header-logo">
          <a href="/">
            <img src="/logo/d1cf21trk9rmy0cwntfb9cvtq8_preview_0-ezremove.png" alt="Froven Innovations Logo" style={{ height: '55px' }} fetchPriority="high" loading="eager" />
          </a>
        </div>
        <nav className="header-nav">
          <a href="/">HOME</a>
          <Link href="/products">OUR PRODUCTS</Link>
          <Link href="/gallery">GALLERY</Link>
          <Link href="/amc">CUSTOMER SERVICE</Link>
          <Link href="/business-opportunity">BUSINESS OPPORTUNITY</Link>
          <Link href="/contact">CONTACT</Link>
        </nav>

        <div className="header-actions">
          <a href="tel:+919702273180" className="icon-btn" aria-label="Call Us" style={{ color: 'inherit', textDecoration: 'none' }}>
            <i className="fas fa-phone-alt"></i>
          </a>
          <button className="icon-btn" aria-label="Search" onClick={() => setIsSearchOpen(true)}>
            <i className="fas fa-search"></i>
          </button>
          {/* Hamburger button — mobile only */}
          <button
            className={`hamburger-btn ${isMobileMenuOpen ? 'open' : ''}`}
            aria-label="Toggle Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ color: isScrolled ? 'var(--froven-dark)' : 'white' }}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="mobile-menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="mobile-menu-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="mobile-menu-header">
                <img src="/logo/d1cf21trk9rmy0cwntfb9cvtq8_preview_0-ezremove.png" alt="Froven" style={{ height: '42px' }} />
                <button className="mobile-menu-close" onClick={() => setIsMobileMenuOpen(false)}>×</button>
              </div>

              <nav className="mobile-nav-links">
                {[
                  { href: '/', label: 'Home', icon: 'fa-house' },
                  { href: '/products', label: 'Our Products', icon: 'fa-box-open' },
                  { href: '/gallery', label: 'Gallery', icon: 'fa-images' },
                  { href: '/amc', label: 'Customer Service', icon: 'fa-headset' },
                  { href: '/business-opportunity', label: 'Business Opportunity', icon: 'fa-handshake' },
                  { href: '/contact', label: 'Contact', icon: 'fa-envelope' },
                  { href: '/rental', label: 'Rental Solutions', icon: 'fa-building' },
                  { href: '/sales', label: 'Sales Division', icon: 'fa-tag' },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="mobile-nav-link"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <i className={`fas ${link.icon}`}></i>
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mobile-menu-footer">
                <a href="/contact" className="mobile-cta-btn mobile-cta-primary" onClick={() => setIsMobileMenuOpen(false)}>
                  Get Quote
                </a>
                <a href="tel:+919702273180" className="mobile-cta-btn mobile-cta-secondary">
                  <i className="fas fa-phone" style={{ marginRight: 6 }}></i> Call
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Full Screen Search Modal Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(5, 64, 120, 0.92)', zIndex: 9999, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '100px' }}
          >
            <button
              onClick={() => { setIsSearchOpen(false); setTimeout(() => { setSearchQuery(''); setSearchResults([]); }, 300); }}
              style={{ position: 'absolute', top: '40px', right: '50px', background: 'none', border: 'none', color: 'white', fontSize: '50px', cursor: 'pointer', transition: 'transform 0.2s' }}
              onMouseOver={(e) => e.target.style.transform = 'scale(1.2)'}
              onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            >
              &times;
            </button>

            <motion.div
              initial={{ y: -30, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -20, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: 0.1, type: 'spring', stiffness: 200, damping: 20 }}
              style={{ width: '100%', maxWidth: '800px', padding: '0 20px' }}
            >
              <div style={{ position: 'relative' }}>
                <i className="fas fa-search" style={{ position: 'absolute', left: '30px', top: '24px', fontSize: '24px', color: '#94a3b8' }}></i>
                <input
                  autoFocus
                  type="text"
                  placeholder="Search products, categories, models..."
                  value={searchQuery}
                  onChange={handleSearch}
                  style={{ width: '100%', padding: '22px 30px 22px 70px', fontSize: '18px', borderRadius: '50px', border: 'none', outline: 'none', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', fontFamily: 'var(--font-inter), sans-serif', boxSizing: 'border-box' }}
                />
              </div>

              {searchQuery && (
                <div style={{ marginTop: '20px', background: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }}>
                  {searchResults.length > 0 ? (
                    searchResults.map((item, idx) => (
                      <Link
                        href={item.url}
                        key={idx}
                        onClick={() => { setIsSearchOpen(false); setTimeout(() => { setSearchQuery(''); setSearchResults([]); }, 300); }}
                        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', borderBottom: '1px solid #f1f5f9', textDecoration: 'none', color: 'var(--text-main)', transition: 'background-color 0.2s', gap: '12px' }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f8fafc'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                      >
                        <span style={{ fontSize: '16px', fontWeight: 600 }}>{item.title}</span>
                        <span style={{ color: '#64748b', fontSize: '11px', backgroundColor: '#f1f5f9', padding: '4px 12px', borderRadius: '20px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', whiteSpace: 'nowrap', flexShrink: 0 }}>{item.type}</span>
                      </Link>
                    ))
                  ) : (
                    <div style={{ padding: '40px 24px', textAlign: 'center', color: '#64748b' }}>
                      <i className="fas fa-box-open" style={{ fontSize: '36px', marginBottom: '12px', color: '#cbd5e1', display: 'block' }}></i>
                      <div style={{ fontSize: '16px' }}>No results for "{searchQuery}"</div>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
