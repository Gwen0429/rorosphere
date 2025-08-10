'use client';

import React from 'react';
import Link from 'next/link';
import { newsMaterials } from '../src/data/news-materials.js';
import { messages } from '../src/data/messages.js';

// 最新一条新闻，用于特色引导卡片第一项
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
          --roro-glow-alpha: #FACBAA66;
          --roro-glow-alpha-light: #FACBAA33;
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
          padding: 24px 20px 32px;
          cursor: pointer;
          transition:
            box-shadow 0.35s ease,
            transform 0.35s ease;
          font-size: 1.05rem;
          min-width: 0;
          color: var(--roro-text);
          user-select: none;
          border-radius: 20px;
          background: linear-gradient(145deg, #fbf8f6, #f2e9d8);
          box-shadow:
            0 8px 15px var(--roro-glow-alpha-light);
          position: relative;
        }
        /* 底部光晕线条替代横线 */
        .section-item::after {
          content: "";
          position: absolute;
          bottom: 8px;
          left: 30px;
          right: 30px;
          height: 4px;
          border-radius: 10px;
          background: linear-gradient(
            90deg,
            var(--roro-main) 0%,
            var(--roro-accent) 50%,
            var(--roro-main) 100%
          );
          box-shadow:
            0 0 12px var(--roro-main),
            0 0 20px var(--roro-accent);
          opacity: 0.85;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .section-item:hover,
        .section-item:focus-visible {
          transform: translateY(-6px);
          box-shadow:
            0 18px 40px var(--roro-glow-alpha),
            0 0 25px var(--roro-main);
          outline: none;
        }
        .section-item:hover::after,
        .section-item:focus-visible::after {
          opacity: 1;
        }

        .section-item h2 {
          font-family: 'Great Vibes', cursive;
          font-size: 2.2rem;
          font-weight: 400;
          margin-bottom: 14px;
          color: var(--roro-accent);
          user-select: none;
          letter-spacing: 0.03em;
        }

        .section-item p {
          font-weight: 300;
          line-height: 1.6;
          color: #5a4a4a;
          word-wrap: break-word;
          user-select: text;
        }

        .news-section {
          max-width: 900px;
          width: 100%;
          color: var(--roro-main);
          font-family: '苹方', 'PingFang SC', 'Source Han Sans CN', 'Noto Sans SC', 'Microsoft YaHei', sans-serif;
          z-index: 1;
        }

        .news-title {
          font-family: 'Great Vibes', cursive;
          font-size: 2.8rem;
          font-weight: 400;
          margin-bottom: 30px;
          user-select: none;
          text-align: center;
          color: var(--roro-main);
          letter-spacing: 0.05em;
          text-shadow: 0 0 8px var(--roro-main)aa;
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
          text-decoration: underline;
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
            border-bottom: none !important;
            padding-bottom: 30px !important;
          }

          .section-item::after {
            left: 50% !important;
            right: 50% !important;
            width: 60px !important;
            margin-left: -30px !important;
            bottom: 12px !important;
          }

          .section-item h2 {
            font-size: 1.8rem !important;
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

        {/* === 修改部分：特色引导模块内容 === */}
        <section className="sections" aria-label="特色引导">
          <div
            className="section-item"
            tabIndex={0}
            role="button"
            onClick={() => window.location.href = `/news-materials/${latestNewsItem.id}`}
            aria-label={`最新资讯：${latestNewsItem.title}`}
          >
            <h2>最新资讯</h2>
            <p>{latestNewsItem.title}</p>
          </div>

          <div
            className="section-item"
            tabIndex={0}
            role="button"
            onClick={() => window.location.href = '/creative-projects/submit'}
            aria-label="发布我的创意项目"
          >
            <h2>发布我的创意项目</h2>
            <p>限创作者，输入邮箱和专属邀请码完成申请，或申请成为创作者</p>
          </div>

          <div
            className="section-item"
            tabIndex={0}
            role="button"
            onClick={() => window.location.href = '/invitation'}
            aria-label="与Roro合作"
          >
            <h2>与Roro合作</h2>
            <p>获取邀请函，开启合作之旅，联系我们</p>
          </div>
        </section>

        {/* === 修改部分：替换最新资讯模块为RORO寄语模块 === */}
        <section className="news-section" aria-label="RORO寄语">
          <h2 className="news-title">RORO寄语</h2>
          <ul className="news-list">
            {messages.map(({ id, author, content }) => (
              <li key={id}>
                <h3
                  style={{
                    fontFamily: "'Great Vibes', cursive",
                    fontWeight: '400',
                    fontSize: '1.8rem',
                    color: 'var(--roro-main)',
                    userSelect: 'none',
                  }}
                >
                  {author}
                </h3>
                <p
                  style={{
                    fontFamily: "'Great Vibes', cursive",
                    fontSize: '1.4rem',
                    fontWeight: '300',
                    color: '#a4997fcc',
                    whiteSpace: 'pre-line',
                  }}
                >
                  {content}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}














































