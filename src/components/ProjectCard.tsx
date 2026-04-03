'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowUpRight } from "react-icons/fi";
// Icons ko import karna mat bhoolna (as per previous message)

export default function ProjectCard({ project }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative flex flex-col h-full bg-white rounded-[32px] border border-slate-100 p-2 hover:border-orange-200 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)]"
    >
      {/* Image Section - Light background for contrast */}
      <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[26px] bg-[#fdfdfd]">
        <Image
          src={project.imageUrl || '/placeholder.jpg'}
          alt={project.title}
          fill
          unoptimized // Error se bachne ke liye ya config update karein
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Hover Overlay Button */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
           <a href={project.liveUrl} target="_blank" className="bg-white p-4 rounded-2xl shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <FiArrowUpRight size={24} className="text-orange-600" />
           </a>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow bg-white rounded-b-[32px]">
        <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors tracking-tight">
          {project.title}
        </h3>
        
        <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack - Clean Minimalist Style */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack?.map((tech: string) => (
            <span key={tech} className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-white border border-slate-100 rounded-lg group-hover:border-orange-100">
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-auto flex items-center justify-between border-t border-slate-50 pt-5">
          <a href={project.githubUrl} target="_blank" className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-black transition-all">
            <FiGithub size={16} /> Code
          </a>
          <a href={project.liveUrl} target="_blank" className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-orange-600 hover:tracking-[0.2em] transition-all">
            Live View <FiExternalLink />
          </a>
        </div>
      </div>
    </motion.div>
  );
}