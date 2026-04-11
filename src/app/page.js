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
      <main>
        <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: '0' }}>
          Froven Innovations - Commercial Refrigeration Sales, Rentals & AMC Services in Vasai Virar
        </h1>
        <Hero />
        <Stats />
        <MeetThePro />
        <CoolCollections />
        <CoolingSolutions />
        <ContactForm />

      </main>

      <Footer />
    </div>
  );
}
