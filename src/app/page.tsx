import Hero from '@/components/Hero';
import ProjectsSection from '@/sections/ProjectsSection';
import SkillsSection from '@/sections/SkillsSection';
import EducationSection from '@/sections/EducationSection';
import AchievementsSection from '@/sections/AchievementsSection';
import StatsSection from '@/sections/StatsSection';
import PricingSection from '@/sections/PricingSection';

export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero /> 
      
      {/* 2. Skills Section (Ye ab ready hai, isliye on rakha hai) */}
      {/* <SkillsSection /> */}

      {/* Baaki sections abhi design hone baaki hain, isliye OFF rakhe hain */}
      {/* <ProjectsSection /> */}
      {/* <EducationSection /> */}
      {/* <AchievementsSection /> */}
      {/* <StatsSection /> */}
      {/* <PricingSection /> */}
    </>
  );
}