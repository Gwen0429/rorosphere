'use client';

import React, { useState } from 'react';

interface FormState {
  name: string;
  idea: string;
  wechat: string;
  email: string;
  phone: string;
  files: File[];
}

export default function PublishPage() {
  const [form, setForm] = useState<FormState>({
    name: '',
    idea: '',
    wechat: '',
    email: '',
    phone: '',
    files: [],
  });

  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);

  // 处理输入变化
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 处理文件选择
  const handleFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const filesArray = Array.from(e.target.files);
    setForm((prev) => ({
      ...prev,
      files: filesArray,
    }));
  };

  // 校验联系方式三选二
  const validateContact = (): boolean => {
    const filledCount = [form.wechat, form.email, form.phone].filter(
      (v) => v.trim() !== ''
    ).length;
    return filledCount >= 2;
  };

  // 提交表单
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!form.name.trim() || !form.idea.trim()) {
      setError('请填写您的姓名和创意内容');
      return;
    }

    if (!validateContact()) {
      setError('请至少填写两项联系方式（微信、邮箱、电话）');
      return;
    }

    setSubmitting(true);

    try {
      // 目前不上传文件，后端支持时可以改成multipart/form-data
      const payload = {
        name: form.name,
        idea: form.idea,
        wechat: form.wechat,
        email: form.email,
        phone: form.phone,
      };

      const res = await fetch('/api/send-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('提交失败，请稍后再试');

      setSuccess(true);
      setForm({
        name: '',
        idea: '',
        wechat: '',
        email: '',
        phone: '',
        files: [],
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('提交失败，请稍后重试');
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <style>{`
        :root {
          --champagne-gold: #D4AF7F;
          --champagne-gold-alpha: #D4AF7Faa;
          --champagne-gold-alpha-soft: #D4AF7F66;
          --border-color: #B68E37;
          --bg-color: #f9f6f2;
          --text-color-dark: #3e2f1c;
          --text-color-light: #6b6b6bdd;
          --btn-bg: linear-gradient(145deg, #f9f6f2, #efe7db 40%, #d4af7f 60%, #e9ddc8);
          --btn-hover-shadow: 0 0 28px var(--champagne-gold-alpha), 0 0 48px var(--champagne-gold-alpha-soft);
          --error-color: #b04545;
          --success-color: #4a774a;
        }
        form {
          max-width: 520px;
          margin: 0 auto;
          background: var(--bg-color);
          border-radius: 14px;
          padding: 28px 30px 36px;
          box-shadow:
            inset 0 2px 6px rgba(212, 175, 127, 0.3),
            0 0 8px rgba(212, 175, 127, 0.15);
          user-select: none;
          font-family: 'Playfair Display', serif;
          color: var(--text-color-dark);
        }
        h2 {
          font-size: 2.2rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin-bottom: 24px;
          color: var(--border-color);
          user-select: text;
          text-align: center;
        }
        label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          font-size: 1rem;
          color: var(--text-color-dark);
          user-select: text;
        }
        input[type="text"],
        input[type="email"],
        input[type="tel"],
        textarea {
          width: 100%;
          padding: 12px 14px;
          border: 2px solid var(--champagne-gold);
          border-radius: 10px;
          font-size: 1rem;
          font-family: 'Playfair Display', serif;
          color: var(--text-color-dark);
          background-color: #fff;
          resize: vertical;
          transition: border-color 0.3s ease;
          outline-offset: 2px;
          user-select: text;
        }
        input[type="text"]:focus,
        input[type="email"]:focus,
        input[type="tel"]:focus,
        textarea:focus {
          border-color: var(--border-color);
          outline: none;
          box-shadow: var(--btn-hover-shadow);
        }
        textarea {
          min-height: 100px;
          line-height: 1.6;
        }
        .input-group {
          margin-bottom: 20px;
        }
        .files-input {
          border: 2px solid var(--champagne-gold);
          border-radius: 10px;
          padding: 8px 12px;
          background: #fff;
          font-size: 1rem;
          color: var(--text-color-dark);
          cursor: pointer;
          transition: box-shadow 0.3s ease, border-color 0.3s ease;
          user-select: none;
        }
        .files-input:hover,
        .files-input:focus {
          border-color: var(--border-color);
          box-shadow: var(--btn-hover-shadow);
          outline: none;
        }
        .files-list {
          margin-top: 8px;
          font-size: 0.9rem;
          color: var(--text-color-light);
          user-select: text;
          max-height: 120px;
          overflow-y: auto;
          border: 1px solid var(--champagne-gold-alpha-soft);
          border-radius: 8px;
          padding: 8px 10px;
          background: #fdfbf5;
        }
        .files-list li {
          margin-bottom: 6px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .contact-group {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 20px;
        }
        .contact-group > div {
          flex: 1 1 45%;
          min-width: 180px;
          display: flex;
          flex-direction: column;
        }
        button[type="submit"] {
          width: 100%;
          padding: 14px 0;
          background: var(--btn-bg);
          border: none;
          border-bottom: 4px solid var(--border-color);
          border-radius: 30px;
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-color-dark);
          cursor: pointer;
          box-shadow: none;
          transition:
            box-shadow 0.3s ease,
            transform 0.3s ease,
            background-position 2.5s linear;
          user-select: none;
        }
        button[type="submit"]:hover,
        button[type="submit"]:focus-visible {
          box-shadow: var(--btn-hover-shadow);
          border-color: #b68e37;
          outline: none;
          transform: translateY(-6px);
        }
        .error-message {
          color: var(--error-color);
          font-weight: 600;
          margin-bottom: 20px;
          user-select: text;
          text-align: center;
        }
        .success-message {
          color: var(--border-color);
          font-weight: 700;
          margin-bottom: 20px;
          user-select: text;
          text-align: center;
          font-size: 1.2rem;
        }

        @media (max-width: 600px) {
          .contact-group > div {
            flex: 1 1 100%;
          }
          form {
            padding: 24px 20px 30px;
          }
        }
      `}</style>

      <form onSubmit={handleSubmit} noValidate>
        <h2>发布你的创意申请</h2>

        {error && (
          <p className="error-message" role="alert">
            {error}
          </p>
        )}
        {success && (
          <p className="success-message" role="status">
            提交成功！感谢你的创意分享。
          </p>
        )}

        <div className="input-group">
          <label htmlFor="name">姓名 *</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
            autoComplete="name"
          />
        </div>

        <div className="input-group">
          <label htmlFor="idea">创意内容 *</label>
          <textarea
            id="idea"
            name="idea"
            value={form.idea}
            onChange={handleChange}
            required
            placeholder="请详细描述你的创意想法"
          />
        </div>

        <div className="contact-group" aria-label="联系方式，至少填写两项">
          <div>
            <label htmlFor="wechat">微信</label>
            <input
              id="wechat"
              name="wechat"
              type="text"
              value={form.wechat}
              onChange={handleChange}
              placeholder="微信号"
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="email">邮箱</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="邮箱地址"
              autoComplete="email"
            />
          </div>
          <div>
            <label htmlFor="phone">电话</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="手机号"
              autoComplete="tel"
            />
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="files">上传文件/照片</label>
          <input
            id="files"
            name="files"
            type="file"
            multiple
            onChange={handleFilesChange}
            className="files-input"
            accept="image/*,application/pdf"
          />
          {form.files.length > 0 && (
            <ul className="files-list" aria-label="已选择文件列表">
              {form.files.map((file, idx) => (
                <li key={idx} title={file.name}>
                  {file.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        <button type="submit" disabled={submitting} aria-busy={submitting}>
          {submitting ? '提交中...' : '提交申请'}
        </button>
      </form>
    </>
  );
}
