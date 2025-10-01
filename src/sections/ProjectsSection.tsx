'use client';

import React, { JSX } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'; // `next/image` को इंपोर्ट किया गया है

/* --- Inline SVG icon components (self-contained, no external packages) --- */
const FiGithub = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);
const FiExternalLink = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);
const SiReact = ({ className }: { className?: string }) => (
  <svg className={ className } role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true">
    <path d="M12.001 2.002c-5.522 0-10 4.477-10 10s4.478 10 10 10 10-4.477 10-10-4.478-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-3.5-8c0-1.933 1.567-3.5 3.5-3.5s3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5z" />
  </svg>
);
const SiNodedotjs = ({ className }: { className?: string }) => (
  <svg className={ className } role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true">
    <path d="M11.75 0C10.237-.03 8.76.685 7.8 1.93l-5.68 7.62a2.25 2.25 0 0 0-.21 2.37c.33.64.91 1.07 1.6 1.18l3.1.51V9.58c0-.62.51-1.13 1.14-1.13h2.24c.62 0 1.13.51 1.13 1.13v10.19l4.3-2.42c1.2-.68 1.94-1.95 1.94-3.32V3.14c0-1.74-1.42-3.15-3.16-3.14l-8.01-.01z" />
  </svg>
);
const SiMongodb = ({ className }: { className?: string }) => (
  <svg className={ className } role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true">
    <path d="M17.43 12.01c-.13-.32-.23-.66-.29-.98-.06-.33-.1-.66-.1-.92 0-1.13.34-2.17.9-3.03.52-.82.93-1.68.93-2.72 0-1.63-1.07-2.69-2.6-2.69-1.2 0-2.24.7-2.24 1.74 0 .6.28 1.13.7 1.6.43.47.66.97.66 1.5 0 .53-.2 1.03-.54 1.46-.38.48-.6 1.02-.6 1.6 0 .62.24 1.2.66 1.68.4.47.6.97.6 1.53 0 .56-.2 1.07-.56 1.53-.37.47-.58 1.02-.58 1.6 0 .6.23 1.16.63 1.64.4.48.63.98.63 1.56 0 .57-.2 1.1-.56 1.56-.37.47-.58 1-.58 1.55 0 1.3 1.06 2.18 2.5 2.18 1.76 0 2.86-1.3 2.86-3.1 0-1.18-.4-2.24-1.1-3.12a4.48 4.48 0 0 0-.75-2.07z" />
  </svg>
);
const SiTailwindcss = ({ className }: { className?: string }) => (
  <svg className={ className } role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0-5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8z" />
  </svg>
);
const SiExpress = ({ className }: { className?: string }) => (
  <svg className={ className } role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true">
    <path d="m2.184 14.232 9.252-9.252c.32-.32.752-.492 1.2-.54L1.392 15.684c-.492-.444-.664-.972-.54-1.452zm21.492-9.684a1.353 1.353 0 0 0-.492-1.008l-2.4-2.4a1.353 1.353 0 0 0-1.008-.492h-1.224c-.24 0-.468.096-.636.264l-3.324 3.324 5.304 5.304 3.324-3.324c.168-.168.264-.396.264-.636v-1.032zm-5.748 6.444-5.304-5.304-8.232 8.244c-.552.552-.84 1.308-.792 2.088.108 1.62.9 3.084 2.22 4.044 1.356.996 3.06 1.416 4.884 1.044 1.824-.372 3.3-1.428 4.224-2.88.924-1.452 1.188-3.144.708-4.884-.228-.828-.66-1.584-1.2-2.136l-1.728-1.2z" />
  </svg>
);
const SiHtml5 = ({ className }: { className?: string }) => (
  <svg className={ className } role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true">
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zM12 2.155l7.595 18.06-7.595 2.15-7.598-2.15L12 2.155z" />
  </svg>
);
const SiCss3 = ({ className }: { className?: string }) => (
  <svg className={ className } role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true">
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zM12 2.155l7.595 18.06-7.595 2.15-7.598-2.15L12 2.155z" />
  </svg>
);
const SiJavascript = ({ className }: { className?: string }) => (
  <svg className={ className } role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true">
    <path d="M0 0h24v24H0V0z" />
  </svg>
);

/* --- Projects data and icons mapping --- */
type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  demo: string;
};

const projects: Project[] = [
  {
    title: 'VigyBag',
    description: 'E-commerce platform for local eco-friendly products. Location-based shopping, multiple categories, villager empowerment.',
    tech: ['React', 'Node.js', 'MongoDB', 'TailwindCSS', 'Express'],
    image: '/assets/vb.png',
    github: 'https://github.com/Hemant-Ballia/VigyBag',
    demo: 'https://vigy-bag.vercel.app/',
  },
  {
    title: 'Kishan Mitra',
    description: 'Empowering farmers to set their own prices and connect with buyers.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Figma'],
    image: '/assets/k-s-hh.png',
    github: 'https://github.com/Hemant-Ballia/kishan-mitra',
    demo: 'https://kishan-mitra-8l4k92667-hemant-chauhans-projects.vercel.app',
  },
  {
    title: 'iTask - Smart Task Manager',
    description: 'A responsive task management app with add, update, and delete features, using Local Storage to save tasks.',
    tech: ['React', 'TailwindCSS', 'Local Storage'],
    image: '/assets/todo-list.png',
    github: 'https://github.com/Hemant-Ballia/-Todo-List-Web-Application',
    demo: 'https://todo-list-web-application-five.vercel.app',
  },
  {
    title: 'Tic-Tac-Toe Challenge',
    description: 'Classic Tic-Tac-Toe game with single and multiplayer modes. Real-time score tracking, responsive design.',
    tech: ['React', 'TailwindCSS', 'JavaScript'],
    image: '/assets/tic-tac-game.png',
    github: 'https://github.com/Hemant-Ballia/tic-tac-toe-game',
    demo: 'https://tic-tac-toe-game-ten-nu.vercel.app',
  },
  {
    title: 'Quiz App',
    description: 'A modern quiz app built with React featuring category selection, interactive questions, and performance analytics.',
    tech: ['React', 'TailwindCSS', 'JavaScript', 'Vite'],
    image: '/assets/react-q.jpg',
    github: 'https://github.com/hemantchauhan/portfolio',
    demo: 'https://react-quiz-app-six-delta.vercel.app',
  },
  {
    title: 'Calculator App',
    description: 'Basic calculator with arithmetic operations. Clean UI, responsive design.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/assets/calculator.png',
    github: 'https://github.com/Hemant-Ballia/calculator-project',
    demo: 'https://calculator-project-ten-cyan.vercel.app/',
  },
];

const techIcons: Record<string, React.ReactNode> = {
  React: <SiReact className="text-cyan-400 w-5 h-5" />,
  'Node.js': <SiNodedotjs className="text-green-500 w-5 h-5" />,
  MongoDB: <SiMongodb className="text-green-500 w-5 h-5" />,
  TailwindCSS: <SiTailwindcss className="text-sky-400 w-5 h-5" />,
  Express: <SiExpress className="text-gray-300 w-5 h-5" />,
  Figma: <FiExternalLink />,
  'Local Storage': <FiExternalLink />,
  JavaScript: <SiJavascript className="text-yellow-400 w-5 h-5" />,
  HTML: <SiHtml5 className="text-orange-500 w-5 h-5" />,
  CSS: <SiCss3 className="text-blue-500 w-5 h-5" />,
  Vite: <FiExternalLink />,
};

/* --- Projects Section Component --- */
export default function ProjectsSection(): JSX.Element {
  return (
    <section className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#0b1220] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-slate-800 dark:text-slate-100 mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          { projects.map((project, index) => (
            <motion.div
              key={ index }
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              initial={ { opacity: 0, y: 50 } }
              whileInView={ { opacity: 1, y: 0 } }
              viewport={ { once: true, amount: 0.2 } }
              transition={ { duration: 0.5, delay: index * 0.1 } }
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <Image
                  src={ project.image }
                  alt={ project.title }
                  fill={ true } // `fill` prop का उपयोग किया गया है
                  style={ { objectFit: 'cover' } } // CSS से `object-fit` का उपयोग
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                  { project.title }
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-4">
                  { project.description }
                </p>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  { project.tech.map((techItem, techIndex) => (
                    <span key={ techIndex } className="flex items-center space-x-1">
                      { techIcons[techItem] }
                      <span className="text-xs text-slate-600 dark:text-slate-400">{ techItem }</span>
                    </span>
                  )) }
                </div>
                <div className="flex space-x-4">
                  <a
                    href={ project.github }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                    aria-label={ `View ${project.title} on GitHub` }
                  >
                    <FiGithub />
                  </a>
                  <a
                    href={ project.demo }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                    aria-label={ `View live demo of ${project.title}` }
                  >
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </motion.div>
          )) }
        </div>
      </div>
    </section>
  );
}
