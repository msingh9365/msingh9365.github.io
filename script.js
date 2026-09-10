/* ═══════════════════════════════════════════════════════════════
   MANISH SINGH — PORTFOLIO
   script.js — data-driven rendering + interactivity
═══════════════════════════════════════════════════════════════ */

'use strict';

document.documentElement.classList.remove('no-js');

/* ─────────────────────────────────────────────────────────────
   DATA — Other Projects
   The two flagship projects (CBIR, YouTube Trend & Sentiment) are
   hand-authored case studies directly in index.html (#work).
   Smaller / coursework projects render here as a compact list.
   To add one: append an object to this array.
───────────────────────────────────────────────────────────── */
const otherProjects = [
  {
    id: 'music',
    title: 'Music Genre Classification',
    type: 'coursework',
    dates: 'Jan 2026 – May 2026',
    description: 'End-to-end genre classification on GTZAN comparing multiple ML and DL techniques with feature engineering and in-depth evaluation.',
    tech: ['Python', 'PyTorch', 'Librosa', 'scikit-learn'],
    github: 'https://github.com/Santhanakrishnanx/Music-Genre-Classification',
  },
  {
    id: 'campus',
    title: 'Campus Court',
    type: 'coursework',
    dates: 'Jul 2025 – Nov 2025',
    description: 'Full-stack Android app for real-time campus sports facility booking at IIT Ropar, with live slot availability and cloud-hosted APIs.',
    tech: ['Django', 'Redis', 'Supabase', 'Flutter'],
    github: 'https://github.com/msingh9365/turf-mgmt-sys',
  },
  {
    id: 'fraud',
    title: 'Credit Card Fraud Detection',
    type: 'minor',
    dates: null,
    description: 'Real-time fraud detection pipeline using Spark Streaming and Kafka, containerized with Docker, filtering fraudulent transactions from live streams.',
    tech: ['PySpark Streaming', 'Kafka', 'Docker'],
    github: 'https://github.com/msingh9365/CreditCardFraud',
  },
];

/* ═══════════════════════════════════════════════════════════════
   RENDER — Other Projects (compact list)
═══════════════════════════════════════════════════════════════ */
function renderOtherProjects() {
  const list = document.getElementById('other-projects');
  if (!list) return;

  list.innerHTML = otherProjects
    .map((p, i) => {
      const badge = p.type === 'coursework' ? 'Course Work' : 'Minor Project';
      const dates = p.dates ? `<span class="op-dates">${p.dates}</span>` : '';
      return `
      <article class="op-row reveal" style="--stagger:${i}">
        <div class="op-main">
          <div class="op-meta-row">
            <h4 class="op-title">${p.title}</h4>
            <span class="op-badge">${badge}</span>
            ${dates}
          </div>
          <p class="op-desc">${p.description}</p>
          <ul class="tech-list">
            ${p.tech.map((t) => `<li>${t}</li>`).join('')}
          </ul>
        </div>
        <a class="project-link" href="${p.github}" target="_blank" rel="noopener noreferrer">
          GitHub
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </article>`;
    })
    .join('');

  observeRevealElements();
}

/* ═══════════════════════════════════════════════════════════════
   SCROLL REVEAL
═══════════════════════════════════════════════════════════════ */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const observer = prefersReducedMotion
  ? null
  : new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

function observeRevealElements() {
  const els = document.querySelectorAll('.reveal:not(.visible)');
  if (prefersReducedMotion) {
    els.forEach((el) => el.classList.add('visible'));
    return;
  }
  els.forEach((el) => observer.observe(el));
}

/* ═══════════════════════════════════════════════════════════════
   NAVBAR — scroll state + scroll-spy
═══════════════════════════════════════════════════════════════ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = [...document.querySelectorAll('main section[id]')];
  if (!navbar || !sections.length) return;

  let sectionOffsets = [];

  function recalcOffsets() {
    sectionOffsets = sections.map((s) => ({
      id: s.id,
      top: s.offsetTop - 120,
      bottom: s.offsetTop + s.offsetHeight - 120,
    }));
  }

  function setActiveLink() {
    const y = window.scrollY;
    navbar.classList.toggle('scrolled', y > 60);

    const current = sectionOffsets.find((s) => y >= s.top && y < s.bottom);
    navLinks.forEach((link) => {
      const match = current && link.getAttribute('href') === `#${current.id}`;
      link.classList.toggle('active', !!match);
    });
  }

  recalcOffsets();
  setActiveLink();

  window.addEventListener('scroll', setActiveLink, { passive: true });
  window.addEventListener('resize', recalcOffsets);
}

/* ═══════════════════════════════════════════════════════════════
   MOBILE MENU
═══════════════════════════════════════════════════════════════ */
function initHamburger() {
  const btn = document.getElementById('hamburger-btn');
  const drawer = document.getElementById('nav-links');
  if (!btn || !drawer) return;

  const focusableSelector = 'a, button';

  function openMenu() {
    drawer.classList.add('open');
    btn.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    const first = drawer.querySelector(focusableSelector);
    if (first) first.focus();
  }

  function closeMenu({ restoreFocus = false } = {}) {
    drawer.classList.remove('open');
    btn.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    if (restoreFocus) btn.focus();
  }

  btn.addEventListener('click', () => {
    drawer.classList.contains('open') ? closeMenu({ restoreFocus: true }) : openMenu();
  });

  drawer.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') closeMenu();
  });

  document.addEventListener('click', (e) => {
    if (drawer.classList.contains('open') && !drawer.contains(e.target) && !btn.contains(e.target)) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeMenu({ restoreFocus: true });
    }
  });

  // simple focus trap while open
  drawer.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab' || !drawer.classList.contains('open')) return;
    const focusables = [...drawer.querySelectorAll(focusableSelector)];
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });
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
  renderOtherProjects();
  initNavbar();
  initHamburger();
  observeRevealElements();
  setFooterYear();
});
