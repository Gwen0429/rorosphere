'use client';

import React from 'react';
import Link from 'next/link';

const latestBrandUpdates = [
  {
    id: 1,
    title: 'RORO亮相国际艺术展',
    summary: '在巴黎现代艺术馆举办的跨界艺术展上，RORO展现了品牌独特的文化张力。',
    date: '2025-07-28',
    link: '/brand-history/1',
  },
  {
    id: 2,
    title: '社区共创活动成功举办',
    summary: 'RORO邀请青少年和家庭共同参与创意工作坊，激发多元文化交流。',
    date: '2025-07-15',
    link: '/brand-history/2',
  },
];

const creativeShowcases = [
  {
    id: 1,
    title: '“光影交织”数字艺术展',
    summary: '结合光伏科技与艺术表现，展现未来生活美学。',
    link: '/creative-projects/1',
  },
  {
    id: 2,
    title: '“花蕊之韵”设计作品集',
    summary: '融合RORO花瓣交叉元素的时尚设计，突破传统边界。',
    link: '/creative-projects/2',
  },
];

const guideCardCSS = `
  .guide-card {
    flex: 1 1 240px;
    border-bottom: 4px solid var(--champagne-gold);
    padding: 24px 18px 18px 18px;
    cursor: pointer;
    border-radius: 12px;
    background: linear-gradient(
      145deg,
      #f9f6f2,
      #efe7db 40%,
      #d4af7f 60%,
      #e9ddc8
    );
    box-shadow:
      inset 0 2px 6px rgba(212, 175, 127, 0.3),
      0 0 8px rgba(212, 175, 127, 0.15);
    transition:
      box-shadow 0.4s ease,
      transform 0.3s ease,
      background-position 2.5s linear;
    background-size: 300% 300%;
    background-position: 0% 50%;
    user-select: none;
    color: #3e2f1c;
    font-weight: 500;
    text-decoration: none;
  }

  @keyframes shimmer {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }

  .guide-card:hover,
  .guide-card:focus-visible {
    animation: shimmer 3s linear infinite;
    transform: translateY(-6px);
    box-shadow:
      0 0 28px var(--champagne-gold-alpha),
      0 0 48px var(--champagne-gold-alpha-soft);
    border-color: #b68e37;
    outline: none;
  }

  .guide-card h3 {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--champagne-gold);
    margin-bottom: 14px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    user-select: none;
  }

  .guide-card p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    color: #6b6b6bdd;
    user-select: none;
    margin: 0;
  }

  .guide-card a {
    text-decoration: none;
    color: inherit;
  }
`;

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Great+Vibes&display=swap');

        :root {
          --champagne-gold: #D4AF7F;
          --champagne-gold-alpha: #D4AF7Faa;
          --champagne-gold-alpha-soft: #D4AF7F66;
          --bg-color: #fff;
          --text-color: #3e2f1c;
        }

        html, body {
          margin: 0;
          padding: 0;
          background: var(--bg-color);
          color: var(--text-color);
          font-family: 'Playfair Display', serif;
          overflow-x: hidden;
        }

        main {
          min-height: 100vh;
          padding: 80px 40px 140px;
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 100vw;
          position: relative;
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
          background: radial-gradient(circle at 40% 60%, var(--champagne-gold), transparent 70%);
          filter: drop-shadow(0 0 10px var(--champagne-gold-alpha-soft));
          border-radius: 50% / 40%;
          animation: gentle-sway 10s ease-in-out infinite alternate;
          z-index: 1;
        }

        @keyframes gentle-sway {
          0% { transform: translateX(-50%) translateY(0) rotate(0deg);}
          100% { transform: translateX(-50%) translateY(10px) rotate(3deg);}
        }

        h1 {
          font-size: 5rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--champagne-gold);
          font-style: italic;
          text-shadow:
            0 0 8px var(--champagne-gold-alpha),
            0 0 22px var(--champagne-gold-alpha-soft);
          margin: 0 0 48px;
          user-select: none;
          text-align: center;
          max-width: 100%;
          padding: 0 10px;
        }

        .subtitle {
          max-width: 720px;
          font-weight: 600;
          font-size: 1.6rem;
          letter-spacing: 0.1em;
          line-height: 1.6;
          margin: 20px 0 80px;
          text-align: center;
          color: var(--text-color);
          user-select: none;
          font-family: 'Playfair Display', serif;
        }

        .guide-section {
          display: flex;
          gap: 40px;
          max-width: 960px;
          width: 100%;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 80px;
          z-index: 2;
        }

        ${guideCardCSS}

        /* 品牌动态和创意展览也用同样样式 */
        .updates-showcases {
          display: flex;
          gap: 40px;
          max-width: 960px;
          width: 100%;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 80px;
        }

        .updates, .showcases {
          flex: 1 1 440px;
          background: linear-gradient(
            145deg,
            #f9f6f2,
            #efe7db 40%,
            #d4af7f 60%,
            #e9ddc8
          );
          border-radius: 12px;
          border-bottom: 4px solid var(--champagne-gold);
          box-shadow:
            inset 0 2px 6px rgba(212, 175, 127, 0.3),
            0 0 8px rgba(212, 175, 127, 0.15);
          padding: 24px 18px 18px 18px;
          user-select: none;
          cursor: pointer;
          color: #3e2f1c;
          font-weight: 500;
          transition:
            box-shadow 0.4s ease,
            transform 0.3s ease,
            background-position 2.5s linear;
          background-size: 300% 300%;
          background-position: 0% 50%;
        }

        .updates:hover,
        .updates:focus-visible,
        .showcases:hover,
        .showcases:focus-visible {
          animation: shimmer 3s linear infinite;
          transform: translateY(-6px);
          box-shadow:
            0 0 28px var(--champagne-gold-alpha),
            0 0 48px var(--champagne-gold-alpha-soft);
          border-color: #b68e37;
          outline: none;
          background-position: 100% 50%;
        }

        .updates h2,
        .showcases h2 {
          font-weight: 700;
          font-size: 2.2rem;
          color: var(--champagne-gold);
          margin-bottom: 24px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          user-select: none;
          border-bottom: 2px solid var(--champagne-gold-alpha-soft);
          padding-bottom: 10px;
        }

        ul.update-list,
        ul.showcase-list {
          list-style: none;
          padding: 0;
          margin: 0;
          overflow-y: auto;
          max-height: 400px;
        }

        ul.update-list li,
        ul.showcase-list li {
          margin-bottom: 18px;
          border-bottom: 1px solid #eee;
          padding-bottom: 10px;
          cursor: pointer;
          user-select: text;
          transition: color 0.3s ease;
          outline-offset: 3px;
        }

        ul.update-list li:hover,
        ul.showcase-list li:hover,
        ul.update-list li:focus-visible,
        ul.showcase-list li:focus-visible {
          color: var(--champagne-gold);
          outline: none;
        }

        ul.update-list li a,
        ul.showcase-list li a {
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          color: inherit;
          user-select: text;
        }

        ul.update-list li a:hover,
        ul.showcase-list li a:hover {
          text-decoration: underline;
        }

        ul.update-list li p,
        ul.showcase-list li p {
          margin: 4px 0 0;
          font-weight: 400;
          font-size: 0.9rem;
          color: #6b6b6bdd;
          user-select: text;
        }

        @media (max-width: 768px) {
          main {
            padding: 40px 16px 80px !important;
          }

          h1 {
            font-size: 3.6rem !important;
            margin-bottom: 36px !important;
            letter-spacing: 0.12em !important;
          }

          .subtitle {
            font-size: 1.25rem !important;
            margin: 16px 0 40px !important;
          }

          .guide-section {
            flex-direction: column !important;
            gap: 30px !important;
          }

          .updates-showcases {
            flex-direction: column !important;
            gap: 40px !important;
          }

          .updates, .showcases {
            flex: 1 1 100% !important;
          }

          ul.update-list li,
          ul.showcase-list li {
            margin-bottom: 14px !important;
            padding-bottom: 8px !important;
          }

          ul.update-list li a,
          ul.showcase-list li a {
            font-size: 1rem !important;
          }
        }
      `}</style>

      <main>
        <div className="flower-cluster" aria-hidden="true"></div>

        <h1>ROROSPHERE</h1>

        <p className="subtitle">
          在这里，年轻的创意被点燃，文化与表达交织成独特归属感。<br />
          与家庭共创，携手成长，展现真实自我。
        </p>

        <section className="guide-section" aria-label="特色引导">
          <div
            className="guide-card"
            tabIndex={0}
            role="button"
            aria-label="激发潜能"
            onClick={() => window.location.href = '/brand-history'}
          >
            <h3>激发潜能</h3>
            <p>通过文化与表达，培养年轻人的创造力与自信。</p>
          </div>
          <div
            className="guide-card"
            tabIndex={0}
            role="button"
            aria-label="加入共创"
            onClick={() => window.location.href = '/creative-projects'}
          >
            <h3>加入共创</h3>
            <p>一个家庭与青少年展示独特才华与故事的平台。</p>
          </div>
          <div
            className="guide-card"
            tabIndex={0}
            role="button"
            aria-label="活出RORO"
            onClick={() => window.location.href = '/contact'}
          >
            <h3>活出RORO</h3>
            <p>超越创作，品味成长与自我认同的生活方式。</p>
          </div>
        </section>

        <section className="updates-showcases" aria-label="品牌动态与创意展览">
          <article
            className="updates"
            tabIndex={0}
            role="region"
            aria-label="最新品牌动态"
          >
            <h2>最新品牌动态</h2>
            <ul className="update-list">
              {latestBrandUpdates.map(({ id, title, summary, date, link }) => (
                <li
                  key={id}
                  tabIndex={0}
                  role="link"
                  onClick={() => window.location.href = link}
                  aria-label={`查看品牌动态：${title}`}
                >
                  <a href={link}>{title}</a>
                  <p>{summary}</p>
                  <time>{date}</time>
                </li>
              ))}
            </ul>
          </article>

          <article
            className="showcases"
            tabIndex={0}
            role="region"
            aria-label="精彩创意展览"
          >
            <h2>精彩创意展览</h2>
            <ul className="showcase-list">
              {creativeShowcases.map(({ id, title, summary, link }) => (
                <li
                  key={id}
                  tabIndex={0}
                  role="link"
                  onClick={() => window.location.href = link}
                  aria-label={`查看创意展览：${title}`}
                >
                  <a href={link}>{title}</a>
                  <p>{summary}</p>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <footer>&copy; 2025 ROROSPHERE. All rights reserved.</footer>
      </main>
    </>
  );
}














































