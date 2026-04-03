'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function StatsSection() {
  const stats = [
    { label: 'Projects Delivered', value: '70+', icon: 'project' },
    { label: 'Code Commits', value: '1,500+', icon: 'commit' },
    { label: 'Happy Clients', value: '30+', icon: 'users' },
    { label: 'Years of Experience', value: '3+', icon: 'calendar' },
  ];

  const icons: Record<string, React.ReactNode> = {
    project: (
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    ),
    commit: (
      <>
        <circle cx="12" cy="12" r="3" />
        <line x1="12" y1="21" x2="12" y2="15" />
        <line x1="4.22" y1="4.22" x2="8.46" y2="8.46" />
        <line x1="15.54" y1="15.54" x2="19.78" y2="19.78" />
      </>
    ),
    users: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </>
    ),
  };

  return (
    <section className="relative w-full py-20 px-6 lg:px-16 bg-white overflow-hidden">
      {/* Background Subtle Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4"
          >
            My Reach & <span className="text-[#E65100]">Impact.</span>
          </motion.h2>
          <motion.div 
             initial={{ width: 0 }}
             whileInView={{ width: "80px" }}
             className="h-1 bg-[#E65100] mx-auto rounded-full mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-2xl mx-auto text-slate-500 font-medium"
          >
            From solo founders to global teams, my work as an <span className="text-slate-900 font-bold">INSPIRE Scholar</span> has empowered creators across India.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group text-center p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl hover:border-[#E65100]/20 transition-all duration-500"
            >
              <div className="mb-4 flex justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  className="text-[#E65100] w-12 h-12 group-hover:scale-110 transition-transform duration-300"
                  viewBox="0 0 24 24"
                >
                  {icons[stat.icon]}
                </svg>
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
                {stat.value}
              </h3>
              <p className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-[0.15em] mt-3">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative divider for the next section */}
      <div className="max-w-4xl mx-auto mt-20 border-t border-slate-100"></div>
    </section>
  );
}