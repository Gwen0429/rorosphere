import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, contact, title, description } = data;

    if (!name || !contact || !title || !description) {
      return new Response(JSON.stringify({ error: '缺少必要字段' }), { status: 400 });
    }

    // iCloud SMTP配置（请替换成你自己的密码或专用App密码）
    const transporter = nodemailer.createTransport({
      host: 'smtp.mail.me.com',
      port: 587,
      secure: false,
      auth: {
        user: 'goodmanjingwenzhou@icloud.com',
        pass: process.env.ICLOUD_APP_PASSWORD || '', // 环境变量存密码
      },
    });

    const mailOptions = {
      from: '"ROROSPHERE网站" <goodmanjingwenzhou@icloud.com>',
      to: 'goodmanjingwenzhou@icloud.com',
      subject: `新创意申请: ${title}`,
      text: `
        你收到一条新的创意申请：

        姓名: ${name}
        联系方式: ${contact}
        项目标题: ${title}
        项目简介: ${description}

        请尽快审核并联系申请者。
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: '提交成功' }), { status: 200 });
  } catch (error) {
    console.error('邮件发送失败:', error);
    return new Response(JSON.stringify({ error: '邮件发送失败' }), { status: 500 });
  }
}
