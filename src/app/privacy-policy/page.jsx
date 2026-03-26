'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './policy.css';

export default function PrivacyPolicy() {
  return (
    <div className="app-container policy-page">
      <Header />
      <section className="policy-hero">
        <div className="policy-hero-content">
          <p className="policy-eyebrow">Legal</p>
          <h1>Privacy Policy</h1>
          <p className="policy-subtitle">Last updated: March 2026</p>
        </div>
      </section>

      <main className="policy-container">
        <div className="policy-intro">
          <p>Froven Innovations ("Froven", "we", "our", or "us") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our website and services.</p>
        </div>

        <div className="policy-sections">
          <section className="policy-card">
            <div className="policy-icon"><i className="fa-solid fa-database"></i></div>
            <h2>1. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li><strong>Contact Information:</strong> Name, email address, phone number, and company name submitted via enquiry forms or contact pages.</li>
              <li><strong>Usage Data:</strong> Pages visited, time spent on site, browser type, and IP address collected automatically through analytics tools.</li>
              <li><strong>Communication Data:</strong> Messages, service requests, and correspondence submitted through our platform.</li>
            </ul>
          </section>

          <section className="policy-card">
            <div className="policy-icon"><i className="fa-solid fa-circle-check"></i></div>
            <h2>2. How We Use Your Information</h2>
            <p>Your information is used to:</p>
            <ul>
              <li>Respond to your enquiries and service requests.</li>
              <li>Process rental agreements or AMC contracts.</li>
              <li>Send updates about products, services, and promotions (with your consent).</li>
              <li>Improve the functionality and content of our website.</li>
              <li>Comply with applicable legal obligations.</li>
            </ul>
          </section>

          <section className="policy-card">
            <div className="policy-icon"><i className="fa-solid fa-shield-halved"></i></div>
            <h2>3. Data Security</h2>
            <p>We implement industry-standard security measures to protect your data, including SSL encryption for all web traffic and restricted access to personal data. However, no internet transmission is 100% secure, and we cannot guarantee absolute security.</p>
          </section>

          <section className="policy-card">
            <div className="policy-icon"><i className="fa-solid fa-share-nodes"></i></div>
            <h2>4. Sharing Your Information</h2>
            <p>We do not sell or rent your personal information to third parties. We may share your data with:</p>
            <ul>
              <li><strong>Service Providers:</strong> Trusted third-party partners who assist with website operations, analytics, or communication tools, bound by confidentiality agreements.</li>
              <li><strong>Legal Authorities:</strong> When required by law, court order, or government regulation.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets.</li>
            </ul>
          </section>

          <section className="policy-card">
            <div className="policy-icon"><i className="fa-solid fa-cookie-bite"></i></div>
            <h2>5. Cookies</h2>
            <p>Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can configure your browser to refuse cookies, although this may affect certain site functionality.</p>
          </section>

          <section className="policy-card">
            <div className="policy-icon"><i className="fa-solid fa-user-shield"></i></div>
            <h2>6. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul>
              <li>Access, correct, or delete your personal data.</li>
              <li>Withdraw consent for marketing communications at any time.</li>
              <li>Request a copy of the data we hold about you.</li>
            </ul>
            <p>To exercise any of these rights, please contact us at <a href="mailto:froveninnovations@outlook.com">froveninnovations@outlook.com</a>.</p>
          </section>

          <section className="policy-card">
            <div className="policy-icon"><i className="fa-solid fa-rotate"></i></div>
            <h2>7. Changes to This Policy</h2>
            <p>We may update this Privacy Policy periodically. All changes will be posted on this page with a revised "Last Updated" date. We encourage you to review this policy regularly.</p>
          </section>

          <section className="policy-card">
            <div className="policy-icon"><i className="fa-solid fa-envelope"></i></div>
            <h2>8. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
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
