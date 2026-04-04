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
