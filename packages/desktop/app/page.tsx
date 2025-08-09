'use client';

import React from 'react';
import Link from 'next/link';

const latestNews = [
  {
    id: 1,
    title: 'ROROSPHERE开启新境界',
    summary: '步入风格与革新的独家空间。',
    date: '2025-08-01',
    link: '/news/1',
  },
  {
    id: 2,
    title: '重磅合作揭晓',
    summary: '跨界巨匠携手，共创非凡作品。',
    date: '2025-08-01',
    link: '/news/2',
  },
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
          --roro-glow-alpha: #FACBAA66;
        }

        *, *::before, *::after {
          max-width: 100vw;
          box-sizing: border-box;
          word-break: break-word;
        }

        html, body {
          margin: 0; padding: 0;
          background: var(--roro-bg);
          color: var(--roro-text);
          font-family: '苹方', 'PingFang SC', 'Source Han Sans CN', 'Noto Sans SC', 'Microsoft YaHei', sans-serif;
          overflow-x: hidden;
        }

        main {
          min-height: 100vh;
          padding: 80px 40px 140px;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          max-width: 100vw;
          overflow-x: hidden;
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
          background: radial-gradient(circle at 40% 60%, var(--roro-main), transparent 70%);
          filter: drop-shadow(0 0 10px var(--roro-glow-alpha));
          border-radius: 50% / 40%;
          animation: gentle-sway 10s ease-in-out infinite alternate;
          z-index: 0;
        }

        @keyframes gentle-sway {
          0% { transform: translateX(-50%) translateY(0) rotate(0deg);}
          100% { transform: translateX(-50%) translateY(10px) rotate(3deg);}
        }

        h1.brand-title {
          font-family: 'Great Vibes', cursive;
          font-size: 7rem;
          font-style: normal;
          color: var(--roro-main);
          letter-spacing: 0.1em;
          margin: 0;
          user-select: none;
          text-align: center;
          text-shadow: 0 0 10px var(--roro-main)aa;
          position: relative;
          z-index: 1;
        }

        .subtitle {
          font-family: 'Great Vibes', cursive;
          font-size: 1.4rem;
          color: var(--roro-accent);
          text-align: center;
          max-width: 600px;
          margin: 1rem auto 3rem;
          user-select: none;
          line-height: 1.3;
          letter-spacing: 0.05em;
        }

        .sections {
          max-width: 900px;
          margin: 0 auto 6rem;
          display: flex;
          gap: 40px;
          justify-content: center;
          flex-wrap: wrap;
          z-index: 1;
        }

        .section-item {
          flex: 1 1 280px;
          border-bottom: 3px solid var(--roro-main);
          padding-bottom: 20px;
          cursor: pointer;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
          font-size: 1.05rem;
          min-width: 0;
          color: var(--roro-text);
          user-select: none;
        }

        .section-item:hover,
        .section-item:focus-visible {
          transform: translateY(-4px);
          box-shadow:
            0 0 15px var(--roro-main)aa,
            0 0 30px var(--roro-main)66;
          border-color: var(--roro-main);
          outline: none;
        }

        .section-item h2 {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 10px;
          color: var(--roro-accent);
          user-select: none;
        }

        .section-item p {
          font-weight: 300;
          line-height: 1.6;
          color: #5a4a4a;
          word-wrap: break-word;
        }

        .news-section {
          max-width: 900px;
          width: 100%;
          color: var(--roro-main);
          font-family: '苹方', 'PingFang SC', 'Source Han Sans CN', 'Noto Sans SC', 'Microsoft YaHei', sans-serif;
          z-index: 1;
        }

        .news-title {
          font-size: 2.4rem;
          font-weight: 700;
          margin-bottom: 30px;
          user-select: none;
          text-align: center;
          color: var(--roro-main);
        }

        ul.news-list {
          list-style: none;
          padding: 0;
          margin: 0;
          color: #7a6a6a;
        }

        ul.news-list li {
          border-bottom: 1px solid #eee;
          padding: 18px 0;
          word-wrap: break-word;
        }

        ul.news-list li h3 {
          margin: 0 0 6px;
          font-weight: 600;
          font-size: 1.3rem;
          color: var(--roro-accent);
        }

        ul.news-list li h3 a {
          color: inherit;
          text-decoration: none;
          cursor: pointer;
        }
        ul.news-list li h3 a:hover,
        ul.news-list li h3 a:focus {
          text-decoration: none;
          outline: none;
        }

        ul.news-list li p {
          margin: 0 0 4px;
          font-weight: 300;
          font-size: 1rem;
          color: #a4997fcc;
          word-wrap: break-word;
        }

        ul.news-list li time {
          font-size: 0.8rem;
          color: #b8a96caa;
        }

        /* 移动端响应式 */
        @media (max-width: 768px) {
          main {
            padding: 40px 16px 80px !important;
          }

          h1.brand-title {
            font-size: 4rem !important;
            letter-spacing: 0.05em !important;
            padding: 0 10px !important;
          }

          .subtitle {
            font-size: 1.1rem !important;
            max-width: 90vw !important;
            margin-bottom: 2rem !important;
            line-height: 1.25 !important;
          }

          .sections {
            flex-direction: column !important;
            gap: 30px !important;
          }

          .section-item {
            text-align: center !important;
            border-bottom: 2px solid var(--roro-main) !important;
            padding-bottom: 15px !important;
          }

          .section-item h2 {
            font-size: 1.5rem !important;
          }

          .section-item p {
            font-size: 0.95rem !important;
          }

          .news-title {
            font-size: 1.8rem !important;
            text-align: center !important;
          }

          ul.news-list li h3 {
            font-size: 1rem !important;
          }

          ul.news-list li p {
            font-size: 0.9rem !important;
          }
        }
      `}</style>

      <main>
        <div className="flower-cluster" aria-hidden="true"></div>

        <h1 className="brand-title">ROROSPHERE</h1>

        <p className="subtitle">
          Enter a realm where visionaries converge — ROROSPHERE isn’t just collaboration, it’s the genesis of tomorrow’s legends.
        </p>

        <section className="sections">
          <div className="section-item" tabIndex={0}>
            <h2>我们的愿景</h2>
            <p>跨界融合，汇聚敢想敢为的创造者，共筑未来文化新高地。</p>
          </div>
          <div className="section-item" tabIndex={0}>
            <h2>加入我们</h2>
            <p>机会属于敢于突破的你，提交作品与理念，展现你的独特声音。</p>
          </div>
          <div className="section-item" tabIndex={0}>
            <h2>体验RORO</h2>
            <p>不仅是创作，更是一种态度，一场优雅且坚定的革新之旅。</p>
          </div>
        </section>

        <section className="news-section">
          <h2 className="news-title">最新资讯</h2>
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
      </main>
    </>
  );
}




































































