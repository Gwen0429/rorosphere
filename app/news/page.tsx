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
          --champagne-gold-alpha-soft: #D4AF7F44;
          --news-text-color: #5a4c31;
        }

        html, body {
          margin: 0; padding: 0;
          background: #fff;
          color: var(--news-text-color);
          font-family: 'Playfair Display', serif;
          overflow-x: hidden;
        }

        main {
          min-height: 100vh;
          padding: 80px 40px 160px;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          user-select: none;
          max-width: 960px;
          margin-left: auto;
          margin-right: auto;
        }

        .flower-cluster {
          position: absolute;
          top: 16px;
          left: 50%;
          transform: translateX(-50%);
          pointer-events: none;
          user-select: none;
          width: 280px;
          height: 160px;
          opacity: 0.1;
          background: radial-gradient(circle at 40% 60%, var(--champagne-gold), transparent 75%);
          filter: drop-shadow(0 0 10px var(--champagne-gold-alpha-soft));
          border-radius: 50% / 40%;
          animation: gentle-sway 12s ease-in-out infinite alternate;
          z-index: 0;
        }

        @keyframes gentle-sway {
          0% { transform: translateX(-50%) translateY(0) rotate(0deg);}
          100% { transform: translateX(-50%) translateY(12px) rotate(2deg);}
        }

        h1 {
          font-size: 5rem;
          margin: 0 0 48px 0;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--champagne-gold);
          font-style: italic;
          text-shadow: 0 0 8px var(--champagne-gold-alpha), 0 0 22px var(--champagne-gold-alpha-soft);
          position: relative;
          z-index: 1;
          user-select: none;
          word-break: break-word;
          overflow-wrap: break-word;
          padding: 0 10px;
          max-width: 100%;
          white-space: normal;
        }

        ul.news-list {
          width: 100%;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        ul.news-list li {
          border-bottom: 1px solid #eee;
          padding: 28px 0;
        }

        ul.news-list li:last-child {
          border-bottom: none;
        }

        ul.news-list h3 {
          margin: 0 0 12px;
          font-weight: 700;
          font-size: 1.8rem;
          color: #A8874E;
          user-select: text;
        }

        ul.news-list h3 a {
          color: inherit;
          text-decoration: none;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        ul.news-list h3 a:hover,
        ul.news-list h3 a:focus {
          color: var(--champagne-gold);
          outline: none;
          text-decoration: none;
        }

        ul.news-list p {
          margin: 0 0 12px;
          font-weight: 300;
          font-size: 1.15rem;
          line-height: 1.5;
          color: #6b6b6bdd;
          user-select: text;
        }

        ul.news-list time {
          font-size: 0.9rem;
          color: #b8a96caa;
          font-style: italic;
          user-select: text;
        }

        footer {
          margin-top: 140px;
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
            padding: 40px 20px 100px;
          }

          h1 {
            font-size: 3.6rem;
            margin-bottom: 36px;
            letter-spacing: 0.12em;
          }

          ul.news-list li {
            padding: 20px 0;
          }

          ul.news-list h3 {
            font-size: 1.3rem;
          }

          ul.news-list p {
            font-size: 1rem;
          }

          ul.news-list time {
            font-size: 0.8rem;
          }

          footer {
            margin-top: 80px;
            font-size: 0.65rem;
          }
        }
      `}</style>

      <main>
        <div className="flower-cluster" aria-hidden="true" />

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








