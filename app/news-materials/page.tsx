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

  // 控制是否显示图片，初期false，等你添加照片后改成true
  const [showImages, setShowImages] = useState(false);

  return (
    <>
      <style>{`
        :root {
          --champagne-gold: #D4AF7F;
          --nude-color: #E6D8C3;
          --bg-color: #fefcf8;
          --text-color: #333;
          --font-primary: 'Playfair Display', serif;
        }
        * {
          box-sizing: border-box;
        }
        body, html {
          margin: 0; padding: 0;
          background: var(--bg-color);
          color: var(--text-color);
          font-family: var(--font-primary);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        main {
          max-width: 1080px;
          margin: 0 auto;
          padding: 72px 24px 96px;
          user-select: none;
        }
        .tabs {
          display: flex;
          justify-content: center;
          gap: 28px;
          margin-bottom: 48px;
          padding: 0 16px;
          user-select: none;
        }
        .tab-button {
          flex: 1 1 auto;
          min-width: 140px;
          padding: 16px 0;
          font-weight: 700;
          font-size: 1.2rem;
          color: var(--champagne-gold);
          border: 2px solid var(--champagne-gold);
          border-radius: 36px;
          background: transparent;
          cursor: pointer;
          transition: background-color 0.3s ease, color 0.3s ease;
          text-align: center;
          user-select: none;
        }
        .tab-button.active,
        .tab-button:hover,
        .tab-button:focus-visible {
          background-color: var(--champagne-gold);
          color: #fff;
          outline: none;
          box-shadow: 0 0 12px var(--champagne-gold);
        }
        select.tab-select {
          width: 100%;
          padding: 14px 20px;
          font-size: 1.2rem;
          border-radius: 12px;
          border: 2px solid var(--champagne-gold);
          color: var(--champagne-gold);
          background-color: transparent;
          user-select: none;
          margin-bottom: 48px;
          cursor: pointer;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
        }
        .cards-container {
          display: grid;
          grid-template-columns: repeat(auto-fit,minmax(320px,1fr));
          gap: 36px;
        }
        .card {
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 8px 16px rgba(212,175,127,0.15);
          overflow: hidden;
          cursor: default;
          display: flex;
          flex-direction: column;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .card:hover,
        .card:focus-within {
          box-shadow: 0 12px 32px rgba(212,175,127,0.35);
          transform: translateY(-8px);
          outline: none;
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
          user-select: none;
          object-fit: cover;
          cursor: pointer;
          transition: transform 0.3s ease;
        }
        .card-images img:hover {
          transform: scale(1.06);
          box-shadow: 0 0 8px var(--champagne-gold);
        }
        .card-content {
          padding: 20px 24px 28px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .card-date {
          font-size: 0.9rem;
          font-weight: 600;
          color: #a38f56cc;
          margin-bottom: 8px;
          user-select: text;
        }
        .card-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--champagne-gold);
          margin-bottom: 12px;
          letter-spacing: 0.05em;
          user-select: text;
        }
        .card-desc {
          font-size: 1rem;
          color: #5b5b5bdd;
          line-height: 1.4;
          user-select: text;
          margin-bottom: 20px;
          flex-grow: 1;
        }
        .download-link {
          color: var(--champagne-gold);
          font-weight: 600;
          font-size: 1rem;
          text-decoration: underline;
          cursor: pointer;
          align-self: flex-start;
          user-select: none;
          transition: color 0.3s ease;
        }
        .download-link:hover,
        .download-link:focus-visible {
          color: #B68E37;
          outline: none;
        }
        @media (max-width: 768px) {
          main {
            padding: 48px 16px 72px;
          }
          .cards-container {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .card-images {
            padding: 12px;
          }
          .card-images img {
            height: 120px;
          }
          .tabs {
            gap: 24px;
            margin-bottom: 32px;
          }
          .tab-button {
            min-width: 120px;
            padding: 14px 0;
            font-size: 1.1rem;
          }
        }
      `}</style>

      <main>
        {isMobile ? (
          <select
            className="tab-select"
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value as 'news' | 'material')}
            aria-label="选择资讯或物料"
          >
            <option value="news">资讯</option>
            <option value="material">物料</option>
          </select>
        ) : (
          <nav className="tabs" role="tablist" aria-label="资讯物料分类切换">
            <button
              className={`tab-button ${activeTab === 'news' ? 'active' : ''}`}
              onClick={() => setActiveTab('news')}
              role="tab"
              aria-selected={activeTab === 'news'}
              tabIndex={activeTab === 'news' ? 0 : -1}
            >
              资讯
            </button>
            <button
              className={`tab-button ${activeTab === 'material' ? 'active' : ''}`}
              onClick={() => setActiveTab('material')}
              role="tab"
              aria-selected={activeTab === 'material'}
              tabIndex={activeTab === 'material' ? 0 : -1}
            >
              物料
            </button>
          </nav>
        )}

        <section
          className="cards-container"
          aria-live="polite"
          aria-relevant="additions"
        >
          {data.map((item) => (
            <article
              key={item.id}
              className="card"
              tabIndex={0}
              aria-label={`${item.title}, 日期：${item.date}`}
            >
              {showImages && (
                <div className="card-images">
                  {item.images.map((src, idx) => (
                    <img
                      key={idx}
                      src={src}
                      alt={`${item.title} 图片${idx + 1}`}
                      draggable={false}
                      loading="lazy"
                    />
                  ))}
                </div>
              )}
              <div className="card-content">
                <time className="card-date">{item.date}</time>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.desc}</p>
                {'downloadLink' in item && item.downloadLink && (
                  <a
                    href={item.downloadLink}
                    className="download-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    下载相关文件
                  </a>
                )}
              </div>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}



