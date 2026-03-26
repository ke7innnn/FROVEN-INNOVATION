import React from 'react';
import Link from 'next/link';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <h1>FROVEN</h1>
              </Link>
              <p>THE COMMERCIAL REFRIGERATION EXPERTS</p>
            </div>
            <p className="brand-desc">
              Froven Innovations is India's leading commercial refrigeration company.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          
          <div className="footer-col">
            <h3>Products Selection</h3>
            <ul>
              <li><Link href="/products/visicooler">Beverage Solutions</Link></li>
              <li><Link href="/products/reach-in-ventilated">Kitchen Solutions</Link></li>
              <li><Link href="/products/visicooler">Retail Solutions</Link></li>
              <li><Link href="/products/reach-in-static">Healthcare Solutions</Link></li>
              <li><Link href="/products">Horeca Solutions</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3>Business Services</h3>
            <ul>
              <li><Link href="/sales">Sales & Equipment</Link></li>
              <li><Link href="/rental">Rental Solutions</Link></li>
              <li><Link href="/amc">AMC Services</Link></li>
              <li><Link href="/contact">Maintenance & Repair</Link></li>
              <li><Link href="/contact">Warranty Support</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3>About Froven</h3>
            <ul>
              <li><Link href="/#meet-the-pro">Meet the Pro</Link></li>
              <li><Link href="/#sustainable-cooling">Sustainable Cooling</Link></li>
              <li><Link href="/#brands">Our Brands</Link></li>
              <li><Link href="/#stats">Froven Stats</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>Copyright © froveninnovations.com 2026. All rights reserved.</p>
          <div className="bottom-links">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Use</Link>
            <Link href="/products">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
