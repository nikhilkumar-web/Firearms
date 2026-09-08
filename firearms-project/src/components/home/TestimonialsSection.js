'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah M., Colorado',
    rating: 5,
    text: 'As a first-time gun owner, I was overwhelmed by the amount of conflicting information online. The American Firearms Network provided clear, concise, and—most importantly—safe guidance. Their commitment to responsible ownership is exactly what the community needs.'
  },
  {
    name: 'Renee Howard',
    rating: 5,
    text: 'I’ve been a member of several forums over the years, but the quality of discussion on AFN is unmatched. It’s a professional environment where experts and beginners can actually talk without the typical internet noise. It’s my go-to hub for staying informed.'
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
    <section className="relative py-16 sm:py-20 bg-[#000000] text-white overflow-hidden">
      {/* Background Image with Dark Overlay (opacity 0.76) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/video/video-bg.png"
          alt="Testimonials Background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#000000]/75"></div>
      </div>

      <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading: Gabarito 42px line-height 50px font-weight 600 text-center #FFFFFF */}
        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-normal font-gabarito text-white leading-tight lg:leading-[50px] text-center mb-12 sm:mb-16">
          What Our Customers Say
        </h2>

        {/* 2-Column Inner Layout matching Elementor data-id="853999c" */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Testimonial Slider */}
          <div className="space-y-6">
            <div className="bg-black/60 border border-white/15 rounded-2xl p-6 sm:p-10 backdrop-blur-md relative shadow-2xl min-h-[250px] flex flex-col justify-between">
              <div>
                <div className="flex flex-col items-center justify-center mb-4 text-center">
                  <h3 className="text-xl font-semibold text-white font-roboto mb-2">
                    {testimonials[currentIndex].name}
                  </h3>
                  {/* Gold Star Ratings: #FFD315 (21px) */}
                  <div className="flex text-[#FFD315] text-[24px] tracking-widest">
                    {'★'.repeat(testimonials[currentIndex].rating)}
                  </div>
                </div>
                <p className="text-base sm:text-[18px] leading-[26px] text-white italic font-roboto text-center">
                  &quot;{testimonials[currentIndex].text}&quot;
                </p>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-6">
                <div className="flex gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        idx === currentIndex ? 'bg-[#B1800F] w-6' : 'bg-white/30'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 text-white transition-colors"
                    aria-label="Previous testimonial"
                  >
                    ←
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 text-white transition-colors"
                    aria-label="Next testimonial"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>

            {/* More Reviews Button */}
            <div className="text-center pt-2">
              <Link
                href="/about-us"
                style={{
                  backgroundImage: 'linear-gradient(219deg, #B1800F 0%, #000000 67%)',
                  border: '1px solid #A5AAAB',
                  padding: '10px 40px',
                  borderRadius: '3px'
                }}
                className="inline-block text-white font-medium uppercase text-[15px] leading-[15px] tracking-normal transition-all hover:brightness-125 hover:scale-105 shadow-lg font-roboto"
              >
                MORE REVIEWS
              </Link>
            </div>
          </div>

          {/* Right Column: Embedded YouTube Review Video */}
          <div className="w-full">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl bg-black border border-white/15">
              <iframe
                src="https://www.youtube.com/embed/8jvjc6JmBZg?autoplay=1&mute=1&loop=1&playlist=8jvjc6JmBZg&controls=1&rel=0&playsinline=1"
                title="Customer Review Video"
                className="absolute inset-0 w-full h-full"
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
