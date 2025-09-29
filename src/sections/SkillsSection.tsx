'use client';

import { motion } from 'framer-motion';
import {
    FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaDocker, FaAws
} from 'react-icons/fa';
import {
    SiNextdotjs, SiTailwindcss, SiTypescript, SiMongodb, SiMysql, SiPandas,
    SiNumpy, SiScikitlearn, SiTensorflow
} from 'react-icons/si';

const skills = [
    { name: 'React.js', icon: <FaReact className="text-cyan-400" />, level: 'Advanced' },
    { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" />, level: 'Intermediate' },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600" />, level: 'Intermediate' },
    { name: 'Express.js', icon: <FaNodeJs className="text-gray-700 dark:text-gray-300" />, level: 'Intermediate' },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-500" />, level: 'Intermediate' },
    { name: 'MySQL', icon: <SiMysql className="text-blue-600" />, level: 'Beginner' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" />, level: 'Advanced' },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" />, level: 'Intermediate' },
    { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" />, level: 'Advanced' },
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" />, level: 'Advanced' },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" />, level: 'Advanced' },
    { name: 'Git & GitHub', icon: <FaGitAlt className="text-red-500" />, level: 'Intermediate' },
    { name: 'Docker', icon: <FaDocker className="text-blue-400" />, level: 'Beginner' },
    { name: 'AWS Basics', icon: <FaAws className="text-orange-400" />, level: 'Beginner' },
    { name: 'Python', icon: <FaPython className="text-yellow-400" />, level: 'Intermediate' },
    { name: 'NumPy', icon: <SiNumpy className="text-indigo-500" />, level: 'Intermediate' },
    { name: 'Pandas', icon: <SiPandas className="text-black dark:text-white" />, level: 'Intermediate' },
    { name: 'Scikit-learn', icon: <SiScikitlearn className="text-blue-600" />, level: 'Intermediate' },
    { name: 'TensorFlow', icon: <SiTensorflow className="text-orange-500" />, level: 'Beginner' },
];

const levelColors: Record<string, string> = {
    Beginner: 'bg-red-500',
    Intermediate: 'bg-yellow-500',
    Advanced: 'bg-emerald-600',
};

export default function SkillsSection() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-20 font-nunito bg-slate-50 dark:bg-[#0d1117]">
            <motion.h2
                initial={ { opacity: 0, y: -20 } }
                animate={ { opacity: 1, y: 0 } }
                transition={ { duration: 0.5 } }
                className="text-4xl font-bold text-center mb-12 font-grotesk text-gray-900 dark:text-white"
            >
                🧠 Skill Proficiency Overview
            </motion.h2>

            <motion.div
                initial={ { opacity: 0, y: 30 } }
                animate={ { opacity: 1, y: 0 } }
                transition={ { duration: 0.6 } }
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
            >
                { skills.map((skill) => (
                    <div
                        key={ skill.name }
                        aria-label={ `${skill.name} - ${skill.level} proficiency` }
                        className="flex flex-col items-center justify-center bg-white dark:bg-[#0d1117]/60 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-xl p-5 shadow-md hover:shadow-indigo-500/20 transition-all duration-300"
                    >
                        <div className="text-3xl mb-2">{ skill.icon }</div>
                        <p className="text-sm text-center text-gray-800 dark:text-gray-200 font-montserrat">
                            { skill.name }
                        </p>
                        <span
                            className={ `mt-2 px-2 py-1 text-xs rounded-full text-white font-poppins ${levelColors[skill.level]}` }
                        >
                            { skill.level }
                        </span>
                    </div>
                )) }
            </motion.div>
        </section>
    );
}
