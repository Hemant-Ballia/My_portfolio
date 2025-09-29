// src/app/about/page.tsx
import { generateMeta } from '@/utils/seo';
import AboutSection from '@/sections/AboutSection';

export const metadata = generateMeta({
  title: 'About - Hemant Chauhan',
  description:
    'Learn more about Hemant Chauhan, a full-stack developer and creative technologist from IIT Patna.',
  url: 'https://hemantweb.in/about',
  image: 'https://hemantweb.in/assets/img.png', // apna OG image link daalna
  keywords: [
    'Hemant Chauhan',
    'Full Stack Developer',
    'IIT Patna',
    'Portfolio',
    'Web Developer',
  ],
});

export default function AboutPage() {
  return (
    <main className="bg-gray-900 text-gray-300 min-h-screen pt-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-white">
          About Me
        </h1>
        <AboutSection />
      </div>
    </main>
  );
}
