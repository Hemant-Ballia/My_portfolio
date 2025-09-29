'use client';

import { motion } from 'framer-motion';

export default function EducationSection() {
    const educationItems = [
        {
            title: 'Foundation Certificate in Computer Science & Data Analytics',
            institution: 'Indian Institute of Technology (IIT) Patna',
            date: 'Admission Year: 2024 · Issued: September 10, 2025',
            details: [
                'Successfully completed Foundation Level Credit Requirements',
                'Program: Computer Science and Data Analytics',
                'Roll Number: 24A12RES941',
                'Verified by IIT Patna · Access Code: GZr5SrdxKy',
            ],
            link: 'https://cet.iitp.ac.in/moodle/mod/customcert/verify_certificate.php',
        },
        {
            title: 'Class 12th – Intermediate Examination',
            institution: 'S.S. Deo Inter College, Pakari, Ballia · UP Board · Science Stream',
            date: 'Year: 2023 · Result: First Division (Honours)',
            details: [
                'Subjects: Hindi, English, Mathematics, Physics, Chemistry, Moral & Physical Education',
                'Total Marks: 436 / 500',
                'Verified by: Dibyakant Shukla (Exam Controller)',
            ],
            link: '/assets/certificates/12th result.pdf',
        },
        {
            title: 'Class 10th – High School Examination',
            institution: 'S.S. Deo Inter College, Pakari, Ballia · UP Board',
            date: 'Year: 2021 · Result: First Division',
            details: [
                'Subjects: Hindi, English, Science, Mathematics, Social Science',
                'Verified by UP Board',
            ],
            link: '/assets/certificates/class-10th_hemant.pdf',
        },
    ];

    return (
        <section className="max-w-5xl mx-auto px-6 py-20 font-nunito bg-slate-50 dark:bg-[#0d1117]">
            <motion.h2
                initial={ { opacity: 0, y: -20 } }
                animate={ { opacity: 1, y: 0 } }
                transition={ { duration: 0.5 } }
                className="text-4xl font-bold text-center mb-16 font-grotesk text-gray-900 dark:text-white"
            >
                🎓 Education
            </motion.h2>

            <div className="space-y-12">
                { educationItems.map((item, index) => (
                    <motion.div
                        key={ item.title }
                        initial={ { opacity: 0, y: 30 } }
                        whileInView={ { opacity: 1, y: 0 } }
                        viewport={ { once: true } }
                        transition={ { duration: 0.6, delay: index * 0.2 } }
                        className="relative bg-white dark:bg-[#0d1117]/60 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-emerald-500/20 transition-all duration-300"
                    >
                        {/* Accent strip */ }
                        <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-t-2xl" />

                        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white font-montserrat mb-2">
                            { item.title }
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1 font-poppins">
                            { item.institution }
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-poppins">
                            { item.date }
                        </p>
                        <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1 font-nunito">
                            { item.details.map((detail) => (
                                <li key={ detail }>{ detail }</li>
                            )) }
                            <li>
                                <a
                                    href={ item.link }
                                    target="_blank"
                                    className="text-emerald-500 underline hover:text-emerald-400 transition-colors"
                                >
                                    View Certificate
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                )) }
            </div>
        </section>
    );
}
