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
        {/* 后续可加入更多SEO标签、favicon等 */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
        <style>{`
          :root {
            --champagne-gold: #D4AF7F;
            --champagne-gold-alpha: #D4AF7Faa;
            --champagne-gold-alpha-soft: #D4AF7F66;
            --bg-color: #fffefb;
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
            padding-top: 64px; /* NavBar高度 */
            max-width: 1200px;
            width: 100%;
            margin: 0 auto;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
            box-sizing: border-box;
          }
          footer {
            flex-shrink: 0;
            text-align: center;
            padding: 1rem 0;
            font-size: 0.9rem;
            color: var(--champagne-gold);
            border-top: 1px solid rgba(212, 175, 127, 0.25);
            user-select: none;
          }
        `}</style>
      </head>
      <body>
        <NavBar />
        <main role="main">{children}</main>
        <footer>© 2025 ROROSPHERE | 致力于青少年创意跨界社群</footer>
      </body>
    </html>
  );
}




















