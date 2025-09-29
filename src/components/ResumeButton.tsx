import { FiDownload } from 'react-icons/fi';

export const ResumeButton = ({ className = "" }) => (
  <a
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className={ `inline-flex items-center gap-2 px-4 py-2 font-semibold text-sm md:text-base rounded-lg transition-all duration-300 border-2 
      text-cyan-500 border-cyan-500 
      hover:bg-cyan-500/10 dark:hover:bg-cyan-400/10
      transform hover:-translate-y-0.5
      ${className}` }
  >
    <FiDownload />
    <span>Resume</span>
  </a>
);
