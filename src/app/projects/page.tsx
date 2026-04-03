import ProjectsSection from '@/sections/ProjectsSection';

export default function ProjectsPage() {
  return (
    /* bg-gray-900 hata kar transparent kiya taaki layout.tsx ka dotted pattern dikhe */
    <main className="relative min-h-screen pt-20">
      
      {/* Container to match your site's padding and width */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
        
        {/* Is section ke andar humne premium grid aur typography pehle hi set kar di hai */}
        <ProjectsSection />
        
      </div>

      {/* Optional: Bottom spacing taaki footer se pehle breathability rahe */}
      <div className="h-20" />
    </main>
  );
}