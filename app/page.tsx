'use client';

import React from 'react';
import { newsMaterials } from '../src/data/news-materials.js';
import { messages } from '../src/data/messages.js';

const latestNewsItem = [...newsMaterials]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];

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
          font-family: '苹方', 'PingFang SC', 'Source Han Sans CN', 'Noto Sans SC', 'Microsoft YaHei', sans-serif;
          overflow-x: hidden;
        }

        main {
          min-height: 100vh;
          padding: 100px 40px 140px;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          max-width: 100vw;
          overflow-x: hidden;
        }

        /* ====== 背景漂浮光晕 ====== */
        .hero-float {
          position: absolute;
          top: 15%;
          left: 50%;
          width: 300px;
          height: 300px;
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

        /* ====== 标题 ====== */
        h1.brand-title {
          font-family: 'Great Vibes', cursive;
          font-size: 7rem;
          color: var(--roro-main);
          letter-spacing: 0.1em;
          margin: 0;
          text-align: center;
          text-shadow: 0 0 12px var(--roro-glow-alpha-heavy);
          position: relative;
          z-index: 1;
        }

        .subtitle {
          font-family: 'Great Vibes', cursive;
          font-size: 1.5rem;
          color: var(--roro-accent);
          text-align: center;
          max-width: 650px;
          margin: 1rem auto 4rem;
          line-height: 1.4;
          user-select: none;
        }

        /* ====== Sections 不对称网格 ====== */
        .sections {
          max-width: 960px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 40px;
          margin-bottom: 80px;
          position: relative;
          z-index: 1;
        }

        .section-item {
          background: #fff;
          border-radius: 24px;
          padding: 28px 22px 36px;
          box-shadow: 0 8px 20px var(--roro-glow-alpha);
          cursor: pointer;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          position: relative;
        }

        .section-item:hover,
        .section-item:focus-visible {
          transform: translateY(-6px);
          box-shadow: 0 18px 40px var(--roro-glow-alpha-heavy), 0 0 25px var(--roro-main);
          outline: none;
        }

        .section-item h2 {
          font-family: 'Great Vibes', cursive;
          font-size: 2rem;
          margin-bottom: 12px;
          color: var(--roro-accent);
        }

        .section-item p {
          font-size: 1rem;
          font-weight: 300;
          line-height: 1.6;
          color: #5a4a4a;
        }

        /* ====== 新闻 / 寄语卡片 ====== */
        .news-section {
          max-width: 960px;
          width: 100%;
          margin-bottom: 100px;
          position: relative;
          z-index: 1;
        }

        .news-title {
          font-family: 'Great Vibes', cursive;
          font-size: 2.6rem;
          margin-bottom: 36px;
          text-align: center;
          color: var(--roro-main);
          text-shadow: 0 0 8px var(--roro-glow-alpha-heavy);
        }

        ul.news-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 24px;
        }

        ul.news-list li {
          background: #fff;
          border-radius: 20px;
          padding: 20px 18px;
          box-shadow: 0 6px 16px var(--roro-glow-alpha);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        ul.news-list li:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px var(--roro-glow-alpha-heavy);
        }

        ul.news-list li h3 {
          margin: 0 0 8px;
          font-size: 1.2rem;
          color: var(--roro-accent);
        }

        ul.news-list li p {
          margin: 0;
          font-size: 1rem;
          font-weight: 300;
          line-height: 1.5;
          color: #5a4a4a;
        }

        ul.news-list li time {
          font-size: 0.8rem;
          color: #b8a96caa;
        }

        /* ====== 移动端响应 ====== */
        /* ====== 移动端响应 ====== */
@media (max-width: 768px) {
  main { padding: 50px 16px 70px !important; }

  h1.brand-title { font-size: 3.8rem !important; letter-spacing: 0.04em !important; }
  .subtitle { font-size: 1rem !important; max-width: 90vw !important; margin-bottom: 2rem !important; }

  /* Sections卡片自适应屏幕 */
  .sections { 
    gap: 20px !important; 
    grid-template-columns: 1fr !important; /* 单列 */
    width: 100%; /* 充满屏幕宽度 */
  }
  .section-item { 
    padding: 18px 14px 26px !important; 
    width: 100%; 
    max-width: none !important; 
  }
  .section-item h2 { font-size: 1.55rem !important; }
  .section-item p { font-size: 0.92rem !important; }

  /* 新闻卡片自适应屏幕 */
  .news-section { width: 100%; }
  ul.news-list { gap: 16px; }
  ul.news-list li { 
    padding: 14px 12px !important; 
    width: 100%; 
    max-width: none !important; 
  }
  ul.news-list li h3 { font-size: 0.95rem !important; }
  ul.news-list li p { font-size: 0.85rem !important; }
}

      `}</style>

      <main>
        <div className="hero-float" aria-hidden="true"></div>

        <h1 className="brand-title">ROROSPHERE</h1>
        <p className="subtitle">
          Enter a realm where visionaries converge — ROROSPHERE isn’t just collaboration, it’s the genesis of tomorrow’s legends.
        </p>

        <section className="sections" aria-label="特色引导">
          <div
            className="section-item"
            tabIndex={0}
            role="button"
            onClick={() => window.location.href = latestNewsItem.link || `/news-materials/${latestNewsItem.slug}`}
            aria-label={`最新资讯：${latestNewsItem.title}`}
          >
            <h2>最新资讯</h2>
            <p>{latestNewsItem.title}</p>
          </div>

          <div
            className="section-item"
            tabIndex={0}
            role="button"
            onClick={() => window.location.href = '/rp'}
            aria-label="RORO RP"
          >
            <h2>RP Leaderboard</h2>
            <p>查看RP排行榜及RP明细</p>
          </div>

          <div
            className="section-item"
            tabIndex={0}
            role="button"
            onClick={() => window.location.href = '/contact'}
            aria-label="与Roro合作"
          >
            <h2>与Roro合作</h2>
            <p>获取邀请函，开启合作之旅，联系我们</p>
          </div>
        </section>

        <section className="news-section" aria-label="RORO寄语">
          <h2 className="news-title">RORO寄语</h2>
          <ul className="news-list">
            {messages.map(({ id, author, content }) => (
              <li key={id}>
                <h3>{author}</h3>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

























































