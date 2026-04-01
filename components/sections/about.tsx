"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { StatsBar } from "@/components/stats-bar";
import { portfolio } from "@/data";
const competencies = [
  "Backend development (ASP.NET Core, Node.js)",
  "REST API design & JWT/RBAC authentication",
  "Database optimization & SQL Server",
  "AI automation workflows (LangChain, CrewAI)",
  "Azure & IIS deployment",
  "Full-stack web applications",
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export function About() {
  return (
    <Section
      id="about"
      number="01"
      title="About"
      subtitle="Get to know my background and core competencies"
    >
      <StatsBar />
      <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-12">
        <motion.div {...fadeIn} className="relative">
          <motion.div whileHover={{ y: -2 }}>
            <Card className="h-full border-[var(--border)]/60 transition-shadow hover:shadow-lg">
            <CardContent className="p-8">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
                Professional Summary
              </h3>
              <p className="leading-relaxed text-[var(--secondary)]">
                {portfolio.summary}
              </p>
            </CardContent>
          </Card>
          </motion.div>
        </motion.div>

        <motion.div {...fadeIn} transition={{ delay: 0.1 }}>
          <motion.div whileHover={{ y: -2 }}>
            <Card className="h-full border-[var(--border)]/60 transition-shadow hover:shadow-lg">
            <CardContent className="p-8">
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
                Core Competencies
              </h3>
              <ul className="space-y-4">
                {competencies.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
                    <span className="text-[var(--secondary)]">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
