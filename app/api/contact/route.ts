import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export const config = {
  api: {
    bodyParser: false, // 因为我们用 FormData
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    // 解析 FormData
    const buffers: Buffer[] = [];
    for await (const chunk of req) {
      buffers.push(chunk);
    }
    const body = Buffer.concat(buffers).toString();
    const params = new URLSearchParams(body);
    const name = params.get('name');
    const email = params.get('email');
    const message = params.get('message');

    // 创建 transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.mail.me.com',
      port: 587,
      secure: false,
      auth: {
        user: 'goodmanjingwenzhou@icloud.com',
        pass: process.env.APPLE_APP_SPECIFIC_PASSWORD, // 你在 .env.local 里设置
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: 'goodmanjingwenzhou@icloud.com',
      subject: 'Rorosphere 联系表单',
      text: message || '',
    });

    return res.status(200).json({ message: '邮件已发送' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: '发送失败' });
  }
}


