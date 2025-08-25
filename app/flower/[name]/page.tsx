'use client';

import React from 'react';

const sectionsData = [
  { title: 'Rose', link: '/flower/rose', description: 'The eternal emblem of love and passion.' },
  { title: 'Sakura', link: '/flower/sakura', description: 'A fleeting bloom, symbol of transience and renewal.' },
  { title: 'Sunflower', link: '/flower/sunflower', description: 'Always turning toward the light, loyal and bright.' },
  { title: 'Tulip', link: '/flower/tulip', description: 'Elegance and grace in every gentle curve.' },
  { title: 'Lily', link: '/flower/lily', description: 'A pure bloom, a quiet symbol of devotion.' },
  { title: 'Orchid', link: '/flower/orchid', description: 'Mystery, refinement, and delicate strength.' },
  { title: 'Peony', link: '/flower/peony', description: 'Abundance, honor, and radiant beauty.' },
  { title: 'See More', link: '/roro-flower', description: 'Explore the full garden of ROROSPHERE.' },
];

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

        :root {
          --roro-main: #FACBAA;
          --roro-accent: #A17494;
          --roro-bg: #FFFFFF;
          --roro-text: #3B2E2E;
          --roro-glow-alpha: #FACBAA33;
          --roro-glow-alpha-heavy: #FACBAA66;
        }

        *, *::before, *::after { box-sizing: border-box; max-width: 100vw; word-break: break-word; }

        html, body {
          margin: 0;
          padding: 0;
          background: var(--roro-bg);
          color: var(--roro-text);
          font-family: 'PingFang SC', 'Noto Sans SC', 'Microsoft YaHei', sans-serif;
          overflow-x: hidden;
        }

        main {
          min-height: 100vh;
          padding: 80px 20px 100px;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        .hero-float {
          position: absolute;
          top: 15%;
          left: 50%;
          width: 250px;
          height: 250px;
          border-radius: 50%;
          background: radial-gradient(circle, var(--roro-main) 20%, transparent 80%);
          opacity: 0.15;
          animation: float-hero 25s ease-in-out infinite alternate;
          z-index: 0;
        }

        @keyframes float-hero {
          0% { transform: translateX(-50%) translateY(0) scale(1); }
          100% { transform: translateX(-50%) translateY(25px) scale(1.05); }
        }

        h1.brand-title {
          font-family: 'Great Vibes', cursive;
          font-size: 6rem;
          color: var(--roro-main);
          letter-spacing: 0.08em;
          margin: 0;
          text-align: center;
          text-shadow: 0 0 12px var(--roro-glow-alpha-heavy);
          position: relative;
          z-index: 1;
        }

        .subtitle {
          font-family: 'Great Vibes', cursive;
          font-size: 1.3rem;
          color: var(--roro-accent);
          text-align: center;
          max-width: 600px;
          margin: 1rem auto 3rem;
          line-height: 1.4;
          user-select: none;
        }

        /* Sections Grid */
        .sections {
          max-width: 960px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 20px;
          margin-bottom: 60px;
          z-index: 1;
        }

        .section-item {
          background: #fff;
          border-radius: 20px;
          padding: 18px 14px 24px;
          box-shadow: 0 6px 16px var(--roro-glow-alpha);
          cursor: pointer;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          text-align: center;
        }

        .section-item:hover,
        .section-item:focus-visible {
          transform: translateY(-4px);
          box-shadow: 0 14px 32px var(--roro-glow-alpha-heavy), 0 0 18px var(--roro-main);
          outline: none;
        }

        .section-item h2 {
          font-family: 'Great Vibes', cursive;
          font-size: 1.6rem;
          margin-bottom: 8px;
          color: var(--roro-accent);
        }

        .section-item p {
          font-size: 0.92rem;
          font-weight: 300;
          color: #5a4a4a;
          line-height: 1.4;
        }

        /* Roro Letter */
        .news-section {
          max-width: 960px;
          width: 100%;
          margin-bottom: 80px;
          z-index: 1;
        }

        .news-title {
          font-family: 'Great Vibes', cursive;
          font-size: 2.2rem;
          margin-bottom: 28px;
          text-align: center;
          color: var(--roro-main);
          text-shadow: 0 0 6px var(--roro-glow-alpha-heavy);
        }

        .letter {
          max-width: 720px;
          margin: 0 auto;
          font-size: 1rem;
          line-height: 1.7;
          color: #3B2E2E;
          text-align: center;
          background: #fff;
          padding: 24px 20px;
          border-radius: 16px;
          box-shadow: 0 4px 12px var(--roro-glow-alpha);
        }
        .letter .signature {
          margin-top: 1.5rem;
          font-family: 'Great Vibes', cursive;
          font-size: 1.5rem;
          color: #A17494;
        }

        /* Mobile */
        @media (max-width: 768px) {
          main { padding: 40px 12px 60px; }
          h1.brand-title { font-size: 3.5rem; letter-spacing: 0.04em; }
          .subtitle { font-size: 1rem; max-width: 90vw; margin-bottom: 1.5rem; }

          .sections {
            grid-template-columns: 1fr;
            gap: 14px;
          }
          .section-item {
            padding: 12px 10px 18px;
          }
          .section-item h2 { font-size: 1.4rem; }
          .section-item p { font-size: 0.85rem; }

          .letter { font-size: 0.9rem; padding: 16px 12px; }
          .letter .signature { font-size: 1.3rem; }
        }
      `}</style>

      <main>
        <div className="hero-float" aria-hidden="true"></div>

        <h1 className="brand-title">ROROSPHERE</h1>
        <p className="subtitle">
          Enter a realm where visionaries converge — ROROSPHERE isn’t just collaboration, it’s the genesis of tomorrow’s legends.
        </p>

        <section className="sections" aria-label="Featured Flowers">
          {sectionsData.map((item) => (
            <div
              key={item.title}
              className="section-item"
              tabIndex={0}
              role="button"
              onClick={() => window.location.href = item.link}
              aria-label={item.title}
            >
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </section>

        <section className="news-section" aria-label="Roro Letter">
          <h2 className="news-title">A Letter from Roro</h2>
          <div className="letter">
            <p>
              In ROROSPHERE, every detail is a story, and every story blooms like a flower.  
              This is not just a space to explore nature, but a place to feel wonder, hope, and quiet joy.  
            </p>
            <p>
              May you always find light in small things, warmth in fleeting moments,  
              and courage to bloom in your own season.  
            </p>
            <p className="signature">— Gwen</p>
          </div>
        </section>
      </main>
    </>
  );
}

