'use client';

import { MapPin } from 'lucide-react';

export default function RangePageContent({ range }) {
  if (!range) return null;

  return (
    <main className="bg-[#FFFFFF] text-[#000000]">
      
      {/* 1. HERO HEADER SECTION (Elementor 0d35dc2 - Exact Live Site Styling) */}
      <section 
        className="relative py-[50px] md:py-[100px] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('https://american-firearms.s3-eu-central-2.ionoscloud.com/images/about/page-header-bg.jpg')",
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        {/* Dark Background Overlay (0.78 opacity matching live Elementor) */}
        <div className="absolute inset-0 bg-[#000000]" style={{ opacity: 0.78 }} />

        <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 
            className="text-[28px] md:text-[50px] font-semibold text-white font-gabarito leading-[34px] md:leading-[60px] tracking-normal"
            style={{ fontFamily: "'Gabarito', sans-serif" }}
          >
            Training Ranges
          </h1>
        </div>
      </section>

      {/* 2. RANGE LOCATION & INTERACTIVE MAP SECTION (Elementor e94c2dd) */}
      <section className="py-[30px] lg:py-[50px] bg-[#FFFFFF]">
        <div className="max-w-[1300px] mx-auto px-3 sm:px-6 lg:px-8">
          
          {/* Exact Elementor Column Card (Elementor ecd3077: 15px radius, 10px shadow, 20px padding, 10px margin) */}
          <div 
            className="bg-white rounded-[15px] p-[20px] m-[10px]"
            style={{
              boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.3)',
              borderRadius: '15px'
            }}
          >
            {/* Elementor Icon Box Widget (Elementor 714fe39) */}
            <div className="text-center flex flex-col items-center group">
              
              {/* Stacked Circular Icon (Elementor view-stacked shape-circle: gold #BE8915, hover invert to black/#BE8915) */}
              <div 
                className="w-[50px] h-[50px] rounded-full bg-[#BE8915] group-hover:bg-[#000000] text-[#000000] group-hover:text-[#BE8915] flex items-center justify-center transition-colors duration-300 cursor-pointer mb-[4px]"
              >
                <MapPin className="w-5 h-5 stroke-[2.2]" />
              </div>

              {/* Title (Elementor icon-box-title: Gabarito 30px, 600 weight, line-height 38px, color #000000) */}
              <h2 
                className="text-[24px] sm:text-[30px] font-semibold text-[#000000] leading-[32px] sm:leading-[38px] font-gabarito mt-[6px] mb-[7px]"
                style={{ fontFamily: "'Gabarito', sans-serif" }}
              >
                {range.title}
              </h2>

              {/* Description (Elementor icon-box-description: Roboto 16px, 500 weight, color #000000) */}
              <p 
                className="text-[15px] sm:text-[16px] font-medium text-[#000000] font-roboto leading-[24px] mb-[20px]"
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                {range.address}
              </p>

            </div>

            {/* Elementor Google Maps Widget (Elementor 7eb1ec7) */}
            <div className="w-full rounded-[8px] overflow-hidden">
              <iframe
                loading="lazy"
                src={range.mapSrc}
                title={`${range.title} ${range.address}`}
                aria-label={`${range.title} ${range.address}`}
                className="w-full h-[350px] sm:h-[450px] lg:h-[480px] border-0"
                allowFullScreen
              />
            </div>

          </div>

        </div>
      </section>

      {/* 3. SUBSCRIBE TO OUR YOUTUBE CHANNEL (Elementor 425dd8c) */}
      <section className="py-[30px] lg:py-[50px] bg-[#FFFFFF]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading (Elementor 9b897c1: Gabarito 50px, 600 weight, line-height 60px, color #000000) */}
          <h2 
            className="text-[28px] md:text-[50px] font-semibold text-[#000000] text-center mb-[25px] md:mb-[35px] font-gabarito leading-[34px] md:leading-[60px]"
            style={{ fontFamily: "'Gabarito', sans-serif" }}
          >
            Subscribe To Our YouTube Channel
          </h2>

          {/* 4-Column Video Grid (Elementor 4547251: 4 columns, 5px radius, 10px shadow) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {(range.videoIds || ['ctpQE_j8vyg', 'JdkoNyPqL5A', 'mqybul_khzg', '3FJ-QV8-FFc']).slice(0, 4).map((id, idx) => (
              <div 
                key={idx}
                className="w-full aspect-video rounded-[5px] overflow-hidden bg-black"
                style={{
                  boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.6)',
                  borderRadius: '5px'
                }}
              >
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${id}?controls=1&rel=0`}
                  title={`YouTube video ${idx + 1}`}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Subscribe Now Button (Elementor fda4b77: #EB0F06 background, 2px solid #A5AAAB, uppercase, hover black) */}
          <div className="pt-[25px] text-center">
            <a
              href="https://www.youtube.com/@AMERICANFIREARMSNETWORKS?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-roboto font-medium text-[15px] uppercase text-white transition-colors duration-200"
              style={{
                backgroundColor: '#EB0F06',
                border: '2px solid #A5AAAB',
                padding: '12px 40px',
                fontFamily: "'Roboto', sans-serif"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#000000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#EB0F06';
              }}
            >
              Subscribe now
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}
