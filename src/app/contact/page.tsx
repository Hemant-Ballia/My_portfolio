// src/app/contact/page.tsx
import ContactForm from '@/components/ContactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Hemant Chauhan',
  description: 'Get in touch with Hemant Chauhan to discuss projects or internship opportunities.',
};

export default function ContactPage() {
  return (
    <main className="bg-white dark:bg-gray-900">
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
              Get In Touch
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Have a question or a project in mind? Fill out the form below and I&apos;ll get back to you as soon as possible.
            </p>
          </div>

          {/* Form ko center mein laane ke liye container */ }
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
