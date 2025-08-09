'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { approvedProjects } from '../../../src/data/creativeProjectsData';

export default function CreativeProjectDetailPage() {
  const params = useParams();
  const router = useRouter();

  const projectId = Number(params?.id);
  const project = approvedProjects.find((p) => p.id === projectId);

  if (!project) {
    // 404简单处理
    return (
      <main style={{ maxWidth: 700, margin: '80px auto', padding: '0 24px', fontFamily: "'Playfair Display', serif" }}>
        <h1 style={{ color: '#D4AF7F' }}>未找到该创意项目</h1>
        <button
          onClick={() => router.back()}
          style={{
            marginTop: 24,
            background: 'linear-gradient(45deg, #D4AF7F, #B68E37)',
            border: 'none',
            padding: '14px 32px',
            color: '#fff',
            fontWeight: '700',
            borderRadius: 30,
            cursor: 'pointer',
            boxShadow: '0 0 18px #D4AF7Faa',
          }}
        >
          返回上一页
        </button>
      </main>
    );
  }

  return (
    <>
      <style>{`
        main {
          max-width: 700px;
          margin: 80px auto 120px;
          padding: 0 24px;
          font-family: 'Playfair Display', serif;
          user-select: none;
          background: #fffaf7;
          border-radius: 20px;
          box-shadow: 0 12px 32px rgba(212,175,127,0.18);
        }
        h1 {
          font-size: 2.8rem;
          font-weight: 700;
          color: #D4AF7F;
          margin-bottom: 24px;
          user-select: text;
        }
        .author-contact {
          font-size: 0.9rem;
          color: #a38f56cc;
          font-weight: 600;
          margin-bottom: 24px;
          user-select: text;
        }
        .desc {
          font-size: 1.2rem;
          color: #5b5b5bdd;
          line-height: 1.6;
          margin-bottom: 32px;
          user-select: text;
          white-space: pre-wrap;
        }
        .details {
          font-size: 1rem;
          color: #3e2f1c;
          line-height: 1.8;
          user-select: text;
          white-space: pre-wrap;
          border-top: 1px solid #d4af7f66;
          padding-top: 24px;
        }
      `}</style>

      <main>
        <h1>{project.title}</h1>
        <div className="author-contact">
          作者：{project.author} {project.contact ? `| 联系方式：${project.contact}` : ''}
        </div>
        <div className="desc">{project.desc}</div>
        {project.details && <div className="details">{project.details}</div>}
      </main>
    </>
  );
}
