import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
};

type ContactForm = {
  option: string;
  name: string;
  email: string;
  subject: string;
  message: string;
};

async function sendEmail(data: ContactForm) {
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
    subject: `[RORO联系] ${data.subject} (${data.option})`,
    text: `
来意：${data.option}
姓名：${data.name}
邮箱：${data.email}

内容：
${data.message}
    `,
  };

  await transporter.sendMail(mailOptions);
}

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();

    // 类型简单校验
    if (
      !json.option ||
      !json.name ||
      !json.email ||
      !json.subject ||
      !json.message
    ) {
      return NextResponse.json({ error: '缺少必要字段' }, { status: 400 });
    }

    await sendEmail(json as ContactForm);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('发送邮件失败:', error);
    return NextResponse.json({ error: '服务器错误' }, { status: 500 });
  }
}
