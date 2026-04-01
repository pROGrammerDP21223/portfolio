"use client";

import Link from "next/link";
import { MapPin, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { portfolio } from "@/data";
import { Button } from "@/components/ui/button";
import { Blob, FloatingShapes, WaveDivider, AvatarPlaceholder } from "@/components/decorative";
import { MouseSpotlight } from "@/components/mouse-spotlight";
import { InteractiveCode } from "@/components/interactive-code";
import { MagneticWrapper } from "@/components/magnetic-wrapper";
import { AnimatedText } from "@/components/animated-text";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { cn } from "@/lib/utils";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24"
    >
      {/* Animated blobs */}
      <Blob className="-top-32 -right-32 h-80 w-80 md:h-96 md:w-96" delay={0} />
      <Blob className="top-1/2 -left-32 h-64 w-64 md:h-80 md:w-80" delay={1} />
      <Blob className="bottom-20 right-1/4 h-48 w-48 opacity-20" delay={2} />

      {/* Floating shapes */}
      <FloatingShapes />

      {/* Ambient gradient orbs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <motion.div
          className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-[var(--accent)]/20 blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 -left-40 h-80 w-80 rounded-full bg-indigo-500/10 blur-[100px]"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        />
      </div>

      {/* Mouse-follow spotlight */}
      <MouseSpotlight />

      {/* Interactive code block */}
      <InteractiveCode />

      {/* Animated grid */}
      <motion.div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--border)/6_1px,transparent_1px),linear-gradient(to_bottom,var(--border)/6_1px,transparent_1px)] bg-[size:48px_48px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        aria-hidden
      />


      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial="initial"
          animate="animate"
          variants={{ animate: { transition: { staggerChildren: 0.08 } } }}
          className="space-y-8"
        >
          <motion.div variants={fadeUp} className="flex justify-center">
            <div className="mb-6 flex justify-center">
              <AvatarPlaceholder />
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="flex justify-center">
            <motion.span
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)]/60 px-4 py-1.5 text-sm font-medium text-[var(--accent)] backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Sparkles className="h-4 w-4" />
              </motion.span>
              {portfolio.title}
            </motion.span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="text-[var(--foreground)]">Hi, I&apos;m </span>
            <motion.span
              className={cn("gradient-text")}
              whileHover={{ scale: 1.02 }}
            >
              <AnimatedText text={portfolio.name} />
            </motion.span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center gap-2 text-[var(--secondary)]"
          >
            <motion.span
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <MapPin className="h-4 w-4" />
            </motion.span>
            <span>{portfolio.location}</span>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mx-auto max-w-2xl text-base leading-relaxed text-[var(--secondary)] md:text-lg"
          >
            {portfolio.summary}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row"
          >
            <MagneticWrapper strength={0.2}>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button asChild size="lg" className="group">
                  <Link href="#projects">
                    View Projects
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
            </MagneticWrapper>
            <MagneticWrapper strength={0.2}>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button asChild variant="secondary" size="lg">
                  <Link href="#contact">Get in Touch</Link>
                </Button>
              </motion.div>
            </MagneticWrapper>
          </motion.div>
        </motion.div>
      </div>
      <ScrollIndicator />
      <WaveDivider className="bottom-0" />
    </section>
  );
}
