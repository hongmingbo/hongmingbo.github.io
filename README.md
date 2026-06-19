# Hmingbo.github.io

个人作品集网站，采用 Lusion.co 设计语言（暗色沉浸式主题、滚动驱动叙事、3D 粒子背景）。

**站点地址**：https://hongmingbo.github.io

## 技术栈

- **HTML5** + 语义化结构
- **CSS3** — CSS 变量、Grid/Flexbox、`mix-blend-mode`、backdrop-filter
- **Vanilla JavaScript** — 无框架依赖，原生 ES6+
- **Canvas API** — 3D 粒子背景（80 粒子 + 鼠标排斥 + 距离连接线）
- **IntersectionObserver** — 滚动渐入动画
- **GitHub Pages** — 静态站点托管

## 项目结构

```
├── index.html    # 主页面（4 个 section + 项目弹窗 + 加载屏）
├── style.css     # 设计令牌 + 极简组件 + 响应式
├── app.js        # 粒子场 + 3D 卡片 + 数字递增 + 磁吸按钮
└── README.md     # 本文件
```

## 设计系统

### 配色（暗色沉浸）

| Token | 值 | 用途 |
|-------|-----|------|
| `--bg` | `#0a0a0b` | 主背景 |
| `--bg-card` | `#141416` | 卡片背景 |
| `--text-primary` | `#fafafa` | 主文字 |
| `--text-secondary` | `#a1a1aa` | 次文字 |
| `--accent` | `#818cf8` | 强调色（紫蓝） |
| `--accent-2` | `#c084fc` | 渐变辅色 |
| `--green` | `#34d399` | 状态/数字 |

### 排版层级

- **Hero 主标题**：`clamp(56-120px)`，letter-spacing `-0.04em`，两行动画渐入
- **Manifesto**：`clamp(22-36px)`，3 段描述
- **Stats 数字**：64px 等宽字体 + 渐变色
- **正文**：15-17px，行高 1.7

## 核心动画

| 动画 | 实现 | 性能 |
|------|------|------|
| **3D 粒子背景** | Canvas 80 粒子，鼠标 100px 排斥，120px 内连接线 | GPU 加速 |
| **滚动视差** | 粒子跟随滚动 0.15 系数 | transform |
| **文字渐入** | IntersectionObserver 48px → 0，1.1s | opacity + transform |
| **Hero 行动画** | lineReveal 0.2-0.4s 错开 110% → 0 | transform |
| **卡片 3D 倾斜** | rotateX/Y lerp 0.08，perspective 1200px | transform |
| **数字递增** | 1.8s ease-out cubic | textContent |
| **磁吸按钮** | lerp 0.18，hover scale 1.02 | transform |
| **加载屏** | 1.8s 进度条 + 渐入数字 | width |
| **跑马灯** | 40s 线性循环，hover 暂停 | transform |
| **光晕视差** | 跟随鼠标 lerp 0.05 | transform |

## 内容区块

1. **Hero** — 大字分多行 + tagline + meta pills
2. **关于 (Manifesto)** — 3 段描述 + 6 个领域标签
3. **精选项目** — 6 个项目卡片 + 4 列数字统计
4. **技术栈跑马灯** — 10 项 × 2 份无缝循环
5. **CTA** — "下一个项目准备好放飞了吗？" + 主按钮
6. **项目详情弹窗** — 点击卡片展开完整说明

## 本地预览

```bash
# 直接打开（最简单）
start index.html

# 或使用 Python HTTP 服务器
python -m http.server 8000
# 然后访问 http://localhost:8000
```

## 部署

通过 `git push` 推送到 `main` 分支，GitHub Pages 自动部署（1-2 分钟生效）。

## 浏览器兼容

- Chrome / Edge / Safari 现代版本
- 移动端：768px 断点（隐藏自定义光标、顶部导航、滚动提示）
- 性能：`will-change: transform` + GPU 加速

## 技术决策记录

- **无依赖框架**：保持加载速度和可控性
- **CSS 变量管理设计令牌**：方便主题切换和维护
- **Canvas 而非 WebGL**：3D 粒子场景无需 WebGL 复杂度
- **IntersectionObserver 替代滚动监听**：性能更优

## 项目灵感

- [Lusion.co](https://lusion.co) — 主设计参考
- [Lusion.co/about](https://lusion.co/about) — 排版与信息架构参考

## 许可

个人项目，代码与设计仅供参考。
