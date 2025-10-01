'use client';

import Image from 'next/image';

const FiGithub = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);
const FiExternalLink = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);

type Props = {
  title: string;
  description: string;
  tech: string;
  image?: string;
  github: string;
  demo: string;
};

export default function ProjectCard({ title, description, tech, image, github, demo }: Props) {
  const techArray = tech ? tech.split(',').map(t => t.trim()) : [];

  return (
    <div className="group relative flex flex-col h-full w-full bg-gradient-to-br from-[#0d1117] to-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2">
      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-cyan-500 to-blue-500" />

      <div className="relative w-full aspect-video overflow-hidden">
        { image ? (
          <Image
            src={ image }
            alt={ title || 'Project preview' }
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 600px"
            priority
          />
        ) : (
          <div className="bg-gray-800 h-full flex items-center justify-center text-gray-500 italic">
            No image available
          </div>
        ) }
      </div>

      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{ title }</h3>
        <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4">{ description }</p>

        <div className="flex flex-wrap gap-2 mb-4">
          { techArray.map((t) => (
            <span
              key={ t }
              className="px-3 py-1 text-xs sm:text-sm font-medium text-cyan-300 bg-cyan-900/30 rounded-full border border-cyan-500/20"
            >
              { t }
            </span>
          )) }
        </div>

        <div className="mt-auto flex items-center justify-between gap-4 pt-4 border-t border-gray-800">
          <a
            href={ github }
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub repository"
            className="flex items-center gap-2 text-cyan-400 hover:text-white transition-colors text-sm"
          >
            <FiGithub /> GitHub
          </a>
          <a
            href={ demo }
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Live demo"
            className="flex items-center gap-2 text-emerald-400 hover:text-white transition-colors text-sm"
          >
            <FiExternalLink /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}
