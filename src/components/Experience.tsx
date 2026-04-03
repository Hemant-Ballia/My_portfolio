"use client";
import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    role: "Software Development Intern",
    company: "Digital Dreams Systems",
    location: "Prayagraj, India",
    duration: "Mar 2026 – Present",
    description: [
      "Developing full-stack web applications using MERN stack (MongoDB, Express, React, Node.js).",
      "Building and maintaining RESTful APIs and reusable UI components.",
      "Optimizing performance in an agile development environment."
    ],
    skills: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
    type: "Tech"
  },
  {
    id: 2,
    role: "HR Executive",
    company: "Kotak Mahindra Life Insurance",
    location: "Allahabad, India",
    duration: "Dec 2025 – Present",
    description: [
      "Managing end-to-end payroll processing and employee data management.",
      "Ensuring 100% accuracy in data entry and compliance with HR policies.",
      "Streamlining workflows using advanced data reporting tools."
    ],
    skills: ["Payroll", "Data Management", "Advanced Excel"],
    type: "Management"
  },
  {
    id: 3,
    role: "Mentor & Contributor",
    company: "NexFellow",
    location: "Remote",
    duration: "Aug 2025 – Present",
    description: [
      "Leading 10+ students in full-stack development and open-source workflows.",
      "Resolved critical bugs in community projects using MERN stack.",
      "Collaborated via GitHub to merge high-impact code changes."
    ],
    skills: ["Mentorship", "Open Source", "GitHub"],
    type: "Community"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight"
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-500">Professional Path</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-500 mt-4 text-lg"
          >
            A timeline of my journey from learning to leading.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-dashed border-slate-200 ml-4 md:ml-20">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-16 ml-10 relative"
            >
              {/* Timeline Indicator */}
              <div className="absolute -left-[54px] top-0 w-10 h-10 bg-white border-4 border-orange-500 rounded-full z-10 flex items-center justify-center shadow-lg shadow-orange-100">
                <div className="w-3 h-3 bg-orange-600 rounded-full animate-pulse"></div>
              </div>

              {/* Modern Glass Card */}
              <div className="group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-20px_rgba(249,115,22,0.15)] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                
                {/* Decorative Background Gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-[100px] -z-10 group-hover:bg-orange-100 transition-colors duration-500"></div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                      {exp.type}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2">
                      {exp.role}
                    </h3>
                    <p className="text-xl font-semibold text-slate-600">
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="inline-block px-4 py-2 bg-slate-900 text-white rounded-2xl text-sm font-medium shadow-lg">
                      {exp.duration}
                    </div>
                    <p className="text-slate-400 text-xs mt-2 font-medium uppercase tracking-wider">
                      📍 {exp.location}
                    </p>
                  </div>
                </div>

                {/* Description Points */}
                <div className="space-y-4 mb-8">
                  {exp.description.map((point, i) => (
                    <div key={i} className="flex items-start gap-4 text-slate-600">
                      <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0"></div>
                      <p className="text-base md:text-lg leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>

                {/* Interactive Skills Badges */}
                <div className="flex flex-wrap gap-3">
                  {exp.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-4 py-1.5 bg-slate-50 border border-slate-100 text-slate-600 text-xs font-bold rounded-xl group-hover:border-orange-200 group-hover:text-orange-600 transition-all cursor-default shadow-sm"
                    >
                      #{skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;