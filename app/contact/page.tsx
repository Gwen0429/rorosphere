"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("正在发送...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("提交成功，我们会尽快联系您。");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("提交失败，请稍后再试。");
      }
    } catch {
      setStatus("网络错误，请稍后再试。");
    }
  };

  return (
    <div className="contact-page">
      <h1>联系我们</h1>
      <p>无论是品牌合作还是体验建议，我们都欢迎您的来信。</p>
      <form onSubmit={handleSubmit}>
        <label>您的名字</label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />

        <label>邮箱</label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />

        <label>电话</label>
        <input
          type="tel"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          required
        />

        <label>留言</label>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
        ></textarea>

        <button type="submit">提交</button>
      </form>

      {status && <p className="status">{status}</p>}

      <style jsx>{`
        .contact-page {
          max-width: 600px;
          margin: auto;
          padding: 20px;
          background: #f9f6f2; /* 香奈儿白 */
          border-radius: 12px;
        }
        h1 {
          color: #b68e37;
          text-align: center;
          margin-bottom: 10px;
        }
        p {
          text-align: center;
          color: #6b6b6b;
        }
        label {
          display: block;
          margin-top: 15px;
          color: #3e2f1c;
          font-weight: 500;
        }
        input,
        textarea {
          width: 100%;
          padding: 10px;
          margin-top: 5px;
          border-radius: 6px;
          border: 1px solid #ccc;
          font-size: 1rem;
        }
        textarea {
          min-height: 100px;
        }
        button {
          margin-top: 20px;
          width: 100%;
          padding: 12px;
          background: linear-gradient(145deg, #f9f6f2, #efe7db 40%, #d4af7f 60%, #e9ddc8);
          color: #3e2f1c;
          font-weight: 600;
          font-size: 1rem;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        button:hover {
          box-shadow: 0 0 12px rgba(212, 175, 127, 0.5);
        }
        .status {
          text-align: center;
          margin-top: 15px;
          font-weight: 500;
          color: #b68e37;
        }
        @media (max-width: 600px) {
          .contact-page {
            padding: 15px;
          }
        }
      `}</style>
    </div>
  );
}

