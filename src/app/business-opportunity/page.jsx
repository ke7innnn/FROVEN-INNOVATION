'use client';
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../careers/careers.css'; // Reuse file upload if needed, but not for this form
import { motion } from 'framer-motion';
import SnowParticles from '../../components/SnowParticles';

const BusinessOpportunityPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    const subject = `Business Inquiry: ${data.interestType} - ${data.companyName}`;
    const body = `
BUSINESS OPPORTUNITY INQUIRY
----------------------------
INVESTOR INFORMATION:
Full Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}

COMPANY DETAILS:
Company/Organization: ${data.companyName}
Website: ${data.website || 'N/A'}

INQUIRY DETAILS:
Type of Interest: ${data.interestType}

PROPOSAL / MESSAGE:
${data.message}
    `.trim();

    window.location.href = `mailto:froveninnovations@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="app-container">
      <Header />
      
      <main className="contact-main">
        {/* Business Hero */}
        <section className="contact-hero">
          <SnowParticles />
          <div className="contact-hero-content">
            <h1 className="meet-heading">BUSINESS <span className="highlight">OPPORTUNITY</span></h1>
            <p className="meet-description">
              Partner with India's leading commercial refrigeration brand. We're looking for visionary investors and strategic partners to scale our success.
            </p>
          </div>
        </section>

        {/* Business Content Area */}
        <section className="contact-content-section">
          <div className="contact-container" style={{ maxWidth: '1300px' }}>
            {/* Left Box: Info */}
            <div className="contact-info-panel">
              <h2 className="contact-subtitle">Why Partner With Us?</h2>
              <p className="contact-text">Froven Innovations offers a unique blend of heritage, engineering excellence, and market leadership.</p>
              
              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="detail-icon">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <div>
                    <h4>Proven Growth</h4>
                    <p>Consistent double-digit growth in the HORECA and retail sectors year-on-year.</p>
                  </div>
                </div>
                
                <div className="contact-detail-item">
                  <div className="detail-icon" style={{ backgroundColor: '#2563eb', color: 'white' }}>
                    <i className="fas fa-globe"></i>
                  </div>
                  <div>
                    <h4>Pan-India Presence</h4>
                    <p>A robust distribution network spanning across all major states and cities.</p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="detail-icon">
                    <i className="fas fa-handshake"></i>
                  </div>
                  <div>
                    <h4>Strategic Support</h4>
                    <p>Complete marketing, technical, and operational assistance for all our partners.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Box: Form */}
            <div className="contact-form-panel">
              <h2 className="contact-form-title">Business Inquiry Form</h2>
              <p className="contact-form-subtitle">Tell us about your interest. Our management team will get back to you.</p>
              
              <form className="premium-contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" name="fullName" placeholder="Enter your full name" required />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" name="email" placeholder="Enter your business email" required />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" name="phone" placeholder="Enter phone number" required />
                  </div>
                  <div className="form-group">
                    <label>Company/Organization Name</label>
                    <input type="text" name="companyName" placeholder="Your Company Name" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Company Website (Optional)</label>
                    <input type="url" name="website" placeholder="https://www.yourcompany.com" />
                  </div>
                  <div className="form-group">
                    <label>Type of Interest</label>
                    <select name="interestType" required style={{ width: '100%', padding: '16px 24px', border: '1px solid rgba(226, 232, 240, 0.8)', borderRadius: '16px', background: 'rgba(248, 250, 252, 0.9)', fontSize: '15px', color: '#0f172a', appearance: 'none', backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%20fill%3D%22none%22%20stroke%3D%22%2364748b%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 24px center', backgroundSize: '16px' }}>
                      <option value="" disabled selected>Select interest type</option>
                      <option value="Distributorship">Distributorship</option>
                      <option value="Investment / Equity">Investment / Equity</option>
                      <option value="Franchise Opportunity">Franchise Opportunity</option>
                      <option value="OEM Partnership">OEM Partnership</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group full-width">
                  <label>Proposal / Message</label>
                  <textarea name="message" rows="5" placeholder="Briefly describe your proposal or business query..." required></textarea>
                </div>
                
                <button type="submit" className="contact-submit-btn">Send Inquiry <i className="fas fa-paper-plane"></i></button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BusinessOpportunityPage;
