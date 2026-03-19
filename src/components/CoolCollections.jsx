'use client';
import React from 'react';
import { motion } from 'framer-motion';

const CoolCollections = () => {
  const services = [
    { title: 'SALES', category: 'Premium Equipment', img: '/services/sales.png' },
    { title: 'RENTALS', category: 'Flexible Plans', img: '/services/rental.png' },
    { title: 'AMC', category: 'Annual Maintenance', img: '/services/amc.png' }
  ];

  return (
    <section className="cool-collections">
      <motion.div 
        className="cc-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h4>OUR OFFERINGS</h4>
        <h2>CORE BUSINESS SERVICES</h2>
        <p>Explore our carefully curated business services, designed to bring you the best in quality, reliability, and peace of mind.</p>
      </motion.div>
      <div className="cc-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', maxWidth: '1200px', margin: '0 auto', gap: '30px', padding: '0 20px' }}>
        {services.map((item, i) => (
          <motion.div 
            className="service-card-square" 
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <div 
              className="service-card-image" 
              style={{ backgroundImage: `url(${item.img})` }}
            ></div>
            <div className="service-card-content">
              <h2>{item.title}</h2>
              <p>{item.category}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CoolCollections;
