'use client';

import React from 'react';

export default function MvpLandingPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Great+Vibes&display=swap');

        :root {
          --roro-main: #FACBAA;
          --roro-accent: #A17494;
          --background: #ffffff;
        }

        html, body {
          margin: 0;
          padding: 0;
          background: var(--background);
          font-family: 'Playfair Display', serif;
          color: var(--roro-accent);
        }

        main {
          max-width: 720px;
          margin: 40px auto 140px;
          padding: 40px 32px 64px;
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
          text-shadow: 0 0 8px var(--roro-accent)aa, 0 0 16px var(--roro-accent)88;
        }

        .section {
          width: 100%;
          margin-bottom: 3rem;
          text-align: center;
        }

        .section h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: var(--roro-accent);
        }

        .section p {
          font-size: 1.15rem;
          line-height: 1.7;
          color: #6b6b6bdd;
          margin: 0 auto;
          max-width: 600px;
        }

        .steps {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 1rem;
        }

        .step {
          background: #fdf1eb;
          padding: 1rem 1.5rem;
          border-radius: 12px;
          box-shadow: 0 0 8px #facbaa33;
          text-align: left;
        }

        .join-button {
          margin-top: 2rem;
          padding: 1rem 2rem;
          font-size: 1.2rem;
          font-weight: 700;
          border: none;
          border-radius: 12px;
          background: var(--roro-accent);
          color: #fff;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .join-button:hover {
          background: #8a5b76;
        }

        @media (max-width: 768px) {
          main {
            margin: 24px 16px 80px;
            padding: 24px 16px 40px;
          }
          h1.page-title {
            font-size: 2.6rem;
            margin-bottom: 2rem;
          }
          .section h2 {
            font-size: 1.6rem;
          }
          .section p {
            font-size: 1rem;
          }
          .join-button {
            font-size: 1rem;
            padding: 0.8rem 1.5rem;
          }
        }
      `}</style>

      <main>
        <h1 className="page-title">加入 Rorosphere MVP</h1>

        <div className="section">
          <h2>什么是 Rorosphere？</h2>
          <p>Rorosphere 是一个创意协作生态，你的创意可以获得认可与 RP 积分。在小圈中发布作品、参与互动，就能在榜单上看到自己的成长！</p>
        </div>

        <div className="section">
          <h2>为什么要加入？</h2>
          <p>成为首批核心成员，体验系统、积累 RP、与其他成员互动，并共同塑造 Rorosphere 的未来！</p>
        </div>

        <div className="section">
          <h2>如何参与</h2>
          <div className="steps">
            <div className="step">1. 直接添加RORO创始人Gwen微信：jw_inblooming</div>
            <div className="step">2. 在你的圈子中发布创意、微故事或作品</div>
            <div className="step">3. 完成活动即可获得 RP 积分，并查看榜单排名</div>
            <div className="step">4. 点击自己的名字，查看 RP 明细和加分来源</div>
          </div>
        </div>

        <button className="join-button">jw_inblooming</button>
      </main>
    </>
  );
}







