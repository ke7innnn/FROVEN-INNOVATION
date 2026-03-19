import React from 'react';
import { motion } from 'framer-motion';

const SustainableCooling = () => {
  return (
    <section className="sustainable-cooling">
      <motion.div 
        className="container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="sustainable-content">
          <h2 className="section-title">Sustainable Cooling</h2>
          <p className="subtitle">reduced carbon footprint</p>
          <p className="description">
            At FROVEN INNOVATIONS, we integrate expertise in refrigeration with sustainable e-waste management, breathing new life into discarded cooling products while safeguarding our planet.
          </p>
          <button className="btn-primary">Know Now</button>
        </div>
      </motion.div>
    </section>
  );
};

export default SustainableCooling;
