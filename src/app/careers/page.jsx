'use client';
import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './careers.css';
import { motion } from 'framer-motion';
import SnowParticles from '../../components/SnowParticles';

const CareersPage = () => {
  const [fileName, setFileName] = useState('No file chosen');

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName('No file chosen');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    const subject = `Job Application: ${data.fullName}`;
    const body = `
Full Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
Address: ${data.address}
City: ${data.city}
State: ${data.state}

Message:
${data.message}

Note: Resume "${fileName}" is selected for upload. (Please attach the file to this email manually).
    `.trim();

    window.location.href = `mailto:froveninnovations@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="app-container">
      <Header />
      
      <main className="contact-main">
        {/* Careers Hero */}
        <section className="contact-hero">
          <SnowParticles />
          <div className="contact-hero-content">
            <h1 className="meet-heading">JOIN OUR <span className="highlight">TEAM</span></h1>
            <p className="meet-description">
              We're always looking for passionate individuals to join our mission. Build your career with India's leading refrigeration experts.
            </p>
          </div>
        </section>

        {/* careers Content Area */}
        <section className="contact-content-section">
          <div className="contact-container" style={{ maxWidth: '1300px' }}>
            {/* Left Box: Info */}
            <div className="contact-info-panel">
              <h2 className="contact-subtitle">Work with us</h2>
              <p className="contact-text">Submit your application and our HR team will review your profile within 48 hours.</p>
              
              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="detail-icon">
                    <i className="fas fa-users"></i>
                  </div>
                  <div>
                    <h4>Collaborative Culture</h4>
                    <p>Be part of a team that values innovation and teamwork.</p>
                  </div>
                </div>
                
                <div className="contact-detail-item">
                  <div className="detail-icon" style={{ backgroundColor: '#25D366', color: 'white' }}>
                    <i className="fa-brands fa-whatsapp"></i>
                  </div>
                  <div>
                    <h4>WhatsApp HR</h4>
                    <p>Connect with our recruitment team via WhatsApp for quick queries.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Box: Form */}
            <div className="contact-form-panel">
              <h2 className="contact-form-title">Application Form</h2>
              <p className="contact-form-subtitle">Fill out the details below to apply for a position.</p>
              
              <form className="premium-contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" name="fullName" placeholder="Enter your full name" required />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" name="email" placeholder="Enter your email" required />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" name="phone" placeholder="Enter phone number" required />
                  </div>
                  <div className="form-group">
                    <label>Upload Resume</label>
                    <div className="file-upload-wrapper">
                      <label htmlFor="resume-upload" className="custom-file-upload" style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '14px 20px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
                        <i className="fas fa-file-pdf" style={{ color: '#3b82f6' }}></i>
                        <span style={{ fontSize: '14px', color: '#64748b', fontWeight: 500 }}>{fileName}</span>
                      </label>
                      <input 
                        id="resume-upload" 
                        type="file" 
                        name="resume" 
                        accept=".pdf,.doc,.docx" 
                        style={{ display: 'none' }} 
                        onChange={handleFileChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>City</label>
                    <input type="text" name="city" placeholder="Your City" required />
                  </div>
                  <div className="form-group">
                    <label>State</label>
                    <input type="text" name="state" placeholder="Your State" required />
                  </div>
                </div>
                
                <div className="form-group full-width">
                  <label>Full Address</label>
                  <input type="text" name="address" placeholder="Enter your complete address" required />
                </div>
                
                <div className="form-group full-width">
                  <label>Message / Cover Letter</label>
                  <textarea name="message" rows="4" placeholder="Tell us why you're a great fit..." required></textarea>
                </div>
                
                <button type="submit" className="contact-submit-btn">Submit Application <i className="fas fa-paper-plane"></i></button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CareersPage;
