import { Experience, Project, SkillCategory } from "./types";

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "PHP", "HTML5", "CSS3"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "NestJS", "Express", "Laravel", "REST APIs", "MVC Architecture"]
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Vue.js", "Angular", "Tailwind CSS"]
  },
  {
    category: "Database",
    skills: ["PostgreSQL", "MySQL", "MSSQL", "Redis", "Prisma", "TypeORM", "Eloquent"]
  },
  {
    category: "DevOps & Cloud",
    skills: ["Docker", "AWS", "DigitalOcean", "CI/CD (GitHub Actions/GitLab)", "Linux"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Full-Stack SaaS Platform",
    tech: ["NestJS", "Next.js", "TypeScript", "PostgreSQL", "Redis", "Docker"],
    description: [
      "Modular backend design with clean architecture.",
      "Implemented JWT auth, refresh tokens, and RBAC.",
      "SEO-optimized SSR public pages & secure dashboards.",
      "Redis caching & async background jobs for performance."
    ]
  },
  {
    title: "Gym Management System",
    tech: ["NestJS", "Prisma", "Next.js", "Docker"],
    description: [
      "Role-based system for admins, trainers, and members.",
      "Domain-oriented architecture separating business logic.",
      "Containerized local and production environments."
    ]
  },
  {
    title: "User Management API",
    tech: ["Node.js", "Express/Fastify", "TypeScript"],
    description: [
      "Built from scratch to master Node.js internals.",
      "Centralized error handling and request validation.",
      "Controller-service-repository pattern implementation."
    ]
  },
  {
    title: "Admin Dashboard",
    tech: ["Vanilla JavaScript", "Vite"],
    description: [
      "Lightweight dashboard optimized for rendering speed.",
      "Integrated REST APIs with custom authentication flows.",
      "Zero-dependency state management exploration."
    ]
  },
  {
    title: "CLI Tool & API",
    tech: ["Node.js", "TypeScript"],
    description: [
      "Command-line interface interacting with backend APIs.",
      "Shared TypeScript types between CLI and API.",
      "Asynchronous workflows using Promises."
    ]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    title: "Web Developer",
    company: "Company Name",
    period: "YYYY – Present",
    points: [
      "Developed and maintained backend web applications using Laravel.",
      "Designed and implemented RESTful APIs and authentication systems.",
      "Optimized MySQL and MSSQL database queries and schemas.",
      "Collaborated with cross-functional teams including frontend developers.",
      "Refactored legacy code to improve maintainability and scalability."
    ]
  }
];
