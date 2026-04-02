'use client';

import React from 'react';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import Link from 'next/link';
import { catalog } from '../../../../data/catalog';
import { notFound } from 'next/navigation';
import '../../../products/product-details.css'; // Link the premium detail styling

export default function ProductModelsPage({ params }) {
  const { category: categorySlug, product: productSlug } = React.use(params);
  
  // Hover Zoom State
  const [isZooming, setIsZooming] = React.useState(false);
  const [zoomPos, setZoomPos] = React.useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPos({ x, y });
  };
  
  const categoryContext = catalog.find(c => c.slug === categorySlug);
  if (!categoryContext) notFound();

  const productContext = categoryContext.products.find(p => p.slug === productSlug);
  if (!productContext) notFound();

  // Find related products (exclude current)
  const relatedProducts = categoryContext.products.filter(p => p.slug !== productSlug).slice(0, 4);

  return (
    <div className="pd-page">
      <Header />
      
      <div className="pd-breadcrumb">
        <Link href="/">Home</Link> / <Link href="/products">Products</Link> / <Link href={`/products/${categorySlug}`}>{categoryContext.name}</Link> / <span style={{color: 'var(--text-main)', fontWeight: 600}}>{productContext.name}</span>
      </div>

      <div className="pd-container">
        
        {/* SECTION 1: Product Overview (Split View) */}
        <section className="pd-main">
          {/* Left Side: Product Image Gallery / Hero */}
          <div className="pd-gallery">
            <div 
              className="pd-main-image"
              onMouseEnter={() => setIsZooming(true)}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setIsZooming(false)}
              style={{ cursor: isZooming ? 'crosshair' : 'zoom-in' }}
            >
              {productContext.image ? (
                <img 
                  src={productContext.image} 
                  alt={productContext.name} 
                  style={{ 
                    transformOrigin: isZooming ? `${zoomPos.x}% ${zoomPos.y}%` : 'center center',
                    transform: isZooming 
                      ? (categorySlug === 'confectionery-showcase' ? 'scale(2.2)' : 'scale(2.8)') 
                      : (categorySlug === 'confectionery-showcase' ? 'scale(1.1)' : 'scale(1.5)'),
                    transition: isZooming ? 'transform 0.1s ease-out' : 'transform 0.5s ease, transform-origin 0.5s ease',
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                  }}
                />
              ) : (
                <i className="fas fa-image" style={{ fontSize: '120px', color: '#cbd5e1' }}></i>
              )}
            </div>
            {/* Model Pills below image if available */}
            {productContext.models && productContext.models.length > 0 && (
              <div style={{ marginTop: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
                {productContext.models.map(m => (
                  <span key={m.id} style={{ padding: '6px 12px', background: 'white', border: '1px solid #e1e8f0', borderRadius: '30px', fontSize: '13px', color: '#64748b', fontWeight: 600, boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
                    Model: {m.id}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Right Side: Key Features & Description */}
          <div className="pd-info">
            <div className="pd-badge">{categoryContext.name} Category</div>
            <h1 className="pd-title">{productContext.name}</h1>
            
            <p style={{ fontSize: '18px', color: '#64748b', lineHeight: '1.7', marginBottom: '40px' }}>
              {productContext.pageData ? productContext.pageData.description : "A high-performance commercial cooling solution engineered for modern business needs."}
            </p>

            {productContext.pageData && productContext.pageData.features && (
              <div className="pd-features">
                {productContext.pageData.features.map((feature, idx) => (
                  <div key={idx} className="pd-feature-item">
                    <div className="pd-feature-icon">
                      <i className={feature.icon}></i>
                    </div>
                    <div style={{ fontSize: '16px', color: '#334155', lineHeight: '1.5' }}>
                      {feature.text.includes(':') ? (
                        <>
                          <strong style={{ color: '#0f2a47' }}>{feature.text.split(':')[0]}:</strong>
                          {feature.text.substring(feature.text.indexOf(':') + 1)}
                        </>
                      ) : (
                        <span>{feature.text}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            <div className="pd-actions" style={{ marginTop: '40px' }}>
              <a href="#inquiry-form" className="pd-enquire-btn">
                Inquire Now <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 2: Technical Specifications Table */}
        {productContext.pageData && productContext.pageData.table && (
          <section className="pd-tech-specs">
            <h2 className="pd-section-title">Technical Specifications</h2>
            <div className="pd-table-wrapper">
              <table className="pd-table">
                <thead>
                  <tr>
                    {productContext.pageData.table.headers.map((header, idx) => (
                      <th key={idx}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {productContext.pageData.table.rows.map((row, rowIdx) => (
                    <tr key={rowIdx}>
                      {row.map((cell, cellIdx) => (
                        <td key={cellIdx}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ marginTop: '20px', fontSize: '14px', color: '#94a3b8', textAlign: 'center' }}>
              * Specifications, features, and design are subject to change without prior notice for product improvement.
            </p>
          </section>
        )}

      </div>

      {/* SECTION 3: Related Products (Category context grid) */}
      {relatedProducts.length > 0 && (
        <section className="pd-related">
          <div className="pd-container">
            <h2 className="pd-section-title" style={{ textAlign: 'left', fontSize: '32px', marginBottom: '40px' }}>Explore More from {categoryContext.name}</h2>
            <div className="pd-related-grid">
              {relatedProducts.map(related => (
                <Link key={related.slug} href={`/products/${categorySlug}/${related.slug}`} style={{ textDecoration: 'none' }}>
                  <div className="related-card" style={{ height: '100%' }}>
                    <div 
                      className="related-image-wrapper"
                      style={{ 
                        padding: categorySlug === 'horeca' ? '0' : '24px',
                        overflow: 'hidden'
                      }}
                    >
                      {related.image ? (
                        <img 
                          src={related.image} 
                          alt={related.name} 
                          style={{ 
                            transform: categorySlug === 'confectionery-showcase' ? 'scale(1)' : 
                                       categorySlug === 'horeca' ? 'scale(1.5)' : 'scale(1.15)',
                            width: categorySlug === 'horeca' ? '100%' : 'auto',
                            height: categorySlug === 'horeca' ? '100%' : 'auto',
                            objectFit: categorySlug === 'horeca' ? 'cover' : 'contain'
                          }} 
                        />
                      ) : (
                        <i className="fas fa-cube" style={{ fontSize: '48px', color: '#cbd5e1' }}></i>
                      )}
                    </div>
                    <div className="related-bottom">
                      <span className="related-name">{related.name}</span>
                      <span className="related-readmore">View Specs</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 4: Query Form */}
      <section className="pd-contact-section" id="inquiry-form">
        <div className="pd-contact-container">
          <div className="pd-contact-info">
            <h2>Product Inquiry</h2>
            <p>Interested in the <strong>{productContext.name}</strong>? Fill out the form below, and our sales team will reach out with pricing, availability, and an official quotation.</p>
            
            <div className="pd-contact-links">
              <span><i className="fas fa-phone-alt" style={{ color: '#38bdf8' }}></i> +91 97022 73180</span>
              <span><i className="fas fa-envelope" style={{ color: '#38bdf8' }}></i> froveninnovations@outlook.com</span>
            </div>
          </div>

          <form 
            className="pd-contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              const name = e.target.elements[0].value;
              const phone = e.target.elements[1].value;
              const msg = e.target.elements[2].value;
              const subject = `Inquiry regarding ${productContext.name} (${productContext.models && productContext.models[0] ? productContext.models[0].id : 'General Form'})`;
              const body = `Customer Name: ${name}\nPhone Number: ${phone}\n\nProduct Profile: ${productContext.name}\n\nClient Message:\n${msg}`;
              window.location.href = `mailto:froveninnovations@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            }}
          >
            <input type="text" placeholder="Your Name or Company Name" required />
            <input type="tel" placeholder="Your Phone Number" required />
            <textarea placeholder="Tell us about your requirement (e.g., bulk order, customized dimensions, shipping to specific state)..." required></textarea>
            <button type="submit">Submit Inquiry</button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
