'use client';

import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import { catalog } from '../../../data/catalog';
import { notFound } from 'next/navigation';

export default function CategoryProductsPage({ params }) {
  const { category: categorySlug } = React.use(params);
  
  const categoryContext = catalog.find(c => c.slug === categorySlug);
  
  if (!categoryContext) {
    notFound();
  }

  return (
    <div className="app-container">
      <Header />
      
      <main className="products-main" style={{ backgroundColor: '#ffffff', minHeight: '80vh' }}>
        <section 
          className="products-hero" 
          style={{ 
            paddingBottom: '80px',
            backgroundColor: 'var(--froven-dark-blue)',
            position: 'relative'
          }}
        >
          {/* Subtle tech background for hero */}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")', zIndex: 0 }}></div>
          <div className="products-hero-content" style={{ position: 'relative', zIndex: 2, paddingTop: '160px', paddingLeft: '40px', paddingRight: '40px', textAlign: 'center' }}>
            <div style={{ display: 'inline-block', padding: '8px 20px', backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '30px', color: '#fff', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px', fontWeight: 700 }}>
              <Link href="/products" style={{ color: 'var(--froven-yellow)', textDecoration: 'none' }}>Categories</Link> / {categoryContext.name}
            </div>
            <h1 className="meet-heading" style={{ margin: '0 auto 20px', fontSize: '56px' }}>
              <span className="highlight" style={{ color: '#fff' }}>{categoryContext.name.toUpperCase()}</span>
            </h1>
            <p className="meet-description" style={{ margin: '0 auto', fontSize: '18px', maxWidth: '700px' }}>
              {categoryContext.description} Select a product type below to view available models and specifications.
            </p>
          </div>
        </section>

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
                      borderBottom: '1px solid #e8edf3'
                    }}
                  >
                    <i className="fas fa-cube" style={{ fontSize: '48px', color: '#cbd5e1' }}></i>
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
