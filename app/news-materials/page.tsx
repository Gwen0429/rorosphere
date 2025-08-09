'use client';

import React, { useState, useEffect } from 'react';
import {
  newsItems,
  materialItems,
  NewsItem,
  MaterialItem,
} from '../../src/data/newsMaterialData';

type NewsOrMaterial = NewsItem | MaterialItem;

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isMobile;
}

export default function NewsAndMaterials() {
  const [activeTab, setActiveTab] = useState<'news' | 'material'>('news');
  const isMobile = useIsMobile();
  const data: NewsOrMaterial[] = activeTab === 'news' ? newsItems : materialItems;

  const [showImages, setShowImages] = useState(false);

  return (
    <>
      <style>{`
        :root {
          --roro-main: #FACBAA;
          --roro-accent: #A17494;
          --roro-bg: #FFFFFF;
          --roro-text: #3B2E2E;
          --roro-shadow: rgba(0, 0, 0, 0.15);
          --roro-glow-alpha: #FACBAA66;
        }

        *, *::before, *::after {
          box-sizing: border-box;
          word-break: break-word;
        }

        html, body {
          margin: 0;
          padding: 0;
          background: var(--roro-bg);
          color: var(--roro-text);
          font-family: 'Playfair Display', serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        main {
          max-width: 1080px;
          margin: 0 auto;
          padding: 80px 24px 96px;
        }

        .tabs {
          display: flex;
          justify-content: center;
          gap: 28px;
          margin-bottom: 48px;
        }

        .tab-button {
          flex: 1 1 auto;
          min-width: 140px;
          padding: 16px 0;
          font-weight: 700;
          font-size: 1.2rem;
          color: var(--roro-main);
          border: 2px solid var(--roro-main);
          border-radius: 36px;
          background: transparent;
          cursor: pointer;
          transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
          text-align: center;
        }

        .tab-button.active,
        .tab-button:hover,
        .tab-button:focus-visible {
          background-color: var(--roro-main);
          color: #fff;
          outline: none;
          box-shadow: 0 0 12px var(--roro-main);
        }

        .cards-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 36px;
        }

        .card {
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 8px 16px rgba(250, 203, 170, 0.2);
          overflow: hidden;
          cursor: default;
          display: flex;
          flex-direction: column;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }

        .card:hover,
        .card:focus-within {
          box-shadow: 0 12px 32px rgba(250, 203, 170, 0.35);
          transform: translateY(-8px);
        }

        .card-images {
          display: flex;
          overflow-x: auto;
          gap: 12px;
          padding: 16px;
        }

        .card-images img {
          height: 140px;
          border-radius: 14px;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .card-images img:hover {
          transform: scale(1.06);
        }

        .card-content {
          padding: 20px 24px 28px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .card-date {
          font-size: 0.9rem;
          font-weight: 600;
          color: #a38f56cc;
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--roro-main);
          margin-bottom: 12px;
        }

        .card-desc {
          font-size: 1rem;
          color: #5b5b5bdd;
          line-height: 1.4;
        }

        @media (max-width: 768px) {
          .cards-container {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
      `}</style>

      <main>
        {isMobile ? (
          <select
            className="tab-select"
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value as 'news' | 'material')}
          >
            <option value="news">资讯</option>
            <option value="material">物料</option>
          </select>
        ) : (
          <nav className="tabs">
            <button
              className={`tab-button ${activeTab === 'news' ? 'active' : ''}`}
              onClick={() => setActiveTab('news')}
            >
              资讯
            </button>
            <button
              className={`tab-button ${activeTab === 'material' ? 'active' : ''}`}
              onClick={() => setActiveTab('material')}
            >
              物料
            </button>
          </nav>
        )}

        <section className="cards-container">
          {data.map((item) => (
            <article key={item.id} className="card">
              {showImages && (
                <div className="card-images">
                  {item.images.map((src, idx) => (
                    <img key={idx} src={src} alt={`${item.title} 图片${idx + 1}`} />
                  ))}
                </div>
              )}
              <div className="card-content">
                <time className="card-date">{item.date}</time>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.desc}</p>
              </div>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}





