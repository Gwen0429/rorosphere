'use client';

import React from 'react';
import Link from 'next/link';
import { approvedProjects } from '../../src/data/creativeProjectsData';

export default function CreativeProjectsPage() {
  return (
    <>
      <style>{`
        main {
          max-width: 900px;
          margin: 64px auto 120px;
          padding: 0 24px;
          font-family: 'Playfair Display', serif;
          user-select: none;
          background: #fefcf8;
          border-radius: 16px;
          box-shadow: 0 8px 24px rgba(212,175,127,0.15);
        }
        h1 {
          font-size: 3rem;
          font-weight: 700;
          color: #D4AF7F;
          letter-spacing: 0.1em;
          text-align: center;
          margin-bottom: 48px;
          user-select: text;
        }
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        li {
          border: 2px solid #D4AF7F;
          border-radius: 20px;
          margin-bottom: 32px;
          padding: 28px 32px;
          box-shadow: 0 8px 16px rgba(212,175,127,0.1);
          transition: box-shadow 0.3s ease;
          background: white;
        }
        li:hover,
        li:focus-within {
          box-shadow: 0 12px 32px rgba(212,175,127,0.35);
          outline: none;
        }
        .title-link {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 12px;
          color: #B68E37;
          text-decoration: none;
          user-select: text;
        }
        .title-link:hover,
        .title-link:focus-visible {
          text-decoration: underline;
          outline: none;
        }
        .desc {
          font-size: 1rem;
          color: #5b5b5bdd;
          line-height: 1.5;
          margin-bottom: 16px;
          user-select: text;
        }
        .meta {
          font-size: 0.85rem;
          color: #a38f56cc;
          font-weight: 600;
          user-select: text;
        }
        .publish-link {
          display: block;
          max-width: 280px;
          margin: 40px auto 0;
          text-align: center;
          background: linear-gradient(45deg, #D4AF7F, #B68E37);
          color: #fff;
          font-weight: 700;
          font-size: 1.2rem;
          padding: 14px 32px;
          border-radius: 30px;
          text-decoration: none;
          box-shadow: 0 0 18px #D4AF7Faa;
          transition: box-shadow 0.3s ease;
          user-select: none;
        }
        .publish-link:hover,
        .publish-link:focus-visible {
          box-shadow: 0 0 28px #D4AF7F;
          outline: none;
        }
      `}</style>

      <main>
        <h1>精彩创意展览</h1>
        <ul>
          {approvedProjects.map(({ id, title, desc, author, date }) => (
            <li key={id} tabIndex={0} aria-label={`${title}，作者：${author}，日期：${date}`}>
              <Link href={`/creative-projects/${id}`} className="title-link">
                {title}
              </Link>
              <div className="desc">{desc}</div>
              <div className="meta">作者：{author} | 日期：{new Date(date).toLocaleDateString()}</div>
            </li>
          ))}
        </ul>

        <a href="/creative-projects/publish" className="publish-link" aria-label="发布您的创意项目">
          发布您的创意项目
        </a>
      </main>
    </>
  );
}

