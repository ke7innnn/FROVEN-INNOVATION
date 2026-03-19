import React from 'react';
import { motion } from 'framer-motion';
import Counter from './Counter';

const topBrands = ['Zepto', 'Amul', 'McCain', 'Pepsi', 'Baskin Robbins', 'Pizza Hut', 'KFC'];
const bottomBrands = ['The Leela', 'Hilton', 'Hyatt', 'Courtyard Marriott', 'Holiday Inn'];

const Brands = () => {
  return (
    <section className="brands-section">
      <motion.div 
        className="brands-blue-banner"
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="brands-title">
          <h2>THE BRANDS</h2>
          <p>That we love working with</p>
        </div>
        <div className="brands-stats">
          <div className="b-stat">
            <h3><Counter to={21} /></h3>
            <p>Years Trust</p>
          </div>
          <div className="b-stat">
            <h3><Counter to={500000} suffix="+" /></h3>
            <p>Installations</p>
          </div>
        </div>
      </motion.div>

      <div className="brands-marquee-container" style={{marginTop: '20px'}}>
        <div className="brands-marquee-track right-scroll">
          {[...bottomBrands, ...bottomBrands].map((b, i) => (
            <h2 key={i}>{b}</h2>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
