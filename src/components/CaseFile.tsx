import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import type { Project } from '../data';
import { profile } from '../data';
import { Arrow, CloseIcon } from './icons';

export default function CaseFile({ project, onClose }: { project: Project; onClose: () => void }) {
  const pageRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const timer = window.setTimeout(() => closeRef.current?.focus(), 60);

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== 'Tab') return;

      const focusable = pageRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      }
    };

    document.addEventListener('keydown', onKey);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
      previous?.focus();
    };
  }, [onClose]);

  return createPortal(
    <div className={`casefile casefile--${project.accent}`} role="dialog" aria-modal="true" aria-labelledby="case-title">
      <button className="casefile__backdrop" type="button" onClick={onClose} aria-label="Close case file" tabIndex={-1} />

      <div className="casefile__page" ref={pageRef}>
        <header className="casefile__head">
          <div className="casefile__headtext">
            <p className="casefile__eyebrow">
              ISSUE #{project.issue} <span>/</span> CASE FILE <span>/</span> {project.year}
            </p>
            <h2 className="casefile__title" id="case-title">
              {project.title}
            </h2>
            <p className="casefile__tagline">{project.tagline}</p>
          </div>
          <button
            className="casefile__close"
            type="button"
            onClick={onClose}
            ref={closeRef}
            aria-label="Close case file"
            data-cursor="CLOSE"
          >
            <CloseIcon />
          </button>
        </header>

        <div className="casefile__meta">
          <div>
            <span>YEAR</span>
            <b>{project.year}</b>
          </div>
          <div>
            <span>ROLE</span>
            <b>{project.role}</b>
          </div>
          <div>
            <span>STATUS</span>
            <b>{project.status}</b>
          </div>
          <div>
            <span>STACK</span>
            <b>{project.stack.join(' · ')}</b>
          </div>
        </div>

        <div className="casefile__panels">
          <article className="cpanel">
            <span className="cpanel__num">01 / THE PROBLEM</span>
            <p>{project.problem}</p>
          </article>
          <article className="cpanel">
            <span className="cpanel__num">02 / THE DECISION</span>
            <p>{project.decision}</p>
          </article>
          <article className="cpanel">
            <span className="cpanel__num">03 / WHAT HAPPENED</span>
            <p>{project.outcome}</p>
          </article>
        </div>

        <div className="casefile__stats">
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <b>{metric.value}</b>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>

        {project.snippet && (
          <div className="casefile__code">
            <div className="casefile__codehead">
              <span>{project.snippet.file}</span>
              <span>{project.snippet.lang}</span>
            </div>
            <pre>
              <code>{project.snippet.code}</code>
            </pre>
          </div>
        )}

        <div className="casefile__bottom">
          <p className="casefile__note">{project.note}</p>
          <div className="casefile__links">
            {project.links.map((link) =>
              link.href ? (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label} <Arrow />
                </a>
              ) : (
                <span key={link.label} className="casefile__linknote">
                  {link.label} <i>{link.note}</i>
                </span>
              ),
            )}
            <a href={`mailto:${profile.email}?subject=${encodeURIComponent(`About ${project.title}`)}`}>
              Ask me about it <Arrow />
            </a>
          </div>
        </div>

        <button className="casefile__back" type="button" onClick={onClose} data-cursor="CLOSE">
          ← BACK TO THE GALLERY
        </button>
      </div>
    </div>,
    document.body,
  );
}
