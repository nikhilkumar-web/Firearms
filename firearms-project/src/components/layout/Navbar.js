'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { courses } from '@/data/courses';
import { partnerRanges } from '@/data/ranges';
import { siteConfig } from '@/data/siteConfig';
import { ChevronDown, Menu, X, Phone, ShieldCheck } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [rangesDropdown, setRangesDropdown] = useState(false);

  return (
    <header className="sticky top-0 z-50 tactical-glass border-b border-white/10">
      {/* Top Notification Bar */}
      <div className="bg-[#0b0f17] border-b border-white/5 py-1.5 px-4 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>{siteConfig.location} — Professional Firearms Training & Florida CWL</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <a href={`tel:${siteConfig.phoneTodd}`} className="hover:text-[#f5b942] transition-colors flex items-center gap-1">
              <Phone className="w-3 h-3 text-[#d99b26]" />
              <span>Instructor Todd: {siteConfig.phoneTodd}</span>
            </a>
            <span className="text-white/20">|</span>
            <a href={`tel:${siteConfig.phonePaul}`} className="hover:text-[#f5b942] transition-colors flex items-center gap-1">
              <Phone className="w-3 h-3 text-[#d99b26]" />
              <span>Instructor Paul: {siteConfig.phonePaul}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-48 sm:w-56 h-12">
            <Image
              src={siteConfig.logo}
              alt={siteConfig.name}
              fill
              className="object-contain object-left filter drop-shadow"
              priority
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-200">
          <Link href="/" className="hover:text-[#f5b942] transition-colors">
            Home
          </Link>
          <Link href="/about-us" className="hover:text-[#f5b942] transition-colors">
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
              className="flex items-center gap-1 hover:text-[#f5b942] transition-colors py-2"
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform ${servicesDropdown ? 'rotate-180 text-[#f5b942]' : ''}`} />
            </Link>

            {servicesDropdown && (
              <div className="absolute top-full -left-12 w-80 bg-[#0d131d] border border-white/10 rounded-xl p-3 shadow-2xl tactical-glass animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="text-[11px] font-bold text-[#d99b26] uppercase tracking-wider px-3 py-1 mb-1 border-b border-white/5">
                  Training Programs (10 Courses)
                </div>
                <div className="max-h-96 overflow-y-auto space-y-1">
                  {courses.map((course) => (
                    <Link
                      key={course.slug}
                      href={`/services/${course.slug}`}
                      className="block px-3 py-2 rounded-lg text-xs hover:bg-white/5 hover:text-[#f5b942] text-slate-300 transition-colors"
                    >
                      {course.title}
                    </Link>
                  ))}
                </div>
                <div className="pt-2 mt-2 border-t border-white/5">
                  <Link
                    href="/services"
                    className="block text-center text-xs font-semibold text-[#f5b942] hover:underline"
                  >
                    View All 10 Courses →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Training Ranges Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setRangesDropdown(true)}
            onMouseLeave={() => setRangesDropdown(false)}
          >
            <Link 
              href="/training-ranges" 
              className="flex items-center gap-1 hover:text-[#f5b942] transition-colors py-2"
            >
              Training Ranges
              <ChevronDown className={`w-4 h-4 transition-transform ${rangesDropdown ? 'rotate-180 text-[#f5b942]' : ''}`} />
            </Link>

            {rangesDropdown && (
              <div className="absolute top-full -left-12 w-84 bg-[#0d131d] border border-white/10 rounded-xl p-3 shadow-2xl tactical-glass animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="text-[11px] font-bold text-[#d99b26] uppercase tracking-wider px-3 py-1 mb-1 border-b border-white/5">
                  South Florida Partner Facilities
                </div>
                <div className="max-h-80 overflow-y-auto space-y-1">
                  {partnerRanges.map((range) => (
                    <Link
                      key={range.name}
                      href="/training-ranges"
                      className="block px-3 py-2 rounded-lg text-xs hover:bg-white/5 hover:text-[#f5b942] text-slate-300 transition-colors"
                    >
                      <div className="font-medium text-slate-200">{range.name}</div>
                      <div className="text-[11px] text-slate-500">{range.location}</div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/gallery" className="hover:text-[#f5b942] transition-colors">
            Gallery
          </Link>
          <Link href="/contact-us" className="hover:text-[#f5b942] transition-colors">
            Contact Us
          </Link>
        </div>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact-us"
            className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#d99b26] to-[#b87b14] hover:from-[#f5b942] hover:to-[#d99b26] text-black font-bold text-sm tracking-wide uppercase shadow-lg transition-all transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Consult Today!
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7 text-[#f5b942]" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0e16] border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-200 hover:text-[#f5b942]"
          >
            Home
          </Link>
          <Link
            href="/about-us"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-200 hover:text-[#f5b942]"
          >
            About Us
          </Link>
          <Link
            href="/services"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-200 hover:text-[#f5b942]"
          >
            Services (All 10 Courses)
          </Link>
          <Link
            href="/training-ranges"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-200 hover:text-[#f5b942]"
          >
            Training Ranges
          </Link>
          <Link
            href="/gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-200 hover:text-[#f5b942]"
          >
            Gallery
          </Link>
          <Link
            href="/contact-us"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-200 hover:text-[#f5b942]"
          >
            Contact Us
          </Link>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <Link
              href="/contact-us"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-lg bg-gradient-to-r from-[#d99b26] to-[#b87b14] text-black font-bold uppercase tracking-wider"
            >
              Consult Today!
            </Link>
            <div className="flex justify-around text-xs text-slate-400 pt-2">
              <a href={`tel:${siteConfig.phoneTodd}`} className="flex items-center gap-1 hover:text-[#f5b942]">
                <Phone className="w-3 h-3 text-[#d99b26]" /> Todd
              </a>
              <a href={`tel:${siteConfig.phonePaul}`} className="flex items-center gap-1 hover:text-[#f5b942]">
                <Phone className="w-3 h-3 text-[#d99b26]" /> Paul
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
