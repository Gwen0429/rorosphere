'use client';

import React from 'react';

const sectionsData = [
  { title: 'Clouds', link: '/clouds', description: 'Experience the lightness and freedom of the sky' },
  { title: 'Mushrooms', link: '/mushrooms', description: 'Discover the mysterious residents of the forest' },
  { title: 'Leaves', link: '/leaves', description: 'Observe the beauty of nature through seasons' },
  { title: 'Dandelions', link: '/dandelions', description: 'Seeds take flight, dreams set sail' },
  { title: 'More', link: '/contact', description: 'Want to add a new topic? Contact us' },
];

const familyData = [
  { name: 'Roro Founder', content: 'Welcome to the Roro Family — a space for nature and wonder.' },
  { name: 'Roro Artist', content: 'Sharing our love for whimsical details and natural beauty.' },
  { name: 'Roro Explorer', content: 'Join us in discovering tiny marvels around us.' },
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

        /* Sections Grid 小巧卡片 */
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

        /* Roro Family 卡片 */
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

        ul.news-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
        }

        ul.news-list li {
          background: #fff;
          border-radius: 18px;
          padding: 14px 12px;
          box-shadow: 0 4px 12px var(--roro-glow-alpha);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        ul.news-list li:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 22px var(--roro-glow-alpha-heavy);
        }

        ul.news-list li h3 {
          margin: 0 0 4px;
          font-size: 1rem;
          color: var(--roro-accent);
        }

        ul.news-list li p {
          margin: 0;
          font-size: 0.85rem;
          font-weight: 300;
          line-height: 1.3;
          color: #5a4a4a;
        }

        /* 移动端响应 */
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

          ul.news-list {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          ul.news-list li { padding: 10px 8px; }
          ul.news-list li h3 { font-size: 0.9rem; }
          ul.news-list li p { font-size: 0.8rem; }
        }
      `}</style>

      <main>
        <div className="hero-float" aria-hidden="true"></div>

        <h1 className="brand-title">ROROSPHERE</h1>
        <p className="subtitle">
          Enter a realm where visionaries converge — ROROSPHERE isn’t just collaboration, it’s the genesis of tomorrow’s legends.
        </p>

        <section className="sections" aria-label="Featured Topics">
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

        <section className="news-section" aria-label="Roro Family">
          <h2 className="news-title">Roro Family</h2>
          <ul className="news-list">
            {familyData.map(({ name, content }) => (
              <li key={name}>
                <h3>{name}</h3>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}


























































