'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SnowParticles from '../../components/SnowParticles';

export default function GalleryPage() {
  return (
    <div className="app-container" style={{ backgroundColor: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />

      <main style={{ flex: 1 }}>
        {/* Gallery Hero */}
        <section 
          className="products-hero" 
          style={{ 
            paddingBottom: '60px',
            backgroundImage: "url('https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2000&auto=format&fit=crop')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
            minHeight: '400px',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <div className="hero-overlay" style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'linear-gradient(135deg, rgba(10,22,40,0.92) 0%, rgba(5,64,120,0.80) 100%)',
            zIndex: 1
          }}></div>
          <SnowParticles />
          <div className="products-hero-content" style={{ position: 'relative', zIndex: 2, width: '100%', textAlign: 'center' }}>
            <h1 className="meet-heading">OUR <span className="highlight">GALLERY</span></h1>
            <p className="meet-description">
              A visual journey through our premium installations and engineering excellence.
            </p>
          </div>
        </section>

        <section style={{ padding: '80px 20px', textAlign: 'center' }}>
          <p style={{ color: '#64748b', fontSize: '18px' }}>Gallery content coming soon. We are currently curating our latest project photography.</p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
