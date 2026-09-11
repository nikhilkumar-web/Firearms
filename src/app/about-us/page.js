import Image from 'next/image';
import SubscribeButton from '@/components/common/SubscribeButton';
import InstructorsSection from '@/components/home/InstructorsSection';

export const metadata = {
  title: "About American Firearms Network | Professional Firearms Training",
  description: "About American Firearms Network, a Florida-based organization offering professional firearms training, safety, and skill development.",
};

export default function AboutUsPage() {
  const youtubeVideos = [
    { id: 'ctpQE_j8vyg', title: 'Weapons Lights - Our Thoughts' },
    { id: 'JdkoNyPqL5A', title: 'Experimentation Can Take You To The Next Level' },
    { id: '3FJ-QV8-FFc', title: 'Tactical Range Drills' },
    { id: 'mqybul_khzg', title: 'Who Are You Listening To?' }
  ];

  return (
    <main className="bg-white text-[#000000] overflow-x-hidden">
      
      {/* SECTION 1: Banner Header matching Elementor 589683b */}
      <section 
        className="relative py-[100px] text-center overflow-hidden"
        style={{
          backgroundImage: "url('https://american-firearms.s3-eu-central-2.ionoscloud.com/images/about/outdoor-range-group.webp')",
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <div 
          className="absolute inset-0 pointer-events-none" 
          style={{ backgroundColor: '#000000', opacity: 0.78 }}
        />
        <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 
            className="text-[36px] sm:text-[50px] font-semibold uppercase text-white font-gabarito leading-[44px] sm:leading-[60px]"
            style={{ fontFamily: "'Gabarito', sans-serif" }}
          >
            ABOUT US
          </h1>
        </div>
      </section>

      {/* SECTION 2: Subscribe To Our YouTube Channel matching Elementor 752d376 */}
      <section className="bg-white py-[50px] border-b border-black/5">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-[26px] sm:text-[32px] font-semibold uppercase tracking-normal text-center text-[#000000] font-gabarito mb-8"
            style={{ fontFamily: "'Gabarito', sans-serif" }}
          >
            Subscribe To Our YouTube Channel
          </h2>

          {/* 4 Videos side-by-side in grid matching Elementor col-25 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {youtubeVideos.map((video) => (
              <div
                key={video.id}
                className="relative w-full aspect-video overflow-hidden bg-black"
                style={{
                  borderRadius: '5px',
                  boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.6)'
                }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?autoplay=0&controls=1&rel=0`}
                  title={video.title}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>

          {/* Red Subscribe Now Button matching Elementor button styling */}
          <div className="text-center">
            <SubscribeButton />
          </div>
        </div>
      </section>

      {/* SECTION 3: Forged in Discipline Story matching Elementor 3f321f1 (#D6DBDD) */}
      <section className="bg-[#D6DBDD] py-[50px] sm:py-[60px]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-[32px] sm:text-[42px] lg:text-[50px] font-semibold text-center text-[#000000] font-gabarito leading-[40px] sm:leading-[50px] lg:leading-[60px] mb-12 sm:mb-16"
            style={{ fontFamily: "'Gabarito', sans-serif" }}
          >
            Forged in Discipline: The American<br className="hidden sm:inline" /> Firearms Network Story
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-10 sm:gap-y-12">
            {/* Box 1: ELITE INSTRUCTION */}
            <div className="flex items-start gap-4">
              <div className="w-[48px] h-[48px] min-w-[48px] rounded-[3px] bg-black text-white flex items-center justify-center shrink-0">
                <svg aria-hidden="true" className="w-6 h-6 fill-white" viewBox="0 0 512 512">
                  <path d="M500 224h-30.364C455.724 130.325 381.675 56.276 288 42.364V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v30.364C130.325 56.276 56.276 130.325 42.364 224H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h30.364C56.276 381.675 130.325 455.724 224 469.636V500c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-30.364C381.675 455.724 455.724 381.675 469.636 288H500c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12zM288 404.634V364c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40.634C165.826 392.232 119.783 346.243 107.366 288H148c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-40.634C119.768 165.826 165.757 119.783 224 107.366V148c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40.634C346.174 119.783 392.217 165.826 404.634 224H364c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40.634C392.217 346.243 346.174 392.232 288 404.634zM288 256c0 17.673-14.327 32-32 32s-32-14.327-32-32c0-17.673 14.327-32 32-32s32 14.327 32 32z"/>
                </svg>
              </div>
              <div className="space-y-1">
                <h3 
                  className="text-[20px] sm:text-[24px] font-semibold text-[#000000] font-gabarito uppercase leading-[28px]"
                  style={{ fontFamily: "'Gabarito', sans-serif" }}
                >
                  ELITE INSTRUCTION
                </h3>
                <p className="text-[16px] sm:text-[18px] text-[#000000] font-roboto leading-[24px]">
                  AFN training is built on professional standards, not trends. Every course is led by experienced instructors who emphasize safe handling, disciplined execution, and accountable decision-making. Instruction is structured, deliberate, and focused on skills that translate beyond the range.
                </p>
              </div>
            </div>

            {/* Box 2: CERTIFIED PROFESSIONAL STANDARDS */}
            <div className="flex items-start gap-4">
              <div className="w-[48px] h-[48px] min-w-[48px] rounded-[3px] bg-black text-white flex items-center justify-center shrink-0">
                <svg aria-hidden="true" className="w-6 h-6 fill-white" viewBox="0 0 512 512">
                  <path d="M500 224h-30.364C455.724 130.325 381.675 56.276 288 42.364V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v30.364C130.325 56.276 56.276 130.325 42.364 224H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h30.364C56.276 381.675 130.325 455.724 224 469.636V500c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-30.364C381.675 455.724 455.724 381.675 469.636 288H500c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12zM288 404.634V364c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40.634C165.826 392.232 119.783 346.243 107.366 288H148c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-40.634C119.768 165.826 165.757 119.783 224 107.366V148c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40.634C346.174 119.783 392.217 165.826 404.634 224H364c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40.634C392.217 346.243 346.174 392.232 288 404.634zM288 256c0 17.673-14.327 32-32 32s-32-14.327-32-32c0-17.673 14.327-32 32-32s32 14.327 32 32z"/>
                </svg>
              </div>
              <div className="space-y-1">
                <h3 
                  className="text-[20px] sm:text-[24px] font-semibold text-[#000000] font-gabarito uppercase leading-[28px]"
                  style={{ fontFamily: "'Gabarito', sans-serif" }}
                >
                  CERTIFIED PROFESSIONAL STANDARDS
                </h3>
                <p className="text-[16px] sm:text-[18px] text-[#000000] font-roboto leading-[24px]">
                  American Firearms Network instruction is grounded in nationally recognized training frameworks, including NRA and USCCA standards. These certifications ensure our courses reflect established best practices in firearms safety, defensive training, and legal responsibility—providing students with instruction they can trust.
                </p>
              </div>
            </div>

            {/* Box 3: PERFORMANCE OVER THEORY */}
            <div className="flex items-start gap-4">
              <div className="w-[48px] h-[48px] min-w-[48px] rounded-[3px] bg-black text-white flex items-center justify-center shrink-0">
                <svg aria-hidden="true" className="w-6 h-6 fill-white" viewBox="0 0 512 512">
                  <path d="M500 224h-30.364C455.724 130.325 381.675 56.276 288 42.364V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v30.364C130.325 56.276 56.276 130.325 42.364 224H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h30.364C56.276 381.675 130.325 455.724 224 469.636V500c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-30.364C381.675 455.724 455.724 381.675 469.636 288H500c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12zM288 404.634V364c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40.634C165.826 392.232 119.783 346.243 107.366 288H148c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-40.634C119.768 165.826 165.757 119.783 224 107.366V148c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40.634C346.174 119.783 392.217 165.826 404.634 224H364c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40.634C392.217 346.243 346.174 392.232 288 404.634zM288 256c0 17.673-14.327 32-32 32s-32-14.327-32-32c0-17.673 14.327-32 32-32s32 14.327 32 32z"/>
                </svg>
              </div>
              <div className="space-y-1">
                <h3 
                  className="text-[20px] sm:text-[24px] font-semibold text-[#000000] font-gabarito uppercase leading-[28px]"
                  style={{ fontFamily: "'Gabarito', sans-serif" }}
                >
                  PERFORMANCE OVER THEORY
                </h3>
                <p className="text-[16px] sm:text-[18px] text-[#000000] font-roboto leading-[24px]">
                  We focus on what works. AFN training prioritizes practical application, efficient mechanics, and sound judgment rather than abstract concepts or static drills. The objective is competence—skills that are repeatable, measurable, and reliable under realistic conditions.
                </p>
              </div>
            </div>

            {/* Box 4: CONTINUOUS DEVELOPMENT */}
            <div className="flex items-start gap-4">
              <div className="w-[48px] h-[48px] min-w-[48px] rounded-[3px] bg-black text-white flex items-center justify-center shrink-0">
                <svg aria-hidden="true" className="w-6 h-6 fill-white" viewBox="0 0 512 512">
                  <path d="M500 224h-30.364C455.724 130.325 381.675 56.276 288 42.364V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v30.364C130.325 56.276 56.276 130.325 42.364 224H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h30.364C56.276 381.675 130.325 455.724 224 469.636V500c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-30.364C381.675 455.724 455.724 381.675 469.636 288H500c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12zM288 404.634V364c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40.634C165.826 392.232 119.783 346.243 107.366 288H148c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-40.634C119.768 165.826 165.757 119.783 224 107.366V148c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40.634C346.174 119.783 392.217 165.826 404.634 224H364c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40.634C392.217 346.243 346.174 392.232 288 404.634zM288 256c0 17.673-14.327 32-32 32s-32-14.327-32-32c0-17.673 14.327-32 32-32s32 14.327 32 32z"/>
                </svg>
              </div>
              <div className="space-y-1">
                <h3 
                  className="text-[20px] sm:text-[24px] font-semibold text-[#000000] font-gabarito uppercase leading-[28px]"
                  style={{ fontFamily: "'Gabarito', sans-serif" }}
                >
                  CONTINUOUS DEVELOPMENT
                </h3>
                <p className="text-[16px] sm:text-[18px] text-[#000000] font-roboto leading-[24px]">
                  Training does not end when a session concludes. AFN supports ongoing development through educational content, professional resources, and instructional media. This integrated approach reinforces consistent standards and encourages responsible, informed practice beyond live-fire sessions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: The Mission: Beyond The Firing Line matching Elementor 1215231 */}
      <section className="bg-white py-[50px]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-[32px] sm:text-[42px] lg:text-[50px] font-semibold text-center text-[#000000] font-gabarito mb-8 sm:mb-12 leading-[40px] sm:leading-[50px] lg:leading-[60px]"
            style={{ fontFamily: "'Gabarito', sans-serif" }}
          >
            The Mission: Beyond The Firing Line
          </h2>

          {/* Row 1: Image Left (40.469%), Text Right (59.531%) */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-12 sm:mb-16">
            {/* Left Image: Outdoor Range Group */}
            <div className="w-full lg:w-[40.469%] shrink-0 flex justify-center">
              <Image
                src="https://american-firearms.s3-eu-central-2.ionoscloud.com/images/about/outdoor-range-group.webp"
                alt="AFN Firearms Training Range Group"
                width={800}
                height={600}
                priority
                className="w-full h-auto object-contain rounded-none shadow-none"
              />
            </div>

            {/* Right Text */}
            <div className="w-full lg:w-[59.531%] space-y-4 text-justify font-roboto text-[16px] sm:text-[18px] leading-[24px] text-[#000000]">
              <h3 
                className="text-[20px] sm:text-[24px] font-semibold text-[#000000] font-gabarito leading-[28px] sm:leading-[30px] text-left"
                style={{ fontFamily: "'Gabarito', sans-serif" }}
              >
                Setting the Standard for Responsible American Firearms Training
              </h3>

              <p>
                The American Firearms Network (AFN) exists to develop <b>competent, responsible firearm users</b> prepared for real-world conditions. Based in <b>West Palm Beach, Florida</b>, AFN is a professional firearms training organization and educational media platform built for individuals who take personal protection seriously.
              </p>
              <p>
                We move beyond static shooting lanes and check-the-box instruction. Our focus is <b>practical readiness</b>—the ability to apply sound judgment, disciplined technique, and lawful decision-making when it matters most.
              </p>
              
              <h3 
                className="text-[20px] sm:text-[24px] font-semibold text-[#000000] font-gabarito leading-[28px] sm:leading-[30px] pt-2 text-left"
                style={{ fontFamily: "'Gabarito', sans-serif" }}
              >
                Why the American Firearms Network Exists
              </h3>
              
              <p>
                Owning a firearm is a right. Using one responsibly requires <b>training, accountability, and continuous development</b>. AFN was founded to close the gap between ownership and proficiency. We provide structured firearms education for people who want more than minimum standards—people who understand that confidence comes from preparation, not equipment alone. Our role is simple: deliver clear instruction, reinforce safe practices, and help students and viewers build skills they can rely on outside controlled range environments.
              </p>
            </div>
          </div>

          {/* Row 2: Text Left (59.531%), Image Right (40.469%) */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left Text */}
            <div className="w-full lg:w-[59.531%] space-y-4 text-justify font-roboto text-[16px] sm:text-[18px] leading-[24px] text-[#000000]">
              <h3 
                className="text-[20px] sm:text-[24px] font-semibold text-[#000000] font-gabarito leading-[28px] sm:leading-[30px] text-left"
                style={{ fontFamily: "'Gabarito', sans-serif" }}
              >
                A Modern, Integrated Training Network
              </h3>
              
              <p>
                The American Firearms Network replaces the traditional gun range model with a <b>connected training and education ecosystem</b>.
              </p>
              <p className="text-left">
                Our platform combines:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-left">
                <li>
                  Professional <b>indoor and outdoor firearms instruction</b>
                </li>
                <li>
                  Curated access to <b>duty-grade equipment and training tools</b>
                </li>
                <li>
                  Ongoing digital education through the <b>American Firearms Network YouTube channel</b>
                </li>
              </ul>
              <p>
                Each element supports the same objective: consistent standards, measurable improvement, and responsible skill development.
              </p>
            </div>

            {/* Right Image: Classroom Training */}
            <div className="w-full lg:w-[40.469%] shrink-0 flex justify-center">
              <Image
                src="https://american-firearms.s3-eu-central-2.ionoscloud.com/images/about/classroom-training.jpg"
                alt="AFN Classroom Firearms Education"
                width={500}
                height={376}
                priority
                className="w-full h-auto object-contain rounded-none shadow-none"
              />
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5: What Makes AFN Different matching Elementor 43415b3f */}
      <section 
        className="relative py-[30px] overflow-hidden"
        style={{
          backgroundImage: 'url(https://american-firearms.s3-eu-central-2.ionoscloud.com/images/about/page-header-bg.jpg)',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-[#000000] opacity-72" style={{ backgroundColor: '#000000', opacity: 0.72 }} />
        <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 min-h-[453px] flex items-center">
          <div className="w-full flex flex-col lg:flex-row items-center py-4">
            {/* Left Column: 39.38% width, hidden on tablet and mobile */}
            <div className="hidden lg:block lg:w-[39.38%] shrink-0" />

            {/* Right Column: 60.62% width */}
            <div className="w-full lg:w-[60.62%] space-y-5">
              <h2 
                className="text-[30px] sm:text-[40px] lg:text-[50px] font-semibold text-white font-gabarito leading-[36px] sm:leading-[48px] lg:leading-[60px]"
                style={{ fontFamily: "'Gabarito', sans-serif" }}
              >
                What Makes AFN Different
              </h2>

              <ul className="space-y-3.5 font-roboto text-[15px] sm:text-[16px] lg:text-[18px] text-white leading-[22px] lg:leading-[25px]">
                <li className="flex items-start gap-3">
                  <svg aria-hidden="true" className="w-5 h-5 fill-[#B1800F] shrink-0 mt-1" viewBox="0 0 512 512">
                    <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zM140 300h116v70.9c0 10.7 13 16.1 20.5 8.5l114.3-114.9c4.7-4.7 4.7-12.2 0-16.9l-114.3-115c-7.6-7.6-20.5-2.2-20.5 8.5V212H140c-6.6 0-12 5.4-12 12v64c0 6.6 5.4 12 12 12z"/>
                  </svg>
                  <span><b>Real-World Firearms Education:</b> Our training goes beyond permit requirements and static drills. We emphasize situational awareness, safe weapon handling, and the ethical use of force.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg aria-hidden="true" className="w-5 h-5 fill-[#B1800F] shrink-0 mt-1" viewBox="0 0 512 512">
                    <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zM140 300h116v70.9c0 10.7 13 16.1 20.5 8.5l114.3-114.9c4.7-4.7 4.7-12.2 0-16.9l-114.3-115c-7.6-7.6-20.5-2.2-20.5 8.5V212H140c-6.6 0-12 5.4-12 12v64c0 6.6 5.4 12 12 12z"/>
                  </svg>
                  <span><b>State-of-the-Art Facilities:</b> Train in a modern and well-equipped facility designed to provide a comfortable and safe learning environment. Firearm rentals are available.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg aria-hidden="true" className="w-5 h-5 fill-[#B1800F] shrink-0 mt-1" viewBox="0 0 512 512">
                    <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zM140 300h116v70.9c0 10.7 13 16.1 20.5 8.5l114.3-114.9c4.7-4.7 4.7-12.2 0-16.9l-114.3-115c-7.6-7.6-20.5-2.2-20.5 8.5V212H140c-6.6 0-12 5.4-12 12v64c0 6.6 5.4 12 12 12z"/>
                  </svg>
                  <span><b>Safety Focused Instruction:</b> Safety is our topmost priority, and it&apos;s ingrained in everything we do. Our instructors are committed to providing the highest standard of safety training to ensure that every student learns how to handle firearms safely and responsibly.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg aria-hidden="true" className="w-5 h-5 fill-[#B1800F] shrink-0 mt-1" viewBox="0 0 512 512">
                    <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zM140 300h116v70.9c0 10.7 13 16.1 20.5 8.5l114.3-114.9c4.7-4.7 4.7-12.2 0-16.9l-114.3-115c-7.6-7.6-20.5-2.2-20.5 8.5V212H140c-6.6 0-12 5.4-12 12v64c0 6.6 5.4 12 12 12z"/>
                  </svg>
                  <span><b>Professional Coaching:</b> AFN instruction is led by NRA and USCCA experienced instructors who focus on fundamentals, performance diagnostics, and repeatable technique—whether in private sessions or structured group training.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg aria-hidden="true" className="w-5 h-5 fill-[#B1800F] shrink-0 mt-1" viewBox="0 0 512 512">
                    <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zM140 300h116v70.9c0 10.7 13 16.1 20.5 8.5l114.3-114.9c4.7-4.7 4.7-12.2 0-16.9l-114.3-115c-7.6-7.6-20.5-2.2-20.5 8.5V212H140c-6.6 0-12 5.4-12 12v64c0 6.6 5.4 12 12 12z"/>
                  </svg>
                  <span><b>Continuous Learning:</b> Through our YouTube channel and educational content, AFN provides ongoing instruction and insight to help individuals maintain and improve their skills between live-fire sessions.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Meet The Instructors matching Elementor 08232a6 */}
      <InstructorsSection bgClassName="bg-white" />

    </main>
  );
}
