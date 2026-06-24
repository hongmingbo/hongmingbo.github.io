# Hmingbo.github.io

个人作品集网站，采用 Lusion.co 设计语言（暗色沉浸式主题、滚动驱动叙事、3D 粒子背景）。

**站点地址**：https://hongmingbo.github.io

## 技术栈

- **HTML5** + 语义化结构
- **CSS3** — CSS 变量、Grid/Flexbox、`mix-blend-mode`、backdrop-filter
- **Vanilla JavaScript** — 无框架依赖，原生 ES6+
- **Canvas API** — 3D 粒子背景（80 粒子 + 鼠标排斥 + 距离连接线）
- **IntersectionObserver** — 滚动渐入动画
- **SVG** — 内联 3D 风格图标（渐变 + drop-shadow）
- **GitHub Pages** — 静态站点托管

## 项目结构

```
├── index.html    # 主页面（5 个 section + 7 项目弹窗 + 加载屏）
├── style.css     # 设计令牌 + 极简组件 + 响应式（27KB）
├── app.js        # 粒子场 + 3D 卡片 + 数字递增 + 磁吸按钮 + 项目数据（19KB）
└── README.md     # 本文件
```

## 项目清单

| # | 项目 | 类型 | 技术栈 |
|---|------|------|--------|
| 1 | **obsidian-vault** | 知识库 | Obsidian · Python · Hermes Agent |
| 2 | **we-mp-rss** | 自动化工具 | Playwright · Python · RSS |
| 3 | **监控系统** | 基础设施 | Docker · Uptime Kuma · Healthchecks |
| 4 | **Cloudflare Tunnel** | 网络方案 | Cloudflare · WARP · DoH |
| 5 | **记忆系统** | 架构设计 | AI · 三层记忆 · Agent |
| 6 | **Cloud Mail** | 云邮箱 | Workers · D1 · KV · Resend |
| 7 | **本作品集** | 网站 | HTML · CSS · JavaScript |

## 3D 图标系统

所有项目卡片图标均为**自绘内联 SVG**（无外部依赖），每个项目独立配色和意象：

- obsidian-vault → 紫色立方体
- we-mp-rss → 金色传波波纹
- 监控系统 → 绿色柱状图
- Cloudflare Tunnel → 紫色云+箭头
- 记忆系统 → 紫色大脑（径向渐变）
- Cloud Mail → 橙色云端+邮件
- 本作品集 → 青色八角星

## 设计系统

### 配色

| Token | 值 | 用途 |
|-------|-----|------|
| `--bg` | `#0a0a0b` | 主背景 |
| `--bg-card` | `#141416` | 卡片背景 |
| `--text-primary` | `#fafafa` | 主文字 |
| `--text-secondary` | `#a1a1aa` | 次文字 |
| `--accent` | `#818cf8` | 强调色（紫蓝） |
| `--accent-2` | `#c084fc` | 渐变辅色 |

### 排版层级

- **Hero 主标题**：clamp(56-120px)，line-height 1.3，letter-spacing -0.02em
- **Manifesto**：clamp(22-36px)，3 段描述
- **Stats 数字**：64px 等宽字体 + 渐变色
- **正文**：15-17px，行高 1.7

## 核心动画

| 动画 | 实现 | 性能 |
|------|------|------|
| **3D 粒子背景** | Canvas 80 粒子，鼠标 100px 排斥，120px 内连接线 | GPU 加速 |
| **滚动视差** | 粒子跟随滚动 0.15 系数 | transform |
| **文字渐入** | IntersectionObserver 48px → 0，1.1s | opacity + transform |
| **Hero 行动画** | lineReveal 0.2-0.4s 错开渐入 | opacity |
| **卡片 3D 倾斜** | rotateX/Y lerp 0.08，perspective 1200px | transform |
| **SVG 图标浮动** | hover 时 translateY(-6px) rotate(-8deg) scale(1.08) | transform |
| **数字递增** | 1.8s ease-out cubic | textContent |
| **磁吸按钮** | lerp 0.18，hover scale 1.02 | transform |
| **加载屏** | 1.8s 进度条 + 渐入数字 | width |
| **跑马灯** | 40s 线性循环，hover 暂停 | transform |
| **光晕视差** | 跟随鼠标 lerp 0.05 | transform |

## 内容区块

1. **Hero** — "大胆的想法，付诸实践。" + 副标题 + whoami 标签
2. **关于 (Manifesto)** — 3 段描述 + 6 个领域标签
3. **精选项目** — 7 个项目卡片 + 4 列数字统计
4. **技术栈跑马灯** — 10 项 × 2 份无缝循环
5. **CTA** — "下一个项目准备好放飞了吗？" + 主按钮
6. **项目详情弹窗** — 点击卡片展开完整说明

## 本地预览

```bash
start index.html        # 直接打开
python -m http.server 8000   # 或 HTTP 服务器
```

## 部署

推送到 `main` 分支 → GitHub Pages 自动部署（1-2 分钟生效）。

## 技术决策记录

- **无框架**：保持加载速度和可控性
- **CSS 变量管理令牌**：方便主题切换和维护
- **Canvas 而非 WebGL**：粒子场景无需 WebGL 复杂度
- **IntersectionObserver 替代滚动监听**：性能更优
- **内联 SVG 图标**：零外部依赖、零授权风险、hover 动效可控

## 项目灵感

- [Lusion.co](https://lusion.co) — 主设计参考
- [Lusion.co/about](https://lusion.co/about) — 排版与信息架构参考

## 许可

个人项目，代码与设计仅供参考。