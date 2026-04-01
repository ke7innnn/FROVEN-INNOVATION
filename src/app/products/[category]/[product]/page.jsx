'use client';

import React from 'react';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import Link from 'next/link';
import { catalog } from '../../../../data/catalog';
import { notFound } from 'next/navigation';
import SnowParticles from '../../../../components/SnowParticles';

export default function ProductModelsPage({ params }) {
  const { category: categorySlug, product: productSlug } = React.use(params);
  
  const categoryContext = catalog.find(c => c.slug === categorySlug);
  if (!categoryContext) notFound();

  const productContext = categoryContext.products.find(p => p.slug === productSlug);
  if (!productContext) notFound();

  return (
    <div className="app-container">
      <Header />
      
      <main className="products-main" style={{ backgroundColor: '#ffffff', minHeight: '80vh' }}>
        <section 
          className="products-hero" 
          style={{ 
            paddingBottom: '80px',
            backgroundColor: 'var(--froven-blue)',
            position: 'relative'
          }}
        >
          {/* Dot Matrix Pattern */}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'16\' height=\'16\' viewBox=\'0 0 16 16\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'2\' cy=\'2\' r=\'1\' fill=\'%23ffffff\' fill-opacity=\'0.1\'/%3E%3C/svg%3E")', zIndex: 0 }}></div>
          <SnowParticles />
          <div className="products-hero-content" style={{ position: 'relative', zIndex: 2, paddingTop: '160px', paddingLeft: '40px', paddingRight: '40px', textAlign: 'center' }}>
            <div style={{ display: 'inline-block', padding: '8px 20px', backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '30px', color: '#fff', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px', fontWeight: 700 }}>
              <Link href="/products" style={{ color: 'var(--froven-light)', textDecoration: 'none' }}>Categories</Link> /{' '}
              <Link href={`/products/${categorySlug}`} style={{ color: 'var(--froven-yellow)', textDecoration: 'none' }}>{categoryContext.name}</Link> /{' '}
              {productContext.name}
            </div>
            <h1 className="meet-heading" style={{ margin: '0 auto 20px', fontSize: '56px' }}>
              <span className="highlight" style={{ color: '#fff' }}>{productContext.name.toUpperCase()}</span>
            </h1>
            <p className="meet-description" style={{ margin: '0 auto', fontSize: '18px', maxWidth: '800px', lineHeight: '1.6', textAlign: 'left' }}>
              {productContext.pageData ? productContext.pageData.description : "Showing all available models for this product line. (Images and technical specifications coming soon)."}
            </p>
          </div>
        </section>

        {productContext.pageData && (
          <>
            {/* KEY FEATURES SECTION */}
            <section style={{ maxWidth: '1200px', margin: '80px auto', padding: '0 20px' }}>
              <h2 style={{ fontSize: '28px', color: '#0084a8', marginBottom: '40px', fontWeight: 800 }}>KEY FEATURES</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '40px', textAlign: 'center' }}>
                {productContext.pageData.features.map((feature, idx) => (
                  <div key={idx} style={{ padding: '20px' }}>
                    <i className={feature.icon} style={{ fontSize: '60px', color: '#0084a8', marginBottom: '20px' }}></i>
                    <p style={{ fontSize: '16px', fontWeight: 600, color: '#333' }}>{feature.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* TECHNICAL SPECIFICATIONS SECTION */}
            <section style={{ maxWidth: '1200px', margin: '80px auto', padding: '0 20px', overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd', minWidth: '800px' }}>
                <thead>
                  <tr>
                    <th 
                      colSpan={productContext.pageData.table.headers.length}
                      style={{ 
                        padding: '16px 20px', 
                        background: 'linear-gradient(135deg, #054078 0%, #0ea5e9 100%)', 
                        color: 'white', 
                        fontWeight: 900, 
                        fontSize: '15px',
                        letterSpacing: '3px',
                        textTransform: 'uppercase',
                        textAlign: 'center'
                      }}
                    >
                      📋 SPECIFICATIONS
                    </th>
                  </tr>
                  <tr style={{ backgroundColor: '#f0f7ff', borderBottom: '2px solid #0ea5e9' }}>
                    {productContext.pageData.table.headers.map((header, idx) => (
                      <th key={idx} style={{ padding: '16px 12px', textAlign: 'left', fontWeight: 'bold', borderRight: idx === 0 ? '2px solid #ddd' : '1px solid #ddd', color: '#054078', fontSize: '13px', letterSpacing: '0.5px' }}>
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {productContext.pageData.table.rows.map((row, rowIdx) => {
                    const isModelRow = row[0]?.toLowerCase().includes('model');
                    return (
                      <tr 
                        key={rowIdx} 
                        style={{ 
                          borderBottom: '1px solid #ddd',
                          backgroundColor: isModelRow ? '#f8fafc' : 'transparent'
                        }}
                      >
                        {row.map((cell, cellIdx) => (
                          <td 
                            key={cellIdx} 
                            style={{ 
                              padding: '16px 12px', 
                              borderRight: cellIdx === 0 ? '2px solid #ddd' : '1px solid #ddd', 
                              fontWeight: cellIdx === 0 || isModelRow ? 'bold' : 'normal',
                              color: 'inherit'
                            }}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <p style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>Note : Specifications, features, and color are subject to change without intimation.</p>
            </section>
          </>
        )}

        <section className="ref-grid-container" style={{ paddingTop: '20px', margin: '40px auto 80px' }}>
          <p className="ref-grid-header">MODELS AVAILABLE</p>
          <h2 style={{ fontSize: '32px', fontWeight: 900, color: '#0f2a47', marginBottom: '12px', letterSpacing: '-0.5px' }}>{productContext.name} Range</h2>
          <p style={{ fontSize: '16px', color: '#64748b', marginBottom: '40px' }}>
            {productContext.models.length} model(s) in this series.
          </p>

          <div className="ref-grid">
            {productContext.models.map((model) => (
              <div key={model.id} className="ref-card center-image" style={{ cursor: 'default' }}>
                <div
                  className="ref-card-image"
                  style={{
                    backgroundColor: '#f8fafc',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottom: '1px solid #e8edf3',
                    backgroundImage: productContext.image ? `url('${productContext.image}')` : 'none',
                    backgroundSize: productContext.image ? (categorySlug === 'confectionery-showcase' ? 'contain' : '130%') : 'contain', /* Zoomed out for confectionery */
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  {!productContext.image && <i className="fas fa-cube" style={{ fontSize: '48px', color: '#cbd5e1' }}></i>}
                </div>
                <div className="ref-card-title">{model.name}</div>
                <div className="ref-card-arrow" style={{ color: 'var(--text-gray)', backgroundColor: '#fff' }}>
                  Model ID: <span style={{ color: 'var(--froven-blue)', fontWeight: 800 }}>{model.id}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
