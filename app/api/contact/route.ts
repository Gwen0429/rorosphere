import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// 环境变量，必须提前在 .env.local 里配置好
const {
  RORO_MAIL_USER,
  RORO_MAIL_PASS,
  RORO_MAIL_HOST = 'smtp.mail.me.com', // iCloud SMTP 默认地址
  RORO_MAIL_PORT = '587',
} = process.env;

if (!RORO_MAIL_USER || !RORO_MAIL_PASS) {
  throw new Error('邮箱账号或密码未配置，请检查环境变量');
}

// 邮件发送器配置
const transporter = nodemailer.createTransport({
  host: RORO_MAIL_HOST,
  port: Number(RORO_MAIL_PORT),
  secure: false, // 587端口通常不加密，STARTTLS 会自动升级
  auth: {
    user: RORO_MAIL_USER,
    pass: RORO_MAIL_PASS,
  },
});

export async function POST(request: Request) {
  try {
    // 解析 form-data
    const formData = await request.formData();

    // 必填字段校验
    const option = formData.get('option')?.toString() || '';
    const name = formData.get('name')?.toString() || '';
    const email = formData.get('email')?.toString() || '';
    const subject = formData.get('subject')?.toString() || '';
    const message = formData.get('message')?.toString() || '';
    const file = formData.get('file');

    if (!option || !name || !email || !subject || !message) {
      return NextResponse.json(
        { error: '请填写所有必填项' },
        { status: 400 }
      );
    }

    // 附件处理
    let attachments = [];
    if (file && file instanceof File) {
      const arrayBuffer = await file.arrayBuffer();
      attachments.push({
        filename: file.name,
        content: Buffer.from(arrayBuffer),
      });
    }

    // 邮件内容构造
    const mailOptions = {
      from: `"RORO Contact" <${RORO_MAIL_USER}>`,
      to: RORO_MAIL_USER, // 发送给自己
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

    // 发送邮件
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('发送邮件失败:', error);
    return NextResponse.json(
      { error: '邮件发送失败，请稍后重试' },
      { status: 500 }
    );
  }
}


