import { useEffect, useRef } from 'react';

const CHAPTERS = [
  { id: 'top', label: 'Cover' },
  { id: 'origin', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'powers', label: 'Capabilities' },
  { id: 'record', label: 'Achievements' },
  { id: 'signal', label: 'Contact' },
];

export default function ChapterRail() {
  const fillRef = useRef<HTMLSpanElement>(null);
  const linksRef = useRef<HTMLAnchorElement[]>([]);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (fillRef.current) fillRef.current.style.transform = `scaleY(${progress})`;

      const marker = window.scrollY + window.innerHeight * 0.42;
      let active = 0;
      CHAPTERS.forEach((chapter, index) => {
        const el = document.getElementById(chapter.id);
        if (el && el.offsetTop <= marker) active = index;
      });
      linksRef.current.forEach((link, index) => {
        link.classList.toggle('is-active', index === active);
        if (index === active) link.setAttribute('aria-current', 'true');
        else link.removeAttribute('aria-current');
      });
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
    <nav className="chapters" aria-label="Chapters">
      <span className="chapters__rail" aria-hidden="true">
        <span className="chapters__fill" ref={fillRef} />
      </span>
      {CHAPTERS.map((chapter, index) => (
        <a
          key={chapter.id}
          href={`#${chapter.id}`}
          ref={(el) => {
            if (el) linksRef.current[index] = el;
          }}
          className={index === 0 ? 'is-active' : ''}
        >
          <span className="chapters__dot" aria-hidden="true" />
          <span className="chapters__num">0{index}</span>
          <span className="chapters__label">{chapter.label}</span>
        </a>
      ))}
    </nav>
  );
}
