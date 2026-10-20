import React, { useEffect, useRef } from "react";

interface Diamond {
  x: number; // 0..1 of viewport width (center)
  width: number;
  height: number;
  duration: number;
  phase: number; // 0..1 offset in the scroll cycle
  opacity: number;
  glass: boolean;
}

const MIN_SIZE = 40;
const MAX_SIZE = 420;
const ORANGE_SIZES = [48, 62, 75, 90, 130, 155, 180, 240, 280, 330, 360, 400, 420, 55, 200];
const GLASS_SIZES = [110, 150, 200, 260, 320, 180];

// Smaller = faster, larger = slower (parallax depth feel)
const sizeToDuration = (size: number) => {
  const t = (size - MIN_SIZE) / (MAX_SIZE - MIN_SIZE);
  return 45 + t * 225;
};

const sizeToOpacity = (size: number) => {
  const t = (size - MIN_SIZE) / (MAX_SIZE - MIN_SIZE);
  return 0.55 - t * 0.38;
};

const makeDiamond = (size: number, glass: boolean): Diamond => ({
  glass,
  x: Math.random() * 1.1 - 0.05,
  width: size,
  height: size * 1.5,
  duration: sizeToDuration(size),
  phase: Math.random(),
  opacity: sizeToOpacity(size),
});

// Center y of a diamond at time t (seconds): scrolls from below to above the viewport.
const centerY = (d: Diamond, t: number, viewH: number) => {
  const frac = (t / d.duration + d.phase) % 1;
  return viewH * 1.1 - frac * viewH * 2.2 + d.height / 2;
};

const drawDiamondPath = (ctx: CanvasRenderingContext2D, cx: number, cy: number, w: number, h: number) => {
  ctx.beginPath();
  ctx.moveTo(cx, cy - h / 2);
  ctx.lineTo(cx + w / 2, cy);
  ctx.lineTo(cx, cy + h / 2);
  ctx.lineTo(cx - w / 2, cy);
  ctx.closePath();
};

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext?.("2d");
    if (!canvas || !ctx) return;

    // Large (far) first so small (near) diamonds refract and overlap them
    const shapes = [
      ...ORANGE_SIZES.map((size) => makeDiamond(size, false)),
      ...GLASS_SIZES.map((size) => makeDiamond(size, true)),
    ].sort((a, b) => b.width - a.width);
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

    let viewW = 0;
    let viewH = 0;
    let frameId = 0;
    const start = performance.now();

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      viewW = window.innerWidth;
      viewH = window.innerHeight;
      canvas.width = viewW * dpr;
      canvas.height = viewH * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    // Flat (non-refractive) scene used as the source for every lens
    const drawFlat = (t: number) => {
      for (const d of shapes) {
        if (d.glass) continue;
        const cx = d.x * viewW;
        const cy = centerY(d, t, viewH);
        ctx.globalAlpha = d.opacity;
        ctx.fillStyle = orangeGradient(cy, d.height);
        drawDiamondPath(ctx, cx, cy, d.width, d.height);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const orangeGradient = (cy: number, h: number) => {
      const grad = ctx.createLinearGradient(0, cy - h / 2, 0, cy + h / 2);
      grad.addColorStop(0, "#FF9500");
      grad.addColorStop(1, "#FFD700");
      return grad;
    };

    // Each facet magnifies the scene and shifts it in a different direction, like a cut gem.
    const facets = (cx: number, cy: number, w: number, h: number) => [
      { pts: [[cx, cy - h / 2], [cx + w / 2, cy]], shift: [0.12, -0.12], light: 0.28 },
      { pts: [[cx + w / 2, cy], [cx, cy + h / 2]], shift: [0.12, 0.12], light: 0.05 },
      { pts: [[cx, cy + h / 2], [cx - w / 2, cy]], shift: [-0.12, 0.12], light: 0 },
      { pts: [[cx - w / 2, cy], [cx, cy - h / 2]], shift: [-0.12, -0.12], light: 0.4 },
    ];

    const facetPath = (cx: number, cy: number, pts: number[][]) => {
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(pts[0][0], pts[0][1]);
      ctx.lineTo(pts[1][0], pts[1][1]);
      ctx.closePath();
    };

    const drawLens = (d: Diamond, t: number) => {
      const cx = d.x * viewW;
      const cy = centerY(d, t, viewH);
      const { width: w, height: h } = d;

      // Soft shadow around the edges
      ctx.save();
      ctx.shadowColor = "rgba(0, 0, 0, 0.6)";
      ctx.shadowBlur = d.glass ? 18 : 12;
      ctx.shadowOffsetY = 6;
      ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
      ctx.globalAlpha = d.glass ? 1 : Math.min(1, d.opacity * 1.6);
      drawDiamondPath(ctx, cx, cy, w, h);
      ctx.fill();
      ctx.restore();

      for (const f of facets(cx, cy, w, h)) {
        // Magnified, shifted view of what is behind the diamond
        ctx.save();
        facetPath(cx, cy, f.pts);
        ctx.clip();
        ctx.clearRect(cx - w / 2, cy - h / 2, w, h);
        ctx.translate(cx + f.shift[0] * w, cy + f.shift[1] * h);
        ctx.scale(1.5, 1.5);
        ctx.translate(-cx, -cy);
        drawFlat(t);
        ctx.restore();

        // Orange diamonds get an orange body tint; all facets get light/dark shading
        ctx.save();
        facetPath(cx, cy, f.pts);
        if (!d.glass) {
          ctx.globalAlpha = d.opacity;
          ctx.fillStyle = orangeGradient(cy, h);
          ctx.fill();
        }
        ctx.globalAlpha = 1;
        ctx.fillStyle =
          f.light >= 0 ? `rgba(255, 255, 255, ${f.light * 0.5})` : `rgba(0, 0, 0, ${-f.light})`;
        ctx.fill();
        ctx.restore();
      }

      // Glassy rim and facet edges
      ctx.save();
      ctx.lineJoin = "round";
      ctx.globalAlpha = d.glass ? 1 : Math.min(1, d.opacity * 1.5);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.55)";
      ctx.lineWidth = 1.5;
      drawDiamondPath(ctx, cx, cy, w, h);
      ctx.stroke();
      ctx.strokeStyle = "rgba(255, 255, 255, 0.18)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(cx, cy - h / 2);
      ctx.lineTo(cx, cy + h / 2);
      ctx.moveTo(cx - w / 2, cy);
      ctx.lineTo(cx + w / 2, cy);
      ctx.stroke();
      ctx.restore();
    };

    const render = (now: number) => {
      const t = reduceMotion ? 0 : (now - start) / 1000;
      ctx.clearRect(0, 0, viewW, viewH);
      drawFlat(t);
      for (const d of shapes) if (d.glass) drawLens(d, t);
      if (!reduceMotion) frameId = requestAnimationFrame(render);
    };

    resize();
    window.addEventListener("resize", resize);
    frameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="animated-background"
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
};

export default AnimatedBackground;
