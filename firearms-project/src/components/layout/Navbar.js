'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { courses } from '@/data/courses';
import { partnerRanges } from '@/data/ranges';
import { siteConfig } from '@/data/siteConfig';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [rangesDropdown, setRangesDropdown] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#050505]/95 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Exact Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-48 sm:w-56 h-12">
            <Image
              src={siteConfig.logo}
              alt={siteConfig.name}
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Exact Desktop Menu */}
        <div className="hidden lg:flex items-center gap-7 text-xs uppercase font-bold tracking-wider text-slate-200">
          <Link href="/" className="hover:text-[#BC8914] transition-colors">
            Home
          </Link>
          <Link href="/about-us" className="hover:text-[#BC8914] transition-colors">
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
              className="flex items-center gap-1 hover:text-[#BC8914] transition-colors py-2"
            >
              Services
              <ChevronDown className="w-3.5 h-3.5" />
            </Link>

            {servicesDropdown && (
              <div className="absolute top-full left-0 w-80 bg-[#111111] border border-white/10 rounded-lg p-2 shadow-2xl">
                {courses.map((course) => (
                  <Link
                    key={course.slug}
                    href={`/services/${course.slug}`}
                    className="block px-3 py-2 rounded text-xs normal-case text-slate-300 hover:bg-white/5 hover:text-[#BC8914] transition-colors"
                  >
                    {course.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/services" className="hover:text-[#BC8914] transition-colors">
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
              className="flex items-center gap-1 hover:text-[#BC8914] transition-colors py-2"
            >
              Training Ranges
              <ChevronDown className="w-3.5 h-3.5" />
            </Link>

            {rangesDropdown && (
              <div className="absolute top-full left-0 w-80 bg-[#111111] border border-white/10 rounded-lg p-2 shadow-2xl">
                {partnerRanges.map((range) => (
                  <Link
                    key={range.name}
                    href="/training-ranges"
                    className="block px-3 py-2 rounded text-xs normal-case text-slate-300 hover:bg-white/5 hover:text-[#BC8914] transition-colors"
                  >
                    <div className="font-semibold text-white">{range.name}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/gallery" className="hover:text-[#BC8914] transition-colors">
            Gallery
          </Link>
          <Link href="/contact-us" className="hover:text-[#BC8914] transition-colors">
            Contact Us
          </Link>
        </div>

        {/* Exact CTA Button from Live Site */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/contact-us"
            className="px-5 py-2.5 rounded bg-[#BC8914] hover:bg-[#B1800F] text-black font-extrabold uppercase text-xs tracking-wider transition-colors shadow"
          >
            Consult Today!
          </Link>
        </div>

        {/* Mobile Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#111111] border-b border-white/10 px-6 py-5 space-y-3 text-sm font-semibold uppercase">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#BC8914]">
            Home
          </Link>
          <Link href="/about-us" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#BC8914]">
            About Us
          </Link>
          <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#BC8914]">
            Services
          </Link>
          <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#BC8914]">
            Resources
          </Link>
          <Link href="/training-ranges" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#BC8914]">
            Training Ranges
          </Link>
          <Link href="/gallery" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#BC8914]">
            Gallery
          </Link>
          <Link href="/contact-us" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#BC8914]">
            Contact Us
          </Link>
          <div className="pt-2">
            <Link
              href="/contact-us"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center py-3 rounded bg-[#BC8914] text-black font-bold uppercase text-xs"
            >
              Consult Today!
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
