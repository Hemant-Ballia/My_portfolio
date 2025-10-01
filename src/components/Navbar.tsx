



'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

// --- Icons ---
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 2 } stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
);

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

// --- Data ---
const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Hemant-Ballia', icon: <GithubIcon /> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hemant-chauhan-839a41322/', icon: <LinkedinIcon /> },
];

const Logo = () => (
  <Link href="/" aria-label="Back to Homepage" className="flex items-center group">
    <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-900 dark:bg-slate-200 border-2 border-slate-300 dark:border-slate-700 shadow-md transition-transform duration-300 group-hover:scale-110">
      <Image src="/assets/pic.jpg" alt="Hemant Chauhan's profile picture" width={ 40 } height={ 40 } className="object-cover w-full h-full" />
    </div>
  </Link>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mobileMenuVariants: Variants = {
    open: { x: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
    closed: { x: '100%', transition: { type: 'spring', stiffness: 300, damping: 30 } },
  };

  return (
    <header aria-label="Main navigation" className={ `sticky top-0 z-50 transition-all duration-300 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg ${isScrolled ? 'shadow-md border-b border-slate-200/50 dark:border-slate-800/50' : ''}` }>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        <Logo />

        <nav className="hidden md:flex items-center gap-2">
          { navItems.map(({ label, href }) => (
            <Link
              key={ label }
              href={ href }
              className={ `relative px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${pathname === href
                  ? 'text-blue-500 dark:text-blue-400'
                  : 'text-slate-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400'
                }` }
            >
              { label }
              { pathname === href && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full origin-left mx-2"
                  layoutId="underline"
                  initial={ { scaleX: 0 } }
                  animate={ { scaleX: 1 } }
                  transition={ { type: 'spring', stiffness: 300, damping: 30 } }
                />
              ) }
            </Link>
          )) }
        </nav>

        <div className="hidden md:flex items-center gap-3">
          { socialLinks.map(({ label, href, icon }) => (
            <a
              key={ label }
              href={ href }
              target="_blank"
              rel="noopener noreferrer"
              aria-label={ label }
              className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              { icon }
            </a>
          )) }
          { mounted && (
            <button
              onClick={ () => setTheme(theme === 'dark' ? 'light' : 'dark') }
              aria-label="Toggle Theme"
              className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              { theme === 'dark' ? <SunIcon /> : <MoonIcon /> }
            </button>
          ) }
          <a
            href="assets/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-md text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition-all shadow-md transform hover:scale-105"
          >
            <DownloadIcon /> Resume
          </a>
        </div>

        <button
          onClick={ () => setIsOpen(true) }
          aria-label="Open menu"
          className="p-2 rounded-md text-slate-700 dark:text-slate-200 md:hidden"
        >
          <MenuIcon />
        </button>
      </div>

      <AnimatePresence>
        { isOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-slate-900/90 backdrop-blur-sm z-50 md:hidden"
            initial={ { opacity: 0 } }
            animate={ { opacity: 1 } }
            exit={ { opacity: 0 } }
          >
            <motion.nav
              className="fixed top-0 right-0 w-3/4 max-w-sm h-full bg-white dark:bg-slate-800 shadow-xl p-6 overflow-y-auto"
              variants={ mobileMenuVariants }
              initial="closed"
              animate="open"
              exit="closed"
            >
              <button
                onClick={ () => setIsOpen(false) }
                aria-label="Close menu"
                className="absolute top-4 right-4 p-2 rounded-md text-slate-700 dark:text-slate-200"
              >
                <XIcon />
              </button>

              <ul className="flex flex-col items-center gap-6 mt-16">
                { navItems.map(({ label, href }) => (
                  <li key={ label }>
                    <Link
                      href={ href }
                      onClick={ () => setIsOpen(false) }
                      className="text-lg font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      { label }
                    </Link>
                  </li>
                )) }
              </ul>

              <div className="mt-12 flex flex-col items-center gap-4 border-t border-slate-300 dark:border-slate-700 pt-8">
                <div className="flex gap-4">
                  { socialLinks.map(({ label, href, icon }) => (
                    <a
                      key={ label }
                      href={ href }
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={ label }
                      className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      { icon }
                    </a>
                  )) }
                </div>
                { mounted && (
                  <button
                    onClick={ () => setTheme(theme === 'dark' ? 'light' : 'dark') }
                    aria-label="Toggle Theme"
                    className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    { theme === 'dark' ? <SunIcon /> : <MoonIcon /> }
                  </button>
                ) }
                <a
                  href="assets/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-md text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition-all shadow-md transform hover:scale-105"
                >
                  <DownloadIcon /> Resume
                </a>
              </div>
            </motion.nav>
          </motion.div>
        ) }
      </AnimatePresence>
    </header>
  );
}
