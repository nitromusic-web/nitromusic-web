// ============================================================
// Nitro Insights — Column (칼럼) — app.js
// Bilingual via window.NITRO_I18N (ko/en)
// ============================================================

const $ = (s, p=document) => p.querySelector(s);
const $$ = (s, p=document) => [...p.querySelectorAll(s)];

const state = {
  layout: "a",
  density: "3",
  card: "hybrid",
  accent: "red",
  audience: "all",
  search: "",
  sort: "popular"
};

// Apply saved tweaks
try { Object.assign(state, window.TWEAK_DEFAULTS || {}); } catch(e) {}

const AUDS = window.NITRO_AUDIENCES;
const ALL = window.NITRO_COLUMNS;

// i18n helpers (fallback to KO field if EN not present)
const T = (obj, field) => (window.NITRO_I18N ? window.NITRO_I18N.t(obj, field) : (obj && obj[field] != null ? obj[field] : ''));
const CAT = c => (window.NITRO_LANG === 'en' && c.cat_name_en) ? c.cat_name_en : c.cat;
const READ = c => (window.NITRO_LANG === 'en' && c.read_en) ? c.read_en : c.read;

// =============== AUDIENCE CHIPS ===============
function renderAudChips() {
  const host = $('#aud-chips');
  host.innerHTML = AUDS.map(a =>
    `<button class="chip ${state.audience===a.key?'on':''}" data-aud="${a.key}" aria-pressed="${state.audience===a.key}">
       ${T(a, 'label')}<span class="ct">${String(a.count).padStart(2,'0')}</span>
     </button>`
  ).join('');
  $$('#aud-chips .chip').forEach(b=>{
    b.onclick = () => { state.audience = b.dataset.aud; renderAudChips(); renderAll(); };
  });
}

// =============== FILTER ===============
function filtered() {
  let rows = ALL.slice();
  if (state.audience !== 'all') rows = rows.filter(r => r.audience.includes(state.audience));
  if (state.search) {
    const q = state.search.toLowerCase();
    rows = rows.filter(r => {
      const hay = [r.title, r.title_en, r.cat, r.cat_name_en, r.dek, r.dek_en]
        .filter(Boolean).join(' ').toLowerCase();
      return hay.includes(q);
    });
  }
  return rows;
}

// =============== THUMB RENDERER ===============
function thumbHTML(c) {
  const hook = (T(c, 'thumb_hook') || T(c, 't_hook') || '').replace(/\n/g, '<br>');
  if (c.thumb_mode === 'photo' && c.thumb_img) {
    return `<div class="thumb photo">
      <img src="${c.thumb_img}" alt="">
      <div class="overlay"><div class="hk">${hook}</div></div>
    </div>`;
  }
  const lightBg = isLightColor(c.thumb_bg);
  if (c.thumb_mode === 'abstract') {
    return `<div class="thumb abstract ${lightBg?'light-bg':''}" style="background:${c.thumb_bg}; color:${c.thumb_fg};">
      <div class="hk">${hook}</div>
    </div>`;
  }
  return `<div class="thumb ${lightBg?'light-bg':''}" style="background:${c.thumb_bg}; color:${c.thumb_fg};">
    <div class="hk">${hook}</div>
  </div>`;
}
function isLightColor(hex){
  if(!hex||!hex.startsWith('#')) return false;
  const r=parseInt(hex.slice(1,3),16), g=parseInt(hex.slice(3,5),16), b=parseInt(hex.slice(5,7),16);
  return (0.299*r + 0.587*g + 0.114*b) > 160;
}
function audPills(c){
  return c.audience.map(a=>{
    const aud = AUDS.find(x=>x.key===a) || { key: a, label: a };
    return `<span class="aud ${a}">${T(aud, 'label')}</span>`;
  }).join('');
}

// =============== LAYOUT A: EDITORIAL ===============
function renderA(){
  const rows = filtered();
  const feat = rows.find(r=>r.featured) || rows[0];
  if(!feat){ $('#feat-hero').innerHTML=''; $('#feat-side').innerHTML=''; $('#a-grid').innerHTML=''; return; }

  const viewsLabel = window.NITRO_LANG === 'en' ? 'VIEWS' : 'VIEWS';

  $('#feat-hero').href = `article.html?id=${feat.id}`;
  $('#feat-hero').innerHTML = `
    ${thumbHTML(feat)}
    <div class="body">
      <div class="meta">
        <span class="cat">${CAT(feat)}</span>
        <span class="sep">/</span>
        <span>${feat.date}</span>
        <span class="sep">/</span>
        <span>${READ(feat)}</span>
      </div>
      <h2>${T(feat, 'title')}</h2>
      <p class="dek">${T(feat, 'dek')}</p>
      <div class="foot">
        <span>BY ${(T(feat, 'author') || '').toUpperCase()}</span>
        <span class="views">${feat.views} ${viewsLabel}</span>
      </div>
    </div>
  `;

  const sides = rows.filter(r=>r.id!==feat.id).slice(0,3);
  $('#feat-side').innerHTML = sides.map(c=>`
    <a class="feat-side-item" href="article.html?id=${c.id}">
      ${thumbHTML(c)}
      <div class="body">
        <div class="cat">${CAT(c)}</div>
        <h3>${T(c, 'title')}</h3>
        <div class="foot">${c.date} · ${c.views} ${viewsLabel}</div>
      </div>
    </a>
  `).join('');

  const rest = rows.filter(r => r.id!==feat.id && !sides.includes(r));
  const postsLabel = window.NITRO_LANG === 'en' ? 'POSTS' : 'POSTS';
  $('#a-count').textContent = `${rest.length} ${postsLabel}`;
  renderGrid('#a-grid', rest);
}

// =============== LAYOUT B: MAGAZINE GRID ===============
function renderB(){
  const rows = filtered();
  const postsLabel = window.NITRO_LANG === 'en' ? 'POSTS' : 'POSTS';
  $('#b-count').textContent = `${rows.length} ${postsLabel}`;
  renderGrid('#b-grid', rows);
}

function renderGrid(sel, rows){
  const host = $(sel);
  const density = state.density;
  host.className = 'mag-grid';
  if (density==='2') host.classList.add('dense-2');
  if (density==='1') host.classList.add('dense-list');

  host.innerHTML = rows.map(c => {
    const listMode = density==='1';
    const textOnly = state.card === 'text';
    const thumbOnly = state.card === 'thumb';

    let cls = 'mag-card';
    if (listMode) cls += ' list-row';
    else if (textOnly) cls += ' text-only';

    const thumb = thumbHTML(c);
    const audRow = `<div class="aud-row">${audPills(c)}</div>`;

    let body = `
      <div class="body">
        <div class="cat">${CAT(c)}</div>
        <h3>${T(c, 'title')}</h3>
        ${(listMode || textOnly) ? `<p class="big-dek">${T(c, 'dek')}</p>` : ''}
        <div class="foot">
          <span>${c.date} · ${READ(c)}</span>
          <span class="views">${c.views}</span>
        </div>
      </div>
    `;

    if (thumbOnly && !listMode) {
      body = `
        <div class="body">
          <div class="foot" style="margin-top:0; border-top:0; padding-top:0;">
            <span class="cat" style="color: var(--red); font-family: var(--font-mono); font-size:10px; letter-spacing:0.12em;">${CAT(c)}</span>
            <span class="views">${c.views}</span>
          </div>
          <h3>${T(c, 'title')}</h3>
        </div>`;
    }

    const thumbBlock = textOnly && !listMode ? '' : `<div class="thumb-wrap" style="position:relative;">${audRow}${thumb}</div>`;
    return `<a class="${cls}" href="article.html?id=${c.id}">${thumbBlock}${body}</a>`;
  }).join('');

  // Move aud-row inside .thumb for clean positioning
  $$('.thumb-wrap', host).forEach(w=>{
    const thumb = w.querySelector('.thumb');
    const aud = w.querySelector('.aud-row');
    if(thumb && aud){ thumb.prepend(aud); w.replaceWith(thumb); }
  });
}

// =============== LAYOUT C: TERMINAL ===============
function renderC(){
  const rows = filtered();
  $('#term-top5').innerHTML = rows.slice(0,5).map((c,i)=>`
    <a class="top5-row" href="article.html?id=${c.id}">
      <div class="rk">${String(i+1).padStart(2,'0')}</div>
      <div class="tt">${T(c, 'title')}</div>
      <div class="vv">${c.views}</div>
    </a>
  `).join('');

  $('#term-rows').innerHTML = rows.map((c,i)=>`
    <a class="terminal-row ${c.trending?'trending':''}" href="article.html?id=${c.id}">
      <div class="no">${String(i+1).padStart(3,'0')}</div>
      <div class="title-cell">
        <span class="ct">${c.cat_en.toUpperCase()}</span>
        <span class="tt">${T(c, 'title')}</span>
      </div>
      <div class="cat-cell">${c.cat_en}</div>
      <div class="aud-cell">${c.audience.map(a=>`<span class="aud-dot ${a}" title="${a}"></span>`).join('')}</div>
      <div class="date-cell">${c.date}</div>
      <div class="views-cell">${c.views}</div>
      <div class="read-cell">${READ(c)}</div>
      <div class="chev-cell">→</div>
    </a>
  `).join('');
}

// =============== MAIN RENDER ===============
function applyLayout(){
  ['a','b','c'].forEach(k=>{
    $('#layout-'+k).style.display = state.layout===k?'block':'none';
  });
  $$('#layout-switch button').forEach(b=>b.classList.toggle('on', b.dataset.ly===state.layout));
  $$('#tw-layout button').forEach(b=>b.classList.toggle('on', b.dataset.v===state.layout));
}
function renderAll(){
  renderAudChips();
  renderHeroTop5();
  applyLayout();
  if (state.layout==='a') renderA();
  else if (state.layout==='b') renderB();
  else renderC();
  applyAccent();
}

// =============== HERO · TOP 5 (hidden — app.js compat) ===============
function renderHeroTop5() {
  const bestHost = document.getElementById('hero-best');
  const listHost = document.getElementById('rank-list');
  if (!bestHost || !listHost) return;

  const byViews = [...ALL].sort((a, b) => {
    const na = parseInt((a.views || '0').replace(/,/g, ''), 10);
    const nb = parseInt((b.views || '0').replace(/,/g, ''), 10);
    return nb - na;
  });
  const top5 = byViews.slice(0, 5);
  const best = top5[0];
  const rest = top5.slice(1);

  if (best) {
    bestHost.href = `article.html?id=${best.id}`;
    const bestHook = (T(best, 'thumb_hook') || '').replace(/\n/g, '<br>');
    let bthumbHTML;
    if (best.thumb_mode === 'photo' && best.thumb_img) {
      bthumbHTML = `<div class="bthumb photo" style="background:${best.thumb_bg || '#0a0a0b'}">
        <img src="${best.thumb_img}" alt="">
        <div class="overlay"><span class="hk">${bestHook}</span></div>
      </div>`;
    } else if (best.thumb_mode === 'abstract') {
      bthumbHTML = `<div class="bthumb abstract" style="background:${best.thumb_bg};color:${best.thumb_fg};">
        <span class="hk">${bestHook}</span>
      </div>`;
    } else {
      bthumbHTML = `<div class="bthumb" style="background:${best.thumb_bg};color:${best.thumb_fg};">
        <span class="hk">${bestHook}</span>
      </div>`;
    }
    bestHost.innerHTML = `
      <div class="best-rank">★ BEST · 01</div>
      ${bthumbHTML}
      <div class="bbody">
        <div>
          <div class="bkick">
            <span class="tag">MOST READ</span>
            <span>${(best.cat_en || '').toUpperCase()}</span>
          </div>
          <div class="btitle">${T(best, 'title')}</div>
          <div class="bdek">${T(best, 'dek')}</div>
        </div>
        <div class="bfoot">
          <span class="v">${best.views}</span>
          <span>views</span>
          <span class="sep">/</span>
          <span>${READ(best)}</span>
          <span class="sep">/</span>
          <span>${best.date}</span>
          <span class="cta">READ →</span>
        </div>
      </div>
    `;
  }

  listHost.innerHTML = rest.map((c, i) => {
    const rank = String(i + 2).padStart(2, '0');
    const hook = (T(c, 'thumb_hook') || '').replace(/\n/g, '<br>');
    let rthumb;
    if (c.thumb_mode === 'photo' && c.thumb_img) {
      rthumb = `<div class="rthumb photo" style="background:${c.thumb_bg || '#0a0a0b'}">
        <img src="${c.thumb_img}" alt="">
      </div>`;
    } else if (c.thumb_mode === 'abstract') {
      rthumb = `<div class="rthumb abstract" style="background:${c.thumb_bg};color:${c.thumb_fg};">
        <span class="hk">${hook}</span>
      </div>`;
    } else {
      rthumb = `<div class="rthumb" style="background:${c.thumb_bg};color:${c.thumb_fg};">
        <span class="hk">${hook}</span>
      </div>`;
    }
    const n = parseInt((c.views || '0').replace(/,/g, ''), 10);
    const viewShort = n >= 10000
      ? (window.NITRO_LANG === 'en'
          ? (n / 1000).toFixed(0) + 'K'
          : (n / 10000).toFixed(1).replace(/\.0$/, '') + '만')
      : c.views;

    return `<li>
      <a href="article.html?id=${c.id}">
        <span class="rk">${rank}</span>
        ${rthumb}
        <div class="rbody">
          <div class="rcat">${(c.cat_en || '').toUpperCase()}</div>
          <div class="rtitle">${T(c, 'title')}</div>
        </div>
        <div class="rviews">${viewShort}<span class="u">views</span></div>
      </a>
    </li>`;
  }).join('');
}

function applyAccent(){
  const map = { red:'#E63946', ink:'#0a0a0b', blue:'#1d3a82' };
  document.documentElement.style.setProperty('--red', map[state.accent]);
  const softMap = { red:'#ff5c6a', ink:'#3a3a42', blue:'#3655b8' };
  document.documentElement.style.setProperty('--red-soft', softMap[state.accent]);
  const tintMap = { red:'rgba(230,57,70,0.08)', ink:'rgba(10,10,11,0.06)', blue:'rgba(29,58,130,0.08)' };
  document.documentElement.style.setProperty('--red-tint', tintMap[state.accent]);
}

// =============== EVENTS ===============
function setup(){
  renderAudChips();
  $('.search-box input').oninput = e => { state.search = e.target.value; renderAll(); };

  $$('#layout-switch button').forEach(b=>{
    b.onclick = () => { state.layout = b.dataset.ly; renderAll(); postTweaks(); };
  });
  $$('#tw-layout button').forEach(b=>{
    b.onclick = () => { state.layout = b.dataset.v; renderAll(); postTweaks(); };
  });
  $$('#tw-density button').forEach(b=>{
    b.onclick = () => {
      state.density = b.dataset.v;
      $$('#tw-density button').forEach(x=>x.classList.toggle('on', x===b));
      renderAll(); postTweaks();
    };
  });
  $$('#tw-card button').forEach(b=>{
    b.onclick = () => {
      state.card = b.dataset.v;
      $$('#tw-card button').forEach(x=>x.classList.toggle('on', x===b));
      renderAll(); postTweaks();
    };
  });
  $$('#tw-accent button').forEach(b=>{
    b.onclick = () => {
      state.accent = b.dataset.v;
      $$('#tw-accent button').forEach(x=>x.classList.toggle('on', x===b));
      applyAccent(); postTweaks();
    };
  });

  ['density','card','accent'].forEach(k=>{
    $$(`#tw-${k} button`).forEach(b=>b.classList.toggle('on', b.dataset.v===state[k]));
  });

  renderAll();

  // Re-render on language change
  document.addEventListener('nitro-lang-change', () => renderAll());
}

function postTweaks(){
  try {
    window.parent.postMessage({
      type:'__edit_mode_set_keys',
      edits: { layout: state.layout, density: state.density, card: state.card, accent: state.accent }
    }, '*');
  } catch(e){}
}

// Tweaks host integration
window.addEventListener('message', e=>{
  if(!e.data) return;
  if(e.data.type === '__activate_edit_mode') $('#tweaks').classList.add('show');
  if(e.data.type === '__deactivate_edit_mode') $('#tweaks').classList.remove('show');
});
try { window.parent.postMessage({type:'__edit_mode_available'}, '*'); } catch(e){}

document.addEventListener('DOMContentLoaded', setup);
