'use client';

import { useState } from 'react';
import Link from 'next/link';

const testimonials = [
  {
    name: 'Sarah M., Colorado',
    rating: 5,
    text: 'As a first-time gun owner, I was overwhelmed by the amount of conflicting information online. The American Firearms Network provided clear, concise, and—most importantly—safe guidance. Their commitment to responsible ownership is exactly what the community needs.'
  },
  {
    name: 'Renee Howard',
    rating: 5,
    text: '"I’ve been a member of several forums over the years, but the quality of discussion on AFN is unmatched. It’s a professional environment where experts and beginners can actually talk without the typical internet noise. It’s my go-to hub for staying informed."'
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      className="relative py-[50px] text-white overflow-hidden"
      style={{
        backgroundColor: '#F6F8F5',
        backgroundImage: "url('https://american-firearms.s3-eu-central-2.ionoscloud.com/images/home/tactical-banner-bg.png')",
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      {/* Background Overlay matching Elementor 56e16aee (0.76 opacity) */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundColor: '#000000', opacity: 0.76 }}
      />

      <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading: Gabarito 50px (mobile 28px/tablet 40px) line-height 60px font-weight 600 text-center #FFFFFF */}
        <h2 
          className="text-[28px] sm:text-[40px] lg:text-[50px] font-semibold tracking-normal text-white leading-[36px] sm:leading-[48px] lg:leading-[60px] text-center mb-10 sm:mb-14"
          style={{ fontFamily: "'Gabarito', sans-serif" }}
        >
          What Our Customers Say
        </h2>

        {/* 2-Column Inner Layout matching Elementor data-id="853999c" */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Testimonial Slider matching Elementor 645db449 */}
          <div className="space-y-6 flex flex-col justify-center text-center">
            <div className="min-h-[190px] flex flex-col justify-center items-center">
              {/* 5 Gold Stars */}
              <div className="flex text-[#FFD315] text-[22px] tracking-wider mb-3">
                {'★'.repeat(testimonials[currentIndex].rating)}
              </div>

              {/* Quote text */}
              <p 
                className="text-[15px] sm:text-[18px] leading-[24px] sm:leading-[26px] text-white italic max-w-xl mx-auto font-normal font-roboto"
              >
                &quot;{testimonials[currentIndex].text.replace(/^"|"$/g, '')}&quot;
              </p>

              {/* Customer name */}
              <div 
                className="text-[16px] text-white font-medium mt-4"
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                {testimonials[currentIndex].name}
              </div>

              {/* Slider Dots */}
              <div className="flex gap-2 items-center justify-center mt-4">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      idx === currentIndex ? 'bg-[#AAA7A7] w-5' : 'bg-white/40 w-2'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* More Reviews Button */}
            <div className="text-center pt-2">
              <Link
                href="/reviews"
                className="btn-tactical-gold text-white font-medium uppercase text-[15px] leading-[15px] tracking-normal font-roboto px-10 py-3 rounded-[3px] shadow-lg"
              >
                <span>MORE REVIEWS</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Embedded YouTube Review Video with exact gold border #BC8914 */}
          <div className="w-full">
            <div 
              className="relative w-full aspect-video overflow-hidden shadow-2xl bg-black"
              style={{
                border: '2px solid #BC8914',
                borderRadius: '2px'
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/8jvjc6JmBZg?autoplay=1&mute=1&loop=1&playlist=8jvjc6JmBZg&controls=1&rel=0&playsinline=1"
                title="Customer Review Video"
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
