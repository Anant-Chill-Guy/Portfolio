export default function WebDivider() {
  return (
    <div className="webdivider" aria-hidden="true">
      <span className="webdivider__slash webdivider__slash--a" data-scroll-x="-1" />
      <span className="webdivider__slash webdivider__slash--b" data-scroll-x="1" />
      <span className="webdivider__slash webdivider__slash--c" data-scroll-x="-1" />
      <svg viewBox="0 0 1200 90" preserveAspectRatio="none" fill="none">
        <path
          data-web-path
          d="M0 46C140 6 250 84 390 46S640 8 760 46s240 38 440 0"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          data-web-path
          d="M0 48c180-28 300 30 460 0s340-30 500 0 180 18 240 0"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.45"
        />
        <path d="M598 36l4 10 10 4-10 4-4 10-4-10-10-4 10-4 4-10Z" fill="currentColor" opacity="0.9" />
      </svg>
    </div>
  );
}
