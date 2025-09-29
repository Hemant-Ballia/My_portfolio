'use client';

import React from 'react';
import Image from 'next/image';

interface JourneyStage {
    stage: string;
    images: string[];
}

const journeyStages: JourneyStage[] = [
    { stage: 'Nursery', images: ['/gallery/collegeimg.jpg', '/gallery/collegeimg.jpg', '/gallery/collegeimg.jpg'] },
    { stage: 'LKG', images: ['/gallery/collegeimg.jpg', '/gallery/collegeimg.jpg', '/gallery/collegeimg.jpg'] },
    { stage: 'UKG', images: ['/gallery/collegeimg.jpg', '/gallery/collegeimg.jpg', '/gallery/collegeimg.jpg'] },
    { stage: 'Class 1', images: ['/gallery/collegeimg.jpg', '/gallery/collegeimg.jpg', '/gallery/collegeimg.jpg'] },
    { stage: 'Class 2', images: ['/gallery/collegeimg.jpg', '/gallery/collegeimg.jpg', '/gallery/collegeimg.jpg'] },
    { stage: 'Class 3', images: ['/gallery/collegeimg.jpg', '/gallery/collegeimg.jpg', '/gallery/collegeimg.jpg'] },
    { stage: 'Class 4', images: ['/gallery/collegeimg.jpg', '/gallery/collegeimg.jpg', '/gallery/collegeimg.jpg'] },
    { stage: 'Class 5', images: ['/gallery/collegeimg.jpg', '/gallery/collegeimg.jpg', '/gallery/collegeimg.jpg'] },
    { stage: 'Class 6', images: ['/gallery/collegeimg.jpg', '/gallery/collegeimg.jpg', '/gallery/collegeimg.jpg'] },
    { stage: 'Class 7', images: ['/gallery/collegeimg.jpg', '/gallery/collegeimg.jpg', '/gallery/collegeimg.jpg'] },
    { stage: 'Class 8', images: ['/gallery/collegeimg.jpg', '/gallery/collegeimg.jpg', '/gallery/collegeimg.jpg'] },
    { stage: 'Class 9', images: ['/gallery/collegeimg.jpg', '/gallery/collegeimg.jpg', '/gallery/collegeimg.jpg'] },
    { stage: 'Class 10', images: ['/gallery/collegeimg.jpg', '/gallery/collegeimg.jpg', '/gallery/collegeimg.jpg'] },
    { stage: 'Class 11', images: ['/gallery/collegeimg.jpg', '/gallery/collegeimg.jpg', '/gallery/collegeimg.jpg'] },
    { stage: 'Class 12', images: ['/gallery/collegeimg.jpg', '/gallery/collegeimg.jpg', '/gallery/collegeimg.jpg'] },
    { stage: 'IIT', images: ['/gallery/collegeimg.jpg', '/gallery/collegeimg.jpg', '/gallery/collegeimg.jpg'] },
];

const GallerySection: React.FC = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-16 mx-auto">
                <div className="text-center mb-12">
                    <h1 className="sm:text-4xl text-3xl font-bold title-font text-gray-900 mb-4">My Journey</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600">
                        A glimpse of my journey from Nursery to IIT, capturing milestones, medals, and memories along the way.
                    </p>
                </div>

                {/* Responsive Cards */ }
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    { journeyStages.map((stage, idx) => (
                        <div
                            key={ idx }
                            className="bg-white rounded-xl shadow-lg p-4 hover:shadow-2xl transition-shadow duration-300"
                        >
                            <h2 className="text-xl font-semibold text-gray-800 mb-3 text-center">{ stage.stage }</h2>
                            <div className="grid grid-cols-3 gap-2">
                                { stage.images.map((img, i) => (
                                    <Image
                                        key={ i }
                                        src={ img }
                                        alt={ `${stage.stage}-${i}` }
                                        width={ 100 }
                                        height={ 100 }
                                        className="w-full h-24 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                                    />
                                )) }
                            </div>
                        </div>
                    )) }
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
