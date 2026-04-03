'use client';

import React, { useState, useEffect } from 'react';
import ProjectCard from '@/components/ProjectCard';

export default function ProjectsSection() {
  // 1. States define karein (Yahan error solve hoga)
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // 2. Data fetch karne ka logic
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`/api/projects?t=${Date.now()}`);
        const result = await res.json();
        if (result.success) {
          setProjects(result.data);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        // Fetching khatam hone ke baad loading false kar dein
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Clean & Premium Header */}
        <div className="mb-20">
          <span className="text-orange-600 font-bold text-xs uppercase tracking-[0.3em] block mb-2">
            Portfolio
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter">
            Selected <span className="text-orange-600">Works.</span>
          </h2>
          <div className="h-1.5 w-24 bg-orange-600 mt-6 rounded-full shadow-[0_4px_12px_rgba(234,88,12,0.3)]" />
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {loading ? (
            // Jab tak data load ho raha hai, ye premium skeletons dikhenge
            [1, 2, 3].map((n) => (
              <div 
                key={n} 
                className="h-[450px] w-full bg-slate-50 rounded-[32px] animate-pulse border border-slate-100" 
              />
            ))
          ) : (
            // Data aane ke baad cards dikhenge
            projects.map((project: any) => (
              <ProjectCard key={project._id} project={project} />
            ))
          )}
        </div>

        {/* Empty State: Agar koi project na mile */}
        {!loading && projects.length === 0 && (
          <div className="text-center py-20 text-slate-400 font-medium border-2 border-dashed border-slate-100 rounded-[32px]">
            No projects found. Check back soon!
          </div>
        )}
      </div>
    </section>
  );
}