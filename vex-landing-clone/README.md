# Vex Landing — Clone

![License](https://img.shields.io/badge/license-Educational%20Use%20Only-blue)
![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind%20CSS-3-38BDF8?logo=tailwindcss)

A high-fidelity frontend clone of [vex-landing.lovable.app](https://vex-landing.lovable.app/) — a modern AI-native SaaS team workspace landing page built for **learning and UI practice**.

> **⚠️ Disclaimer:**
> This project is **strictly for educational and non-commercial purposes**.
> All trademarks, logos, brand names, and assets belong to their respective owners.
> No affiliation with or endorsement by the original brand is implied.

---

## Live Preview

🔗 [vex-landing.lovable.app](https://vex-landing.lovable.app/)

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| **React 18** | UI framework |
| **Vite 5** | Build tool & dev server |
| **TypeScript** | Type safety |
| **Tailwind CSS 3** | Utility-first styling |
| **shadcn/ui** | Accessible component primitives |
| **Framer Motion** | Scroll-triggered & entrance animations |
| **lucide-react** | Icon library |

---

## Features Cloned

- 🎨 Dark gradient mesh background with radial glow blobs
- 🔝 Sticky glassmorphic navbar with mobile hamburger drawer
- 🚀 Animated hero with announcement badge, gradient headline, CTA buttons, and social proof
- 🖥️ Mock Kanban dashboard product screenshot
- ⚡ Feature grid (6 cards) with icon, title, and description
- 🪜 3-step "How It Works" section with step numbers
- 💳 Pricing section — Starter / Pro / Enterprise cards with monthly/annual toggle
- 💬 Testimonials with logo marquee and quote cards
- 📣 CTA banner with radial glow decoration
- 🦶 Multi-column footer with social links

---

## Project Structure

```
vex-landing-clone/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── logo.svg
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky nav + mobile drawer
│   │   ├── HeroSection.tsx     # Headline, CTA, social proof, dashboard preview
│   │   ├── FeaturesSection.tsx # 6-card feature grid
│   │   ├── HowItWorks.tsx      # 3-step flow
│   │   ├── PricingSection.tsx  # Pricing cards + toggle
│   │   ├── Testimonials.tsx    # Logo marquee + quote cards
│   │   ├── CtaBanner.tsx       # CTA banner
│   │   └── Footer.tsx          # Multi-column footer
│   ├── lib/
│   │   └── utils.ts            # shadcn/ui utility (cn helper)
│   ├── App.tsx                 # Root — assembles all sections
│   ├── main.tsx
│   └── index.css               # Global CSS variables + Tailwind directives
├── components.json             # shadcn/ui config
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
└── package.json
```

---

## Prerequisites

- **Node.js** 18 or later
- **npm** or **yarn**

---

## Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/bhaktofmahakal/Frontend-clones.git
cd Frontend-clones/vex-landing-clone
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

## Design Tokens

All design tokens live in `src/index.css` as CSS custom properties:

```css
:root {
  --background: 240 10% 4%;
  --foreground: 0 0% 97%;
  --card: 240 6% 8%;
  --primary: 258 90% 66%;      /* violet */
  --primary-foreground: 0 0% 100%;
  --secondary: 240 5% 14%;
  --muted-foreground: 240 5% 60%;
  --border: 240 5% 18%;
  --radius: 0.625rem;
}
```

---

## Key Implementation Notes

- **Gradient headline** — achieved with `bg-clip-text text-transparent bg-gradient-to-r from-[#a78bfa] via-[#818cf8] to-[#60a5fa]` on the *"10×"* span only.
- **Gradient mesh background** — three absolutely-positioned `div`s with `radial-gradient` and `blur-3xl`, `pointer-events-none`.
- **Navbar blur** — `backdrop-blur-xl bg-background/80`.
- **Logo marquee** — CSS `@keyframes marquee` (translateX 0 → -50%) applied to a doubled set of logos; `animation: marquee 30s linear infinite`.
- **Framer Motion** — all hero elements use `motion.div` with `initial={{ opacity: 0, y: 20 }}` + staggered `delay`. Feature/pricing cards use `whileInView` with `once: true`.
- **Pricing toggle** — local `useState` (`'monthly' | 'annual'`) toggles displayed price strings and an *"annual"* pill badge.
- **Mobile nav** — `shadcn/ui` `<Sheet>` component wraps the mobile link list; toggled by a `Menu` / `X` lucide icon button.

---

## Prompt Template

The full layout prompt for this clone (suitable for AI code generation tools such as Lovable, v0, or Bolt) is documented in:

📄 **[`../try-hero-prompt.md` — Section 9: Vex — Modern SaaS Landing](https://github.com/bhaktofmahakal/Frontend-clones/blob/main/try-hero-prompt.md#9-vex--modern-saas-landing)**

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
