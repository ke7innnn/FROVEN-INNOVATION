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
    <div className="app-container" style={{ backgroundColor: '#ffffff' }}>
      <Header />

      <main style={{ paddingTop: '80px' }}>

        {/* ══════════════════════════════════════════
            SECTION 1 – OUR Gallery
            Left: Big heading + subtitle
            Right: Tall portrait image with rounded corners
        ══════════════════════════════════════════ */}
        <section style={{ padding: '60px 60px 50px', maxWidth: '1300px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '80px' }}>

            {/* Left */}
            <div style={{ flex: '0 0 360px' }}>
              <h1 style={{
                fontSize: '80px', fontWeight: 400, lineHeight: '1.05',
                color: '#0d1b2a', margin: 0,
                fontFamily: 'Georgia, "Times New Roman", serif',
              }}>
                OUR<br />
                <span style={{ fontStyle: 'italic' }}>Gallery</span>
              </h1>
              <p style={{
                fontSize: '18px', color: '#64748b', lineHeight: '1.8',
                marginTop: '36px', maxWidth: '340px', fontWeight: 400,
              }}>
                A curated look at where our technology meets the world —
                exhibitions, trade floors, and live installations that define
                what modern refrigeration looks and performs like."
              </p>
            </div>

            {/* Right – tall portrait, pushed to edge */}
            <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
              <Img
                src="/gallersection/section 1/OUR Gallery — Main Image.jpeg"
                alt="OUR Gallery"
                radius="32px"
                style={{ width: '100%', maxWidth: '600px', height: '680px' }}
              />
            </div>
          </div>
        </section>

        <div style={{ height: '40px' }} />

        {/* ══════════════════════════════════════════
            SECTION 2 – Step Inside / Featured + 4-grid
            Right: wide landscape image with rounded corners
            Bottom: 4 landscape thumbnails with rounded corners
        ══════════════════════════════════════════ */}
        <section style={{ padding: '50px 60px', maxWidth: '1300px', margin: '0 auto' }}>

          {/* Two-column: text left, landscape image right */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '60px' }}>
            <div style={{ flex: '0 0 300px', paddingTop: '14px' }}>
              <p style={{
                fontSize: '18px', color: '#34495e', lineHeight: '1.85',
                fontStyle: 'italic', fontWeight: 400,
              }}>
                Step inside Froven Innovations — where refrigeration meets
                craftsmanship. Our gallery brings together the full picture:
                the products we engineer, the installations we deliver, the
                exhibitions we lead, and the people behind every project.
                From factory floor to final fit-out, this is our work in full."
              </p>
            </div>

            {/* Landscape featured image */}
            <div style={{ flex: 1 }}>
              <Img
                src="/gallersection/section2/featured image.jpeg"
                alt="Featured"
                radius="24px"
                style={{ width: '100%', height: '400px' }}
              />
            </div>
          </div>

          {/* 4 landscape thumbnails */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
            marginTop: '28px',
          }}>
            {[1, 2, 3, 4].map((n) => (
              <div key={n} style={{ borderRadius: '20px', overflow: 'hidden', height: '220px' }}>
                <img
                  src={`/gallersection/section2/Gallery Image ${n}.jpeg`}
                  alt={`Gallery ${n}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
                />
              </div>
            ))}
          </div>
        </section>

        <div style={{ height: '40px' }} />

        {/* ══════════════════════════════════════════
            SECTION 3 – Live Exhibition
            Left: Two BIGGER side-by-side images stacked above heading
            Right: Tall portrait image with connector line
        ══════════════════════════════════════════ */}
        <section style={{ padding: '50px 60px 80px', maxWidth: '1300px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '50px' }}>

            {/* Left column */}
            <div style={{ flex: '0 0 480px', display: 'flex', flexDirection: 'column', gap: '32px' }}>

              {/* Two vertical stacked exhibition images */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <Img
                  src="/gallersection/section 3/Exhibition Img 1.jpeg"
                  alt="Exhibition 1"
                  radius="24px"
                  style={{ width: '100%', height: '260px' }}
                />
                <Img
                  src="/gallersection/section 3/Exhibition Img 2.jpeg"
                  alt="Exhibition 2"
                  radius="24px"
                  style={{ width: '100%', height: '260px' }}
                />
              </div>

              {/* "Live Exhibition" heading */}
              <h2 style={{
                fontSize: '72px', fontWeight: 400, lineHeight: '1.05',
                color: '#0d1b2a', margin: 0,
                fontFamily: 'Georgia, "Times New Roman", serif',
              }}>
                Live<br />
                <span style={{ fontStyle: 'italic' }}>Exhibition</span>
              </h2>
            </div>

            {/* Right: tall portrait + connector line */}
            <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center' }}>
              {/* Vertical connector line */}
              <div style={{
                position: 'absolute',
                left: '-26px',
                top: '10%',
                bottom: '10%',
                width: '1px',
                backgroundColor: '#cbd5e1',
                opacity: 0.5,
              }} />
              <Img
                src="/gallersection/section 3/Live Exhibition — Main Image.jpeg"
                alt="Live Exhibition Main"
                radius="28px"
                cover={false}
                style={{ width: '100%' }}
              />
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
