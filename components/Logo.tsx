import React from 'react';

export default function Logo({ size = 48 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 280 280"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="ROROSPHERE Logo"
    >
      <defs>
        <path
          id="sculptedPetal"
          d="
          M0,-70
          C30,-62 32,-26 12,-6
          C26,12 14,38 0,60
          C-14,38 -26,12 -12,-6
          C-32,-26 -30,-62 0,-70
          Z
        "
        />
        <radialGradient id="goldRelief" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#FBE8C9" />
          <stop offset="60%" stopColor="#D4AF7F" />
          <stop offset="100%" stopColor="#B88A50" />
        </radialGradient>

        <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FBE8C9" />
          <stop offset="100%" stopColor="#D4AF7F" />
        </radialGradient>

        <filter id="textRelief" x="-50%" y="-50%" width="200%" height="200%">
          <feOffset dx="1.5" dy="1.5" result="offsetblur" />
          <feGaussianBlur in="offsetblur" stdDeviation="1.2" />
          <feComposite in2="SourceAlpha" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* 保留黑色矩形背景，如果你想透明可以删掉这行 */}
      <rect width="280" height="280" rx="20" fill="black" />

      <g
        transform="translate(140,140)"
        stroke="white"
        strokeWidth="2.4"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="url(#goldRelief)"
        opacity="0.9"
      >
        <use href="#sculptedPetal" transform="rotate(0)" />
        <use href="#sculptedPetal" transform="rotate(60)" />
        <use href="#sculptedPetal" transform="rotate(120)" />
        <use href="#sculptedPetal" transform="rotate(180)" />
        <use href="#sculptedPetal" transform="rotate(240)" />
        <use href="#sculptedPetal" transform="rotate(300)" />
      </g>

      {/* 中心圆用渐变光泽感填充 */}
      <circle
        cx="140"
        cy="140"
        r="14"
        fill="url(#centerGlow)"
        stroke="white"
        strokeWidth="2.4"
      />

      <circle
        cx="140"
        cy="140"
        r="18"
        fill="none"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="6"
      />

      <text
        x="140"
        y="270"
        textAnchor="middle"
        fontFamily="'Playfair Display', serif"
        fontSize="32"
        fill="#D4AF7F"
        letterSpacing="6"
        fontWeight="700"
        filter="url(#textRelief)"
      >
        RORO
      </text>
    </svg>
  );
}

