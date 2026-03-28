'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const slideImages = [
  '/3 slides/slide 2new.png',
  '/3 slides/slide 3comp.png',
  '/3 slides/slide 1new.png'
];

const slidesContent = [
  {
    small: "HORECA Solutions",
    main: <>BUILT FOR<br/>THE KITCHEN.<br/><span className="highlight-yellow">PROVEN.</span></>,
    desc: "From ice cubers to walk-in cold rooms — professional-grade refrigeration for hotels, restaurants, and catering operations.",
    buttons: [
      { text: "HORECA Range", primary: true, link: "/products" },
      { text: "Rent Equipment", primary: false, link: "/rental" }
    ],
    align: 'left'
  },
  {
    small: "21+ Years of Expertise",
    main: <>RELIABLE<br/><span className="highlight-blue">AMC &</span><br/>SERVICE.</>,
    desc: "Annual Maintenance Contracts designed to keep your refrigeration running flawlessly — comprehensive or non-comprehensive.",
    buttons: [{ text: "Contact Service", primary: true, link: "/amc" }],
    align: 'right'
  },
  {
    small: "Commercial Refrigeration",
    main: <>KEEPING<br/>YOUR BUSINESS<br/><span className="highlight-blue">COLD.</span></>,
    desc: "End-to-end refrigeration solutions for hospitality, retail, healthcare, and food & beverage industries.",
    buttons: [{ text: "Explore Products", primary: true, link: "/products" }],
    align: 'right'
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesContent.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-bg-container">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={slideImages[currentSlide]}
            alt={`Slide ${currentSlide}`}
            className="hero-slide-img"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            fetchPriority="high"
            loading="eager"
          />
        </AnimatePresence>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSlide}
            className={`hero-text-wrapper align-${slidesContent[currentSlide].align}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
          >
            <p className="hero-small-text">{slidesContent[currentSlide].small}</p>
            <div className="hero-text-row">
              {slidesContent[currentSlide].main}
            </div>
            <p className="hero-desc">{slidesContent[currentSlide].desc}</p>
            <div className="hero-buttons">
              {slidesContent[currentSlide].buttons.map((btn, idx) => (
                <Link href={btn.link} key={idx} style={{ textDecoration: 'none' }}>
                  <button className={btn.primary ? "btn-primary" : "btn-secondary"}>
                    {btn.text}
                  </button>
                </Link>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;
