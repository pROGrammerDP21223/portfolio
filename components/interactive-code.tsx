"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const lines = [
  { text: "const developer = {", delay: 0 },
  { text: "  name: 'Dhananjay',", delay: 0.3 },
  { text: "  role: 'Software Engineer',", delay: 0.6 },
  { text: "  skills: ['Full Stack', 'AI', 'Cloud'],", delay: 0.9 },
  { text: "  available: true", delay: 1.2 },
  { text: "};", delay: 1.5 },
];

export function InteractiveCode() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-2xl border border-[var(--border)]/60 bg-[var(--card)]/80 p-5 backdrop-blur-xl lg:block"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="mb-3 flex gap-1.5">
        {["#ef4444", "#eab308", "#22c55e"].map((color, i) => (
          <motion.span
            key={i}
            className="h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: color }}
            animate={hovered ? { scale: [1, 1.2, 1] } : {}}
            transition={{ delay: i * 0.1 }}
          />
        ))}
      </div>
      <pre className="font-mono text-xs">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + line.delay }}
            className={i === 0 || i === 5 ? "text-[var(--accent)]" : "text-[var(--secondary)]"}
          >
            {line.text}
          </motion.div>
        ))}
      </pre>
    </motion.div>
  );
}
