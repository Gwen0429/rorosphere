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
          --champagne-gold: #D4AF7F;
          --champagne-gold-alpha: #D4AF7Faa;
          --champagne-gold-alpha-soft: #D4AF7F66;
          --bg-color: #fff;
          --text-color: #333;
          --shadow-color: rgba(212, 175, 127, 0.3);
          --border-color: #B68E37;
          --font-primary: 'Playfair Display', serif;
        }

        * {
          box-sizing: border-box;
        }

        html, body {
          margin: 0; padding: 0;
          background: var(--bg-color);
          color: var(--text-color);
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
          gap: 80px;
          user-select: none;
        }

        /* 顶部标题区 */
        .header {
          text-align: center;
          position: relative;
          z-index: 2;
        }
        .header h1 {
          font-size: 5rem;
          font-weight: 700;
          color: var(--champagne-gold);
          letter-spacing: 0.2em;
          font-style: italic;
          text-shadow: 0 0 8px var(--champagne-gold-alpha), 0 0 22px var(--champagne-gold-alpha-soft);
          margin: 0 0 20px 0;
        }
        .header p {
          font-weight: 400;
          font-size: 1.3rem;
          color: #7a6a4fdd;
          margin: 0 0 30px;
          max-width: 720px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
          user-select: text;
        }
        .btn-primary {
          background: linear-gradient(45deg, #D4AF7F, #B68E37);
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
          box-shadow: 0 0 28px var(--champagne-gold);
          outline: none;
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
          border-bottom: 4px solid var(--champagne-gold);
          padding: 24px 18px 18px 18px;
          cursor: pointer;
          transition:
            box-shadow 0.3s ease,
            transform 0.3s ease,
            border-color 0.3s ease;
          border-radius: 8px;
          background: #fff;
          user-select: none;
          box-shadow: 0 0 10px transparent;
        }
        .guide-card:hover,
        .guide-card:focus-visible {
          transform: translateY(-6px);
          box-shadow:
            0 0 24px var(--champagne-gold-alpha),
            0 0 40px var(--champagne-gold-alpha-soft);
          border-color: var(--border-color);
          outline: none;
        }
        .guide-card h3 {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--border-color);
          margin-bottom: 14px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .guide-card p {
          font-weight: 400;
          font-size: 1rem;
          line-height: 1.5;
          color: #6b6b6bdd;
        }
        .guide-card a {
          text-decoration: none;
          color: inherit;
        }

        /* 品牌历程+资讯模块 */
        .milestones-section {
          max-width: 900px;
          margin: 0 auto;
        }
        .milestones-section h2 {
          font-size: 2.6rem;
          font-weight: 700;
          color: var(--champagne-gold);
          margin-bottom: 24px;
          user-select: none;
          text-align: center;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .timeline {
          border-left: 3px solid var(--champagne-gold);
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
          background: var(--champagne-gold);
          border-radius: 50%;
          box-shadow: 0 0 8px var(--champagne-gold-alpha);
        }
        .timeline-item time {
          display: block;
          font-size: 0.9rem;
          font-weight: 600;
          color: #a38f56cc;
          margin-bottom: 6px;
        }
        .timeline-item h3 {
          margin: 0 0 6px 0;
          font-weight: 700;
          color: #B68E37;
        }
        .timeline-item p {
          margin: 0;
          font-weight: 400;
          color: #5b5b5bdd;
          line-height: 1.4;
          user-select: text;
        }

        /* 创意项目模块 */
        .projects-section {
          max-width: 900px;
          margin: 0 auto;
        }
        .projects-section h2 {
          font-size: 2.6rem;
          font-weight: 700;
          color: var(--champagne-gold);
          margin-bottom: 24px;
          user-select: none;
          text-align: center;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 32px;
        }
        .project-card {
          border: 2px solid var(--champagne-gold);
          border-radius: 14px;
          padding: 20px;
          box-shadow: 0 0 12px transparent;
          background: #fff;
          transition: box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s ease;
          user-select: none;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .project-card:hover,
        .project-card:focus-within {
          box-shadow:
            0 0 22px var(--champagne-gold-alpha),
            0 0 38px var(--champagne-gold-alpha-soft);
          border-color: var(--border-color);
          transform: translateY(-6px);
          outline: none;
        }
        .project-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #B68E37;
          margin-bottom: 12px;
          letter-spacing: 0.06em;
          user-select: text;
        }
        .project-desc {
          flex-grow: 1;
          font-weight: 400;
          font-size: 1rem;
          color: #5b5b5bdd;
          margin-bottom: 20px;
          user-select: text;
        }
        .like-button {
          background: none;
          border: 2px solid var(--champagne-gold);
          border-radius: 24px;
          padding: 6px 20px;
          font-size: 1rem;
          font-weight: 600;
          color: var(--champagne-gold);
          cursor: pointer;
          user-select: none;
          align-self: flex-start;
          transition:
            background-color 0.3s ease,
            color 0.3s ease,
            border-color 0.3s ease;
        }
        .like-button.liked {
          background-color: var(--champagne-gold);
          color: #fff;
          border-color: var(--border-color);
        }
        .like-button:hover,
        .like-button:focus-visible {
          outline: none;
          background-color: var(--border-color);
          color: #fff;
          border-color: var(--border-color);
        }

        /* 页脚 */
        footer {
          text-align: center;
          font-size: 0.8rem;
          color: #999999cc;
          letter-spacing: 0.12em;
          user-select: none;
        }

        /* 响应式 */
        @media (max-width: 768px) {
          main {
            padding: 40px 20px 80px;
            gap: 50px;
          }
          .header h1 {
            font-size: 3.6rem;
            letter-spacing: 0.12em;
          }
          .header p {
            font-size: 1.1rem;
            margin-bottom: 24px;
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
            padding: 0 10px;
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
          <h1>ROROSPHERE</h1>
          <p>
            激发青少年潜能，构筑归属感与文化共创的未来。
          </p>
          <Link href="/brand-history" className="btn-primary" aria-label="了解品牌历程">
            了解品牌历程
          </Link>
        </section>

        {/* 核心引导区 */}
        <section className="guide-section" aria-label="用户可做什么">
          <Link href="/creative-projects" className="guide-card" tabIndex={0} aria-label="赋能潜能 - 了解青少年艺术成长计划">
            <h3>赋能潜能</h3>
            <p>助力青少年艺术与文化成长。</p>
          </Link>
          <Link href="/creative-projects" className="guide-card" tabIndex={0} aria-label="加入共创 - 参与家庭和青少年故事分享">
            <h3>加入共创</h3>
            <p>与家庭共同创造独特故事。</p>
          </Link>
          <Link href="/brand-history" className="guide-card" tabIndex={0} aria-label="探索生活方式 - 体验 RORO 生活美学">
            <h3>探索生活方式</h3>
            <p>体验 RORO 生活美学。</p>
          </Link>
          <Link href="/contact" className="guide-card" tabIndex={0} aria-label="联系我们 - 合作与参与">
            <h3>联系我们</h3>
            <p>想参与或合作？联系我们。</p>
          </Link>
        </section>

        {/* 品牌历程 + 资讯 */}
        <section className="milestones-section" aria-label="最新品牌动态">
          <h2>最新品牌动态</h2>
          <div className="timeline">
            {brandMilestones.map(({ id, date, title, desc }) => (
              <div key={id} className="timeline-item" tabIndex={0} aria-label={`${title}, 时间：${date}`}>
                <time dateTime={date}>{date}</time>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 精选创意项目 */}
        <section className="projects-section" aria-label="精彩创意展览">
          <h2>精彩创意展览</h2>
          <div className="projects-grid">
            {projects.map(({ id, title, desc, liked }) => (
              <article
                key={id}
                className="project-card"
                tabIndex={0}
                aria-label={`${title}，简介：${desc}，${liked ? '已点赞' : '未点赞'}`}
              >
                <h3 className="project-title">{title}</h3>
                <p className="project-desc">{desc}</p>
                <button
                  className={`like-button ${liked ? 'liked' : ''}`}
                  onClick={() => toggleLike(id)}
                  aria-pressed={liked}
                  aria-label={liked ? `取消点赞 ${title}` : `点赞 ${title}`}
                >
                  {liked ? '已点赞 ♥' : '点赞 ♡'}
                </button>
              </article>
            ))}
          </div>
        </section>

        <footer>
          &copy; 2025 ROROSPHERE. 版权所有。
        </footer>
      </main>
    </>
  );
}













































