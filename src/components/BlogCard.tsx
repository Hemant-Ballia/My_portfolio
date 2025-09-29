'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
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
      initial={ { opacity: 0, y: 30 } }
      whileInView={ { opacity: 1, y: 0 } }
      viewport={ { once: true } }
      transition={ { duration: 0.5 } }
    >
      <Link
        href={ `/blog/${slug}` }
        className="group relative flex flex-col h-full bg-white dark:bg-[#0d1117]/60 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2"
      >
        {/* Image */ }
        { image && (
          <div className="relative w-full h-52 overflow-hidden">
            <Image
              src={ image || '/assets/default-blog.png' }
              alt={ title || 'Blog preview' }
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        ) }

        {/* Content */ }
        <div className="p-6 flex flex-col flex-grow">
          {/* Meta */ }
          <div className="flex items-center justify-between mb-2 text-xs font-montserrat text-gray-500 dark:text-gray-400">
            <span>{ date }</span>
            { readTime && <span>{ readTime }</span> }
          </div>

          {/* Category Badge */ }
          { category && (
            <span className="inline-block mb-2 px-3 py-1 text-xs font-semibold font-poppins bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 rounded-full">
              { category }
            </span>
          ) }

          {/* Title */ }
          <h3 className="text-xl font-bold font-grotesk text-gray-900 dark:text-white mb-3 transition-colors group-hover:text-cyan-500 dark:group-hover:text-cyan-400">
            { title }
          </h3>

          {/* Summary */ }
          <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed font-poppins flex-grow">
            { summary }
          </p>

          {/* CTA */ }
          <div className="mt-4 pt-4 border-t border-slate-200 dark:border-gray-800">
            <div className="flex items-center gap-2 font-semibold text-cyan-600 dark:text-cyan-400 font-poppins">
              <span>Read More</span>
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
