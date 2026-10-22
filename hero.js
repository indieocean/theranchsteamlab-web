// Solar field hero: the cursor is the sun. Every panel follows it; the panels
// that spell RSL sit at a steeper tilt and throw glints as the sun passes.
(() => {
  document.documentElement.classList.add('js');

  // Product rows reveal once as they enter the viewport.
  const rows = document.querySelectorAll('.product');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
    }, { rootMargin: '0px 0px -15% 0px' });
    rows.forEach((r) => io.observe(r));
  } else {
    rows.forEach((r) => r.classList.add('is-in'));
  }

  // Product panels tilt toward the cursor like trackers following the sun.
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  const calm = window.matchMedia('(prefers-reduced-motion: reduce)');
  document.querySelectorAll('.panel').forEach((panel) => {
    panel.addEventListener('pointermove', (e) => {
      if (!finePointer.matches || calm.matches) return;
      const r = panel.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      panel.style.setProperty('--ry', `${(px - 0.5) * 10}deg`);
      panel.style.setProperty('--rx', `${(0.5 - py) * 8}deg`);
      panel.style.setProperty('--mx', `${px * 100}%`);
      panel.style.setProperty('--my', `${py * 100}%`);
      panel.classList.add('is-tracking');
    });
    panel.addEventListener('pointerleave', () => {
      panel.style.setProperty('--rx', '0deg');
      panel.style.setProperty('--ry', '0deg');
      panel.classList.remove('is-tracking');
    });
  });

  const hero = document.querySelector('.hero');
  const field = document.querySelector('.field');
  const canvas = document.querySelector('.array');
  const sky = document.querySelector('.sky');
  const sunEl = document.querySelector('.sun');
  const nav = document.querySelector('.nav');
  if (!hero || !field || !canvas || !canvas.getContext) return;

  const ctx = canvas.getContext('2d');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  const dark = window.matchMedia('(prefers-color-scheme: dark)');

  // 5 x 7 letterforms, one bit per panel.
  const GLYPHS = {
    R: ['11110', '10001', '10001', '11110', '10100', '10010', '10001'],
    S: ['01111', '10000', '10000', '01110', '00001', '00001', '11110'],
    L: ['10000', '10000', '10000', '10000', '10000', '10000', '11111'],
  };

  let W = 0, H = 0, dpr = 1;
  let panels = [];
  let geom = null;
  const sun = { x: 0.78, y: 0.3, tx: 0.78, ty: 0.3 };
  let pointerActive = false;
  let start = 0;
  let running = false;
  let visible = true;

  const palette = () => dark.matches
    ? { lo: [9, 24, 52], hi: [36, 76, 140], rlo: [92, 140, 210], rhi: [214, 232, 252], frame: 'rgba(160,190,230,0.22)', lines: 'rgba(160,190,230,0.10)', trees: '#0B1A26' }
    : { lo: [14, 38, 86], hi: [44, 92, 170], rlo: [120, 168, 230], rhi: [236, 246, 255], frame: 'rgba(220,235,250,0.5)', lines: 'rgba(220,235,250,0.16)', trees: '#3B6066' };

  function build() {
    const r = field.getBoundingClientRect();
    W = Math.max(1, Math.round(r.width));
    H = Math.max(1, Math.round(r.height));
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const narrow = W < 700;
    const pw = narrow ? Math.min(10, W / 40) : Math.max(14, Math.min(22, W / 64));
    const ph = pw * 0.62;
    const gapX = Math.max(1.5, pw * 0.09);
    const gapY = ph * 0.55;
    const top = Math.max(18, H * 0.08); // below the treeline

    // Row positions in aerial perspective: rows compress toward the treeline.
    const S_FAR = 0.6;
    const S_NEAR = 1.1;
    const rowsY = [];
    let y = top;
    while (y < H + ph) {
      const k = Math.min(1, (y - top) / (H - top));
      const s = S_FAR + (S_NEAR - S_FAR) * Math.pow(k, 0.8);
      rowsY.push({ y, s });
      y += (ph + gapY) * s;
    }
    const pitch = pw + gapX;
    const cols = Math.ceil(W / (pitch * S_FAR)) + 4;

    // Place RSL: each letter pixel is 2 columns by 2 rows of panels.
    const px = 2;
    const py = 2;
    const letterCols = 5 * px;
    const gapCols = narrow ? 1 : 3;
    const wordCols = letterCols * 3 + gapCols * 2;
    // Letters sit in the lower field where rows are big enough to read.
    const rowStart = Math.max(1, rowsY.length - 7 * py - (narrow ? 2 : 3));
    const centerCol = Math.round(cols / 2);
    const centerX = narrow ? 0.5 : 0.56;
    // Column index whose x lands at centerX of the screen on the RSL rows.
    const sMid = rowsY[Math.min(rowsY.length - 1, rowStart + 7)].s;
    const offsetCols = Math.round(((centerX - 0.5) * W) / (pitch * sMid));
    const firstCol = centerCol + offsetCols - Math.round(wordCols / 2);

    const rsl = new Set();
    ['R', 'S', 'L'].forEach((ch, li) => {
      const g = GLYPHS[ch];
      const c0 = firstCol + li * (letterCols + gapCols);
      for (let gy = 0; gy < 7; gy++) {
        for (let gx = 0; gx < 5; gx++) {
          if (g[gy][gx] !== '1') continue;
          for (let ky = 0; ky < py; ky++) {
            for (let kx = 0; kx < px; kx++) rsl.add(`${rowStart + gy * py + ky}:${c0 + gx * px + kx}`);
          }
        }
      }
    });

    panels = [];
    rowsY.forEach((row, ri) => {
      const w = pw * row.s;
      const h = ph * row.s;
      const step = pitch * row.s;
      const x0 = W / 2 - centerCol * step;
      for (let c = 0; c < cols; c++) {
        const x = x0 + c * step;
        if (x > W || x + w < 0) continue;
        panels.push({ x, y: row.y, w, h, s: row.s, col: c, rsl: rsl.has(`${ri}:${c}`), tilt: 0 });
      }
    });
    geom = { pw, ph, cols, top };

    // A low treeline on the horizon: pines and palms as seeded bumps.
    const tree = [];
    let seed = 7;
    const rand = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280);
    const base = top * 0.9;
    for (let x = 0; x <= W + 12; x += 6 + rand() * 10) {
      tree.push([x, base - (top * 0.35 + rand() * top * 0.55)]);
    }
    geom.tree = tree;
    geom.treeBase = base;
  }

  function drawTreeline(p) {
    const { tree, treeBase } = geom;
    ctx.fillStyle = p.trees;
    ctx.beginPath();
    ctx.moveTo(0, treeBase + 2);
    for (let i = 0; i < tree.length; i++) {
      const [x, y] = tree[i];
      const prev = tree[i - 1] || [0, treeBase];
      ctx.quadraticCurveTo(prev[0] + (x - prev[0]) / 2, y - 3, x, y + (tree[i + 1] ? 2 : 0));
    }
    ctx.lineTo(W, treeBase + 2);
    ctx.closePath();
    ctx.fill();
    ctx.fillRect(0, treeBase, W, 3);
  }

  function draw(now) {
    const t = now - start;
    const p = palette();
    const animate = !reduce.matches;

    if (animate && !pointerActive) {
      // A slow drift so the field breathes when no one is steering.
      const k = now * 0.00007;
      sun.tx = 0.62 + 0.3 * Math.sin(k);
      sun.ty = 0.32 + 0.14 * Math.cos(k * 1.7);
    }
    const ease = animate ? 0.06 : 1;
    sun.x += (sun.tx - sun.x) * ease;
    sun.y += (sun.ty - sun.y) * ease;

    // Where the sun's glare lands on the field.
    const gx = sun.x * W;
    const gy = H * (0.15 + (1 - sun.y) * 0.75);
    const sigma = Math.max(90, W * 0.11);
    const sigmaR = sigma * 1.3;
    const elev = (0.5 - sun.y) * 1.2; // field tracks the sun's height

    ctx.clearRect(0, 0, W, H);
    drawTreeline(p);
    for (const q of panels) {
      // Wake sweep from left to right on load.
      const wake = animate ? clamp01((t - q.col * 14) / 700) : 1;
      const we = 1 - Math.pow(1 - wake, 3);

      const target = q.rsl ? -elev + 0.55 : elev;
      q.tilt += (target * we - q.tilt) * (animate ? 0.08 : 1);

      const facing = Math.cos(q.tilt - elev * 0.6);
      const dx = q.x + q.w / 2 - gx;
      const dy = q.y + q.h / 2 - gy;
      const d2 = dx * dx + dy * dy;
      const spec = Math.exp(-d2 / (2 * (q.rsl ? sigmaR * sigmaR : sigma * sigma)));

      // Field panels stay in the deep blues; RSL panels live in their own
      // lighter range so the monogram reads at rest and brightens with the sun.
      let b = q.rsl ? 0.25 + 0.75 * spec : 0.15 + 0.4 * facing * facing + 0.12 * spec;
      b = clamp01(b * (0.35 + 0.65 * we));

      const h = q.h * (0.78 + 0.22 * Math.cos(q.tilt));
      const y = q.y + (q.h - h) / 2;
      ctx.fillStyle = q.rsl && we > 0 ? mix(p.rlo, p.rhi, b) : mix(p.lo, p.hi, b);
      ctx.fillRect(q.x, y, q.w, h);

      if (q.s > 0.78) {
        ctx.fillStyle = p.lines;
        ctx.fillRect(q.x + q.w / 2 - 0.5, y, 1, h);
        ctx.fillRect(q.x, y + h / 2 - 0.5, q.w, 1);
      }
      // Lit top edge where the panel faces the sun.
      ctx.fillStyle = p.frame;
      ctx.fillRect(q.x, y, q.w, Math.max(1, h * 0.08 * facing));
    }

    // Glints: RSL panels near the sun flash white.
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    for (const q of panels) {
      if (!q.rsl) continue;
      const dx = q.x + q.w / 2 - gx;
      const dy = q.y + q.h / 2 - gy;
      const g = Math.exp(-(dx * dx + dy * dy) / (2 * sigmaR * sigmaR * 0.35));
      const wake = animate ? clamp01((t - q.col * 14 - 500) / 500) : 1;
      const flash = animate ? Math.max(0, 1 - Math.abs((t - q.col * 14 - 650) / 350)) : 0;
      const a = Math.min(0.95, g * 0.85 * wake + flash * 0.8);
      if (a < 0.04) continue;
      const cx = q.x + q.w * 0.7;
      const cy = q.y + q.h * 0.3;
      const r = Math.min(28, q.w * (0.5 + 0.8 * a));
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
      grad.addColorStop(0, `rgba(255,255,255,${a})`);
      grad.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(cx - r, cy - r, r * 2, r * 2);
    }
    ctx.restore();

    placeSun();

    // Keep running while visible: the sun either drifts or eases toward the pointer.
    if (animate && visible) {
      requestAnimationFrame(draw);
    } else {
      running = false;
    }
  }

  function placeSun() {
    if (!sunEl || !sky) return;
    const sr = sky.getBoundingClientRect();
    const size = sunEl.offsetWidth;
    const halo = size * 0.2;
    let x, y;
    if (sr.width < 860 || !nav) {
      // Narrow: stay inside the sky, right of the first headline line.
      x = (0.74 + 0.22 * sun.x) * (sr.width - size);
      y = halo * (0.5 + sun.y);
    } else {
      // Wide: ride around the nav line, but stop short of the nav links.
      const nr = nav.getBoundingClientRect();
      const minX = sr.width * 0.4;
      const maxX = Math.max(minX, nr.left - sr.left - size - halo - 24);
      x = minX + sun.x * (maxX - minX);
      y = -size * (0.85 - 0.45 * (1 - sun.y));
    }
    sunEl.style.setProperty('--sun-x', `${x}px`);
    sunEl.style.setProperty('--sun-y', `${y}px`);
  }

  function kick() {
    if (running) return;
    running = true;
    requestAnimationFrame(draw);
  }

  function onPointer(e) {
    const r = hero.getBoundingClientRect();
    sun.tx = clamp01((e.clientX - r.left) / r.width);
    sun.ty = clamp01((e.clientY - r.top) / r.height);
    pointerActive = true;
    if (reduce.matches) requestAnimationFrame(draw);
    else kick();
  }

  hero.addEventListener('pointermove', onPointer, { passive: true });
  hero.addEventListener('pointerleave', () => { pointerActive = false; kick(); });

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible) kick();
    }).observe(hero);
  }
  document.addEventListener('visibilitychange', () => {
    visible = !document.hidden;
    if (visible) kick();
  });

  let resizeTimer = 0;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { build(); requestAnimationFrame(draw); }, 120);
  });
  reduce.addEventListener?.('change', () => { build(); requestAnimationFrame(draw); });
  dark.addEventListener?.('change', () => requestAnimationFrame(draw));

  build();
  start = performance.now();
  if (reduce.matches) {
    requestAnimationFrame(draw);
  } else {
    kick();
  }

  function clamp01(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }
  function mix(a, b, t) {
    return `rgb(${Math.round(a[0] + (b[0] - a[0]) * t)},${Math.round(a[1] + (b[1] - a[1]) * t)},${Math.round(a[2] + (b[2] - a[2]) * t)})`;
  }
})();
