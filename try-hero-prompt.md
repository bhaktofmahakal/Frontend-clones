# 1st

**Create a modern, high-impact hero section for a wealth management platform using React and Tailwind CSS.

Layout & Background:

The section must be full viewport height (min-h-screen) with a black background .
Background Video: Use this specific video URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260207_ 050933_33e2620d-09cd-43a2-80ef-4cdbb42f4194.mp4. It should be autoplaying, looped, and muted.
Video Styling: The video must be scaled to 150% of its size (scale-150) with the focal point aligned to the top-left corner (object-left-top, origin-top-left).
Navbar:

Place a transparent navbar at the absolute top.
Include a white logo on the left.
Center navigation links: "Features" (with a chevron down icon), "Company", and "Blogs". These should be white with hover opacity effects.
Right side actions: A "Sign in" text link and a white "Get Started " pill-shaped button with black text.
Hero Content (Centered):

Tag: A glassmorphic pill at the top saying "Real-Time Budget Tracking" (white text, semi-transparent border/bg).
Headline: Huge, centered white text saying "Build Wealth That Lasts Generations" (responsive font size, up to ~100px on desktop).
Subtitle: "Transform today's earnings into tomorrow's family fortune with proven wealth-building strategies" (white text with slight transparency).
CTA: A prominent white pill button saying "Start Building Wealth" with black text and a hover scale effect.
Bottom Features Grid:

Place a floating card container near the bottom of the screen.
Style: Dark glassmorphism effect (bg-black/70, backdrop-blur-xl, white border).
Grid: 4 columns listing these steps:
Create Your Free Account: Sign up in seconds using your email address or mobile number.**



# 2nd

**Create a responsive, full-screen Hero section using React and Tailwind CSS with the following specifications:

1. Layout & Positioning:

Set the container to at least screen height (min-h-screen) with a dark blue fallback background (#21346e).
Align the main content to the top of the page (not centered), adding significant top padding (approx pt-32 on mobile, pt-48 on desktop).
Use a standard container with horizontal padding.

2. Background Video:

Implement a full-screen, absolute-positioned background video.
The video must be set to autoPlay, loop, muted, and playsInline.
Use object-cover to ensure it fills the screen without distortion.
Video URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260206_044704_dd33cb15-c23f-4cfc-aa09-a0465d4dcb54.mp4

3. Typography (Main Headline):

Font Family: Rubik (sans-serif).
Style: Bold, Uppercase, White text.
Layout: Display the text on three separate lines:
Line 1: "NEW ERA"
Line 2: "OF DESIGN"
Line 3: "STARTS NOW"
Sizing: Large and responsive (text-6xl mobile, text-8xl tablet, text-[100px] desktop).
Spacing: Very tight line height (0.98) and negative letter spacing (-2px to -4px).

4. Custom CTA Button:

Place a button below the headline with a fixed size of 184px wide by 65px high.
Interaction: Add a hover effect that slightly scales up (scale-105) and an active press effect (scale-95).
Background: Instead of a standard CSS background, use an SVG element that fills the button container (absolute inset-0). Use a custom path for the shape filled with white.
Text: Centered label "GET STARTED".
Text Style: Rubik, Bold, Uppercase, 20px size, dark text color (#161a20).**

# 3rd

**Build a high-fidelity, responsive, dark-themed hero section for a SaaS product called "Taskora" using React, Tailwind CSS, and Framer Motion (for entrance animations).

1. Visual Style & Assets
Theme: Dark mode base (#050505) with white text.
Background Video: Use this video URL as a full-screen background loop. Set it to opacity-50 and add a gradient overlay (black/60 to #050505) so it fades seamlessly into the background at the bottom: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260201_052917_7fc4e418-3123-40bf-b5ba-394c28eb4b3a.mp4
Typography: Import and use these specific Google Fonts:
Instrument Serif (Italic) → Strictly for the word "Workflow" in the headline.
Manrope → For the "Trusted by" badge and subheadlines.
Cabin → For the main CTA button.
Inter / Inter Tight → For the Dashboard UI and Navbar links.

2. Component Layout
A. Floating Navbar
Create a fixed, floating "pill-shaped" navbar with a glassmorphism effect (bg-white/10 backdrop-blur-md).
Desktop: Logo on left, Links centered (Home, Features, Company, Contact), Auth buttons (Sign Up, White "Sign In" button) on right.
Mobile: Collapse links into a hamburger menu that opens a glassmorphism dropdown.

B. Hero Content (Centered)
Badge: A pill-shaped badge reading "Trusted by +30.000 of clients globally". Include a star icon with a blue gradient fill.
Headline: Massive scale (up to text-[80px] on desktop). Text: "Simplify Your Workflow. Stay Focused." (Italicize "Workflow" using the Serif font).
Subhead: Gray text (text-gray-400): "Taskora helps teams manage projects, tasks, and deadlines with clarity."
CTA: A large white button with black text: "Book a Free Demo". Add a subtle hover scale and shadow effect.

C. Dashboard Preview (The "Product Shot")
Build a detailed, non-functional mock dashboard interface container placed below the CTA.
Visuals: Light mode dashboard (bg-[#F9F9FA]) to contrast with the dark hero background.
Sidebar: Thin vertical rail with navigation icons (Home, Users, etc.).
Content Area:
Stats Cards: 3 cards (Total Sales, Operating Expenses, Gross Profit) showing a value, a percentage trend (green/red), and a mini bar chart at the bottom.
Revenue Chart: A section showing a bar chart visualization.
Deals Table: A detailed data table showing rows with "Deal Name", "Company" (http://Amazon.com with logo), "Amount", "Date", "Owner" (avatar), and "Stage" (New tag).
Header: Search bar, Notification bell, and User profile pictures.

3. Responsiveness
Ensure the Typography scales down significantly for mobile (text-5xl for headline).
The Dashboard preview should preserve its layout but become scrollable or stack vertically on smaller screens.
Navbar transforms from a horizontal row to a mobile drawer.**

# 4th

**Create a high-fidelity, dark-mode Hero section for a SaaS product called "ClearInvoice" using React and Tailwind CSS.

Tech Stack:
Framework: React (Vite)
Styling: Tailwind CSS
Animation: motion/react (Framer Motion)
Icons: lucide-react
Video: Native HTML5 <video> with hls.js for streaming (Do NOT use react-player).

1. Background Video (Crucial):
Source: https://stream.mux.com/hUT6X11m1Vkw1QMxPOLgI761x2cfpi9bHFbi5cNg4014.m3u8
Behavior: Autoplay, Loop, Muted, PlaysInline.
Opacity: 100% (No dark overlay).
Implementation: Create a memoized BackgroundVideo component using hls.js to handle the .m3u8 stream natively. Ensure it cleans up properly on unmount to prevent "AbortError".
Z-Index: It must sit behind all content (-z-10).

2. Layout & Styling:
Font Family:
Headings: "Switzer" (Medium weight, tight tracking).
Body: "Geist" (Clean, legible).

Top Bar: A 5px high gradient bar at the very top: from-[#ccf] via-[#e7d04c] to-[#31fb78].
Navbar:
Logo on left.
Links (Features, Pricing, Reviews) centered.
Auth buttons (Sign In, Sign Up) on right.
Mobile: Hamburger menu that opens a full-width dropdown.

3. Hero Content:
Headline: "Manage your online store while save 3x operating cost" (Large text: text-6xl, tight leading).
Subhead: "ClearInvoice takes the hassle out of billing with easy-to-use tools." (White/90).
Animations: Use motion/react to stagger the entrance of the Text, Buttons, and Social Proof (Fade Up + Slide).

4. Button Styles (Exact Recreation):
Primary Button:
Background: Gradient from-[#FF3300] to-[#EE7926].
Glow: An absolute positioned div behind the button with bg-orange-600 blur-lg opacity-20.
Inner Stroke: A 1.5px border overlay (border-white/20) inside the button for a "glassy" edge.
Hover: scale: 1.05, glow increases to opacity-60, and an Arrow icon slides in from the left.

Secondary Button:
Background: bg-white/90 backdrop blur.
Inner Stroke: 1.5px border (border-black/5).
Hover: scale: 1.05, background becomes solid white.

5. Social Proof:
Row of 3 user avatars (overlapping borders).
Text: "Trusted by 210k+ stores worldwide".**

# 5th

**Build a high-fidelity, dark-themed Hero Section using React, Tailwind CSS, and Framer Motion. The background should be solid black (#000000).

1. Structure & Layout:

Navbar: Fixed at the top with a blurred glass effect.

Logo: Text "Synapse" (font-medium, tracking-tight, white).

Links: Features (active state with gradient border), Insights, About, Case Studies (strikethrough style), Contact.

CTA: "Get Started for Free" (White/Gray gradient button).

Hero Content: Centered text container (z-10, relative).

Badges: Row of 3 glass-effect badges "Integrated with" + Icon.

Headline: "Where Innovation Meets Execution" (Large ~80px font, tight tracking, fade-in animation).

Subtext: 2-line description about testing and deployment.

Buttons:

"Get Started for Free" (Solid Black background, White border).

"Let's Get Connected" (Transparent glass style).

Logo Marquee: A static row of grayscale, 40% opacity logos (use placeholder SVGs) at the bottom.

2. Background Video (Crucial):

Source: https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8

Implementation: Create a memoized VideoPlayer component using hls.js to handle the .m3u8 stream. Ensure proper cleanup on unmount.

Styling: 100% Opacity (no dark overlays), playing in loop/muted/autoplay.

Positioning: The video container should have a height of 80vh and be positioned absolute bottom-[35vh], sitting effectively "floating" behind the text content but pushed up from the bottom edge.

3. Animations:

Use motion/react to apply staggered fade-in-up animations to the badges, headline, subtitle, and buttons on load.**

# 6th

**Build a full-screen automotive hero section for a car dealership/marketplace website. Use Google Fonts: Inter (400, 500, 600) and Bebas Neue.

Background:

Full-viewport-height section (min 600px, max 965px) with a dark (#010101) fallback background.

Looping, muted, autoplaying background video covering the entire section using object-cover. Use this video URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260213_051817_c7d8ccc6-bfaa-417c-8474-e5cefeea26b4.mp4

Add a subtle top gradient overlay (260px tall, from black/30 to transparent) and a matching bottom gradient overlay (260px tall, from black/30 to transparent) for text readability.

Large decorative text:

Centered horizontally, positioned about 15% from the top. Display the words "NEW ERA" as very large, bold, all-caps decorative typography spanning about 75% of the width (max 1073px).

Fill the text with a vertical linear gradient: white at 83% opacity at the top, fading to white at 12% opacity at the bottom. This text should be behind the content but above the video.

Top navbar (pinned to top, full width, horizontal padding 80px on desktop):

Left: A small abstract pinwheel/spinner logo icon (28x28, white) next to the brand name "Logoipsum" in white, Inter font, ~24px. Hide the brand name on small screens.

Center: Navigation links — "Home", "Shop", "Blog", "About Us", "Contact Us" — in Inter, light gray (#EEEFF2), with -0.32px letter-spacing. Hidden on screens below lg breakpoint.

Right: A "Sign In" text link in white (#FBFBFD), and a white rounded (8px) "Cart" button (48px tall) with a small shopping cart icon (18x18, dark #272835) and "Cart" label in Inter medium, dark text (#272835). The button has a subtle box-shadow. Hide "Sign In" on small screens.

Bottom CTA area (pinned to bottom of the section, same horizontal padding):

Left side: A paragraph in Inter, white, ~20px/30px line-height, max-width 414px: "Choose from thousands of certified cars you can trust, transparently priced, because buying a car should feel exciting." Next to it, a white rounded (8px) "Shop Now" button (48px tall) with an arrow-right icon (18x18, dark), Inter medium text, dark text (#272835), with a light border (#EEEFF2) and subtle shadow. On small screens, stack the paragraph and button vertically.

Right side: A large tagline in Bebas Neue, white, 64px on desktop (48px–60px on smaller screens), line-height 1, max-width 466px: "Find the perfect car that fits our journey".

On large screens, the left and right sides sit in a single row aligned to the bottom. On smaller screens they stack vertically.

Make the entire section fully responsive. Use Tailwind CSS and React.**


**MORE COMING**
Connect Your Bank Accounts: Securely link your bank accounts, cards, or digital wallets with.
Set Your Financial Goals: Customize your savings, spending, or investment goals with easy.
Track, Grow, and Optimize: Watch your money work for you in real time—get insights and tips.
