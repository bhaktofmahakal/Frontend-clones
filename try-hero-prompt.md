# Hero Section Prompts Collection

---

## 1. Wealth Management Platform

**Tech:** React · Tailwind CSS

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

**Tech:** React · Tailwind CSS

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

**Tech:** React · Tailwind CSS · Framer Motion

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

**Tech:** React (Vite) · Tailwind CSS · motion/react · lucide-react · hls.js

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

**Tech:** React · Tailwind CSS · Framer Motion · hls.js

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

**Tech:** React · Tailwind CSS · Google Fonts (Inter 400/500/600, Bebas Neue)

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
