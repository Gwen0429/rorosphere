'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef } from 'react';
import './NavBar.css';

export default function NavBar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/news', label: 'News' },
    { href: '/programs', label: 'Programs' },
    { href: '/collaborate', label: 'Collaborate' },
    { href: '/talent', label: 'Talent' },
  ];

  const handleLinkClick = () => {
    setMobileOpen(false);
    toggleButtonRef.current?.focus();
  };

  const svgIcon = `
    <svg width="28" height="28" viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path id="softPetal" d="M0,-70 C28,-65 30,-25 12,-5 C25,10 15,40 0,60 C-15,40 -25,10 -12,-5 C-30,-25 -28,-65 0,-70 Z" />
        <radialGradient id="darkGoldMetal" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stop-color="#C9B37E" />
          <stop offset="50%" stop-color="#8B734C" />
          <stop offset="100%" stop-color="#4A3A1F" />
        </radialGradient>
        <filter id="innerGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feOffset dx="0" dy="0" />
          <feGaussianBlur stdDeviation="3.5" result="glow" />
          <feMerge>
            <feMergeNode in="glow"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <radialGradient id="coreLight" cx="50%" cy="50%" r="100%">
          <stop offset="0%" stop-color="#E0C58F" />
          <stop offset="100%" stop-color="#3E2D12" />
        </radialGradient>
      </defs>
      <g transform="translate(140,140)">
        <use href="#softPetal" fill="url(#darkGoldMetal)" filter="url(#innerGlow)" transform="rotate(0)" />
        <use href="#softPetal" fill="url(#darkGoldMetal)" filter="url(#innerGlow)" transform="rotate(60)" />
        <use href="#softPetal" fill="url(#darkGoldMetal)" filter="url(#innerGlow)" transform="rotate(120)" />
        <use href="#softPetal" fill="url(#darkGoldMetal)" filter="url(#innerGlow)" transform="rotate(180)" />
        <use href="#softPetal" fill="url(#darkGoldMetal)" filter="url(#innerGlow)" transform="rotate(240)" />
        <use href="#softPetal" fill="url(#darkGoldMetal)" filter="url(#innerGlow)" transform="rotate(300)" />
        <circle cx="0" cy="0" r="18" fill="url(#coreLight)" />
      </g>
    </svg>
  `;

  return (
    <nav className="nav" role="navigation" aria-label="Primary navigation">
      <div className="nav-container">
        <div className="nav-links">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`nav-link ${pathname === href ? 'active' : ''}`}
              aria-current={pathname === href ? 'page' : undefined}
              onClick={handleLinkClick}
            >
              {pathname === href ? (
                <span
                  className="svg-icon"
                  dangerouslySetInnerHTML={{ __html: svgIcon }}
                />
              ) : (
                label
              )}
            </Link>
          ))}
        </div>

        <button
          ref={toggleButtonRef}
          className="menu-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-haspopup="true"
          type="button"
        >
          <svg
            className="menu-icon"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="mobile-menu" id="mobile-menu">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`mobile-link ${pathname === href ? 'active' : ''}`}
              aria-current={pathname === href ? 'page' : undefined}
              onClick={handleLinkClick}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}



























