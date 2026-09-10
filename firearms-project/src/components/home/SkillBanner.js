import Link from 'next/link';

export default function SkillBanner() {
  return (
    <section 
      className="relative py-[80px] sm:py-[100px] text-white overflow-hidden text-center"
      style={{
        backgroundColor: '#CBCBCB',
        backgroundImage: "url('https://american-firearms.s3-eu-central-2.ionoscloud.com/images/about/outdoor-range-group.webp')",
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      {/* Background Overlay with Elementor 0.72 Dark Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundColor: '#000000', opacity: 0.72 }}
      />

      <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Section Heading: Gabarito 50px (mobile 26px/tablet 42px) line-height 60px font-weight 600 text-center #FFFFFF */}
        <h2 
          className="text-[26px] sm:text-[36px] lg:text-[50px] font-semibold text-white uppercase tracking-normal leading-[34px] sm:leading-[44px] lg:leading-[60px]"
          style={{ fontFamily: "'Gabarito', sans-serif" }}
        >
          IT’S NOT A HOBBY.<br />
          IT’S A LIFESAVING SKILL.
        </h2>

        {/* Sub-paragraph: 18px line-height 24px #F0F0F0 text-center */}
        <p 
          className="text-[15px] sm:text-[18px] text-[#F0F0F0] max-w-[1100px] mx-auto leading-[22px] sm:leading-[24px] font-normal"
          style={{ fontFamily: "'Roboto', sans-serif" }}
        >
          Owning a firearm is only the first step; mastering it is your responsibility. At the <strong className="font-bold text-white">American Firearms Network</strong>, we strip away the “range day” fluff and focus on mission-critical proficiency. Whether you are a first-time owner or a seasoned enthusiast, our professional instruction—led by <strong className="font-bold text-white">Todd Grama</strong>—is designed to build the confidence and speed required to protect what matters most.
        </p>

        {/* Action Button: padding 12px 40px, font 18px, gold gradient */}
        <div className="pt-6">
          <Link
            href="/contact-us?popup=true"
            className="btn-tactical-gold text-white font-medium uppercase text-[15px] leading-[15px] tracking-normal font-roboto px-10 py-3.5 rounded-[3px] shadow-xl"
          >
            <span>START YOUR TRAINING</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
