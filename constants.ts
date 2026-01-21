import { Project, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Hamza Immo',
    tags: 'Real Estate Platform • Next.js 14',
    // Modern architectural facade
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop',
    liveUrl: 'https://hamza-immo.vercel.app/',
  },
  {
    id: '2',
    title: 'Dar Hamdoun',
    tags: 'Luxury Hospitality • Booking System',
    // Luxury interior with warm lighting
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop',
    liveUrl: 'https://dar-hamdoun.vercel.app/',
  },
  {
    id: '3',
    title: 'Jaafar Meubles',
    tags: 'E-Commerce • 3D Visualization',
    // Minimalist furniture / design
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1600&auto=format&fit=crop',
    liveUrl: 'https://jaafar.vercel.app/',
  },
  {
    id: '4',
    title: 'Tech Cool',
    tags: 'Digital Agency • WebGL',
    // Abstract digital/neon art
    imageUrl: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1600&auto=format&fit=crop',
    liveUrl: 'https://tech-cool.vercel.app/',
  },
  {
    id: '5',
    title: 'Dr. Marwa',
    tags: 'Medical Portfolio • Scheduling',
    // Clean white minimalist aesthetic
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1600&auto=format&fit=crop',
    liveUrl: 'https://dr-marwa.vercel.app/',
  },
  {
    id: '6',
    title: 'Baccar',
    tags: 'Fine Dining • Menu System',
    // Dark moody food/interior
    imageUrl: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1600&auto=format&fit=crop',
    liveUrl: 'https://restaurant-baccar.vercel.app/',
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    role: 'Founder & Lead Engineer',
    company: 'Tech Cool Agency',
    period: '2024 - Present',
    description: 'Founded a boutique digital agency serving 20+ international clients. Managing a team of 3 developers. Delivering high-end web solutions for Real Estate and Hospitality sectors.',
    highlight: true,
  },
  {
    id: '2',
    role: 'Frontend Architect (Remote)',
    company: 'Instadeep (Contract)',
    period: '2023 - 2024',
    description: 'Contributed to internal dashboard tools using React and Python. Optimized data visualization rendering for AI models, reducing load times by 40%.',
  },
  {
    id: '3',
    role: 'Full Stack Developer',
    company: 'Freelance (Upwork Top Rated)',
    period: '2022 - 2023',
    description: 'Completed 50+ projects with a 100% Job Success Score. Specialized in converting Figma designs to pixel-perfect Next.js applications.',
  }
];

export const STACK = [
  'Next.js 15', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'WebGL', 'Three.js', 'AWS'
];