'use client';

import { motion } from 'framer-motion';

// --- Icon Components (react-icons ki jagah) ---
// Isse build errors nahi aayenge aur component self-contained rahega.
const FaReact = ({ className }: { className?: string }) => (<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className={ className } height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M440.1 232.5c-11.8-10.7-30.2-10.7-42 0L256 355.4l-142.1-123c-11.8-10.7-30.2-10.7-42 0-11.8 10.7-11.8 28.1 0 38.8L235 413.1c11.8 10.7 30.2 10.7 42 0l163.1-141.8c11.8-10.7 11.8-28.1 0-38.8zM256 64c-11.8 0-21.3 9.5-21.3 21.3v241.3c0 11.8 9.5 21.3 21.3 21.3s21.3-9.5 21.3-21.3V85.3C277.3 73.5 267.8 64 256 64z"></path></svg>);
const FaNodeJs = ({ className }: { className?: string }) => (<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className={ className } height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M439.4 233.4l-208-112c-13.2-7.1-29.6-7.1-42.8 0l-208 112c-13.4 7.2-21.4 21-21.4 35.6v224c0 14.6 8 28.4 21.4 35.6l208 112c13.2 7.1 29.6 7.1 42.8 0l208-112c13.4-7.2 21.4-21 21.4-35.6v-224c0-14.6-8-28.4-21.4-35.6zm-216.5 250.7l-152-81.8v-135l152 81.8v135zm24-152.1L128.6 216l118.3-63.7L364.5 216 247 284.1zM399.9 402.3l-152 81.8v-135l152-81.8v135z"></path></svg>);
const FaPython = ({ className }: { className?: string }) => (<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className={ className } height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M440.1 232.5c-11.8-10.7-30.2-10.7-42 0L256 355.4l-142.1-123c-11.8-10.7-30.2-10.7-42 0-11.8 10.7-11.8 28.1 0 38.8L235 413.1c11.8 10.7 30.2 10.7 42 0l163.1-141.8c11.8-10.7 11.8-28.1 0-38.8zM256 64c-11.8 0-21.3 9.5-21.3 21.3v241.3c0 11.8 9.5 21.3 21.3 21.3s21.3-9.5 21.3-21.3V85.3C277.3 73.5 267.8 64 256 64z"></path></svg>);
const FaHtml5 = ({ className }: { className?: string }) => (<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" className={ className } height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L158 320l34 9.4h.1l34-9.4 3.8-21.2H100.2l-4.2-49.4h198.4l13.6-148.4z"></path></svg>);
const FaCss3Alt = ({ className }: { className?: string }) => (<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className={ className } height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M480 32l-64 368-223.3 80L0 400l19.6-94.8h91.5l-4.4 21.4-2.3 8.6L200 351.6l103.8-31.1 9.4-45.3H152.3l-4.4-21.4-2.4-8.6L224 224h189.3L480 32z"></path></svg>);
const FaJsSquare = ({ className }: { className?: string }) => (<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className={ className } height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 48 21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c-15.2 0-28.7-4.5-40.4-13.5s-17.5-21.8-17.5-38.1c0-17.4 6.3-31.1 18.9-41.2s28.9-15.1 48.4-15.1c15.2 0 27.6 2.7 37.1 8.1 9.6 5.4 16.5 13.5 20.8 24.3l-37.4 13.5c-2.3-4.5-5.2-7.8-8.7-10.2s-8.1-3.6-13.8-3.6c-6.8 0-12.4 2.1-16.7 6.3s-6.5 10.2-6.5 17.7c0 7.8 2.5 13.9 7.4 18.2 5 4.3 11.7 6.5 20.1 6.5 6.2 0 11.6-1.4 16.1-4.2 4.5-2.8 8.3-6.9 11.3-12.3l37.1 14.1c-5.9 15.2-15.6 26.9-29.2 35-13.6 8.1-30.4 12.1-50.4 12.1z"></path></svg>);
const FaGitAlt = ({ className }: { className?: string }) => (<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className={ className } height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M490.66 233.95c-12.72-12.23-33.3-11.8-45.53.94L256 424.3l-41.13-41.13c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25l63.75 63.75c12.5 12.5 32.75 12.5 45.25 0l211.05-211.05c12.22-12.72 11.79-33.3-.95-45.52zM256 0c-141.4 0-256 114.6-256 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.9 0-208-93.1-208-208S141.1 48 256 48s208 93.1 208 208-93.1 208-208 208z"></path></svg>);
const FaDocker = ({ className }: { className?: string }) => (<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" className={ className } height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M448 32H192c-35.3 0-64 28.7-64 64v192h384V96c0-35.3-28.7-64-64-64zM0 352h640v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v-64z"></path></svg>);
const FaAws = ({ className }: { className?: string }) => (<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className={ className } height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 32C114.6 32 0 146.6 0 288s114.6 256 256 256 256-114.6 256-256S397.4 32 256 32zm0 416c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160zm0-224c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64z"></path></svg>);
const SiNextdotjs = ({ className }: { className?: string }) => (<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className={ className } height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.6c-5.302 0-9.6-4.298-9.6-9.6s4.298-9.6 9.6-9.6 9.6 4.298 9.6 9.6-4.298 9.6-9.6 9.6zM9.6 7.2v9.6h2.4V9.6h3.6V7.2H9.6z"></path></svg>);
const SiTailwindcss = ({ className }: { className?: string }) => (<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className={ className } height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zM6.001 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 13.382 14.976 12 12.001 12z"></path></svg>);
const SiTypescript = ({ className }: { className?: string }) => (<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className={ className } height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.6c-5.302 0-9.6-4.298-9.6-9.6s4.298-9.6 9.6-9.6 9.6 4.298 9.6 9.6-4.298 9.6-9.6 9.6zM8.4 8.4h7.2v2.4H12v7.2H9.6V10.8H8.4V8.4z"></path></svg>);
const SiMongodb = ({ className }: { className?: string }) => (<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className={ className } height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.6c-5.302 0-9.6-4.298-9.6-9.6s4.298-9.6 9.6-9.6 9.6 4.298 9.6 9.6-4.298 9.6-9.6 9.6zm-1.2-14.4h2.4v9.6h-2.4v-9.6z"></path></svg>);
const SiMysql = ({ className }: { className?: string }) => (<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className={ className } height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.6c-5.302 0-9.6-4.298-9.6-9.6s4.298-9.6 9.6-9.6 9.6 4.298 9.6 9.6-4.298 9.6-9.6 9.6zM12 4.8c-3.977 0-7.2 3.223-7.2 7.2s3.223 7.2 7.2 7.2 7.2-3.223 7.2-7.2-3.223-7.2-7.2-7.2zm0 12c-2.651 0-4.8-2.149-4.8-4.8s2.149-4.8 4.8-4.8 4.8 2.149 4.8 4.8-2.149 4.8-4.8 4.8z"></path></svg>);
const SiPandas = ({ className }: { className?: string }) => (<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className={ className } height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.6c-5.302 0-9.6-4.298-9.6-9.6s4.298-9.6 9.6-9.6 9.6 4.298 9.6 9.6-4.298 9.6-9.6 9.6zm-2.4-12v7.2h2.4v-7.2h-2.4zm4.8 0v7.2h2.4v-7.2h-2.4z"></path></svg>);
const SiNumpy = ({ className }: { className?: string }) => (<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className={ className } height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.6c-5.302 0-9.6-4.298-9.6-9.6s4.298-9.6 9.6-9.6 9.6 4.298 9.6 9.6-4.298 9.6-9.6 9.6zM8.4 7.2v9.6h7.2v-2.4H10.8v-2.4h4.8V9.6h-4.8V7.2H8.4z"></path></svg>);
const SiScikitlearn = ({ className }: { className?: string }) => (<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className={ className } height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.6c-5.302 0-9.6-4.298-9.6-9.6s4.298-9.6 9.6-9.6 9.6 4.298 9.6 9.6-4.298 9.6-9.6 9.6zm-2.4-14.4h7.2v2.4H9.6V7.2zm0 4.8h7.2v2.4H9.6v-2.4zm0 4.8h7.2v2.4H9.6v-2.4z"></path></svg>);
const SiTensorflow = ({ className }: { className?: string }) => (<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className={ className } height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.6c-5.302 0-9.6-4.298-9.6-9.6s4.298-9.6 9.6-9.6 9.6 4.298 9.6 9.6-4.298 9.6-9.6 9.6zM8.4 8.4h7.2v2.4h-2.4v4.8h-2.4v-4.8H8.4V8.4z"></path></svg>);

const skills = [
    { name: 'React.js', icon: <FaReact className="text-cyan-400" />, level: 'Advanced' },
    { name: 'Next.js', icon: <SiNextdotjs className="dark:text-white text-black" />, level: 'Intermediate' },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, level: 'Intermediate' },
    { name: 'Express.js', icon: <FaNodeJs className="dark:text-gray-300 text-gray-700" />, level: 'Intermediate' },
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
    { name: 'Pandas', icon: <SiPandas className="dark:text-white text-black" />, level: 'Intermediate' },
    { name: 'Scikit-learn', icon: <SiScikitlearn className="text-orange-500" />, level: 'Intermediate' },
    { name: 'TensorFlow', icon: <SiTensorflow className="text-orange-500" />, level: 'Beginner' },
];

const levelColors: Record<string, string> = {
    Beginner: 'bg-red-500/80 border-red-500/30',
    Intermediate: 'bg-yellow-500/80 border-yellow-500/30',
    Advanced: 'bg-emerald-500/80 border-emerald-500/30',
};

export default function SkillsSection() {
    return (
        // SUDHAR 1: Responsive Padding aur Full Width
        <section className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#111827] transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={ { opacity: 0, y: -20 } }
                    whileInView={ { opacity: 1, y: 0 } }
                    viewport={ { once: true } }
                    transition={ { duration: 0.5 } }
                    // SUDHAR 2: Responsive Font Size aur Margin
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 font-sans text-gray-900 dark:text-white"
                >
                    My Technical Skills
                </motion.h2>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={ { once: true } }
                    transition={ { staggerChildren: 0.05 } }
                    variants={ {
                        hidden: {},
                        visible: {}
                    } }
                    // SUDHAR 3: Behtar responsive grid layout
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
                >
                    { skills.map((skill) => (
                        <motion.div
                            key={ skill.name }
                            variants={ {
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            } }
                            aria-label={ `${skill.name} - ${skill.level} proficiency` }
                            // SUDHAR 4: Consistent aur behtar card styling
                            className="flex flex-col items-center justify-center text-center p-4 sm:p-5 bg-white/50 dark:bg-slate-900/50 backdrop-blur-lg border border-slate-300 dark:border-slate-800 rounded-xl shadow-md hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="text-4xl sm:text-5xl mb-3">{ skill.icon }</div>
                            <p className="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200 font-sans leading-tight">
                                { skill.name }
                            </p>
                            <span
                                className={ `mt-3 px-2.5 py-1 text-xs rounded-full text-white/90 font-sans border ${levelColors[skill.level]}` }
                            >
                                { skill.level }
                            </span>
                        </motion.div>
                    )) }
                </motion.div>
            </div>
            <hr className="w-full h-px my-10 bg-white/10 backdrop-blur-sm border-0" />

         
        </section>
    );
}