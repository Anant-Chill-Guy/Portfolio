import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import gsap from 'gsap';
import { SpiderEmblem, WebPattern } from './art';

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const KEY = 'krakn-intro-seen';

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [gone, setGone] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(KEY) === '1';
    } catch {
      seen = false;
    }
    if (reduced || seen) {
      setGone(true);
      onDone();
      return;
    }

    document.body.classList.add('is-loading');
    let finished = false;
    let revealed = false;

    const reveal = () => {
      if (revealed) return;
      revealed = true;
      document.body.classList.remove('is-loading');
      onDone();
    };

    const finish = () => {
      if (finished) return;
      finished = true;
      reveal();
      try {
        sessionStorage.setItem(KEY, '1');
      } catch {}
      setGone(true);
    };

    const tl = gsap.timeline({ onComplete: finish });

    tl.fromTo(
      '.pl__web',
      { scale: 0.12, rotate: -28, opacity: 0 },
      { scale: 1.02, rotate: 0, opacity: 0.55, duration: 0.9, ease: 'elastic.out(1, 0.55)' },
      0,
    )
      .fromTo(
        '.pl__web path',
        { strokeDashoffset: 1 },
        { strokeDashoffset: 0, duration: 0.85, stagger: 0.012, ease: 'power2.inOut' },
        0.05,
      )
      .fromTo(
        '.pl__spider',
        { y: -150, opacity: 0, rotate: -16 },
        { y: 0, opacity: 1, rotate: 0, duration: 0.6, ease: 'power2.in' },
        0.38,
      )
      .fromTo(
        '.pl__word .ch',
        { yPercent: 130, opacity: 0, rotate: 8 },
        { yPercent: 0, opacity: 1, rotate: 0, duration: 0.5, stagger: 0.03, ease: 'power4.out' },
        0.56,
      )
      .fromTo('.pl__meta', { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.3 }, 0.9)
      .fromTo(
        '.pl__thwip',
        { scale: 0.3, opacity: 0, rotate: -22 },
        { scale: 1, opacity: 1, rotate: -9, duration: 0.35, ease: 'back.out(2.6)' },
        0.86,
      )
      .to('.pl__web', { scale: 1.14, duration: 0.3, ease: 'power2.inOut' }, 1.02)
      .to('.pl__content', { opacity: 0, y: -18, duration: 0.3, ease: 'power2.in' }, 1.16)
      .to(
        sheetRef.current,
        { yPercent: -108, rotate: -0.6, duration: 0.8, ease: 'power4.inOut' },
        1.24,
      )
      .call(reveal, undefined, 1.3)
      .to(rootRef.current, { autoAlpha: 0, duration: 0.1 }, 2.0);

    const revealTimer = window.setTimeout(reveal, 1250);
    const finishTimer = window.setTimeout(finish, 2150);

    const skip = () => {
      window.clearTimeout(revealTimer);
      window.clearTimeout(finishTimer);
      tl.progress(1);
      finish();
    };
    window.addEventListener('keydown', skip, { once: true });
    window.addEventListener('pointerdown', skip, { once: true });

    return () => {
      window.clearTimeout(revealTimer);
      window.clearTimeout(finishTimer);
      window.removeEventListener('keydown', skip);
      window.removeEventListener('pointerdown', skip);
      tl.kill();
      document.body.classList.remove('is-loading');
    };
  }, [onDone]);

  if (gone) return null;

  return createPortal(
    <div className="preloader" ref={rootRef} aria-hidden="true">
      <div className="pl__sheet" ref={sheetRef}>
        <WebPattern className="pl__web" rings={7} />
        <SpiderEmblem className="pl__spider" />

        <div className="pl__content">
          <p className="pl__eyebrow">An original fan issue</p>
          <div className="pl__word" aria-label="KR4K3N">
            {'KR4K3N'.split('').map((c, i) => (
              <span className="ch" key={i}>
                {c}
              </span>
            ))}
          </div>
          <p className="pl__meta">A fan issue · 2026</p>
        </div>

        <span className="pl__thwip">THWIP!</span>
      </div>
      <p className="pl__skip">Press anything to skip</p>
    </div>,
    document.body,
  );
}
