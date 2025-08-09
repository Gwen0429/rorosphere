import React from 'react';

export default function Logo({ size = 72 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 280 280"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Simplified Rorosphere Symbol Logo"
      fill="none"
      stroke="url(#roroGradient)"
      strokeWidth={3}
      strokeLinejoin="round"
      strokeLinecap="round"
      filter="url(#glow)"
    >
      <defs>
        <linearGradient id="roroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FACBAA" />
          <stop offset="50%" stopColor="#A17494" />
          <stop offset="100%" stopColor="#FACBAA" />
        </linearGradient>

        <path
          id="linePetal"
          d="M0,-70 Q22,-50 27,-30 C32,-10 17,10 0,30 C-17,10 -32,-10 -27,-30 Q-22,-50 0,-70 Z"
        />

        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#FACBAA" floodOpacity="0.7" />
          <feDropShadow dx="0" dy="0" stdDeviation="1" floodColor="#A17494" floodOpacity="0.5" />
        </filter>
      </defs>

      <g transform="translate(140,140)">
        <use href="#linePetal" transform="rotate(0)" />
        <use href="#linePetal" transform="rotate(72)" />
        <use href="#linePetal" transform="rotate(144)" />
        <use href="#linePetal" transform="rotate(216)" />
        <use href="#linePetal" transform="rotate(288)" />
      </g>
    </svg>
  );
}






