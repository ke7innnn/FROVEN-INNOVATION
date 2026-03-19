import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <h4>Get in Touch</h4>
            <h2>Let's discuss your <span className="highlight-yellow">Cooling</span> needs</h2>
            <p>Our experts are ready to help you find the perfect solution for your business.</p>
            
            <div className="info-items">
              <div className="info-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h3>Registered Office</h3>
                  <p>No.11, Chandan Apartment, Jail Road Behind Mahajan Hospital Sane Guruji Nagar Nashik, Maharashtra – 422101 India.</p>
                </div>
              </div>
              <div className="info-item">
                <i className="fas fa-building"></i>
                <div>
                  <h3>Corporate Office</h3>
                  <p>219, Golden Park Commercial Complex, Behind Parvati Cinema, Navghar Manickpur, SAI Nagar, Vasai West, Palghar-401201, Maharashtra</p>
                </div>
              </div>
              <div className="info-item">
                <i className="fas fa-phone-alt"></i>
                <div>
                  <h3>Call Us</h3>
                  <p>+91 9702273180</p>
                </div>
              </div>
              <div className="info-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h3>Email Us</h3>
                  <p>froveninnovations@outlook.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn-submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
