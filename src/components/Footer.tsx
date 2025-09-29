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
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-tr from-[#071024] to-[#020617] text-white border-t border-gray-800">
      {/* subtle overlay behind content (non-interactive) */ }
      <div aria-hidden className="absolute inset-0 bg-white/3 dark:bg-black/6 backdrop-blur-sm z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {/* Branding */ }
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-gray-700">
                <Image
                  src="/assets/pic.jpg"
                  alt="Hemant Chauhan"
                  width={ 48 }
                  height={ 48 }
                  className="object-cover"
                />
              </div>
              <span className="text-lg sm:text-xl font-semibold">Hemant Chauhan</span>
            </Link>
            <p className="mt-3 text-sm text-gray-300 max-w-[20rem] sm:max-w-[18rem]">
              Building modern, responsive, and user-friendly web applications. Focused on aesthetics, performance and accessibility.
            </p>
          </div>

          {/* Quick Links */ }
          <div>
            <h3 className="font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2">
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

          {/* Contact */ }
          <div>
            <h3 className="font-semibold text-white mb-3">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>📍 Ballia, Uttar Pradesh, India</li>
              <li>
                <a
                  href="mailto:hemantchauhan22170@gmail.com"
                  className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
                >
                  <FiMail size={ 16 } /> <span>hemantchauhan22170@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */ }
          <div>
            <h3 className="font-semibold text-white mb-3">Connect</h3>
            <div className="flex items-center gap-3">
              { socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={ label }
                  href={ href }
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ label }
                  className="p-2 rounded-md bg-white/3 hover:bg-emerald-600 hover:text-white transition-colors"
                >
                  <Icon size={ 18 } />
                </a>
              )) }
            </div>

            <div className="mt-6">
              <Link
                href="/gallery"
                className="inline-block text-sm text-emerald-400 underline hover:text-emerald-500 transition-colors"
              >
                See my journey in pictures →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */ }
        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-sm text-gray-400">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 max-w-4xl mx-auto">
            <p>© { new Date().getFullYear() } Hemant Chauhan. All Rights Reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-emerald-400">Privacy</Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-emerald-400">Terms</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button (mobile & desktop) */ }
      { isVisible && (
        <button
          onClick={ scrollToTop }
          className="fixed bottom-5 right-5 p-3 rounded-full bg-emerald-600 text-white shadow-lg hover:bg-emerald-700 transition-all duration-200 z-50"
          aria-label="Scroll to top"
        >
          <FiArrowUp size={ 18 } />
        </button>
      ) }
    </footer>
  );
}
