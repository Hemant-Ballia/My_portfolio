import type { NextApiRequest, NextApiResponse } from 'next';

type BlogPost = {
  title: string;
  summary: string;
  date: string;
  slug: string;
  image?: string;
  category?: string;
  readTime?: string;
};

const posts: BlogPost[] = [
  {
    title: 'How I Built My Portfolio',
    summary: 'A breakdown of design choices, tech stack, and deployment strategy.',
    date: '2025-09-30',
    slug: 'portfolio-breakdown',
    image: '/blog/portfolio.png',
    category: 'Web Dev',
    readTime: '4 min',
  },
  {
    title: 'React + Framer Motion Tips',
    summary: 'Smooth animations, layout transitions, and performance tricks.',
    date: '2025-09-28',
    slug: 'react-framer-motion',
    image: '/blog/framer.png',
    category: 'Frontend',
    readTime: '3 min',
  },
  {
    title: 'Debugging Hydration Errors in Next.js',
    summary: 'What causes them and how to fix them cleanly.',
    date: '2025-09-25',
    slug: 'nextjs-hydration-fix',
    image: '/blog/hydration.png',
    category: 'Next.js',
    readTime: '5 min',
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(posts);
}
