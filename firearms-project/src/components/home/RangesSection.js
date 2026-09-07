import Link from 'next/link';
import { partnerRanges } from '@/data/ranges';
import { MapPin, Target, ArrowRight } from 'lucide-react';

export default function RangesSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#0a0d14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d99b26]/10 border border-[#d99b26]/20 text-[#f5b942] text-xs font-bold uppercase tracking-widest mb-3">
            Florida Training Facilities
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            OUR <span className="gold-gradient-text">TRAINING RANGES</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            AFN conducts courses across South Florida&apos;s most advanced indoor and outdoor tactical shooting facilities. From climate-controlled precision lanes to 350-acre dynamic movement ranches, we train where you need to be.
          </p>
        </div>

        {/* Ranges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partnerRanges.map((range, idx) => (
            <div
              key={idx}
              className="tactical-glass-card rounded-2xl p-6 border border-white/10 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#d99b26]/10 border border-[#d99b26]/20 flex items-center justify-center text-[#f5b942]">
                    <Target className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-white/5 text-slate-400 border border-white/5">
                    Partner Facility
                  </span>
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-[#f5b942] transition-colors line-clamp-1">
                  {range.name}
                </h3>
                <div className="flex items-center gap-1 text-xs text-[#d99b26] mt-1 mb-3">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{range.location}</span>
                </div>
                <p className="text-slate-400 text-xs line-clamp-3 leading-relaxed">
                  {range.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 text-[11px] text-slate-500">
                {range.type}
              </div>
            </div>
          ))}
        </div>

        {/* View All Ranges CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/training-ranges"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/20 hover:border-[#d99b26] text-white font-bold text-xs uppercase tracking-wider transition-all"
          >
            <span>Explore All 8 Florida Training Facilities</span>
            <ArrowRight className="w-4 h-4 text-[#f5b942]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
