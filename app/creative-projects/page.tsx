'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { projects } from '../../src/data/project.js';

function ApplicationContent() {
  const searchParams = useSearchParams();

  // 举例：从 URL 获取 q 参数
  const query = searchParams.get('q') || '';

  const sortedProjects = [...projects].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

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
          display: flex;
          flex-direction: column;
          align-items: center;
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
          width: 100%;
        }

        .timeline {
          position: relative;
          padding-left: 40px;
          padding-right: 40px;
          margin: 0;
          width: 100%;
        }

        .timeline::before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
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

        a.project-title {
          color: var(--roro-accent);
          font-weight: 600;
          font-size: 1.3rem;
          text-decoration: none !important;
          cursor: pointer;
          user-select: text;
          transition: color 0.3s ease;
        }
        a.project-title:hover,
        a.project-title:focus-visible {
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
          margin-top: 0.25rem;
        }

        .submit-creative-btn {
          margin-top: 48px;
          background-color: var(--roro-main);
          border: none;
          border-radius: 28px;
          padding: 14px 36px;
          font-family: 'Great Vibes', cursive;
          font-size: 2.2rem;
          color: #fff;
          cursor: pointer;
          box-shadow: 0 0 15px var(--roro-main);
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
          user-select: none;
          align-self: center;
          text-align: center;
          text-decoration: none;
          display: inline-block;
        }
        .submit-creative-btn:hover,
        .submit-creative-btn:focus-visible {
          background-color: #f9b89d;
          box-shadow: 0 0 25px var(--roro-main);
          outline: none;
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
            padding-left: 30px;
            padding-right: 20px;
          }
          .timeline::before {
            left: 20px;
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
          .submit-creative-btn {
            font-size: 1.8rem;
            padding: 12px 28px;
            margin-top: 32px;
          }
        }
      `}</style>

      <main>
        <h1 className="page-title" aria-label="创意项目">
          Creative Projects {query && `- 搜索: ${query}`}
        </h1>

        <div className="timeline" aria-label="创意项目时间轴">
          {sortedProjects.map(({ id, date, title, summary }, i) => {
            const side = i % 2 === 0 ? 'left' : 'right';
            return (
              <article key={id} className={`timeline-item ${side}`}>
                <div className="timeline-dot" aria-hidden="true" />
                <time className="timeline-date" dateTime={date}>
                  {date}
                </time>
                <a
                  href={`/projects/${encodeURIComponent(title)}`}
                  className="project-title"
                  aria-label={`查看项目详情: ${title}`}
                >
                  {title}
                </a>
                <p className="timeline-content">{summary}</p>
              </article>
            );
          })}
        </div>

        <a href="/apply" className="submit-creative-btn" aria-label="发布创意申请">
          发布创意申请
        </a>
      </main>
    </>
  );
}

export default function CreativeProjectsPage() {
  return (
    <Suspense fallback={<div>加载中...</div>}>
      <ApplicationContent />
    </Suspense>
  );
}



