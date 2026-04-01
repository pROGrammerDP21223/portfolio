import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { WaveDivider } from "@/components/decorative";

interface SectionProps {
  id: string;
  number?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  containerClass?: string;
  waveTop?: boolean;
  waveBottom?: boolean;
}

export function Section({
  id,
  number,
  title,
  subtitle,
  children,
  className = "",
  containerClass = "",
  waveTop = false,
  waveBottom = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24 px-6 py-20 md:py-28",
        "border-t border-[var(--border)]/40",
        className
      )}
    >
      {waveTop && <WaveDivider className="-top-12" flip />}
      {waveBottom && <WaveDivider className="-bottom-12" />}
      <div className={cn("mx-auto max-w-6xl", containerClass)}>
        {(number || title || subtitle) && (
          <header className="mb-16 md:mb-20">
            {number && (
              <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                {number}
              </span>
            )}
            {title && (
              <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] md:text-4xl lg:text-5xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 max-w-2xl text-lg text-[var(--secondary)]">
                {subtitle}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
