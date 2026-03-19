import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <h1>FROVEN</h1>
              <p>THE COMMERCIAL REFRIGERATION EXPERTS</p>
            </div>
            <p className="brand-desc">
              Froven Innovations is India's leading commercial refrigeration company.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          
          <div className="footer-col">
            <h3>Products</h3>
            <ul>
              <li><a href="#">Beverage Solutions</a></li>
              <li><a href="#">Kitchen Solutions</a></li>
              <li><a href="#">Retail Solutions</a></li>
              <li><a href="#">Healthcare Solutions</a></li>
              <li><a href="#">Horeca Solutions</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3>Support</h3>
            <ul>
              <li><a href="#">Service Request</a></li>
              <li><a href="#">Track Service</a></li>
              <li><a href="#">Warranty Policy</a></li>
              <li><a href="#">User Manuals</a></li>
              <li><a href="#">Locate Service Center</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3>Company</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Milestones</a></li>
              <li><a href="#">Media Center</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>Copyright © froveninnovations.com 2026. All rights reserved.</p>
          <div className="bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
