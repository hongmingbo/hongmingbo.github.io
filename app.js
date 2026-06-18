// ========== Project Data ==========
const projects = {
  'obsidian-vault': {
    title: 'obsidian-vault',
    type: 'Open Source',
    tags: ['Obsidian', 'Python', 'AI', 'Markdown'],
    detail: `
      <h4>Overview</h4>
      <p>个人知识库与内容创作工作流，结合 Obsidian + Hermes Agent，实现从抖音内容采集到知识沉淀的全链路自动化。</p>
      <h4>Key Features</h4>
      <ul>
        <li>4 文件夹结构：选题/竞品/方法论/灵感</li>
        <li>三层记忆体系：Global / Important / Temporary</li>
        <li>Markdown → Word/HTML/PDF 输出流水线</li>
        <li>零凭证规则 + 安全记忆管理</li>
      </ul>
      <h4>Tech Stack</h4>
      <p>Obsidian · Python · Hermes Agent · Playwright · Markdown</p>
      <h4>Links</h4>
      <p><a href="https://github.com/Hongmingbo/obsidian-vault" target="_blank" style="color: var(--accent);">github.com/Hongmingbo/obsidian-vault</a></p>
    `
  },
  'portfolio': {
    title: 'Hongmingbo.github.io',
    type: 'Website',
    tags: ['HTML/CSS', 'JavaScript', 'GitHub Pages'],
    detail: `
      <h4>Overview</h4>
      <p>个人作品集与简历网站，采用极简技术感设计，托管于 GitHub Pages。</p>
      <h4>Design</h4>
      <ul>
        <li>暗色主题 + 噪点纹理</li>
        <li>JetBrains Mono 等宽字体</li>
        <li>终端风格 UI + 代码高亮配色</li>
        <li>全屏菜单 + 页面切换动效</li>
      </ul>
      <h4>Tech Stack</h4>
      <p>HTML5 · CSS3 · Vanilla JavaScript · GitHub Pages</p>
    `
  },
  'we-mp-rss': {
    title: 'we-mp-rss',
    type: 'Tool',
    tags: ['Playwright', 'Python', 'RSS', 'Automation'],
    detail: `
      <h4>Overview</h4>
      <p>微信公众号/视频号 RSS 订阅工具，基于 Playwright 实现内容自动提取，支持自动推送。</p>
      <h4>Key Features</h4>
      <ul>
        <li>Playwright WebKit 无头浏览器截图</li>
        <li>公众号文章正文提取</li>
        <li>视频号内容解析</li>
        <li>RSS/JSON 输出 + 自动推送</li>
      </ul>
      <h4>Tech Stack</h4>
      <p>Python · Playwright · WebKit · RSS</p>
    `
  },
  'monitoring': {
    title: 'Monitoring Stack',
    type: 'Infrastructure',
    tags: ['Docker', 'Monitoring', 'Self-hosted', 'Uptime'],
    detail: `
      <h4>Overview</h4>
      <p>自托管监控三件套：Uptime Kuma + Healthchecks + Netdata，Docker Compose 一键部署。</p>
      <h4>Components</h4>
      <ul>
        <li><strong>Uptime Kuma</strong> — 服务可用性监控 + 告警</li>
        <li><strong>Healthchecks</strong> — Cron 任务心跳监控</li>
        <li><strong>Netdata</strong> — 实时系统指标可视化</li>
      </ul>
      <h4>Tech Stack</h4>
      <p>Docker · Docker Compose · Linux</p>
    `
  },
  'cloudflared': {
    title: 'Cloudflare Tunnel',
    type: 'DevOps',
    tags: ['Cloudflare', 'Docker', 'Networking', 'Security'],
    detail: `
      <h4>Overview</h4>
      <p>使用 Cloudflare Tunnel + WARP + DoH 实现 Docker 容器安全暴露到公网，无需开放端口。</p>
      <h4>Key Decisions</h4>
      <ul>
        <li>Pin cloudflared:2024.5.0（避免 2026.x post-quantum TLS EOF）</li>
        <li>Force HTTP/2 top-level protocol（ISP 阻断 QUIC/UDP）</li>
        <li>DNS CNAME proxied + Docker 容器加入共享网络</li>
      </ul>
      <h4>Tech Stack</h4>
      <p>Cloudflare Tunnel · WARP · Docker · DoH</p>
    `
  },
  'memory-system': {
    title: 'Memory System Design',
    type: 'Design',
    tags: ['AI', 'Knowledge Management', 'Design', 'Architecture'],
    detail: `
      <h4>Overview</h4>
      <p>为 AI Agent 设计的三层记忆架构，平衡存储效率与场景匹配。</p>
      <h4>Core Principles</h4>
      <ul>
        <li><strong>分层提炼</strong> — 原始→摘要→规律→画像逐层固化</li>
        <li><strong>震动阈值</strong> — 长期标签需频次/强度门槛</li>
        <li><strong>双轨记忆</strong> — 短期上下文 + 长期画像并行</li>
        <li><strong>筛选优先</strong> — 遗忘策略比存储更重要</li>
        <li><strong>因果追踪</strong> — 记录偏好变化与冲突判别</li>
      </ul>
      <h4>Implementation</h4>
      <p>Global (MEMORY.md) → Important (weekly) → Temporary (7-day lifecycle)</p>
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
  if (target) target.classList.add('active');
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
    <p class="modal-meta">${project.type} · ${project.tags.join(' · ')}</p>
    <div class="modal-body">${project.detail}</div>
  `;
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProject() {
  document.getElementById('projectModal').classList.remove('active');
  document.body.style.overflow = '';
}

// ========== Scroll Indicator ==========
function handleScroll() {
  const indicator = document.getElementById('scrollIndicator');
  indicator.classList.toggle('hidden', window.scrollY > 200);
}

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
  
  window.addEventListener('scroll', handleScroll);
});
