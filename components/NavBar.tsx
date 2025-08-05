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
    <svg width="48" height="48" viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg" class="rotating-svg">
      <defs>
        <path id="sculptedPetal" d="M0,-70 C30,-62 32,-26 12,-6 C26,12 14,38 0,60 C-14,38 -26,12 -12,-6 C-32,-26 -30,-62 0,-70 Z"/>
        <radialGradient id="goldRelief" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stop-color="#FBE8C9"/>
          <stop offset="60%" stop-color="#D4AF7F"/>
          <stop offset="100%" stop-color="#B88A50"/>
        </radialGradient>
      </defs>
      <g transform="translate(140,140)" stroke="white" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round" fill="url(#goldRelief)" opacity="0.9">
        <use href="#sculptedPetal" transform="rotate(0)" />
        <use href="#sculptedPetal" transform="rotate(60)" />
        <use href="#sculptedPetal" transform="rotate(120)" />
        <use href="#sculptedPetal" transform="rotate(180)" />
        <use href="#sculptedPetal" transform="rotate(240)" />
        <use href="#sculptedPetal" transform="rotate(300)" />
      </g>
      <circle cx="140" cy="140" r="14" fill="black" stroke="white" stroke-width="2.4" />
      <circle cx="140" cy="140" r="18" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="6"/>
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
                <div
                  className="nav-icon-wrapper"
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




























