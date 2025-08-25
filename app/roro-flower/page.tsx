'use client';

import React from 'react';
import Link from 'next/link';

const classicFlowers = [
  'Rose',
  'Sakura',
  'Sunflower',
  'Tulip',
  'Lily',
  'Orchid',
  'Peony',
  'Daisy',
  'Lotus',
  'Camellia',
];

const comingSoonSeries = [
  'Myth & Legend Series',
  'Secret Garden Series',
  'Modern Romance Series',
];

export default function RoroFlower() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

        main {
          min-height: 100vh;
          padding: 80px 20px;
          background: #ffffff; /* 纯白背景 */
          text-align: center;
        }

        h1 {
          font-family: 'Great Vibes', cursive;
          font-size: 3.2rem;
          color: #A17494;
          margin-bottom: 2.5rem;
        }

        h2 {
          font-family: 'Great Vibes', cursive;
          font-size: 2rem;
          color: #A17494;
          margin: 2.5rem 0 1.5rem;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px,1fr));
          gap: 16px;
          max-width: 960px;
          margin: 0 auto;
        }

        .flower-card {
          background: #fff;
          border-radius: 16px;
          padding: 14px 12px;
          box-shadow: 0 4px 12px #FACBAA33;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          cursor: pointer;
          text-decoration: none;
        }

        .flower-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 22px #FACBAA66;
        }

        .flower-card h3 {
          font-family: 'Great Vibes', cursive;
          font-size: 1.3rem;
          margin: 0;
          color: #A17494;
        }

        /* Coming soon 系列样式 */
        .coming-card {
          background: #f7f7f7;
          border-radius: 16px;
          padding: 14px 12px;
          box-shadow: inset 0 0 8px #ccc;
          opacity: 0.6;
          cursor: not-allowed;
        }

        .coming-card h3 {
          font-family: 'Great Vibes', cursive;
          font-size: 1.2rem;
          margin: 0;
          color: #999;
        }

        /* 链接去掉下划线 */
        a {
          text-decoration: none;
          color: inherit;
        }

        @media(max-width:768px) {
          .grid { grid-template-columns: 1fr; gap: 12px; }
          .flower-card { padding: 10px 8px; }
          .flower-card h3 { font-size: 1.1rem; }
        }
      `}</style>

      <main>
        <h1>Roro Flower Garden</h1>

        {/* 经典系列 */}
        <h2>Classic Series</h2>
        <div className="grid">
          {classicFlowers.map(f => (
            <Link key={f} href={`/flower/${f.toLowerCase()}`} style={{ textDecoration: 'none' }}>
              <div className="flower-card">
                <h3>{f}</h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Coming soon 系列 */}
        <h2>Coming Soon</h2>
        <div className="grid">
          {comingSoonSeries.map(series => (
            <div key={series} className="coming-card">
              <h3>{series}</h3>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
