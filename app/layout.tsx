'use client';

import NavBar from '@/components/NavBar'; // 引入NavBar组件

// 组件类型声明
interface RootLayoutProps {
  children: React.ReactNode; // 定义children类型
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <NavBar /> {/* 引入NavBar */}
        <main className="pt-16 sm:pt-20">{children}</main> {/* 主体内容 */}
      </body>
    </html>
  );
}


















