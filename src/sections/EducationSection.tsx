'use client';

import { motion } from 'framer-motion';

// --- Chhota sa icon component "View Certificate" link ke liye ---
const CertificateIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block ml-1">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
);

export default function EducationSection() {
    const educationItems = [
        {
            title: 'Foundation Certificate in Computer Science & Data Analytics',
            institution: 'Indian Institute of Technology (IIT) Patna',
            date: '2024 - Present',
            details: [
                'Successfully completed Foundation Level Credit Requirements in CS & Data Analytics.',
                'Verified by IIT Patna · Access Code: GZr5SrdxKy',
            ],
            link: 'https://cet.iitp.ac.in/moodle/mod/customcert/verify_certificate.php',
        },
        {
            title: 'Class 12th – Intermediate Examination',
            institution: 'S.S. Deo Inter College, Pakari, Ballia · UP Board · Science Stream',
            date: 'Year: 2023',
            details: [
                'Achieved First Division (Honours) with a total of 436/500 marks.',
                'Core Subjects: Physics, Chemistry, Mathematics.',
            ],
            link: '/assets/certificates/12th result.pdf',
        },
        {
            title: 'Class 10th – High School Examination',
            institution: 'S.S. Deo Inter College, Pakari, Ballia · UP Board',
            date: 'Year: 2021',
            details: [
                'Graduated with First Division.',
                'Core Subjects: Science, Mathematics, Social Science.',
            ],
            link: '/assets/certificates/class-10th_hemant.pdf',
        },
    ];

    return (
        // SUDHAR 1: Full-width section aur responsive padding
        <section className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#111827] transition-colors duration-300">
            <div className="max-w-5xl mx-auto">
                <motion.h2
                    initial={ { opacity: 0, y: -20 } }
                    whileInView={ { opacity: 1, y: 0 } }
                    viewport={ { once: true } }
                    transition={ { duration: 0.5 } }
                    // SUDHAR 2: Responsive font size aur consistent font family
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 font-sans text-gray-900 dark:text-white"
                >
                    Education & Credentials
                </motion.h2>

                {/* SUDHAR 3: Professional Timeline Layout */ }
                <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-4">
                    { educationItems.map((item, index) => (
                        <motion.div
                            key={ item.title }
                            initial={ { opacity: 0, x: -30 } }
                            whileInView={ { opacity: 1, x: 0 } }
                            viewport={ { once: true } }
                            transition={ { duration: 0.6, delay: index * 0.2 } }
                            className="mb-10 ml-10"
                        >
                            {/* Timeline Dot */ }
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-emerald-200 rounded-full -left-3 ring-8 ring-white dark:ring-slate-900 dark:bg-emerald-900">
                                <span className="w-3 h-3 bg-emerald-500 rounded-full"></span>
                            </span>

                            {/* Timeline Card */ }
                            <div className="p-6 bg-white/50 dark:bg-slate-900/50 backdrop-blur-lg border border-slate-300 dark:border-slate-800 rounded-xl shadow-lg hover:shadow-emerald-500/20 transition-shadow duration-300">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white font-sans">
                                        { item.title }
                                    </h3>
                                    <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-0.5 rounded-full dark:bg-emerald-900 dark:text-emerald-300 ml-3">
                                        { item.date }
                                    </span>
                                </div>
                                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-sans mb-3">
                                    { item.institution }
                                </p>
                                <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1.5 font-sans">
                                    { item.details.map((detail) => (
                                        <li key={ detail }>{ detail }</li>
                                    )) }
                                    <li>
                                        <a
                                            href={ item.link }
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={ `View certificate for ${item.title}` }
                                            className="font-semibold text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center"
                                        >
                                            View Certificate <CertificateIcon />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    )) }
                </div>
            </div>
            <hr className="w-full h-px my-10 bg-white/10 backdrop-blur-sm border-0" />

        </section>
    );
}