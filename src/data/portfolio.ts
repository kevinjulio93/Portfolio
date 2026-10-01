export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  category: string;
}

export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  period: string;
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
  name: "Kevin Andres Julio Marquez",
  role: "Senior Frontend & Full Stack Engineer",
  tagline: "AI-First SDLC • Agentic Workflows",
  email: "kevinjulio93@gmail.com",
  phone: "(+57) 318 531 2757",
  location: "Cartagena, Colombia",
  bio: "Senior Frontend & Full Stack Engineer con más de 10 años de experiencia construyendo aplicaciones web de alto rendimiento, plataformas de analítica de datos y sistemas de UI escalables. Durante más de 8 años en Qrvey, evolucioné desde Junior Frontend Developer hasta Senior Frontend Engineer, liderando la arquitectura frontend y el desarrollo de módulos clave del producto. Especializado en React, Angular, TypeScript, Redux, Zustand y Blazor, junto al diseño e integración de APIs y microservicios con C#/.NET, Node.js y Ruby on Rails. Especializado en ingeniería de agentes (AI-First SDLC & Loop Engineering), orquestando flujos de trabajo multi-agente con especificaciones estructuradas, code review automatizado y testing continuo con Playwright, Cypress y Jest.",
  shortBio: "Senior Frontend & Full Stack Engineer con 10+ años construyendo aplicaciones web escalables y sistemas de UI. Especialista en React, Angular, TypeScript, Blazor, .NET y desarrollo multi-agente (AI-First SDLC).",
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

  // Testing & Quality Assurance
  { name: "Playwright", category: "Testing" },
  { name: "Cypress", category: "Testing" },
  { name: "Jest", category: "Testing" },
  { name: "Vitest", category: "Testing" },
  { name: "React Testing Library", category: "Testing" },
  { name: "E2E Testing", category: "Testing" },

  // Backend & APIs
  { name: "Node.js", category: "Backend" },
  { name: "C#", category: "Backend" },
  { name: "ASP.NET Core", category: "Backend" },
  { name: "Entity Framework Core", category: "Backend" },
  { name: "RESTful APIs", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },

  // DevOps, Cloud & Tooling
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
    period: "Feb 2026 – Ago 2026",
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
    period: "Ene 2018 – Ene 2026 (8 Años)",
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
    period: "Nov 2016 – Ago 2017",
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
    id: "proyecto-finanzapp",
    title: "FinanzApp",
    description: "Aplicación financiera full stack con un agente de IA para optimizar la gestión de finanzas personales.",
    longDescription:
      "Desarrollo de una aplicación financiera moderna con frontend en Next.js 16 y React 19, junto a una API backend en Node.js y Express. Incluye un agente de IA que asiste en el análisis presupuestario y control de gastos personales con MongoDB.",
    image: "/projects/finanzapp.jpg",
    tags: ["Next.js 16", "React 19", "Node.js", "Express", "MongoDB", "AI Agent"],
    demoUrl: "https://finanzapp.juliomarquez.dev/",
    featured: true,
  },
  {
    id: "proyecto-qrvey",
    title: "Qrvey",
    description: "Plataforma de analítica embebida y dashboards interactivos con IA para productos SaaS multi-tenant.",
    longDescription:
      "Contribuí a la arquitectura frontend de la plataforma de analítica embebida para SaaS, desarrollando un Page Builder drag-and-drop, monitoreo en tiempo real con WebSockets/Zustand y automatización de flujos.",
    image: "/projects/qrvey.jpg",
    tags: ["React", "Angular", "TypeScript", "Zustand", "WebSockets", "Docker", "Kubernetes"],
    demoUrl: "https://qrvey.com/",
    featured: true,
  },
  {
    id: "proyecto-cigo-tracker",
    title: "Cigo Tracker",
    description: "Plataforma logística de planificación de rutas multi-parada y seguimiento de entregas en tiempo real.",
    longDescription:
      "Desarrollo de módulos frontend de alto rendimiento con Blazor y microservicios en C#/.NET, integrando GraphHopper para optimización de rutas y flujos de desarrollo con agentes de IA.",
    image: "/projects/cigo-tracker.jpg",
    tags: ["Blazor", "C#", ".NET", "Entity Framework Core", "GraphHopper", "Agentic SDLC"],
    demoUrl: "https://cigotracker.com/",
    featured: true,
  },
];