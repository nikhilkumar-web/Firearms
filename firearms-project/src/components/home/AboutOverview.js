import Link from 'next/link';

export default function AboutOverview() {
  return (
    <section className="bg-[#D6DBDD] text-[#000000] py-12 sm:py-16">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Exact Section Heading: Gabarito 42px line-height 50px font-weight 600 text-center #000000 */}
        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#000000] uppercase tracking-normal font-gabarito mb-10 sm:mb-14 text-center leading-tight lg:leading-[50px]">
          ABOUT THE AMERICAN FIREARMS NETWORK
        </h2>

        {/* 2-Column Inner Layout matching Elementor data-id="9815577" */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: YouTube Video Embed */}
          <div className="w-full">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl bg-black border border-black/10">
              <iframe
                src="https://www.youtube.com/embed/J57IEQJu37c?autoplay=1&mute=1&loop=1&playlist=J57IEQJu37c&controls=1&rel=0&playsinline=1"
                title="About The American Firearms Network"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Right Column: Text Content and Action Buttons */}
          <div className="space-y-4 text-[16px] sm:text-[18px] leading-[24px] text-[#000000] text-justify font-roboto">
            <h3 className="text-xl sm:text-[22px] font-bold text-[#000000] uppercase font-gabarito tracking-wide text-left">
              YOUR ELITE PARTNER IN DEFENSIVE MASTERY
            </h3>

            <p>
              <strong className="text-[#000000] font-bold block mb-1 text-left">The Gap Between Ownership and Proficiency</strong>
              In the heart of Florida, the right to bear arms is a cornerstone of our community. But at The American Firearms Network (AFN), we believe a right without proficiency is a liability. Established in West Palm Beach, AFN was forged with a singular mission: to bridge the critical gap between static range practice and real-world tactical survival.
            </p>

            <p>
              <strong className="text-[#000000] font-bold block mb-1 text-left">More Than a Range—A Comprehensive Learning Ecosystem</strong>
              We are not just a training facility; we are Florida’s premier hub for the modern protector. Whether you are a first-time owner seeking a Florida Concealed Weapon License (CWL) or an elite professional refining high-cadence drills, our curriculum is engineered for results. We provide a one-stop learning experience that integrates:
            </p>

            <ul className="list-disc pl-6 space-y-1.5 text-[15px] sm:text-[17px] text-[#000000] text-left">
              <li>
                <strong className="text-[#000000]">Precision Indoor Diagnostics:</strong> Master the technical “science” of firearm performance in a controlled environment.
              </li>
              <li>
                <strong className="text-[#000000]">Scenario-Based Outdoor Drills:</strong> Translate your skills to dynamic, real-world stress simulations.
              </li>
              <li>
                <strong className="text-[#000000]">Florida Legal Clarity:</strong> Deep-dive sessions on “Stand Your Ground” laws and the ethical use of force.
              </li>
            </ul>

            <p>
              <strong className="text-[#000000] font-bold block mb-1 text-left">Digital Intelligence: The AFN YouTube Experience</strong>
              Our mission extends beyond the firing line. We leverage a high-performance YouTube Network to deliver tactical insights, gear reviews, and training “deep-dives” straight to your screen. We aren’t a passive media channel—we are an active institution using every digital tool to build a more capable, confident, and legally-informed citizenry.
            </p>

            <p>
              <strong className="text-[#000000] font-bold block mb-1 text-left">Forging the Adaptive Mindset</strong>
              At AFN, you don’t just “train”—you evolve. Join a network dedicated to the practical application of defensive skills and situational awareness.
            </p>

            <p className="font-bold text-[#000000] italic text-[18px] pt-1 text-left">
              “Standard range days only reveal where you are; AFN takes you where you need to be.”
            </p>

            {/* Action Buttons matching Elementor .elementor-button padding 12px 40px */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-left">
              <a
                href="https://www.youtube.com/@AMERICANFIREARMSNETWORKS?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundImage: 'linear-gradient(219deg, #EB0F06 0%, #E70C0C 67%)',
                  border: '2px solid #A5AAAB',
                  padding: '12px 40px',
                  borderRadius: '3px'
                }}
                className="inline-flex items-center gap-3 text-white font-medium uppercase text-[15px] leading-[15px] tracking-normal transition-all hover:brightness-110 hover:scale-105 shadow-md shrink-0 font-roboto h-[41px]"
              >
                <svg aria-hidden="true" className="w-[18px] h-[18px] fill-current" viewBox="0 0 576 512">
                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                </svg>
                SUBSCRIBE NOW
              </a>

              <Link
                href="/about-us"
                style={{
                  backgroundImage: 'linear-gradient(219deg, #B1800F 0%, #000000 67%)',
                  border: '1px solid #A5AAAB',
                  padding: '12px 40px',
                  borderRadius: '3px'
                }}
                className="inline-flex items-center justify-center text-white font-medium uppercase text-[15px] leading-[15px] tracking-normal transition-all hover:brightness-125 hover:scale-105 shadow-md shrink-0 font-roboto h-[41px]"
              >
                READ MORE
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
