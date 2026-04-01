'use client';
import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SnowParticles from '../../components/SnowParticles';
import './warranty.css';
import { motion } from 'framer-motion';

const WarrantyActivationPage = () => {
  const [docFile, setDocFile] = useState('No file chosen');
  const [proofFile, setProofFile] = useState('No file chosen');

  const handleFileChange = (e, setter) => {
    if (e.target.files && e.target.files.length > 0) {
      setter(e.target.files[0].name);
    } else {
      setter('No file chosen');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    const subject = `Warranty Activation: ${data.productName} - ${data.serialNumber}`;
    const body = `
WARRANTY ACTIVATION FORM DETAILS
-------------------------------
CUSTOMER INFORMATION:
Full Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
Address: ${data.address}
City: ${data.city}
State: ${data.state}

PRODUCT INFORMATION:
Product Name: ${data.productName}
Model Number: ${data.modelNumber}
Serial Number: ${data.serialNumber}

PURCHASE DETAILS:
Date of Purchase: ${data.purchaseDate}
Place of Purchase: ${data.purchasePlace}
Retailer/Dealer Name: ${data.retailerName}

FILES:
Supporting Docs: ${docFile}
Extended Warranty Proof: ${proofFile}

CONSENTS:
Agreed to Terms: ${data.terms ? 'Yes' : 'No'}
Receive Updates: ${data.updates ? 'Yes' : 'No'}

Note: Please attach the supporting documents and warranty proof manually to this email.
    `.trim();

    window.location.href = `mailto:froveninnovations@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="app-container">
      <Header />
      
      <main className="contact-main">
        {/* Warranty Hero */}
        <section className="contact-hero">
          <SnowParticles />
          <div className="contact-hero-content">
            <h1 className="meet-heading">WARRANTY <span className="highlight">ACTIVATION</span></h1>
            <p className="meet-description">
              Register your Froven equipment within 30 days of purchase to activate your full manufacturer warranty and ensure seamless service support.
            </p>
          </div>
        </section>

        {/* Warranty Content Area */}
        <section className="contact-content-section">
          <div className="contact-container" style={{ maxWidth: '1300px' }}>
            {/* Left Box: Info */}
            <div className="contact-info-panel">
              <h2 className="contact-subtitle">Support Center</h2>
              <p className="contact-text">Need help with your product or registration? Our technical support team is here to assist you.</p>
              
              <div className="contact-details">
                <a href="tel:+919702273180" className="contact-detail-item" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', transition: 'transform 0.2s', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.transform='translateX(5px)'} onMouseOut={(e) => e.currentTarget.style.transform='translateX(0)'}>
                  <div className="detail-icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <h4>Service Helpline</h4>
                    <p>+91 97022 73180</p>
                  </div>
                </a>
                
                <a href="https://wa.me/919702273180" target="_blank" rel="noopener noreferrer" className="contact-detail-item" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', transition: 'transform 0.2s', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.transform='translateX(5px)'} onMouseOut={(e) => e.currentTarget.style.transform='translateX(0)'}>
                  <div className="detail-icon" style={{ backgroundColor: '#25D366', color: 'white' }}>
                    <i className="fa-brands fa-whatsapp"></i>
                  </div>
                  <div>
                    <h4>WhatsApp Support</h4>
                    <p>+91 97022 73180</p>
                  </div>
                </a>

                <a href="mailto:froveninnovations@outlook.com" className="contact-detail-item" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', transition: 'transform 0.2s', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.transform='translateX(5px)'} onMouseOut={(e) => e.currentTarget.style.transform='translateX(0)'}>
                  <div className="detail-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4>Email Support</h4>
                    <p>froveninnovations@outlook.com</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Box: Form */}
            <div className="contact-form-panel">
              <h2 className="contact-form-title">Registration Form</h2>
              <p className="contact-form-subtitle">Fill out all fields below to register your product warranty.</p>
              
              <form className="premium-contact-form" onSubmit={handleSubmit}>
                <div style={{ marginBottom: '20px' }}>
                  <h3 style={{ fontSize: '14px', color: '#3b82f6', marginBottom: '15px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>1. Customer Information</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name</label>
                      <input type="text" name="fullName" placeholder="Enter your full name" required />
                    </div>
                    <div className="form-group">
                      <label>Email Address</label>
                      <input type="email" name="email" placeholder="email@example.com" required />
                    </div>
                  </div>
                  <div className="form-row" style={{ marginTop: '20px' }}>
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" required />
                    </div>
                    <div className="form-group">
                      <label>City</label>
                      <input type="text" name="city" placeholder="Your City" required />
                    </div>
                  </div>
                  <div className="form-row" style={{ marginTop: '20px' }}>
                    <div className="form-group">
                      <label>State</label>
                      <input type="text" name="state" placeholder="Your State" required />
                    </div>
                    <div className="form-group">
                      <label>Full Address</label>
                      <input type="text" name="address" placeholder="Complete postal address" required />
                    </div>
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <h3 style={{ fontSize: '14px', color: '#3b82f6', marginBottom: '15px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>2. Product Information</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Product Name</label>
                      <input type="text" name="productName" placeholder="e.g. Visi Cooler 300L" required />
                    </div>
                    <div className="form-group">
                      <label>Model Number</label>
                      <input type="text" name="modelNumber" placeholder="Enter model number" required />
                    </div>
                  </div>
                  <div className="form-row" style={{ marginTop: '20px' }}>
                    <div className="form-group">
                      <label>Serial Number</label>
                      <input type="text" name="serialNumber" placeholder="Enter serial number" required />
                    </div>
                    <div className="form-group">
                      <label>Date of Purchase</label>
                      <input type="date" name="purchaseDate" required />
                    </div>
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <h3 style={{ fontSize: '14px', color: '#3b82f6', marginBottom: '15px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>3. Purchase Documentation</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Place of Purchase</label>
                      <input type="text" name="purchasePlace" placeholder="City/Region" required />
                    </div>
                    <div className="form-group">
                      <label>Retailer Name</label>
                      <input type="text" name="retailerName" placeholder="Dealer/Shop Name" required />
                    </div>
                  </div>
                  
                  <div className="form-row" style={{ marginTop: '20px' }}>
                    <div className="form-group">
                      <label>Supporting Documents</label>
                      <div className="file-upload-wrapper">
                        <label htmlFor="doc-upload" className="custom-file-upload" style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '14px 20px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
                          <i className="fas fa-file-invoice" style={{ color: '#3b82f6' }}></i>
                          <span style={{ fontSize: '14px', color: '#64748b', fontWeight: 500 }}>{docFile}</span>
                        </label>
                        <input id="doc-upload" type="file" style={{ display: 'none' }} onChange={(e) => handleFileChange(e, setDocFile)} />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Extended Warranty Proof</label>
                      <div className="file-upload-wrapper">
                        <label htmlFor="proof-upload" className="custom-file-upload" style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '14px 20px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
                          <i className="fas fa-shield-alt" style={{ color: '#3b82f6' }}></i>
                          <span style={{ fontSize: '14px', color: '#64748b', fontWeight: 500 }}>{proofFile}</span>
                        </label>
                        <input id="proof-upload" type="file" style={{ display: 'none' }} onChange={(e) => handleFileChange(e, setProofFile)} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="warranty-checkbox-group" style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
                  <label className="checkbox-item" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#64748b', cursor: 'pointer' }}>
                    <input type="checkbox" name="terms" required style={{ width: '18px', height: '18px' }} />
                    <span>I Agree to Warranty Terms & Conditions</span>
                  </label>
                  <label className="checkbox-item" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#64748b', cursor: 'pointer' }}>
                    <input type="checkbox" name="updates" style={{ width: '18px', height: '18px' }} />
                    <span>Receive Updates & Offers</span>
                  </label>
                </div>
                
                <button type="submit" className="contact-submit-btn">Activate Warranty <i className="fas fa-paper-plane"></i></button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WarrantyActivationPage;
