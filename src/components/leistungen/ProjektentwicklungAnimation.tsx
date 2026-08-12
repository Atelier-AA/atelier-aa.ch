'use client';

import { useEffect, useRef } from 'react';

/**
 * Zeichnet sich selbst auf: Parzelle, Grundriss, Gebäude (EG + Attika),
 * zuletzt ein Baum — als Endlosschleife auf einem Canvas statt eines
 * statischen Bilds. Vom Kunden bereitgestellter Animations-Code, 1:1
 * portiert in eine React-Komponente (Canvas-Loop in useEffect, mit
 * Cleanup beim Verlassen der Seite).
 */
export default function ProjektentwicklungAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const WIDTH = 1200;
    const HEIGHT = 800;
    const FPS = 30;
    const DURATION = 10;
    const TOTAL_FRAMES = FPS * DURATION;

    const sx = WIDTH / 800.0;
    const sy = HEIGHT / 550.0;

    type Punkt = [number, number];
    const Sf = (pt: Punkt): Punkt => [pt[0] * sx, pt[1] * sy];

    const LINE_COLOR = '#000000';
    const GROUND_FILL = '#f6f6f6';
    const WALL_FILL = '#ffffff';
    const WALL_DARK_FILL = '#f2f2f2';
    const GLASS_FILL = '#e1e1e1';

    const P_GROUND: Punkt[] = [Sf([100, 290]), Sf([400, 140]), Sf([700, 290]), Sf([400, 440])];
    const P_BOUND: Punkt[] = [Sf([130, 295]), Sf([400, 160]), Sf([670, 295]), Sf([400, 425])];

    const M1 = Sf([260, 320]);
    const M2 = Sf([380, 380]);
    const M3 = Sf([560, 290]);
    const M4 = Sf([440, 230]);

    const PLAN_LINES: [Punkt, Punkt][] = [
      [M1, M2],
      [M2, M3],
      [M3, M4],
      [M4, M1],
      [Sf([320, 350]), Sf([500, 260])],
      [Sf([420, 310]), Sf([360, 340])],
      [Sf([290, 305]), Sf([380, 350])],
      [Sf([380, 350]), Sf([520, 280])],
      [Sf([520, 280]), Sf([430, 235])],
      [Sf([430, 235]), Sf([290, 305])],
    ];

    const GRID_LINES: [Punkt, Punkt][] = [
      [Sf([180, 280]), Sf([620, 280])],
      [Sf([400, 160]), Sf([400, 420])],
      [Sf([230, 365]), Sf([570, 195])],
    ];

    const H_EG = 70 * sy;
    const H_ATTIKA = 55 * sy;

    const easeInOut = (t: number) => (t < 0 ? 0 : t > 1 ? 1 : 0.5 * (1 - Math.cos(Math.PI * t)));
    const easeOutCubic = (t: number) => (t < 0 ? 0 : t > 1 ? 1 : 1 - Math.pow(1 - t, 3));
    const lerp = (p1: Punkt, p2: Punkt, t: number): Punkt => [
      p1[0] + (p2[0] - p1[0]) * t,
      p1[1] + (p2[1] - p1[1]) * t,
    ];

    const drawPolygon = (
      pts: Punkt[],
      fillStyle?: string,
      strokeStyle?: string,
      lineWidth = 1
    ) => {
      ctx.beginPath();
      ctx.moveTo(pts[0][0], pts[0][1]);
      for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]);
      ctx.closePath();
      if (fillStyle) {
        ctx.fillStyle = fillStyle;
        ctx.fill();
      }
      if (strokeStyle && lineWidth > 0) {
        ctx.strokeStyle = strokeStyle;
        ctx.lineWidth = lineWidth;
        ctx.stroke();
      }
    };

    const drawLine = (
      p1: Punkt,
      p2: Punkt,
      strokeStyle: string,
      lineWidth = 1,
      dashed = false
    ) => {
      ctx.beginPath();
      ctx.setLineDash(dashed ? [8, 8] : []);
      ctx.moveTo(p1[0], p1[1]);
      ctx.lineTo(p2[0], p2[1]);
      ctx.strokeStyle = strokeStyle;
      ctx.lineWidth = lineWidth;
      ctx.stroke();
      ctx.setLineDash([]);
    };

    const drawCircle = (center: Punkt, radius: number, fillStyle?: string, strokeStyle?: string) => {
      ctx.beginPath();
      ctx.arc(center[0], center[1], radius, 0, 2 * Math.PI);
      if (fillStyle) {
        ctx.fillStyle = fillStyle;
        ctx.fill();
      }
      if (strokeStyle) {
        ctx.strokeStyle = strokeStyle;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    };

    let currentFrame = 0;
    let frameId: number;

    function render() {
      const t_sec = (currentFrame % TOTAL_FRAMES) / FPS;
      ctx!.clearRect(0, 0, WIDTH, HEIGHT);

      let alpha_global = 1.0;
      if (t_sec < 0.5) alpha_global = t_sec / 0.5;
      else if (t_sec > 9.2) alpha_global = Math.max(0.0, (10.0 - t_sec) / 0.8);
      ctx!.globalAlpha = alpha_global;

      const t_ground = Math.min(1.0, Math.max(0.0, (t_sec - 0.2) / 1.0));
      if (t_ground > 0) {
        const e_g = easeOutCubic(t_ground);
        const [cx, cy] = Sf([400, 290]);
        const pts_g = P_GROUND.map((p) => [cx + (p[0] - cx) * e_g, cy + (p[1] - cy) * e_g] as Punkt);
        drawPolygon(pts_g, GROUND_FILL, LINE_COLOR, 1);

        const pts_b = P_BOUND.map((p) => [cx + (p[0] - cx) * e_g, cy + (p[1] - cy) * e_g] as Punkt);
        for (let i = 0; i < 4; i++) {
          drawLine(pts_b[i], pts_b[(i + 1) % 4], '#bfbfbf', 1, true);
        }
      }

      const t_plan = Math.min(1.0, Math.max(0.0, (t_sec - 1.2) / 2.6));
      if (t_sec > 1.2 && t_sec < 5.5) {
        for (const [l1, l2] of GRID_LINES) {
          const p_end = lerp(l1, l2, Math.min(1.0, t_plan * 1.5));
          drawLine(l1, p_end, '#d9d9d9', 1, false);
        }
      }

      if (t_plan > 0 && t_sec < 5.5) {
        const num_lines = PLAN_LINES.length;
        PLAN_LINES.forEach(([l1, l2], idx) => {
          const line_t_start = (idx / num_lines) * 0.7;
          const line_t_end = line_t_start + 0.3;
          const local_t = Math.min(1.0, Math.max(0.0, (t_plan - line_t_start) / (line_t_end - line_t_start)));
          if (local_t > 0) {
            const p_curr = lerp(l1, l2, easeOutCubic(local_t));
            drawLine(l1, p_curr, LINE_COLOR, 1);
          }
        });
      }

      const t_build = Math.min(1.0, Math.max(0.0, (t_sec - 3.8) / 3.4));
      if (t_build > 0) {
        const t_eg = Math.min(1.0, t_build / 0.55);
        const eb_eg = easeInOut(t_eg);
        const h_eg_curr = H_EG * eb_eg;

        const M1_top: Punkt = [M1[0], M1[1] - h_eg_curr];
        const M2_top: Punkt = [M2[0], M2[1] - h_eg_curr];
        const M3_top: Punkt = [M3[0], M3[1] - h_eg_curr];
        const M4_top: Punkt = [M4[0], M4[1] - h_eg_curr];

        drawPolygon([M2, M3, M3_top, M2_top], WALL_DARK_FILL, LINE_COLOR, 1);
        drawPolygon([M1, M2, M2_top, M1_top], WALL_FILL, LINE_COLOR, 1);
        drawPolygon([M1_top, M2_top, M3_top, M4_top], '#e3e3e3', LINE_COLOR, 1);

        if (t_eg > 0.6) {
          const tw = Math.min(1.0, (t_eg - 0.6) / 0.4);
          const top_margin = 0.12;
          const bottom_margin = 0.28;

          const p_left_base = lerp(M1, M2, 0.15);
          const p_right_base = lerp(M1, M2, 0.85);
          const p_left_top = lerp(M1_top, M2_top, 0.15);
          const p_right_top = lerp(M1_top, M2_top, 0.85);

          const g_top_left = lerp(p_left_top, p_left_base, top_margin);
          const g_top_right = lerp(p_right_top, p_right_base, top_margin);

          const g_bot_left_full = lerp(p_left_base, p_left_top, bottom_margin);
          const g_bot_right_full = lerp(p_right_base, p_right_top, bottom_margin);

          const g_bot_left = lerp(g_top_left, g_bot_left_full, tw);
          const g_bot_right = lerp(g_top_right, g_bot_right_full, tw);

          drawPolygon([g_top_left, g_top_right, g_bot_right, g_bot_left], GLASS_FILL, LINE_COLOR, 1);

          [0.38, 0.62].forEach((frac) => {
            const mp1 = lerp(g_top_left, g_top_right, frac);
            const mp2 = lerp(g_bot_left, g_bot_right, frac);
            drawLine(mp1, mp2, LINE_COLOR, 1);
          });
        }

        if (t_build > 0.45) {
          const t_attika = Math.min(1.0, (t_build - 0.45) / 0.55);
          const eb_att = easeInOut(t_attika);
          const h_att_curr = H_ATTIKA * eb_att;

          let A1_base = lerp(M1_top, M2_top, 0.12);
          A1_base = lerp(A1_base, M4_top, 0.15);
          let A2_base = lerp(M2_top, M1_top, 0.15);
          A2_base = lerp(A2_base, M3_top, 0.15);
          let A3_base = lerp(M3_top, M4_top, 0.15);
          A3_base = lerp(A3_base, M2_top, 0.15);
          let A4_base = lerp(M4_top, M3_top, 0.15);
          A4_base = lerp(A4_base, M1_top, 0.15);

          const A1_top: Punkt = [A1_base[0], A1_base[1] - h_att_curr];
          const A2_top: Punkt = [A2_base[0], A2_base[1] - h_att_curr];
          const A3_top: Punkt = [A3_base[0], A3_base[1] - h_att_curr];
          const A4_top: Punkt = [A4_base[0], A4_base[1] - h_att_curr];

          drawPolygon([A2_base, A3_base, A3_top, A2_top], WALL_DARK_FILL, LINE_COLOR, 1);
          drawPolygon([A1_base, A2_base, A2_top, A1_top], WALL_FILL, LINE_COLOR, 1);
          drawPolygon([A1_top, A2_top, A3_top, A4_top], '#ebd9d9', LINE_COLOR, 1);

          if (t_attika > 0.5) {
            const tw_att = Math.min(1.0, (t_attika - 0.5) / 0.5);
            const att_top_margin = 0.15;
            const att_bot_margin = 0.3;

            const p_att_left_base = lerp(A1_base, A2_base, 0.18);
            const p_att_right_base = lerp(A1_base, A2_base, 0.82);
            const p_att_left_top = lerp(A1_top, A2_top, 0.18);
            const p_att_right_top = lerp(A1_top, A2_top, 0.82);

            const ag_top_left = lerp(p_att_left_top, p_att_left_base, att_top_margin);
            const ag_top_right = lerp(p_att_right_top, p_att_right_base, att_top_margin);

            const ag_bot_left_full = lerp(p_att_left_base, p_att_left_top, att_bot_margin);
            const ag_bot_right_full = lerp(p_att_right_base, p_att_right_top, att_bot_margin);

            const ag_bot_left = lerp(ag_top_left, ag_bot_left_full, tw_att);
            const ag_bot_right = lerp(ag_top_right, ag_bot_right_full, tw_att);

            drawPolygon([ag_top_left, ag_top_right, ag_bot_right, ag_bot_left], GLASS_FILL, LINE_COLOR, 1);
          }
        }
      }

      const t_tree = Math.min(1.0, Math.max(0.0, (t_sec - 7.0) / 1.5));
      if (t_tree > 0) {
        const et = easeOutCubic(t_tree);
        const [tx, ty] = Sf([630, 360]);
        const trunk_h = 95 * sy * et;
        const top_y = ty - trunk_h;

        drawLine([tx, ty], [tx, top_y], LINE_COLOR, 1);

        const b1_end: Punkt = [tx - 18 * sx * et, top_y + 25 * sy];
        const b2_end: Punkt = [tx + 22 * sx * et, top_y + 15 * sy];
        const b3_end: Punkt = [tx - 10 * sx * et, top_y - 15 * sy];

        drawLine([tx, ty - trunk_h * 0.4], b1_end, LINE_COLOR, 1);
        drawLine([tx, ty - trunk_h * 0.55], b2_end, LINE_COLOR, 1);
        drawLine([tx, top_y], b3_end, LINE_COLOR, 1);

        const c1: Punkt = [tx - 12 * sx, top_y - 10 * sy];
        const c2: Punkt = [tx + 14 * sx, top_y - 25 * sy];
        const c3: Punkt = [tx - 5 * sx, top_y - 45 * sy];

        const r1 = 22 * sx * et;
        const r2 = 26 * sx * et;
        const r3 = 20 * sx * et;

        if (r1 > 0) drawCircle(c1, r1, '#ebebeb', LINE_COLOR);
        if (r2 > 0) drawCircle(c2, r2, '#ebebeb', LINE_COLOR);
        if (r3 > 0) drawCircle(c3, r3, '#ebebeb', LINE_COLOR);
      }

      currentFrame++;
      frameId = requestAnimationFrame(render);
    }

    render();
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={1200}
      height={800}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
