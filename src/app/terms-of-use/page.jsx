'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../privacy-policy/policy.css';

export default function TermsOfUse() {
  return (
    <div className="app-container policy-page">
      <Header />
      <section className="policy-hero">
        <div className="policy-hero-content">
          <p className="policy-eyebrow">Legal</p>
          <h1>Terms of Use</h1>
          <p className="policy-subtitle">Last updated: March 2026</p>
        </div>
      </section>

      <main className="policy-container">
        <div className="policy-intro">
          <p>By accessing or using the Froven Innovations website (froveninnovations.com), you agree to be bound by these Terms of Use. Please read them carefully. If you do not agree, please discontinue use of our website.</p>
        </div>

        <div className="policy-sections">
          <section className="policy-card">
            <div className="policy-icon"><i className="fa-solid fa-globe"></i></div>
            <h2>1. Use of Website</h2>
            <p>This website is intended for informational and commercial enquiry purposes. You agree to use the website only for lawful purposes and in a manner that does not infringe the rights of others or restrict their use and enjoyment of the website.</p>
          </section>

          <section className="policy-card">
            <div className="policy-icon"><i className="fa-solid fa-copyright"></i></div>
            <h2>2. Intellectual Property</h2>
            <p>All content on this website — including text, graphics, logos, images, product specifications, and software — is the property of Froven Innovations and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.</p>
          </section>

          <section className="policy-card">
            <div className="policy-icon"><i className="fa-solid fa-circle-exclamation"></i></div>
            <h2>3. Disclaimer of Warranties</h2>
            <p>This website is provided "as is" without warranties of any kind. Froven Innovations does not warrant that the website will be uninterrupted, error-free, or free of viruses. Technical specifications, availability, and pricing are subject to change without notice.</p>
          </section>

          <section className="policy-card">
            <div className="policy-icon"><i className="fa-solid fa-scale-balanced"></i></div>
            <h2>4. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, Froven Innovations shall not be liable for any indirect, incidental, punitive, or consequential damages arising from your use of this website, including loss of data, business interruption, or financial losses.</p>
          </section>

          <section className="policy-card">
            <div className="policy-icon"><i className="fa-solid fa-link"></i></div>
            <h2>5. Third-Party Links</h2>
            <p>Our website may contain links to external websites. These links are provided for your convenience only. Froven Innovations does not control or endorse the content of external sites and accepts no responsibility for them or for any loss or damage that may arise from your use of them.</p>
          </section>

          <section className="policy-card">
            <div className="policy-icon"><i className="fa-solid fa-file-contract"></i></div>
            <h2>6. Product & Service Information</h2>
            <p>All product descriptions, pricing, specifications, and availability listed on this website are for informational purposes only. Final pricing and terms are subject to a formal quotation. Froven Innovations reserves the right to modify or discontinue any product or service without notice.</p>
          </section>

          <section className="policy-card">
            <div className="policy-icon"><i className="fa-solid fa-gavel"></i></div>
            <h2>7. Governing Law</h2>
            <p>These Terms of Use are governed by and construed in accordance with the laws of India. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.</p>
          </section>

          <section className="policy-card">
            <div className="policy-icon"><i className="fa-solid fa-rotate"></i></div>
            <h2>8. Modifications</h2>
            <p>Froven Innovations reserves the right to revise these Terms of Use at any time. Updates will be posted on this page with a revised date. Continued use of the website after any changes constitutes acceptance of the new terms.</p>
          </section>

          <section className="policy-card">
            <div className="policy-icon"><i className="fa-solid fa-envelope"></i></div>
            <h2>9. Contact</h2>
            <p>For any questions regarding these Terms, please contact us:</p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:froveninnovations@outlook.com">froveninnovations@outlook.com</a></li>
              <li><strong>Phone:</strong> <a href="tel:+919702273180">+91 97022 73180</a></li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
