'use client';

import { FiCheckCircle, FiArrowRight, FiMonitor, FiLayers, FiCode } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import Link from 'next/link';

const pricingPlans = [
  {
    name: 'Landing Page',
    price: '₹15,000',
    description: 'Perfect for a professional online presence with a single, impactful page.',
    features: [
      '1 Page Website',
      'Responsive Design',
      'Contact Form Integration',
      'Basic SEO Setup',
      'Deployment',
    ],
    icon: <FiMonitor className="text-emerald-500 text-3xl mb-4" />,
    isPopular: false,
  },
  {
    name: 'Multi-Page Website',
    price: '₹35,000',
    description: 'Ideal for small businesses, startups, or professionals needing a complete website.',
    features: [
      'Up to 5 Pages (e.g., Home, About, Services, Blog, Contact)',
      'Responsive Design',
      'CMS for Blog Management',
      'Advanced SEO Setup',
      'Database Integration (Basic)',
      'Deployment & Support (30 days)',
    ],
    icon: <FiLayers className="text-emerald-500 text-3xl mb-4" />,
    isPopular: true,
  },
  {
    name: 'Full-Stack Application',
    price: 'Custom',
    description: 'For complex web applications with custom backend logic and user accounts.',
    features: [
      'Custom Number of Pages',
      'User Authentication',
      'Advanced Backend & API Development',
      'Complex Database Schema',
      'Third-party API Integrations',
      'Full Deployment & Maintenance Plan',
    ],
    icon: <FiCode className="text-emerald-500 text-3xl mb-4" />,
    isPopular: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white dark:bg-gray-900 py-16 sm:py-24 font-nunito">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold font-grotesk text-gray-900 dark:text-white">
            My Services & Pricing
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-poppins">
            I offer tailored solutions to bring your digital vision to life. Here are my starting packages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          { pricingPlans.map((plan, i) => (
            <motion.div
              key={ plan.name }
              initial={ { opacity: 0, y: 30 } }
              whileInView={ { opacity: 1, y: 0 } }
              viewport={ { once: true } }
              transition={ { duration: 0.5, delay: i * 0.1 } }
              className={ `relative rounded-xl shadow-lg flex flex-col p-8 transition-transform duration-300 transform hover:-translate-y-2 ${plan.isPopular
                  ? 'bg-gray-800 dark:bg-gray-950 border-2 border-emerald-500'
                  : 'bg-gray-50 dark:bg-gray-800'
                }` }
            >
              { plan.isPopular && (
                <div className="absolute top-0 right-8 -mt-4">
                  <div className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase font-poppins">
                    Most Popular
                  </div>
                </div>
              ) }

              {/* Icon */ }
              { plan.icon }

              <h2 className={ `text-xl font-bold font-grotesk ${plan.isPopular ? 'text-white' : 'text-gray-900 dark:text-white'}` }>
                { plan.name }
              </h2>
              <p className={ `mt-2 text-sm font-poppins ${plan.isPopular ? 'text-gray-300' : 'text-gray-600 dark:text-gray-400'} flex-grow` }>
                { plan.description }
              </p>

              <div className={ `my-8 text-5xl font-extrabold font-montserrat ${plan.isPopular ? 'text-white' : 'text-gray-900 dark:text-white'}` }>
                { plan.price !== 'Custom' ? (
                  <>
                    <span className="align-top text-2xl font-medium">Starting at </span>
                    { plan.price }
                  </>
                ) : (
                  'Custom Quote'
                ) }
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                { plan.features.map((feature) => (
                  <li key={ feature } className="flex items-center">
                    <FiCheckCircle className="text-emerald-500 mr-3" />
                    <span className={ plan.isPopular ? 'text-gray-300 font-poppins' : 'text-gray-600 dark:text-gray-400 font-poppins' }>
                      { feature }
                    </span>
                  </li>
                )) }
              </ul>

              <button
                onClick={ () => toast.success(`Let's build your ${plan.name}!`) }
                className={ `mt-auto w-full text-center font-semibold py-3 px-6 rounded-lg transition-colors duration-300 font-poppins ${plan.isPopular
                    ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                    : 'bg-emerald-600/20 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-600/30'
                  }` }
              >
                Get Started
              </button>
            </motion.div>
          )) }
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-400 font-poppins">
            Don't see a plan that fits?{ ' ' }
            <Link href="/contact" className="font-semibold text-emerald-600 dark:text-emerald-400 hover:underline">
              Contact me for a custom quote.
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
//components/ProjectCard.tsx