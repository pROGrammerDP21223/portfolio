# Dhananjay Phirke | Portfolio

A premium, professional developer portfolio built with Next.js 16, TypeScript, and Tailwind CSS. Designed to look like a modern SaaS product website — clean, structured, minimal, and high-end.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Theme:** next-themes (dark/light)
- **Icons:** Lucide React

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with theme, metadata, SEO
│   ├── page.tsx            # Home page with all sections
│   ├── not-found.tsx       # Custom 404 page
│   ├── globals.css         # Global styles & theme variables
│   ├── icon.tsx            # Dynamic favicon
│   ├── apple-icon.tsx      # Apple touch icon
│   ├── sitemap.ts          # Auto-generated sitemap
│   └── robots.ts           # Robots.txt config
├── components/
│   ├── navbar.tsx          # Sticky nav with theme toggle
│   ├── footer.tsx          # Footer with social links
│   ├── theme-toggle.tsx    # Dark/light mode switch
│   ├── scroll-progress.tsx # Scroll progress indicator
│   ├── scroll-to-top.tsx   # Back-to-top button
│   ├── section.tsx         # Reusable section wrapper
│   └── sections/
│       ├── hero.tsx
│       ├── about.tsx
│       ├── skills.tsx
│       ├── experience.tsx
│       ├── projects.tsx
│       ├── education.tsx
│       └── contact.tsx
├── data/
│   ├── portfolio.ts        # Profile & contact info
│   ├── skills.ts           # Skill categories
│   ├── experience.ts       # Work experience
│   ├── projects.ts         # Project portfolio
│   └── education.ts        # Education & achievements
├── lib/
│   ├── theme-provider.tsx  # next-themes wrapper
│   └── site-url.ts         # URL helper for sitemap/robots
├── hooks/
│   ├── use-scroll-progress.ts
│   └── use-active-section.ts
├── styles/
│   └── theme.css           # CSS variable definitions
└── public/
```

## Installation

```bash
# Install dependencies (already done)
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build & Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Contact Form (Resend)

The contact form sends emails directly to your inbox via [Resend](https://resend.com). No database required.

### Setup (5 minutes)

1. **Sign up at [resend.com](https://resend.com)** — Use your portfolio email (`dhananjayphirke@gmail.com`).

2. **Get your API key** — Dashboard → API Keys → Create.

3. **Add to Vercel:**
   - Project → Settings → Environment Variables
   - Add `RESEND_API_KEY` = your key
   - Redeploy

4. **Local dev:** Create `.env.local` with:
   ```
   RESEND_API_KEY=re_your_key_here
   ```

**Note:** With Resend's free tier, `onboarding@resend.dev` can only deliver to the email you signed up with. To send from your own domain (e.g. `contact@yourdomain.com`), verify your domain in Resend and update the `from` field in `app/api/contact/route.ts`.

---

## Vercel Deployment

### Option 1: Deploy via Vercel Dashboard

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Portfolio ready for deployment"
   git push origin master
   ```

2. **Import on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click **Add New** → **Project**
   - Import your GitHub repository
   - Vercel auto-detects Next.js — no config needed
   - Click **Deploy**

3. **Set Environment Variable (Optional)**
   - In Project Settings → Environment Variables
   - Add `NEXT_PUBLIC_SITE_URL` = `https://your-domain.vercel.app`
   - Redeploy for sitemap/robots to use correct URL

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy (from project root)
vercel

# Production deploy
vercel --prod
```

### Custom Domain

1. Go to Project → Settings → Domains
2. Add your custom domain
3. Update `NEXT_PUBLIC_SITE_URL` to your custom domain
4. Update `portfolio.portfolio` in `data/portfolio.ts` if needed

## Content Management

All content is stored in structured data files — **no database required**:

| File | Content |
|------|---------|
| `data/portfolio.ts` | Name, title, contact, summary |
| `data/skills.ts` | Skill categories and items |
| `data/experience.ts` | Work history |
| `data/projects.ts` | Projects with tech stack |
| `data/education.ts` | Education & achievements |

Edit these files to update your portfolio content.

## Theme System

- **Dark theme** (default): Professional deep navy
- **Light theme**: Clean soft gray/white
- Uses CSS variables for easy customization
- Semantic tokens: `--background`, `--foreground`, `--primary`, `--secondary`, `--muted`, `--accent`, `--card`, `--border`

## Features

- ✅ Fully responsive
- ✅ SEO optimized (metadata, OpenGraph, Twitter cards)
- ✅ Sitemap & robots.txt
- ✅ Dynamic favicon
- ✅ Scroll progress indicator
- ✅ Scroll-to-top button
- ✅ Smooth scrolling
- ✅ Custom 404 page
- ✅ Glassmorphism cards
- ✅ Theme toggle (dark/light)

## License

Private portfolio project.
