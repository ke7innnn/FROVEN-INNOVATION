'use client';
import React from 'react';

const snowflakes = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  size: `${Math.random() * 8 + 4}px`,
  delay: `${Math.random() * -10}s`, // Negative delay makes them start immediately at different points in the animation
  duration: `${Math.random() * 8 + 6}s`,
  opacity: Math.random() * 0.5 + 0.15,
  drift: `${(Math.random() - 0.5) * 80}px`,
  char: ['❄', '❅', '❆', '·', '•'][Math.floor(Math.random() * 5)],
}));

export default function SnowParticles() {
  return (
    <>
      <style>{`
        @keyframes snowfall {
          0% { transform: translateY(-20px) translateX(0) rotate(0deg); opacity: 0; }
          5% { opacity: 1; }
          90% { opacity: 0.6; }
          100% { transform: translateY(110vh) translateX(var(--drift)) rotate(360deg); opacity: 0; }
        }
        .snowflake {
          position: absolute;
          top: -20px;
          pointer-events: none;
          animation: snowfall var(--duration) var(--delay) infinite linear;
          color: rgba(186, 230, 253, var(--op));
          font-size: var(--size);
          z-index: 2;
          will-change: transform;
          text-shadow: 0 0 6px rgba(56, 189, 248, 0.6);
          user-select: none;
        }
      `}</style>
      {snowflakes.map((flake) => (
        <span
          key={flake.id}
          className="snowflake"
          style={{
            left: flake.left,
            '--size': flake.size,
            '--delay': flake.delay,
            '--duration': flake.duration,
            '--op': flake.opacity,
            '--drift': flake.drift,
          }}
        >
          {flake.char}
        </span>
      ))}
    </>
  );
}
