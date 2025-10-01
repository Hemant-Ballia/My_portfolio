'use client';
import React from 'react';
// next/image import ko hata diya gaya hai taaki compilation error na aaye
import { motion } from 'framer-motion';

// props ke liye type define kiya gaya
type IconProps = React.SVGProps<SVGSVGElement>;

// --- SVG Icons ---
const icons = {
  // Standard Icons for Timeline
  FiBriefcase: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" { ...props }>
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    </svg>
  ),
  FiAward: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" { ...props }>
      <circle cx="12" cy="8" r="7"></circle>
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
    </svg>
  ),
  FiCode: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" { ...props }>
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  ),
  FiStar: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" { ...props }>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  ),
  FiArrowRight: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" { ...props }>
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  ),

  // 3D Icons for Highlights
  FiTrendingUp3D: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" { ...props }>
      <defs><filter id="shadow"><feDropShadow dx="1" dy="1.5" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.2" /></filter></defs>
      <g filter="url(#shadow)">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></polyline>
        <polyline points="17 6 23 6 23 12" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></polyline>
      </g>
    </svg>
  ),
  FiCode3D: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" { ...props }>
      <defs><filter id="shadow"><feDropShadow dx="1" dy="1.5" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.2" /></filter></defs>
      <g filter="url(#shadow)">
        <polyline points="16 18 22 12 16 6" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></polyline>
        <polyline points="8 6 2 12 8 18" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></polyline>
      </g>
    </svg>
  ),
  FiBookOpen3D: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" { ...props }>
      <defs>
        <linearGradient id="book-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        <filter id="shadow"><feDropShadow dx="1" dy="1.5" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.3" /></filter>
      </defs>
      <g filter="url(#shadow)">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" fill="url(#book-grad)" stroke="#4f46e5" strokeWidth="0.5"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" fill="url(#book-grad)" stroke="#4f46e5" strokeWidth="0.5"></path>
      </g>
    </svg>
  ),
  FiAward3D: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" { ...props }>
      <defs>
        <radialGradient id="award-grad" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#fde047" />
          <stop offset="100%" stopColor="#f59e0b" />
        </radialGradient>
        <filter id="shadow"><feDropShadow dx="1" dy="1.5" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.3" /></filter>
      </defs>
      <g filter="url(#shadow)">
        <circle cx="12" cy="8" r="7" fill="url(#award-grad)" stroke="#d97706" strokeWidth="0.5"></circle>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" fill="#f59e0b" stroke="#d97706" strokeWidth="0.5"></polyline>
      </g>
    </svg>
  ),
};

// Data for the journey timeline
const journeyData = [
  {
    icon: 'FiAward',
    date: '2024 – 2027 (Expected)',
    title: 'B.Sc. in Computer Science & Data Analytics',
    institution: 'Indian Institute of Technology Patna',
    description:
      'Currently pursuing a rigorous curriculum in algorithms, data structures, machine learning, and data analytics. Maintaining a CPI above 9.1.',
    colorClass: 'bg-amber-500'
  },
  {
    icon: 'FiStar',
    date: '2023',
    title: 'INSPIRE Scholarship Awardee',
    institution: 'Dept. of Science & Technology, Govt. of India',
    description:
      'Awarded for academic excellence, securing a top 1% rank in the UP State Board.',
    colorClass: 'bg-yellow-500'
  },
  {
    icon: 'FiBriefcase',
    date: 'Apr 2025 – Jul 2025',
    title: 'Full-Stack Developer (Project)',
    institution: 'Kishan Mitra Platform',
    description:
      'Built a farmer-to-company platform using Next.js, Node.js, and MySQL. Delivered features like crop uploads, order tracking, and secure payments.',
    colorClass: 'bg-sky-600'
  },
  {
    icon: 'FiCode',
    date: 'Ongoing',
    title: 'Open Source Contributor',
    institution: 'Various Projects',
    description:
      'Actively contributing to UI/UX enhancements, bug fixes, and clean documentation across open-source repositories.',
    colorClass: 'bg-emerald-500'
  },
];

// Data for the highlights section, now using 3D icons
const highlights = [
  { icon: 'FiTrendingUp3D', label: 'Data Analytics & Visualization' },
  { icon: 'FiCode3D', label: 'Full-Stack Development (MERN + Next.js)' },
  { icon: 'FiBookOpen3D', label: 'Machine Learning Enthusiast' },
  { icon: 'FiAward3D', label: 'INSPIRE Scholar & IIT Patna' },
];

export default function AboutSection() {
  return (
    <section className="bg-slate-50 dark:bg-gray-900 text-slate-800 dark:text-slate-200 px-4 sm:px-6 py-20 sm:py-28">
      {/* --- Introduction Header --- */ }
      <motion.header
        className="text-center max-w-4xl mx-auto"
        initial={ { opacity: 0, y: -30 } }
        animate={ { opacity: 1, y: 0 } }
        transition={ { duration: 0.7 } }
      >
        <img
          src="/assets/img.jpg" // Using standard img tag to prevent build errors
          alt="Portrait of Hemant Chauhan"
          width={ 160 }
          height={ 160 }
          className="rounded-full mx-auto mb-6 shadow-xl border-4 border-white dark:border-slate-800 shadow-cyan-500/20 w-32 h-32 sm:w-40 sm:h-40 object-cover"
        />
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
          Hemant Chauhan
        </h1>
        <p className="text-base sm:text-lg max-w-3xl mx-auto leading-relaxed text-slate-600 dark:text-slate-400">
          I&apos;m an undergraduate at <span className="font-semibold text-cyan-600 dark:text-cyan-400">IIT Patna</span>, specializing in Computer Science & Data Analytics. My passion lies in <span className="font-semibold text-cyan-600 dark:text-cyan-400">full-stack web development</span> and <span className="font-semibold text-cyan-600 dark:text-cyan-400">data-driven problem solving</span>. With a CPI above 9.18 and recognition as an INSPIRE Scholar, I aim to build tech that creates real-world impact.
        </p>
      </motion.header>

      {/* --- Quick Highlights --- */ }
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 max-w-6xl mx-auto"
      >
        { highlights.map((item, index) => {
          const Icon = icons[item.icon as keyof typeof icons];
          return (
            <motion.div
              key={ index }
              initial={ { opacity: 0, y: 20 } }
              whileInView={ { opacity: 1, y: 0 } }
              transition={ { duration: 0.5, delay: index * 0.1, ease: 'easeOut' } }
              viewport={ { once: true, amount: 0.3 } }
              className="group flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-3 flex items-center justify-center h-12">
                <Icon />
              </div>
              <p className="text-center font-medium text-slate-700 dark:text-white">{ item.label }</p>
            </motion.div>
          );
        }) }
      </div>

      {/* --- Journey & Achievements Timeline --- */ }
      <div className="mt-28 max-w-3xl mx-auto">
        <motion.h2
          initial={ { opacity: 0, y: 20 } }
          whileInView={ { opacity: 1, y: 0 } }
          transition={ { duration: 0.5, ease: 'easeOut' } }
          viewport={ { once: true, amount: 0.5 } }
          className="font-serif text-3xl sm:text-4xl font-bold text-center text-slate-900 dark:text-white mb-16"
        >
          My Journey & Achievements
        </motion.h2>
        <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-4 sm:ml-0">
          { journeyData.map((item, index) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return (
              <motion.div
                key={ index }
                initial={ { opacity: 0, y: 20 } }
                whileInView={ { opacity: 1, y: 0 } }
                transition={ { duration: 0.5, delay: index * 0.2, ease: 'easeOut' } }
                viewport={ { once: true, amount: 0.2 } }
                className="mb-12 ml-10 p-6 rounded-lg border border-transparent hover:border-slate-200 dark:hover:border-slate-700 hover:bg-white dark:hover:bg-slate-800/50 hover:shadow-lg transition-all duration-300"
              >
                <span className={ `absolute -left-4 flex items-center justify-center w-8 h-8 ${item.colorClass} rounded-full ring-8 ring-slate-50 dark:ring-gray-900` }>
                  <Icon className="w-4 h-4 text-white" aria-hidden="true" />
                </span>
                <h3 className="flex items-center mb-1 text-lg sm:text-xl font-semibold text-slate-900 dark:text-white">
                  { item.title }
                </h3>
                <time className="block mb-3 text-sm font-normal leading-none text-slate-500 dark:text-slate-400">
                  { item.date } | { item.institution }
                </time>
                <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">{ item.description }</p>
              </motion.div>
            );
          }) }
        </div>
      </div>

      {/* --- Call to Action --- */ }
      <motion.footer
        className="text-center mt-20"
        initial={ { opacity: 0 } }
        whileInView={ { opacity: 1 } }
        viewport={ { once: true, amount: 0.5 } }
        transition={ { duration: 0.8 } }
      >
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
          Interested in collaborating?
        </h2>
        <a
          href="/contact"
          className="group mt-8 inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-slate-800 dark:text-slate-100 transition-all duration-300 bg-white dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 rounded-xl shadow-sm hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:focus-visible:ring-offset-gray-900 focus-visible:ring-cyan-500"
        >
          Get In Touch <icons.FiArrowRight className="w-5 h-5 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </motion.footer>
    </section>
  );
}
