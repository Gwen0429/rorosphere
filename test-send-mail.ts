const nodemailer = require('nodemailer');

async function testSendMail() {
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

  const mailText = `
来自本地测试：

需求类型：creator
姓名：Gwen
邮箱：gwen@example.com
主题：测试邮件

详细信息：
这是本地测试内容。
  `;

  const mailOptions = {
    from: `"ROROSPHERE测试" <${process.env.ICLOUD_EMAIL}>`,
    to: process.env.ICLOUD_EMAIL,
    subject: `[测试] 测试邮件`,
    text: mailText,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('邮件发送成功，信息:', info);
  } catch (error) {
    console.error('邮件发送失败:', error);
  }
}

testSendMail();

