import Hero from '@/components/home/Hero';
import AboutOverview from '@/components/home/AboutOverview';
import ServicesOverview from '@/components/home/ServicesOverview';
import InstructorsSection from '@/components/home/InstructorsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import GalleryPreview from '@/components/home/GalleryPreview';
import SkillBanner from '@/components/home/SkillBanner';
import ContactAndYouTube from '@/components/home/ContactAndYouTube';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 1. Hero Section + 3 Feature Highlights */}
      <Hero />

      {/* 2. About Section with Embedded Training Video */}
      <AboutOverview />

      {/* 3. Services Overview (Private & Group Sessions) */}
      <ServicesOverview />

      {/* 4. Meet The Instructors (Todd Grama & Paul Gayle) */}
      <InstructorsSection />

      {/* 5. Customer Testimonials & Video Review */}
      <TestimonialsSection />

      {/* 6. Photo Gallery (16 Local Image Showcase) */}
      <GalleryPreview />

      {/* 7. Lifesaving Skill Tactical Banner */}
      <SkillBanner />

      {/* 8. Contact Consultation Form & YouTube Videos */}
      <ContactAndYouTube />
    </main>
  );
}
