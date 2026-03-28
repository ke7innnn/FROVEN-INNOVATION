'use client';
import React from 'react';

const WhatsAppFloat = () => {
  const [waLink, setWaLink] = React.useState("https://wa.me/919702273180");

  React.useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) {
      setWaLink("https://web.whatsapp.com/send?phone=919702273180");
    }
  }, []);

  return (
    <a 
      href={waLink} 
      target="_blank" 
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat with us on WhatsApp"
    >
      <i className="fa-brands fa-whatsapp"></i>
    </a>
  );
};

export default WhatsAppFloat;
