'use client';

import React from 'react';

const brandIntro = `
ROROSPHERE 致力于激发青少年的潜能，融合文化共创与艺术探索，打造属于年轻一代的归属感和未来愿景。
从最初的发起，到持续的创新，我们一步步推动青少年赋能计划与多元文化项目落地。
`;

const founderQuote = `
“ROROSPHERE不仅是一个品牌，更是一场文化与创造力的革命。我们相信，每个年轻人都有无限可能，期待与大家共同书写未来的篇章。” — 创始人 Gwen
`;

const milestones = [
  { id: 1, date: '2025-07-01', title: 'ROROSPHERE 成立', desc: '开启青少年赋能与文化共创之旅' },
  { id: 2, date: '2025-07-15', title: '首个线下创意展览', desc: '汇聚年轻创意，激发无限可能' },
  { id: 3, date: '2025-07-30', title: '发布品牌首款周边', desc: '精致设计，传递品牌精神' },
];

export default function BrandHistory() {
  return (
    <>
      <style>{`
        :root {
          --champagne-gold: #D4AF7F;
          --champagne-gold-alpha: #D4AF7Faa;
          --bg-color: #fff;
          --text-color: #333;
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
          max-width: 900px;
          margin: 0 auto;
          padding: 60px 24px 120px;
          display: flex;
          flex-direction: column;
          gap: 48px;
          user-select: none;
        }
        h1 {
          font-size: clamp(3rem, 7vw, 4.5rem);
          font-weight: 700;
          color: var(--champagne-gold);
          text-align: center;
          margin-bottom: 16px;
          letter-spacing: 0.16em;
          user-select: text;
        }
        section {
          background: #fefcf7;
          border-radius: 14px;
          padding: 24px 32px;
          box-shadow:
            inset 0 0 16px #fff7d8,
            0 0 20px var(--champagne-gold-alpha);
        }
        .intro-text, .founder-quote {
          font-size: 1.2rem;
          line-height: 1.6;
          color: #5a4d2b;
          user-select: text;
        }
        .founder-quote {
          font-style: italic;
          border-left: 6px solid var(--champagne-gold);
          padding-left: 20px;
          margin-top: 12px;
          color: #8b753d;
        }
        .milestones-title {
          font-size: 2.4rem;
          font-weight: 700;
          color: var(--champagne-gold);
          margin-bottom: 24px;
          text-align: center;
          letter-spacing: 0.12em;
          user-select: none;
          text-transform: uppercase;
        }
        .timeline {
          border-left: 3px solid var(--champagne-gold);
          margin-left: 16px;
          padding-left: 28px;
        }
        .timeline-item {
          position: relative;
          margin-bottom: 32px;
          padding-left: 20px;
        }
        .timeline-item::before {
          content: '';
          position: absolute;
          left: -28px;
          top: 8px;
          width: 18px;
          height: 18px;
          background: var(--champagne-gold);
          border-radius: 50%;
          box-shadow: 0 0 12px var(--champagne-gold-alpha);
        }
        time {
          display: block;
          font-size: 1rem;
          font-weight: 600;
          color: #a38f56cc;
          margin-bottom: 6px;
          user-select: text;
        }
        h3 {
          margin: 0 0 6px 0;
          font-weight: 700;
          color: #B68E37;
          user-select: text;
        }
        p {
          margin: 0;
          font-weight: 400;
          color: #5b5b5bdd;
          line-height: 1.5;
          user-select: text;
        }

        /* 响应式 */
        @media (max-width: 768px) {
          main {
            padding: 40px 16px 80px;
            gap: 36px;
          }
          h1 {
            font-size: clamp(2.4rem, 9vw, 3.8rem);
          }
          section {
            padding: 20px 18px;
          }
          .timeline {
            margin-left: 10px;
            padding-left: 24px;
          }
          .timeline-item::before {
            left: -24px;
            width: 14px;
            height: 14px;
            top: 7px;
          }
        }
      `}</style>

      <main>
        <h1>品牌历程</h1>

        <section aria-label="品牌理念介绍">
          <div className="intro-text">{brandIntro}</div>
        </section>

        <section aria-label="创始人说">
          <div className="founder-quote">{founderQuote}</div>
        </section>

        <section aria-label="品牌里程碑时间轴">
          <h2 className="milestones-title">品牌里程碑</h2>
          <div className="timeline" role="list">
            {milestones.map(({ id, date, title, desc }) => (
              <article
                key={id}
                className="timeline-item"
                role="listitem"
                tabIndex={0}
                aria-label={`${title}, 时间：${date}`}
              >
                <time dateTime={date}>{date}</time>
                <h3>{title}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}


