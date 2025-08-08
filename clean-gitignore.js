const fs = require('fs');
const path = require('path');

const filePath = path.resolve(process.cwd(), '.gitignore');

if (!fs.existsSync(filePath)) {
  console.error('.gitignore 文件不存在！');
  process.exit(1);
}

let content = fs.readFileSync(filePath, 'utf8');

// 定义常见隐藏字符的Unicode编码
const hiddenChars = [
  { char: '\uFEFF', name: 'BOM (Byte Order Mark)' },
  { char: '\u200B', name: '零宽空格 (Zero Width Space)' },
  { char: '\u200C', name: '零宽非连接符 (Zero Width Non-Joiner)' },
  { char: '\u200D', name: '零宽连接符 (Zero Width Joiner)' },
  { char: '\u2060', name: '无断空格 (Word Joiner)' },
  { char: '\t', name: '制表符 (Tab)' },
  { char: '\r', name: '回车符 (CR)' }
];

// 检查并报告隐藏字符
let hasHidden = false;

hiddenChars.forEach(({ char, name }) => {
  const regex = new RegExp(char, 'g');
  const matches = content.match(regex);
  if (matches && matches.length > 0) {
    console.log(`发现隐藏字符: ${name}，数量: ${matches.length}`);
    hasHidden = true;
  }
});

if (!hasHidden) {
  console.log('未发现隐藏字符。');
} else {
  // 清理隐藏字符（除了换行符 LF \n）
  hiddenChars.forEach(({ char }) => {
    content = content.split(char).join('');
  });

  // 保留正常换行符 \n，写回文件
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('.gitignore 文件中隐藏字符已清理并覆盖保存。');
}
