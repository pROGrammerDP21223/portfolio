import Link from "next/link";
import { Linkedin, Github, ArrowUpRight } from "lucide-react";
import { portfolio } from "@/data";
import { Button } from "./ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)]/60 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <p className="text-sm text-[var(--muted)]">
            © {currentYear} {portfolio.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <Button variant="secondary" size="icon" asChild>
              <a
                href={portfolio.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="secondary" size="icon" asChild>
              <a
                href="https://github.com/programmerdp21223"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="secondary" size="sm" asChild>
              <Link href="#hero">
                Back to top
                <ArrowUpRight className="h-4 w-4 rotate-[-45deg]" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
