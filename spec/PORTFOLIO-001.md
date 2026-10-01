# SPEC-PORTFOLIO-001: Portfolio Content, Skills, and Icons Update

**Status:** APPROVED  
**Author:** Software Architect & Spec Writer  
**Assignee:** Frontend Agent  
**Reviewer:** Code Review Agent & QA Agent  
**Target Release:** Current  

---

## 1. Context & Objectives
Kevin Andres Julio Marquez has updated his official curriculum vitae with an enhanced senior profile:
- **Title / Specialization:** Senior Frontend & Full Stack Engineer | AI-First SDLC • Agentic Workflows
- **Core Experience:** 10+ years overall, 8 years at Qrvey Inc (growing from Junior to Senior Frontend Engineer), recent work at Cigo Tracker (Blazor, .NET, GraphHopper, Agentic SDLC, Loop Engineering).
- **Expanded Tech Stack:** Frontend (React, Angular, TypeScript, Next.js, StencilJS, Blazor, Redux, Zustand, WebSockets, Vue, Tailwind CSS), AI-First SDLC (Agentic Workflows, Spec-Driven Development, Loop Engineering, Agent Tooling / MCP), Testing (Playwright, Cypress, Jest, Vitest, Testing Library), Backend (Ruby on Rails, Node.js, C# / .NET, EF Core, PostgreSQL), DevOps (Docker, Kubernetes, Linux, CI/CD, Nginx, Redis, Cloudflare, Supabase, Git).

The objective is to update the entire portfolio while preserving the existing aesthetics, modern dark/light glassmorphic design, smooth GSAP animations, and bilingual (ES/EN) i18n architecture, while improving all icons with official and crisp SVGs and adding complete bilingual translations.

---

## 2. Technical Scope & File Changes

### 2.1 `src/data/portfolio.ts`
- **`personalInfo`**:
  - `role`: "Senior Frontend & Full Stack Engineer"
  - `bio`: Complete description covering 10+ years, Qrvey 8-year progression, full-stack systems, AI-First SDLC & Agentic Workflows.
  - `shortBio`: Concise tagline highlighting Senior Frontend & Full Stack with AI-First SDLC.
  - `social` & `contact`: Keep verified phone, email, location, GitHub, LinkedIn, website.
- **`skills`**:
  - Re-categorize into 5 clean structured categories:
    1. `Frontend`: React, TypeScript, JavaScript, Angular, Next.js, StencilJS, Blazor, Redux, Zustand, WebSockets, Vue, Tailwind CSS, SASS/CSS3, HTML5
    2. `AI-First SDLC`: Agentic Workflows, Multi-Agent Orchestration, Loop Engineering, Spec-Driven Dev (SDD), Test-Driven AI Generation (TDAI), Agent Tooling / MCP
    3. `Testing & QA`: Playwright, Cypress, Jest, Vitest, React Testing Library, E2E Testing
    4. `Backend`: Node.js, C#, ASP.NET Core, Entity Framework Core, PostgreSQL, RESTful APIs
    5. `DevOps & Cloud`: Docker, Kubernetes, Linux, CI/CD, Nginx, Redis, Cloudflare, Supabase, Git
- **`workExperience`**:
  - `cigo-tracker`: "Senior Full Stack Developer (Frontend & Agentic Workflows)", "Feb 2026 – Ago 2026" / "Feb 2026 – Aug 2026", 4 detailed bullet points, modern tags.
  - `qrvey`: "Senior Frontend Engineer", "Ene 2018 – Ene 2026 (8 Años)" / "Jan 2018 – Jan 2026 (8 Years)", 6 detailed bullet points covering Page Builder, Entity Management & Real-Time Monitoring, Workflow Engine, RBAC, Component Systems & AI Delivery (SDD/TDAI), Qrvey Star award.
  - `qualty`: "Full Stack Developer & Co-Founder", "Oct 2017 – Sep 2018", 3 bullet points with Ruby on Rails, PostgreSQL, Docker, UX.
  - `aservices`: "Frontend Developer", "Nov 2016 – Ago 2017", 2 bullet points with JS ES6+, HTML5, CSS/SASS, RESTful APIs.
- **`awards` & `certifications`**:
  - Award: Star of the Quarter (2022) – Qrvey Inc (Admin Engineering Team).
  - Certifications: Kubernetes para administradores IT esencial (LinkedIn Learning, Oct 2025).
  - Education: Bachelor's Degree in Systems Engineering (Universidad Tecnológica de Bolívar, Oct 2018).

### 2.2 `src/data/skillIcons.ts`
- Replace placeholder/low-quality icons (C#, EF, .NET) with authentic, sharp SVG paths.
- Add high-quality branded SVGs for all technical skills:
  - React, Angular, TypeScript, JavaScript, Next.js, Vue, StencilJS, Blazor, Redux, Zustand, WebSockets, Tailwind CSS, SASS, HTML5, CSS3.
  - Playwright, Cypress, Jest, Vitest, React Testing Library.
  - Ruby on Rails, Ruby, Node.js, C#, ASP.NET Core, Entity Framework Core, PostgreSQL, Redis, Supabase.
  - Docker, Kubernetes, Linux, Nginx, Cloudflare, Git, Bash, CI/CD.
  - Custom elegant SVGs for AI-First SDLC concepts (Agentic Workflows, Multi-Agent Orchestration, Loop Engineering, Spec-Driven Dev, Agent Tooling / MCP).

### 2.3 `src/i18n/translations.ts`
- Provide full bilingual translation for:
  - Role, About title, Bio, ShortBio.
  - Skill categories: `skills.cat.frontend`, `skills.cat.aifirst`, `skills.cat.testing`, `skills.cat.backend`, `skills.cat.devops`.
  - All work experience role titles, periods, and individual bullet points (`exp.<id>.desc.<idx>`).
  - Stats labels (`hero.stats.years`, `hero.stats.companies`, `hero.stats.techs`).
  - Awards and certifications.

### 2.4 Components & Layout
- **`Layout.astro`**: Update SEO title to `Kevin Julio | Senior Frontend & Full Stack Engineer | AI-First SDLC` and updated meta description.
- **`Hero.astro`**: Update role text, statistics (10+ Años exp., 4 Empresas / 8+ años en Qrvey, 25+ Tech stacks), and floating code snippets (modernizing with Zustand, Blazor, Agentic workflows, Playwright).
- **`About.astro`**: Update section title, bio, tech pills.
- **`Skills.astro`**: Ensure all 5 categories render seamlessly with their respective icons, smooth hover effects, responsive layout, and translated category headers.
- **`Experience.astro`**: Ensure all bullet points, tags, and timeline markers render without overflow or misalignment.

---

## 3. Acceptance Criteria
1. **Content Accuracy:** 100% faithful to the provided CV details, with accurate dates, metrics, and bullet points.
2. **Icon Quality:** No rectangular/plain-text placeholder icons. All icons render cleanly in light and dark mode with appropriate brand colors or theme adjustments.
3. **Bilingual Completeness:** Toggling between ES and EN translates all headings, role titles, bullet points, skills categories, and metadata without untranslated raw keys or missing strings.
4. **Visual Excellence & Stability:** Preserves GSAP parallax, scroll-trigger animations, glow/shadow cursor effects, theme switcher, and mobile menu responsiveness.
5. **Zero Build Errors:** `npm run build` succeeds with exit code 0.
