import Link from 'next/link';
import { partnerRanges } from '@/data/ranges';
import { MapPin, Target, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata = {
  title: "Training Ranges | American Firearms Network",
  description: "Explore premier partner training ranges across South Florida where American Firearms Network delivers high-standard firearms instruction.",
};

export default function TrainingRangesPage() {
  return (
    <div className="bg-[#080a0e] text-slate-100 min-h-screen">
      {/* Header */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-[#07090e] border-b border-white/10">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d99b26]/10 border border-[#d99b26]/20 text-[#f5b942] text-xs font-bold uppercase tracking-widest mb-4">
            South Florida Partner Network
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            FLORIDA <span className="gold-gradient-text">TRAINING RANGES</span>
          </h1>
          <p className="mt-4 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We partner with South Florida&apos;s most advanced indoor facilities and expansive outdoor ranches to offer students comprehensive training across every shooting discipline.
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {partnerRanges.map((range, idx) => (
            <div
              key={idx}
              className="tactical-glass-card rounded-3xl p-8 border border-white/10 flex flex-col justify-between group hover:border-[#d99b26]/40 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#d99b26]/10 border border-[#d99b26]/20 flex items-center justify-center text-[#f5b942]">
                    <Target className="w-6 h-6" />
                  </div>
                  <span className="text-xs uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">
                    {range.type}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#f5b942] transition-colors">
                    {range.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-[#d99b26] mt-1 font-semibold">
                    <MapPin className="w-4 h-4" />
                    <span>{range.location}</span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {range.description}
                </p>

                <div className="p-4 rounded-xl bg-[#080b11] border border-white/5 text-xs text-slate-300 space-y-1.5">
                  <div className="font-bold text-white uppercase text-[11px] text-[#f5b942]">
                    Facility Highlights:
                  </div>
                  <div>{range.features}</div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  Courses Available: 1-on-1 & Groups
                </span>
                <Link
                  href={`/contact-us?facility=${encodeURIComponent(range.name)}`}
                  className="px-5 py-2.5 rounded-xl bg-[#d99b26] hover:bg-[#f5b942] text-black font-extrabold text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5"
                >
                  <span>Train Here</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Booking CTA */}
        <div className="mt-20 tactical-glass-card rounded-3xl p-10 text-center max-w-4xl mx-auto border border-white/10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Looking for a Range Close to You?
          </h2>
          <p className="mt-3 text-slate-400 text-sm max-w-2xl mx-auto">
            We coordinate sessions across Palm Beach County, Broward County, and surrounding South Florida areas based on your personal schedule and travel preference.
          </p>
          <div className="mt-6">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#d99b26] to-[#b87b14] text-black font-extrabold text-xs uppercase tracking-wider shadow-xl hover:scale-[1.02] transition-transform"
            >
              <span>Consult Today & Pick Your Range</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
