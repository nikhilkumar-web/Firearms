'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => {
        console.warn('Hero video autoplay error:', err);
      });
    }
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#000000] text-white">
      {/* Background Video matching exact live site elementor-background-video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center pointer-events-none"
        >
          <source src="https://american-firearms.s3-eu-central-2.ionoscloud.com/video/American-Firearms-Network-Video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay matching live site elementor-background-overlay: #000000 with 0.76 opacity */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundColor: '#000000', opacity: 0.76 }}
        />
      </div>

      {/* Main Hero Container matching live site padding + 31px total height increase (18px + 7px + 6px) and 1300px max-width */}
      <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 pt-[96px] pb-[95px] sm:pt-[136px] sm:pb-[135px] lg:pt-[166px] lg:pb-[165px] text-center">
        
        {/* Exact Heading: Calistoga 62px (tablet 40px, mobile 24px) leading 75px font-weight 500 uppercase #FFFFFF */}
        <h1 
          className="text-[24px] sm:text-[40px] lg:text-[62px] font-normal text-[#FFFFFF] tracking-normal uppercase leading-[34px] sm:leading-[50px] lg:leading-[75px] max-w-5xl mx-auto"
          style={{ fontFamily: "'Calistoga', serif" }}
        >
          FIREARMS EDUCATION, SAFETY &amp;<br />
          <span>SKILL DEVELOPMENT</span>
        </h1>

        {/* Exact Subtitle: Roboto 18px leading 24px #FFFFFF */}
        <p 
          className="mt-6 text-[15px] sm:text-[18px] text-[#FFFFFF] max-w-[1260px] mx-auto leading-[22px] sm:leading-[24px] font-normal"
          style={{ fontFamily: "'Roboto', sans-serif" }}
        >
          <strong className="font-bold text-[#FFFFFF]">Skill is built through training, not chance.</strong> Step into a structured firearms education environment designed to help you progress with clarity and confidence.<br className="hidden lg:inline" /> Through personalized instruction and structured training sessions, develop the skills, judgment, and discipline required for responsible firearm use.
        </p>

        {/* 2 Booking Action Blocks matching Elementor 180e500 */}
        <div className="mt-7 max-w-[1140px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 items-start justify-center">
            
            {/* Left Column: SCHEDULE A ONE ON ONE LESSON */}
            <div className="flex flex-col items-center md:items-end">
              <h2 
                className="text-[18px] sm:text-[21px] md:text-[23px] font-semibold text-[#FFFFFF] uppercase text-center md:text-right tracking-normal whitespace-normal md:whitespace-nowrap leading-tight"
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                SCHEDULE A ONE ON ONE LESSON
              </h2>
              <div className="mt-2.5">
                <Link
                  href="/contact-us?popup=true"
                  className="btn-tactical-gold text-[#FFFFFF] font-medium uppercase text-[16px] md:text-[18px] leading-[20px] tracking-normal font-roboto px-10 py-3 rounded-[3px] shadow-md"
                >
                  <span>CLICK HERE</span>
                </Link>
              </div>
            </div>

            {/* Right Column: SCHEDULE A GROUP LESSON */}
            <div className="flex flex-col items-center md:items-start">
              <h2 
                className="text-[18px] sm:text-[21px] md:text-[23px] font-semibold text-[#FFFFFF] uppercase text-center md:text-left tracking-normal whitespace-normal md:whitespace-nowrap leading-tight"
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                SCHEDULE A GROUP LESSON
              </h2>
              <div className="mt-2.5">
                <Link
                  href="/contact-us?popup=true"
                  className="btn-tactical-gold text-[#FFFFFF] font-medium uppercase text-[16px] md:text-[18px] leading-[20px] tracking-normal font-roboto px-10 py-3 rounded-[3px] shadow-md"
                >
                  <span>CLICK HERE</span>
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Notice line under boxes: Gabarito 22px uppercase */}
        <div 
          className="mt-5 text-[16px] sm:text-[20px] md:text-[22px] font-semibold uppercase tracking-normal text-[#FFFFFF] leading-[28px]"
          style={{ fontFamily: "'Gabarito', sans-serif" }}
        >
          ALL LESSONS ARE LOCATED IN SOUTH FLORIDA
        </div>
      </div>

      {/* 3-Column Feature Strip matching live site Elementor 39b9679 (#050505, height reduced by 10px more to 275px) */}
      <div className="relative z-10 bg-[#050505] py-[73.5px] border-t border-b border-[#B1800F]/30">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
          
          {/* Feature 1 */}
          <div className="flex flex-col items-center md:items-start justify-center gap-3 px-4 sm:px-6 md:border-r border-[#B1800F] py-2">
            <div className="shrink-0 text-[#B1800F]">
              <svg aria-hidden="true" className="w-[34px] h-[34px] fill-current" viewBox="0 0 512 512">
                <path d="M500 224h-30.364C455.724 130.325 381.675 56.276 288 42.364V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v30.364C130.325 56.276 56.276 130.325 42.364 224H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h30.364C56.276 381.675 130.325 455.724 224 469.636V500c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-30.364C381.675 455.724 455.724 381.675 469.636 288H500c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12zM288 404.634V364c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40.634C165.826 392.232 119.783 346.243 107.366 288H148c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-40.634C119.768 165.826 165.757 119.783 224 107.366V148c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40.634C346.174 119.768 392.217 165.757 404.634 224H364c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40.634C392.232 346.174 346.243 392.217 288 404.634zM288 256c0 17.673-14.327 32-32 32s-32-14.327-32-32c0-17.673 14.327-32 32-32s32 14.327 32 32z"/>
              </svg>
            </div>
            <h2 
              className="text-[20px] sm:text-[24px] lg:text-[26px] font-semibold text-[#E0E0E0] leading-[28px] sm:leading-[32px] text-center md:text-left"
              style={{ fontFamily: "'Gabarito', sans-serif" }}
            >
              Expert <br />Instruction
            </h2>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center md:items-start justify-center gap-3 px-4 sm:px-6 md:border-r border-[#B1800F] py-2">
            <div className="shrink-0 text-[#B1800F]">
              <svg aria-hidden="true" className="w-[34px] h-[34px] fill-current" viewBox="0 0 512 512">
                <path d="M500 224h-30.364C455.724 130.325 381.675 56.276 288 42.364V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v30.364C130.325 56.276 56.276 130.325 42.364 224H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h30.364C56.276 381.675 130.325 455.724 224 469.636V500c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-30.364C381.675 455.724 455.724 381.675 469.636 288H500c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12zM288 404.634V364c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40.634C165.826 392.232 119.783 346.243 107.366 288H148c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-40.634C119.768 165.826 165.757 119.783 224 107.366V148c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40.634C346.174 119.768 392.217 165.757 404.634 224H364c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40.634C392.232 346.174 346.243 392.217 288 404.634zM288 256c0 17.673-14.327 32-32 32s-32-14.327-32-32c0-17.673 14.327-32 32-32s32 14.327 32 32z"/>
              </svg>
            </div>
            <h2 
              className="text-[20px] sm:text-[24px] lg:text-[26px] font-semibold text-[#E0E0E0] leading-[28px] sm:leading-[32px] text-center md:text-left"
              style={{ fontFamily: "'Gabarito', sans-serif" }}
            >
              As Seen On<br /> YouTube
            </h2>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center md:items-start justify-center gap-3 px-4 sm:px-6 py-2">
            <div className="shrink-0 text-[#B1800F]">
              <svg aria-hidden="true" className="w-[34px] h-[34px] fill-current" viewBox="0 0 512 512">
                <path d="M500 224h-30.364C455.724 130.325 381.675 56.276 288 42.364V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v30.364C130.325 56.276 56.276 130.325 42.364 224H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h30.364C56.276 381.675 130.325 455.724 224 469.636V500c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-30.364C381.675 455.724 455.724 381.675 469.636 288H500c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12zM288 404.634V364c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40.634C165.826 392.232 119.783 346.243 107.366 288H148c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-40.634C119.768 165.826 165.757 119.783 224 107.366V148c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40.634C346.174 119.768 392.217 165.757 404.634 224H364c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40.634C392.232 346.174 346.243 392.217 288 404.634zM288 256c0 17.673-14.327 32-32 32s-32-14.327-32-32c0-17.673 14.327-32 32-32s32 14.327 32 32z"/>
              </svg>
            </div>
            <h2 
              className="text-[20px] sm:text-[24px] lg:text-[26px] font-semibold text-[#E0E0E0] leading-[28px] sm:leading-[32px] text-center md:text-left"
              style={{ fontFamily: "'Gabarito', sans-serif" }}
            >
              Supportive <br />Environment
            </h2>
          </div>

        </div>
      </div>
    </section>
  );
}
