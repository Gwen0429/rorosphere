import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const config = {
  api: {
    bodyParser: false,  // 我们手动解析FormData
  },
};

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const option = formData.get('option')?.toString() || '';
    const name = formData.get('name')?.toString() || '';
    const email = formData.get('email')?.toString() || '';
    const subject = formData.get('subject')?.toString() || '';
    const message = formData.get('message')?.toString() || '';

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: '请填写所有必填项' }, { status: 400 });
    }

    // SMTP transporter，改成你的iCloud或者其他配置
    const transporter = nodemailer.createTransport({
      service: 'icloud',
      auth: {
        user: process.env.ICLOUD_EMAIL,
        pass: process.env.ICLOUD_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.ICLOUD_EMAIL,
      to: process.env.ICLOUD_EMAIL,
      subject: `[ROROSPHERE联系] ${subject} - 来自${name}`,
      text: `
需求类型: ${option}
姓名: ${name}
邮箱: ${email}

详细信息:
${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('发送邮件失败:', error);
    return NextResponse.json({ error: '发送邮件失败，请稍后再试' }, { status: 500 });
  }
}
