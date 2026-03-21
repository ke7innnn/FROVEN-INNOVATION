'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    
    const body = `Name: ${form.firstName.value} ${form.lastName.value}
Email: ${form.email.value}
Phone: ${form.phone.value}

Message:
${form.message.value}`;

    window.location.href = `mailto:froveninnovations@outlook.com?subject=${encodeURIComponent(form.subject.value)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="app-container">
      <Header />
      
      <main className="contact-main">
        {/* Contact Hero */}
        <section className="contact-hero">
          <div className="contact-hero-content">
            <h1 className="meet-heading">GET IN <span className="highlight">TOUCH</span></h1>
            <p className="meet-description">
              We're here to help you find the perfect commercial refrigeration solutions for your business. Reach out to our experts today.
            </p>
          </div>
        </section>

        {/* Contact Content Area */}
        <section className="contact-content-section">
          <div className="contact-container">
            {/* Left Box: Contact Info */}
            <div className="contact-info-panel">
              <h2 className="contact-subtitle">Contact Information</h2>
              <p className="contact-text">Fill out the form and our team will get back to you within 24 hours.</p>
              
              <div className="contact-details">
                <a href="tel:+919702273180" className="contact-detail-item" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', transition: 'transform 0.2s', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.transform='translateX(5px)'} onMouseOut={(e) => e.currentTarget.style.transform='translateX(0)'}>
                  <div className="detail-icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <h4>Call Us</h4>
                    <p>+91 97022 73180</p>
                  </div>
                </a>
                
                <a href="https://wa.me/919702273180" target="_blank" rel="noopener noreferrer" className="contact-detail-item" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', transition: 'transform 0.2s', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.transform='translateX(5px)'} onMouseOut={(e) => e.currentTarget.style.transform='translateX(0)'}>
                  <div className="detail-icon" style={{ backgroundColor: '#25D366', color: 'white' }}>
                    <i className="fa-brands fa-whatsapp"></i>
                  </div>
                  <div>
                    <h4>WhatsApp</h4>
                    <p>+91 97022 73180</p>
                  </div>
                </a>

                <a href="mailto:froveninnovations@outlook.com" className="contact-detail-item" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', transition: 'transform 0.2s', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.transform='translateX(5px)'} onMouseOut={(e) => e.currentTarget.style.transform='translateX(0)'}>
                  <div className="detail-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4>Email Us</h4>
                    <p>froveninnovations@outlook.com</p>
                  </div>
                </a>
                
                <div className="contact-detail-item">
                  <div className="detail-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4>Registered Office</h4>
                    <p>No.11, Chandan Apartment, Jail Road Behind Mahajan Hospital Sane Guruji Nagar Nashik, Maharashtra – 422101 India.</p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="detail-icon">
                    <i className="fas fa-building"></i>
                  </div>
                  <div>
                    <h4>Corporate Office</h4>
                    <p>219, Golden Park Commercial Complex, Behind Parvati Cinema, Navghar Manickpur, SAI Nagar, Vasai West, Palghar-401201, Maharashtra</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Box: Form */}
            <div className="contact-form-panel">
              <h2 className="contact-form-title">Send us a Message</h2>
              <p className="contact-form-subtitle">We would love to hear from you. Fill out the details below.</p>
              <form className="premium-contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" required />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" />
                  </div>
                </div>
                
                <div className="form-group full-width">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" required />
                </div>
                
                <div className="form-group full-width">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                
                <button type="submit" className="contact-submit-btn">Send Message <i className="fas fa-paper-plane"></i></button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
