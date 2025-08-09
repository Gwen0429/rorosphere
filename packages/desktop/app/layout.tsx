'use client';

import Navbar from '../components/NavBar'; // 根据实际路径调整

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ROROSPHERE</title>
      </head>
      <body>
        <div className="global-wrapper">
          {/* 导航栏 */}
          <Navbar />

          {/* 页面主体内容 */}
          <main>
            {children}
          </main>

          {/* 页脚 */}
          <footer className="footer">
            <div className="footer-content">
              <div className="footer-section">
                <h4>联系我们</h4>
                <ul>
                  <li><a href="tel:4006588555">电话: 400 6588 555</a></li>
                  <li><a href="mailto:contact@rorosphere.com">电子邮件</a></li>
                  <li><a href="https://weixin.qq.com/r/xyz">微信</a></li>
                  <li><a href="https://weibo.com/rorosphere">微博</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Rorosphere</h4>
                <ul>
                  <li><a href="/about">关于我们</a></li>
                  <li><a href="/projects">创意项目</a></li>
                  <li><a href="/news">最新资讯</a></li>
                  <li><a href="/contact">联系我们</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>社交媒体</h4>
                <ul>
                  <li><a href="https://www.instagram.com/rorosphere">Instagram</a></li>
                  <li><a href="https://www.facebook.com/rorosphere">Facebook</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2025 ROROSPHERE. All rights reserved.</p>
            </div>
          </footer>
        </div>

        {/* 样式 */}
        <style jsx>{`
          :root {
            --champagne-gold: #FACBAA;  /* 裸色 */
            --highlight-color: #A17494; /* 紫褐色 */
            --golden-accent: #D4AF7F; /* 金色 */
            --bg-color: #fff;
            --text-color: #3e2f1c;
            --dark-bg: #1c1c1c;
            --shadow-color: rgba(0, 0, 0, 0.1);
          }

          html, body {
            margin: 0;
            padding: 0;
            background-color: var(--bg-color);
            color: var(--text-color);
            font-family: 'Noto Sans CJK', sans-serif;
            box-sizing: border-box;
            height: 100%;
            width: 100%;
            overflow-x: hidden;
          }

          * {
            box-sizing: inherit;
          }

          /* 全局容器 */
          .global-wrapper {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background-color: var(--bg-color);
          }

          main {
            flex-grow: 1;
            margin-top: 80px;  /* 留出空间给导航 */
            padding: 0 20px;
            position: relative;
          }

          footer {
            background-color: var(--dark-bg);
            color: var(--champagne-gold);
            text-align: center;
            padding: 40px 20px;
            font-size: 1rem;
            margin-top: 80px;
            position: relative;
            z-index: 10;
          }

          .footer-content {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            margin-bottom: 40px;
          }

          .footer-section {
            width: 250px;
            padding: 10px;
          }

          .footer-section h4 {
            font-size: 1.2rem;
            margin-bottom: 20px;
            font-weight: 600;
          }

          .footer-section ul {
            list-style-type: none;
            padding: 0;
          }

          .footer-section ul li {
            margin-bottom: 10px;
          }

          .footer-section ul li a {
            color: var(--champagne-gold);
            text-decoration: none;
            font-size: 1rem;
          }

          .footer-section ul li a:hover {
            text-decoration: underline;
          }

          .footer-bottom {
            background-color: var(--dark-bg);
            padding: 20px 0;
            font-size: 0.9rem;
            color: var(--champagne-gold);
          }

          @media (max-width: 768px) {
            footer {
              padding: 40px 20px;
            }

            .footer-content {
              flex-direction: column;
              align-items: center;
            }

            .footer-section {
              width: 100%;
              text-align: center;
              margin-bottom: 20px;
            }
          }
        `}</style>
      </body>
    </html>
  );
}





























