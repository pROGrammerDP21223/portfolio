"use client";

import { motion } from "framer-motion";

export function AvatarPlaceholder() {
  return (
    <motion.div
      className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-[var(--accent)]/30 bg-[var(--accent)]/10 text-2xl font-bold text-[var(--accent)]"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
      whileHover={{ scale: 1.05 }}
    >
      DP
    </motion.div>
  );
}
