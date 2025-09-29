// 📁 src/types/index.ts
import type { JSX } from 'react';

// ✅ Structure for each project in your portfolio
export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;       // Image path from the /public folder
  tags: string[];         // e.g., ['React', 'Next.js', 'Tailwind CSS']
  liveUrl?: string;       // Optional live demo link
  githubUrl: string;
}

// ✅ Structure for each testimonial
export interface Testimonial {
  id: number;
  name: string;
  feedback: string;
  company?: string;
  imageUrl?: string;
  rating?: number; // ⭐ Add this
}

// ✅ Structure for each blog post
export interface BlogPost {
  title: string;
  summary: string;
  date: string;
  slug: string;
  image?: string;
  category?: string;
  readTime?: string;
  author?: string;
  content: JSX.Element;
}
