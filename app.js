// ========== Project Data ==========
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
        <li>三层记忆体系：Global (MEMORY.md) / Important (weekly) / Temporary (7-day lifecycle)</li>
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
      <p><a href="https://github.com/Hongmingbo/obsidian-vault" target="_blank" style="color: var(--accent);">github.com/Hongmingbo/obsidian-vault</a></p>
    `
  },
  'portfolio': {
    title: '个人作品集',
    type: '网站',
    tags: ['HTML/CSS', 'JavaScript', 'GitHub Pages', '设计'],
    detail: `
      <h4>项目概述</h4>
      <p>个人作品集与简历网站，采用极简技术感设计，托管于 GitHub Pages。</p>
      <h4>设计理念</h4>
      <ul>
        <li>暗色主题 + SVG 噪点纹理 + 渐变光晕</li>
        <li>JetBrains Mono 等宽字体 + 终端风格 UI</li>
        <li>全屏菜单覆盖层 + 页面切换动效</li>
        <li>自定义光标 + 3D 卡片倾斜 + 滚动渐入</li>
        <li>项目详情弹窗 + 时间线式文章列表</li>
      </ul>
      <h4>技术栈</h4>
      <p>HTML5 · CSS3 (Grid/Flexbox) · Vanilla JavaScript · GitHub Pages</p>
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
      <h4>关键决策与解决方案</h4>
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
      <h4>生命周期</h4>
      <p>会话结束 → 判断是否重要 → 创建临时文件 → 7 天内评估晋升 → 更新 Global/Important → 清理过期</p>
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

// ========== Custom Cursor (faster follow) ==========
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
  // Faster lerp: 0.25 gives responsive but still smooth follow
  cursorX += (mouseX - cursorX) * 0.25;
  cursorY += (mouseY - cursorY) * 0.25;
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

// ========== 3D Card Tilt ==========
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

// ========== Hero Parallax ==========
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
    heroVisual.style.transform = `perspective(1000px) rotateY(${-4 + currentX * 0.2}deg) rotateX(${4 - currentY * 0.2}deg) translateX(${currentX * 0.3}px) translateY(${currentY * 0.3}px)`;
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

// ========== Loading Screen ==========
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
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress / 100, 3);
    const value = Math.floor(eased * 100);
    
    fill.style.width = value + '%';
    num.textContent = value;
    percent.textContent = value + '%';
    
    if (progress < 100) {
      requestAnimationFrame(step);
    } else {
      setTimeout(() => loader.classList.add('hidden'), 200);
    }
  }
  requestAnimationFrame(step);
})();

// ========== Scroll Progress Bar ==========
window.addEventListener('scroll', () => {
  const progress = document.getElementById('scrollProgress');
  if (!progress) return;
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? scrollTop / docHeight : 0;
  progress.style.transform = `scaleX(${pct})`;
});

// ========== Magnetic Button ==========
document.querySelectorAll('.magnetic').forEach(el => {
  let currentX = 0, currentY = 0;
  let targetX = 0, targetY = 0;
  let isHovering = false;
  
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
    isHovering = true;
  });
  
  el.addEventListener('mouseleave', () => {
    targetX = 0;
    targetY = 0;
    isHovering = false;
  });
});

// ========== Counter Animation ==========
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const duration = 1600;
      const start = performance.now();
      
      function tick(now) {
        const elapsed = now - start;
        const t = Math.min(1, elapsed / duration);
        // Ease out cubic
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

// ========== Text Scramble (for hero title) ==========
class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________';
    this.update = this.update.bind(this);
  }
  
  setText(newText) {
    const oldText = this.el.textContent;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => this.resolve = resolve);
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  
  update() {
    let output = '';
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.chars[Math.floor(Math.random() * this.chars.length)];
          this.queue[i].char = char;
        }
        output += `<span class="scramble-char">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
}

// Apply scramble to hero name on load
const heroName = document.querySelector('.name');
if (heroName) {
  const finalText = heroName.textContent;
  const scrambler = new TextScramble(heroName);
  setTimeout(() => scrambler.setText(finalText), 800);
}

// ========== Letter Stagger Reveal ==========
function staggerReveal(selector) {
  const els = document.querySelectorAll(selector);
  els.forEach(el => {
    const text = el.textContent;
    el.innerHTML = text.split('').map(char => 
      char === ' ' ? ' ' : `<span class="letter">${char}</span>`
    ).join('');
  });
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const letters = entry.target.querySelectorAll('.letter');
        letters.forEach((letter, i) => {
          setTimeout(() => letter.classList.add('visible'), i * 30);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  
  els.forEach(el => observer.observe(el));
}

// Apply to section h2 headings
staggerReveal('.section-header h2');
