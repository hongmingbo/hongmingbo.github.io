// ============================================
// Project Data (中文)
// ============================================
const projects = {
  'obsidian-vault': {
    title: 'obsidian-vault',
    type: '开源项目',
    tags: ['Obsidian', 'Python', 'AI', 'Markdown', '知识管理'],
    detail: `
      <h4>项目概述</h4>
      <p>个人知识库与内容创作工作流，结合 Obsidian + Hermes Agent，实现从抖音内容采集到知识沉淀的全链路自动化。</p>
      <h4>核心功能</h4>
      <ul>
        <li>4 文件夹结构：选题/竞品/方法论/灵感</li>
        <li>三层记忆体系：Global / Important / Temporary</li>
        <li>Markdown → Word/HTML/PDF 输出流水线</li>
        <li>零凭证规则 + 安全记忆管理</li>
        <li>会话结束协议：自动判断是否晋升为重要记忆</li>
      </ul>
      <h4>技术亮点</h4>
      <ul>
        <li>Hermes Agent 集成：skills、profiles、memory store 全链路打通</li>
        <li>Playwright WebKit 截图 + 内容提取</li>
        <li>多格式文档转换（mdstyle skill）</li>
        <li>Obsidian vault 作为单一事实来源</li>
      </ul>
      <h4>链接</h4>
      <p><a href="https://github.com/Hongmingbo/obsidian-vault" target="_blank">github.com/Hongmingbo/obsidian-vault</a></p>
    `
  },
  'we-mp-rss': {
    title: 'we-mp-rss',
    type: '工具',
    tags: ['Playwright', 'Python', 'RSS', '自动化', 'WebKit'],
    detail: `
      <h4>项目概述</h4>
      <p>微信公众号/视频号 RSS 订阅工具，基于 Playwright 实现内容自动提取，支持自动推送。</p>
      <h4>核心功能</h4>
      <ul>
        <li>Playwright WebKit 无头浏览器截图 + 内容提取</li>
        <li>公众号文章正文提取（标题、作者、正文、图片）</li>
        <li>视频号内容解析 + 封面图提取</li>
        <li>RSS/JSON 输出 + 自动推送到订阅端</li>
        <li>环境变量配置：PORT=8001、PLAYWRIGHT_BROWSERS_PATH</li>
      </ul>
      <h4>解决的挑战</h4>
      <ul>
        <li>Windows 环境下 WebKit 路径配置</li>
        <li>PORT 环境变量泄漏问题（Hermes Studio 占用 8748）</li>
        <li>Playwright 浏览器路径与 venv 隔离</li>
      </ul>
      <h4>技术栈</h4>
      <p>Python 3.13+ · Playwright · WebKit · RSS · Windows Service</p>
    `
  },
  'monitoring': {
    title: '监控系统',
    type: '基础设施',
    tags: ['Docker', '监控', '自托管', 'Uptime', 'Healthchecks'],
    detail: `
      <h4>项目概述</h4>
      <p>自托管监控三件套：Uptime Kuma + Healthchecks + Netdata，Docker Compose 一键部署。</p>
      <h4>组件说明</h4>
      <ul>
        <li><strong>Uptime Kuma</strong> — 服务可用性监控 + 多通道告警（Telegram/Email/Webhook）</li>
        <li><strong>Healthchecks</strong> — Cron 任务心跳监控 + 超时告警 + 日志记录</li>
        <li><strong>Netdata</strong> — 实时系统指标可视化（CPU/内存/磁盘/网络）</li>
      </ul>
      <h4>部署方案</h4>
      <ul>
        <li>Docker Compose 一键启动</li>
        <li>Cloudflare Tunnel 内网穿透</li>
        <li>持久化数据卷配置</li>
        <li>TZ 时区设置（Asia/Shanghai）</li>
      </ul>
      <h4>技术栈</h4>
      <p>Docker · Docker Compose · Linux · Cloudflare Tunnel</p>
    `
  },
  'cloudflared': {
    title: 'Cloudflare Tunnel',
    type: '运维',
    tags: ['Cloudflare', 'Docker', '网络', '安全', 'WARP'],
    detail: `
      <h4>项目概述</h4>
      <p>使用 Cloudflare Tunnel + WARP + DoH 实现 Docker 容器安全暴露到公网，无需开放端口。</p>
      <h4>关键决策</h4>
      <ul>
        <li><strong>版本锁定</strong>：Pin cloudflared:2024.5.0，避免 2026.x post-quantum X25519MLKEM768 TLS EOF 问题</li>
        <li><strong>协议强制</strong>：Force HTTP/2 top-level protocol（ISP 阻断 QUIC/UDP/7844）</li>
        <li><strong>DNS 配置</strong>：CNAME proxied: true，ingress 指向 Docker 容器名</li>
        <li><strong>网络隔离</strong>：多服务容器加入共享网络（vaultwarden_vw-net）</li>
        <li><strong>WARP DoH</strong>：本地客户端通过 WARP DoH 解析真实 Cloudflare edges</li>
      </ul>
      <h4>技术栈</h4>
      <p>Cloudflare Tunnel · WARP · Docker · DoH · Named Tunnel</p>
    `
  },
  'memory-system': {
    title: '记忆系统设计',
    type: '设计',
    tags: ['AI', '知识管理', '架构', '设计模式'],
    detail: `
      <h4>项目概述</h4>
      <p>为 AI Agent 设计的三层记忆架构，平衡存储效率与场景匹配，解决长期记忆的"存储-遗忘"矛盾。</p>
      <h4>核心原则</h4>
      <ul>
        <li><strong>分层提炼</strong> — 原始→摘要→规律→画像逐层固化，降低噪声</li>
        <li><strong>震动阈值</strong> — 长期标签需频次/强度门槛，避免单次偶然表达改变画像</li>
        <li><strong>双轨记忆</strong> — 短期上下文（会话）+ 长期画像（持久）并行存储</li>
        <li><strong>筛选优先</strong> — 遗忘策略比存储更重要，核心能力是决定"哪些该记哪些该忘"</li>
        <li><strong>因果追踪</strong> — 记录偏好变化/场景差异/记录错误的判别逻辑</li>
        <li><strong>同频至上</strong> — 记忆的价值在于交互时刻的场景匹配，而非存储容量</li>
        <li><strong>主动洞察</strong> — 识别未表达的需求/情绪/趋势，主动提供价值</li>
      </ul>
      <h4>实现方案</h4>
      <ul>
        <li><strong>Global</strong>：MEMORY.md — 跨项目、长期稳定、每月更新</li>
        <li><strong>Important</strong>：IMPORTANT-NOTES.md — 重要但场景限定、每周更新</li>
        <li><strong>Temporary</strong>：memory/YYYY-MM-DD.md — 单次会话记录、7 天内决定晋升</li>
      </ul>
    `
  },
  'cloud-mail': {
    title: 'Cloud Mail',
    type: '基础设施',
    tags: ['Cloudflare', 'Workers', 'D1', 'KV', 'Resend', '邮箱'],
    detail: `
      <h4>项目概述</h4>
      <p>完全免费、零服务器成本的域名邮箱系统，基于 Cloudflare Workers + D1 + KV + Resend 构建。支持收发邮件、多用户、多域名。</p>
      <h4>架构组件</h4>
      <ul>
        <li><strong>Worker</strong> — 处理 HTTP 请求和邮件路由，10 万请求/天免费</li>
        <li><strong>D1</strong> — 关系数据库：存储邮件元数据、用户、系统设置，5GB 免费</li>
        <li><strong>KV</strong> — 键值缓存：配置缓存、认证 session、日发送计数，1GB 免费</li>
        <li><strong>Resend</strong> — 第三方发信服务，100 封/天/账号免费</li>
        <li><strong>Email Routing</strong> — Cloudflare 邮件路由 → 转 Worker 处理</li>
      </ul>
      <h4>关键设计决策</h4>
      <ul>
        <li><strong>D1-based auth-store</strong>：免费 KV 仅 1000 次写入/天，注册+登录+刷新可能打满配额。改造为 D1 的 _auth_session 表替代 KV 写操作，KV 读不受限</li>
        <li><strong>14 张 D1 表</strong>：email、user、account、setting、perm、role、role_perm、attachments、star、reg_key、oauth、verify_record、_auth_session、sqlite_sequence</li>
        <li><strong>JWT 认证</strong>：jwt_secret 环境变量 + /api/init/{jwt_secret} 初始化</li>
      </ul>
      <h4>部署链路</h4>
      <p>Fork 仓库 → Cloudflare Dashboard → Workers & Pages → 环境变量 → D1+KV 绑定 → Email Routing Catch-all → API 初始化</p>
      <h4>登录地址</h4>
      <p><a href="https://hdzkfx.dpdns.org" target="_blank">hdzkfx.dpdns.org</a></p>
    `
  },
  'portfolio': {
    title: '本作品集',
    type: '网站',
    tags: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages', '设计'],
    detail: `
      <h4>项目概述</h4>
      <p>极简技术感设计的个人作品集，参考 Lusion.co 设计语言。</p>
      <h4>设计</h4>
      <ul>
        <li>暗色沉浸式主题 + 噪点纹理 + 渐变光晕</li>
        <li>JetBrains Mono 等宽字体 + 终端风格 UI</li>
        <li>顶部简洁横排导航 + 锚点滚动</li>
        <li>自定义光标 + 3D 卡片倾斜 + 滚动渐入</li>
      </ul>
      <h4>技术</h4>
      <p>HTML5 · CSS3 (Grid/Flexbox) · Vanilla JavaScript · Canvas API · GitHub Pages</p>
    `
  },
  'helloagent': {
    title: 'HelloAgent',
    type: '工具链',
    tags: ['Android', 'jadx', 'apktool', '逆向', 'MCP'],
    detail: `
      <h4>项目概述</h4>
      <p>Android APK 逆向分析实战工作流：使用 jadx-mcp 工具链自动扫描包树、反编译源码、分析 AndroidManifest、提取字符串资源。</p>
      <h4>关键能力</h4>
      <ul>
        <li><strong>包树扫描</strong>：1428 个包 / 6639 个类，识别核心业务代码 vs 第三方库</li>
        <li><strong>主 Activity 反编译</strong>：MainActivity 调用链、生命周期、UI 绑定</li>
        <li><strong>GreetingHelper 分析</strong>：纯 Java 工具类方法签名与源码</li>
        <li><strong>Manifest 审计</strong>：minSdk 24 / target 34 / exported 组件 / 权限</li>
        <li><strong>strings.xml 提取</strong>：从 APK 资源索引还原字符串常量</li>
      </ul>
      <h4>价值</h4>
      <p>为后续 Android 工具链工程化（jadx + apktool + 自动化回归）提供可复用模板。</p>
    `
  },
  'vibe-coding': {
    title: 'Vibe Coding',
    type: '方法论',
    tags: ['AI', 'Prompt Engineering', 'Claude', 'GEO', '自媒体'],
    detail: `
      <h4>项目概述</h4>
      <p>AI 编程方法论研究：精读 14 个 Vibe Coding 教程文件，提取 38 条可迁移方法论，涵盖意图驱动编程、产品变现、SEO/GEO 优化、自媒体运营四大维度。</p>
      <h4>核心原则</h4>
      <ul>
        <li><strong>意图驱动</strong>：从"怎么做"转向"做什么"，母语比语法重要</li>
        <li><strong>先做再学</strong>：完成第一个项目后按需补知识</li>
        <li><strong>小步快跑</strong>：每轮对话提 1-5 个具体需求</li>
        <li><strong>AGENTS.md 约束</strong>：项目级规则文件自动遵守约定</li>
        <li><strong>提示词即行为操作系统</strong>：Fable 5 大部分改进编码在提示词里</li>
      </ul>
      <h4>Fable 5 复现</h4>
      <p>Opus 4.8 + 一份提示词可复现 Fable 5 90% 效果；Gemma 4 12B Coder 在消费级显卡本地部署。Effort 参数 + 提示词构成成本-性能解耦。</p>
    `
  }
};

// ============================================
// Research Data
// ============================================
const research = {
  'vibe-coding': {
    title: 'Vibe Coding 可迁移方法论',
    type: '方法论研究',
    tags: ['AI 编程', 'Prompt Engineering', 'GEO'],
    detail: `
      <h4>研究范围</h4>
      <p>精读 14 个 Vibe Coding 教程文件（含基础 3 件 + 产品变现 11 件），提取可操作原则。</p>
      <h4>方法论分布</h4>
      <ul>
        <li><strong>Vibe Coding 基础</strong>（8 条）：意图驱动、先做再学、小步快跑、需求五要素、AGENTS.md 约束、Git 后悔药、按复杂度选模式、教别人</li>
        <li><strong>产品变现</strong>（11 条）：做前四问、三维度需求分析、P0-P3 优先级、选型四步法、按功能拆分模块、Freemium 模式、点数机制</li>
        <li><strong>SEO/GEO 优化</strong>（11 条）：四步流程、关键词强相关、SSR/SSG、GEO 优先结论、结构化写作、权威内容、权威平台多发布、内容新鲜</li>
        <li><strong>自媒体运营</strong>（8 条）：真实经历起号、降低预期、有趣比干货重要、多平台、创意是核心、快速验证、学会放手、找准定位</li>
      </ul>
      <h4>核心结论</h4>
      <p>AI 编程的成功是 Model × Skill × 输入上下文的乘积。便宜的 Model + 好的 Skill + 清晰上下文 > 贵的 Model + 无说明书。</p>
    `
  },
  'hermes-v017': {
    title: 'Hermes v0.17.0 四方解读',
    type: '版本解读',
    tags: ['Hermes', 'v0.17.0', 'Reach', 'Skills Hub'],
    detail: `
      <h4>解读来源</h4>
      <p>4 位微信公众号作者（量子智元、CYBER 日常、知识姬 Mina、One 掌柜）2026-06-20 同日报道。</p>
      <h4>核心更新</h4>
      <ul>
        <li><strong>后台 Subagent</strong>：<code>delegate_task(background=true)</code> 立即返回 handle，结果自动回对话</li>
        <li><strong>iMessage Photon</strong>：托管线路池 + 设备码认证，蓝色气泡原生接入</li>
        <li><strong>Automation Blueprints</strong>：填表式定时任务，cron 语法隐藏到用户层</li>
        <li><strong>Memory 原子操作</strong>：<code>operations</code> 数组批量 add/replace/remove，预算内原子执行</li>
        <li><strong>Skills Hub 重做</strong>：Featured 区 + 安装前预览 + 安全扫描</li>
        <li><strong>Grok Composer 2.5</strong>：<code>grok-composer-2.5-fast</code> 通过 xAI OAuth 直连，200k context</li>
      </ul>
      <h4>实用建议</h4>
      <p>更新后必检：<code>hermes --version</code> → <code>hermes doctor</code> → <code>hermes status --all</code> → <code>hermes gateway status</code>。</p>
    `
  },
  'fable5': {
    title: 'Claude Fable 5 复现与本地部署',
    type: 'AI 研究',
    tags: ['Claude', 'Fable 5', 'Opus 4.8', 'Gemma 4', '本地部署'],
    detail: `
      <h4>研究目标</h4>
      <p>通过泄露的 Fable 5 系统提示词在 Opus 4.8 上复现 Agent 编程能力，并探索本地 12B 蒸馏模型的可行性。</p>
      <h4>核心发现</h4>
      <ul>
        <li><strong>Effort 参数</strong>：max / xhigh / high(默认) / medium / low，low effort 表现常超前代 xhigh</li>
        <li><strong>指令遵循</strong>：极简指令触发复杂行为，"先说结果"即可改变输出结构</li>
        <li><strong>进度审计</strong>：强制工具结果验证，几乎消除虚假状态报告</li>
        <li><strong>Memory 系统</strong>：Markdown 文件经验库，纠错更新、删除错误笔记</li>
        <li><strong>本地平替</strong>：Gemma 4 12B Coder + Q4_K_M 量化，6.87GB 显存即可运行</li>
      </ul>
      <h4>可复用提示词</h4>
      <p>"在汇报进度之前，用工具返回结果逐条审计每个声明。只汇报有证据的工作。"</p>
    `
  },
  'taste-skill': {
    title: '前端 Taste Skill 轻量化',
    type: '设计方法论',
    tags: ['前端', 'Taste', 'Anti-slop', '静态站'],
    detail: `
      <h4>研究目标</h4>
      <p>GitHub 项目 Taste Skill 的理念吸收 + 改造成适配个人工作流的轻量 Hermes Skill（frontend-taste-architect）。</p>
      <h4>核心方法</h4>
      <ul>
        <li><strong>三方向设计逻辑</strong>：撞/借/请——不同启发路径给同一任务不同美学方案</li>
        <li><strong>三个设计刻度</strong>：保守/中性/大胆，控制输出风险</li>
        <li><strong>Anti-slop 禁令</strong>：避免紫色渐变、圆角卡片堆叠、假 Dashboard、空洞营销文案</li>
        <li><strong>交付检查清单</strong>：确认任务覆盖、设计取舍、响应式、浏览器测试</li>
      </ul>
      <h4>实施</h4>
      <p>已创建 Hermes Skill：<code>frontend-taste-architect</code>，路径 <code>C:/Users/Hmingbo/AppData/Local/hermes/skills/software-development/frontend-taste-architect/</code>，分类 software-development。</p>
    `
  }
};

// ============================================
// 3D 粒子背景 (Canvas)
// ============================================
class ParticleField {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.mouse = { x: -1000, y: -1000 };
    this.scrollY = 0;

    this.resize();
    this.init();
    this.bindEvents();
    this.animate();
  }

  resize() {
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.w = window.innerWidth;
    this.h = window.innerHeight;
    this.canvas.width = this.w * this.dpr;
    this.canvas.height = this.h * this.dpr;
    this.canvas.style.width = this.w + 'px';
    this.canvas.style.height = this.h + 'px';
    this.ctx.scale(this.dpr, this.dpr);
  }

  init() {
    const count = Math.min(80, Math.floor((this.w * this.h) / 18000));
    this.particles = [];
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.w,
        y: Math.random() * this.h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        baseAlpha: Math.random() * 0.5 + 0.2
      });
    }
  }

  bindEvents() {
    window.addEventListener('resize', () => { this.resize(); this.init(); });
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });
    window.addEventListener('scroll', () => {
      this.scrollY = window.scrollY;
    }, { passive: true });
  }

  animate() {
    const ctx = this.ctx;
    const { w, h, mouse, particles, scrollY } = this;

    ctx.clearRect(0, 0, w, h);

    const offsetY = scrollY * 0.15;

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      p.x += p.vx;
      p.y += p.vy - 0.2;

      if (p.x < 0) p.x = w;
      if (p.x > w) p.x = 0;
      if (p.y < -50) p.y = h + 50;
      if (p.y > h + 50) p.y = -50;

      const dx = p.x - mouse.x;
      const dy = p.y - mouse.y - offsetY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        const force = (100 - dist) / 100;
        p.x += (dx / dist) * force * 1.5;
        p.y += (dy / dist) * force * 1.5;
      }

      const drawY = p.y + offsetY;
      ctx.beginPath();
      ctx.arc(p.x, drawY, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(129, 140, 248, ${p.baseAlpha})`;
      ctx.fill();
    }

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i];
        const b = particles[j];
        const dx = a.x - b.x;
        const ay = (a.y + offsetY) - (b.y + offsetY);
        const dist = Math.sqrt(dx * dx + ay * ay);
        if (dist < 120) {
          const alpha = (1 - dist / 120) * 0.15;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y + offsetY);
          ctx.lineTo(b.x, b.y + offsetY);
          ctx.strokeStyle = `rgba(129, 140, 248, ${alpha})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(() => this.animate());
  }
}

// ============================================
// Project Modal
// ============================================
function openProject(id) {
  const modal = document.getElementById('projectModal');
  const content = document.getElementById('modalContent');
  const project = projects[id];
  if (!project) return;

  content.innerHTML = `
    <button class="modal-close" onclick="closeProject()">✕</button>
    <h2>${project.title}</h2>
    <p class="modal-meta">${project.tags.map(t => `<span>${t}</span>`).join(' · ')}</p>
    <div class="modal-body">${project.detail}</div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProject() {
  document.getElementById('projectModal').classList.remove('active');
  document.body.style.overflow = '';
}

// Research modal
function openResearch(id) {
  const modal = document.getElementById('projectModal');
  const content = document.getElementById('modalContent');
  const r = research[id];
  if (!r) return;

  content.innerHTML = `
    <button class="modal-close" onclick="closeProject()">✕</button>
    <h2>${r.title}</h2>
    <p class="modal-meta">${r.tags.map(t => `<span>${t}</span>`).join(' · ')}</p>
    <div class="modal-body">${r.detail}</div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// ============================================
// Smooth Anchor Scroll
// ============================================
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  const hash = link.getAttribute('href');
  if (hash && hash.length > 1) {
    const id = hash.slice(1);
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, behavior: 'smooth' });
      history.pushState(null, '', hash);
    }
  }
});

// ============================================
// Custom Cursor (柔和)
// ============================================
const cursor = document.getElementById('cursor');
const cursorDot = document.getElementById('cursorDot');
let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursorDot.style.left = mouseX + 'px';
  cursorDot.style.top = mouseY + 'px';
});

function animateCursor() {
  cursorX += (mouseX - cursorX) * 0.2;
  cursorY += (mouseY - cursorY) * 0.2;
  cursor.style.left = cursorX + 'px';
  cursor.style.top = cursorY + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

const interactiveSelectors = 'a, button, .project-card, .manifesto-tags span, .cta-btn, .nav-cta, .stat-item, .marquee-item';
document.addEventListener('mouseover', (e) => {
  if (e.target.closest(interactiveSelectors)) cursor.classList.add('hover');
});
document.addEventListener('mouseout', (e) => {
  if (e.target.closest(interactiveSelectors)) cursor.classList.remove('hover');
});

// ============================================
// 3D Card Tilt (Project Cards)
// ============================================
document.querySelectorAll('.project-card').forEach(card => {
  let targetRotateX = 0, targetRotateY = 0;
  let currentRotateX = 0, currentRotateY = 0;
  let isHovering = false;

  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    targetRotateX = (y - centerY) / 30;
    targetRotateY = (centerX - x) / 30;
    isHovering = true;
  });

  card.addEventListener('mouseleave', () => {
    isHovering = false;
    targetRotateX = 0;
    targetRotateY = 0;
  });

  function animateTilt() {
    if (isHovering) {
      currentRotateX += (targetRotateX - currentRotateX) * 0.08;
      currentRotateY += (targetRotateY - currentRotateY) * 0.08;
    } else {
      currentRotateX += (0 - currentRotateX) * 0.08;
      currentRotateY += (0 - currentRotateY) * 0.08;
    }
    const translateZ = isHovering ? 20 : 0;
    const translateY = isHovering ? -8 : 0;
    card.style.transform = `perspective(1200px) rotateX(${currentRotateX}deg) rotateY(${currentRotateY}deg) translateY(${translateY}px) translateZ(${translateZ}px)`;
    requestAnimationFrame(animateTilt);
  }
  animateTilt();
});

// ============================================
// Orb Parallax (跟随鼠标)
// ============================================
const orb1 = document.querySelector('.orb-1');
const orb2 = document.querySelector('.orb-2');
let orbX = 0, orbY = 0;
let currentOrbX = 0, currentOrbY = 0;

document.addEventListener('mousemove', (e) => {
  orbX = (e.clientX / window.innerWidth - 0.5) * 40;
  orbY = (e.clientY / window.innerHeight - 0.5) * 40;
});

function animateOrbs() {
  currentOrbX += (orbX - currentOrbX) * 0.05;
  currentOrbY += (orbY - currentOrbY) * 0.05;
  if (orb1) orb1.style.transform = `translate(${currentOrbX}px, ${currentOrbY}px)`;
  if (orb2) orb2.style.transform = `translate(${-currentOrbX}px, ${-currentOrbY}px)`;
  requestAnimationFrame(animateOrbs);
}
animateOrbs();

// ============================================
// Scroll Reveal
// ============================================
function observeReveal(el) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -60px 0px' });
  observer.observe(el);
}

document.querySelectorAll('.reveal').forEach(el => observeReveal(el));

// ============================================
// Counter Animation
// ============================================
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const duration = 1800;
      const start = performance.now();

      function tick(now) {
        const elapsed = now - start;
        const t = Math.min(1, elapsed / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = Math.floor(eased * target);
        if (t < 1) requestAnimationFrame(tick);
        else el.textContent = target;
      }
      requestAnimationFrame(tick);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));

// ============================================
// Magnetic Button
// ============================================
document.querySelectorAll('.magnetic').forEach(el => {
  let currentX = 0, currentY = 0;
  let targetX = 0, targetY = 0;

  function animate() {
    currentX += (targetX - currentX) * 0.18;
    currentY += (targetY - currentY) * 0.18;
    el.style.transform = `translate(${currentX}px, ${currentY}px)`;
    requestAnimationFrame(animate);
  }
  animate();

  el.addEventListener('mousemove', (e) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    targetX = x * 0.3;
    targetY = y * 0.3;
  });

  el.addEventListener('mouseleave', () => {
    targetX = 0;
    targetY = 0;
  });
});

// ============================================
// Loading Screen
// ============================================
(function initLoader() {
  const loader = document.getElementById('loader');
  const fill = document.getElementById('loaderFill');
  const num = document.getElementById('loaderNum');
  const percent = document.getElementById('loaderPercent');
  if (!loader) return;

  let progress = 0;
  const duration = 1800;
  const start = performance.now();

  function step(now) {
    const elapsed = now - start;
    progress = Math.min(100, (elapsed / duration) * 100);
    const eased = 1 - Math.pow(1 - progress / 100, 3);
    const value = Math.floor(eased * 100);

    fill.style.width = value + '%';
    num.textContent = value;
    percent.textContent = value + '%';

    if (progress < 100) requestAnimationFrame(step);
    else setTimeout(() => loader.classList.add('hidden'), 200);
  }
  requestAnimationFrame(step);
})();

// ============================================
// Scroll Listener
// ============================================
window.addEventListener('scroll', () => {
  document.getElementById('header').classList.toggle('scrolled', window.scrollY > 60);

  const progress = document.getElementById('scrollProgress');
  if (progress) {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? window.scrollY / docHeight : 0;
    progress.style.transform = `scaleX(${pct})`;
  }

  const hint = document.getElementById('scrollHint');
  if (hint) hint.classList.toggle('hidden', window.scrollY > window.innerHeight * 0.3);
}, { passive: true });

// ============================================
// Init
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('particles');
  if (canvas) new ParticleField(canvas);

  document.getElementById('projectModal').addEventListener('click', (e) => {
    if (e.target.id === 'projectModal') closeProject();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProject();
  });
});
