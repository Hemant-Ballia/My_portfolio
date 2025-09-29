'use client';

import { useEffect, useState } from 'react';
import { FiTrash2, FiStar } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

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
        const res = await fetch('/api/feedback', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id }),
        });

        if (res.ok) {
            toast.success('Feedback deleted');
            setFeedbacks((prev) => prev.filter((f) => f.id !== id));
        } else {
            toast.error('Delete failed');
        }
    };

    return (
        <section className="max-w-6xl mx-auto px-6 py-20 font-nunito">
            <motion.h2
                initial={ { opacity: 0, y: -20 } }
                animate={ { opacity: 1, y: 0 } }
                transition={ { duration: 0.5 } }
                className="text-4xl font-bold text-center mb-12 font-grotesk text-gray-900 dark:text-white"
            >
                Admin Dashboard
            </motion.h2>

            { loading ? (
                <p className="text-center text-gray-500 dark:text-gray-400">Loading feedbacks...</p>
            ) : feedbacks.length === 0 ? (
                <p className="text-center text-gray-500 dark:text-gray-400">No feedbacks found.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    { feedbacks.map((f, i) => (
                        <motion.div
                            key={ f.id }
                            initial={ { opacity: 0, y: 20 } }
                            whileInView={ { opacity: 1, y: 0 } }
                            viewport={ { once: true } }
                            transition={ { duration: 0.4, delay: i * 0.1 } }
                            className="bg-white dark:bg-[#0d1117]/60 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-md relative"
                        >
                            {/* Avatar */ }
                            <div className="w-14 h-14 rounded-full overflow-hidden mb-4 bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-white font-bold text-xl">
                                { f.avatarUrl ? (
                                    <img src={ f.avatarUrl } alt={ f.name } className="w-full h-full object-cover" />
                                ) : (
                                    f.name.charAt(0)
                                ) }
                            </div>

                            {/* Name & Role */ }
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white font-montserrat">{ f.name }</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 font-poppins mb-2">{ f.role }</p>

                            {/* Quote */ }
                            <p className="text-sm text-gray-700 dark:text-gray-300 italic mb-4">“{ f.quote }”</p>

                            {/* Rating */ }
                            <div className="flex gap-1 mb-4">
                                { [...Array(5)].map((_, i) => (
                                    <FiStar
                                        key={ i }
                                        className={ `text-yellow-400 ${i < (f.rating || 0) ? 'opacity-100' : 'opacity-30'}` }
                                    />
                                )) }
                            </div>

                            {/* Delete Button */ }
                            <button
                                onClick={ () => handleDelete(f.id) }
                                className="absolute top-4 right-4 text-red-500 hover:text-red-600 transition"
                                title="Delete Feedback"
                            >
                                <FiTrash2 size={ 20 } />
                            </button>
                        </motion.div>
                    )) }
                </div>
            ) }
        </section>
    );
}
