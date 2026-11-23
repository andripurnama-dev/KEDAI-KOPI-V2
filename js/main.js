/* Kedai Kopi Senja — main.js */
(function () {
  'use strict';
  var root = document.documentElement;

  /* Tema (tersimpan di localStorage) */
  var saved = null;
  try { saved = localStorage.getItem('kks-theme'); } catch (e) {}
  if (!saved) saved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  root.setAttribute('data-theme', saved);
  var themeBtn = document.getElementById('themeToggle');
  function paintTheme() {
    var dark = root.getAttribute('data-theme') === 'dark';
    if (themeBtn) { themeBtn.textContent = dark ? '☀️' : '🌙'; themeBtn.setAttribute('aria-label', dark ? 'Ganti ke mode terang' : 'Ganti ke mode gelap'); }
  }
  paintTheme();
  if (themeBtn) themeBtn.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('kks-theme', next); } catch (e) {}
    paintTheme();
  });

  /* Menu mobile */
  var burger = document.getElementById('burger');
  var menu = document.getElementById('menu');
  if (burger && menu) {
    burger.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      burger.textContent = open ? '✕' : '☰';
    });
    menu.addEventListener('click', function (e) { if (e.target.tagName === 'A') { menu.classList.remove('open'); burger.textContent = '☰'; burger.setAttribute('aria-expanded', 'false'); } });
  }

  /* Scroll reveal */
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.15 });
    items.forEach(function (el) { io.observe(el); });
  } else { items.forEach(function (el) { el.classList.add('in'); }); }

  /* Counter angka */
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('[data-count]').forEach(function (el) {
    var target = parseInt(el.getAttribute('data-count'), 10) || 0;
    var suffix = el.getAttribute('data-suffix') || '';
    if (reduce || !('IntersectionObserver' in window)) { el.textContent = target + suffix; return; }
    var co = new IntersectionObserver(function (es) {
      if (!es[0].isIntersecting) return;
      co.disconnect();
      var start = null;
      function step(ts) {
        if (!start) start = ts;
        var p = Math.min((ts - start) / 1400, 1);
        el.textContent = Math.floor(target * (1 - Math.pow(1 - p, 3))) + suffix;
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }, { threshold: 0.6 });
    co.observe(el);
  });

  /* Filter proyek */
  var chips = document.querySelectorAll('.chip[data-filter]');
  if (chips.length) {
    var projects = document.querySelectorAll('.project');
    var empty = document.getElementById('emptyState');
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        var f = chip.getAttribute('data-filter');
        chips.forEach(function (c) { c.setAttribute('aria-pressed', c === chip ? 'true' : 'false'); });
        var shown = 0;
        projects.forEach(function (p) {
          var ok = f === 'all' || p.getAttribute('data-cat') === f;
          p.classList.toggle('hide', !ok);
          if (ok) shown++;
        });
        if (empty) empty.style.display = shown ? 'none' : 'block';
      });
    });
  }

  /* Formulir kontak (validasi sisi klien; pengiriman SIMULASI) */
  var form = document.getElementById('contactForm');
  if (form) {
    var rules = {
      nama: function (v) { return v.trim().length >= 3 ? '' : 'Nama minimal 3 karakter.'; },
      email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? '' : 'Masukkan email yang valid.'; },
      topik: function (v) { return v ? '' : 'Pilih salah satu topik.'; },
      pesan: function (v) { return v.trim().length >= 10 ? '' : 'Pesan minimal 10 karakter.'; }
    };
    function check(name) {
      var el = form.elements[name];
      var msg = rules[name](el.value);
      el.classList.toggle('invalid', !!msg);
      el.setAttribute('aria-invalid', msg ? 'true' : 'false');
      document.getElementById('err-' + name).textContent = msg;
      return !msg;
    }
    Object.keys(rules).forEach(function (n) {
      form.elements[n].addEventListener('blur', function () { check(n); });
      form.elements[n].addEventListener('input', function () { if (form.elements[n].classList.contains('invalid')) check(n); });
    });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = Object.keys(rules).map(check).every(Boolean);
      var note = document.getElementById('formNotice');
      if (!ok) { note.style.display = 'none'; var bad = form.querySelector('.invalid'); if (bad) bad.focus(); return; }
      var btn = form.querySelector('button[type="submit"]');
      btn.disabled = true; btn.textContent = 'Mengirim…';
      setTimeout(function () {
        btn.disabled = false; btn.textContent = 'Kirim Pesan';
        note.style.display = 'block';
        note.textContent = 'Terima kasih, ' + form.elements.nama.value.trim() + '! (Simulasi: pesan belum dikirim ke server sungguhan.)';
        form.reset();
      }, 900);
    });
  }

  var y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
})();
