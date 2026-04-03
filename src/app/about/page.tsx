import AboutSection from '@/sections/AboutSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Hemant Chauhan',
  description: 'Learn more about Hemant Chauhan, a full-stack developer from IIT Patna.',
  openGraph: {
    title: 'About | Hemant Chauhan',
    description: 'Learn more about Hemant Chauhan, a full-stack developer from IIT Patna.',
    url: 'https://hemantweb.in/about',
    images: ['https://hemantweb.in/assets/img.jpg'],
  },
  keywords: ['Hemant Chauhan', 'Full Stack Developer', 'IIT Patna', 'MERN Stack'],
};

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      <AboutSection />
    </main>
  );
}