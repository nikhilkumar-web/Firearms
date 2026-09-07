import Link from 'next/link';
import Image from 'next/image';
import { courses } from '@/data/courses';
import { siteConfig } from '@/data/siteConfig';

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-[#A5AAAB] text-xs border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: About */}
          <div className="space-y-4">
            <div className="relative w-56 h-14">
              <Image
                src={siteConfig.logo}
                alt="American Firearms Network"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="leading-relaxed text-[#D6DBDD]">
              The American Firearms Network (AFN) was established in West Palm Beach, Florida, with a singular, unyielding purpose: to bridge the critical gap between static range education and real-world proficiency.
            </p>
            <div className="pt-2">
              <a
                href={siteConfig.youtubeSubscribeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2.5 rounded bg-[#EB0F06] hover:bg-[#cf2e2e] text-white font-extrabold uppercase text-[11px] tracking-wider transition-colors"
              >
                SUBSCRIBE NOW
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">Resources</Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider">
              Services
            </h2>
            <ul className="space-y-1.5">
              {courses.map((c) => (
                <li key={c.slug}>
                  <Link href={`/services/${c.slug}`} className="hover:text-white transition-colors">
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Legal */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-sm font-bold text-white uppercase tracking-wider">
                Contact
              </h2>
              <ul className="space-y-2">
                <li>
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <a href={`tel:${siteConfig.phoneTodd}`} className="hover:text-white font-medium">
                    Instructor Todd - {siteConfig.phoneTodd}
                  </a>
                </li>
                <li>
                  <a href={`tel:${siteConfig.phonePaul}`} className="hover:text-white font-medium">
                    Instructor Paul - {siteConfig.phonePaul}
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3 pt-2 border-t border-white/5">
              <h2 className="text-sm font-bold text-white uppercase tracking-wider">
                Legal
              </h2>
              <ul className="space-y-1.5 text-[11px]">
                <li>
                  <Link href="/disclosure" className="hover:text-white">Disclosure</Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="hover:text-white">Terms Of Service</Link>
                </li>
                <li>
                  <Link href="/disclosure" className="hover:text-white">Firearm Safety &amp; Educational Disclaimer</Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="hover:text-white">Liability Waiver &amp; Release of Indemnity</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-[#7A7A7A]">
          <Link href="/" className="text-white hover:underline font-semibold">American Firearms Network</Link> © 2026. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
