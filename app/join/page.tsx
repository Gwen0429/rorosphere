'use client';

import React from 'react';
import Link from 'next/link';

export default function Talent() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Great+Vibes&display=swap');

        :root {
          --roro-main: #FACBAA;    /* 裸色 */
          --roro-accent: #A17494;  /* 紫褐色 */
          --roro-glow-alpha: #FACBAA66;
          --roro-glow-alpha-light: #FACBAA33;
          --invitation-glow-gradient: linear-gradient(90deg, var(--roro-main) 0%, var(--roro-accent) 50%, var(--roro-main) 100%);
        }

        html, body {
          margin: 0;
          padding: 0;
          background: #fff;
          color: #333;
          font-family: 'Playfair Display', serif;
          overflow-x: hidden; /* 防止横向滚动 */
        }

        main {
          position: relative;
          max-width: 720px;
          width: 100%;
          margin: 80px auto 140px;
          padding: 40px 32px 64px;
          background: #fff;
          user-select: none;
          box-sizing: border-box;
          border-radius: 16px;
          z-index: 0;
          overflow-wrap: break-word;
          word-break: break-word;
        }

        /* 两圈边框光晕效果 */
        main::before,
        main::after {
          content: "";
          position: absolute;
          border-radius: 16px;
          pointer-events: none;
          z-index: -1;
          transition: all 0.3s ease;
        }

        /* 内圈边框 */
        main::before {
          top: 6px;
          left: 6px;
          right: 6px;
          bottom: 6px;
          border: 2px solid transparent;
          background: var(--invitation-glow-gradient);
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: destination-out;
          mask-composite: exclude;
          box-sizing: border-box;
        }

        /* 外圈光晕 */
        main::after {
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          box-shadow:
            0 0 12px var(--roro-main),
            0 0 20px var(--roro-accent);
        }

        main:hover::after,
        main:focus-within::after {
          box-shadow:
            0 0 20px var(--roro-main),
            0 0 30px var(--roro-accent);
        }

        .header {
          font-family: 'Great Vibes', cursive;
          font-size: 2.8rem;
          color: var(--roro-accent);
          text-align: center;
          margin-bottom: 36px;
          letter-spacing: 0.06em;
          user-select: none;
          text-shadow:
            0 0 6px var(--roro-accent)aa,
            0 0 12px var(--roro-accent)88;
        }

        section.content {
          font-weight: 300;
          font-size: 1.15rem;
          line-height: 1.7;
          color: #6b6b6bdd;
          letter-spacing: 0.03em;
          margin-bottom: 40px;
          white-space: pre-line;
          overflow-wrap: break-word;
          word-break: break-word;
        }

        ul.requirements {
          list-style: none;
          padding-left: 0;
          margin-bottom: 40px;
          color: #7a6a4fcc;
          font-weight: 300;
          font-size: 1.1rem;
          letter-spacing: 0.04em;
          user-select: text;
          overflow-wrap: break-word;
          word-break: break-word;
        }

        ul.requirements li {
          margin-bottom: 12px;
          padding-left: 1.2em;
          position: relative;
        }

        ul.requirements li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--roro-main);
          font-weight: 700;
        }

        a.contact-link {
          color: var(--roro-main);
          font-weight: 600;
          text-decoration: underline;
          cursor: pointer;
          transition: color 0.3s ease;
        }
        a.contact-link:hover,
        a.contact-link:focus-visible {
          color: var(--roro-accent);
          outline: none;
        }

        .signature {
          font-family: 'Great Vibes', cursive;
          font-size: 2.2rem;
          color: var(--roro-accent);
          text-align: right;
          margin-top: 80px;
          letter-spacing: 0.05em;
          user-select: none;
        }

        footer {
          margin-top: 80px;
          text-align: center;
          font-size: 0.75rem;
          font-weight: 300;
          color: #999999aa;
          letter-spacing: 0.1em;
        }

        /* 响应式 */
        @media (max-width: 768px) {
          main {
            max-width: 100%;
            margin: 40px 12px 80px;
            padding: 20px 12px 40px;
            border-radius: 12px;
          }

          .header {
            font-size: 2rem;
            margin-bottom: 24px;
          }

          section.content {
            font-size: 1rem;
            margin-bottom: 32px;
            line-height: 1.5;
          }

          ul.requirements {
            font-size: 1rem;
          }

          .signature {
            font-size: 1.6rem;
            margin-top: 48px;
          }

          footer {
            margin-top: 60px;
            font-size: 0.65rem;
          }
        }
      `}</style>

      <main>
        <div className="header" aria-label="Invitation to visionaries and creators">
          To Visionaries & Creators
        </div>

        <section className="content" aria-label="Introduction">
          {`在 RORO，我们寻找的不只是技术——而是发声的艺术生命。

我们精心甄选创作者，邀请敢于创新、表达、激发灵感的你，突破常规的边界。

我们的生态基于初心与真诚，塑造一个专属氛围，让你的艺术引领文化潮流。

如你共鸣，期待你点击这里前往 `}
          <Link href="/contact" className="contact-link" aria-label="联系我们">
            联系我们
          </Link>
          {`，携手开创未来。`}
        </section>

        <section aria-label="Talent requirements">
          <ul className="requirements">
            <li>对创意表达与创新的热忱</li>
            <li>致力于在精选社群中协作</li>
            <li>专注于原创且深度的作品打造</li>
            <li>开放拥抱新思想，突破艺术边界</li>
            <li>认同 RORO 的优雅与叛逆精神</li>
          </ul>
        </section>

        <div className="signature" aria-label="Signature">
          With Respect,<br />
          Gwen · Chief Creator of ROROSPHERE
        </div>

        <footer>&copy; 2025 ROROSPHERE. All rights reserved.</footer>
      </main>
    </>
  );
}























