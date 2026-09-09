import Image from 'next/image';
import Link from 'next/link';
import { Crosshair, Star, ShieldCheck, Scale } from 'lucide-react';

const pillarIcons = [Crosshair, Star, ShieldCheck, Scale];

export default function CoursePageContent({ course }) {
  if (!course) return null;

  const { overview, whyTrain, curriculum, videoIds } = course;

  return (
    <main className="bg-[#FFFFFF] text-[#000000]">
      
      {/* 1. HERO HEADER SECTION (Elementor 7d5bb4f) */}
      <section 
        className="relative py-[70px] sm:py-[90px] lg:py-[100px] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/services/service-hero-bg.jpg')",
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        {/* Dark Background Overlay (0.78 opacity) */}
        <div className="absolute inset-0 bg-[#000000]" style={{ opacity: 0.78 }} />

        <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 
            className="text-[24px] sm:text-[36px] lg:text-[45px] font-bold text-white uppercase tracking-wider font-gabarito leading-tight sm:leading-snug break-words"
            style={{ fontFamily: "'Gabarito', sans-serif" }}
          >
            {course.title}
          </h1>
        </div>
      </section>

      {/* 2. SUBSCRIBE TO OUR YOUTUBE CHANNEL (Elementor af566e9) */}
      <section className="py-[40px] sm:py-[50px] bg-[#FFFFFF] border-b border-black/5">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-[22px] sm:text-[26px] lg:text-[28px] font-bold uppercase text-[#000000] text-center mb-6 sm:mb-8 font-gabarito tracking-wide"
            style={{ fontFamily: "'Gabarito', sans-serif" }}
          >
            Subscribe To Our YouTube Channel
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {(videoIds || ['ctpQE_j8vyg', 'JdkoNyPqL5A', 'mqybul_khzg', '3FJ-QV8-FFc']).slice(0, 4).map((id, idx) => (
              <div 
                key={idx}
                className="w-full aspect-video rounded-[8px] overflow-hidden bg-black shadow-md border border-black/10"
              >
                <iframe
                  src={`https://www.youtube.com/embed/${id}?controls=1&rel=0`}
                  title={`YouTube video ${idx + 1}`}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OVERVIEW & INTRODUCTION (Elementor 57a13e2 - Exact #D6DBDD Signature Grey Background) */}
      <section className="py-[50px] sm:py-[70px] lg:py-[80px] bg-[#D6DBDD] border-b border-black/10">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-14">
            
            {/* Left Image (50%) */}
            <div className="w-full lg:w-1/2">
              <div className="relative w-full h-[260px] sm:h-[380px] lg:h-[460px] rounded-[10px] overflow-hidden shadow-lg border border-black/10">
                <Image
                  src={overview?.image || '/images/gallery/gallery-defensive-posture.png'}
                  alt={course.title}
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>

            {/* Right Text Content (50%) */}
            <div className="w-full lg:w-1/2 space-y-4">
              {overview?.subtitle && (
                <span 
                  className="text-[#B1800F] font-bold text-[14px] sm:text-[15px] uppercase tracking-wider block font-gabarito"
                  style={{ fontFamily: "'Gabarito', sans-serif" }}
                >
                  {overview.subtitle}
                </span>
              )}

              {overview?.tagline && (
                <h2 
                  className="text-[22px] sm:text-[28px] lg:text-[32px] font-bold text-[#000000] leading-tight font-gabarito"
                  style={{ fontFamily: "'Gabarito', sans-serif" }}
                >
                  {overview.tagline}
                </h2>
              )}

              <div className="space-y-3 pt-1">
                {(overview?.paragraphs || []).map((p, idx) => (
                  <p 
                    key={idx}
                    className="font-roboto text-[15px] sm:text-[16px] leading-[26px] text-[#222222] font-normal"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                  >
                    {p}
                  </p>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  href="/contact-us?popup=true"
                  style={{
                    backgroundImage: 'linear-gradient(219deg, #B1800F 0%, #000000 67%)',
                    border: '1px solid #B1800F',
                    borderRadius: '3px'
                  }}
                  className="text-white font-medium uppercase text-[15px] px-8 py-[12px] inline-flex items-center justify-center font-roboto hover:brightness-110 shadow transition-all cursor-pointer"
                >
                  Contact Us
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. WHY TRAIN WITH AFN / 4 PILLARS (Elementor 94fa7ff - Fixed Parallax Range Background matching Resources) */}
      <section 
        className="relative py-[60px] sm:py-[90px] overflow-hidden text-white"
        style={{
          backgroundImage: "url('/images/about/range-service.webp')",
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark Background Overlay (0.68 opacity matching Resources section) */}
        <div className="absolute inset-0 bg-[#000000]" style={{ opacity: 0.68 }} />

        <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 
            className="text-[22px] sm:text-[32px] lg:text-[40px] font-bold uppercase text-white font-gabarito mb-3 tracking-wide leading-tight sm:leading-normal"
            style={{ fontFamily: "'Gabarito', sans-serif" }}
          >
            {whyTrain?.heading || 'Why Train with The American Firearms Network?'}
          </h2>
          <p 
            className="text-[#E2E6E8] font-roboto text-[15px] sm:text-[16px] max-w-3xl mx-auto mb-10 sm:mb-12 leading-relaxed"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            {whyTrain?.subtitle}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(whyTrain?.pillars || []).map((pillar, idx) => {
              const IconComp = pillarIcons[idx % pillarIcons.length];
              return (
                <div 
                  key={idx}
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.55)',
                    border: '1px solid #D3960C',
                    boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.35)',
                    borderRadius: '10px'
                  }}
                  className="p-6 text-center flex flex-col items-center justify-start hover:border-[#FDD247] transition-all duration-200 group"
                >
                  <div className="w-[56px] h-[56px] rounded-full border-2 border-[#D3960C] bg-black/60 flex items-center justify-center text-[#FDD247] mb-4 group-hover:scale-105 transition-transform shadow-md">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 
                    className="text-[18px] font-bold text-white font-gabarito mb-2 leading-snug"
                    style={{ fontFamily: "'Gabarito', sans-serif" }}
                  >
                    {pillar.title}
                  </h3>
                  <p 
                    className="text-[#E0E0E0] font-roboto text-[14px] leading-[22px] font-normal"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                  >
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CURRICULUM BREAKDOWN SECTION (Elementor 0dd77a5) */}
      <section className="py-[50px] sm:py-[70px] lg:py-[80px] bg-[#FFFFFF]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-14">
            
            {/* Left Column: Curriculum Breakdown (50%) */}
            <div className="w-full lg:w-1/2 space-y-5">
              <h2 
                className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold text-[#000000] font-gabarito leading-tight"
                style={{ fontFamily: "'Gabarito', sans-serif" }}
              >
                {curriculum?.heading || 'Our Training Curriculum'}
              </h2>

              {curriculum?.intro && (
                <p 
                  className="font-roboto text-[15px] sm:text-[16px] leading-[26px] text-[#333333]"
                  style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                  {curriculum.intro}
                </p>
              )}

              <ul className="space-y-3 pt-1">
                {(curriculum?.items || []).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#B1800F] shrink-0 mt-2.5" />
                    <p 
                      className="font-roboto text-[15px] sm:text-[16px] leading-[24px] text-[#333333]"
                      style={{ fontFamily: "'Roboto', sans-serif" }}
                    >
                      <strong className="text-black font-bold font-roboto">{item.title}: </strong>
                      {item.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Action Image (50%) */}
            <div className="w-full lg:w-1/2">
              <div className="relative w-full h-[260px] sm:h-[380px] lg:h-[460px] rounded-[10px] overflow-hidden shadow-lg border border-gray-200">
                <Image
                  src={curriculum?.image || '/images/gallery/gallery-range-line.webp'}
                  alt={curriculum?.heading || course.title}
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
