import { useEffect, useRef, useState } from 'react';

const HUB = { x: 28, y: 28 };
const SPOKE_COUNT = 13;

function makeWeb() {
  let seed = 911;
  const rand = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 0x100000000;
  };

  const shape = (angle: number) => 0.93 + 0.07 * Math.sin(angle * 2 + 0.7);

  const angles = Array.from({ length: SPOKE_COUNT }, (_, i) => {
    const base = (i / SPOKE_COUNT) * Math.PI * 2 - Math.PI / 2;
    return base + (rand() - 0.5) * 0.08;
  });

  const reach = angles.map((a) => 22.5 * shape(a) * (0.95 + rand() * 0.1));

  const spokes = angles.map((angle, i) => {
    const r = reach[i];
    return `M${HUB.x} ${HUB.y}L${(HUB.x + Math.cos(angle) * r).toFixed(2)} ${(HUB.y + Math.sin(angle) * r).toFixed(2)}`;
  });

  const spiral: string[] = [];
  let radius = 3.4;
  let turn = 0;

  while (radius < 24) {
    for (let i = 0; i < SPOKE_COUNT; i++) {
      if (turn > 3 && rand() < 0.06) continue;

      const a0 = angles[i];
      const a1 = angles[(i + 1) % SPOKE_COUNT];
      const r0 = radius * shape(a0) * (0.98 + rand() * 0.04);
      const r1 = radius * shape(a1) * (0.98 + rand() * 0.04);

      const x0 = HUB.x + Math.cos(a0) * r0;
      const y0 = HUB.y + Math.sin(a0) * r0;
      const x1 = HUB.x + Math.cos(a1) * r1;
      const y1 = HUB.y + Math.sin(a1) * r1;

      const am = (a0 + a1) / 2;
      const sag = radius * shape(am) * (0.86 + rand() * 0.05);
      const cx = HUB.x + Math.cos(am) * sag;
      const cy = HUB.y + Math.sin(am) * sag;

      spiral.push(
        `M${x0.toFixed(2)} ${y0.toFixed(2)}Q${cx.toFixed(2)} ${cy.toFixed(2)} ${x1.toFixed(2)} ${y1.toFixed(2)}`,
      );
    }
    radius *= 1.28;
    turn++;
  }

  return { spokes, spiral };
}

const { spokes: SPOKES, spiral: SPIRAL } = makeWeb();

export default function Cursor() {
  const [on, setOn] = useState(false);
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const dot = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    setOn(true);
    document.documentElement.classList.add('has-cursor');

    const onMove = (e: PointerEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      if (ringRef.current) ringRef.current.style.opacity = '1';
      if (dotRef.current) dotRef.current.style.opacity = '1';
    };

    const onOver = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest<HTMLElement>('a, button, [data-cursor]');
      const ringEl = ringRef.current;
      if (!ringEl) return;
      if (el) {
        ringEl.classList.add('is-link');
        const text = el.dataset.cursor ?? (el.tagName === 'A' ? 'OPEN' : 'GO');
        if (labelRef.current) labelRef.current.textContent = text;
      } else {
        ringEl.classList.remove('is-link');
        if (labelRef.current) labelRef.current.textContent = '';
      }
    };

    const onLeave = () => {
      if (ringRef.current) ringRef.current.style.opacity = '0';
      if (dotRef.current) dotRef.current.style.opacity = '0';
    };
    let raf = 0;
    const tick = () => {
      ring.current.x += (target.current.x - ring.current.x) * 0.16;
      ring.current.y += (target.current.y - ring.current.y) * 0.16;
      dot.current.x += (target.current.x - dot.current.x) * 0.55;
      dot.current.y += (target.current.y - dot.current.y) * 0.55;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x - 28}px, ${ring.current.y - 28}px, 0)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dot.current.x - 2.5}px, ${dot.current.y - 2.5}px, 0)`;
      }
      raf = window.requestAnimationFrame(tick);
    };
    raf = window.requestAnimationFrame(tick);

    document.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver, { passive: true });
    document.addEventListener('mouseleave', onLeave);

    return () => {
      window.cancelAnimationFrame(raf);
      document.removeEventListener('pointermove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseleave', onLeave);
      document.documentElement.classList.remove('has-cursor');
    };
  }, []);

  if (!on) return null;

  return (
    <div className="cursor" aria-hidden="true">
      <div className="cursor__ring" ref={ringRef}>
        <svg className="cursor__web" viewBox="0 0 56 56" fill="none" aria-hidden="true">
          <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" opacity="0.95">
            
            <g strokeWidth="0.9">
              {SPOKES.map((spoke, i) => (
                <path key={`spoke-${i}`} d={spoke} />
              ))}
            </g>

            
            <g strokeWidth="0.85">
              {SPIRAL.map((segment, i) => (
                <path key={`spiral-${i}`} d={segment} />
              ))}
            </g>

            
            <g strokeWidth="0.7" opacity="0.6">
              <path d="M28 28 4 8M28 28 52 8M28 28 5 48M28 28 51 48" />
            </g>
          </g>

          <circle cx="28" cy="28" r="1.9" fill="#e62429" />
        </svg>
        <span className="cursor__label" ref={labelRef} />
      </div>
      <div className="cursor__dot" ref={dotRef} />
    </div>
  );
}
