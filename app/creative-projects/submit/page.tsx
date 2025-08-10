'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { roroIDs } from '../../../src/data/roroid';
import { useRouter } from 'next/navigation';

export default function VerifyRoroID() {
  const [roroID, setRoroID] = useState('');
  const [inviteCode, setInviteCode] = useState('');
  const [status, setStatus] = useState<'success' | 'error' | ''>('');
  const router = useRouter();

  const handleVerify = () => {
    const match = roroIDs.find(
      (entry) => entry.id === roroID.trim() && entry.code === inviteCode.trim()
    );

    if (match) {
      setStatus('success');
      setTimeout(() => {
        router.push(`/creative-projects/application?roroID=${encodeURIComponent(roroID.trim())}`);
      }, 2000);
    } else {
      setStatus('error');
    }
  };

  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        minHeight: '100vh',
        padding: '2rem 1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

        .title {
          font-family: 'Great Vibes', cursive;
          font-size: 3rem;
          color: #A17494;
          text-align: center;
          margin-bottom: 2rem;
          user-select: none;
        }

        .form-container {
          max-width: 500px;
          width: 100%;
          background: #fff;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }

        .input-field {
          width: 100%;
          padding: 0.8rem;
          margin-bottom: 1rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 1rem;
          font-family: inherit;
          color: #3B2E2E;
          transition: border-color 0.3s ease;
        }

        .input-field:focus {
          outline: none;
          border-color: #FACBAA;
          box-shadow: 0 0 8px #FACBAA;
        }

        .button {
          width: 100%;
          padding: 0.8rem;
          background-color: #A17494;
          color: white;
          font-size: 1rem;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.3s ease;
          font-family: inherit;
          font-weight: 700;
          user-select: none;
        }

        .button:hover {
          background-color: #8d5f7e;
        }

        .message {
          margin-top: 1rem;
          font-size: 1rem;
          text-align: center;
          padding: 0.75rem 1rem;
          border-radius: 6px;
          line-height: 1.5;
          user-select: text;
        }

        .success {
          background-color: #FAE6DC; /* 柔和淡粉 */
          color: #8B5E6B;
        }

        .error {
          background-color: #FDF2E6; /* 柔和米色 */
          color: #A17454;
        }

        @media (max-width: 480px) {
          .title {
            font-size: 2.2rem;
          }
          .form-container {
            padding: 1.5rem;
          }
        }
      `}</style>

      <h1 className="title">Verify Roro ID</h1>

      <div className="form-container">
        <input
          type="text"
          className="input-field"
          placeholder="请输入您的RORO ID"
          value={roroID}
          onChange={(e) => setRoroID(e.target.value)}
          spellCheck={false}
          autoComplete="off"
        />
        <input
          type="text"
          className="input-field"
          placeholder="请输入唯一邀请码"
          value={inviteCode}
          onChange={(e) => setInviteCode(e.target.value)}
          spellCheck={false}
          autoComplete="off"
        />
        <button
          className="button"
          onClick={handleVerify}
          disabled={!roroID.trim() || !inviteCode.trim()}
          aria-disabled={!roroID.trim() || !inviteCode.trim()}
        >
          验证
        </button>

        {status === 'success' && (
          <div className="message success" role="alert" aria-live="polite">
            亲爱的RORO创作者，正在为你跳转创意申请界面
          </div>
        )}

        {status === 'error' && (
          <div className="message error" role="alert" aria-live="polite">
            请您确认是否填写无误或前往{' '}
            <Link href="/contact" style={{ textDecoration: 'underline', color: '#A17494' }}>
              联系我们
            </Link>{' '}
            页面进行RORO创作者申请
          </div>
        )}
      </div>
    </div>
  );
}





