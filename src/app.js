const main = document.querySelector('main');
const nav = document.querySelector('#nav');
const esc = (v) => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const link = (id, title, cls = '') => `<a class="${cls}" href="#${esc(id)}">${esc(title)}</a>`;
let data;
function render() {
  const id = decodeURIComponent(location.hash.slice(1));
  document.querySelectorAll('[aria-current]').forEach(x => x.removeAttribute('aria-current'));
  const current = [...nav.querySelectorAll('a')].find(a => a.getAttribute('href') === '#' + id);
  current?.setAttribute('aria-current', 'page');
  const phase = data.phases.find(p => p.id === id || p.sections.some(s => s.id === id));
  const section = phase?.sections.find(s => s.id === id);
  if (section) {
    const index = phase.sections.indexOf(section);
    main.innerHTML = `<div class="eyebrow">PHASE ${phase.number} / ${esc(phase.name)}</div><h1>${esc(section.title)}</h1><div class="status">${esc(section.status)}</div><p class="lead">${esc(section.summary)}</p><section><h2>How it works</h2><p>${esc(section.explanation)}</p></section><section><h2>Business implications</h2><ul>${section.implications.map(s => `<li>${esc(s)}</li>`).join('')}</ul></section><section class="questions"><h2>Questions for discussion</h2><ol>${section.questions.map(s => `<li>${esc(s)}</li>`).join('')}</ol><p>These questions support discussion. This website does not save comments or record approvals.</p></section><section><h2>Supporting evidence</h2>${section.sources.length ? `<ul>${section.sources.map(s => `<li>${esc(s)}</li>`).join('')}</ul>` : '<p>No reviewed source evidence has been attached to this demonstration.</p>'}</section><div class="pagelinks">${index > 0 ? link(phase.sections[index-1].id, 'Previous section') : ''}${link('index','All sections')}${index < phase.sections.length-1 ? link(phase.sections[index+1].id,'Next section') : ''}</div>`;
  } else if (!id || id === 'index' || phase) {
    const phases = phase ? [phase] : data.phases;
    main.innerHTML = `<div class="eyebrow">${esc(data.audience)}</div><h1>${phase ? 'Phase '+phase.number+': '+esc(phase.name) : id === 'index' ? 'Master Section Index' : esc(data.title)}</h1><div class="status">${esc(data.mode)}</div><p class="lead">${esc(phase?.summary || data.summary)}</p>${phases.map(p => `<section><div class="phaseheading"><span class="number">0${p.number}</span><div><h2>${esc(p.name)}</h2><p>${esc(p.summary)}</p></div></div><div class="cards">${p.sections.map(s => `<article><h3>${esc(s.title)}</h3><p>${esc(s.summary)}</p>${link(s.id,s.button,'button')}</article>`).join('')}</div></section>`).join('')}`;
  } else {
    main.innerHTML = `<h1>Section not found</h1><p>Choose a section from the master index.</p>${link('index','Open section index','button')}`;
  }
  document.title = `${section?.title || phase?.name || 'Master Plan'} · ${data.title}`;
}
fetch('content.json').then(r => { if (!r.ok) throw new Error('Content unavailable'); return r.json(); }).then(d => {
  data = d;
  nav.innerHTML = `<div class="eyebrow">PROJECT NAVIGATION</div>${data.phases.map(p => `<details open><summary>Phase ${p.number} · ${esc(p.name)}</summary>${p.sections.map(s => link(s.id,s.title)).join('')}</details>`).join('')}`;
  render();
  addEventListener('hashchange', () => { render(); main.focus(); scrollTo({top:0,behavior:'instant'}); });
}).catch(() => { main.innerHTML = '<h1>Project content could not load</h1><p>Reload the page or ask the website owner to check the content release.</p>'; });
