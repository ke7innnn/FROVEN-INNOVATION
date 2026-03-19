import React, { useRef, useEffect } from 'react';
import { animate, useInView } from 'framer-motion';

const Counter = ({ from = 0, to, duration = 2.5, suffix = "+" }) => {
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    const node = nodeRef.current;
    
    const controls = animate(from, to, {
      duration: duration,
      ease: "easeOut",
      onUpdate(value) {
        node.textContent = Math.round(value).toLocaleString() + suffix;
      },
    });

    return () => controls.stop();
  }, [from, to, inView, duration, suffix]);

  return <span ref={nodeRef}>{from.toLocaleString()}{suffix}</span>;
};

export default Counter;
