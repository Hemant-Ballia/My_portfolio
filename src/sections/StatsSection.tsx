'use client';

import { motion } from 'framer-motion';

export default function StatsSection() {
  const stats = [
    { label: 'Downloads', value: '2.7K', icon: 'download' },
    { label: 'Users', value: '1.3K', icon: 'users' },
    { label: 'Projects Delivered', value: '74', icon: 'project' },
    { label: 'Cities Served', value: '46', icon: 'map' },
  ];

  const icons = {
    download: (
      <path d="M8 17l4 4 4-4m-4-5v9 M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29" />
    ),
    users: (
      <>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
      </>
    ),
    project: (
      <>
        <path d="M3 18v-6a9 9 0 0118 0v6" />
        <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
      </>
    ),
    map: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  };

  return (
    <section className="bg-white dark:bg-gray-950 text-gray-600 dark:text-gray-300 font-nunito">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-grotesk text-gray-900 dark:text-white mb-4">
            My Reach & Impact
          </h2>
          <p className="lg:w-2/3 mx-auto text-base font-poppins text-gray-700 dark:text-gray-400">
            From solo founders to global teams, my work has empowered creators across India and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          { stats.map((stat, i) => (
            <motion.div
              key={ stat.label }
              initial={ { opacity: 0, y: 30 } }
              whileInView={ { opacity: 1, y: 0 } }
              viewport={ { once: true } }
              transition={ { duration: 0.5, delay: i * 0.2 } }
              className="bg-white dark:bg-[#0d1117]/60 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition hover:-translate-y-1"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={ 2 }
                className="text-indigo-500 w-12 h-12 mb-4 mx-auto"
                viewBox="0 0 24 24"
              >
                { icons[stat.icon] }
              </svg>
              <h3 className="text-3xl font-bold font-montserrat text-gray-900 dark:text-white">
                { stat.value }
              </h3>
              <p className="text-sm font-poppins text-gray-600 dark:text-gray-400 mt-2">
                { stat.label }
              </p>
            </motion.div>
          )) }
        </div>
      </div>
    </section>
  );
}
