interface ArtProps {
  className?: string;
}

export function SpiderEmblem({ className }: ArtProps) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="5.2" strokeLinecap="round">
        <path d="M54 44C40 36 34 20 18 13" />
        <path d="M53 54C34 48 24 30 8 26" />
        <path d="M53 63C32 64 20 80 6 84" />
        <path d="M56 72C40 82 36 98 24 106" />
        <path d="M66 44C80 36 86 20 102 13" />
        <path d="M67 54C86 48 96 30 112 26" />
        <path d="M67 63C88 64 100 80 114 84" />
        <path d="M64 72C80 82 84 98 96 106" />
      </g>
      <path
        d="M60 30c8 4 11 11 11 19 0 12-5 21-11 34-6-13-11-22-11-34 0-8 3-15 11-19Z"
        fill="currentColor"
      />
      <circle cx="60" cy="24" r="7" fill="currentColor" />
      <path d="M60 44v28M52 58l8 8 8-8" stroke="#0a0810" strokeWidth="1.6" opacity="0.5" />
    </svg>
  );
}

export function SpiderSwing({ className }: ArtProps) {
  return (
    <svg className={className} viewBox="0 0 240 320" fill="none" aria-hidden="true">
      <path d="M120 0v96" stroke="currentColor" strokeWidth="1.4" opacity="0.5" />
      <g stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M104 104c-16-26-46-30-62-14" />
        <path d="M100 122c-30-8-48 4-58 22" />
        <path d="M104 146c-26 8-38 28-36 48" />
        <path d="M116 168c-14 20-16 42-8 58" />
        <path d="M136 104c16-26 46-30 62-14" />
        <path d="M140 122c30-8 48 4 58 22" />
        <path d="M136 146c26 8 38 28 36 48" />
        <path d="M124 168c14 20 16 42 8 58" />
      </g>
      <ellipse cx="120" cy="150" rx="16" ry="30" fill="currentColor" />
      <circle cx="120" cy="108" r="15" fill="currentColor" />
      <g fill="currentColor">
        <path d="M108 102c4-8 10-9 13-4-3 4-8 6-13 4Z" />
        <path d="M132 102c-4-8-10-9-13-4 3 4 8 6 13 4Z" />
      </g>
    </svg>
  );
}

export function WebPattern({ className, rings = 6 }: ArtProps & { rings?: number }) {
  const spokes = 18;
  return (
    <svg className={className} viewBox="0 0 400 400" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1">
        {Array.from({ length: spokes }, (_, i) => {
          const a = (i / spokes) * Math.PI * 2;
          return <path key={`s${i}`} className="web-path" pathLength={1} d={`M200 200L${200 + Math.cos(a) * 198} ${200 + Math.sin(a) * 198}`} />;
        })}
        {Array.from({ length: rings }, (_, ring) => {
          const r = 30 + ring * (168 / rings);
          return (
            <path
              key={`r${ring}`}
              className="web-path"
              pathLength={1}
              d={Array.from({ length: spokes + 1 }, (_, i) => {
                const a = (i / spokes) * Math.PI * 2;
                const x = 200 + Math.cos(a) * r;
                const y = 200 + Math.sin(a) * r;
                return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`;
              }).join('')}
            />
          );
        })}
      </g>
    </svg>
  );
}
