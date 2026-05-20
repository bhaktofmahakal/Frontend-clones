# Hero Section Prompts Collection

> A curated collection of production-ready SaaS hero section prompts with live previews, full tech stacks, and detailed implementation specs.

---

## Table of Contents

| # | Template | Tech Stack | Live Link |
|---|----------|------------|-----------|
| 1 | [Wealth Management Platform](#1-wealth-management-platform) | React · Tailwind CSS | [Preview →](https://saas-landing-rouge.vercel.app) |
| 2 | [Bold Typography Hero](#2-bold-typography-hero) | React · Tailwind CSS | [Preview →](https://hero-typography.vercel.app/) |
| 3 | [Taskora — SaaS Hero](#3-taskora--saas-hero) | React · Tailwind CSS · Framer Motion | [Preview →](https://taskora-saas-hero-section.vercel.app/) |
| 4 | [ClearInvoice — SaaS Hero](#4-clearinvoice--saas-hero) | React (Vite) · Tailwind CSS · hls.js | [Preview →](https://clear-invoice-hero.lovable.app/) |
| 5 | [Synapse — Innovation Hero](#5-synapse--innovation-hero) | React · Tailwind CSS · Framer Motion · hls.js | [Preview →](https://video-hero-section.vercel.app/) |
| 6 | [Automotive Dealership Hero](#6-automotive-dealership-hero) | React · Tailwind CSS · Google Fonts | [Preview →](https://hero-drive-dream.lovable.app/) |
| 7 | [Ethereal Glow — Talent Acquisition Hero](#7-ethereal-glow--talent-acquisition-hero) | React · Vite · Tailwind CSS · TypeScript · shadcn/ui | [Preview →](https://ethereal-glow-hero.lovable.app) |
| 8 | [Velorah — Cinematic Video Hero](#8-velorah--cinematic-video-hero) | React · Vite · Tailwind CSS · TypeScript · shadcn/ui | [Preview →](https://velorah.lovable.app/) |
| 9 | [Vex — Modern SaaS Landing](#9-vex--modern-saas-landing) | React · Vite · Tailwind CSS · TypeScript · shadcn/ui · Framer Motion | [Preview →](https://vex-landing.lovable.app/) |
| 10 | [CodeNest — Coding Education Hero](#10-codenest--coding-education-hero) | React · Tailwind CSS · hls.js · lucide-react | [Preview →](https://glow-glass-code.lovable.app/) |
| 11 | [Gaze Aether — Data Insights Hero](#11-gaze-aether--data-insights-hero) | React · Vite · Tailwind CSS · TypeScript · shadcn/ui | [Preview →](https://gaze-aether.lovable.app/) |
| 12 | [Portfolio Boom — Dark Portfolio Landing](#12-portfolio-boom--dark-portfolio-landing) | React · Vite · Tailwind CSS · TypeScript · GSAP · Framer Motion · hls.js | [Preview →](https://portfolio-boom.lovable.app/) |
| 13 | [Liquid Whisper Art — Cinematic Full-Page Landing](#13-liquid-whisper-art--cinematic-full-page-landing) | React · Vite · Tailwind CSS · TypeScript · Framer Motion · lucide-react | [Preview →](https://liquid-whisper-art.lovable.app/) |
| 14 | [SkyElite — Private Jet Hero](#14-skyelite--private-jet-hero) | React · TypeScript · Tailwind CSS · Lucide React | [Preview →](https://skyelite-landing-dream.lovable.app/) |
| 15 | [Stellar.ai — AI Landing Hero](#15-stellarai--ai-landing-hero) | React · Tailwind CSS · Lucide React | [Preview →](https://stellar-bool.lovable.app/) |
| 16 | [Aethera Vision Forge — Cinematic Hero](#16-aethera-vision-forge--cinematic-hero) | React · Vite · Tailwind CSS · TypeScript | [Preview →](https://aethera-vision-forge.lovable.app/) |
| 17 | [Nexora — SaaS Landing Hero](#17-nexora--saas-landing-hero) | React · Vite · Tailwind CSS · TypeScript · shadcn/ui · Framer Motion · lucide-react | [Preview →](https://nexora-landing.lovable.app/) |
| 18 | [Remoto — Remote Team Management Hero](#18-remoto--remote-team-management-hero) | React · Tailwind CSS v4 · Motion | [Preview →](https://remoto-mbn.lovable.app/) |
| 19 | [Swift Spark Aesthetics — AI Website Builder Hero](#19-swift-spark-aesthetics--ai-website-builder-hero) | React · Tailwind CSS · TypeScript · Motion · hls.js · lucide-react | [Preview →](https://swift-spark-aesthetics.lovable.app/) |
| 20 | [Crest AI — AI Automation Hero](#20-crest-ai--ai-automation-hero) | React · Vite · Tailwind CSS · TypeScript · Framer Motion · lucide-react · hls.js | [Preview →](https://crest-ai-reach.lovable.app/) |
| 21 | [Bloom Reel Vista — Video Agency Hero](#21-bloom-reel-vista--video-agency-hero) | React · Tailwind CSS v4 · Google Fonts | [Preview →](https://bloom-reel-vista.lovable.app) |
| 22 | [Starscape Shaper — Cinematic Space-Travel Landing Page](#22-starscape-shaper--cinematic-space-travel-landing-page) | React · Framer Motion · CDN | [Preview →](https://starscape-shaper-art.lovable.app) |
| 23 | [Jack — 3D Creator Portfolio Landing Page](#23-jack--3d-creator-portfolio-landing-page) | React · TypeScript · Tailwind CSS · Framer Motion · lucide-react | [Preview →](https://portfolio-3d-utsav.lovable.app) |
| 24 | [Prisma — Creative Studio Landing Page](#24-prisma--creative-studio-landing-page) | React · Vite · TypeScript · Tailwind CSS · Framer Motion · lucide-react | [Preview →](https://light-play-creations.lovable.app) |

---

## 1. Wealth Management Platform

**🔗 Live Preview:** [saas-landing-rouge.vercel.app](https://saas-landing-rouge.vercel.app)

**🛠 Tech Stack:** React · Tailwind CSS

### Layout & Background
- Full viewport height (`min-h-screen`) with a **black** background
- Background video: autoplaying, looped, muted
  - URL: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260207_050933_33e2620d-09cd-43a2-80ef-4cdbb42f4194.mp4`
  - Scaled to 150% (`scale-150`), focal point at top-left (`object-left-top`, `origin-top-left`)

### Navbar
- Transparent, pinned to absolute top
- **Left:** White logo
- **Center:** `Features` (with chevron-down icon) · `Company` · `Blogs` — white text with hover opacity
- **Right:** `Sign in` text link + white pill-shaped `Get Started` button with black text

### Hero Content (Centered)
| Element | Detail |
|---------|--------|
| **Tag** | Glassmorphic pill — *"Real-Time Budget Tracking"* (white text, semi-transparent border/bg) |
| **Headline** | *"Build Wealth That Lasts Generations"* — huge white text, responsive up to ~100px desktop |
| **Subtitle** | *"Transform today's earnings into tomorrow's family fortune with proven wealth-building strategies"* — white, slight transparency |
| **CTA** | White pill button — *"Start Building Wealth"* — black text, hover scale effect |

### Bottom Features Grid
- Floating card container near bottom of screen
- **Style:** Dark glassmorphism (`bg-black/70`, `backdrop-blur-xl`, white border)
- **Grid:** 4 columns

| Step | Title | Description |
|------|-------|-------------|
| 1 | **Create Your Free Account** | Sign up in seconds using your email address or mobile number |
| 2 | **Connect Your Bank Accounts** | Securely link your bank accounts, cards, or digital wallets |
| 3 | **Set Your Financial Goals** | Customize your savings, spending, or investment goals with ease |
| 4 | **Track, Grow, and Optimize** | Watch your money work for you in real time — get insights and tips |

---

## 2. Bold Typography Hero

**🔗 Live Preview:** [hero-typography.vercel.app](https://hero-typography.vercel.app/)

**🛠 Tech Stack:** React · Tailwind CSS

### Layout & Positioning
- `min-h-screen` with dark blue fallback background (`#21346e`)
- Content aligned to **top** with heavy top padding (`pt-32` mobile / `pt-48` desktop)
- Standard container with horizontal padding

### Background Video
- Full-screen, absolute-positioned, `autoPlay loop muted playsInline`
- `object-cover` for distortion-free fill
- URL: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260206_044704_dd33cb15-c23f-4cfc-aa09-a0465d4dcb54.mp4`

### Typography — Main Headline
- **Font:** Rubik · Bold · Uppercase · White
- **Three lines:**
  ```
  NEW ERA
  OF DESIGN
  STARTS NOW
  ```
- **Size:** `text-6xl` mobile → `text-8xl` tablet → `text-[100px]` desktop
- **Spacing:** Line height `0.98` · Letter spacing `-2px` to `-4px`

### CTA Button
- Fixed size: **184px × 65px**
- Hover: `scale-105` · Active press: `scale-95`
- Background: SVG element (`absolute inset-0`) with custom white-filled path
- Label: `GET STARTED` — Rubik · Bold · Uppercase · 20px · `#161a20`

---

## 3. Taskora — SaaS Hero

**🔗 Live Preview:** [taskora-saas-hero-section.vercel.app](https://taskora-saas-hero-section.vercel.app/)

**🛠 Tech Stack:** React · Tailwind CSS · Framer Motion

### Visual Style
- Dark base (`#050505`) · White text
- Background video at `opacity-50` with gradient overlay (`black/60 → #050505`) fading into the bottom
  - URL: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260201_052917_7fc4e418-3123-40bf-b5ba-394c28eb4b3a.mp4`

### Typography Imports (Google Fonts)
| Font | Usage |
|------|-------|
| **Instrument Serif** (Italic) | Word *"Workflow"* in headline only |
| **Manrope** | "Trusted by" badge · subheadlines |
| **Cabin** | Main CTA button |
| **Inter / Inter Tight** | Dashboard UI · Navbar links |

### A. Floating Navbar
- Fixed pill-shaped glassmorphism bar (`bg-white/10 backdrop-blur-md`)
- **Desktop:** Logo left · Links centered (`Home`, `Features`, `Company`, `Contact`) · Auth buttons right (`Sign Up` + white `Sign In`)
- **Mobile:** Hamburger → glassmorphism dropdown

### B. Hero Content (Centered)
| Element | Detail |
|---------|--------|
| **Badge** | Pill — *"Trusted by +30.000 of clients globally"* · star icon with blue gradient |
| **Headline** | Up to `text-[80px]` desktop — *"Simplify Your* ***Workflow.*** *Stay Focused."* (Workflow italicized in serif font) |
| **Subhead** | `text-gray-400` — *"Taskora helps teams manage projects, tasks, and deadlines with clarity."* |
| **CTA** | Large white button, black text — *"Book a Free Demo"* · hover scale + shadow |

### C. Dashboard Preview (Mock Product Shot)
- Light mode container (`bg-[#F9F9FA]`) contrasting the dark hero

**Sidebar:** Thin icon rail (Home, Users, etc.)

**Content Area:**
- **Stats Cards (×3):** Total Sales · Operating Expenses · Gross Profit — each with value, % trend (green/red), mini bar chart
- **Revenue Chart:** Bar chart visualization section
- **Deals Table:** Deal Name · Company (Amazon.com with logo) · Amount · Date · Owner (avatar) · Stage (New tag)
- **Header:** Search bar · Notification bell · User profile pictures

### Responsiveness
- Headline scales to `text-5xl` on mobile
- Dashboard becomes scrollable / stacks vertically on small screens
- Navbar transforms to mobile drawer

---

## 4. ClearInvoice — SaaS Hero

**🔗 Live Preview:** [clear-invoice-hero.lovable.app](https://clear-invoice-hero.lovable.app/)

**🛠 Tech Stack:** React (Vite) · Tailwind CSS · motion/react · lucide-react · hls.js

### Background Video
- Source: `https://stream.mux.com/hUT6X11m1Vkw1QMxPOLgI761x2cfpi9bHFbi5cNg4014.m3u8`
- `autoPlay loop muted playsInline` · 100% opacity (no overlay)
- Memoized `BackgroundVideo` component via hls.js — proper cleanup on unmount to prevent `AbortError`
- `z-index: -10` (behind all content)

### Layout & Styling
| Token | Value |
|-------|-------|
| Headings font | Switzer (Medium, tight tracking) |
| Body font | Geist |
| Top bar | 5px gradient — `from-[#ccf] via-[#e7d04c] to-[#31fb78]` |

**Navbar:** Logo left · Links centered (`Features`, `Pricing`, `Reviews`) · Auth right (`Sign In`, `Sign Up`) · Mobile: hamburger → full-width dropdown

### Hero Content
- **Headline:** *"Manage your online store while save 3x operating cost"* — `text-6xl`, tight leading
- **Subhead:** *"ClearInvoice takes the hassle out of billing with easy-to-use tools."* — White/90
- **Animations:** Staggered fade-up via motion/react (Text → Buttons → Social Proof)

### Button Styles

**Primary Button**
- Background: gradient `from-[#FF3300] to-[#EE7926]`
- Glow: absolute `div` behind with `bg-orange-600 blur-lg opacity-20`
- Inner stroke: `border-white/20` (1.5px) for glassy edge
- Hover: `scale-1.05` · glow → `opacity-60` · Arrow icon slides in from left

**Secondary Button**
- Background: `bg-white/90 backdrop-blur`
- Inner stroke: `border-black/5` (1.5px)
- Hover: `scale-1.05` · background → solid white

### Social Proof
- 3 overlapping user avatars with borders
- *"Trusted by 210k+ stores worldwide"*

---

## 5. Synapse — Innovation Hero

**🔗 Live Preview:** [video-hero-section.vercel.app](https://video-hero-section.vercel.app/)

**🛠 Tech Stack:** React · Tailwind CSS · Framer Motion · hls.js

### Navbar (Fixed, Blurred Glass)
| Element | Detail |
|---------|--------|
| Logo | Text *"Synapse"* — `font-medium tracking-tight` white |
| Links | Features (active: gradient border) · Insights · About · ~~Case Studies~~ · Contact |
| CTA | *"Get Started for Free"* — White/Gray gradient button |

### Hero Content (Centered, `z-10`)
- **Badges:** Row of 3 glass-effect pills — *"Integrated with"* + Icon
- **Headline:** *"Where Innovation Meets Execution"* — ~80px, tight tracking, fade-in animation
- **Subtext:** 2-line description about testing and deployment
- **Buttons:**
  - `Get Started for Free` — solid black bg, white border
  - `Let's Get Connected` — transparent glass style
- **Logo Marquee:** Static row of grayscale (40% opacity) placeholder SVG logos at bottom

### Background Video
- Source: `https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8`
- Memoized `VideoPlayer` via hls.js · proper cleanup on unmount
- 100% opacity · `loop muted autoplay`
- Container: **80vh height** · positioned `absolute bottom-[35vh]` — floating behind content

### Animations (motion/react)
Staggered fade-in-up on load: Badges → Headline → Subtitle → Buttons

---

## 6. Automotive Dealership Hero

**🔗 Live Preview:** [hero-drive-dream.lovable.app](https://hero-drive-dream.lovable.app/)

**🛠 Tech Stack:** React · Tailwind CSS · Google Fonts (Inter 400/500/600, Bebas Neue)

### Background
- Full viewport height (`min 600px`, `max 965px`) · dark fallback `#010101`
- Looping, muted, autoplaying video — `object-cover`
  - URL: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260213_051817_c7d8ccc6-bfaa-417c-8474-e5cefeea26b4.mp4`
- Top gradient overlay: 260px · `black/30 → transparent`
- Bottom gradient overlay: 260px · `black/30 → transparent`

### Decorative Large Text
- *"NEW ERA"* — centered, ~75% width (max `1073px`), positioned ~15% from top
- Font: Bebas Neue · Bold · All-caps · behind content, above video
- Fill: vertical gradient — `white 83% opacity` top → `white 12% opacity` bottom

### Navbar (Pinned Top, `px-20` desktop)
| Area | Content |
|------|---------|
| **Left** | 28×28 pinwheel logo icon (white) + *"Logoipsum"* in Inter ~24px — brand name hidden on small screens |
| **Center** | `Home` · `Shop` · `Blog` · `About Us` · `Contact Us` — Inter, `#EEEFF2`, `-0.32px` letter-spacing — hidden below `lg` |
| **Right** | *"Sign In"* text link (`#FBFBFD`) + white `Cart` button (48px tall) with cart icon (18×18, `#272835`) — Sign In hidden on small screens |

### Bottom CTA Area (Pinned Bottom, same padding)

**Left side**
- Paragraph — Inter · white · ~20px/30px · max-width `414px`:
  > *"Choose from thousands of certified cars you can trust, transparently priced, because buying a car should feel exciting."*
- `Shop Now` button (48px tall) — white, rounded 8px, arrow-right icon, Inter medium, dark text `#272835`, border `#EEEFF2`, subtle shadow

**Right side**
- Tagline — Bebas Neue · white · `64px` desktop (`48px–60px` smaller) · line-height `1` · max-width `466px`:
  > *"Find the perfect car that fits our journey"*

> **Responsive:** Left + right in a single bottom row on large screens · stack vertically on smaller screens

---

> **More templates coming soon.**

---

## 7. Ethereal Glow — Talent Acquisition Hero

**🔗 Live Preview:** [ethereal-glow-hero.lovable.app](https://ethereal-glow-hero.lovable.app)

**🛠 Tech Stack:** React · Vite · Tailwind CSS · TypeScript · shadcn/ui · @fontsource/geist-sans

### Theme & Design Tokens (`index.css`)
Single dark theme (no light/dark toggle). All colors defined in HSL:

| Token | Value |
|-------|-------|
| `--background` | `260 87% 3%` |
| `--foreground` | `40 6% 95%` |
| `--card` | `240 6% 9%` |
| `--primary` | `262 83% 58%` |
| `--primary-foreground` | `0 0% 100%` |
| `--secondary` | `240 4% 16%` |
| `--muted-foreground` | `240 5% 65%` |
| `--border` | `240 4% 20%` |
| `--ring` | `262 83% 58%` |
| `--radius` | `0.75rem` |
| `--hero-heading` | `40 10% 96%` |
| `--hero-sub` | `40 6% 82%` |

**Font imports** (Geist Sans weights 400 / 500 / 600 / 700 via `@fontsource/geist-sans`).  
Body font stack: `'Geist Sans', 'Inter', system-ui, sans-serif`.

### Liquid Glass Utility (`index.css` — `@layer utilities`)
`.liquid-glass` — `rgba(255,255,255,0.01)` background · `backdrop-filter: blur(4px)` · `box-shadow: inset 0 1px 1px rgba(255,255,255,0.1)`.  
`::before` pseudo-element draws a 1.4px gradient border (top & bottom edges: `rgba(255,255,255,0.45)`, mid: fully transparent) using CSS mask `xor` trick — no visible border rectangle, only the edge shimmer.

### Tailwind Config (`tailwind.config.ts`)
- All CSS token colors mapped to `hsl(var(--token))`
- Extra color group: `hero.heading` → `hsl(var(--hero-heading))`, `hero.sub` → `hsl(var(--hero-sub))`
- Custom keyframe **marquee**: `0% { transform: translateX(0%) }` → `100% { transform: translateX(-50%) }`
- Animation: `marquee: "marquee 20s linear infinite"`

### Button Variants (shadcn `button.tsx`)
Two additional variants added alongside the defaults:

| Variant | Styles |
|---------|--------|
| `hero` | `bg-primary text-primary-foreground rounded-full px-6 py-3 text-base font-medium hover:bg-primary/90` |
| `heroSecondary` | `liquid-glass text-foreground rounded-full px-6 py-3 text-base font-normal hover:bg-white/5` |

### Navbar Component
- Full-width · `py-5 px-8` · `flex row justify-between`
- **Left:** `<img>` logo — `src/assets/logo.png` · `height: 32px`
- **Center:** Plain buttons — *"Features"* (+ `ChevronDown`), *"Solutions"*, *"Plans"*, *"Learning"* (+ `ChevronDown`) — `text-foreground/90 text-base gap-1`
- **Right:** `heroSecondary` variant `<Button size="sm">` — *"Sign Up"* · `rounded-full px-4 py-2`
- Below navbar: full-width 1px gradient divider — `mt-[3px] h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent`

### Hero Section
- `<section>` with `bg-background relative overflow-hidden`
- Navbar + divider at the top

**Headline**
- Text: *"Grow"*
- Font: General Sans · weight normal · `text-[230px]` · `leading-[1.02]` · `tracking-[-0.024em]`
- Style: `bg-clip-text text-transparent` with `background-image: linear-gradient(223deg, #E8E8E9 0%, #3A7BBF 104.15%)`

**Subtext**
- `text-hero-sub text-center text-lg leading-8 max-w-md mt-4 opacity-80`
- Two lines (split with `<br>`): *"The most powerful AI ever deployed"* / *"in talent acquisition"*

**CTA Button**
- `heroSecondary` variant · label *"Schedule a Consult"* · `px-[29px] py-[24px]`
- Wrapped in `<div className="mt-8 mb-[66px]">`

### Social Proof / Video Section
Immediately below the hero section — displays trust signals or background video content that reinforces the talent acquisition value proposition.

### Logo Marquee
- Infinite horizontal scroll using the custom `marquee` animation
- Logos duplicated (2× set) so the loop is seamless at `translateX(-50%)`
- Grayscale / low-opacity treatment to keep focus on headline

---

## 8. Velorah — Cinematic Video Hero

**🔗 Live Preview:** [velorah.lovable.app](https://velorah.lovable.app/)

**🛠 Tech Stack:** React · Vite · Tailwind CSS · TypeScript · shadcn/ui

### Overview
Create a single-page hero section with a fullscreen looping background video, glassmorphic navigation, and cinematic typography.

### Background Video
- Fullscreen, absolute-positioned, `autoPlay loop muted playsInline`
- `object-cover w-full h-full` to fill the entire viewport without distortion
- Subtle dark overlay (`bg-black/40`) placed above the video to ensure text legibility
- `z-index: -10` (behind all content)

### Glassmorphic Navigation
- Fixed top bar · `backdrop-blur-md` · `bg-white/10` · thin `border-b border-white/10`
- **Left:** Brand logo / wordmark in white
- **Center:** Navigation links — white text with `hover:text-white/70` transition
- **Right:** CTA button using `shadcn/ui` `<Button>` — ghost or outline variant styled for glass context
- Full responsiveness: hamburger menu on mobile using shadcn/ui `Sheet` or similar

### Hero Content (Centered, `z-10`)
| Element | Detail |
|---------|--------|
| **Headline** | Cinematic large type — white, tight tracking (`tracking-tight` or tighter), `font-bold` or `font-light` for contrast |
| **Subtitle** | 1–2 lines of supporting text — `text-white/80`, `text-lg` or `text-xl` |
| **CTA Buttons** | Primary (solid white, dark text) + Secondary (ghost/glass style) — both using shadcn/ui `<Button>` |

### Typography
- Use a display-weight Google Font (e.g., **Playfair Display**, **Cormorant**, or **DM Serif Display**) for the headline to achieve a cinematic feel
- Body / nav text in a clean sans-serif (e.g., **Inter** or **Geist**)

### Tailwind / shadcn/ui Notes
- Glassmorphism utility: `bg-white/10 backdrop-blur-md border border-white/20 rounded-xl`
- All interactive elements built with shadcn/ui primitives (`Button`, `NavigationMenu`, `Sheet`)
- Dark-mode-first: single dark theme, no toggle needed

---

## 9. Vex — Modern SaaS Landing

**🔗 Live Preview:** [vex-landing.lovable.app](https://vex-landing.lovable.app/)

**🛠 Tech Stack:** React · Vite · Tailwind CSS · TypeScript · shadcn/ui · Framer Motion · lucide-react

### Overview
A full-page modern SaaS landing experience with a dark gradient mesh background, animated hero, multi-section feature layout, pricing cards, and a footer — all built as a single-page application with smooth scroll transitions.

---

### Theme & Design Tokens (`index.css`)
Single dark theme only. All colors defined in HSL:

| Token | Value |
|-------|-------|
| `--background` | `240 10% 4%` |
| `--foreground` | `0 0% 97%` |
| `--card` | `240 6% 8%` |
| `--card-foreground` | `0 0% 97%` |
| `--primary` | `258 90% 66%` |
| `--primary-foreground` | `0 0% 100%` |
| `--secondary` | `240 5% 14%` |
| `--muted` | `240 5% 12%` |
| `--muted-foreground` | `240 5% 60%` |
| `--border` | `240 5% 18%` |
| `--ring` | `258 90% 66%` |
| `--radius` | `0.625rem` |
| `--accent` | `258 90% 66%` |
| `--accent-foreground` | `0 0% 100%` |

**Font:** Inter (weights 400 / 500 / 600 / 700) via Google Fonts.  
Body font stack: `'Inter', system-ui, sans-serif`.

---

### Global Background
- Base: `bg-background` (`hsl(240 10% 4%)`)
- Gradient mesh overlay (absolutely positioned, `pointer-events-none`, full viewport):
  - Radial blob 1: `600px × 600px` · `hsl(258 90% 66% / 0.12)` · centered at `20% 20%`
  - Radial blob 2: `500px × 500px` · `hsl(220 90% 60% / 0.08)` · centered at `80% 70%`
  - Radial blob 3: `400px × 400px` · `hsl(280 80% 60% / 0.06)` · centered at `50% 50%`
- Subtle CSS noise texture via SVG `feTurbulence` filter at `opacity-[0.03]`

---

### Navbar (Sticky, `top-0 z-50`)
- Height: `64px` · `px-6 md:px-10`
- Background: `bg-background/80 backdrop-blur-xl border-b border-border/50`
- **Left:** SVG wordmark *"Vex"* — white, weight 700, tracking tight, with a small violet (`--primary`) accent dot after the letter
- **Center (desktop only):** `hidden md:flex gap-8` — links: *"Product"* · *"Features"* · *"Pricing"* · *"Docs"* · *"Blog"* — `text-muted-foreground text-sm hover:text-foreground transition-colors`
- **Right:**
  - *"Log in"* — `text-sm text-muted-foreground hover:text-foreground`
  - `<Button>` — *"Get started"* — `bg-primary text-primary-foreground rounded-full px-5 py-2 text-sm font-medium hover:bg-primary/90`
- **Mobile:** hamburger icon (lucide `Menu`) → full-screen slide-in drawer (`shadcn/ui Sheet`) with same links stacked vertically

---

### Hero Section
`<section id="hero">` · `min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16`

#### Announcement Badge
- Pill badge above headline: `inline-flex items-center gap-2 rounded-full border border-border/80 bg-secondary/50 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur-sm`
- Content: Sparkles icon (lucide, 12px, violet) + *"Introducing Vex 2.0 — Faster, smarter, better"* + `ChevronRight` icon

#### Headline
- Font: Inter · `font-bold` · `text-5xl md:text-7xl lg:text-[82px]` · `leading-[1.05]` · `tracking-[-0.03em]`
- Two lines:
  ```
  Ship products
  10× faster.
  ```
- *"Ship products"* — `text-foreground`
- *"10×"* — `bg-clip-text text-transparent bg-gradient-to-r from-[#a78bfa] via-[#818cf8] to-[#60a5fa]`
- *"faster."* — `text-foreground`

#### Subtext
- `text-muted-foreground text-lg md:text-xl max-w-xl mt-6 leading-relaxed`
- *"Vex gives your team an AI-native workspace to plan, build, and ship — without the overhead."*

#### CTA Buttons
```
[ Get started free ]   [ Watch demo  ▶ ]
```
- **Primary:** `<Button size="lg">` — `bg-primary text-white rounded-full px-8 py-3 text-base font-semibold shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-primary/40 transition-all`
- **Secondary:** `<Button variant="outline" size="lg">` — `rounded-full px-8 py-3 text-base border-border/60 bg-transparent hover:bg-secondary/60` — Play icon (lucide `Play`, 16px) inline before *"Watch demo"*
- Both wrapped in `flex flex-col sm:flex-row gap-4 mt-10 justify-center`

#### Social Proof
Below buttons, `mt-8 flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground`:
- 5 overlapping avatar circles (32px, `ring-2 ring-background`)
- *"Loved by **12,000+** teams worldwide"* (bold count)
- Separator `·`
- ★★★★★ (5 gold stars) + *"4.9 / 5"*

#### Product Screenshot / Dashboard Preview
`mt-16 relative w-full max-w-5xl mx-auto`
- Outer glow: `absolute inset-0 rounded-2xl bg-primary/10 blur-3xl scale-95 -z-10`
- Container: `rounded-2xl border border-border/60 bg-card overflow-hidden shadow-2xl`
- Mock dashboard UI inside — dark card, sidebar with icon navigation, main area with:
  - Top bar: search input + avatar
  - Kanban columns: **Todo** · **In Progress** · **Done** — each with task cards showing title, assignee avatar, priority badge, and due date chip
  - Colors: violet priority dots, status pill tags (`bg-primary/15 text-primary text-xs rounded-full px-2 py-0.5`)

---

### Features Section
`<section id="features">` · `py-24 px-6`

#### Section Header (Centered)
- Overline: `text-primary text-sm font-semibold uppercase tracking-widest`— *"Features"*
- Headline: `text-4xl md:text-5xl font-bold tracking-tight mt-3` — *"Everything your team needs"*
- Subhead: `text-muted-foreground text-lg max-w-2xl mx-auto mt-4`

#### Feature Grid
`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto`

Each card: `rounded-2xl border border-border/60 bg-card p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all`

| Icon (lucide) | Title | Description |
|---------------|-------|-------------|
| `Zap` (violet) | **Blazing fast** | Sub-100ms response times with edge-deployed infrastructure across 50+ regions. |
| `Brain` (blue) | **AI-native** | GPT-4-powered suggestions, auto-summaries, and smart task routing built in. |
| `Users` (indigo) | **Real-time collab** | Multiplayer cursors, live comments, and conflict-free document editing. |
| `Shield` (emerald) | **Enterprise security** | SOC 2 Type II certified · SSO · RBAC · end-to-end encryption at rest and in transit. |
| `BarChart3` (violet) | **Insights & analytics** | Custom dashboards, velocity charts, and burndown reports in one click. |
| `Plug` (sky) | **100+ integrations** | GitHub · Slack · Linear · Jira · Notion · Figma and more — all via native sync. |

Card icon container: `w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4` · icon size: `20px`

---

### How It Works Section
`<section id="how-it-works">` · `py-24 px-6 bg-secondary/30`

#### Section Header (Centered)
- Overline: *"How it works"* · same overline style as Features
- Headline: *"From idea to shipped in minutes"*

#### 3-Step Horizontal Flow (`flex flex-col md:flex-row gap-0 max-w-4xl mx-auto mt-16`)
Each step: `flex-1 flex flex-col items-center text-center px-8`

Divider between steps (desktop only): `hidden md:block w-px bg-border self-stretch my-8`

| Step | Number badge | Title | Body |
|------|-------------|-------|------|
| 1 | `01` | **Connect your stack** | Sync GitHub repos, Figma files, Slack channels — takes under 2 minutes. |
| 2 | `02` | **Plan with AI** | Describe a feature in plain English; Vex breaks it into tasks, assigns owners, and estimates effort. |
| 3 | `03` | **Ship with confidence** | Automated status updates, changelog generation, and release notes — zero manual overhead. |

Number badge style: `text-6xl font-black text-primary/20 leading-none mb-4`

---

### Pricing Section
`<section id="pricing">` · `py-24 px-6`

#### Section Header
- Overline: *"Pricing"* · Headline: *"Simple, transparent pricing"*
- Toggle pill (monthly / annual) · `bg-secondary rounded-full p-1 flex gap-1` · annual shows *"Save 20%"* badge in `bg-primary/15 text-primary text-xs rounded-full px-2`

#### Pricing Cards (`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12`)

**Starter** (free)
- Price: `$0 / mo`
- Up to 5 members · 10 projects · Community support
- CTA: *"Get started free"* — outline button

**Pro** ⭐ Most popular
- Price: `$18 / mo per seat` (annual) · `$24 mo-to-mo`
- Highlighted card: `border-primary/60 bg-primary/5 shadow-xl shadow-primary/10`
- *"Most popular"* badge: `absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-semibold rounded-full px-3 py-1`
- Unlimited members & projects · Priority support · AI features · Analytics
- CTA: *"Start free trial"* — filled primary button

**Enterprise**
- Price: *"Custom"*
- SSO · SLA · Dedicated CSM · On-premise option · Custom integrations
- CTA: *"Talk to sales"* — outline button

Feature list items use `Check` icon (lucide, emerald, 16px) + `text-sm text-muted-foreground`

---

### Testimonials Section
`<section id="testimonials">` · `py-24 px-6 bg-secondary/30`

#### Header: *"Trusted by teams at"*
Logo marquee (same pattern as Ethereal Glow template):
- Duplicated set of 8 grayscale SVG company logos at `opacity-40`
- `animate-marquee` (30s, linear, infinite)

#### Testimonial Cards (`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-16`)
Each: `rounded-2xl border border-border/60 bg-card p-6`
- Quote text: `text-foreground/90 text-sm leading-relaxed`
- Author row: avatar (`w-9 h-9 rounded-full`) + name (`text-sm font-medium`) + title (`text-xs text-muted-foreground`)

---

### CTA Banner Section
`<section>` · `py-20 px-6`

Centered card: `max-w-3xl mx-auto rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/30 p-12 text-center relative overflow-hidden`
- Decorative: large radial glow `absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-primary/20 rounded-full blur-3xl -z-10`
- Headline: `text-4xl md:text-5xl font-bold` — *"Ready to move faster?"*
- Sub: `text-muted-foreground mt-4` — *"Join 12,000+ teams already using Vex."*
- Button: *"Get started free — it's free forever"* — primary filled, `rounded-full px-10 py-4 text-base mt-8`

---

### Footer
`<footer>` · `border-t border-border/50 py-14 px-6`

`max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8`

| Column | Links |
|--------|-------|
| **Vex** (logo + tagline *"Ship faster, together."*) | — |
| **Product** | Features · Changelog · Roadmap · Status |
| **Company** | About · Blog · Careers · Press |
| **Resources** | Docs · API · Community · Templates |
| **Legal** | Privacy · Terms · Cookies · Security |

Bottom bar: `flex justify-between items-center pt-8 border-t border-border/40 text-xs text-muted-foreground`
- *"© 2025 Vex, Inc. All rights reserved."*
- Social icons: Twitter/X · GitHub · LinkedIn (lucide icons, 18px, `hover:text-foreground`)

---

### Animations (Framer Motion)
| Element | Animation |
|---------|-----------|
| Announcement badge | `fadeIn` — `opacity 0→1`, `y 10→0`, `delay 0.1s` |
| Headline | `fadeIn` — `opacity 0→1`, `y 20→0`, `delay 0.2s` |
| Subtext | `fadeIn` — `opacity 0→1`, `y 20→0`, `delay 0.35s` |
| CTA buttons | `fadeIn` — `opacity 0→1`, `y 20→0`, `delay 0.5s` |
| Social proof | `fadeIn` — `opacity 0→1`, `delay 0.65s` |
| Dashboard preview | `fadeIn` — `opacity 0→1`, `y 40→0`, `delay 0.7s`, `duration 0.8s` |
| Feature cards | `staggerChildren 0.08s` · each `opacity 0→1, y 30→0` on viewport entry |
| Pricing cards | `staggerChildren 0.12s` · same pattern |

Use `whileInView` + `viewport={{ once: true, margin: "-100px" }}` for scroll-triggered sections.

---

### Responsiveness
- Headline: `text-5xl` (mobile) → `text-7xl` (md) → `text-[82px]` (lg)
- Feature grid: 1 col (mobile) → 2 col (md) → 3 col (lg)
- Pricing grid: 1 col (mobile) → 3 col (md)
- Navbar collapses to hamburger below `md`
- Dashboard preview hidden below `sm`, shown from `sm` upward
- All horizontal flex rows fall back to `flex-col` on mobile

---

## 10. CodeNest — Coding Education Hero

**🔗 Live Preview:** [glow-glass-code.lovable.app](https://glow-glass-code.lovable.app/)

**🛠 Tech Stack:** React · Tailwind CSS · hls.js · lucide-react

### Prompt

Create a high-end, dark-themed hero section for a coding education platform called 'CodeNest' using React and Tailwind CSS. The design must be responsive and follow these precise specifications:

1. Background & Layout:

Background: Implement a full-screen background video using the HLS stream: https://stream.mux.com/tLkHO1qZoaaQOUeVWo8hEBeGQfySP02EPS02BmnNFyXys.m3u8. Use hls.js and set enableWorker: false to ensure stability in sandboxed environments.

Overlays: Set the video to 60% opacity. Add a dark linear gradient from the left (#070b0a to transparent) and a bottom-up gradient for readability.

Grid System: Add three thin vertical grid lines (white/10 opacity) at the 25%, 50%, and 75% marks across the screen (visible on desktop).

Central Glow: Place a large horizontal SVG ellipse glow in the center-top area with a cyan/dark green hue, using a 25px Gaussian blur filter.

2. The Liquid Glass Card:

Component: Create a 200x200px floating card positioned above the main headline, shifted exactly 50px upwards using translate-y-[-50px].

CSS Styling (Liquid Glass):

background: rgba(255, 255, 255, 0.01) with background-blend-mode: luminosity.

backdrop-filter: blur(4px).

box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1).

Border Effect: A ::before pseudo-element with inset: 0, padding: 1.4px, and a 180-degree white linear gradient. Use -webkit-mask-composite: xor and mask-composite: exclude to create a sharp, high-end border frame.

Content: '[ 2025 ]' tag (14px), 'Taught by Industry Professionals' headline (18px, using Instrument Serif italic for 'Industry'), and a small description (11px).

3. Hero Content & Typography:

Eyebrow: 'Career-Ready Curriculum' in Plus Jakarta Sans, bold, 11px, color #5ed29c.

Main Headline: 'LAUNCH YOUR CODING CAREER.' in Inter Extra Bold, uppercase, tracking-tight. Scale from 40px (mobile) to 72px (desktop). The final period must be green (#5ed29c).

Description: 'Master in-demand coding skills...' in Inter, 14px, 70% white opacity, max-width 512px.

Primary CTA: 'Get Started' button with an ArrowRight icon. Rounded-full, background #5ed29c, text #070b0a, uppercase, bold.

4. Global Navigation:

Header: Sticky/Absolute header with a white minimalist logo.

Desktop Menu: Links for 'PROJECTS', 'BLOG', 'ABOUT', 'RESUME' in Inter, 16px. Hover state: #5ed29c.

Mobile Menu: A functional hamburger menu that toggles a full-screen dark overlay.

5. Required Imports:

Fonts: Inter, Plus Jakarta Sans, and Instrument Serif (italic).

Icons: lucide-react (ArrowRight, Menu, X).

Library: hls.js for video streaming.

---

## 11. Gaze Aether — Data Insights Hero

**🔗 Live Preview:** [gaze-aether.lovable.app](https://gaze-aether.lovable.app/)

**🛠 Tech Stack:** React · Vite · Tailwind CSS · TypeScript · shadcn/ui

### Prompt

Create a modern hero section with a looping video background and the following specifications:

#### Video Background

- **URL:** `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260329_050842_be71947f-f16e-4a14-810c-06e83d23ddb5.mp4`
- **Size:** 115% width and height
- **Position:** Centered horizontally, anchored to top with `object-top` focal point

#### Custom JavaScript Fade System (NO CSS transitions)

- 250ms `requestAnimationFrame`-based fade-in on load/loop start
- 250ms fade-out when 0.55 seconds remain before video end
- `fadingOutRef` boolean prevents re-triggering fade-out from repeated `timeUpdate` events
- On `ended`: opacity set to 0, 100ms delay, reset `currentTime = 0`, play, fade back in
- Each new fade cancels running animation frames to prevent competing animations
- Fades resume from current opacity (no snapping)

#### Fonts Required

- Schibsted Grotesk (weights: 400, 500, 600, 700)
- Inter (weights: 400, 500, 600, 700)
- Noto Sans (weights: 400, 500, 600, 700)
- Fustat (weights: 400, 500, 600, 700)

#### Navigation Bar

- **Logo:** "Logoipsum" (Schibsted Grotesk SemiBold, 24px, -1.44px tracking)
- **Menu items** (Schibsted Grotesk Medium, 16px, -0.2px tracking):
  - Platform
  - Features (with dropdown chevron icon)
  - Projects
  - Community
  - Contact
- **Right side buttons:**
  - "Sign Up" (transparent background, 82px width)
  - "Log In" (black background, white text, 101px width)
- **Padding:** 120px horizontal, 16px vertical

#### Hero Content (moved up 50px with `-mt-[50px]`)

**Badge Component:**
- Dark badge with star icon + "New" text
- Light background with text: "Discover what's possible"
- Font: Inter Regular, 14px
- Rounded corners with subtle shadow

**Main Headline:**
- Text: "Transform Data Quickly"
- Font: Fustat Bold, 80px, -4.8px tracking, `line-height: none`
- Color: Black, center-aligned

**Subtitle:**
- Text: "Upload your information and get powerful insights right away. Work smarter and achieve goals effortlessly."
- Font: Fustat Medium, 20px, -0.4px tracking
- Color: #505050
- Max-width: 736px, width: 542px

**Search Input Box:**
- Backdrop blur with dark transparent background (`rgba(0,0,0,0.24)`)
- Dimensions: 728px max-width, 200px height, rounded 18px
- **Top row:** Credit info
  - Left: "60/450 credits" with green "Upgrade" button
  - Right: AI icon + "Powered by GPT-4o"
  - Font: Schibsted Grotesk Medium, 12px, white text
- **Main input area:**
  - White background, rounded 12px, shadow
  - Placeholder: "Type question..." (16px, `rgba(0,0,0,0.6)`)
  - Black circular submit button with up-arrow icon (36px)
- **Bottom row:**
  - Left: Three action buttons (gray backgrounds, rounded 6px):
    - "Attach" with paperclip icon
    - "Voice" with microphone icon
    - "Prompts" with search icon
  - Right: Character counter "0/3,000" (12px, gray)

#### Icons (SVG paths from imported file)

- Chevron down arrow
- Up arrow
- Star icon
- AI sparkle icon
- Attach / paperclip icon
- Voice / microphone icon
- Search icon

#### Spacing

| Pair | Gap |
|------|-----|
| Navigation → Hero content | 60px |
| Header → Search box | 44px |
| Badge → Title | 34px |
| Title → Subtitle | 34px |
| Hero content negative top margin | -50px |
| Horizontal padding | 120px |

#### Color Scheme

| Token | Value |
|-------|-------|
| Black text | `#000000` |
| Gray text | `#505050` |
| Light gray backgrounds | `#f8f8f8` |
| Green upgrade button | `rgba(90, 225, 76, 0.89)` |
| White | `#ffffff` |
| Transparent overlay | `rgba(0, 0, 0, 0.24)` |
| Dark badge | `#0e1311` |

#### Component Structure

- `VideoBackground` component with custom fade logic
- Navigation bar (fixed spacing, horizontal layout)
- Hero content container (centered, max-width constraints)
- Nested components for badge, header, and search input
- All elements positioned over full-screen video background

---

## 12. Portfolio Boom — Dark Portfolio Landing

**🔗 Live Preview:** [portfolio-boom.lovable.app](https://portfolio-boom.lovable.app/)

**🛠 Tech Stack:** React · Vite · Tailwind CSS · TypeScript · GSAP · Framer Motion · hls.js

### Prompt

Build a single-page dark portfolio landing page using React + Vite + Tailwind CSS + TypeScript + GSAP + Framer Motion + hls.js.

---

#### Global Design System

##### Fonts
Google Fonts import: Inter (300–700) and Instrument Serif (italic, 400).
- `--font-body`: 'Inter', sans-serif → Tailwind `font-body`
- `--font-display`: 'Instrument Serif', serif → Tailwind `font-display`

##### CSS Custom Properties (HSL, no `hsl()` wrapper — Tailwind adds it)

```css
--bg: 0 0% 4%;
--surface: 0 0% 8%;
--text: 0 0% 96%;
--muted: 0 0% 53%;
--stroke: 0 0% 12%;
--accent: 0 0% 96%;
```

##### Tailwind Custom Colors

```js
bg: "hsl(var(--bg))",
surface: "hsl(var(--surface))",
"text-primary": "hsl(var(--text))",
muted: "hsl(var(--muted))",
stroke: "hsl(var(--stroke))",
```

##### Accent Gradient
`linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)` — used on logo ring, hover borders, progress bars. CSS utility class `.accent-gradient`.

##### Custom Animations (in `index.css`)
- `@keyframes scroll-down` — `translateY(-100%)` → `translateY(200%)`, 1.5s ease-in-out infinite
- `@keyframes role-fade-in` — opacity 0 + `translateY(8px)` → opacity 1 + `translateY(0)`, 0.4s ease-out
- `@keyframes gradient-shift` — `background-position 0% 50%` → `100% 50%` → `0% 50%`, 6s ease infinite (for animated gradient borders)

##### Theme
Forced dark theme — no light mode toggle. `body` gets `bg-bg text-text-primary`.

---

#### Page Structure (`Index.tsx`)

- Show a full-screen `<LoadingScreen />` while `isLoading` is true; hide it once assets are ready.
- After loading, render all sections in a single scrollable page:
  1. `<Navbar />`
  2. `<HeroSection />`
  3. `<AboutSection />`
  4. `<WorkSection />`
  5. `<SkillsSection />`
  6. `<ContactSection />`
  7. `<Footer />`

---

#### Loading Screen (`LoadingScreen.tsx`)

- Full-viewport overlay (`bg-bg`), centered content
- Animated logo ring using the accent gradient (spinning border via `gradient-shift` animation)
- Counter that counts up from 0 → 100% over ~2 seconds using `requestAnimationFrame`
- Fade-out the overlay once counter reaches 100

---

#### Navbar (`Navbar.tsx`)

- Fixed top, full-width, `backdrop-blur` + subtle `border-b border-stroke`
- **Left:** Monogram logo (e.g. `JD`) inside a small circle with accent gradient ring
- **Center:** Navigation links — About · Work · Skills · Contact — smooth-scroll on click
- **Right:** `"Hire Me"` pill button with accent gradient border on hover
- Hides/shows on scroll (slides up when scrolling down, slides back down when scrolling up) using GSAP ScrollTrigger

---

#### Hero Section (`HeroSection.tsx`)

- Full-viewport height, centered content, `bg-bg`
- **Name headline:** Large display text using `font-display` (Instrument Serif italic)
- **Role ticker:** Cycles through an array of roles (e.g. "Frontend Developer", "UI Designer", "Creative Coder") using the `role-fade-in` animation; each role fades in and out on a timer
- **Tagline:** Short muted subtitle line below the role
- **CTA buttons:** `"View Work"` (accent gradient fill) + `"Download CV"` (ghost/outline)
- **Scroll indicator:** Animated downward arrow using `scroll-down` keyframes
- Entrance animations via Framer Motion (`opacity` + `y` stagger on children)

---

#### About Section (`AboutSection.tsx`)

- Two-column layout (text left, visual right) on desktop; stacked on mobile
- **Left:** Section label (`"About Me"`), multi-paragraph bio text, a row of stat counters (e.g. "3+ Years Experience", "20+ Projects")
- **Right:** Portrait image or abstract graphic inside a container with accent gradient border
- Scroll-triggered fade-in via GSAP ScrollTrigger

---

#### Work / Projects Section (`WorkSection.tsx`)

- Grid of project cards (2 columns desktop, 1 column mobile)
- **Each card:** Dark surface (`bg-surface`), project thumbnail, title, short description, tech-tag chips, and `"View Project"` link
- Card hover: accent gradient border appears (animated via `gradient-shift`)
- Cards animate in on scroll with staggered Framer Motion variants

---

#### Skills Section (`SkillsSection.tsx`)

- Section label + headline
- Skills listed as labeled progress bars
  - Bar fill uses the accent gradient
  - Fill width animates from 0 → target % on scroll entry (GSAP ScrollTrigger + `gsap.to`)
- Categories: e.g. Frontend, Tools, Design

---

#### Contact Section (`ContactSection.tsx`)

- Centered layout with headline and subtext
- Contact form: Name · Email · Message fields — `bg-surface` inputs with `border-stroke` and focus accent gradient border
- Submit button with accent gradient
- Social icon links row (GitHub, LinkedIn, Twitter/X) below the form

---

#### Footer (`Footer.tsx`)

- Single-row, `border-t border-stroke`, `py-6`
- Left: copyright text
- Right: "Back to top" link with upward arrow icon — smooth-scrolls to `#hero`

---

#### Color & Spacing Reference

| Token | Value |
|-------|-------|
| Background | `hsl(0 0% 4%)` |
| Surface | `hsl(0 0% 8%)` |
| Text primary | `hsl(0 0% 96%)` |
| Muted text | `hsl(0 0% 53%)` |
| Stroke / border | `hsl(0 0% 12%)` |
| Accent gradient | `#89AACC → #4E85BF` |

---

#### Animation & Interaction Summary

| Trigger | Library | Effect |
|---------|---------|--------|
| Page load | Framer Motion | Hero children stagger in (`opacity 0→1`, `y 20→0`) |
| Scroll enter | GSAP ScrollTrigger | Sections fade + slide up |
| Skill bars | GSAP | Width animates from 0 → value% |
| Role ticker | CSS + JS timer | `role-fade-in` keyframe cycles |
| Scroll indicator | CSS | `scroll-down` keyframe loop |
| Gradient borders | CSS | `gradient-shift` keyframe on hover |
| Navbar hide/show | GSAP ScrollTrigger | `y: -100%` ↔ `y: 0` |

---

## 13. Liquid Whisper Art — Cinematic Full-Page Landing

**🔗 Live Preview:** [liquid-whisper-art.lovable.app](https://liquid-whisper-art.lovable.app/)

**🛠 Tech Stack:** React · Vite · Tailwind CSS · TypeScript · Framer Motion · lucide-react

---

### Global Setup

**Font:** Instrument Serif (italic + regular) loaded via Google Fonts. Add to `index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');
```

**Background:** `bg-black` on `<body>` and every section.

---

### Liquid Glass CSS (`index.css`, inside `@layer components`)

```css
.liquid-glass {
  background: rgba(255, 255, 255, 0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: none;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}

.liquid-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.45) 0%,
    rgba(255, 255, 255, 0.15) 20%,
    rgba(255, 255, 255, 0) 40%,
    rgba(255, 255, 255, 0) 60%,
    rgba(255, 255, 255, 0.15) 80%,
    rgba(255, 255, 255, 0.45) 100%
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
```

Apply `.liquid-glass` as a utility class on every glass element throughout the page.

---

### Section 1 — Hero (`src/pages/Index.tsx`)

Full-screen container: `min-h-screen overflow-hidden relative flex flex-col bg-black`.

#### Background Video

- `absolute inset-0 w-full h-full object-cover object-bottom`
- URL: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4`
- Attributes: `muted autoPlay playsInline preload="auto"`
- **Starts at `opacity: 0`** (set via ref style, not CSS)

**Video fade logic (vanilla JS via refs, `requestAnimationFrame` — no CSS transitions):**

| Event | Behaviour |
|-------|-----------|
| `canplay` | Call `.play()`, then animate opacity `0 → 1` over 500 ms via rAF |
| `timeupdate` | When `duration - currentTime <= 0.55s`, animate opacity from current → `0` over 500 ms |
| `ended` | Set opacity `0`, wait 100 ms, reset `currentTime = 0`, call `.play()`, fade back to `1` over 500 ms |

This produces a seamless black-crossfade loop.

#### Navbar (`relative z-20 px-6 py-6`)

A `.liquid-glass rounded-full` pill: `max-w-5xl mx-auto px-6 py-3 flex items-center justify-between`.

| Side | Content |
|------|---------|
| **Left** | `Globe` icon (24 px, white) + *"Asme"* (`text-white font-semibold text-lg`). Desktop only: nav links *"Features" · "Pricing" · "About"* (`text-white/80 hover:text-white text-sm font-medium gap-8 ml-8`) |
| **Right** | *"Sign Up"* text button (`text-white text-sm font-medium`) + *"Login"* button (`.liquid-glass rounded-full px-6 py-2 text-white text-sm font-medium`) |

#### Hero Content

`relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-[20%]`

| Element | Spec |
|---------|------|
| **Heading** | `text-7xl md:text-8xl lg:text-9xl text-white tracking-tight whitespace-nowrap` · font-family `'Instrument Serif', serif` · Text: `Know it then <em>all</em>.` |
| **Email input** | `max-w-xl w-full`. Outer wrapper: `.liquid-glass rounded-full pl-6 pr-2 py-2 flex items-center gap-3`. Input: `bg-transparent text-white placeholder:text-white/40`. Submit: `bg-white rounded-full p-3 text-black` with `ArrowRight` (20 px) |
| **Subtitle** | `text-white text-sm leading-relaxed px-4` — *"Stay updated with the latest news and insights. Subscribe to our newsletter today and never miss out on exciting updates."* |
| **Manifesto button** | `.liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors` |

#### Social Icons Footer

`relative z-10 flex justify-center gap-4 pb-12`

Three `.liquid-glass rounded-full p-4` icon buttons: `Instagram`, `Twitter`, `Globe` (20 px each). Style: `text-white/80 hover:text-white hover:bg-white/5 transition-all`.

---

### Section 2 — About (`src/components/AboutSection.tsx`)

Uses `framer-motion` `useInView(ref, { once: true, margin: '-100px' })`.

`bg-black pt-32 md:pt-44 pb-10 md:pb-14 px-6 overflow-hidden`

Subtle radial overlay: `bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.03)_0%,_transparent_70%)]`.

| Element | Spec |
|---------|------|
| **Label** | *"About Us"* — `text-white/40 text-sm tracking-widest uppercase` · Animates `opacity 0→1, y 20→0` over 0.6 s |
| **Heading** | `text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight` · Animates `opacity 0→1, y 40→0` over 0.8 s, delay 0.1 s |

Heading text structure:
```
Pioneering then
  <em>ideas</em> (Instrument Serif italic, text-white/60) for
<br className="hidden md:block" />
  <em>minds that then</em> create, build, and inspire. (Instrument Serif italic, text-white/60)
```

---

### Section 3 — Featured Video (`src/components/FeaturedVideoSection.tsx`)

`bg-black pt-6 md:pt-10 pb-20 md:pb-32 px-6 overflow-hidden`. Max width: `max-w-6xl mx-auto`.

- Outer container animates `opacity 0→1, y 60→0` over 0.9 s.
- Video wrapper: `rounded-3xl overflow-hidden aspect-video relative`.
- Video: `w-full h-full object-cover` · `muted autoPlay loop playsInline preload="auto"`.
- URL: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4`
- Gradient overlay: `absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent`.

**Bottom overlay** (`absolute bottom-0 left-0 right-0 p-6 md:p-10 flex flex-col md:flex-row items-end justify-between gap-4`):

| Side | Content |
|------|---------|
| **Left** | `.liquid-glass rounded-2xl p-6 md:p-8 max-w-md`. Label *"Our Approach"* (`text-white/50 text-xs tracking-widest uppercase mb-3`). Body: *"We believe in the power of curiosity-driven exploration. Every project starts with a question, and every answer opens a new door to innovation."* (`text-white text-sm md:text-base leading-relaxed`) |
| **Right** | `motion.button` — `.liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium` — *"Explore more"* · `whileHover={{ scale: 1.05 }}` · `whileTap={{ scale: 0.95 }}` |

---

### Section 4 — Philosophy (`src/components/PhilosophySection.tsx`)

`bg-black py-28 md:py-40 px-6 overflow-hidden`. Max width: `max-w-6xl mx-auto`.

**Heading:** `text-5xl md:text-7xl lg:text-8xl text-white tracking-tight mb-16 md:mb-24` · animates `opacity 0→1, y 40→0` over 0.8 s.
Text: `Innovation ` then `<em>x</em>` (Instrument Serif italic, `text-white/40`) then ` Vision`.

**Two-column grid:** `grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12`

| Column | Spec |
|--------|------|
| **Left** | `rounded-3xl overflow-hidden aspect-[4/3]` · animates from `opacity 0, x -40`. Video (`muted autoPlay loop playsInline preload="auto"`): `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4` |
| **Right** | Animates from `opacity 0, x 40`. Two text blocks separated by `w-full h-px bg-white/10`. |

Right column text blocks:

**Block 1**
- Label: *"Choose your space"* — `text-white/40 text-xs tracking-widest uppercase mb-4`
- Body: *"Every meaningful breakthrough begins at the intersection of disciplined strategy and remarkable creative vision. We operate at that crossroads, turning bold thinking into tangible outcomes that move people and reshape industries."* — `text-white/70 text-base md:text-lg leading-relaxed`

**Block 2**
- Label: *"Shape the future"*
- Body: *"We believe that the best work emerges when curiosity meets conviction. Our process is designed to uncover hidden opportunities and translate them into experiences that resonate long after the first impression."*

---

### Section 5 — Services (`src/components/ServicesSection.tsx`)

`bg-black py-28 md:py-40 px-6 overflow-hidden`. Max width: `max-w-6xl mx-auto`.

Subtle radial gradient: `bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_60%)]`.

**Header row** (`flex items-end justify-between mb-16 md:mb-24`): Animates `opacity 0→1, y 30→0` over 0.7 s.
- Left: *"What we do"* — `text-3xl md:text-5xl text-white tracking-tight`
- Right (desktop only): *"Our services"* — `text-white/40 text-sm`

**Two-card grid:** `grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8`

Each card: `.liquid-glass rounded-3xl overflow-hidden group` — animates `opacity 0→1, y 50→0` over 0.8 s, staggered by 0.15 s.

Card structure:
- **Video area:** `aspect-video overflow-hidden`. Video: `w-full h-full object-cover transition-transform duration-700 group-hover:scale-105`. Gradient overlay: `bg-gradient-to-t from-black/40 to-transparent`.
- **Body** (`p-6 md:p-8`): tag label (`text-white/40 text-xs tracking-widest uppercase`), `ArrowUpRight` icon in `.liquid-glass rounded-full p-2`, title (`text-white text-xl md:text-2xl mb-3 tracking-tight`), description (`text-white/50 text-sm leading-relaxed`).

| Card | Video URL | Tag | Title | Description |
|------|-----------|-----|-------|-------------|
| 1 | `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4` | Strategy | **Research & Insight** | *"We dig deep into data, culture, and human behavior to surface the insights that drive meaningful, lasting change."* |
| 2 | `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4` | Craft | **Design & Execution** | *"From concept to launch, we obsess over every detail to deliver experiences that feel effortless and look extraordinary."* |

---

### Animations Summary (Framer Motion)

All scroll-triggered animations use `useInView(ref, { once: true, margin: '-100px' })` or `whileInView` with `viewport={{ once: true }}`.

| Section | Element | Animation |
|---------|---------|-----------|
| About | Label | `opacity 0→1, y 20→0`, 0.6 s |
| About | Heading | `opacity 0→1, y 40→0`, 0.8 s, delay 0.1 s |
| Featured Video | Container | `opacity 0→1, y 60→0`, 0.9 s |
| Featured Video | *"Explore more"* button | `whileHover scale 1.05`, `whileTap scale 0.95` |
| Philosophy | Heading | `opacity 0→1, y 40→0`, 0.8 s |
| Philosophy | Left video column | `opacity 0→1, x -40→0` |
| Philosophy | Right text column | `opacity 0→1, x 40→0` |
| Services | Header | `opacity 0→1, y 30→0`, 0.7 s |
| Services | Cards | `opacity 0→1, y 50→0`, 0.8 s, stagger 0.15 s |

---

### Responsiveness

- Hero heading: `text-7xl` (mobile) → `text-8xl` (md) → `text-9xl` (lg)
- About heading: `text-4xl` → `text-6xl` → `text-7xl`
- Philosophy heading: `text-5xl` → `text-7xl` → `text-8xl`
- Services header: `text-3xl` → `text-5xl`
- Featured video overlay: `flex-col` (mobile) → `flex-row` (md)
- Philosophy grid: 1 col (mobile) → 2 col (md)
- Services grid: 1 col (mobile) → 2 col (md)
- Navbar links hidden on mobile; social icons always visible

---

## 14. SkyElite — Private Jet Hero

**🔗 Live Preview:** [skyelite-landing-dream.lovable.app](https://skyelite-landing-dream.lovable.app/)

**🛠 Tech Stack:** React · TypeScript · Tailwind CSS · Lucide React

### Layout & Background
- Outer container: `min-h-screen`, `bg-gray-50`
- Hero section: `relative`, `h-screen`, `overflow-hidden`
- Full-viewport video background (`h-screen`, `object-cover`)
  - URL: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_091828_e240eb17-6edc-4129-ad9d-98678e3fd238.mp4`
  - Attributes: `autoPlay`, `muted`, `loop`, `playsInline`

### Navigation Bar
- Max-width `7xl`, centered with `px-8 py-6`
- **Left:** Brand name "SkyElite" — `text-2xl`, `font-semibold`, `text-gray-900`
- **Center (desktop only, `md:flex`, hidden on mobile):** `Start` · `Story` · `Rates` · `Benefits` · `FAQ`
  - Links: `text-gray-900`, `hover:text-gray-700`, `transition-colors`
- **Right (mobile):** Hamburger toggle using Lucide React `Menu` / `X` icons
- Mobile dropdown: white/95 opacity (`bg-white/95`), `backdrop-blur`, rounded corners, shadow, stacked nav links

### Hero Content
- Content wrapper: `relative`, `h-full`, `flex flex-col`
- Main area: `flex-1`, `flex items-center justify-center`
- Inner block: centered, `-mt-80` (pulls content upward)

| Element | Detail |
|---------|--------|
| **Label** | `"PRIVATE JETS"` — `text-sm`, `font-semibold`, `text-gray-600`, `tracking-wider`, `mb-4`, uppercase |
| **Headline Line 1** | `"Premium."` — `text-6xl md:text-7xl lg:text-8xl`, `font-normal`, `text-gray-500`, `leading-none`, `tracking-tighter` |
| **Headline Line 2** | `"Accessible."` — same size, color `#202A36`, `margin-top: -12px` (negative overlap with line 1) |
| **Subtitle** | `"Your dedication deserves recognition."` — `text-lg md:text-xl`, `text-gray-600`, `mb-6`, `max-w-2xl` |
| **CTA Buttons** | Side-by-side, `gap-4`, centered |

### CTA Buttons
| Button | Style |
|--------|-------|
| **"Discover"** | `px-4 py-2`, `rounded-full`, `bg-gray-300`, `text-gray-800`, `font-medium`, `hover:bg-gray-400`, `transition-colors` |
| **"Book Now"** | `px-4 py-2`, `rounded-full`, `text-white`, `bg-[#202A36]`, `hover:bg-[#1a2229]`, `transition-colors` |

### Typography
- Font: **Inter** (Google Fonts — weights 400, 500, 600, 700)
- Applied globally to `body` via CSS import

### Technical Details
- React with TypeScript
- Tailwind CSS for all styling
- Lucide React for `Menu` / `X` hamburger icons
- `useState` hook for mobile menu open/close toggle
- Responsive breakpoints: mobile-first → `md` → `lg`
- All interactive transitions use `transition-colors`

---

## 15. Stellar.ai — AI Landing Hero

**🔗 Live Preview:** [stellar-bool.lovable.app](https://stellar-bool.lovable.app/)

**🛠 Tech Stack:** React · Tailwind CSS · Lucide React · Google Fonts (Inter)

### Layout & Background

- White background (`bg-white`)
- Max-width container: `max-w-7xl mx-auto`
- All major sections use `.animate-fade-in-up` with staggered `animationDelay` (starting at 0.1s, incrementing by 0.1s) and `opacity: 0` inline style

### Custom CSS Animations (`index.css`)

| Class | Keyframes | Duration |
|-------|-----------|----------|
| `.animate-fade-in-up` | `opacity: 0; translateY(30px)` → `opacity: 1; translateY(0)` | 0.6s ease-out forwards |
| `.animate-fade-in-overlay` | `opacity: 0` → `opacity: 1` | 0.4s ease-out forwards |
| `.animate-slide-up-overlay` | `opacity: 0` → `opacity: 1` + `transform: translate(-50%, -50%)` | 0.5s ease-out forwards |

### Font

- Import **Inter** (weights 400, 500, 600, 700) from Google Fonts
- Set `font-family: 'Inter', sans-serif` on `body`

### Navigation (`animationDelay: 0.1s`)

- `px-6 py-4 flex items-center justify-between max-w-7xl mx-auto`
- **Left:** Lucide `Star` icon (w-5 h-5, fill-black) + "Stellar.ai" (`text-lg font-semibold`)
- **Center** (hidden on mobile, `hidden md:flex items-center gap-8`): "Solutions" + ChevronDown, "For Teams" + ChevronDown, "About Us", "Learn Hub" — `text-sm text-gray-700 hover:text-black`
- **Right:** "Login" link (`text-sm text-gray-700`) + "Get started free" button (`bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors`)

### Hero Section (`px-6 pt-24 pb-32 max-w-7xl mx-auto text-center`)

#### Reviews Badge (`animationDelay: 0.2s`)
- `inline-flex items-center gap-2 mb-8`
- Bordered square (`w-6 h-6 border border-gray-300 rounded`) with filled `Star` icon inside
- Text: "4.9 rating from 18.3K+ users" (`text-sm font-medium text-black`)

#### Main Heading (`animationDelay: 0.3s`)
- `text-6xl md:text-7xl lg:text-[80px] font-normal leading-[1.1] tracking-tight mb-5`
- First line: "Work Smarter. Move Faster."
- Second line: "AI Powers You Up." — gradient text (`bg-gradient-to-r from-black via-gray-500 to-gray-400 bg-clip-text text-transparent`)

#### Subheading (`animationDelay: 0.4s`)
- `text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto`
- Text: "Intelligent automation syncs with the tools you love to streamline tasks, boost output, and save time."

#### CTA Button (`animationDelay: 0.5s`)
- `bg-black text-white px-8 py-3 rounded-full text-base font-medium hover:bg-gray-800 transition-colors mb-12`
- Text: "Begin Free Trial"

#### Tab Bar (`animationDelay: 0.6s`)
- Centered `bg-gray-100 rounded-lg p-1` container
- **Mobile** (`md:hidden`): 2×2 grid with 4 buttons: Analyse (BarChart3), Train (BookOpen), Testing (Users), Deploy (Rocket)
- **Desktop** (`hidden md:flex`): Same 4 buttons in a row with vertical dividers (`w-px h-5 bg-gray-300`)
- Active tab: `bg-white text-black shadow-sm` · Inactive: `text-gray-600`
- Tabs auto-cycle every 4s with `setInterval`, state managed with `useState('analyse')`

### Video + Overlay Section (`animationDelay: 0.7s`)

- Container: `relative rounded-3xl overflow-hidden h-[400px] md:h-[500px]`
- Video: `src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260319_165750_358b1e72-c921-48b7-aaac-f200994f32fb.mp4"`, `autoPlay loop muted playsInline w-full h-full object-cover`

#### 4 Tab Overlays (`.animate-fade-in-overlay` outer · `.animate-slide-up-overlay` inner card)

| Tab | Overlay Content |
|-----|----------------|
| **Analyse** | "Set Up Your AI Workspace" wizard · purple progress bar at 25% · 4 steps |
| **Train** | "AI Model Training" · orange progress bar at 67% · 4 metrics |
| **Testing** | "Test Suite Results" · green success indicator · 127/127 tests passed |
| **Deploy** | "Deploy to Production" · 4 checklist items · "Deploy Now" button |

### Company Logos (`animationDelay: 0.8s`)

- `mt-24 flex` row
- Logos: **INTERSCOPE**, **SPOTIFY**, **Nexera** (dot-grid icon), **M3** (serif italic), **LAURA COLE** (LC circle monogram), **vertex** (dots)

---

## 16. Aethera Vision Forge — Cinematic Hero

**🔗 Live Preview:** [aethera-vision-forge.lovable.app](https://aethera-vision-forge.lovable.app/)

**🛠 Tech Stack:** React · Vite · Tailwind CSS · TypeScript

### Fonts (`/src/styles/fonts.css`)

| Role | Font |
|------|------|
| Display (headings, logo) | **Instrument Serif** |
| Body (navigation, descriptions) | **Inter** |

### Layout Structure

- Container: `relative min-h-screen w-full overflow-hidden`, white background (`#FFFFFF`)
- Layers (bottom to top): video background (z-0) → gradient overlays → navigation bar (z-10) → hero content (z-10)

### Video Background

- URL: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4`
- Position: `top: '300px'`, `inset: 'auto 0 0 0'`
- Custom fade-in/fade-out loop logic via `useEffect` + `useRef`:
  - `requestAnimationFrame` continuously monitors `currentTime` and `duration`
  - Fade **in** over 0.5 s at start (opacity 0 → 1)
  - Fade **out** over 0.5 s before end (opacity 1 → 0)
  - On `ended` event: set opacity to 0 → wait 100 ms → reset `currentTime = 0` → call `play()` again
- Gradient overlays: `absolute inset-0 bg-gradient-to-b from-background via-transparent to-background` positioned over the video

### Navigation Bar

| Element | Detail |
|---------|--------|
| **Logo** | "Aethera®" — `<sup>®</sup>`, `text-3xl tracking-tight`, Instrument Serif, color `#000000` |
| **Menu items** | Home (`#000000`), Studio, About, Journal, Reach Us (`#6F6F6F`), `text-sm transition-colors` |
| **CTA button** | "Begin Journey" — `rounded-full px-6 py-2.5 text-sm`, background `#000000`, text `#FFFFFF`, `hover:scale-[1.03]` |
| **Layout** | `flex justify-between px-8 py-6 max-w-7xl mx-auto` |

### Hero Section

- Positioning: `paddingTop: 'calc(8rem - 75px)'`, `pb-40`
- Layout: `flex flex-col items-center justify-center text-center px-6`

#### Headline

- Text: "Beyond silence, we build the eternal."
- Styling: `text-5xl sm:text-7xl md:text-8xl max-w-7xl font-normal`
- Font: Instrument Serif
- Line height: `0.95` · Letter spacing: `-2.46px`
- Colors: main text `#000000`; italic words "silence," and "the eternal." in `#6F6F6F`
- Animation: `animate-fade-rise`

#### Description

- Text: "Building platforms for brilliant minds, fearless makers, and thoughtful souls. Through the noise, we craft digital havens for deep work and pure flows."
- Styling: `text-base sm:text-lg max-w-2xl mt-8 leading-relaxed`
- Color: `#6F6F6F`
- Animation: `animate-fade-rise-delay`

#### CTA Button

- Text: "Begin Journey"
- Styling: `rounded-full px-14 py-5 text-base mt-12`
- Background `#000000` · text `#FFFFFF` · `hover:scale-[1.03]`
- Animation: `animate-fade-rise-delay-2`

### Color Palette

| Role | Color |
|------|-------|
| Background | `#FFFFFF` |
| Headlines / logo / buttons | `#000000` |
| Descriptions / secondary menu items | `#6F6F6F` |
| Button text | `#FFFFFF` |

### Animations (`/src/styles/theme.css`)

| Class | Keyframes | Duration | Delay |
|-------|-----------|----------|-------|
| `animate-fade-rise` | `opacity: 0; translateY(20px)` → `opacity: 1; translateY(0)` | 0.8 s ease-out | — |
| `animate-fade-rise-delay` | same as above | 0.8 s ease-out | 0.2 s |
| `animate-fade-rise-delay-2` | same as above | 0.8 s ease-out | 0.4 s |

---

## 17. Nexora — SaaS Landing Hero

**🔗 Live Preview:** [nexora-landing.lovable.app](https://nexora-landing.lovable.app/)

**🛠 Tech Stack:** React · Vite · Tailwind CSS · TypeScript · shadcn/ui · Framer Motion · lucide-react

### Page Layout

- `h-screen flex flex-col bg-background overflow-hidden` — Navbar + Hero fill exactly 100vh with no scroll
- Two Google Fonts imported via CSS: **Instrument Serif** (display/headings, including italic) and **Inter** (body text)

### Fonts & Design Tokens (`index.css`)

**Font import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&display=swap');
```

**CSS variables (`:root`):**

| Variable | Value |
|----------|-------|
| `--background` | `0 0% 100%` (white) |
| `--foreground` | `210 14% 17%` (dark charcoal) |
| `--primary` | `210 14% 17%` / `--primary-foreground: 0 0% 100%` |
| `--secondary` | `0 0% 96%` / `--secondary-foreground: 0 0% 9%` |
| `--muted` | `0 0% 96%` / `--muted-foreground: 184 5% 55%` |
| `--accent` | `239 84% 67%` (indigo/blue) / `--accent-foreground: 0 0% 100%` |
| `--border` | `0 0% 90%` |
| `--ring` | `239 84% 67%` |
| `--radius` | `0.5rem` |
| `--font-display` | `'Instrument Serif', serif` |
| `--font-body` | `'Inter', sans-serif` |
| `--shadow-dashboard` | `0 25px 80px -12px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.06)` |

- Tailwind config extends `fontFamily` with `display` and `body` mapped to the CSS vars
- All colors use `hsl(var(--token))` pattern
- No dark mode — light only

### Navbar

- `flex items-center justify-between px-6 md:px-12 lg:px-20 py-5 font-body`
- **Left:** Logo text `✦ Nexora` — `text-xl font-semibold tracking-tight text-foreground`
- **Center/Right** (hidden on mobile): Nav links "Home", "Pricing", "About", "Contact" — `text-sm text-muted-foreground hover:text-foreground` with `gap-8`
- **CTA Button:** `rounded-full px-5 text-sm font-medium` using primary styling

### Hero Section

- **Background Video:** Fullscreen muted autoplay loop, `absolute inset-0 w-full h-full object-cover z-0`
  - URL: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260319_015952_e1deeb12-8fb7-4071-a42a-60779fc64ab6.mp4`
- All content: `relative z-10 flex flex-col items-center w-full`

#### 1. Badge

| Property | Value |
|----------|-------|
| **Animation** | Framer Motion fade up from `y: 10`, duration `0.5s` |
| **Style** | `inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-1.5 text-sm text-muted-foreground font-body mb-6` |
| **Text** | `"Now with GPT-5 support ✨"` |

#### 2. Headline

| Property | Value |
|----------|-------|
| **Animation** | Framer Motion fade up from `y: 16`, duration `0.6s`, delay `0.1s` |
| **Style** | `text-center font-display text-5xl md:text-6xl lg:text-[5rem] leading-[0.95] tracking-tight text-foreground max-w-xl` |
| **Content** | "The Future of **Smarter** Automation" — the word *Smarter* renders in Instrument Serif italic |

#### 3. Subheadline

| Property | Value |
|----------|-------|
| **Animation** | Framer Motion fade up from `y: 16`, duration `0.6s`, delay `0.2s` |
| **Style** | `mt-4 text-center text-base md:text-lg text-muted-foreground max-w-[650px] leading-relaxed font-body` |
| **Text** | `"Automate your busywork with intelligent agents that learn, adapt, and execute—so your team can focus on what matters most."` |

#### 4. CTA Buttons

| Property | Value |
|----------|-------|
| **Animation** | Framer Motion fade up from `y: 16`, duration `0.6s`, delay `0.3s` |
| **Layout** | `mt-5 flex items-center gap-3` |
| **Primary Button** | `rounded-full px-6 py-5 text-sm font-medium font-body` — text `"Book a demo"` |
| **Play Button** | Ghost variant, `h-11 w-11 rounded-full border-0 bg-background shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:bg-background/80` with Lucide `Play` icon `h-4 w-4 fill-foreground` |

#### 5. Dashboard Preview (custom coded — not an image)

| Property | Value |
|----------|-------|
| **Animation** | Framer Motion fade up from `y: 30`, duration `0.8s`, delay `0.5s` |
| **Container** | `mt-8 w-full max-w-5xl` |
| **Frosted glass wrapper** | `rounded-2xl overflow-hidden p-3 md:p-4` with inline styles: `background: rgba(255,255,255,0.4)`, `border: 1px solid rgba(255,255,255,0.5)`, `boxShadow: var(--shadow-dashboard)` |

**Dashboard internals** (`text-[11px]`, `select-none pointer-events-none`):

- **Top bar:** Logo "N" in rounded box + "Nexora" + chevron · Search bar with `⌘K` shortcut · "Move Money" + bell + avatar "JB"
- **Sidebar** (`w-40`): Items — Home (active), Tasks (badge "10"), Transactions, Payments (chevron), Cards, Capital, Accounts (chevron). Section "Workflows": Trake rutes, Payments, Notifications, Settings
- **Main content** (`bg-secondary/30`):
  - Greeting: `"Welcome, Jane"` — `text-sm font-semibold`
  - Action buttons row: Send (primary/accent), Request, Transfer, Deposit, Pay Bill, Create Invoice — `rounded-full` pill buttons `text-[10px]` + "Customize" text

**Two equal-width cards** (`flex-1 basis-0`) side by side:

| Card | Content |
|------|---------|
| **Balance** | "Mercury Balance" with checkmark · Amount `$8,450,190.32` (cents in `text-xs text-muted-foreground`) · Stats: Last 30 Days, +$1.8M green, -$900K red · SVG area chart (`h-20`) with smooth cubic Bézier curve, linear gradient fill from accent at 15% opacity to transparent, stroke in accent color `strokeWidth="1.5"` |
| **Accounts** | Header "Accounts" with `+` and `⋮` icons · Three rows (`py-3`, no dividers, `text-xs`, `justify-between`): Credit `$98,125.50`, Treasury `$6,750,200.00`, Operations `$1,592,864.82` |

**Transactions table:** "Recent Transactions" heading, columns Date / Description / Amount / Status. 4 rows:

| Description | Amount | Status |
|-------------|--------|--------|
| AWS | -$5,200 | Pending (amber) |
| Client Payment | +$125,000 | Completed (green) |
| Payroll | -$85,450 | Completed |
| Office Supplies | -$1,200 | Completed |

### Dependencies

| Package | Purpose |
|---------|---------|
| `framer-motion` | All entrance animations |
| `lucide-react` | All icons |
| `shadcn/ui Button` | CTA buttons |
| `tailwindcss-animate` | Tailwind animation plugin |

### Key Design Decisions

- Dashboard intentionally overflows toward the bottom of the viewport, clipped by `overflow-hidden` on the parent
- The SVG area chart uses a hand-crafted cubic Bézier path — no charting library
- All colors use semantic Tailwind tokens (`hsl(var(--...))`) — never raw color values in components

---

## 18. Remoto — Remote Team Management Hero

**🔗 Live Preview:** [remoto-mbn.lovable.app](https://remoto-mbn.lovable.app/)

**🛠 Tech Stack:** React · Tailwind CSS v4 · Motion

### Fonts

| Role | Font |
|------|------|
| Headings / UI | **Geist** |
| Accent / italic word | **Instrument Serif** (italic) |

### Layout & Spacing

- Section: `min-h-screen` with centered alignment
- Main content container: `max-w-[1200px]`, `pt-[290px]` (heavy top padding for editorial feel), vertical `gap-8` (32 px) between elements

### Video Background

- URL: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260302_085640_276ea93b-d7da-4418-a09b-2aa5b490e838.mp4`
- Attributes: `autoPlay loop muted playsInline`
- Class: `className="w-full h-full object-cover [transform:scaleY(-1)]"` — video is **vertically flipped** via `scaleY(-1)`

### Gradient Overlay

- Layered on top of the video to blend into the white background
- Class: `className="absolute inset-0 bg-gradient-to-b from-[26.416%] from-[rgba(255,255,255,0)] to-[66.943%] to-white"`

### Typography — Main Heading

| Property | Value |
|----------|-------|
| Font | Geist |
| Weight | Medium |
| Letter spacing | `-0.04em` |
| Desktop size | `80px` |

- Text content: `Simple [management] for your remote team`
- The word **"management"** is rendered in **Instrument Serif italic** at `100px`

### Description

| Property | Value |
|----------|-------|
| Font | Geist |
| Size | `18px` |
| Color | `#373a46` (slate) |
| Opacity | `80%` |
| Max width | `554px` |

### Interactive Components

#### Email Navbar (Input Container)

- Shape: fully rounded — `border-radius: 40px`
- Background: `bg-[#fcfcfc]`
- Border: thin, light
- Shadow: `box-shadow: 0px 10px 40px 5px rgba(194, 194, 194, 0.25)`
- Contains: email text input on the left + CTA button on the right

#### CTA Button — "Create Free Account"

- Style: dark, multi-layered gradient
- Shadow: `shadow-[inset_-4px_-6px_25px_0px_rgba(201,201,201,0.08),inset_4px_4px_10px_0px_rgba(29,29,29,0.24)]`
- Effect: high-gloss tactile appearance from complex inner shadow

#### Social Proof Badge

- Positioned below the email input
- Text: `1,020+ Reviews`
- Contains a row of star / brand icons

### Animations (Motion library)

Staggered **fade and slide up** entrance for each element:

| Element | Animation |
|---------|-----------|
| Main heading | `opacity: 0 → 1`, `y: 20 → 0`, slight delay stagger |
| Description | Same, delayed after heading |
| Email input block | Same, delayed after description |

### Key Technical Specs

| Spec | Value |
|------|-------|
| Video class | `className="w-full h-full object-cover [transform:scaleY(-1)]"` |
| Gradient class | `className="absolute inset-0 bg-gradient-to-b from-[26.416%] from-[rgba(255,255,255,0)] to-[66.943%] to-white"` |
| Button shadow | `shadow-[inset_-4px_-6px_25px_0px_rgba(201,201,201,0.08),inset_4px_4px_10px_0px_rgba(29,29,29,0.24)]` |
| Content padding-top | `290px` |
| Heading letter-spacing | `-0.04em` |
| "management" font size | `100px` (Instrument Serif italic) |

---

## 20. Crest AI — AI Automation Hero

**🔗 Live Preview:** [crest-ai-reach.lovable.app](https://crest-ai-reach.lovable.app/)

**🛠 Tech Stack:** React · Vite · Tailwind CSS · TypeScript · Framer Motion · lucide-react · hls.js

### Layout & Structure

- Full viewport height (`h-screen`), full width, `relative`, `overflow-hidden`
- Background color: `#070612` (dark purple-black)
- Content aligned to the **left side**, vertically centered (`flex items-center`)
- Max-width container: `max-w-7xl` with `px-6 lg:px-12` horizontal padding
- Content sits at `z-20` above the video and gradient overlay

### Background Video

| Property | Value |
|----------|-------|
| **Source** | HLS stream — `https://stream.mux.com/s8pMcOvMQXc4GD6AX4e1o01xFogFxipmuKltNfSYza0200.m3u8` |
| **Attributes** | `autoPlay loop muted playsInline` |
| **Position** | `absolute`, full height, `z-0` |
| **Horizontal offset** | `marginLeft: 200px` (shifted right) |
| **Scale** | `scale-[1.2]`, `origin-left` |
| **Fit** | `object-cover`, `h-full` |

- Parsed with **hls.js** (`Hls.isSupported()` check with native fallback for Safari)

#### Bottom Fade Gradient

- `absolute bottom-0 left-0 right-0 h-40`, `z-10`
- `background: linear-gradient(to top, #070612, transparent)`

### Badge

| Property | Value |
|----------|-------|
| **Shape** | `rounded-full`, `border border-white/20`, `backdrop-blur-sm` |
| **Icon** | `Sparkles` from lucide-react, `w-3 h-3 text-white/80` |
| **Text** | `"New AI Automation Ally"` — `text-sm font-medium text-white/80` |
| **Animation** | BlurIn — opacity `0→1`, blur `10px→0`, `y: 20→0`, duration `0.6s`, no delay |

### Main Heading

- Three lines:
  - Line 1: `"Unlock the Power of AI"` — `display: block`
  - Line 2: `"for Your"` — inline
  - Line 3: `"Business."` — inline, **serif italic** font
- Sizes: `text-4xl md:text-5xl lg:text-6xl`
- Weight: `font-medium`
- Line height: `leading-tight lg:leading-[1.2]`
- Color: `text-foreground` (white)

#### SplitText Animation

- Text is split **by words**
- Each word animates independently: `opacity: 0→1`, `y: 40→0`
- Stagger: `0.08s` between each word
- Duration per word: `0.6s`
- Implemented via a `SplitText` component using `framer-motion`

### Subtitle

| Property | Value |
|----------|-------|
| **Text** | `"Our cutting-edge AI platform automates, analyzes, and accelerates your workflows so you can focus on what really matters."` |
| **Style** | `text-white/80 text-lg font-normal leading-relaxed max-w-xl` |
| **Animation** | BlurIn — delay `0.4s`, duration `0.6s` |

### CTA Buttons

Layout: `flex flex-wrap gap-4`

| Button | Style | Text | Link |
|--------|-------|------|------|
| **Primary** | `bg-foreground text-background rounded-full px-5 py-3` + `ArrowRight` icon (lucide-react) | `"Book A Free Call"` | `/book-call` |
| **Secondary** | `bg-white/20 backdrop-blur-sm rounded-full px-8 py-3 text-white` | `"Learn now"` | — |

- Both buttons animated with BlurIn — delay `0.6s`, duration `0.6s`

### Animation Components

#### `BlurIn`

Uses `framer-motion` `motion.div`:

```
initial: { opacity: 0, filter: "blur(10px)", y: 20 }
animate: { opacity: 1, filter: "blur(0px)", y: 0 }
transition: { duration, delay }
```

#### `SplitText`

- Splits heading string by spaces into individual word `<span>` elements
- Each `<span>` wrapped in a `motion.span` with:

```
initial: { opacity: 0, y: 40 }
animate: { opacity: 1, y: 0 }
transition: { duration: 0.6, delay: index * 0.08 }
```

### Z-index Layering

| Layer | Z-index |
|-------|---------|
| Background video | `z-0` |
| Bottom fade gradient | `z-10` |
| Hero content | `z-20` |

### Spacing

| Gap | Between |
|-----|---------|
| `gap-12` | Badge+heading group ↔ CTA buttons |
| `gap-6` | Badge ↔ heading |
| `gap-6` | Heading ↔ subtitle |

### Dependencies

| Package | Purpose |
|---------|---------|
| `framer-motion` | BlurIn and SplitText animations |
| `lucide-react` | `Sparkles` and `ArrowRight` icons |
| `hls.js` | HLS video stream playback |
| `tailwindcss` | Utility styling |

---

## 19. Swift Spark Aesthetics — AI Website Builder Hero

**🔗 Live Preview:** [swift-spark-aesthetics.lovable.app](https://swift-spark-aesthetics.lovable.app/)

**🛠 Tech Stack:** React · Tailwind CSS · TypeScript · Motion · hls.js · lucide-react

### Required Packages

| Package | Version |
|---------|---------|
| `motion` | 12.23.24 or later |
| `hls.js` | 1.6.15 or later |
| `lucide-react` | 0.487.0 or later |

### Fonts

```css
@import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Instrument+Serif:ital@0;1&display=swap');
```

### Navbar

- **Position:** Fixed, full width, `z-50`, fully transparent background (`bg-transparent`)
- **Padding:** `px-6 py-4`, flexbox `items-center justify-between`

| Section | Content |
|---------|---------|
| Left | Sunburst SVG icon (24×24 px, white) |
| Center (md+) | Nav links: "Products" (+ ChevronDown), "Customer Stories", "Resources", "Pricing" — Instrument Sans, `text-sm font-medium text-white/80 hover:text-white gap-8` |
| Right | "Book A Demo" link (hidden on small screens) · "Get Started" button (`bg-white text-black rounded-full px-5 py-2.5 font-semibold`) |

### Hero Section

**Container:**
- `relative w-full min-h-screen overflow-hidden`
- Background: `#000000`, text: white

**Background Video (HLS.js):**

```tsx
import { useEffect, useRef } from "react";
import Hls from "hls.js";

const videoRef = useRef<HTMLVideoElement>(null);
const videoSrc = "https://stream.mux.com/T6oQJQ02cQ6N01TR6iHwZkKFkbepS34dkkIc9iukgy400g.m3u8";

useEffect(() => {
  const video = videoRef.current;
  if (!video) return;

  if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(videoSrc);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      video.play().catch((e) => console.log("Auto-play prevented:", e));
    });
    return () => {
      hls.destroy();
    };
  } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
    video.src = videoSrc;
    video.addEventListener("loadedmetadata", () => {
      video.play().catch((e) => console.log("Auto-play prevented:", e));
    });
  }
}, []);
```

- Video attributes: `muted loop playsInline`
- Class: `object-cover opacity-60`
- Poster fallback: `https://images.unsplash.com/photo-1647356191320-d7a1f80ca777?...`

**Overlays & Decorative Gradients:**

| Layer | Spec |
|-------|------|
| Video overlay | `bg-black/60 backdrop-blur-[2px]` |
| Top-left gradient | `top-[-20%] left-[20%]`, 600×600 px, `bg-blue-900/20 blur-[120px] mix-blend-screen` |
| Bottom-right gradient | `bottom-[-10%] right-[20%]`, 500×500 px, `bg-indigo-900/20 blur-[120px] mix-blend-screen` |

**Content Container:**
- `max-w-5xl mx-auto text-center items-center z-10 mt-20 space-y-12`

### Typography

| Element | Font | Size | Notes |
|---------|------|------|-------|
| Pre-headline | Instrument Serif | `text-3xl` / `sm:text-5xl` / `lg:text-[48px]` | `leading-[1.1]`, white |
| Main headline | Instrument Sans, `font-semibold` | `text-6xl` / `sm:text-8xl` / `lg:text-[136px]` | `leading-[0.9] tracking-tighter`, gradient `from-white via-white to-[#b4c0ff]`, `bg-clip-text text-transparent` |
| Subheadline | Instrument Sans | `text-lg` / `sm:text-[20px]` | `leading-[1.65]`, `text-white/70`, `max-w-xl` |

- Pre-headline text: `"Design at the speed of thought"`
- Main headline text: `"Build Faster"`
- Subheadline text: `"Create fully functional, SEO-optimized websites in seconds with our advanced AI engine."`

### CTA Buttons

**Primary — "Start Building Free":**
- Layout: `pl-6 pr-2 py-2 rounded-full bg-white flex items-center gap-4`
- Text: Instrument Sans, `font-medium text-lg`, color `#0a0400`
- Arrow circle: 40×40 px, `bg-[#3054ff] hover:bg-[#2040e0] rounded-full flex items-center justify-center`
- Icon: `ArrowRight` (lucide-react), white, 20×20 px
- Hover: `shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-105`

**Secondary — "See Examples":**
- Style: text link, `text-white/70 hover:text-white`
- Background: `backdrop-blur-sm hover:bg-white/5`
- Padding: `px-4 py-2 rounded-lg`
- Icon: `ArrowRight` with `group-hover:translate-x-1 transition`

**Button container:** `flex flex-col sm:flex-row gap-6 items-center`

### Animations (Motion library)

```tsx
import { motion } from "motion/react";
```

| Element | Animation |
|---------|-----------|
| Pre-headline | `initial={{ opacity: 0, y: 20 }}` → `animate={{ opacity: 1, y: 0 }}` · `transition={{ duration: 0.6 }}` |
| Main headline | `initial={{ opacity: 0, scale: 0.9 }}` → `animate={{ opacity: 1, scale: 1 }}` · `transition={{ delay: 0.2, duration: 0.6 }}` |
| Subheadline | `initial={{ opacity: 0 }}` → `animate={{ opacity: 0.7 }}` · `transition={{ delay: 0.4, duration: 0.6 }}` |
| Buttons | `initial={{ opacity: 0, y: 20 }}` → `animate={{ opacity: 1, y: 0 }}` · `transition={{ delay: 0.6, duration: 0.5 }}` |

### Color Palette

| Token | Value |
|-------|-------|
| Background | `#000000` |
| Primary text | `white` |
| Secondary text | `white/80`, `white/70` |
| Primary button bg | `white` |
| Primary button text | `#0a0400` |
| Accent / arrow circle | `#3054ff` · hover `#2040e0` |
| Headline gradient end | `#b4c0ff` |
| Decorative gradients | `blue-900/20`, `indigo-900/20` |

---

## 21. Bloom Reel Vista — Video Agency Hero

**🔗 Live Preview:** [bloom-reel-vista.lovable.app](https://bloom-reel-vista.lovable.app)

**🛠 Tech Stack:** React · Tailwind CSS v4 · Google Fonts

### Fonts

```css
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600&family=Instrument+Serif:ital@1&display=swap');
```

- **Primary / UI font:** `"Barlow"`, sans-serif
- **Accent / italic font:** `"Instrument Serif"`, italic

### Layout & Background

- **Root container:** `relative w-full min-h-screen overflow-hidden` (full viewport height)
- **Background video:**
  - Source: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260306_074215_04640ca7-042c-45d6-bb56-58b1e8a42489.mp4`
  - Attributes: `autoPlay loop muted playsInline`
  - Classes: `absolute inset-0 w-full h-full object-cover`
  - **No** color overlays, gradients, or opacity filters on the video
- **Content layer:** `relative z-10 flex flex-col min-h-screen`

### Navbar

- **Position:** `absolute top-0 left-0 right-0 z-20`
- **Background:** fully transparent — **no** background fill, **no** border
- **Padding:** `px-8 py-6`, flexbox `items-center justify-between`

| Section | Content |
|---------|---------|
| Left | Brand logo text — Barlow, `font-medium text-white text-xl` |
| Center | Nav links: "Work", "Services", "About", "Contact" — Barlow, `text-sm font-medium text-white hover:bg-white/10 px-3 py-1.5 rounded transition-colors` |
| Right | "Get Started" button — Barlow, `font-medium text-sm`, `bg-[#f8f8f8] text-[#171717] rounded-[2px] px-5 py-2 hover:bg-white transition-colors` |

### Featured Badge (centered, top of hero content)

A two-layer "liquid glass" badge:

**Outer ring:**
- `inline-flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm p-1`

**Inner pill:**
- `bg-white/90 backdrop-blur-md rounded-full px-4 py-1.5`
- Text: `"Featured in Fortune"` — Barlow, `text-xs font-medium text-[#171717]`

### Hero Content Block

- **Container:** `flex flex-col items-center justify-end min-h-screen pb-[250px]` (250 px bottom padding)
- **Inner wrapper:** `relative flex flex-col items-center text-center gap-6 max-w-4xl mx-auto px-4`
- **Corner accents:** Four `7×7 px` solid white squares (`bg-white`) positioned absolutely at each corner of the inner wrapper:
  - `absolute -top-3 -left-3`
  - `absolute -top-3 -right-3`
  - `absolute -bottom-3 -left-3`
  - `absolute -bottom-3 -right-3`

### Typography

| Element | Font | Size | Weight | Color | Notes |
|---------|------|------|--------|-------|-------|
| Badge label | Barlow | `text-xs` | `font-medium` | `#171717` | Inside inner pill |
| Headline line 1 | Barlow | `64px` (`text-[64px]`) | `font-light` | `white` | `"Agency that makes your"` |
| Headline line 2 | Instrument Serif | `64px` (`text-[64px]`) | italic | `white` | `"videos & reels viral"` |
| Sub-headline | Barlow | `text-lg` | `font-normal` | `white/75` (`text-white/75`) | `max-w-xl` centered paragraph explaining the agency's value proposition |

**Headline markup example:**

```tsx
<h1 className="leading-tight">
  <span style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: "64px", color: "#ffffff" }}>
    Agency that makes your
  </span>
  <br />
  <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontSize: "64px", color: "#ffffff" }}>
    videos &amp; reels viral
  </span>
</h1>
```

**Sub-headline example text:**
> "We craft scroll-stopping short-form content that turns your brand into a household name — from concept to final cut."

### CTA Buttons

Two side-by-side buttons, `flex gap-4 items-center`:

| Button | Label | Style |
|--------|-------|-------|
| Primary | "Start a Project" | `bg-[#f8f8f8] hover:bg-white text-[#171717] font-medium text-sm px-6 py-3 rounded-[2px] transition-colors` |
| Secondary | "View Our Work" | `bg-[#f8f8f8] hover:bg-white text-[#171717] font-medium text-sm px-6 py-3 rounded-[2px] transition-colors` |

- Font: Barlow, `font-medium`
- Border radius: `2px` (very sharp rectangular corners)
- Background: `#f8f8f8` → `#ffffff` on hover
- Text color: `#171717`

### Color Palette

| Token | Value |
|-------|-------|
| Primary text | `#ffffff` (pure white) |
| Secondary text | `rgba(255,255,255,0.75)` (`text-white/75`) |
| Button / badge background | `#f8f8f8` |
| Button / badge text | `#171717` |
| Button hover background | `#ffffff` |
| Nav hover background | `rgba(255,255,255,0.10)` (`bg-white/10`) |
| Badge outer bg | `rgba(255,255,255,0.10)` (`bg-white/10`) |
| Badge inner bg | `rgba(255,255,255,0.90)` (`bg-white/90`) |
| Corner accent | `#ffffff` (solid white) |

### Interactions & Animations

| Element | Interaction |
|---------|-------------|
| All buttons | `transition-colors` — `#f8f8f8` → `#ffffff` on hover |
| Badge | `transition-colors` on hover |
| Nav links | `hover:bg-white/10` with `transition-colors` |

No entrance animations or motion libraries required.

---

## 22. Starscape Shaper — Cinematic Space-Travel Landing Page

**🔗 Live Preview:** [starscape-shaper-art.lovable.app](https://starscape-shaper-art.lovable.app)

**🛠 Tech Stack:** React 18.3.1 (CDN) · ReactDOM 18.3.1 (CDN) · Babel Standalone 7.29.0 (CDN) · Framer Motion 11.11.17 (CDN)

### Build Prompt

Build a single-page landing site with two full-height sections (**Hero + Capabilities**), both using looping background videos with **custom JS crossfade**, a shared **liquid-glass design system**, and **Framer Motion** entrance animations.

### Layout & Structure

- `body` background: `#000`
- React app mounted on `#root`
- Two full-height sections (`min-h-screen`) stacked vertically:
  - **Hero**
  - **Capabilities**
- Shared max-width container (`max-w-6xl mx-auto px-6`) for content alignment

### Background Videos (Crossfade)

- Each section has **two** stacked `video` elements (`absolute inset-0 w-full h-full object-cover`)
- Videos are `autoPlay loop muted playsInline`
- Use custom JS to toggle a `data-active` flag every 8–10s
- Crossfade by animating opacity:
  - Active video: `opacity-100`
  - Inactive video: `opacity-0`
  - Transition: `transition-opacity duration-[2000ms] ease-in-out`
- Keep a dark overlay gradient (`from-black/70 via-black/40 to-black/80`) for legibility

### Liquid-Glass Design System

Use the same glass styling across navbar, badges, and cards:

- `bg-white/10`
- `backdrop-blur-xl`
- `border border-white/20`
- Subtle inner highlight: `shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]`
- Rounded corners: `rounded-2xl` (buttons: `rounded-full`)

### Hero Section

**Content layout:** centered, stacked, and motion-animated.

- Glass badge: `"Deep-Space Tourism • 2026 Launch"`
- Headline: `"Journey Beyond the Stars"` with gradient highlight on `"Stars"`
- Subheadline: short, cinematic copy about immersive space travel
- CTA row:
  - Primary: `"Reserve Your Seat"`
  - Secondary: `"View Fleet"`

### Capabilities Section

Grid of 3–4 glass cards:

- **Zero-G Suites** — private cabin experience
- **Aurora Routes** — polar sky corridors
- **AI Pilots** — precision autonomous navigation
- **Stellar Lounge** — observation deck & concierge

### Framer Motion Animations

Use staggered entrance animations:

| Element | Motion |
|---------|--------|
| Badge | `initial={{ opacity: 0, y: 12 }}` → `animate={{ opacity: 1, y: 0 }}` |
| Headline | `initial={{ opacity: 0, y: 20 }}` → `animate={{ opacity: 1, y: 0 }}` |
| Subheadline | `initial={{ opacity: 0 }}` → `animate={{ opacity: 1 }}` |
| Buttons | `initial={{ opacity: 0, y: 16 }}` → `animate={{ opacity: 1, y: 0 }}` |
| Capability cards | `initial={{ opacity: 0, y: 20 }}` → `whileInView={{ opacity: 1, y: 0 }}` with `staggerChildren` |

### Color Palette

| Token | Value |
|-------|-------|
| Background | `#000000` |
| Primary text | `#ffffff` |
| Secondary text | `rgba(255,255,255,0.72)` |
| Accent gradient | `#7aa2ff` → `#b8f3ff` |
| Glass border | `rgba(255,255,255,0.20)` |
| CTA primary bg | `rgba(255,255,255,0.9)` |
| CTA primary text | `#0b0f1a` |

---

## 23. Jack — 3D Creator Portfolio Landing Page

**🔗 Live Preview:** [portfolio-3d-utsav.lovable.app](https://portfolio-3d-utsav.lovable.app)

**🛠 Tech Stack:** React · TypeScript · Tailwind CSS · Framer Motion · Lucide React

Build a 3D Creator portfolio landing page for "Jack" using React, TypeScript, Tailwind CSS, Framer Motion, and Lucide React. The page has a dark theme (#0C0C0C background) with the font Kanit (Google Fonts, weights 300-900). The page title is "Jack -- 3D Creator".

### GLOBAL STYLES

Background: #0C0C0C on html, body, #root, and the main wrapper  
Font family: 'Kanit', sans-serif  
Global reset: box-sizing border-box, margin 0, padding 0  
CSS class .hero-heading: gradient text using background: linear-gradient(180deg, #646973 0%, #BBCCD7 100%) with -webkit-background-clip: text and -webkit-text-fill-color: transparent  
Main wrapper has overflowX: 'clip'

### SECTION ORDER

HeroSection  
MarqueeSection  
AboutSection  
ServicesSection  
ProjectsSection

### 1. HERO SECTION

Full viewport height (h-screen), flex column layout with overflowX: clip.

Navbar: Horizontal nav bar with 4 links -- "About", "Price", "Projects", "Contact" -- evenly spaced with justify-between. Text color #D7E2EA, font-medium, uppercase, tracking-wider. Sizes: text-sm md:text-lg lg:text-[1.4rem]. Padding: px-6 md:px-10 pt-6 md:pt-8. Hover: opacity 70% with 200ms transition.

Hero Heading: Massive h1 with text "Hi, i'm jack" (lowercase "i", curly apostrophe via '). Uses the .hero-heading gradient text class. Font-black, uppercase, tracking-tight, leading-none, whitespace-nowrap, w-full. Font sizes: text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]. Margin top: mt-6 sm:mt-4 md:-mt-5. Wrapped in overflow-hidden container.

Bottom bar: Flexbox justify-between items-end with pb-7 sm:pb-8 md:pb-10:

Left: paragraph text "a 3d creator driven by crafting striking and unforgettable projects", color #D7E2EA, font-light, uppercase, tracking-wide, leading-snug. Font size: clamp(0.75rem, 1.4vw, 1.5rem). Max-width: max-w-[160px] sm:max-w-[220px] md:max-w-[260px].  
Right: ContactButton component (see below)

Hero Portrait: Centered absolutely. Uses a Magnet component (mouse-following magnetic effect) wrapping an image. Image URL: https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png. Magnet settings: padding 150, strength 3, activeTransition "transform 0.3s ease-out", inactiveTransition "transform 0.6s ease-in-out". Positioning: absolute left-1/2 -translate-x-1/2 z-10. Width: w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]. On mobile: top-1/2 -translate-y-1/2. On sm+: sm:top-auto sm:translate-y-0 sm:bottom-0.

FadeIn animations: Navbar fades in with delay 0, y -20. Heading: delay 0.15, y 40. Left text: delay 0.35, y 20. Contact button: delay 0.5, y 20. Portrait: delay 0.6, y 30.

### 2. MARQUEE SECTION

Two rows of images that scroll horizontally based on page scroll position. Background #0C0C0C. Padding: pt-24 sm:pt-32 md:pt-40 pb-10.

21 GIF images from motionsites.ai (exact URLs):

https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif  
https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif  
https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif  
https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif  
https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif  
https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif  
https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif  
https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif  
https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif  
https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif  
https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif  
https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif  
https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif  
https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif  
https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif  
https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif  
https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif  
https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif  
https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif  
https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif  
https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif

Row 1: first 11 images, tripled for seamless scrolling. Moves RIGHT on scroll (translateX(offset - 200)).  
Row 2: remaining 10 images, tripled. Moves LEFT on scroll (translateX(-(offset - 200))).  
Scroll offset calculated as: (window.scrollY - sectionTop + window.innerHeight) * 0.3  
Each image tile: 420px x 270px, rounded-2xl, object-cover, lazy loaded.  
Gap between tiles: gap-3. Gap between rows: gap-3.  
Uses willChange: 'transform' for performance. Scroll listener is passive.

### 3. ABOUT SECTION

Full-height centered section with min-h-screen, padding px-5 sm:px-8 md:px-10 py-20.

Four decorative 3D images positioned absolutely in corners:

Top-left: Moon icon -- https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png -- w-[120px] sm:w-[160px] md:w-[210px], positioned top-[4%] left-[1%] sm:left-[2%] md:left-[4%]. FadeIn: delay 0.1, x -80, y 0, duration 0.9.  
Bottom-left: 3D object -- https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png -- w-[100px] sm:w-[140px] md:w-[180px], positioned bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]. FadeIn: delay 0.25, x -80, y 0, duration 0.9.  
Top-right: Lego icon -- https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png -- w-[120px] sm:w-[160px] md:w-[210px], positioned top-[4%] right-[1%] sm:right-[2%] md:right-[4%]. FadeIn: delay 0.15, x 80, y 0, duration 0.9.  
Bottom-right: 3D group -- https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png -- w-[130px] sm:w-[170px] md:w-[220px], positioned bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]. FadeIn: delay 0.3, x 80, y 0, duration 0.9.

Heading: "About me" using .hero-heading gradient text, font-black, uppercase, leading-none, tracking-tight, centered. Font size: clamp(3rem, 12vw, 160px). FadeIn: delay 0, y 40.

Animated paragraph: Uses a character-by-character scroll-driven opacity animation. Text: "With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!" -- color #D7E2EA, font-medium, centered, leading-relaxed, max-w-[560px], font size clamp(1rem, 2vw, 1.35rem). Each character animates from opacity 0.2 to 1 based on scroll progress, with scroll offset ['start 0.8', 'end 0.2'].

Contact button below the text block. Gap between heading/text: gap-10 sm:gap-14 md:gap-16. Gap between text block and button: gap-16 sm:gap-20 md:gap-24.

### 4. SERVICES SECTION

White background (#FFFFFF), with rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] top corners. Padding: px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32.

Heading: "Services" in #0C0C0C, font-black, uppercase, centered, font size clamp(3rem, 12vw, 160px). Margin bottom: mb-16 sm:mb-20 md:mb-28.

5 service items in a vertical list, max-w-5xl, centered:

01 - 3D Modeling: "Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations."  
02 - Rendering: "High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life."  
03 - Motion Design: "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences."  
04 - Branding: "Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence."  
05 - Web Design: "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience."

Each item: horizontal layout with number (font-black, font size clamp(3rem, 10vw, 140px), color #0C0C0C) on the left and name + description stacked vertically on the right. Name: font-medium, uppercase, font size clamp(1rem, 2.2vw, 2.1rem). Description: font-light, leading-relaxed, max-w-2xl, font size clamp(0.85rem, 1.6vw, 1.25rem), opacity 0.6. Items separated by 1px borders (rgba(12, 12, 12, 0.15)). Padding: py-8 sm:py-10 md:py-12. Staggered FadeIn: each item delays by i * 0.1.

### 5. PROJECTS SECTION

Dark background (#0C0C0C), rounded top corners rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px], pulled up with -mt-10 sm:-mt-12 md:-mt-14, z-10.

Heading: "Project" (singular) using .hero-heading gradient, same styling as other headings.

3 sticky-stacking project cards that scale down as you scroll past them (card stacking effect using Framer Motion useScroll and useTransform). Each card is sticky top-24 md:top-32 inside an h-[85vh] container.

Scale calculation: targetScale = 1 - (totalCards - 1 - index) * 0.03. Each card offset by top: ${index * 28}px.

Each card has: rounded-[40px] sm:rounded-[50px] md:rounded-[60px], border-2 border-[#D7E2EA], background #0C0C0C, padding p-4 sm:p-6 md:p-8.

Card layout:

Top row: Number (huge, same style as services), category label, project name, and a "Live Project" ghost button (rounded-full, border-2 #D7E2EA, uppercase, tracking-widest).  
Bottom row: Two-column image grid -- left column (40% width) has 2 stacked images, right column (60%) has 1 tall image. All images have heavy border radius rounded-[40px] sm:rounded-[50px] md:rounded-[60px]. Left top image height: clamp(130px, 16vw, 230px). Left bottom image height: clamp(160px, 22vw, 340px).

Project data with CloudFront image URLs:

Project 01 - "Nextlevel Studio" (Client):

Col1 image 1: https://images.higgs.ai/?default=1&amp;output=webp&amp;url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&amp;w=1280&amp;q=85  
Col1 image 2: https://images.higgs.ai/?default=1&amp;output=webp&amp;url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&amp;w=1280&amp;q=85  
Col2 image: https://images.higgs.ai/?default=1&amp;output=webp&amp;url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&amp;w=1280&amp;q=85

Project 02 - "Aura Brand Identity" (Personal):

Col1 image 1: https://images.higgs.ai/?default=1&amp;output=webp&amp;url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&amp;w=1280&amp;q=85  
Col1 image 2: https://images.higgs.ai/?default=1&amp;output=webp&amp;url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&amp;w=1280&amp;q=85  
Col2 image: https://images.higgs.ai/?default=1&amp;output=webp&amp;url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&amp;w=1280&amp;q=85

Project 03 - "Solaris Digital" (Client):

Col1 image 1: https://images.higgs.ai/?default=1&amp;output=webp&amp;url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&amp;w=1280&amp;q=85  
Col1 image 2: https://images.higgs.ai/?default=1&amp;output=webp&amp;url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&amp;w=1280&amp;q=85  
Col2 image: https://images.higgs.ai/?default=1&amp;output=webp&amp;url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&amp;w=1280&amp;q=85

### REUSABLE COMPONENTS

ContactButton: Rounded-full pill button with gradient background linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%), inner box-shadow 0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset, white 2px outline with -3px offset. Text: white, font-medium, uppercase, tracking-widest. Sizes: px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4, text text-xs sm:text-sm md:text-base. Label: "Contact Me".

LiveProjectButton: Ghost/outline pill button. Rounded-full, border-2 border-[#D7E2EA], text color #D7E2EA, font-medium, uppercase, tracking-widest. Sizes: px-8 py-3 sm:px-10 sm:py-3.5, text text-sm sm:text-base. Hover: bg-[#D7E2EA]/10. Label: "Live Project".

FadeIn: Framer Motion wrapper using whileInView with viewport={{ once: true, margin: "50px", amount: 0 }}. Accepts delay, duration (default 0.7), x (default 0), y (default 30). Easing: [0.25, 0.1, 0.25, 1]. Uses motion.create() for dynamic element types.

Magnet: Mouse-following magnetic hover effect. Tracks mouse position relative to element center, applies translate3d transform divided by strength factor. Activates when cursor is within padding distance of element edge. Smooth transition in (0.3s ease-out) and out (0.6s ease-in-out). Uses willChange: 'transform'.

AnimatedText: Character-by-character scroll-reveal text animation. Each character goes from opacity 0.2 to 1 based on its position in the text relative to scroll progress. Uses Framer Motion useScroll targeting the paragraph element with offset ['start 0.8', 'end 0.2']. Each character uses invisible placeholder + absolute positioned animated span.

### KEY DEPENDENCIES

react, react-dom (^18.3.1)  
framer-motion (^12.38.0)  
lucide-react (^0.344.0)  
tailwindcss (^3.4.1)  
vite, typescript

### RESPONSIVE BREAKPOINTS

All sections use Tailwind's default breakpoints (sm: 640px, md: 768px, lg: 1024px) with mobile-first approach. Heavy use of clamp() for fluid typography. The entire design scales gracefully from mobile to ultra-wide screens.

---

## 24. Prisma — Creative Studio Landing Page

**🔗 Live Preview:** [light-play-creations.lovable.app](https://light-play-creations.lovable.app)

**🛠 Tech Stack:** React · Vite · TypeScript · Tailwind CSS · Framer Motion · lucide-react

build and follow this exactly no change no mistakes also loading assests impoved

Create a React + Vite + TypeScript + Tailwind CSS landing page for a creative studio called "Prisma". The page has 3 sections: Hero, About, and Features. Use framer-motion for animations and lucide-react for icons. The design is dark, moody, and cinematic with a warm cream color palette.

### FONTS

Load two Google Fonts in index.html:

Almarai (weights: 300, 400, 700, 800) -- used as the global default font

Instrument Serif (italic only) -- used for italic accent text in the About section

In index.css, set the global font family:

* { font-family: 'Almarai', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif; }

In tailwind.config.js, extend:

colors.primary: #DEDBC8 (warm cream, used for all primary text and accents)

fontFamily.serif: ['"Instrument Serif"', 'serif']

### COLOR SYSTEM

Background: black (#000000) globally, #101010 for the About card, #212121 for Features cards

Primary text color: #E1E0CC (applied via inline style, slightly different from Tailwind primary)

Tailwind primary: #DEDBC8 (used for utility classes like text-primary, text-primary/70)

Gray text: text-gray-400, text-gray-500

Navbar link color: rgba(225, 224, 204, 0.8) with hover: #E1E0CC

### CUSTOM CSS UTILITIES (index.css)

Two SVG noise texture utilities:

.noise-overlay: fractal noise (baseFrequency: 0.85, numOctaves: 3) used as overlay on hero video

.bg-noise: fractal noise (baseFrequency: 0.9, numOctaves: 4) used as subtle background in Features section

Both use inline SVG data URIs with feTurbulence filter.

### SECTION 1: HERO

Full viewport height (h-screen). The entire section has p-4 md:p-6 padding creating an inset effect. Inside is a container with rounded-2xl md:rounded-[2rem] and overflow-hidden.

Background video:

URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4

autoPlay loop muted playsInline, object-cover, fills entire container

Noise overlay on top: .noise-overlay with opacity-[0.7] mix-blend-overlay pointer-events-none

Gradient overlay: bg-gradient-to-b from-black/30 via-transparent to-black/60

Navbar:

Absolutely positioned at top center

Black background pill that hangs from top edge: bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8

5 nav items: "Our story", "Collective", "Workshops", "Programs", "Inquiries"

Text size: text-[10px] sm:text-xs md:text-sm

Gap between items: gap-3 sm:gap-6 md:gap-12 lg:gap-14

Link color: rgba(225, 224, 204, 0.8), hover: #E1E0CC (inline styles)

Hero Content (bottom-aligned):

Absolutely positioned at bottom: absolute bottom-0 left-0 right-0

12-column grid: left 8 columns for heading, right 4 columns for text + button

Giant heading "Prisma" using WordsPullUp component:

Responsive sizes: text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw]

font-medium leading-[0.85] tracking-[-0.07em]

Color: #E1E0CC

Has a superscript asterisk (*) on the final "a" of "Prisma": positioned with absolute top-[0.65em] -right-[0.3em] text-[0.31em]

Pull-up animation: each word slides up from y:20 with staggered delay of 0.08s, triggered by useInView

Description paragraph (right column):

"Prisma is a worldwide network of visual artists, filmmakers and storytellers bound not by place, status or labels but by passion and hunger to unlock potential through our unique perspectives."

text-primary/70 text-xs sm:text-sm md:text-base, line-height: 1.2

Framer motion: fade up from y:20, delay 0.5s, custom ease [0.16, 1, 0.3, 1]

CTA Button "Join the lab":

Pill shape: bg-primary rounded-full

Black text, font-medium, text-sm sm:text-base

Right side has a black circle (bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10) containing a white/cream ArrowRight icon

Hover: gap increases (hover:gap-3), circle scales up (group-hover:scale-110)

Framer motion: fade up from y:20, delay 0.7s, same custom ease

### SECTION 2: ABOUT

bg-black, padded section with centered content

Inner card: bg-[#101010], centered text, max-w-6xl

Top: small label "Visual arts" in text-primary, text-[10px] sm:text-xs

Main heading uses WordsPullUpMultiStyle component with 3 segments:

"I am Marcus Chen," -- font-normal (Almarai)

"a self-taught director." -- italic font-serif (Instrument Serif italic)

"I have skills in color grading, visual effects, and narrative design." -- font-normal

Container: text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9]

Each word animates in with pull-up effect (y:20 to y:0), staggered at 0.08s delay

Body paragraph below with scroll-linked character opacity animation:

Text: "Over the last seven years, I have worked with Parallax, a Berlin-based production house that crafts cinema, series, and Noir Studio in Paris. Together, we have created work that has earned international acclaim at several major festivals."

text-[#DEDBC8], text-xs sm:text-sm md:text-base

Each character is individually wrapped in an AnimatedLetter component

Uses useScroll with target offset ['start 0.8', 'end 0.2']

Each character's opacity transitions from 0.2 to 1 based on scroll position, creating a progressive text reveal effect

Character staggering: charProgress = index / totalChars, range [charProgress - 0.1, charProgress + 0.05]

### SECTION 3: FEATURES

min-h-screen bg-black, with subtle .bg-noise overlay at opacity-[0.15]

Header text uses WordsPullUpMultiStyle:

Line 1: "Studio-grade workflows for visionary creators." in cream

Line 2: "Built for pure vision. Powered by art." in text-gray-500

Both: text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal

4-column card grid (lg:h-[480px], gap-3 sm:gap-2 md:gap-1):

Each card has staggered entrance animation: scale from 0.95 + fade in, triggered by useInView (once, margin "-100px"), staggered at 0.15s intervals with ease [0.22, 1, 0.36, 1].

Card 1 - Video card: Full video background (URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4), autoPlay loop muted playsInline, object-cover. Bottom text: "Your creative canvas." in #E1E0CC.

Card 2 - "Project Storyboard." (01): bg-[#212121], small image icon at top (https://images.higgs.ai/?default=1&amp;output=webp&amp;url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&amp;w=1280&amp;q=85, 10x10 sm:12x12 rounded), title with number, 4 checklist items with green Check icons, "Learn more" link with rotated arrow (-45deg).

Card 3 - "Smart Critiques." (02): Same layout as Card 2. Icon: https://images.higgs.ai/?default=1&amp;output=webp&amp;url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&amp;w=1280&amp;q=85. 3 checklist items about AI analysis, creative notes, tool integrations.

Card 4 - "Immersion Capsule." (03): Same layout. Icon: https://images.higgs.ai/?default=1&amp;output=webp&amp;url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&amp;w=1280&amp;q=85. 3 checklist items about notification silencing, ambient soundscapes, schedule syncing.

All feature card checklist items use Check icon from lucide-react in text-primary color, with text-gray-400 description text. "Learn more" buttons use ArrowRight rotated -45deg.

### SHARED ANIMATION COMPONENTS

WordsPullUp: Splits text by spaces, each word is a motion.span that slides up (y:20 to 0) with staggered delay. Uses useInView (once: true). Supports showAsterisk prop that adds a superscript * after the last character "a" of the final word.

WordsPullUpMultiStyle: Takes an array of {text, className} segments, splits all into individual words preserving per-word className. Same pull-up animation. Words are wrapped in inline-flex flex-wrap justify-center.

### RESPONSIVE BREAKPOINTS

The page is fully responsive across mobile, tablet, and desktop. Cards in Features switch from 1-col (mobile) to 2-col (md) to 4-col (lg). Hero text scales from 26vw down to 19vw. Navbar items compress with smaller gaps on mobile. All padding, font sizes, and spacing use Tailwind responsive prefixes (sm/md/lg/xl/2xl).

### TECH STACK

Vite + React 18 + TypeScript

Tailwind CSS 3

framer-motion (for all animations: pull-up text, fade-in, scroll-linked opacity, card entrances)

lucide-react (ArrowRight, Check icons)
