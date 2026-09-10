import Image from 'next/image';
import { caliberComparison, bulletTypes, channelVideos, resourceVideos, suggestedReadings } from '@/data/resourcesData';

export const metadata = {
  title: "Firearms Resources & Ammo Guides | American Firearms Network",
  description: "Explore firearms resources from American Firearms Network, including handgun ammunition guides, ballistics education, and safety insights.",
};

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#000000] overflow-x-hidden font-roboto">
      
      {/* 1. HERO BANNER SECTION (Elementor 8ef13b4) */}
      <section 
        className="relative w-full py-[60px] sm:py-[100px] overflow-hidden"
        style={{
          backgroundImage: 'url(https://american-firearms.s3-eu-central-2.ionoscloud.com/images/about/outdoor-range-group.webp)',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundColor: '#000000', opacity: 0.78 }}
        />

        <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 
            className="text-[28px] sm:text-[50px] font-semibold uppercase text-white font-gabarito leading-[34px] sm:leading-[60px]"
            style={{ fontFamily: "'Gabarito', sans-serif" }}
          >
            Resources
          </h1>
        </div>
      </section>

      {/* 2. SUBSCRIBE TO YOUTUBE SECTION (Elementor b5a7e2c) */}
      <section className="py-[30px] sm:py-[50px] bg-[#FFFFFF]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 
            className="text-[28px] sm:text-[50px] font-semibold uppercase text-[#000000] font-gabarito leading-[34px] sm:leading-[60px] mb-6"
            style={{ fontFamily: "'Gabarito', sans-serif" }}
          >
            Subscribe To Our Youtube Channel
          </h2>

          {/* 4 Videos Grid matching Elementor elementor-element-25d38d7 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {channelVideos.map((video) => (
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
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            ))}
          </div>

          {/* Red Subscribe Button matching Elementor elementor-element-556d91d */}
          <div className="pt-2">
            <a
              href="https://www.youtube.com/@AMERICANFIREARMSNETWORKS?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#EB0F06',
                border: '2px solid #A5AAAB',
                padding: '12px 40px'
              }}
              className="inline-flex items-center justify-center text-white font-medium uppercase text-[14px] sm:text-[15px] leading-none tracking-wider transition-all hover:bg-[#000000] shadow-md font-roboto rounded-[2px]"
            >
              Subscribe Now
            </a>
          </div>
        </div>
      </section>

      {/* 3. HANDGUN AMMUNITION GUIDE & ANATOMY (Elementor b7f3498) */}
      <section className="py-[30px] sm:py-[50px] bg-[#D6DBDD] text-[#000000]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Section Heading: Gabarito 38px (desktop) / 28px (mobile) line-height 42px/34px font-weight 600 */}
          <h2 
            className="text-[28px] sm:text-[38px] font-semibold text-[#000000] font-gabarito leading-[34px] sm:leading-[42px] text-left mb-6"
            style={{ fontFamily: "'Gabarito', sans-serif" }}
          >
            Handgun Ammunition Guide
          </h2>

          {/* Inner 2-Column Section (Elementor e2b67f6: 50% / 50%) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Column (50%) */}
            <div className="space-y-4 text-left font-roboto">
              {/* Subheading: Gabarito 20px line-height 28px font-weight 600 */}
              <h3 
                className="text-[18px] sm:text-[20px] font-semibold font-gabarito text-[#000000] leading-[26px] sm:leading-[28px]"
                style={{ fontFamily: "'Gabarito', sans-serif" }}
              >
                The Ultimate Handgun Ammunition Guide | The American Firearms Network
              </h3>

              {/* Text Block 1 */}
              <div className="text-[15px] sm:text-[16px] leading-[22px] text-[#000000] font-roboto space-y-2">
                <p>
                  <b>Master Your Ballistics: The Definitive Resource for Defensive, Tactical, and Range Ammo.</b>
                </p>
                <p>
                  Whether you are a first-time gun owner or a seasoned tactical professional, selecting the right ammunition is the most critical decision you make after choosing your firearm. At <b>The American Firearms Network (AFN)</b>, we provide the data, safety protocols, and ballistics insight you need to shoot with confidence.
                </p>
              </div>

              {/* Anatomy Subheading & Details */}
              <div className="text-[15px] sm:text-[16px] leading-[22px] text-[#000000] font-roboto space-y-2 pt-2">
                <h4 className="text-[16px] sm:text-[17px] font-bold text-[#000000]">
                  What is Handgun Ammunition? Understanding the Anatomy
                </h4>
                <p>
                  Many beginners use the term &ldquo;bullet&rdquo; to describe the entire unit. In professional ballistics, we refer to this as a <b>Cartridge</b> or a <b>Round</b>. A single cartridge consists of four vital components:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 pt-1 text-[15px] sm:text-[16px]">
                  <li>
                    <b>The Bullet:</b> The projectile that leaves the barrel.
                  </li>
                  <li>
                    <b>The Casing:</b> Typically brass, steel, or aluminum; it holds the components together.
                  </li>
                  <li>
                    <b>The Propellant (Powder):</b> The chemical compound that creates the gas pressure to launch the bullet.
                  </li>
                  <li>
                    <b>The Primer:</b> The ignition source that sparks the powder when struck by the firing pin.
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column (50%): media_1-800h.png */}
            <div className="w-full flex items-center justify-center">
              <div className="relative w-full max-w-[520px] aspect-[3/4] overflow-hidden">
                <Image
                  src="https://american-firearms.s3-eu-central-2.ionoscloud.com/images/gallery/gallery-defensive-posture.png"
                  alt="Handgun Ammunition Loading and Anatomy"
                  fill
                  className="object-contain object-center"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CALIBER COMPARISON TABLE (Elementor fed2945) */}
      <section 
        className="relative py-[30px] sm:py-[50px] overflow-hidden"
        style={{
          backgroundImage: 'url(https://american-firearms.s3-eu-central-2.ionoscloud.com/images/about/range-service.webp)',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed'
        }}
      >
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundColor: '#000000', opacity: 0.68 }}
        />

        <div className="relative z-10 max-w-[1300px] mx-auto px-3 sm:px-6 lg:px-8">
          <h2 
            className="text-[22px] sm:text-[34px] font-semibold text-white uppercase text-center font-gabarito tracking-wider mb-8"
            style={{ fontFamily: "'Gabarito', sans-serif" }}
          >
            Handgun Caliber Comparison: Finding Your Fit
          </h2>

          {/* Caliber Table matching Elementor exact widths (30%, 30%, 40%) */}
          <div className="max-w-[1100px] mx-auto space-y-2 sm:space-y-3 font-roboto">
            {/* Header Row */}
            <div className="flex flex-row gap-2 sm:gap-3 text-center">
              <div 
                style={{
                  width: '30%',
                  border: '1px solid #C08C15',
                  boxShadow: '0px 0px 10px 0px rgba(192, 140, 21, 0.43)',
                  backgroundColor: 'rgba(0, 0, 0, 0.85)',
                  padding: '12px 6px'
                }}
                className="flex items-center justify-center font-gabarito font-bold text-white text-[12px] sm:text-[17px] uppercase tracking-wider"
              >
                Caliber
              </div>
              <div 
                style={{
                  width: '30%',
                  border: '1px solid #C08C15',
                  boxShadow: '0px 0px 10px 0px rgba(192, 140, 21, 0.43)',
                  backgroundColor: 'rgba(0, 0, 0, 0.85)',
                  padding: '12px 6px'
                }}
                className="flex items-center justify-center font-gabarito font-bold text-white text-[12px] sm:text-[17px] uppercase tracking-wider"
              >
                Primary Use Case
              </div>
              <div 
                style={{
                  width: '40%',
                  border: '1px solid #C08C15',
                  boxShadow: '0px 0px 10px 0px rgba(192, 140, 21, 0.43)',
                  backgroundColor: 'rgba(0, 0, 0, 0.85)',
                  padding: '12px 6px'
                }}
                className="flex items-center justify-center font-gabarito font-bold text-white text-[12px] sm:text-[17px] uppercase tracking-wider"
              >
                Key Characteristics
              </div>
            </div>

            {/* Data Rows with exact live-site hover background effect, border and gold shadow */}
            {caliberComparison.map((row, idx) => (
              <div key={idx} className="flex flex-row gap-2 sm:gap-3 text-center group">
                <div 
                  style={{
                    width: '30%',
                    border: '1px solid #C08C15',
                    boxShadow: '0px 0px 10px 0px rgba(192, 140, 21, 0.43)',
                    backgroundColor: '#00000082',
                  }}
                  className="relative flex items-center justify-center p-2 sm:p-[15px] hover:bg-[url('https://american-firearms.s3-eu-central-2.ionoscloud.com/images/resources/table-hover-bg.jpg')] bg-cover bg-center transition-all duration-200 overflow-hidden cursor-default"
                >
                  <span className="relative z-10 text-white text-[11px] sm:text-[16px] font-normal leading-[15px] sm:leading-[22px]">
                    {row.caliber}
                  </span>
                </div>
                <div 
                  style={{
                    width: '30%',
                    border: '1px solid #C08C15',
                    boxShadow: '0px 0px 10px 0px rgba(192, 140, 21, 0.43)',
                    backgroundColor: '#00000082',
                  }}
                  className="relative flex items-center justify-center p-2 sm:p-[15px] hover:bg-[url('https://american-firearms.s3-eu-central-2.ionoscloud.com/images/resources/table-hover-bg.jpg')] bg-cover bg-center transition-all duration-200 overflow-hidden cursor-default"
                >
                  <span className="relative z-10 text-white text-[11px] sm:text-[16px] font-normal leading-[15px] sm:leading-[22px]">
                    {row.useCase}
                  </span>
                </div>
                <div 
                  style={{
                    width: '40%',
                    border: '1px solid #C08C15',
                    boxShadow: '0px 0px 10px 0px rgba(192, 140, 21, 0.43)',
                    backgroundColor: '#00000082',
                  }}
                  className="relative flex items-center justify-center p-2 sm:p-[15px] hover:bg-[url('https://american-firearms.s3-eu-central-2.ionoscloud.com/images/resources/table-hover-bg.jpg')] bg-cover bg-center transition-all duration-200 overflow-hidden cursor-default"
                >
                  <span className="relative z-10 text-white text-[10px] sm:text-[16px] font-normal leading-[14px] sm:leading-[22px]">
                    {row.characteristics}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CHOOSING THE RIGHT BULLET TYPE (Elementor 6981410) */}
      <section className="py-[30px] sm:py-[50px] bg-[#D6DBDD] text-[#000000]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 
              className="text-[28px] sm:text-[38px] font-semibold text-[#000000] font-gabarito leading-[34px] sm:leading-[42px] text-left mb-2"
              style={{ fontFamily: "'Gabarito', sans-serif" }}
            >
              Choosing the Right Bullet Type
            </h2>
            <p className="text-[15px] sm:text-[16px] leading-[22px] text-[#000000] font-roboto font-normal">
              At AFN, we categorize ammunition by its terminal performance. Using the<br className="hidden sm:inline" />wrong bullet type for the wrong task can lead to dangerous over-penetration or insufficient stopping power.
            </p>
          </div>

          {/* 2-Column Breakdown (Elementor 0cdd336: 60.078% / 39.845%) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column (60%) */}
            <div className="lg:col-span-7 space-y-6 font-roboto">
              {bulletTypes.map((item) => (
                <div key={item.number} className="space-y-1 text-[15px] sm:text-[16px] leading-[22px] text-[#000000]">
                  <h3 className="font-bold text-[16px] text-[#000000]">
                    {item.number}. {item.title}
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <b>Best For:</b> {item.bestFor}
                    </li>
                    <li>
                      <b>The Tech:</b> {item.tech}
                    </li>
                    <li>
                      <b>Why use it?</b> {item.whyUse}
                    </li>
                  </ul>
                </div>
              ))}
            </div>

            {/* Right Column (40%): media_13-800h.png */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src="https://american-firearms.s3-eu-central-2.ionoscloud.com/images/gallery/gallery-tactical-carbine.png"
                  alt="Ammunition Bullets and Calibers Overview"
                  fill
                  className="object-contain object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY TRUST AFN SECTION (Elementor 6b86117) */}
      <section 
        className="relative py-[40px] sm:py-[50px] overflow-hidden"
        style={{
          backgroundImage: 'url(https://american-firearms.s3-eu-central-2.ionoscloud.com/images/about/range-service.webp)',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed'
        }}
      >
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundColor: '#000000', opacity: 0.68 }}
        />

        <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Column: Heading 28px, Line-height 34px, Centered */}
            <div className="space-y-3 text-center">
              <h2 
                className="text-[24px] sm:text-[28px] font-semibold text-white font-gabarito leading-[30px] sm:leading-[34px]"
                style={{ fontFamily: "'Gabarito', sans-serif" }}
              >
                Why Trust The American Firearms Network?
              </h2>
              <p className="text-[15px] sm:text-[16px] leading-[22px] text-white font-roboto font-normal max-w-xl mx-auto">
                The American Firearms Network is dedicated to the education and empowerment of the American shooter. Our guides are built on verified ballistic gelatin tests, manufacturer transparency, and real-world feedback from industry experts.
              </p>
            </div>

            {/* Right Column: Image with white glow shadow */}
            <div className="flex items-center justify-center">
              <div 
                className="relative w-full max-w-[550px] aspect-[16/10] overflow-hidden"
                style={{
                  borderRadius: '10px',
                  boxShadow: '0px 0px 10px 0px rgba(255, 255, 255, 0.46)'
                }}
              >
                <Image
                  src="https://american-firearms.s3-eu-central-2.ionoscloud.com/images/gallery/gallery-tactical-movement.webp"
                  alt="American Firearms Network Training Group"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. OUR VIDEOS SECTION (Elementor 7023aac) */}
      <section className="py-[40px] sm:py-[50px] bg-[#FFFFFF] text-[#000000]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Heading: Gabarito 50px (desktop) / 28px (mobile) font-weight 600 line-height 60px/34px */}
          <h2 
            className="text-[28px] sm:text-[50px] font-semibold uppercase text-[#000000] font-gabarito leading-[34px] sm:leading-[60px] mb-8"
            style={{ fontFamily: "'Gabarito', sans-serif" }}
          >
            Our Videos
          </h2>

          {/* 3x3 Grid with 4:3 aspect ratio videos matching Elementor --video-aspect-ratio: 1.33333 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resourceVideos.map((video) => (
              <div 
                key={video.id}
                className="relative w-full aspect-[4/3] overflow-hidden bg-black"
                style={{
                  borderRadius: '5px',
                  boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.6)'
                }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?autoplay=0&controls=1&rel=0`}
                  title={video.title}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            ))}
          </div>

          {/* Red View More Videos Button matching Elementor elementor-element-d8b7c0b */}
          <div className="mt-8 pt-2">
            <a
              href="https://www.youtube.com/@AMERICANFIREARMSNETWORKS?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#EB0F06',
                border: '2px solid #A5AAAB',
                padding: '12px 40px'
              }}
              className="inline-flex items-center justify-center text-white font-medium uppercase text-[14px] sm:text-[15px] leading-none tracking-wider transition-all hover:bg-[#000000] shadow-md font-roboto rounded-[2px]"
            >
              View More Videos
            </a>
          </div>
        </div>
      </section>

      {/* 8. SUGGESTED READINGS (Elementor 72e63d5 to baf8733) */}
      <section className="pt-[10px] pb-[60px] bg-[#FFFFFF] text-[#000000]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Heading: Gabarito 38px (desktop) / 28px (mobile) font-weight 600 line-height 42px/34px left-aligned */}
          <h2 
            className="text-[28px] sm:text-[38px] font-semibold text-[#000000] font-gabarito leading-[34px] sm:leading-[42px] text-left mb-8"
            style={{ fontFamily: "'Gabarito', sans-serif" }}
          >
            American Firearms Network Suggested Readings
          </h2>

          {/* 4-Column Book Grid matching exact Elementor heights, colors (#FA9372 / #6EC1E4) & typography */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
            {suggestedReadings.map((book, idx) => {
              const hasLink = book.link && book.link !== '#';
              
              const BookContent = (
                <div className="flex flex-col items-center text-center group">
                  {/* Every cover uses the same fixed 2:3 frame so the grid stays aligned. */}
                  <div className="w-full aspect-[2/3] flex items-center justify-center overflow-hidden mb-2">
                    {book.img ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={book.img}
                        alt={book.title}
                        loading="lazy"
                        className="w-full h-full object-fill group-hover:scale-[1.02] transition-transform duration-200"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400 text-sm">
                        No Cover
                      </div>
                    )}
                  </div>

                  {/* Title sits below the book cover with a small, consistent gap. */}
                  <h3 
                    className="text-[19px] font-semibold font-roboto leading-snug text-[#FA9372] group-hover:text-[#B1800F] transition-colors text-center px-1 mt-2"
                    style={{ fontFamily: "'Roboto', sans-serif", color: '#FA9372' }}
                  >
                    {book.title}
                  </h3>

                  {/* Author: Roboto 13px font-weight 600 color #6EC1E4 text-center with -mt-[4px] */}
                  {book.author && (
                    <p 
                      className="text-[13px] font-semibold font-roboto mt-1 text-center"
                      style={{ fontFamily: "'Roboto', sans-serif", color: '#6EC1E4' }}
                    >
                      {book.author}
                    </p>
                  )}
                </div>
              );

              return hasLink ? (
                <a
                  key={idx}
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block cursor-pointer"
                >
                  {BookContent}
                </a>
              ) : (
                <div key={idx}>
                  {BookContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </main>
  );
}
