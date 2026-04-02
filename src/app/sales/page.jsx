'use client';

import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import SnowParticles from '../../components/SnowParticles';

export default function SalesPage() {
  return (
    <div className="app-container">
      <Header />
      
      <main className="products-main" style={{ backgroundColor: '#ffffff', minHeight: '80vh' }}>
        <section 
          className="products-hero" 
          style={{ 
            paddingBottom: '60px',
            backgroundImage: "url('/calegory images/horeca.png')",
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
            <h1 className="meet-heading">OUR <span className="highlight">SALES DIVISION</span></h1>
            <p className="meet-description">
              High-performance, reliable commercial refrigeration equipment designed for every industrial sector.
            </p>
          </div>
        </section>

        {/* Sales Information Section */}
        <section style={{ maxWidth: '1200px', margin: '80px auto', padding: '0 40px', textAlign: 'center' }}>
          <div style={{ marginBottom: '60px' }}>
            <span style={{ color: 'var(--froven-blue)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>Expert Solutions</span>
            <h2 style={{ fontSize: '42px', color: 'var(--froven-dark-blue)', fontWeight: 900, marginTop: '16px' }}>
              Specialized Equipment for Your Business
            </h2>
            <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--froven-blue)', margin: '20px auto 30px' }}></div>
            <p style={{ fontSize: '18px', color: '#64748b', maxWidth: '850px', margin: '0 auto', lineHeight: '1.8' }}>
              At Froven Innovations, we don't just sell equipment; we provide cooling architecture. Our sales division specializes in high-efficiency refrigeration systems tailored for commercial kitchens, Horeca sectors, and industrial laboratories. With a focus on durability and energy-saving technology, we ensure your business has the most reliable cold chain infrastructure available.
            </p>
            
            <div style={{ marginTop: '50px', display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/products" style={{ 
                padding: '16px 32px',
                backgroundColor: 'var(--froven-blue)',
                color: 'white',
                borderRadius: '50px',
                fontWeight: 700,
                textDecoration: 'none',
                boxShadow: '0 10px 20px rgba(5,64,120,0.15)',
                transition: 'all 0.3s ease'
              }}>
                Browse Product Catalog
              </Link>
              <Link href="/contact" style={{ 
                padding: '16px 32px',
                backgroundColor: 'white',
                color: 'var(--froven-dark-blue)',
                border: '1px solid var(--froven-blue)',
                borderRadius: '50px',
                fontWeight: 700,
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}>
                Talk to a Sales Expert
              </Link>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
