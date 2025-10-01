'use client';

import { motion } from 'framer-motion';

// --- Chhote se icon components ---
const TrophyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500 flex-shrink-0">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
);

const CertificateLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="inline-block ml-1 transition-transform group-hover:translate-x-0.5">
        <path d="m9 18 6-6-6-6" />
    </svg>
);


export default function AchievementsSection() {
    const achievements = [
        {
            title: 'Foundation Certificate in CS & Data Analytics',
            issuer: 'IIT Patna · 2025'
        },
        {
            title: 'Hack-n-Tech Hackathon Finalist',
            issuer: 'IIT Patna · 2025'
        },
        {
            title: 'ISRO Remote Sensing & GIS Workshop',
            issuer: 'IIRS Dehradun · 2024'
        },
        {
            title: 'Google Cloud Arcade Challenge Facilitator',
            issuer: 'Google Cloud · 2025'
        },
        {
            title: 'Open Source Contributor',
            issuer: 'GitHub · 2025–2026'
        },
        {
            title: 'Inspire Award MANAK',
            issuer: 'DST, Govt. of India · 2023',
            link: '/assets/certificates/inspire.pdf',
        },
    ];

    return (
        // SUDHAR 1: Full-width section aur responsive padding
        <section className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-100 dark:bg-[#111827] transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={ { opacity: 0, y: -20 } }
                    whileInView={ { opacity: 1, y: 0 } }
                    viewport={ { once: true } }
                    transition={ { duration: 0.5 } }
                    // SUDHAR 2: Responsive font size aur consistent font family
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 font-sans text-gray-900 dark:text-white"
                >
                    Achievements & Certifications
                </motion.h2>

                {/* SUDHAR 3: Responsive 2-column grid layout */ }
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    { achievements.map((item, i) => (
                        <motion.div
                            key={ item.title }
                            initial={ { opacity: 0, y: 20 } }
                            whileInView={ { opacity: 1, y: 0 } }
                            viewport={ { once: true } }
                            transition={ { duration: 0.5, delay: i * 0.1 } }
                            // SUDHAR 4: Consistent "glass" design
                            className="flex items-start gap-4 p-5 bg-white/50 dark:bg-slate-900/50 backdrop-blur-lg border border-slate-200 dark:border-slate-800 rounded-xl shadow-md hover:shadow-yellow-500/20 transition-all duration-300 hover:-translate-y-1"
                        >
                            <TrophyIcon />
                            <div className="flex-1">
                                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white font-sans">
                                    { item.title }
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 font-sans">{ item.issuer }</p>
                                { item.link && (
                                    <a
                                        href={ item.link }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={ `Download certificate for ${item.title}` }
                                        className="group mt-2 inline-flex items-center text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                                    >
                                        View Certificate <CertificateLinkIcon />
                                    </a>
                                ) }
                            </div>
                        </motion.div>
                    )) }
                </div>
            </div>
            <hr className="w-full h-px my-10 bg-white/10 backdrop-blur-sm border-0" />

        </section>
    );
}