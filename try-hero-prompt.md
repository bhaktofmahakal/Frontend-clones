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
| 12 | [Stellar.ai — AI Landing Hero](#12-stellarai--ai-landing-hero) | React · Tailwind CSS · Lucide React | [Preview →](https://stellar-bool.lovable.app/) |

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

## 12. Stellar.ai — AI Landing Hero

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
