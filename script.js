/* ═══════════════════════════════════════════════════════════════
   MANISH SINGH PORTFOLIO — script.js
   Data-driven rendering · Animations · Interactivity
═══════════════════════════════════════════════════════════════ */

'use strict';

/* ─────────────────────────────────────────────────────────────
   DATA — Projects
   To add a new project: append an object to this array.
   No HTML changes needed.
───────────────────────────────────────────────────────────── */
const projects = [
  {
    id: 'cbir',
    title: 'Multi-Paradigm CBIR',
    category: 'ai-ml',
    type: 'coursework',
    description: 'Content-based image retrieval system comparing LBP, CNN (ResNet-18), and a novel MSTE-RG descriptor with an interactive Gradio dashboard. Evaluated on CIFAR-10, MNIST, and Fashion-MNIST.',
    tech: ['Python', 'PyTorch', 'ResNet-18', 'Gradio', 'scikit-learn', 'scikit-image'],
    github: 'https://github.com/msingh9365/multi-paradigm-cbir',
    thumb: 'assets/images/thumb_cbir.jpg',
  },
  {
    id: 'nlp',
    title: 'YouTube Trend & Sentiment Analysis',
    category: 'nlp',
    type: 'coursework',
    description: 'State-wise YouTube trend analysis with a multilingual NLP pipeline (Sentence-BERT, KeyBERT, VADER, FLAN-T5) and Streamlit dashboard. Powered by PySpark and Delta Lake for scalable processing.',
    tech: ['PySpark', 'Sentence-BERT', 'KeyBERT', 'VADER', 'FLAN-T5', 'Docker', 'Streamlit', 'Delta Lake'],
    github: 'https://github.com/msingh9365/trending-topics',
    thumb: 'assets/images/thumb_nlp.jpg',
  },
  {
    id: 'music',
    title: 'Music Genre Classification',
    category: 'ai-ml',
    type: 'coursework',
    description: 'End-to-end music genre classification on the GTZAN dataset comparing multiple ML and DL techniques with feature engineering, model training, and in-depth evaluation.',
    tech: ['Python', 'PyTorch', 'Librosa', 'scikit-learn', 'NumPy', 'Pandas', 'Matplotlib'],
    github: 'https://github.com/Santhanakrishnanx/Music-Genre-Classification',
    thumb: 'assets/images/thumb_music.jpg',
  },
  {
    id: 'campus',
    title: 'Campus Court',
    category: 'full-stack',
    type: 'coursework',
    description: 'Full-stack Android app for real-time campus sports facility booking at IIT Ropar. Features secure authentication, live slot availability, concurrent user support, and cloud-hosted APIs.',
    tech: ['Django', 'Redis', 'Supabase', 'PostgreSQL', 'Flutter', 'Render'],
    github: 'https://github.com/msingh9365/turf-mgmt-sys',
    thumb: 'assets/images/thumb_campus.jpg',
  },
  {
    id: 'fraud',
    title: 'Credit Card Fraud Detection',
    category: 'big-data',
    type: 'minor',
    description: 'Real-time fraud detection pipeline using Apache Spark Streaming and Kafka, containerized with Docker. Processes transaction streams from Kafka and filters fraudulent transactions.',
    tech: ['PySpark Streaming', 'Kafka', 'Docker'],
    github: 'https://github.com/msingh9365/CreditCardFraud',
    thumb: 'assets/images/thumb_fraud.jpg',
  },
];

/* ─────────────────────────────────────────────────────────────
   DATA — Skills
   To add a new category: append an object to this array.
───────────────────────────────────────────────────────────── */
const skills = [
  { icon: '⌨️', name: 'Languages',        pills: ['C / C++', 'Python', 'SQL', 'Scala'] },
  { icon: '🤖', name: 'AI & Machine Learning', pills: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'PyTorch', 'LangGraph', 'LangChain', 'RAG', 'Pinecone'] },
  { icon: '🗄️', name: 'Backend & Database', pills: ['Django', 'PostgreSQL', 'MySQL', 'Redis', 'REST APIs'] },
  { icon: '⚡', name: 'Big Data & Cloud',  pills: ['Apache Spark', 'PySpark', 'Kafka', 'Azure HDInsight', 'Databricks', 'Azure Data Factory', 'Delta Lake'] },
  { icon: '🚀', name: 'DevOps & Tools',    pills: ['Docker', 'Azure DevOps', 'CI/CD', 'Git', 'Jupyter'] },
];

/* ─────────────────────────────────────────────────────────────
   DATA — Coding Profiles
   To add a platform: append an object to this array.
   Example: { id: 'codechef', name: 'CodeChef', username: 'your_handle',
               url: 'https://www.codechef.com/users/your_handle', icon: '👨‍💻' }
───────────────────────────────────────────────────────────── */
const codingProfiles = [
  {
    id: 'leetcode',
    name: 'LeetCode',
    username: 'msingh9365',
    url: 'https://leetcode.com/u/msingh9365/',
    icon: '🧩',
  },
];

/* ═══════════════════════════════════════════════════════════════
   RENDER — Projects
═══════════════════════════════════════════════════════════════ */
function renderProjects(filter = 'all') {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  const filtered = filter === 'all' 
    ? projects 
    : filter === 'coursework' 
      ? projects.filter(p => p.type === 'coursework' || p.type === 'minor')
      : projects.filter(p => p.category === filter);

  grid.innerHTML = filtered.map((p, i) => /* html */`
    <article
      class="project-card"
      data-category="${p.category}"
      role="listitem"
      style="animation-delay: ${i * 0.08}s"
    >
      <img
        class="project-thumb"
        src="${p.thumb}"
        alt="${p.title} project thumbnail"
        loading="lazy"
        onerror="this.style.display='none'"
      />
      <div class="project-body">
        <p class="project-type-badge">${p.type === 'coursework' ? '📚 Course Work' : '◆ Minor Project'}</p>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.description}</p>
        <div class="project-tech">
          ${p.tech.map(t => `<span>${t}</span>`).join('')}
        </div>
        <div class="project-footer">
          <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="project-link" id="project-link-${p.id}">
            View on GitHub
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
        </div>
      </div>
    </article>
  `).join('');
}

/* ═══════════════════════════════════════════════════════════════
   RENDER — Skills
═══════════════════════════════════════════════════════════════ */
function renderSkills() {
  const grid = document.getElementById('skills-grid');
  if (!grid) return;

  grid.innerHTML = skills.map((cat, i) => /* html */`
    <div class="skill-category reveal" style="animation-delay: ${i * 0.08}s">
      <div class="skill-cat-header">
        <div class="skill-cat-icon" aria-hidden="true">${cat.icon}</div>
        <h3 class="skill-cat-name">${cat.name}</h3>
      </div>
      <div class="skill-pills">
        ${cat.pills.map(pill => `<span class="skill-pill">${pill}</span>`).join('')}
      </div>
    </div>
  `).join('');

  // Re-observe newly created elements
  document.querySelectorAll('.skill-category.reveal').forEach(el => observer.observe(el));
}

/* ═══════════════════════════════════════════════════════════════
   RENDER — Coding Profiles
═══════════════════════════════════════════════════════════════ */
function renderProfiles() {
  const grid = document.getElementById('profiles-grid');
  if (!grid) return;

  grid.innerHTML = codingProfiles.map((p, i) => /* html */`
    <a
      href="${p.url}"
      target="_blank"
      rel="noopener noreferrer"
      class="profile-card"
      id="profile-card-${p.id}"
      role="listitem"
      aria-label="${p.name} profile for ${p.username}"
      style="animation-delay: ${i * 0.1}s"
    >
      <div class="profile-icon" aria-hidden="true">${p.icon}</div>
      <p class="profile-name">${p.name}</p>
      <p class="profile-username">@${p.username}</p>
      <span class="profile-arrow">
        Visit Profile
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </span>
    </a>
  `).join('');
}

/* ═══════════════════════════════════════════════════════════════
   FILTER TABS
═══════════════════════════════════════════════════════════════ */
function initFilterTabs() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      renderProjects(btn.dataset.filter);
    });
  });
}

/* ═══════════════════════════════════════════════════════════════
   TYPING ANIMATION
═══════════════════════════════════════════════════════════════ */
function initTypingAnimation() {
  const el = document.getElementById('typed-text');
  if (!el) return;

  const roles = ['AI Engineer', 'Data Engineer', 'ML Researcher'];
  let roleIdx = 0, charIdx = 0, deleting = false;

  function type() {
    const current = roles[roleIdx];
    if (!deleting) {
      el.textContent = current.slice(0, charIdx + 1);
      charIdx++;
      if (charIdx === current.length) {
        deleting = true;
        setTimeout(type, 1800);
        return;
      }
    } else {
      el.textContent = current.slice(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        deleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
      }
    }
    setTimeout(type, deleting ? 55 : 100);
  }
  setTimeout(type, 600);
}

/* ═══════════════════════════════════════════════════════════════
   INTERSECTION OBSERVER — Scroll Animations
═══════════════════════════════════════════════════════════════ */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

function observeRevealElements() {
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ═══════════════════════════════════════════════════════════════
   NAVBAR — Scroll Effect & Active Links
═══════════════════════════════════════════════════════════════ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    // Scrolled state
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active link
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
    });
  }, { passive: true });
}

/* ═══════════════════════════════════════════════════════════════
   HAMBURGER MENU
═══════════════════════════════════════════════════════════════ */
function initHamburger() {
  const btn = document.getElementById('hamburger-btn');
  const links = document.getElementById('nav-links');
  if (!btn || !links) return;

  btn.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close on link click
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!btn.contains(e.target) && !links.contains(e.target)) {
      links.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
}

/* ═══════════════════════════════════════════════════════════════
   CANVAS PARTICLES
═══════════════════════════════════════════════════════════════ */
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, particles = [];
  const PARTICLE_COUNT = 70;
  const MAX_DIST = 130;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function createParticle() {
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.8 + 0.6,
      alpha: Math.random() * 0.5 + 0.2,
    };
  }

  function init() {
    resize();
    particles = Array.from({ length: PARTICLE_COUNT }, createParticle);
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Update & draw dots
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 212, 255, ${p.alpha})`;
      ctx.fill();
    });

    // Draw connecting lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MAX_DIST) {
          const alpha = (1 - dist / MAX_DIST) * 0.15;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(124, 58, 237, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  init();
  draw();
  window.addEventListener('resize', init, { passive: true });
}

/* ═══════════════════════════════════════════════════════════════
   FOOTER YEAR
═══════════════════════════════════════════════════════════════ */
function setFooterYear() {
  const el = document.getElementById('footer-year');
  if (el) el.textContent = `© ${new Date().getFullYear()} Manish Singh`;
}

/* ═══════════════════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  // Render dynamic content
  renderProjects('all');
  renderSkills();
  renderProfiles();

  // Init interactivity
  initFilterTabs();
  initTypingAnimation();
  initNavbar();
  initHamburger();
  initParticles();
  setFooterYear();

  // Observe all .reveal elements (static + dynamically created)
  observeRevealElements();
});
