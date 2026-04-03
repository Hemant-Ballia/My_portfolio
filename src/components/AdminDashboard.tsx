'use client';

import { useEffect, useState } from 'react';
import { FiTrash2, FiStar, FiUsers, FiBarChart2 } from 'react-icons/fi'; // Naye icons
import { toast } from 'react-toastify';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

type Feedback = {
  id: number;
  name: string;
  role: string;
  quote: string;
  rating?: number;
  avatarUrl?: string;
};

export default function AdminDashboard() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/feedback')
      .then((res) => res.json())
      .then((data) => setFeedbacks(data))
      .catch(() => toast.error('Failed to load feedbacks'))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (id: number) => {
    if (!confirm("Bhai, pakka delete karna hai?")) return;

    const res = await fetch('/api/feedback', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });

    if (res.ok) {
      toast.success('Feedback nikal diya gaya!');
      setFeedbacks((prev) => prev.filter((f) => f.id !== id));
    } else {
      toast.error('Delete fail ho gaya');
    }
  };

  // Stats calculate karna
  const avgRating = feedbacks.length > 0 
    ? (feedbacks.reduce((acc, curr) => acc + (curr.rating || 0), 0) / feedbacks.length).toFixed(1)
    : 0;

  return (
    <section className="min-h-screen bg-[#fafafa] dark:bg-slate-950 pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="font-syne text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-2">
              Admin <span className="text-orange-600">Console.</span>
            </h1>
            <p className="font-sans text-slate-500 text-sm md:text-base">
              Manage client testimonials and platform feedback.
            </p>
          </div>

          {/* --- QUICK STATS --- */}
          <div className="flex gap-4">
            <div className="bg-white dark:bg-slate-900 p-4 px-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-4">
              <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-xl text-orange-600">
                <FiUsers size={20} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Total</p>
                <p className="text-xl font-bold dark:text-white">{feedbacks.length}</p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 p-4 px-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-4">
              <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-xl text-amber-600">
                <FiBarChart2 size={20} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Avg Rating</p>
                <p className="text-xl font-bold dark:text-white">{avgRating}</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- CONTENT --- */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-pulse">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-64 bg-slate-100 dark:bg-slate-900 rounded-3xl" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {feedbacks.map((f, i) => (
                <motion.div
                  key={f.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group relative bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[2rem] p-8 shadow-sm hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-500"
                >
                  {/* Delete Trigger */}
                  <button
                    onClick={() => handleDelete(f.id)}
                    className="absolute top-6 right-6 p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-all opacity-0 group-hover:opacity-100"
                  >
                    <FiTrash2 size={18} />
                  </button>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl overflow-hidden bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center text-orange-600 font-black text-xl border border-orange-50 dark:border-orange-800/30">
                      {f.avatarUrl ? (
                        <Image src={f.avatarUrl} alt={f.name} width={56} height={56} className="object-cover w-full h-full" />
                      ) : (
                        f.name.charAt(0)
                      )}
                    </div>
                    <div>
                      <h3 className="font-syne font-bold text-slate-900 dark:text-white">{f.name}</h3>
                      <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">{f.role}</p>
                    </div>
                  </div>

                  <p className="font-sans text-[15px] text-slate-500 dark:text-slate-400 italic mb-6 leading-relaxed">
                    &quot;{f.quote}&quot;
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50 dark:border-slate-800">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, starIdx) => (
                        <FiStar
                          key={starIdx}
                          size={14}
                          className={`${starIdx < (f.rating || 0) ? 'text-amber-500 fill-amber-500' : 'text-slate-200 dark:text-slate-700'}`}
                        />
                      ))}
                    </div>
                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">ID: #{f.id}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {feedbacks.length === 0 && !loading && (
          <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-[3rem] border-2 border-dashed border-slate-100 dark:border-slate-800">
             <p className="font-syne text-slate-400 font-bold tracking-widest uppercase">No Data Available</p>
          </div>
        )}
      </div>
    </section>
  );
}