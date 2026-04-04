'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const slideImages = [
  '/3 slides/slide 2new.png',
  '/3 slides/slide 3comp.png',
  '/3rd slide replacement.jpeg',
  '/4th slide addon.jpeg'
];

const slidesContent = [
  {
    small: "HORECA Solutions",
    main: <>BUILT FOR<br/>THE KITCHEN.<br/><span className="highlight-blue">PROVEN.</span></>,
    desc: "From ice cubers to walk-in cold rooms — professional-grade refrigeration for hotels, restaurants, and catering operations.",
    buttons: [
      { text: "HORECA Range", primary: true, link: "/products" },
      { text: "Rent Equipment", primary: false, link: "/rental" }
    ],
    align: 'left'
  },
  {
    small: "21+ Years of Experience",
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
    align: 'left'
  },
  {
    small: "Industrial Cold Storage",
    main: <>ADVANCED<br/>COLD ROOM<br/><span className="highlight-blue">STORAGE.</span></>,
    desc: "Custom-engineered walk-in freezers and chillers for pharmaceutical, food processing, and large-scale distribution.",
    buttons: [{ text: "Cold Room Range", primary: true, link: "/products/cold-room" }],
    align: 'left'
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slidesContent.length);
        setIsVisible(true);
      }, 400);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const slide = slidesContent[currentSlide];

  return (
    <section className="hero-section">
      <div className="hero-bg-container">
        {slideImages.map((src, idx) => (
          <div
            key={idx}
            className="hero-slide-wrapper"
            style={{
              position: 'absolute',
              inset: 0,
              opacity: currentSlide === idx ? 1 : 0,
              transition: 'opacity 0.8s ease-in-out',
              zIndex: currentSlide === idx ? 1 : 0
            }}
          >
            <Image
              src={src}
              alt={`Slide ${idx + 1}`}
              fill
              priority={idx === 0}
              fetchPriority={idx === 0 ? "high" : "auto"}
              loading={idx === 0 ? "eager" : "lazy"}
              quality={idx === 0 ? 60 : 70}
              className="hero-slide-img animate-float"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              sizes="(max-width: 768px) 100vw, 100vw"
            />
          </div>
        ))}
        <div className="hero-overlay" style={{
          backgroundColor: currentSlide === 3 ? 'rgba(5, 64, 120, 0.25)' : 'transparent',
          transition: 'background-color 0.8s ease'
        }}></div>
      </div>

      <div className="hero-content">
        <div
          className={`hero-text-wrapper align-${slide.align}`}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
          }}
        >
          <p className="hero-small-text">{slide.small}</p>
          <div className="hero-text-row">
            {slide.main}
          </div>
          <p className="hero-desc">{slide.desc}</p>
          <div className="hero-buttons">
            {slide.buttons.map((btn, i) => (
              <Link href={btn.link} key={i} style={{ textDecoration: 'none' }}>
                <button className={btn.primary ? "btn-primary" : "btn-secondary"}>
                  {btn.text}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
