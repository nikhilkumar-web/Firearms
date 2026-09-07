import Link from 'next/link';
import Image from 'next/image';
import { courses } from '@/data/courses';
import { siteConfig } from '@/data/siteConfig';
import YouTubeIcon from '@/components/ui/YouTubeIcon';
import { Phone, Mail, MapPin, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#05070b] border-t border-white/10 text-slate-400 text-sm">
      {/* YouTube Banner Bar */}
      <div className="bg-gradient-to-r from-[#141b26] via-[#1c2436] to-[#141b26] border-b border-white/10 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl bg-red-600/20 border border-red-500/40 flex items-center justify-center shrink-0">
              <YouTubeIcon className="w-8 h-8 text-red-500" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white tracking-wide uppercase">
                The Intel Doesn&apos;t Stop at the Range
              </h4>
              <p className="text-xs text-slate-400 max-w-xl">
                High-cadence drills, Florida Stand Your Ground legal breakdowns, and tactical gear reviews delivered straight to your screen.
              </p>
            </div>
          </div>
          <a
            href={siteConfig.youtubeSubscribeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold uppercase tracking-wider text-xs flex items-center gap-2 shadow-lg transition-all"
          >
            <YouTubeIcon className="w-4 h-4" />
            <span>Subscribe on YouTube</span>
          </a>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: About & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative w-56 h-14">
              <Image
                src={siteConfig.logo}
                alt={siteConfig.name}
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-xs leading-relaxed text-slate-400 max-w-md">
              {siteConfig.missionStatement}
            </p>
            <div className="pt-2 space-y-2">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-[#d99b26]" />
                <span>NRA & USCCA Certified Master Instructors</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#d99b26]" />
                <span>State of Florida Licensed Armed Training Facility</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h5 className="text-white font-bold uppercase tracking-wider text-xs mb-4 border-l-2 border-[#d99b26] pl-2">
              Quick Links
            </h5>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/" className="hover:text-[#f5b942] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-[#f5b942] transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#f5b942] transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/training-ranges" className="hover:text-[#f5b942] transition-colors">Training Ranges</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#f5b942] transition-colors">Gallery</Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-[#f5b942] transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h5 className="text-white font-bold uppercase tracking-wider text-xs mb-4 border-l-2 border-[#d99b26] pl-2">
              Services
            </h5>
            <ul className="space-y-2 text-xs">
              {courses.slice(0, 7).map((c) => (
                <li key={c.slug}>
                  <Link href={`/services/${c.slug}`} className="hover:text-[#f5b942] transition-colors line-clamp-1">
                    {c.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-[#f5b942] font-semibold hover:underline">
                  More Courses →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct Contacts */}
          <div>
            <h5 className="text-white font-bold uppercase tracking-wider text-xs mb-4 border-l-2 border-[#d99b26] pl-2">
              Contact Instructors
            </h5>
            <ul className="space-y-3 text-xs">
              <li>
                <a href={`tel:${siteConfig.phoneTodd}`} className="hover:text-[#f5b942] flex items-center gap-2 group">
                  <Phone className="w-3.5 h-3.5 text-[#d99b26] group-hover:scale-110 transition-transform" />
                  <span>Instructor Todd: {siteConfig.phoneTodd}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.phonePaul}`} className="hover:text-[#f5b942] flex items-center gap-2 group">
                  <Phone className="w-3.5 h-3.5 text-[#d99b26] group-hover:scale-110 transition-transform" />
                  <span>Instructor Paul: {siteConfig.phonePaul}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-[#f5b942] flex items-center gap-2 group">
                  <Mail className="w-3.5 h-3.5 text-[#d99b26] group-hover:scale-110 transition-transform" />
                  <span className="break-all">{siteConfig.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-slate-400 pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#d99b26] shrink-0 mt-0.5" />
                <span>{siteConfig.serviceArea}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <Link href="/disclosure" className="hover:text-white transition-colors">
              Disclosure
            </Link>
            <span>•</span>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">
              Terms Of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
