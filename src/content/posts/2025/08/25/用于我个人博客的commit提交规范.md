---
title: 用于我个人博客的commit提交规范
published: 2025-08-25
description: '探讨在个人博客开发与维护中如何制定和应用 Commit 提交规范，以保持提交历史清晰、可追踪。'
image: ''
tags: ['commit规范', 'GIt']
category: '记录'
draft: false 
lang: ''
---

### 常见的规范基础

社区里最常用的是 **Conventional Commits**，它提供了统一的格式：

```
<type>(<scope>): <subject>
```

## 关于我博客项目常用的 commit 规范概览

#### 1. type（提交类型）

用于说明这次提交的性质。常见类型及在博客项目里的应用：

- **feat**: 新增功能
  - 例：`feat(post): 更新 《添加 RSS 图片处理功能》`
- **fix**: 修复 bug
  - 例：`fix(theme): 修正暗黑模式下的代码高亮颜色`

#### 2. scope（影响范围，可选）

说明修改的具体模块，例如：

- `post`（文章相关）
- `rss`（订阅源功能）
- `page` (页面)

#### 3. subject（简短描述）

- 用简洁动词开头（添加、修复、优化等）。
- 不以大写字母开头，不加句号结尾。
