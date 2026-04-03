'use client';

import React from 'react';
import { motion } from 'framer-motion';

// --- REAL ICONS WITH ORIGINAL COLORS ---
import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython, FaGitAlt, FaGithub, FaLinux 
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, SiCplusplus, SiPandas, SiNumpy, SiScikitlearn, SiTensorflow 
} from 'react-icons/si';

// Categorized Skills Array
const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", icon: <FaReact className="text-[#61DAFB]" />, level: "Advanced" },
      { name: "Next.js", icon: <SiNextdotjs className="text-gray-900" />, level: "Intermediate" },
      { name: "JavaScript", icon: <FaJsSquare className="text-[#F7DF1E]" />, level: "Advanced" },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" />, level: "Advanced" },
      { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" />, level: "Advanced" },
      { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" />, level: "Advanced" },
    ]
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" />, level: "Intermediate" },
      { name: "Express.js", icon: <SiExpress className="text-gray-900" />, level: "Intermediate" },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" />, level: "Intermediate" },
      { name: "C++", icon: <SiCplusplus className="text-[#00599C]" />, level: "Intermediate" },
    ]
  },
  {
    title: "Data Analytics & ML",
    skills: [
      { name: "Python", icon: <FaPython className="text-[#3776AB]" />, level: "Advanced" },
      { name: "Pandas", icon: <SiPandas className="text-[#150458]" />, level: "Intermediate" },
      { name: "NumPy", icon: <SiNumpy className="text-[#013243]" />, level: "Intermediate" },
      { name: "Scikit-Learn", icon: <SiScikitlearn className="text-[#F7931E]" />, level: "Beginner" },
      { name: "TensorFlow", icon: <SiTensorflow className="text-[#FF6F00]" />, level: "Beginner" },
    ]
  },
  {
    title: "Tools & Environment",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-[#F05032]" />, level: "Advanced" },
      { name: "GitHub", icon: <FaGithub className="text-gray-900" />, level: "Advanced" },
      { name: "Linux", icon: <FaLinux className="text-gray-900" />, level: "Intermediate" },
    ]
  }
];

// Clean pill badges based on level
const getBadgeStyle = (level: string) => {
  switch (level) {
    case "Advanced":
      return "bg-orange-100/80 text-orange-700";
    case "Intermediate":
      return "bg-blue-50/80 text-blue-700";
    case "Beginner":
      return "bg-gray-100/80 text-gray-600";
    default:
      return "bg-gray-100/80 text-gray-600";
  }
};

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-24 px-6 lg:px-16 min-h-screen flex items-center relative z-10">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* --- REFINED HUMAN-TOUCH HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-gray-200/50 pb-10">
          
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="w-12 h-[2px] bg-orange-600"></div>
              <span className="text-orange-600 font-bold tracking-[0.15em] uppercase text-xs">
                Skills & Technologies
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight"
            >
              What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">work with.</span>
            </motion.h2>
          </div>

          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-base md:text-lg max-w-sm md:text-right leading-relaxed font-medium"
          >
            A look at the languages, frameworks, and tools I use on a daily basis to build efficient and scalable web applications.
          </motion.p>
          
        </div>

        {/* --- DASHBOARD STYLE GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, ease: "easeOut" }}
              className="bg-white/60 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-gray-200/50 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-6 bg-orange-500 rounded-full"></div>
                <h3 className="text-xl font-bold text-gray-900">
                  {cat.title}
                </h3>
              </div>

              <div className="flex flex-col gap-3">
                {cat.skills.map((skill, sIdx) => (
                  <div 
                    key={sIdx}
                    className="group flex items-center justify-between p-3 rounded-xl hover:bg-white/80 hover:shadow-sm border border-transparent hover:border-orange-200/50 transition-all duration-200"
                  >
                    <div className="flex items-center gap-4">
                      {/* ICON BADA KIYA HAI (w-12 h-12 aur text-3xl) */}
                      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/50 border border-gray-100 group-hover:bg-white group-hover:shadow-sm transition-all duration-200 text-3xl drop-shadow-sm">
                        {skill.icon}
                      </div>
                      {/* NAAM CHHOTA KIYA HAI (text-xs) */}
                      <span className="text-xs font-semibold text-gray-800 uppercase tracking-wide">
                        {skill.name}
                      </span>
                    </div>
                    <span className={`text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider ${getBadgeStyle(skill.level)}`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}