export function CityBackdrop() {
  let seed = 27;
  const rand = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 0x100000000;
  };

  const buildings: { x: number; w: number; h: number; lit: [number, number][] }[] = [];
  let x = -10;
  for (let i = 0; i < 34; i++) {
    const w = 30 + rand() * 58;
    const h = 30 + rand() * (i % 6 === 0 ? 210 : 120);
    const lit: [number, number][] = [];
    for (let c = 0; c < Math.floor(w / 12); c++) {
      for (let r = 0; r < Math.floor(h / 16); r++) {
        if (rand() > 0.72) lit.push([8 + c * 12, 10 + r * 16]);
      }
    }
    buildings.push({ x, w, h, lit });
    x += w + 3 + rand() * 12;
    if (x > 1500) break;
  }

  return (
    <svg viewBox="0 0 1440 320" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <g fill="#07060c">
        {buildings.map((b, i) => (
          <rect key={i} x={b.x} y={320 - b.h} width={b.w} height={b.h} />
        ))}
      </g>
      <g fill="#ffc76b">
        {buildings.flatMap((b, i) =>
          b.lit.map(([wx, wy], j) => (
            <rect
              key={`${i}-${j}`}
              x={b.x + wx}
              y={320 - b.h + wy}
              width="3"
              height="4"
              opacity={0.25 + rand() * 0.55}
            />
          )),
        )}
      </g>
      <g fill="#e62429">
        {buildings.slice(0, 8).map((b, i) => (
          <rect key={`t-${i}`} x={b.x + b.w / 2} y={320 - b.h - 10} width="2" height="10" opacity="0.5" />
        ))}
      </g>
    </svg>
  );
}

export default CityBackdrop;
