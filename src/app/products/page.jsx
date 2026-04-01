'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { catalog } from '../../data/catalog';
import SnowParticles from '../../components/SnowParticles';

const categoryImages = {
  'commercial-refrigeration': '/calegory images/commercial refrigeration.png',
  'horeca': '/calegory images/horeca.png',
  'lab': '/calegory images/LAB.png',
  'confectionery-showcase': '/calegory images/confectionary.png',
  'super-market-refrigeration': '/calegory images/supermarket refrigeration.png',
  'cold-room': '/calegory images/coldroom.png',
};

export default function ProductsCategoriesPage() {
  return (
    <div className="app-container">
      <Header />
      
      <main className="products-main" style={{ backgroundColor: '#f0f4f8', minHeight: '80vh' }}>

        {/* HERO — full horeca image as background */}
        <section
          style={{
            position: 'relative',
            minHeight: '480px',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
          }}
        >
          <img
            src="/calegory images/horeca.png"
            alt="Hero Background"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              zIndex: 0,
            }}
          />
          {/* Strong dark overlay so text is always readable */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(3,20,60,0.92) 0%, rgba(5,64,120,0.75) 100%)',
            zIndex: 1,
          }} />
          <SnowParticles />
          <div style={{
            position: 'relative',
            zIndex: 2,
            width: '100%',
            maxWidth: '900px',
            margin: '0 auto',
            padding: '120px 40px 80px',
            textAlign: 'center',
          }}>
            <div style={{
              display: 'inline-block',
              padding: '8px 24px',
              backgroundColor: 'rgba(56,189,248,0.15)',
              border: '1px solid rgba(56,189,248,0.4)',
              borderRadius: '30px',
              color: '#38bdf8',
              fontSize: '12px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              fontWeight: 700,
              marginBottom: '24px',
            }}>
              Product Range
            </div>
            <h1 style={{
              fontSize: '64px',
              fontWeight: 900,
              color: '#ffffff',
              lineHeight: 1.05,
              marginBottom: '20px',
              letterSpacing: '-1.5px',
              textShadow: '0 4px 30px rgba(0,0,0,0.4)',
            }}>
              OUR <span style={{
                background: 'linear-gradient(90deg, #bae6fd, #38bdf8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>CATEGORIES</span>
            </h1>
            <p style={{
              fontSize: '18px',
              color: 'rgba(255,255,255,0.85)',
              lineHeight: 1.7,
              maxWidth: '600px',
              margin: '0 auto',
            }}>
              Select an industry sector to explore our specialized commercial cooling solutions.
            </p>
          </div>
        </section>

        {/* CATEGORY CARDS */}
        <section style={{ maxWidth: '1400px', margin: '80px auto 120px', padding: '0 40px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))',
            gap: '36px',
          }}>
            {catalog.map((category) => {
              const imgSrc = categoryImages[category.slug];
              return (
                <Link key={category.slug} href={`/products/${category.slug}`} style={{ textDecoration: 'none' }}>
                  <div
                    style={{
                      background: '#ffffff',
                      borderRadius: '24px',
                      overflow: 'hidden',
                      boxShadow: '0 15px 50px rgba(5,64,120,0.12)',
                      transition: 'transform 0.5s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.5s ease',
                      cursor: 'pointer',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-10px)';
                      e.currentTarget.style.boxShadow = '0 35px 70px rgba(5,64,120,0.2), 0 0 25px rgba(56,189,248,0.15)';
                      const img = e.currentTarget.querySelector('.cat-img');
                      if (img) img.style.transform = 'scale(1.06)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 15px 50px rgba(5,64,120,0.12)';
                      const img = e.currentTarget.querySelector('.cat-img');
                      if (img) img.style.transform = 'scale(1)';
                    }}
                  >
                    {/* Full landscape image — no cropping */}
                    <div style={{ overflow: 'hidden', lineHeight: 0 }}>
                      {imgSrc && (
                        <img
                          className="cat-img"
                          src={imgSrc}
                          alt={category.name}
                          style={{
                            width: '100%',
                            height: 'auto',
                            display: 'block',
                            transition: 'transform 0.7s cubic-bezier(0.165, 0.84, 0.44, 1)',
                          }}
                        />
                      )}
                    </div>

                    {/* Text panel — solid background for max readability */}
                    <div style={{
                      padding: '28px 32px 30px',
                      background: 'linear-gradient(180deg, #ffffff 0%, #f8faff 100%)',
                      borderTop: '3px solid #e8f4ff',
                    }}>
                      <h2 style={{
                        fontSize: '22px',
                        fontWeight: 900,
                        color: '#0f2a47',
                        lineHeight: 1.2,
                        marginBottom: '10px',
                        letterSpacing: '-0.3px',
                      }}>
                        {category.name}
                      </h2>
                      <p style={{
                        fontSize: '14px',
                        color: '#64748b',
                        lineHeight: 1.7,
                        marginBottom: '20px',
                      }}>
                        {category.description}
                      </p>
                      <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px',
                        color: '#054078',
                        fontWeight: 800,
                        fontSize: '12px',
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        borderBottom: '2px solid #38bdf8',
                        paddingBottom: '2px',
                      }}>
                        <span>VIEW PRODUCTS</span>
                        <span style={{ color: '#38bdf8' }}>→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
