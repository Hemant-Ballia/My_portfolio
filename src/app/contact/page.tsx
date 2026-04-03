import ContactForm from '@/components/ContactForm';
import type { Metadata } from 'next';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Contact | Hemant Chauhan',
  description: 'Get in touch to discuss projects or internship opportunities.',
};

export default function ContactPage() {
  return (
    <main className="bg-[#f8fafc] min-h-screen w-full py-10 sm:py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      
      {/* Main Card Container - Simple, Clean & Responsive */}
      <div className="w-full max-w-6xl bg-white rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col lg:flex-row transform transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)]">
        
        {/* LEFT SIDE: Image Panel */}
        <div className="lg:w-5/12 relative flex flex-col justify-between min-h-[380px] sm:min-h-[450px] lg:min-h-[700px] group overflow-hidden">
          
          <Image 
            src="/login.webp"
            alt="Hemant Chauhan Working"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            priority
          />
          
          {/* Subtle Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950/95 z-10 transition-opacity duration-500 group-hover:opacity-90" />

          {/* Content Over the Image */}
          <div className="relative z-20 p-8 sm:p-10 lg:p-12 flex flex-col h-full justify-between text-white">
            <div>
              {/* Status Badge */}
              <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white bg-black/20 backdrop-blur-md rounded-full border border-white/10 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                Available Now
              </span>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 tracking-tight leading-tight">
                Collaboration <br />Starts Here
              </h2>
              <p className="text-slate-200 text-sm leading-relaxed max-w-xs font-medium opacity-90">
                Have a vision? Need an intern or looking for freelance work? Drop your details below.
              </p>
            </div>

            {/* DIRECT MAIL SECTION - Fixed to single line */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-[10px] font-black tracking-[0.2em] text-orange-400 uppercase mb-2">Direct Mail</p>
              
              {/* whitespace-nowrap and responsive text size ensures it stays on one line */}
              <a 
                href="mailto:hemantchauhan221709@gmail.com" 
                className="block w-full text-sm sm:text-base lg:text-[15px] xl:text-lg font-medium text-white hover:text-orange-400 transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                title="hemantchauhan221709@gmail.com"
              >
                hemantchauhan221709@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Form Panel */}
        <div className="lg:w-7/12 p-8 sm:p-10 lg:p-16 flex flex-col justify-center bg-white relative">
          <div className="mb-10 lg:mb-12">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3 tracking-tight">Send a message</h3>
            <div className="w-10 h-1 bg-orange-500 rounded-full" />
          </div>

          <ContactForm />
        </div>

      </div>

      {/* Modern Toastify */}
      <ToastContainer 
        position="bottom-center" 
        autoClose={3000}
        theme="dark" 
        toastStyle={{ borderRadius: '12px', background: '#0f172a', border: '1px solid #1e293b' }} 
      />
    </main>
  );
}