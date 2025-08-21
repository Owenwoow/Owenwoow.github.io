/* 这是一个用于创建带有前置元数据的新文章 markdown 文件的脚本 */

import fs from "fs";
import path from "path";

function getDate() {
	const today = new Date();
	const year = today.getFullYear();
	const month = String(today.getMonth() + 1).padStart(2, "0");
	const day = String(today.getDate()).padStart(2, "0");

	return `${year}-${month}-${day}`;
}

function getDatePath() {
	const today = new Date();
	const year = today.getFullYear();
	const month = String(today.getMonth() + 1).padStart(2, "0");
	const day = String(today.getDate()).padStart(2, "0");

	return `${year}/${month}/${day}`;
}

const args = process.argv.slice(2);

if (args.length === 0) {
	console.error(`Error: No filename argument provided
Usage: npm run new-post -- <filename>`);
	process.exit(1); // 终止脚本并返回错误代码 1
}

let fileName = args[0];

// 如果不存在则添加 .md 扩展名
const fileExtensionRegex = /\.(md|mdx)$/i;
if (!fileExtensionRegex.test(fileName)) {
	fileName += ".md";
}

const datePath = getDatePath();
const targetDir = "./src/content/posts/";
const fullPath = path.join(targetDir, datePath, fileName);

if (fs.existsSync(fullPath)) {
	console.error(`Error: File ${fullPath} already exists `);
	process.exit(1);
}

// 递归模式创建多级目录（年/月/日）
const dirPath = path.dirname(fullPath);
if (!fs.existsSync(dirPath)) {
	fs.mkdirSync(dirPath, { recursive: true });
}

// 在日期目录下创建空的 img 文件夹
const imgDir = path.join(dirPath, "img");
if (!fs.existsSync(imgDir)) {
	fs.mkdirSync(imgDir, { recursive: true });
	console.log(`Created img directory: ${imgDir}`);
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

fs.writeFileSync(fullPath, content);

console.log(`Post ${fullPath} created`);
console.log(`Article structure: /content/posts/${datePath}/${fileName}`);
console.log(`Images folder: /content/posts/${datePath}/img/`);
