'use client';

import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useEffect, useState } from 'react';

export const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = theme === 'dark';

  return (
    <button
      onClick={ () => setTheme(isDark ? 'light' : 'dark') }
      aria-label="Toggle Theme"
      className="group relative p-3 rounded-full bg-white/10 dark:bg-gray-800/40 backdrop-blur-md border border-gray-300 dark:border-gray-700 hover:border-emerald-500 transition-all duration-300 shadow-md hover:shadow-emerald-500/30"
    >
      <span className="sr-only">Toggle Theme</span>
      <div className="transition-transform duration-300 group-hover:scale-110 text-gray-700 dark:text-gray-300">
        { isDark ? <FiSun size={ 22 } /> : <FiMoon size={ 22 } /> }
      </div>

      {/* Tooltip */ }
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs font-poppins px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        { isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode' }
      </div>
    </button>
  );
};
