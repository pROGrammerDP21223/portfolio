"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "./animated-counter";

const stats = [
  { value: 1.5, suffix: "+", label: "Years Experience" },
  { value: 200, suffix: "+", label: "Users Served" },
  { value: 10, suffix: "+", label: "Projects Delivered" },
  { value: 25, suffix: "%", label: "Query Optimization" },
];

export function StatsBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="grid grid-cols-2 gap-4 md:grid-cols-4"
    >
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ scale: 1.02 }}
          className="rounded-2xl border border-[var(--border)]/60 bg-[var(--card)]/50 p-6 text-center backdrop-blur-sm"
        >
          <p className="text-2xl font-bold text-[var(--accent)] md:text-3xl">
            <AnimatedCounter
              end={stat.value}
              suffix={stat.suffix}
              duration={2}
              decimals={stat.value % 1 !== 0 ? 1 : 0}
            />
          </p>
          <p className="mt-1 text-sm text-[var(--secondary)]">{stat.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
