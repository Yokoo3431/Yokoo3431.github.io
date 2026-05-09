# Yoko 建筑设计作品集

一个静态建筑设计作品集网站，采用纯 HTML/CSS/JS 构建，零依赖、零后端、零成本托管。

## 特性

- **深色/浅色双模式** - 自动跟随系统偏好，手动切换记忆
- **响应式设计** - 手机、平板、桌面自适应
- **项目分类筛选** - 建成 / 概念 / 竞赛
- **项目详情弹窗** - 沉浸式浏览项目完整信息
- **滚动动画** - 优雅的渐入效果
- **图片懒加载** - 项目再多也不卡

## 快速开始

### 1. 替换图片

将你的项目图片放入 `assets/images/` 目录，按以下命名规则：

```
assets/images/
├── hero.jpg                    # 首屏背景图
├── about.jpg                   # 关于页面个人照片
├── project-01-cover.jpg        # 项目1封面
├── project-01-01.jpg           # 项目1详情图1
├── project-01-02.jpg           # 项目1详情图2
└── ...
```

### 2. 编辑项目数据

打开 `assets/js/main.js`，找到 `projects` 数组，修改为你自己的项目：

```javascript
const projects = [
    {
        id: 1,
        title: "你的项目名称",
        category: "built",           // built | unbuilt | competition
        categoryLabel: "建成项目",    // 显示的分类名称
        year: "2024",
        location: "项目地点",
        type: "建筑类型",
        area: "建筑面积",
        featured: true,              // true = 大图展示
        cover: "assets/images/你的封面图.jpg",
        description: `<p>项目描述，支持 HTML 标签</p>`,
        gallery: [
            "assets/images/详情图1.jpg",
            "assets/images/详情图2.jpg"
        ]
    },
    // ...更多项目
];
```

### 3. 修改个人信息

在 `index.html` 中搜索并替换以下内容：

- `YOKO` → 你的名字
- `建筑师，专注于...` → 你的个人简介
- `your.email@example.com` → 你的邮箱
- 教育背景、所在地等信息

### 4. 本地预览

直接用浏览器打开 `index.html` 即可预览。

### 5. 部署上线（免费）

#### 方案 A：GitHub Pages（推荐）

1. 在 GitHub 创建新仓库，名称设为 `你的用户名.github.io`
2. 上传所有文件到仓库
3. 访问 `https://你的用户名.github.io`

#### 方案 B：Vercel

1. 注册 [vercel.com](https://vercel.com)
2. 导入 GitHub 仓库
3. 自动部署，获得 `xxx.vercel.app` 域名

#### 方案 C：Netlify

1. 注册 [netlify.com](https://netlify.com)
2. 拖拽文件夹上传
3. 自动获得 `xxx.netlify.app` 域名

## 文件结构

```
portfolio/
├── index.html              # 主页面
├── assets/
│   ├── css/
│   │   └── style.css       # 样式表
│   ├── js/
│   │   └── main.js         # 交互逻辑 + 项目数据
│   └── images/             # 图片目录
└── README.md               # 本文件
```

## 自定义样式

如需调整配色、字体等，编辑 `assets/css/style.css` 顶部的 CSS 变量：

```css
:root {
    --accent: #c9a96e;        /* 主题色（金色） */
    --font-serif: 'Noto Serif SC', ...;  /* 衬线字体 */
    --font-sans: 'Inter', ...;           /* 无衬线字体 */
}
```

## 注意事项

1. **图片优化**：建议将图片压缩至 1920px 宽以内，单张不超过 500KB
2. **首屏图片**：`hero.jpg` 建议 1920×1080 或更高
3. **项目封面**：建议 1200×900（4:3）
4. **详情图**：建议 1600×1200，统一比例更佳

## 技术栈

- 纯 HTML5 / CSS3 / Vanilla JS
- 零框架依赖
- 零构建步骤
- 零后端服务
