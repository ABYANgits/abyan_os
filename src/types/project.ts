export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  tag: string;
  category: 'AI / CV' | 'WEB DEV' | 'GAME / 3D' | 'SYSTEMS';
  description: string;
  thumbnail: string;
  link?: string;
  github?: string;
  techStack: string[];
  featured: boolean;
}
