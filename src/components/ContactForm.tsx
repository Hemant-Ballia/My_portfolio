'use client';

import { useRef } from 'react';
import { toast } from 'react-toastify';
import { FiSend } from 'react-icons/fi';

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    toast.promise(
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
        .then((res) => {
          if (!res.ok) throw new Error('Network error');
          return res.json();
        })
        .then((data) => {
          if (!data.success) throw new Error('Submission failed');
          formRef.current?.reset();
          return data;
        }),
      {
        pending: 'Sending your message...',
        success: 'Message sent successfully! I’ll get back to you soon.',
        error: 'Something went wrong. Please try again.',
      }
    );
  };

  return (
    <div className="w-full p-8 bg-white/10 dark:bg-gray-900/20 backdrop-blur-lg border border-white/20 dark:border-gray-700/50 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        Contact Me
      </h2>
      <form onSubmit={ handleSubmit } ref={ formRef } className="space-y-6">
        <input type="hidden" name="access_key" value="52c6bd85-2a50-4c67-b5ca-b2fea6d0b992" />

        {/* Full Name */ }
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold tracking-wide text-gray-800 dark:text-gray-200 mb-2"
          >
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
          <label
            htmlFor="email"
            className="block text-sm font-semibold tracking-wide text-gray-800 dark:text-gray-200 mb-2"
          >
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

        {/* Message */ }
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold tracking-wide text-gray-800 dark:text-gray-200 mb-2"
          >
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
            className="w-full px-8 py-3 font-bold text-white inline-flex items-center justify-center bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <FiSend className="w-5 h-5 mr-2" />
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
