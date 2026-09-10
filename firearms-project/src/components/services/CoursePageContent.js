import Image from 'next/image';
import Link from 'next/link';
import { Crosshair, Star, ShieldCheck, Scale } from 'lucide-react';

const pillarIcons = [Crosshair, Star, ShieldCheck, Scale];
const iconMap = {
  crosshair: Crosshair,
  star: Star,
  shield: ShieldCheck,
  scale: Scale,
};

function formatBulletWithBold(text) {
  if (!text || typeof text !== 'string') return text;
  if (text.includes('<b') || text.includes('<strong')) {
    return text;
  }
  const colonIdx = text.indexOf(':');
  if (colonIdx > 0 && colonIdx <= 65) {
    const prefix = text.slice(0, colonIdx + 1);
    const rest = text.slice(colonIdx + 1);
    return `<b class="font-bold text-[#000000]">${prefix}</b>${rest}`;
  }
  return text;
}

export default function CoursePageContent({ course }) {
  if (!course) return null;

  const { overview, whyTrain, curriculum, videoIds } = course;

  return (
    <main className="bg-[#FFFFFF] text-[#000000]">
      
      {/* 1. HERO HEADER SECTION (Elementor 7d5bb4f) */}
      <section 
        className="relative py-[50px] sm:py-[65px] lg:py-[80px] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('https://american-firearms.s3-eu-central-2.ionoscloud.com/images/about/page-header-bg.jpg')",
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        {/* Dark Background Overlay (0.78 opacity matching Elementor) */}
        <div className="absolute inset-0 bg-[#000000]" style={{ backgroundColor: '#000000', opacity: 0.78 }} />

        <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 
            className="text-[28px] sm:text-[38px] lg:text-[50px] font-semibold text-white font-gabarito leading-[34px] sm:leading-[46px] lg:leading-[60px]"
            style={{ fontFamily: "'Gabarito', sans-serif" }}
          >
            {course.title}
          </h1>
        </div>
      </section>

      {/* 2. SUBSCRIBE TO OUR YOUTUBE CHANNEL (Elementor af566e9) */}
      <section className="py-[36px] sm:py-[45px] bg-[#FFFFFF] border-b border-black/5">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-[28px] sm:text-[36px] lg:text-[44px] font-semibold text-[#000000] text-center mb-6 sm:mb-8 font-gabarito leading-[34px] sm:leading-[44px] lg:leading-[52px]"
            style={{ fontFamily: "'Gabarito', sans-serif" }}
          >
            Subscribe To Our YouTube Channel
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {(videoIds || ['ctpQE_j8vyg', 'JdkoNyPqL5A', 'mqybul_khzg', '3FJ-QV8-FFc']).slice(0, 4).map((id, idx) => (
              <div 
                key={idx}
                className="w-full aspect-video rounded-[5px] overflow-hidden bg-black shadow-[0px_0px_10px_0px_rgba(0,0,0,0.6)]"
              >
                <iframe
                  src={`https://www.youtube.com/embed/${id}?controls=1&rel=0`}
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

          {/* Centered Red SUBSCRIBE NOW Button matching Elementor 28bebcf */}
          <div className="pt-6 sm:pt-7 text-center">
            <a
              href="https://www.youtube.com/@AMERICANFIREARMSNETWORKS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#EB0F06] hover:bg-[#000000] text-white font-roboto font-medium uppercase text-[14px] px-[40px] py-[12px] border-2 border-[#A5AAAB] transition-colors shadow-sm"
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              SUBSCRIBE NOW
            </a>
          </div>
        </div>
      </section>

      {/* 3. OVERVIEW & INTRODUCTION (Elementor 57a13e2 - Exact #D6DBDD Signature Grey Background) */}
      <section className="py-[36px] sm:py-[46px] bg-[#D6DBDD] border-b border-black/10">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
            
            {/* Left Image: Width 38.512% matching Elementor c56e2b5 */}
            <div className="w-full lg:w-[38.512%] shrink-0 flex justify-center">
              <Image
                src={overview?.image || 'https://american-firearms.s3-eu-central-2.ionoscloud.com/images/services/defensive-firearms-training-overview.webp'}
                alt={course.title}
                width={800}
                height={534}
                priority
                className="w-full h-auto object-contain rounded-none shadow-none"
              />
            </div>

            {/* Right Text Content: Width 61.488% matching Elementor ce5737f */}
            <div className="w-full lg:w-[61.488%] flex flex-col justify-center text-left min-w-0">
              {/* Heading 1: Exact Gabarito typography wrapping cleanly across lines like live site */}
              <h2 
                className="text-[26px] sm:text-[34px] lg:text-[40px] xl:text-[46px] font-semibold text-[#000000] font-gabarito leading-[32px] sm:leading-[42px] lg:leading-[50px] xl:leading-[54px] break-words text-left"
                style={{ fontFamily: "'Gabarito', sans-serif" }}
              >
                {overview?.subtitle || `${course.title} | AFN`}
              </h2>

              {/* Subheading matching Elementor 485ff2c: Gabarito font-weight 600 */}
              {overview?.tagline && (
                <h3 
                  className="text-[17px] sm:text-[19px] font-semibold text-[#000000] font-gabarito leading-[24px] mt-2.5 sm:mt-3"
                  style={{ fontFamily: "'Gabarito', sans-serif" }}
                >
                  {overview.tagline}
                </h3>
              )}

              {/* Paragraphs matching Elementor a158fdc: Roboto 16px line-height 22px */}
              <div className="space-y-2.5 sm:space-y-3 font-roboto text-[15px] sm:text-[16px] leading-[22px] text-[#000000] mt-3.5 sm:mt-4 font-normal">
                {(overview?.paragraphs || []).map((p, idx) => {
                  const isTaglineRepeat = overview?.tagline && p.trim() === overview.tagline.trim();
                  if (isTaglineRepeat) {
                    return <p key={idx}><b>{p}</b></p>;
                  }
                  if (p.includes('<b') || p.includes('<strong')) {
                    return (
                      <p 
                        key={idx} 
                        className="[&_b]:font-bold [&_b]:text-black [&_strong]:font-bold [&_strong]:text-black"
                        dangerouslySetInnerHTML={{ __html: p }} 
                      />
                    );
                  }
                  const regex = /(The American Firearms Network \(AFN\)|American Firearms Network \(AFN\))/g;
                  if (regex.test(p)) {
                    const parts = p.split(regex);
                    return (
                      <p key={idx}>
                        {parts.map((part, i) => 
                          part === "The American Firearms Network (AFN)" || part === "American Firearms Network (AFN)" ? (
                            <b key={i}>{part}</b>
                          ) : (
                            part
                          )
                        )}
                      </p>
                    );
                  }
                  return <p key={idx}>{p}</p>;
                })}
              </div>

              {/* Subsections if present in overview (e.g. Situational Awareness) */}
              {overview?.subsections && overview.subsections.length > 0 && (
                <div className="space-y-4 pt-3 font-roboto">
                  {overview.subsections.map((sub, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <h4 
                        className="text-[18px] sm:text-[20px] font-bold text-[#000000] font-gabarito leading-snug [&_b]:font-bold [&_b]:text-black"
                        style={{ fontFamily: "'Gabarito', sans-serif" }}
                        dangerouslySetInnerHTML={{ __html: sub.title }}
                      />
                      <p 
                        className="font-roboto text-[15px] sm:text-[16px] leading-[22px] text-[#000000] font-normal [&_b]:font-bold [&_b]:text-black"
                        dangerouslySetInnerHTML={{ __html: sub.description }}
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Button matching Elementor 5f6c0f6 */}
              <div className="pt-5">
                <Link
                  href="/contact-us?popup=true"
                  className="btn-tactical-gold text-white font-roboto font-medium uppercase text-[14px] px-[40px] py-[12px] shadow-sm rounded-[3px]"
                >
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. WHY TRAIN WITH AFN / 4 PILLARS (Elementor 94fa7ff - Fixed Parallax Range Background matching Resources) */}
      <section 
        className="relative py-[36px] sm:py-[46px] overflow-hidden text-white"
        style={{
          backgroundImage: "url('https://american-firearms.s3-eu-central-2.ionoscloud.com/images/about/range-service.webp')",
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark Background Overlay (0.68 opacity matching Resources section) */}
        <div className="absolute inset-0 bg-[#000000]" style={{ backgroundColor: '#000000', opacity: 0.68 }} />

        <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 
            className={`text-[26px] sm:text-[34px] lg:text-[44px] font-semibold text-white font-gabarito leading-[32px] sm:leading-[42px] lg:leading-[52px] ${
              whyTrain?.subtitle ? 'mb-2 sm:mb-3' : 'mb-6 sm:mb-8'
            }`}
            style={{ fontFamily: "'Gabarito', sans-serif" }}
          >
            {whyTrain?.heading || 'Why Train with The American Firearms Network?'}
          </h2>
          {whyTrain?.subtitle && (
            <p 
              className="text-[#E2E6E8] font-roboto text-[15px] sm:text-[16px] max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed"
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              {whyTrain.subtitle}
            </p>
          )}

          <div className={`grid gap-5 sm:gap-6 ${
            (whyTrain?.pillars || []).length === 3
              ? 'grid-cols-1 md:grid-cols-3 max-w-[1240px] mx-auto'
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
          }`}>
            {(whyTrain?.pillars || []).map((pillar, idx) => {
              const IconComp = (pillar.icon && iconMap[pillar.icon]) || pillarIcons[idx % pillarIcons.length];
              return (
                <div 
                  key={idx}
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.55)',
                    border: '1px solid #D3960C',
                    boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.35)',
                    borderRadius: '10px'
                  }}
                  className="p-5 sm:p-6 text-center flex flex-col items-center justify-start hover:border-[#FDD247] transition-all duration-200 group"
                >
                  <div className="w-[52px] h-[52px] rounded-full border-2 border-[#D3960C] bg-black/60 flex items-center justify-center text-[#FDD247] mb-3.5 group-hover:scale-105 transition-transform shadow-md">
                    <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 
                    className="text-[17px] sm:text-[18px] font-bold text-white font-gabarito mb-2 leading-snug [&_b]:font-bold [&_b]:text-[#FDD247]"
                    style={{ fontFamily: "'Gabarito', sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: pillar.title }}
                  />
                  <p 
                    className="text-[#E0E0E0] font-roboto text-[14px] leading-[22px] font-normal [&_b]:font-bold [&_b]:text-white"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: pillar.description }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CURRICULUM BREAKDOWN SECTION (Elementor 0dd77a5) */}
      <section className="py-[36px] sm:py-[46px] bg-[#FFFFFF]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-6 lg:gap-10">
            
            {/* Left Column: Curriculum Breakdown (58%-60% width) */}
            <div className="w-full lg:w-[58%] xl:w-[60%] space-y-3.5">
              <h2 
                className="text-[26px] sm:text-[34px] lg:text-[40px] xl:text-[44px] font-semibold text-[#000000] font-gabarito leading-[32px] sm:leading-[42px] lg:leading-[48px] xl:leading-[52px]"
                style={{ fontFamily: "'Gabarito', sans-serif" }}
                dangerouslySetInnerHTML={{ __html: curriculum?.heading || 'Our Training Curriculum' }}
              />

              {curriculum?.intro && (
                <p 
                  className="font-roboto text-[15px] sm:text-[16px] leading-[24px] text-[#000000]"
                  style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                  {curriculum.intro}
                </p>
              )}

              {/* Render Structured Sections if present */}
              {curriculum?.sections ? (
                <div className="space-y-4 pt-1">
                  {curriculum.sections.map((sec, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <h3 
                        className="text-[17px] sm:text-[19px] lg:text-[21px] font-bold text-[#000000] font-gabarito leading-snug"
                        style={{ fontFamily: "'Gabarito', sans-serif" }}
                      >
                        {sec.title}
                      </h3>
                      {sec.subtitle && (
                        <p 
                          className="font-roboto text-[15px] sm:text-[16px] text-[#000000] leading-relaxed [&_b]:font-bold [&_b]:text-black [&_strong]:font-bold [&_strong]:text-black"
                          dangerouslySetInnerHTML={{ __html: sec.subtitle }}
                        />
                      )}
                      {sec.bullets && sec.bullets.length > 0 && (
                        <ul className="list-disc pl-5 space-y-1 font-roboto text-[15px] sm:text-[16px] text-[#000000] leading-relaxed [&_b]:font-bold [&_b]:text-black [&_strong]:font-bold [&_strong]:text-black">
                          {sec.bullets.map((b, bIdx) => (
                            <li key={bIdx} dangerouslySetInnerHTML={{ __html: formatBulletWithBold(b) }} />
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="list-disc pl-5 space-y-2 pt-1 font-roboto text-[15px] sm:text-[16px] text-[#000000] leading-relaxed [&_b]:font-bold [&_b]:text-black [&_strong]:font-bold [&_strong]:text-black">
                  {(curriculum?.items || []).map((item, idx) => (
                    <li key={idx}>
                      {item.title && item.title !== item.desc ? (
                        <>
                          <b className="font-bold text-[#000000]">{item.title}:</b>{' '}
                          <span>{item.desc}</span>
                        </>
                      ) : (
                        <span>{item.desc || item.title}</span>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Right Column: Action Image (40%-42% width) */}
            <div className="w-full lg:w-[42%] xl:w-[40%] flex justify-center lg:justify-end">
              <Image
                src={curriculum?.image || 'https://american-firearms.s3-eu-central-2.ionoscloud.com/images/gallery/gallery-range-line.webp'}
                alt={typeof curriculum?.heading === 'string' ? curriculum.heading.replace(/<[^>]+>/g, '') : course.title}
                width={480}
                height={640}
                className="w-full max-w-[420px] xl:max-w-[460px] h-auto object-contain rounded-none shadow-none"
              />
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
