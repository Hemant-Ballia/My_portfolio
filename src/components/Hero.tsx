'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

// --- SVG Icons ---
const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 2 } stroke="currentColor" className="w-5 h-5" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);
const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 2 } stroke="currentColor" className="w-5 h-5" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
);
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);
const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
  </svg>
);
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

// --- Typewriter Hook ---
interface TypewriterOptions {
  typingSpeed?: number;
  deletingSpeed?: number;
  delay?: number;
}

const useTypewriter = (words: string[], options: TypewriterOptions = {}) => {
  const { typingSpeed = 150, deletingSpeed = 100, delay = 1800 } = options;
  const [text, setText] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [loopNum, setLoopNum] = React.useState(0);

  React.useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];
      setText(current => isDeleting ? fullText.substring(0, current.length - 1) : fullText.substring(0, current.length + 1));
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };
    const timer = setTimeout(handleType, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, words, deletingSpeed, typingSpeed, delay]);

  return text;
};

// --- Motion Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// --- Main Hero Component ---
export default function Hero() {
  const roles = [
    'web Developer',
    'UI/UX Designer',
    'Data Analyst',
    'Open-Source Contributor',
  ];
  const animatedText = useTypewriter(roles);
  const backgroundImageUrl = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto-format&fit=crop';

  return (
    <section
      id="home"

      className="relative w-full h-screen sm:min-h-screen flex items-center justify-center text-white overflow-hidden bg-cover bg-center bg-no-repeat p-4"
      style={ { backgroundImage: `url('${backgroundImageUrl}')` } }
      role="region"
      aria-label="Hero Section"
    >
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"></div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={ containerVariants }
        className="relative z-10 w-full max-w-5xl mx-auto px-4 flex flex-col items-center text-center space-y-6 md:space-y-8"
      >
        <motion.h1
          variants={ itemVariants }
          className="text-4xl font-extrabold tracking-tight text-slate-100 sm:text-5xl lg:text-7xl"
          style={ { textShadow: '0px 2px 10px rgba(0,0,0,0.5)' } }
        >
          Hi, I&apos;m <span className="text-white">Hemant Chauhan</span>
        </motion.h1>

        <motion.div
          variants={ itemVariants }
          className="text-lg font-medium text-slate-300 min-h-[2.25rem] md:text-xl"
        >
          <span className="inline-block">{ animatedText }</span>
          <span className="inline-block animate-pulse opacity-75">|</span>
        </motion.div>

        <motion.p
          variants={ itemVariants }
          className="max-w-3xl text-base text-slate-300/90 leading-relaxed md:text-lg"
        >
          I build scalable and efficient web applications with clean design,
          smooth interactions, and data-driven decisions.
        </motion.p>

        <motion.div
          variants={ itemVariants }
          className="flex flex-col sm:flex-row items-center gap-4 pt-4"
        >
          <a
            href="/projects"
            className="group relative inline-flex items-center justify-center w-full sm:w-auto gap-2 px-7 py-3 rounded-lg bg-white text-slate-900 font-semibold shadow-lg transition-all duration-300 transform hover:scale-105"
            aria-label="View my projects"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">View Projects</span>
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white"><ArrowRightIcon /></span>
          </a>

          <a
            href="/assets/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full sm:w-auto gap-2 px-7 py-3 rounded-lg border border-white/20 bg-white/10 text-slate-200 backdrop-blur-lg hover:bg-white/20 hover:border-white/30 transition-colors duration-300"
            aria-label="Download my Resume"
          >
            <DownloadIcon /> Resume
          </a>
        </motion.div>

        <motion.div
          variants={ itemVariants }
          className="flex items-center gap-5 pt-6"
        >
          <SocialLink href="https://github.com/Hemant-Ballia" ariaLabel="My GitHub Profile" icon={ <GithubIcon /> } />
          <SocialLink href="https://www.linkedin.com/in/hemant-chauhan-839a41322/" ariaLabel="My LinkedIn Profile" icon={ <LinkedinIcon /> } />
          <SocialLink href="mailto:hemantchauhan22170@gmail.com" ariaLabel="Send me an Email" icon={ <MailIcon /> } />
        </motion.div>
      </motion.div>

      {/* Divider line for next section */ }
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" aria-hidden="true"></div>


    </section>
  );
}

// --- SocialLink Component ---
interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  ariaLabel: string;
}

const SocialLink = ({ href, icon, ariaLabel }: SocialLinkProps) => (
  <a
    href={ href }
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ ariaLabel }
    className="p-3 rounded-full text-slate-300 border border-white/20 bg-white/10 backdrop-blur-lg hover:bg-white/20 hover:border-white/30 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
  >
    { icon }
  </a>

);