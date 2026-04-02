'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SnowParticles from '../../components/SnowParticles';

export default function RentalPage() {
  
  return (
    <div className="app-container">
      <Header />
      
      <main style={{ backgroundColor: '#ffffff', minHeight: '80vh' }}>
        
        {/* Hero Section */}
        <section 
          className="products-hero" 
          style={{ 
            paddingBottom: '60px',
            backgroundImage: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2000&auto=format&fit=crop')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative'
          }}
        >
          <div className="hero-overlay" style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'linear-gradient(135deg, rgba(10,22,40,0.92) 0%, rgba(5,64,120,0.80) 100%)',
            zIndex: 1
          }}></div>
          <SnowParticles />
          <div className="products-hero-content" style={{ position: 'relative', zIndex: 2 }}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="meet-heading">EQUIPMENT <span className="highlight">RENTALS</span></h1>
              <p className="meet-description">
                Flexible, short-term and long-term commercial refrigeration rental solutions completely tailored for your events, pop-ups, and seasonal business spikes.
              </p>
            </motion.div>
          </div>
        </section>
        {/* Rental Info Section */}
        <section style={{ maxWidth: '1200px', margin: '80px auto', padding: '0 40px', textAlign: 'center' }}>
          <div style={{ marginBottom: '60px' }}>
            <span style={{ color: '#ea580c', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>Our Services</span>
            <h2 style={{ fontSize: '42px', color: 'var(--froven-dark-blue)', fontWeight: 900, marginTop: '16px' }}>
              Sales & Rental Solutions
            </h2>
            <div style={{ width: '80px', height: '4px', backgroundColor: '#ea580c', margin: '20px auto 30px' }}></div>
            <p style={{ fontSize: '18px', color: '#64748b', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
              Froven Innovations provides premium refrigeration solutions for both long-term sales and short-term rentals. Whether you're looking to purchase high-performance equipment or need temporary cold storage for an event, our team is ready to assist you with the perfect setup.
            </p>
            <div style={{ marginTop: '40px' }}>
              <Link href="/contact" style={{ 
                display: 'inline-block',
                padding: '16px 32px',
                backgroundColor: 'var(--froven-blue)',
                color: 'white',
                borderRadius: '50px',
                fontWeight: 700,
                textDecoration: 'none',
                boxShadow: '0 10px 20px rgba(5,64,120,0.15)',
                transition: 'all 0.3s ease'
              }}>
                Enquire for Availability
              </Link>
            </div>
          </div>
        </section>
        
        {/* Rental Benefits Strip */}
        <section style={{ backgroundColor: '#f8fafc', padding: '80px 20px', marginTop: '80px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '40px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              { icon: 'fa-truck-fast', title: 'Rapid Deployment', text: 'Same-day delivery and installation for absolute emergency contingencies.' },
              { icon: 'fa-calendar-check', title: 'Flexible Terms', text: 'Rent equipment precisely for the duration you need, from a weekend pop-up to an annual lease.' },
              { icon: 'fa-wrench', title: 'Maintenance Included', text: 'Zero repair liability. All servicing is completely covered through your rental duration.' }
            ].map((ben, i) => (
              <div key={i} style={{ flex: '1', minWidth: '300px', textAlign: 'center', padding: '40px 20px', backgroundColor: 'white', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                <div style={{ width: '80px', height: '80px', margin: '0 auto 24px', backgroundColor: 'rgba(234,88,12,0.1)', color: '#ea580c', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className={`fa-solid ${ben.icon}`} style={{ fontSize: '32px' }}></i>
                </div>
                <h3 style={{ fontSize: '22px', color: 'var(--froven-dark-blue)', marginBottom: '16px', fontWeight: 800 }}>{ben.title}</h3>
                <p style={{ color: '#64748b', fontSize: '16px', lineHeight: '1.6' }}>{ben.text}</p>
              </div>
            ))}
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
