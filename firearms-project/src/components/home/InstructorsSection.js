import Image from 'next/image';

export default function InstructorsSection() {
  return (
    <section className="bg-[#E6E6E6] text-[#000000] py-14 sm:py-20">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Exact Section Heading: Gabarito 42px line-height 50px font-weight 600 text-center #000000 */}
        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#000000] tracking-normal font-gabarito mb-14 sm:mb-16 text-center leading-tight lg:leading-[50px]">
          Meet The Instructors
        </h2>

        {/* Instructor 1: Todd Grama */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center pb-16 border-b border-black/15">
          
          {/* Todd Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[360px] h-[490px] rounded-xl overflow-hidden shadow-xl bg-[#D6DBDD]">
              <Image
                src="/images/instructors/todd-grama.png"
                alt="Todd Grama - Co-Founder & Lead Instructor"
                fill
                priority
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Todd Bio & Credentials */}
          <div className="lg:col-span-7 space-y-4 text-[16px] sm:text-[18px] leading-[24px] text-[#000000] text-justify font-roboto">
            <div className="text-left">
              <h3 className="text-2xl sm:text-[34px] font-semibold text-[#000000] uppercase font-gabarito tracking-normal leading-[40px]">
                TODD GRAMA
              </h3>
              <p className="text-lg sm:text-[22px] font-semibold text-[#000000] font-gabarito leading-[28px] mt-1">
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
              <h4 className="text-lg sm:text-[20px] font-semibold text-[#000000] uppercase font-gabarito mb-3 leading-[28px]">
                Professional Credentials
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 list-disc pl-5 text-[15px] sm:text-[16px] font-medium leading-[22px] text-[#000000]">
                <li>NRA Certified Firearms Instructor (Pistol)</li>
                <li>Certified in Rifle</li>
                <li>Certified in Shotgun</li>
                <li>Certified in Inside the Home</li>
                <li>Certified in Outside the Home</li>
                <li>Range Master Certified Instructor</li>
                <li>USCCA Firearms Instructor</li>
                <li>USCCA Range Safety Officer</li>
                <li>Code 4 Armed Church Security Certified</li>
                <li>Licensed Florida Armed Security Officer</li>
                <li>Instructor on the YouTube Channel &quot;The American Firearms Network&quot;</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Instructor 2: Paul Gayle */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center pt-16">
          
          {/* Paul Bio & Credentials */}
          <div className="lg:col-span-7 order-2 lg:order-1 space-y-4 text-[16px] sm:text-[18px] leading-[24px] text-[#000000] text-justify font-roboto">
            <div className="text-left">
              <h3 className="text-2xl sm:text-[34px] font-semibold text-[#000000] uppercase font-gabarito tracking-normal leading-[40px]">
                PAUL GAYLE
              </h3>
              <p className="text-lg sm:text-[22px] font-semibold text-[#000000] font-gabarito leading-[28px] mt-1">
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
              <h4 className="text-lg sm:text-[20px] font-semibold text-[#000000] uppercase font-gabarito mb-3 leading-[28px]">
                Professional Credentials
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 list-disc pl-5 text-[15px] sm:text-[16px] font-medium leading-[22px] text-[#000000]">
                <li>Judo practitioner</li>
                <li>USCCA Certified Firearms Instructor</li>
                <li>NRA Certified Firearms Instructor</li>
                <li>HTK Training Group Black Site Director</li>
                <li>HTK Certified Range Safety Officer</li>
                <li>Specialist in Weapons Retention &amp; Close-Quarters Engagement</li>
                <li>Expert in Movement Under Fire</li>
              </ul>
            </div>
          </div>

          {/* Paul Image */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-[340px] h-[460px] rounded-xl overflow-hidden shadow-xl bg-[#D6DBDD]">
              <Image
                src="/images/instructors/paul-gayle.webp"
                alt="Paul Gayle - Co-Founder & Lead Instructor"
                fill
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
