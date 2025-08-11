'use client';

import React from 'react';

export default function ContactPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&display=swap');

        :root {
          --roro-main: #FACBAA;
          --roro-accent: #A17494;
          --roro-bg: #FFFFFF;
          --roro-text: #3B2E2E;
          --roro-border: #d9c7bd;
          --roro-error: #cc4b37;
        }

        html, body {
          margin: 0; padding: 0;
          background: var(--roro-bg);
          color: var(--roro-text);
          font-family: '苹方', 'PingFang SC', 'Source Han Sans CN', 'Noto Sans SC', 'Microsoft YaHei', sans-serif;
          overflow-x: hidden;
        }

        main {
          max-width: 720px;
          width: 100%;
          margin: 80px auto 140px;
          padding: 40px 32px 64px;
          box-sizing: border-box;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center; /* 这里改成居中 */
          user-select: text;
          overflow-wrap: break-word;
          text-align: center; /* 内容居中 */
        }

        h1.page-title {
          font-family: 'Great Vibes', cursive;
          font-size: 3.6rem;
          color: var(--roro-accent);
          margin-bottom: 3rem;
          user-select: none;
          text-shadow:
            0 0 8px var(--roro-accent)aa,
            0 0 16px var(--roro-accent)88;
          width: 100%;
          line-height: 1;
          /* 去掉text-align: left，继承居中 */
        }

        .info-section {
          margin-bottom: 2.8rem;
          color: #5a4a4a;
          font-weight: 300;
          font-size: 1.1rem;
          line-height: 1.6;
          letter-spacing: 0.02em;
          user-select: text;
          width: 100%;
          /* 让p内容居中 */
          text-align: center;
        }

        .info-section strong {
          color: var(--roro-accent);
          font-weight: 600;
        }

        .email-display {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--roro-accent);
          user-select: text;
          display: inline-block;
          text-decoration: none; /* 取消下划线 */
        }

        .email-display a {
          color: var(--roro-accent);
          text-decoration: none; /* 取消下划线 */
        }
        .email-display a:focus,
        .email-display a:hover {
          outline: none;
          color: var(--roro-accent);
        }

        @media (max-width: 768px) {
          main {
            max-width: 95vw;
            margin: 40px auto 80px;
            padding: 24px 12px 40px;
          }
          h1.page-title {
            font-size: 2.8rem;
            margin-bottom: 2rem;
          }
        }
      `}</style>

      <main>
        <h1 className="page-title" tabIndex={-1}>
          Contact Us
        </h1>

        <section className="info-section" aria-label="联系我们说明">
          <p>
            感谢您对ROROSPHERE的关注！<br />
            <strong>我们不再使用在线表单，</strong>请直接发送邮件至以下地址。<br /><br />
            <strong>如果您希望与RORO合作：</strong>请详细介绍您自己及合作内容，我们会认真评估并在一周内回复。<br /><br />
            <strong>如果您希望成为RORO创作者：</strong>请系统介绍自己、作品及理念。申请成功后，我们会发送电子邀请函，包含 RORO ID 和专属邀请码，用于解锁创作者特权。<br /><br />
            我们珍视每一份联系，期待与您携手创造未来。
          </p>
          <p>
            <span className="email-display">
              <a href="mailto:goodmanjingwenzhou@icloud.com">goodmanjingwenzhou@icloud.com</a>
            </span>
          </p>
        </section>
      </main>
    </>
  );
}

