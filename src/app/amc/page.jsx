'use client';

import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';

export default function AmcPage() {
  const [hoveredPlan, setHoveredPlan] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="app-container">
      <Header />
      
      <main style={{ backgroundColor: '#ffffff' }}>
        
        {/* Hero Section */}
        <section 
          style={{ 
            minHeight: '85vh',
            display: 'flex',
            alignItems: 'center',
            backgroundImage: "url('https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=2000&auto=format&fit=crop')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative'
          }}
        >
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(5,64,120,0.98) 0%, rgba(5,64,120,0.85) 50%, rgba(5,64,120,0.4) 100%)',
            zIndex: 1
          }}></div>
          
          <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} style={{ maxWidth: '800px' }}>
              <div style={{ display: 'inline-block', padding: '8px 20px', backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '30px', color: '#fff', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '24px', fontWeight: 600 }}>
                24/7 Priority Support
              </div>
              <h1 style={{ fontSize: '64px', fontWeight: 900, color: 'white', lineHeight: '1.1', marginBottom: '30px', letterSpacing: '-1px' }}>
                PROTECTING YOUR <br/><span style={{ color: '#bae6fd' }}>COLD CHAIN.</span>
              </h1>
              <p style={{ fontSize: '22px', color: '#e2e8f0', lineHeight: '1.6', marginBottom: '40px', maxWidth: '650px', fontWeight: 300 }}>
                An unexpected breakdown isn't just an inconvenience—it's catastrophic inventory loss. Froven's Annual Maintenance Contracts shift your strategy from reactive panic to proactive security.
              </p>
              <div style={{ display: 'flex', gap: '20px' }}>
                <a href="/contact" style={{ padding: '16px 40px', backgroundColor: '#38bdf8', color: 'var(--froven-dark-blue)', borderRadius: '40px', fontSize: '18px', fontWeight: 800, textDecoration: 'none', transition: 'all 0.3s ease', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}>
                  Talk to an Expert
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Feature Zig Zag 1 */}
        <section style={{ padding: '120px 20px', backgroundColor: '#ffffff' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '80px', flexWrap: 'wrap' }}>
            <motion.div 
              initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
              style={{ flex: 1, minWidth: '400px' }}
            >
              <h2 style={{ fontSize: '42px', color: 'var(--froven-dark-blue)', fontWeight: 800, marginBottom: '24px', lineHeight: '1.2' }}>
                The Hidden Cost of <br/>Reactive Maintenance
              </h2>
              <div style={{ width: '80px', height: '4px', backgroundColor: '#38bdf8', marginBottom: '30px' }}></div>
              <p style={{ fontSize: '18px', color: '#64748b', lineHeight: '1.8', marginBottom: '20px' }}>
                Waiting for a commercial refrigerator or blast freezer to fail before calling a technician is incredibly expensive. In the fast-paced hospitality and food sectors, the real cost of a breakdown isn't the repair bill—it's the massive inventory spoilage, the paused operations, and the furious customers.
              </p>
              <p style={{ fontSize: '18px', color: '#64748b', lineHeight: '1.8' }}>
                With a Froven AMC, our factory-trained engineers conduct deep systematic inspections, catching worn belts, microscopic refrigerant leaks, and electrical imbalances long before they trigger a catastrophic failure.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
              style={{ flex: 1, minWidth: '280px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <div style={{ backgroundColor: 'var(--froven-dark-blue)', color: 'white', padding: '50px 60px', borderRadius: '24px', textAlign: 'center', boxShadow: '0 30px 60px rgba(5,64,120,0.3)' }}>
                <div style={{ fontSize: '72px', fontWeight: 900, color: '#38bdf8', marginBottom: '8px', lineHeight: 1 }}>99.9%</div>
                <div style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', opacity: 0.85 }}>Uptime Guaranteed</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Feature Zig Zag 2 */}
        <section style={{ padding: '0 20px 120px', backgroundColor: '#ffffff' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '80px', flexWrap: 'wrap-reverse' }}>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
              style={{ flex: 1, minWidth: '400px', position: 'relative' }}
            >
              <div style={{ position: 'absolute', inset: '-20px', backgroundColor: 'rgba(56, 189, 248, 0.1)', borderRadius: '24px', zIndex: 0, transform: 'rotate(3deg)' }}></div>
              <img 
                src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1200&auto=format&fit=crop" 
                alt="Technical maintenance and gauges" 
                style={{ width: '100%', height: '500px', objectFit: 'cover', borderRadius: '24px', position: 'relative', zIndex: 1, boxShadow: '0 30px 60px rgba(0,0,0,0.15)' }} 
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
              style={{ flex: 1, minWidth: '400px' }}
            >
              <h2 style={{ fontSize: '42px', color: 'var(--froven-dark-blue)', fontWeight: 800, marginBottom: '24px', lineHeight: '1.2' }}>
                Original Parts. <br/>Certified Experts.
              </h2>
              <div style={{ width: '80px', height: '4px', backgroundColor: '#38bdf8', marginBottom: '30px' }}></div>
              <p style={{ fontSize: '18px', color: '#64748b', lineHeight: '1.8', marginBottom: '20px' }}>
                Every engineer dispatched to your facility is directly trained by our manufacturing partners. We don't use generalized handymen; you get specialized refrigeration technicians who know every schematic of your Froven equipment.
              </p>
              <p style={{ fontSize: '18px', color: '#64748b', lineHeight: '1.8' }}>
                Furthermore, our AMC completely eliminates the risk of counterfeit components. We strictly install 100% Genuine OEM spares directly from our inventory, ensuring that your equipment's factory efficiency and warranty remain eternally intact.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '30px' }}>
                {['Direct Manufacturer Hotlines', 'Vast Inventory of OEM Spares', 'Advanced Diagnostic Equipment'].map((li, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: '16px', fontSize: '18px', color: 'var(--froven-dark)', fontWeight: 600 }}>
                    <i className="fa-solid fa-circle-check" style={{ color: '#25d366', fontSize: '24px', marginRight: '16px' }}></i>
                    {li}
                  </li>
                ))}
              </ul>
            </motion.div>
            
          </div>
        </section>

        {/* Six Point Coverage Grid */}
        <section style={{ backgroundColor: '#f8fafc', padding: '120px 20px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <span style={{ color: '#38bdf8', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>Comprehensive Protocol</span>
              <h2 style={{ fontSize: '48px', color: 'var(--froven-dark-blue)', fontWeight: 900, marginTop: '16px' }}>The 6-Point Inspection</h2>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}
            >
              {[
                { i: 'fa-snowflake', title: 'Refrigerant Analysis', desc: 'Precise monitoring of gas pressures to prevent compressor burnout.' },
                { i: 'fa-temperature-low', title: 'Thermostat Calibration', desc: 'Digital calibration of thermostats ensuring absolute operational accuracy.' },
                { i: 'fa-bolt', title: 'Electrical Load Testing', desc: 'Voltage & amperage diagnostics to protect the PCB and electrical boards.' },
                { i: 'fa-wind', title: 'Condenser Deep Cleaning', desc: 'Chemical washing of condenser fins to drastically reduce power consumption.' },
                { i: 'fa-door-closed', title: 'Gasket & Seal Integrity', desc: 'Inspection of door seals to prevent thermal leaks and condensation buildup.' },
                { i: 'fa-oil-can', title: 'Motor Lubrication', desc: 'Oiling and clearance checks for evaporator and condenser fan motors.' }
              ].map((feat, idx) => (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredFeature(idx)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  style={{ 
                    backgroundColor: 'white', padding: '40px', borderRadius: '20px', 
                    boxShadow: hoveredFeature === idx ? '0 25px 50px rgba(0,0,0,0.1)' : '0 10px 20px rgba(0,0,0,0.03)', 
                    transform: hoveredFeature === idx ? 'translateY(-10px)' : 'none',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                  }}
                >
                  <div style={{ 
                    width: '70px', height: '70px', borderRadius: '16px', 
                    backgroundColor: hoveredFeature === idx ? 'var(--froven-dark-blue)' : '#f1f5f9', 
                    display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px',
                    transition: 'all 0.4s ease'
                  }}>
                    <i className={`fa-solid ${feat.i}`} style={{ fontSize: '28px', color: hoveredFeature === idx ? 'white' : 'var(--froven-blue)', transition: 'color 0.4s ease' }}></i>
                  </div>
                  <h3 style={{ fontSize: '22px', color: 'var(--froven-dark-blue)', fontWeight: 700, marginBottom: '16px' }}>{feat.title}</h3>
                  <p style={{ fontSize: '16px', color: '#64748b', lineHeight: '1.6', margin: 0 }}>{feat.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Global CTA */}
        <section 
          style={{ 
            padding: '120px 20px', 
            backgroundImage: "url('https://images.unsplash.com/photo-1590483864115-385db480ebf7?q=80&w=2000&auto=format&fit=crop')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            position: 'relative',
            textAlign: 'center'
          }}
        >
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(5, 64, 120, 0.92)', zIndex: 1 }}></div>
          <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '48px', fontWeight: 900, color: 'white', marginBottom: '24px' }}>Ready to eliminate downtime?</h2>
            <p style={{ fontSize: '22px', color: '#e2e8f0', lineHeight: '1.6', marginBottom: '40px' }}>
              Let's create a maintenance protocol that perfectly matches your inventory. Fill out a quick form or call us directly.
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
              <a href="/contact" style={{ display: 'inline-block', backgroundColor: '#38bdf8', color: 'var(--froven-dark-blue)', padding: '18px 40px', borderRadius: '40px', fontSize: '18px', fontWeight: 800, textDecoration: 'none', transition: 'transform 0.3s ease', cursor: 'pointer' }} onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>
                Get a Quote
              </a>
              <a href="tel:+919702273180" style={{ display: 'inline-block', backgroundColor: 'transparent', border: '2px solid white', color: 'white', padding: '18px 40px', borderRadius: '40px', fontSize: '18px', fontWeight: 800, textDecoration: 'none', transition: 'all 0.3s ease', cursor: 'pointer' }} onMouseOver={(e) => { e.target.style.backgroundColor = 'white'; e.target.style.color = 'var(--froven-dark-blue)'; }} onMouseOut={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = 'white'; }}>
                <i className="fa-solid fa-phone" style={{ marginRight: '10px' }}></i> Call +91 97022 73180
              </a>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
