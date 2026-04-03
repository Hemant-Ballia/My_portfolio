'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ye check karta hai ki kya poori window (images/fonts) load ho gayi hai
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 1200); // Thoda sa delay smoothness ke liye
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-white dark:bg-slate-950"
        >
          {/* Animated Logo */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: [1, 1.1, 1], opacity: 1 }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center justify-center w-24 h-24 bg-orange-50 dark:bg-orange-900/10 rounded-3xl mb-8"
          >
            <span className="text-orange-600 font-black text-4xl font-syne italic">&lt;/&gt;</span>
          </motion.div>

          {/* Loading Bar */}
          <div className="w-48 h-[2px] bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-orange-600"
            />
          </div>
          
          <p className="font-syne mt-4 text-[10px] font-black tracking-[0.4em] uppercase text-slate-400 animate-pulse">
            System Initializing
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}