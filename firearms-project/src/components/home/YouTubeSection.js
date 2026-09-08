import Link from 'next/link';
import { siteConfig } from '@/data/siteConfig';

export default function YouTubeSection() {
  const channelVideos = [
    { id: 'ctpQE_j8vyg', title: 'AFN Range Training 1' },
    { id: 'JdkoNyPqL5A', title: 'AFN Range Training 2' },
    { id: '3FJ-QV8-FFc', title: 'AFN Range Training 3' },
    { id: 'mqybul_khzg', title: 'AFN Range Training 4' },
  ];

  return (
    <section className="py-20 bg-[#050505] text-white border-t border-white/10 relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
        
        {/* Section Header */}
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-wide text-white">
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

        {/* 4 Interactive YouTube Videos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {channelVideos.map((vid) => (
            <div
              key={vid.id}
              className="relative aspect-video rounded-xl overflow-hidden border border-white/15 bg-black shadow-2xl hover:border-[#BC8914] transition-colors"
            >
              <iframe
                src={`https://www.youtube.com/embed/${vid.id}?controls=1&rel=0&playsinline=1`}
                title={vid.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          ))}
        </div>

        {/* Intel / Range Statement */}
        <div className="max-w-3xl mx-auto space-y-4 pt-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide text-white">
            THE INTEL DOESN&apos;T STOP AT THE RANGE.
          </h3>
          <p className="text-sm sm:text-base text-[#D6DBDD] leading-relaxed">
            High-cadence training, home defense breakdowns, and tactical gear reviews delivered directly to your screen. Join a community of thousands who don’t just watch, but implement.
          </p>
        </div>

        {/* Instructors Phone Numbers */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-300">
          <a href={`tel:${siteConfig.phoneTodd}`} className="hover:text-[#BC8914] font-semibold transition-colors">
            Instructor Todd - {siteConfig.phoneTodd}
          </a>
          <span className="text-white/30">•</span>
          <a href={`tel:${siteConfig.phonePaul}`} className="hover:text-[#BC8914] font-semibold transition-colors">
            Instructor Paul - {siteConfig.phonePaul}
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 text-xs uppercase font-bold tracking-wider">
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

        {/* Bottom CTA */}
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
