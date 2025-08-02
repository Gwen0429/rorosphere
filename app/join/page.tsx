'use client';

import React from 'react';

export default function JoinUs() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Great+Vibes&display=swap');

        :root {
          --champagne-gold: #D4AF7F;
          --champagne-gold-alpha: #D4AF7Faa;
          --champagne-gold-alpha-soft: #D4AF7F66;
          --invitation-border: linear-gradient(135deg, #D4AF7F 0%, #F0E6D2 100%);
        }

        html, body {
          margin: 0; padding: 0;
          background: #fff;
          color: #333;
          font-family: 'Playfair Display', serif;
          overflow-x: hidden;
        }

        main {
          max-width: 720px;
          margin: 80px auto 140px;
          padding: 40px 32px 64px;
          border: 2px solid var(--champagne-gold);
          border-image-slice: 1;
          border-image-source: var(--invitation-border);
          border-radius: 16px;
          box-shadow:
            0 0 15px var(--champagne-gold-alpha-soft);
          background: #fff;
          position: relative;
        }

        .invitation-header {
          font-family: 'Great Vibes', cursive;
          font-size: 2.8rem;
          color: var(--champagne-gold);
          text-align: center;
          margin-bottom: 36px;
          user-select: none;
          letter-spacing: 0.06em;
        }

        h1 {
          font-size: 3.8rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--champagne-gold);
          text-align: center;
          margin: 0 0 36px;
          letter-spacing: 0.15em;
          font-style: italic;
          user-select: none;
          text-shadow: 0 0 8px var(--champagne-gold-alpha), 0 0 20px var(--champagne-gold-alpha-soft);
        }

        section.content {
          font-weight: 300;
          font-size: 1.15rem;
          line-height: 1.7;
          color: #6b6b6bdd;
          letter-spacing: 0.03em;
          margin-bottom: 40px;
          white-space: pre-line;
        }

        .signature {
          font-family: 'Great Vibes', cursive;
          font-size: 2.2rem;
          color: #9B7AA0; /* 这里改成香槟紫 */
          text-align: right;
          margin-top: 80px;
          user-select: none;
          letter-spacing: 0.05em;
        }

        .contact {
          font-weight: 300;
          font-size: 0.9rem;
          color: #a4997fdd;
          margin-top: 40px;
          text-align: center;
          letter-spacing: 0.05em;
          user-select: none;
        }

        footer {
          margin-top: 80px;
          text-align: center;
          font-size: 0.75rem;
          font-weight: 300;
          color: #999999aa;
          letter-spacing: 0.1em;
          user-select: none;
          position: relative;
        }

        footer::after {
          content: '⚜';
          display: block;
          font-size: 2.2rem;
          color: var(--champagne-gold);
          margin-top: 20px;
          line-height: 1;
          animation: none;
        }
      `}</style>

      <main>
        <div className="invitation-header" aria-label="Invitation opening">
          You Are Cordially Invited
        </div>

        <h1>Join Us</h1>

        <section className="content" aria-label="Invitation message">
          {`To those who create with soul — ROROSPHERE opens its doors to you.

This is not merely a platform. It is a space where vision breathes, where individuality is honored, and where elegance meets bold truth.

If your work speaks from within and seeks to connect, inspire, and transform — we welcome you.

“To create is to reveal. ROROSPHERE exists for those who are unafraid to show who they are, and to craft with intention. Join us in shaping something timeless.”`}
        </section>

        <div className="signature" aria-label="Signature">
          With Grace,<br />
          Gwen · Chief Creator of ROROSPHERE
        </div>

        <div className="contact" aria-label="Contact information">
          RSVP / Contact: <a href="mailto:goodmanjingwenzhou@icloud.com" style={{color: 'var(--champagne-gold)', textDecoration: 'none'}} target="_blank" rel="noopener noreferrer">goodmanjingwenzhou@icloud.com</a>
        </div>

        <footer>&copy; 2025 ROROSPHERE. All rights reserved.</footer>
      </main>
    </>
  );
}













