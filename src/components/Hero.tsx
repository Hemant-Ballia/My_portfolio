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
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easing } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-tr from-[#071024] via-[#071026] to-[#020617] text-white"
      role="region"
      aria-label="Hero"
    >
      {/* subtle glass overlay */ }
      <div className="absolute inset-0 bg-white/3 dark:bg-black/6 backdrop-blur-sm z-0 pointer-events-none" />

      {/* decorative blobs */ }
      <div className="absolute -left-28 -top-20 w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 blur-3xl opacity-20 animate-[pulse_8s_ease-in-out_infinite]" />
      <div className="absolute -right-20 -bottom-24 w-[360px] h-[360px] rounded-full bg-gradient-to-tr from-purple-500 to-pink-600 blur-3xl opacity-18 animate-[pulse_10s_ease-in-out_infinite]" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={ { visible: { transition: { staggerChildren: 0.14 } } } }
        className="relative z-10 w-full max-w-6xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
      >
        {/* LEFT: text */ }
        <motion.div variants={ fadeUp } className="space-y-4 text-center md:text-left">
          <h1 className="font-extrabold leading-tight text-[clamp(1.9rem,5vw,3.5rem)] sm:text-[clamp(2.4rem,5vw,4rem)]">
            Hi, I&apos;m{ " " }
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Hemant Chauhan
            </span>
          </h1>

          <div className="text-[clamp(1rem,2.2vw,1.5rem)] font-semibold text-cyan-300">
            <TypeAnimation
              sequence={ [
                'IIT Patna Student', 1800,
                'Frontend Developer', 1800,
                'Backend Developer', 1600,
                'Software Developer', 1600,
                'UI / UX Designer', 1800,
                'Data Scientist & Analytics', 2000,
                'Open-Source Contributor', 2000,
                'C++ & Python Programmer', 2200,
              ] }
              wrapper="span"
              cursor
              repeat={ Infinity }
              className="inline-block"
            />
          </div>


          <p className="max-w-xl mx-auto md:mx-0 text-sm sm:text-base text-gray-300 leading-relaxed">
            I build scalable and efficient web applications. I focus on clear design, smooth user interactions,
            and using data analytics to solve practical problems.
          </p>


          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 justify-center md:justify-start">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 justify-center px-5 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg hover:scale-[1.02] transition-transform"
              aria-label="View Projects"
            >
              View Projects <FiArrowRight />
            </Link>

            <Link
              href="/assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 justify-center px-5 py-3 rounded-lg bg-white/6 backdrop-blur-sm border border-white/8 text-gray-200 hover:bg-white/10 transition-colors"
              aria-label="Download Resume"
            >
              <FiDownload /> Resume
            </Link>
          </div>

          <div className="flex gap-3 mt-4 justify-center md:justify-start">
            <Link
              href="https://github.com/Hemant-Ballia"
              target="_blank"
              className="p-2 rounded-md bg-white/3 hover:bg-white/6 transition"
              aria-label="GitHub"
            >
              <FiGithub size={ 18 } />
            </Link>
            <Link
              href="https://www.linkedin.com/in/hemant-chauhan-839a41322/"
              target="_blank"
              className="p-2 rounded-md bg-white/3 hover:bg-white/6 transition"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={ 18 } />
            </Link>
            <Link
              href="mailto:hemantchauhan22170@gmail.com"
              className="p-2 rounded-md bg-white/3 hover:bg-white/6 transition"
              aria-label="Email"
            >
              <FiMail size={ 18 } />
            </Link>
          </div>
        </motion.div>

        {/* RIGHT: avatar */ }
        <motion.div
          variants={ fadeUp }
          className="flex items-center justify-center md:justify-end relative"
          aria-hidden="false"
        >
          <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full p-1 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-2xl">
            <div className="rounded-full overflow-hidden bg-black/60 p-1">
              <Image
                src="/assets/img.jpg"
                alt="Hemant Chauhan"
                width={ 720 }
                height={ 720 }
                className="w-full h-full object-cover rounded-full transform transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>
          </div>

          {/* small chat badge (optional) */ }
          <div className="absolute bottom-2 right-4 hidden sm:flex items-center gap-2 bg-cyan-600 text-white text-xs px-3 py-1 rounded-full shadow">
            Chat with me
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
