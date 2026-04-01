"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skillCategories } from "@/data";
import { Section } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SkillProgress } from "@/components/skill-progress";
import { cn } from "@/lib/utils";

export function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <Section
      id="skills"
      number="02"
      title="Skills"
      subtitle="Technologies and tools I work with"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <Card className="border-[var(--accent)]/20 bg-[var(--accent)]/5">
          <CardContent className="p-8">
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
              Core Proficiency
            </h3>
            <SkillProgress />
          </CardContent>
        </Card>
      </motion.div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: index * 0.05,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{ y: -4 }}
            onMouseEnter={() => setHoveredCard(category.category)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <Card className="group h-full transition-all duration-300 hover:border-[var(--accent)]/30 hover:shadow-xl hover:shadow-[var(--accent)]/5">
              <CardContent className="p-6">
                <h3 className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                  <motion.span
                    animate={{ rotate: hoveredCard === category.category ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    ◆
                  </motion.span>
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge
                        variant="secondary"
                        className={cn(
                          "cursor-default transition-all duration-200",
                          hoveredSkill === skill
                            ? "border-[var(--accent)]/50 bg-[var(--accent)]/10 text-[var(--accent)]"
                            : "hover:border-[var(--accent)]/30 hover:bg-[var(--accent)]/5"
                        )}
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
