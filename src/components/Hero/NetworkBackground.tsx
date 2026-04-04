import { useRef, useMemo } from "react";
import { motion } from "framer-motion";

interface Node {
  id: string;
  x: number;
  y: number;
  delay: number;
  color: string;
}

interface Connection {
  id: string;
  from: Node;
  to: Node;
  delay: number;
}

const FIXED_WIDTH = 1920;
const FIXED_HEIGHT = 1080;

// Seeded pseudo-random so values are stable across renders (no Math.random() in render)
function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

const nodes: Node[] = [
  { id: "na1", x: 28, y: 40, delay: 0,   color: "#9CD5F0" },
  { id: "na2", x: 22, y: 35, delay: 0.3, color: "#E76856" },
  { id: "na3", x: 22, y: 45, delay: 0.6, color: "#9CD5F0" },
  { id: "eu1", x: 48, y: 40, delay: 0.2, color: "#9CD5F0" },
  { id: "eu2", x: 40, y: 32, delay: 0.5, color: "#9CD5F0" },
  { id: "eu3", x: 50, y: 35, delay: 0.8, color: "#9CD5F0" },
  { id: "as1", x: 73, y: 35, delay: 0.4, color: "#E76856" },
  { id: "as2", x: 65, y: 35, delay: 0.7, color: "#9CD5F0" },
  { id: "as3", x: 71, y: 47, delay: 1.0, color: "#E76856" },
  { id: "sa1", x: 30, y: 63, delay: 0.9, color: "#9CD5F0" },
  { id: "sa2", x: 32, y: 68, delay: 1.2, color: "#E76856" },
  { id: "af1", x: 52, y: 55, delay: 1.1, color: "#9CD5F0" },
  { id: "af2", x: 55, y: 62, delay: 1.4, color: "#E76856" },
  { id: "au1", x: 77, y: 70, delay: 1.3, color: "#9CD5F0" },
  { id: "hub1", x: 35, y: 70, delay: 0.5, color: "#9CD5F0" },
  { id: "hub2", x: 65, y: 40, delay: 0.8, color: "#E76856" },
];

const connections: Connection[] = [
  { id: "c1",  from: nodes[0],  to: nodes[3],  delay: 0   },
  { id: "c2",  from: nodes[1],  to: nodes[4],  delay: 0.3 },
  { id: "c5",  from: nodes[3],  to: nodes[6],  delay: 0.4 },
  { id: "c6",  from: nodes[4],  to: nodes[7],  delay: 0.7 },
  { id: "c7",  from: nodes[2],  to: nodes[9],  delay: 1.0 },
  { id: "c8",  from: nodes[14], to: nodes[10], delay: 1.2 },
  { id: "c9",  from: nodes[4],  to: nodes[11], delay: 0.8 },
  { id: "c10", from: nodes[5],  to: nodes[12], delay: 1.1 },
  { id: "c11", from: nodes[8],  to: nodes[13], delay: 1.3 },
  { id: "c12", from: nodes[14], to: nodes[3],  delay: 0.5 },
  { id: "c13", from: nodes[14], to: nodes[0],  delay: 0.6 },
  { id: "c14", from: nodes[15], to: nodes[6],  delay: 0.9 },
  { id: "c15", from: nodes[15], to: nodes[4],  delay: 0.7 },
  { id: "c16", from: nodes[14], to: nodes[15], delay: 1.0 },
  { id: "c17", from: nodes[12], to: nodes[13], delay: 1.0 },
];

function createCurvedPath(x1: number, y1: number, x2: number, y2: number) {
  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const distance = Math.sqrt(dx * dx + dy * dy);
  const curvature = distance * 0.15;
  const perpX = -dy / distance;
  const perpY = -dx / distance;
  const controlX = midX + perpX * curvature;
  const controlY = midY + perpY * curvature;
  return `M ${x1} ${y1} Q ${controlX} ${controlY} ${x2} ${y2}`;
}

// --- CSS-animated particles (no Framer Motion) ---
// Generated once at module level so the style tag is stable.
const PARTICLE_COUNT = 40;
const rng = seededRandom(42);
const particleData = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
  cx: rng() * 100,
  cy: rng() * 100,
  r: rng() * 1.5 + 0.5,
  fill: i % 3 === 0 ? "#E76856" : "#9CD5F0",
  duration: 3 + rng() * 2,
  delay: rng() * 2,
}));

// Build a single <style> string for all particle keyframes + rules.
// Each particle gets its own named keyframe so delay/duration differ.
const particleCSS = particleData
  .map(
    (p, i) => `
@keyframes p${i} {
  0%,100% { transform: translateY(0);   opacity: 0.4; }
  50%      { transform: translateY(-20px); opacity: 0.7; }
}
.nbp${i} {
  animation: p${i} ${p.duration.toFixed(2)}s ${p.delay.toFixed(2)}s ease-in-out infinite;
}`
  )
  .join("");

const NetworkBackground = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  // Path data memoized — avoids recomputing on every render
  const connPaths = useMemo(
    () =>
      connections.map((conn) => {
        const x1 = (conn.from.x / 100) * FIXED_WIDTH;
        const y1 = (conn.from.y / 100) * FIXED_HEIGHT;
        const x2 = (conn.to.x / 100) * FIXED_WIDTH;
        const y2 = (conn.to.y / 100) * FIXED_HEIGHT;
        return { conn, pathData: createCurvedPath(x1, y1, x2, y2) };
      }),
    []
  );

  const PATH_LENGTH = 500;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Inject particle CSS once */}
      <style>{particleCSS}</style>

      <svg
        ref={svgRef}
        className="w-full h-full"
        viewBox={`0 0 ${FIXED_WIDTH} ${FIXED_HEIGHT}`}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <radialGradient id="nodeGradientCyan">
            <stop offset="0%"   stopColor="#00F0FF" stopOpacity="1" />
            <stop offset="50%"  stopColor="#00F0FF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00F0FF" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="nodeGradientPink">
            <stop offset="0%"   stopColor="#FF3D7F" stopOpacity="1" />
            <stop offset="50%"  stopColor="#FF3D7F" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FF3D7F" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="streakGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#00F0FF" stopOpacity="0" />
            <stop offset="50%"  stopColor="#00F0FF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00F0FF" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Subtle background grid */}
        <g opacity="0.03">
          {Array.from({ length: 20 }).map((_, i) => (
            <line
              key={`v-${i}`}
              x1={`${(i / 20) * 100}%`} y1="0"
              x2={`${(i / 20) * 100}%`} y2="100%"
              stroke="rgba(0,255,255,0.3)" strokeWidth="0.5"
            />
          ))}
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={`h-${i}`}
              x1="0" y1={`${(i / 12) * 100}%`}
              x2="100%" y2={`${(i / 12) * 100}%`}
              stroke="rgba(0,255,255,0.3)" strokeWidth="0.5"
            />
          ))}
        </g>

        {/* Connection lines — Framer Motion is fine here (only 16 paths) */}
        {connPaths.map(({ conn, pathData }) => (
          <g key={conn.id}>
            {/* Glow layer */}
            <motion.path
              d={pathData}
              stroke="#00F0FF" strokeWidth="3" strokeLinecap="round"
              fill="none" opacity="0.15" filter="url(#glow)"
              initial={{ strokeDasharray: PATH_LENGTH, strokeDashoffset: PATH_LENGTH }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 2, delay: conn.delay, ease: "easeInOut", repeat: Infinity, repeatDelay: 3 }}
            />
            {/* Main line */}
            <motion.path
              d={pathData}
              stroke="#9CD5F0" strokeWidth="1.5" strokeLinecap="round"
              fill="none" opacity="0.6"
              initial={{ strokeDasharray: PATH_LENGTH, strokeDashoffset: PATH_LENGTH }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 2, delay: conn.delay, ease: "easeInOut", repeat: Infinity, repeatDelay: 3 }}
            />
            {/* Traveling pulse */}
            <motion.circle
              r="3" fill="#00F0FF" filter="url(#glow)"
              initial={{ offsetDistance: "0%", opacity: 0 }}
              animate={{ offsetDistance: "100%", opacity: [0, 1, 1, 0] }}
              transition={{ duration: 2, delay: conn.delay + 0.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 3 }}
              style={{ offsetPath: `path('${pathData}')`, offsetRotate: "0deg" }}
            />
          </g>
        ))}

        {/* Nodes — Framer Motion fine here (only 16) */}
        {nodes.map((node) => {
          const cx = (node.x / 100) * FIXED_WIDTH;
          const cy = (node.y / 100) * FIXED_HEIGHT;
          const gradientId = node.color === "#9CD5F0" ? "nodeGradientCyan" : "nodeGradientPink";

          return (
            <g key={node.id}>
              <motion.circle
                cx={cx} cy={cy} r="8"
                fill="none" stroke={node.color} strokeWidth="1.5"
                initial={{ scale: 1, opacity: 0.5 }}
                animate={{ scale: 2.5, opacity: 0 }}
                transition={{ duration: 1.5, delay: node.delay, ease: "easeOut", repeat: Infinity, repeatDelay: 1 }}
                style={{ transformOrigin: `${cx}px ${cy}px` }}
              />
              <motion.circle
                cx={cx} cy={cy} r="12"
                fill={`url(#${gradientId})`}
                initial={{ opacity: 0.3 }}
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 1.5, delay: node.delay, ease: "easeInOut", repeat: Infinity }}
              />
              <motion.circle
                cx={cx} cy={cy} r="4"
                fill={node.color}
                initial={{ scale: 1, opacity: 0.8 }}
                animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 1.5, delay: node.delay, ease: "easeInOut", repeat: Infinity }}
                style={{ transformOrigin: `${cx}px ${cy}px` }}
              />
              <circle cx={cx} cy={cy} r="1.5" fill="white" opacity="0.9" />
            </g>
          );
        })}

        {/*
          Particles — pure CSS, no Framer Motion.
          Each <circle> gets a pre-generated class that drives its keyframe.
          Zero JS animation overhead at runtime.
        */}
        {particleData.map((p, i) => (
          <circle
            key={`particle-${i}`}
            className={`nbp${i}`}
            cx={`${p.cx}%`}
            cy={`${p.cy}%`}
            r={p.r}
            fill={p.fill}
            opacity="0.4"
          />
        ))}

        {/* Horizontal light streak */}
        <motion.line
          x1="0" y1="25%" x2="100%" y2="25%"
          stroke="url(#streakGradient)" strokeWidth="1" opacity="0.15"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 8, ease: "linear", repeat: Infinity }}
        />
      </svg>
    </div>
  );
};

export default NetworkBackground;