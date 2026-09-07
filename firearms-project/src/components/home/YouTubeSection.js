import Image from 'next/image';
import { siteConfig } from '@/data/siteConfig';

export default function YouTubeSection() {
  return (
    <section className="py-20 bg-[#000000] text-white border-t border-white/10 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="/images/video/video-bg.png"
          alt="AFN YouTube"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide text-white">
            Subscribe To Our YouTube Channel
          </h2>
          <div>
            <a
              href={siteConfig.youtubeSubscribeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 rounded bg-[#EB0F06] hover:bg-[#cf2e2e] text-white font-extrabold uppercase text-xs tracking-wider shadow-xl transition-transform hover:scale-105"
            >
              Subscribe Now
            </a>
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-4 pt-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-wide text-white">
            THE INTEL DOESN&apos;T STOP AT THE RANGE.
          </h2>
          <p className="text-sm sm:text-base text-[#D6DBDD] leading-relaxed">
            High-cadence training, home defense breakdowns, and tactical gear reviews delivered directly to your screen. Join a community of thousands who don’t just watch, but implement.
          </p>
        </div>

        {/* Instructors Phone Numbers & Social Links */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-300">
          <a href={`tel:${siteConfig.phoneTodd}`} className="hover:text-[#BC8914] font-semibold">
            Instructor Todd - {siteConfig.phoneTodd}
          </a>
          <span className="text-white/30">•</span>
          <a href={`tel:${siteConfig.phonePaul}`} className="hover:text-[#BC8914] font-semibold">
            Instructor Paul - {siteConfig.phonePaul}
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 text-xs uppercase font-bold tracking-wider pt-2">
          <a
            href={siteConfig.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-red-500 transition-colors"
          >
            Youtube
          </a>
          <span className="text-white/30">•</span>
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#BC8914] transition-colors"
          >
            Instagram
          </a>
          <span className="text-white/30">•</span>
          <a
            href={siteConfig.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#BC8914] transition-colors"
          >
            Facebook
          </a>
        </div>

        <div>
          <a
            href={siteConfig.youtubeSubscribeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3.5 rounded bg-[#EB0F06] hover:bg-[#cf2e2e] text-white font-extrabold uppercase text-xs tracking-wider shadow-xl transition-transform hover:scale-105"
          >
            Subscribe Now
          </a>
        </div>
      </div>
    </section>
  );
}
