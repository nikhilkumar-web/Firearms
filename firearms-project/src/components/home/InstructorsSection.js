import Image from 'next/image';

export default function InstructorsSection() {
  return (
    <section className="py-20 bg-[#000000] text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Exact Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-wide text-white">
            Meet The Instructors
          </h2>
        </div>

        {/* 2 Instructors */}
        <div className="space-y-16">
          {/* Instructor 1: Todd Grama */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 sm:p-10">
            <div className="lg:col-span-4 relative h-80 w-full rounded-xl overflow-hidden border border-white/10 shadow-lg">
              <Image
                src="/images/about/tactical-ecosystem.jpg"
                alt="Todd Grama"
                fill
                className="object-cover"
              />
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div>
                <h2 className="text-3xl font-extrabold text-white uppercase tracking-wide">
                  TODD GRAMA
                </h2>
                <h2 className="text-lg font-bold text-[#BC8914] uppercase tracking-wider mt-0.5">
                  Co-Founder &amp; Lead Instructor
                </h2>
              </div>

              <div className="space-y-3 text-sm text-[#D6DBDD] leading-relaxed">
                <p>
                  Todd Grama is a co-founder of the American Firearms Network and a senior firearms instructor known for setting and enforcing high standards in defensive training and range operations. His work is focused on developing responsible, capable firearm users who understand that proficiency is built through discipline, structure, and accountability.
                </p>
                <p>
                  Todd’s instruction is methodical and performance-oriented. He emphasizes sound fundamentals, efficient mechanics, and clear decision-making—skills that remain reliable under stress. Students train under a system that prioritizes safety, legal awareness, and repeatable execution, ensuring progress is measurable and skills are transferable beyond the range.
                </p>
                <p>
                  With a career built on the dual pillars of tactical armed security and sophisticated range management, Todd brings a composed, authoritative presence to every course. He is respected for his attention to detail, clear communication, and ability to elevate students at every level without compromising standards. His leadership helps define the instructional consistency and professionalism that characterize AFN training.
                </p>
              </div>

              {/* Exact Credentials List from Live Site */}
              <div className="pt-2">
                <h1 className="text-base font-bold text-white uppercase tracking-wider mb-2">
                  Professional Credentials
                </h1>
                <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-300">
                  <li>NRA Certified Firearms Instructor</li>
                  <li>Certified in Pistol</li>
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 sm:p-10">
            <div className="lg:col-span-4 relative h-80 w-full rounded-xl overflow-hidden border border-white/10 shadow-lg">
              <Image
                src="/images/about/tactical-diagnostics.webp"
                alt="Paul Gayle"
                fill
                className="object-cover"
              />
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div>
                <h2 className="text-3xl font-extrabold text-white uppercase tracking-wide">
                  PAUL GAYLE
                </h2>
                <h2 className="text-lg font-bold text-[#BC8914] uppercase tracking-wider mt-0.5">
                  Co-Founder &amp; Lead Instructor
                </h2>
              </div>

              <div className="space-y-3 text-sm text-[#D6DBDD] leading-relaxed">
                <p>
                  Paul Gayle is a co-founder of the American Firearms Network and a senior firearms and combatives instructor with extensive experience in defensive training and physical skill development. His instruction prepares students for the practical realities of high-stress situations where control, movement, and judgment are critical.
                </p>
                <p>
                  Paul’s training integrates firearms proficiency with disciplined movement and weapon management. He focuses on helping students maintain effectiveness when conditions are dynamic—reinforcing control, situational awareness, and decision-making under pressure. His approach is structured, deliberate, and grounded in real-world application.
                </p>
                <p>
                  With decades of experience in martial arts and security-focused instruction, Paul brings a steady, professional teaching style that emphasizes reliability over speed and consistency over improvisation. He is known for reinforcing strong fundamentals, building physical confidence responsibly, and holding students to a standard that reflects real-world demands.
                </p>
              </div>

              {/* Exact Credentials List from Live Site */}
              <div className="pt-2">
                <h1 className="text-base font-bold text-white uppercase tracking-wider mb-2">
                  Professional Credentials
                </h1>
                <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-300">
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
          </div>
        </div>
      </div>
    </section>
  );
}
