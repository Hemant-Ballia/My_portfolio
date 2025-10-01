'use client';

import { motion } from 'framer-motion';

// Yeh component aapke stats data ko display karta hai
export default function StatsSection() {
  // Aapke stats ka data
  const stats = [
    { label: 'Projects Delivered', value: '70+', icon: 'project' },
    { label: 'Code Commits', value: '1,500+', icon: 'commit' },
    { label: 'Happy Clients', value: '30+', icon: 'users' },
    { label: 'Years of Experience', value: '3+', icon: 'calendar' },
  ];

  // Har stat ke liye icons
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
    // SUDHAR 1: Full-width section aur responsive padding
    <section className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* SUDHAR 2: Responsive text size aur consistent font */ }
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            initial={ { opacity: 0, y: -20 } }
            whileInView={ { opacity: 1, y: 0 } }
            viewport={ { once: true } }
            transition={ { duration: 0.5 } }
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans text-gray-900 dark:text-white mb-4"
          >
            My Reach & Impact
          </motion.h2>
          <motion.p
            initial={ { opacity: 0, y: -20 } }
            whileInView={ { opacity: 1, y: 0 } }
            viewport={ { once: true } }
            transition={ { duration: 0.5, delay: 0.1 } }
            className="max-w-3xl mx-auto text-base sm:text-lg font-sans text-gray-600 dark:text-gray-400"
          >
            From solo founders to global teams, my work has empowered creators across India and beyond.
          </motion.p>
        </div>

        {/* SUDHAR 3: Behtar responsive grid layout */ }
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          { stats.map((stat, i) => (
            <motion.div
              key={ stat.label }
              initial={ { opacity: 0, y: 30 } }
              whileInView={ { opacity: 1, y: 0 } }
              viewport={ { once: true } }
              transition={ { duration: 0.5, delay: i * 0.1 } }
              // SUDHAR 4: Consistent "glass" design jo baaki sections se match kare
              className="text-center p-6 bg-slate-100/50 dark:bg-slate-900/50 backdrop-blur-lg border border-slate-200 dark:border-slate-800 rounded-2xl shadow-lg transition hover:-translate-y-1"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={ 1.5 }
                className="text-cyan-500 w-10 h-10 sm:w-12 sm:h-12 mb-4 mx-auto"
                viewBox="0 0 24 24"
              >
                { icons[stat.icon] }
              </svg>
              <h3 className="text-3xl sm:text-4xl font-bold font-sans text-gray-900 dark:text-white">
                { stat.value }
              </h3>
              <p className="text-sm sm:text-base font-sans text-gray-600 dark:text-gray-400 mt-2">
                { stat.label }
              </p>
            </motion.div>
          )) }
        </div>
      </div>
      <hr className="w-full h-px my-10 bg-white/10 backdrop-blur-sm border-0" />

    </section>
  );
}