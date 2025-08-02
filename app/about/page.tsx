'use client';

import React from 'react';

export default function About() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Great+Vibes&display=swap');

        :root {
          --champagne-gold: #D4AF7F;
          --champagne-gold-alpha: #D4AF7Faa;
          --champagne-gold-alpha-soft: #D4AF7F66;
          --invitation-border: linear-gradient(135deg, #D4AF7F 0%, #F0E6D2 100%);
        }

        html, body {
          margin: 0; padding: 0;
          background: #fff;
          color: #333;
          font-family: 'Playfair Display', serif;
          overflow-x: hidden;
        }

        main {
          max-width: 720px;
          margin: 80px auto 140px;
          padding: 40px 32px 64px;
          border: 2px solid var(--champagne-gold);
          border-image-slice: 1;
          border-image-source: var(--invitation-border);
          border-radius: 16px;
          box-shadow:
            0 0 15px var(--champagne-gold-alpha-soft);
          background: #fff;
          position: relative;
        }

        /* 花体邀请开头 */
        .invitation-header {
          font-family: 'Great Vibes', cursive;
          font-size: 2.8rem;
          color: var(--champagne-gold);
          text-align: center;
          margin-bottom: 36px;
          user-select: none;
          letter-spacing: 0.06em;
        }

        h1 {
          font-size: 3.8rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--champagne-gold);
          text-align: center;
          margin: 0 0 36px;
          letter-spacing: 0.15em;
          font-style: italic;
          user-select: none;
          text-shadow: 0 0 8px var(--champagne-gold-alpha), 0 0 20px var(--champagne-gold-alpha-soft);
        }

        section.content {
          font-weight: 300;
          font-size: 1.15rem;
          line-height: 1.7;
          color: #6b6b6bdd;
          letter-spacing: 0.03em;
          margin-bottom: 40px;
        }

        section.content p + p {
          margin-top: 1.3em;
        }

        /* 署名 */
        .signature {
          font-family: 'Great Vibes', cursive;
          font-size: 2.2rem;
          color: var(--champagne-gold);
          text-align: right;
          margin-top: 80px;
          user-select: none;
          letter-spacing: 0.05em;
        }

        /* 页脚风格与首页一致 */
        footer {
          margin-top: 80px;
          text-align: center;
          font-size: 0.75rem;
          font-weight: 300;
          color: #999999aa;
          letter-spacing: 0.1em;
          user-select: none;
          position: relative;
        }

        footer::after {
          content: '⚜';
          display: block;
          font-size: 2.2rem;
          color: var(--champagne-gold);
          margin-top: 20px;
          line-height: 1;
          animation: none;
        }
      `}</style>

      <main>
        <div className="invitation-header" aria-label="Invitation opening">
          Dear Creative Visionaries,
        </div>

        <h1>ABOUT ROROSPHERE</h1>

        <section className="content">
          <p>
            ROROSPHERE is a pioneering platform that transcends traditional artistic collaboration.
            We curate a selective team to create a living ecosystem where style and creativity merge.
          </p>
          <p>
            Our mission is to cultivate a lifestyle atmosphere defined by thoughtful, expressive collaborations.
            We believe in quality over quantity, nurturing voices that resonate with originality and depth.
          </p>
          <p>
            Join us to explore a new frontier of co-creation where diverse talents converge,
            fostering innovation that shapes culture.
          </p>
          <p>
            Within ROROSPHERE, every creation breathes life into a realm of elegance and rebellion,
            where the spirit of artistry meets uncompromising passion.
            We invite those who dare to express their true selves and join a collective that values distinctiveness and vision.
          </p>
          <p>
            Together, we craft not only masterpieces but a living narrative of style, culture, and shared dreams.
            Welcome to an exclusive atmosphere where your voice will echo in harmony with kindred creators.
          </p>
        </section>

        <div className="signature" aria-label="Signature">
          Yours sincerely,<br />
          The ROROSPHERE Team
        </div>

        <footer>&copy; 2025 ROROSPHERE. All rights reserved.</footer>
      </main>
    </>
  );
}


