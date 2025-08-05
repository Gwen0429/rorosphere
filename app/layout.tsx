'use client';

import React from 'react';
import NavBar from '@/components/NavBar';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        {/* 后续可加入 SEO 标签、favicon 等 */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
        <style>{`
          :root {
            --champagne-gold: #D4AF7F;
            --champagne-gold-alpha: #D4AF7Faa;
            --champagne-gold-alpha-soft: #D4AF7F66;
            --bg-color: #fff;
            --text-color: #333;
          }
          html, body {
            margin: 0; padding: 0;
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
          }
          main {
            padding-top: 64px; /* 保证NavBar占位 */
            min-height: 100vh;
            box-sizing: border-box;
          }
        `}</style>
      </head>
      <body>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}



















