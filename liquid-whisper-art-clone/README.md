# Liquid Whisper Art — Clone

![License](https://img.shields.io/badge/license-Educational%20Use%20Only-blue)
![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind%20CSS-4-38BDF8?logo=tailwindcss)

A high-fidelity frontend clone of [liquid-whisper-art.lovable.app](https://liquid-whisper-art.lovable.app/) — a cinematic, full-page landing site with liquid glass UI, background videos, and smooth scroll animations built for **learning and UI practice**.

> **⚠️ Disclaimer:**
> This project is **strictly for educational and non-commercial purposes**.
> All trademarks, logos, brand names, and assets belong to their respective owners.
> No affiliation with or endorsement by the original brand is implied.

---

## Live Preview

🔗 [liquid-whisper-art.lovable.app](https://liquid-whisper-art.lovable.app/)

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| **React 18** | UI framework |
| **Vite 6** | Build tool & dev server |
| **TypeScript** | Type safety |
| **Tailwind CSS 4** | Utility-first styling |
| **Framer Motion** | Scroll-triggered & entrance animations |
| **lucide-react** | Icon library |

---

## Features Cloned

- 🎬 Full-viewport hero background video with custom seamless crossfade loop (vanilla `requestAnimationFrame`)
- 🌊 Reusable `.liquid-glass` CSS component with gradient border mask trick
- 🔝 Glassmorphic navbar pill (liquid-glass + rounded-full)
- ✉️ Email subscribe input with white circular submit button
- 📖 About section with Instrument Serif italic heading and scroll-triggered fade-in
- 🎥 Featured video section with bottom overlay card and animated "Explore more" button
- 🧠 Philosophy section with two-column grid (video + text blocks), x-axis slide-in animations
- 🛠 Services section with two video cards, hover scale on video, and stagger animation
- 🖤 Pure black background throughout all sections
- 📱 Fully responsive (mobile-first)

---

## Project Structure

```
liquid-whisper-art-clone/
├── public/
├── src/
│   ├── components/
│   │   ├── AboutSection.tsx          # About section with scroll animation
│   │   ├── FeaturedVideoSection.tsx  # Featured video with overlay card
│   │   ├── PhilosophySection.tsx     # Innovation × Vision two-column section
│   │   └── ServicesSection.tsx       # Two service cards with video backgrounds
│   ├── pages/
│   │   └── Index.tsx                 # Hero section: video bg, navbar, email form
│   ├── App.tsx                       # Root — assembles all sections
│   ├── main.tsx
│   └── index.css                     # Tailwind v4 + Google Font + .liquid-glass
├── tsconfig.json
├── vite.config.ts
└── package.json
```

---

## Prerequisites

- **Node.js** 18 or later
- **npm**

---

## Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/bhaktofmahakal/Frontend-clones.git
cd Frontend-clones/liquid-whisper-art-clone
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for production

```bash
npm run build
```

### 5. Preview the production build

```bash
npm run preview
```

---

## Deploying to Vercel

```bash
npm i -g vercel
vercel login
vercel --prod
```

No environment variables are required — this is a fully static frontend.

---

## Key Implementation Notes

- **Liquid glass effect** — `.liquid-glass` class uses `backdrop-filter: blur(4px)` + a `::before` pseudo-element with a `linear-gradient` border mask (`-webkit-mask-composite: xor` / `mask-composite: exclude`) to create a translucent gradient border edge on all glass elements.
- **Hero video crossfade loop** — handled entirely in vanilla JS via `requestAnimationFrame` (no CSS `transition`). On `canplay`: play + fade in. On `timeupdate` (last 0.55 s): fade out. On `ended`: reset + play + fade in. Achieves a smooth black crossfade between loops.
- **Instrument Serif font** — loaded via Google Fonts, used for all headings in italic style (`font-style: italic`).
- **Tailwind CSS v4** — uses `@import "tailwindcss"` in `index.css` (no `tailwind.config.js`) with `@tailwindcss/vite` Vite plugin.
- **Framer Motion** — all scroll sections use `useInView(ref, { once: true, margin: '-100px' })` for viewport-triggered entrance animations.

---

## Prompt Template

The full layout prompt for this clone is documented in:

📄 **[`../try-hero-prompt.md` — Section 10: Liquid Whisper Art](https://github.com/bhaktofmahakal/Frontend-clones/blob/main/try-hero-prompt.md#10-liquid-whisper-art--cinematic-full-page-landing)**

---

## Author

**Utsav Mishra**

- 📧 [utsavmishraa005@gmail.com](mailto:utsavmishraa005@gmail.com)
- 🐙 [github.com/bhaktofmahakal](https://github.com/bhaktofmahakal)

---

## License

This project is created for **educational and non-commercial use only**.
All original brand assets, trademarks, and logos belong to their respective owners.
Reproduction for commercial purposes is strictly prohibited.
