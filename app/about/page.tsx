'use client';

import React from 'react';

export default function About() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Great+Vibes&display=swap');

        :root {
          --champagne-gold: #D4AF7F;
          --champagne-gold-dark: #B68E37;
          --champagne-gold-alpha: #D4AF7Faa;
          --champagne-gold-alpha-soft: #D4AF7F66;
          --champagne-purple: #9B7AA0;
          --bg-marble: #f9f9f7;
        }

        html, body {
          margin: 0; padding: 0;
          background: var(--bg-marble);
          font-family: 'Playfair Display', serif;
          overflow-x: hidden;
          color: #3a3a3a;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        main {
          max-width: 720px;
          margin: 80px auto 140px;
          padding: 56px 48px 64px;
          background:
            linear-gradient(145deg, #fff, #e8e7e4) /* 底色渐变营造石膏质感 */,
            url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20'><circle cx='10' cy='10' r='1' fill='%23d4af7f' fill-opacity='0.1'/></svg>") repeat;
          border-radius: 24px;
          box-shadow:
            10px 10px 30px #c3b08c88,
            inset 3px 3px 8px #ffffffdd,
            inset -3px -3px 8px #d7cda6cc;
          position: relative;
          user-select: none;
          border: 2.5px solid var(--champagne-gold-dark);
        }

        /* 花蕊交叉阴影品牌印章，放右下角 */
        main::after {
          content: '';
          position: absolute;
          bottom: 24px;
          right: 24px;
          width: 80px;
          height: 80px;
          background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg"><defs><path id="softPetal" d="M0,-70 C28,-65 30,-25 12,-5 C25,10 15,40 0,60 C-15,40 -25,10 -12,-5 C-30,-25 -28,-65 0,-70 Z"/></defs><g transform="translate(140,140)" fill="none" stroke="%23D4AF7F" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"><use href="#softPetal" transform="rotate(0)"/><use href="#softPetal" transform="rotate(60)"/><use href="#softPetal" transform="rotate(120)"/><use href="#softPetal" transform="rotate(180)"/><use href="#softPetal" transform="rotate(240)"/><use href="#softPetal" transform="rotate(300)"/></g></svg>') no-repeat center/contain;
          opacity: 0.12;
          pointer-events: none;
          user-select: none;
        }

        .invitation-header {
          font-family: 'Great Vibes', cursive;
          font-size: 2.6rem;
          color: var(--champagne-gold-dark);
          text-align: center;
          margin-bottom: 40px;
          letter-spacing: 0.07em;
          text-shadow:
            0 0 5px var(--champagne-gold-alpha),
            0 0 12px var(--champagne-gold-alpha-soft);
          user-select: text;
        }

        h1 {
          font-size: 4.6rem;
          font-weight: 900;
          text-transform: uppercase;
          color: var(--champagne-gold);
          text-align: center;
          margin: 0 0 56px;
          letter-spacing: 0.18em;
          font-style: italic;
          text-shadow:
            1px 1px 0 #6f5a2b,
            0 0 12px var(--champagne-gold-alpha),
            0 0 20px var(--champagne-gold-alpha-soft);
          user-select: text;
        }

        section.content {
          font-weight: 300;
          font-size: 1.25rem;
          line-height: 1.75;
          color: #555555dd;
          letter-spacing: 0.03em;
          margin-bottom: 64px;
          white-space: pre-line;
          text-shadow:
            0 0 3px #cbbd8a44;
          user-select: text;
        }

        .signature {
          font-family: 'Great Vibes', cursive;
          font-size: 2.4rem;
          color: var(--champagne-purple);
          text-align: right;
          margin-top: 96px;
          letter-spacing: 0.05em;
          user-select: text;
          text-shadow: 0 0 6px #af8fc8aa;
        }

        footer {
          margin-top: 96px;
          text-align: center;
          font-size: 0.75rem;
          font-weight: 300;
          color: #999999aa;
          letter-spacing: 0.1em;
          user-select: none;
          position: relative;
        }

        footer::after {
          content: none;
        }

        /* 响应式移动端 */
        @media (max-width: 768px) {
          main {
            max-width: 100%;
            margin: 40px 16px 80px;
            padding: 32px 24px 48px;
            border-radius: 18px;
            box-shadow:
              6px 6px 18px #c3b08c88,
              inset 3px 3px 6px #ffffffdd,
              inset -3px -3px 6px #d7cda6cc;
          }

          .invitation-header {
            font-size: 1.8rem;
            margin-bottom: 24px;
          }

          h1 {
            font-size: 3.2rem;
            margin-bottom: 32px;
            letter-spacing: 0.12em;
          }

          section.content {
            font-size: 1rem;
            margin-bottom: 48px;
            line-height: 1.5;
          }

          .signature {
            font-size: 1.8rem;
            margin-top: 64px;
          }

          footer {
            margin-top: 64px;
            font-size: 0.65rem;
          }
        }
      `}</style>

      <main>
        <div className="invitation-header" aria-label="Invitation opening">
          Dear Creative Visionaries,
        </div>

        <h1>ABOUT RORO</h1>

        <section className="content" aria-label="About content">
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
          The RORO Team
        </div>

        <footer>&copy; 2025 ROROSPHERE. All rights reserved.</footer>
      </main>
    </>
  );
}













