import GalleryPreview from '@/components/home/GalleryPreview';

export const metadata = {
  title: 'Reviews - American Firearms Network',
  description: 'Real Experiences from Students Who Train with the American Firearms Network. Discover 5-star testimonials from beginners to security professionals.',
};

const REVIEWS_COL_1 = [
  {
    id: 1,
    quote: '“Paul pushed me well beyond my comfort zone. His focus on weapon retention and movement under fire is essential for anyone wanting to reach elite proficiency.”',
    author: 'John Doe',
    rating: 5
  },
  {
    id: 2,
    quote: '“Todd’s ability to diagnose subtle mechanical errors is unmatched. He moved me beyond standard range practice to a level of technical precision I didn’t think was possible.”',
    author: 'South Florida Resident',
    rating: 5
  },
  {
    id: 3,
    quote: '“Thank you for letting me be more aware of my surroundings. The training makes you look at personal protection in a whole new way.”',
    author: 'Patrick B',
    rating: 5
  },
  {
    id: 4,
    quote: '“Mr. Paul’s training is rigorous and focused on one goal: making you a harder target. He trains you until you can’t get it wrong.”',
    author: 'John Doe',
    rating: 5
  }
];

const REVIEWS_COL_2 = [
  {
    id: 5,
    quote: '“As an NRA Chief Range Safety Officer, Todd provides more than just shooting drills; he provides real-world advice on personal protection gear and cutting-edge tools.”',
    author: 'Security Professional',
    rating: 5
  },
  {
    id: 6,
    quote: '“Training with the visionary behind the AFN philosophy was eye-opening. Todd doesn’t just show you where you are; he takes you where you need to be to protect your loved ones.”',
    author: 'Frank D',
    rating: 5
  },
  {
    id: 7,
    quote: '“It was a great day! Todd and Paul are both professional and attentive teachers. I learned a lot and had fun. I highly recommend them.”',
    author: 'John Doe',
    rating: 5
  },
  {
    id: 8,
    quote: '“The sessions on the physiology of fear were a game-changer. Paul teaches you how to manage your body’s natural stress response to stay effective in a crisis.”',
    author: 'Morgan',
    rating: 5
  }
];

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Banner (Elementor Section d376401) */}
      <section
        className="relative py-[80px] sm:py-[100px] text-white overflow-hidden text-center"
        style={{
          backgroundImage: "url('https://american-firearms.s3-eu-central-2.ionoscloud.com/images/about/page-header-bg.jpg')",
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        {/* Dark Background Overlay (0.78 opacity) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundColor: '#000000', opacity: 0.78 }}
        />

        <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="text-[34px] sm:text-[42px] lg:text-[50px] font-semibold text-white uppercase tracking-normal leading-[40px] sm:leading-[50px] lg:leading-[60px]"
            style={{ fontFamily: "'Gabarito', sans-serif" }}
          >
            Reviews
          </h1>
        </div>
      </section>

      {/* 2. What Our Clients Say (Elementor Section ee5e01e) */}
      <section className="py-[40px] sm:py-[50px] px-3 sm:px-6 lg:px-8">
        <div className="max-w-[1300px] mx-auto">
          {/* Outer Card with Background Image & 0.81 Dark Overlay (Elementor 63640aa) */}
          <div
            className="relative rounded-[15px] overflow-hidden p-5 sm:p-8 lg:p-10"
            style={{
              backgroundImage: "url('https://american-firearms.s3-eu-central-2.ionoscloud.com/images/reviews/caucasian-woman-observing-black-male-instructor.webp')",
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.39)'
            }}
          >
            {/* Dark Overlay matching Elementor 0.81 */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ backgroundColor: '#000000', opacity: 0.81 }}
            />

            <div className="relative z-10 text-white">
              {/* Heading: What Our Clients Say (Elementor 82936a2) */}
              <h2
                className="text-[28px] sm:text-[38px] lg:text-[50px] font-semibold text-center leading-[34px] sm:leading-[46px] lg:leading-[60px] mb-2"
                style={{ fontFamily: "'Gabarito', sans-serif" }}
              >
                What Our Clients Say
              </h2>

              {/* Subheading (Elementor 5d03e50) */}
              <h3
                className="text-[18px] sm:text-[20px] lg:text-[22px] font-semibold text-center leading-[24px] sm:leading-[28px] max-w-4xl mx-auto mb-4"
                style={{ fontFamily: "'Gabarito', sans-serif" }}
              >
                Real Experiences from Students Who Train with the American Firearms Network
              </h3>

              {/* Intro Text (Elementor de074e2) */}
              <p
                className="text-[15px] sm:text-[16px] text-white/95 leading-[22px] text-center max-w-3xl mx-auto mb-8 font-normal font-roboto"
              >
                The American Firearms Network is built on standards, accountability, and results. The testimonials below reflect the experiences of students who have trained with our instructors across a range of skill levels. Their feedback speaks to the professionalism, structure, and instructional quality that define AFN training.
              </p>

              {/* 5-Star Reviews Header (Elementor 99fdc50) */}
              <h4
                className="text-[20px] sm:text-[24px] font-semibold text-center leading-[28px] mb-8"
                style={{ fontFamily: "'Gabarito', sans-serif" }}
              >
                5 - Star Reviews
              </h4>

              {/* 2-Column Testimonials Grid (Elementor be7be36) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                {/* Column 1 */}
                <div className="space-y-5 sm:space-y-6">
                  {REVIEWS_COL_1.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-[15px] p-5 sm:p-6 transition-transform duration-200 hover:scale-[1.01]"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.17)',
                        backdropFilter: 'blur(4px)'
                      }}
                    >
                      <p className="text-[15px] sm:text-[16px] leading-[23px] text-white italic font-normal font-roboto">
                        {item.quote}
                      </p>
                      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                        <span className="text-[15px] sm:text-[16px] font-semibold text-white font-roboto">
                          {item.author}
                        </span>
                        <div className="flex text-[#FFD315] text-[18px] tracking-wider">
                          {'★'.repeat(item.rating)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Column 2 */}
                <div className="space-y-5 sm:space-y-6">
                  {REVIEWS_COL_2.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-[15px] p-5 sm:p-6 transition-transform duration-200 hover:scale-[1.01]"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.17)',
                        backdropFilter: 'blur(4px)'
                      }}
                    >
                      <p className="text-[15px] sm:text-[16px] leading-[23px] text-white italic font-normal font-roboto">
                        {item.quote}
                      </p>
                      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                        <span className="text-[15px] sm:text-[16px] font-semibold text-white font-roboto">
                          {item.author}
                        </span>
                        <div className="flex text-[#FFD315] text-[18px] tracking-wider">
                          {'★'.repeat(item.rating)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Gallery Section (Elementor Section 9ffcc87) */}
      <GalleryPreview />
    </main>
  );
}
