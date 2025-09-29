'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaPaperPlane } from 'react-icons/fa';
import { toast } from 'react-toastify';
import Image from 'next/image';

export default function FeedbackForm() {
  const [form, setForm] = useState({
    name: '',
    role: '',
    quote: '',
    rating: 4,
    avatarUrl: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRating = (value: number) => {
    setForm({ ...form, rating: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast.info('Submitting feedback...');

    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Failed to submit');
      toast.success('Thank you! Feedback submitted.');
      setForm({ name: '', role: '', quote: '', rating: 4, avatarUrl: '' });
    } catch {
      toast.error('Something went wrong. Try again.');
    }
  };

  return (
    <section className="max-w-xl mx-auto px-6 py-16 font-nunito bg-slate-50 dark:bg-[#0d1117]">
      <motion.h2
        initial={ { opacity: 0, y: -20 } }
        animate={ { opacity: 1, y: 0 } }
        transition={ { duration: 0.5 } }
        className="text-3xl font-bold text-center mb-8 font-grotesk text-gray-900 dark:text-white"
      >
        ✍️ Leave a Testimonial
      </motion.h2>

      <form
        onSubmit={ handleSubmit }
        className="space-y-6 bg-white dark:bg-[#0d1117]/60 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-lg"
      >
        <input
          type="text"
          name="name"
          value={ form.name }
          onChange={ handleChange }
          placeholder="Your Name"
          required
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white font-montserrat"
        />
        <input
          type="text"
          name="role"
          value={ form.role }
          onChange={ handleChange }
          placeholder="Your Role (e.g. Client, Recruiter)"
          required
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white font-montserrat"
        />
        <textarea
          name="quote"
          value={ form.quote }
          onChange={ handleChange }
          placeholder="Your Feedback"
          required
          rows={ 4 }
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white font-nunito"
        />

        {/* ⭐ Star Rating */ }
        <div className="flex items-center gap-2">
          <span className="text-sm font-poppins text-gray-700 dark:text-gray-300">Rating:</span>
          { [...Array(5)].map((_, i) => (
            <FaStar
              key={ i }
              onClick={ () => handleRating(i + 1) }
              className={ `cursor-pointer text-yellow-400 transition ${i < form.rating ? 'opacity-100 scale-110' : 'opacity-30'
                }` }
            />
          )) }
        </div>

        {/* 👤 Avatar URL */ }
        <input
          type="text"
          name="avatarUrl"
          value={ form.avatarUrl }
          onChange={ handleChange }
          placeholder="Avatar Image URL (optional)"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white font-poppins"
        />

        {/* Avatar Preview */ }
        { form.avatarUrl && (
          <div className="flex justify-center mt-2">
            <Image
              src={ form.avatarUrl }
              alt="Avatar Preview"
              width={ 64 }
              height={ 64 }
              className="rounded-full object-cover border border-gray-300 dark:border-gray-600"
            />
          </div>
        ) }

        {/* 🚀 Submit Button */ }
        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold font-poppins flex items-center justify-center gap-2 transition"
        >
          <FaPaperPlane />
          Submit Feedback
        </button>
      </form>
    </section>
  );
}
