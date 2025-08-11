import { NextRequest, NextResponse } from 'next/server';
import nodemailer, { SendMailOptions } from 'nodemailer';
import multiparty from 'multiparty';
import fs from 'fs';

export const runtime = 'nodejs';

export const config = {
  api: {
    bodyParser: false,
  },
};

type Fields = { [key: string]: string[] };
type Files = {
  [key: string]: Array<{
    fieldName: string;
    originalFilename?: string;
    path: string;
    headers: Record<string, string>;
    size: number;
  }>;
};

function parseForm(req: NextRequest): Promise<{ fields: Fields; files: Files }> {
  return new Promise((resolve, reject) => {
    const form = new multiparty.Form();
    form.parse(req as any, (err, fields: Fields, files: Files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
}

export async function POST(req: NextRequest) {
  try {
    const { fields, files } = await parseForm(req);

    const option = fields.option?.[0] ?? '';
    const name = fields.name?.[0] ?? '';
    const email = fields.email?.[0] ?? '';
    const subject = fields.subject?.[0] ?? '';
    const message = fields.message?.[0] ?? '';
    const file = files.file?.[0];

    const mailText = `
来自ROROSPHERE网站的联系申请：

需求类型：${option}
姓名：${name}
邮箱：${email}
主题：${subject}

详细信息：
${message}
    `;

    const transporter = nodemailer.createTransport({
      host: 'smtp.mail.me.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.ICLOUD_EMAIL,
        pass: process.env.ICLOUD_APP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions: SendMailOptions = {
      from: `"ROROSPHERE网站" <${process.env.ICLOUD_EMAIL}>`,
      to: process.env.ICLOUD_EMAIL,
      subject: `[RORO联系] ${subject || '无主题'}`,
      text: mailText,
    };

    if (file) {
      mailOptions.attachments = [
        {
          filename: file.originalFilename || 'attachment',
          content: fs.createReadStream(file.path),
        },
      ];
    }

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: '发送成功' }, { status: 200 });
  } catch (error) {
    console.error('邮件发送失败:', error);
    return NextResponse.json({ error: '邮件发送失败' }, { status: 500 });
  }
}
