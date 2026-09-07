import Image from 'next/image';
import { siteConfig } from '@/data/siteConfig';
import YouTubeIcon from '@/components/ui/YouTubeIcon';
import { Play, CheckCircle2 } from 'lucide-react';

export default function YouTubeSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#07090e] relative overflow-hidden">
      {/* Background with video-bg image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/video/video-bg.png"
          alt="American Firearms Network YouTube Channel"
          fill
          className="object-cover opacity-20 filter brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07090e] via-[#07090e]/80 to-[#07090e]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="tactical-glass-card rounded-3xl p-8 sm:p-14 border border-white/10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Col */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-widest">
                <YouTubeIcon className="w-4 h-4" />
                Digital Tactical Intelligence
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                SUBSCRIBE TO OUR <span className="text-red-500">YOUTUBE CHANNEL</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                High-cadence training, home defense breakdowns, and tactical gear reviews delivered directly to your screen. Join a community of thousands across Florida and beyond who don&apos;t just watch, but implement.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                  <span>Florida &quot;Stand Your Ground&quot; legal analysis & ethical shoot/no-shoot breakdowns</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                  <span>Concealed carry holster and everyday carry (EDC) gear stress tests</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                  <span>Real-time biomechanic tips from Senior Instructors Todd and Paul</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={siteConfig.youtubeSubscribeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-2xl flex items-center gap-2 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <YouTubeIcon className="w-4 h-4" />
                  <span>Subscribe Now</span>
                </a>
                <a
                  href={siteConfig.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all"
                >
                  Browse Channel Library
                </a>
              </div>
            </div>

            {/* Right Col: Video Preview Banner Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden border border-white/15 shadow-2xl group">
                <Image
                  src="/images/video/video-bg.png"
                  alt="Watch AFN Video"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors flex items-center justify-center">
                  <a
                    href={siteConfig.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-20 h-20 rounded-full bg-red-600 hover:bg-red-500 text-white flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform"
                    aria-label="Play video"
                  >
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </a>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md p-3 rounded-xl text-xs text-white">
                  <div className="font-bold">The American Firearms Network</div>
                  <div className="text-slate-400 text-[11px]">@AMERICANFIREARMSNETWORKS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
