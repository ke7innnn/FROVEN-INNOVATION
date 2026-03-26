'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

const logoSrc = '/logo/d1cf21trk9rmy0cwntfb9cvtq8_preview_0-ezremove.png';

/* ──────────────────────────────────────────────────────────
   Reusable box for images (real or placeholder)
────────────────────────────────────────────────────────── */
function ImgBox({ style = {}, rounded = false, label = '', src = '' }) {
  if (src) {
    return (
      <div style={{
        borderRadius: rounded ? '32px' : '6px',
        overflow: 'hidden',
        ...style
      }}>
        <img 
          src={src} 
          alt={label || 'Gallery Image'} 
          style={{ width: '100%', height: 'auto', maxHeight: '100%', objectFit: 'contain', display: 'block' }} 
        />
      </div>
    );
  }
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        flexShrink: 0,
        borderRadius: rounded ? '18px' : '6px',
        ...style,
      }}
    >
      <span style={{ color: '#94a3b8', fontSize: '13px', fontWeight: 500, textAlign: 'center', padding: '8px' }}>
        {label || 'Image Placeholder'}
      </span>
    </div>
  );
}

export default function GalleryPage() {
  return (
    <div className="app-container" style={{ backgroundColor: '#ffffff' }}>
      <Header />

      <main style={{ paddingTop: '80px' }}>

        {/* ══════════════════════════════════════════
            SECTION 1 – OUR Gallery (Now at TOP)
        ══════════════════════════════════════════ */}
        <section style={{ padding: '60px 60px', maxWidth: '1300px', margin: '0 auto' }}>
          {/* Two-column: heading + large image */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '80px' }}>
            {/* Left: Heading + subtitle */}
            <div style={{ flex: '0 0 340px' }}>
              <h1 style={{
                fontSize: '80px', fontWeight: 400, lineHeight: '1.05',
                color: '#0d1b2a', margin: 0,
                fontFamily: 'Georgia, "Times New Roman", serif'
              }}>
                OUR<br />
                <span style={{ fontStyle: 'italic' }}>Gallery</span>
              </h1>
              <p style={{
                fontSize: '18px', color: '#64748b', lineHeight: '1.8',
                marginTop: '40px', maxWidth: '340px', fontWeight: 400
              }}>
                A curated look at where our technology meets the world —
                exhibitions, trade floors, and live installations that define
                what modern refrigeration looks and performs like."
              </p>
            </div>

            {/* Right: Large portrait-ish image – Pushed to the right edge */}
            <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
              <div style={{ width: '100%', maxWidth: '540px' }}>
                <ImgBox
                  rounded
                  label="OUR Gallery — Main Image"
                  src="/gallersection/section 1/OUR Gallery — Main Image.jpeg"
                  style={{ width: '100%', aspectRatio: '0.72', height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </section>

        <div style={{ height: '40px' }} />

        {/* ══════════════════════════════════════════
            SECTION 2 – Intro / Featured Image
        ══════════════════════════════════════════ */}
        <section style={{ padding: '60px 60px 40px', maxWidth: '1300px', margin: '0 auto' }}>
          {/* Two-column: text + featured image */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '60px' }}>
            {/* Left: Text */}
            <div style={{ flex: '0 0 320px', paddingTop: '20px' }}>
              <p style={{
                fontSize: '18px', color: '#34495e', lineHeight: '1.85',
                fontStyle: 'italic', fontWeight: 400
              }}>
                Step inside Froven Innovations — where refrigeration meets
                craftsmanship. Our gallery brings together the full picture:
                the products we engineer, the installations we deliver, the
                exhibitions we lead, and the people behind every project.
                From factory floor to final fit-out, this is our work in full."
              </p>
            </div>

            {/* Right: Featured image (Landscape) */}
            <div style={{ flex: 1 }}>
              <ImgBox
                rounded
                label="Featured Image"
                src="/gallersection/section2/featured image.jpeg"
                style={{ width: '100%', aspectRatio: '1.8', height: 'auto' }}
              />
            </div>
          </div>

          {/* Bottom row – 4 small images */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
            marginTop: '40px'
          }}>
            {[1, 2, 3, 4].map((num) => (
              <ImgBox
                key={num}
                rounded
                label={`Gallery Image ${num}`}
                src={`/gallersection/section2/Gallery Image ${num}.jpeg`}
                style={{ width: '100%', aspectRatio: '1.3', height: 'auto' }}
              />
            ))}
          </div>
        </section>

        <div style={{ height: '40px' }} />

        {/* ══════════════════════════════════════════
            SECTION 3 – Live Exhibition
        ══════════════════════════════════════════ */}
        <section style={{ padding: '60px 60px 80px', maxWidth: '1300px', margin: '0 auto' }}>
          {/* Two-column layout */}
          <div style={{ display: 'flex', alignItems: 'stretch', gap: '60px' }}>

            {/* Left: 2 stacked small images + heading */}
            <div style={{ flex: '0 0 420px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              {/* Two side-by-side images connected by a line */}
              <div style={{ position: 'relative' }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                  <ImgBox
                    rounded
                    label="Exhibition Img 1"
                    src="/gallersection/section 3/Exhibition Img 1.jpeg"
                    style={{ width: '100%', aspectRatio: '1.4', height: 'auto' }}
                  />
                  <ImgBox
                    rounded
                    label="Exhibition Img 2"
                    src="/gallersection/section 3/Exhibition Img 2.jpeg"
                    style={{ width: '100%', aspectRatio: '1.4', height: 'auto' }}
                  />
                </div>
                {/* Horizontal connector line */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '-40px',
                  right: '-40px',
                  height: '1px',
                  backgroundColor: '#cbd5e1',
                  zIndex: 0,
                  pointerEvents: 'none',
                  opacity: 0.5
                }} />
              </div>

              {/* Heading below the images */}
              <div style={{ marginTop: '40px' }}>
                <h2 style={{
                  fontSize: '72px', fontWeight: 400, lineHeight: '1.05',
                  color: '#0d1b2a', margin: 0,
                  fontFamily: 'Georgia, "Times New Roman", serif'
                }}>
                  Live<br />
                  <span style={{ fontStyle: 'italic' }}>Exhibition</span>
                </h2>
              </div>
            </div>

            {/* Right: Large exhibition image with vertical connector line */}
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', position: 'relative' }}>
              {/* Vertical line from top */}
              <div style={{
                position: 'absolute',
                left: '-30px',
                top: '10%',
                bottom: '10%',
                width: '1px',
                backgroundColor: '#cbd5e1',
                opacity: 0.5
              }} />
              <ImgBox
                rounded
                label="Live Exhibition — Main Image"
                src="/gallersection/section 3/Live Exhibition — Main Image.jpeg"
                style={{ width: '100%', aspectRatio: '0.9', height: 'auto' }}
              />
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
