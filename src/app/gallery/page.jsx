'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';

const galleryImages = [
  '/gallery/Screenshot 2026-04-20 at 7.00.41 PM.png',
  '/gallery/Screenshot 2026-04-20 at 7.00.50 PM.png',
  '/gallery/Screenshot 2026-04-20 at 7.02.06 PM.png',
  '/gallery/Screenshot 2026-04-20 at 7.02.16 PM.png',
  '/gallery/Screenshot 2026-04-20 at 7.02.40 PM.png',
  '/gallery/Screenshot 2026-04-20 at 7.02.54 PM.png',
  '/gallery/Screenshot 2026-04-20 at 7.06.22 PM.png',
  '/gallery/Screenshot 2026-04-20 at 7.13.48 PM.png'
];

export default function GalleryPage() {
  return (
    <div className="app-container" style={{ backgroundColor: '#f8fafc', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1, padding: '120px 20px 80px', maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h1 style={{ color: '#0f172a', fontSize: '3rem', fontWeight: '800', marginBottom: '16px' }}>Gallery</h1>
        </div>
        
        {/* Uncropped Masonry Grid Layout */}
        <div style={{ 
          columnCount: 1, 
          columnGap: '24px', 
        }} 
        className="gallery-grid"
        >
          {galleryImages.map((src, index) => (
            <div key={index} style={{ 
              breakInside: 'avoid', 
              marginBottom: '24px',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#fff',
              position: 'relative'
            }}>
              <Image 
                src={src} 
                alt={`Froven Installation ${index + 1}`} 
                width={800} 
                height={600} 
                className="hover-zoom"
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  display: 'block', 
                }} 
                unoptimized
              />
            </div>
          ))}
        </div>
        
        <style dangerouslySetInnerHTML={{__html: `
          @media (min-width: 640px) {
            .gallery-grid { column-count: 2 !important; }
          }
          @media (min-width: 1024px) {
            .gallery-grid { column-count: 3 !important; }
          }
          .hover-zoom {
            transition: transform 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
          }
          .hover-zoom:hover {
            transform: scale(1.03);
          }
        `}} />
      </main>
      <Footer />
    </div>
  );
}
