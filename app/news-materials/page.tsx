'use client';

import React from 'react';
import Link from 'next/link';

const newsItems = [
  {
    id: 1,
    date: '2025-06-10',
    title: 'Roro中文名征集投票开启',
    summary: '参与Roro中文名创意投票，助力品牌本土化。',
    link: '/news/vote',
  },
  {
    id: 2,
    date: '2025-05-01',
    title: '电子邀请函样式公布',
    summary: '全新设计的电子邀请函现已上线，支持下载和分享。',
    link: '/news/invitation',
  },
  {
    id: 3,
    date: '2025-04-20',
    title: '夏季活动回顾',
    summary: '精彩纷呈的夏季艺术活动全纪录，精彩不容错过。',
    link: '/news/summer-event',
  },
];

// 时间倒序，最新日期排前
newsItems.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export default function NewsTimeline() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Great+Vibes&display=swap');

        :root {
          --roro-main: #FACBAA;    /* 裸色 */
          --roro-accent: #A17494;  /* 紫褐色 */
          --timeline-line: #A17494;
          --timeline-dot: #FACBAA;
        }

        html, body {
          margin: 0;
          padding: 0;
          background: #ffffff;
          color: var(--roro-accent);
          font-family: 'Playfair Display', serif;
          overflow-x: hidden;
        }

        main {
          max-width: 720px;
          margin: 80px auto 140px;
          padding: 40px 32px 64px;
          box-sizing: border-box;
          position: relative;
        }

        h1.page-title {
          font-family: 'Great Vibes', cursive;
          font-size: 3.6rem;
          text-align: center;
          margin-bottom: 3rem;
          color: var(--roro-accent);
          user-select: none;
          text-shadow:
            0 0 8px var(--roro-accent)aa,
            0 0 16px var(--roro-accent)88;
        }

        .timeline {
          position: relative;
          padding-left: 40px;
          padding-right: 40px;
          margin: 0;
        }

        .timeline::before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 20px; /* 左偏 */
          width: 4px;
          background-color: var(--timeline-line);
          border-radius: 2px;
          z-index: 0;
        }

        .timeline-item {
          position: relative;
          width: 50%;
          padding: 1rem 2rem;
          box-sizing: border-box;
          z-index: 1;
          user-select: text;
        }

        .timeline-item.left {
          left: 0;
          text-align: right;
          padding-right: 3rem;
        }

        .timeline-item.right {
          left: 50%;
          text-align: left;
          padding-left: 3rem;
        }

        .timeline-dot {
          position: absolute;
          top: 1.2rem;
          width: 24px;
          height: 24px;
          background: var(--timeline-dot);
          border: 3px solid var(--roro-accent);
          border-radius: 50%;
          box-shadow:
            0 0 10px var(--roro-main),
            0 0 15px var(--roro-accent);
          transition: box-shadow 0.3s ease;
          z-index: 2;
          cursor: default;
          user-select: none;
        }

        .timeline-item.left .timeline-dot {
          right: -12px;
        }

        .timeline-item.right .timeline-dot {
          left: -12px;
        }

        .timeline-item:hover .timeline-dot {
          box-shadow:
            0 0 15px var(--roro-main),
            0 0 25px var(--roro-accent);
        }

        .timeline-date {
          font-weight: 700;
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
          color: var(--roro-accent);
        }

        /* 去除所有链接下划线，永远无下划线 */
        a {
          color: var(--roro-accent);
          text-decoration: none !important;
          cursor: pointer;
          user-select: text;
          transition: color 0.3s ease;
        }
        a:hover,
        a:focus-visible {
          color: var(--roro-main);
          outline: none;
          text-decoration: none !important;
        }

        .timeline-content {
          font-weight: 300;
          font-size: 1.15rem;
          line-height: 1.7;
          color: #6b6b6bdd;
          letter-spacing: 0.03em;
          white-space: pre-line;
        }

        @media (max-width: 768px) {
          main {
            margin: 40px 16px 80px;
            padding: 24px 16px 40px;
          }
          h1.page-title {
            font-size: 2.6rem;
            margin-bottom: 2rem;
          }
          .timeline {
            padding-left: 0;
            padding-right: 0;
            position: relative;
          }
          .timeline::before {
            left: 20px; /* 左偏 */
            width: 3px;
          }
          .timeline-item {
            width: 100% !important;
            padding: 1rem 1rem 1rem 3.5rem !important;
            text-align: left !important;
            left: 0 !important;
            margin-bottom: 3rem;
          }
          .timeline-item .timeline-dot {
            left: 0 !important;
            right: auto !important;
            top: 1.25rem;
            width: 20px;
            height: 20px;
            border-width: 2.5px;
          }
          .timeline-date {
            font-size: 1.1rem;
          }
          .timeline-content {
            font-size: 1rem;
            line-height: 1.5;
          }
        }
      `}</style>

      <main>
        <h1 className="page-title" aria-label="资讯">News</h1>

        <div className="timeline" aria-label="资讯时间轴">
          {newsItems.map(({ id, date, title, summary }, i) => {
            // 交替左右排列
            const side = i % 2 === 0 ? 'left' : 'right';
            return (
              <article key={id} className={`timeline-item ${side}`}>
                <div className="timeline-dot" aria-hidden="true" />
                <time className="timeline-date" dateTime={date}>
                  {date}
                </time>
                <Link href={newsItems[i].link} aria-label={`查看详情: ${title}`}>
                  {title}
                </Link>
                <p className="timeline-content">{summary}</p>
              </article>
            );
          })}
        </div>
      </main>
    </>
  );
}












