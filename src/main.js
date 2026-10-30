import { projects } from './projects.js';

const grid = document.querySelector('#project-grid');
const modal = document.querySelector('#project-modal');
const dialog = modal.querySelector('.modal-dialog');
const modalContent = document.querySelector('#modal-content');
const modalPosition = document.querySelector('#modal-position');
let activeIndex = -1;
let lastFocused = null;

['contextmenu', 'dragstart'].forEach(type => {
  document.addEventListener(type, event => {
    if (event.target instanceof HTMLImageElement) event.preventDefault();
  });
});

const escapeHTML = (value = '') => String(value).replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));

function projectCard(project, index) {
  const media = project.cover
    ? `<img src="${project.cover}" alt="${escapeHTML(project.coverAlt)}" loading="lazy" data-project-cover="${index}">`
    : '<span class="project-image-placeholder mono">Project image</span>';
  return `<article class="project-card reveal">
    <div class="project-visual">${media}<span class="project-open" aria-hidden="true">↗</span></div>
    <div class="project-info">
      <div class="project-meta"><span class="project-number">/${String(index + 1).padStart(2, '0')}</span><span>${escapeHTML(project.category)}</span>${project.status ? `<span class="project-status">${escapeHTML(project.status)}</span>` : ''}</div>
      <h3>${escapeHTML(project.title)}</h3>
      <p class="project-summary">${escapeHTML(project.summary)}</p>
      <ul class="project-tags">${project.tags.slice(0, 3).map(tag => `<li>${escapeHTML(tag)}</li>`).join('')}</ul>
    </div>
    <button class="project-card-hit" type="button" data-open-project="${index}" aria-label="Open case study: ${escapeHTML(project.title)}"></button>
  </article>`;
}

function projectModal(project, index) {
  const figures = project.media?.length ? `<div class="modal-gallery">${project.media.map(item => `<figure class="modal-figure"><img src="${item.src}" alt="${escapeHTML(item.alt)}" loading="lazy"><figcaption>${escapeHTML(item.caption)}</figcaption></figure>`).join('')}</div>` : '';
  const links = project.links?.length ? `<div class="modal-links">${project.links.map(link => `<a href="${link.url}" ${link.download ? 'download' : ''} ${link.external ? 'target="_blank" rel="noopener noreferrer"' : ''} class="${link.secondary ? 'secondary' : ''}">${escapeHTML(link.label)} <span aria-hidden="true">${link.download ? '↓' : '↗'}</span></a>`).join('')}</div>` : '';
  return `<div class="modal-eyebrow"><span>/${String(index + 1).padStart(2, '0')}</span><span>${escapeHTML(project.category)}</span><span>${escapeHTML(project.year)}</span>${project.status ? `<span class="project-status">${escapeHTML(project.status)}</span>` : ''}</div>
    <h2 class="modal-title" id="modal-title">${escapeHTML(project.title)}</h2>
    <p class="modal-intro">${escapeHTML(project.intro)}</p>
    <div class="modal-role"><span class="mono">My role &amp; ownership</span><p>${escapeHTML(project.role)}</p></div>
    <ul class="modal-tags">${project.tags.map(tag => `<li>${escapeHTML(tag)}</li>`).join('')}</ul>
    ${figures}
    <div class="modal-metrics">${project.metrics.map(metric => `<div class="modal-metric"><strong>${escapeHTML(metric.value)}</strong><span>${escapeHTML(metric.label)}</span></div>`).join('')}</div>
    <div class="modal-body-grid">${project.details.map(section => `<section class="modal-section"><h3>${escapeHTML(section.title)}</h3><p>${escapeHTML(section.text)}</p></section>`).join('')}</div>
    <section class="modal-results"><h3>Results / evaluation</h3><ul>${project.results.map(result => `<li>${escapeHTML(result)}</li>`).join('')}</ul></section>
    ${project.note ? `<p class="modal-note">${escapeHTML(project.note)}</p>` : ''}${links}`;
}

function openProject(index, updateHash = true) {
  if (index < 0 || index >= projects.length) return;
  if (activeIndex === -1) lastFocused = document.activeElement;
  activeIndex = index;
  const project = projects[index];
  modalContent.innerHTML = projectModal(project, index);
  modalPosition.textContent = `Case study ${String(index + 1).padStart(2, '0')} / ${String(projects.length).padStart(2, '0')}`;
  modal.hidden = false;
  document.body.classList.add('modal-open');
  dialog.scrollTop = 0;
  if (updateHash) history.replaceState(null, '', `#project-${project.id}`);
  requestAnimationFrame(() => dialog.focus({ preventScroll: true }));
}

function closeProject(updateHash = true) {
  if (activeIndex === -1) return;
  modal.hidden = true;
  document.body.classList.remove('modal-open');
  activeIndex = -1;
  if (updateHash) history.replaceState(null, '', '#projects');
  if (lastFocused && document.contains(lastFocused)) lastFocused.focus({ preventScroll: true });
}

grid.innerHTML = projects.map(projectCard).join('');
grid.addEventListener('click', event => {
  const trigger = event.target.closest('[data-open-project]');
  if (trigger) openProject(Number(trigger.dataset.openProject));
});
function replaceMissingCover(image) {
  const visual = image.closest('.project-visual');
  image.remove();
  visual.insertAdjacentHTML('afterbegin', '<span class="project-image-placeholder mono">Project image</span>');
}
grid.addEventListener('error', event => {
  const image = event.target;
  if (image.matches('[data-project-cover]')) replaceMissingCover(image);
}, true);
grid.querySelectorAll('[data-project-cover]').forEach(image => {
  if (image.complete && image.naturalWidth === 0) replaceMissingCover(image);
});
const portrait = document.querySelector('[data-portrait]');
portrait.addEventListener('error', () => portrait.remove());
if (portrait.complete && portrait.naturalWidth === 0) portrait.remove();
document.querySelectorAll('[data-education-logo]').forEach(logo => {
  const showFallback = () => {
    const frame = logo.closest('.education-logo');
    logo.remove();
    frame.classList.add('is-missing');
  };
  logo.addEventListener('error', showFallback, { once: true });
  if (logo.complete && logo.naturalWidth === 0) showFallback();
});
modal.querySelectorAll('[data-close-modal]').forEach(control => control.addEventListener('click', () => closeProject()));
modal.querySelector('[data-project-prev]').addEventListener('click', () => openProject((activeIndex - 1 + projects.length) % projects.length));
modal.querySelector('[data-project-next]').addEventListener('click', () => openProject((activeIndex + 1) % projects.length));

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    if (activeIndex !== -1) closeProject();
    closeMenu();
  }
  if (event.key === 'Tab' && activeIndex !== -1) {
    const focusable = [...dialog.querySelectorAll('a[href], button:not([disabled]), [tabindex="0"]')].filter(el => el.offsetParent !== null);
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && (document.activeElement === first || document.activeElement === dialog)) {
      event.preventDefault(); last.focus();
    } else if (!event.shiftKey && (document.activeElement === last || document.activeElement === dialog)) {
      event.preventDefault(); first.focus();
    }
  }
});

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
function closeMenu() {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('open', open);
});
nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });

const contactEmail = ['sam.voncken', 'hotmail.nl'].join('@');
document.querySelectorAll('[data-email-link]').forEach(link => { link.href = `mailto:${contactEmail}`; });
document.querySelector('[data-email-text]').textContent = contactEmail;
const toast = document.querySelector('#toast');
let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 2200);
}
document.querySelector('[data-copy-email]').addEventListener('click', async () => {
  const email = contactEmail;
  try {
    if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(email);
    else {
      const area = document.createElement('textarea');
      area.value = email; area.style.position = 'fixed'; area.style.opacity = '0';
      document.body.appendChild(area); area.select(); document.execCommand('copy'); area.remove();
    }
    showToast('Email copied to clipboard');
  } catch { showToast(email); }
});

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if ('IntersectionObserver' in window && !reducedMotion) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px' });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
} else document.querySelectorAll('.reveal').forEach(element => element.classList.add('is-visible'));

document.querySelector('#year').textContent = new Date().getFullYear();
const initialProject = location.hash.startsWith('#project-') ? projects.findIndex(project => `#project-${project.id}` === location.hash) : -1;
if (initialProject !== -1) openProject(initialProject, false);
window.addEventListener('hashchange', () => {
  if (location.hash.startsWith('#project-')) {
    const index = projects.findIndex(project => `#project-${project.id}` === location.hash);
    if (index !== -1 && index !== activeIndex) openProject(index, false);
  } else if (activeIndex !== -1) closeProject(false);
});
