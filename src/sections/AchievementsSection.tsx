'use client';

import { motion } from 'framer-motion';
import { FaTrophy, FaAward, FaGithub, FaGraduationCap } from 'react-icons/fa';
import { SiGooglecloud } from 'react-icons/si';

export default function AchievementsSection() {
    // Real icons aur unke original colors ke saath
    const achievements = [
        {
            title: 'Foundation Certificate in CS & Data Analytics',
            issuer: 'IIT Patna',
            year: '2025',
            icon: <FaGraduationCap className="text-slate-800" />, // Standard Black/Slate
            link: 'https://cet.iitp.ac.in/moodle/mod/customcert/verify_certificate.php'
        },
        {
            title: 'Hack-n-Tech Hackathon Finalist',
            issuer: 'IIT Patna',
            year: '2025',
            icon: <FaTrophy className="text-yellow-500" /> // Real Gold/Yellow Trophy
        },
        {
            title: 'ISRO Remote Sensing & GIS Workshop',
            issuer: 'IIRS Dehradun',
            year: '2024',
            icon: <FaAward className="text-blue-600" /> // Standard Blue for ISRO/Tech
        },
        {
            title: 'Google Cloud Arcade Legend Tier (85 Points)',
            issuer: 'Google Cloud',
            year: '2025',
            icon: <SiGooglecloud className="text-[#4285F4]" /> // Original Google Cloud Blue
        },
        {
            title: 'Open Source Contributor',
            issuer: 'GitHub',
            year: '2025–2026',
            icon: <FaGithub className="text-black" /> // Original GitHub Black
        },
        {
            title: 'Inspire Scholarship (Top 1% UP Board)',
            issuer: 'DST, Govt. of India',
            year: '2023',
            icon: <FaTrophy className="text-yellow-500" />, // Real Gold Trophy
            link: '/assets/certificates/inspire.pdf',
        },
    ];

    return (
        <section className="w-full py-24 md:py-32 px-6 lg:px-16 bg-white min-h-screen flex flex-col justify-center">
            <div className="max-w-7xl mx-auto w-full">
                
                {/* --- SECTION HEADER --- */}
                <div className="mb-20 flex flex-col items-center text-center">
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <div className="h-[2px] w-8 md:w-16 bg-black"></div>
                        <span className="font-syne text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-[#FF9933]">
                            Milestones
                        </span>
                        <div className="h-[2px] w-8 md:w-16 bg-black"></div>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="font-syne text-4xl md:text-6xl lg:text-7xl font-extrabold text-black tracking-tighter"
                    >
                        Honors & <span className="text-[#FF9933] italic">Awards.</span>
                    </motion.h2>
                </div>

                {/* --- BENTO GRID FOR ACHIEVEMENTS --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {achievements.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                            className="group flex flex-col justify-between p-8 bg-white border-2 border-black/5 rounded-[2rem] shadow-sm hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-300 cursor-default"
                        >
                            <div>
                                <div className="flex items-start justify-between mb-6">
                                    {/* Real Icon Container (Simple and Clean) */}
                                    <div className="text-3xl drop-shadow-sm">
                                        {item.icon}
                                    </div>
                                    <span className="bg-slate-50 border border-slate-200 px-3 py-1 rounded-lg font-sans text-[10px] font-black uppercase tracking-widest text-slate-500">
                                        {item.year}
                                    </span>
                                </div>
                                
                                <h3 className="text-xl font-syne font-black text-black leading-tight mb-3">
                                    {item.title}
                                </h3>
                                
                                <p className="text-sm font-sans font-bold text-slate-500 uppercase tracking-widest">
                                    {item.issuer}
                                </p>
                            </div>

                            {/* View Certificate CTA (Simple Black Link) */}
                            {item.link ? (
                                <div className="mt-8 pt-6 border-t-2 border-slate-100">
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/link inline-flex items-center text-[11px] font-syne font-black uppercase tracking-[0.2em] text-slate-500 hover:text-black transition-colors"
                                    >
                                        View Credential 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="inline-block ml-1 transition-transform duration-300 group-hover/link:translate-x-1">
                                            <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            ) : (
                                <div className="mt-8 pt-6 border-t-2 border-transparent"></div>
                            )}
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}