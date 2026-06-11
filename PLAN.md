# Portfolio 个人作品集网站

## 技术栈

| 层级 | 选择 |
|------|------|
| 框架 | Next.js 16 (App Router) |
| 语言 | TypeScript |
| 样式 | Tailwind CSS 4 |
| 内容管理 | Markdown (gray-matter + react-markdown) |
| 动画 | Framer Motion |
| 图标 | Lucide React |
| 部署 | Vercel |
| 版本控制 | Git + GitHub |
| CI/CD | Vercel Auto Deploy |

## 项目结构

```
portfolio/
├── public/                  # 静态资源
├── src/
│   ├── app/                 # Next.js App Router 页面
│   │   ├── layout.tsx       # 全局布局
│   │   ├── page.tsx         # 首页
│   │   ├── projects/        # 项目页
│   │   ├── about/           # 关于我
│   │   └── globals.css      # 全局样式
│   ├── components/          # 可复用组件
│   │   ├── Header.tsx
│   │   ├── ProjectCard.tsx
│   │   └── Footer.tsx
│   ├── content/             # Markdown 内容文件
│   │   └── projects/
│   └── lib/                 # 工具函数
│       └── projects.ts
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 进度

- [x] 技术栈方案确定
- [x] 项目初始化（package.json 手动创建 + npm install）
- [x] 安装额外依赖（framer-motion, lucide-react, gray-matter, react-markdown）
- [x] 搭建页面框架（Layout, Header, Footer）
- [x] 首页（Hero + Highlights，Framer Motion 动画）
- [x] 项目页面（Markdown 内容管理 + 项目卡片 + 详情页）
- [x] 关于我页面
- [x] 初始化 Git & 推送 GitHub
- [x] 连接 Vercel 部署
- [x] 填入个人信息（王锡宽，华东师范大学，联系方式等）
- [x] 填入项目内容（Star NLP 偏见消除 + Agentic RAG）

## Git 工作流

```
main        → 生产分支，推送即部署
dev         → 开发分支
feature/xxx → 功能分支

流程: 本地开发 → git commit → Push GitHub → Vercel 自动部署
```

## Vercel 日志

- 部署日志: Vercel Dashboard → Deployments
- 运行时日志: Vercel Dashboard → Logs
- 访问分析: Vercel Analytics

## 备注

- Vercel 自动为 GitHub 仓库提供 Preview Deployments（PR 预览）
- 日志直接在 Vercel Dashboard 查看，无需额外配置
