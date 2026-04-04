import dynamic from 'next/dynamic';
import Header from '../components/Header';
import Hero from '../components/Hero';

// Dynamically import everything below the fold to drastically reduce initial JS bundle size
const Stats = dynamic(() => import('../components/Stats'));
const MeetThePro = dynamic(() => import('../components/MeetThePro'));
const CoolCollections = dynamic(() => import('../components/CoolCollections'));
const CoolingSolutions = dynamic(() => import('../components/CoolingSolutions'));
const ContactForm = dynamic(() => import('../components/ContactForm'));
const Footer = dynamic(() => import('../components/Footer'));

export const dynamic = 'force-static';

export default function Home() {
  return (
    <div className="app-container">
      <Header />

      <main>
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
