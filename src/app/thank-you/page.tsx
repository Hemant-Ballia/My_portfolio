export default function ThankYouPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-4">
      <div className="text-center space-y-6 max-w-xl">
        <h1 className="text-4xl font-bold text-emerald-600 dark:text-emerald-400">
          Thank You!
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Your message has been received. I’ll get back to you as soon as possible.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 font-semibold text-white bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300"
        >
          Back to Home
        </a>
      </div>
    </section>
  );
}
