import { testimonials } from '@/data/testimonials';
import { Quote, Star } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#0a0d14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d99b26]/10 border border-[#d99b26]/20 text-[#f5b942] text-xs font-bold uppercase tracking-widest mb-3">
            Real Student Feedback
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            WHAT OUR <span className="gold-gradient-text">CUSTOMERS SAY</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            From first-time handgun purchasers to seasoned concealed carry holders, hear from citizens across South Florida who transformed their confidence with AFN.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="tactical-glass-card rounded-2xl p-8 border border-white/10 flex flex-col justify-between relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#f5b942] gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-white/10" />
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed italic mb-6">
                  &quot;{t.quote}&quot;
                </p>
              </div>

              <div className="pt-4 border-t border-white/5">
                <div className="text-sm font-bold text-white">{t.author}</div>
                <div className="text-xs text-[#d99b26]">{t.role}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">{t.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
