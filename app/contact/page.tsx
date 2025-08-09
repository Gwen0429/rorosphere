'use client';

import React from 'react';
import Link from 'next/link';

export default function ContactUs() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Great+Vibes&display=swap');

        :root {
          --roro-main: #FACBAA;
          --roro-accent: #A17494;
          --roro-glow-alpha: #FACBAA66;
          --invitation-glow-gradient: linear-gradient(135deg, var(--roro-main) 0%, var(--roro-accent) 100%);
        }

        html, body {
          margin: 0;
          padding: 0;
          background: #fff;
          font-family: 'Playfair Display', serif;
          overflow-x: hidden;
        }

        main {
          position: relative;
          max-width: 720px;
          width: 100%;
          margin: 80px auto;
          padding: 40px 32px 64px;
          background: linear-gradient(180deg, #fff 0%, #fff7f3 100%);
          border-radius: 16px;
          box-sizing: border-box;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        }

        main::before,
        main::after {
          content: "";
          position: absolute;
          border-radius: 16px;
          pointer-events: none;
          z-index: -1;
        }

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
        }

        main::after {
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          box-shadow:
            0 0 10px var(--roro-main),
            0 0 20px var(--roro-accent);
        }

        main:hover::after {
          box-shadow:
            0 0 16px var(--roro-main),
            0 0 28px var(--roro-accent);
        }

        .header {
          font-family: 'Great Vibes', cursive;
          font-size: 2.6rem;
          color: var(--roro-accent);
          text-align: center;
          margin-bottom: 36px;
          letter-spacing: 0.05em;
        }

        section.content {
          font-size: 1.15rem;
          line-height: 1.7;
          color: #6b6b6bdd;
          margin-bottom: 40px;
          text-align: center;
        }

        .cta-button {
          display: inline-block;
          background: var(--invitation-glow-gradient);
          color: white;
          padding: 12px 28px;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-decoration: none;
          box-shadow: 0 4px 10px rgba(0,0,0,0.15);
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 14px rgba(0,0,0,0.2);
        }

        @media (max-width: 768px) {
          main {
            margin: 40px 12px;
            padding: 24px 16px 36px;
          }
          .header {
            font-size: 2rem;
            margin-bottom: 24px;
          }
          section.content {
            font-size: 1rem;
            line-height: 1.55;
          }
        }
      `}</style>

      <main>
        <div className="header">
          Contact ROROSPHERE
        </div>

        <section className="content">
          {`无论你是希望与 RORO 合作、还是想申请成为 RORO 创作者，我们都期待听到你的声音。`}
        </section>

        <div style={{ textAlign: 'center' }}>
          <Link href="/apply" className="cta-button">
            提交申请 / 合作意向
          </Link>
        </div>
      </main>
    </>
  );
}
