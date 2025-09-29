'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FiBriefcase,
  FiAward,
  FiCode,
  FiArrowRight,
  FiStar,
  FiTrendingUp,
  FiBookOpen,
} from 'react-icons/fi';

const journeyData = [
  {
    icon: FiAward,
    date: '2024 – 2027 (Expected)',
    title: 'B.Sc. in Computer Science & Data Analytics',
    institution: 'Indian Institute of Technology Patna',
    description:
      'Currently pursuing a rigorous curriculum in algorithms, data structures, machine learning, and data analytics. Maintaining a CPI above 9.1.',
  },
  {
    icon: FiStar,
    date: '2023',
    title: 'INSPIRE Scholarship Awardee',
    institution: 'Dept. of Science & Technology, Govt. of India',
    description:
      'Awarded for academic excellence, securing a top 1% rank in the UP State Board.',
  },
  {
    icon: FiBriefcase,
    date: 'Apr 2025 – Jul 2025',
    title: 'Full-Stack Developer (Project)',
    institution: 'Kishan Mitra Platform',
    description:
      'Built a farmer-to-company platform using Next.js, Node.js, and MySQL. Delivered features like crop uploads, order tracking, and secure payments.',
  },
  {
    icon: FiCode,
    date: 'Ongoing',
    title: 'Open Source Contributor',
    institution: 'Various Projects',
    description:
      'Actively contributing to UI/UX enhancements, bug fixes, and clean documentation across open-source repositories.',
  },
];

const highlights = [
  { icon: FiTrendingUp, label: 'Data Analytics & Visualization' },
  { icon: FiCode, label: 'Full-Stack Development (MERN + Next.js)' },
  { icon: FiBookOpen, label: 'Machine Learning Enthusiast' },
  { icon: FiAward, label: 'INSPIRE Scholar & IITian' },
];

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200 px-6 py-16 sm:py-24">

      {/* --- Introduction --- */ }
      <motion.header
        className="text-center max-w-5xl mx-auto"
        initial={ { opacity: 0, y: -50 } }
        animate={ { opacity: 1, y: 0 } }
        transition={ { duration: 0.6 } }
      >
        <Image
          src="/assets/img.png"
          alt="Portrait of Hemant Chauhan"
          width={ 160 }
          height={ 160 }
          className="rounded-full mx-auto mb-6 shadow-xl border-4 border-emerald-700"
          priority
        />
        <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          Hemant Chauhan
        </h1>
        <p className="text-lg max-w-3xl mx-auto leading-relaxed text-gray-700 dark:text-gray-300">
          I'm an undergraduate at <span className="font-semibold text-emerald-600 dark:text-emerald-400">IIT Patna</span>, specializing in Computer Science & Data Analytics. My passion lies in <span className="font-semibold text-emerald-600 dark:text-emerald-400">full-stack web development</span> and <span className="font-semibold text-emerald-600 dark:text-emerald-400">data-driven problem solving</span>. With a CPI above 9.18 and recognition as an INSPIRE Scholar, I aim to build tech that creates real-world impact.
        </p>
      </motion.header>

      {/* --- Quick Highlights --- */ }
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        variants={ containerVariants }
        initial="hidden"
        whileInView="visible"
        viewport={ { once: true, amount: 0.3 } }
      >
        { highlights.map((item, index) => (
          <motion.div
            key={ index }
            variants={ itemVariants }
            className="flex flex-col items-center justify-center p-6 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl shadow-lg hover:bg-emerald-200 dark:hover:bg-emerald-900/50 transition-colors duration-300"
          >
            <item.icon className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mb-3" aria-hidden="true" />
            <p className="text-center font-medium text-gray-800 dark:text-white">{ item.label }</p>
          </motion.div>
        )) }
      </motion.div>

      {/* --- Timeline --- */ }
      <motion.div
        className="mt-24 max-w-3xl mx-auto"
        variants={ containerVariants }
        initial="hidden"
        whileInView="visible"
        viewport={ { once: true, amount: 0.3 } }
      >
        <h2 className="font-serif text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          My Journey & Achievements
        </h2>
        <div className="relative border-l-2 border-emerald-500/30">
          { journeyData.map((item, index) => (
            <motion.div
              key={ index }
              className="mb-12 ml-8 p-4 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors duration-300"
              variants={ itemVariants }
              transition={ { duration: 0.6, delay: index * 0.2 } }
            >
              <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-emerald-600 dark:bg-emerald-900 rounded-full ring-8 ring-white dark:ring-gray-950">
                <item.icon className="w-4 h-4 text-white dark:text-emerald-400" aria-hidden="true" />
              </span>
              <h3 className="flex items-center mb-1 text-xl font-semibold text-gray-900 dark:text-white">
                { item.title }
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
                { item.date } | { item.institution }
              </time>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">{ item.description }</p>
            </motion.div>
          )) }
        </div>
      </motion.div>

      {/* --- Call to Action --- */ }
      <motion.footer
        className="text-center mt-24"
        initial={ { opacity: 0 } }
        whileInView={ { opacity: 1 } }
        viewport={ { once: true, amount: 0.5 } }
        transition={ { duration: 0.8 } }
      >
        <h2 className="font-serif text-3xl font-bold text-gray-900 dark:text-white">
          Want to work together?
        </h2>
        <Link
          href="/contact"
          className="mt-6 inline-flex items-center gap-2 px-8 py-3 font-semibold text-white bg-emerald-600 rounded-lg shadow-lg hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105"
        >
          Get In Touch <FiArrowRight />
        </Link>
      </motion.footer>
    </section>
  );
}
