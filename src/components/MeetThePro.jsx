'use client';
import React from 'react';

import { motion } from 'framer-motion';

const MeetThePro = () => {
  return (
    <section id="meet-the-pro" className="meet-the-pro" style={{ backgroundImage: 'url("/3 slides/slide 2new.png")' }}>
      <div className="meet-overlay"></div>
      <div className="meet-container">
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
