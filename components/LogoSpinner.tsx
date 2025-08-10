// components/LogoSpinner.tsx
import React from 'react';

export default function LogoSpinner() {
  return (
    <div
      style={{
        width: '80px',
        height: '80px',
        margin: '0 auto',
        animation: 'spin 2s linear infinite',
      }}
      aria-label="Loading Logo Animation"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 96 94"
        fill="none"
      >
        {/* 你原Logo代码 */}
        <g filter="url(#filter0_d_126_255)">
          <path
            d="M47.2427 78.5198L16.8439 58.0405C9.03492 53.2005 3.72749 46.8387 1.4823 40.3009C-0.428049 34.5269 -0.0159322 28.7734 2.71405 24.4917C5.66151 19.6538 11.3864 17.0208 18.8882 17.0208C29.231 17.0208 42.5137 23.2614 47.2427 25.8653L47.2427 78.5198Z"
            fill="#FACBAA"
            stroke="#A17494"
            strokeWidth="2"
          />
          <path
            d="M47.2427 78.5198L77.6414 58.0405C85.4505 53.2005 90.7579 46.8387 92.9931 40.3009C94.858 34.5367 94.5466 28.7596 91.9264 24.4917C89.0734 19.623 82.978 17.0208 75.4309 17.0208C65.885 17.0208 52.4307 23.319 47.2427 25.8653L47.2427 78.5198Z"
            fill="#FACBAA"
            stroke="#A17494"
            strokeWidth="2"
          />
          <path
            d="M47.2427 78.5198L47.2427 25.8653"
            stroke="#A17494"
            strokeWidth="2"
          />
        </g>

        <defs>
          <filter
            id="filter0_d_126_255"
            x="1.4823"
            y="17.0208"
            width="92.5106"
            height="65.4991"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.682353 0 0 0 0 0.454902 0 0 0 0 0.580392 0 0 0 0.35 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_126_255"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_126_255"
              result="shape"
            />
          </filter>
        </defs>
      </svg>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
      `}</style>
    </div>
  );
}
