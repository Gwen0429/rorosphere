import type { NextApiRequest, NextApiResponse } from 'next';
import multiparty from 'multiparty';
import nodemailer, { SendMailOptions } from 'nodemailer';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

type Fields = Record<string, string[]>;
type File = {
  fieldName: string;
  originalFilename?: string;
  path: string;
  headers: Record<string, string>;
  size: number;
};
type Files = Record<string, File[]>;

function parseForm(req: NextApiRequest): Promise<{ fields: Fields; files: Files }> {
  return new Promise((resolve, reject) => {
    const form = new multiparty.Form();
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  try {
    const { fields, files } = await parseForm(req);

    // 严格类型断言并安全取值
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
        user: process.env.ICLOUD_EMAIL as string,
        pass: process.env.ICLOUD_APP_PASSWORD as string,
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
          filename: file.originalFilename ?? 'attachment',
          content: fs.createReadStream(file.path),
        },
      ];
    }

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: '发送成功' });
  } catch (error) {
    console.error('邮件发送失败:', error);
    res.status(500).json({ error: '邮件发送失败' });
  }
}
