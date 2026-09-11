'use client';

import Link from 'next/link';

export default function ServicesOverview() {
  return (
    <section 
      className="relative py-[50px] text-white overflow-hidden"
      style={{
        backgroundImage: "url('https://american-firearms.s3-eu-central-2.ionoscloud.com/images/about/range-service.webp')",
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark Background Overlay matching Elementor Section 522f9dd (0.68 opacity) */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{ backgroundColor: '#000000', opacity: 0.68 }} 
      />

      <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Gabarito 50px (mobile 28px/tablet 40px) line-height 60px font-weight 600 text-center #FFFFFF */}
        <div className="text-center max-w-6xl xl:max-w-[1180px] mx-auto mb-10 sm:mb-12 space-y-3">
          <h2 
            className="text-[28px] sm:text-[40px] lg:text-[50px] font-semibold uppercase tracking-normal text-white leading-[36px] sm:leading-[48px] lg:leading-[60px]"
            style={{ fontFamily: "'Gabarito', sans-serif" }}
          >
            OUR SERVICES
          </h2>
          <p 
            className="text-[15px] sm:text-[18px] leading-[22px] sm:leading-[24px] text-white font-normal"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            Whether you are a first-time owner learning the fundamentals or an experienced professional refining advanced tactics, we provide a disciplined path to total confidence. We bridge the gap between possessing a firearm and operating one with precision, safety, and legal responsibility.
          </p>
        </div>

        {/* 2 Service Cards matching Elementor .elementor-element-d340b1b & .elementor-element-5cbb1b7 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-[1200px] mx-auto">
          
          {/* Card 1: Private Sessions */}
          <div
            style={{
              border: '1px solid #C08C15',
              boxShadow: '0px 0px 10px 0px #C08C15',
              borderRadius: '10px',
              padding: '34px 32px 28px 32px',
              backgroundColor: 'rgba(0, 0, 0, 0.72)'
            }}
            className="group relative overflow-hidden flex flex-col justify-between text-center transition-all duration-300 hover:scale-[1.01] hover:border-[#D4A017] hover:shadow-[0_0_16px_#C08C15]"
          >
            {/* Background Image on Hover (matching live site military tactical rifle position) */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 pointer-events-none"
              style={{
                backgroundImage: "url('https://american-firearms.s3-eu-central-2.ionoscloud.com/images/home/military-tactical-strategy-rifle-position.webp')",
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
              }}
            />
            {/* Dark Overlay on Hover (0.84 opacity matching Elementor) */}
            <div 
              className="absolute inset-0 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 pointer-events-none"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.84)'
              }}
            />

            <div className="relative z-10 space-y-3">
              <h3 
                className="text-[23px] sm:text-[27px] font-semibold uppercase tracking-wide text-[#BC8914] leading-[29px] sm:leading-[33px]"
                style={{ fontFamily: "'Gabarito', sans-serif" }}
              >
                Private Sessions
              </h3>
              <p 
                className="text-[15.5px] sm:text-[17.5px] leading-[23px] sm:leading-[25px] text-white font-normal"
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                Elevate your defense game with private, elite-level mentorship. We analyze your technique and build a custom tactical roadmap for maximum effectiveness. Stop practicing bad habits—master real-world proficiency with an expert dedicated solely to your survival.
              </p>
            </div>

            <div className="relative z-10 pt-5 sm:pt-6">
              <Link
                href="/contact-us?popup=true"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.dispatchEvent(new CustomEvent('open-contact-popup'));
                  }
                }}
                className="btn-tactical-gold text-white font-medium uppercase text-[14.5px] sm:text-[15px] leading-[15px] tracking-normal font-roboto px-9 py-3 rounded-[3px] shadow-lg"
              >
                <span>Consult Today!</span>
              </Link>
            </div>
          </div>

          {/* Card 2: Group Sessions */}
          <div
            style={{
              border: '1px solid #C08C15',
              boxShadow: '0px 0px 10px 0px #C08C15',
              borderRadius: '10px',
              padding: '34px 32px 28px 32px',
              backgroundColor: 'rgba(0, 0, 0, 0.72)'
            }}
            className="group relative overflow-hidden flex flex-col justify-between text-center transition-all duration-300 hover:scale-[1.01] hover:border-[#D4A017] hover:shadow-[0_0_16px_#C08C15]"
          >
            {/* Background Image on Hover (matching live site military tactical rifle position) */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 pointer-events-none"
              style={{
                backgroundImage: "url('https://american-firearms.s3-eu-central-2.ionoscloud.com/images/home/military-tactical-strategy-rifle-position.webp')",
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
              }}
            />
            {/* Dark Overlay on Hover (0.84 opacity matching Elementor) */}
            <div 
              className="absolute inset-0 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 pointer-events-none"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.84)'
              }}
            />

            <div className="relative z-10 space-y-3">
              <h3 
                className="text-[23px] sm:text-[27px] font-semibold uppercase tracking-wide text-[#BC8914] leading-[29px] sm:leading-[33px]"
                style={{ fontFamily: "'Gabarito', sans-serif" }}
              >
                Group Sessions
              </h3>
              <p 
                className="text-[15.5px] sm:text-[17.5px] leading-[23px] sm:leading-[25px] text-white font-normal"
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                Step into high-energy sessions that blend tactical instruction with friendly competition. Build your skills through coached drills, challenge yourself, and see your progress over time. Join the Network and level up with a supportive team.
              </p>
            </div>

            <div className="relative z-10 pt-5 sm:pt-6">
              <Link
                href="/contact-us?popup=true"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.dispatchEvent(new CustomEvent('open-contact-popup'));
                  }
                }}
                className="btn-tactical-gold text-white font-medium uppercase text-[14.5px] sm:text-[15px] leading-[15px] tracking-normal font-roboto px-9 py-3 rounded-[3px] shadow-lg"
              >
                <span>Secure yourSpot</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
