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
          --champagne-gold-start: #D4AF7F;
          --champagne-gold-end: #B68E37;
          --champagne-gold-alpha: #D4AF7Faa;
          --champagne-gold-alpha-soft: #D4AF7F66;
          --text-dark: #222222;
          --text-muted: #5b5b5bdd;
          --bg-color: #FFFFFF;
          --font-primary: 'Playfair Display', serif;
        }

        * {
          box-sizing: border-box;
        }

        html, body {
          margin: 0; padding: 0;
          background: var(--bg-color);
          color: var(--text-dark);
          font-family: var(--font-primary);
          overflow-x: hidden;
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
          font-size: clamp(3.2rem, 8vw, 4.8rem);
          font-weight: 700;
          color: transparent;
          background: linear-gradient(90deg, var(--champagne-gold-start), var(--champagne-gold-end));
          background-clip: text;
          -webkit-background-clip: text;
          text-shadow:
            0 0 6px var(--champagne-gold-alpha),
            0 0 12px var(--champagne-gold-alpha-soft);
          letter-spacing: 0.25em;
          line-height: 1.12;
          user-select: text;
          margin: 0 auto 24px;
          white-space: nowrap; /* 电脑端强制不换行 */
          max-width: 100%;
        }
        @media (max-width: 480px) {
          .header h1 {
            white-space: normal; /* 移动端允许换行 */
            line-height: 1.3;
          }
          /* 手机端强制换成两行，RORO / SPHERE */
          .header h1::after {
            content: '';
            display: none;
          }
          /* 用手动换行替代文字，方便控制 */
          .header h1 {
            white-space: normal;
          }
        }
        /* 移动端文字容器，手动换行 */
        .header h1 span {
          display: block;
          letter-spacing: 0.3em;
        }

        .header p {
          font-weight: 400;
          font-size: 1.25rem;
          color: var(--text-dark);
          margin: 0 auto 36px;
          max-width: 720px;
          line-height: 1.5;
          user-select: text;
          white-space: normal;
        }

        .btn-primary {
          background: none;
          border: 2px solid var(--champagne-gold-end);
          padding: 14px 36px;
          font-size: 1rem;
          font-weight: 700;
          color: var(--champagne-gold-end);
          border-radius: 30px;
          cursor: pointer;
          user-select: none;
          text-decoration: none;
          display: inline-block;
          transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
          box-shadow: none;
        }
        .btn-primary:hover,
        .btn-primary:focus-visible {
          background-color: var(--champagne-gold-end);
          color: #fff;
          outline: none;
          box-shadow: 0 0 14px var(--champagne-gold-alpha);
        }

        /* 特色引导模块内容引导语 */
        .guide-intro {
          text-align: center;
          font-size: 1.1rem;
          color: var(--text-dark);
          margin-bottom: 24px;
          user-select: text;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }

        /* 核心引导区 */
        .guide-section {
          display: flex;
          gap: 40px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .guide-card {
          flex: 1 1 240px;
          background: #fff;
          border-radius: 12px;
          padding: 24px 18px 18px 18px;
          cursor: pointer;
          box-shadow: 0 0 12px rgba(0,0,0,0.05);
          transition:
            background-color 0.3s ease,
            box-shadow 0.3s ease,
            transform 0.3s ease;
          user-select: none;
          color: var(--text-dark);
          font-weight: 500;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          min-height: 180px;
        }
        .guide-card:hover,
        .guide-card:focus-visible {
          background-color: var(--champagne-gold-alpha-soft);
          box-shadow: 0 0 20px var(--champagne-gold-alpha);
          transform: translateY(-6px);
          outline: none;
        }
        .guide-card h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--champagne-gold-end);
          margin-bottom: 14px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          user-select: text;
        }
        .guide-card p {
          font-weight: 400;
          font-size: 1rem;
          line-height: 1.5;
          color: var(--text-muted);
          user-select: text;
        }

        /* 品牌历程 + 资讯模块 */
        .milestones-section,
        .projects-section {
          max-width: 1100px;
          margin: 0 auto;
          padding: 32px 18px 24px;
          background-color: rgba(212, 175, 127, 0.06);
          border-radius: 14px;
          box-shadow:
            0 0 12px rgba(212, 175, 127, 0.15);
        }
        .milestones-section h2,
        .projects-section h2 {
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
        .milestones-section h2::after,
        .projects-section h2::after {
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
          .milestones-section h2::after,
          .projects-section h2::after {
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
          color: var(--text-muted);
          line-height: 1.4;
          user-select: text;
        }

        /* 创意项目模块 */
        .projects-section p.section-subtitle {
          font-size: 1.15rem;
          font-weight: 400;
          color: var(--text-dark);
          margin-bottom: 24px;
          user-select: text;
          text-align: center;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 32px;
        }
        .project-card {
          border-radius: 14px;
          padding: 24px 22px;
          background: #fff;
          box-shadow: 0 0 8px rgba(0,0,0,0.04);
          transition: box-shadow 0.3s ease, transform 0.3s ease;
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
          color: var(--text-muted);
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
            font-size: clamp(3rem, 12vw, 4rem);
          }
          .guide-section {
            flex-direction: column;
            gap: 24px;
          }
          .guide-card {
            width: 100%;
            max-width: 360px;
            margin: 0 auto;
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

      <main>
        {/* 顶部标题 */}
        <section className="header" aria-label="品牌介绍">
          <h1 aria-label="ROROSPHERE">
            <span className="desktop-only">ROROSPHERE</span>
            <span className="mobile-only">
              <span>RORO</span>
              <span>SPHERE</span>
            </span>
          </h1>
          <p>
            激发青少年潜能，构筑归属感与文化共创的未来。
          </p>
          <Link href="/brand-history" className="btn-primary" aria-label="了解品牌历程">
            了解品牌历程
          </Link>
        </section>

        {/* 特色引导模块前的引导语 */}
        <p className="guide-intro" aria-hidden="true">
          选择你想参与的 ROROSPHERE 体验
        </p>

        {/* 核心引导区 - 只留合作与参与 */}
        <section className="guide-section" aria-label="用户可做什么">
          <Link href="/contact" className="guide-card" tabIndex={0} aria-label="合作与参与">
            <h3>合作与参与</h3>
            <p>携手打造未来，加入 ROROSPHERE 生态。</p>
          </Link>
        </section>

        {/* 品牌历程 */}
        <section className="milestones-section" aria-label="品牌历程">
          <h2>品牌历程</h2>
          <div className="timeline">
            {brandMilestones.map(({ id, date, title, desc }) => (
              <article className="timeline-item" key={id} tabIndex={-1}>
                <time dateTime={date}>{date}</time>
                <h3>{title}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* 创意项目 */}
        <section className="projects-section" aria-label="创意项目与合作">
          <h2>创意项目</h2>
          <p className="section-subtitle">
            发现我们如何激发灵感，融合文化与生活。
          </p>
          <div className="projects-grid">
            {projects.map(({ id, title, desc, liked }) => (
              <article
                className="project-card"
                key={id}
                tabIndex={0}
                aria-label={`${title}项目，${liked ? '已点赞' : '未点赞'}`}
              >
                <h3 className="project-title">{title}</h3>
                <p className="project-desc">{desc}</p>
                <button
                  className={`like-button ${liked ? 'liked' : ''}`}
                  aria-pressed={liked}
                  aria-label={liked ? `取消点赞${title}` : `点赞${title}`}
                  onClick={() => toggleLike(id)}
                >
                  {liked ? '已点赞' : '点赞'}
                </button>
              </article>
            ))}
          </div>
        </section>

        <footer>
          © 2025 ROROSPHERE. All Rights Reserved.
        </footer>
      </main>
    </>
  );
}











































