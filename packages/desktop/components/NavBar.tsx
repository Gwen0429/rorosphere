'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  // State to control mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu for mobile view
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav>
      <div className="logo">
        <Link href="/">ROROSPHERE</Link>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className={isMenuOpen ? 'bar open' : 'bar'}></div>
        <div className={isMenuOpen ? 'bar open' : 'bar'}></div>
        <div className={isMenuOpen ? 'bar open' : 'bar'}></div>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li><Link href="/about">关于我们</Link></li>
        <li><Link href="/projects">创意项目</Link></li>
      </ul>

      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 40px;
          background-color: #fff;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 10;
        }

        .logo a {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          font-weight: 700;
          color: #D4AF7F;
          text-transform: uppercase;
          text-decoration: none;
        }

        .nav-links {
          display: flex;
          gap: 40px;
          list-style: none;
        }

        .nav-links li a {
          color: #3e2f1c;
          font-weight: 600;
          font-size: 1rem;
          text-transform: uppercase;
          text-decoration: none;
          transition: color 0.3s ease;
          font-family: 'Noto Sans CJK', sans-serif;
        }

        .nav-links li a:hover {
          color: #a17494;
        }

        .hamburger-menu {
          display: none;
          cursor: pointer;
          flex-direction: column;
          justify-content: space-between;
          height: 24px;
          width: 30px;
          z-index: 20;
        }

        .hamburger-menu .bar {
          height: 4px;
          width: 100%;
          background-color: #3e2f1c;
          border-radius: 4px;
          transition: transform 0.3s ease;
        }

        .hamburger-menu .open:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .hamburger-menu .open:nth-child(2) {
          opacity: 0;
        }

        .hamburger-menu .open:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        @media (max-width: 768px) {
          .nav-links {
            position: absolute;
            top: 80px;
            right: 0;
            background-color: #fff;
            width: 100%;
            flex-direction: column;
            padding: 20px 0;
            display: none;
            gap: 20px;
            text-align: center;
          }

          .nav-links.open {
            display: flex;
          }

          .nav-links li a {
            font-size: 1.2rem;
            padding: 10px;
            display: block;
          }

          .hamburger-menu {
            display: flex;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;






























