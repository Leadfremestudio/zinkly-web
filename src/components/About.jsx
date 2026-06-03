import { useRef, useEffect } from 'react';

function About({ setCursorText, setIsCursorActive, setIsCursorDark }) {
  const starsCanvasRef = useRef(null);
  const waveCanvasRef = useRef(null);

  useEffect(() => {
    const starsCanvas = starsCanvasRef.current;
    const waveCanvas = waveCanvasRef.current;
    if (!starsCanvas || !waveCanvas) return;

    const starsCtx = starsCanvas.getContext('2d');
    const waveCtx = waveCanvas.getContext('2d');

    // Create a 4x downscaled offscreen canvas for rendering blurred layers
    const offscreenCanvas = document.createElement('canvas');
    const offscreenCtx = offscreenCanvas.getContext('2d');

    let starsId, waveId;
    const parent = waveCanvas.parentElement;
    let W = parent ? parent.clientWidth : window.innerWidth;
    let H = parent ? parent.clientHeight : window.innerHeight;

    // Set initial dimensions
    starsCanvas.width = W;
    starsCanvas.height = H;
    waveCanvas.width = W;
    waveCanvas.height = H;
    offscreenCanvas.width = Math.ceil(W / 4);
    offscreenCanvas.height = Math.ceil(H / 4);

    // Initialize stars
    let S = [];
    function initStars() {
      const parent = starsCanvas.parentElement;
      if (parent) {
        W = parent.clientWidth;
        H = parent.clientHeight;
      } else {
        W = window.innerWidth;
        H = window.innerHeight;
      }
      starsCanvas.width = W;
      starsCanvas.height = H;
      S = [];
      let n = Math.round((W * H) / 5500);
      for (let i = 0; i < n; i++) {
        S.push({
          x: Math.random() * W,
          y: Math.random() * H,
          r: Math.random() * 1.1 + 0.1,
          a: Math.random() * 0.65 + 0.15,
          sp: Math.random() * 0.005 + 0.002,
          ph: Math.random() * Math.PI * 2,
        });
      }
    }

    function resizeWave() {
      const parent = waveCanvas.parentElement;
      if (parent) {
        W = parent.clientWidth;
        H = parent.clientHeight;
      } else {
        W = window.innerWidth;
        H = window.innerHeight;
      }
      waveCanvas.width = W;
      waveCanvas.height = H;
      offscreenCanvas.width = Math.ceil(W / 4);
      offscreenCanvas.height = Math.ceil(H / 4);
    }

    initStars();
    resizeWave();

    // Resize handler
    const handleResize = () => {
      initStars();
      resizeWave();
    };
    window.addEventListener('resize', handleResize);

    // Stars loop
    let tStars = 0;
    function loopStars() {
      starsCtx.clearRect(0, 0, W, H);
      S.forEach((s) => {
        const a = s.a * (0.5 + 0.5 * Math.sin(tStars * s.sp + s.ph));
        starsCtx.beginPath();
        starsCtx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        starsCtx.fillStyle = `rgba(0, 0, 0, ${a})`;
        starsCtx.fill();
      });
      tStars++;
      starsId = requestAnimationFrame(loopStars);
    }

    // Wave loop
    const t0 = performance.now();
    const LAYERS = [
      { blur: 40, lw: 28, alpha: 0.18 },
      { blur: 20, lw: 16, alpha: 0.3 },
      { blur: 9, lw: 8, alpha: 0.5 },
      { blur: 3, lw: 4, alpha: 0.75 },
      { blur: 0, lw: 2, alpha: 0.9 },
    ];

    function buildGradient(ctx, width) {
      const g = ctx.createLinearGradient(0, 0, width, 0);
      g.addColorStop(0.0, 'rgba(0,0,0,0)');
      g.addColorStop(0.02, 'rgba(30,80,255,0.0)');
      g.addColorStop(0.06, '#2255ff');
      g.addColorStop(0.13, '#00aaff');
      g.addColorStop(0.22, '#00ffcc');
      g.addColorStop(0.32, '#00ff66');
      g.addColorStop(0.42, '#55ff00');
      g.addColorStop(0.52, '#ccff00');
      g.addColorStop(0.62, '#ffcc00');
      g.addColorStop(0.72, '#ff7700');
      g.addColorStop(0.82, '#ff2244');
      g.addColorStop(0.91, '#cc00ee');
      g.addColorStop(0.97, 'rgba(100,0,180,0.0)');
      g.addColorStop(1.0, 'rgba(0,0,0,0)');
      return g;
    }

    function makePath(t) {
      const CY = H * 0.5;
      const pts = [];
      const STEP = 3;
      for (let x = 0; x <= W; x += STEP) {
        const nx = x / W;
        const y1 = Math.sin(nx * Math.PI * 2 * 1.1 + t * 0.009) * 55;
        const y2 = Math.sin(nx * Math.PI * 2 * 2.2 + t * 0.013 + 1.2) * 22;
        const y3 = Math.sin(nx * Math.PI * 2 * 4.0 + t * 0.020 + 2.5) * 9;
        pts.push({ x, y: CY + y1 + y2 + y3 });
      }
      return pts;
    }

    function makePath2(t) {
      const CY = H * 0.5;
      const pts = [];
      const STEP = 3;
      for (let x = 0; x <= W; x += STEP) {
        const nx = x / W;
        const y1 = Math.sin(nx * Math.PI * 2 * 1.1 + t * 0.009 + Math.PI * 0.55) * 48;
        const y2 = Math.sin(nx * Math.PI * 2 * 2.2 + t * 0.013 + 1.2 + Math.PI * 0.4) * 20;
        const y3 = Math.sin(nx * Math.PI * 2 * 4.0 + t * 0.020 + 2.5 + 1.0) * 8;
        pts.push({ x, y: CY + y1 + y2 + y3 });
      }
      return pts;
    }

    function drawRibbon(ctx, pts, grad, layers, scale = 1) {
      layers.forEach((L) => {
        const isBlur = L.blur > 0;
        const targetIsOffscreen = scale < 1;
        if (isBlur !== targetIsOffscreen) return;

        ctx.save();
        if (isBlur) {
          ctx.filter = `blur(${L.blur * scale}px)`;
        }
        ctx.globalAlpha = L.alpha;
        ctx.lineWidth = L.lw * scale;
        ctx.strokeStyle = grad;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.beginPath();
        pts.forEach((p, i) => (i === 0 ? ctx.moveTo(p.x * scale, p.y * scale) : ctx.lineTo(p.x * scale, p.y * scale)));
        ctx.stroke();
        ctx.restore();
      });
    }

    function drawHighlight(ctx, pts, scale = 1) {
      const isBlur = true;
      const targetIsOffscreen = scale < 1;
      if (isBlur !== targetIsOffscreen) return;

      ctx.save();
      ctx.filter = `blur(${1.5 * scale}px)`;
      ctx.globalAlpha = 0.55;
      ctx.lineWidth = 1.5 * scale;
      const g = ctx.createLinearGradient(0, 0, ctx.canvas.width, 0);
      g.addColorStop(0.0, 'rgba(0,0,0,0)');
      g.addColorStop(0.06, 'rgba(180,210,255,0.9)');
      g.addColorStop(0.22, 'rgba(160,255,230,0.9)');
      g.addColorStop(0.42, 'rgba(210,255,120,0.9)');
      g.addColorStop(0.65, 'rgba(255,220,80,0.9)');
      g.addColorStop(0.82, 'rgba(255,100,80,0.9)');
      g.addColorStop(0.94, 'rgba(220,100,255,0.9)');
      g.addColorStop(1.0, 'rgba(0,0,0,0)');
      ctx.strokeStyle = g;
      ctx.beginPath();
      pts.forEach((p, i) => (i === 0 ? ctx.moveTo(p.x * scale, p.y * scale) : ctx.lineTo(p.x * scale, p.y * scale)));
      ctx.stroke();
      ctx.restore();
    }

    function loopWave() {
      waveCtx.clearRect(0, 0, W, H);
      offscreenCtx.clearRect(0, 0, offscreenCanvas.width, offscreenCanvas.height);

      const t = ((performance.now() - t0) / 1000) * 60;
      const p1 = makePath(t);
      const p2 = makePath2(t);

      const gradMain = buildGradient(waveCtx, W);
      const gradOffscreen = buildGradient(offscreenCtx, offscreenCanvas.width);

      const p2Layers = [
        { blur: 35, lw: 22, alpha: 0.14 },
        { blur: 16, lw: 12, alpha: 0.26 },
        { blur: 6, lw: 6, alpha: 0.45 },
        { blur: 2, lw: 3, alpha: 0.65 },
        { blur: 0, lw: 1.5, alpha: 0.8 },
      ];

      // Draw blurred glow layers onto the offscreen canvas (scale = 0.25)
      drawRibbon(offscreenCtx, p2, gradOffscreen, p2Layers, 0.25);
      drawRibbon(offscreenCtx, p1, gradOffscreen, LAYERS, 0.25);
      drawHighlight(offscreenCtx, p1, 0.25);

      // Draw the blurred offscreen canvas back onto the main canvas
      waveCtx.drawImage(offscreenCanvas, 0, 0, W, H);

      // Draw the sharp layers (blur: 0) directly on the main canvas (scale = 1.0)
      drawRibbon(waveCtx, p2, gradMain, p2Layers, 1.0);
      drawRibbon(waveCtx, p1, gradMain, LAYERS, 1.0);

      waveId = requestAnimationFrame(loopWave);
    }

    loopStars();
    loopWave();

    return () => {
      cancelAnimationFrame(starsId);
      cancelAnimationFrame(waveId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="about" className="about-section hero-canvas-container">
      <canvas id="stars" ref={starsCanvasRef}></canvas>
      <canvas id="wave" ref={waveCanvasRef}></canvas>
      <div className="about-canvas-content">
        <p className="t1">Transform Your Business with</p>
        <p className="t2">Intelligent Automation</p>
        <a
          href="#services"
          className="cta"
          id="about-cta-btn"
        >
          Explore the world of zinkly
          <span className="arrow">&#8594;</span>
        </a>
      </div>
    </section>
  );
}

export default About;
