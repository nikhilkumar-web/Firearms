import Hero from '@/components/home/Hero';
import AboutOverview from '@/components/home/AboutOverview';
import ServicesOverview from '@/components/home/ServicesOverview';
import InstructorsSection from '@/components/home/InstructorsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import GalleryPreview from '@/components/home/GalleryPreview';
import RangesSection from '@/components/home/RangesSection';
import YouTubeSection from '@/components/home/YouTubeSection';
import ConsultationForm from '@/components/forms/ConsultationForm';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-[#000000] text-white">
      {/* 1. Hero Section & Feature Bar */}
      <Hero />

      {/* 2. About The American Firearms Network */}
      <AboutOverview />

      {/* 3. Our Services (Private Sessions & Group Sessions) */}
      <ServicesOverview />

      {/* 4. Meet The Instructors (Todd Grama & Paul Gayle) */}
      <InstructorsSection />

      {/* 5. What Our Customers Say (Testimonials) */}
      <TestimonialsSection />

      {/* 6. Our Gallery */}
      <GalleryPreview />

      {/* 7. Exact Section 10 & 11: It's Not a Hobby + Strategic Advantage Form */}
      <section className="py-20 bg-[#050505] text-white border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Col: Section 10 */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-wide text-white leading-tight">
                IT’S NOT A HOBBY. <br />
                <span className="text-[#BC8914]">IT’S A LIFESAVING SKILL.</span>
              </h2>

              <p className="text-sm sm:text-base text-[#D6DBDD] leading-relaxed">
                Owning a firearm is only the first step; mastering it is your responsibility. At the <strong className="text-white">American Firearms Network</strong>, we strip away the “range day” fluff and focus on mission-critical proficiency. Whether you are a first-time owner or a seasoned enthusiast, our professional instruction—led by <strong className="text-white">Todd Grama</strong>—is designed to build the confidence and speed required to protect what matters most.
              </p>

              <div>
                <Link
                  href="/contact-us"
                  className="inline-block px-8 py-4 rounded bg-[#BC8914] hover:bg-[#B1800F] text-black font-extrabold uppercase text-xs tracking-widest transition-transform hover:scale-105 shadow-xl"
                >
                  START YOUR TRAINING
                </Link>
              </div>
            </div>

            {/* Right Col: Section 11 Form */}
            <div className="lg:col-span-6">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>

      {/* 8. YouTube Section */}
      <YouTubeSection />

      {/* 9. Florida Partner Training Ranges */}
      <RangesSection />
    </div>
  );
}
