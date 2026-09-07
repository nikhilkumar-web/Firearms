import Image from 'next/image';
import Link from 'next/link';
import { instructors } from '@/data/instructors';
import { Award, Phone, CheckCircle2 } from 'lucide-react';

export default function InstructorsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#080a0e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d99b26]/10 border border-[#d99b26]/20 text-[#f5b942] text-xs font-bold uppercase tracking-widest mb-3">
            Instructional Leadership
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            MEET OUR <span className="gold-gradient-text">LEAD INSTRUCTORS</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Our instructors don&apos;t just teach techniques—they set and enforce high standards in defensive firearms training, range safety operations, and real-world combatives.
          </p>
        </div>

        {/* 2 Master Instructors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {instructors.map((inst) => (
            <div
              key={inst.id}
              className="tactical-glass-card rounded-2xl p-8 border border-white/10 flex flex-col justify-between relative overflow-hidden"
            >
              <div className="space-y-6">
                {/* Header Profile */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-[#d99b26]/40 shrink-0 shadow-lg">
                    <Image
                      src={inst.image}
                      alt={inst.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#d99b26]">
                      {inst.title}
                    </div>
                    <h3 className="text-2xl font-bold text-white mt-0.5">{inst.name}</h3>
                    <div className="text-xs text-slate-400 mt-1">{inst.specialty}</div>
                  </div>
                </div>

                {/* Bio text */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {inst.bio}
                </p>

                {/* Credentials List */}
                <div className="bg-[#080b11] rounded-xl p-5 border border-white/5 space-y-2.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-[#d99b26]" />
                    <span>Verified Professional Credentials</span>
                  </div>
                  <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                    {inst.credentials.map((cred, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#d99b26] shrink-0 mt-0.5" />
                        <span className="leading-tight">{cred}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
                <a
                  href={`tel:${inst.phone}`}
                  className="px-5 py-2.5 rounded-lg bg-white/5 hover:bg-[#d99b26]/20 border border-white/10 hover:border-[#d99b26] text-white font-semibold text-xs transition-colors flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#d99b26]" />
                  <span>Call {inst.name.split(' ')[0]}: {inst.phone}</span>
                </a>
                <Link
                  href="/contact-us"
                  className="px-5 py-2.5 rounded-lg bg-[#d99b26] hover:bg-[#f5b942] text-black font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  Book With {inst.name.split(' ')[0]}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
