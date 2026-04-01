"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { experiences } from "@/data";
import { Section } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <Section
      id="experience"
      number="03"
      title="Experience"
      subtitle="Professional journey and key achievements"
    >
      <div className="relative space-y-8">
        <div
          className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--border)] to-transparent md:left-1/2 md:-translate-x-px"
          aria-hidden
        />

        {experiences.map((exp, index) => {
          const isExpanded = expandedId === exp.id;
          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`relative flex gap-8 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              <div
                className="absolute left-6 top-7 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-[var(--accent)] bg-[var(--background)] md:left-1/2"
                aria-hidden
              />

              <div className="ml-12 flex-1 md:ml-0 md:flex md:items-stretch md:gap-8">
                <div
                  className={`flex-1 ${index % 2 === 1 ? "md:order-2 md:text-right" : ""}`}
                >
                  <Badge variant="default" className="mb-2">
                    {exp.period}
                  </Badge>
                  <h3 className="text-lg font-semibold text-[var(--foreground)]">
                    {exp.role}
                  </h3>
                  <p className="text-[var(--secondary)]">{exp.company}</p>
                </div>
                <motion.div
                  className={`flex-1 ${index % 2 === 1 ? "md:order-1" : ""}`}
                  layout
                >
                  <motion.div
                    onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                    className="cursor-pointer"
                  >
                    <Card
                      className={`border-[var(--border)]/60 transition-all hover:border-[var(--accent)]/30 ${
                        isExpanded ? "shadow-lg shadow-[var(--accent)]/5" : ""
                      }`}
                    >
                      <CardContent className="p-6">
                        <ul className="space-y-3">
                          {exp.highlights
                            .slice(0, isExpanded ? undefined : 2)
                            .map((highlight, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className={`flex items-start gap-3 text-sm text-[var(--secondary)] ${
                                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                                }`}
                              >
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                                <span>{highlight}</span>
                              </motion.li>
                            ))}
                        </ul>
                        {exp.highlights.length > 2 && (
                          <motion.div
                            className="mt-4 flex items-center gap-1 text-sm font-medium text-[var(--accent)]"
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                          >
                            <ChevronDown className="h-4 w-4" />
                            {isExpanded ? "Show less" : `+${exp.highlights.length - 2} more`}
                          </motion.div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
