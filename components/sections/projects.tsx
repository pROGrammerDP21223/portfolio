"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/data";
import { Section } from "@/components/section";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const filters = ["All", "SaaS", "CRM", "Microservices", "AI", "ERP"];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((p) =>
      p.tech.some((t) => t.toLowerCase().includes(activeFilter.toLowerCase()))
    );
  }, [activeFilter]);

  return (
    <Section
      id="projects"
      number="04"
      title="Projects"
      subtitle="Selected work and side projects"
    >
      <motion.div
        className="mb-8 flex flex-wrap gap-2"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {filters.map((filter) => (
          <motion.button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
              activeFilter === filter
                ? "bg-[var(--accent)] text-white"
                : "bg-[var(--card)] text-[var(--secondary)] hover:bg-[var(--muted)]/20"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {filter}
          </motion.button>
        ))}
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{
                duration: 0.3,
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <Card className="relative h-full overflow-hidden transition-all duration-300 hover:border-[var(--accent)]/30 hover:shadow-2xl hover:shadow-[var(--accent)]/10">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden
                />

                <CardHeader className="relative flex flex-row items-start justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-[var(--foreground)] transition-colors group-hover:text-[var(--accent)]">
                      {project.name}
                    </h3>
                    {project.metrics && (
                      <Badge variant="default">{project.metrics}</Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    {project.demo && (
                      <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.95 }}>
                        <Button variant="default" size="icon" asChild>
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.name} live demo`}
                          >
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        </Button>
                      </motion.div>
                    )}
                    <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="secondary" size="icon" asChild>
                        <a
                          href={project.github}
                          aria-label={`View ${project.name} on GitHub`}
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-sm leading-relaxed text-[var(--secondary)]">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.05 * i }}
                        whileHover={{ scale: 1.08, y: -2 }}
                      >
                        <Badge variant="outline">{tech}</Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
}
