'use client';

import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    inquiryType: '合作',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('发送中...');
    try {
      // 这里你可以改成你的API发送逻辑
      await new Promise((res) => setTimeout(res, 1500));
      setStatus('感谢您的联系！我们会尽快回复您。');
      setFormData({ name: '', email: '', message: '', inquiryType: '合作' });
    } catch {
      setStatus('发送失败，请稍后再试。');
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Great+Vibes&display=swap');

        :root {
          --roro-main: #FACBAA;
          --roro-accent: #A17494;
          --input-border: #A1749488;
          --input-focus-border: #FACBAA;
        }

        html, body {
          margin: 0;
          padding: 0;
          background: #fff;
          font-family: 'Playfair Display', serif;
          color: var(--roro-accent);
          overflow-x: hidden;
        }

        main {
          max-width: 720px;
          margin: 80px auto 140px;
          padding: 40px 32px 64px;
          box-sizing: border-box;
          border-radius: 16px;
          background: linear-gradient(180deg, #fff 0%, #fff7f3 100%);
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          user-select: text;
        }

        h1 {
          font-family: 'Great Vibes', cursive;
          font-size: 3rem;
          text-align: center;
          margin-bottom: 3rem;
          color: var(--roro-accent);
          text-shadow:
            0 0 8px var(--roro-accent)aa,
            0 0 16px var(--roro-accent)88;
          user-select: none;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        label {
          font-weight: 700;
          font-size: 1.1rem;
          margin-bottom: 6px;
          display: inline-block;
          color: var(--roro-accent);
        }

        select, input[type="text"], input[type="email"], textarea {
          width: 100%;
          padding: 12px 16px;
          font-family: 'Playfair Display', serif;
          font-size: 1rem;
          border: 2px solid var(--input-border);
          border-radius: 8px;
          background: #fff;
          color: var(--roro-accent);
          transition: border-color 0.3s ease;
          box-sizing: border-box;
          resize: vertical;
        }

        select:focus,
        input[type="text"]:focus,
        input[type="email"]:focus,
        textarea:focus {
          outline: none;
          border-color: var(--input-focus-border);
          box-shadow: 0 0 8px var(--roro-main);
        }

        textarea {
          min-height: 120px;
        }

        button {
          align-self: center;
          padding: 14px 48px;
          font-family: 'Great Vibes', cursive;
          font-size: 2rem;
          background-color: var(--roro-main);
          color: #fff;
          border: none;
          border-radius: 28px;
          cursor: pointer;
          box-shadow: 0 0 15px var(--roro-main);
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
          user-select: none;
          width: fit-content;
          min-width: 160px;
        }

        button:hover,
        button:focus-visible {
          background-color: #f9b89d;
          box-shadow: 0 0 25px var(--roro-main);
          outline: none;
        }

        .status-message {
          margin-top: 1rem;
          font-weight: 600;
          text-align: center;
          color: var(--roro-accent);
          min-height: 1.5em;
        }

        /* 移动端优化 */
        @media (max-width: 768px) {
          main {
            margin: 40px 16px 80px;
            padding: 32px 20px 48px;
            border-radius: 12px;
          }

          h1 {
            font-size: 2.2rem;
            margin-bottom: 2rem;
          }

          button {
            font-size: 1.6rem;
            padding: 12px 32px;
            min-width: 140px;
          }
        }
      `}</style>

      <main>
        <h1>联系我们</h1>
        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="inquiryType">意向类别</label>
          <select
            id="inquiryType"
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleChange}
            required
          >
            <option value="合作">合作</option>
            <option value="成为创作者">成为创作者</option>
          </select>

          <label htmlFor="name">姓名</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="您的姓名"
            value={formData.name}
            onChange={handleChange}
            required
            autoComplete="name"
          />

          <label htmlFor="email">邮箱</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@domain.com"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
          />

          <label htmlFor="message">留言内容</label>
          <textarea
            id="message"
            name="message"
            placeholder="请简要说明您的合作意向或创作者申请"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" aria-live="polite" aria-busy={status === '发送中...'}>
            提交
          </button>
        </form>

        <div className="status-message" role="alert" aria-live="polite">
          {status}
        </div>
      </main>
    </>
  );
}

