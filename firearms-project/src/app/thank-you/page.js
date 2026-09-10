import Link from 'next/link';
import { CheckCircle2, PhoneCall, Calendar, ShieldCheck, ArrowRight, Home } from 'lucide-react';
import YouTubeIcon from '@/components/ui/YouTubeIcon';

export const metadata = {
  title: 'Thank You | American Firearms Network',
  description: 'Thank you for contacting American Firearms Network. Our certified instructors will be in touch shortly to assist with your firearms training goals.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <main className="bg-[#D6DBDD] text-[#000000] overflow-x-hidden font-roboto min-h-screen flex flex-col">
      {/* 1. HERO HEADER SECTION */}
      <section 
        className="relative w-full py-[50px] sm:py-[70px] bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://american-firearms.s3-eu-central-2.ionoscloud.com/images/about/outdoor-range-group.webp)',
          backgroundColor: '#1a1a1a',
        }}
      >
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundColor: '#000000', opacity: 0.78 }}
        />

        <div className="relative z-10 max-w-[1000px] mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#B1800F]/20 border-2 border-[#B1800F] text-[#B1800F] mb-5 shadow-xl animate-in zoom-in-90 duration-300">
            <CheckCircle2 className="w-9 h-9 sm:w-11 sm:h-11 stroke-[2.5]" />
          </div>

          <h1 
            className="text-[32px] sm:text-[44px] md:text-[52px] font-semibold text-white uppercase tracking-tight font-gabarito leading-[38px] sm:leading-[52px] md:leading-[60px]"
            style={{ fontFamily: "'Gabarito', sans-serif" }}
          >
            Thank You For Contacting Us
          </h1>

          <p className="mt-3 text-[16px] sm:text-[18px] text-[#D6DBDD] max-w-[650px] mx-auto font-normal leading-relaxed">
            Your consultation request has been received. Our certified instructors are already reviewing your training objectives.
          </p>
        </div>
      </section>

      {/* 2. CONFIRMATION DETAILS & NEXT STEPS */}
      <section className="py-[50px] sm:py-[70px] bg-[#D6DBDD] flex-1">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6">
          <div 
            className="bg-white rounded-[4px] p-6 sm:p-10 shadow-xl border border-[#c4c4c4]"
            style={{ boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.12)' }}
          >
            <div className="text-center pb-8 border-b border-[#e5e5e5]">
              <span className="inline-block bg-[#FAF8F3] text-[#AA8802] border border-[#B1800F]/30 text-xs sm:text-sm font-bold uppercase tracking-wider px-3.5 py-1 rounded-[2px] mb-3 font-gabarito">
                Consultation Request Confirmed
              </span>
              <h2 
                className="text-[24px] sm:text-[30px] font-semibold text-[#000000] font-gabarito uppercase"
                style={{ fontFamily: "'Gabarito', sans-serif" }}
              >
                What Happens Next?
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-[600px] mx-auto">
                We respect your time and take your firearms readiness seriously. Here is what you can expect from our team:
              </p>
            </div>

            {/* Steps Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 py-8 border-b border-[#e5e5e5]">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center p-4 rounded-[3px] bg-[#FAF8F3] border border-[#e5dfd5]">
                <div className="w-12 h-12 rounded-full bg-[#B1800F] text-white flex items-center justify-center mb-4 shadow">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-black uppercase font-gabarito text-[16px] sm:text-[17px]">
                  1. Plan Review
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                  Instructor Todd or Paul reviews your preferred lesson type, location, and schedule availability.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center p-4 rounded-[3px] bg-[#FAF8F3] border border-[#e5dfd5]">
                <div className="w-12 h-12 rounded-full bg-[#B1800F] text-white flex items-center justify-center mb-4 shadow">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-black uppercase font-gabarito text-[16px] sm:text-[17px]">
                  2. Direct Contact
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                  You will receive a phone call or email during your selected best time to finalize details.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center p-4 rounded-[3px] bg-[#FAF8F3] border border-[#e5dfd5]">
                <div className="w-12 h-12 rounded-full bg-[#B1800F] text-white flex items-center justify-center mb-4 shadow">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-black uppercase font-gabarito text-[16px] sm:text-[17px]">
                  3. Range Session
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                  Lock in your live-fire range session at our premier partner training facilities across Florida.
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#000000] hover:bg-[#222222] text-white font-medium uppercase text-[14px] px-6 py-3 rounded-[3px] transition-colors shadow-sm font-roboto"
              >
                <Home className="w-4 h-4" />
                <span>Return To Home</span>
              </Link>

              <Link
                href="/services/defensive-firearms-training"
                style={{
                  backgroundImage: 'linear-gradient(219deg, #B1800F 0%, #000000 67%)',
                  border: '1px solid #B1800F',
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white font-medium uppercase text-[14px] px-6 py-3 rounded-[3px] transition-all hover:brightness-110 shadow-sm font-roboto"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="https://www.youtube.com/@AMERICANFIREARMSNETWORKS"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#EB0F06] hover:bg-[#CC0526] text-white font-medium uppercase text-[14px] px-6 py-3 rounded-[3px] transition-colors shadow-sm font-roboto"
              >
                <YouTubeIcon className="w-4 h-4 fill-white" />
                <span>Subscribe Channel</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
