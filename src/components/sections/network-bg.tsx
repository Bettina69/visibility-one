function generateNetwork() {
  let seed = 7;
  const rnd = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  const nodes: { x: number; y: number; depth: number }[] = [];
  const W = 1000;
  const H = 700;
  const cols = 10;
  const rows = 7;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = (c / (cols - 1)) * W + (rnd() - 0.5) * 70;
      const y = (r / (rows - 1)) * H + (rnd() - 0.5) * 70;
      nodes.push({ x, y, depth: rnd() });
    }
  }

  const edges: [number, number][] = [];
  const seen = new Set<string>();
  nodes.forEach((a, i) => {
    const dists = nodes
      .map((b, j) => ({ j, d: Math.hypot(a.x - b.x, a.y - b.y) }))
      .filter((o) => o.j !== i)
      .sort((p, q) => p.d - q.d)
      .slice(0, 4);
    dists.forEach(({ j }) => {
      const key = i < j ? `${i}-${j}` : `${j}-${i}`;
      if (seen.has(key)) return;
      seen.add(key);
      edges.push([i, j]);
    });
  });

  return { nodes, edges };
}

const { nodes, edges } = generateNetwork();

export function NetworkBg({ side = "right" }: { side?: "left" | "right" }) {
  return (
    <svg
      className={`network-bg network-bg--${side}`}
      viewBox="0 0 1000 700"
      preserveAspectRatio={side === "left" ? "xMinYMid slice" : "xMaxYMid slice"}
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id={`net-fade-${side}`}
          x1={side === "left" ? "1" : "0"}
          x2={side === "left" ? "0" : "1"}
          y1="0"
          y2="0"
        >
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0.5" />
          <stop offset="1" stopColor="#fff" stopOpacity="1" />
        </linearGradient>
        <mask id={`net-mask-${side}`}>
          <rect width="1000" height="700" fill={`url(#net-fade-${side})`} />
        </mask>
      </defs>
      <g mask={`url(#net-mask-${side})`}>
        {edges.map(([i, j], k) => {
          const a = nodes[i];
          const b = nodes[j];
          const op = 0.5 + Math.min(a.depth, b.depth) * 0.5;
          return (
            <line
              key={k}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="#000"
              strokeWidth="1"
              opacity={op}
            />
          );
        })}
        {nodes.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={2.4 + p.depth * 2}
            fill="#000"
            opacity={0.7 + p.depth * 0.3}
          />
        ))}
      </g>
    </svg>
  );
}
