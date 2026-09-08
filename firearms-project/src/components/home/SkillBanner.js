import Link from 'next/link';
import Image from 'next/image';

export default function SkillBanner() {
  return (
    <section className="relative py-24 sm:py-32 lg:py-[100px] bg-[#000000] text-white overflow-hidden text-center">
      {/* Background Image with Elementor 0.72 Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about/classroom-training.jpg"
          alt="Firearms Lifesaving Skill Banner"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#000000]/70"></div>
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Section Heading: Gabarito 42px line-height 50px font-weight 600 text-center #FFFFFF */}
        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-white uppercase tracking-normal font-gabarito leading-tight lg:leading-[50px]">
          IT’S NOT A HOBBY.<br />
          IT’S A LIFESAVING SKILL.
        </h2>

        {/* Sub-paragraph: 18px line-height 24px #F0F0F0 text-center */}
        <p className="text-base sm:text-[18px] text-[#F0F0F0] max-w-4xl mx-auto leading-[24px] font-normal font-roboto">
          Owning a firearm is only the first step; mastering it is your responsibility. At the <strong className="font-bold text-white">American Firearms Network</strong>, we strip away the “range day” fluff and focus on mission-critical proficiency. Whether you are a first-time owner or a seasoned enthusiast, our professional instruction—led by <strong className="font-bold text-white">Todd Grama</strong>—is designed to build the confidence and speed required to protect what matters most.
        </p>

        {/* Action Button: padding 12px 40px, font 18px, gold gradient */}
        <div className="pt-8">
          <Link
            href="/contact-us"
            style={{
              backgroundImage: 'linear-gradient(219deg, #B1800F 0%, #000000 67%)',
              border: '2px solid #A5AAAB',
              padding: '12px 40px',
              borderRadius: '3px'
            }}
            className="inline-block text-white font-medium uppercase text-[15px] leading-[15px] tracking-normal transition-all hover:brightness-125 hover:scale-105 shadow-xl font-roboto"
          >
            START YOUR TRAINING
          </Link>
        </div>
      </div>
    </section>
  );
}
