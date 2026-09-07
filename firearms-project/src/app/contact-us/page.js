import ConsultationForm from '@/components/forms/ConsultationForm';
import { siteConfig } from '@/data/siteConfig';
import { Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: "Contact Us & Schedule Training | American Firearms Network",
  description: "Get in touch with Florida's premier firearms instructors Todd Grama and Paul Gayle. Schedule one-on-one or group lessons today.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#080a0e] text-slate-100 min-h-screen">
      {/* Header */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-[#07090e] border-b border-white/10">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d99b26]/10 border border-[#d99b26]/20 text-[#f5b942] text-xs font-bold uppercase tracking-widest mb-4">
            South Florida Firearms Experts
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            CONTACT <span className="gold-gradient-text">OUR INSTRUCTORS</span>
          </h1>
          <p className="mt-4 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Have questions about course prerequisites, Florida CWL certification, or range scheduling? Connect directly with our lead instructional staff.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Instructor Cards & Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="tactical-glass-card rounded-3xl p-8 border border-white/10 space-y-6">
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Direct Instructor Lines
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                We believe in personalized training from the very first conversation. Call our lead instructors directly for immediate scheduling or advice.
              </p>

              <div className="space-y-4">
                {/* Instructor Todd */}
                <div className="p-5 rounded-2xl bg-[#080b11] border border-white/5 space-y-2">
                  <div className="text-xs font-bold text-[#d99b26] uppercase">
                    Co-Founder & Senior Instructor
                  </div>
                  <div className="text-lg font-bold text-white">Todd Grama</div>
                  <a
                    href={`tel:${siteConfig.phoneTodd}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#f5b942] hover:underline"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{siteConfig.phoneTodd}</span>
                  </a>
                </div>

                {/* Instructor Paul */}
                <div className="p-5 rounded-2xl bg-[#080b11] border border-white/5 space-y-2">
                  <div className="text-xs font-bold text-[#d99b26] uppercase">
                    Co-Founder & Combatives Director
                  </div>
                  <div className="text-lg font-bold text-white">Paul Gayle</div>
                  <a
                    href={`tel:${siteConfig.phonePaul}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#f5b942] hover:underline"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{siteConfig.phonePaul}</span>
                  </a>
                </div>

                {/* Email & Location */}
                <div className="p-5 rounded-2xl bg-[#080b11] border border-white/5 space-y-3 text-xs text-slate-300">
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#d99b26] shrink-0" />
                    <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                      {siteConfig.email}
                    </a>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#d99b26] shrink-0 mt-0.5" />
                    <span>West Palm Beach, Florida — Training Across Palm Beach, Broward & Treasure Coast Partner Ranges</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-[#d99b26] shrink-0" />
                    <span>Monday - Sunday: 8:00 AM - 7:00 PM EST</span>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div className="tactical-glass-card rounded-3xl p-8 border border-white/10 space-y-4">
              <h3 className="text-lg font-bold text-white">Frequently Asked Questions</h3>
              
              <div className="space-y-3 text-xs text-slate-300">
                <div className="p-3 rounded-xl bg-white/[0.02]">
                  <div className="font-bold text-white mb-1">Do I need to own a gun to take a course?</div>
                  <p className="text-slate-400">No! Handguns, safety gear, and ammunition rentals are available at our partner facilities for all beginners.</p>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02]">
                  <div className="font-bold text-white mb-1">Does this qualify me for a Florida CCW?</div>
                  <p className="text-slate-400">Yes! Our Concealed Carry (CCW) courses provide official certification that satisfies Florida state requirements for your license.</p>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02]">
                  <div className="font-bold text-white mb-1">Where do the live-fire sessions take place?</div>
                  <p className="text-slate-400">We train at 8 top-tier partner facilities across South Florida, including Gun World, OK Corral, and Palm Beach Shooting Center.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7">
            <ConsultationForm />
          </div>
        </div>
      </section>
    </div>
  );
}
