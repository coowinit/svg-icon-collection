# SVG Icon Collection 🎨

一个轻量级、可长期维护的个人 SVG 图标收藏页：**预览、搜索、下载**。不需要后台、数据库、前端框架或 CDN。

## v1.0.0

- 13 个国家旗标（来自用户提供的 SVG，保留原始 SVG 内容，仅统一文件名）。
- 50 个常用界面图标（随项目提供，24×24 线性风格）。
- 宽屏电脑端每行 10 列，随屏幕宽度自动调整为 8 / 6 / 4 / 3 / 2 列；支持中文、英文关键词搜索。
- 紧凑型页头与“持续收藏 · 定期更新”提示，突出长期维护定位。
- 每张卡片只有图标、名称与 SVG 下载按钮，无分类、详情弹窗或复制代码功能。
- 可直接双击 `index.html` 本地打开，或通过 GitHub Pages 发布。

## 本地使用

解压后直接打开 `index.html`，搜索或点击卡片上的“下载”即可。少数浏览器或本地安全策略可能对 `file://` 下载行为有限制，此时请用 VS Code Live Server 或 GitHub Pages 打开。

## 新增 / 删除 SVG

1. 将 SVG 放入 `icons/`（文件名用小写英文与短横线，例如 `new-icon.svg`）。
2. 编辑 `js/icons.js`，在 `ICONS` 数组中增删一条：

```js
{ "file": "new-icon.svg", "name": "New Icon", "keywords": "新增图标 search term" }
```

3. 保存后刷新页面，确认能显示、搜索并下载。
4. 提交到 GitHub。无需重新生成页面。

注意：文件名必须唯一，搜索用 `name`、`file` 和 `keywords` 字段。SVG 内容不应含不可信脚本、外部资源或恶意 XML；导入第三方 SVG 前请审核来源及许可。

## 国家旗标命名

输入文件原本用**语言代码**命名，现改为 `flag-国家或地区代码.svg`，便于后续管理。注意语言与国家并不等价：

| 原文件 | 新文件 | 实际旗帜 |
| --- | --- | --- |
| `de.svg` | `flag-de.svg` | 德国 |
| `en.svg` | `flag-gb.svg` | 英国（不是英语通用标志） |
| `es.svg` | `flag-es.svg` | 西班牙 |
| `fr.svg` | `flag-fr.svg` | 法国 |
| `hi.svg` | `flag-in.svg` | 印度（不是印地语通用标志） |
| `it.svg` | `flag-it.svg` | 意大利 |
| `ja.svg` | `flag-jp.svg` | 日本 |
| `ko.svg` | `flag-kr.svg` | 韩国 |
| `pt.svg` | `flag-pt.svg` | 葡萄牙（不是巴西） |
| `ru.svg` | `flag-ru.svg` | 俄罗斯 |
| `tr.svg` | `flag-tr.svg` | 土耳其 |
| `uk.svg` | `flag-ua.svg` | 乌克兰（避免与英国 UK 缩写混淆） |
| `zh.svg` | `flag-cn.svg` | 中国 |

## 文件结构

```text
svg-icon-collection/
├── index.html
├── css/style.css
├── js/icons.js         # 手动维护的小型图标清单
├── js/app.js           # 搜索与预览、下载
├── icons/              # 所有原始 SVG 文件（无需分类）
└── README.md
```

## GitHub Pages

在仓库 Settings → Pages 中选择 `Deploy from a branch`，`main` 分支和 `/ (root)` 目录，保存。发布后打开系统提供的 Pages URL。将 `index.html` 顶部的 GitHub 入口链接由 `https://github.com/coowinit` 改为实际仓库地址。

## 后续维护原则

保持简单，以收藏、查找和下载为主。新增图标只更新 `icons/` 和 `js/icons.js`。若今后图标数量显著增长，再考虑索引自动化，不提前引入分类系统、后台或数据库。

## 来源与授权

- 国家旗标：来自项目维护者提供的原始素材，版权/许可状态需由维护者依据素材来源确认。
- 常用线性图标：本项目提供的基础 SVG 路径示例；如替换为第三方图标，请保留相应许可与署名要求。
- 避免上传带有敏感、未授权品牌标识的 SVG。
