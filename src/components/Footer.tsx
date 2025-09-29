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
  { label: 'Gallery', href: '/gallery' },
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
    <footer className="relative bg-gradient-to-tr from-[#0f172a] to-[#020617] text-white border-t border-gray-700">
      {/* Glass overlay */ }
      <div className="absolute inset-0 bg-white/5 dark:bg-black/10 backdrop-blur-xl z-0" />

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Column 1: Branding */ }
          <div>
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/assets/img.jpg"
                alt="Hemant Chauhan"
                width={ 45 }
                height={ 45 }
                className="rounded-full border border-gray-300 dark:border-gray-700 shadow-md"
              />
              <span className="text-xl font-bold text-white">Hemant Chauhan</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-300">
              Passionate about building modern, responsive, and user-friendly web applications with clean design and high performance.
            </p>
          </div>

          {/* Column 2: Quick Links */ }
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              { quickLinks.map(link => (
                <li key={ link.label }>
                  <Link
                    href={ link.href }
                    className="text-sm text-gray-300 hover:text-emerald-400 transition-colors"
                  >
                    { link.label }
                  </Link>
                </li>
              )) }
            </ul>
          </div>

          {/* Column 3: Contact */ }
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>📍 Ballia, Uttar Pradesh, India</li>
              <li>
                <a
                  href="mailto:hemantchauhan22170@gmail.com"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-2"
                >
                  <FiMail size={ 16 } /> hemantchauhan22170@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect */ }
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">Connect</h3>
            <div className="flex space-x-5">
              { socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={ label }
                  href={ href }
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ label }
                  className="p-2 rounded-full bg-white/10 text-gray-300 hover:bg-emerald-600 hover:text-white transition-all"
                >
                  <Icon size={ 20 } />
                </a>
              )) }
            </div>
          </div>
        </div>

        {/* Bottom Bar */ }
        <div className="mt-12 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>&copy; { new Date().getFullYear() } Hemant Chauhan. All Rights Reserved.</p>
          <div className="mt-2">
            <Link
              href="/gallery"
              className="text-sm text-emerald-400 underline hover:text-emerald-500 transition-colors"
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
