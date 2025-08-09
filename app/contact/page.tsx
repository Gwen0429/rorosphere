'use client';

import React from 'react';
import Link from 'next/link';

export default function Talent() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Great+Vibes&display=swap');

        :root {
          --champagne-gold: #D4AF7F;
          --champagne-gold-alpha: #D4AF7Faa;
          --champagne-gold-alpha-soft: #D4AF7F66;
          --invitation-border: linear-gradient(135deg, #D4AF7F 0%, #F0E6D2 100%);
        }

        html, body {
          margin: 0;
          padding: 0;
          background: #fff;
          color: #333;
          font-family: 'Playfair Display', serif;
          overflow-x: hidden;
        }

        main {
          max-width: 720px;
          margin: 80px auto 140px;
          padding: 40px 32px 64px;
          border: 2px solid var(--champagne-gold);
          border-image-slice: 1;
          border-image-source: var(--invitation-border);
          border-radius: 16px;
          box-shadow: 0 0 15px var(--champagne-gold-alpha-soft);
          background: #fff;
          position: relative;
          user-select: none;
          box-sizing: border-box;
        }

        .header {
          font-family: 'Great Vibes', cursive;
          font-size: 2.8rem;
          color: var(--champagne-gold);
          text-align: center;
          margin-bottom: 36px;
          letter-spacing: 0.06em;
        }

        h1 {
          font-size: 3.8rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--champagne-gold);
          text-align: center;
          margin: 0 0 36px;
          letter-spacing: 0.12em;
          font-style: italic;
          text-shadow: 0 0 8px var(--champagne-gold-alpha), 0 0 20px var(--champagne-gold-alpha-soft);
          max-width: 100%;
          word-break: break-word;
          box-sizing: border-box;
          padding: 0 10px;
        }

        section.content {
          font-weight: 300;
          font-size: 1.15rem;
          line-height: 1.7;
          color: #6b6b6bdd;
          letter-spacing: 0.03em;
          margin-bottom: 40px;
          white-space: pre-line;
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
          color: var(--champagne-gold);
          font-weight: 700;
        }

        .signature {
          font-family: 'Great Vibes', cursive;
          font-size: 2.2rem;
          color: #9B7AA0; /* 香槟紫 */
          text-align: right;
          margin-top: 80px;
          letter-spacing: 0.05em;
        }

        footer {
          margin-top: 80px;
          text-align: center;
          font-size: 0.75rem;
          font-weight: 300;
          color: #999999aa;
          letter-spacing: 0.1em;
        }

        .contact-link {
          display: inline-block;
          margin-top: 20px;
          font-size: 1rem;
          color: var(--champagne-gold);
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        .contact-link:hover {
          color: #B68E37;
        }

        /* 响应式 */
        @media (max-width: 768px) {
          main {
            max-width: 100%;
            margin: 40px 16px 80px;
            padding: 24px 16px 40px;
            border-width: 1.5px;
            border-radius: 12px;
            box-shadow: 0 0 10px var(--champagne-gold-alpha-soft);
          }

          .header {
            font-size: 2rem;
            margin-bottom: 24px;
          }

          h1 {
            font-size: 2.8rem;
            margin-bottom: 24px;
            letter-spacing: 0.08em;
            padding: 0 8px;
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
        <div className="header" aria-label="邀请函">
          致愿景与创作者们
        </div>

        <h1>人才招募</h1>

        <section className="content" aria-label="简介">
          {`在 RORO，我们寻找的不是单纯的技能，而是能够将创造力变为生命的声音。

我们精心策划了一个独特的创作集体，邀请那些敢于创新、敢于表达、敢于打破常规的创作者。

我们的生态系统建立在意图和真实性的基础上，营造一个专属的氛围，让你的艺术塑造文化。`}
        </section>

        <section aria-label="人才要求">
          <ul className="requirements">
            <li>对创造性表达与创新充满激情</li>
            <li>致力于在选择性的社区中进行协作</li>
            <li>专注于创造具有原创性和深度的作品</li>
            <li>对新思想持开放态度，推动艺术界限</li>
            <li>与 RORO 的优雅与叛逆精神一致</li>
          </ul>
        </section>

        <section className="content" aria-label="邀请信息">
          {`如果你与我们的愿景产生共鸣，并希望成为一个充满远见的网络的一部分，我们欢迎你的申请。

让我们一起，不仅创造非凡的作品，也创造一个永恒的文化遗产。`}
        </section>

        <div className="signature" aria-label="署名">
          此致敬礼，<br />
          Gwen · ROROSPHERE 首席创意官
        </div>

        <footer>
          &copy; 2025 ROROSPHERE. 保留所有权利。<br />
          <Link href="/contact" className="contact-link" aria-label="联系我们">
            点击这里联系我们
          </Link>
        </footer>
      </main>
    </>
  );
}

