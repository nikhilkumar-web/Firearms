import Link from 'next/link';
import Image from 'next/image';
import YouTubeIcon from '@/components/ui/YouTubeIcon';
import { MapPin, ShieldCheck, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050505] text-white">
      {/* Background Hero Banner */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-banner.jpg"
          alt="American Firearms Network"
          fill
          priority
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/60 to-[#050505]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        {/* Exact WordPress H3 Tagline */}
        <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-[#BC8914] mb-3">
          Firearms Education, Safety &amp; Skill Development
        </h3>

        {/* Exact WordPress H1 / Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Skill is built through training, not chance.
        </h1>

        {/* Exact WordPress Description */}
        <p className="mt-6 text-sm sm:text-base text-[#D6DBDD] max-w-3xl mx-auto leading-relaxed">
          Step into a structured firearms education environment designed to help you progress with clarity and confidence. Through personalized instruction and structured training sessions, develop the skills, judgment, and discipline required for responsible firearm use.
        </p>

        {/* Exact WordPress 2 Action Blocks */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Block 1 */}
          <div className="bg-[#111111]/90 border border-white/10 rounded-xl p-6 flex flex-col items-center justify-between space-y-4 hover:border-[#BC8914] transition-colors shadow-xl">
            <h2 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wide">
              schedule a one on one lesson
            </h2>
            <Link
              href="/contact-us?type=one-on-one"
              className="px-8 py-3 rounded bg-[#BC8914] hover:bg-[#B1800F] text-black font-extrabold uppercase text-xs tracking-widest transition-transform hover:scale-105"
            >
              click here
            </Link>
          </div>

          {/* Block 2 */}
          <div className="bg-[#111111]/90 border border-white/10 rounded-xl p-6 flex flex-col items-center justify-between space-y-4 hover:border-[#BC8914] transition-colors shadow-xl">
            <h2 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wide">
              Schedule a Group Lesson
            </h2>
            <Link
              href="/contact-us?type=group"
              className="px-8 py-3 rounded bg-[#BC8914] hover:bg-[#B1800F] text-black font-extrabold uppercase text-xs tracking-widest transition-transform hover:scale-105"
            >
              click here
            </Link>
          </div>
        </div>
      </div>

      {/* Section 3: Exact 4-Column Feature Strip from Live Site */}
      <div className="relative z-10 border-t border-b border-white/10 bg-[#0a0a0a]/95 py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center justify-center p-3">
            <MapPin className="w-6 h-6 text-[#BC8914] mb-2" />
            <h2 className="text-sm sm:text-base font-bold text-white uppercase">
              All lessons are located in south Florida
            </h2>
          </div>

          <div className="flex flex-col items-center justify-center p-3">
            <ShieldCheck className="w-6 h-6 text-[#BC8914] mb-2" />
            <h2 className="text-sm sm:text-base font-bold text-white uppercase">
              Expert Instruction
            </h2>
          </div>

          <div className="flex flex-col items-center justify-center p-3">
            <YouTubeIcon className="w-6 h-6 text-[#BC8914] mb-2" />
            <h2 className="text-sm sm:text-base font-bold text-white uppercase">
              As Seen On YouTube
            </h2>
          </div>

          <div className="flex flex-col items-center justify-center p-3">
            <Users className="w-6 h-6 text-[#BC8914] mb-2" />
            <h2 className="text-sm sm:text-base font-bold text-white uppercase">
              Supportive Environment
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
