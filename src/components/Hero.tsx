'use client';

import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white px-6 pt-24 selection:bg-orange-200 overflow-hidden">
      
      {/* Changes made:
        1. 'object-top' add kiya hai: Isse person ka head nahi katega, image upar se align hogi.
        2. opacity-20 ki hai: White background par image ek subtle watermark ki tarah dikhegi.
      */}
    {/* Changes made:
        'object-top' ko hatakar 'object-[center_40%]' kiya hai.
        Iska matlab hai image horizontally center rahegi, aur vertically top se 40% par focus karegi jahan person ka chehra hai.
      */}
      <img 
        src="/1.webp" 
        alt="Developer Workspace Background" 
        className="absolute top-0 left-0 w-full h-full object-cover object-[center_40%] opacity-20 z-0 pointer-events-none"
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-3xl text-center space-y-8">
        
        {/* Main Heading - Text color dark kar diya hai taaki white bg par padha ja sake */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
          Building clean & scalable <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
            web experiences
          </span>
        </h1>

        {/* Subline - Text color text-gray-700 */}
        <p className="max-w-2xl mx-auto text-gray-700 text-lg sm:text-xl leading-relaxed">
          I'm <span className="font-semibold text-gray-900">Hemant Chauhan</span>, 
          a MERN & Next.js developer focused on solving real-world problems 
          with efficient and user-friendly solutions.
        </p>

        {/* Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 bg-orange-600 text-white rounded-lg text-sm font-semibold shadow-md shadow-orange-600/20 hover:bg-orange-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 border-2 border-gray-300 text-gray-900 bg-white/50 backdrop-blur-sm rounded-lg text-sm font-semibold hover:border-gray-400 hover:bg-white hover:-translate-y-0.5 transition-all duration-200"
          >
            Contact Me
          </a>
        </div>

        {/* Social Icons - White bg ke hisaab se hover effects update kiye hain */}
        <div className="pt-8 flex justify-center gap-6 items-center">
          <a
            href="https://github.com/Hemant-Ballia"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-3 text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110"
          >
            <FaGithub size={28} />
          </a>

          <a
            href="https://www.linkedin.com/in/hemant-chauhan-839a41322/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-3 text-[#0A66C2] hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110"
          >
            <FaLinkedin size={28} />
          </a>

          <a
            href="https://leetcode.com/u/Hemant_009/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode Profile"
            className="p-3 text-[#FFA116] hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,161,22,0.4)]"
          >
            <SiLeetcode size={28} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;