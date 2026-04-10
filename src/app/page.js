import nextDynamic from 'next/dynamic';
import Header from '../components/Header';
import Hero from '../components/Hero';

// Dynamically import everything below the fold to drastically reduce initial JS bundle size
const Stats = nextDynamic(() => import('../components/Stats'));
const MeetThePro = nextDynamic(() => import('../components/MeetThePro'));
const CoolCollections = nextDynamic(() => import('../components/CoolCollections'));
const CoolingSolutions = nextDynamic(() => import('../components/CoolingSolutions'));
const ContactForm = nextDynamic(() => import('../components/ContactForm'));
const Footer = nextDynamic(() => import('../components/Footer'));

export const dynamic = 'force-static';

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Froven Innovations",
    "image": "https://froveninnovations.com/logo%20design/Gemini_Generated_Image_gqcanogqcanogqca-Photoroom.png",
    "@id": "https://froveninnovations.com",
    "url": "https://froveninnovations.com",
    "telephone": "+919702273180",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No.11, Chandan Apartment, Jail Road Behind Mahajan Hospital Sane Guruji Nagar",
      "addressLocality": "Nashik",
      "addressRegion": "Maharashtra",
      "postalCode": "422101",
      "addressCountry": "IN"
    },
    "areaServed": [
      { "@type": "City", "name": "Vasai" },
      { "@type": "City", "name": "Virar" },
      { "@type": "City", "name": "Mumbai" },
      { "@type": "City", "name": "Palghar" }
    ],
    "description": "Premium commercial refrigeration solutions, rentals, and AMC services.",
    "priceRange": "$$"
  };

  return (
    <div className="app-container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Header />

        <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: '0' }}>
          Froven Innovations - Commercial Refrigeration Sales, Rentals & AMC Services in Vasai Virar
        </h1>
        <Hero />
        <Stats />
        <MeetThePro />
        <CoolCollections />
        <CoolingSolutions />
        <ContactForm />

        {/* SEO Keyword & Content Block to boost SERP rankings for high-intent keywords */}
        <section className="seo-content-block" style={{ padding: '60px 20px', backgroundColor: '#f8fafc', color: '#475569', maxWidth: '1200px', margin: '0 auto', fontSize: '15px', lineHeight: '1.8' }}>
          <h2 style={{ fontSize: '24px', color: '#0f2a47', marginBottom: '20px' }}>Your Trusted Partner for Commercial Refrigeration across Mumbai, Vasai & Virar</h2>
          <p style={{ marginBottom: '16px' }}><strong>Froven Innovations</strong> is the premier provider of end-to-end commercial refrigeration solutions across <strong>Vasai, Virar, Mumbai</strong>, and the surrounding regions. With over two decades of robust industry experience, we specialize in supplying high-performance cooling equipment tailored directly for the <strong>HORECA (Hotel, Restaurant, and Cafe) sector</strong>, medical and healthcare facilities, retail supermarkets, and industrial food processing units.</p>
          <p style={{ marginBottom: '16px' }}>Whether you require flexible <strong>commercial refrigeration rentals</strong> for an event or popup, or are actively looking to purchase heavy-duty equipment such as <strong>Visi Coolers, Blast Freezers, Walk-in Cold Rooms, or Water Dispensers</strong>, we maintain a robust catalog of premium models available to meet your exact specifications. Every product prioritizes sustainable, eco-friendly cooling without sacrificing sheer power.</p>
          <p>Beyond equipment sales and rentals, we are renowned for our highly reliable <strong>Annual Maintenance Contracts (AMC)</strong>. Our expert technicians ensure that your critical cooling infrastructure runs flawlessly year-round, significantly minimizing downtime and aggressively protecting your valuable inventory. By choosing Froven Innovations, you are investing in cutting-edge, energy-efficient refrigeration built specifically to endure the extreme, rigorous demands of daily commercial operations. Contact us today to upgrade your commercial kitchen or storage facility.</p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
