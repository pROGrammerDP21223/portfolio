"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";
import { education, achievements } from "@/data";
import { Section } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";

export function Education() {
  return (
    <Section
      id="education"
      number="05"
      title="Education & Achievements"
      subtitle="Academic background and accomplishments"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
        >
          <Card className="h-full border-[var(--border)]/60 transition-shadow hover:shadow-lg">
            <CardContent className="p-8">
              <div className="mb-6 flex items-center gap-3">
                <motion.div
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent)]/10"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                >
                  <GraduationCap className="h-6 w-6 text-[var(--accent)]" />
                </motion.div>
                <h3 className="text-lg font-semibold text-[var(--foreground)]">
                  Education
                </h3>
              </div>
              <ul className="space-y-5">
                {education.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-between border-b border-[var(--border)]/60 pb-4 last:border-0 last:pb-0"
                  >
                    <span className="font-medium text-[var(--foreground)]">
                      {item.degree}
                    </span>
                    <span className="text-sm text-[var(--secondary)]">
                      {item.year}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          whileHover={{ y: -4 }}
        >
          <Card className="h-full border-[var(--border)]/60 transition-shadow hover:shadow-lg">
            <CardContent className="p-8">
              <div className="mb-6 flex items-center gap-3">
                <motion.div
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent)]/10"
                  whileHover={{ rotate: -5, scale: 1.05 }}
                >
                  <Award className="h-6 w-6 text-[var(--accent)]" />
                </motion.div>
                <h3 className="text-lg font-semibold text-[var(--foreground)]">
                  Achievements
                </h3>
              </div>
              <ul className="space-y-5">
                {achievements.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-between border-b border-[var(--border)]/60 pb-4 last:border-0 last:pb-0"
                  >
                    <span className="font-medium text-[var(--foreground)]">
                      {item.title}
                    </span>
                    <span className="text-sm text-[var(--secondary)]">
                      {item.year}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
