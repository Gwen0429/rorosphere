import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// 解析 multipart/form-data 需要用第三方库，比如 'formidable'
import formidable from 'formidable';

export const config = {
  api: {
    bodyParser: false, // 关闭内置解析，使用 formidable 解析
  },
};

// 异步解析formidable，封装成promise
function parseForm(req: NextRequest) {
  return new Promise<{ fields: formidable.Fields; files: formidable.Files }>((resolve, reject) => {
    const form = formidable({ multiples: false });

    // @ts-ignore
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
}

export async function POST(req: NextRequest) {
  try {
    const { fields, files } = await parseForm(req);

    // 环境变量配置
    const transporter = nodemailer.createTransport({
      service: 'icloud',
      auth: {
        user: process.env.ICLOUD_EMAIL,
        pass: process.env.ICLOUD_APP_PASSWORD,
      },
    });

    const { roroID, name, email, subject, message } = fields;

    if (!roroID || !name || !email || !subject || !message) {
      return NextResponse.json({ error: '请完整填写所有必填字段' }, { status: 400 });
    }

    // 构造附件
    const attachments = [];
    if (files.file) {
      const file = Array.isArray(files.file) ? files.file[0] : files.file;
      attachments.push({
        filename: file.originalFilename,
        content: await file.toBuffer(),
      });
    }

    // 邮件内容
    const mailOptions = {
      from: `"Rorosphere Application" <${process.env.ICLOUD_EMAIL}>`,
      to: process.env.ICLOUD_EMAIL,
      subject: `新的创意申请 - ${subject}`,
      text: `
收到一份来自 RORO ID: ${roroID} 的创意申请
姓名: ${name}
邮箱: ${email}
主题: ${subject}
详细描述:
${message}
      `,
      attachments,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('发送邮件失败:', error);
    return NextResponse.json({ error: '提交失败，请稍后重试' }, { status: 500 });
  }
}
