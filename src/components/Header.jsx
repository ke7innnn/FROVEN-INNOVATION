'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { catalog } from '../data/catalog';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Automatically catalog all categories, products, and sub-models into a searchable array
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
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }
    const lower = query.toLowerCase();
    setSearchResults(
      allSearchableItems.filter(item => 
        item.title.toLowerCase().includes(lower) || item.type.toLowerCase().includes(lower)
      ).slice(0, 8)
    );
  };

  return (
    <>
    <header className={`top-header ${isScrolled ? 'scrolled' : ''}`}>
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
      </div>
    </header>

    {/* Full Screen Search Modal Overlay */}
    {isSearchOpen && (
      <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(5, 64, 120, 0.95)', zIndex: 9999, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '100px' }}>
        <button 
          onClick={() => { setIsSearchOpen(false); setSearchQuery(''); setSearchResults([]); }} 
          style={{ position: 'absolute', top: '40px', right: '50px', background: 'none', border: 'none', color: 'white', fontSize: '50px', cursor: 'pointer', transition: 'transform 0.2s' }}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.2)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
        >
          &times;
        </button>
        
        <div style={{ width: '100%', maxWidth: '800px', padding: '0 20px', animation: 'fadeInDown 0.4s ease' }}>
          <div style={{ position: 'relative' }}>
            <i className="fas fa-search" style={{ position: 'absolute', left: '30px', top: '24px', fontSize: '24px', color: '#94a3b8' }}></i>
            <input 
              autoFocus
              type="text" 
              placeholder="Search for a product, category, or specific model (e.g., FVC200G)..." 
              value={searchQuery}
              onChange={handleSearch}
              style={{ width: '100%', padding: '22px 30px 22px 70px', fontSize: '20px', borderRadius: '50px', border: 'none', outline: 'none', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', fontFamily: 'inherit' }}
            />
          </div>
          
          {searchQuery && (
            <div style={{ marginTop: '20px', background: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }}>
              {searchResults.length > 0 ? (
                searchResults.map((item, idx) => (
                  <Link 
                    href={item.url} 
                    key={idx}
                    onClick={() => { setIsSearchOpen(false); setSearchQuery(''); setSearchResults([]); }}
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 30px', borderBottom: '1px solid #f1f5f9', textDecoration: 'none', color: 'var(--froven-dark)' }}
                  >
                    <span style={{ fontSize: '18px', fontWeight: 600 }}>{item.title}</span>
                    <span style={{ color: '#64748b', fontSize: '12px', backgroundColor: '#f1f5f9', padding: '6px 14px', borderRadius: '20px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{item.type}</span>
                  </Link>
                ))
              ) : (
                <div style={{ padding: '50px 30px', textAlign: 'center', color: '#64748b' }}>
                  <i className="fas fa-box-open" style={{ fontSize: '40px', marginBottom: '16px', color: '#cbd5e1' }}></i>
                  <div style={{ fontSize: '18px' }}>No equipment matches "{searchQuery}"</div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    )}
    </>
  );
};

export default Header;
