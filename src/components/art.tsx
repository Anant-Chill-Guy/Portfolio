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

export function HangingSpider({ className }: ArtProps) {
  return (
    <svg className={className} viewBox="0 0 160 380" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="hsp-red" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ff4438" stopOpacity="0.95" />
          <stop offset="0.4" stopColor="#c2192b" stopOpacity="0.5" />
          <stop offset="1" stopColor="#c2192b" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="hsp-blue" x1="1" y1="0" x2="0" y2="0">
          <stop offset="0" stopColor="#4b78ff" stopOpacity="0.95" />
          <stop offset="0.45" stopColor="#223f9e" stopOpacity="0.45" />
          <stop offset="1" stopColor="#223f9e" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="hsp-body" x1="0.2" y1="0" x2="0.8" y2="1">
          <stop offset="0" stopColor="#421326" />
          <stop offset="0.45" stopColor="#210d1b" />
          <stop offset="1" stopColor="#0b0710" />
        </linearGradient>
        <radialGradient id="hsp-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#ff2f3b" stopOpacity="0.5" />
          <stop offset="0.6" stopColor="#ff2f3b" stopOpacity="0.12" />
          <stop offset="1" stopColor="#ff2f3b" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hsp-lens" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fffdf6" />
          <stop offset="0.75" stopColor="#f1ebd8" />
          <stop offset="1" stopColor="#b9b09a" />
        </linearGradient>
      </defs>

      <path d="M80 0v72" stroke="currentColor" strokeWidth="1.3" opacity="0.55" />
      <circle cx="80" cy="326" r="92" fill="url(#hsp-glow)" opacity="0.65" />

      <g className="hs-sway">
        
        <path
          d="M78 72c-10 0-18-4-21-10 6-4 15-4 21-1 6-3 15-3 21 1-3 6-11 10-21 10Z"
          fill="#08060d"
          stroke="#1a0b16"
          strokeWidth="3"
        />

        
        <path
          d="M75 74c-14 4-30 12-37 26-4 9-3 17 2 23 8-8 17-15 27-20 7-3 13-4 18-4Z"
          fill="url(#hsp-body)"
          stroke="#0a0710"
          strokeWidth="3"
        />
        <path
          d="M85 74c14 4 30 12 37 26 4 9 3 17-2 23-8-8-17-15-27-20-7-3-13-4-18-4Z"
          fill="url(#hsp-body)"
          stroke="#0a0710"
          strokeWidth="3"
        />

        
        <path
          d="M66 120c-4 12-2 22 4 31h20c6-9 8-19 4-31-9 3-19 3-28 0Z"
          fill="url(#hsp-body)"
          stroke="#0a0710"
          strokeWidth="3"
        />

        
        <path
          d="M66 148c-10 14-14 32-13 50 1 14 5 24 13 30h28c8-6 12-16 13-30 1-18-3-36-13-50-9 4-19 4-28 0Z"
          fill="url(#hsp-body)"
          stroke="#0a0710"
          strokeWidth="3.2"
        />

        
        <path
          d="M63 198c-9 16-13 34-10 49 2 9 7 15 13 17l4-5c-5-6-7-14-6-23 2-12 6-22 12-31Z"
          fill="url(#hsp-body)"
          stroke="#0a0710"
          strokeWidth="2.8"
        />
        
        <path
          d="M97 198c9 16 13 34 10 49-2 9-7 15-13 17l-4-5c5-6 7-14 6-23-2-12-6-22-12-31Z"
          fill="url(#hsp-body)"
          stroke="#0a0710"
          strokeWidth="2.8"
        />

        
        <path d="M44 258c-3 7-2 14 4 18 4 2 8 1 11-2l-3-6c-3 1-6-1-6-5Z" fill="#08060d" />
        <path d="M116 258c3 7 2 14-4 18-4 2-8 1-11-2l3-6c3 1 6-1 6-5Z" fill="#08060d" />

        
        <path d="M72 224h16v24H72Z" fill="#0b0610" />
        <ellipse cx="80" cy="282" rx="24" ry="28" fill="url(#hsp-body)" stroke="#0a0710" strokeWidth="3.2" />

        
        <g stroke="#d92731" strokeWidth="0.7" opacity="0.35" fill="none">
          <path d="M80 256v50M80 262l-14 7M80 262l14 7M80 274l-18 6M80 274l18 6M80 288l-14 8M80 288l14 8" />
          <path d="M58 268c14 6 30 6 44 0M56 282c16 7 32 7 48 0" />
          <path d="M70 234c-8 12-10 28-6 44M90 234c8 12 10 28 6 44" />
        </g>

        
        <path
          d="M62 278c1-9 9-13 16-10 4 6 1 14-6 16-7 2-11-1-10-6Z"
          fill="url(#hsp-lens)"
          stroke="#050308"
          strokeWidth="2.4"
        />
        <path
          d="M98 278c-1-9-9-13-16-10-4 6-1 14 6 16 7 2 11-1 10-6Z"
          fill="url(#hsp-lens)"
          stroke="#050308"
          strokeWidth="2.4"
        />

        
        <path
          d="M66 148c-10 14-14 32-13 50 1 14 5 24 13 30M63 198c-9 16-13 34-10 49M75 74c-14 4-30 12-37 26M66 120c-4 12-2 22 4 31"
          stroke="url(#hsp-red)"
          strokeWidth="4.6"
          strokeLinecap="round"
        />
        <path
          d="M94 148c10 14 14 32 13 50-1 14-5 24-13 30M97 198c9 16 13 34 10 49M85 74c14 4 30 12 37 26M94 120c4 12 2 22-4 31"
          stroke="url(#hsp-blue)"
          strokeWidth="4.6"
          strokeLinecap="round"
        />
        <path
          d="M58 270c-4 12-2 26 6 36M102 270c4 12 2 26-6 36"
          stroke="url(#hsp-red)"
          strokeWidth="2.4"
          opacity="0.8"
        />
      </g>
    </svg>
  );
}
