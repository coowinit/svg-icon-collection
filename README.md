# 🎨 SVG Icon Collection

一个轻量级的 SVG 图标收藏与预览工具，用于集中保存常用 SVG 素材，方便日常网页设计和前端开发时快速查找、预览与下载。

本仓库会持续收集和更新图标。采用 **HTML + CSS + 原生 JavaScript** 构建，无需安装依赖、数据库或后台管理系统。

## 🚀 使用方法

### 在线使用

打开 [SVG 图标收藏页](https://coowinit.github.io/svg-icon-collection/)（需先在仓库中启用 GitHub Pages）。

1. 浏览页面中的 SVG 图标。
2. 在搜索框中输入图标名称或关键词，快速筛选。
3. 点击图标卡片下方的 **「下载」** 按钮，保存原始 SVG 文件。
4. 将下载的文件用于自己的网页、主题或前端项目。

支持中英文关键词搜索。按下 `/` 可以快速聚焦搜索框；在搜索框中按 `Esc` 可以清除搜索并退出。

### 本地使用

1. 下载仓库源码并解压，或使用 Git 克隆仓库。
2. 打开根目录的 `index.html`，即可浏览和搜索图标。
3. 如浏览器限制本地 `file://` 文件下载，可使用 VS Code **Live Server** 在本地启动页面。

## 🔗 开源 SVG 图标资源

下面这些网站适合日常寻找并下载 SVG 图标，可按需挑选并加入本仓库。

| 网站 | 适用场景 | 许可说明 |
| --- | --- | --- |
| [Lucide Icons](https://lucide.dev/icons) | 简洁线性图标、常用界面操作 | ISC |
| [Tabler Icons](https://tabler.io/icons) | 大量通用网页图标、工具与商业场景 | MIT |
| [Bootstrap Icons](https://icons.getbootstrap.com/) | Bootstrap 网站、界面控件 | MIT |
| [Heroicons](https://heroicons.com/) | 导航、操作按钮、现代 UI | MIT |
| [Remix Icon](https://remixicon.com/) | 线性与填充风格图标 | Remix Icon License v1.0（请查看最新条款） |
| [Simple Icons](https://simpleicons.org/) | 技术平台与品牌标识 | 项目采用 CC0；品牌商标另行受保护 |

**收集建议：** 优先从 Lucide、Tabler Icons 和 Bootstrap Icons 中寻找常用界面图标，保持视觉风格相对统一。下载后按本文的“新增或删除图标”步骤加入即可。

**授权提醒：** 开源不等于无条件使用。将图标上传到公开 GitHub 仓库属于重新分发，应阅读对应项目的最新许可证，保留要求的版权或许可声明；品牌 Logo 还需注意商标权。特别是 Remix Icon 已更新为专用许可证，不应再简单视为 Apache 2.0。

## ➕ 新增或删除图标

为了便于长期维护，图标文件与展示数据分开管理。

**新增图标：**

1. 将 SVG 文件放入 `icons/` 目录，文件名建议使用小写英文和短横线，例如 `new-icon.svg`。
2. 打开 `js/icons.js`，在 `ICONS` 数组中添加一条记录：

```js
{
  "file": "new-icon.svg",
  "name": "New Icon",
  "keywords": "新图标 example keyword"
}
```

3. 保存并刷新 `index.html`，确认图标能够显示、搜索和下载。
4. 将新增文件和 `js/icons.js` 的修改一起提交到 GitHub。

**删除图标：** 删除 `icons/` 中对应的 SVG 文件，并同步移除 `js/icons.js` 中的记录。

**字段说明：**

| 字段 | 用途 |
| --- | --- |
| `file` | SVG 文件名，须与 `icons/` 中的文件一致 |
| `name` | 页面上显示的图标名称 |
| `keywords` | 搜索关键词，可填写中英文词语 |

建议保持文件名唯一。新增图标不需要修改 `index.html`、`css/style.css` 或 `js/app.js`。

## 📁 项目结构

```text
svg-icon-collection/
├── index.html       # 图标展示页面
├── css/
│   └── style.css    # 页面样式与响应式布局
├── js/
│   ├── icons.js     # 图标清单（新增图标时编辑）
│   └── app.js       # 搜索、展示和下载功能
├── icons/           # SVG 原始文件
└── README.md        # 使用与维护说明
```

## 🌐 GitHub Pages 部署

如需在线使用，可在 GitHub 仓库中打开 **Settings → Pages**：

1. 在 **Build and deployment** 中选择 **Deploy from a branch**。
2. 选择 `main` 分支和 `/(root)` 目录，保存。
3. 发布完成后，访问 `https://coowinit.github.io/svg-icon-collection/`。

后续更新并推送至已配置的发布分支后，GitHub Pages 会重新部署。

## 🔄 维护原则

- 以 **收藏、查找、预览、下载** 为核心，不增加不必要的复杂功能。
- 保留原始 SVG 文件，避免因展示需求而修改素材。
- 新增图标只需更新 `icons/` 和 `js/icons.js`。
- 尽量保持简单的目录结构，方便长期积累和迁移。
- 使用第三方 SVG 前，请确认来源、授权条款以及是否允许重新分发；不要加入不可信脚本或外部资源。

---

**持续收藏 · 定期更新。**
