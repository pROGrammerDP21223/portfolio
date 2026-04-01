"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Send, Loader2 } from "lucide-react";
import { portfolio } from "@/data";
import { Section } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setFormState({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (status === "error") setStatus("idle");
  };

  return (
    <Section
      id="contact"
      number="06"
      title="Contact"
      subtitle="Let's connect and build something great together"
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <p className="text-lg text-[var(--secondary)]">
            I&apos;m always open to discussing new opportunities, interesting
            projects, or just having a chat.
          </p>
          <div className="space-y-6">
            <motion.a
              href={`mailto:${portfolio.email}`}
              className={cn(
                "flex items-center gap-4 rounded-xl border border-[var(--border)]/60 p-4",
                "bg-[var(--card)]/50 transition-all hover:border-[var(--accent)]/30 hover:bg-[var(--accent)]/5"
              )}
              whileHover={{ scale: 1.02, x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)]/10"
                whileHover={{ rotate: 5 }}
              >
                <Mail className="h-6 w-6 text-[var(--accent)]" />
              </motion.span>
              <div>
                <p className="text-sm font-medium text-[var(--muted)]">Email</p>
                <p className="text-[var(--foreground)]">{portfolio.email}</p>
              </div>
            </motion.a>
            <motion.a
              href={portfolio.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center gap-4 rounded-xl border border-[var(--border)]/60 p-4",
                "bg-[var(--card)]/50 transition-all hover:border-[var(--accent)]/30 hover:bg-[var(--accent)]/5"
              )}
              whileHover={{ scale: 1.02, x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)]/10"
                whileHover={{ rotate: -5 }}
              >
                <Linkedin className="h-6 w-6 text-[var(--accent)]" />
              </motion.span>
              <div>
                <p className="text-sm font-medium text-[var(--muted)]">LinkedIn</p>
                <p className="text-[var(--foreground)]">Connect with me</p>
              </div>
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Card className="border-[var(--border)]/60">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-[var(--foreground)]"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    disabled={status === "loading"}
                    className={cn(
                      "w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3",
                      "text-[var(--foreground)] placeholder:text-[var(--muted)]",
                      "focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20",
                      "disabled:opacity-60 disabled:cursor-not-allowed"
                    )}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-[var(--foreground)]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    disabled={status === "loading"}
                    className={cn(
                      "w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3",
                      "text-[var(--foreground)] placeholder:text-[var(--muted)]",
                      "focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20",
                      "disabled:opacity-60 disabled:cursor-not-allowed"
                    )}
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-[var(--foreground)]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    disabled={status === "loading"}
                    rows={4}
                    className={cn(
                      "w-full resize-none rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3",
                      "text-[var(--foreground)] placeholder:text-[var(--muted)]",
                      "focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20",
                      "disabled:opacity-60 disabled:cursor-not-allowed"
                    )}
                    placeholder="Your message..."
                  />
                </div>
                {status === "success" && (
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-green-500">
                      Thank you! Your message has been sent. I&apos;ll get back to you soon.
                    </p>
                    <Button
                      type="button"
                      variant="secondary"
                      size="sm"
                      onClick={() => setStatus("idle")}
                    >
                      Send another message
                    </Button>
                  </div>
                )}
                {status === "error" && (
                  <p className="text-sm font-medium text-red-500">{errorMessage}</p>
                )}
                {status !== "loading" && status !== "success" ? (
                  <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                    <Button type="submit" size="lg" className="w-full">
                      <Send className="h-4 w-4" />
                      Send Message
                    </Button>
                  </motion.div>
                ) : status === "loading" ? (
                  <Button size="lg" className="w-full" disabled>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </Button>
                ) : null}
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
