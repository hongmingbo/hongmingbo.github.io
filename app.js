// ============================================
// 中文作品集数据
// ============================================
const projects = {
  'frontend-lusion': {
    title: 'Lusion 风格前端页面',
    type: '作品集 / 视觉设计',
    tags: ['前端设计', '3D', '动效', '视觉层级'],
    detail: `
      <h4>项目概述</h4>
      <p>把高端品牌页、交互动效和 3D 氛围整合成一套中文作品集首页，强调高级感、层次和阅读节奏。</p>
      <h4>设计重点</h4>
      <ul>
        <li>深色背景 + 发光渐变 + 低噪点纹理</li>
        <li>大标题、短文案、强节奏首屏</li>
        <li>中文界面优先，去掉多余的技术感噪音</li>
        <li>面向 GitHub Pages 的静态发布</li>
      </ul>
      <h4>实现方式</h4>
      <ul>
        <li>原生 HTML + CSS + JavaScript</li>
        <li>滚动进度、加载屏、粒子背景、自定义光标</li>
        <li>模块化内容区：作品 / 关于 / 研究 / 联系</li>
      </ul>
    `
  },
  'obsidian-vault': {
    title: 'Obsidian Vault',
    type: '基础设施 / 知识管理',
    tags: ['Obsidian', 'Python', 'Markdown', 'AI', '自动化'],
    detail: `
      <h4>项目概述</h4>
      <p>个人知识库与内容工作流，结合 Obsidian 和 Hermes Agent，实现从信息收集到知识沉淀的自动化。</p>
      <h4>核心能力</h4>
      <ul>
        <li>分层记忆管理</li>
        <li>Markdown、HTML、Word 输出流水线</li>
        <li>安全记忆和会话结束协议</li>
        <li>适合长期积累的方法论库</li>
      </ul>
    `
  },
  'we-mp-rss': {
    title: 'we-mp-rss',
    type: '工具 / 自动化',
    tags: ['Playwright', 'Python', 'RSS', 'WebKit'],
    detail: `
      <h4>项目概述</h4>
      <p>微信公众号和视频号内容提取工具，基于 Playwright 实现自动采集与订阅分发。</p>
      <h4>解决的问题</h4>
      <ul>
        <li>公众号正文提取</li>
        <li>Windows 下浏览器环境路径管理</li>
        <li>RSS / JSON 输出</li>
        <li>自动推送到订阅端</li>
      </ul>
    `
  },
  'monitoring': {
    title: '监控系统',
    type: '基础设施 / 运行保障',
    tags: ['Docker', 'Uptime', 'Healthchecks', '自托管'],
    detail: `
      <h4>项目概述</h4>
      <p>围绕自托管服务建立监控、告警和备份机制，确保本地服务稳定可见。</p>
      <h4>组成</h4>
      <ul>
        <li>Uptime Kuma 监控</li>
        <li>Healthchecks 心跳</li>
        <li>Docker Compose 编排</li>
        <li>Windows 环境下的可重复部署</li>
      </ul>
    `
  },
  'android-reverse': {
    title: 'Android 逆向与分析',
    type: '技术研究',
    tags: ['Android', 'JADX', 'Apktool', '调试'],
    detail: `
      <h4>项目概述</h4>
      <p>Android APK 结构分析与调试工作流，覆盖反编译、资源提取、主 Activity 和方法定位。</p>
      <h4>价值</h4>
      <ul>
        <li>更快理解第三方 APK 的结构</li>
        <li>为后续自动化分析提供模板</li>
        <li>对 Android 工具链工程化有帮助</li>
      </ul>
    `
  },
  'vibe-coding': {
    title: 'Vibe Coding 方法论',
    type: '方法论研究',
    tags: ['AI', 'Prompt', 'GEO', '工作流'],
    detail: `
      <h4>项目概述</h4>
      <p>提炼 AI 编程和提示词工作流中的可迁移方法，把“怎么写”转向“怎么交付”。</p>
      <h4>核心原则</h4>
      <ul>
        <li>先做再学</li>
        <li>小步快跑</li>
        <li>意图优先于语法</li>
        <li>把提示词当成行为系统</li>
      </ul>
    `
  }
};

const research = {
  'lusion-study': {
    title: 'Lusion 风格研究',
    type: '设计研究',
    tags: ['3D', '氛围', '排版'],
    detail: `
      <h4>研究范围</h4>
      <p>研究高端品牌站如何通过光效、空间层次、动效节奏和中文排版建立高级感。</p>
      <h4>可迁移原则</h4>
      <ul>
        <li>首屏不塞满内容，留出呼吸空间</li>
        <li>标题大、正文短、按钮少而准</li>
        <li>深色背景上控制发光与对比</li>
      </ul>
    `
  },
  'automation-workflow': {
    title: '自动化工作流',
    type: '工作流研究',
    tags: ['Playwright', 'RSS', '监控'],
    detail: `
      <h4>研究范围</h4>
      <p>把采集、整理、输出和监控拆成稳定的模块，避免一次性脚本无法维护。</p>
      <h4>结论</h4>
      <ul>
        <li>可重复比一次性更重要</li>
        <li>结果可验证比描述可看更重要</li>
        <li>故障时先保留数据，再谈优化</li>
      </ul>
    `
  },
  'memory-system': {
    title: '记忆系统',
    type: '架构研究',
    tags: ['Hermes', '记忆', '知识沉淀'],
    detail: `
      <h4>研究范围</h4>
      <p>分层记忆、生命周期、会话结束和长期沉淀之间的边界设计。</p>
      <h4>目标</h4>
      <ul>
        <li>减少重复解释</li>
        <li>保留可复用经验</li>
        <li>让未来项目更少返工</li>
      </ul>
    `
  }
};

// ============================================
// 渲染
// ============================================
function cardHtml(items, kind) {
  return Object.entries(items).map(([id, item]) => `
    <article class="project-card reveal" onclick="openProject('${id}')">
      <div class="project-topline">
        <span>${item.type}</span>
        <span>${kind}</span>
      </div>
      <h3 class="project-title">${item.title}</h3>
      <div class="project-tags-top">
        ${item.tags.map((tag) => `<span>${tag}</span>`).join('')}
      </div>
      <p class="project-desc">${item.detail.replace(/<[^>]+>/g, '').slice(0, 90)}…</p>
      <div class="project-view">查看详情 <span class="arrow">→</span></div>
    </article>
  `).join('');
}

document.getElementById('projectGrid').innerHTML = cardHtml(projects, '作品');
document.getElementById('researchGrid').innerHTML = cardHtml(research, '研究');

// ============================================
// Project Modal
// ============================================
function openProject(id) {
  const all = { ...projects, ...research };
  const p = all[id];
  const modal = document.getElementById('projectModal');
  const body = document.getElementById('projectModalBody');
  body.innerHTML = `
    <div class="modal-head">
      <p class="modal-type">${p.type}</p>
      <h3>${p.title}</h3>
    </div>
    <div class="modal-tags">${p.tags.map((tag) => `<span>${tag}</span>`).join('')}</div>
    <div class="modal-detail">${p.detail}</div>
  `;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeProject() {
  const modal = document.getElementById('projectModal');
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.getElementById('closeProject').addEventListener('click', closeProject);

// ============================================
// 粒子背景
// ============================================
class ParticleField {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.resize();
    this.init();
    window.addEventListener('resize', () => this.resize());
    requestAnimationFrame(() => this.animate());
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth * devicePixelRatio;
    this.height = this.canvas.height = window.innerHeight * devicePixelRatio;
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
  }

  init() {
    const total = Math.min(120, Math.floor(window.innerWidth / 16));
    this.particles = Array.from({ length: total }, () => ({
      x: Math.random() * this.width,
      y: Math.random() * this.height,
      r: Math.random() * 2.2 + 0.6,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      a: Math.random() * 0.7 + 0.2,
    }));
  }

  animate() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);
    ctx.fillStyle = 'rgba(255,255,255,0.85)';
    for (const p of this.particles) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < -20) p.x = this.width + 20;
      if (p.x > this.width + 20) p.x = -20;
      if (p.y < -20) p.y = this.height + 20;
      if (p.y > this.height + 20) p.y = -20;
      ctx.globalAlpha = p.a;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * devicePixelRatio, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(() => this.animate());
  }
}

// ============================================
// Loader / Scroll / Cursor
// ============================================
(function loader() {
  const loader = document.getElementById('loader');
  const fill = document.getElementById('loaderFill');
  const num = document.getElementById('loaderNum');
  const percent = document.getElementById('loaderPercent');
  let progress = 0;
  function step() {
    progress += (100 - progress) * 0.06 + 0.5;
    const value = Math.min(100, Math.floor(progress));
    fill.style.width = value + '%';
    num.textContent = value;
    percent.textContent = value + '%';
    if (value < 100) requestAnimationFrame(step);
    else setTimeout(() => loader.classList.add('hidden'), 240);
  }
  requestAnimationFrame(step);
})();

window.addEventListener('scroll', () => {
  document.getElementById('header').classList.toggle('scrolled', window.scrollY > 60);
  const progress = document.getElementById('scrollProgress');
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? window.scrollY / docHeight : 0;
  progress.style.transform = `scaleX(${pct})`;
  document.getElementById('scrollHint').classList.toggle('hidden', window.scrollY > window.innerHeight * 0.3);
}, { passive: true });

document.addEventListener('mousemove', (e) => {
  const cursor = document.getElementById('cursor');
  const dot = document.getElementById('cursorDot');
  if (cursor) cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  if (dot) dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

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
