'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function GalleryPage() {
  return (
    <div className="app-container" style={{ backgroundColor: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1, backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ 
          color: '#0a1628', 
          fontSize: '3rem', 
          fontWeight: '700', 
          letterSpacing: '0.2em',
          opacity: 0.1
        }}>COMING SOON</h1>
      </main>
    </div>
  );
}
