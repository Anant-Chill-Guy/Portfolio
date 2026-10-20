import { useEffect, useRef } from 'react';
import { SpiderEmblem } from './art';

export default function ScrollStrand() {
  const lineRef = useRef<HTMLSpanElement>(null);
  const spiderRef = useRef<HTMLSpanElement>(null);
  const pctRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      const travel = window.innerHeight - 140;
      const top = 70 + progress * travel;
      if (lineRef.current) lineRef.current.style.height = `${progress * travel}px`;
      if (spiderRef.current) {
        spiderRef.current.style.top = `${top}px`;
        spiderRef.current.style.transform = `translate(-50%, -50%) rotate(${(progress * 22 - 11).toFixed(1)}deg)`;
      }
      if (pctRef.current) pctRef.current.textContent = String(Math.round(progress * 100)).padStart(2, '0');
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="strand" aria-hidden="true">
      <span className="strand__track">
        <span className="strand__fill" ref={lineRef} />
      </span>
      <span className="strand__spider" ref={spiderRef}>
        <SpiderEmblem />
      </span>
      <span className="strand__pct" ref={pctRef}>00</span>
    </div>
  );
}
