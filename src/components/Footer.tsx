'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

// --- SVG Icons (Dependency-free) ---
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);
const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
  </svg>
);
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);
const ArrowUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 2.5 } stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
  </svg>
);

// --- Footer Data ---
const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Hemant-Ballia', icon: <GithubIcon /> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hemant-chauhan-839a41322/', icon: <LinkedinIcon /> },
  { label: 'Email', href: 'mailto:hemantchauhan22170@gmail.com', icon: <MailIcon /> },
];

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Gallery', href: '/gallery' },
];

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-8 mt-20">
      {/* Consistent Dot Pattern Background */ }
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

          {/* Branding & Socials */ }
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-slate-700">
                <Image
                  src="/assets/pic.jpg" // Note the prepended slash for public directory
                  alt="Hemant Chauhan"
                  width={ 48 }
                  height={ 48 }
                  className="object-cover"
                />
              </div>
              <span className="text-xl font-semibold text-slate-100">Hemant Chauhan</span>
            </Link>
            <p className="mt-4 text-sm max-w-xs">
              Crafting user-friendly web experiences with a focus on performance and clean design.
            </p>
            <div className="flex items-center gap-3 mt-6">
              { socialLinks.map(({ label, href, icon }) => (
                <a
                  key={ label }
                  href={ href }
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ label }
                  className="p-2 rounded-full text-slate-400 bg-slate-800 hover:text-white hover:bg-blue-500 transition-colors"
                >
                  { icon }
                </a>
              )) }
            </div>
          </div>

          {/* Quick Links */ }
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              { quickLinks.map(link => (
                <li key={ link.label }>
                  <Link
                    href={ link.href }
                    className="text-sm text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    { link.label }
                  </Link>
                </li>
              )) }
            </ul>
          </div>

          {/* Contact */ }
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">Get in Touch</h3>
            <p className="text-sm text-slate-400">
              Ballia, Uttar Pradesh, India
            </p>
            <a
              href="mailto:hemantchauhan22170@gmail.com"
              className="inline-block mt-3 text-sm text-blue-400 hover:underline"
            >
              hemantchauhan22170@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom Bar */ }
        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>© { new Date().getFullYear() } Hemant Chauhan. All Rights Reserved.</p>
        </div>
      </div>

      {/* Scroll to Top Button */ }
      { isVisible && (
        <motion.button
          onClick={ scrollToTop }
          initial={ { opacity: 0, scale: 0.5 } }
          animate={ { opacity: 1, scale: 1 } }
          exit={ { opacity: 0, scale: 0.5 } }
          className="fixed bottom-6 right-6 p-3 rounded-full text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg hover:opacity-90 transition-all z-50 transform hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUpIcon />
        </motion.button>
      ) }
    </footer>
  );
}
