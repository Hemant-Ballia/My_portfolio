'use client';

import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font bg-white/60 backdrop-blur-md border-t border-gray-200/50">
      <div className="container px-5 py-6 mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-1 group">
          <div className="w-6 h-8 text-black rounded-full flex items-center justify-center font-bold text-lg">
            &lt;/&gt;
          </div>
          <span className="text-lg md:text-xl font-semibold tracking-tight">
            Hemant<span className="text-orange-600">Chauhan</span>
          </span>
        </Link>

        {/* COPYRIGHT */}
        <p className="text-sm text-gray-500 flex items-center justify-center">
          © {new Date().getFullYear()} — Made with 
          <FaHeart className="text-red-500 mx-1.5 animate-pulse" />
        </p>

        {/* SOCIAL LINKS */}
        <div className="flex items-center gap-5 justify-center sm:justify-end">
          {/* Gmail */}
          <a 
            href="mailto:hemantchauhan22170@gmail.com" 
            className="hover:scale-110 transition-transform duration-300"
            aria-label="Email"
          >
            <svg viewBox="0 0 36 36" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path fill="#4285F4" d="M3.23 28.5C3.23 29.88 4.35 31 5.73 31H10.5V16L3.23 10.5V28.5Z" />
              <path fill="#34A853" d="M32.77 28.5C32.77 29.88 31.65 31 30.27 31H25.5V16L32.77 10.5V28.5Z" />
              <path fill="#EA4335" d="M25.5 16V5.5C25.5 4.32 24.18 3.63 23.21 4.35L18 8.25L12.79 4.35C11.82 3.63 10.5 4.32 10.5 5.5V16L18 21.75L25.5 16Z" />
              <path fill="#FBBC04" d="M32.77 10.5L25.5 16V5.5C25.5 4.32 26.82 3.63 27.79 4.35L32.77 8.1V10.5Z" />
              <path fill="#C5221F" d="M3.23 10.5L10.5 16V5.5C10.5 4.32 9.18 3.63 8.21 4.35L3.23 8.1V10.5Z" />
            </svg>
          </a>

          {/* GitHub */}
          <a 
            href="https://github.com/Hemant-Ballia" 
            target="_blank" 
            className="text-[#181717] hover:scale-110 transition-transform duration-300"
          >
            <FaGithub size={22} />
          </a>

          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/hemant-chauhan-839a41322/" 
            target="_blank" 
            className="text-[#0A66C2] hover:scale-110 transition-transform duration-300"
          >
            <FaLinkedin size={22} />
          </a>

          {/* LeetCode */}
          <a 
            href="https://leetcode.com/u/Hemant_009/" 
            target="_blank" 
            className="text-[#FFA116] hover:scale-110 transition-transform duration-300"
          >
            <SiLeetcode size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}
