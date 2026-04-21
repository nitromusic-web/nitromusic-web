// ============================================================
// NITRO MUSIC — app.js
// ============================================================

(function() {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // ---------------- State ----------------
  const state = {
    lang: (localStorage.getItem('nitro_lang') === 'en' ? 'en' : 'kr'),
    heroVariant: parseInt(localStorage.getItem('nitro_heroV') || '1', 10),
    colTab: 0
  };

  // ---------------- i18n render ----------------
  function t() { return window.NITRO_I18N[state.lang]; }

  function renderAll() {
    const d = t();
    // Nav
    $('[data-n="services"]').textContent = d.nav.services;
    $('[data-n="network"]').textContent = d.nav.network;
    $('[data-n="cases"]').textContent = d.nav.cases;
    $('[data-n="pilot"]').textContent = d.nav.pilot;
    $('[data-n="column"]').textContent = d.nav.column;
    $('[data-n="faq"]').textContent = d.nav.faq;
    $('[data-n="contact-btn"]').innerHTML = d.nav.contact + ' <span class="arrow">→</span>';

    // Hero
    renderHero();

    // Ticker (optional — HTML에서 제거될 수 있음)
    const ticker = $('.ticker-track');
    if (ticker) {
      const items = d.ticker.concat(d.ticker);
      ticker.innerHTML = items.map((x, i) => `<span>${x}</span><span class="sep">✦</span>`).join('');
    }

    // Service
    const s = d.service;
    $('#svc-eyebrow').textContent = s.eyebrow;
    $('#svc-title').innerHTML = s.title;
    $('#svc-sub').innerHTML = s.sub;
    const svcGrid = $('#svc-grid');
    const c = s.cards;
    svcGrid.innerHTML = `
      <div class="service-card feature">
        <div class="num">${c[0].n}</div>
        <div class="icon">${iconLayers()}</div>
        <h3>${c[0].t}</h3>
        <p>${c[0].d}</p>
        <ul>${c[0].list.map(i => `<li><span>${i.k}</span><span class="tag">${i.v}</span></li>`).join('')}</ul>
        <div class="big">${s.feature.big}</div>
        <div style="margin-top:12px; font-size:13px; color:var(--text-dim); max-width:320px; line-height:1.5;">
          <b style="color:var(--text); font-weight:600; display:block; margin-bottom:6px;">${s.feature.t}</b>${s.feature.d}
        </div>
      </div>
      <div class="service-card wide">
        <div class="num">${c[1].n}</div>
        <div class="icon">${iconNetwork()}</div>
        <h3>${c[1].t}</h3>
        <p>${c[1].d}</p>
      </div>
      <div class="service-card narrow">
        <div class="num">${c[2].n}</div>
        <div class="icon">${iconChart()}</div>
        <h3>${c[2].t}</h3>
        <p>${c[2].d}</p>
      </div>
      <div class="service-card narrow">
        <div class="num">${c[3].n}</div>
        <div class="icon">${iconCalendar()}</div>
        <h3>${c[3].t}</h3>
        <p>${c[3].d}</p>
      </div>
    `;

    // Network
    const n = d.network;
    $('#net-eyebrow').textContent = n.eyebrow;
    $('#net-title').textContent = n.title;
    $('#net-sub').textContent = n.sub;
    $('#net-stats').innerHTML = n.stats.map(st => `
      <div class="stat">
        <div class="v" data-count="${st.v}">${st.v}<span class="unit">${st.u}</span></div>
        <div class="l">${st.l}</div>
        <div class="d">${st.d}</div>
      </div>`).join('');
    $('#net-platform-label').textContent = n.platforms.label;
    const platformOnce = n.platforms.list.map(p => {
      const key = (typeof p === 'string' ? p : p.name || '').toLowerCase();
      const name = typeof p === 'string' ? p : p.name;
      return `<span class="p-item">${platformIcon(key)} <span>${name}</span></span>`;
    }).join('');
    $('#net-platform-list').innerHTML = `<div class="p-track">${platformOnce}${platformOnce}</div>`;

    // Cases
    const cs = d.cases;
    $('#case-eyebrow').textContent = cs.eyebrow;
    $('#case-title').innerHTML = cs.title.replace('\n', '<br>');
    $('#case-sub').textContent = cs.sub;
    $('#case-list').innerHTML = cs.rows.map((r, i) => `
      <div class="case-row" data-idx="${i}">
        <div class="no">${r.no}</div>
        <div class="client">${r.client}<span class="sub">${r.sub}</span></div>
        <div class="period">${r.period}</div>
        <div class="posts">${r.posts}<span style="font-size:11px; color:var(--text-mute); margin-left:4px; font-family:var(--font-mono);">POSTS</span></div>
        <div class="views">${r.views}</div>
        <div class="chev">→</div>
        <div class="case-detail">
          <div class="case-detail-inner">
            <div>
              <h4>STRATEGY</h4>
              <p>${r.strategy}</p>
              <div class="chips">${r.chips.map(ch => `<span class="chip">${ch}</span>`).join('')}</div>
            </div>
            <div>
              <h4>HIGHLIGHT</h4>
              <p style="color:var(--text);">${r.highlight}</p>
              <div class="metrics">${r.metrics.map(m => `<div class="m"><div class="mv">${m.v}</div><div class="ml">${m.l}</div></div>`).join('')}</div>
            </div>
          </div>
        </div>
      </div>
    `).join('');
    $$('#case-list .case-row').forEach(row => {
      row.addEventListener('click', () => row.classList.toggle('open'));
    });

    // Aggregate
    const ag = d.aggregate;
    $('#agg-eyebrow').textContent = ag.eyebrow;
    $('#agg-title').textContent = ag.title;
    $('#agg-caption').innerHTML = ag.caption;
    // breakdown values are shown statically — counting every small number
    // at once felt noisy. Only the big 23.5M+ hero number still counts.
    $('#agg-breakdown').innerHTML = ag.breakdown.map(b => `<div class="b"><div class="bv">${b.v}</div><div class="bl">${b.l}</div></div>`).join('');

    // Pilot
    const p = d.pilot;
    $('#pilot-eyebrow').textContent = p.eyebrow;
    $('#pilot-title').innerHTML = p.title;
    $('#pilot-sub').textContent = p.sub;
    $('#pilot-grid').innerHTML = p.steps.map((s, i) => `
      <div class="pilot-step">
        <div class="wk">${s.wk}</div>
        <div class="title">${s.t}</div>
        <div class="desc">${s.d}</div>
        ${i < p.steps.length - 1 ? '<div class="arrow-line"></div>' : ''}
      </div>
    `).join('');
    $('#pilot-deliv-k').textContent = p.deliverables.k;
    $('#pilot-deliv-items').innerHTML = p.deliverables.items.map(i => `<span>${i}</span>`).join('');

    // Why
    const w = d.why;
    $('#why-eyebrow').textContent = w.eyebrow;
    $('#why-title').innerHTML = `${w.title_1}<br><em>${w.title_em}</em>`;
    $('#why-sub').innerHTML = w.sub;
    $('#why-items').innerHTML = w.items.map(i => `
      <div class="why-item">
        <div class="n">${i.n}</div>
        <h3>${i.t}</h3>
        <p>${i.d}</p>
      </div>`).join('');

    // Clients — two-row marquee (top: R→L, bottom: L→R)
    const cl = d.clients;
    const cliEyebrow = $('#cli-eyebrow'); if (cliEyebrow) cliEyebrow.textContent = cl.eyebrow;
    const cliTitle = $('#cli-title'); if (cliTitle) cliTitle.textContent = cl.title;
    const renderLogo = (l) => {
      if (typeof l === 'string') return `<div class="logo-cell"><span class="logo-text">${l}</span></div>`;
      return `<div class="logo-cell" title="${l.name}"><img src="${l.src}" alt="${l.name}" loading="lazy"/></div>`;
    };
    const half = Math.ceil(cl.logos.length / 2);
    const topHtml = cl.logos.slice(0, half).map(renderLogo).join('');
    const bottomHtml = cl.logos.slice(half).map(renderLogo).join('');
    // Duplicate each row for seamless marquee loop
    $('#cli-logos').innerHTML = `
      <div class="logo-track">${topHtml}${topHtml}</div>
      <div class="logo-track logo-track-reverse">${bottomHtml}${bottomHtml}</div>
    `;

    // Column
    const col = d.column;
    $('#col-eyebrow').textContent = col.eyebrow;
    $('#col-title').textContent = col.title;
    $('#col-sub').textContent = col.sub;

    // Filters
    $('#col-filters').innerHTML = `<span class="k">${col.filters_label}</span>` +
      col.filters.map((x, i) => `<button class="${i===state.colTab?'on':''}" data-ct="${i}">${x}</button>`).join('');
    $$('#col-filters button').forEach(b => b.addEventListener('click', () => {
      state.colTab = parseInt(b.dataset.ct, 10);
      $$('#col-filters button').forEach(x => x.classList.toggle('on', x === b));
    }));

    // Top 5
    $('#col-top5-title').textContent = col.top5_title;
    $('#col-top5-sub').textContent = col.top5_sub;
    $('#col-top5-list').innerHTML = col.top5.map((it, i) => `
      <div class="top5-item">
        <div class="rank">${i+1}</div>
        <div class="thumb" style="background: linear-gradient(135deg, ${it.thumb}, ${it.thumb}cc);"></div>
        <div class="body">
          <div class="cat">${it.cat}</div>
          <div class="t">${it.t}${it.em ? ` <em>${it.em}</em>` : ''}</div>
        </div>
        <div class="views"><span class="vv">${it.views}</span>VIEWS</div>
      </div>
    `).join('');

    // New cards
    $('#col-new-title').textContent = col.new_title;
    $('#col-new-more').textContent = col.new_more;
    const audLabels = state.lang === 'kr'
      ? { ceo: 'CEO', promoter: '프로모터 담당자', senior: '시니어 아티스트', rookie: '신입 마케터', new: '신예 아티스트' }
      : { ceo: 'CEO', promoter: 'Promoter', senior: 'Senior artist', rookie: 'New marketer', new: 'New artist' };
    $('#col-new-grid').innerHTML = col.new_cards.map(cd => {
      const bg = cd.thumb_bg_img
        ? `background-image: linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55)), url('${cd.thumb_bg_img}'); background-size:cover; background-position:center;`
        : `background:${cd.thumb_bg};`;
      const textColor = (cd.thumb_bg_img || (cd.thumb_bg && cd.thumb_bg.match(/#[01][0-9a-f]/i))) ? 'color:white;' : '';
      return `
      <article class="col-new-card">
        <div class="thumb" style="${bg}">
          <div class="t-text" style="${textColor}">${cd.thumb_t} <em>${cd.thumb_em}</em></div>
        </div>
        <div class="body">
          <div class="audience">${cd.audience.map(a => `<span class="aud ${a}">${audLabels[a]||a}</span>`).join('')}</div>
          <div class="cat">${cd.cat}</div>
          <h4>${cd.t}</h4>
          <div class="meta">
            <span>${cd.read}</span><span class="sep">·</span>
            <span>${cd.date}</span><span class="sep">·</span>
            <span class="views-ic">👁 ${cd.views}</span>
          </div>
        </div>
      </article>
    `;}).join('');

    // FAQ
    const fa = d.faq;
    $('#faq-eyebrow').textContent = fa.eyebrow;
    $('#faq-title').textContent = fa.title;
    $('#faq-sub').textContent = fa.sub;
    $('#faq-list').innerHTML = fa.items.map((it, i) => `
      <div class="faq-item ${i===0?'open':''}">
        <button class="faq-q"><span>${it.q}</span><span class="plus">+</span></button>
        <div class="faq-a">${it.a}</div>
      </div>
    `).join('');
    $$('#faq-list .faq-item').forEach(it => {
      it.querySelector('.faq-q').addEventListener('click', () => it.classList.toggle('open'));
    });

    // Contact
    const co = d.contact;
    $('#co-eyebrow').textContent = co.eyebrow;
    $('#co-title').innerHTML = `${co.title_1}<br><em>${co.title_em}</em>`;
    $('#co-sub').innerHTML = co.sub;
    $('#co-channels').innerHTML = co.channels.map(ch => `
      <a href="#"><span class="k">${ch.k}</span><span class="v">${ch.v}</span><span class="arrow">→</span></a>
    `).join('');
    $('#co-form-head').textContent = co.form.head;
    $('#co-form-seq').textContent = co.form.seq;
    $('#co-form').innerHTML = `
      <div class="form-row">
        <div class="form-field"><label>${co.form.f_name} <span class="req">*</span></label><input type="text" required></div>
        <div class="form-field"><label>${co.form.f_company} <span class="req">*</span></label><input type="text" required></div>
      </div>
      <div class="form-row">
        <div class="form-field"><label>${co.form.f_role}</label><input type="text"></div>
        <div class="form-field"><label>${co.form.f_email} <span class="req">*</span></label><input type="email" required></div>
      </div>
      <div class="form-row">
        <div class="form-field full"><label>${co.form.f_artist}</label><input type="text" placeholder="e.g. Paul Kim — Wanna Love You"></div>
      </div>
      <div class="form-row">
        <div class="form-field full"><label>${co.form.f_goal}</label>
          <div class="checks" data-group="goal">
            <div class="check">Streaming conversion</div>
            <div class="check">Re-viral</div>
            <div class="check">New track launch</div>
            <div class="check">Artist awareness</div>
          </div>
        </div>
      </div>
      <div class="form-row">
        <div class="form-field"><label>${co.form.f_budget}</label>
          <select>${co.form.f_budget_opts.map(o => `<option>${o}</option>`).join('')}</select>
        </div>
        <div class="form-field"><label>${co.form.f_vertical}</label>
          <select>${co.form.f_vertical_opts.map(o => `<option>${o}</option>`).join('')}</select>
        </div>
      </div>
      <div class="form-row">
        <div class="form-field full"><label>${co.form.f_msg}</label><textarea placeholder="${state.lang==='kr'?'프로젝트 개요, 타임라인, 기존 준비물 등 자유롭게 작성해주세요.':'Briefly describe your project, timeline, existing assets, etc.'}"></textarea></div>
      </div>
      <div class="form-row">
        <div class="form-field full" style="flex-direction:row; align-items:center; gap:10px;">
          <input type="checkbox" id="priv" style="width:auto; margin:0;" required>
          <label for="priv" style="letter-spacing:0; font-family:var(--font-kr); font-size:17px; text-transform:none; color:var(--text-dim);">${co.form.privacy}</label>
        </div>
      </div>
      <button type="submit" class="form-submit">${co.form.submit} <span>→</span></button>
    `;
    $$('#co-form .check').forEach(c => c.addEventListener('click', () => c.classList.toggle('on')));

    // Footer
    const f = d.footer;
    $('#foot-tag').textContent = f.tag;
    $('#foot-col1-h').textContent = f.col1.h;
    $('#foot-col1-items').innerHTML = f.col1.items.map(x => `<li><a href="#">${x}</a></li>`).join('');
    $('#foot-col2-h').textContent = f.col2.h;
    $('#foot-col2-items').innerHTML = f.col2.items.map(x => `<li><a href="#">${x}</a></li>`).join('');
    $('#foot-col3-h').textContent = f.col3.h;
    $('#foot-col3-items').innerHTML = f.col3.items.map(x => `<li><a href="#">${x}</a></li>`).join('');
    $('#foot-copy').textContent = f.copyright;
    $('#foot-meta').textContent = f.meta;

    // Apply reveal observer (newly rendered elements)
    applyReveal();
  }

  function renderHero() {
    const d = t();
    const v = state.heroVariant;
    const h = d.hero;
    $('#hero-kicker').textContent = h[`v${v}_kicker`];
    $('#hero-title-1').textContent = h[`v${v}_title_line1`];
    $('#hero-title-2').textContent = h[`v${v}_title_line2`];
    $('#hero-sub').innerHTML = h[`v${v}_sub`];
    $('#hero-cta-primary').innerHTML = `${h[`v${v}_cta_primary`]} <span class="arrow">→</span>`;
    $('#hero-cta-secondary').innerHTML = `${h[`v${v}_cta_secondary`]} <span>↓</span>`;
    $('#hero-status-live').innerHTML = `<span class="dot"></span> ${h.status_live}`;
    $('#hero-date').textContent = h.date_tag;
    $('#hero-m1-k').innerHTML = `${h.m1_k}<span class="unit">+</span>`;
    $('#hero-m1-l').textContent = h.m1_l;
    $('#hero-m2-k').textContent = h.m2_k;
    $('#hero-m2-l').textContent = h.m2_l;
    $('#hero-m3-k').innerHTML = `${h.m3_k}<span class="unit">+</span>`;
    $('#hero-m3-l').textContent = h.m3_l;
    $('#hero-m4-k').textContent = h.m4_k;
    $('#hero-m4-l').textContent = h.m4_l;

    $$('.hero-variant-switch button').forEach(b => {
      b.classList.toggle('on', parseInt(b.dataset.hv, 10) === v);
    });
  }

  // ---------------- Icons ----------------
  function iconLayers() { return `<svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 6 L38 14 L22 22 L6 14 Z"/><path d="M6 22 L22 30 L38 22" opacity=".6"/><path d="M6 30 L22 38 L38 30" opacity=".3"/></svg>`; }
  function iconNetwork() { return `<svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="22" cy="22" r="4"/><circle cx="8" cy="8" r="3"/><circle cx="36" cy="8" r="3"/><circle cx="8" cy="36" r="3"/><circle cx="36" cy="36" r="3"/><path d="M22 22 L8 8 M22 22 L36 8 M22 22 L8 36 M22 22 L36 36" opacity=".5"/></svg>`; }
  function iconLink() { return `<svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 26 L26 18"/><path d="M14 22 L10 26 C7 29 7 33 10 36 C13 39 17 39 20 36 L24 32"/><path d="M30 22 L34 18 C37 15 37 11 34 8 C31 5 27 5 24 8 L20 12"/></svg>`; }
  function iconCalendar() { return `<svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="6" y="10" width="32" height="28"/><path d="M6 18 H38"/><path d="M14 6 V14 M30 6 V14"/><circle cx="14" cy="26" r="1.5" fill="currentColor"/><circle cx="22" cy="26" r="1.5" fill="currentColor"/></svg>`; }
  function iconChart() { return `<svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 34 H38"/><path d="M6 34 V8"/><path d="M10 28 L18 20 L24 24 L36 12"/><circle cx="36" cy="12" r="2" fill="currentColor"/></svg>`; }

  function platformIcon(key) {
    const k = key || '';
    // Instagram Reels — camera w/ play
    if (k.includes('instagram') || k.includes('reels')) {
      return `<svg class="p-ic" width="22" height="22" viewBox="0 0 24 24" fill="none"><defs><linearGradient id="igg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f58529"/><stop offset="0.5" stop-color="#dd2a7b"/><stop offset="1" stop-color="#515bd4"/></linearGradient></defs><rect x="2" y="2" width="20" height="20" rx="5" fill="url(#igg)"/><rect x="6" y="6" width="12" height="12" rx="3" fill="none" stroke="white" stroke-width="1.6"/><circle cx="12" cy="12" r="3" fill="none" stroke="white" stroke-width="1.6"/><circle cx="17" cy="7" r="1" fill="white"/></svg>`;
    }
    // TikTok
    if (k.includes('tiktok')) {
      return `<svg class="p-ic" width="22" height="22" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="5" fill="#000"/><path d="M15 5v6.2a3.5 3.5 0 1 1-3.5-3.5v2.3a1.2 1.2 0 1 0 1.2 1.2V5h.6a3.2 3.2 0 0 0 3.2 3.2V10a4.8 4.8 0 0 1-1.5-.25z" fill="#25F4EE" transform="translate(-0.6 0.6)"/><path d="M15 5v6.2a3.5 3.5 0 1 1-3.5-3.5v2.3a1.2 1.2 0 1 0 1.2 1.2V5h.6a3.2 3.2 0 0 0 3.2 3.2V10a4.8 4.8 0 0 1-1.5-.25z" fill="#FE2C55" transform="translate(0.6 -0.3)"/><path d="M15 5v6.2a3.5 3.5 0 1 1-3.5-3.5v2.3a1.2 1.2 0 1 0 1.2 1.2V5h.6a3.2 3.2 0 0 0 3.2 3.2V10a4.8 4.8 0 0 1-1.5-.25z" fill="#fff"/></svg>`;
    }
    // YouTube Shorts / YouTube Music
    if (k.includes('youtube music')) {
      return `<svg class="p-ic" width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#FF0000"/><circle cx="12" cy="12" r="4" fill="none" stroke="#fff" stroke-width="1.4"/><path d="M10.5 10 L14 12 L10.5 14 Z" fill="#fff"/></svg>`;
    }
    if (k.includes('youtube') || k.includes('shorts')) {
      return `<svg class="p-ic" width="26" height="22" viewBox="0 0 28 20" fill="none"><rect x="0" y="0" width="28" height="20" rx="5" fill="#FF0000"/><path d="M11.5 6 L17.5 10 L11.5 14 Z" fill="#fff"/></svg>`;
    }
    // Spotify
    if (k.includes('spotify')) {
      return `<svg class="p-ic" width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#1DB954"/><path d="M7 9.5 C10 8.5 14 8.5 17 10" stroke="#000" stroke-width="1.6" stroke-linecap="round"/><path d="M7.5 12.5 C10 11.8 13.5 11.8 16 13" stroke="#000" stroke-width="1.5" stroke-linecap="round"/><path d="M8 15 C10 14.5 13 14.5 15 15.3" stroke="#000" stroke-width="1.3" stroke-linecap="round"/></svg>`;
    }
    // Apple Music
    if (k.includes('apple')) {
      return `<svg class="p-ic" width="22" height="22" viewBox="0 0 24 24" fill="none"><defs><linearGradient id="apm" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FA57C1"/><stop offset="1" stop-color="#FC3C44"/></linearGradient></defs><rect width="24" height="24" rx="5" fill="url(#apm)"/><path d="M15.5 7.5 L10 9 V15.2 A2.2 2 0 1 1 8.6 13.3 L8.6 11 L15.5 9.6 V14.2 A2.2 2 0 1 1 14.1 12.3 L14.1 8.2 Z" fill="#fff"/></svg>`;
    }
    return `<span style="color:var(--red)">●</span>`;
  }

  // ---------------- Interactions ----------------
  function initNav() {
    window.addEventListener('scroll', () => {
      $('.nav').classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });

    $$('.lang-toggle button').forEach(b => {
      b.addEventListener('click', () => {
        state.lang = b.dataset.lang;
        localStorage.setItem('nitro_lang', state.lang);
        $$('.lang-toggle button').forEach(x => x.classList.toggle('on', x === b));
        renderAll();
      });
      b.classList.toggle('on', b.dataset.lang === state.lang);
    });

    $$('.hero-variant-switch button').forEach(b => {
      b.addEventListener('click', () => {
        state.heroVariant = parseInt(b.dataset.hv, 10);
        localStorage.setItem('nitro_heroV', state.heroVariant);
        renderHero();
      });
    });
  }

  // ---------------- Reveal & Count-up ----------------
  let revealObs;
  function applyReveal() {
    if (revealObs) revealObs.disconnect();
    revealObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          if (e.target.dataset.count) animateCount(e.target);
          revealObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    const seen = new Set();
    $$('.reveal, .stat .v, .hero-foot .k, [data-count]').forEach(el => {
      if (seen.has(el)) return;
      seen.add(el);
      if (!el.classList.contains('in') || el.dataset.count) {
        revealObs.observe(el);
      }
    });
  }

  function animateCount(el) {
    const target = el.dataset.count;
    // Extract the first numeric run; tolerate commas and decimals.
    const numMatch = target.match(/[\d][\d,]*(?:\.\d+)?/);
    if (!numMatch) return;
    const numStr = numMatch[0];
    const num = parseFloat(numStr.replace(/,/g, ''));
    if (!isFinite(num)) return;
    const prefix = target.slice(0, numMatch.index);
    const suffix = target.slice(numMatch.index + numStr.length);
    const hasComma = numStr.includes(',');
    const hasDecimal = numStr.includes('.');
    const decimals = hasDecimal ? (numStr.split('.')[1] || '').length : 0;
    const duration = 1500;
    const start = performance.now();
    const unit = el.querySelector('.unit')?.outerHTML || '';

    function fmt(cur) {
      if (hasDecimal) return cur.toFixed(decimals);
      if (hasComma || num >= 1000) return Math.floor(cur).toLocaleString();
      return Math.floor(cur).toString();
    }

    function frame(now) {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const cur = num * eased;
      el.innerHTML = prefix + fmt(cur) + suffix + unit;
      if (p < 1) requestAnimationFrame(frame);
      else el.innerHTML = target + unit;
    }
    requestAnimationFrame(frame);
  }

  // ---------------- Section indicator ----------------
  function initSectionIndicator() {
    const sections = $$('section[id]');
    const dots = $$('.section-indicator a');
    window.addEventListener('scroll', () => {
      const y = window.scrollY + window.innerHeight * 0.4;
      let active = sections[0];
      sections.forEach(s => { if (s.offsetTop <= y) active = s; });
      dots.forEach(d => d.classList.toggle('active', d.getAttribute('href') === '#' + active.id));
    }, { passive: true });
  }

  // ---------------- Boot ----------------
  function boot() {
    renderAll();
    initNav();
    initSectionIndicator();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
