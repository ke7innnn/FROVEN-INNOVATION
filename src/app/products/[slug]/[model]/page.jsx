'use client';

import React, { useState } from 'react';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import '../../product-details.css';
import { productsData } from '../page';
import { productsList } from '../../page';

export default function SingleModelDetailsPage() {
  const params = useParams();
  const slug = params?.slug;
  const modelId = params?.model;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const body = `Name: ${form.name.value}\nEmail: ${form.email.value}\nMobile: ${form.mobile.value}\n\nMessage:\n${form.message.value}`;
    window.location.href = `mailto:froveninnovations@outlook.com?subject=${encodeURIComponent(form.subject.value)}&body=${encodeURIComponent(body)}`;
  };
  
  const [activeImage, setActiveImage] = useState(0);

  const product = productsData[slug];
  
  if (!product || !product.models) {
    return <div style={{ padding: '100px', textAlign: 'center' }}>Model not found</div>;
  }

  const modelDef = product.models.find(m => m.id === modelId);
  if (!modelDef) {
    return <div style={{ padding: '100px', textAlign: 'center' }}>Model not found</div>;
  }

  // Find column index for this model in the spec table
  // e.g. columns = ['Specification', 'FVC200G', 'FVC300G']
  // If modelDef.name is 'FVC200G', colIndex = 1
  const colIndex = product.specTable.columns.findIndex(
    col => col.toUpperCase() === modelDef.id.toUpperCase()
  );

  return (
    <div className="app-container pd-page">
      <Header />

      {/* Breadcrumb */}
      <div className="pd-breadcrumb">
        {product.breadcrumbs.map((crumb, idx) => (
          <span key={idx}>
            <Link href={idx === 0 ? '/' : '/products'}>{crumb}</Link>
            {' / '}
          </span>
        ))}
        <span>
          <Link href={`/products/${slug}`}>{product.name}</Link>
          {' / '}
        </span>
        <span>{modelDef.name}</span>
      </div>

      <div className="pd-container">
        
        {/* Main Product Info */}
        <div className="pd-main">
          {/* Left: Gallery */}
          <div className="pd-gallery">
            <div className="pd-main-image">
              <i className="fa-solid fa-magnifying-glass pd-magnify"></i>
              {(() => {
                const categoryImage = productsList?.find(p => p.slug === slug)?.image || modelDef.image || product.images[activeImage];
                return <img src={categoryImage} alt={modelDef.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />;
              })()}
            </div>
          </div>

          {/* Right: Info */}
          <div className="pd-info">
            <div className="pd-badge">Premium Choice</div>
            <h1 className="pd-title">{modelDef.name}</h1>
            <h3 style={{ color: '#64748b', marginTop: '-10px', marginBottom: '20px', fontSize: '18px' }}>
              Series: {product.sku}
            </h3>
            
            <div className="pd-features">
              {product.features.map((feature, idx) => (
                <div className="pd-feature-item" key={idx}>
                  <div className="pd-feature-icon">
                    <i className={feature.icon}></i>
                  </div>
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="pd-actions">
              <button className="pd-enquire-btn" onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Enquire Now <i className="fa-solid fa-paper-plane"></i>
              </button>
            </div>
            
            <div style={{ marginTop: '20px' }}>
              <Link href={`/products/${slug}`} style={{ color: 'var(--froven-dark-blue)', textDecoration: 'underline', fontWeight: 600 }}>
                ← Back to all {product.name} models
              </Link>
            </div>
          </div>
        </div>

        {/* Technical Specs for THIS model only */}
        <div className="pd-tech-specs">
          <h2 className="pd-section-title">Technical Specifications - {modelDef.name}</h2>
          <div className="pd-table-wrapper">
            <table className="pd-table" style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
              <thead>
                <tr>
                  <th>Specification</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                {product.specTable.rows.map((row, idx) => {
                  let valueToDisplay = 'N/A';
                  
                  if (row.values && colIndex > 0 && colIndex - 1 < row.values.length) {
                    // Standard array of values mapping to columns 1..N
                    valueToDisplay = row.values[colIndex - 1];
                  } else if (row.spans) {
                    // Value that spans multiple columns. 
                    // To be safe, we'll just show the first span value if it applies to all.
                    // E.g., { val: '2°C to 8°C', colSpan: 6 }
                    valueToDisplay = row.spans[0].val;
                  }

                  return (
                    <tr key={idx}>
                      <td style={{ fontWeight: 600, width: '40%' }}>{row.label}</td>
                      <td>{valueToDisplay}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Related Products */}
        <div className="pd-related">
          <h2 className="pd-section-title">Explore Other Categories</h2>
          <div className="pd-related-grid">
            {product.related.slice(0, 4).map((item) => (
              <Link href={item.link} key={item.id} className="related-card" style={{ textDecoration: 'none' }}>
                <div className="related-image-wrapper">
                  {(() => {
                    const relatedSlug = item.link.split('/').pop();
                    const relatedImage = productsList?.find(p => p.slug === relatedSlug)?.image || item.image;
                    return <img src={relatedImage} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />;
                  })()}
                </div>
                <div className="related-bottom">
                  <span className="related-name">{item.name}</span>
                  <span className="related-readmore">Read More</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>

      {/* Contact Section */}
      <div className="pd-contact-section" id="contact-section">
        <div className="pd-contact-container">
          <div className="pd-contact-info">
            <h2>GET IN TOUCH WITH US</h2>
            <p>Discover our top collections, carefully curated to deliver the best in quality, innovation, and performance.</p>
            
            <div className="pd-contact-links">
              <a href="https://wa.me/919702273180" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                <span><i className="fa-brands fa-whatsapp"></i> WhatsApp</span>
              </a>
              <a href="tel:+919702273180" style={{ textDecoration: 'none', color: 'inherit' }}>
                <span><i className="fa-solid fa-phone"></i> Call Now</span>
              </a>
            </div>
          </div>

          <form className="pd-contact-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="text" name="mobile" placeholder="Mobile Number" />
            <input type="text" name="subject" placeholder="Subject" defaultValue={`Enquiry for ${modelDef.name}`} required />
            <textarea name="message" placeholder="Message" required></textarea>
            <button type="submit">Request Call Back</button>
          </form>
        </div>
      </div>
      <div style={{ height: '80px' }}></div>
      <Footer />
    </div>
  );
}
