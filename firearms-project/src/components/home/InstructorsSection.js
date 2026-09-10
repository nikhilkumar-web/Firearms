import Image from 'next/image';

export default function InstructorsSection({ bgClassName = 'bg-[#E6E6E6]' }) {
  return (
    <section className={`${bgClassName} text-[#000000] py-[50px]`}>
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Exact Section Heading: Gabarito 50px (mobile 28px/tablet 40px) line-height 60px font-weight 600 text-center #000000 */}
        <h2 
          className="text-[28px] sm:text-[40px] lg:text-[50px] font-semibold text-[#000000] tracking-normal mb-12 sm:mb-16 text-center leading-[36px] sm:leading-[48px] lg:leading-[60px]"
          style={{ fontFamily: "'Gabarito', sans-serif" }}
        >
          Meet The Instructors
        </h2>

        {/* Instructor 1: Todd Grama (Elementor cf17f72) */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 pb-12 sm:pb-16 border-b border-black/15">
          
          {/* Todd Image */}
          <div className="shrink-0">
            <div className="relative w-[320px] sm:w-[380px] lg:w-[410px] h-[430px] sm:h-[510px] lg:h-[550px] rounded-xl overflow-hidden shadow-lg bg-[#D6DBDD]">
              <Image
                src="https://american-firearms.s3-eu-central-2.ionoscloud.com/images/instructors/todd-grama.png"
                alt="Todd Grama - Co-Founder & Lead Instructor"
                fill
                sizes="(max-width: 640px) 320px, (max-width: 1024px) 380px, 410px"
                priority
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Todd Bio & Credentials */}
          <div className="w-full max-w-[590px] space-y-4 text-[16px] sm:text-[18px] leading-[24px] text-[#000000] text-justify font-roboto">
            <div className="text-left">
              <h3 
                className="text-[28px] sm:text-[34px] font-semibold text-[#000000] uppercase tracking-normal leading-[34px] sm:leading-[40px]"
                style={{ fontFamily: "'Gabarito', sans-serif" }}
              >
                TODD GRAMA
              </h3>
              <p 
                className="text-[20px] sm:text-[22px] font-semibold text-[#000000] leading-[28px] mt-1"
                style={{ fontFamily: "'Gabarito', sans-serif" }}
              >
                Co-Founder &amp; Lead Instructor
              </p>
            </div>

            <p>
              Todd Grama is a co-founder of the American Firearms Network and a senior firearms instructor known for setting and enforcing high standards in defensive training and range operations. His work is focused on developing responsible, capable firearm users who understand that proficiency is built through discipline, structure, and accountability.
            </p>

            <p>
              Todd’s instruction is methodical and performance-oriented. He emphasizes sound fundamentals, efficient mechanics, and clear decision-making—skills that remain reliable under stress. Students train under a system that prioritizes safety, legal awareness, and repeatable execution, ensuring progress is measurable and skills are transferable beyond the range.
            </p>

            <p>
              With a career built on the dual pillars of tactical armed security and sophisticated range management, Todd brings a composed, authoritative presence to every course. He is respected for his attention to detail, clear communication, and ability to elevate students at every level without compromising standards. His leadership helps define the instructional consistency and professionalism that characterize AFN training.
            </p>

            <div className="pt-2 text-left">
              <h4 
                className="text-[18px] sm:text-[20px] font-semibold text-[#000000] leading-[28px] mb-2"
                style={{ fontFamily: "'Gabarito', sans-serif" }}
              >
                Professional Credentials
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 text-[15px] sm:text-[16px] font-medium leading-[22px] text-[#000000]">
                <ul className="space-y-1">
                  <li className="flex items-start gap-2">
                    <span className="shrink-0 select-none">•</span>
                    <span className="flex-1">NRA Certified Firearms Instructor (Pistol)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="shrink-0 select-none">•</span>
                    <span className="flex-1">Certified in Rifle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="shrink-0 select-none">•</span>
                    <span className="flex-1">Certified in Shotgun</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="shrink-0 select-none">•</span>
                    <span className="flex-1">Certified in Inside the Home</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="shrink-0 select-none">•</span>
                    <span className="flex-1">Certified in Outside the Home</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="shrink-0 select-none">•</span>
                    <span className="flex-1">Range Master Certified Instructor</span>
                  </li>
                </ul>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2">
                    <span className="shrink-0 select-none">•</span>
                    <span className="flex-1">USCCA Firearms Instructor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="shrink-0 select-none">•</span>
                    <span className="flex-1">USCCA Range Safety Officer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="shrink-0 select-none">•</span>
                    <span className="flex-1">Code 4 Armed Church Security Certified</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="shrink-0 select-none">•</span>
                    <span className="flex-1">Licensed Florida Armed Security Officer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="shrink-0 select-none">•</span>
                    <span className="flex-1">Instructor on the YouTube Channel &quot;The American Firearms Network&quot;</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* Instructor 2: Paul Gayle (Elementor 4c8fe2a - reverse-tablet and reverse-mobile) */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 pt-12 sm:pt-16">
          
          {/* Paul Bio & Credentials (Order 2 on mobile, Order 1 on desktop) */}
          <div className="order-2 lg:order-1 w-full max-w-[590px] space-y-4 text-[16px] sm:text-[18px] leading-[24px] text-[#000000] text-justify font-roboto">
            <div className="text-left">
              <h3 
                className="text-[28px] sm:text-[34px] font-semibold text-[#000000] uppercase tracking-normal leading-[34px] sm:leading-[40px]"
                style={{ fontFamily: "'Gabarito', sans-serif" }}
              >
                PAUL GAYLE
              </h3>
              <p 
                className="text-[20px] sm:text-[22px] font-semibold text-[#000000] leading-[28px] mt-1"
                style={{ fontFamily: "'Gabarito', sans-serif" }}
              >
                Co-Founder &amp; Lead Instructor
              </p>
            </div>

            <p>
              Paul Gayle is a co-founder of the American Firearms Network and a senior firearms and combatives instructor with extensive experience in defensive training and physical skill development. His instruction prepares students for the practical realities of high-stress situations where control, movement, and judgment are critical.
            </p>

            <p>
              Paul’s training integrates firearms proficiency with disciplined movement and weapon management. He focuses on helping students maintain effectiveness when conditions are dynamic—reinforcing control, situational awareness, and decision-making under pressure. His approach is structured, deliberate, and grounded in real-world application.
            </p>

            <p>
              With decades of experience in martial arts and security-focused instruction, Paul brings a steady, professional teaching style that emphasizes reliability over speed and consistency over improvisation. He is known for reinforcing strong fundamentals, building physical confidence responsibly, and holding students to a standard that reflects real-world demands.
            </p>

            <div className="pt-2 text-left">
              <h4 
                className="text-[18px] sm:text-[20px] font-semibold text-[#000000] leading-[28px] mb-2"
                style={{ fontFamily: "'Gabarito', sans-serif" }}
              >
                Professional Credentials
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 text-[15px] sm:text-[16px] font-medium leading-[22px] text-[#000000]">
                <ul className="space-y-1">
                  <li className="flex items-start gap-2">
                    <span className="shrink-0 select-none">•</span>
                    <span className="flex-1">Judo practitioner</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="shrink-0 select-none">•</span>
                    <span className="flex-1">NRA Certified Firearms Instructor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="shrink-0 select-none">•</span>
                    <span className="flex-1">HTK Certified Range Safety Officer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="shrink-0 select-none">•</span>
                    <span className="flex-1">Expert in Movement Under Fire</span>
                  </li>
                </ul>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2">
                    <span className="shrink-0 select-none">•</span>
                    <span className="flex-1">USCCA Certified Firearms Instructor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="shrink-0 select-none">•</span>
                    <span className="flex-1">HTK Training Group Black Site Director</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="shrink-0 select-none">•</span>
                    <span className="flex-1">Specialist in Weapons Retention &amp; Close-Quarters Engagement</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Paul Image (Order 1 on mobile, Order 2 on desktop) */}
          <div className="order-1 lg:order-2 shrink-0">
            <div className="relative w-[320px] sm:w-[380px] lg:w-[410px] h-[430px] sm:h-[510px] lg:h-[550px] rounded-xl overflow-hidden shadow-lg bg-[#D6DBDD]">
              <Image
                src="https://american-firearms.s3-eu-central-2.ionoscloud.com/images/instructors/paul-gayle.webp"
                alt="Paul Gayle - Co-Founder & Lead Instructor"
                fill
                sizes="(max-width: 640px) 320px, (max-width: 1024px) 380px, 410px"
                priority
                className="object-cover object-top"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
