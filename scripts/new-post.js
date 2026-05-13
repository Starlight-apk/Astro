/* 这是一个用于创建带有前置数据的新文章 markdown 文件的脚本 */

import fs from "fs";
import path from "path";

function getDate() {
	const today = new Date();
	const year = today.getFullYear();
	const month = String(today.getMonth() + 1).padStart(2, "0");
	const day = String(today.getDate()).padStart(2, "0");

	return `${year}-${month}-${day}`;
}

const args = process.argv.slice(2);

if (args.length === 0) {
	console.error(`错误：未提供文件名参数
使用方法：npm run new-post -- <文件名>`);
	process.exit(1); // 终止脚本并返回错误码 1
}

let fileName = args[0];

// 如果没有 .md 或 .mdx 扩展名则自动添加
const fileExtensionRegex = /\.(md|mdx)$/i;
if (!fileExtensionRegex.test(fileName)) {
	fileName += ".md";
}

const targetDir = "./src/content/posts/";
const fullPath = path.join(targetDir, fileName);

if (fs.existsSync(fullPath)) {
	console.error(`错误：文件 ${fullPath} 已存在`);
	process.exit(1);
}

// 递归模式创建多级目录
const dirPath = path.dirname(fullPath);
if (!fs.existsSync(dirPath)) {
	fs.mkdirSync(dirPath, { recursive: true });
}

const content = `---
title: ${args[0]}
published: ${getDate()}
description: ''
image: ''
tags: []
category: ''
draft: false 
lang: ''
---
`;

fs.writeFileSync(path.join(targetDir, fileName), content);

console.log(`文章已创建：${fullPath}`);