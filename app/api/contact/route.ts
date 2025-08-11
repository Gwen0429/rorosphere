// eslint-disable-next-line @typescript-eslint/no-explicit-any


import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import formidable, { File } from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  },
};

interface FormFields {
  option: string;
  name: string;
  email: string;
  subject: string;
  message: string;
}

function parseForm(req: NextRequest): Promise<{ fields: FormFields; files: Record<string, File | File[]> }> {
  return new Promise((resolve, reject) => {
    const form = new formidable.IncomingForm({
      keepExtensions: true,
      maxFileSize: 10 * 1024 * 1024,
      multiples: true,
      uploadDir: '/tmp',
    });
    // @ts-ignore: NextRequest兼容Node req复杂，暂时忽略类型
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields: fields as FormFields, files });
    });
  });
}

export async function POST(req: NextRequest) {
  try {
    const { fields, files } = await parseForm(req);

    const transporter = nodemailer.createTransport({
      host: 'smtp.mail.me.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.ICLOUD_EMAIL!,
        pass: process.env.ICLOUD_APP_PASSWORD!,
      },
      tls: { rejectUnauthorized: false },
    });

    let mailAttachments = [];
    if (files.file) {
      const attachments = Array.isArray(files.file) ? files.file : [files.file];
      mailAttachments = attachments
        .filter((f): f is { originalFilename?: string; filepath: string } => !!f && typeof f.filepath === 'string')
        .map(f => ({
          filename: f.originalFilename ?? 'attachment',
          path: f.filepath,
        }));
    }

    const mailText = `
来自网站申请：

需求类型：${fields.option}
姓名：${fields.name}
邮箱：${fields.email}
主题：${fields.subject}

详细信息：
${fields.message}
    `;

    await transporter.sendMail({
      from: `"ROROSPHERE" <${process.env.ICLOUD_EMAIL}>`,
      to: process.env.ICLOUD_EMAIL,
      subject: `[ROROSPHERE申请] ${fields.subject}`,
      text: mailText,
      attachments: mailAttachments,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('发送邮件失败', error);
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}
