'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Counter from './Counter';

const statsData = [
  { num: <Counter to={200} />, label: 'PRODUCTS' },
  { num: <Counter to={21} />, label: 'YEARS OF TRUST' }
];

const Stats = () => {
  return (
    <div id="stats" className="stats-wrapper">
      {statsData.map((stat, i) => (
        <motion.div 
          className="stat-item"
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
        >
          <div className="stat-num">{stat.num}</div>
          <div className="stat-label">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default Stats;
