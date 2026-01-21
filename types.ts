export interface Project {
  id: string;
  title: string;
  tags: string;
  imageUrl: string;
  liveUrl: string;
  description?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  highlight?: boolean;
}