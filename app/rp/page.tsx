'use client';

import React, { useState } from 'react';

export default function RoroRPPage() {
  const [ICP, setICP] = useState(50);
  const [ECP, setECP] = useState(40);
  const [RRB, setRRB] = useState(30);

  const totalRP = ICP + ECP + RRB;

  const creativeShare = ((ICP + RRB) / totalRP) * 100;
  const privilegeShare = (ECP / totalRP) * 100;
  const ecosystemShare = ((RRB + ECP) / totalRP) * 100;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Great+Vibes&display=swap');

        :root {
          --roro-main: #FACBAA;
          --roro-accent: #A17494;
        }

        body {
          margin: 0;
          padding: 0;
          font-family: 'Playfair Display', serif;
          background: #ffffff;
          color: var(--roro-accent);
        }

        .page-title {
          font-family: 'Great Vibes', cursive;
          font-size: 3.6rem;
          text-align: center;
          margin: 3rem 0;
          color: var(--roro-accent);
          text-shadow: 0 0 8px var(--roro-accent)aa, 0 0 16px var(--roro-accent)88;
        }

        .rp-container {
          max-width: 720px;
          margin: 0 auto 140px;
          padding: 40px 32px;
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .input-section, .output-section {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          background: linear-gradient(to bottom, #fff, #fff);
          padding: 20px;
          border-radius: 24px;
          box-shadow: 0 5px 15px rgba(161,116,148,0.3);
        }

        .slider-container {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .slider-container input[type=range] {
          -webkit-appearance: none;
          width: 100%;
          height: 12px;
          border-radius: 6px;
          background: #FACBAA33;
          outline: none;
        }

        .slider-container input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 24px;
          height: 24px;
          background: var(--roro-main);
          border: 3px solid var(--roro-accent);
          border-radius: 50%;
          cursor: pointer;
        }

        .core-wheel {
          position: relative;
          width: 200px;
          height: 200px;
          margin: 0 auto;
          border-radius: 50%;
          background: radial-gradient(circle, #A17494 0%, #6E0FF5 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          text-align: center;
          box-shadow: 0 0 30px #FACBAA88;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .output-item {
          display: flex;
          justify-content: space-between;
          padding: 12px 16px;
          border-radius: 16px;
          background: #FFFFFF;
          border-left: 4px solid var(--roro-accent);
          box-shadow: 0 5px 15px rgba(161,116,148,0.2);
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .page-title { font-size: 2.6rem; }
          .rp-container { padding: 24px 16px; }
        }
      `}</style>

      <main className="rp-container">
        <h1 className="page-title">⚡ RORO RP 系统</h1>

        {/* 输入板块 */}
        <div className="input-section">
          <Slider label="ICP (创意贡献)" value={ICP} setValue={setICP} />
          <Slider label="ECP (执行任务)" value={ECP} setValue={setECP} />
          <Slider label="RRB (作品复用)" value={RRB} setValue={setRRB} />
        </div>

        {/* 核心飞轮 */}
        <div className="core-wheel">
          ⚡<br/>ENGINE
        </div>

        {/* 输出板块 */}
        <div className="output-section">
          <div className="output-item">
            <span>创意收益比例</span>
            <span>{creativeShare.toFixed(0)}%</span>
          </div>
          <div className="output-item">
            <span>特权占比</span>
            <span>{privilegeShare.toFixed(0)}%</span>
          </div>
          <div className="output-item">
            <span>生态分润</span>
            <span>{ecosystemShare.toFixed(0)}%</span>
          </div>
          <div className="output-item">
            <span>总 RP</span>
            <span>{totalRP}</span>
          </div>
        </div>
      </main>
    </>
  );
}

function Slider({ label, value, setValue }: { label: string; value: number; setValue: (v:number)=>void }) {
  return (
    <div className="slider-container">
      <label>{label}: {value}</label>
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
    </div>
  );
}






