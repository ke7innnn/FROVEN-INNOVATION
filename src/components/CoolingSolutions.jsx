'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const solutions = [
  { name: 'WATER DISPENSER', img: '/product range /waterdispense.png' },
  { name: 'BAR REFRIGERATION', img: '/product range /bar refrigeration.png' },
  { name: 'BEVERAGE', img: '/product range /beverage.png' },
  { name: 'CONFECTIONARY', img: '/product range /confectionary.jpeg' },
  { name: 'ICE MACHINE', img: '/product range /ice machine.jpeg' },
  { name: 'MINI BAR', img: '/product range /minibars.png' },
];

const CoolingSolutions = () => {
  return (
    <section id="sustainable-cooling" className="cooling-solutions-section">
      <motion.div 
        className="cs-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h4>PRODUCT RANGE</h4>
        <h2>OUR SMART<br />COOLING SOLUTIONS</h2>
      </motion.div>
      
      <div className="cs-marquee-container">
        <div className="cs-marquee-track">
          {[...solutions, ...solutions, ...solutions].map((solution, idx) => (
            <div key={idx} className={`cs-card-item ${solution.name === 'WATER DISPENSER' ? 'cs-card-water-dispenser' : ''}`}>
              <div 
                className="cs-card-image" 
                style={{ backgroundImage: `url("${solution.img}")` }}
              ></div>
              <div className="cs-card-content">
                <h3>{solution.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoolingSolutions;
