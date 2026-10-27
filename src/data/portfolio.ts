export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "real" | "exploration";
  categoryLabel: string;
  client: string;
  role: string;
  period: string;
  description: string;
  longDescription: string;
  image: string;
  pills: string[];
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  category: string;
}

export interface ServiceItem {
  id: string;
  titleKey: string;
  title: string;
  descKey: string;
  description: string;
  skillCategory: string;
  previewScreens: {
    label: string;
    metric: string;
    sub: string;
    accent: string;
  }[];
}

export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  period: string;
  summary: string;
  description: string[];
  tags: string[];
}

export interface Award {
  title: string;
  year: string;
  description: string;
}

export interface Reference {
  name: string;
  role: string;
  phone: string;
  email: string;
}

export interface Certification {
  title: string;
  platform: string;
  year: string;
}

export const personalInfo = {
  firstName: "KEVIN",
  lastName: "JULIO",
  name: "Kevin Andres Julio Marquez",
  role: "Senior Frontend & Full Stack Engineer",
  shortRole: "Senior Frontend & Full Stack",
  tagline: "AI-First SDLC • Agentic Workflows",
  email: "kevinjulio93@gmail.com",
  phone: "(+57) 318 531 2757",
  location: "Cartagena, Colombia",
  bio: "Senior Frontend & Full Stack Engineer con más de 10 años de experiencia construyendo aplicaciones web de alto rendimiento, plataformas de analítica de datos y sistemas de UI escalables. Durante más de 8 años en Qrvey, evolucioné desde Junior Frontend Developer hasta Senior Frontend Engineer, liderando la arquitectura frontend y el desarrollo de módulos clave del producto. Especializado en React, Angular, TypeScript, Redux, Zustand y Blazor, junto al diseño e integración de APIs y microservicios con C#/.NET, Node.js y Ruby on Rails. Especializado en ingeniería de agentes (AI-First SDLC & Loop Engineering), orquestando flujos de trabajo multi-agente con especificaciones estructuradas, code review automatizado y testing continuo con Playwright, Cypress y Jest.",
  shortBio: "Diseñando y construyendo productos digitales, plataformas de analítica y flujos multi-agente claros, escalables y orientados a resultados.",
  education: {
    degree: "Bachelor's Degree in Systems Engineering",
    university: "Universidad Tecnológica de Bolívar",
    year: 2018,
  },
  social: {
    github: "https://github.com/kevinjulio93",
    linkedin: "https://linkedin.com/in/kevinjulio93",
    website: "https://kevin.juliomarquez.dev",
  },
  resumeUrl: "/resume.pdf",
};

export const skills: Skill[] = [
  // Frontend Engineering & Core
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "Angular", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "StencilJS", category: "Frontend" },
  { name: "Blazor", category: "Frontend" },
  { name: "Redux", category: "Frontend" },
  { name: "Zustand", category: "Frontend" },
  { name: "WebSockets", category: "Frontend" },
  { name: "Vue", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "SASS/CSS3", category: "Frontend" },
  { name: "HTML5", category: "Frontend" },

  // AI-First SDLC & Agentic Engineering
  { name: "Agentic Workflows", category: "AI-First SDLC" },
  { name: "Multi-Agent Orchestration", category: "AI-First SDLC" },
  { name: "Loop Engineering", category: "AI-First SDLC" },
  { name: "Spec-Driven Dev (SDD)", category: "AI-First SDLC" },
  { name: "Test-Driven AI Generation", category: "AI-First SDLC" },
  { name: "Agent Tooling / MCP", category: "AI-First SDLC" },

  // Backend & APIs
  { name: "Node.js", category: "Backend" },
  { name: "C#", category: "Backend" },
  { name: "ASP.NET Core", category: "Backend" },
  { name: "Entity Framework Core", category: "Backend" },
  { name: "RESTful APIs", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },

  // Testing & DevOps
  { name: "Playwright", category: "Testing" },
  { name: "Cypress", category: "Testing" },
  { name: "Jest", category: "Testing" },
  { name: "Vitest", category: "Testing" },
  { name: "React Testing Library", category: "Testing" },
  { name: "E2E Testing", category: "Testing" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "Linux", category: "DevOps" },
  { name: "CI/CD", category: "DevOps" },
  { name: "Nginx", category: "DevOps" },
  { name: "Redis", category: "DevOps" },
  { name: "Cloudflare", category: "DevOps" },
  { name: "Supabase", category: "DevOps" },
  { name: "Git", category: "DevOps" },
];

export const services: ServiceItem[] = [
  {
    id: "frontend-arch",
    titleKey: "service.0.title",
    title: "FRONTEND ARCHITECTURE & UI",
    descKey: "service.0.desc",
    description:
      "Designing clear, high-performance, and scalable interfaces for enterprise dashboards, multi-tenant SaaS platforms, and reusable component libraries.",
    skillCategory: "Frontend",
    previewScreens: [
      { label: "Dashboard Canvas", metric: "60 FPS", sub: "Drag & Drop Widgets", accent: "#18181b" },
      { label: "Design System", metric: "45+ UI", sub: "StencilJS & React", accent: "#27272a" },
      { label: "Live Telemetry", metric: "< 12ms", sub: "Zustand + WebSockets", accent: "#3f3f46" },
    ],
  },
  {
    id: "ai-sdlc",
    titleKey: "service.1.title",
    title: "AI-FIRST SDLC & AGENTIC WORKFLOWS",
    descKey: "service.1.desc",
    description:
      "Orchestrating autonomous multi-agent coding loops, Spec-Driven Development (SDD), and closed-loop automated validation that accelerate delivery by 50%.",
    skillCategory: "AI-First SDLC",
    previewScreens: [
      { label: "Spec Gate G0", metric: "98/100", sub: "Deterministic SDD", accent: "#18181b" },
      { label: "Agent Loop", metric: "4 Agents", sub: "Arch • Dev • QA • Sec", accent: "#27272a" },
      { label: "Throughput", metric: "+50%", sub: "Closed-Loop PRs", accent: "#3f3f46" },
    ],
  },
  {
    id: "fullstack-apis",
    titleKey: "service.2.title",
    title: "FULL STACK & MICROSERVICES",
    descKey: "service.2.desc",
    description:
      "Engineering resilient backend APIs, relational data models, and distributed microservices with C#/.NET, Node.js, Entity Framework Core, and PostgreSQL.",
    skillCategory: "Backend",
    previewScreens: [
      { label: "Route Engine", metric: "Multi-Stop", sub: "ASP.NET Core + GraphHopper", accent: "#18181b" },
      { label: "Data Layer", metric: "ACID", sub: "PostgreSQL & EF Core", accent: "#27272a" },
      { label: "API Gateway", metric: "99.9%", sub: "REST & Real-Time Streams", accent: "#3f3f46" },
    ],
  },
  {
    id: "qa-cloud",
    titleKey: "service.3.title",
    title: "QUALITY GATES & CLOUD DEVOPS",
    descKey: "service.3.desc",
    description:
      "Guaranteeing zero-regression deployments with end-to-end Playwright/Cypress suites, containerized Docker/Kubernetes clusters, and automated CI/CD pipelines.",
    skillCategory: "Testing",
    previewScreens: [
      { label: "E2E Automation", metric: "100%", sub: "Playwright & Cypress", accent: "#18181b" },
      { label: "Cloud Native", metric: "K8s", sub: "Docker & Kubernetes", accent: "#27272a" },
      { label: "Edge & Cache", metric: "Global", sub: "Cloudflare, Nginx & Redis", accent: "#3f3f46" },
    ],
  },
];

export const softSkills: string[] = [
  "Technical Leadership & Mentoring",
  "AI-First SDLC & Loop Engineering",
  "Component-Driven Architecture",
  "Cross-functional Collaboration (Agile)",
  "Software Analysis & Design",
  "Code Quality & Code Review",
  "Critical Incident Management",
  "Problem Solving & Analytical Thinking",
];

export const workExperience: WorkExperience[] = [
  {
    id: "cigo-tracker",
    company: "Cigo Tracker",
    role: "Senior Full Stack Developer (Frontend & Agentic Workflows)",
    period: "Feb 2026 – Aug 2026",
    summary: "Blazor UI architecture, C#/.NET microservices, GraphHopper route optimization & multi-agent SDLC loops.",
    description: [
      "Desarrollo de interfaces frontend de alto rendimiento en Blazor, transformando sistemas de diseño de Figma en componentes accesibles y responsivos conectados a microservicios en C#/.NET.",
      "Road Builder: Lideré la interfaz frontend e integración de APIs de enrutamiento GraphHopper para optimización dinámica de rutas multi-parada; migración de servicios legados en PHP a ASP.NET Core y Entity Framework Core.",
      "Diseño de patrones modulares de componentes frontend con responsabilidad única, aislando actualizaciones de estado y eliminando ciclos de renderizado redundantes.",
      "Agentic SDLC & Loop Engineering: Arquitectura de loops de desarrollo multi-agente integrando subagentes de codificación autónomos, generación estructurada de specs, ciclos de feedback de lint/test con Playwright y Cypress, y validación de PRs en ciclo cerrado.",
    ],
    tags: ["Blazor", "C#", ".NET", "Entity Framework Core", "GraphHopper", "Agentic SDLC", "Playwright", "Cypress"],
  },
  {
    id: "qrvey",
    company: "Qrvey Inc",
    role: "Senior Frontend Engineer",
    period: "Jan 2018 – Jan 2026",
    summary: "8 years leading embedded analytics, drag-and-drop Page Builder, WebSockets telemetry & StencilJS/React design systems.",
    description: [
      "Crecimiento profesional continuo desde Junior Frontend Developer hasta Senior Frontend Engineer, liderando el desarrollo frontend del suite Admin, analítica avanzada y módulos principales con React, Angular, TypeScript, Redux y Zustand.",
      "Page Builder & Dashboards: Construcción de un canvas drag-and-drop en React y Angular para componer gráficos complejos, widgets, filtros dinámicos y visualización interactiva de datos con visibilidad basada en roles (RBAC).",
      "Entity Management & Real-Time Monitoring: Plataforma de control y monitoreo en tiempo real con React, Zustand y WebSockets para ingesta de telemetría en vivo, gestión de estado de alta frecuencia y control unificado multi-tenant.",
      "Workflow Automation Designer: Interfaz visual orientada a eventos para diseño de flujos en React Redux, permitiendo a los usuarios construir pipelines condicionales de triggers y acciones en respuesta a umbrales de datos en tiempo real.",
      "Admin User Management & Content Deployment: Administración empresarial de usuarios multi-tenant con matrices de permisos RBAC y motor automatizado de despliegue entre entornos (staging, QA y producción).",
      "Component Systems & AI Delivery: Creación de librerías de componentes web reutilizables con TypeScript, StencilJS y React; implementación de Spec-Driven Development (SDD), Test-Driven AI Generation (TDAI) y suites de prueba con Cypress/Jest, aumentando el rendimiento de entrega en un 50%.",
    ],
    tags: ["React", "Angular", "TypeScript", "Redux", "Zustand", "WebSockets", "StencilJS", "Docker", "Kubernetes", "CI/CD", "Jest", "Cypress"],
  },
  {
    id: "qualty",
    company: "Qualty SAS & Software Projects",
    role: "Full Stack Developer & Co-Founder",
    period: "Oct 2017 – Sep 2018",
    summary: "Co-founded digital product studio building full-stack Ruby on Rails, PostgreSQL & Docker web platforms.",
    description: [
      "Desarrollo de aplicaciones web full stack y servicios API usando Ruby on Rails, PostgreSQL y JavaScript moderno, construyendo modelos de datos relacionales, controladores de lógica de negocio e interfaces responsivas.",
      "Diseño de flujos de experiencia de usuario (UI/UX) y configuración de entornos de despliegue contenerizados mediante Docker.",
      "Atención y soporte directo a clientes y usuarios, asegurando la adopción de la plataforma y su mejora continua basada en requerimientos reales.",
    ],
    tags: ["Ruby on Rails", "PostgreSQL", "JavaScript", "Docker", "UI/UX"],
  },
  {
    id: "aservices",
    company: "Aservices SAS",
    role: "Frontend Developer",
    period: "Nov 2016 – Aug 2017",
    summary: "Modular frontend engineering with modern ES6+ JavaScript, SASS architecture, and RESTful API integrations.",
    description: [
      "Desarrollo y mantenimiento de interfaces web modulares con JavaScript (ES6+), HTML5 y CSS/SASS, optimizando usabilidad y diseño responsive.",
      "Integración de APIs RESTful y optimización del rendimiento y renderizado cross-browser en colaboración con el equipo multidisciplinario.",
    ],
    tags: ["JavaScript", "HTML5", "SASS", "CSS3", "RESTful APIs"],
  },
];

export const awards: Award[] = [
  {
    title: "Star of the Quarter (2022)",
    year: "2022",
    description: "Reconocimiento por desempeño sobresaliente e impacto técnico en el equipo de ingeniería Admin en Qrvey Inc.",
  },
];

export const certifications: Certification[] = [
  {
    title: "Kubernetes para administradores IT esencial",
    platform: "LinkedIn Learning",
    year: "Oct 2025",
  },
];

export const references: Reference[] = [
  {
    name: "Hernando Ariza",
    role: "Red Hat / STSE",
    phone: "(+57) 313 767 4737",
    email: "hclareth7@gmail.com",
  },
  {
    name: "Keiner Pajaro",
    role: "Qrvey / Team Lead",
    phone: "+34 663-58-2321",
    email: "keiner.apajaro@gmail.com",
  },
];

export const projects: Project[] = [
  {
    id: "proyecto-qrvey",
    title: "Qrvey - Embedded Analytics & Real-Time SaaS Platform",
    subtitle: "Qrvey",
    category: "real",
    categoryLabel: "REAL PROJECT",
    client: "Qrvey Inc",
    role: "Senior Frontend Engineer",
    period: "8 Years (2018 – 2026)",
    description: "Plataforma de analítica embebida, Page Builder drag-and-drop y monitoreo en tiempo real para productos SaaS multi-tenant.",
    longDescription:
      "Lideré la arquitectura frontend de módulos críticos en Qrvey: un Page Builder drag-and-drop en React y Angular para componer dashboards analíticos interactivos, una plataforma de monitoreo de entidades en tiempo real con Zustand y WebSockets, un diseñador visual de flujos automatizados (Workflow Automation) y librerías de Web Components con StencilJS y TypeScript.",
    image: "/projects/qrvey.jpg",
    pills: ["SaaS Platform", "Qrvey Inc"],
    tags: ["React", "Angular", "TypeScript", "Zustand", "WebSockets", "StencilJS", "Kubernetes"],
    demoUrl: "https://qrvey.com/",
    featured: true,
  },
  {
    id: "proyecto-cigo-tracker",
    title: "Cigo Tracker - Multi-Stop Route Optimization & Logistics",
    subtitle: "Cigo Tracker",
    category: "real",
    categoryLabel: "REAL PROJECT",
    client: "Cigo Tracker",
    role: "Senior Full Stack Developer",
    period: "2026",
    description: "Plataforma logística de planificación dinámica de rutas multi-parada y seguimiento de entregas de última milla en tiempo real.",
    longDescription:
      "Ingeniería de interfaces de alto rendimiento en Blazor y migración de servicios legados a microservicios en C# / ASP.NET Core y Entity Framework Core. Lideré el módulo Road Builder integrando GraphHopper para optimización de rutas multi-parada y establecí flujos de desarrollo multi-agente (Agentic SDLC) con validación automatizada en Playwright y Cypress.",
    image: "/projects/cigo-tracker.jpg",
    pills: ["Logistics SaaS", "Cigo Tracker"],
    tags: ["Blazor", "C#", "ASP.NET Core", "EF Core", "GraphHopper", "Agentic SDLC", "Playwright"],
    demoUrl: "https://cigotracker.com/",
    featured: true,
  },
  {
    id: "proyecto-401lab",
    title: "401 LAB - Measurable AI Solutions & Engineering Studio",
    subtitle: "401 LAB",
    category: "real",
    categoryLabel: "REAL PROJECT",
    client: "401 LAB (Cartagena, Colombia)",
    role: "AI Solutions Architect & Co-Creator",
    period: "2026 – Present",
    description:
      "Firma de arquitectura de soluciones de IA, software a medida e infraestructura cloud enfocada en resultados medibles en seis ejes.",
    longDescription:
      "Co-creador y Arquitecto de Soluciones de IA en 401 LAB (401lab.co). Diseñamos e implementamos sistemas de inteligencia artificial, automatización de procesos, software a la medida, infraestructura cloud y ciberseguridad bajo una premisa de ingeniería rigurosa: medir cada proyecto en seis ejes (Tiempo, Dinero, Facilidad, Confiabilidad, Mantenimiento y Soporte). La plataforma web integra visualizaciones isométricas interactivas por capas (Interfaz, Lógica, Modelos, Datos), lupa dinámica e indicadores de impacto en tiempo real.",
    image: "/projects/401lab.gif",
    pills: ["AI Architecture", "401lab.co"],
    tags: ["AI Solutions Architecture", "Interactive Web", "Custom Software", "Cloud Infrastructure", "ML & Automation"],
    demoUrl: "https://401lab.co/",
    featured: true,
  },
  {
    id: "proyecto-finanzapp",
    title: "FinanzApp - AI-Powered Personal Finance Platform",
    subtitle: "FinanzApp",
    category: "exploration",
    categoryLabel: "EXPLORATION",
    client: "Independent AI Product",
    role: "Full Stack & AI Engineer",
    period: "2025 – 2026",
    description: "Aplicación financiera full stack con agente de inteligencia artificial para análisis presupuestario y control de finanzas.",
    longDescription:
      "Desarrollo de una plataforma financiera moderna con Next.js 16 y React 19 en el frontend, conectada a una arquitectura backend en Node.js, Express y MongoDB. Integra un agente conversacional de IA que analiza patrones de gasto, sugiere optimizaciones presupuestarias y automatiza el seguimiento financiero en tiempo real.",
    image: "/projects/finanzapp.jpg",
    pills: ["Web Application", "AI Agent"],
    tags: ["Next.js 16", "React 19", "TypeScript", "Node.js", "MongoDB", "AI Agent"],
    demoUrl: "https://finanzapp.juliomarquez.dev/",
    featured: true,
  },
];
