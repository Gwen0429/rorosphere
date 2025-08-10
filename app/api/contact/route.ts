import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const {
  RORO_MAIL_USER,
  RORO_MAIL_PASS,
  RORO_MAIL_HOST = 'smtp.mail.me.com',
  RORO_MAIL_PORT = '587',
} = process.env;

if (!RORO_MAIL_USER || !RORO_MAIL_PASS) {
  throw new Error('邮箱账号或密码未配置，请检查环境变量');
}

const transporter = nodemailer.createTransport({
  host: RORO_MAIL_HOST,
  port: Number(RORO_MAIL_PORT),
  secure: false,
  auth: {
    user: RORO_MAIL_USER,
    pass: RORO_MAIL_PASS,
  },
});

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const option = formData.get('option')?.toString() || '';
    const name = formData.get('name')?.toString() || '';
    const email = formData.get('email')?.toString() || '';
    const subject = formData.get('subject')?.toString() || '';
    const message = formData.get('message')?.toString() || '';
    const file = formData.get('file');

    if (!option || !name || !email || !subject || !message) {
      return NextResponse.json({ error: '请填写所有必填项' }, { status: 400 });
    }

    const attachments = [];

    // 类型保护和ts-ignore结合，避免红线
    if (file && typeof (file as Blob).arrayBuffer === 'function') {
      // @ts-ignore
      const arrayBuffer = await (file as Blob).arrayBuffer();
      // @ts-ignore
      attachments.push({
        // @ts-ignore
        filename: (file as any).name,
        content: Buffer.from(arrayBuffer),
      });
    }

    const mailOptions = {
      from: `"RORO Contact" <${RORO_MAIL_USER}>`,
      to: RORO_MAIL_USER,
      subject: `[Roro联系] ${subject} - 来自 ${name} (${option})`,
      text: `
需求类型: ${option === 'creator' ? '想成为创作者' : '希望合作'}
姓名: ${name}
邮箱: ${email}

内容:
${message}
      `,
      attachments,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('发送邮件失败:', error);
    return NextResponse.json({ error: '邮件发送失败，请稍后重试' }, { status: 500 });
  }
}




