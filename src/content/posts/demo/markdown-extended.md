---
title: Markdown 扩展功能
published: 2025-08-20
update: 
description: 阅读有关 Fuwari 中 Markdown 功能的更多信息.
image: ''
tags: [Markdown, Fuwari]
category: '示例'
draft: false 
---

## GitHub 存储库卡片

您可以添加链接到 GitHub 存储库的动态卡片，在页面加载时，存储库信息将从 GitHub API 中提取。

::github{repo="saicaca/fuwari"}

使用代码创建 GitHub 存储库卡片 `::github{repo="<owner>/<repo>"}`.

```markdown
::github{repo="saicaca/fuwari"}
```

## Admonitions

支持以下类型的警告：  `note/注意` `tip/提示` `important/重要` `warning/警告` `caution/谨慎`

:::note
Highlights information that users should take into account, even when skimming.

:::

:::tip
Optional information to help a user be more successful.
:::

:::important
Crucial information necessary for users to succeed.
:::

:::warning
Critical content demanding immediate user attention due to potential risks.
:::

:::caution
Negative potential consequences of an action.
:::

### 基本语法

```markdown
:::note
Highlights information that users should take into account, even when skimming.
:::

:::tip
Optional information to help a user be more successful.
:::
```

### 自定义标题

告诫的标题可以自定义。

:::note[我的自定义标题]
这是带有自定义标题的注释。
:::

```markdown
:::note[我的自定义标题]
这是带有自定义标题的注释。
:::
```

### GitHub 语法

> [!TIP]
> [GitHub 语法](https://github.com/orgs/community/discussions/16925)也受支持。

```
> [!NOTE]
> The GitHub syntax is also supported.

> [!TIP]
> The GitHub syntax is also supported.
```