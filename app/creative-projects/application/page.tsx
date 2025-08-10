'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ApplicationPage() {
  const searchParams = useSearchParams();
  const roroIDFromUrl = searchParams.get('roroID') || '';

  const [formState, setFormState] = useState({
    roroID: '',
    name: '',
    email: '',
    subject: '',
    message: '',
    file: null as File | null,
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  // 页面加载后将URL参数的roroID写入formState
  useEffect(() => {
    if (roroIDFromUrl) {
      setFormState(prev => ({ ...prev, roroID: roroIDFromUrl }));
    }
  }, [roroIDFromUrl]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = (e.target as HTMLInputElement).files;
    if (files && files.length > 0) {
      setFormState(prev => ({ ...prev, file: files[0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSending(true);

    try {
      const formData = new FormData();
      formData.append('roroID', formState.roroID);
      formData.append('name', formState.name);
      formData.append('email', formState.email);
      formData.append('subject', formState.subject);
      formData.append('message', formState.message);
      if (formState.file) formData.append('file', formState.file);

      const res = await fetch('/api/application', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error('提交失败，请稍后重试');

      setSent(true);
      setFormState({
        roroID: formState.roroID, // 保留roroID方便再次提交
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

        :root {
          --roro-main: #FACBAA;
          --roro-accent: #A17494;
          --roro-bg: #FFFFFF;
          --roro-text: #3B2E2E;
          --roro-border: #d9c7bd;
          --roro-error: #A17454;
          --roro-success-bg: #FAE6DC;
          --roro-success-color: #8B5E6B;
        }

        html, body {
          margin: 0;
          padding: 0;
          background: var(--roro-bg);
          color: var(--roro-text);
          font-family: '苹方', 'PingFang SC', 'Source Han Sans CN', 'Noto Sans SC', 'Microsoft YaHei', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        main {
          max-width: 600px;
          margin: 80px auto 120px;
          padding: 0 20px;
          box-sizing: border-box;
        }

        h1.page-title {
          font-family: 'Great Vibes', cursive;
          font-size: 3.6rem;
          text-align: center;
          margin-bottom: 3rem;
          color: var(--roro-accent);
          user-select: none;
          text-shadow:
            0 0 8px var(--roro-accent)aa,
            0 0 16px var(--roro-accent)88;
          width: 100%;
        }

        p.description {
          text-align: center;
          font-weight: 300;
          font-size: 1.15rem;
          color: #6b6b6bdd;
          margin-bottom: 3rem;
          line-height: 1.6;
          letter-spacing: 0.03em;
          user-select: none;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        label {
          font-weight: 600;
          color: var(--roro-accent);
          user-select: none;
          font-size: 1rem;
        }

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
        }

        input[type="text"]:focus,
        input[type="email"]:focus,
        textarea:focus {
          outline: none;
          border-color: var(--roro-main);
          box-shadow: 0 0 8px var(--roro-main);
        }

        textarea {
          min-height: 120px;
        }

        input[type="file"] {
          border: none;
          padding: 0;
          color: var(--roro-text);
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
          text-align: center;
        }

        .success-msg {
          background-color: var(--roro-success-bg);
          color: var(--roro-success-color);
          text-align: center;
          font-weight: 600;
          font-size: 1.1rem;
          user-select: none;
          margin-top: 2rem;
          padding: 0.8rem 1rem;
          border-radius: 12px;
          box-shadow:
            0 0 8px var(--roro-main),
            0 0 16px var(--roro-accent);
        }

        @media (max-width: 480px) {
          main {
            margin: 60px 16px 80px;
            padding: 0 12px;
          }
          h1.page-title {
            font-size: 3rem;
            margin-bottom: 2.5rem;
          }
          button {
            font-size: 1rem;
            padding: 12px 0;
          }
        }
      `}</style>

      <main>
        <h1 className="page-title">发布我的创意项目</h1>

        <p className="description">
          申请额外需要填写您的 RORO ID。请详细说明您的创意项目内容，我们会在一周内回复您。
        </p>

        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="roroID">专属 RORO ID</label>
          <input
            id="roroID"
            name="roroID"
            type="text"
            value={formState.roroID}
            onChange={handleChange}
            required
            aria-required="true"
            readOnly={Boolean(roroIDFromUrl)} // 如果URL带了id就不能修改
          />

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

          <label htmlFor="message">详细描述</label>
          <textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            required
            aria-required="true"
          />

          <label htmlFor="file">附件（选填）</label>
          <input
            id="file"
            name="file"
            type="file"
            onChange={handleFileChange}
            accept=".jpg,.jpeg,.png,.pdf,.doc,.docx,.txt"
          />

          {error && <p className="error-msg" role="alert">{error}</p>}

          <button type="submit" disabled={sending}>
            {sending ? '发送中...' : '提交申请'}
          </button>
        </form>

        {sent && (
          <p className="success-msg" role="status" aria-live="polite">
            ROROSPHERE总部已收到 RORO ID "{formState.roroID}" 发送的创意申请。
          </p>
        )}
      </main>
    </>
  );
}

