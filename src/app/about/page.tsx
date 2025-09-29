import { generateMeta } from '@/utils/seo';
import AboutSection from '@/sections/AboutSection';

export const metadata = {
  title: 'About | Hemant Chauhan',
  description: 'Learn more about Hemant Chauhan, a full-stack developer from IIT Patna.',
  url: 'https://hemantweb.in/about',
  image: 'https://hemantweb.in/assets/img.jpg',
  other: {
    keywords: ['Hemant Chauhan', 'Full Stack Developer', 'IIT Patna'],
  },
};

export default function AboutPage() {
  return (
    <main className="bg-gray-900 text-gray-300 min-h-screen pt-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-white">
        
        </h1>
        <AboutSection />
      </div>
    </main>
  );
}
