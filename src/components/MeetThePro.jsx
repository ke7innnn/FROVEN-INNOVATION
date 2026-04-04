'use client';
import React from 'react';

import { motion } from 'framer-motion';

import Image from 'next/image';

const MeetThePro = () => {
  return (
    <section id="meet-the-pro" className="meet-the-pro" style={{ position: 'relative', overflow: 'hidden' }}>
      <Image
        src="/3 slides/slide 2new.png"
        alt="Meet The Pro Background"
        fill
        style={{ objectFit: 'cover', objectPosition: 'center', zIndex: 0 }}
        sizes="100vw"
        loading="lazy"
      />
      <div className="meet-overlay" style={{ zIndex: 1 }}></div>
      <div className="meet-container" style={{ position: 'relative', zIndex: 2 }}>
        <motion.div 
          className="meet-content-wrapper"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="meet-badge">OUR MISSION</div>
          <h2 className="meet-heading">
            EMPOWERING BUSINESSES WITH <span className="highlight">SMART COOLING.</span>
          </h2>
          <p className="meet-description">
            With Froven Innovations, businesses gain a partner who understands the critical importance of refrigeration and provides solutions that are both versatile and dependable.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MeetThePro;
