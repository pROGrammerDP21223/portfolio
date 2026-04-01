import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-8xl font-bold gradient-text">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-[var(--foreground)]">
          Page Not Found
        </h2>
        <p className="mt-2 text-[var(--secondary)]">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}
