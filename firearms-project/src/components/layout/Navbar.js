'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { courses } from '@/data/courses';
import { partnerRanges } from '@/data/ranges';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [servicesPinned, setServicesPinned] = useState(false);
  const [rangesOpen, setRangesOpen] = useState(false);
  const [rangesPinned, setRangesPinned] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileRangesOpen, setMobileRangesOpen] = useState(false);

  const servicesTimeoutRef = useRef(null);
  const rangesTimeoutRef = useRef(null);
  const servicesRef = useRef(null);
  const rangesRef = useRef(null);

  const closeServices = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setServicesOpen(false);
    setServicesPinned(false);
  };

  const closeRanges = () => {
    if (rangesTimeoutRef.current) clearTimeout(rangesTimeoutRef.current);
    setRangesOpen(false);
    setRangesPinned(false);
  };

  const toggleServices = (e) => {
    e.preventDefault();
    e.stopPropagation();
    closeRanges();
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setServicesPinned(prev => {
      const next = !prev;
      setServicesOpen(next);
      return next;
    });
  };

  const toggleRanges = (e) => {
    e.preventDefault();
    e.stopPropagation();
    closeServices();
    if (rangesTimeoutRef.current) clearTimeout(rangesTimeoutRef.current);
    setRangesPinned(prev => {
      const next = !prev;
      setRangesOpen(next);
      return next;
    });
  };

  const handleServicesEnter = () => {
    closeRanges();
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setServicesOpen(true);
  };

  const handleServicesLeave = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setServicesOpen(false);
    setServicesPinned(false);
  };

  const handleRangesEnter = () => {
    closeServices();
    if (rangesTimeoutRef.current) clearTimeout(rangesTimeoutRef.current);
    setRangesOpen(true);
  };

  const handleRangesLeave = () => {
    if (rangesTimeoutRef.current) clearTimeout(rangesTimeoutRef.current);
    setRangesOpen(false);
    setRangesPinned(false);
  };

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        closeServices();
      }
      if (rangesRef.current && !rangesRef.current.contains(e.target)) {
        closeRanges();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdowns on route change
  useEffect(() => {
    const timer = setTimeout(() => {
      closeServices();
      closeRanges();
      setMobileMenuOpen(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-[#D6DBDD] border-b border-black/10 shadow-sm transition-all h-[71px]">
      <nav className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 h-[71px] flex items-center justify-between">
        
        {/* Exact Logo from Live Site */}
        <Link href="/" className="flex items-center shrink-0">
          <div className="relative w-[185px] xl:w-[215px] h-[38px]">
            <Image
              src="https://american-firearms.s3-eu-central-2.ionoscloud.com/images/logo/logo.png"
              alt="American Firearms Network"
              fill
              sizes="(max-width: 768px) 185px, 215px"
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Exact Desktop Navigation Menu: Gabarito semi-bold uppercase single-line */}
        <div className="hidden lg:flex items-center text-[14px] xl:text-[15px] uppercase font-semibold font-gabarito whitespace-nowrap shrink-0 h-full">
          <Link 
            href="/" 
            className={`px-2.5 xl:px-3.5 py-2 whitespace-nowrap font-semibold transition-colors ${
              pathname === '/' ? 'text-[#AA8802]' : 'text-[#000000] hover:text-[#AA8802]'
            }`}
          >
            Home
          </Link>
          <Link 
            href="/about-us" 
            className={`px-2.5 xl:px-3.5 py-2 whitespace-nowrap font-semibold transition-colors ${
              pathname === '/about-us' ? 'text-[#AA8802]' : 'text-[#000000] hover:text-[#AA8802]'
            }`}
          >
            About Us
          </Link>

          {/* Services Dropdown matching Live Site */}
          <div 
            ref={servicesRef}
            className="relative h-full flex items-center"
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
          >
            <button 
              type="button"
              onClick={toggleServices}
              className={`flex items-center gap-1 transition-colors px-2.5 xl:px-3.5 py-2 whitespace-nowrap font-semibold uppercase text-[14px] xl:text-[15px] font-gabarito cursor-pointer select-none ${
                servicesOpen || pathname?.startsWith('/services') || pathname?.startsWith('/defensive-firearms-training')
                  ? 'text-[#AA8802]'
                  : 'text-[#000000] hover:text-[#AA8802]'
              }`}
              aria-expanded={servicesOpen}
            >
              <span className="uppercase">SERVICES</span>
              <ChevronDown className={`w-3.5 h-3.5 stroke-[2.5] transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>

            <div 
              className={`absolute top-[48px] left-0 w-max z-50 pt-[23px] transition-all duration-150 ${
                servicesOpen ? 'block pointer-events-auto' : 'hidden pointer-events-none'
              }`}
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              {/* Invisible hover bridge connecting navbar button to dropdown */}
              <div className="absolute top-0 left-0 w-full h-[24px] pointer-events-auto bg-transparent" />
              <div 
                className="w-full bg-white border border-[#c4c4c4] rounded-[2px] shadow-2xl py-0 overflow-hidden"
                style={{ boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.18)' }}
              >
                {courses.map((course) => {
                  const isActive = pathname === `/services/${course.slug}` || pathname === `/${course.slug}`;
                  const isCCW = course.slug === 'concealed-carry-permit-ccw-training';
                  return (
                    <Link
                      key={course.slug}
                      href={`/services/${course.slug}`}
                      onClick={closeServices}
                      className={`block px-[18px] py-[8px] text-[14px] xl:text-[14.5px] uppercase font-semibold border-b border-[#c4c4c4] last:border-0 transition-colors leading-[19px] whitespace-nowrap ${
                        isActive
                          ? 'text-[#AA8802] bg-[#FAF8F3]'
                          : 'text-[#000000] hover:bg-[#F9F9F9] hover:text-[#AA8802]'
                      }`}
                      style={{ fontFamily: "'Gabarito', sans-serif" }}
                    >
                      {isCCW ? (
                        <>
                          <span className="block">Concealed Carry Permit</span>
                          <span className="block">(CCW) Training</span>
                        </>
                      ) : (
                        course.title
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <Link 
            href="/resources" 
            className={`px-2.5 xl:px-3.5 py-2 whitespace-nowrap font-semibold transition-colors ${
              pathname === '/resources' ? 'text-[#AA8802]' : 'text-[#000000] hover:text-[#AA8802]'
            }`}
          >
            Resources
          </Link>

          {/* Training Ranges Dropdown matching Live Site */}
          <div 
            ref={rangesRef}
            className="relative h-full flex items-center"
            onMouseEnter={handleRangesEnter}
            onMouseLeave={handleRangesLeave}
          >
            <button 
              type="button"
              onClick={toggleRanges}
              className={`flex items-center gap-1 transition-colors px-2.5 xl:px-3.5 py-2 whitespace-nowrap font-semibold uppercase text-[14px] xl:text-[15px] font-gabarito cursor-pointer select-none ${
                rangesOpen || pathname?.startsWith('/training-ranges')
                  ? 'text-[#AA8802]'
                  : 'text-[#000000] hover:text-[#AA8802]'
              }`}
              aria-expanded={rangesOpen}
            >
              <span className="uppercase">TRAINING RANGES</span>
              <ChevronDown className={`w-3.5 h-3.5 stroke-[2.5] transition-transform duration-200 ${rangesOpen ? 'rotate-180' : ''}`} />
            </button>

            <div 
              className={`absolute top-[48px] left-0 w-max z-50 pt-[23px] transition-all duration-150 ${
                rangesOpen ? 'block pointer-events-auto' : 'hidden pointer-events-none'
              }`}
              onMouseEnter={handleRangesEnter}
              onMouseLeave={handleRangesLeave}
            >
              {/* Invisible hover bridge connecting navbar button to dropdown */}
              <div className="absolute top-0 left-0 w-full h-[24px] pointer-events-auto bg-transparent" />
              <div 
                className="w-full bg-white border border-[#c4c4c4] rounded-[2px] shadow-2xl py-0 overflow-hidden"
                style={{ boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.18)' }}
              >
                {partnerRanges.map((range) => {
                  const isActive = pathname === `/training-ranges/${range.slug}` || pathname === `/${range.slug}`;
                  const isStLucie = range.slug === 'st-lucie-shooting-center-and-training-facility';
                  return (
                    <Link
                      key={range.slug}
                      href={`/training-ranges/${range.slug}`}
                      onClick={closeRanges}
                      className={`block px-[18px] py-[8px] text-[14px] xl:text-[14.5px] uppercase font-semibold border-b border-[#c4c4c4] last:border-0 transition-colors leading-[19px] whitespace-nowrap ${
                        isActive
                          ? 'text-[#AA8802] bg-[#FAF8F3]'
                          : 'text-[#000000] hover:bg-[#F9F9F9] hover:text-[#AA8802]'
                      }`}
                      style={{ fontFamily: "'Gabarito', sans-serif" }}
                    >
                      {isStLucie ? (
                        <>
                          <span className="block">St. Lucie Shooting Center</span>
                          <span className="block">and Training Facility</span>
                        </>
                      ) : (
                        range.name
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <Link 
            href="/gallery" 
            className={`px-2.5 xl:px-3.5 py-2 whitespace-nowrap font-semibold transition-colors ${
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
            className={`px-2.5 xl:px-3.5 py-2 whitespace-nowrap font-semibold transition-colors ${
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
            className="btn-tactical-gold text-white font-medium uppercase text-[14px] xl:text-[15px] leading-normal tracking-normal font-roboto px-5 xl:px-7 py-[11px] whitespace-nowrap rounded-[3px]"
          >
            <span>CONSULT TODAY!</span>
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
              className={`w-full flex items-center justify-between py-1 text-left uppercase font-semibold hover:text-[#AA8802] transition-colors ${
                pathname?.startsWith('/services') ? 'text-[#AA8802]' : ''
              }`}
            >
              <span className="uppercase">SERVICES</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180 text-[#AA8802]' : ''}`} />
            </button>
            {mobileServicesOpen && (
              <div className="mt-1 pl-3 pr-1 py-2 space-y-2 border-l-2 border-[#B1800F] bg-black/5 rounded-r">
                {courses.map((course) => {
                  const isActive = pathname === `/services/${course.slug}` || pathname === `/${course.slug}`;
                  const isCCW = course.slug === 'concealed-carry-permit-ccw-training';
                  return (
                    <Link
                      key={course.slug}
                      href={`/services/${course.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block text-xs uppercase py-1 leading-snug transition-colors ${
                        isActive ? 'text-[#AA8802] font-bold' : 'text-gray-800 font-semibold hover:text-[#AA8802]'
                      }`}
                    >
                      {isCCW ? (
                        <>
                          <span className="block">Concealed Carry Permit</span>
                          <span className="block">(CCW) Training</span>
                        </>
                      ) : (
                        course.title
                      )}
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
              className={`w-full flex items-center justify-between py-1 text-left uppercase font-semibold hover:text-[#AA8802] transition-colors ${
                pathname?.startsWith('/training-ranges') ? 'text-[#AA8802]' : ''
              }`}
            >
              <span className="uppercase">TRAINING RANGES</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileRangesOpen ? 'rotate-180 text-[#AA8802]' : ''}`} />
            </button>
            {mobileRangesOpen && (
              <div className="mt-1 pl-3 pr-1 py-2 space-y-2 border-l-2 border-[#B1800F] bg-black/5 rounded-r">
                {partnerRanges.map((range) => {
                  const isActive = pathname === `/training-ranges/${range.slug}` || pathname === `/${range.slug}`;
                  const isStLucie = range.slug === 'st-lucie-shooting-center-and-training-facility';
                  return (
                    <Link
                      key={range.slug}
                      href={`/training-ranges/${range.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block text-xs uppercase py-1 leading-snug transition-colors ${
                        isActive ? 'text-[#AA8802] font-bold' : 'text-gray-800 font-semibold hover:text-[#AA8802]'
                      }`}
                    >
                      {isStLucie ? (
                        <>
                          <span className="block">St. Lucie Shooting Center</span>
                          <span className="block">and Training Facility</span>
                        </>
                      ) : (
                        range.name
                      )}
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
              className="btn-tactical-gold w-full text-center py-3 text-white font-medium uppercase text-xs tracking-wider font-roboto rounded-[3px]"
            >
              <span>CONSULT TODAY!</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
