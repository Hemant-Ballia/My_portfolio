'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from 'react-icons/si';
import Image from 'next/image';

const projects = [
  {
    title: 'VigyBag',
    description:
      'E-commerce platform for local eco-friendly products. Location-based shopping, multiple categories, villager empowerment.',
    tech: ['React', 'Node.js', 'MongoDB', 'TailwindCSS', 'Express.js'],
    image: '/assets/vb.png',
    github: 'https://github.com/Hemant-Ballia/VigyBag',
    demo: 'https://vigy-bag.vercel.app/',
  },
  {
    title: 'Kishan Mitra',
    description: 'Empowering farmers to set their own prices and connect with buyers.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Figma'],
    image: '/assets/k-s-hh.png',
    github: 'https://github.com/Hemant-Ballia/kishan-mitra',
    demo: 'https://kishan-mitra-8l4k92667-hemant-chauhans-projects.vercel.app',
  },
  {
    title: 'iTask - Smart Task Manager',
    description:
      'A responsive task management app with add, update, and delete features, using Local Storage to save tasks.',
    tech: ['React', 'TailwindCSS', 'Local Storage'],
    image: '/assets/todo-list.png',
    github: 'https://github.com/Hemant-Ballia/-Todo-List-Web-Application',
    demo: 'https://todo-list-web-application-five.vercel.app',
  },
  {
    title: 'Tic-Tac-Toe Challenge',
    description:
      'Classic Tic-Tac-Toe game with single and multiplayer modes. Real-time score tracking, responsive design.',
    tech: ['React', 'TailwindCSS', 'JavaScript'],
    image: '/assets/tic-tac-game.png',
    github: 'https://github.com/Hemant-Ballia/tic-tac-toe-game',
    demo: 'https://tic-tac-toe-game-ten-nu.vercel.app',
  },
  {
    title: 'Quiz App',
    description:
      'A modern quiz app built with React featuring category selection, interactive questions, and performance analytics.',
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

const techIcons: Record<string, JSX.Element> = {
  React: <SiReact className="text-cyan-500 w-5 h-5" />,
  'Node.js': <SiNodedotjs className="text-green-600 w-5 h-5" />,
  MongoDB: <SiMongodb className="text-green-500 w-5 h-5" />,
  TailwindCSS: <SiTailwindcss className="text-sky-400 w-5 h-5" />,
  Express: <SiExpress className="text-gray-700 dark:text-gray-300 w-5 h-5" />,
  Figma: <FiExternalLink className="w-5 h-5 text-pink-500" />,
  'Local Storage': <FiExternalLink className="w-5 h-5 text-yellow-500" />,
  JavaScript: <SiJavascript className="text-yellow-400 w-5 h-5" />,
  HTML: <SiHtml5 className="text-orange-500 w-5 h-5" />,
  CSS: <SiCss3 className="text-blue-500 w-5 h-5" />,
  Vite: <FiExternalLink className="w-5 h-5 text-purple-500" />,
};

export default function ProjectsSection() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6 font-nunito bg-slate-50 dark:bg-[#0d1117] transition-colors duration-300">
      <motion.h2
        initial={ { opacity: 0, y: -20 } }
        animate={ { opacity: 1, y: 0 } }
        transition={ { duration: 0.5 } }
        className="text-4xl sm:text-5xl font-bold text-center mb-16 font-grotesk text-gray-900 dark:text-white"
      >
        🚀 Featured <span className="text-emerald-600 dark:text-emerald-400">Projects</span>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        { projects.map((proj, i) => (
          <motion.div
            key={ i }
            initial={ { opacity: 0, y: 30 } }
            whileInView={ { opacity: 1, y: 0 } }
            viewport={ { once: true } }
            transition={ { delay: i * 0.2 } }
            className="bg-white/5 dark:bg-[#0d1117]/60 backdrop-blur-md border border-gray-800 rounded-xl shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2"
          >
            <div className="relative h-56">
              <Image
                src={ proj.image }
                alt={ proj.title }
                fill
                className="object-cover w-full h-full rounded-t-xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-6 space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white font-montserrat">
                { proj.title }
              </h3>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-nunito">
                { proj.description }
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                { proj.tech.map((tech) => (
                  <span
                    key={ tech }
                    className="flex items-center gap-1 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-xs font-medium font-poppins"
                  >
                    { techIcons[tech] || null } { tech }
                  </span>
                )) }
              </div>

              <div className="flex items-center gap-4 pt-4 font-montserrat">
                <a
                  href={ proj.github }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-cyan-600 dark:text-cyan-400 hover:underline"
                >
                  <FiGithub /> GitHub
                </a>
                <a
                  href={ proj.demo }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:underline"
                >
                  <FiExternalLink /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        )) }
      </div>
    </section>
  );
}
