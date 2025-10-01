'use client';

import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import Link from 'next/link';

const pricingTiers = [
  {
    title: 'Portfolio Website',
    price: '₹15,000+',
    features: ['Responsive Design', 'SEO Optimized', 'Contact Form', 'Blog Integration'],
  },
  {
    title: 'Business Website',
    price: '₹25,000+',
    features: ['Custom CMS', 'Animations', 'Testimonials', 'Deployment Support'],
  },
  {
    title: 'Full-Stack Web App',
    price: '₹40,000+',
    features: ['Frontend + Backend', 'Database Integration', 'Auth & API', 'Admin Dashboard'],
  },
];

export default function PricingSection() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-20 font-nunito bg-slate-50 dark:bg-[#1b1b32]">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          initial={ { opacity: 0, y: -20 } }
          animate={ { opacity: 1, y: 0 } }
          transition={ { duration: 0.5 } }
          className="text-4xl sm:text-5xl font-bold text-center mb-12 font-grotesk text-gray-900 dark:text-white"
        >
          My <span className="text-emerald-500">Pricing</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          { pricingTiers.map((tier, i) => (
            <motion.div
              key={ tier.title }
              initial={ { opacity: 0, y: 30 } }
              whileInView={ { opacity: 1, y: 0 } }
              viewport={ { once: true } }
              transition={ { duration: 0.5, delay: i * 0.2 } }
              className="bg-white dark:bg-[#2a2a40] backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-emerald-500/30 transition-transform duration-300 hover:-translate-y-2"
            >
              <h3 className="text-xl font-bold font-grotesk text-gray-900 dark:text-white mb-2">
                { tier.title }
              </h3>
              <p className="text-3xl font-extrabold font-montserrat text-emerald-500 mb-6">
                { tier.price }
              </p>
              <ul className="space-y-3 text-sm font-poppins text-gray-700 dark:text-gray-300 mb-6">
                { tier.features.map((feature) => (
                  <li key={ feature } className="flex items-center">
                    <FiCheckCircle className="text-emerald-500 mr-2" />
                    { feature }
                  </li>
                )) }
              </ul>

              <Link
                href="/contact"
                aria-label={ `Get Started with ${tier.title}` }
                className="w-full block text-center py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold font-poppins transition"
              >
                Get Started
              </Link>
            </motion.div>
          )) }
        </div>

        <hr className="w-full h-px my-10 bg-white/10 backdrop-blur-sm border-0" />
      </div>
    </section>
  );
}
