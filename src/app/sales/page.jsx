'use client';

import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import SnowParticles from '../../components/SnowParticles';

const products = [
  { id: 1, name: 'Visicooler', slug: 'visicooler', image: '/product thumbnail/visi cooler.jpeg', type: 'image', centerImage: true, category: 'commercial' },
  { id: 7, name: 'Mini Bar', slug: 'minibars', image: '/product thumbnail/mini bar.jpeg', type: 'image', centerImage: true, category: 'horeca' },
  { id: 10, name: 'Reach-In Static', slug: 'reach-in-static', image: '/product thumbnail/reach in static.jpeg', type: 'image', centerImage: true, category: 'commercial' },
  { id: 11, name: 'Under Counter Static', slug: 'under-counter-static', image: '/product thumbnail/under counter static.jpeg', type: 'image', centerImage: true, category: 'commercial' },
  { id: 12, name: 'Reach-In Ventilated', slug: 'reach-in-ventilated', image: '/product thumbnail/reach in ventilated].jpeg', type: 'image', centerImage: true, category: 'commercial' },
  { id: 13, name: 'Under Counter Ventilated', slug: 'under-counter-ventilated', image: '/product thumbnail/static ventilated.jpeg', type: 'image', centerImage: true, category: 'commercial' },
  { id: 14, name: 'Saladatte With Prep Table', slug: 'saladatte', image: '/product thumbnail/saladette.jpeg', type: 'image', centerImage: true, category: 'horeca' },
  { id: 15, name: 'Refrigerated Topping Unit', slug: 'topping-unit', image: '/product thumbnail/refrigerated topping unit.jpeg', type: 'image', centerImage: true, category: 'horeca' },
  { id: 16, name: 'Blast Freezer', slug: 'blast-freezer', image: '/product thumbnail/blast freezer.jpeg', type: 'image', centerImage: true, category: 'commercial' },
  { id: 17, name: 'Back Bar', slug: 'back-bar', image: '/product thumbnail/back bar .jpeg', type: 'image', centerImage: true, category: 'horeca' },
  { id: 18, name: 'Wine Chiller', slug: 'wine-chiller', image: '/product thumbnail/eine chiller.jpeg', type: 'image', centerImage: true, category: 'horeca' },
  { id: 19, name: 'Ice Machine', slug: 'ice-machine', image: '/product thumbnail/water dispenser.png', type: 'image', centerImage: true, category: 'commercial' },
  { id: 20, name: 'Mini Bar With Absorption', slug: 'minibar-absorption', image: '/product thumbnail/mini bar with absorbtion.jpeg', type: 'image', centerImage: true, category: 'horeca' },
  { id: 21, name: 'Cake Display Cabinets', slug: 'cake-display', image: '/product thumbnail/cake.jpeg', type: 'image', centerImage: true, category: 'horeca' },
];

export default function SalesPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const displayProducts = products.filter(p => !selectedCategory || p.category === selectedCategory);

  return (
    <div className="app-container">
      <Header />
      
      <main className="products-main" style={{ backgroundColor: '#ffffff', minHeight: '80vh' }}>
        <section 
          className="products-hero" 
          style={{ 
            paddingBottom: '60px',
            backgroundImage: "url('https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=2000&auto=format&fit=crop')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative'
          }}
        >
          <div className="hero-overlay" style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'linear-gradient(to right, rgba(5,64,120,0.95), rgba(5,64,120,0.8))',
            zIndex: 1
          }}></div>
          <SnowParticles />
          <div className="products-hero-content" style={{ position: 'relative', zIndex: 2 }}>
            <h1 className="meet-heading">OUR <span className="highlight">SALES DIVISION</span></h1>
            <p className="meet-description">
              Choose your industry sector to explore our specialized, high-performance equipment. 
            </p>
          </div>
        </section>

        {/* Category Selection View */}
        {!selectedCategory && (
          <section style={{ maxWidth: '1200px', margin: '80px auto', padding: '0 40px', display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <div 
              onClick={() => setSelectedCategory('commercial')}
              className="sales-category-card"
              style={{
                flex: '1', minWidth: '300px', maxWidth: '500px', height: '350px',
                backgroundImage: "url('/products/commercial_refrigeration_new.png')", backgroundSize: 'cover', backgroundPosition: 'center',
                position: 'relative', cursor: 'pointer', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
              }}
            >
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(3,41,77,0.9) 0%, rgba(3,41,77,0.2) 100%)' }}></div>
              <div style={{ position: 'absolute', bottom: '40px', left: '40px', color: 'white' }}>
                <h2 style={{ fontSize: '28px', marginBottom: '10px' }}>Commercial Refrigeration</h2>
                <p style={{ fontSize: '16px', opacity: 0.9 }}>Display Freezers, Back Bars, Ice Machines & more.</p>
                <div style={{ display: 'inline-block', marginTop: '20px', padding: '10px 24px', backgroundColor: 'var(--froven-blue)', borderRadius: '30px', fontWeight: 600 }}>Explore Products &rarr;</div>
              </div>
            </div>

            <div 
              onClick={() => setSelectedCategory('horeca')}
              className="sales-category-card"
              style={{
                flex: '1', minWidth: '300px', maxWidth: '500px', height: '350px',
                backgroundImage: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop')", backgroundSize: 'cover', backgroundPosition: 'center',
                position: 'relative', cursor: 'pointer', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
              }}
            >
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(3,41,77,0.9) 0%, rgba(3,41,77,0.2) 100%)' }}></div>
              <div style={{ position: 'absolute', bottom: '40px', left: '40px', color: 'white' }}>
                <h2 style={{ fontSize: '28px', marginBottom: '10px' }}>Horeca Solutions</h2>
                <p style={{ fontSize: '16px', opacity: 0.9 }}>Professional Hotel, Restaurant & Cafe equipment.</p>
                <div style={{ display: 'inline-block', marginTop: '20px', padding: '10px 24px', backgroundColor: 'var(--froven-blue)', borderRadius: '30px', fontWeight: 600 }}>Explore Products &rarr;</div>
              </div>
            </div>
          </section>
        )}

        {/* Products Grid View */}
        {selectedCategory && (
          <section className="ref-grid-container" style={{ paddingTop: '60px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
              <h2 className="ref-grid-header" style={{ margin: 0 }}>
                {selectedCategory === 'commercial' ? 'COMMERCIAL REFRIGERATION' : 'HORECA SOLUTIONS'}
              </h2>
              <button 
                onClick={() => setSelectedCategory(null)}
                style={{ padding: '10px 20px', backgroundColor: '#f1f5f9', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 600, color: 'var(--froven-dark-blue)' }}
              >
                &larr; Back to Categories
              </button>
            </div>
            
            <div className="ref-grid">
              {displayProducts.map((product) => (
                <Link href={`/products/${product.slug}`} key={product.id} style={{ textDecoration: 'none' }}>
                  <div className={`ref-card ${product.centerImage ? 'center-image' : ''}`}>
                    <div
                      className="ref-card-image"
                      style={{ backgroundImage: `url('${product.image}')` }}
                    />
                    <div className="ref-card-title">{product.name}</div>
                    <div className="ref-card-arrow">View Products</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

      </main>
      
      <Footer />
    </div>
  );
}
