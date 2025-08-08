'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const brandMilestones = [
  { id: 1, date: '2025-07-01', title: 'ROROSPHERE 成立', desc: '开启青少年赋能与文化共创之旅' },
  { id: 2, date: '2025-07-15', title: '首个线下创意展览', desc: '汇聚年轻创意，激发无限可能' },
  { id: 3, date: '2025-07-30', title: '发布品牌首款周边', desc: '精致设计，传递品牌精神' },
];

const creativeProjects = [
  { id: 1, title: '艺术共创计划', desc: '聚合家庭与青少年力量，打造原创艺术', liked: false },
  { id: 2, title: '文化传承项目', desc: '连接传统与现代，塑造独特文化表达', liked: false },
  { id: 3, title: '生活美学探索', desc: '激励个性成长，打造生活方式品牌', liked: false },
];

export default function Home() {
  const [projects, setProjects] = useState(creativeProjects);

  const toggleLike = (id: number) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, liked: !p.liked } : p))
    );
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&display=swap');

        :root {
          --chanel-white: #fafafa;
          --champagne-gold-start: #D4AF7F;
          --champagne-gold-end: #B68E37;
          --champagne-gold-alpha: #D4AF7Faa;
          --champagne-gold-alpha-soft: #D4AF7F66;
          --text-color: #2c2c2c;
          --font-primary: 'Playfair Display', serif;
        }

        * {
          box-sizing: border-box;
        }

        html, body {
          margin: 0; padding: 0;
          background: var(--chanel-white);
          color: var(--text-color);
          font-family: var(--font-primary);
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        main {
          padding: 80px 40px 140px;
          max-width: 1200px;
          margin: 0 auto;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          gap: 64px;
          user-select: none;
        }

        /* 顶部标题区 */
        .header {
          text-align: center;
          position: relative;
          z-index: 2;
          padding: 80px 0 48px;
          max-width: 90vw;
          margin-left: auto;
          margin-right: auto;
        }

        .header h1 {
          font-weight: 700;
          font-size: clamp(3rem, 8vw, 5rem);
          letter-spacing: 0.28em;
          line-height: 1.1;
          user-select: text;
          color: var(--text-color);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          transition: all 0.3s ease;
          text-shadow:
            0 1px 3px rgba(0,0,0,0.08);
          font-feature-settings: "liga" 1;
          font-variant-ligatures: common-ligatures;
        }

        /* 仅移动端允许换行 */
        @media (max-width: 720px) {
          .header h1 {
            white-space: normal;
            overflow: visible;
            text-overflow: unset;
            letter-spacing: 0.2em;
            font-size: clamp(2.5rem, 10vw, 4.5rem);
            line-height: 1.05;
          }
          .header h1 span.line1, .header h1 span.line2 {
            display: block;
            user-select: text;
          }
        }

        .header p {
          font-weight: 400;
          font-size: 1.25rem;
          color: #555555cc;
          margin: 24px auto 36px;
          max-width: 700px;
          line-height: 1.5;
          user-select: text;
        }

        .btn-primary {
          background: linear-gradient(45deg, var(--champagne-gold-start), var(--champagne-gold-end));
          border: none;
          padding: 14px 36px;
          font-size: 1rem;
          font-weight: 700;
          color: #fff;
          border-radius: 30px;
          cursor: pointer;
          box-shadow: 0 0 18px var(--champagne-gold-alpha);
          transition: box-shadow 0.3s ease;
          user-select: none;
          text-decoration: none;
          display: inline-block;
        }
        .btn-primary:hover,
        .btn-primary:focus-visible {
          box-shadow: 0 0 28px var(--champagne-gold-start);
          outline: none;
        }

        /* 特色引导模块现代化 */
        .guide-section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 40px;
          max-width: 960px;
          margin: 0 auto;
          padding: 0 12px;
        }

        .guide-card {
          background: linear-gradient(145deg, #fefefe, #f5f5f5);
          border-radius: 20px;
          padding: 32px 24px;
          box-shadow:
            0 8px 16px rgba(212, 175, 127, 0.15),
            inset 0 0 20px rgba(255, 255, 255, 0.4);
          color: #6b5e41;
          font-weight: 600;
          font-size: 1.2rem;
          text-align: center;
          cursor: pointer;
          user-select: none;
          transition:
            box-shadow 0.4s ease,
            transform 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 180px;
          outline-offset: 4px;
        }

        .guide-card:hover,
        .guide-card:focus-visible {
          box-shadow:
            0 14px 28px rgba(212, 175, 127, 0.35),
            inset 0 0 30px rgba(255, 255, 255, 0.55);
          transform: translateY(-8px);
          outline: none;
        }

        .guide-card h3 {
          margin-bottom: 12px;
          font-size: 1.5rem;
          letter-spacing: 0.14em;
          color: var(--champagne-gold-end);
          user-select: text;
        }

        .guide-card p {
          margin: 0;
          font-weight: 400;
          font-size: 1rem;
          color: #8B7D5C;
          user-select: text;
        }

        /* 品牌历程 + 创意项目模块 */
        .milestones-section, .projects-section {
          max-width: 1100px;
          margin: 0 auto;
          padding: 32px 18px 24px;
          background-color: #fafafa;
          border-radius: 14px;
          box-shadow:
            inset 0 0 16px #fff7d8,
            0 0 18px var(--champagne-gold-alpha-soft);
          background-image: url('/textures/fine-papyrus.png');
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
        }

        .milestones-section h2, .projects-section h2 {
          font-size: 2.8rem;
          font-weight: 700;
          color: var(--champagne-gold-end);
          margin-bottom: 24px;
          user-select: none;
          text-align: center;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          position: relative;
        }

        .milestones-section h2::after, .projects-section h2::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: -10px;
          transform: translateX(-50%);
          width: max(40px, 10vw);
          height: 2px;
          background: linear-gradient(90deg, var(--champagne-gold-alpha), var(--champagne-gold-end));
          border-radius: 1px;
        }

        @media (max-width: 480px) {
          .milestones-section h2::after, .projects-section h2::after {
            display: none;
          }
        }

        .timeline {
          border-left: 3px solid var(--champagne-gold-end);
          margin-left: 16px;
          padding-left: 24px;
        }

        .timeline-item {
          position: relative;
          margin-bottom: 36px;
          padding-left: 16px;
        }

        .timeline-item::before {
          content: '';
          position: absolute;
          left: -28px;
          top: 6px;
          width: 16px;
          height: 16px;
          background: var(--champagne-gold-start);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--champagne-gold-alpha);
        }

        .timeline-item time {
          display: block;
          font-size: 0.9rem;
          font-weight: 600;
          color: #a38f56cc;
          margin-bottom: 6px;
          user-select: text;
        }

        .timeline-item h3 {
          margin: 0 0 6px 0;
          font-weight: 700;
          color: var(--champagne-gold-end);
          user-select: text;
        }

        .timeline-item p {
          margin: 0;
          font-weight: 400;
          color: #5b5b5bdd;
          line-height: 1.4;
          user-select: text;
        }

        /* 创意项目 */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 32px;
        }

        .project-card {
          border: 2px solid var(--champagne-gold-start);
          border-radius: 14px;
          padding: 24px 22px;
          box-shadow: 0 0 12px transparent;
          background: #fff;
          transition: box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s ease;
          user-select: none;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 220px;
        }

        .project-card:hover,
        .project-card:focus-within {
          box-shadow:
            0 0 28px var(--champagne-gold-alpha),
            0 0 48px var(--champagne-gold-alpha-soft);
          border-color: var(--champagne-gold-end);
          transform: translateY(-6px);
          outline: none;
        }

        .project-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--champagne-gold-end);
          margin-bottom: 16px;
          letter-spacing: 0.06em;
          user-select: text;
        }

        .project-desc {
          flex-grow: 1;
          font-weight: 400;
          font-size: 1rem;
          color: #5b5b5bdd;
          margin-bottom: 24px;
          user-select: text;
          line-height: 1.4;
        }

        .like-button {
          background: none;
          border: 2px solid var(--champagne-gold-start);
          border-radius: 24px;
          padding: 8px 24px;
          font-size: 1rem;
          font-weight: 600;
          color: var(--champagne-gold-start);
          cursor: pointer;
          user-select: none;
          align-self: flex-start;
          transition:
            background-color 0.3s ease,
            color 0.3s ease,
            border-color 0.3s ease,
            box-shadow 0.3s ease;
          box-shadow: none;
        }

        .like-button.liked {
          background-color: var(--champagne-gold-start);
          color: #fff;
          border-color: var(--champagne-gold-end);
          box-shadow: 0 0 10px var(--champagne-gold-alpha);
        }

        .like-button:hover,
        .like-button:focus-visible {
          outline: none;
          background-color: var(--champagne-gold-end);
          color: #fff;
          border-color: var(--champagne-gold-end);
          box-shadow: 0 0 14px var(--champagne-gold-alpha);
        }

        /* 页脚 */
        footer {
          text-align: center;
          font-size: 0.85rem;
          color: #999999cc;
          letter-spacing: 0.12em;
          user-select: none;
          margin-top: 48px;
          padding-bottom: 24px;
        }

        /* 响应式 */
        @media (max-width: 768px) {
          main {
            padding: 40px 20px 80px;
            gap: 50px;
          }
          .header h1 {
            white-space: normal;
            overflow: visible;
            text-overflow: unset;
            letter-spacing: 0.2em;
            font-size: clamp(2.5rem, 10vw, 4.5rem);
            line-height: 1.05;
          }
          .header h1 span.line1,
          .header h1 span.line2 {
            display: block;
            user-select: text;
          }
          .guide-section {
            grid-template-columns: 1fr;
            gap: 32px;
            max-width: 100%;
            padding: 0 12px;
          }
          .milestones-section,
          .projects-section {
            max-width: 100%;
            padding: 24px 12px 24px;
          }
          .projects-grid {
            grid-template-columns: 1fr;
          }
          .project-card {
            max-width: 100%;
          }
        }
      `}</style>

      <main role="main" aria-label="Rorosphere 首页">
        <header className="header" aria-label="品牌介绍">
          <h1 aria-label="ROROSPHERE">
            <span className="line1">RORO</span>
            <span className="line2">SPHERE</span>
          </h1>
          <p>激发青少年潜能，构筑归属感与文化共创的未来。</p>
          <Link href="/brand-history" className="btn-primary" aria-label="了解品牌历程">
            了解品牌历程
          </Link>
        </header>

        <section className="guide-section" aria-label="核心引导">
          <Link href="/cooperation" className="guide-card" tabIndex={0} aria-label="合作与参与">
            <h3>合作与参与</h3>
            <p>加入我们，共筑青少年成长平台。</p>
          </Link>
          <div className="guide-card" tabIndex={-1} aria-hidden="true">
            <h3>内容持续更新</h3>
            <p>更多精彩，敬请期待。</p>
          </div>
          <div className="guide-card" tabIndex={-1} aria-hidden="true">
            <h3>敬请关注</h3>
            <p>品牌活动，资讯发布。</p>
          </div>
        </section>

        <section className="milestones-section" aria-label="品牌历程">
          <h2>品牌历程</h2>
          <div className="timeline" role="list">
            {brandMilestones.map(({ id, date, title, desc }) => (
              <article key={id} className="timeline-item" role="listitem" tabIndex={0} aria-label={`${date} - ${title}`}>
                <time dateTime={date}>{date}</time>
                <h3>{title}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="projects-section" aria-label="创意项目">
          <h2>创意项目</h2>
          <p className="section-subtitle">
            汇聚年轻创意，激发文化传承与生活美学的多元表达。
          </p>
          <div className="projects-grid">
            {projects.map(({ id, title, desc, liked }) => (
              <article key={id} className="project-card" tabIndex={0} aria-label={`${title} 创意项目`}>
                <h3 className="project-title">{title}</h3>
                <p className="project-desc">{desc}</p>
                <button
                  className={`like-button ${liked ? 'liked' : ''}`}
                  aria-pressed={liked}
                  onClick={() => toggleLike(id)}
                  aria-label={liked ? `取消喜欢${title}` : `喜欢${title}`}
                >
                  {liked ? '已喜欢' : '喜欢'}
                </button>
              </article>
            ))}
          </div>
        </section>

        <footer role="contentinfo" aria-label="网站页脚">
          &copy; 2025 Rorosphere 版权所有
        </footer>
      </main>
    </>
  );
}









































