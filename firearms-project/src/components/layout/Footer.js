'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { courses } from '@/data/courses';
import { siteConfig } from '@/data/siteConfig';
import SubscribeButton from '@/components/common/SubscribeButton';

export default function Footer() {
  const pathname = usePathname();
  const isThankYou = pathname?.startsWith('/thank-you');

  return (
    <footer className={`relative ${isThankYou ? 'bg-[#D6DBDD]' : 'bg-transparent'} text-[#000000] overflow-visible`}>

      {/* 1. PROMO / YOUTUBE SECTION (Elementor 1e76730 / 5381952) */}
      <div className={isThankYou ? 'bg-[#D6DBDD] w-full' : ''}>
        <div className="relative z-20 max-w-[1290px] mx-auto px-4 sm:px-6 lg:px-0">
        <div
          className="relative rounded-[20px] overflow-hidden shadow-2xl -mb-[50px] sm:-mb-[70px] lg:-mb-[116px] w-full min-h-0 lg:h-[282px] bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://american-firearms.s3-eu-central-2.ionoscloud.com/images/about/range-service.webp)',
          }}
        >
          {/* Background Overlay: linear-gradient(220deg, rgb(185, 133, 20) 0%, rgb(0, 0, 0) 55%) with opacity 0.78 */}
          <div
            className="absolute inset-0 pointer-events-none transition-all duration-300 rounded-[20px]"
            style={{
              backgroundImage: 'linear-gradient(220deg, rgb(185, 133, 20) 0%, rgb(0, 0, 0) 55%)',
              opacity: 0.78,
            }}
          />

          {/* Inner Content Container: Elementor max-width: 1100px with 30px padding */}
          <div className="relative z-10 p-5 sm:p-6 lg:p-[30px] flex items-center justify-center h-full">
            <div className="w-full max-w-[1100px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-[20px]">

              {/* Column 1: Heading + Description (Elementor 9ffa18c - 38.79%) */}
              <div className="w-full lg:w-[415px] lg:h-[202px] flex flex-col justify-center text-center lg:text-left">
                <h2
                  className="text-[22px] sm:text-[26px] md:text-[28px] lg:text-[32px] font-semibold text-white font-gabarito leading-[28px] sm:leading-[34px] lg:leading-[40px] max-w-full lg:w-[395px]"
                  style={{ fontFamily: "'Gabarito', sans-serif" }}
                >
                  THE INTEL DOESN&apos;T STOP AT THE RANGE.
                </h2>
                <p
                  className="text-[14px] sm:text-[15px] lg:text-[16px] leading-[20px] sm:leading-[22px] text-[#FFFFFF] font-roboto font-normal mt-2.5 max-w-xl mx-auto lg:mx-0"
                  style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                  High-cadence training, home defense breakdowns, and tactical gear reviews delivered directly to your screen. Join a community of thousands who don&apos;t just watch, but implement.
                </p>
              </div>

              {/* Column 2: YouTube Video Area (Elementor 308b38c - 33.707%) */}
              <div className="w-full max-w-[360px] lg:w-[360px] lg:h-[202px] flex items-center justify-center">
                <div
                  className="relative w-full aspect-video lg:aspect-auto lg:w-[360px] lg:h-[202px] overflow-hidden bg-black rounded-[10px]"
                  style={{
                    border: '1px solid rgba(184, 134, 21, 0.55)',
                    boxShadow: '0px 0px 10px 0px rgba(184, 134, 21, 0.43)',
                  }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/3xn-gXFSZDc?start=36&autoplay=1&mute=1&loop=1&playlist=3xn-gXFSZDc&controls=1&rel=0&playsinline=1&modestbranding=1"
                    title="AFN Range Intel Video"
                    className="w-full h-full rounded-[10px]"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Column 3: Contact Outer Card (Elementor c6cab99 - 30.121%) */}
              <div className="w-full max-w-[320px] lg:w-[305px] lg:h-[202px] flex items-center justify-center lg:justify-end">
                <div
                  className="w-full lg:w-[305px] p-3.5 sm:p-4 lg:p-[10px] rounded-[10px] flex flex-col justify-between items-center relative bg-black/45 backdrop-blur-sm gap-3 lg:gap-0 lg:h-[202px]"
                  style={{
                    border: '1px solid rgb(211, 150, 12)',
                    boxShadow: 'rgba(0, 0, 0, 0.26) 0px 0px 10px 0px',
                  }}
                >
                  {/* Hotline Row with White Circle Badge */}
                  <div className="flex items-center gap-2.5 text-left w-full justify-start pl-1">
                    <div className="w-[36px] h-[36px] rounded-full bg-white flex items-center justify-center text-black shrink-0 shadow">
                      <svg aria-hidden="true" className="w-[16px] h-[16px] fill-current" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M97.333 506.966c-129.874-129.874-129.681-340.252 0-469.933 5.698-5.698 14.527-6.632 21.263-2.422l64.817 40.513a17.187 17.187 0 0 1 6.849 20.958l-32.408 81.021a17.188 17.188 0 0 1-17.669 10.719l-55.81-5.58c-21.051 58.261-20.612 122.471 0 179.515l55.811-5.581a17.188 17.188 0 0 1 17.669 10.719l32.408 81.022a17.188 17.188 0 0 1-6.849 20.958l-64.817 40.513a17.19 17.19 0 0 1-21.264-2.422zM247.126 95.473c11.832 20.047 11.832 45.008 0 65.055-3.95 6.693-13.108 7.959-18.718 2.581l-5.975-5.726c-3.911-3.748-4.793-9.622-2.261-14.41a32.063 32.063 0 0 0 0-29.945c-2.533-4.788-1.65-10.662 2.261-14.41l5.975-5.726c5.61-5.378 14.768-4.112 18.718 2.581zm91.787-91.187c60.14 71.604 60.092 175.882 0 247.428-4.474 5.327-12.53 5.746-17.552.933l-5.798-5.557c-4.56-4.371-4.977-11.529-.93-16.379 49.687-59.538 49.646-145.933 0-205.422-4.047-4.85-3.631-12.008.93-16.379l5.798-5.557c5.022-4.813 13.078-4.394 17.552.933zm-45.972 44.941c36.05 46.322 36.108 111.149 0 157.546-4.39 5.641-12.697 6.251-17.856 1.304l-5.818-5.579c-4.4-4.219-4.998-11.095-1.285-15.931 26.536-34.564 26.534-82.572 0-117.134-3.713-4.836-3.115-11.711 1.285-15.931l5.818-5.579c5.159-4.947 13.466-4.337 17.856 1.304z" />
                      </svg>
                    </div>
                    <div className="leading-tight">
                      <h3
                        className="text-[13px] sm:text-[14px] lg:text-[15px] font-semibold text-white font-gabarito whitespace-nowrap"
                        style={{ fontFamily: "'Gabarito', sans-serif" }}
                      >
                        <a href={`tel:${siteConfig.phoneTodd}`} className="hover:text-[#FDD247] transition-colors">
                          {siteConfig.phoneToddDisplay}
                        </a>
                      </h3>
                      <p
                        className="font-roboto text-[13px] sm:text-[14px] lg:text-[15px] font-medium text-white mt-0.5 whitespace-nowrap"
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                      >
                        <a href={`tel:${siteConfig.phonePaul}`} className="hover:text-[#FDD247] transition-colors">
                          {siteConfig.phonePaulDisplay}
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Social Media Circular Badges */}
                  <div className="flex items-center justify-center gap-[6px] my-2">
                    <a
                      href="https://www.youtube.com/@AMERICANFIREARMSNETWORKS"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 rounded-full bg-[#EB0F06] flex items-center justify-center text-white hover:scale-110 transition-transform shadow"
                      aria-label="YouTube"
                    >
                      <svg aria-hidden="true" className="w-3.5 h-3.5 fill-current" viewBox="0 0 576 512">
                        <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/americanfirearmsnetwork2025/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 rounded-full bg-[#B20AAF] flex items-center justify-center text-white hover:scale-110 transition-transform shadow"
                      aria-label="Instagram"
                    >
                      <svg aria-hidden="true" className="w-3.5 h-3.5 fill-current" viewBox="0 0 448 512">
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=61561220433692"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 rounded-full bg-[#085FB1] flex items-center justify-center text-white hover:scale-110 transition-transform shadow"
                      aria-label="Facebook"
                    >
                      <svg aria-hidden="true" className="w-3.5 h-3.5 fill-current" viewBox="0 0 512 512">
                        <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                      </svg>
                    </a>
                  </div>

                  {/* Reusable Subscribe Button */}
                  <SubscribeButton className="w-full" />
                </div>
              </div>

            </div>
          </div>
        </div>
        </div>
      </div>

      {/* 2. BLACK FOOTER WITH TACTICAL RANGE BACKGROUND (Elementor 320dbb26) */}
      <div
        className="relative bg-[#000000] text-white overflow-hidden"
        style={{
          backgroundImage: 'url(https://american-firearms.s3-eu-central-2.ionoscloud.com/images/gallery/gallery-tactical-carbine.png)',
          backgroundPosition: 'center right',
          backgroundSize: 'cover'
        }}
      >
        {/* Dark Background Overlay */}
        <div
          className="absolute inset-0 bg-[#000000]"
          style={{ opacity: 0.84 }}
        />

        {/* Content Container (Elementor 320dbb26: padding: 150px 0px 30px 0px) */}
        <div className="relative z-10 max-w-[1290px] mx-auto px-4 sm:px-6 lg:px-[15px] pt-[75px] sm:pt-[100px] md:pt-[120px] lg:pt-[150px] pb-[30px]">
          {/* 4 Columns: 27.093%, 17.403%, 23.557%, 31.633% with responsive layout */}
          <div className="flex flex-col sm:flex-row flex-wrap lg:flex-nowrap justify-between gap-8 sm:gap-6 lg:gap-2">

            {/* Col 1 (27% width): About & Logo */}
            <div className="w-full sm:w-[48%] lg:w-[27%] p-2 sm:p-[10px] text-center sm:text-left">
              <div className="relative w-[230px] sm:w-[275px] h-[50px] sm:h-[58px] mb-4 mx-auto sm:mx-0">
                <Image
                  src="https://american-firearms.s3-eu-central-2.ionoscloud.com/images/logo/footer-logo-full.webp"
                  alt="American Firearms Network"
                  fill
                  sizes="(max-width: 768px) 230px, 275px"
                  className="object-contain object-center sm:object-left"
                />
              </div>
              <p
                className="font-roboto text-[15px] sm:text-[16px] text-[#FFFFFF] font-normal leading-[22px] text-justify"
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                <b>The American Firearms Network (AFN)</b> was established in West Palm Beach, Florida, with a singular, unyielding purpose: to bridge the critical gap between static range education and real-world proficiency.
              </p>
            </div>

            {/* Col 2 (15.5% width): Quick Links */}
            <div className="w-full sm:w-[48%] lg:w-[15.5%] p-2 sm:p-[10px] text-center sm:text-left">
              <h2
                className="text-[20px] sm:text-[23px] font-bold text-white uppercase tracking-wider font-gabarito mb-3 sm:mb-4"
                style={{ fontFamily: "'Gabarito', sans-serif" }}
              >
                Quick Links
              </h2>
              <ul className="space-y-[6px] font-roboto text-[16px] leading-[23px] font-medium" style={{ fontFamily: "'Roboto', sans-serif" }}>
                <li>
                  <Link href="/" className="text-[#FFFFFF] hover:text-[#FDD247] transition-colors">Home</Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-[#FFFFFF] hover:text-[#FDD247] transition-colors">About Us</Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-[#FFFFFF] hover:text-[#FDD247] transition-colors">Gallery</Link>
                </li>
                <li>
                  <Link href="/resources" className="text-[#FFFFFF] hover:text-[#FDD247] transition-colors">Resources</Link>
                </li>
                <li>
                  <Link href="/contact-us?popup=true" className="text-[#FFFFFF] hover:text-[#FDD247] transition-colors">Contact Us</Link>
                </li>
              </ul>
            </div>

            {/* Col 3 (26% width): Services */}
            <div className="w-full sm:w-[48%] lg:w-[26%] p-2 sm:p-[10px] text-center sm:text-left">
              <h2
                className="text-[20px] sm:text-[23px] font-bold text-white uppercase tracking-wider font-gabarito mb-3 sm:mb-4"
                style={{ fontFamily: "'Gabarito', sans-serif" }}
              >
                Services
              </h2>
              <ul className="space-y-[4px] font-roboto text-[16px] leading-[23px] font-medium" style={{ fontFamily: "'Roboto', sans-serif" }}>
                {courses.map((c) => (
                  <li key={c.slug}>
                    <Link href={`/services/${c.slug}`} className="text-[#FFFFFF] hover:text-[#FDD247] transition-colors whitespace-nowrap">
                      {c.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 (32% width): Contact & Legal */}
            <div className="w-full sm:w-[48%] lg:w-[32%] p-2 sm:p-[10px] text-center sm:text-left">
              {/* Contact Sub-section */}
              <h2
                className="text-[20px] sm:text-[23px] font-bold text-white uppercase tracking-wider font-gabarito mb-3 sm:mb-4"
                style={{ fontFamily: "'Gabarito', sans-serif" }}
              >
                Contact
              </h2>
              <ul className="space-y-[7px] font-roboto text-[16px] leading-[23px] font-medium mb-5 flex flex-col items-center sm:items-start" style={{ fontFamily: "'Roboto', sans-serif" }}>
                <li>
                  <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2.5 text-[#FFFFFF] hover:text-[#FDD247] transition-colors">
                    <svg aria-hidden="true" className="w-[16px] h-[16px] fill-white shrink-0" viewBox="0 0 512 512">
                      <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.467 70.424 171.074 48 152.805V112h416zM48 400V214.398c22.995 18.254 58.423 45.923 121.266 95.342 18.124 14.256 53.772 48.247 86.734 48.26 32.969-.013 68.618-34.011 86.735-48.26 62.844-49.419 98.272-77.088 121.265-95.342V400H48z" />
                    </svg>
                    <span>{siteConfig.email}</span>
                  </a>
                </li>
                <li>
                  <a href={`tel:${siteConfig.phoneTodd}`} className="flex items-center gap-2.5 text-[#FFFFFF] hover:text-[#FDD247] transition-colors">
                    <svg aria-hidden="true" className="w-[16px] h-[16px] fill-white shrink-0" viewBox="0 0 384 512">
                      <path d="M97.333 506.966c-129.874-129.874-129.681-340.252 0-469.933 5.698-5.698 14.527-6.632 21.263-2.422l64.817 40.513a17.187 17.187 0 0 1 6.849 20.958l-32.408 81.021a17.188 17.188 0 0 1-17.669 10.719l-55.81-5.58c-21.051 58.261-20.612 122.471 0 179.515l55.811-5.581a17.188 17.188 0 0 1 17.669 10.719l32.408 81.022a17.188 17.188 0 0 1-6.849 20.958l-64.817 40.513a17.19 17.19 0 0 1-21.264-2.422zM247.126 95.473c11.832 20.047 11.832 45.008 0 65.055-3.95 6.693-13.108 7.959-18.718 2.581l-5.975-5.726c-3.911-3.748-4.793-9.622-2.261-14.41a32.063 32.063 0 0 0 0-29.945c-2.533-4.788-1.65-10.662 2.261-14.41l5.975-5.726c5.61-5.378 14.768-4.112 18.718 2.581zm91.787-91.187c60.14 71.604 60.092 175.882 0 247.428-4.474 5.327-12.53 5.746-17.552.933l-5.798-5.557c-4.56-4.371-4.977-11.529-.93-16.379 49.687-59.538 49.646-145.933 0-205.422-4.047-4.85-3.631-12.008.93-16.379l5.798-5.557c5.022-4.813 13.078-4.394 17.552.933zm-45.972 44.941c36.05 46.322 36.108 111.149 0 157.546-4.39 5.641-12.697 6.251-17.856 1.304l-5.818-5.579c-4.4-4.219-4.998-11.095-1.285-15.931 26.536-34.564 26.534-82.572 0-117.134-3.713-4.836-3.115-11.711 1.285-15.931l5.818-5.579c5.159-4.947 13.466-4.337 17.856 1.304z" />
                    </svg>
                    <span>{siteConfig.phoneToddDisplay}</span>
                  </a>
                </li>
                <li>
                  <a href={`tel:${siteConfig.phonePaul}`} className="flex items-center gap-2.5 text-[#FFFFFF] hover:text-[#FDD247] transition-colors">
                    <svg aria-hidden="true" className="w-[16px] h-[16px] fill-white shrink-0" viewBox="0 0 384 512">
                      <path d="M97.333 506.966c-129.874-129.874-129.681-340.252 0-469.933 5.698-5.698 14.527-6.632 21.263-2.422l64.817 40.513a17.187 17.187 0 0 1 6.849 20.958l-32.408 81.021a17.188 17.188 0 0 1-17.669 10.719l-55.81-5.58c-21.051 58.261-20.612 122.471 0 179.515l55.811-5.581a17.188 17.188 0 0 1 17.669 10.719l32.408 81.022a17.188 17.188 0 0 1-6.849 20.958l-64.817 40.513a17.19 17.19 0 0 1-21.264-2.422zM247.126 95.473c11.832 20.047 11.832 45.008 0 65.055-3.95 6.693-13.108 7.959-18.718 2.581l-5.975-5.726c-3.911-3.748-4.793-9.622-2.261-14.41a32.063 32.063 0 0 0 0-29.945c-2.533-4.788-1.65-10.662 2.261-14.41l5.975-5.726c5.61-5.378 14.768-4.112 18.718 2.581zm91.787-91.187c60.14 71.604 60.092 175.882 0 247.428-4.474 5.327-12.53 5.746-17.552.933l-5.798-5.557c-4.56-4.371-4.977-11.529-.93-16.379 49.687-59.538 49.646-145.933 0-205.422-4.047-4.85-3.631-12.008.93-16.379l5.798-5.557c5.022-4.813 13.078-4.394 17.552.933zm-45.972 44.941c36.05 46.322 36.108 111.149 0 157.546-4.39 5.641-12.697 6.251-17.856 1.304l-5.818-5.579c-4.4-4.219-4.998-11.095-1.285-15.931 26.536-34.564 26.534-82.572 0-117.134-3.713-4.836-3.115-11.711 1.285-15.931l5.818-5.579c5.159-4.947 13.466-4.337 17.856 1.304z" />
                    </svg>
                    <span>{siteConfig.phonePaulDisplay}</span>
                  </a>
                </li>
              </ul>

              {/* Legal Sub-section */}
              <h2
                className="text-[20px] sm:text-[23px] font-bold text-white uppercase tracking-wider font-gabarito mb-3 sm:mb-4"
                style={{ fontFamily: "'Gabarito', sans-serif" }}
              >
                Legal
              </h2>
              <ul className="space-y-[6px] font-roboto text-[16px] leading-[23px] font-medium flex flex-col items-center sm:items-start" style={{ fontFamily: "'Roboto', sans-serif" }}>
                <li>
                  <Link href="/disclosure" className="text-[#FFFFFF] hover:text-[#FDD247] transition-colors">Disclosure</Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-[#FFFFFF] hover:text-[#FDD247] transition-colors">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="text-[#FFFFFF] hover:text-[#FDD247] transition-colors">Terms Of Service</Link>
                </li>
                <li>
                  <Link href="/firearm-safety-educational-disclaimer" className="text-[#FFFFFF] hover:text-[#FDD247] transition-colors">Firearm Safety &amp; Educational Disclaimer</Link>
                </li>
                <li>
                  <Link href="/liability-waiver-release-of-indemnity" className="text-[#FFFFFF] hover:text-[#FDD247] transition-colors">Liability Waiver &amp; Release of Indemnity</Link>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar matching Elementor 17918aec & Screenshot 1 */}
          <div className="mt-6 pt-2 text-center font-roboto text-[14px]">
            <p>
              <Link href="/" className="text-[#EB0F06] hover:underline font-normal">
                American Firearms Network
              </Link>
              <span className="text-[#FFFFFF]"> © 2026. All Rights Reserved.</span>
            </p>
          </div>

        </div>
      </div>

    </footer>
  );
}
