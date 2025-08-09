'use client';

import React, { useState } from 'react';

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError('');
    const formData = new FormData(e.target);

    try {
      // 你换成实际action地址
      const res = await fetch('https://formspree.io/f/yourformid', {
        method: 'POST',
        body: formData,
      });
      if (res.ok) {
        setSuccess(true);
        e.target.reset();
      } else {
        throw new Error('提交失败');
      }
    } catch (err) {
      setError(err.message || '提交错误');
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <style>{`
        :root {
          --roro-main: #FACBAA;
          --roro-accent: #A17494;
        }
        main {
          max-width: 720px;
          margin: 80px auto 140px;
          padding: 40px 32px 64px;
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          font-family: 'Playfair Display', serif;
          color: var(--roro-accent);
          user-select: none;
        }
        h1 {
          font-family: 'Great Vibes', cursive;
          font-size: 3.6rem;
          text-align: center;
          margin-bottom: 3rem;
          user-select: none;
          text-shadow:
            0 0 8px var(--roro-accent)aa,
            0 0 16px var(--roro-accent)88;
        }
        form {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        label {
          font-weight: 600;
          font-size: 1.1rem;
          margin-bottom: 6px;
        }
        input[type="text"],
        input[type="email"],
        textarea,
        input[type="file"] {
          width: 100%;
          padding: 12px 16px;
          border: 1.5px solid var(--roro-main);
          border-radius: 8px;
          font-family: 'Playfair Display', serif;
          font-size: 1rem;
          color: #444;
          resize: vertical;
        }
        input[type="file"] {
          padding: 6px 16px;
        }
        button {
          align-self: center;
          background-color: var(--roro-main);
          color: white;
          font-family: 'Great Vibes', cursive;
          font-size: 2rem;
          padding: 14px 36px;
          border: none;
          border-radius: 28px;
          box-shadow: 0 0 15px var(--roro-main);
          cursor: pointer;
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
          user-select: none;
        }
        button:hover,
        button:focus-visible {
          background-color: #f9b89d;
          box-shadow: 0 0 25px var(--roro-main);
          outline: none;
        }
        .status {
          text-align: center;
          font-weight: 500;
          margin-top: 1rem;
          color: var(--roro-accent);
        }
        @media (max-width: 768px) {
          main {
            margin: 40px 16px 80px;
            padding: 24px 16px 40px;
          }
          h1 {
            font-size: 2.6rem;
            margin-bottom: 2rem;
          }
        }
      `}</style>

      <main>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div>
            <label htmlFor="name">姓名 / Name</label>
            <input id="name" name="name" type="text" required placeholder="你的名字" />
          </div>

          <div>
            <label htmlFor="email">邮箱 / Email</label>
            <input id="email" name="email" type="email" required placeholder="your@email.com" />
          </div>

          <div>
            <label htmlFor="message">留言 / Message</label>
            <textarea id="message" name="message" rows="5" required placeholder="告诉我们你的想法..." />
          </div>

          <div>
            <label htmlFor="attachment">附件（可选）/ Attachment (Optional)</label>
            <input id="attachment" name="attachment" type="file" />
          </div>

          <button type="submit" disabled={sending}>{sending ? '发送中...' : '发送'}</button>
          {success && <div className="status">感谢你的留言，我们会尽快联系你！</div>}
          {error && <div className="status" style={{color: 'red'}}>{error}</div>}
        </form>
      </main>
    </>
  );
}
