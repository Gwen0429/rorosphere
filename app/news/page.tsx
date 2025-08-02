'use client';

import React from 'react';
import Link from 'next/link';
import { latestNews } from '../../src/data/news';

export default function NewsPage() {
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
          z-index: 0;
        }

        @keyframes gentle-sway {
          0% { transform: translateX(-50%) translateY(0) rotate(0deg);}
          100% { transform: translateX(-50%) translateY(10px) rotate(3deg);}
        }

        h1 {
          font-size: 7rem;
          margin: 0 0 40px 0;
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

        .news-list {
          max-width: 900px;
          width: 100%;
          list-style: none;
          padding: 0;
          margin: 0;
          font-family: 'Playfair Display', serif;
          color: var(--champagne-gold);
          user-select: none;
        }

        .news-list li {
          border-bottom: 1px solid #eee;
          padding: 24px 0;
        }

        .news-list li:last-child {
          border-bottom: none;
        }

        .news-title {
          font-size: 2.2rem;
          font-weight: 700;
          margin-bottom: 30px;
          color: var(--champagne-gold);
          user-select: none;
        }

        .news-list h3 {
          margin: 0 0 8px;
          font-weight: 700;
          font-size: 1.6rem;
          color: #A8874E;
        }

        .news-list h3 a {
          color: inherit;
          text-decoration: none;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .news-list h3 a:hover,
        .news-list h3 a:focus {
          color: var(--champagne-gold);
          outline: none;
          text-decoration: none;
        }

        .news-list p {
          margin: 0 0 8px;
          font-weight: 300;
          font-size: 1.1rem;
          color: #6b6b6bdd;
        }

        .news-list time {
          font-size: 0.9rem;
          color: #b8a96caa;
          font-style: italic;
        }

        footer {
          margin-top: 120px;
          text-align: center;
          font-size: 0.75rem;
          font-weight: 300;
          color: #999999aa;
          letter-spacing: 0.1em;
          user-select: none;
          position: relative;
        }

        /* 移动端响应式优化 */
        @media (max-width: 768px) {
          main {
            padding: 40px 20px 80px;
          }

          h1 {
            font-size: 3.8rem;
            margin-bottom: 30px;
            letter-spacing: 0.12em;
          }

          .news-list li {
            padding: 16px 0;
          }

          .news-list h3 {
            font-size: 1.3rem;
          }

          .news-list p {
            font-size: 1rem;
          }

          .news-list time {
            font-size: 0.8rem;
          }

          footer {
            margin-top: 80px;
            font-size: 0.65rem;
          }
        }
      `}</style>

      <main>
        <div className="flower-cluster" aria-hidden="true"></div>

        <h1>NEWS</h1>

        <ul className="news-list" aria-label="News List">
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

        <footer>&copy; 2025 ROROSPHERE. All rights reserved.</footer>
      </main>
    </>
  );
}





