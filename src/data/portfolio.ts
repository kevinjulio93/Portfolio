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
  role: "Software Developer",
  email: "kevinjulio93@gmail.com",
  phone: "3185312757",
  location: "Cartagena, Colombia",
  bio: "Software Developer con más de 10 años de experiencia en desarrollo de software, abarcando el ciclo de vida completo de aplicaciones: desde el diseño y desarrollo hasta el soporte técnico. Especializado en construir soluciones web escalables y eficientes usando tecnologías modernas, con fuerte capacidad de resolución de problemas y manejo de incidentes críticos en entornos productivos exigentes. En los últimos años, he trabajado en administración de aplicaciones con Docker, Kubernetes y Linux para despliegue y gestión en la nube.",
  shortBio: "Software Developer con 10+ años construyendo soluciones web escalables. Especialista en React, TypeScript, Docker, Kubernetes y Cloud.",
  education: {
    degree: "Bachelor's Degree in Systems Engineering",
    university: "Universidad Tecnológica de Bolívar",
    year: 2018,
  },
  social: {
    github: "https://github.com/kevinjulio93",
    linkedin: "https://linkedin.com/in/kevinjulio93",
  },
  resumeUrl: "/resume.pdf",
};

export const skills: Skill[] = [
  { name: "React", category: "Frontend" },
  { name: "Angular", category: "Frontend" },
  { name: "Redux", category: "Frontend" },
  { name: "TypeScript", category: "Lenguaje" },
  { name: "JavaScript", category: "Lenguaje" },
  { name: "Python", category: "Lenguaje" },
  { name: "HTML & CSS", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "Linux", category: "DevOps" },
  { name: "Bash", category: "DevOps" },
  { name: "Nginx", category: "DevOps" },
  { name: "CI/CD", category: "DevOps" },
  { name: "StencilJS", category: "Frontend" },
  { name: "C#", category: "Lenguaje" },
  { name: ".NET", category: "Backend" },
  { name: "Blazor", category: "Frontend" },
  { name: "Entity Framework", category: "Backend" },
];

export const softSkills: string[] = [
  "Code Quality & Best Practices",
  "Software Analysis & Design",
  "Analytical Thinking & Problem Solving",
  "Customer Support & Communication",
  "Cross-functional Collaboration (Agile)",
  "Adaptability & Continuous Learning",
  "Critical Incident Management",
  "Technical Leadership & Mentoring",
];

export const workExperience: WorkExperience[] = [
  {
    id: "cigo-tracker",
    company: "Cigo Tracker",
    role: "Full Stack Developer",
    period: "Feb 2026 – Actualidad",
    description: [
      "Diseño e implementación de funcionalidades para la próxima versión del producto como Full Stack Developer.",
      "Desarrollo de servicios backend escalables y mantenibles con C#, .NET y Entity Framework.",
      "Construcción de una arquitectura frontend responsive y basada en componentes con Blazor.",
    ],
    tags: ["C#", ".NET", "Entity Framework", "Blazor"],
  },
  {
    id: "qrvey",
    company: "Qrvey Inc",
    role: "Frontend Developer → Software Architect",
    period: "Ene 2018 – Ene 2026",
    description: [
      "Crecimiento progresivo desde Junior Frontend Developer hasta Software Architect.",
      "Diseño y desarrollo de aplicaciones web escalables usando React, TypeScript y StencilJS.",
      "Desarrollo de componentes reutilizables y optimización de interfaces para rendimiento y mantenibilidad.",
      "Lideré responsabilidades de arquitectura, asegurando estabilidad en entornos productivos.",
      "Implementación y administración de Docker, Kubernetes, Linux, Nginx y pipelines CI/CD para despliegue y automatización.",
      "Atención directa a clientes, resolución de incidentes y mejora de la confiabilidad de las aplicaciones.",
    ],
    tags: ["React", "TypeScript", "StencilJS", "Docker", "Kubernetes", "Linux", "Nginx", "CI/CD"],
  },
  {
    id: "qualty",
    company: "Qualty SAS",
    role: "Co-Founder & Software Engineer",
    period: "Oct 2017 – Sept 2018",
    description: [
      "Co-fundé la empresa y ayudé a crear una plataforma con alto impacto social, diseñada para gestionar y rastrear ayudas para personas mayores y con discapacidad.",
      "Participé en todo el ciclo de vida de desarrollo, desde la conceptualización hasta el lanzamiento de una solución que facilitó la gestión de recursos de manera más eficiente y sostenible.",
      "Atención directa a clientes, asegurando la adopción de la plataforma y la mejora continua basada en sus necesidades.",
      "Despliegue y mantenimiento de la aplicación con Docker, construyendo entornos confiables y escalables.",
    ],
    tags: ["JavaScript", "Docker", "Linux", "Node.js"],
  },
  {
    id: "aservices",
    company: "Aservices SAS",
    role: "Frontend Developer",
    period: "Nov 2016 – Aug 2017",
    description: [
      "Desarrollo y mantenimiento de interfaces web, asegurando usabilidad y diseño responsive.",
      "Colaboración con el equipo para implementar requerimientos del cliente en soluciones funcionales.",
    ],
    tags: ["JavaScript", "HTML", "CSS", "React"],
  },
];

export const awards: Award[] = [
  {
    title: "Star of the Quarter - Admin Team",
    year: "2022",
    description: "Reconocimiento por desempeño excepcional en el equipo de administración en Qrvey Inc.",
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
    phone: "3137674737",
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
    description: "Aplicación financiera full stack con un agente de IA para ayudar a gestionar las finanzas personales.",
    longDescription:
      "Desarrollo de una aplicación financiera moderna con frontend en Next.js 16 y React 19, junto a una API backend en Node.js y Express. Incluye un agente de IA que ayuda a gestionar las finanzas personales. Persistencia de datos con MongoDB y una arquitectura preparada para escalar.",
    image: "/projects/finanzapp.jpg",
    tags: ["Next.js 16", "React 19", "Node.js", "Express", "MongoDB"],
    demoUrl: "https://finanzapp.juliomarquez.dev/",
    featured: true,
  },
  {
    id: "proyecto-qrvey",
    title: "Qrvey",
    description: "Plataforma de analítica embebida con IA para productos SaaS multi-tenant.",
    longDescription:
      "Contribuí al desarrollo de una plataforma de analítica embebida para SaaS, con dashboards personalizables, capacidades de autoservicio y flujos de trabajo impulsados por IA.",
    image: "/projects/qrvey.jpg",
    tags: ["React", "TypeScript", "StencilJS", "Docker", "Kubernetes", "CI/CD"],
    demoUrl: "https://qrvey.com/",
    featured: true,
  },
  {
    id: "proyecto-cigo-tracker",
    title: "Cigo Tracker",
    description: "Plataforma de planificación de rutas y seguimiento de entregas de última milla en tiempo real.",
    longDescription:
      "Desarrollo de funcionalidades para la nueva versión de una plataforma de operaciones logísticas, enfocada en optimización de rutas, monitoreo de flotas y seguimiento de entregas en tiempo real.",
    image: "/projects/cigo-tracker.jpg",
    tags: ["C#", ".NET", "Entity Framework", "Blazor"],
    demoUrl: "https://cigotracker.com/",
    featured: true,
  },
];