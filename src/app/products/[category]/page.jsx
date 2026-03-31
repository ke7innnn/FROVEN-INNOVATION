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

        <section style={{ maxWidth: '1300px', margin: '80px auto', padding: '0 40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
            {categoryContext.products.map((product) => (
              <Link key={product.slug} href={`/products/${categorySlug}/${product.slug}`} style={{ textDecoration: 'none' }}>
                <div 
                  className="sales-category-card"
                  style={{
                    height: '350px',
                    backgroundColor: 'var(--froven-blue)',
                    position: 'relative', cursor: 'pointer', borderRadius: '16px', overflow: 'hidden', 
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    transition: 'transform 0.4s ease, box-shadow 0.4s ease'
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 30px 60px rgba(5,64,120,0.2)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)'; }}
                >
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(3,41,77,0.95) 0%, rgba(3,41,77,0.2) 100%)' }}></div>
                  
                  {/* Diagonal Line Tech Pattern Overlay */}
                  <div style={{ 
                    position: 'absolute', inset: 0, 
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z\' fill=\'%23ffffff\' fill-opacity=\'0.03\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
                    zIndex: 0
                  }}></div>

                  <div style={{ position: 'absolute', bottom: '40px', left: '40px', right: '40px', color: 'white', zIndex: 1 }}>
                    <h2 style={{ fontSize: '28px', marginBottom: '12px', fontWeight: '800', lineHeight: '1.2' }}>{product.name}</h2>
                    <p style={{ fontSize: '15px', opacity: 0.9, marginBottom: '25px', lineHeight: '1.5', color: '#e2e8f0' }}>
                      {product.models.length} {product.models.length === 1 ? 'Model Available' : 'Models Available'}
                    </p>
                    <div style={{ display: 'inline-block', padding: '10px 24px', border: '2px solid rgba(255,255,255,0.4)', color: 'white', borderRadius: '30px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', transition: 'all 0.3s ease' }}
                         onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'var(--froven-dark-blue)'; e.currentTarget.style.borderColor = 'white'; }}
                         onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; }}>
                      View Models &rarr;
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
