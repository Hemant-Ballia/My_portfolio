'use client';

import { motion } from 'framer-motion';
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

const pricingTiers = [
  {
    title: 'Portfolio Website',
    price: '₹15,000+',
    subtitle: 'Perfect for individuals & freelancers.',
    features: ['Responsive Design', 'SEO Optimized', 'Contact Form', 'Blog Integration'],
    popular: false,
  },
  {
    title: 'Business Website',
    price: '₹25,000+',
    subtitle: 'Ideal for startups & growing brands.',
    features: ['Custom CMS', 'Smooth Animations', 'Testimonials', 'Deployment Support'],
    popular: true, // Ye card highlight hoga
  },
  {
    title: 'Full-Stack Web App',
    price: '₹40,000+',
    subtitle: 'Complex platforms & SaaS products.',
    features: ['Frontend + Backend', 'Database Integration', 'Auth & Security', 'Admin Dashboard'],
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section className="w-full py-24 md:py-32 px-6 lg:px-16 bg-white flex flex-col justify-center min-h-screen">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* --- SECTION HEADER --- */}
        <div className="mb-20 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[2px] w-8 md:w-16 bg-black"></div>
            <span className="font-syne text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-[#FF9933]">
              Investment
            </span>
            <div className="h-[2px] w-8 md:w-16 bg-black"></div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-syne text-4xl md:text-6xl lg:text-7xl font-extrabold text-black tracking-tighter"
          >
            My <span className="text-[#FF9933] italic">Pricing.</span>
          </motion.h2>
        </div>

        {/* --- PRICING GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-center">
          {pricingTiers.map((tier, i) => (
            <motion.div
              key={tier.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
              className={`relative flex flex-col p-8 md:p-10 bg-white rounded-[2rem] transition-all duration-500 group ${
                tier.popular 
                  ? 'border-2 border-[#FF9933] shadow-[0_20px_60px_rgba(255,153,51,0.15)] md:-translate-y-4' 
                  : 'border-2 border-black/5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-[#FF9933]/50 hover:shadow-[0_20px_50px_rgba(255,153,51,0.1)]'
              }`}
            >
              {/* "Recommended" Badge for Popular Tier */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF9933] text-white px-4 py-1 rounded-full shadow-md">
                  <span className="font-syne text-[10px] font-black uppercase tracking-[0.2em]">
                    Recommended
                  </span>
                </div>
              )}

              {/* Title & Price */}
              <div className="mb-8 border-b-2 border-black/5 pb-8">
                <h3 className="font-syne text-xl md:text-2xl font-black text-black mb-2">
                  {tier.title}
                </h3>
                <p className="font-sans text-xs font-bold text-slate-400 mb-6 uppercase tracking-widest">
                  {tier.subtitle}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="font-syne text-4xl md:text-5xl font-black text-[#FF9933]">
                    {tier.price}
                  </span>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-4 flex-grow mb-10">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <FiCheckCircle className="text-[#FF9933] shrink-0 mt-0.5 text-lg" />
                    <span className="font-sans text-sm font-bold text-slate-700 leading-snug">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                href="/contact"
                className={`w-full group/btn flex items-center justify-center gap-3 py-4 rounded-xl font-syne text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                  tier.popular
                    ? 'bg-[#FF9933] text-white hover:bg-black shadow-[0_10px_20px_rgba(255,153,51,0.2)] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)]'
                    : 'bg-black text-white hover:bg-[#FF9933] shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_20px_rgba(255,153,51,0.2)]'
                }`}
              >
                <span>Get Started</span>
                <FiArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}