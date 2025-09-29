// src/components/Footer.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Hemant-Ballia', icon: FiGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hemant-chauhan-839a41322/', icon: FiLinkedin },
  { label: 'Email', href: 'mailto:hemantchauhan22170@gmail.com', icon: FiMail },
];

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Gallery', href: '/gallery' }, // ✅ Added Gallery link
];

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 relative">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Column 1: Branding */ }
          <div>
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/assets/img.png"
                alt="Hemant Chauhan"
                width={ 45 }
                height={ 45 }
                className="rounded-full border border-gray-300 dark:border-gray-700 shadow-md"
              />
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Hemant Chauhan
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              Passionate about building modern, responsive, and user-friendly web
              applications with clean design and high performance.
            </p>
          </div>

          {/* Column 2: Quick Links */ }
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              { quickLinks.map(link => (
                <li key={ link.label }>
                  <Link
                    href={ link.href }
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    { link.label }
                  </Link>
                </li>
              )) }
            </ul>
          </div>

          {/* Column 3: Contact */ }
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>📍 Ballia, Uttar Pradesh, India</li>
              <li>
                <a
                  href="mailto:hemantchauhan22170@gmail.com"
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-2"
                >
                  <FiMail size={ 16 } /> hemantchauhan22170@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect */ }
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg">Connect</h3>
            <div className="flex space-x-5">
              { socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={ label }
                  href={ href }
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ label }
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-emerald-600 hover:text-white transition-all"
                >
                  <Icon size={ 20 } />
                </a>
              )) }
            </div>
          </div>

        </div>

        {/* Bottom Bar */ }
        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>&copy; { new Date().getFullYear() } Hemant Chauhan. All Rights Reserved.</p>
          <div className="mt-2">
            <Link
              href="/gallery"
              className="text-sm text-emerald-500 underline hover:text-emerald-600 transition-colors"
            >
              See my journey in pictures →
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */ }
      { isVisible && (
        <button
          onClick={ scrollToTop }
          className="fixed bottom-5 right-5 p-3 rounded-full bg-emerald-600 text-white shadow-lg hover:bg-emerald-700 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <FiArrowUp size={ 20 } />
        </button>
      ) }
    </footer>
  );
}
