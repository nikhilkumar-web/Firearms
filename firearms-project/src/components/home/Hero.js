import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#000000] text-white">
      {/* Background Tactical Case Image matching exact live site frame shown in Image 1 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-banner.jpg"
          alt="American Firearms Network Tactical Training"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark overlay matching live site elementor-background-overlay 0.76 opacity */}
        <div className="absolute inset-0 bg-[#000000]/75"></div>
      </div>

      {/* Main Hero Container matching live site spacing */}
      <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10 sm:pt-16 sm:pb-12 lg:pt-20 lg:pb-14 text-center">
        
        {/* Exact Heading: Calistoga 62px leading 75px font-weight 500 uppercase #FFFFFF */}
        <h1 className="text-3xl sm:text-5xl lg:text-[62px] font-medium text-white tracking-normal uppercase leading-tight sm:leading-[60px] lg:leading-[75px] max-w-5xl mx-auto font-calistoga drop-shadow-md">
          FIREARMS EDUCATION, SAFETY &amp;<br />
          <span>SKILL DEVELOPMENT</span>
        </h1>

        {/* Exact Subtitle: Roboto 18px leading 24px #FFFFFF */}
        <p className="mt-6 text-sm sm:text-[18px] text-white max-w-4xl mx-auto leading-relaxed sm:leading-[24px] font-normal font-roboto">
          <strong className="font-bold text-white">Skill is built through training, not chance.</strong> Step into a structured firearms education environment designed to help you progress with clarity and confidence. Through personalized instruction and structured training sessions, develop the skills, judgment, and discipline required for responsible firearm use.
        </p>

        {/* 2 Booking Action Blocks */}
        <div className="mt-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 lg:gap-14 items-start justify-center">
            
            {/* Left Column: SCHEDULE A ONE ON ONE LESSON */}
            <div className="flex flex-col items-center sm:items-end space-y-3">
              <h2 className="text-base sm:text-[20px] lg:text-[23px] font-semibold text-white uppercase text-center sm:text-right leading-tight font-roboto whitespace-nowrap">
                SCHEDULE A ONE ON ONE LESSON
              </h2>
              <Link
                href="/contact-us"
                style={{
                  backgroundImage: 'linear-gradient(219deg, #B1800F 0%, #000000 67%)',
                  border: '1px solid #A5AAAB',
                  padding: '12px 40px',
                  borderRadius: '3px'
                }}
                className="inline-block text-white font-medium uppercase text-[18px] leading-[20px] tracking-normal transition-all hover:brightness-125 hover:scale-105 shadow-md font-roboto"
              >
                CLICK HERE
              </Link>
            </div>

            {/* Right Column: SCHEDULE A GROUP LESSON */}
            <div className="flex flex-col items-center sm:items-start space-y-3">
              <h2 className="text-base sm:text-[20px] lg:text-[23px] font-semibold text-white uppercase text-center sm:text-left leading-tight font-roboto whitespace-nowrap">
                SCHEDULE A GROUP LESSON
              </h2>
              <Link
                href="/contact-us"
                style={{
                  backgroundImage: 'linear-gradient(219deg, #B1800F 0%, #000000 67%)',
                  border: '1px solid #A5AAAB',
                  padding: '12px 40px',
                  borderRadius: '3px'
                }}
                className="inline-block text-white font-medium uppercase text-[18px] leading-[20px] tracking-normal transition-all hover:brightness-125 hover:scale-105 shadow-md font-roboto"
              >
                CLICK HERE
              </Link>
            </div>

          </div>
        </div>

        {/* Notice line under boxes: Gabarito 22px uppercase */}
        <div className="mt-8 text-base sm:text-[22px] font-semibold uppercase tracking-wider text-white font-gabarito leading-[28px]">
          ALL LESSONS ARE LOCATED IN SOUTH FLORIDA
        </div>
      </div>

      {/* 3-Column Feature Strip matching live site #050505 with 26px Gabarito */}
      <div className="relative z-10 border-t border-b border-white/15 bg-[#050505] py-8">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 text-center md:text-left">
          
          {/* Feature 1 */}
          <div className="flex items-center justify-center md:justify-start gap-4 px-6 md:border-r border-white/15 py-2">
            <svg aria-hidden="true" className="w-[28px] h-[28px] fill-[#B1800F] shrink-0" viewBox="0 0 512 512">
              <path d="M500 224h-30.364C455.724 130.325 381.675 56.276 288 42.364V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v30.364C130.325 56.276 56.276 130.325 42.364 224H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h30.364C56.276 381.675 130.325 455.724 224 469.636V500c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-30.364C381.675 455.724 455.724 381.675 469.636 288H500c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12zM288 404.634V364c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40.634C165.826 392.232 119.783 346.243 107.366 288H148c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-40.634C119.768 165.826 165.757 119.783 224 107.366V148c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40.634C346.174 119.768 392.217 165.757 404.634 224H364c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40.634C392.232 346.174 346.243 392.217 288 404.634zM288 256c0 17.673-14.327 32-32 32s-32-14.327-32-32c0-17.673 14.327-32 32-32s32 14.327 32 32z"/>
            </svg>
            <h2 className="text-[15px] font-semibold text-[#E0E0E0] leading-[22px] font-gabarito">
              Expert Instruction
            </h2>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center justify-center md:justify-start gap-4 px-6 md:border-r border-white/15 py-2">
            <svg aria-hidden="true" className="w-[28px] h-[28px] fill-[#B1800F] shrink-0" viewBox="0 0 512 512">
              <path d="M500 224h-30.364C455.724 130.325 381.675 56.276 288 42.364V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v30.364C130.325 56.276 56.276 130.325 42.364 224H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h30.364C56.276 381.675 130.325 455.724 224 469.636V500c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-30.364C381.675 455.724 455.724 381.675 469.636 288H500c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12zM288 404.634V364c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40.634C165.826 392.232 119.783 346.243 107.366 288H148c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-40.634C119.768 165.826 165.757 119.783 224 107.366V148c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40.634C346.174 119.768 392.217 165.757 404.634 224H364c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40.634C392.232 346.174 346.243 392.217 288 404.634zM288 256c0 17.673-14.327 32-32 32s-32-14.327-32-32c0-17.673 14.327-32 32-32s32 14.327 32 32z"/>
            </svg>
            <h2 className="text-[15px] font-semibold text-[#E0E0E0] leading-[22px] font-gabarito">
              As Seen On YouTube
            </h2>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center justify-center md:justify-start gap-4 px-6 py-2">
            <svg aria-hidden="true" className="w-[28px] h-[28px] fill-[#B1800F] shrink-0" viewBox="0 0 512 512">
              <path d="M500 224h-30.364C455.724 130.325 381.675 56.276 288 42.364V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v30.364C130.325 56.276 56.276 130.325 42.364 224H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h30.364C56.276 381.675 130.325 455.724 224 469.636V500c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-30.364C381.675 455.724 455.724 381.675 469.636 288H500c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12zM288 404.634V364c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40.634C165.826 392.232 119.783 346.243 107.366 288H148c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-40.634C119.768 165.826 165.757 119.783 224 107.366V148c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40.634C346.174 119.768 392.217 165.757 404.634 224H364c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40.634C392.232 346.174 346.243 392.217 288 404.634zM288 256c0 17.673-14.327 32-32 32s-32-14.327-32-32c0-17.673 14.327-32 32-32s32 14.327 32 32z"/>
            </svg>
            <h2 className="text-[15px] font-semibold text-[#E0E0E0] leading-[22px] font-gabarito">
              Supportive Environment
            </h2>
          </div>

        </div>
      </div>
    </section>
  );
}
