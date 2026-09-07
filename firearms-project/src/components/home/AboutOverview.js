import Link from 'next/link';
import Image from 'next/image';
import { Target, Shield, Scale, ArrowRight, Play } from 'lucide-react';

export default function AboutOverview() {
  return (
    <section className="py-20 lg:py-28 bg-[#080a0e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d99b26]/10 border border-[#d99b26]/20 text-[#f5b942] text-xs font-bold uppercase tracking-widest mb-3">
            About The American Firearms Network
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            YOUR ELITE PARTNER IN <span className="gold-gradient-text">DEFENSIVE MASTERY</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            In the heart of Florida, the right to bear arms is a cornerstone of our community. But at AFN, we believe a right without proficiency is a liability. Established in West Palm Beach, our mission is to bridge the critical gap between static range practice and real-world tactical survival.
          </p>
        </div>

        {/* 2-Column Content + Visual Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left: Tactical Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold text-white leading-snug">
              More Than a Range — A Comprehensive Learning Ecosystem
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              We are not just another training facility; we are Florida&apos;s premier hub for the modern protector. Whether you are a first-time owner seeking a Florida Concealed Weapon License (CWL) or an elite professional refining high-cadence drills, our curriculum is engineered for tangible results.
            </p>

            <div className="space-y-4 pt-2">
              {/* Pillar 1 */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#d99b26]/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#d99b26]/10 border border-[#d99b26]/20 flex items-center justify-center text-[#f5b942] shrink-0 mt-0.5">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base">Precision Indoor Diagnostics</h4>
                  <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                    Master the technical &quot;science&quot; of firearm performance, trigger press mechanics, and recoil control in controlled environments.
                  </p>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#d99b26]/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#d99b26]/10 border border-[#d99b26]/20 flex items-center justify-center text-[#f5b942] shrink-0 mt-0.5">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base">Scenario-Based Outdoor Drills</h4>
                  <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                    Translate your fundamentals to dynamic, real-world stress simulations, barricades, and timed target acquisition.
                  </p>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#d99b26]/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#d99b26]/10 border border-[#d99b26]/20 flex items-center justify-center text-[#f5b942] shrink-0 mt-0.5">
                  <Scale className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base">Florida Legal Clarity</h4>
                  <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                    Deep-dive sessions on Florida &quot;Stand Your Ground&quot; statutes and the ethical and legal boundaries of defensive force.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/about-us"
                className="px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/20 hover:border-[#d99b26] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <span>Read Full Mission & Story</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#f5b942]" />
              </Link>
              <a
                href="https://www.youtube.com/@AMERICANFIREARMSNETWORKS?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-red-600/10 hover:bg-red-600/20 border border-red-500/30 text-red-400 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <Play className="w-3.5 h-3.5" />
                <span>Watch On YouTube</span>
              </a>
            </div>
          </div>

          {/* Right: Tactical Visual Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-64 rounded-2xl overflow-hidden border border-white/10 group">
                <Image
                  src="/images/about/tactical-ecosystem.jpg"
                  alt="Firearms Training Session"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-200 font-semibold">
                  Structured Range Accountability
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#121926] to-[#0b1018] border border-white/10">
                <div className="text-3xl font-extrabold text-[#f5b942]">100%</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">
                  Safety record adhering strictly to NRA & USCCA standards.
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#121926] to-[#0b1018] border border-white/10">
                <div className="text-xl font-bold text-white">Florida Certified</div>
                <div className="text-xs text-slate-400 mt-1">
                  Instructors licensed for Armed Security & Concealed Carry qualification.
                </div>
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden border border-white/10 group">
                <Image
                  src="/images/about/tactical-diagnostics.webp"
                  alt="Precision Diagnostics"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-200 font-semibold">
                  Biomechanical Diagnostics
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Quote Callout Banner */}
        <div className="tactical-glass-card rounded-2xl p-8 text-center border-l-4 border-l-[#d99b26]">
          <p className="text-lg sm:text-xl font-semibold text-slate-200 italic max-w-4xl mx-auto">
            &quot;Standard range days only reveal where you are; AFN takes you where you need to be.&quot;
          </p>
          <div className="text-xs font-bold uppercase tracking-widest text-[#f5b942] mt-3">
            — The American Firearms Network Philosophy
          </div>
        </div>
      </div>
    </section>
  );
}
