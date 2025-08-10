// app/api/contact/route.ts
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const { name, email, subject, message } = data;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: '缺少必填字段' }, { status: 400 });
    }

    // 邮箱和app密码通过环境变量安全读取
    const transporter = nodemailer.createTransport({
      host: 'smtp.mail.me.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.ICLOUD_EMAIL,
        pass: process.env.ICLOUD_APP_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.ICLOUD_EMAIL,
      subject: `[RORO联系] ${subject}`,
      text: message,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: '邮件发送成功' });
  } catch (error) {
    console.error('邮件发送失败:', error);
    return NextResponse.json({ error: '邮件发送失败' }, { status: 500 });
  }
}

