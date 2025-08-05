'use client';

import React from 'react';
import Link from 'next/link';
import { programItems } from '@/src/data/programs';

export default function ProgramsPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Great+Vibes&display=swap');

        /* 全局盒模型防撑屏 */
        *, *::before, *::after {
          box-sizing: border-box;
        }

        html, body {
          margin: 0; 
          padding: 0;
          width: 100vw;
          overflow-x: hidden;
          box-sizing: border-box;
          background: #fff;
          color: #333;
          font-family: 'Playfair Display', serif;
        }

        :root {
          --champagne-gold: #D4AF7F;
          --champagne-gold-alpha: #D4AF7Faa;
          --champagne-gold-alpha-soft: #D4AF7F66;
        }

        main {
          width: 90%;
          max-width: 900px;
          margin: 60px auto 140px; /* 上边距微调 */
          padding: 40px 16px 80px;
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
          margin: -20px 0 40px 0; /* 微调大标题上边距 */
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          user-select: none;
          color: var(--champagne-gold);
          font-style: italic;
          text-shadow: 0 0 8px var(--champagne-gold-alpha), 0 0 20px var(--champagne-gold-alpha-soft);
          position: relative;
          z-index: 2;
          word-wrap: break-word;
          padding: 0 10px;
        }

        ul.program-list {
          max-width: 900px;
          width: 100%;
          list-style: none;
          padding: 0;
          margin: 0;
          font-family: 'Playfair Display', serif;
          color: var(--champagne-gold);
          user-select: none;
        }

        ul.program-list li {
          border-bottom: 1px solid #eee;
          padding: 24px 0;
        }

        ul.program-list li:last-child {
          border-bottom: none;
        }

        ul.program-list h3 {
          margin: 0 0 8px;
          font-weight: 700;
          font-size: 1.6rem;
          color: #A8874E;
          word-break: break-word;
          overflow-wrap: break-word;
        }

        ul.program-list h3 a {
          color: inherit;
          text-decoration: none;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        ul.program-list h3 a:hover,
        ul.program-list h3 a:focus {
          color: var(--champagne-gold);
          outline: none;
          text-decoration: none;
        }

        ul.program-list p {
          margin: 0 0 8px;
          font-weight: 300;
          font-size: 1.1rem;
          color: #6b6b6bdd;
        }

        ul.program-list time {
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

        /* 移动端响应式 */
        @media (max-width: 768px) {
          main {
            width: 95%;
            margin: 40px 16px 80px;
            padding: 24px 12px 40px;
          }

          h1 {
            font-size: 3.5rem;
            margin-bottom: 30px;
            letter-spacing: 0.05em;
            white-space: normal;
            word-break: break-word;
            overflow-wrap: break-word;
          }

          ul.program-list li {
            padding: 16px 0;
          }

          ul.program-list h3 {
            font-size: 1.3rem;
          }

          ul.program-list p {
            font-size: 1rem;
          }

          ul.program-list time {
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

        <h1>PROGRAMS</h1>

        <ul className="program-list" aria-label="Programs List">
          {programItems.map(({ id, title, description, date, link }) => (
            <li key={id}>
              <h3>
                <Link href={link}>{title}</Link>
              </h3>
              <p>{description}</p>
              <time>{date}</time>
            </li>
          ))}
        </ul>

        <footer>&copy; 2025 ROROSPHERE. All rights reserved.</footer>
      </main>
    </>
  );
}


