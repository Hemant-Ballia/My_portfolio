'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiSun,
  FiMoon,
  FiGithub,
  FiLinkedin,
  FiDownload,
} from "react-icons/fi";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Hemant-Ballia",
    icon: FiGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hemant-chauhan-839a41322/",
    icon: FiLinkedin,
  },
];

const Logo = () => (
  <Link href="/" aria-label="Back to Homepage">
    <div className="flex items-center justify-center w-10 h-10 rounded-full overflow-hidden bg-gray-900 dark:bg-slate-200 border-2 border-white dark:border-gray-900 shadow-md">
      <img
        src="/assets/pic.jpg"
        alt="Hemant Chauhan"
        className="w-full h-full object-cover rounded-full"
      />
    </div>
  </Link>
);

const ResumeButton = ({ className = "" }) => (
  <Link
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className={ `inline-flex items-center gap-2 px-4 py-2 font-montserrat text-sm md:text-base rounded-lg transition-all duration-300 border-2 
      text-cyan-500 border-cyan-500 
      hover:bg-cyan-500/10 dark:hover:bg-cyan-400/10
      transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-400
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
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  if (!mounted) return null;

  const mobileMenuVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    closed: {
      opacity: 0,
      y: "-10%",
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  return (
    <header
      className={ `sticky top-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg shadow-md"
          : "bg-white dark:bg-gray-950"
        }` }
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3 md:px-6">
        <Logo />

        {/* Desktop Navigation */ }
        <nav className="hidden md:flex items-center">
          <ul className="flex items-center space-x-2 text-base lg:text-lg font-grotesk">
            { navItems.map(({ label, href }) => (
              <li key={ label }>
                <Link
                  href={ href }
                  aria-current={ pathname === href ? "page" : undefined }
                  className={ `relative px-3 py-2 transition-colors duration-300 rounded-lg ${pathname === href
                      ? "text-cyan-500 dark:text-cyan-400 font-semibold"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
                    }` }
                >
                  { label }
                  { pathname === href && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-500 dark:bg-cyan-400"
                      layoutId="underline"
                      transition={ { type: "spring", stiffness: 380, damping: 30 } }
                    />
                  ) }
                </Link>
              </li>
            )) }
          </ul>
        </nav>

        {/* Desktop Actions */ }
        <div className="hidden md:flex items-center space-x-4 font-nunito">
          { socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={ label }
              href={ href }
              target="_blank"
              rel="noopener noreferrer"
              aria-label={ label }
              className="text-gray-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
            >
              <Icon size={ 22 } />
            </a>
          )) }
          <button
            onClick={ () => setTheme(theme === "dark" ? "light" : "dark") }
            aria-label="Toggle Theme"
            className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            { theme === "dark" ? <FiSun size={ 22 } /> : <FiMoon size={ 22 } /> }
          </button>
          <ResumeButton />
        </div>

        {/* Mobile Menu Button */ }
        <button
          onClick={ () => setIsOpen(!isOpen) }
          aria-label="Toggle Menu"
          aria-expanded={ isOpen }
          className="p-2 rounded-md text-gray-600 dark:text-gray-300 md:hidden z-50"
        >
          { isOpen ? <FiX size={ 24 } /> : <FiMenu size={ 24 } /> }
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
            className="absolute top-0 left-0 w-full h-screen bg-white/95 dark:bg-gray-950/95 backdrop-blur-md md:hidden"
          >
            <nav className="flex flex-col items-center justify-center h-full space-y-8 px-4 font-poppins">
              { navItems.map(({ label, href }) => (
                <Link
                  key={ label }
                  href={ href }
                  onClick={ () => setIsOpen(false) }
                  aria-current={ pathname === href ? "page" : undefined }
                  className={ `text-2xl w-full text-center transition-colors ${pathname === href
                      ? "font-bold text-cyan-500 dark:text-cyan-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400"
                    }` }
                >
                  { label }
                </Link>
              )) }
              <div className="border-t border-gray-200 dark:border-gray-700 w-1/2 my-4" />
              <div className="flex items-center justify-center gap-8 font-nunito">
                { socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={ label }
                    href={ href }
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={ label }
                    className="text-gray-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                  >
                    <Icon size={ 28 } />
                  </a>
                )) }
                <button
                  onClick={ () => setTheme(theme === "dark" ? "light" : "dark") }
                  aria-label="Toggle Theme"
                  className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  { theme === "dark" ? <FiSun size={ 28 } /> : <FiMoon size={ 28 } /> }
                </button>
              </div>
              <ResumeButton className="mt-6 w-full max-w-xs text-lg" />
            </nav>
          </motion.div>
        ) }
      </AnimatePresence>
    </header>
  );
}
