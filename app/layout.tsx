import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/lib/theme-provider";
import {
  Navbar,
  ScrollProgress,
  ScrollToTop,
  Footer,
} from "@/components";
import { portfolio } from "@/data";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${portfolio.name} | ${portfolio.title}`,
  description: portfolio.summary,
  keywords: [
    "Software Developer",
    "Full Stack",
    "ASP.NET Core",
    "React",
    "Angular",
    "Azure",
    "Mumbai",
  ],
  authors: [{ name: portfolio.name, url: portfolio.portfolio }],
  creator: portfolio.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: portfolio.portfolio,
    title: `${portfolio.name} | ${portfolio.title}`,
    description: portfolio.summary,
    siteName: `${portfolio.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolio.name} | ${portfolio.title}`,
    description: portfolio.summary,
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? portfolio.portfolio
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          <ScrollProgress />
          <main>{children}</main>
          <ScrollToTop />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
