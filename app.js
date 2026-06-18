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
        <li>三层记忆体系：Global / Important / Temporary</li>
        <li>Markdown → Word/HTML/PDF 输出流水线</li>
        <li>零凭证规则 + 安全记忆管理</li>
      </ul>
      <h4>技术亮点</h4>
      <ul>
        <li>Hermes Agent 集成：skills、profiles、memory store</li>
        <li>Playwright WebKit 截图 + 内容提取</li>
        <li>多格式文档转换</li>
      </ul>
      <h4>链接</h4>
      <p><a href="https://github.com/Hongmingbo/obsidian-vault" target="_blank">github.com/Hongmingbo/obsidian-vault</a></p>
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
        <li>顶部简洁横排导航 + 锚点滚动</li>
        <li>自定义光标 + 卡片 3D 倾斜 + 滚动渐入</li>
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
      <p>微信公众号/视频号 RSS 订阅工具，基于 Playwright 实现内容自动提取。</p>
      <h4>核心功能</h4>
      <ul>
        <li>Playwright WebKit 无头浏览器截图 + 内容提取</li>
        <li>公众号文章正文提取（标题、作者、正文、图片）</li>
        <li>视频号内容解析 + 封面图提取</li>
        <li>RSS/JSON 输出 + 自动推送</li>
      </ul>
      <h4>解决的挑战</h4>
      <ul>
        <li>Windows 环境下 WebKit 路径配置</li>
        <li>PORT 环境变量泄漏问题（Hermes Studio 占用 8748）</li>
      </ul>
    `
  },
  'monitoring': {
    title: '监控系统',
    type: '基础设施',
    tags: ['Docker', '监控', '自托管', 'Uptime', 'Healthchecks'],
    detail: `
      <h4>项目概述</h4>
      <p>自托管监控三件套：Uptime Kuma + Healthchecks + Netdata。</p>
      <h4>组件说明</h4>
      <ul>
        <li><strong>Uptime Kuma</strong> — 服务可用性监控 + 多通道告警</li>
        <li><strong>Healthchecks</strong> — Cron 任务心跳监控 + 超时告警</li>
        <li><strong>Netdata</strong> — 实时系统指标可视化</li>
      </ul>
      <h4>部署方案</h4>
      <ul>
        <li>Docker Compose 一键启动</li>
        <li>Cloudflare Tunnel 内网穿透</li>
        <li>持久化数据卷配置</li>
        <li>TZ 时区设置（Asia/Shanghai）</li>
      </ul>
    `
  },
  'cloudflared': {
    title: 'Cloudflare Tunnel',
    type: '运维',
    tags: ['Cloudflare', 'Docker', '网络', '安全', 'WARP'],
    detail: `
      <h4>项目概述</h4>
      <p>使用 Cloudflare Tunnel + WARP + DoH 实现 Docker 容器安全暴露到公网。</p>
      <h4>关键决策与解决方案</h4>
      <ul>
        <li><strong>版本锁定</strong>：Pin cloudflared:2024.5.0</li>
        <li><strong>协议强制</strong>：Force HTTP/2 top-level protocol</li>
        <li><strong>DNS 配置</strong>：CNAME proxied: true</li>
        <li><strong>网络隔离</strong>：多服务容器加入共享网络</li>
        <li><strong>WARP DoH</strong>：本地客户端通过 WARP DoH 解析</li>
      </ul>
    `
  },
  'memory-system': {
    title: '记忆系统设计',
    type: '设计',
    tags: ['AI', '知识管理', '架构', '设计模式'],
    detail: `
      <h4>项目概述</h4>
      <p>为 AI Agent 设计的三层记忆架构，平衡存储效率与场景匹配。</p>
      <h4>核心原则</h4>
      <ul>
        <li><strong>分层提炼</strong> — 原始→摘要→规律→画像逐层固化</li>
        <li><strong>震动阈值</strong> — 长期标签需频次/强度门槛</li>
        <li><strong>双轨记忆</strong> — 短期上下文 + 长期画像并行</li>
        <li><strong>筛选优先</strong> — 遗忘策略比存储更重要</li>
        <li><strong>因果追踪</strong> — 记录偏好变化与冲突判别</li>
      </ul>
      <h4>实现方案</h4>
      <ul>
        <li><strong>Global</strong>：MEMORY.md — 跨项目、长期稳定</li>
        <li><strong>Important</strong>：IMPORTANT-NOTES.md — 重要但场景限定</li>
        <li><strong>Temporary</strong>：memory/YYYY-MM-DD.md — 7 天生命周期</li>
      </ul>
    `
  }
};

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

// ========== Smooth Scroll to Anchor ==========
function scrollToSection(id) {
  const target = document.getElementById(id);
  if (!target) return;
  const top = target.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top, behavior: 'smooth' });
}

document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  const hash = link.getAttribute('href');
  if (hash && hash.length > 1) {
    e.preventDefault();
    const id = hash.slice(1);
    scrollToSection(id);
    history.pushState(null, '', hash);
  }
});

// ========== Custom Cursor ==========
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

const interactiveSelectors = 'a, button, .project-card, .expertise-card, .content-list li, .contact-card, .cta-btn, .nav-cta';
document.addEventListener('mouseover', (e) => {
  if (e.target.closest(interactiveSelectors)) cursor.classList.add('hover');
});
document.addEventListener('mouseout', (e) => {
  if (e.target.closest(interactiveSelectors)) cursor.classList.remove('hover');
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
      currentRotateX += (targetRotateX - currentRotateX) * 0.06;
      currentRotateY += (targetRotateY - currentRotateY) * 0.06;
    } else {
      currentRotateX += (0 - currentRotateX) * 0.06;
      currentRotateY += (0 - currentRotateY) * 0.06;
    }
    const translateY = isHovering ? -6 : 0;
    card.style.transform = `perspective(1000px) rotateX(${currentRotateX}deg) rotateY(${currentRotateY}deg) translateY(${translateY}px)`;
    requestAnimationFrame(animateTilt);
  }
  animateTilt();
});

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

// ========== Magnetic Button ==========
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

// ========== Scroll Listener (header + progress + hint) ==========
window.addEventListener('scroll', () => {
  // Header scroll state
  document.getElementById('header').classList.toggle('scrolled', window.scrollY > 60);
  
  // Scroll progress bar
  const progress = document.getElementById('scrollProgress');
  if (progress) {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? window.scrollY / docHeight : 0;
    progress.style.transform = `scaleX(${pct})`;
  }
  
  // Scroll hint
  const hint = document.getElementById('scrollHint');
  if (hint) hint.classList.toggle('hidden', window.scrollY > window.innerHeight * 0.3);
}, { passive: true });

// ========== Init ==========
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('projectModal').addEventListener('click', (e) => {
    if (e.target.id === 'projectModal') closeProject();
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProject();
  });
});
