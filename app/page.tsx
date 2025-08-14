'use client';

import React from 'react';
import { newsMaterials } from '../src/data/news-materials.js';
import { messages } from '../src/data/messages.js';

// 最新一条新闻
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

        .hero-cta {
          display: flex;
          gap: 20px;
          margin-bottom: 60px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .hero-cta button {
          background: var(--roro-main);
          color: #fff;
          border: none;
          padding: 14px 28px;
          font-size: 1rem;
          border-radius: 12px;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          font-family: 'Great Vibes', cursive;
        }
        .hero-cta button:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px var(--roro-glow-alpha);
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
          transition: box-shadow 0.35s ease, transform 0.35s ease;
          font-size: 1.05rem;
          min-width: 0;
          color: var(--roro-text);
          user-select: none;
          border-radius: 20px;
          background: linear-gradient(145deg, #fbf8f6, #f2e9d8);
          box-shadow: 0 8px 15px var(--roro-glow-alpha-light);
          position: relative;
        }

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
          box-shadow: 0 0 12px var(--roro-main), 0 0 20px var(--roro-accent);
          opacity: 0.85;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .section-item:hover,
        .section-item:focus-visible {
          transform: translateY(-6px);
          box-shadow: 0 18px 40px var(--roro-glow-alpha), 0 0 25px var(--roro-main);
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

        .stats-section {
          margin-bottom: 6rem;
          font-size: 1.2rem;
          font-weight: 500;
          color: var(--roro-accent);
          text-align: center;
          letter-spacing: 0.03em;
        }

        .workflow-section {
          max-width: 700px;
          margin-bottom: 6rem;
          text-align: center;
        }
        .workflow-section ul {
          list-style: none;
          padding: 0;
          margin: 20px 0 0;
        }
        .workflow-section li {
          margin: 10px 0;
          font-size: 1.1rem;
        }

        .waitlist-section {
          max-width: 600px;
          margin-bottom: 80px;
          text-align: center;
        }
        .waitlist-section form {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .waitlist-section input,
        .waitlist-section select,
        .waitlist-section textarea {
          padding: 10px 14px;
          border-radius: 8px;
          border: 1px solid #ddd;
          font-size: 1rem;
          font-family: '苹方', 'PingFang SC', sans-serif;
        }
        .waitlist-section button {
          margin-top: 10px;
          background: var(--roro-main);
          color: #fff;
          border: none;
          padding: 12px 0;
          font-size: 1.1rem;
          border-radius: 10px;
          cursor: pointer;
          font-family: 'Great Vibes', cursive;
        }
        .waitlist-section button:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 16px var(--roro-glow-alpha);
        }

        .news-section {
          max-width: 900px;
          width: 100%;
          color: var(--roro-main);
          font-family: '苹方', 'PingFang SC', sans-serif;
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

        /* 移动端响应式 */
        @media (max-width: 768px) {
          main { padding: 40px 16px 80px !important; }
          h1.brand-title { font-size: 4rem !important; letter-spacing: 0.05em !important; }
          .subtitle { font-size: 1.1rem !important; max-width: 90vw !important; margin-bottom: 2rem !important; line-height: 1.25 !important; }
          .sections { flex-direction: column !important; gap: 30px !important; }
          .section-item { text-align: center !important; border-bottom: none !important; padding-bottom: 30px !important; }
          .section-item::after { left: 50% !important; right: 50% !important; width: 60px !important; margin-left: -30px !important; bottom: 12px !important; }
        }
      `}</style>

      <main>
        <div className="flower-cluster" aria-hidden="true"></div>

        <h1 className="brand-title">ROROSPHERE</h1>
        <p className="subtitle">
          Enter a realm where visionaries converge — ROROSPHERE isn’t just collaboration, it’s the genesis of tomorrow’s legends.
        </p>

        <div className="hero-cta">
          <button onClick={() => window.location.href='/waitlist'}>加入早期测试</button>
          <button onClick={() => window.location.href='/portfolio'}>查看案例</button>
        </div>

        {/* 价值主张 */}
        <section className="sections" aria-label="价值主张">
          <div className="section-item">
            <h2>💰 即时变现</h2>
            <p>提交作品 → 立刻赚RP，可兑换现金</p>
          </div>
          <div className="section-item">
            <h2>🔄 长期复利</h2>
            <p>作品被复用？每次自动抽成，持续收益</p>
          </div>
          <div className="section-item">
            <h2>🌐 跨圈协作</h2>
            <p>音乐人×设计师×程序员，高价项目自由接</p>
          </div>
        </section>

        {/* 动态数据 */}
        <section className="stats-section">
          📈 已发放 <strong>12,850 RP</strong> | 🎨 <strong>387个作品</strong>被复用 | 🤝 <strong>56次</strong>跨圈协作
        </section>

        {/* 特色引导 */}
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
            onClick={() => window.location.href = '/contact'}
            aria-label="RORO创作者入口"
          >
            <h2>RORO创作者入口</h2>
            <p>先去联系我们页面申请成为创作者</p>
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

        {/* 如何工作流程 */}
        <section className="workflow-section">
          <h2 className="news-title">如何工作</h2>
          <ul>
            <li>1️⃣ 提交作品</li>
            <li>2️⃣ 获得RP</li>
            <li>3️⃣ 兑换现金或升级权限</li>
            <li>4️⃣ 作品被复用？自动收分成!</li>
          </ul>
        </section>

        {/* 等待名单注册 */}
        <section className="waitlist-section">
          <h2 className="news-title">抢先加入 — 前100名永久额外5% RP奖励</h2>
          <form className="waitlist-form" action="/api/waitlist" method="POST">
            <input name="name" placeholder="姓名" required />
            <input name="email" type="email" placeholder="邮箱" required />
            <select name="role" required>
              <option value="">职业</option>
              <option value="designer">设计师</option>
              <option value="developer">开发者</option>
              <option value="musician">音乐人</option>
              <option value="other">其他</option>
            </select>
            <textarea name="problem" placeholder="你想用Roro解决什么问题？" rows={3} />
            <button type="submit">加入等待名单</button>
          </form>
        </section>

        {/* RORO寄语 */}
        <section className="news-section" aria-label="RORO寄语">
          <h2 className="news-title">RORO寄语</h2>
          <ul className="news-list">
            {messages.map(({ id, author, content }) => (
              <li key={id}>
                <h3 style={{ fontFamily: "'Great Vibes', cursive", fontWeight: '400', fontSize: '1.8rem', color: 'var(--roro-main)', userSelect: 'none' }}>{author}</h3>
                <p style={{ fontFamily: "'Great Vibes', cursive", fontSize: '1.4rem', fontWeight: '300', color: '#a4997fcc', whiteSpace: 'pre-line' }}>{content}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}















































