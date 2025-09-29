'use client';

import { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { FiSend } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

const WEB3FORM_KEY = process.env.NEXT_PUBLIC_WEB3FORM_ACCESS_KEY;

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitting, setSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append('access_key', WEB3FORM_KEY || '');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        toast.success('Message sent successfully! I’ll get back to you soon.');
        formRef.current?.reset();
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
        setTimeout(() => router.push('/thank-you'), 1500);
      } else {
        throw new Error('Submission failed');
      }
    } catch {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full p-8 bg-white/10 dark:bg-gray-900/20 backdrop-blur-lg border border-white/20 dark:border-gray-700/50 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        Contact Me
      </h2>

      <AnimatePresence>
        { showSuccess && (
          <motion.div
            initial={ { scale: 0, opacity: 0 } }
            animate={ { scale: 1, opacity: 1 } }
            exit={ { scale: 0, opacity: 0 } }
            className="mb-6 flex items-center justify-center text-emerald-500"
            aria-live="polite"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={ 2 }
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="ml-3 text-lg font-semibold">Message Sent!</span>
          </motion.div>
        ) }
      </AnimatePresence>

      <form onSubmit={ handleSubmit } ref={ formRef } className="space-y-6" aria-label="Contact form">
        <input type="text" name="botcheck" className="hidden" />

        {/* Full Name */ }
        <div>
          <label htmlFor="name" className="block text-sm font-semibold tracking-wide text-gray-800 dark:text-gray-200 mb-2">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder="Your Full Name"
            className="w-full px-4 py-3 bg-white/20 dark:bg-gray-800/30 border border-b-2 border-white/30 dark:border-gray-600/50 rounded-lg text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:border-emerald-400 transition duration-300"
          />
        </div>

        {/* Email */ }
        <div>
          <label htmlFor="email" className="block text-sm font-semibold tracking-wide text-gray-800 dark:text-gray-200 mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="your.email@example.com"
            className="w-full px-4 py-3 bg-white/20 dark:bg-gray-800/30 border border-b-2 border-white/30 dark:border-gray-600/50 rounded-lg text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:border-emerald-400 transition duration-300"
          />
        </div>

        {/* Subject */ }
        <div>
          <label htmlFor="subject" className="block text-sm font-semibold tracking-wide text-gray-800 dark:text-gray-200 mb-2">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Portfolio, Freelance, Collaboration..."
            className="w-full px-4 py-3 bg-white/20 dark:bg-gray-800/30 border border-b-2 border-white/30 dark:border-gray-600/50 rounded-lg text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:border-emerald-400 transition duration-300"
          />
        </div>

        {/* Message */ }
        <div>
          <label htmlFor="message" className="block text-sm font-semibold tracking-wide text-gray-800 dark:text-gray-200 mb-2">
            Your Message
          </label>
          <textarea
            name="message"
            id="message"
            required
            rows={ 5 }
            placeholder="Hi Hemant, I'd like to discuss a project..."
            className="w-full px-4 py-3 bg-white/20 dark:bg-gray-800/30 border border-b-2 border-white/30 dark:border-gray-600/50 rounded-lg text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:border-emerald-400 transition duration-300"
          ></textarea>
        </div>

        {/* Submit Button */ }
        <div className="text-center pt-4">
          <button
            type="submit"
            disabled={ submitting }
            aria-label="Send contact message"
            className={ `w-full px-8 py-3 font-bold text-white inline-flex items-center justify-center rounded-lg shadow-lg transition-all duration-300 ${submitting
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 hover:shadow-xl transform hover:scale-105 active:scale-95'
              }` }
          >
            <FiSend className="w-5 h-5 mr-2" />
            { submitting ? 'Sending...' : 'Send Message' }
          </button>
        </div>
      </form>
    </div>
  );
}
