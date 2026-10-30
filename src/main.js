import { projects } from './projects.js';

const grid = document.querySelector('#project-grid');
const modal = document.querySelector('#project-modal');
const dialog = modal.querySelector('.modal-dialog');
const modalContent = document.querySelector('#modal-content');
const modalPosition = document.querySelector('#modal-position');
let activeIndex = -1;
let lastFocused = null;

const escapeHTML = (value = '') => String(value).replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));

function diagram(type, title) {
  const label = escapeHTML(title);
  const commonStart = `<svg viewBox="0 0 800 500" role="img" aria-label="Technical schematic for ${label}" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid-${type}" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M32 0H0V32" fill="none" stroke="#242421" stroke-width="1"/></pattern><marker id="arrow-${type}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0l10 5-10 5z" fill="#FFDD33"/></marker></defs><rect width="800" height="500" fill="#0d0d0c"/><rect width="800" height="500" fill="url(#grid-${type})"/><style>.t{font:500 12px 'IBM Plex Mono',monospace;fill:#aaa9a2;letter-spacing:1px}.y{fill:#FFDD33}.l{fill:none;stroke:#FFDD33;stroke-width:2}.w{fill:none;stroke:#d8d8d1;stroke-width:2}.d{fill:none;stroke:#666660;stroke-width:1;stroke-dasharray:5 5}</style><text x="34" y="42" class="t y">ENGINEERING SCHEMATIC / ${label.toUpperCase().slice(0,39)}</text>`;
  const end = `<text x="34" y="470" class="t">SAM VONCKEN / SELECTED WORK</text><text x="655" y="470" class="t y">NOT TO SCALE</text></svg>`;
  const drawings = {
    thermal: `<g transform="translate(74 94)"><rect x="0" y="52" width="350" height="230" class="w"/><path d="M0 100h350M0 244h350" class="d"/><g fill="#1c1c19" stroke="#FFDD33">${Array.from({length: 12}, (_,i) => `<rect x="${22+(i%6)*53}" y="${124+Math.floor(i/6)*78}" width="37" height="57"/>`).join('')}</g><path d="M425 82h160M425 167h160M425 252h160" class="l" marker-end="url(#arrow-thermal)"/><path d="M607 55v229" class="w"/><path d="M580 73l27-18 27 18M580 158l27-18 27 18M580 243l27-18 27 18" class="l"/><text x="18" y="38" class="t">ACCUMULATOR / 550 W</text><text x="424" y="42" class="t y">AIRFLOW →</text><text x="18" y="319" class="t">Q_GEN → CONDUCTION → CONVECTION</text></g>`,
    reverse: `<g transform="translate(55 105)"><path d="M20 174l72-98 90 18 40 116-72 76-92-28z" class="w"/><circle cx="113" cy="177" r="43" class="l"/><circle cx="113" cy="177" r="13" class="w"/><path d="M254 177h91" class="l" marker-end="url(#arrow-reverse)"/><path d="M388 78l114 48v139l-114 49-114-49V126z" class="w"/><path d="M274 126l114 49 114-49M388 175v139" class="l"/><path d="M541 77h145v219H541zM559 110h106M559 132h70M559 222h106M559 244h70" class="w"/><circle cx="613" cy="177" r="28" class="l"/><text x="30" y="325" class="t">01 / PHYSICAL PART</text><text x="298" y="325" class="t">02 / PARAMETRIC CAD</text><text x="545" y="325" class="t">03 / GD&amp;T</text></g>`,
    combustion: `<g transform="translate(55 84)"><path d="M260 65h196v256H260z" class="w"/><path d="M286 65V27h144v38M306 321v38h104v-38" class="w"/><path d="M307 189h102v132H307z" class="l"/><path d="M358 321v55M358 376l78 41" class="w"/><path d="M15 113h183l62 41" class="l" marker-end="url(#arrow-combustion)"/><path d="M138 19v96l85 54" class="l" marker-end="url(#arrow-combustion)"/><path d="M475 265c78-14 111-89 157-172" class="w"/><path d="M485 268c56-37 73-48 97-112 15 58 28 63 50-18" class="l"/><text x="15" y="91" class="t y">CH₄ / CO₂ = 20 / 80</text><text x="15" y="113" class="t">PRIMARY FUEL</text><text x="15" y="17" class="t y">RME + PO PILOT</text><text x="505" y="312" class="t">CYLINDER PRESSURE</text><text x="275" y="418" class="t">SINGLE-CYLINDER SCANIA D13</text></g>`,
    tool: `<g transform="translate(50 80)"><circle cx="222" cy="185" r="130" class="w"/><circle cx="222" cy="185" r="80" class="l"/><circle cx="222" cy="185" r="24" class="w"/>${Array.from({length:12},(_,i)=>{const a=i*Math.PI/6;const x1=222+105*Math.cos(a),y1=185+105*Math.sin(a),x2=222+130*Math.cos(a),y2=185+130*Math.sin(a);return `<path d="M${x1} ${y1}L${x2} ${y2}" class="w"/>`}).join('')}<path d="M451 68h182l-38 55H510v199h-62V123z" class="l"/><path d="M432 322h224M432 313v18M656 313v18M83 185h-52M31 176v18M83 176v18" class="w"/><text x="83" y="353" class="t">DIFFERENTIAL ASSEMBLY</text><text x="446" y="353" class="t">SPECIALIST TOOL</text><text x="435" y="46" class="t y">LOAD / LOCATE / REPEAT</text></g>`,
    rally: `<g transform="translate(45 96)"><path d="M78 238l20-82 94-19 62-82h180l85 86 105 28 36 69-31 39H91z" class="w"/><path d="M227 143l48-65h145l63 65zM290 78v65M98 156l126-13M484 143l-1 99M191 137l-14 105" class="l"/><circle cx="199" cy="269" r="61" class="w"/><circle cx="199" cy="269" r="25" class="l"/><circle cx="524" cy="269" r="61" class="w"/><circle cx="524" cy="269" r="25" class="l"/><path d="M285 195h92v50h-92z" class="w"/><path d="M304 211h52M304 226h38" class="l"/><path d="M24 320h654M24 312v16M678 312v16" class="d"/><text x="42" y="33" class="t y">RENAULT 4 / RESTORATION + POWERTRAIN SWAP</text><text x="261" y="369" class="t">TURBO / 5-SPEED / STANDALONE ECU</text></g>`,
    rallyraid: `<g transform="translate(45 78)"><path d="M214 23l-42 39 18 48-37 42 51 53-11 69 55 39 58-27 32-61-15-50 37-66-39-35-17-51z" class="d"/><path d="M406 209l-49 42 21 58 76 34 84-24 43-73-26-70-67 12z" class="w"/><path d="M241 75c72 44 33 133 102 152s56 59 95 70" class="l" stroke-dasharray="7 7" marker-end="url(#arrow-rallyraid)"/><circle cx="241" cy="75" r="7" class="y"/><circle cx="438" cy="297" r="9" class="y"/><path d="M535 55h159M535 73h103" class="w"/><text x="535" y="110" class="t y">11 MEMBERS</text><text x="535" y="134" class="t">10 NATIONALITIES</text><text x="535" y="158" class="t">€15,000 SPONSORSHIP</text><text x="182" y="355" class="t">NETHERLANDS</text><text x="394" y="377" class="t y">MOROCCO / ≈8,000 KM</text></g>`,
    swirl: `<g transform="translate(160 80)"><path d="M180 30h140l30 70v220l-55 55H205l-55-55V100z" class="w"/><ellipse cx="250" cy="185" rx="85" ry="62" class="l"/><path d="M90 120H0M90 260H0M410 120h90M410 260h90" class="l" marker-end="url(#arrow-swirl)"/><text x="164" y="421" class="t">4-PORT / DUAL LOOP</text></g>`
  };
  return commonStart + (drawings[type] || drawings.thermal) + end;
}

function projectCard(project, index) {
  const media = project.cover
    ? `<img src="${project.cover}" alt="${escapeHTML(project.coverAlt)}" loading="lazy">`
    : diagram(project.visual, project.title);
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
  const figures = project.media?.length ? `<div class="modal-gallery">${project.media.map(item => `<figure class="modal-figure"><img src="${item.src}" alt="${escapeHTML(item.alt)}" loading="lazy"><figcaption>${escapeHTML(item.caption)}</figcaption></figure>`).join('')}</div>` : `<div class="modal-diagram">${diagram(project.visual, project.title)}</div>`;
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

const toast = document.querySelector('#toast');
let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 2200);
}
document.querySelector('[data-copy-email]').addEventListener('click', async () => {
  const email = 'sam.voncken@hotmail.nl';
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
