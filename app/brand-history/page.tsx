'use client';

import React from 'react';

export default function BrandHistory() {
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

        /* 时间轴容器 */
        .timeline {
          position: relative;
          padding-left: 40px;
          padding-right: 40px;
          margin: 0;
        }

        /* 中心竖线 */
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

        /* 时间点容器，左右交替 */
        .timeline-item {
          position: relative;
          width: 50%;
          padding: 1rem 2rem;
          box-sizing: border-box;
          z-index: 1;
          user-select: text;
        }
        /* 左边 */
        .timeline-item.left {
          left: 0;
          text-align: right;
          padding-right: 3rem;
        }
        /* 右边 */
        .timeline-item.right {
          left: 50%;
          text-align: left;
          padding-left: 3rem;
        }

        /* 时间点小圆 */
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

        /* 时间 */
        .timeline-date {
          font-weight: 700;
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
          color: var(--roro-accent);
        }

        /* 内容 */
        .timeline-content {
          font-weight: 300;
          font-size: 1.15rem;
          line-height: 1.7;
          color: #6b6b6bdd;
          letter-spacing: 0.03em;
          white-space: pre-line;
        }

        /* 移动端响应 */
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
        }
      `}</style>

      <main>
        <h1 className="page-title" aria-label="品牌历程">Brand History</h1>

        <div className="timeline" aria-label="品牌历程时间轴">

          {/* 时间点1 左 */}
          <div className="timeline-item left">
            <div className="timeline-dot" aria-hidden="true" />
            <div className="timeline-date">2022年 - 创立</div>
            <div className="timeline-content">
              ROROSPHERE成立于2022年，诞生于对青少年创意跨界社区的热忱，致力于为年轻创作者打造独特的表达平台。
            </div>
          </div>

          {/* 时间点2 右 */}
          <div className="timeline-item right">
            <div className="timeline-dot" aria-hidden="true" />
            <div className="timeline-date">2023年 - 首次大型活动</div>
            <div className="timeline-content">
              举办首届“创意盛典”，汇聚来自全国各地的年轻创作者，推动多元跨界合作。
            </div>
          </div>

          {/* 时间点3 左 */}
          <div className="timeline-item left">
            <div className="timeline-dot" aria-hidden="true" />
            <div className="timeline-date">2024年 - 平台升级</div>
            <div className="timeline-content">
              平台功能全面升级，加入实时互动和创意激励机制，提升用户体验。
            </div>
          </div>

          {/* 时间点4 右 */}
          <div className="timeline-item right">
            <div className="timeline-dot" aria-hidden="true" />
            <div className="timeline-date">2025年 - 持续成长</div>
            <div className="timeline-content">
              ROROSPHERE不断扩大社群影响力，成为青少年创意跨界领域的重要力量。
            </div>
          </div>

        </div>
      </main>
    </>
  );
}

