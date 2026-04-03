import SkillsSection from '@/sections/SkillsSection';

export default function SkillsPage() {
  return (
    <main className="relative min-h-screen pt-20">
      {/* Aapke layout.tsx mein Navbar pehle se hai, 
          isliye yahan sirf content aayega 
      */}
      <div className="max-w-7xl mx-auto">
        <SkillsSection />
      </div>
    </main>
  );
}