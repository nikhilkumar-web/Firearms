'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { courses } from '@/data/courses';
import { partnerRanges } from '@/data/ranges';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [rangesDropdown, setRangesDropdown] = useState(false);

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

        {/* Exact Desktop Navigation Menu: Gabarito bold uppercase single-line */}
        <div className="hidden lg:flex items-center text-[14px] xl:text-[15px] uppercase font-bold font-gabarito text-[#000000] whitespace-nowrap shrink-0">
          <Link 
            href="/" 
            className="text-[#000000] hover:text-[#AA8802] transition-colors px-2.5 xl:px-4 py-2 whitespace-nowrap font-medium"
          >
            Home
          </Link>
          <Link 
            href="/about-us" 
            className="text-[#000000] hover:text-[#AA8802] transition-colors px-2.5 xl:px-4 py-2 whitespace-nowrap font-medium"
          >
            About Us
          </Link>

          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setServicesDropdown(true)}
            onMouseLeave={() => setServicesDropdown(false)}
          >
            <Link 
              href="/services" 
              className="flex items-center gap-1 text-[#000000] hover:text-[#AA8802] transition-colors px-2.5 xl:px-4 py-2 whitespace-nowrap font-medium"
            >
              <span>Services</span>
              <ChevronDown className="w-3.5 h-3.5 stroke-[2.5]" />
            </Link>

            {servicesDropdown && (
              <div className="absolute top-full left-0 w-80 bg-white border border-[#c4c4c4] rounded shadow-xl py-2 z-50">
                {courses.map((course) => (
                  <Link
                    key={course.slug}
                    href={`/services/${course.slug}`}
                    className="block px-4 py-2 text-xs normal-case text-[#333333] hover:bg-[#f5f5f5] hover:text-[#AA8802] border-b border-[#f0f0f0] last:border-0 transition-colors font-roboto"
                  >
                    {course.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link 
            href="/resources" 
            className="text-[#000000] hover:text-[#AA8802] transition-colors px-2.5 xl:px-4 py-2 whitespace-nowrap font-medium"
          >
            Resources
          </Link>

          {/* Training Ranges Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setRangesDropdown(true)}
            onMouseLeave={() => setRangesDropdown(false)}
          >
            <Link 
              href="/training-ranges" 
              className="flex items-center gap-1 text-[#000000] hover:text-[#AA8802] transition-colors px-2.5 xl:px-4 py-2 whitespace-nowrap font-medium"
            >
              <span>Training Ranges</span>
              <ChevronDown className="w-3.5 h-3.5 stroke-[2.5]" />
            </Link>

            {rangesDropdown && (
              <div className="absolute top-full left-0 w-80 bg-white border border-[#c4c4c4] rounded shadow-xl py-2 z-50">
                {partnerRanges.map((range) => (
                  <Link
                    key={range.name}
                    href="/training-ranges"
                    className="block px-4 py-2 text-xs normal-case text-[#333333] hover:bg-[#f5f5f5] hover:text-[#AA8802] border-b border-[#f0f0f0] last:border-0 transition-colors font-roboto"
                  >
                    {range.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link 
            href="/gallery" 
            className="text-[#000000] hover:text-[#AA8802] transition-colors px-2.5 xl:px-4 py-2 whitespace-nowrap font-medium"
          >
            Gallery
          </Link>
          <Link 
            href="/contact-us" 
            className="text-[#000000] hover:text-[#AA8802] transition-colors px-2.5 xl:px-4 py-2 whitespace-nowrap font-medium"
          >
            Contact Us
          </Link>
        </div>

        {/* Exact "CONSULT TODAY!" Gold Button matching Elementor computed CSS */}
        <div className="hidden lg:flex items-center shrink-0">
          <Link
            href="/contact-us"
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
        <div className="lg:hidden bg-[#D6DBDD] border-b border-gray-300 px-6 py-5 space-y-3 text-sm font-bold uppercase text-[#000000] shadow-lg">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-[#AA8802]">
            Home
          </Link>
          <Link href="/about-us" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#AA8802]">
            About Us
          </Link>
          <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#AA8802]">
            Services
          </Link>
          <Link href="/resources" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#AA8802]">
            Resources
          </Link>
          <Link href="/training-ranges" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#AA8802]">
            Training Ranges
          </Link>
          <Link href="/gallery" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#AA8802]">
            Gallery
          </Link>
          <Link href="/contact-us" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#AA8802]">
            Contact Us
          </Link>
          <div className="pt-2">
            <Link
              href="/contact-us"
              onClick={() => setMobileMenuOpen(false)}
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
