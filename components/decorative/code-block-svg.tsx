"use client";

import { motion } from "framer-motion";

export function CodeBlockSvg() {
  return (
    <motion.div
      className="absolute right-0 top-1/2 hidden -translate-y-1/2 lg:block"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
    >
      <div className="rounded-2xl border border-[var(--border)]/60 bg-[var(--card)]/50 p-6 backdrop-blur-xl">
        <div className="mb-4 flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <span className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <pre className="font-mono text-xs text-[var(--secondary)]">
          <code>
            <motion.span
              className="text-[var(--accent)]"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              const
            </motion.span>{" "}
            dev = {"{"}
            {"\n"}
            {"  "}name:{" "}
            <span className="text-amber-400/90">&quot;Dhananjay&quot;</span>,
            {"\n"}
            {"  "}role:{" "}
            <span className="text-emerald-400/90">&quot;SDE&quot;</span>,
            {"\n"}
            {"  "}skills: [
            <span className="text-[var(--muted)]">...</span>]
            {"\n"}
            {"}"}
          </code>
        </pre>
      </div>
    </motion.div>
  );
}
