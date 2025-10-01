import './globals.css';
import { ThemeProvider } from 'next-themes';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Hemant Chauhan - Portfolio',
  description: 'Full Stack Developer Portfolio',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={ `${poppins.variable} font-sans flex flex-col min-h-screen bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 transition-colors duration-300` }>
        <div className="fixed inset-0 z-[-10] bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {/* === FIX YAHAN HAI === */ }
          {/* Maine 'main' tag se saari container aur padding classes hata di hain. */ }
          {/* Ab yeh 'main' tag poori width lega aur aapke page ke sections (jaise Hero) bhi poori width le payenge. */ }
          <main className="flex-grow w-full">
            { children }
          </main>
          <Footer />
          <ToastContainer
            position="bottom-right"
            autoClose={ 5000 }
            hideProgressBar={ false }
            newestOnTop={ false }
            closeOnClick
            rtl={ false }
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
