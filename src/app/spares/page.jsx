'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import SnowParticles from '../../components/SnowParticles';

export default function SparesPage() {
  return (
    <div className="app-container">
      <Header />
      
      <main className="products-main" style={{ backgroundColor: '#ffffff', minHeight: '80vh' }}>
        <section 
          className="products-hero" 
          style={{ 
            paddingBottom: '60px',
            backgroundImage: "url('/calegory images/horeca.png')", // Or another relevant background
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative'
          }}
        >
          <div className="hero-overlay" style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'linear-gradient(to right, rgba(5,64,120,0.95), rgba(5,64,120,0.8))',
            zIndex: 1
          }}></div>
          <SnowParticles />
          <div className="products-hero-content" style={{ position: 'relative', zIndex: 2 }}>
            <h1 className="meet-heading">SPARES & <span className="highlight">PARTS</span></h1>
            <p className="meet-description">
              Genuine, high-quality replacement parts for all your commercial refrigeration needs.
            </p>
          </div>
        </section>

        {/* Spares Information Section */}
        <section style={{ maxWidth: '1200px', margin: '80px auto', padding: '0 40px', textAlign: 'center' }}>
          <div style={{ marginBottom: '60px' }}>
            <span style={{ color: 'var(--froven-blue)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>Genuine Inventory</span>
            <h2 style={{ fontSize: '42px', color: 'var(--froven-dark-blue)', fontWeight: 900, marginTop: '16px' }}>
              Comprehensive Spares Support
            </h2>
            <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--froven-blue)', margin: '20px auto 30px' }}></div>
            <p style={{ fontSize: '18px', color: '#64748b', maxWidth: '850px', margin: '0 auto', lineHeight: '1.8' }}>
              We understand that downtime in the refrigeration business means significant loss. That&apos;s why we not only sell top-tier equipment but also provide immediate access to genuine, factory-authorized spare parts. Whether you require a critical compressor replacement, specialized thermostats, or routine Maintenance kits, Froven Innovations has you covered to guarantee your cold chain remains unbroken.
            </p>
            
            <div style={{ marginTop: '50px', display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ 
                padding: '16px 32px',
                backgroundColor: 'var(--froven-blue)',
                color: 'white',
                borderRadius: '50px',
                fontWeight: 700,
                textDecoration: 'none',
                boxShadow: '0 10px 20px rgba(5,64,120,0.15)',
                transition: 'all 0.3s ease'
              }}>
                Request a Part
              </Link>
              <Link href="/amc" style={{ 
                padding: '16px 32px',
                backgroundColor: 'white',
                color: 'var(--froven-dark-blue)',
                border: '1px solid var(--froven-blue)',
                borderRadius: '50px',
                fontWeight: 700,
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}>
                View Maintenance Services
              </Link>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
