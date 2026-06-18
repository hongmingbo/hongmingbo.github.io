// ========== Project Data ==========
const projects = {
  'obsidian-vault': {
    title: 'obsidian-vault',
    type: 'Open Source',
    tags: ['Obsidian', 'Python', 'AI', 'Markdown', 'Knowledge Management'],
    detail: `
      <h4>Overview</h4>
      <p>个人知识库与内容创作工作流，结合 Obsidian + Hermes Agent，实现从抖音内容采集到知识沉淀的全链路自动化。</p>
      <h4>Key Features</h4>
      <ul>
        <li>4 文件夹结构：选题/竞品/方法论/灵感</li>
        <li>三层记忆体系：Global (MEMORY.md) / Important (weekly) / Temporary (7-day lifecycle)</li>
        <li>Markdown → Word/HTML/PDF 输出流水线</li>
        <li>零凭证规则 + 安全记忆管理</li>
        <li>会话结束协议：自动判断是否晋升为重要记忆</li>
      </ul>
      <h4>Technical Highlights</h4>
      <ul>
        <li>Hermes Agent 集成：skills、profiles、memory store 全链路打通</li>
        <li>Playwright WebKit 截图 + 内容提取</li>
        <li>多格式文档转换（mdstyle skill）</li>
        <li>Obsidian vault 作为单一事实来源</li>
      </ul>
      <h4>Links</h4>
      <p><a href="https://github.com/Hongmingbo/obsidian-vault" target="_blank" style="color: var(--accent);">github.com/Hongmingbo/obsidian-vault</a></p>
    `
  },
  'portfolio': {
    title: 'Hongmingbo.github.io',
    type: 'Website',
    tags: ['HTML/CSS', 'JavaScript', 'GitHub Pages', 'Design'],
    detail: `
      <h4>Overview</h4>
      <p>个人作品集与简历网站，采用极简技术感设计，托管于 GitHub Pages。</p>
      <h4>Design Philosophy</h4>
      <ul>
        <li>暗色主题 + SVG 噪点纹理 + 渐变光晕</li>
        <li>JetBrains Mono 等宽字体 + 终端风格 UI</li>
        <li>全屏菜单覆盖层 + 页面切换动效</li>
        <li>自定义光标 + 3D 卡片倾斜 + 滚动渐入</li>
        <li>项目详情弹窗 + 时间线式文章列表</li>
      </ul>
      <h4>Tech Stack</h4>
      <p>HTML5 · CSS3 (Grid/Flexbox) · Vanilla JavaScript · GitHub Pages</p>
    `
  },
  'we-mp-rss': {
    title: 'we-mp-rss',
    type: 'Tool',
    tags: ['Playwright', 'Python', 'RSS', 'Automation', 'WebKit'],
    detail: `
      <h4>Overview</h4>
      <p>微信公众号/视频号 RSS 订阅工具，基于 Playwright 实现内容自动提取，支持自动推送。</p>
      <h4>Key Features</h4>
      <ul>
        <li>Playwright WebKit 无头浏览器截图 + 内容提取</li>
        <li>公众号文章正文提取（标题、作者、正文、图片）</li>
        <li>视频号内容解析 + 封面图提取</li>
        <li>RSS/JSON 输出 + 自动推送到订阅端</li>
        <li>环境变量配置：PORT=8001、PLAYWRIGHT_BROWSERS_PATH</li>
      </ul>
      <h4>Challenges Solved</h4>
      <ul>
        <li>Windows 环境下 WebKit 路径配置</li>
        <li>PORT 环境变量泄漏问题（Hermes Studio 占用 8748）</li>
        <li>Playwright 浏览器路径与 venv 隔离</li>
      </ul>
      <h4>Tech Stack</h4>
      <p>Python 3.13+ · Playwright · WebKit · RSS · Windows Service</p>
    `
  },
  'monitoring': {
    title: 'Monitoring Stack',
    type: 'Infrastructure',
    tags: ['Docker', 'Monitoring', 'Self-hosted', 'Uptime', 'Healthchecks'],
    detail: `
      <h4>Overview</h4>
      <p>自托管监控三件套：Uptime Kuma + Healthchecks + Netdata，Docker Compose 一键部署。</p>
      <h4>Components</h4>
      <ul>
        <li><strong>Uptime Kuma</strong> — 服务可用性监控 + 多通道告警（Telegram/Email/Webhook）</li>
        <li><strong>Healthchecks</strong> — Cron 任务心跳监控 + 超时告警 + 日志记录</li>
        <li><strong>Netdata</strong> — 实时系统指标可视化（CPU/内存/磁盘/网络）</li>
      </ul>
      <h4>Deployment</h4>
      <ul>
        <li>Docker Compose 一键启动</li>
        <li>Cloudflare Tunnel 内网穿透</li>
        <li>持久化数据卷配置</li>
        <li>TZ 时区设置（Asia/Shanghai）</li>
      </ul>
      <h4>Tech Stack</h4>
      <p>Docker · Docker Compose · Linux · Cloudflare Tunnel</p>
    `
  },
  'cloudflared': {
    title: 'Cloudflare Tunnel',
    type: 'DevOps',
    tags: ['Cloudflare', 'Docker', 'Networking', 'Security', 'WARP'],
    detail: `
      <h4>Overview</h4>
      <p>使用 Cloudflare Tunnel + WARP + DoH 实现 Docker 容器安全暴露到公网，无需开放端口。</p>
      <h4>Key Decisions & Solutions</h4>
      <ul>
        <li><strong>版本锁定</strong>：Pin cloudflared:2024.5.0，避免 2026.x post-quantum X25519MLKEM768 TLS EOF 问题</li>
        <li><strong>协议强制</strong>：Force HTTP/2 top-level protocol（ISP 阻断 QUIC/UDP/7844）</li>
        <li><strong>DNS 配置</strong>：CNAME proxied: true，ingress 指向 Docker 容器名</li>
        <li><strong>网络隔离</strong>：多服务容器加入共享网络（vaultwarden_vw-net）</li>
        <li><strong>WARP DoH</strong>：本地客户端通过 WARP DoH 解析真实 Cloudflare edges</li>
      </ul>
      <h4>Tech Stack</h4>
      <p>Cloudflare Tunnel · WARP · Docker · DoH · Named Tunnel</p>
    `
  },
  'memory-system': {
    title: 'Memory System Design',
    type: 'Design',
    tags: ['AI', 'Knowledge Management', 'Architecture', 'Design Patterns'],
    detail: `
      <h4>Overview</h4>
      <p>为 AI Agent 设计的三层记忆架构，平衡存储效率与场景匹配，解决长期记忆的"存储-遗忘"矛盾。</p>
      <h4>Core Principles</h4>
      <ul>
        <li><strong>分层提炼</strong> — 原始→摘要→规律→画像逐层固化，降低噪声</li>
        <li><strong>震动阈值</strong> — 长期标签需频次/强度门槛，避免单次偶然表达改变画像</li>
        <li><strong>双轨记忆</strong> — 短期上下文（会话）+ 长期画像（持久）并行存储</li>
        <li><strong>筛选优先</strong> — 遗忘策略比存储更重要，核心能力是决定"哪些该记哪些该忘"</li>
        <li><strong>因果追踪</strong> — 记录偏好变化/场景差异/记录错误的判别逻辑</li>
        <li><strong>同频至上</strong> — 记忆的价值在于交互时刻的场景匹配，而非存储容量</li>
        <li><strong>主动洞察</strong> — 识别未表达的需求/情绪/趋势，主动提供价值</li>
      </ul>
      <h4>Implementation</h4>
      <ul>
        <li><strong>Global</strong>：MEMORY.md — 跨项目、长期稳定、每月更新</li>
        <li><strong>Important</strong>：IMPORTANT-NOTES.md — 重要但场景限定、每周更新</li>
        <li><strong>Temporary</strong>：memory/YYYY-MM-DD.md — 单次会话记录、7 天内决定晋升</li>
      </ul>
      <h4>Lifecycle</h4>
      <p>Session-end → 判断是否重要 → 创建 temp file → 7 天内评估晋升 → 更新 Global/Important → 清理过期</p>
    `
  }
};

// ========== Router ==========
const routes = {
  'home': 'home-view',
  'skills': 'skills-view',
  'projects': 'projects-view',
  'writing': 'writing-view',
  'contact': 'contact-view'
};

function navigate(view) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  const target = document.getElementById(routes[view]);
  if (target) {
    target.classList.add('active');
    target.querySelectorAll('.reveal').forEach(el => {
      el.classList.remove('visible');
      setTimeout(() => observeReveal(el), 150);
    });
  }
  window.location.hash = view;
  closeMenu();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.querySelectorAll('.menu-nav a').forEach(a => {
    a.style.color = a.getAttribute('href') === `#${view}` ? 'var(--accent)' : '';
  });
}

function handleHash() {
  const hash = window.location.hash.slice(1) || 'home';
  if (routes[hash]) navigate(hash);
}

// ========== Menu ==========
function openMenu() {
  document.getElementById('menuOverlay').classList.add('active');
  document.getElementById('menuBtn').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  document.getElementById('menuOverlay').classList.remove('active');
  document.getElementById('menuBtn').classList.remove('active');
  document.body.style.overflow = '';
}

// ========== Project Modal ==========
function openProject(id) {
  const modal = document.getElementById('projectModal');
  const content = document.getElementById('modalContent');
  const project = projects[id];
  if (!project) return;
  
  content.innerHTML = `
    <button class="modal-close" onclick="closeProject()">✕</button>
    <h2>${project.title}</h2>
    <p class="modal-meta">${project.tags.map(t => `<span>${t}</span>`).join('')}</p>
    <div class="modal-body">${project.detail}</div>
  `;
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProject() {
  document.getElementById('projectModal').classList.remove('active');
  document.body.style.overflow = '';
}

// ========== Custom Cursor (slower follow) ==========
const cursor = document.getElementById('cursor');
const cursorDot = document.getElementById('cursorDot');
let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  // Dot follows instantly
  cursorDot.style.left = mouseX + 'px';
  cursorDot.style.top = mouseY + 'px';
});

function animateCursor() {
  // Slower lerp for smoother follow
  cursorX += (mouseX - cursorX) * 0.08;
  cursorY += (mouseY - cursorY) * 0.08;
  cursor.style.left = cursorX + 'px';
  cursor.style.top = cursorY + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

const interactiveSelectors = 'a, button, .project-card, .skill-card, .writing-item, .contact-card, .tag, .menu-btn';
document.addEventListener('mouseover', (e) => {
  if (e.target.closest(interactiveSelectors)) {
    cursor.classList.add('hover');
  }
});
document.addEventListener('mouseout', (e) => {
  if (e.target.closest(interactiveSelectors)) {
    cursor.classList.remove('hover');
  }
});

// ========== 3D Card Tilt (softer, damped) ==========
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
    
    targetRotateX = (y - centerY) / 25;
    targetRotateY = (centerX - x) / 25;
    isHovering = true;
    
    card.style.setProperty('--mouse-x', (x / rect.width) * 100 + '%');
    card.style.setProperty('--mouse-y', (y / rect.height) * 100 + '%');
  });
  
  card.addEventListener('mouseleave', () => {
    isHovering = false;
    targetRotateX = 0;
    targetRotateY = 0;
  });
  
  function animateTilt() {
    if (isHovering) {
      currentRotateX += (targetRotateX - currentRotateX) * 0.06;
      currentRotateY += (targetRotateY - currentRotateY) * 0.06;
    } else {
      currentRotateX += (0 - currentRotateX) * 0.06;
      currentRotateY += (0 - currentRotateY) * 0.06;
    }
    
    const translateY = isHovering ? -8 : 0;
    card.style.transform = `perspective(1000px) rotateX(${currentRotateX}deg) rotateY(${currentRotateY}deg) translateY(${translateY}px)`;
    requestAnimationFrame(animateTilt);
  }
  animateTilt();
});

// ========== Hero Parallax (softer) ==========
const heroVisual = document.getElementById('heroVisual');
if (heroVisual) {
  let targetX = 0, targetY = 0;
  let currentX = 0, currentY = 0;
  
  document.addEventListener('mousemove', (e) => {
    targetX = (e.clientX / window.innerWidth - 0.5) * 16;
    targetY = (e.clientY / window.innerHeight - 0.5) * 16;
  });
  
  function animateParallax() {
    currentX += (targetX - currentX) * 0.03;
    currentY += (targetY - currentY) * 0.03;
    heroVisual.style.transform = `perspective(1000px) rotateY(${-5 + currentX * 0.2}deg) rotateX(${5 - currentY * 0.2}deg) translateX(${currentX * 0.3}px) translateY(${currentY * 0.3}px)`;
    requestAnimationFrame(animateParallax);
  }
  animateParallax();
}

// ========== Scroll Reveal ==========
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

// ========== Header Scroll ==========
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  const currentScroll = window.scrollY;
  
  header.classList.toggle('scrolled', currentScroll > 60);
  lastScroll = currentScroll;
  
  const indicator = document.getElementById('scrollIndicator');
  indicator.classList.toggle('hidden', currentScroll > 200);
});

// ========== Init ==========
document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('hashchange', handleHash);
  handleHash();
  
  document.getElementById('menuBtn').addEventListener('click', () => {
    document.getElementById('menuOverlay').classList.contains('active') ? closeMenu() : openMenu();
  });
  
  document.getElementById('menuOverlay').addEventListener('click', (e) => {
    if (e.target.id === 'menuOverlay') closeMenu();
  });
  
  document.getElementById('projectModal').addEventListener('click', (e) => {
    if (e.target.id === 'projectModal') closeProject();
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeMenu(); closeProject(); }
  });
});
