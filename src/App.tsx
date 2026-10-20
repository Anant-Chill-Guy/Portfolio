import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from './data';
import Preloader from './components/Preloader';
import Cursor from './components/Cursor';
import Nav from './components/Nav';
import ChapterRail from './components/ChapterRail';
import Hero from './components/Hero';
import Origin from './components/Origin';
import Work from './components/Work';
import Powers from './components/Powers';
import Record from './components/Record';
import Signal from './components/Signal';
import CaseFile from './components/CaseFile';
import WebDivider from './components/WebDivider';
import WebShot from './components/WebShot';
import ScrollStrand from './components/ScrollStrand';

gsap.registerPlugin(ScrollTrigger);

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function App() {
  const [ready, setReady] = useState(false);
  const [caseId, setCaseId] = useState<string | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const finishIntro = useCallback(() => setReady(true), []);

  useEffect(() => {
    document.documentElement.classList.toggle('motion', !reduced);
    document.documentElement.classList.add('js');
  }, []);

  useEffect(() => {
    if (!ready || !location.hash) return;
    const target = document.querySelector<HTMLElement>(location.hash);
    if (!target) return;
    const timer = window.setTimeout(
      () => target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' }),
      120,
    );
    return () => window.clearTimeout(timer);
  }, [ready]);

  useEffect(() => {
    if (!ready) return;
    const elements = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    if (reduced) {
      elements.forEach((el) => el.classList.add('is-in'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.05 },
    );
    elements.forEach((el) => io.observe(el));

    const fallback = window.setTimeout(() => {
      elements.forEach((el) => el.classList.add('is-in'));
    }, 4000);

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, [ready]);

  useLayoutEffect(() => {
    if (!ready || reduced) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-split]').forEach((el) => {
        const chars = el.querySelectorAll<HTMLElement>('.ch');
        const targets = chars.length ? Array.from(chars) : Array.from(el.querySelectorAll<HTMLElement>('.line'));
        if (!targets.length) return;
        gsap.from(targets, {
          y: 30,
          opacity: 0,
          rotate: 4,
          duration: 0.9,
          ease: 'power4.out',
          stagger: 0.028,
          scrollTrigger: { trigger: el, start: 'top 88%' },
        });
      });

      gsap.utils.toArray<HTMLElement>('[data-fade]').forEach((el) => {
        gsap.from(el, {
          y: 26,
          opacity: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 90%' },
        });
      });

      gsap.utils.toArray<HTMLElement>('[data-glitch]').forEach((el) => {
        const tl = gsap.timeline({
          scrollTrigger: { trigger: el, start: 'top 78%', once: true },
        });
        tl.to(el, { skewX: 3, duration: 0.06 })
          .to(el, { skewX: -2, duration: 0.06 })
          .to(el, { skewX: 0, duration: 0.08 });
      });

      gsap.utils.toArray<SVGPathElement>('[data-web-path]').forEach((path) => {
        const length = path.getTotalLength();
        if (!length) return;
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 1.6,
          ease: 'power2.inOut',
          scrollTrigger: { trigger: path.closest('svg'), start: 'top 82%' },
        });
      });

      gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
        const speed = Number(el.dataset.speed ?? 0.12);
        gsap.to(el, {
          yPercent: speed * 100,
          ease: 'none',
          scrollTrigger: {
            trigger: el.parentElement ?? el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.6,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>('[data-scroll-x]').forEach((el) => {
        const direction = Number(el.dataset.scrollX ?? 1);
        gsap.fromTo(
          el,
          { xPercent: -14 * direction },
          {
            xPercent: 14 * direction,
            ease: 'none',
            scrollTrigger: {
              trigger: el.closest('.webdivider') ?? el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.8,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>('[data-line]').forEach((el) => {
        gsap.from(el, {
          scaleX: 0,
          transformOrigin: 'left center',
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 90%' },
        });
      });

      gsap.utils.toArray<HTMLElement>('.case-row__slash').forEach((el) => {
        gsap.from(el, {
          scaleY: 0,
          transformOrigin: 'top center',
          duration: 1.1,
          ease: 'power2.out',
          scrollTrigger: { trigger: el.closest('.case-row'), start: 'top 85%' },
        });
      });

      gsap.to('[data-hero-title]', {
        yPercent: 10,
        opacity: 0.35,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        },
      });

      gsap.utils.toArray<SVGElement>('.case-row__canvas > svg').forEach((svg) => {
        gsap.fromTo(
          svg,
          { yPercent: -2.5 },
          {
            yPercent: 2.5,
            ease: 'none',
            scrollTrigger: {
              trigger: svg.closest('.case-row'),
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.8,
            },
          },
        );
      });
    }, rootRef);

    const cleanups: (() => void)[] = [];
    document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
      const move = (event: PointerEvent) => {
        const rect = el.getBoundingClientRect();
        gsap.to(el, {
          x: (event.clientX - rect.left - rect.width / 2) * 0.16,
          y: (event.clientY - rect.top - rect.height / 2) * 0.24,
          duration: 0.35,
          ease: 'power2.out',
        });
      };
      const leave = () => {
        gsap.to(el, { x: 0, y: 0, duration: 0.55, ease: 'elastic.out(1, 0.45)' });
      };
      el.addEventListener('pointermove', move);
      el.addEventListener('pointerleave', leave);
      cleanups.push(() => {
        el.removeEventListener('pointermove', move);
        el.removeEventListener('pointerleave', leave);
      });
    });

    const refresh = window.setTimeout(() => ScrollTrigger.refresh(), 350);
    return () => {
      window.clearTimeout(refresh);
      cleanups.forEach((fn) => fn());
      ctx.revert();
    };
  }, [ready]);

  const openCase = (id: string) => setCaseId(id);
  const activeProject = projects.find((p) => p.id === caseId) ?? null;

  return (
    <div className="site" ref={rootRef} data-ready={ready ? 'true' : 'false'}>
      <Preloader onDone={finishIntro} />
      <Cursor />
      <WebShot />
      <ChapterRail />
      <ScrollStrand />
      <a className="skip" href="#origin">
        Skip to content
      </a>

      <Nav ready={ready} />

      <main id="main">
        <Hero ready={ready} />
        <WebDivider />
        <Origin />
        <WebDivider />
        <Work onOpen={openCase} />
        <WebDivider />
        <Powers />
        <WebDivider />
        <Record />
        <WebDivider />
        <Signal />
      </main>

      <footer className="footer">
        <div className="footer__rule" />
        <div className="footer__row">
          <a href="#top" data-cursor="TOP">
            Back to cover ↑
          </a>
        </div>
      </footer>

      {activeProject && <CaseFile project={activeProject} onClose={() => setCaseId(null)} />}
    </div>
  );
}
