'use client';

import React from 'react';
import Link from 'next/link';

const latestNews = [
  {
    id: 1,
    title: 'ROROSPHERE Opens New Realm',
    summary: 'Step into the exclusive world where style meets rebellion.',
    date: '2025-08-01',
    link: '/news/1',
  },
  {
    id: 2,
    title: 'Upcoming Collaboration Revealed',
    summary: 'Legendary artists unite to craft unparalleled masterpieces.',
    date: '2025-08-01',
    link: '/news/2',
  },
];

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Great+Vibes&display=swap');

        :root {
          --champagne-gold: #D4AF7F;
          --champagne-gold-alpha: #D4AF7Faa;
          --champagne-gold-alpha-soft: #D4AF7F66;
        }

        html, body {
          margin: 0; padding: 0;
          background: #fff;
          color: #333;
          font-family: 'Playfair Display', serif;
          overflow-x: hidden;
        }

        main {
          min-height: 100vh;
          padding: 80px 40px 140px;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          overflow: visible;
        }

        .flower-cluster {
          position: absolute;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          pointer-events: none;
          user-select: none;
          width: 320px;
          height: 180px;
          opacity: 0.15;
          background: radial-gradient(circle at 40% 60%, var(--champagne-gold), transparent 70%);
          filter: drop-shadow(0 0 10px var(--champagne-gold-alpha-soft));
          border-radius: 50% / 40%;
          animation: gentle-sway 10s ease-in-out infinite alternate;
        }

        @keyframes gentle-sway {
          0% { transform: translateX(-50%) translateY(0) rotate(0deg);}
          100% { transform: translateX(-50%) translateY(10px) rotate(3deg);}
        }

        h1 {
          font-size: 8rem;
          margin: 0;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          user-select: none;
          color: var(--champagne-gold);
          font-style: italic;
          text-shadow: 0 0 8px var(--champagne-gold-alpha), 0 0 20px var(--champagne-gold-alpha-soft);
          position: relative;
          z-index: 2;
        }

        .subtitle {
          max-width: 720px;
          text-align: center;
          font-weight: 300;
          font-size: 1.4rem;
          margin: 20px 0 80px;
          letter-spacing: 0.08em;
          line-height: 1.5;
          color: #7a6a4fcc;
          font-family: 'Great Vibes', cursive;
        }

        /* 微交互，轻微上移和光晕 */
        .sections {
          display: flex;
          gap: 50px;
          max-width: 900px;
          width: 100%;
          justify-content: center;
          margin-bottom: 100px;
        }

        .section-item {
          flex: 1;
          border-bottom: 3px solid var(--champagne-gold);
          padding-bottom: 25px;
          cursor: pointer;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
          font-size: 1rem;
          transform: translateY(0);
        }

        .section-item:hover,
        .section-item:focus-visible {
          transform: translateY(-4px);
          box-shadow:
            0 0 15px var(--champagne-gold-alpha),
            0 0 30px var(--champagne-gold-alpha-soft);
          border-color: var(--champagne-gold);
          outline: none;
        }

        .section-item h2 {
          font-size: 1.9rem;
          font-weight: 700;
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: #B68E37;
          user-select: none;
        }

        .section-item p {
          font-weight: 300;
          font-size: 1rem;
          line-height: 1.6;
          color: #6b6b6bdd;
          user-select: none;
        }

        /* 最新资讯区 - 香槟金色调 */
        .news-section {
          max-width: 900px;
          width: 100%;
          color: var(--champagne-gold);
          font-family: 'Playfair Display', serif;
        }

        .news-title {
          font-size: 2.6rem;
          font-weight: 700;
          margin-bottom: 30px;
          user-select: none;
          text-shadow: none;
          border-bottom: none;
          color: var(--champagne-gold);
        }

        ul.news-list {
          list-style: none;
          padding: 0;
          margin: 0;
          color: #777;
        }

        ul.news-list li {
          border-bottom: 1px solid #eee;
          padding: 18px 0;
        }

        ul.news-list li h3 {
          margin: 0 0 6px;
          font-weight: 600;
          font-size: 1.3rem;
          color: #A8874E;
        }

        /* 这里针对Link覆盖默认样式 */
        ul.news-list li h3 a {
          color: inherit;
          text-decoration: none;
          cursor: pointer;
        }
        ul.news-list li h3 a:hover,
        ul.news-list li h3 a:focus {
          text-decoration: none; /* ✅ 已改，不再有横线 */
          outline: none;
        }

        ul.news-list li p {
          margin: 0 0 4px;
          font-weight: 300;
          font-size: 1rem;
          color: #a4997fcc;
        }

        ul.news-list li time {
          font-size: 0.8rem;
          color: #b8a96caa;
        }

        /* 页脚静态风格 */
        footer {
          margin-top: 110px;
          text-align: center;
          font-size: 0.75rem;
          font-weight: 300;
          color: #999999aa;
          letter-spacing: 0.1em;
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
        <div className="flower-cluster" aria-hidden="true"></div>

        <h1>ROROSPHERE</h1>

        <p className="subtitle">
          Not just co-creation. <strong>ROROSPHERE</strong> is an exclusive lifestyle atmosphere shaped by select, expressive collaborations.
        </p>

        <section className="sections">
          <div className="section-item" tabIndex={0}>
            <h2>Our Vision</h2>
            <p>Setting a new standard for curated artistic collaboration — a selective team, a living ecosystem.</p>
          </div>
          <div className="section-item" tabIndex={0}>
            <h2>Join Us</h2>
            <p>Opportunities are earned. Submit your application and share your unique voice.</p>
          </div>
          <div className="section-item" tabIndex={0}>
            <h2>Experience RORO</h2>
            <p>More than creation, a lifestyle atmosphere. Explore and embody the ROROSPHERE spirit.</p>
          </div>
        </section>

        <section className="news-section">
          <h2 className="news-title">Latest News</h2>
          <ul className="news-list">
            {latestNews.map(({ id, title, summary, date, link }) => (
              <li key={id}>
                <h3>
                  <Link href={link}>{title}</Link>
                </h3>
                <p>{summary}</p>
                <time>{date}</time>
              </li>
            ))}
          </ul>
        </section>

        <footer>&copy; 2025 ROROSPHERE. All rights reserved.</footer>
      </main>
    </>
  );
}
























