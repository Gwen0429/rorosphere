// components/NavBar.tsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import Logo from './Logo';
import './NavBar.css';

export default function NavBar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  // 更新后的导航链接
  const links = [
    { href: '/', label: 'Home' },
    { href: '/magazine', label: 'Flower' },
    { href: '/brand-history', label: 'Brand Histroy' },
    { href: '/news-materials', label: 'News' },
    { href: '/contact', label: 'Contact Us' },
  ];

  const handleLinkClick = () => {
    setMobileOpen(false);
    toggleButtonRef.current?.focus();
  };

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <nav className="nav" role="navigation" aria-label="主导航">
        <div className="nav-container">
          {/* 移动端左侧 Logo */}
          <div className="mobile-logo" style={{ display: 'flex', alignItems: 'center' }}>
            <Link href="/" onClick={handleLinkClick} aria-label="返回首页">
              <Logo size={64} />
            </Link>
          </div>

          {/* 电脑端导航链接 */}
          <div className="nav-links">
            {links.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`nav-link ${active ? 'active' : ''}`}
                  aria-current={active ? 'page' : undefined}
                  onClick={handleLinkClick}
                >
                  {active ? <Logo size={48} /> : <span>{label}</span>}
                </Link>
              );
            })}
          </div>

          {/* 移动端汉堡菜单 */}
          <button
            ref={toggleButtonRef}
            className="menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? '关闭菜单' : '打开菜单'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-haspopup="true"
            type="button"
          >
            <svg className="menu-icon" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* 移动端菜单 */}
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

      <style>{`
        @media (min-width: 640px) {
          .mobile-logo { display: none !important; }
        }
        main, .page-content { padding-top: 64px; }
      `}</style>
    </>
  );
}

