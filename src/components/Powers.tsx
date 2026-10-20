import { useState } from 'react';
import SectionHead from './SectionHead';
import { platforms, skillGroups } from '../data';
import { Arrow, ArsenalIcon, CodeIcon, NetworkIcon, WebIcon } from './icons';
import { SpiderEmblem, WebPattern } from './art';

const icons = {
  web: WebIcon,
  network: NetworkIcon,
  code: CodeIcon,
  arsenal: ArsenalIcon,
};

function WebGraphic({ active }: { active: number | null }) {
  const center = { x: 450, y: 360 };
  const rings = [82, 158, 236, 314, 384];
  const spokes = 12;
  const nodes = [
    [
      [214, 142],
      [156, 242],
      [268, 264],
      [318, 176],
      [120, 182],
      [300, 104],
    ],
    [
      [654, 132],
      [712, 236],
      [600, 256],
      [566, 172],
      [768, 160],
      [640, 90],
    ],
    [
      [196, 566],
      [154, 468],
      [262, 448],
      [300, 536],
      [122, 520],
      [224, 642],
    ],
    [
      [666, 580],
      [716, 478],
      [604, 456],
      [562, 542],
      [768, 540],
      [652, 652],
    ],
  ];
  const links = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 0],
    [4, 0],
    [5, 3],
  ];

  return (
    <svg className="webgraphic" viewBox="0 0 900 720" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeOpacity="0.16">
        {rings.map((radius) => (
          <polygon
            key={radius}
            points={Array.from({ length: spokes }, (_, i) => {
              const angle = (i / spokes) * Math.PI * 2 - Math.PI / 2;
              return `${center.x + Math.cos(angle) * radius},${center.y + Math.sin(angle) * radius}`;
            }).join(' ')}
          />
        ))}
        {Array.from({ length: spokes }, (_, i) => {
          const angle = (i / spokes) * Math.PI * 2 - Math.PI / 2;
          return (
            <line
              key={i}
              x1={center.x}
              y1={center.y}
              x2={center.x + Math.cos(angle) * 390}
              y2={center.y + Math.sin(angle) * 390}
            />
          );
        })}
      </g>

      {nodes.map((cluster, clusterIndex) => (
        <g
          key={clusterIndex}
          className={active === clusterIndex ? 'is-on' : ''}
          stroke="currentColor"
          strokeOpacity={active === null ? 0.34 : active === clusterIndex ? 0.95 : 0.1}
        >
          {cluster.map(([x, y], index) => (
            <g key={index}>
              <line x1={center.x} y1={center.y} x2={x} y2={y} />
              <circle cx={x} cy={y} r="4.5" fill="currentColor" stroke="none" />
            </g>
          ))}
          {links.map(([a, b], index) => (
            <line
              key={`l${index}`}
              x1={cluster[a][0]}
              y1={cluster[a][1]}
              x2={cluster[b][0]}
              y2={cluster[b][1]}
              strokeOpacity="0.75"
            />
          ))}
        </g>
      ))}

      <g className="webgraphic__thread">
        <path
          data-web-path
          d="M450 30C452 140 448 230 450 340M450 380c2 100-2 190 0 310"
          stroke="currentColor"
          strokeOpacity="0.5"
        />
      </g>
    </svg>
  );
}

export default function Powers() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="section powers" id="powers">
      <div className="shell">
        <SectionHead
          number="04"
          eyebrow="Capabilities"
          lines={['What I Do']}
          tag="04 / 06"
          light
        />

        <div className="powers__board reveal">
          <span className="powers__pagenum">PAGE 04 / DIAGRAM</span>
          <WebGraphic active={active} />

          <div className="powers__badge" aria-hidden="true">
            <SpiderEmblem />
            <span>
              SPIDER
              <br />
              SENSE
            </span>
          </div>

          <div className="powers__cards">
            {skillGroups.map((group, index) => {
              const Icon = icons[group.icon as keyof typeof icons];
              return (
                <article
                  className={`power power--${index}`}
                  key={group.title}
                  onMouseEnter={() => setActive(index)}
                  onMouseLeave={() => setActive(null)}
                >
                  <WebPattern className="power__web" rings={4} />
                  <WebPattern className="power__web power__web--tr" rings={3} />

                  <header className="power__head">
                    <span className="power__icon">
                      <Icon />
                    </span>
                    <span className="power__no">0{index + 1}</span>
                  </header>
                  <h3>{group.title}</h3>
                  <p className="power__sub">{group.subtitle}</p>
                  <ul>
                    {group.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>

        <div className="platforms platforms--powers">
          <div className="platforms__head reveal">
            <span className="platforms__k">Training grounds</span>
            <span className="platforms__rule" aria-hidden="true" />
            <span className="platforms__count">03 platforms</span>
          </div>

          {platforms.map((platform, index) => (
            <a
              className="platform reveal"
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="PROFILE"
            >
              <WebPattern className="platform__web" rings={4} />
              <span className="platform__index">0{index + 1}</span>
              <span className="platform__top">
                <b>{platform.name}</b>
                <Arrow />
              </span>
              <span className="platform__handle">@{platform.handle}</span>
              <span className="platform__note">{platform.note}</span>
              <span className="platform__cta">Open profile <Arrow /></span>
            </a>
          ))}
        </div>
      </div>

    </section>
  );
}
