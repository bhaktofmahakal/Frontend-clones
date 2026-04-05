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
| 9 | [CodeNest — Coding Education Hero](#9-codenest--coding-education-hero) | React · Tailwind CSS · hls.js · lucide-react | [Preview →](https://glow-glass-code.lovable.app/) |

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

## 9. CodeNest — Coding Education Hero

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
