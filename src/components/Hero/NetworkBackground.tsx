import { useRef } from "react";
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

const NetworkBackground = () => {
  const svgRef = useRef<SVGSVGElement>(null);

    const FIXED_WIDTH = 1920;
    const FIXED_HEIGHT = 1080;

  // Generate nodes in a global network pattern
  const nodes: Node[] = [
    // North America cluster
    { id: "na1", x: 28, y: 40, delay: 0, color: "#9CD5F0" },
    { id: "na2", x: 22, y: 35, delay: 0.3, color: "#E76856" },
    { id: "na3", x: 22, y: 45, delay: 0.6, color: "#9CD5F0" },
    
    // Europe cluster
    { id: "eu1", x: 48, y: 40, delay: 0.2, color: "#9CD5F0" },
    { id: "eu2", x: 40, y: 32, delay: 0.5, color: "#9CD5F0" },
    { id: "eu3", x: 50, y: 35, delay: 0.8, color: "#9CD5F0" },
    
    // Asia cluster
    { id: "as1", x: 73, y: 35, delay: 0.4, color: "#E76856" },
    { id: "as2", x: 65, y: 35, delay: 0.7, color: "#9CD5F0" },
    { id: "as3", x: 71, y: 47, delay: 1.0, color: "#E76856" },
    
    // South America
    { id: "sa1", x: 30, y: 63, delay: 0.9, color: "#9CD5F0" },
    { id: "sa2", x: 32, y: 68, delay: 1.2, color: "#E76856" },
    
    // Africa
    { id: "af1", x: 52, y: 55, delay: 1.1, color: "#9CD5F0" },
    { id: "af2", x: 55, y: 62, delay: 1.4, color: "#E76856" },
    
    // Australia
    { id: "au1", x: 77, y: 70, delay: 1.3, color: "#9CD5F0" },
    
    // Additional hub nodes
    { id: "hub1", x: 35, y: 70, delay: 0.5, color: "#9CD5F0" },
    { id: "hub2", x: 65, y: 40, delay: 0.8, color: "#E76856" },
  ];

  // Define connections
  const connections: Connection[] = [
    // Trans-Atlantic
    { id: "c1", from: nodes[0], to: nodes[3], delay: 0 },
    { id: "c2", from: nodes[1], to: nodes[4], delay: 0.3 },
    
    // Europe-Asia
    { id: "c5", from: nodes[3], to: nodes[6], delay: 0.4 },
    { id: "c6", from: nodes[4], to: nodes[7], delay: 0.7 },
    
    // North-South America
    { id: "c7", from: nodes[2], to: nodes[9], delay: 1.0 },
    { id: "c8", from: nodes[14], to: nodes[10], delay: 1.2 },
    
    // Europe-Africa
    { id: "c9", from: nodes[4], to: nodes[11], delay: 0.8 },
    { id: "c10", from: nodes[5], to: nodes[12], delay: 1.1 },
    
    // Asia-Australia
    { id: "c11", from: nodes[8], to: nodes[13], delay: 1.3 },
    
    // Hub connections
    { id: "c12", from: nodes[14], to: nodes[3], delay: 0.5 },
    { id: "c13", from: nodes[14], to: nodes[0], delay: 0.6 },
    { id: "c14", from: nodes[15], to: nodes[6], delay: 0.9 },
    { id: "c15", from: nodes[15], to: nodes[4], delay: 0.7 },
    { id: "c16", from: nodes[14], to: nodes[15], delay: 1.0 },
    { id: "c17", from: nodes[12], to: nodes[13], delay: 1.0 },
  ];

  // Helper function to create curved path with quadratic bezier
  const createCurvedPath = (x1: number, y1: number, x2: number, y2: number) => {
    // Calculate midpoint
    const midX = (x1 + x2) / 2;
    const midY = (y1 + y2) / 2;
    
    // Calculate perpendicular offset for curve control point
    const dx = x2 - x1;
    const dy = y2 - y1;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    // Curve intensity based on distance (longer connections = more curve)
    const curvature = distance * 0.15;
    
    // Perpendicular vector
    const perpX = -dy / distance;
    const perpY = -dx / distance;
    
    // Control point offset from midpoint
    const controlX = midX + perpX * curvature;
    const controlY = midY + perpY * curvature;
    
    return `M ${x1} ${y1} Q ${controlX} ${controlY} ${x2} ${y2}`;
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        ref={svgRef}
        className="w-full h-full"
        viewBox={`0 0 ${FIXED_WIDTH} ${FIXED_HEIGHT}`}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Glow filter for lines */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Radial gradient for nodes */}
          <radialGradient id="nodeGradientCyan">
            <stop offset="0%" stopColor="#00F0FF" stopOpacity="1" />
            <stop offset="50%" stopColor="#00F0FF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00F0FF" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="nodeGradientPink">
            <stop offset="0%" stopColor="#FF3D7F" stopOpacity="1" />
            <stop offset="50%" stopColor="#FF3D7F" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FF3D7F" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="streakGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00F0FF" stopOpacity="0" />
            <stop offset="50%" stopColor="#00F0FF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00F0FF" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Background subtle grid */}
        <g opacity="0.03">
          {Array.from({ length: 20 }).map((_, i) => (
            <line
              key={`v-${i}`}
              x1={`${(i / 20) * 100}%`}
              y1="0"
              x2={`${(i / 20) * 100}%`}
              y2="100%"
              stroke="rgba(0,255,255,0.3)"
              strokeWidth="0.5"
            />
          ))}
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={`h-${i}`}
              x1="0"
              y1={`${(i / 12) * 100}%`}
              x2="100%"
              y2={`${(i / 12) * 100}%`}
              stroke="rgba(0,255,255,0.3)"
              strokeWidth="0.5"
            />
          ))}
        </g>

        {/* Animated curved connection lines */}
        {connections.map((conn) => {
          const x1 = (conn.from.x / 100) * FIXED_WIDTH;
          const y1 = (conn.from.y / 100) * FIXED_HEIGHT;
          const x2 = (conn.to.x / 100) * FIXED_WIDTH;
          const y2 = (conn.to.y / 100) * FIXED_HEIGHT;

          const pathData = createCurvedPath(x1, y1, x2, y2);
          const pathLength = 500; // Approximate length, will be calculated properly by browser

          return (
            <g key={conn.id}>
              {/* Glow layer */}
              <motion.path
                d={pathData}
                stroke="#00F0FF"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
                opacity="0.15"
                filter="url(#glow)"
                initial={{ strokeDasharray: pathLength, strokeDashoffset: pathLength }}
                animate={{ strokeDashoffset: 0 }}
                transition={{
                  duration: 2,
                  delay: conn.delay,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              />
              
              {/* Main line */}
              <motion.path
                d={pathData}
                stroke="#9CD5F0"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
                opacity="0.6"
                initial={{ strokeDasharray: pathLength, strokeDashoffset: pathLength }}
                animate={{ strokeDashoffset: 0 }}
                transition={{
                  duration: 2,
                  delay: conn.delay,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              />

              {/* Traveling pulse along curved path */}
              <motion.circle
                r="3"
                fill="#00F0FF"
                filter="url(#glow)"
                initial={{ 
                  offsetDistance: "0%",
                  opacity: 0
                }}
                animate={{ 
                  offsetDistance: "100%",
                  opacity: [0, 1, 1, 0]
                }}
                transition={{
                  duration: 2,
                  delay: conn.delay + 0.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
                style={{
                  offsetPath: `path('${pathData}')`,
                  offsetRotate: "0deg",
                }}
              />
            </g>
          );
        })}

        {/* Nodes with pulse animation */}
        {nodes.map((node) => {
          const cx = (node.x / 100) * FIXED_WIDTH;
          const cy = (node.y / 100) * FIXED_HEIGHT;
          const gradientId = node.color === "#00F0FF" ? "nodeGradientCyan" : "nodeGradientPink";

          return (
            <g key={node.id}>
              {/* Expanding ripple ring */}
              <motion.circle
                cx={cx}
                cy={cy}
                r="8"
                fill="none"
                stroke={node.color}
                strokeWidth="1.5"
                initial={{ scale: 1, opacity: 0.5 }}
                animate={{ scale: 2.5, opacity: 0 }}
                transition={{
                  duration: 1.5,
                  delay: node.delay,
                  ease: "easeOut",
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
                style={{ transformOrigin: `${cx}px ${cy}px` }}
              />

              {/* Glow halo */}
              <motion.circle
                cx={cx}
                cy={cy}
                r="12"
                fill={`url(#${gradientId})`}
                initial={{ opacity: 0.3 }}
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{
                  duration: 1.5,
                  delay: node.delay,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              />

              {/* Main node */}
              <motion.circle
                cx={cx}
                cy={cy}
                r="4"
                fill={node.color}
                initial={{ scale: 1, opacity: 0.8 }}
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 1.5,
                  delay: node.delay,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                style={{ transformOrigin: `${cx}px ${cy}px` }}
              />

              {/* Core highlight */}
              <circle
                cx={cx}
                cy={cy}
                r="1.5"
                fill="white"
                opacity="0.9"
              />
            </g>
          );
        })}

        {/* Floating particles */}
        {Array.from({ length: 250 }).map((_, i) => (
          <motion.circle
            key={`particle-${i}`}
            cx={(Math.random() * 100) + "%"}
            cy={(Math.random() * 100) + "%"}
            r={Math.random() * 1.5 + 0.5}
            fill={i % 3 === 0 ? "#FF3D7F" : "#00F0FF"}
            opacity="0.4"
            initial={{ y: 0 }}
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: Math.random() * 2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        ))}

        {/* Horizontal light streaks */}
        <motion.line
          x1="0"
          y1="25%"
          x2="100%"
          y2="25%"
          stroke="url(#streakGradient)"
          strokeWidth="1"
          opacity="0.15"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 8,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      </svg>
    </div>
  );
};

export default NetworkBackground;