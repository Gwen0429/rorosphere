'use client';

import React, { useState } from 'react';
import { rpMembers } from '../../src/data/rp-members.js';

type Member = {
  id: number;
  name: string;
  rp: number;
  cell: string;
  contributions: string[];
};

export default function RPBoard() {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  // 按 RP 值倒序排序
  const sortedMembers = [...rpMembers].sort((a, b) => b.rp - a.rp);
  const topMembers = sortedMembers.slice(0, 3);

  // RP 等级映射
  const rpLevels = [
    { min: 500, title: 'Master Creator' },
    { min: 200, title: 'Elite Collaborator' },
    { min: 100, title: 'Advanced Contributor' },
    { min: 50, title: 'Rising Star' },
    { min: 0, title: 'New Member' },
  ];

  const getLevel = (rp: number) => {
    return rpLevels.find(level => rp >= level.min)?.title || 'New Member';
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Great+Vibes&display=swap');

        :root {
          --roro-main: #FACBAA;
          --roro-accent: #A17494;
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
          max-width: 960px;
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
          margin-bottom: 2rem;
          color: var(--roro-accent);
          user-select: none;
          text-shadow: 0 0 8px var(--roro-accent)aa, 0 0 16px var(--roro-accent)88;
        }

        /* 金字塔模块 */
        .rp-pyramid {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 40px;
        }

        .rp-level-box {
          width: 80%;
          border-left: 6px solid var(--roro-accent);
          padding: 12px 16px;
          margin-bottom: 12px;
          background: #fff4ee;
          border-radius: 8px;
          display: flex;
          justify-content: space-between;
        }

        /* 成员模块 */
        .members {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
          width: 100%;
          margin-bottom: 24px;
        }

        .member-card {
          background: #fffaf7;
          border: 2px solid var(--roro-accent);
          border-radius: 12px;
          padding: 16px;
          box-shadow: 0 0 8px rgba(161, 116, 148, 0.15);
          text-align: center;
          transition: transform 0.3s ease;
          cursor: pointer;
        }

        .member-card:hover {
          transform: translateY(-5px);
        }

        .member-name {
          font-weight: 700;
          font-size: 1.3rem;
          margin-bottom: 4px;
        }

        .rp-value {
          font-size: 1.2rem;
          color: var(--roro-main);
          margin-bottom: 4px;
        }

        .rank-desc {
          font-size: 1rem;
          color: #6b6b6bdd;
          margin-bottom: 4px;
        }

        /* 弹窗 */
        .modal {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999;
        }

        .modal-content {
          background: #ffffff;
          padding: 32px;
          border-radius: 16px;
          max-width: 500px;
          width: 90%;
          text-align: left;
        }

        .close-btn {
          background: var(--roro-accent);
          color: #fff;
          border: none;
          padding: 8px 16px;
          border-radius: 8px;
          cursor: pointer;
          margin-top: 16px;
        }

        @media (max-width: 768px) {
          main { margin: 40px 16px 80px; padding: 24px 16px 40px; }
          h1.page-title { font-size: 2.6rem; margin-bottom: 1.5rem; }
          .member-card { padding: 12px; }
        }
      `}</style>

      <main>
        <h1 className="page-title">RP Ranking & Achievement</h1>

        {/* 金字塔模块 */}
        <div className="rp-pyramid">
          {rpLevels.map(level => (
            <div key={level.min} className="rp-level-box">
              <span>{level.title}</span>
              <span>≥ {level.min} RP</span>
            </div>
          ))}
        </div>

        {/* 成员模块 */}
        <div className="members">
          {topMembers.map((m) => (
            <div key={m.id} className="member-card" onClick={() => setSelectedMember(m)}>
              <div className="member-name">{m.name}</div>
              <div className="rp-value">{m.rp} RP</div>
              <div className="rank-desc">{getLevel(m.rp)}</div>
            </div>
          ))}
        </div>

        {/* 查看更多按钮 */}
        {sortedMembers.length > 3 && (
          <button className="close-btn" onClick={() => alert('可改为跳转完整列表或弹窗展示')}>
            View More
          </button>
        )}

        {/* 弹窗 */}
        {selectedMember && (
          <div className="modal" onClick={() => setSelectedMember(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h2>{selectedMember.name}</h2>
              <p><strong>RP:</strong> {selectedMember.rp}</p>
              <p><strong>Level:</strong> {getLevel(selectedMember.rp)}</p>
              <p><strong>Cell:</strong> {selectedMember.cell}</p>
              <p><strong>Contributions:</strong></p>
              <ul>
                {selectedMember.contributions.map((c: string, i: number) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
              <button className="close-btn" onClick={() => setSelectedMember(null)}>Close</button>
            </div>
          </div>
        )}

      </main>
    </>
  );
}











