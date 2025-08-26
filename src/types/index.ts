export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  github: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface SkillCategory {
  embedded: Skill[];
  protocols: Skill[];
  tools: Skill[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  image: string;
  github: string;
  demo?: string;
  status: string;
  year: number;
}


export interface Education {
  school: string;
  degree: string;
  period: string;
  gpa: string;
  thesis?: string;
  honors?: string;
}

export interface Certification {
  name: string;
  organization: string;
  date: string;
  id: string;
}

export interface Publication {
  title: string;
  journal?: string;
  conference?: string;
  date: string;
  authors: string[];
  abstract: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  skills: SkillCategory;
  projects: Project[];
  education: Education[];
  certifications: Certification[];
  publications: Publication[];
}