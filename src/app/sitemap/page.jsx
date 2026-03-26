'use client';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../privacy-policy/policy.css';

const sitemapData = [
  {
    section: 'Main Pages',
    icon: 'fa-solid fa-house',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'Contact Us', href: '/contact' },
    ]
  },
  {
    section: 'Products',
    icon: 'fa-solid fa-box-open',
    links: [
      { label: 'Visi Cooler', href: '/products/visicooler' },
      { label: 'Mini Bar', href: '/products/minibars' },
      { label: 'Reach-In Static', href: '/products/reach-in-static' },
      { label: 'Under Counter Static', href: '/products/under-counter-static' },
      { label: 'Reach-In Ventilated', href: '/products/reach-in-ventilated' },
      { label: 'Under Counter Ventilated', href: '/products/under-counter-ventilated' },
      { label: 'Saladatte With Prep Table', href: '/products/saladatte' },
      { label: 'Refrigerated Topping Unit', href: '/products/topping-unit' },
      { label: 'Blast Freezer', href: '/products/blast-freezer' },
      { label: 'Back Bar', href: '/products/back-bar' },
      { label: 'Wine Chiller', href: '/products/wine-chiller' },
      { label: 'Ice Machine', href: '/products/ice-machine' },
      { label: 'Mini Bar With Absorption', href: '/products/minibar-absorption' },
      { label: 'Cake Display Cabinets', href: '/products/cake-display' },
      { label: 'Water Dispenser', href: '/products/water-dispenser' },
      { label: 'Hard Top Chest Freezer', href: '/products/hard-top-chest-freezer' },
      { label: 'Hard Top Chest Freezer 70mm', href: '/products/hard-top-chest-freezer-70mm' },
      { label: 'Glass Top Chest Freezer', href: '/products/glass-top-chest-freezer' },
    ]
  },
  {
    section: 'Business Services',
    icon: 'fa-solid fa-wrench',
    links: [
      { label: 'Rental Solutions', href: '/rental' },
      { label: 'AMC & Maintenance Services', href: '/amc' },
      { label: 'Sales & Equipment', href: '/sales' },
    ]
  },
  {
    section: 'Legal',
    icon: 'fa-solid fa-scale-balanced',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Use', href: '/terms-of-use' },
      { label: 'Sitemap', href: '/sitemap' },
    ]
  },
];

export default function Sitemap() {
  return (
    <div className="app-container policy-page">
      <Header />
      <section className="policy-hero">
        <div className="policy-hero-content">
          <p className="policy-eyebrow">Navigation</p>
          <h1>Sitemap</h1>
          <p className="policy-subtitle">Complete directory of all pages on the Froven Innovations website</p>
        </div>
      </section>

      <main className="policy-container">
        <div className="policy-intro">
          <p>Use this sitemap to navigate directly to any section of the Froven Innovations website. All product categories, services, and legal information are listed below.</p>
        </div>

        <div className="sitemap-grid">
          {sitemapData.map((group, gi) => (
            <div className="sitemap-group" key={gi}>
              <div className="sitemap-group-header">
                <i className={group.icon}></i>
                <h2>{group.section}</h2>
              </div>
              <ul>
                {group.links.map((link, li) => (
                  <li key={li}>
                    <Link href={link.href}>
                      <i className="fa-solid fa-chevron-right"></i>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
