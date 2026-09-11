import Link from 'next/link';
import { Home, Phone } from 'lucide-react';
import BodyThemeFix from '@/components/common/BodyThemeFix';

export const metadata = {
  title: 'Page Not Found (404) | American Firearms Network',
  description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
  return (
    <div className="relative min-h-[calc(100vh-71px)] flex flex-col justify-center items-center bg-[#0B0C0E] text-white selection:bg-[#BC8914] selection:text-black overflow-hidden px-4 py-16 text-center">
      <BodyThemeFix color="#0B0C0E" />

      {/* Subtle Tactical Reticle Ambience Centered in Viewport */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        {/* Radial Gold Ambient Glow */}
        <div
          className="absolute w-[900px] sm:w-[1100px] h-[600px] sm:h-[700px]"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(188, 137, 20, 0.16) 0%, rgba(11, 12, 14, 0) 70%)',
          }}
        />

        {/* Subtle Sighting Rings */}
        <div className="absolute w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] rounded-full border border-white/[0.03] flex items-center justify-center">
          <div className="w-[420px] sm:w-[600px] h-[420px] sm:h-[600px] rounded-full border border-[#BC8914]/[0.05] flex items-center justify-center">
            <div className="w-[260px] sm:w-[380px] h-[260px] sm:h-[380px] rounded-full border border-white/[0.03]" />
          </div>
        </div>

        {/* Reticle Lines */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-[#BC8914]/15 to-transparent" />
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#BC8914]/15 to-transparent" />
      </div>

      {/* Main 404 Hero Content - Centered Above the Fold */}
      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center my-auto">
        {/* Big Bold 404 */}
        <h1
          className="text-8xl sm:text-9xl md:text-[140px] font-black tracking-tight leading-none bg-gradient-to-b from-[#FFFFFF] via-[#E2E8F0] to-[#64748B] bg-clip-text text-transparent drop-shadow-[0_20px_45px_rgba(0,0,0,0.95)] mb-4 select-none"
          style={{ fontFamily: "'Gabarito', sans-serif" }}
        >
          404
        </h1>

        {/* Page Not Found Title */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-[0.18em] text-[#BC8914] mb-10 font-gabarito select-none"
          style={{ fontFamily: "'Gabarito', sans-serif" }}
        >
          PAGE NOT FOUND
        </h2>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#BC8914] to-[#D4A017] hover:from-[#A8780E] hover:to-[#BC8914] text-black font-extrabold uppercase text-xs tracking-widest px-8 py-4 rounded-[6px] shadow-[0_0_30px_rgba(188,137,20,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(188,137,20,0.6)] active:translate-y-0"
          >
            <Home className="w-4 h-4 text-black" />
            <span>RETURN TO BASE (HOME)</span>
          </Link>

          <Link
            href="/contact-us"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-[#BC8914] font-bold uppercase text-xs tracking-widest px-7 py-4 rounded-[6px] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 backdrop-blur-sm"
          >
            <Phone className="w-4 h-4 text-[#BC8914]" />
            <span>CONTACT INSTRUCTORS</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
