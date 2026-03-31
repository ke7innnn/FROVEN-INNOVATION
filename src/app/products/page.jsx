'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { catalog } from '../../data/catalog';

export default function ProductsCategoriesPage() {
  return (
    <div className="app-container">
      <Header />
      
      <main className="products-main" style={{ backgroundColor: '#ffffff', minHeight: '80vh' }}>
        <section 
          className="products-hero" 
          style={{ 
            paddingBottom: '60px',
            backgroundImage: "url('/3 slides/slide 1new.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative'
          }}
        >
          <div className="hero-overlay" style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'linear-gradient(to right, rgba(5,64,120,0.9), rgba(5,64,120,0.7))',
            zIndex: 1
          }}></div>
          <div className="products-hero-content" style={{ position: 'relative', zIndex: 2 }}>
            <h1 className="meet-heading">OUR <span className="highlight">CATEGORIES</span></h1>
            <p className="meet-description">
              Select an industry sector to explore our specialized commercial cooling solutions.
            </p>
          </div>
        </section>

        <section style={{ maxWidth: '1300px', margin: '80px auto', padding: '0 40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
            {catalog.map((category) => (
              <Link key={category.slug} href={`/products/${category.slug}`} style={{ textDecoration: 'none' }}>
                <div 
                  className="sales-category-card"
                  style={{
                    height: '350px',
                    backgroundColor: 'var(--froven-dark-blue)',
                    position: 'relative', cursor: 'pointer', borderRadius: '16px', overflow: 'hidden', 
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    transition: 'transform 0.4s ease, box-shadow 0.4s ease'
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 30px 60px rgba(5,64,120,0.2)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)'; }}
                >
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(3,41,77,0.95) 0%, rgba(3,41,77,0.4) 100%)' }}></div>
                  
                  {/* Hexagon Pattern Overlay for premium tech feel since no bg images are provided yet */}
                  <div style={{ 
                    position: 'absolute', inset: 0, 
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M54.627 0l.83.6c-1.427 1.954-3.033 4.549-4.8 7.554-1.637 2.783-3.037 5.176-4.008 6.852l-1.04-.6c1.116-1.928 2.62-4.507 4.398-7.532 1.558-2.651 3.235-5.367 4.62-6.874zM45.69 13.923l1.04.6c-2.457 4.225-5.26 8.788-7.962 12.834l-1.04-.6c2.812-4.214 5.76-9.015 7.962-12.834zM32.895 33.195l1.04.6c-3.13 5.37-6.236 10.155-8.525 13.064l-1.039-.6c2.39-3.041 5.626-8.056 8.524-13.064zM18.81 51.527l1.04.6c-1.744 2.992-3.693 5.92-5.452 8.355l-1.04-.6c1.884-2.607 3.905-5.655 5.452-8.355z\' fill=\'%23ffffff\' fill-opacity=\'0.03\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
                    zIndex: 0
                  }}></div>

                  <div style={{ position: 'absolute', bottom: '40px', left: '40px', right: '40px', color: 'white', zIndex: 1 }}>
                    <h2 style={{ fontSize: '32px', marginBottom: '12px', fontWeight: '800', lineHeight: '1.2' }}>{category.name}</h2>
                    <p style={{ fontSize: '16px', opacity: 0.9, marginBottom: '25px', lineHeight: '1.5' }}>{category.description}</p>
                    <div style={{ display: 'inline-block', padding: '12px 28px', backgroundColor: 'var(--froven-yellow)', color: 'var(--froven-dark-blue)', borderRadius: '30px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
                      View Products &rarr;
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
