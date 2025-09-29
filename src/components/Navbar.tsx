'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
  FiMenu,
  FiX,
  FiSun,
  FiMoon,
  FiGithub,
  FiLinkedin,
  FiDownload,
} from 'react-icons/fi';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/Hemant-Ballia',
    icon: FiGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/hemant-chauhan-839a41322/',
    icon: FiLinkedin,
  },
];

const Logo = () => (
  <Link href="/" aria-label="Back to Homepage" className="flex items-center">
    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-gray-900 dark:bg-slate-200 border-2 border-white dark:border-gray-900 shadow-sm">
      <Image
        src="/assets/pic.jpg"
        alt="Hemant Chauhan"
        width={ 40 }
        height={ 40 }
        className="object-cover rounded-full"
      />
    </div>
  </Link>
);

const ResumeButton = ({ className = '' }: { className?: string }) => (
  <Link
    href="/assets/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className={ `inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base rounded-lg transition-transform duration-150 border-2 
      text-cyan-500 border-cyan-500 
      hover:bg-cyan-500/10 dark:hover:bg-cyan-400/10
      transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400
      ${className}` }
  >
    <FiDownload />
    <span>Resume</span>
  </Link>
);

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  if (!mounted) return null;

  const mobileMenuVariants: Variants = {
    open: { opacity: 1, y: 0, transition: { duration: 0.28, ease: 'easeOut' } },
    closed: { opacity: 0, y: '-6%', transition: { duration: 0.18, ease: 'easeIn' } },
  };

  return (
    <header
      aria-label="Main navigation"
      className={ `sticky top-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent dark:bg-transparent'
        }` }
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-3 sm:px-6 py-2 sm:py-3">
        <Logo />

        {/* Desktop Navigation */ }
        <nav className="hidden md:flex items-center">
          <ul className="flex items-center space-x-1 sm:space-x-3 text-sm sm:text-base lg:text-lg">
            { navItems.map(({ label, href }) => (
              <li key={ label }>
                <Link
                  href={ href }
                  aria-current={ pathname === href ? 'page' : undefined }
                  className={ `relative px-2 sm:px-3 py-1 rounded-md transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${pathname === href
                      ? 'text-cyan-600 dark:text-cyan-400 font-semibold'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }` }
                >
                  { label }
                  { pathname === href && (
                    <motion.div
                      className="absolute -bottom-1 left-3 right-3 h-0.5 bg-cyan-500 dark:bg-cyan-400 rounded"
                      layoutId="underline"
                      transition={ { type: 'spring', stiffness: 400, damping: 28 } }
                    />
                  ) }
                </Link>
              </li>
            )) }
          </ul>
        </nav>

        {/* Desktop Actions */ }
        <div className="hidden md:flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            { socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={ label }
                href={ href }
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ label }
                className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                <Icon size={ 20 } />
              </a>
            )) }
          </div>

          <button
            onClick={ () => setTheme(theme === 'dark' ? 'light' : 'dark') }
            aria-label="Toggle Theme"
            className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            { theme === 'dark' ? <FiSun size={ 18 } /> : <FiMoon size={ 18 } /> }
          </button>

          <ResumeButton />
        </div>

        {/* Mobile Menu Button */ }
        <button
          onClick={ () => setIsOpen((s) => !s) }
          aria-label="Toggle Menu"
          aria-expanded={ isOpen }
          className="p-2 rounded-md text-gray-700 dark:text-gray-200 md:hidden z-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
        >
          { isOpen ? <FiX size={ 22 } /> : <FiMenu size={ 22 } /> }
        </button>
      </div>

      {/* Mobile Menu Panel */ }
      <AnimatePresence>
        { isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={ mobileMenuVariants }
            className="fixed inset-0 z-40 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm md:hidden"
          >
            <div className="max-w-md mx-auto h-full flex flex-col px-6 py-8">
              <div className="flex items-center justify-between mb-6">
                <Logo />
                <div className="flex items-center gap-3">
                  <button
                    onClick={ () => setTheme(theme === 'dark' ? 'light' : 'dark') }
                    aria-label="Toggle Theme"
                    className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                  >
                    { theme === 'dark' ? <FiSun size={ 18 } /> : <FiMoon size={ 18 } /> }
                  </button>
                  <button
                    onClick={ () => setIsOpen(false) }
                    aria-label="Close Menu"
                    className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                  >
                    <FiX size={ 20 } />
                  </button>
                </div>
              </div>

              <nav className="flex-1 flex flex-col justify-center items-stretch gap-5">
                { navItems.map(({ label, href }) => (
                  <Link
                    key={ label }
                    href={ href }
                    onClick={ () => setIsOpen(false) }
                    className={ `block text-center py-3 rounded-md text-lg font-medium transition-colors ${pathname === href
                        ? 'text-cyan-600 dark:text-cyan-400'
                        : 'text-gray-800 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400'
                      }` }
                  >
                    { label }
                  </Link>
                )) }
              </nav>

              <div className="border-t border-gray-200 dark:border-gray-800 mt-6 pt-6">
                <div className="flex items-center justify-center gap-4 mb-4">
                  { socialLinks.map(({ label, href, icon: Icon }) => (
                    <a
                      key={ label }
                      href={ href }
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={ label }
                      className="p-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                    >
                      <Icon size={ 22 } />
                    </a>
                  )) }
                </div>

                <div className="flex flex-col gap-3">
                  <ResumeButton className="w-full" />
                </div>

                <div className="text-center mt-6 text-sm text-gray-500 dark:text-gray-400">
                  © { new Date().getFullYear() } Hemant Chauhan
                </div>
              </div>
            </div>
          </motion.div>
        ) }
      </AnimatePresence>
    </header>
  );
}
