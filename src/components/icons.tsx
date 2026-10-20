interface IconProps {
  className?: string;
}

export function SpiderMark({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <ellipse cx="32" cy="36" rx="6.5" ry="10" fill="currentColor" />
      <circle cx="32" cy="22.5" r="4.6" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
        <path d="M27 28C20 24 17 16 9 13" />
        <path d="M26 32C18 31 13 25 5 24" />
        <path d="M27 37C19 40 14 46 7 47" />
        <path d="M29 41C23 48 21 54 15 58" />
        <path d="M37 28C44 24 47 16 55 13" />
        <path d="M38 32C46 31 51 25 59 24" />
        <path d="M37 37C45 40 50 46 57 47" />
        <path d="M35 41C41 48 43 54 49 58" />
      </g>
    </svg>
  );
}

export function WebIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.4" opacity=".45" />
      <circle cx="16" cy="16" r="7.5" stroke="currentColor" strokeWidth="1.4" opacity=".7" />
      <path d="M16 2v28M4 8l24 16M28 8L4 24M2 16h28" stroke="currentColor" strokeWidth="1.2" opacity=".55" />
      <circle cx="16" cy="16" r="2.2" fill="currentColor" />
    </svg>
  );
}

export function NetworkIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="6" r="3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="6" cy="24" r="3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="26" cy="24" r="3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16" cy="16" r="2.4" fill="currentColor" />
      <path d="M16 9v5M14 17l-6 4M18 17l6 4M9 24h14" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function CodeIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M11 9 4 16l7 7M21 9l7 7-7 7M18 6l-4 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArsenalIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M16 3l11 4v7c0 7-4.6 12-11 15C9.6 26 5 21 5 14V7l11-4Z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M11 15h10M16 10v10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function Arrow({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 19 19 5M8 5h11v11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}
