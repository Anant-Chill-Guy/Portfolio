export function Split({ text }: { text: string }) {
  return (
    <>
      {Array.from(text).map((char, index) => (
        <span className="ch" key={`${char}-${index}`}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </>
  );
}

interface SectionHeadProps {
  number: string;
  eyebrow: string;
  lines: string[];
  note?: string;
  light?: boolean;
  
  tag?: string;
}

export default function SectionHead({ number, eyebrow, lines, note, light, tag }: SectionHeadProps) {
  return (
    <header className={`sec-head ${light ? 'sec-head--light' : ''}`}>
      <div className="sec-head__top">
        <span className="sec-head__num">{number}</span>
        <span className="sec-head__eyebrow">{eyebrow}</span>
        <span className="sec-head__rule" aria-hidden="true" />
        <span className="sec-head__tag">{tag ?? `Issue ${number}`}</span>
      </div>

      <div className="sec-head__main">
        <div className="sec-head__title">
          <h2 className="sec-title" data-split data-glitch>
          {lines.map((line, index) => (
            <span className={`line${index === lines.length - 1 ? ' line--accent' : ''}`} key={index}>
              <Split text={line} />
            </span>
            ))}
          </h2>

          <span className="sec-head__underline" data-line aria-hidden="true" />
        </div>

        {note && (
          <p className="sec-note" data-fade>
            <span className="sec-note__mark" aria-hidden="true" />
            {note}
          </p>
        )}
      </div>

      <span className="sec-head__ghost" aria-hidden="true" data-parallax data-speed="0.08">
        {number}
      </span>
    </header>
  );
}
