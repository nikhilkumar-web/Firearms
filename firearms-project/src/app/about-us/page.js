import Image from 'next/image';
import Link from 'next/link';
import { instructors } from '@/data/instructors';
import { siteConfig } from '@/data/siteConfig';
import { ShieldCheck, Target, Scale, Award, Users, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata = {
  title: "About Us | American Firearms Network",
  description: "About American Firearms Network, a Florida-based organization offering professional firearms training, safety, and defensive skill development.",
};

export default function AboutUsPage() {
  return (
    <div className="bg-[#080a0e] text-slate-100 min-h-screen">
      {/* Page Header */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-[#07090e] border-b border-white/10">
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src={siteConfig.heroImage}
            alt="About AFN"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080a0e] via-[#080a0e]/70 to-[#080a0e]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d99b26]/10 border border-[#d99b26]/20 text-[#f5b942] text-xs font-bold uppercase tracking-widest mb-4">
            Established in West Palm Beach, Florida
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            ABOUT <span className="gold-gradient-text">AMERICAN FIREARMS NETWORK</span>
          </h1>
          <p className="mt-4 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Bridging the critical gap between static range practice and real-world tactical survival.
          </p>
        </div>
      </section>

      {/* The Gap Between Ownership and Proficiency */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl font-extrabold text-white tracking-tight leading-snug">
              The Gap Between Ownership and Proficiency
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              In the heart of Florida, the right to bear arms is a cornerstone of our community. But at The American Firearms Network (AFN), we believe a right without proficiency is a liability. Established in West Palm Beach, AFN was forged with a singular mission: to bridge the critical gap between static range practice and real-world tactical survival.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              We are not just a training facility; we are Florida&apos;s premier hub for the modern protector. Whether you are a first-time owner seeking a Florida Concealed Weapon License (CWL) or an elite professional refining high-cadence drills, our curriculum is engineered for results.
            </p>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
              <div className="text-sm font-bold text-[#f5b942] uppercase tracking-wider">
                Our Florida Ecosystem Delivers:
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d99b26] shrink-0 mt-0.5" />
                  <span><strong>Precision Indoor Diagnostics:</strong> Master the technical &quot;science&quot; of firearm mechanics in controlled environments.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d99b26] shrink-0 mt-0.5" />
                  <span><strong>Scenario-Based Outdoor Drills:</strong> Translate your skills to dynamic, real-world stress simulations on 350-acre Florida ranches.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d99b26] shrink-0 mt-0.5" />
                  <span><strong>Florida Legal Clarity:</strong> Deep-dive sessions on &quot;Stand Your Ground&quot; laws and the ethical use of force.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-6 relative h-96 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src="/images/about/tactical-ecosystem.jpg"
              alt="AFN Ecosystem"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white font-bold text-lg">
              Structured Range Accountability & Real-World Application
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Co-Founders Dossiers */}
      <section className="py-20 bg-[#06080d] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-bold uppercase tracking-widest text-[#f5b942] mb-2">
              Founding Leadership
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              INSTRUCTIONAL LEADERSHIP & FOUNDERS
            </h2>
            <p className="mt-3 text-slate-400 text-sm">
              Led by veteran instructors setting state-level standards for defensive marksmanship.
            </p>
          </div>

          <div className="space-y-16">
            {instructors.map((inst, index) => (
              <div 
                key={inst.id}
                className={`tactical-glass-card rounded-3xl p-8 sm:p-12 border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:col-span-4 relative h-80 rounded-2xl overflow-hidden border-2 border-[#d99b26]/30 shadow-xl">
                  <Image
                    src={inst.image}
                    alt={inst.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-xs font-bold uppercase text-[#d99b26]">{inst.title}</div>
                    <div className="text-xl font-extrabold text-white">{inst.name}</div>
                  </div>
                </div>

                <div className="lg:col-span-8 space-y-5">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#d99b26]">
                      {inst.title}
                    </span>
                    <h3 className="text-3xl font-extrabold text-white mt-1">{inst.name}</h3>
                    <p className="text-xs text-slate-400 mt-1">{inst.specialty}</p>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {inst.bio}
                  </p>

                  <div className="p-6 rounded-2xl bg-[#080b11] border border-white/5 space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-200 flex items-center gap-2">
                      <Award className="w-4 h-4 text-[#d99b26]" />
                      <span>Verified Certifications & Credentials</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                      {inst.credentials.map((c, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#d99b26] shrink-0 mt-0.5" />
                          <span>{c}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-4">
                    <a
                      href={`tel:${inst.phone}`}
                      className="px-6 py-3 rounded-xl bg-white/5 hover:bg-[#d99b26]/20 border border-white/10 hover:border-[#d99b26] text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2"
                    >
                      <span>Direct Line: {inst.phone}</span>
                    </a>
                    <Link
                      href="/contact-us"
                      className="px-6 py-3 rounded-xl bg-[#d99b26] hover:bg-[#f5b942] text-black font-extrabold text-xs uppercase tracking-wider transition-colors"
                    >
                      Schedule Training With {inst.name.split(' ')[0]}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-20 text-center bg-[#07090e] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Ready to Begin Your Defensive Journey?
          </h2>
          <p className="mt-4 text-slate-400 text-sm max-w-2xl mx-auto">
            Contact Todd or Paul today to review course options and lock in your session at one of South Florida&apos;s premier shooting facilities.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact-us"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#d99b26] to-[#b87b14] text-black font-extrabold text-xs uppercase tracking-wider shadow-xl hover:scale-[1.02] transition-transform"
            >
              Consult Today!
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 rounded-xl bg-white/5 border border-white/20 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-all"
            >
              View All Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
