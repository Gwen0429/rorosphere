'use client';

import React, { useState } from 'react';
import LogoSpinner from '@/components/LogoSpinner'; // 确认路径

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

        /* 专属作用域，避免污染全局 */
        .contact-page {
          font-family: '苹方', 'PingFang SC', 'Source Han Sans CN', 'Noto Sans SC', 'Microsoft YaHei', sans-serif;
          color: #3B2E2E;
          background: #FFFFFF;
          user-select: text;
        }

        .contact-page *,
        .contact-page *::before,
        .contact-page *::after {
          box-sizing: border-box;
        }

        .contact-page main {
          max-width: 720px;
          width: 100%;
          margin: 80px auto 140px;
          padding: 40px 32px 64px;
          overflow-x: hidden; /* 仅限制这里 */
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .contact-page h1.page-title {
          font-family: 'Great Vibes', cursive;
          font-size: 3.6rem;
          color: #A17494;
          margin-bottom: 3rem;
          user-select: none;
          text-shadow:
            0 0 8px #A17494aa,
            0 0 16px #A1749488;
          width: 100%;
          text-align: left;
          line-height: 1;
        }

        .contact-page .info-section {
          margin-bottom: 2.8rem;
          color: #5a4a4a;
          font-weight: 300;
          font-size: 1.1rem;
          line-height: 1.6;
          letter-spacing: 0.02em;
          width: 100%;
        }

        .contact-page .info-section strong {
          color: #A17494;
          font-weight: 600;
        }

        .contact-page form {
          width: 100%;
          max-width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1.4rem;
        }

        .contact-page label {
          font-weight: 600;
          color: #A17494;
          user-select: none;
          font-size: 1rem;
        }

        .contact-page select,
        .contact-page input[type="text"],
        .contact-page input[type="email"],
        .contact-page textarea {
          font-family: inherit;
          font-size: 1rem;
          padding: 10px 14px;
          border: 1.5px solid #d9c7bd;
          border-radius: 12px;
          color: #3B2E2E;
          transition: border-color 0.3s ease;
          resize: vertical;
          user-select: text;
          width: 100%;
        }

        .contact-page select:focus,
        .contact-page input[type="text"]:focus,
        .contact-page input[type="email"]:focus,
        .contact-page textarea:focus {
          outline: none;
          border-color: #FACBAA;
          box-shadow: 0 0 8px #FACBAA;
        }

        .contact-page textarea {
          min-height: 140px;
        }

        .contact-page input[type="file"] {
          border: none;
          padding: 0;
          color: #3B2E2E;
          cursor: pointer;
          max-width: 100%;
        }

        .contact-page button {
          margin-top: 1rem;
          padding: 14px 0;
          background-color: #FACBAA;
          border: none;
          border-radius: 20px;
          color: #A17494;
          font-weight: 700;
          font-size: 1.2rem;
          cursor: pointer;
          user-select: none;
          box-shadow:
            0 0 15px #FACBAA,
            0 0 30px #A17494;
          transition: background-color 0.3s ease;
          width: 100%;
        }
        .contact-page button:disabled {
          background-color: #f9ded3;
          cursor: not-allowed;
          box-shadow: none;
          color: #A17494;
        }
        .contact-page button:hover:not(:disabled),
        .contact-page button:focus-visible:not(:disabled) {
          background-color: #A17494;
          color: #FACBAA;
          outline: none;
          box-shadow:
            0 0 20px #A17494,
            0 0 35px #FACBAA;
        }

        .contact-page .error-msg {
          color: #cc4b37;
          font-weight: 600;
          font-size: 0.95rem;
          user-select: text;
          margin-top: -0.6rem;
          margin-bottom: 0.8rem;
        }

        .contact-page .success-msg {
          text-align: center;
          font-weight: 600;
          color: #FACBAA;
          font-size: 1.2rem;
          user-select: none;
          margin-top: 2rem;
          text-shadow:
            0 0 8px #FACBAA,
            0 0 16px #A17494;
        }

        .contact-page .sending-container {
          margin-top: 2rem;
          width: 100%;
          display: flex;
          justify-content: center;
          user-select: none;
        }

        /* 移动端适配 */
        @media (max-width: 768px) {
          .contact-page main {
            margin: 40px 16px 80px;
            padding: 24px 16px 40px;
            max-width: 100%;
          }
          .contact-page h1.page-title {
            font-size: 2.4rem;
            margin-bottom: 1.8rem;
          }
          .contact-page form {
            gap: 1rem;
          }
          .contact-page textarea {
            min-height: 120px;
          }
          .contact-page button {
            padding: 14px 24px;
            font-size: 1.1rem;
          }
          .contact-page input[type="file"] {
            max-width: 100%;
          }
        }
      `}</style>

      <main className="contact-page" tabIndex={-1}>
        <h1 className="page-title">
          Contact Us
        </h1>

        <section className="info-section" aria-label="联系我们说明">
          <p>
            感谢您对ROROSPHERE的关注！请通过以下表单与我们联系。<br />
            <strong>邮件主题请务必注明来意。</strong><br /><br />
            <strong>如果您希望与RORO合作：</strong>请详细介绍您自己及合作内容，我们会认真评估并在一周内回复。<br /><br />
            <strong>如果您希望成为RORO创作者：</strong>请尽可能系统介绍自己、作品及理念。申请成功后，我们会发送电子邀请函，包含发布创意申请的专属邮箱和邀请码。<br /><br />
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