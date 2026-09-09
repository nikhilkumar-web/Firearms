'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { courses } from '@/data/courses';
import { partnerRanges } from '@/data/ranges';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [rangesDropdown, setRangesDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileRangesOpen, setMobileRangesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#D6DBDD] border-b border-black/10 shadow-sm transition-all h-[71px]">
      <nav className="max-w-[1300px] mx-auto px-3 sm:px-6 lg:px-8 h-[71px] flex items-center justify-between gap-3 xl:gap-4">
        
        {/* Exact Logo from Live Site */}
        <Link href="/" className="flex items-center shrink-0">
          <div className="relative w-[185px] xl:w-[215px] h-[38px]">
            <Image
              src="/images/logo/logo.png"
              alt="American Firearms Network"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Exact Desktop Navigation Menu: Gabarito semi-bold uppercase single-line */}
        <div className="hidden lg:flex items-center text-[14px] xl:text-[15px] uppercase font-semibold font-gabarito whitespace-nowrap shrink-0">
          <Link 
            href="/" 
            className={`px-2.5 xl:px-4 py-2 whitespace-nowrap font-semibold transition-colors ${
              pathname === '/' ? 'text-[#AA8802]' : 'text-[#000000] hover:text-[#AA8802]'
            }`}
          >
            Home
          </Link>
          <Link 
            href="/about-us" 
            className={`px-2.5 xl:px-4 py-2 whitespace-nowrap font-semibold transition-colors ${
              pathname === '/about-us' ? 'text-[#AA8802]' : 'text-[#000000] hover:text-[#AA8802]'
            }`}
          >
            About Us
          </Link>

          {/* Services Dropdown matching Live Site (No /services page, dropdown trigger only) */}
          <div 
            className="relative"
            onMouseEnter={() => setServicesDropdown(true)}
            onMouseLeave={() => setServicesDropdown(false)}
          >
            <div 
              role="button"
              tabIndex={0}
              className={`flex items-center gap-1 transition-colors px-2.5 xl:px-4 py-2 whitespace-nowrap font-semibold cursor-pointer ${
                pathname?.startsWith('/services') ? 'text-[#AA8802]' : 'text-[#000000] hover:text-[#AA8802]'
              }`}
            >
              <span>Services</span>
              <ChevronDown className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>

            {servicesDropdown && (
              <div 
                className="absolute top-full left-0 w-[326px] bg-white border border-[#c4c4c4] rounded-[2px] shadow-2xl py-0 z-50 overflow-hidden mt-1"
                style={{ boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.18)' }}
              >
                {courses.map((course) => {
                  const isActive = pathname === `/services/${course.slug}` || pathname === `/${course.slug}`;
                  return (
                    <Link
                      key={course.slug}
                      href={`/services/${course.slug}`}
                      className={`block px-[19px] py-[8px] text-[15px] uppercase font-semibold border-b border-[#c4c4c4] last:border-0 transition-colors leading-[22px] ${
                        isActive
                          ? 'text-[#AA8802] bg-[#FAF8F3]'
                          : 'text-[#000000] hover:bg-[#F9F9F9] hover:text-[#AA8802]'
                      }`}
                      style={{ fontFamily: "'Gabarito', sans-serif" }}
                    >
                      {course.title}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <Link 
            href="/resources" 
            className={`px-2.5 xl:px-4 py-2 whitespace-nowrap font-semibold transition-colors ${
              pathname === '/resources' ? 'text-[#AA8802]' : 'text-[#000000] hover:text-[#AA8802]'
            }`}
          >
            Resources
          </Link>

          {/* Training Ranges Dropdown matching Live Site (No /training-ranges page, dropdown trigger only) */}
          <div 
            className="relative"
            onMouseEnter={() => setRangesDropdown(true)}
            onMouseLeave={() => setRangesDropdown(false)}
          >
            <div 
              role="button"
              tabIndex={0}
              className={`flex items-center gap-1 transition-colors px-2.5 xl:px-4 py-2 whitespace-nowrap font-semibold cursor-pointer ${
                pathname?.startsWith('/training-ranges') ? 'text-[#AA8802]' : 'text-[#000000] hover:text-[#AA8802]'
              }`}
            >
              <span>Training Ranges</span>
              <ChevronDown className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>

            {rangesDropdown && (
              <div 
                className="absolute top-full left-0 w-[326px] bg-white border border-[#c4c4c4] rounded-[2px] shadow-2xl py-0 z-50 overflow-hidden mt-1"
                style={{ boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.18)' }}
              >
                {partnerRanges.map((range) => {
                  const isActive = pathname === `/training-ranges/${range.slug}` || pathname === `/${range.slug}`;
                  return (
                    <Link
                      key={range.slug}
                      href={`/training-ranges/${range.slug}`}
                      className={`block px-[19px] py-[8px] text-[15px] uppercase font-semibold border-b border-[#c4c4c4] last:border-0 transition-colors leading-[22px] ${
                        isActive
                          ? 'text-[#AA8802] bg-[#FAF8F3]'
                          : 'text-[#000000] hover:bg-[#F9F9F9] hover:text-[#AA8802]'
                      }`}
                      style={{ fontFamily: "'Gabarito', sans-serif" }}
                    >
                      {range.name}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <Link 
            href="/gallery" 
            className={`px-2.5 xl:px-4 py-2 whitespace-nowrap font-semibold transition-colors ${
              pathname === '/gallery' ? 'text-[#AA8802]' : 'text-[#000000] hover:text-[#AA8802]'
            }`}
          >
            Gallery
          </Link>
          <Link 
            href="/contact-us" 
            onClick={() => {
              if (typeof window !== 'undefined' && window.location.pathname.startsWith('/contact-us')) {
                window.dispatchEvent(new CustomEvent('open-contact-popup'));
              }
            }}
            className={`px-2.5 xl:px-4 py-2 whitespace-nowrap font-semibold transition-colors ${
              pathname?.startsWith('/contact-us') ? 'text-[#AA8802]' : 'text-[#000000] hover:text-[#AA8802]'
            }`}
          >
            Contact Us
          </Link>
        </div>

        {/* Exact "CONSULT TODAY!" Gold Button matching Elementor computed CSS */}
        <div className="hidden lg:flex items-center shrink-0">
          <Link
            href="/contact-us"
            onClick={() => {
              if (typeof window !== 'undefined' && window.location.pathname.startsWith('/contact-us')) {
                window.dispatchEvent(new CustomEvent('open-contact-popup'));
              }
            }}
            style={{
              backgroundImage: 'linear-gradient(219deg, #B1800F 0%, #000000 67%)',
              border: '1px solid #B1800F',
              borderRadius: '3px'
            }}
            className="text-white font-medium uppercase text-[14px] xl:text-[15px] leading-normal tracking-normal transition-all hover:brightness-110 shadow-sm font-roboto px-5 xl:px-7 py-[11px] whitespace-nowrap inline-flex items-center justify-center"
          >
            CONSULT TODAY!
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#000000]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#D6DBDD] border-b border-gray-300 px-5 sm:px-6 py-4 space-y-2 text-sm font-bold uppercase text-[#000000] shadow-lg max-h-[85vh] overflow-y-auto">
          <Link 
            href="/" 
            onClick={() => setMobileMenuOpen(false)} 
            className={`block py-1.5 font-semibold transition-colors ${pathname === '/' ? 'text-[#AA8802]' : 'hover:text-[#AA8802]'}`}
          >
            Home
          </Link>
          
          <Link 
            href="/about-us" 
            onClick={() => setMobileMenuOpen(false)} 
            className={`block py-1.5 font-semibold transition-colors ${pathname === '/about-us' ? 'text-[#AA8802]' : 'hover:text-[#AA8802]'}`}
          >
            About Us
          </Link>

          {/* Mobile Services Accordion (No /services page link, direct toggle) */}
          <div className="border-y border-black/10 py-1.5">
            <button 
              type="button"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className={`w-full flex items-center justify-between py-1 text-left font-semibold hover:text-[#AA8802] transition-colors ${
                pathname?.startsWith('/services') ? 'text-[#AA8802]' : ''
              }`}
            >
              <span>Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180 text-[#AA8802]' : ''}`} />
            </button>
            {mobileServicesOpen && (
              <div className="mt-1 pl-3 pr-1 py-2 space-y-2 border-l-2 border-[#B1800F] bg-black/5 rounded-r">
                {courses.map((course) => {
                  const isActive = pathname === `/services/${course.slug}` || pathname === `/${course.slug}`;
                  return (
                    <Link
                      key={course.slug}
                      href={`/services/${course.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block text-xs py-1 transition-colors ${
                        isActive ? 'text-[#AA8802] font-bold' : 'text-gray-800 font-semibold hover:text-[#AA8802]'
                      }`}
                    >
                      {course.title}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <Link 
            href="/resources" 
            onClick={() => setMobileMenuOpen(false)} 
            className={`block py-1.5 font-semibold transition-colors ${pathname === '/resources' ? 'text-[#AA8802]' : 'hover:text-[#AA8802]'}`}
          >
            Resources
          </Link>

          {/* Mobile Training Ranges Accordion (No /training-ranges page link, direct toggle) */}
          <div className="border-b border-black/10 py-1.5">
            <button 
              type="button"
              onClick={() => setMobileRangesOpen(!mobileRangesOpen)}
              className={`w-full flex items-center justify-between py-1 text-left font-semibold hover:text-[#AA8802] transition-colors ${
                pathname?.startsWith('/training-ranges') ? 'text-[#AA8802]' : ''
              }`}
            >
              <span>Training Ranges</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileRangesOpen ? 'rotate-180 text-[#AA8802]' : ''}`} />
            </button>
            {mobileRangesOpen && (
              <div className="mt-1 pl-3 pr-1 py-2 space-y-2 border-l-2 border-[#B1800F] bg-black/5 rounded-r">
                {partnerRanges.map((range) => {
                  const isActive = pathname === `/training-ranges/${range.slug}` || pathname === `/${range.slug}`;
                  return (
                    <Link
                      key={range.slug}
                      href={`/training-ranges/${range.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block text-xs py-1 transition-colors ${
                        isActive ? 'text-[#AA8802] font-bold' : 'text-gray-800 font-semibold hover:text-[#AA8802]'
                      }`}
                    >
                      {range.name}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <Link 
            href="/gallery" 
            onClick={() => setMobileMenuOpen(false)} 
            className={`block py-1.5 font-semibold transition-colors ${pathname === '/gallery' ? 'text-[#AA8802]' : 'hover:text-[#AA8802]'}`}
          >
            Gallery
          </Link>

          <Link 
            href="/contact-us" 
            onClick={() => {
              setMobileMenuOpen(false);
              if (typeof window !== 'undefined' && window.location.pathname.startsWith('/contact-us')) {
                window.dispatchEvent(new CustomEvent('open-contact-popup'));
              }
            }} 
            className={`block py-1.5 font-semibold transition-colors ${pathname?.startsWith('/contact-us') ? 'text-[#AA8802]' : 'hover:text-[#AA8802]'}`}
          >
            Contact Us
          </Link>

          <div className="pt-2">
            <Link
              href="/contact-us"
              onClick={() => {
                setMobileMenuOpen(false);
                if (typeof window !== 'undefined' && window.location.pathname.startsWith('/contact-us')) {
                  window.dispatchEvent(new CustomEvent('open-contact-popup'));
                }
              }}
              style={{
                backgroundImage: 'linear-gradient(219deg, #B1800F 0%, #000000 67%)',
                border: '1px solid #B1800F',
                borderRadius: '3px'
              }}
              className="block text-center py-3 text-white font-medium uppercase text-xs tracking-wider font-roboto"
            >
              CONSULT TODAY!
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
