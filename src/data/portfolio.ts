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
  bio: "Software Developer con más de 8 años de experiencia en desarrollo de software, abarcando el ciclo de vida completo de aplicaciones: desde el diseño y desarrollo hasta el soporte técnico. Especializado en construir soluciones web escalables y eficientes usando tecnologías modernas, con fuerte capacidad de resolución de problemas y manejo de incidentes críticos en entornos productivos exigentes. En los últimos años, he trabajado en administración de aplicaciones con Docker, Kubernetes y Linux para despliegue y gestión en la nube.",
  shortBio: "Software Developer con 8+ años construyendo soluciones web escalables. Especialista en React, TypeScript, Docker, Kubernetes y Cloud.",
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
    id: "qrvey",
    company: "Qrvey Inc",
    role: "Frontend Developer → Software Architect",
    period: "Ago 2018 – Actualidad",
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
    id: "proyecto-qrvey",
    title: "Plataforma SaaS - Qrvey",
    description: "Arquitectura y desarrollo de aplicación web escalable con React, TypeScript y StencilJS para análisis de datos.",
    longDescription:
      "Diseño y desarrollo de componentes reutilizables, optimización de rendimiento, y liderazgo arquitectónico. Implementación de Docker, Kubernetes y CI/CD para despliegue en la nube. Atención directa a clientes y resolución de incidentes críticos.",
    image: "/projects/qrvey.jpg",
    tags: ["React", "TypeScript", "StencilJS", "Docker", "Kubernetes", "CI/CD"],
    demoUrl: "https://qrvey.com",
    featured: true,
  },
  {
    id: "proyecto-qualty",
    title: "Plataforma de Impacto Social - Qualty SAS",
    description: "Plataforma para gestión y seguimiento de ayudas a personas mayores y con discapacidad.",
    longDescription:
      "Co-fundé la empresa y lideré el desarrollo completo de la plataforma. Gestión de recursos, atención a clientes y despliegue con Docker para entornos escalables y confiables.",
    image: "/projects/qualty.jpg",
    tags: ["JavaScript", "Docker", "Linux", "Node.js"],
    featured: true,
  },
  {
    id: "proyecto-stencil",
    title: "Sistema de Componentes - StencilJS",
    description: "Biblioteca de componentes reutilizables para aplicaciones web empresariales.",
    longDescription:
      "Construcción de un sistema de componentes web reutilizables con StencilJS, optimizados para rendimiento y mantenibilidad en múltiples aplicaciones del ecosistema Qrvey.",
    image: "/projects/stencil.jpg",
    tags: ["StencilJS", "TypeScript", "React", "Web Components"],
    featured: false,
  },
  {
    id: "proyecto-cluster",
    title: "Administración de Clúster Kubernetes",
    description: "Gestión y despliegue de aplicaciones en clústeres Kubernetes con Linux y Nginx.",
    longDescription:
      "Administración de aplicaciones en producción usando Kubernetes, Docker, Linux y Nginx. Implementación de pipelines CI/CD para automatización de despliegues y monitoreo de incidentes críticos.",
    image: "/projects/k8s.jpg",
    tags: ["Kubernetes", "Docker", "Linux", "Nginx", "CI/CD"],
    featured: false,
  },
];