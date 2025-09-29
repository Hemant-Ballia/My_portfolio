import Image from 'next/image';
import Link from 'next/link';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

type Props = {
  title: string;
  description: string;
  tech: string;
  image?: string;
  github: string;
  demo: string;
};

export default function ProjectCard({ title, description, tech, image, github, demo }: Props) {
  const techArray = tech.split(',').map(t => t.trim());

  return (
    <div className="group relative flex flex-col h-full bg-gradient-to-br from-[#0d1117] to-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2">

      {/* Gradient Accent Strip */ }
      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-cyan-500 to-blue-500" />

      {/* Image */ }
      <div className="relative w-full h-52 overflow-hidden">
        { image ? (
          <Image
            src={ image }
            alt={ title || 'Project preview' }
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="bg-gray-800 h-full flex items-center justify-center text-gray-500 italic font-poppins">
            No image available
          </div>
        ) }
      </div>

      {/* Content */ }
      <div className="p-6 flex flex-col flex-grow font-nunito">
        <h3 className="text-xl sm:text-2xl font-bold text-white font-grotesk mb-2">
          { title }
        </h3>

        <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4">
          { description }
        </p>

        {/* Tech Stack */ }
        <div className="flex flex-wrap gap-2 mb-4">
          { techArray.map((t) => (
            <span
              key={ t }
              className="px-3 py-1 text-xs font-medium font-poppins text-cyan-300 bg-cyan-900/30 rounded-full border border-cyan-500/20"
            >
              { t }
            </span>
          )) }
        </div>

        {/* CTA Buttons */ }
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-800">
          <a
            href={ github }
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub repository"
            className="flex items-center gap-2 text-cyan-400 hover:text-white transition-colors font-montserrat text-sm"
          >
            <FiGithub /> GitHub
          </a>
          <a
            href={ demo }
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Live demo"
            className="flex items-center gap-2 text-emerald-400 hover:text-white transition-colors font-montserrat text-sm"
          >
            <FiExternalLink /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}
