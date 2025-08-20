---
title: Fuwari 简易使用指南
published: 2025-08-20
update: 
description: "如何使用 Fuwari 博客模板。"
image: "./cover.png"
tags: ["Fuwari", "Blog"]
category: 示例
draft: false
---


## 文章前言
> 这个为发布文章的格式,每片文章前都要填写此内容

```yaml
---
title: My First Blog Post
published: 2023-09-09
description: This is the first post of my new Astro blog.
image: ./cover.jpg
tags: [Foo, Bar]
category: Front-end
draft: false
---
```

| 属性 | 描述 |
|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `title` | 文章标题 |
| `published` | 文章发布日期 |
| `description` | 文章简介，显示在首页 |
| `image` | 文章封面图片路径。<br/>1. 以 `http://` 或 `https://` 开头：使用网页图片<br/>2. 以 `/` 开头：用于 `public` 目录中的图片<br/>3. 不带任何前缀：相对于 markdown 文件 |
| `tags` | 文章标签 |
| `category` | 文章分类 |
| `draft` | 如果文章仍为草稿，则不会显示（false：显示/true：不显示）|

## 在哪放置文章



您的md文件应放置在`src/content/posts/`目录中。您也可以创建子目录，以便更好地组织您的帖子和资源。

```
src/content/posts/
├── post-1.md
└── post-2/
    ├── cover.png
    └── index.md
```
