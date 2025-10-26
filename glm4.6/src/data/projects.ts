import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with user authentication, payment processing, and inventory management.",
    techStack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/ecommerce",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    techStack: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/tasks",
    featured: true,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather dashboard with location-based forecasts and interactive weather maps.",
    techStack: ["JavaScript", "Vue.js", "Weather API", "Chart.js", "CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/weather",
    featured: false,
  },
];