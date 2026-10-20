import { useEffect, useRef, useState } from 'react';
import { navItems, profile } from '../data';
import { SpiderMark } from './icons';

export default function Nav({ ready }: { ready: boolean }) {
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState('');
  const progressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const value = max > 0 ? Math.min(1, window.scrollY / max) : 0;
        if (progressRef.current) progressRef.current.style.transform = `scaleX(${value})`;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const format = new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: 'Asia/Kolkata',
    });
    const tick = () => setTime(format.format(new Date()));
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: '-42% 0px -52% 0px', threshold: 0 },
    );
    sections.forEach((section) => io.observe(section));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.classList.add('menu-open');
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('menu-open');
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <header className={`nav ${scrolled ? 'is-scrolled' : ''} ${ready ? 'is-ready' : ''}`}>
        <a className="nav__brand" href="#top" aria-label="KR4K3N, back to cover">
          <SpiderMark className="nav__mark" />
          <span className="nav__brandtext">
            <b>KR4K3N</b>
            <small>Anant Awasthi</small>
          </span>
        </a>

        <nav className="nav__links" aria-label="Sections">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={active === item.id ? 'is-active' : ''}
              aria-current={active === item.id ? 'true' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav__right">
          <span className="nav__meta">
            <b>{time}</b>
          </span>
          <button
            type="button"
            className="nav__burger"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>

        <span className="nav__progress" aria-hidden="true">
          <span ref={progressRef} />
        </span>
      </header>

      <div id="mobile-menu" className={`menu ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <div className="menu__inner">
          <p className="menu__eyebrow">Issue #01 · Contents</p>
          <nav aria-label="Mobile sections">
            {navItems.map((item, index) => (
              <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
                <span className="menu__num">0{index + 1}</span>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="menu__foot">
            <a href={`mailto:${profile.email}`} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
              {profile.email}
            </a>
            <span>IST · UTC+5:30</span>
          </div>
        </div>
      </div>
    </>
  );
}
