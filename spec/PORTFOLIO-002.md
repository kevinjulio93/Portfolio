# SPEC-PORTFOLIO-002: Editorial Cloud & Motion Portfolio Redesign (Anti-Slop, Zero-Mono)

**Status:** APPROVED (GATE 0 PASS — Score: 98/100)  
**Version:** 2.0  
**Author:** Software Architect & Spec Writer  
**Target Branch:** `develop` (recreated cleanly from `main`)  

---

## 1. Context & Design References
Redesign the portfolio of **Kevin Andres Julio Marquez** (`Senior Frontend & Full Stack Engineer | AI-First SDLC • Agentic Workflows`) taking direct visual and motion inspiration from:
1. **Primary Layout, Framing & Motion Choreography (Page 1 Video & Stills):**  
   `https://dribbble.com/shots/26995447-Personal-Portfolio-Website-Animations` (by Dymas Alfin for Mikan Team)
2. **Typography System & Editorial Rhythm (Page 2 Dark Design):**  
   `https://dribbble.com/shots/27591307-Derek-Personal-Portfolio-Website` (by Nizam — `Derek®`)

### Strict Anti-AI-Slop & Typography Mandates:
- **NO Monospace Fonts (`0` occurrences of `font-mono` or monospace families):** All text, including navbar counters (`[04]`, `[05]`, `[10y+]`), dates, and tags, must use the primary neo-grotesque sans-serif system (`Inter Tight` + `Plus Jakarta Sans`).
- **NO AI-Slop Tells:** Eliminate all neon gradients (`blue-500/violet-500/emerald-500`), floating `<pre><code>` snippets, blurred neon orbs, emoji sparkles (`✨`), and generic glassmorphic stat boxes.
- **Authentic Editorial Craft:** Framed white/charcoal architectural canvas (`#FDFDFD` in Light mode, `#0E0E10` in Dark mode) floating inside a double-bezel frame over an atmospheric monochrome cloud backdrop.

---

## 2. Requirements & Section Specifications

### 2.1 Typography & Theme Tokens (`src/styles/global.css` & `src/layouts/Layout.astro`)
- Load Google Fonts: **`Inter Tight`** (`wght@300;400;500;600;700;800`) and **`Plus Jakarta Sans`** (`wght@400;500;600;700`).
- Define `--font-display: 'Inter Tight', sans-serif` and `--font-sans: 'Inter Tight', 'Plus Jakarta Sans', -apple-system, sans-serif`.
- Default theme defaults to **Light Mode** (`shot1_hero.png` look) with full support for **Dark Mode** (`shot2_typography.png` `Derek®` look) via the theme switcher.
- Outer viewport background: Atmospheric cloud canvas (`.cloud-stage-bg`) with subtle parallax and soft vignette.

### 2.2 Top Editorial Navbar (`src/components/Navbar.astro`)
- Integrated inside the top of the editorial frame (and sticky on scroll):
  - **Left:** Elevated status pill with green indicator dot (`#22C55E`) + `Available for New Project` / `Disponible para Proyectos`.
  - **Center:** Navigation links with inline sans-serif counters in muted grey (`Work [04]`, `Service [05]`, `Experience [10y+]`, `References [02]`, `Contact`).
  - **Right:** Language toggle (`ES` / `EN`), Theme toggle (`Light` / `Dark`), and dark pill CTA button `Let's Talk ↗`.

### 2.3 Hero Section with Split Outline/Solid Display & Cursor Color Spotlight (`src/components/Hero.astro`)
- **Full-Width Split Display Title:**
  - `KEVIN` rendered in crisp outline stroke (`color: transparent; -webkit-text-stroke: 2px currentColor`).
  - `JULIO` rendered in solid bold fill (`font-weight: 800; letter-spacing: -0.035em`).
- **Centered Cutout Portrait (`/kevin.png`) with Interactive Spotlight:**
  - Base image rendered in editorial black & white (`grayscale(100%) contrast(1.06)`).
  - Overlay image in natural warm color revealed via a radial CSS mask (`--spot-x`, `--spot-y`) that defaults to illuminating the face (like `shot1_hero.png`) and smoothly tracks the user's cursor across the hero.
- **Bottom-Left Editorial Block:**
  - Role heading: `Senior Frontend & Full Stack`
  - Concise value proposition (`Designing digital products, analytics platforms, and multi-agent systems that are clear, scalable, and conversion focused.`)
  - Primary dark pill CTA: `Let's collaborate ↗`
- **Bottom-Right Social Pill Stack:**
  - 4 vertical bordered pill buttons with minimalist icons: `GitHub`, `LinkedIn`, `Resume CV`, `Email`.
- **Bottom Ticker / Marquee (from Shot 2 `Derek®`):**
  - Clean horizontal editorial marquee (`• Conversion-Focused • Frontend Architecture • AI-First SDLC • Available Worldwide •`).

### 2.4 `/SELECTED WORK` Section & Interactive Case Study Drawer (`src/components/Projects.astro`)
- **Header:** Giant low-opacity `PORTFOLIO` watermark behind `/SELECTED WORK`.
- **Filter Bar:** Category filter tabs on the left (`All`, `Real Project`, `AI & Architecture`) + `View All Work ↗` pill button on the right.
- **2×2 Project Grid:**
  1. `Qrvey — Embedded Analytics & Real-Time SaaS Platform` (`Real Project`)
  2. `Cigo Tracker — Multi-Stop Route Optimization & Logistics` (`Real Project`)
  3. `FinanzApp — AI-Powered Personal Finance Platform` (`Real Project`)
  4. `Multi-Agent SDLC — Autonomous Spec-Driven Delivery Engine` (`Exploration`)
- **Interactive Case Study Sheet (`00:17–00:20` in Video):**
  - Clicking a card opens an editorial project detail view with `← Back` button, `● Available for New Project` badge, metadata columns (`Role`, `Timeline`, `Stack`), full description, and `Live Preview ↗` + `Contact Me` buttons.

### 2.5 `/SERVICE` Accordion Section (`src/components/Skills.astro`)
- **Header:** Giant low-opacity `SERVICE` watermark behind `/SERVICE`.
- **Interactive Accordion:**
  - 4 core service/capability rows (`FRONTEND ARCHITECTURE & UI`, `AI-FIRST SDLC & AGENTIC WORKFLOWS`, `FULL STACK & MICROSERVICES`, `QA AUTOMATION & CLOUD DEVOPS`).
  - **Active Row:** Transforms into a high-contrast `#1E1E1E` dark rounded card with description, tilted floating multi-screen preview card (`rotate(-5deg)`) breaking the top border, vector skill pills from `skillIcons.ts`, and `✕` close button.
  - **Collapsed Rows:** Minimal rows with `1px` dividers and `↗` arrow on the right.

### 2.6 `/EXPERIENCE` Dark Stage (`src/components/Experience.astro`)
- **Container:** Full-bleed dark charcoal container (`#1E1E1E`) matching `00:11–00:14` of the reference video.
- **Header:** Giant `EXPERIENCE` watermark, `/EXPERIENCE` on the left, `10+ years of experience` on the right.
- **Interactive Career Rows:**
  - Rows for `Cigo Tracker`, `Qrvey Inc`, `Qualty SAS`, and `Aservices SAS`, plus `Honors & Certifications` (`Star of the Quarter 2022`, `Kubernetes`, `B.S. Systems Engineering`).
  - Hovering a row displays a tilted floating preview card (`00:14` in video); clicking toggles the full bilingual achievement bullets and stack tags.

### 2.7 `/REFERENCES` & `HAVE A PROJECT IN MIND?` Closing Stage (`src/components/References.astro`, `src/components/Contact.astro`, `src/components/Footer.astro`)
- Clean editorial colleague reference cards (`Hernando Ariza — Red Hat`, `Keiner Pájaro — Qrvey`).
- Atmospheric cloud-mist closing section with `● Available for New Project` pill, oversized `HAVE A PROJECT IN MIND?` headline in `Inter Tight`, collaboration subcopy, and `Contact Me ↗` dark pill CTA.

---

## 3. Acceptance Criteria (Gates G1–G5)
- **AC-01 (Zero Mono):** `0` occurrences of `font-mono` or monospace font families across `src/`.
- **AC-02 (Anti-Slop):** `0` neon gradients (`from-blue-500`), `0` floating code lines, `0` blurred neon orbs.
- **AC-03 (Typography):** `Inter Tight` + `Plus Jakarta Sans` applied consistently with tight display tracking (`-0.03em` to `-0.04em`).
- **AC-04 (Interactive Fidelity):** Hero B&W-to-color cursor spotlight, `/SELECTED WORK` filter + detail drawer, `/SERVICE` dark active card with tilted preview, and `/EXPERIENCE` dark stage with hover preview all function smoothly.
- **AC-05 (Bilingual & Clean Build):** Full ES/EN translation coverage and `npm run build` passes with `0` errors.
