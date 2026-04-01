'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../privacy-policy/policy.css';
import SnowParticles from '../../components/SnowParticles';

export default function RefundPolicy() {
  return (
    <div className="app-container policy-page">
      <Header />
      <section className="policy-hero">
        <SnowParticles />
        <div className="policy-hero-content">
          <p className="policy-eyebrow">Legal</p>
          <h1>Refund Policy</h1>
          <p className="policy-subtitle">Last updated: March 2026</p>
        </div>
      </section>

      <main className="policy-container">
        <div className="policy-intro">
          <p>At Froven, we prioritize customer satisfaction by offering a clear and fair refund policy. Please read the details below to understand our process:</p>
        </div>

        <div className="policy-sections">
          <section className="policy-card">
            <div className="policy-icon"><i className="fa-solid fa-clipboard-list"></i></div>
            <h2>Eligibility for Refund</h2>
            
            <div style={{ marginBottom: '20px' }}>
              <h3>1. Product Condition:</h3>
              <ul>
                <li>Refunds are applicable for unused, undamaged products in their original packaging.</li>
                <li>Products must be returned with all accessories, manuals, and original invoices.</li>
              </ul>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <h3>2. Time Frame:</h3>
              <ul>
                <li>Refund requests must be initiated within 7 days of delivery.</li>
              </ul>
            </div>

            <div>
              <h3>3. Non-Refundable Items:</h3>
              <ul>
                <li>Customized or special-order products.</li>
                <li>Items damaged due to misuse, improper handling, or installation.</li>
              </ul>
            </div>
          </section>

          <section className="policy-card">
            <div className="policy-icon"><i className="fa-solid fa-rotate-left"></i></div>
            <h2>Refund Process</h2>
            
            <div style={{ marginBottom: '20px' }}>
              <h3>1. Initiating a Request:</h3>
              <p>Contact Froven’s customer support at 9015106925 or <a href="mailto:froveninnovations@outlook.com">froveninnovations@outlook.com</a> to initiate a refund.</p>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <h3>2. Verification:</h3>
              <p>Our team will review the refund request and arrange for product inspection, if required.</p>
            </div>

            <div>
              <h3>3. Approval:</h3>
              <p>Upon approval, the refund will be processed within 7–10 business days.</p>
            </div>
          </section>

          <section className="policy-card">
            <div className="policy-icon"><i className="fa-solid fa-money-bill-transfer"></i></div>
            <h2>Refund Method</h2>
            <p>Refunds will be issued to the original payment method or as store credit, as per the customer’s preference.</p>
          </section>

          <section className="policy-card">
            <div className="policy-icon"><i className="fa-solid fa-triangle-exclamation"></i></div>
            <h2>Important Notes</h2>
            <ul>
              <li>Shipping charges are non-refundable unless the product was defective or incorrect.</li>
              <li>Return shipping costs will be borne by the customer unless otherwise specified.</li>
            </ul>
            <p style={{ marginTop: '20px' }}>For more information or assistance, feel free to reach out to us. Your trust in Froven drives us to deliver the best service!</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
