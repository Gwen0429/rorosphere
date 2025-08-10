import type { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name = formData.get('name')?.toString() || '';
    const email = formData.get('email')?.toString() || '';
    const message = formData.get('message')?.toString() || '';
    // 你也可以处理附件 ...

    // nodemailer transporter配置（示范）
    const transporter = nodemailer.createTransport({
      service: 'icloud',
      auth: {
        user: 'goodmanjingwenzhou@icloud.com',
        pass: '你的app专用密码',
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: 'goodmanjingwenzhou@icloud.com',
      subject: `RORO 网站联系：${name}`,
      text: message,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: '邮件发送成功' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: '发送失败' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}



