interface MarqueeProps {
  items: string[];
  className?: string;
  speed?: number;
}

export default function Marquee({ items, className = '', speed = 38 }: MarqueeProps) {
  const row = (
    <div className="marquee__row" aria-hidden="true">
      {items.map((item, i) => (
        <span key={`${item}-${i}`}>
          {item}
          <i>◆</i>
        </span>
      ))}
    </div>
  );

  return (
    <div className={`marquee ${className}`} style={{ ['--speed' as string]: `${speed}s` }}>
      <div className="marquee__track">
        {row}
        {row}
      </div>
    </div>
  );
}
