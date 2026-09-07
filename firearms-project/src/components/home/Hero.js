import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/data/siteConfig';
import { ShieldCheck, Target, Award, Users, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#07090e]">
      {/* Background Hero Banner */}
      <div className="absolute inset-0 z-0">
        <Image
          src={siteConfig.heroImage}
          alt="American Firearms Network Tactical Training Range"
          fill
          priority
          className="object-cover object-center opacity-35 filter brightness-90 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080a0e] via-[#080a0e]/70 to-[#080a0e]/90"></div>
        <div className="absolute inset-0 subtle-grid opacity-30"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center flex flex-col items-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#d99b26]/40 text-[#f5b942] text-xs font-bold uppercase tracking-widest mb-6 tactical-glow backdrop-blur-md">
          <ShieldCheck className="w-4 h-4 text-[#d99b26]" />
          Florida&apos;s Premier Firearms Training Network
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] max-w-5xl">
          Skill is built through <span className="gold-gradient-text">training</span>, not chance.
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
          Step into a structured firearms education environment designed to help you progress with clarity and confidence. Through personalized instruction and structured training sessions, develop the skills, judgment, and discipline required for responsible firearm use.
        </p>

        {/* Dual Primary Call-to-Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link
            href="/contact-us?type=one-on-one"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#d99b26] to-[#b87b14] hover:from-[#f5b942] hover:to-[#d99b26] text-black font-extrabold uppercase tracking-wider text-sm shadow-xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Schedule a One on One Lesson</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact-us?type=group"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/20 text-white font-bold uppercase tracking-wider text-sm shadow-lg flex items-center justify-center gap-2 transition-all backdrop-blur-md hover:border-[#f5b942]"
          >
            <span>Schedule a Group Lesson</span>
            <Users className="w-4 h-4 text-[#f5b942]" />
          </Link>
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-16 pt-10 border-t border-white/10 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#d99b26]/10 border border-[#d99b26]/30 flex items-center justify-center text-[#f5b942] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-white font-bold text-sm">USCCA & NRA</div>
              <div className="text-slate-400 text-xs">Certified Master Instructors</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#d99b26]/10 border border-[#d99b26]/30 flex items-center justify-center text-[#f5b942] shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-white font-bold text-sm">Florida CWL</div>
              <div className="text-slate-400 text-xs">Official CCW Qualifications</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#d99b26]/10 border border-[#d99b26]/30 flex items-center justify-center text-[#f5b942] shrink-0">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <div className="text-white font-bold text-sm">8 Partner Ranges</div>
              <div className="text-slate-400 text-xs">Across South Florida</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#d99b26]/10 border border-[#d99b26]/30 flex items-center justify-center text-[#f5b942] shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-white font-bold text-sm">1-on-1 & Groups</div>
              <div className="text-slate-400 text-xs">Customized Roadmaps</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
