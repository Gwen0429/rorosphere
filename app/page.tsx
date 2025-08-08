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
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900&display=swap');

        :root {
          --black-bg: #000000;
          --pure-white: #ffffff;
          --deep-gray-bg: rgba(0, 0, 0, 0.6);
          --gold-start: #D4AF7F;
          --gold-end: #B68E37;
          --gold-alpha: #D4AF7Faa;
          --gold-alpha-soft: #D4AF7F66;
          --gold-text-light: #F7E6B5;
          --font-primary: 'Playfair Display', serif;
        }

        * {
          box-sizing: border-box;
        }

        html, body {
          margin: 0; padding: 0;
          background: var(--black-bg);
          color: var(--gold-text-light);
          font-family: var(--font-primary);
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        main {
          max-width: 1200px;
          margin: 0 auto;
          padding: 150px 40px 120px;
          display: flex;
          flex-direction: column;
          gap: 80px;
          user-select: none;
        }

        /* Hero Section */
        .hero-container {
          text-align: center;
          user-select: text;
          padding: 0 20px;
        }
        .hero-title {
          font-weight: 900;
          font-size: 5rem;
          line-height: 1.1;
          letter-spacing: 0.3em;
          background: linear-gradient(90deg, var(--gold-start), var(--gold-end));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin: 0;
          white-space: nowrap;
          user-select: text;
        }
        /* 移动端被迫换行 */
        @media (max-width: 480px) {
          .hero-title {
            white-space: normal;
            font-size: 3.6rem;
            letter-spacing: 0.25em;
            line-height: 1.2;
          }
          .hero-title br {
            display: block;
            content: '';
            margin-bottom: 0.25em;
          }
        }
        .hero-subtitle {
          font-weight: 400;
          font-size: 1.5rem;
          line-height: 1.8;
          letter-spacing: 0.06em;
          color: var(--gold-text-light);
          max-width: 480px;
          margin: 48px auto 56px;
          user-select: text;
          text-shadow: 0 0 8px rgba(212, 175, 127, 0.5);
        }
        .btn-primary {
          background: linear-gradient(45deg, var(--gold-start), var(--gold-end));
          border: none;
          padding: 16px 48px;
          font-size: 1.1rem;
          font-weight: 700;
          color: #000;
          border-radius: 36px;
          cursor: pointer;
          box-shadow: 0 0 18px var(--gold-alpha);
          transition: background 0.3s ease, box-shadow 0.3s ease;
          user-select: none;
          text-decoration: none;
          display: inline-block;
        }
        .btn-primary:hover,
        .btn-primary:focus-visible {
          background: linear-gradient(45deg, var(--gold-end), #8A6A22);
          box-shadow: 0 0 28px var(--gold-alpha-soft);
          outline: none;
        }

        /* Guide Section */
        .guide-section {
          display: flex;
          gap: 40px;
          justify-content: center;
          flex-wrap: wrap;
          background: var(--deep-gray-bg);
          padding: 40px 20px;
          border-radius: 18px;
          box-shadow:
            0 0 18px rgba(212, 175, 127, 0.25),
            inset 0 0 16px rgba(255, 255, 255, 0.05);
          user-select: none;
        }
        .guide-card {
          background: transparent;
          padding: 28px 18px;
          cursor: pointer;
          border-radius: 12px;
          color: var(--gold-text-light);
          text-decoration: none;
          font-weight: 500;
          flex: 1 1 240px;
          text-align: center;
          user-select: none;
          transition: background-color 0.3s ease, color 0.3s ease;
          box-shadow: none;
          user-select: text;
        }
        .guide-card:hover,
        .guide-card:focus-visible {
          background: rgba(212, 175, 127, 0.15);
          color: var(--gold-start);
          outline: none;
          box-shadow:
            0 0 18px var(--gold-alpha),
            0 0 28px var(--gold-alpha-soft);
        }
        .guide-card h3 {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 14px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .guide-card p {
          font-weight: 400;
          font-size: 1rem;
          line-height: 1.5;
          color: var(--gold-text-light);
          margin: 0;
        }

        /* Milestones Section */
        .milestones-section {
          background: var(--deep-gray-bg);
          padding: 48px 32px 36px;
          border-radius: 18px;
          box-shadow:
            0 0 22px rgba(212, 175, 127, 0.3),
            inset 0 0 16px rgba(255, 255, 255, 0.07);
          user-select: none;
        }
        .milestones-section h2 {
          font-size: 2.8rem;
          font-weight: 700;
          color: var(--gold-start);
          margin-bottom: 36px;
          text-align: center;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          user-select: none;
          position: relative;
        }
        .milestones-section h2::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: -14px;
          transform: translateX(-50%);
          width: max(40px, 10vw);
          height: 2px;
          background: linear-gradient(90deg, var(--gold-alpha), var(--gold-end));
          border-radius: 1px;
        }
        .timeline {
          border-left: 3px solid var(--gold-end);
          margin-left: 24px;
          padding-left: 32px;
        }
        .timeline-item {
          position: relative;
          margin-bottom: 40px;
          padding-left: 20px;
        }
        .timeline-item::before {
          content: '';
          position: absolute;
          left: -36px;
          top: 10px;
          width: 18px;
          height: 18px;
          background: var(--gold-start);
          border-radius: 50%;
          box-shadow: 0 0 12px var(--gold-alpha);
        }
        .timeline-item time {
          display: block;
          font-size: 1rem;
          font-weight: 600;
          color: #c9b87ccc;
          margin-bottom: 8px;
          user-select: text;
        }
        .timeline-item h3 {
          margin: 0 0 8px;
          font-weight: 700;
          color: var(--gold-end);
          user-select: text;
        }
        .timeline-item p {
          margin: 0;
          font-weight: 400;
          color: #bdb68a99;
          line-height: 1.5;
          user-select: text;
        }

        /* Projects Section */
        .projects-section {
          background: var(--deep-gray-bg);
          padding: 48px 32px 36px;
          border-radius: 18px;
          box-shadow:
            0 0 22px rgba(212, 175, 127, 0.25),
            inset 0 0 18px rgba(255, 255, 255, 0.06);
          user-select: none;
        }
        .projects-section h2 {
          font-size: 2.8rem;
          font-weight: 700;
          color: var(--gold-start);
          margin-bottom: 12px;
          text-align: center;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          user-select: none;
          position: relative;
        }
        .projects-section h2::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: -14px;
          transform: translateX(-50%);
          width: max(40px, 10vw);
          height: 2px;
          background: linear-gradient(90deg, var(--gold-alpha), var(--gold-end));
          border-radius: 1px;
        }
        .projects-section p.section-subtitle {
          font-size: 1.2rem;
          font-weight: 400;
          color: var(--gold-text-light);
          margin-bottom: 36px;
          user-select: text;
          text-align: center;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.5;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 36px;
        }
        .project-card {
          background: transparent;
          padding: 28px 24px;
          border-radius: 14px;
          box-shadow: 0 0 0 transparent;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
          color: var(--gold-text-light);
          user-select: none;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 220px;
        }
        .project-card:hover,
        .project-card:focus-within {
          box-shadow:
            0 0 28px var(--gold-alpha),
            0 0 48px var(--gold-alpha-soft);
          transform: translateY(-6px);
          outline: none;
          cursor: pointer;
        }
        .project-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 20px;
          letter-spacing: 0.06em;
          user-select: text;
          color: var(--gold-end);
        }
        .project-desc {
          font-weight: 400;
          font-size: 1rem;
          color: #bdb68aaa;
          margin-bottom: 32px;
          line-height: 1.5;
          user-select: text;
          flex-grow: 1;
        }
        .like-button {
          background: none;
          border: 2px solid var(--gold-start);
          border-radius: 28px;
          padding: 10px 28px;
          font-size: 1rem;
          font-weight: 600;
          color: var(--gold-start);
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
          background-color: var(--gold-start);
          color: #000;
          border-color: var(--gold-end);
          box-shadow: 0 0 14px var(--gold-alpha);
        }
        .like-button:hover,
        .like-button:focus-visible {
          outline: none;
          background-color: var(--gold-end);
          color: #000;
          border-color: var(--gold-end);
          box-shadow: 0 0 18px var(--gold-alpha);
        }

        /* Footer */
        footer {
          text-align: center;
          font-size: 0.9rem;
          color: #7a6b52cc;
          letter-spacing: 0.12em;
          user-select: none;
          margin-top: 64px;
          padding-bottom: 36px;
        }

        /* Responsive */
        @media (max-width: 768px) {
          main {
            padding: 100px 20px 80px;
            gap: 64px;
          }
          .hero-title {
            font-size: 3.8rem;
            letter-spacing: 0.22em;
          }
          .hero-subtitle {
            font-size: 1.2rem;
            max-width: 90vw;
            margin: 40px auto 40px;
          }
          .btn-primary {
            padding: 14px 36px;
            font-size: 1rem;
            border-radius: 30px;
          }
          .guide-section {
            padding: 32px 16px;
            gap: 24px;
            flex-direction: column;
          }
          .projects-grid {
            grid-template-columns: 1fr;
          }
          .project-card {
            min-height: auto;
            padding: 24px 18px;
          }
        }
        @media (max-width: 480px) {
          main {
            padding: 80px 16px 64px;
            gap: 48px;
          }
          .hero-title {
            font-size: 3.2rem;
            letter-spacing: 0.18em;
          }
          .hero-subtitle {
            font-size: 1rem;
            max-width: 90vw;
            margin: 32px auto 36px;
          }
          .btn-primary {
            padding: 12px 28px;
            font-size: 0.95rem;
            border-radius: 28px;
          }
          .guide-section {
            padding: 24px 12px;
          }
        }
      `}</style>

      <main>
        {/* Hero Section */}
        <section className="hero-container" aria-label="品牌介绍">
          <h1 className="hero-title" aria-label="品牌名称">
            RORO<br />SPHERE
          </h1>
          <p className="hero-subtitle">
            激发青少年潜能，<br />
            构筑归属感与文化共创的未来。
          </p>
          <Link href="/brand-history" className="btn-primary" aria-label="了解品牌历程">
            了解品牌历程
          </Link>
        </section>

        {/* Guide Section */}
        <section className="guide-section" aria-label="用户可做什么">
          <Link
            href="/contact"
            className="guide-card"
            tabIndex={0}
            aria-label="合作与参与"
          >
            <h3>合作与参与</h3>
            <p>携手打造未来，加入 ROROSPHERE 生态。</p>
          </Link>
        </section>

        {/* Brand Milestones */}
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

        {/* Creative Projects */}
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
                  className={`like-button${liked ? ' liked' : ''}`}
                  onClick={() => toggleLike(id)}
                  aria-pressed={liked}
                  aria-label={liked ? '取消点赞' : '点赞'}
                  type="button"
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










































