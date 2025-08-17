'use client';

import React, { useState } from 'react';
import { rpMembers } from '../../src/data/rp-members.js';

export default function RpLeaderboardStatic() {
  const [selectedMember, setSelectedMember] = useState(null);

  // 根据 RP 从高到低排序
  const sortedMembers = [...rpMembers].sort((a, b) => b.rp - a.rp);

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
          user-select: none;
          text-shadow:
            0 0 8px var(--roro-accent)aa,
            0 0 16px var(--roro-accent)88;
        }

        .leaderboard {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .leaderboard-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.5rem;
          border-radius: 12px;
          background: #fdf1eb;
          box-shadow: 0 0 8px #facbaa33;
          cursor: pointer;
        }

        .leaderboard-rank {
          font-weight: 700;
          font-size: 1.3rem;
          color: var(--roro-accent);
          min-width: 2rem;
        }

        .leaderboard-name {
          font-weight: 500;
          font-size: 1.15rem;
        }

        .leaderboard-rp {
          font-weight: 600;
          font-size: 1.15rem;
          color: var(--roro-main);
        }

        /* 弹窗样式 */
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 999;
        }

        .modal-content {
          background: #fff;
          padding: 24px;
          border-radius: 16px;
          max-width: 400px;
          width: 90%;
          text-align: left;
        }

        .modal-content h2 {
          margin-top: 0;
          font-family: 'Great Vibes', cursive;
          font-size: 2rem;
          color: var(--roro-accent);
        }

        .modal-content ul {
          padding-left: 20px;
          margin: 1rem 0 0 0;
        }

        .modal-content li {
          margin-bottom: 0.5rem;
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
          .leaderboard-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
          .leaderboard-rp {
            font-size: 1.1rem;
          }
        }
      `}</style>

      <main>
        <h1 className="page-title" aria-label="RP Leaderboard">RP Leaderboard</h1>

        <div className="leaderboard">
          {sortedMembers.map((member, index) => (
            <div
              key={member.id}
              className="leaderboard-item"
              onClick={() => setSelectedMember(member)}
            >
              <div className="leaderboard-rank">#{index + 1}</div>
              <div className="leaderboard-name">{member.name} ({member.role})</div>
              <div className="leaderboard-rp">{member.rp} RP</div>
            </div>
          ))}
        </div>

        {selectedMember && (
          <div className="modal" onClick={() => setSelectedMember(null)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <h2>{selectedMember.name} - 加分详情</h2>
              <ul>
                {selectedMember.details.map((item, i) => (
                  <li key={i}>{item.reason}: +{item.value} RP</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

















