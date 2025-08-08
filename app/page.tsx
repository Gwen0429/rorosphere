'use client';

import React, { useState, useEffect } from 'react';
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

// 小logo的SVG动画组件（简洁版）
function SmallLogo() {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 280 280"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="ROROSPHERE logo"
      role="img"
    >
      <defs>
        <path id="softPetal" d="M0,-70 C28,-65 30,-25 12,-5 C25,10 15,40 0,60 C-15,40 -25,10 -12,-5 C-30,-25 -28,-65 0,-70 Z" />
        <radialGradient id="marbleStone" cx="50%" cy="50%" r="80%">
          <stop offset="0%" stopColor="#f2f2f2" />
          <stop offset="60%" stopColor="#ccc" />
          <stop offset="100%" stopColor="#888" />
        </radialGradient>
        <filter id="reliefShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feOffset dx="1.5" dy="1.5" result="shadow" />
          <feGaussianBlur in="shadow" stdDeviation="1.2" />
          <feBlend in="SourceGraphic" in2="shadow" mode="multiply" />
        </filter>
      </defs>

      <rect width="280" height="280" fill="url(#marbleStone)" />

      <g
        transform="translate(140,140)"
        fill="none"
        stroke="#333"
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
        filter="url(#reliefShadow)"
        style={{ animation: 'rotatePetal 3s ease-in-out infinite' }}
      >
        <use href="#softPetal" transform="rotate(0)" />
        <use href="#softPetal" transform="rotate(60)" />
        <use href="#softPetal" transform="rotate(120)" />
        <use href="#softPetal" transform="rotate(180)" />
        <use href="#softPetal" transform="rotate(240)" />
        <use href="#softPetal" transform="rotate(300)" />
      </g>

      <circle
        cx="140"
        cy="140"
        r="14"
        fill="none"
        stroke="#222"
        strokeWidth="2.4"
        filter="url(#reliefShadow)"
      />

      <text
        x="140"
        y="270"
        textAnchor="middle"
        fontFamily="'Playfair Display', serif"
        fontSize="24"
        fill="#111"
        letterSpacing="4"
        fontWeight="700"
        filter="url(#reliefShadow)"
      >
        ROROSPHERE
      </text>

      <style>{`
        @keyframes rotatePetal {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(10deg); }
        }
      `}</style>
    </svg>
  );
}

export default function Home() {
  const [projects, setProjects] = useState(creativeProjects);
  const [isMobile, setIsMobile] = useState(false);

  // 判断移动端，用于切换内容和布局
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
          --nude-base: #5b5b5bdd;
          --bg-color: #fff;
          --text-color: #333;
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
          max-width: 1200px;
          margin: 0 auto;
          min-height: 100vh;
          padding: 80px 40px 140px;
          display: flex;
          flex-direction: column;
          gap: 64px;
          user-select: none;
        }

        /* 头部区域 */
        .header {
          text-align: center;
          position: relative;
          z-index: 2;
          max-width: 90vw;
          margin: 0 auto 48px;
        }

        /* 电脑版大标题 */
        .header h1 {
          font-size: 4rem;
          font-weight: 700;
          color: var(--champagne-gold-start);
          background: linear-gradient(90deg, var(--champagne-gold-start), var(--champagne-gold-end));
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          text-shadow:
            0 0 6px #D4AF7FAA,
            0 0 12px #D4AF7F66;
          letter-spacing: 0.25em;
          line-height: 1.1;
          white-space: nowrap;
          margin-bottom: 12px;
        }

        /* 移动端替代标题 */
        .mobile-slogan {
          font-weight: 600;
          font-size: 1.25rem;
          color: var(--nude-base);
          margin-bottom: 32px;
          line-height: 1.4;
          user-select: text;
          max-width: 300px;
          margin-left: auto;
          margin-right: auto;
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
          box-shadow: 0 0 18px #D4AF7FAA;
          transition: box-shadow 0.3s ease;
          text-decoration: none;
          display: inline-block;
          user-select: none;
        }
        .btn-primary:hover,
        .btn-primary:focus-visible {
          box-shadow: 0 0 28px var(--champagne-gold-start);
          outline: none;
        }

        /* 品牌历程 + 创意项目样式同之前（省略） */
        /* 你可以根据之前给你的样式补充 */

        @media (max-width: 768px) {
          main {
            padding: 40px 20px 80px;
            gap: 50px;
          }
          /* 隐藏电脑版大标题 */
          .header h1 {
            display: none;
          }
          /* 显示移动端简洁slogan */
          .mobile-slogan {
            display: block;
          }
        }
        @media (min-width: 769px) {
          /* 移动端slogan隐藏 */
          .mobile-slogan {
            display: none;
          }
        }
      `}</style>

      <main>
        <header className="header" aria-label="品牌介绍">
          {!isMobile && <h1>ROROSPHERE</h1>}

          {isMobile && (
            <>
              <SmallLogo />
              <p className="mobile-slogan">
                激发青少年潜能，构筑归属感与文化共创的未来。
              </p>
            </>
          )}

          <Link href="/brand-history" className="btn-primary" aria-label="了解品牌历程">
            了解品牌历程
          </Link>
        </header>

        {/* 电脑版首页继续展示品牌历程、创意项目等 */}
        {!isMobile && (
          <>
            <section aria-label="品牌历程" className="milestones-section">
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

            <section aria-label="创意项目" className="projects-section">
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
          </>
        )}

        <footer aria-label="网站版权信息">
          © 2025 ROROSPHERE 保留所有权利
        </footer>
      </main>
    </>
  );
}












































