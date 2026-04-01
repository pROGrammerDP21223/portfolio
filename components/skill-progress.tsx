"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const topSkills = [
  { name: "Backend Development", level: 90 },
  { name: "Full Stack", level: 85 },
  { name: "REST APIs", level: 92 },
  { name: "Database Design", level: 88 },
  { name: "Cloud & DevOps", level: 80 },
];

export function SkillProgress() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-6">
      {topSkills.map((skill, i) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: i * 0.1 }}
        >
          <div className="mb-2 flex justify-between text-sm">
            <span className="font-medium text-[var(--foreground)]">{skill.name}</span>
            <span className="text-[var(--accent)]">{skill.level}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-[var(--border)]/50">
            <motion.div
              className="h-full rounded-full bg-[var(--accent)]"
              initial={{ width: 0 }}
              animate={isInView ? { width: `${skill.level}%` } : {}}
              transition={{ duration: 1, delay: 0.2 + i * 0.1 }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
