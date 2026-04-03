import './globals.css'; 
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import type { Metadata } from 'next';
import { Poppins, Syne } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

const syne = Syne({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-syne',
});

export const metadata: Metadata = {
  title: 'Hemant Chauhan - Portfolio',
  description: 'Full Stack Developer & Data Analyst Portfolio',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${syne.variable} scroll-smooth`}>
      {/* DIRECT BODY PAR FLEX: Ab koi wrapper nahi hai ise rokne ke liye */}
      <body className="flex flex-col min-h-screen font-sans antialiased bg-white text-slate-800 relative">
        
        <Preloader />

        {/* Dotted Background */}
        <div className="fixed inset-0 z-[-10] bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-50 pointer-events-none"></div>

        <Navbar />
        
        {/* Main Content (flex-grow saari bachi jagah le lega) */}
        <main className="flex-grow w-full flex flex-col">
          {children}
        </main>
        
        <Footer />

        <ToastContainer position="bottom-right" theme="colored" />
      </body>
    </html>
  );
}