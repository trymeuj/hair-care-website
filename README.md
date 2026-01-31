# Hair Care Landing Page

A men-focused hair care product landing page built with Next.js, TypeScript, and Tailwind CSS.

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Landing page
│   ├── globals.css         # Global styles
│   └── questionnaire/      # Questionnaire page (placeholder)
├── components/
│   └── landing/            # Landing page components
│       ├── Hero.tsx
│       ├── ProblemStatement.tsx
│       ├── HowItWorks.tsx
│       └── CTA.tsx
└── ...
```

## Design Philosophy

- **Neutral, practical tone** - No hype, no fear-based messaging
- **Minimal friction** - Clear CTAs, no login required
- **Clarity over perfection** - Simple, actionable guidance
- **Mobile-first** - Responsive design optimized for all devices

## Next Steps

1. Build out the `/questionnaire` flow
2. Add backend logic for personalized recommendations
3. Implement result/routine page
4. Add optional social proof/testimonials
5. Set up analytics

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## Build for Production

```bash
npm run build
npm start
```

