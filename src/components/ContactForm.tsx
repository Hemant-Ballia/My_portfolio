'use client';

import { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { FiSend, FiCheckCircle } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // 🎉 Confetti Function
  const triggerConfetti = () => {
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ea580c', '#f97316', '#fb923c', '#ffffff', '#0f172a']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ea580c', '#f97316', '#fb923c', '#ffffff', '#0f172a']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    // Yahan apna Web3Forms ka access key confirm kar lena
    formData.append("access_key", "52c6bd85-2a50-4c67-b5ca-b2fea6d0b992");

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        formRef.current?.reset();
        setIsSubmitting(false);
        setIsSuccess(true); 
        triggerConfetti(); 
        
        toast.success('Awesome! Message Sent!', {
          icon: (
            <span role="img" aria-label="party">
              🎉
            </span>
          ),
          style: { background: '#0f172a', color: '#fff' }
        });

        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);

      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (error) {
      setIsSubmitting(false);
      toast.error('❌ Oops! Something went wrong.');
    }
  };

  return (
    <div className="relative min-h-[400px] w-full flex items-center justify-center">
      <AnimatePresence mode="wait">
        
        {/* SUCCESS STATE (THANK YOU) */}
        {isSuccess ? (
          <motion.div
            key="success-state"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center bg-white z-20 rounded-2xl"
          >
            <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mb-6 shadow-inner">
              <FiCheckCircle className="w-10 h-10 text-orange-600" />
            </div>
            <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">
              Thank You! 🎉
            </h2>
            <p className="text-slate-500 font-medium max-w-sm">
              Your message has been sent successfully. I&apos;ll get back to you as soon as possible.
            </p>
          </motion.div>
        ) : (
          
          <motion.div 
            key="form-state"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full"
          >
            {/* FORM STATE */}
            <form onSubmit={handleSubmit} ref={formRef} className="space-y-5 sm:space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                {/* Name */}
                <div className="space-y-1.5 sm:space-y-2 group/input">
                  <label htmlFor="name" className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 ml-1 transition-colors group-focus-within/input:text-orange-500">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 sm:px-5 py-3.5 sm:py-4 bg-slate-50 border border-slate-200 rounded-xl sm:rounded-2xl text-slate-900 text-sm sm:text-base placeholder:text-slate-400 focus:outline-none focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10 transition-all duration-300 font-medium"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5 sm:space-y-2 group/input">
                  <label htmlFor="email" className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 ml-1 transition-colors group-focus-within/input:text-orange-500">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 sm:px-5 py-3.5 sm:py-4 bg-slate-50 border border-slate-200 rounded-xl sm:rounded-2xl text-slate-900 text-sm sm:text-base placeholder:text-slate-400 focus:outline-none focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10 transition-all duration-300 font-medium"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5 sm:space-y-2 group/input">
                <label htmlFor="message" className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 ml-1 transition-colors group-focus-within/input:text-orange-500">
                  How can I help?
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 sm:px-5 py-3.5 sm:py-4 bg-slate-50 border border-slate-200 rounded-xl sm:rounded-2xl text-slate-900 text-sm sm:text-base placeholder:text-slate-400 focus:outline-none focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10 transition-all duration-300 font-medium resize-none"
                ></textarea>
              </div>

              {/* ✨ CLEAN & MINIMAL SUBMIT BUTTON ✨ */}
              <div className="pt-2 sm:pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-lg relative w-44 h-12 cursor-pointer flex items-center border border-orange-500 bg-orange-500 group hover:bg-orange-600 active:bg-orange-700 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden transition-all duration-300"
                >
                  <span className="text-white font-semibold ml-6 transform group-hover:translate-x-32 transition-all duration-300">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                  <span className="absolute right-0 h-full w-12 rounded-lg bg-orange-600 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300">
                    <FiSend className={`w-5 h-5 text-white ${isSubmitting ? 'animate-pulse' : ''}`} />
                  </span>
                </button>
              </div>

            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}