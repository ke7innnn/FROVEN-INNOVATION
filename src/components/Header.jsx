'use client';
import React, { useState, useEffect } from 'react';

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

  return (
    <header className={`top-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-logo">
        <a href="/">
          <img src="/logo/d1cf21trk9rmy0cwntfb9cvtq8_preview_0-ezremove.png" alt="Froven Innovations Logo" style={{ height: '60px' }} fetchPriority="high" loading="eager" />
        </a>
      </div>
      <nav className="header-nav">
        <a href="#">HOME</a>
        <a href="#">OUR PRODUCTS</a>
        <a href="#">GALLERY</a>
        <a href="#">PROJECTS</a>
        <a href="#contact">CONTACT</a>
      </nav>

      <div className="header-actions">
        <button className="icon-btn" aria-label="Call Us"><i className="fas fa-phone-alt"></i></button>
        <button className="icon-btn" aria-label="Login"><i className="far fa-user"></i></button>
        <button className="icon-btn" aria-label="Search"><i className="fas fa-search"></i></button>
      </div>
    </header>
  );
};

export default Header;
