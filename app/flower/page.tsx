'use client';

import React from 'react';
import Link from 'next/link';

interface Flower {
  name: string;
  name_cn: string;
  description: string;
  link: string;
}

const flowers: Flower[] = [
  { name: 'Rose', name_cn: '玫瑰', description: 'Love, passion, and timeless beauty.', link: '/flowers/rose' },
  { name: 'Sakura', name_cn: '樱花', description: 'Ephemeral beauty, a fleeting spring.', link: '/flowers/sakura' },
  { name: 'Sunflower', name_cn: '向日葵', description: 'Hope, vitality, and light.', link: '/flowers/sunflower' },
  { name: 'Lily', name_cn: '百合', description: 'Purity, innocence, and eternity.', link: '/flowers/lily' },
  { name: 'Tulip', name_cn: '郁金香', description: 'Elegance, grace, and nobility.', link: '/flowers/tulip' },
  { name: 'Hibiscus', name_cn: '木槿', description: 'Passion, fleeting brilliance.', link: '/flowers/hibiscus' },
  { name: 'Lavender', name_cn: '薰衣草', description: 'Calmness, healing, and peace.', link: '/flowers/lavender' },
  { name: 'More Flowers', name_cn: '查看更多', description: 'Step into the garden of RORO.', link: '/flowers/all' },
];

export default function FlowersPage() {
  return (
    <>
      <style>{`
        :root {
          --roro-main: #FACBAA;
          --roro-accent: #A17494;
          --roro-bg: #FFFFFF;
          --roro-text: #3B2E2E;
          --roro-glow-alpha: #FACBAA33;
          --roro-glow-alpha-heavy: #FACBAA66;
        }
        main {
          min-height: 100vh;
          padding: 80px 20px 100px;
          display: flex;
          flex-direction: column;
          align-items: center;
          background: var(--roro-bg);
          color: var(--roro-text);
        }
        h1.page-title {
          font-family: 'Great Vibes', cursive;
          font-size: 4rem;
          color: var(--roro-main);
          margin-bottom: 2rem;
          text-shadow: 0 0 12px var(--roro-glow-alpha-heavy);
          text-align: center;
        }
        .grid {
          max-width: 960px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
        }
        .card {
          background: #fff;
          border-radius: 20px;
          padding: 20px 16px;
          box-shadow: 0 6px 16px var(--roro-glow-alpha);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          cursor: pointer;
          text-align: center;
        }
        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 32px var(--roro-glow-alpha-heavy), 0 0 18px var(--roro-main);
        }
        .card h2 {
          font-family: 'Great Vibes', cursive;
          font-size: 1.6rem;
          margin: 0 0 8px;
          color: var(--roro-accent);
        }
        .card p {
          font-size: 0.9rem;
          color: #5a4a4a;
        }
        @media (max-width: 768px) {
          h1.page-title { font-size: 2.5rem; }
          .grid { grid-template-columns: 1fr; gap: 14px; }
          .card { padding: 14px 12px; }
          .card h2 { font-size: 1.3rem; }
          .card p { font-size: 0.85rem; }
        }
      `}</style>

      <main>
        <h1 className="page-title">Roro Flower</h1>
        <section className="grid">
          {flowers.map((f) => (
            <Link href={f.link} key={f.name} className="card">
              <h2>{f.name_cn} | {f.name}</h2>
              <p>{f.description}</p>
            </Link>
          ))}
        </section>
      </main>
    </>
  );
}
