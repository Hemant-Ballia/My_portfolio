'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiClock, FiCalendar } from 'react-icons/fi'; // Naye icons
import { motion } from 'framer-motion';

type Props = {
  title: string;
  summary: string;
  date: string;
  slug: string;
  image?: string;
  category?: string;
  readTime?: string;
};

export default function BlogCard({ title, summary, date, slug, image, category, readTime }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="h-full"
    >
      <Link
        href={`/blog/${slug}`}
        className="group relative flex flex-col h-full bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-3"
      >
        {/* --- IMAGE SECTION --- */}
        <div className="relative w-full h-56 overflow-hidden">
          <Image
            src={image || '/assets/default-blog.png'}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
          
          {/* Floating Category Badge */}
          {category && (
            <div className="absolute top-4 left-4">
              <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md text-orange-600 font-syne text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                {category}
              </span>
            </div>
          )}
        </div>

        {/* --- CONTENT SECTION --- */}
        <div className="p-7 flex flex-col flex-grow">
          {/* Meta Info */}
          <div className="flex items-center gap-4 mb-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            <div className="flex items-center gap-1.5">
              <FiCalendar className="text-orange-500" />
              <span>{date}</span>
            </div>
            {readTime && (
              <div className="flex items-center gap-1.5 border-l border-slate-200 dark:border-slate-700 pl-4">
                <FiClock className="text-orange-500" />
                <span>{readTime}</span>
              </div>
            )}
          </div>

          {/* Title - font-syne for that bold look */}
          <h3 className="font-syne text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4 leading-tight group-hover:text-orange-600 transition-colors">
            {title}
          </h3>

          {/* Summary */}
          <p className="font-sans text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed mb-8 flex-grow line-clamp-3">
            {summary}
          </p>

          {/* CTA - Bottom Border Animated */}
          <div className="mt-auto pt-6 border-t border-slate-50 dark:border-slate-800/50 flex items-center justify-between">
            <div className="flex items-center gap-2 font-syne text-[11px] font-black uppercase tracking-[0.2em] text-slate-900 dark:text-orange-400 group-hover:text-orange-600 transition-colors">
              <span>Read Insights</span>
              <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </div>
            </div>
          </div>
        </div>

        {/* Subtle hover accent line at the very bottom */}
        <div className="absolute bottom-0 left-0 h-1 w-0 bg-orange-600 transition-all duration-500 group-hover:w-full" />
      </Link>
    </motion.div>
  );
}