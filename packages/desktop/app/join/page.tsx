'use client';

import React from 'react';

export default function Talent() {
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
          box-shadow: 0 0 15px var(--champagne-gold-alpha-soft);
          background: #fff;
          position: relative;
          user-select: none;
        }

        .header {
          font-family: 'Great Vibes', cursive;
          font-size: 2.8rem;
          color: var(--champagne-gold);
          text-align: center;
          margin-bottom: 36px;
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

        ul.requirements {
          list-style: none;
          padding-left: 0;
          margin-bottom: 40px;
          color: #7a6a4fcc;
          font-weight: 300;
          font-size: 1.1rem;
          letter-spacing: 0.04em;
          user-select: text;
        }

        ul.requirements li {
          margin-bottom: 12px;
          padding-left: 1.2em;
          position: relative;
        }

        ul.requirements li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--champagne-gold);
          font-weight: 700;
        }

        .signature {
          font-family: 'Great Vibes', cursive;
          font-size: 2.2rem;
          color: #9B7AA0; /* 香槟紫 */
          text-align: right;
          margin-top: 80px;
          letter-spacing: 0.05em;
        }

        footer {
          margin-top: 80px;
          text-align: center;
          font-size: 0.75rem;
          font-weight: 300;
          color: #999999aa;
          letter-spacing: 0.1em;
        }

        /* 响应式 */
        @media (max-width: 768px) {
          main {
            max-width: 100%;
            margin: 40px 16px 80px;
            padding: 24px 16px 40px;
            border-width: 1.5px;
            border-radius: 12px;
            box-shadow: 0 0 10px var(--champagne-gold-alpha-soft);
          }

          .header {
            font-size: 2rem;
            margin-bottom: 24px;
          }

          h1 {
            font-size: 2.8rem;
            margin-bottom: 24px;
            letter-spacing: 0.1em;
          }

          section.content {
            font-size: 1rem;
            margin-bottom: 32px;
            line-height: 1.5;
          }

          ul.requirements {
            font-size: 1rem;
          }

          .signature {
            font-size: 1.6rem;
            margin-top: 48px;
          }

          footer {
            margin-top: 60px;
            font-size: 0.65rem;
          }
        }
      `}</style>

      <main>
        <div className="header" aria-label="Invitation to talent">
          To Visionaries & Creators
        </div>

        <h1>Talent Recruitment</h1>

        <section className="content" aria-label="Introduction">
          {`At RORO, we seek those whose creativity is not just skill — but a living voice.

We curate a selective collective of talents, inviting creators who dare to innovate, express, and inspire beyond convention.

Our ecosystem is built on intentionality and authenticity, fostering an exclusive atmosphere where your artistry shapes culture.`}
        </section>

        <section aria-label="Talent requirements">
          <ul className="requirements">
            <li>Passion for creative expression and innovation</li>
            <li>Commitment to collaboration within a selective community</li>
            <li>Dedication to crafting work with originality and depth</li>
            <li>Openness to new ideas and pushing artistic boundaries</li>
            <li>Alignment with RORO’s ethos of elegance and rebellion</li>
          </ul>
        </section>

        <section className="content" aria-label="Invitation message">
          {`If you resonate with our vision and wish to become part of a visionary network, we welcome your application.

Together, we will build not only extraordinary creations but a timeless legacy.`}
        </section>

        <div className="signature" aria-label="Signature">
          With Respect,<br />
          Gwen · Chief Creator of ROROSPHERE
        </div>

        <footer>&copy; 2025 ROROSPHERE. All rights reserved.</footer>
      </main>
    </>
  );
}

















