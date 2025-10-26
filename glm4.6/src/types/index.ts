export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string[];
  current?: boolean;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  achievements?: string[];
}