'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // Next.js routing ke liye
import { usePathname } from 'next/navigation'; // Current page check karne ke liye
import { IoDocumentTextOutline, IoMenu, IoClose } from "react-icons/io5";

export default function Navbar() {
  const pathname = usePathname(); // Ye batayega ki user kis page par hai (e.g., '/about')
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // 'id' ki zarurat ab nahi hai, sirf 'path' use karenge
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  // Sirf background styling ke liye scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${isScrolled 
        ? 'bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm h-14' 
        : 'bg-white/60 backdrop-blur-md h-16'}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-full">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-1 group">
          <div className="w-6 h-8 text-black rounded-full flex items-center justify-center font-bold text-lg ">
            &lt;/&gt;
          </div>
          <span className="text-lg md:text-xl font-semibold tracking-tight">
            Hemant<span className="text-orange-600">Chauhan</span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <Link // 'a' tag ki jagah Next.js ka Link use kiya hai
                key={link.name}
                href={link.path} // Yahan humne path lagaya hai (e.g., '/about')
                className={`relative px-1 transition duration-300
                ${pathname === link.path // active state check karne ka naya tarika
                  ? 'text-orange-600 font-medium'
                  : 'text-gray-600 hover:text-black'}
                `}
              >
                {link.name}

                {/* underline animation */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-orange-600 transition-all duration-300
                  ${pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}
                  `}
                />
              </Link>
            ))}
          </nav>

          {/* Resume Button */}
          <a
            href="/assets/resume.pdf"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg border border-gray-300 
            hover:border-orange-600 hover:text-orange-600 hover:shadow-md transition duration-300"
          >
            <IoDocumentTextOutline size={16} />
            Resume
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-700"
        >
          {isOpen ? <IoClose size={26} /> : <IoMenu size={26} />}
        </button>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden absolute top-16 right-4 w-64 bg-white/90 backdrop-blur-lg 
          rounded-xl shadow-xl border border-gray-200 transition-all duration-300 origin-top-right
          ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}
          `}
        >
          <div className="flex flex-col p-4 gap-3">
            {navLinks.map((link) => (
              <Link // Yahan bhi Link use kiya hai
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)} // Click karne par menu close hoga
                className={`px-3 py-2 text-sm rounded-md transition
                ${pathname === link.path
                  ? 'bg-orange-50 text-orange-600'
                  : 'text-gray-700 hover:bg-gray-100'}
                `}
              >
                {link.name}
              </Link>
            ))}

            <a
              href="/assets/resume.pdf"
              className="mt-2 px-4 py-2 bg-orange-600 text-white rounded-lg text-sm text-center hover:bg-orange-700 transition"
            >
              Resume
            </a>
          </div>
        </div>

      </div>
    </header>
  );
}