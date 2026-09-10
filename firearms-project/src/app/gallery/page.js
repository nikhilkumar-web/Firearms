'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { subscribeVideos, galleryShorts, galleryImages } from '@/data/gallery';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [activeSubscribeId, setActiveSubscribeId] = useState(null);
  const [activeShortId, setActiveShortId] = useState(null);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + galleryImages.length) % galleryImages.length));
  }, []);

  const showNext = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % galleryImages.length));
  }, []);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, showPrev, showNext]);

  // Exact 3-column placement matching Elementor Isotope masonry for Desktop (>= 1024px)
  // Col 1: items 1, 6, 8, 11, 14
  // Col 2: items 2, 4, 9, 12, 15
  // Col 3: items 3, 5, 7, 10, 13, 16
  const colDesktop1 = [0, 5, 7, 10, 13].map((idx) => ({ item: galleryImages[idx], index: idx }));
  const colDesktop2 = [1, 3, 8, 11, 14].map((idx) => ({ item: galleryImages[idx], index: idx }));
  const colDesktop3 = [2, 4, 6, 9, 12, 15].map((idx) => ({ item: galleryImages[idx], index: idx }));
  const columnsDesktop = [colDesktop1, colDesktop2, colDesktop3];

  // 2 Balanced Columns for Tablet (640px to 1023px)
  const colTablet1 = [0, 2, 4, 6, 8, 10, 12, 14].map((idx) => ({ item: galleryImages[idx], index: idx }));
  const colTablet2 = [1, 3, 5, 7, 9, 11, 13, 15].map((idx) => ({ item: galleryImages[idx], index: idx }));
  const columnsTablet = [colTablet1, colTablet2];

  return (
    <main className="bg-[#FFFFFF] text-[#000000] overflow-x-hidden font-roboto">
      
      {/* 1. HERO BANNER SECTION (Elementor 2cce698) */}
      <section 
        className="relative w-full py-[50px] sm:py-[70px] lg:py-[100px] overflow-hidden"
        style={{
          backgroundImage: 'url(https://american-firearms.s3-eu-central-2.ionoscloud.com/images/gallery/gallery-outdoor-group.webp)',
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
            className="text-[28px] sm:text-[38px] lg:text-[50px] font-semibold uppercase text-white font-gabarito leading-[36px] sm:leading-[48px] lg:leading-[60px]"
            style={{ fontFamily: "'Gabarito', sans-serif" }}
          >
            Gallery
          </h1>
        </div>
      </section>

      {/* 2. SUBSCRIBE TO YOUTUBE SECTION (Elementor 66c7e80) */}
      <section className="pt-[35px] sm:pt-[45px] lg:pt-[50px] pb-[25px] sm:pb-[35px] lg:pb-[40px] bg-[#FFFFFF]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 
            className="text-[24px] sm:text-[34px] lg:text-[50px] font-semibold uppercase text-[#000000] font-gabarito leading-[30px] sm:leading-[42px] lg:leading-[60px] mb-6 sm:mb-8"
            style={{ fontFamily: "'Gabarito', sans-serif" }}
          >
            Subscribe To Our Youtube Channel
          </h2>

          {/* 4 Videos Grid matching Elementor elementor-element-aae91bf */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-6 sm:mb-8 max-w-[400px] sm:max-w-none mx-auto">
            {subscribeVideos.map((video) => {
              const isPlaying = activeSubscribeId === video.id;
              return (
                <div 
                  key={video.id}
                  className="relative w-full aspect-video overflow-hidden bg-black group cursor-pointer rounded-[5px]"
                  style={{
                    boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.6)'
                  }}
                  onClick={() => setActiveSubscribeId(video.id)}
                >
                  {isPlaying ? (
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&controls=1&rel=0&playsinline=1`}
                      title={video.title}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <div className="w-[50px] sm:w-[56px] h-[36px] sm:h-[40px] bg-[#FF0000] rounded-[10px] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <svg className="w-[16px] sm:w-[18px] h-[16px] sm:h-[18px] fill-white ml-0.5" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>

          {/* Red Subscribe Button matching Elementor button */}
          <div className="pt-2">
            <a
              href="https://www.youtube.com/@AMERICANFIREARMSNETWORKS?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#EB0F06',
                border: '2px solid #A5AAAB',
              }}
              className="inline-flex items-center justify-center text-white font-medium uppercase text-[13px] sm:text-[15px] leading-none tracking-wider transition-all hover:bg-[#000000] shadow-md font-roboto rounded-[2px] px-8 sm:px-10 py-3.5 sm:py-4"
            >
              Subscribe Now
            </a>
          </div>
        </div>
      </section>

      {/* 3. OUR VIDEOS SECTION (Elementor b0d5352 - YouTube Shorts 1:1 Aspect Ratio) */}
      <section className="py-[35px] sm:py-[45px] lg:py-[50px] bg-[#FFFFFF]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 
            className="text-[24px] sm:text-[34px] lg:text-[50px] font-semibold uppercase text-[#000000] font-gabarito leading-[30px] sm:leading-[42px] lg:leading-[60px] mb-6 sm:mb-8"
            style={{ fontFamily: "'Gabarito', sans-serif" }}
          >
            Our Videos
          </h2>

          {/* Grid with 1:1 square aspect ratio: 1 column on mobile, 2 on tablet, 3 on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-[420px] sm:max-w-none mx-auto">
            {galleryShorts.map((video, idx) => {
              const isPlaying = activeShortId === `${video.id}-${idx}`;
              return (
                <div 
                  key={`${video.id}-${idx}`}
                  className="relative w-full aspect-square overflow-hidden bg-black group cursor-pointer rounded-[5px]"
                  style={{
                    boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.6)'
                  }}
                  onClick={() => setActiveShortId(`${video.id}-${idx}`)}
                >
                  {isPlaying ? (
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&controls=1&rel=0&playsinline=1`}
                      title={video.title}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      {/* High-res YouTube thumbnail */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Dark overlay with YouTube Play Button Badge */}
                      <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <div className="w-[56px] sm:w-[64px] h-[40px] sm:h-[46px] bg-[#FF0000] rounded-[12px] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <svg className="w-[18px] sm:w-[20px] h-[18px] sm:h-[20px] fill-white ml-0.5" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>

          {/* Red View More Videos Button matching Elementor c406eb2 */}
          <div className="mt-6 sm:mt-8 pt-2">
            <a
              href="https://www.youtube.com/@AMERICANFIREARMSNETWORKS?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#EB0F06',
                border: '2px solid #A5AAAB',
              }}
              className="inline-flex items-center justify-center text-white font-medium uppercase text-[13px] sm:text-[15px] leading-none tracking-wider transition-all hover:bg-[#000000] shadow-md font-roboto rounded-[2px] px-8 sm:px-10 py-3.5 sm:py-4"
            >
              View More Videos
            </a>
          </div>
        </div>
      </section>

      {/* 4. OUR GALLERY SECTION (Elementor 40685c0 - Responsive Masonry Grid) */}
      <section className="pt-[10px] pb-[50px] sm:pb-[60px] bg-[#FFFFFF]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-[24px] sm:text-[34px] lg:text-[50px] font-semibold uppercase text-[#000000] font-gabarito leading-[30px] sm:leading-[42px] lg:leading-[60px] text-center mb-6 sm:mb-8"
            style={{ fontFamily: "'Gabarito', sans-serif" }}
          >
            Our Gallery
          </h2>

          {/* A. Desktop (>= 1024px): Exact 3-column Isotope distribution */}
          <div className="hidden lg:grid grid-cols-3 gap-5 items-start">
            {columnsDesktop.map((col, colIdx) => (
              <div key={colIdx} className="flex flex-col gap-5">
                {col.map(({ item, index }) => (
                  <div
                    key={item.id}
                    onClick={() => openLightbox(index)}
                    className="relative overflow-hidden cursor-pointer group shadow-sm hover:shadow-md transition-shadow bg-gray-100 rounded-[2px]"
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                      sizes="33vw"
                      className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors pointer-events-none" />
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* B. Tablet (640px to 1023px): 2 Balanced Columns (8 items each) */}
          <div className="hidden sm:grid lg:hidden grid-cols-2 gap-5 items-start">
            {columnsTablet.map((col, colIdx) => (
              <div key={colIdx} className="flex flex-col gap-5">
                {col.map(({ item, index }) => (
                  <div
                    key={item.id}
                    onClick={() => openLightbox(index)}
                    className="relative overflow-hidden cursor-pointer group shadow-sm hover:shadow-md transition-shadow bg-gray-100 rounded-[2px]"
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                      sizes="50vw"
                      className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors pointer-events-none" />
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* C. Mobile (< 640px): 1 Clean Column with full-width clarity */}
          <div className="grid sm:hidden grid-cols-1 gap-4 items-start max-w-[460px] mx-auto">
            {galleryImages.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className="relative overflow-hidden cursor-pointer group shadow-sm hover:shadow-md transition-shadow bg-gray-100 rounded-[2px]"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  sizes="100vw"
                  className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors pointer-events-none" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. LIGHTBOX MODAL */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-2 sm:p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-3 right-3 sm:top-6 sm:right-6 text-white/90 hover:text-white bg-white/15 hover:bg-white/25 p-2 sm:p-2.5 rounded-full transition-colors z-50 cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-white/90 hover:text-white bg-black/60 sm:bg-white/10 hover:bg-white/20 p-2 sm:p-3 rounded-full transition-colors z-50 cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Image Container */}
          <div 
            className="relative max-w-5xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center p-1 sm:p-2"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              className="max-w-full max-h-[75vh] sm:max-h-[80vh] object-contain rounded-[4px] shadow-2xl"
            />
            {/* Caption & Counter */}
            <div className="mt-3 text-center text-white/90 text-xs sm:text-sm font-roboto flex items-center justify-center gap-2 sm:gap-3 px-2">
              <span className="line-clamp-1">{galleryImages[lightboxIndex].alt}</span>
              <span className="text-white/40">•</span>
              <span className="text-white/60 font-medium whitespace-nowrap">
                {lightboxIndex + 1} / {galleryImages.length}
              </span>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-white/90 hover:text-white bg-black/60 sm:bg-white/10 hover:bg-white/20 p-2 sm:p-3 rounded-full transition-colors z-50 cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        </div>
      )}

    </main>
  );
}
