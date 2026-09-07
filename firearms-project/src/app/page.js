import Hero from '@/components/home/Hero';
import AboutOverview from '@/components/home/AboutOverview';
import ServicesOverview from '@/components/home/ServicesOverview';
import InstructorsSection from '@/components/home/InstructorsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import GalleryPreview from '@/components/home/GalleryPreview';
import RangesSection from '@/components/home/RangesSection';
import YouTubeSection from '@/components/home/YouTubeSection';
import ConsultationForm from '@/components/forms/ConsultationForm';
import { ShieldCheck, Target, Award, Phone } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* About Overview */}
      <AboutOverview />

      {/* 10 Services & 1-on-1 vs Group Breakdown */}
      <ServicesOverview />

      {/* Lead Instructors (Todd Grama & Paul Gayle) */}
      <InstructorsSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Gallery Preview */}
      <GalleryPreview />

      {/* Consultation & Scheduling Form Section */}
      <section className="py-20 lg:py-28 bg-[#07090e] relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Value Prop */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d99b26]/10 border border-[#d99b26]/20 text-[#f5b942] text-xs font-bold uppercase tracking-widest">
                Florida Training Registration
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                IT&apos;S NOT A HOBBY. <br />
                IT&apos;S A <span className="gold-gradient-text">LIFESAVING SKILL.</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Owning a firearm is only the first step; mastering it is your responsibility. At the American Firearms Network, we strip away the &quot;range day&quot; fluff and focus on mission-critical proficiency. Whether you are a first-time owner or a seasoned enthusiast, our professional instruction—led by Todd Grama and Paul Gayle—is designed to build the confidence and speed required to protect what matters most.
              </p>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3 text-xs text-slate-300">
                <div className="flex items-center gap-2 font-bold text-white uppercase tracking-wider text-[11px] text-[#f5b942]">
                  <ShieldCheck className="w-4 h-4" />
                  What Happens Next?
                </div>
                <p>
                  1. Submit your preferred time and lesson format (1-on-1 or Group).
                </p>
                <p>
                  2. A lead instructor calls you directly to assess your skill level and schedule range time at your preferred facility.
                </p>
                <p>
                  3. Arrive with complete confidence and safety gear provided if needed.
                </p>
              </div>

              <div className="pt-2">
                <div className="text-xs text-slate-400">Prefer an immediate conversation?</div>
                <div className="mt-2 flex flex-wrap gap-4 text-xs font-semibold text-white">
                  <a href="tel:347-853-2249" className="hover:text-[#f5b942] flex items-center gap-1.5 underline">
                    <Phone className="w-3.5 h-3.5 text-[#d99b26]" /> Call Todd: 347-853-2249
                  </a>
                  <a href="tel:561-225-8615" className="hover:text-[#f5b942] flex items-center gap-1.5 underline">
                    <Phone className="w-3.5 h-3.5 text-[#d99b26]" /> Call Paul: 561-225-8615
                  </a>
                </div>
              </div>
            </div>

            {/* Right Interactive Form */}
            <div className="lg:col-span-7">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Partner Training Ranges */}
      <RangesSection />

      {/* YouTube Community */}
      <YouTubeSection />
    </div>
  );
}
