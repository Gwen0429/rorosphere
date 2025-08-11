// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const config = {
  api: {
    bodyParser: false,
  },
};

type FormFields = {
  option: string;
  name: string;
  email: string;
  subject: string;
  message: string;
};

async function parseFormData(req: NextRequest): Promise<FormFields> {
  const formData = await req.formData();
  return {
    option: (formData.get('option') || '').toString(),
    name: (formData.get('name') || '').toString(),
    email: (formData.get('email') || '').toString(),
    subject: (formData.get('subject') || '').toString(),
    message: (formData.get('message') || '').toString(),
  };
}

export async function POST(req: NextRequest) {
  try {
    const fields = await parseFormData(req);

    if (
      !fields.option ||
      !fields.name ||
      !fields.email ||
      !fields.subject ||
      !fields.message
    ) {
      return NextResponse.json(
        { error: '请填写所有必填字段' },
        { status: 400 }
      );
    }

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
      subject: `[ROROSPHERE] ${fields.subject} (${fields.option})`,
      text: `
来自 ROROSPHERE 联系表单：

选项: ${fields.option}
姓名: ${fields.name}
邮箱: ${fields.email}
主题: ${fields.subject}

详细信息:
${fields.message}
      `.trim(),
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: '邮件发送成功' });
  } catch (error) {
    return NextResponse.json(
      { error: '发送邮件时出错，请稍后再试' },
      { status: 500 }
    );
  }
}
