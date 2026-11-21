/* Flondy UI – gemeinsame Designs (Skins), Event-Vorschläge und Sprache für den Flondy Store und Flondy.Dev.
   Nutzung: FlondyUI.init({primary:'--neon', ink:'--neon-ink', panel:'--panel', fg:'--ink', soft:'--soft', line:'--line',
                           skinButton:'#skin', eventBox:'#event', lang:'de', onLang:fn}) */
(function () {
  'use strict';
  // a = Akzent dunkel, i = Akzent-Text dunkel, la/li = hell, g = 4 Farben für leuchtende Rahmen
  var SKINS = [
    {id:'neon',     grp:'std',  de:'Neon (Standard)', en:'Neon (default)', a:'#3bf05a', i:'#5cf777', la:'#12a537', li:'#0b7d28', g:['#3bf05a','#22d3ee','#d946ef','#facc15']},
    {id:'aurora',   grp:'col',  de:'Aurora',      en:'Aurora',      a:'#7af0ff', i:'#9af5ff', la:'#0a8fa8', li:'#07738a', g:['#7af0ff','#a78bfa','#3bf05a','#f472b6']},
    {id:'sunset',   grp:'col',  de:'Sonnenuntergang', en:'Sunset',  a:'#ff9f45', i:'#ffb36b', la:'#c2560f', li:'#a84a0c', g:['#ff9f45','#ff4f7a','#ffd166','#c77dff']},
    {id:'ozean',    grp:'col',  de:'Ozean',       en:'Ocean',       a:'#4cc9f0', i:'#7dd8f5', la:'#1167a8', li:'#0d568c', g:['#4cc9f0','#4361ee','#2ec4b6','#80ffdb']},
    {id:'rubin',    grp:'gem',  de:'Rubinglut',   en:'Ruby Ember',  a:'#e83f69', i:'#ff6d8e', la:'#b8204a', li:'#9a1a3e', g:['#e83f69','#ff9ab0','#f5d27a','#e83f69']},
    {id:'saphir',   grp:'gem',  de:'Saphirtiefe', en:'Sapphire Depths', a:'#619dff', i:'#8ab6ff', la:'#1f5fd1', li:'#184fb0', g:['#619dff','#9fc3ff','#dbf4ff','#3a6fd8']},
    {id:'smaragd',  grp:'gem',  de:'Smaragdstufe',en:'Emerald Steps', a:'#45d8a3', i:'#6ee6b9', la:'#10875d', li:'#0b6e4b', g:['#45d8a3','#a2e3ac','#f5ca79','#2bb589']},
    {id:'amethyst', grp:'gem',  de:'Amethystdruse',en:'Amethyst Cluster', a:'#c78df9', i:'#d8aefc', la:'#7a3fc0', li:'#66329f', g:['#c78df9','#e1b8e8','#9993ff','#a35de6']},
    {id:'opal',     grp:'gem',  de:'Opalnacht',   en:'Opal Night',  a:'#61ebc7', i:'#8af2d6', la:'#0f8a6e', li:'#0b725b', g:['#61ebc7','#c68ae5','#ffd166','#4cc9f0']},
    {id:'winter',   grp:'evt',  de:'Winterzauber',en:'Winter Magic',a:'#bfe6ff', i:'#d6f0ff', la:'#1a6aa8', li:'#14598e', g:['#bfe6ff','#ffffff','#82d9df','#9993ff']},
    {id:'advent',   grp:'evt',  de:'Adventskranz',en:'Advent Wreath', a:'#ff5a64', i:'#ff8088', la:'#b3242f', li:'#961d27', g:['#e63946','#f6d06f','#2a9d8f','#ff8088']},
    {id:'nikolaus', grp:'evt',  de:'Nikolausstiefel', en:'St. Nicholas Boot', a:'#ff6b6b', i:'#ff9090', la:'#c1121f', li:'#a00f1a', g:['#ff6b6b','#f1faee','#f6d06f','#ff6b6b']},
    {id:'weihnacht',grp:'evt',  de:'Heilige Nacht', en:'Silent Night', a:'#f6d06f', i:'#f9de95', la:'#8a6200', li:'#735200', g:['#f6d06f','#ffffff','#e63946','#2a9d8f']},
    {id:'silvester',grp:'evt',  de:'Feuerwerk',   en:'Fireworks',   a:'#f72585', i:'#ff5ca6', la:'#c1126b', li:'#a30f5a', g:['#f72585','#7209b7','#4cc9f0','#ffd166']},
    {id:'neujahr',  grp:'evt',  de:'Neujahrsglanz', en:'New Year Shine', a:'#f5d27a', i:'#f8df9c', la:'#8a6400', li:'#735300', g:['#f5d27a','#ffffff','#c77dff','#f5d27a']},
    {id:'valentin', grp:'evt',  de:'Herzklopfen', en:'Heartbeat',   a:'#ff6f91', i:'#ff94ac', la:'#c2185b', li:'#a3134c', g:['#ff6f91','#ffc2d1','#e63946','#ff6f91']},
    {id:'karneval', grp:'evt',  de:'Konfetti-Parade', en:'Confetti Parade', a:'#ffb627', i:'#ffc85a', la:'#9a6200', li:'#805100', g:['#ffb627','#ff4f7a','#4cc9f0','#3bf05a']},
    {id:'halloween',grp:'evt',  de:'Kürbisnacht', en:'Pumpkin Night', a:'#ff7a1a', i:'#ff9a4d', la:'#b4500a', li:'#963f05', g:['#ff7a1a','#9b5de5','#3bf05a','#ff7a1a']},
    {id:'martin',   grp:'evt',  de:'Laternenzug', en:'Lantern Walk', a:'#ffc857', i:'#ffd67f', la:'#946400', li:'#7a5300', g:['#ffc857','#ff9f45','#ffe8a3','#ffc857']}
  ];
  var GRP = {std:{de:'Standard',en:'Default'}, col:{de:'Farbwelten',en:'Colour worlds'}, gem:{de:'Edelsteine',en:'Gemstones'}, evt:{de:'Feste & Events',en:'Holidays & events'}};

  function d(y, m, day) { return new Date(y, m - 1, day); }
  function firstAdvent(y) { var x = d(y, 12, 24); while (x.getDay() !== 0) x.setDate(x.getDate() - 1); x.setDate(x.getDate() - 21); return x; }
  // Aktuelles Event (nur Vorschlag, nie automatisch umstellen)
  function eventNow(now) {
    now = now || new Date(); var y = now.getFullYear(), t = new Date(y, now.getMonth(), now.getDate()).getTime();
    var inR = function (a, b) { return t >= a.getTime() && t <= b.getTime(); };
    var list = [
      ['silvester', d(y,12,29), d(y,12,31), {de:'Silvester', en:'New Year’s Eve'}],
      ['neujahr',   d(y,1,1),   d(y,1,6),   {de:'Neujahr', en:'New Year'}],
      ['weihnacht', d(y,12,20), d(y,12,26), {de:'Heiligabend', en:'Christmas'}],
      ['nikolaus',  d(y,12,4),  d(y,12,6),  {de:'Nikolaus', en:'St. Nicholas'}],
      ['advent',    firstAdvent(y), d(y,12,23), {de:'Advent', en:'Advent'}],
      ['karneval',  d(y,11,11), d(y,11,11), {de:'Karnevalsbeginn', en:'Carnival start'}],
      ['martin',    d(y,11,8),  d(y,11,11), {de:'Martinstag', en:'St. Martin’s Day'}],
      ['halloween', d(y,10,24), d(y,10,31), {de:'Halloween', en:'Halloween'}],
      ['valentin',  d(y,2,7),   d(y,2,14),  {de:'Valentinstag', en:'Valentine’s Day'}],
      ['winter',    d(y,12,1),  d(y,12,31), {de:'Winter', en:'Winter'}],
      ['winter',    d(y,1,1),   d(y,2,28),  {de:'Winter', en:'Winter'}]
    ];
    for (var k = 0; k < list.length; k++) if (inR(list[k][1], list[k][2])) return {id:list[k][0], name:list[k][3]};
    return null;
  }

  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  function css(o) {
    var s = '';
    SKINS.forEach(function (k) {
      if (k.id === 'neon') return;
      var sel = ':root[data-skin="' + k.id + '"]';
      var g = '--g1:' + k.g[0] + ';--g2:' + k.g[1] + ';--g3:' + k.g[2] + ';--g4:' + k.g[3] + ';';
      s += sel + '{' + o.primary + ':' + k.la + ';' + o.ink + ':' + k.li + ';' + g + '}';
      s += '@media (prefers-color-scheme:dark){' + sel + ':not([data-theme="light"]){' + o.primary + ':' + k.a + ';' + o.ink + ':' + k.i + '}}';
      s += sel + '[data-theme="dark"]{' + o.primary + ':' + k.a + ';' + o.ink + ':' + k.i + '}';
    });
    var n = SKINS[0];
    s += ':root{--g1:' + n.g[0] + ';--g2:' + n.g[1] + ';--g3:' + n.g[2] + ';--g4:' + n.g[3] + '}';
    // Auswahlfenster
    s += '.fui-pop{position:absolute;z-index:60;right:0;top:calc(100% + 10px);width:min(410px,calc(100vw - 32px));max-height:min(70vh,560px);overflow:auto;background:var(' + o.panel + ');color:var(' + o.fg + ');border:1px solid var(' + o.line + ');border-radius:18px;padding:14px;box-shadow:0 30px 80px -20px rgb(0 0 0 / .6)}';
    s += '.fui-pop h4{margin:12px 2px 6px;font:700 12px/1.2 inherit;text-transform:uppercase;letter-spacing:.06em;color:var(' + o.soft + ')}.fui-pop h4:first-child{margin-top:0}';
    s += '.fui-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px}';
    s += '.fui-opt{display:flex;align-items:center;gap:8px;padding:8px;border-radius:12px;border:1px solid var(' + o.line + ');background:transparent;cursor:pointer;text-align:left;font:600 13px/1.2 inherit;color:inherit;min-width:0}';
    s += '.fui-opt span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}';
    s += '.fui-opt i{flex:none;width:22px;height:22px;border-radius:50%;box-shadow:0 0 10px -2px currentColor}';
    s += '.fui-opt[aria-pressed="true"]{border-color:var(' + o.primary + ');box-shadow:0 0 0 2px var(' + o.primary + ') inset}';
    s += '.fui-opt b{font-size:10px;font-weight:700;padding:1px 6px;border-radius:999px;background:var(' + o.primary + ');color:#000;margin-left:auto}';
    s += '.fui-event{display:flex;flex-wrap:wrap;align-items:center;gap:10px 14px;padding:10px 14px;border-radius:14px;border:1px solid var(' + o.line + ');background:var(' + o.panel + ');font-size:14px}';
    s += '.fui-event button{border:1px solid var(' + o.primary + ');background:transparent;color:var(' + o.ink + ');border-radius:999px;padding:6px 12px;font:700 13px inherit;cursor:pointer}';
    s += '.fui-event .x{border:0;color:var(' + o.soft + ');padding:4px 8px;margin-left:auto}';
    s += '@media (prefers-reduced-motion:no-preference){:root{transition:none}body{transition:background-color .4s ease,color .4s ease}}';
    return s;
  }

  var FlondyUI = {
    skins: SKINS, eventNow: eventNow,
    lang: function () {
      var p = new URLSearchParams(location.search).get('lang');
      if (p === 'de' || p === 'en') { store.set('flondy-lang', p); return p; }
      var s = store.get('flondy-lang'); if (s === 'de' || s === 'en') return s;
      return (navigator.language || 'de').toLowerCase().indexOf('de') === 0 ? 'de' : 'en';
    },
    setLang: function (l) { store.set('flondy-lang', l); },
    init: function (o) {
      var root = document.documentElement, L = o.lang || 'de';
      var st = document.createElement('style'); st.textContent = css(o); document.head.appendChild(st);
      var cur = store.get('flondy-skin'); if (cur && cur !== 'neon' && SKINS.some(function (k) { return k.id === cur; })) root.dataset.skin = cur;
      var apply = function (id) { if (id === 'neon') delete root.dataset.skin; else root.dataset.skin = id; store.set('flondy-skin', id); };
      var ev = eventNow();
      // Auswahl
      var btn = document.querySelector(o.skinButton);
      if (btn) {
        btn.parentElement.style.position = 'relative';
        var pop = document.createElement('div'); pop.className = 'fui-pop'; pop.hidden = true; pop.setAttribute('role', 'dialog');
        pop.setAttribute('aria-label', L === 'en' ? 'Choose a design' : 'Design wählen');
        var render = function () {
          var now = root.dataset.skin || 'neon', h = '';
          ['std', 'col', 'gem', 'evt'].forEach(function (g) {
            h += '<h4>' + GRP[g][L] + '</h4><div class="fui-grid">';
            SKINS.filter(function (k) { return k.grp === g; }).forEach(function (k) {
              var tag = ev && ev.id === k.id ? '<b>' + (L === 'en' ? 'now' : 'jetzt') + '</b>' : '';
              h += '<button type="button" class="fui-opt" data-skin-id="' + k.id + '" aria-pressed="' + (now === k.id) + '"><i style="color:' + k.a + ';background:conic-gradient(' + k.g.join(',') + ')"></i><span>' + k[L] + '</span>' + tag + '</button>';
            });
            h += '</div>';
          });
          pop.innerHTML = h;
        };
        btn.after(pop);
        btn.setAttribute('aria-expanded', 'false');
        btn.addEventListener('click', function (e) { e.stopPropagation(); render(); pop.hidden = !pop.hidden; btn.setAttribute('aria-expanded', String(!pop.hidden)); });
        pop.addEventListener('click', function (e) { var b = e.target.closest('[data-skin-id]'); if (!b) return; apply(b.dataset.skinId); render(); });
        document.addEventListener('click', function (e) { if (!pop.hidden && !pop.contains(e.target) && e.target !== btn) { pop.hidden = true; btn.setAttribute('aria-expanded', 'false'); } });
        document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !pop.hidden) { pop.hidden = true; btn.focus(); } });
      }
      // Event-Vorschlag (nie automatisch umstellen)
      var box = document.querySelector(o.eventBox);
      if (box && ev && (root.dataset.skin || 'neon') !== ev.id && store.get('flondy-event-hide') !== ev.id + new Date().getFullYear()) {
        var k = SKINS.find(function (x) { return x.id === ev.id; });
        box.innerHTML = '<div class="fui-event"><span>' + (L === 'en' ? 'Fitting ' + ev.name.en + ': try the design „' + k.en + '“.' : 'Passend zu ' + ev.name.de + ': Probier das Design „' + k.de + '“.') + '</span>' +
          '<button type="button" data-try>' + (L === 'en' ? 'Try it' : 'Ausprobieren') + '</button><button type="button" class="x" data-hide aria-label="' + (L === 'en' ? 'Hide' : 'Ausblenden') + '">✕</button></div>';
        box.hidden = false;
        box.addEventListener('click', function (e) {
          if (e.target.closest('[data-try]')) { apply(ev.id); box.hidden = true; }
          if (e.target.closest('[data-hide]')) { store.set('flondy-event-hide', ev.id + new Date().getFullYear()); box.hidden = true; }
        });
      }
    }
  };
  window.FlondyUI = FlondyUI;
})();
