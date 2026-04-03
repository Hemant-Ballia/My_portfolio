'use client';

import { motion } from 'framer-motion';

// --- Icon Component for "View Credential" ---
const CertificateIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

export default function EducationSection() {
  const educationItems = [
    {
      title: 'B.Sc. in Computer Science & Data Analytics',
      institution: 'Indian Institute of Technology (IIT) Patna',
      date: '2024 - Present',
      details: [
        'Currently maintaining a stellar CPI of 9.40.',
        'Completed Foundation Level Credit Requirements in CS & Data Analytics.',
        'Verified by IIT Patna · Access Code: GZr5SrdxKy',
      ],
      link: 'https://cet.iitp.ac.in/moodle/mod/customcert/verify_certificate.php',
    },
    {
      title: 'Class XII – Intermediate (Science Stream)',
      institution: 'S.S. Deo Inter College, UP Board',
      date: '2023',
      details: [
        'Achieved First Division with 87.22% (436/500 marks).',
        'Awarded the INSPIRE Scholarship for ranking in the top 1% of the state.',
        'Core Subjects: Physics, Chemistry, Mathematics.',
      ],
      link: '/assets/certificates/12th result.pdf',
    },
    {
      title: 'Class X – High School',
      institution: 'S.S. Deo Inter College, UP Board',
      date: '2021',
      details: [
        'Graduated with First Division (87.33%).',
        'Core Subjects: Science, Mathematics, Social Science.',
      ],
      link: '/assets/certificates/class-10th_hemant.pdf',
    },
  ];

  return (
    <section id="education" className="w-full py-24 md:py-32 px-6 lg:px-16 bg-white min-h-screen flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* --- SECTION HEADER --- */}
        <div className="mb-20 flex flex-col items-start md:items-center md:text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[2px] w-8 md:w-16 bg-black"></div>
            <span className="font-syne text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-[#FF9933]">
              Academic Background
            </span>
            <div className="h-[2px] w-8 md:w-16 bg-black hidden md:block"></div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-syne text-4xl md:text-6xl lg:text-7xl font-extrabold text-black tracking-tighter"
          >
            My <span className="text-[#FF9933] italic">Education.</span>
          </motion.h2>
        </div>

        {/* --- PROFESSIONAL TIMELINE --- */}
        <div className="relative border-l-[3px] border-black/5 md:ml-6">
          {educationItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="mb-16 ml-8 md:ml-12 relative group"
            >
              {/* Timeline Dot (Saffron) */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-5 h-5 bg-white border-[4px] border-black rounded-full group-hover:border-[#FF9933] group-hover:scale-125 transition-all duration-300 z-10 shadow-sm" />

              {/* Timeline Card */}
              <div className="p-8 md:p-10 bg-white border-2 border-black/5 rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(255,153,51,0.1)] hover:border-[#FF9933]/50 transition-all duration-500">
                
                {/* Header (Title & Date) */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="font-syne text-2xl md:text-3xl font-black text-black leading-tight mb-2">
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm md:text-base font-bold text-slate-600 uppercase tracking-widest">
                      {item.institution}
                    </p>
                  </div>
                  
                  {/* Date Badge */}
                  <div className="shrink-0 bg-white border-2 border-slate-100 px-4 py-2 rounded-xl text-center group-hover:border-[#FF9933]/30 transition-colors">
                    <span className="font-sans text-[11px] font-extrabold uppercase tracking-widest text-[#FF9933]">
                      {item.date}
                    </span>
                  </div>
                </div>

                {/* Details List */}
                <ul className="space-y-3 mb-8">
                  {item.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-4">
                      <span className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-black/30 group-hover:bg-[#FF9933] transition-colors" />
                      <p className="font-sans text-sm md:text-base text-slate-600 leading-relaxed font-medium">
                        {detail}
                      </p>
                    </li>
                  ))}
                </ul>

                {/* View Certificate Link */}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center font-syne text-[11px] font-black uppercase tracking-[0.2em] text-black hover:text-[#FF9933] transition-colors border-b-2 border-black/10 hover:border-[#FF9933] pb-1"
                >
                  View Credential <CertificateIcon />
                </a>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}