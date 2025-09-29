import Hero from '@/components/Hero';
import ProjectsSection from '@/sections/ProjectsSection';
import SkillsSection from '@/sections/SkillsSection';
import EducationSection from '@/sections/EducationSection';
import AchievementsSection from '@/sections/AchievementsSection';
import StatsSection from '@/sections/StatsSection';
import TestimonialSection from '@/sections/TestimonialSection';
import PricingSection from '@/sections/PricingSection';
import BlogSection from '@/sections/BlogSection';

export default function Home() {
  return (
    <>
      <Hero />                  {/* First impression */ }
      <ProjectsSection />       {/* What you've built */ }
      <SkillsSection />         {/* How you build */ }
      <EducationSection />      {/* Where you learned */ }
      <AchievementsSection />   {/* What you've earned */ }
      <StatsSection />          {/* Impact in numbers */ }
      <TestimonialSection />    {/* Social proof */ }
      <PricingSection />        {/* Conversion CTA */ }
      <BlogSection />           {/* Thought leadership */ }
    </>
  );
}
