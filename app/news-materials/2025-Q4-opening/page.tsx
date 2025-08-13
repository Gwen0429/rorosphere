'use client';

import React from 'react';
import Head from 'next/head';

export default function Q4Opening() {
  return (
    <>
      <Head>
        {/* 页面标题和描述 */}
        <title>2025年第四季度</title>
        <meta name="description" content="开端预告 · 创意成长之旅 | 首场活动时间：2025年9月初" />

        {/* Open Graph */}
        <meta property="og:title" content="2025年第四季度" />
        <meta property="og:description" content="开端预告 · 创意成长之旅 | 首场活动时间：2025年9月初" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rorosphere.com/q4-opening" />
        <meta property="og:image" content="/share-image-q4.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="2025年第四季度" />
        <meta name="twitter:description" content="开端预告 · 创意成长之旅 | 首场活动时间：2025年9月初" />
        <meta name="twitter:image" content="/share-image-q4.png" />
      </Head>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Great+Vibes&display=swap');

        :root {
          --roro-main: #FACBAA;
          --roro-accent: #A17494;
        }

        html, body {
          margin: 0;
          padding: 0;
          min-height: 100%;
          background: #ffffff;
          color: var(--roro-accent);
          font-family: 'Playfair Display', serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          box-sizing: border-box;
        }

        *, *::before, *::after {
          box-sizing: inherit;
        }

        main {
          width: 100%;
          max-width: 720px;
          margin: 40px auto 160px;
          padding: 40px 32px 64px;
        }

        h1.title {
          font-family: 'Great Vibes', cursive;
          font-size: 3.6rem;
          text-align: center;
          margin-bottom: 1rem;
          color: var(--roro-accent);
          user-select: none;
          text-shadow:
            0 0 8px var(--roro-accent)aa,
            0 0 16px var(--roro-accent)88;
        }

        p.subtitle {
          font-size: 1.6rem;
          text-align: center;
          margin-bottom: 3rem;
          color: #6b6b6bdd;
          user-select: text;
        }

        h2 {
          font-weight: 700;
          font-size: 1.8rem;
          margin-top: 2.4rem;
          margin-bottom: 1rem;
          border-left: 4px solid var(--roro-main);
          padding-left: 12px;
          user-select: text;
        }

        p, li {
          font-weight: 300;
          font-size: 1.15rem;
          line-height: 1.7;
          letter-spacing: 0.03em;
          color: #6b6b6bdd;
          user-select: text;
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
        }

        ul {
          padding-left: 1.2rem;
          margin-top: 0.5rem;
          margin-bottom: 1rem;
          user-select: text;
        }

        .highlight-box {
          background-color: var(--roro-main);
          color: var(--roro-accent);
          padding: 1rem 1.2rem;
          border-radius: 12px;
          margin-top: 2rem;
          font-weight: 600;
          font-size: 1.15rem;
          line-height: 1.6;
          user-select: text;
          box-shadow: 0 4px 12px var(--roro-main)80;
        }

        @media (max-width: 768px) {
          main {
            width: 100%;
            max-width: 720px;
            margin: 60px auto 80px;
            padding: 24px;
            box-sizing: border-box;
          }

          h1.title {
            font-size: 2.8rem;
            margin-bottom: 0.8rem;
          }

          p.subtitle {
            font-size: 1.3rem;
            margin-bottom: 2rem;
          }

          h2 {
            font-size: 1.5rem;
            margin-top: 1.8rem;
            margin-bottom: 0.8rem;
          }

          p, li {
            font-size: 1rem;
            line-height: 1.5;
          }

          .highlight-box {
            font-size: 1rem;
            padding: 1rem;
            margin-top: 1.5rem;
          }
        }
      `}</style>

      <main>
        <h1 className="title">2025年第四季度</h1>
        <p className="subtitle">开端预告 · 创意成长之旅</p>

        <p>
          欢迎加入 Roro 的第四季度创意成长计划！本季度，我们将搭建跨界合作平台，助力你在表达、思维与执行上持续成长。
        </p>

        <h2>本季度核心主题</h2>
        <ul>
          <li><strong>跨界融合：</strong>促进艺术、科技、文化多领域灵感碰撞。</li>
          <li><strong>实战落地：</strong>每周分享会提供创意灵感 / 作业任务 + 精心制作的 PPT，优秀作品有机会在 Roro 网站展示。</li>
          <li><strong>表达力提升：</strong>演讲、写作、英文输出综合训练，提升沟通能力与自信。</li>
          <li><strong>共创协作：</strong>搭建高效合作机制，拓展人脉资源。</li>
        </ul>

        <h2>活动安排</h2>
        <ul>
          <li>
            <strong>每周固定分享会：</strong>会员可参与，每次分享会都会提供创意灵感/作业任务及 PPT，鼓励成员展示或提交作品。
          </li>
          <li>
            <strong>不定期增值活动：</strong>头脑风暴讨论会、英文交流训练、演讲能力提升等，帮助成员深度成长。
          </li>
          <li>
            <em>为了公益，我们开放部分免费分享会名额（需审核），让更多创意人有机会体验 Roro 的高质量内容。</em>
          </li>
        </ul>

        <h2>参与收获</h2>
        <ul>
          <li>系统化成长路径，全面提升思维力、表达力与执行力。</li>
          <li>真实创意实践经验，优秀作品可在 Roro 平台展示。</li>
          <li>结识志同道合的创意伙伴，拓展跨界合作网络。</li>
        </ul>

        <div className="highlight-box" role="region" aria-label="第一场活动时间">
          第一场活动时间：2025年9月初，线上直播，敬请期待！
        </div>
      </main>
    </>
  );
}





