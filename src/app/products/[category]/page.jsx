'use client';

import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import { catalog } from '../../../data/catalog';
import { notFound } from 'next/navigation';
import SnowParticles from '../../../components/SnowParticles';

const categoryImages = {
  'commercial-refrigeration': '/calegory images/commercial refrigeration.png',
  'horeca': '/calegory images/horeca.png',
  'lab': '/calegory images/LAB.png',
  'confectionery-showcase': '/calegory images/confectionary.png',
  'super-market-refrigeration': '/calegory images/supermarket refrigeration.png',
  'cold-room': '/calegory images/coldroom.png',
};

export default function CategoryProductsPage({ params }) {
  const { category: categorySlug } = React.use(params);
  const categoryContext = catalog.find(c => c.slug === categorySlug);
  if (!categoryContext) notFound();

  const heroBg = categoryImages[categorySlug];

  return (
    <div className="app-container">
      <Header />
      
      <main className="products-main" style={{ backgroundColor: '#ffffff', minHeight: '80vh' }}>

        {/* HERO with category image */}
        <section style={{ position: 'relative', minHeight: '480px', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
          {heroBg && (
            <img
              src={heroBg}
              alt={categoryContext.name}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', zIndex: 0 }}
            />
          )}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(3,20,60,0.92) 0%, rgba(5,64,120,0.78) 100%)', zIndex: 1 }} />
          <SnowParticles />

          <div style={{ position: 'relative', zIndex: 2, width: '100%', padding: '140px 40px 80px', textAlign: 'center' }}>
            <div style={{ display: 'inline-block', padding: '8px 20px', backgroundColor: 'rgba(56,189,248,0.12)', border: '1px solid rgba(56,189,248,0.3)', borderRadius: '30px', color: '#38bdf8', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '24px', fontWeight: 700 }}>
              <Link href="/products" style={{ color: '#38bdf8', textDecoration: 'none' }}>Categories</Link>
              <span style={{ color: 'rgba(255,255,255,0.4)', margin: '0 8px' }}>/</span>
              {categoryContext.name}
            </div>
            <h1 style={{ fontSize: '60px', fontWeight: 900, lineHeight: 1.05, margin: '0 auto 20px', letterSpacing: '-1.5px', textShadow: '0 4px 30px rgba(0,0,0,0.4)' }}>
              <span style={{ background: 'linear-gradient(90deg, #bae6fd, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {categoryContext.name.toUpperCase()}
              </span>
            </h1>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, maxWidth: '700px', margin: '0 auto' }}>
              {categoryContext.description} Select a product type below to view available models and specifications.
            </p>
          </div>
        </section>

        {/* PRODUCTS GRID */}
        <section className="ref-grid-container" style={{ paddingTop: '20px', margin: '40px auto 80px' }}>
          <p className="ref-grid-header">PRODUCTS</p>
          <h2 style={{ fontSize: '32px', fontWeight: 900, color: '#0f2a47', marginBottom: '12px', letterSpacing: '-0.5px' }}>{categoryContext.name} Range</h2>
          <p style={{ fontSize: '16px', color: '#64748b', marginBottom: '40px' }}>
            {categoryContext.products.length} product line(s) available in this category.
          </p>

          <div className="ref-grid">
            {categoryContext.products.map((product) => (
              <Link key={product.slug} href={`/products/${categorySlug}/${product.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="ref-card center-image" style={{ cursor: 'pointer' }}>
                  <div
                    className="ref-card-image"
                    style={{ 
                      backgroundColor: '#f8fafc', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      borderBottom: '1px solid #e8edf3',
                      backgroundImage: product.image ? `url('${product.image}')` : 'none',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: product.image ? (
                        product.slug === 'visi-cooler' ? 'contain' :
                        categorySlug === 'horeca' ? '160%' :
                        categorySlug === 'confectionery-showcase' ? 'contain' : '130%'
                      ) : 'contain',
                    }}
                  >
                    {!product.image && <i className="fas fa-cube" style={{ fontSize: '48px', color: '#cbd5e1' }}></i>}
                  </div>
                  <div className="ref-card-title">{product.name}</div>
                  <div className="ref-card-arrow" style={{ color: 'var(--text-gray)', backgroundColor: '#fff' }}>
                    <span style={{ color: 'var(--froven-blue)', fontWeight: 800 }}>{product.models.length}</span> {product.models.length === 1 ? 'Model Available' : 'Models Available'}
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
