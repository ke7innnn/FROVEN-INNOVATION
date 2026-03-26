'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Link from 'next/link';

export const productsList = [
  { id: 1, name: 'Visicooler', slug: 'visicooler', image: '/product thumbnail/visi cooler.jpeg', type: 'image', centerImage: true },
  { id: 7, name: 'Mini Bar', slug: 'minibars', image: '/product thumbnail/mini bar.jpeg', type: 'image', centerImage: true },
  { id: 10, name: 'Reach-In Static', slug: 'reach-in-static', image: '/product thumbnail/reach in static.jpeg', type: 'image', centerImage: true },
  { id: 11, name: 'Under Counter Static', slug: 'under-counter-static', image: '/product thumbnail/under counter static.jpeg', type: 'image', centerImage: true },
  { id: 12, name: 'Reach-In Ventilated', slug: 'reach-in-ventilated', image: '/product thumbnail/reach in ventilated].jpeg', type: 'image', centerImage: true },
  { id: 13, name: 'Under Counter Ventilated', slug: 'under-counter-ventilated', image: '/product thumbnail/static ventilated.jpeg', type: 'image', centerImage: true },
  { id: 14, name: 'Saladatte With Prep Table', slug: 'saladatte', image: '/product thumbnail/saladette.jpeg', type: 'image', centerImage: true },
  { id: 15, name: 'Refrigerated Topping Unit', slug: 'topping-unit', image: '/product thumbnail/refrigerated topping unit.jpeg', type: 'image', centerImage: true },
  { id: 16, name: 'Blast Freezer', slug: 'blast-freezer', image: '/product thumbnail/blast freezer.jpeg', type: 'image', centerImage: true },
  { id: 17, name: 'Back Bar', slug: 'back-bar', image: '/product thumbnail/back bar .jpeg', type: 'image', centerImage: true },
  { id: 18, name: 'Wine Chiller', slug: 'wine-chiller', image: '/product thumbnail/eine chiller.jpeg', type: 'image', centerImage: true },
  { id: 19, name: 'Ice Machine', slug: 'ice-machine', image: '/product thumbnail/water dispenser.png', type: 'image', centerImage: true },
  { id: 20, name: 'Mini Bar With Absorption', slug: 'minibar-absorption', image: '/product thumbnail/mini bar with absorbtion.jpeg', type: 'image', centerImage: true },
  { id: 21, name: 'Cake Display Cabinets', slug: 'cake-display', image: '/product thumbnail/cake.jpeg', type: 'image', centerImage: true },
  { id: 22, name: 'Water Dispenser', slug: 'water-dispenser', image: '/product thumbnail/ water dispenser new.jpeg', type: 'image', centerImage: true, containImage: true },
  { id: 23, name: 'Hard Top Chest Freezer', slug: 'hard-top-chest-freezer', image: '/product thumbnail/HARD TOP CHEST FREEZER.png', type: 'image', centerImage: true },
  { id: 24, name: 'Glass Top Chest Freezer', slug: 'glass-top-chest-freezer', image: '/product thumbnail/GLASS TOP CHEST FREEZER.png', type: 'image', centerImage: true },
  { id: 25, name: 'Hard Top Chest Freezer 70mm', slug: 'hard-top-chest-freezer-70mm', image: '/product thumbnail/HARD TOP CHEST FREEZER70MM.png', type: 'image', centerImage: true },
];

export default function ProductsPage() {
  return (
    <div className="app-container">
      <Header />
      
      <main className="products-main" style={{ backgroundColor: '#ffffff' }}>
        <section 
          className="products-hero" 
          style={{ 
            paddingBottom: '60px',
            backgroundImage: "url('https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=2000&auto=format&fit=crop')",
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
            <h1 className="meet-heading">OUR <span className="highlight">PRODUCTS</span></h1>
            <p className="meet-description">
              Discover our premium range of commercial refrigeration solutions tailored for your business needs. Clean, efficient, and reliable.
            </p>
          </div>
        </section>

        <section className="ref-grid-container" style={{ paddingTop: '60px' }}>
          <h2 className="ref-grid-header">PRODUCTS</h2>

          {/* Quick Nav Buttons */}
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginBottom: '50px', flexWrap: 'wrap' }}>
            <Link href="/sales" style={{ textDecoration: 'none' }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '12px',
                padding: '16px 40px', backgroundColor: 'var(--froven-dark-blue)',
                color: 'white', borderRadius: '50px', fontSize: '16px', fontWeight: 700,
                letterSpacing: '1.5px', textTransform: 'uppercase',
                boxShadow: '0 8px 20px rgba(5,64,120,0.25)',
                transition: 'all 0.3s ease', cursor: 'pointer'
              }}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 15px 30px rgba(5,64,120,0.35)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(5,64,120,0.25)'; }}
              >
                <i className="fas fa-tag"></i> SALES
              </div>
            </Link>
            <Link href="/rental" style={{ textDecoration: 'none' }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '12px',
                padding: '16px 40px', backgroundColor: 'var(--froven-dark-blue)',
                color: 'white', borderRadius: '50px', fontSize: '16px', fontWeight: 700,
                letterSpacing: '1.5px', textTransform: 'uppercase',
                boxShadow: '0 8px 20px rgba(5,64,120,0.25)',
                transition: 'all 0.3s ease', cursor: 'pointer'
              }}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 15px 30px rgba(5,64,120,0.35)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(5,64,120,0.25)'; }}
              >
                <i className="fas fa-boxes-stacked"></i> RENTAL
              </div>
            </Link>
          </div>

          <div className="ref-grid">

            {productsList.map((product) => (
              <Link href={`/products/${product.slug}`} key={product.id} style={{ textDecoration: 'none' }}>
                <div
                  className={`ref-card ${product.type === 'solid' ? 'solid-blue' : ''} ${product.centerImage ? 'center-image' : ''}`}
                >
                  <div className="ref-card-title">{product.name}</div>
                  {product.type === 'image' && (
                    <div
                      className="ref-card-image"
                      style={{
                        backgroundImage: `url('${product.image}')`,
                        ...(product.containImage ? { backgroundSize: 'contain', backgroundColor: '#f4f5f7' } : {})
                      }}
                    ></div>
                  )}
                  <div className="ref-card-arrow">→</div>
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
