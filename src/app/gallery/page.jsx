'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

/* ──────────────────────────────────────────────────────────
   Img: renders with object-fit cover so rounded corners clip properly
────────────────────────────────────────────────────────── */
function Img({ src, alt = '', radius = '32px', cover = true, style = {} }) {
  return (
    <div style={{
      borderRadius: radius,
      overflow: 'hidden',
      flexShrink: 0,
      ...style,
    }}>
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: cover ? '100%' : 'auto',
          objectFit: cover ? 'cover' : 'contain',
          display: 'block',
        }}
      />
    </div>
  );
}

export default function GalleryPage() {
  return (
    <div className="app-container" style={{ backgroundColor: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />

      <main style={{ flex: 1, paddingTop: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: '#64748b', fontSize: '18px' }}>Gallery content coming soon.</p>
      </main>

      <Footer />
    </div>
  );
}
