import type { PointerEvent } from 'react';
import SectionHead from './SectionHead';
import { projects, profile } from '../data';
import { Arrow } from './icons';
import { WebPattern } from './art';

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function WebxploitArt() {
  return (
    <svg viewBox="0 0 420 560" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <radialGradient id="wx-bg" cx="50%" cy="32%" r="78%">
          <stop offset="0" stopColor="#310813" />
          <stop offset="0.55" stopColor="#150610" />
          <stop offset="1" stopColor="#07050a" />
        </radialGradient>
        <pattern id="wx-dots" width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="1.4" cy="1.4" r="1.15" fill="#e62429" opacity="0.62" />
        </pattern>
        <pattern id="wx-grid" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M28 0H0V28" fill="none" stroke="#f3edda" strokeOpacity="0.07" />
        </pattern>
      </defs>

      <rect width="420" height="560" fill="url(#wx-bg)" />
      <rect width="420" height="560" fill="url(#wx-grid)" />
      <rect width="420" height="240" fill="url(#wx-dots)" opacity="0.55" />

      <g stroke="#f3edda" strokeOpacity="0.2" fill="none">
        <path d="M210 150 22 32M210 150 105 12M210 150 315 12M210 150 398 32M210 150 30 170M210 150 390 170" />
        <path d="M96 92c60-24 168-24 228 0M60 126c80-36 220-36 300 0M40 160c90-42 250-42 340 0" />
      </g>

      <g transform="rotate(-4 210 300)">
        <rect x="58" y="188" width="304" height="226" fill="#0a0810" stroke="#f3edda" strokeWidth="2.5" />
        <rect x="58" y="188" width="304" height="26" fill="#f3edda" />
        <circle cx="74" cy="201" r="3.2" fill="#e62429" />
        <circle cx="85" cy="201" r="3.2" fill="#ffd400" />
        <circle cx="96" cy="201" r="3.2" fill="#2b5cff" />
        <text x="112" y="205" fontFamily="Merienda, cursive" fontSize="8.5" fill="#0a0810" letterSpacing="0.4">
          https://target.tld/admin
        </text>

        <g fontFamily="Merienda, cursive" fontSize="9.2">
          <text x="76" y="242" fill="#ff5560">&gt; GET /admin HTTP/1.1</text>
          <text x="76" y="264" fill="#f3edda">200 OK · 4,821 bytes</text>
          <text x="76" y="286" fill="#ff5560">&gt; POST /api/users?id=1</text>
          <text x="76" y="308" fill="#ffd400">403 · response leaks role</text>
          <text x="76" y="330" fill="#f3edda">&gt; escalate()</text>
          <text x="76" y="352" fill="#e62429">flag&#123;y0u_f0und_1t&#125;</text>
        </g>

        <rect x="238" y="330" width="104" height="38" fill="#e62429" />
        <text x="290" y="356" textAnchor="middle" fontFamily="Merienda, cursive" fontSize="16" fill="#0a0810" letterSpacing="1">
          ADMIN?
        </text>
      </g>

      <g stroke="#e62429" fill="none">
        <circle cx="338" cy="120" r="48" strokeWidth="2.5" />
        <circle cx="338" cy="120" r="17" strokeWidth="1.5" strokeDasharray="4 5" />
        <path d="M338 58v30M338 152v30M276 120h30M370 120h30" strokeWidth="2.5" />
      </g>

      <rect x="0" y="468" width="420" height="9" fill="#e62429" opacity="0.9" />
      <rect x="0" y="486" width="266" height="4" fill="#2b5cff" opacity="0.9" />
      <rect x="302" y="498" width="118" height="3" fill="#ffd400" opacity="0.8" />

      <g transform="translate(30 508) rotate(-3)">
        <rect width="150" height="26" fill="#f3edda" />
        <text x="75" y="18" textAnchor="middle" fontFamily="Merienda, cursive" fontSize="9" fill="#0a0810" letterSpacing="1.2">
          PRIVATE BUILD
        </text>
      </g>
    </svg>
  );
}

function SentinelArt() {
  return (
    <svg viewBox="0 0 420 560" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <radialGradient id="st-bg" cx="50%" cy="40%" r="76%">
          <stop offset="0" stopColor="#08251d" />
          <stop offset="0.6" stopColor="#061310" />
          <stop offset="1" stopColor="#04090a" />
        </radialGradient>
        <linearGradient id="st-sweep" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#6ff2c3" stopOpacity="0" />
          <stop offset="1" stopColor="#6ff2c3" stopOpacity="0.28" />
        </linearGradient>
        <pattern id="st-dots" width="7" height="7" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.2" fill="#6ff2c3" opacity="0.4" />
        </pattern>
      </defs>

      <rect width="420" height="560" fill="url(#st-bg)" />
      <rect width="420" height="560" fill="url(#st-dots)" opacity="0.4" />

      <g stroke="#6ff2c3" fill="none" opacity="0.4">
        <circle cx="210" cy="270" r="44" />
        <circle cx="210" cy="270" r="88" strokeDasharray="3 7" />
        <circle cx="210" cy="270" r="132" />
        <circle cx="210" cy="270" r="176" strokeDasharray="2 9" />
        <path d="M210 70v400M30 270h360M90 150l240 240M330 150 90 390" opacity="0.5" />
      </g>

      <path d="M210 270 385 220A176 176 0 0 0 368 165Z" fill="url(#st-sweep)" />

      <g fill="#6ff2c3">
        <circle cx="318" cy="188" r="4" />
        <circle cx="128" cy="348" r="3" />
        <circle cx="286" cy="372" r="2.5" />
        <circle cx="160" cy="160" r="2" />
        <circle cx="342" cy="300" r="2" />
      </g>

      <g transform="translate(210 282)">
        <path
          d="M0-92 74-60v58C74 48 40 80 0 96-40 80-74 48-74 8v-68Z"
          fill="#06140f"
          stroke="#f3edda"
          strokeWidth="3"
        />
        <ellipse cx="0" cy="-8" rx="34" ry="21" fill="none" stroke="#6ff2c3" strokeWidth="3" />
        <circle cx="0" cy="-8" r="9" fill="#6ff2c3" />
        <path d="M-56-62 0-42l56-20M0 96V18" stroke="#6ff2c3" strokeWidth="1.2" opacity="0.55" fill="none" />
      </g>

      <g fill="#6ff2c3" opacity="0.55">
        <rect x="26" y="456" width="36" height="3" />
        <rect x="68" y="456" width="10" height="3" />
        <rect x="26" y="465" width="18" height="3" />
      </g>

      <g transform="translate(28 504)">
        <rect width="132" height="27" fill="#6ff2c3" />
        <text x="66" y="18" textAnchor="middle" fontFamily="Merienda, cursive" fontSize="9" fill="#04100c" letterSpacing="1.4">
          v1.0 · PUBLIC
        </text>
      </g>

      <text
        x="392"
        y="530"
        textAnchor="end"
        fontFamily="Merienda, cursive"
        fontSize="8"
        fill="#6ff2c3"
        opacity="0.7"
        letterSpacing="1"
      >
        200 · 301 · 403
      </text>
    </svg>
  );
}

export default function Work({ onOpen }: { onOpen: (id: string) => void }) {
  const tilt = (event: PointerEvent<HTMLElement>) => {
    if (reduced) return;
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty('--ry', `${(x * 7).toFixed(2)}deg`);
    el.style.setProperty('--rx', `${(-y * 7).toFixed(2)}deg`);
    el.style.setProperty('--mx', `${((x + 0.5) * 100).toFixed(1)}%`);
    el.style.setProperty('--my', `${((y + 0.5) * 100).toFixed(1)}%`);
  };

  const reset = (event: PointerEvent<HTMLElement>) => {
    const el = event.currentTarget;
    el.style.setProperty('--ry', '0deg');
    el.style.setProperty('--rx', '0deg');
  };

  return (
    <section className="section work" id="work">
      <div className="shell">
        <SectionHead
          number="03"
          eyebrow="My Work"
          lines={['My Work & Projects']}
          tag="03 / 06"
          light
        />

        <div className="work__bar">
          <nav className="work__index" aria-label="Jump to a case file">
            {projects.map((project) => (
              <a key={project.id} href={`#case-${project.id}`}>
                <span>{project.issue}</span>
                {project.title}
              </a>
            ))}
          </nav>

          <a
            className="work__bar-link"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="GITHUB"
          >
            More on GitHub <Arrow />
          </a>
        </div>

        <div className="work__list">
          {projects.map((project) => (
            <article className={`case-row reveal case-row--${project.accent}`} id={`case-${project.id}`} key={project.id}>
              <span className="case-row__slash" aria-hidden="true" />

              <div className="case-row__visual">
                <WebPattern className="case-row__web" rings={5} />
                <button
                  type="button"
                  className="case-row__art"
                  onPointerMove={tilt}
                  onPointerLeave={reset}
                  onClick={() => onOpen(project.id)}
                  aria-label={`Open case file for ${project.title}`}
                  data-cursor="OPEN FILE"
                >
                  <span className="case-row__canvas">
                    {project.id === 'webxploit' ? <WebxploitArt /> : <SentinelArt />}
                    <span className="case-row__sheen" aria-hidden="true" />
                  </span>
                  <span className="case-row__open">
                    Open case file <Arrow />
                  </span>
                </button>

                <div className="case-row__strip">
                  <span>Issue #{project.issue}</span>
                  <span>{project.year}</span>
                  <span>{project.status}</span>
                </div>
              </div>

              <div className="case-row__body">
                <p className="case-row__kicker">{project.kicker}</p>
                <h3>{project.title}</h3>
                <p className="case-row__tag">{project.tagline}</p>
                <p className="case-row__summary">{project.summary}</p>

                <ul className="case-row__points">
                  {project.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className="case-row__bottom">
                  <dl className="case-row__metrics">
                    {project.metrics.map((metric) => (
                      <div key={metric.label}>
                        <dt>{metric.label}</dt>
                        <dd>{metric.value}</dd>
                      </div>
                    ))}
                  </dl>

                  <ul className="case-row__stack" aria-label="Stack">
                    {project.stack.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <button className="case-row__link" type="button" onClick={() => onOpen(project.id)}>
                    Read the full case file <Arrow />
                  </button>
                </div>
              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}
