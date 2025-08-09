#!/bin/bash

set -e  # 遇错即停，防止脚本盲目执行

echo "创建 packages 目录及子目录..."
mkdir -p packages/desktop packages/mobile packages/shared
echo "目录结构创建完毕."

echo "开始移动电脑端相关代码到 packages/desktop..."
FILES_TO_MOVE=("src" "app" "components" "package.json" "package-lock.json" "next.config.ts" "tsconfig.json" "postcss.config.mjs" "tailwind.config.js")

for item in "${FILES_TO_MOVE[@]}"; do
  if [ -e "$item" ]; then
    echo "移动 $item 到 packages/desktop/"
    mv "$item" packages/desktop/
  else
    echo "警告：找不到 $item ，跳过。"
  fi
done

echo "电脑端代码移动完成."

echo ""
echo "请手动进入 packages/mobile 目录，运行如下命令初始化移动端项目："
echo "  cd packages/mobile"
echo "  expo init rorosphere-mobile"
echo "  # 按提示选择模板完成初始化"
echo ""
echo "如果未安装 expo-cli，可以运行："
echo "  npm install -g expo-cli"
echo ""

echo "请在项目根目录 package.json 中添加以下配置，开启 Yarn Workspaces："
echo '{
  "private": true,
  "workspaces": [
    "packages/*"
  ]
}'

echo ""
echo "脚本执行完毕，接下来你可以："
echo "  yarn install             # 安装所有依赖"
echo "  cd packages/desktop && yarn dev   # 启动电脑端"
echo "  cd packages/mobile && expo start  # 启动移动端"
