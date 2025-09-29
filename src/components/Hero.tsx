'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import {
  FiArrowRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
} from 'react-icons/fi';

const easing = [0.4, 0, 0.2, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easing } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-tr from-[#0f172a] to-[#020617] text-white"
    >
      {/* Glass overlay */ }
      <div className="absolute inset-0 bg-white/5 dark:bg-black/10 backdrop-blur-xl z-0" />

      {/* Animated gradient blobs */ }
      <div className="absolute top-0 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-full blur-3xl opacity-30 animate-pulse-slow" />
      <div className="absolute bottom-0 -right-20 w-[400px] h-[400px] bg-gradient-to-tr from-purple-500 to-pink-600 rounded-full blur-3xl opacity-30 animate-pulse-slow" />

      {/* Content */ }
      <motion.div
        initial="hidden"
        animate="visible"
        variants={ { visible: { transition: { staggerChildren: 0.2 } } } }
        className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center px-6"
      >
        {/* Left: Text */ }
        <motion.div variants={ fadeUp } className="space-y-6 text-center md:text-left font-nunito">
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight font-grotesk">
            Hi, I&apos;m{ ' ' }
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Hemant Chauhan
            </span>
          </h1>

          <TypeAnimation
            sequence={ [
              'Full-Stack Developer',
              2000,
              'Creative Technologist',
              2000,
              'IIT Patna Student',
              2000,
            ] }
            wrapper="span"
            cursor
            repeat={ Infinity }
            className="block text-2xl sm:text-3xl font-semibold text-cyan-400 font-poppins"
          />

          <p className="text-lg text-gray-300 max-w-xl leading-relaxed mx-auto md:mx-0 font-nunito">
            I craft scalable, performant, and visually engaging web experiences. Passionate about
            design systems, motion, and building tools that empower people.
          </p>

          {/* Buttons */ }
          <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center md:justify-start">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-7 py-3 font-semibold font-montserrat text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg shadow-lg hover:shadow-cyan-500/30 hover:scale-105 transition-transform duration-300"
            >
              View Projects <FiArrowRight className="ml-2" />
            </Link>
            <Link
              href="/resume.pdf"
              target="_blank"
              className="inline-flex items-center justify-center px-7 py-3 font-semibold font-montserrat text-gray-200 bg-white/5 backdrop-blur-md border border-gray-700 rounded-lg hover:bg-white/10 transition-colors duration-300"
            >
              <FiDownload className="mr-2" /> Resume
            </Link>
          </div>

          {/* Social Icons */ }
          <div className="flex justify-center md:justify-start mt-6 gap-4 font-nunito">
            { [
              { href: 'https://github.com/Hemant-Ballia', icon: <FiGithub size={ 22 } /> },
              {
                href: 'https://www.linkedin.com/in/hemant-chauhan-839a41322/',
                icon: <FiLinkedin size={ 22 } />,
              },
              { href: 'mailto:hemantchauhan22170@gmail.com', icon: <FiMail size={ 22 } /> },
            ].map((item, i) => (
              <Link
                key={ i }
                href={ item.href }
                target="_blank"
                className="p-3 bg-white/5 backdrop-blur-md border border-gray-700 rounded-lg hover:bg-white/10 hover:text-cyan-400 transition-colors"
              >
                { item.icon }
              </Link>
            )) }
          </div>
        </motion.div>

        {/* Right: Avatar */ }
        <motion.div
          variants={ fadeUp }
          className="flex justify-center md:justify-end relative group"
        >
          <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-30 blur-3xl group-hover:opacity-50 transition duration-500" />
          <div className="relative p-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 shadow-2xl">
            <div className="rounded-full bg-black/70 backdrop-blur-md p-1">
              <Image
                src="/assets/img.jpg"
                alt="Hemant Chauhan"
                width={ 320 }
                height={ 320 }
                className="rounded-full object-cover shadow-xl hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
