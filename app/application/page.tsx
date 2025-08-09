'use client';

import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');
    try {
      const res = await fetch('/api/send-application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        const data = await res.json();
        setErrorMsg(data.error || '提交失败，请稍后重试');
        setStatus('error');
      }
    } catch (err) {
      setErrorMsg('网络错误，请稍后重试');
      setStatus('error');
    }
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Great+Vibes&display=swap');

        :root {
          --roro-main: #FACBAA;
          --roro-accent: #A17494;
          --bg-color: #fff7f3;
          --text-color: #4b3a46;
          --input-bg: #fff;
          --input-border: #a1749466;
          --input-focus: #facbaaaa;
        }

        html, body {
          margin: 0; padding: 0;
          font-family: 'Playfair Display', serif;
          background: var(--bg-color);
          color: var(--text-color);
          overflow-x: hidden;
        }

        main {
          max-width: 680px;
          margin: 80px auto 120px;
          padding: 32px 28px 56px;
          background: #fff;
          border-radius: 20px;
          box-shadow:
            0 0 14px var(--roro-main),
            0 0 24px var(--roro-accent);
          box-sizing: border-box;
          user-select: none;
          position: relative;
        }

        h1 {
          font-family: 'Great Vibes', cursive;
          font-size: 3.6rem;
          color: var(--roro-accent);
          text-align: center;
          margin-bottom: 40px;
          user-select: none;
          text-shadow:
            0 0 8px var(--roro-accent)aa,
            0 0 16px var(--roro-accent)88;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 22px;
          user-select: text;
        }

        label {
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--roro-accent);
          user-select: none;
          margin-bottom: 6px;
          display: block;
        }

        input, textarea {
          width: 100%;
          background: var(--input-bg);
          border: 2px solid var(--input-border);
          border-radius: 12px;
          font-size: 1.05rem;
          padding: 10px 14px;
          color: var(--text-color);
          transition: border-color 0.3s ease;
          font-family: 'Playfair Display', serif;
          resize: vertical;
        }
        input:focus, textarea:focus {
          outline: none;
          border-color: var(--roro-main);
          box-shadow: 0 0 10px var(--roro-main);
        }
        textarea {
          min-height: 120px;
          line-height: 1.5;
        }

        button {
          background: var(--roro-main);
          color: #fff;
          border: none;
          padding: 14px 0;
          font-size: 1.3rem;
          font-weight: 700;
          border-radius: 16px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          user-select: none;
          box-shadow:
            0 0 8px var(--roro-main),
            0 0 14px var(--roro-accent);
        }
        button:hover, button:focus-visible {
          background: var(--roro-accent);
          outline: none;
        }
        button:disabled {
          background: #f6d6c3cc;
          cursor: not-allowed;
          box-shadow: none;
        }

        .status-message {
          text-align: center;
          font-weight: 600;
          font-size: 1.1rem;
          margin-top: 16px;
          color: var(--roro-accent);
          user-select: text;
        }

        .error-message {
          color: #bb3c3c;
        }

        /* 移动端响应 */
        @media (max-width: 768px) {
          main {
            margin: 40px 16px 80px;
            padding: 24px 20px 48px;
            border-radius: 14px;
          }
          h1 {
            font-size: 2.8rem;
            margin-bottom: 32px;
          }
          label {
            font-size: 1rem;
          }
          input, textarea {
            font-size: 1rem;
          }
          button {
            font-size: 1.1rem;
            padding: 12px 0;
          }
          .status-message {
            font-size: 1rem;
          }
        }
      `}</style>

      <main>
        <h1>Submit Your Application</h1>
        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="name">Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
            disabled={status === 'sending'}
          />

          <label htmlFor="email">Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            disabled={status === 'sending'}
          />

          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            autoComplete="tel"
            disabled={status === 'sending'}
          />

          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            disabled={status === 'sending'}
          />

          <button type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Submit'}
          </button>

          {status === 'success' && (
            <p className="status-message">Thank you! Your application has been sent.</p>
          )}
          {status === 'error' && (
            <p className="status-message error-message">{errorMsg}</p>
          )}
        </form>
      </main>
    </>
  );
}