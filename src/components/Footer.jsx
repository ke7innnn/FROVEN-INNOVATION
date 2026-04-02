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
          </div>
          
          <div className="footer-col">
            <h3>Products</h3>
            <ul>
              <li><Link href="/products">All Products</Link></li>
              <li><Link href="/products/commercial-refrigeration/visi-cooler">Visi Cooler</Link></li>
              <li><Link href="/products/commercial-refrigeration/hard-top-chest-freezer">Chest Freezers</Link></li>
              <li><Link href="/products/horeca/blast-chillers-freezers">Blast Freezer</Link></li>
              <li><Link href="/products/horeca/water-dispenser">Water Dispenser</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3>Services</h3>
            <ul>
              <li><Link href="/rental">Rental Solutions</Link></li>
              <li><Link href="/amc">AMC Services</Link></li>
              <li><Link href="/sales">Sales & Equipment</Link></li>
              <li><Link href="/warranty-activation">Warranty Activation</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3>Explore</h3>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/products">Catalog</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/contact">Get a Quote</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>Copyright © froveninnovations.com 2026. All rights reserved.</p>
          <div className="bottom-links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-use">Terms of Use</Link>
            <Link href="/refund-policy">Refund Policy</Link>
            <Link href="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
