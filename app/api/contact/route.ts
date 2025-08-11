import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import multiparty from 'multiparty';
import fs from 'fs';

// 告诉 Next.js 使用 Node.js 运行时，因nodemailer和fs不能用edge runtime
export const runtime = 'nodejs';

// 关闭默认body解析，手动用multiparty处理文件上传
export const config = {
  api: {
    bodyParser: false,
  },
};

// 用Promise封装multiparty解析表单
function parseForm(req: NextRequest): Promise<{ fields: any; files: any }> {
  return new Promise((resolve, reject) => {
    const form = new multiparty.Form();
    form.parse(req as any, (err, fields, files) => {
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

    // 邮件正文内容
    const mailText = `
来自ROROSPHERE网站的联系申请：

需求类型：${option}
姓名：${name}
邮箱：${email}
主题：${subject}

详细信息：
${message}
    `;

    // nodemailer transporter，邮箱和密码用环境变量
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

    // 邮件选项
    const mailOptions: any = {
      from: `"ROROSPHERE网站" <${process.env.ICLOUD_EMAIL}>`,
      to: process.env.ICLOUD_EMAIL, // 收件邮箱，通常和发件邮箱相同
      subject: `[RORO联系] ${subject || '无主题'}`,
      text: mailText,
    };

    // 如果有附件，加入附件数组
    if (file) {
      mailOptions.attachments = [
        {
          filename: file.originalFilename || 'attachment',
          content: fs.createReadStream(file.path),
        },
      ];
    }

    // 发送邮件
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: '发送成功' }, { status: 200 });
  } catch (error) {
    console.error('邮件发送失败:', error);
    return NextResponse.json({ error: '邮件发送失败' }, { status: 500 });
  }
}
