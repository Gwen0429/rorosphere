'use client';

import React from 'react';
import NavBar from '@/components/NavBar';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="zh-CN">
      <head>
        <title>ROROSPHERE - 青少年创意跨界社群</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Montserrat&display=swap"
          rel="stylesheet"
        />
        <style>{`
          :root {
            --roro-main: #FACBAA;
            --roro-accent: #A17494;
            --bg-color: #ffffffff;
            --text-color: #2C3E50;
          }
          html, body {
            margin: 0;
            padding: 0;
            background: var(--bg-color);
            color: var(--text-color);
            font-family: 'Playfair Display', serif;
            overflow-x: hidden;
            min-height: 100%;
            height: 100%;
          }
          body {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
          main {
            flex: 1 0 auto;
            padding-top: 64px;
            max-width: 1200px;
            width: 100%;
            margin: 0 auto;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
            box-sizing: border-box;
          }
          footer {
            flex-shrink: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 2rem 0 2.5rem;
            font-size: 0.9rem;
            color: var(--roro-accent);
            border-top: 1px solid rgba(161, 116, 148, 0.3);
            user-select: none;
            background: var(--bg-color);
          }
          footer svg {
            width: 3em;
            height: 3em;
            margin-bottom: 0.5rem;
          }
          footer .copyright {
            font-family: 'Montserrat', sans-serif;
            color: var(--roro-accent);
          }
        `}</style>
      </head>
      <body>
        <NavBar />
        <main role="main">{children}</main>
        <footer>
          <svg
            role="img"
            aria-label="Simplified Rorosphere Symbol Logo"
            viewBox="0 0 280 280"
            xmlns="http://www.w3.org/2000/svg"
            stroke="url(#roroGradient)"
            strokeWidth={3}
            strokeLinejoin="round"
            strokeLinecap="round"
            fill="none"
            filter="url(#glow)"
            style={{ width: '3em', height: '3em', marginBottom: '0.5rem' }}
          >
            <defs>
              <linearGradient id="roroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--roro-main)" />
                <stop offset="50%" stopColor="var(--roro-accent)" />
                <stop offset="100%" stopColor="var(--roro-main)" />
              </linearGradient>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="var(--roro-main)" floodOpacity="0.7" />
                <feDropShadow dx="0" dy="0" stdDeviation="1" floodColor="var(--roro-accent)" floodOpacity="0.5" />
              </filter>
              <path
                id="linePetal"
                d="M0,-70 Q22,-50 27,-30 C32,-10 17,10 0,30 C-17,10 -32,-10 -27,-30 Q-22,-50 0,-70 Z"
              />
            </defs>
            <g transform="translate(140,140)">
              <use href="#linePetal" transform="rotate(0)" />
              <use href="#linePetal" transform="rotate(72)" />
              <use href="#linePetal" transform="rotate(144)" />
              <use href="#linePetal" transform="rotate(216)" />
              <use href="#linePetal" transform="rotate(288)" />
            </g>
          </svg>
          <div className="copyright">© 2025 ROROSPHERE </div>
        </footer>
      </body>
    </html>
  );
}























