'use client';

import React, { useState } from 'react';
import Logo from '../../components/Logo';
import Link from 'next/link';

const newsItems = [
  {
    id: 1,
    date: '2025-06-10',
    title: 'Roro中文名征集投票开启',
    summary: '参与Roro中文名创意投票，助力品牌本土化。',
    link: '/news/vote',
    image: '', // 暂无图，显示logo占位
  },
  {
    id: 2,
    date: '2025-05-01',
    title: '电子邀请函样式公布',
    summary: '全新设计的电子邀请函现已上线，支持下载和分享。',
    link: '/news/invitation',
    image: '/assets/news-invitation.jpg',
  },
  {
    id: 3,
    date: '2025-04-20',
    title: '夏季活动回顾',
    summary: '精彩纷呈的夏季艺术活动全纪录，精彩不容错过。',
    link: '/news/summer-event',
    image: '/assets/news-summer-event.jpg',
  },
];

const merchItems = [
  {
    id: 1,
    name: 'Roro风车模型',
    image: '', // 暂无图片，显示Logo占位
    description: '精致风车，象征创意旋转不息。',
  },
  {
    id: 2,
    name: '品牌环保帆布袋',
    image: '/assets/merch-canvas-bag.jpg',
    description: '实用环保，随身携带Roro精神。',
  },
  {
    id: 3,
    name: '定制笔记本',
    image: '/assets/merch-notebook.jpg',
    description: '书写灵感，记录创意火花。',
  },
];

export default function NewsMaterials() {
  const [activeTab, setActiveTab] = useState<'news' | 'merch'>('news');

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Montserrat&display=swap');

        :root {
          --roro-main: #FACBAA;
          --roro-accent: #A17494;
          --bg-color: #FFFFFF;
          --text-color: #2C3E50;
        }

        html, body {
          margin: 0;
          padding: 0;
          background: var(--bg-color);
          color: var(--text-color);
          font-family: 'Montserrat', sans-serif;
          overflow-x: hidden;
        }

        main {
          max-width: 1100px;
          margin: 0 auto 4rem;
          padding: 6rem 1.5rem 3rem; /* 顶部留导航空间 */
          box-sizing: border-box;
          min-height: calc(100vh - 80px);
        }

        h1 {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 3.8rem;
          color: var(--roro-accent);
          text-align: center;
          margin-bottom: 2.4rem;
          user-select: none;
          position: relative;
          z-index: 1;
        }

        /* Tab切换按钮组 */
        .tab-buttons {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 3rem;
          user-select: none;
        }
        .tab-button {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          color: var(--roro-accent);
          padding: 0.4rem 1.4rem;
          border-radius: 24px;
          cursor: pointer;
          border: 2px solid transparent;
          transition: all 0.3s ease;
          background: transparent;
        }
        .tab-button:hover,
        .tab-button:focus-visible {
          outline: none;
          color: var(--roro-main);
          border-color: var(--roro-main);
          box-shadow: 0 0 10px var(--roro-main);
        }
        .tab-button.active {
          color: #fff;
          background: var(--roro-main);
          border-color: var(--roro-main);
          box-shadow: 0 0 15px var(--roro-main);
          cursor: default;
        }

        /* 内容容器 */
        .tab-content {
          background: #fff;
          border: 2px solid var(--roro-main);
          border-radius: 20px;
          box-shadow: 0 4px 18px rgba(161, 116, 148, 0.25);
          padding: 2rem 2.5rem;
          min-height: 460px;
          user-select: none;
        }

        /* 列表样式统一 */
        ul.item-list {
          list-style: none;
          padding-left: 0;
          margin: 0;
          max-height: 360px;
          overflow-y: auto;
        }

        /* 单条资讯/物料条目 */
        li.item {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 1.8rem;
          align-items: center;
        }

        /* 图片或Logo占位 */
        .item-img {
          width: 96px;
          height: 96px;
          flex-shrink: 0;
          border-radius: 16px;
          overflow: hidden;
          background: #faf0e9;
          display: flex;
          align-items: center;
          justify-content: center;
          filter: drop-shadow(0 0 5px var(--roro-main));
        }

        /* 图片 */
        .item-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          user-select: none;
        }

        /* Logo占位大小控制 */
        .logo-placeholder {
          width: 72px !important;
          height: 72px !important;
        }

        /* 文字内容 */
        .item-text {
          flex: 1;
        }
        .item-title {
          font-weight: 700;
          font-size: 1.3rem;
          margin: 0 0 0.3rem;
          color: var(--roro-accent);
          user-select: text;
          cursor: pointer;
          transition: color 0.3s ease;
        }
        .item-title:hover,
        .item-title:focus-visible {
          color: var(--roro-main);
          outline: none;
          text-decoration: underline;
        }
        .item-summary {
          font-weight: 300;
          font-size: 1rem;
          color: #555555cc;
          user-select: text;
          line-height: 1.5;
        }

        /* 时间 */
        .item-date {
          font-size: 0.85rem;
          color: var(--roro-accent);
          font-weight: 600;
          margin-bottom: 0.2rem;
          user-select: none;
        }

        /* 响应式 */
        @media (max-width: 767px) {
          main {
            padding: 5rem 1rem 2rem;
          }
          h1 {
            font-size: 2.8rem;
            margin-bottom: 1.8rem;
          }
          .tab-buttons {
            gap: 1.2rem;
            margin-bottom: 2rem;
          }
          .tab-button {
            font-size: 1.4rem;
            padding: 0.3rem 1rem;
          }
          .tab-content {
            padding: 1.5rem 1.8rem;
            min-height: 360px;
          }
          ul.item-list {
            max-height: 280px;
          }
          li.item {
            flex-direction: column;
            align-items: flex-start;
          }
          .item-img {
            width: 80px;
            height: 80px;
            margin-bottom: 0.8rem;
          }
          .logo-placeholder {
            width: 56px !important;
            height: 56px !important;
          }
        }
      `}</style>

      <main>
        <h1>News & Materials</h1>

        <nav className="tab-buttons" role="tablist" aria-label="资讯与物料切换">
          <button
            role="tab"
            aria-selected={activeTab === 'news'}
            aria-controls="tab-news"
            id="tab-button-news"
            className={`tab-button ${activeTab === 'news' ? 'active' : ''}`}
            onClick={() => setActiveTab('news')}
            tabIndex={activeTab === 'news' ? 0 : -1}
          >
            资讯
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'merch'}
            aria-controls="tab-merch"
            id="tab-button-merch"
            className={`tab-button ${activeTab === 'merch' ? 'active' : ''}`}
            onClick={() => setActiveTab('merch')}
            tabIndex={activeTab === 'merch' ? 0 : -1}
          >
            物料
          </button>
        </nav>

        <section
          id="tab-news"
          role="tabpanel"
          aria-labelledby="tab-button-news"
          hidden={activeTab !== 'news'}
          className="tab-content"
        >
          <ul className="item-list">
            {newsItems.map(({ id, date, title, summary, link, image }) => (
              <li key={id} className="item">
                <div className="item-img" aria-hidden="true">
                  {image ? (
                    <img src={image} alt={title} />
                  ) : (
                    <Logo size={72} className="logo-placeholder" />
                  )}
                </div>
                <div className="item-text">
                  <time className="item-date" dateTime={date}>{date}</time>
                  <Link href={link} className="item-title" aria-label={`查看详情: ${title}`}>
                    {title}
                  </Link>
                  <p className="item-summary">{summary}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section
          id="tab-merch"
          role="tabpanel"
          aria-labelledby="tab-button-merch"
          hidden={activeTab !== 'merch'}
          className="tab-content"
        >
          <ul className="item-list">
            {merchItems.map(({ id, name, image, description }) => (
              <li key={id} className="item">
                <div className="item-img" aria-hidden="true">
                  {image ? (
                    <img src={image} alt={name} />
                  ) : (
                    <Logo size={72} className="logo-placeholder" />
                  )}
                </div>
                <div className="item-text">
                  <div className="item-title">{name}</div>
                  <div className="item-summary">{description}</div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}








