"use client";

import { motion } from "framer-motion";

interface BlobProps {
  className?: string;
  delay?: number;
}

export function Blob({ className = "", delay = 0 }: BlobProps) {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      className={`absolute h-64 w-64 ${className}`}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{
        scale: [0.9, 1.15, 1, 0.95, 1],
        opacity: [0.2, 0.4, 0.25, 0.35, 0.2],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse",
        delay,
      }}
    >
      <path
        fill="var(--accent)"
        d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.5C64.8,55.8,53.8,67.8,40.1,76.4C26.4,85,10,90.2,-7.4,89.5C-24.8,88.8,-42.2,82.2,-56.1,72.2C-70,62.2,-80.4,48.8,-85.3,33.6C-90.2,18.4,-89.6,1.4,-84.4,-13.9C-79.2,-29.2,-69.4,-42.8,-56.6,-51.7C-43.8,-60.6,-28,-64.8,-12.5,-67.1C3,-69.4,30.6,-83.6,44.7,-76.4Z"
        transform="translate(100 100)"
      />
    </motion.svg>
  );
}
