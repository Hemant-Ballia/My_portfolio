'use client';

import React, { useState, useEffect } from 'react';

export default function ResumeButton() {
  const [resumeLink, setResumeLink] = useState("");

  useEffect(() => {
    // Database se resume ka link chupke se fetch kar lenge
    const fetchResume = async () => {
      try {
        const res = await fetch(`/api/resume?t=${new Date().getTime()}`);
        const result = await res.json();
        if (result.success && result.data) {
          setResumeLink(result.data.link);
        }
      } catch (error) {
        console.error("Error fetching resume:", error);
      }
    };

    fetchResume();
  }, []);

  // Agar admin panel mein koi link nahi dala hai, toh button hide rakho
  if (!resumeLink) return null;

  return (
    <a
      href={resumeLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
    >
      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
      </svg>
      Download Resume
    </a>
  );
}