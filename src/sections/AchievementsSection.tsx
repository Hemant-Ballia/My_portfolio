'use client';

import { motion } from 'framer-motion';

const achievements = [
    {
        title: 'Python Full Stack Certification – IIT Patna · 2023',
    },
    {
        title: 'Hack-n-Tech Finalist – IIT Patna · 2022',
    },
    {
        title: 'ISRO Remote Sensing Workshop – 2021',
    },
    {
        title: 'Google Arcade Challenge – Completed · 2023',
    },
    {
        title: 'Open Source Contributor – GitHub · 2022–2024',
    },
    {
        title: 'Inspire Award – DST, Govt. of India · 2018',
        link: '/assets/certificates/inspire.pdf',
    },
];

export default function AchievementsSection() {
    return (
        <section className="max-w-5xl mx-auto px-6 py-20 font-nunito bg-slate-50 dark:bg-[#0d1117]">
            <motion.h2
                initial={ { opacity: 0, y: -20 } }
                animate={ { opacity: 1, y: 0 } }
                transition={ { duration: 0.5 } }
                className="text-4xl font-bold text-center mb-16 font-grotesk text-gray-900 dark:text-white"
            >
                🏆 Achievements & Certifications
            </motion.h2>

            <div className="space-y-6">
                { achievements.map((item, i) => (
                    <motion.div
                        key={ item.title }
                        initial={ { opacity: 0, x: -20 } }
                        whileInView={ { opacity: 1, x: 0 } }
                        viewport={ { once: true } }
                        transition={ { duration: 0.5, delay: i * 0.1 } }
                        className="bg-white dark:bg-[#0d1117]/60 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-xl p-5 shadow-md hover:shadow-emerald-500/20 transition-all duration-300"
                    >
                        <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white font-montserrat">
                            { item.title }
                        </h3>
                        { item.link && (
                            <a
                                href={ item.link }
                                target="_blank"
                                className="mt-2 inline-block text-emerald-500 underline hover:text-emerald-400 transition-colors text-sm font-poppins"
                            >
                                View Certificate
                            </a>
                        ) }
                    </motion.div>
                )) }
            </div>
        </section>
    );
}
