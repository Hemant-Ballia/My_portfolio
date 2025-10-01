'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Testimonial from '@/components/Testimonial';
import FeedbackForm from '@/components/FeedbackForm';

type Feedback = {
  name: string;
  role: string;
  quote: string;
  rating?: number;
  avatarUrl?: string;
};

export default function TestimonialSection() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/feedback')
      .then(async (res) => {
        if (!res.ok) throw new Error('Fetch failed');
        const text = await res.text();
        const data = text ? JSON.parse(text) : [];
        setFeedbacks(data);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 font-nunito bg-slate-50 dark:bg-[#0d1117]">
      <motion.h2
        initial={ { opacity: 0, y: -20 } }
        animate={ { opacity: 1, y: 0 } }
        transition={ { duration: 0.5 } }
        className="text-4xl font-bold text-center mb-12 font-grotesk text-gray-900 dark:text-white"
      >
        💬 Testimonials
      </motion.h2>

      { loading ? (
        <p className="text-center text-gray-500 dark:text-gray-400 font-poppins">
          Loading feedback...
        </p>
      ) : error ? (
        <p className="text-center text-red-500 font-poppins">
          Failed to load testimonials.
        </p>
      ) : feedbacks.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400 font-poppins">
          No feedback available yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          { feedbacks.map((f, i) => (
            <motion.div
              key={ f.name + i }
              initial={ { opacity: 0, y: 20 } }
              whileInView={ { opacity: 1, y: 0 } }
              viewport={ { once: true } }
              transition={ { duration: 0.5, delay: i * 0.1 } }
              className="bg-white dark:bg-[#0d1117]/60 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-md hover:shadow-emerald-500/20 transition-all duration-300"
            >
              <Testimonial
                name={ f.name }
                role={ f.role }
                quote={ f.quote }
                rating={ f.rating }
                avatarUrl={ f.avatarUrl }
              />
            </motion.div>
          )) }
        </div>
      ) }

      {/* ✅ Feedback Form embedded below */ }
      <FeedbackForm />
      <hr className="w-full h-px my-10 bg-white/10 backdrop-blur-sm border-0" />

    </section>
  );
}
