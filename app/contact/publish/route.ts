import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "请填写所有必填字段" },
        { status: 400 }
      );
    }

    // 配置 iCloud SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.mail.me.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.ICLOUD_USER, // 你的 iCloud 邮箱
        pass: process.env.ICLOUD_APP_PASSWORD // iCloud app 专用密码
      }
    });

    // 邮件内容
    const mailOptions = {
      from: process.env.ICLOUD_USER,
      to: "goodmanjingwenzhou@icloud.com",
      subject: `Rorosphere 联系我们：来自 ${name}`,
      text: `
姓名: ${name}
邮箱: ${email}
电话: ${phone}
消息内容:
${message}
      `
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "提交成功" }, { status: 200 });
  } catch (error) {
    console.error("发送邮件失败:", error);
    return NextResponse.json(
      { error: "发送失败，请稍后重试" },
      { status: 500 }
    );
  }
}
