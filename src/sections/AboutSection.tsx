'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaChartBar, FaRocket } from 'react-icons/fa';

const stats = [
  { icon: <FaLaptopCode size={18} />, label: "Full Stack Dev" },
  { icon: <FaChartBar size={18} />, label: "Data Analytics" },
  { icon: <FaRocket size={18} />, label: "Scalable Apps" }
];

export default function AboutSection() {
  return (
    <section id="about" className="w-full min-h-screen bg-white flex flex-col items-center py-20 px-6 overflow-hidden">
      
      <div className="w-full max-w-7xl mx-auto">
        
        {/* --- HEADER (Animated) --- */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 border-l-4 border-orange-600 pl-6"
        >
          <span className="text-orange-600 font-bold tracking-widest uppercase text-xs block mb-2">
            01. Background
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
            Who is <span className="text-orange-600">Hemant?</span>
          </h2>
        </motion.div>

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center">
          
          {/* PHOTO - Left Side (Animated) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-5 flex justify-center md:justify-start"
          >
            <div className="relative group w-full max-w-[450px]">
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-orange-200 rounded-2xl z-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <div className="relative z-10 overflow-hidden rounded-2xl bg-gray-100 aspect-[4/5] shadow-2xl border border-gray-100">
                <Image 
                  src="/Hemantabout.jpg" 
                  alt="Hemant Chauhan"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* TEXT - Right Side (Animated) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-7 space-y-8"
          >
            <h3 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
              Building solutions that <span className="text-orange-600">actually work.</span>
            </h3>

            <div className="space-y-6 text-gray-600 text-lg md:text-xl leading-relaxed">
              <p>
                From securing a spot in the national top 1% as an <span className="text-gray-900 font-bold">INSPIRE scholar</span> to pursuing my B.Sc. in CSDA at IIT Patna, my journey has always been driven by a deep curiosity for logic and problem-solving.
              </p>
              
              <p>
                I specialize in bridging the gap between robust architecture and intelligent systems. With a strong command over the <span className="text-gray-900 font-bold underline decoration-orange-300 decoration-4">MERN stack, Next.js, and Tailwind CSS</span>, I build clean, high-performance web applications. Beyond the frontend, my foundation in <span className="text-gray-900 font-bold">Data Analytics</span> empowers me to integrate data-driven insights seamlessly into my projects.
              </p>

              <p>
                When I am not optimizing algorithms or crafting user experiences, I spend my time mentoring peers at <span className="text-gray-900 font-bold">NexFellow</span>, helping others navigate their tech journeys and continuously learning new ways to build impactful solutions.
              </p>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-4 p-5 bg-gray-50 rounded-xl border border-transparent hover:border-orange-200 hover:bg-white transition-all shadow-sm">
                  <div className="text-orange-600">{stat.icon}</div>
                  <span className="text-[10px] md:text-xs font-black text-gray-900 uppercase tracking-widest">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}