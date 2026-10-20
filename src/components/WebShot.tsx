import { useEffect, useState } from 'react';
import { WebPattern } from './art';

interface Shot {
  id: number;
  x: number;
  y: number;
  rot: number;
}

let next = 1;

export default function WebShot() {
  const [shots, setShots] = useState<Shot[]>([]);

  useEffect(() => {
    const onDown = (event: PointerEvent) => {
      if (event.button !== 0 || event.pointerType === 'touch') return;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const hit = (event.target as Element | null)?.closest('a, button, [data-cursor]');
      if (!hit) return;

      const shot: Shot = {
        id: next++,
        x: event.clientX,
        y: event.clientY,
        rot: Math.random() * 90 - 45,
      };
      setShots((current) => [...current.slice(-3), shot]);
      window.setTimeout(() => {
        setShots((current) => current.filter((item) => item.id !== shot.id));
      }, 650);
    };
    document.addEventListener('pointerdown', onDown, { passive: true });
    return () => document.removeEventListener('pointerdown', onDown);
  }, []);

  return (
    <div aria-hidden="true">
      {shots.map((shot) => (
        <span
          key={shot.id}
          className="webshot"
          style={{ left: shot.x, top: shot.y, ['--r' as string]: `${shot.rot}deg` }}
        >
          <WebPattern rings={5} />
        </span>
      ))}
    </div>
  );
}
