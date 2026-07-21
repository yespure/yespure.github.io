# Tiancheng Li Portfolio
# Weblink: yespure.github.io

一个使用原生 HTML、CSS 和 JavaScript 制作的个人作品集网站，面向艺术、游戏设计、工具开发和视觉作品展示。

## 页面

- `index.html`：首页与精选作品入口
- `games.html`：游戏作品
- `tools.html`：工具与技术项目
- `2dart.html`：2D Arts 响应式画廊
- `projects.html`：综合项目
- `about.html`：个人简介、联系方式与精简履历

## 文件结构

```text
yespure.github.io/
├── index.html
├── games.html
├── tools.html
├── 2dart.html
├── projects.html
├── about.html
├── resume.pdf
├── css/
│   └── main.css
├── js/
│   └── collection-pages.js
└── Images/
    ├── testbackground.png
    └── 2d-art/
```

`resume.pdf` 和 `Images/2d-art` 中的正式作品图片需要由网站作者自行添加。

## 本地预览

直接双击 `index.html` 即可浏览。修改文件后，在浏览器中按 `Ctrl + F5` 强制刷新。

## 修改个人信息

在 `index.html`、`about.html` 和 `js/collection-pages.js` 中搜索并替换：

```text
your-email@example.com
your-username
Your city
20XX
```

然后在 `about.html` 中填写真实的学校、专业、经历、技能和软件信息。不要保留示例占位内容。

## 修改项目内容

Games、Tools 和 Projects 的内容位于：

```text
js/collection-pages.js
```

修改 `pages` 对象中的标题、类型、介绍和描述即可。

## 修改 2D Arts 画廊

将作品图片放入：

```text
Images/2d-art/
```

然后修改 `js/collection-pages.js` 中的 `artworks` 数组：

```javascript
["Images/2d-art/art-01.jpg", "作品名称", "作品分类", "2026", "large"]
```

可用尺寸：

- `large`：大型横向作品
- `wide`：横向作品
- `tall`：竖向作品
- `standard`：标准作品

## 添加简历

将 PDF 简历命名为：

```text
resume.pdf
```

并放在网站根目录，About 页面中的下载按钮就可以正常使用。

## 发布到 GitHub Pages

1. 将所有网站文件提交到 GitHub 仓库。
2. 打开仓库的 `Settings`。
3. 进入 `Pages`。
4. 在发布来源中选择包含网站文件的分支和根目录。
5. 保存并等待 GitHub 完成发布。

## 修改网站网址

### 方案一：修改 GitHub 默认网址

用户主页仓库必须命名为：

```text
<GitHub用户名>.github.io
```

默认网址会是：

```text
https://<GitHub用户名>.github.io
```

因此 `yespure.github.io` 中的 `yespure` 通常对应 GitHub 用户名或组织名。若要改变这一部分，通常需要改变 GitHub 账户/组织名称，并确保仓库名称与新的账户名一致。

普通项目仓库的默认网址通常是：

```text
https://<GitHub用户名>.github.io/<仓库名>/
```

修改仓库名会改变项目站点路径。GitHub 不保证旧的 Pages 项目网址在仓库重命名后自动跳转。

### 方案二：使用自己的域名（推荐）

购买域名后：

1. 打开 GitHub 仓库的 `Settings → Pages`。
2. 在 `Custom domain` 中填写域名，例如 `portfolio.example.com`。
3. 在域名服务商处配置相应 DNS 记录。
4. DNS 生效后启用 HTTPS。

使用子域名时，通常建立一条 `CNAME` 记录，指向 `<GitHub用户名>.github.io`，不要包含仓库路径。建议先在 GitHub 中验证域名，并避免使用通配符 DNS 记录。

DNS 修改可能需要一段时间才能在全球生效。

## 常见问题

### 样式没有更新

按 `Ctrl + F5` 强制刷新，并确认 HTML 中引用的是：

```html
<link rel="stylesheet" href="css/main.css">
```

### 图片没有显示

检查文件名、扩展名和大小写是否与 `collection-pages.js` 完全一致。GitHub Pages 对大小写敏感。

### 联系按钮不能使用

确认所有 `your-email@example.com` 都已替换为真实邮箱。

## 技术说明

该网站不依赖构建工具或框架，可以直接部署到 GitHub Pages。主要使用：

- HTML5
- CSS Grid 与响应式布局
- 原生 JavaScript
- Google Fonts

## License

网站代码可由作者自行使用和修改。图片、个人作品和简历内容的版权归 Tiancheng Li 所有。
