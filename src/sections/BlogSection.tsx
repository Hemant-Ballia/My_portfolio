'use client';

import BlogCard from '@/components/BlogCard';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type BlogPost = {
  title: string;
  summary: string;
  date: string;
  slug: string;
  image?: string;
  category?: string;
  readTime?: string;
};

export default function BlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchPosts = () => {
      fetch('/api/live-blog')
        .then((res) => res.json())
        .then((data) => setPosts(data));
    };

    fetchPosts(); // initial load
    const interval = setInterval(fetchPosts, 10000); // every 10 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 font-nunito">
      <motion.h2
        initial={ { opacity: 0, y: -20 } }
        animate={ { opacity: 1, y: 0 } }
        transition={ { duration: 0.5 } }
        className="text-4xl font-bold text-center mb-12 font-grotesk text-gray-900 dark:text-white"
      >
        Live <span className="text-cyan-500">Blog</span>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        { posts.map((post, i) => (
          <motion.div
            key={ post.slug }
            initial={ { opacity: 0, y: 30 } }
            whileInView={ { opacity: 1, y: 0 } }
            viewport={ { once: true } }
            transition={ { duration: 0.5, delay: i * 0.2 } }
          >
            <BlogCard { ...post } />
          </motion.div>
        )) }
      </div>
    </section>
  );
}
