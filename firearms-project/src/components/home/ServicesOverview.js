import Link from 'next/link';
import Image from 'next/image';

export default function ServicesOverview() {
  return (
    <section className="relative py-16 sm:py-20 bg-[#000000] text-white overflow-hidden">
      {/* Background Image with Fixed Parallax matching Elementor Section 522f9dd */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/video/video-bg.png"
          alt="Firearms Training Services"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#000000]/80"></div>
      </div>

      <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Gabarito 42px line-height 50px font-weight 600 text-center #FFFFFF */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold uppercase tracking-normal font-gabarito text-white leading-tight lg:leading-[50px]">
            OUR SERVICES
          </h2>
          <p className="text-base sm:text-[18px] leading-[24px] text-white font-roboto">
            Whether you are a first-time owner learning the fundamentals or an experienced professional refining advanced tactics, we provide a disciplined path to total confidence. We bridge the gap between possessing a firearm and operating one with precision, safety, and legal responsibility.
          </p>
        </div>

        {/* 2 Service Cards matching Elementor .elementor-element-d340b1b & .elementor-element-5cbb1b7 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          
          {/* Card 1: Private Sessions */}
          <div
            style={{
              border: '1px solid #C08C15',
              boxShadow: '0px 0px 12px 0px #C08C15',
              borderRadius: '10px',
              padding: '45px 25px 35px 25px'
            }}
            className="relative overflow-hidden flex flex-col justify-between text-center transition-all duration-300 hover:scale-[1.02]"
          >
            {/* Tactical Card Background with 0.84 Dark Overlay */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/about/range-service.webp"
                alt="Private Sessions Background"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-[#000000]/85"></div>
            </div>

            <div className="relative z-10 space-y-4">
              <h3 className="text-2xl sm:text-[28px] font-semibold uppercase tracking-wide text-[#BC8914] font-gabarito leading-[32px]">
                Private Sessions
              </h3>
              <p className="text-base sm:text-[18px] leading-[24px] text-white font-roboto">
                Elevate your defense game with private, elite-level mentorship. We analyze your technique and build a custom tactical roadmap for maximum effectiveness. Stop practicing bad habits—master real-world proficiency with an expert dedicated solely to your survival.
              </p>
            </div>

            <div className="relative z-10 pt-8">
              <Link
                href="/contact-us"
                style={{
                  backgroundImage: 'linear-gradient(219deg, #B1800F 0%, #000000 67%)',
                  border: '2px solid #A5AAAB',
                  padding: '12px 40px',
                  borderRadius: '3px'
                }}
                className="inline-block text-white font-medium uppercase text-[15px] leading-[15px] tracking-normal transition-all hover:brightness-125 hover:scale-105 shadow-lg font-roboto"
              >
                CONSULT TODAY!
              </Link>
            </div>
          </div>

          {/* Card 2: Group Sessions */}
          <div
            style={{
              border: '1px solid #C08C15',
              boxShadow: '0px 0px 12px 0px #C08C15',
              borderRadius: '10px',
              padding: '45px 25px 35px 25px'
            }}
            className="relative overflow-hidden flex flex-col justify-between text-center transition-all duration-300 hover:scale-[1.02]"
          >
            {/* Tactical Card Background with 0.84 Dark Overlay */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/about/range-service.webp"
                alt="Group Sessions Background"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-[#000000]/85"></div>
            </div>

            <div className="relative z-10 space-y-4">
              <h3 className="text-2xl sm:text-[28px] font-semibold uppercase tracking-wide text-[#BC8914] font-gabarito leading-[32px]">
                Group Sessions
              </h3>
              <p className="text-base sm:text-[18px] leading-[24px] text-white font-roboto">
                Step into high-energy sessions that blend tactical instruction with friendly competition. Build your skills through coached drills, challenge yourself, and see your progress over time. Join the Network and level up with a supportive team.
              </p>
            </div>

            <div className="relative z-10 pt-8">
              <Link
                href="/contact-us"
                style={{
                  backgroundImage: 'linear-gradient(219deg, #B1800F 0%, #000000 67%)',
                  border: '2px solid #A5AAAB',
                  padding: '12px 40px',
                  borderRadius: '3px'
                }}
                className="inline-block text-white font-medium uppercase text-[15px] leading-[15px] tracking-normal transition-all hover:brightness-125 hover:scale-105 shadow-lg font-roboto"
              >
                SECURE YOUR SPOT
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
