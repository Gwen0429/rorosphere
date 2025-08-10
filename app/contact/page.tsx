'use client';

import React, { useState } from 'react';
import LogoSpinner from '@/components/LogoSpinner';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    option: 'creator',
    name: '',
    email: '',
    subject: '',
    message: '',
    file: null as File | null,
  });

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setFormState((prev) => ({ ...prev, file: files[0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSending(true);
    setSent(false);

    try {
      const formData = new FormData();
      formData.append('option', formState.option);
      formData.append('name', formState.name.trim());
      formData.append('email', formState.email.trim());
      formData.append('subject', formState.subject.trim());
      formData.append('message', formState.message.trim());
      if (formState.file) formData.append('file', formState.file);

      const res = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error('发送失败，请稍后重试');

      setSent(true);
      setFormState({
        option: 'creator',
        name: '',
        email: '',
        subject: '',
        message: '',
        file: null,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : '未知错误');
    } finally {
      setSending(false);
    }
  };

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
          align-items: flex-start;
          user-select: text;
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
          text-align: left;
          line-height: 1;
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
        }

        .info-section strong {
          color: var(--roro-accent);
          font-weight: 600;
        }

        form {
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          gap: 1.4rem;
        }

        label {
          font-weight: 600;
          color: var(--roro-accent);
          user-select: none;
          font-size: 1rem;
        }

        select,
        input[type="text"],
        input[type="email"],
        textarea {
          font-family: inherit;
          font-size: 1rem;
          padding: 10px 14px;
          border: 1.5px solid var(--roro-border);
          border-radius: 12px;
          color: var(--roro-text);
          transition: border-color 0.3s ease;
          resize: vertical;
          user-select: text;
          width: 100%;
          box-sizing: border-box;
        }

        select:focus,
        input[type="text"]:focus,
        input[type="email"]:focus,
        textarea:focus {
          outline: none;
          border-color: var(--roro-main);
          box-shadow: 0 0 8px var(--roro-main);
        }

        textarea {
          min-height: 140px;
        }

        input[type="file"] {
          border: none;
          padding: 0;
          color: var(--roro-text);
          cursor: pointer;
        }

        button {
          margin-top: 1rem;
          padding: 14px 0;
          background-color: var(--roro-main);
          border: none;
          border-radius: 20px;
          color: var(--roro-accent);
          font-weight: 700;
          font-size: 1.2rem;
          cursor: pointer;
          user-select: none;
          box-shadow:
            0 0 15px var(--roro-main),
            0 0 30px var(--roro-accent);
          transition: background-color 0.3s ease;
        }
        button:disabled {
          background-color: #f9ded3;
          cursor: not-allowed;
          box-shadow: none;
          color: var(--roro-accent);
        }
        button:hover:not(:disabled),
        button:focus-visible:not(:disabled) {
          background-color: var(--roro-accent);
          color: var(--roro-main);
          outline: none;
          box-shadow:
            0 0 20px var(--roro-accent),
            0 0 35px var(--roro-main);
        }

        .error-msg {
          color: var(--roro-error);
          font-weight: 600;
          font-size: 0.95rem;
          user-select: text;
          margin-top: -0.6rem;
          margin-bottom: 0.8rem;
        }

        .success-msg {
          text-align: center;
          font-weight: 600;
          color: var(--roro-main);
          font-size: 1.2rem;
          user-select: none;
          margin-top: 2rem;
          text-shadow:
            0 0 8px var(--roro-main),
            0 0 16px var(--roro-accent);
        }

        .sending-container {
          margin-top: 2rem;
          width: 100%;
          display: flex;
          justify-content: center;
          user-select: none;
        }

        @media (max-width: 768px) {
          main {
            margin: 40px 16px 80px;
            padding: 24px 12px 40px;
            max-width: 100vw;
            box-sizing: border-box;
            overflow-x: hidden;
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
            感谢您对ROROSPHERE的关注！请通过以下表单与我们联系。<br />
            <strong>邮件主题请务必注明来意。</strong><br />
            <br />
            <strong>如果您希望与RORO合作：</strong>请详细介绍您自己及合作内容，我们会认真评估并在一周内回复。<br />
            <br />
            <strong>如果您希望成为RORO创作者：</strong>请尽可能系统介绍自己、作品及理念。申请成功后，我们会发送电子邀请函，包含发布创意申请的专属邮箱和邀请码。<br />
            <br />
            我们珍视每一份联系，期待与您携手创造未来。
          </p>
        </section>

        <form onSubmit={handleSubmit} noValidate aria-live="polite" aria-busy={sending}>
          <label htmlFor="option">您的需求</label>
          <select
            id="option"
            name="option"
            value={formState.option}
            onChange={handleChange}
            required
            aria-required="true"
          >
            <option value="creator">我想成为RORO创作者</option>
            <option value="collaboration">我想与RORO合作</option>
          </select>

          <label htmlFor="name">姓名</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formState.name}
            onChange={handleChange}
            required
            aria-required="true"
          />

          <label htmlFor="email">邮箱</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
            required
            aria-required="true"
          />

          <label htmlFor="subject">主题</label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={formState.subject}
            onChange={handleChange}
            required
            aria-required="true"
          />

          <label htmlFor="message">详细信息</label>
          <textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            required
            aria-required="true"
          />

          <label htmlFor="file">附件 (选填)</label>
          <input
            id="file"
            name="file"
            type="file"
            onChange={handleFileChange}
            accept=".jpg,.jpeg,.png,.pdf,.doc,.docx,.txt"
          />

          {error && (
            <p className="error-msg" role="alert" tabIndex={-1}>
              {error}
            </p>
          )}

          <button type="submit" disabled={sending}>
            {sending ? '发送中...' : '发送'}
          </button>
        </form>

        {sending && (
          <div className="sending-container" aria-live="assertive" aria-label="发送中动画">
            <LogoSpinner />
          </div>
        )}

        {sent && !sending && (
          <p
            className="success-msg"
            role="status"
            aria-live="polite"
            tabIndex={-1}
          >
            感谢您的联系，我们会尽快回复！
          </p>
        )}
      </main>
    </>
  );
}
