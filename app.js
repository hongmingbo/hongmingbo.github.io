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
  'portfolio': {
    title: '本作品集',
    type: '网站',
    tags: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages', 'Canvas'],
    detail: `
      <h4>项目概述</h4>
      <p>极简技术感设计的个人作品集，参考 Lusion.co 设计语言，托管于 GitHub Pages。</p>
      <h4>设计</h4>
      <ul>
        <li>暗色沉浸式主题 + 噪点纹理 + 渐变光晕</li>
        <li>Canvas 3D 粒子背景（鼠标排斥 + 连接线）</li>
        <li>全屏 hero 大字 + scroll-driven 叙事</li>
        <li>渐入渐出 + 数字递增动画</li>
        <li>项目详情弹窗 + 跑马灯</li>
      </ul>
      <h4>技术</h4>
      <p>HTML5 · CSS3 (Grid/Flexbox) · Vanilla JavaScript · Canvas API · GitHub Pages</p>
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
