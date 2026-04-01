"use client";

import { motion } from "framer-motion";

const shapes = [
  { size: 4, top: "10%", left: "15%", delay: 0, duration: 4 },
  { size: 6, top: "20%", right: "10%", delay: 0.5, duration: 5 },
  { size: 3, bottom: "30%", left: "8%", delay: 1, duration: 6 },
  { size: 5, top: "40%", right: "20%", delay: 0.2, duration: 4.5 },
  { size: 4, bottom: "20%", right: "15%", delay: 0.8, duration: 5.5 },
  { size: 6, top: "60%", left: "5%", delay: 0.3, duration: 4 },
  { size: 3, bottom: "15%", right: "30%", delay: 1.2, duration: 6 },
  { size: 5, top: "80%", left: "25%", delay: 0.6, duration: 5 },
];

export function FloatingShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/5"
          style={{
            width: shape.size * 16,
            height: shape.size * 16,
            top: shape.top,
            bottom: shape.bottom,
            left: shape.left,
            right: shape.right,
          }}
          animate={{
            y: [0, -15, 0],
            x: [0, 8, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
          }}
        />
      ))}
    </div>
  );
}
