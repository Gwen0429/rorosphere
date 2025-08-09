'use client';

import Link from 'next/link';
import React from 'react';

const latestNews = [
  { id: 1, title: '最新艺术展：创意与灵感', desc: '汇聚当代艺术家的创意与灵感，探索无限可能。', link: '/news/exhibition' },
  { id: 2, title: 'RORO品牌与文化融合计划', desc: '探索RORO如何推动文化创新与年轻力量的融合。', link: '/news/culture' },
  { id: 3, title: '周边商品限时发售', desc: '精美的品牌周边，展现RORO精神与美学。', link: '/news/merchandise' },
];

export default function Home() {
  return (
    <main>
      {/* 大标题 */}
      <section className="header">
        <h1>ROROSPHERE</h1>
        <p className="subtitle">
          激发青少年潜能，构筑归属感与文化共创的未来。
        </p>
      </section>

      {/* 最新资讯模块 */}
      <section className="news-section">
        <h2>最新资讯</h2>
        <div className="news-cards">
          {latestNews.map((item) => (
            <div className="news-card" key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <Link href={item.link} className="read-more">查看更多</Link>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        :root {
          --champagne-gold: #D4AF7F;
          --bg-color: #ffffff;
          --text-color: #333;
          --subtitle-color: #A17494;
          --card-bg-color: #f5f5f5;
          --card-hover-bg: #fafafa;
          --card-border-color: #e1d6b7;
        }

        html, body {
          margin: 0;
          padding: 0;
          background: var(--bg-color);
          color: var(--text-color);
          font-family: 'Playfair Display', serif;
          line-height: 1.6;
        }

        main {
          padding: 100px 40px 140px;
          max-width: 1200px;
          margin: 0 auto;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          gap: 80px;
        }

        /* 大标题 */
        .header {
          text-align: center;
          position: relative;
        }
        .header h1 {
          font-size: 4rem;
          font-weight: 500;
          color: black;
          margin: 0 0 16px;
        }
        .header .subtitle {
          font-size: 1.25rem;
          color: var(--subtitle-color);
          max-width: 800px;
          margin: 0 auto;
        }

        /* 最新资讯模块 */
        .news-section {
          text-align: center;
        }
        .news-section h2 {
          font-size: 2.5rem;
          font-weight: 600;
          color: var(--champagne-gold);
          margin-bottom: 24px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
        }
        .news-cards {
          display: flex;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }
        .news-card {
          background: var(--card-bg-color);
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
          width: 30%;
          cursor: pointer;
          text-align: left;
        }
        .news-card:hover {
          background-color: var(--card-hover-bg);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        }
        .news-card h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-color);
          margin-bottom: 12px;
        }
        .news-card p {
          font-size: 1rem;
          color: #777;
          margin-bottom: 16px;
        }
        .read-more {
          font-size: 1rem;
          color: var(--champagne-gold);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .read-more:hover {
          color: var(--text-color);
        }

        /* 适配小屏 */
        @media (max-width: 768px) {
          .news-cards {
            flex-direction: column;
            align-items: center;
            gap: 24px;
          }
          .news-card {
            width: 80%;
            margin-bottom: 24px;
          }
        }

        /* 适配大屏 */
        @media (min-width: 768px) {
          .news-cards {
            flex-wrap: nowrap;
          }
          .news-card {
            width: 30%; /* 控制每个卡片的宽度，使它们横向排列 */
          }
        }
      `}</style>
    </main>
  );
}




































































