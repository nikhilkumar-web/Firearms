'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { subscribeVideos, galleryShorts, galleryImages } from '@/data/gallery';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

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

  // Preload all 16 full-res gallery images into browser cache so lightbox navigation is instant
  useEffect(() => {
    if (typeof window !== 'undefined') {
      galleryImages.forEach((item) => {
        const img = new window.Image();
        img.src = item.src;
      });
    }
  }, []);

  // Prioritize adjacent images whenever lightbox index changes
  useEffect(() => {
    if (lightboxIndex !== null && typeof window !== 'undefined') {
      const len = galleryImages.length;
      [-2, -1, 1, 2].forEach((offset) => {
        const targetIdx = (lightboxIndex + offset + len) % len;
        const img = new window.Image();
        img.src = galleryImages[targetIdx].src;
      });
    }
  }, [lightboxIndex]);

  // Distribute into 4 balanced columns for Desktop (lg >= 1024px)
  const columnsDesktop = Array.from({ length: 4 }, () => []);
  galleryImages.forEach((item, index) => {
    columnsDesktop[index % 4].push({ item, index });
  });

  // Distribute into 2 balanced columns for Tablet (sm: 640px to 1023px)
  const columnsTablet = Array.from({ length: 2 }, () => []);
  galleryImages.forEach((item, index) => {
    columnsTablet[index % 2].push({ item, index });
  });

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
                      src={`https://www.youtube.com/embed/${video.id}?autoplay=1&controls=1&rel=0&playsinline=1`}
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
                      src={`https://www.youtube.com/embed/${video.id}?autoplay=1&controls=1&rel=0&playsinline=1`}
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

      {/* 4. OUR GALLERY SECTION (Structured identically to home page GalleryPreview) */}
      <section className="bg-[#E6E6E6] text-[#000000] py-[30px] sm:py-[50px] font-roboto">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading: Gabarito 50px desktop / 38px tablet / 26px mobile, 600 weight, uppercase, centered */}
          <h2 
            className="text-[26px] sm:text-[38px] lg:text-[50px] font-semibold uppercase text-[#000000] leading-[32px] sm:leading-[46px] lg:leading-[60px] text-center mb-6 sm:mb-10"
            style={{ fontFamily: "'Gabarito', sans-serif" }}
          >
            OUR GALLERY
          </h2>

          {/* 1. Desktop: 4-column Masonry Layout */}
          <div className="hidden lg:grid grid-cols-4 gap-5 items-start">
            {columnsDesktop.map((col, colIdx) => (
              <div key={colIdx} className="flex flex-col gap-5">
                {col.map(({ item, index }) => (
                  <div
                    key={item.id}
                    onClick={() => openLightbox(index)}
                    className="relative overflow-hidden rounded-[4px] cursor-pointer group shadow-sm hover:shadow-md transition-shadow bg-gray-200"
                  >
                    <div className="relative w-full overflow-hidden">
                      <Image
                        src={item.src}
                        alt={item.alt || `AFN Gallery Image ${item.id}`}
                        width={item.width || 800}
                        height={item.height || 600}
                        className="w-full h-auto object-cover transform transition-transform duration-300 group-hover:scale-105"
                        sizes="25vw"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                      <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white">
                        <ZoomIn className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* 2. Tablet: 2-column Balanced Masonry Layout */}
          <div className="hidden sm:grid lg:hidden grid-cols-2 gap-4 sm:gap-5 items-start">
            {columnsTablet.map((col, colIdx) => (
              <div key={colIdx} className="flex flex-col gap-4 sm:gap-5">
                {col.map(({ item, index }) => (
                  <div
                    key={item.id}
                    onClick={() => openLightbox(index)}
                    className="relative overflow-hidden rounded-[4px] cursor-pointer group shadow-sm hover:shadow-md transition-shadow bg-gray-200"
                  >
                    <div className="relative w-full overflow-hidden">
                      <Image
                        src={item.src}
                        alt={item.alt || `AFN Gallery Image ${item.id}`}
                        width={item.width || 800}
                        height={item.height || 600}
                        className="w-full h-auto object-cover transform transition-transform duration-300 group-hover:scale-105"
                        sizes="50vw"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                      <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white">
                        <ZoomIn className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* 3. Mobile: 1-column Clean Layout */}
          <div className="grid sm:hidden grid-cols-1 gap-4 items-start max-w-[460px] mx-auto">
            {galleryImages.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className="relative overflow-hidden rounded-[4px] cursor-pointer group shadow-sm hover:shadow-md transition-shadow bg-gray-200"
              >
                <div className="relative w-full overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt || `AFN Gallery Image ${item.id}`}
                    width={item.width || 800}
                    height={item.height || 600}
                    className="w-full h-auto object-cover transform transition-transform duration-300 group-hover:scale-105"
                    sizes="100vw"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. LIGHTBOX MODAL (Magnific Popup Replica) */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-2 sm:p-6 select-none animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Top Bar: Counter and Close */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-10 px-2 sm:px-6">
            <span className="text-sm font-medium tracking-wide text-gray-300 font-roboto">
              {lightboxIndex + 1} of {galleryImages.length}
            </span>
            <button
              onClick={closeLightbox}
              className="p-2 text-white hover:text-[#B1800F] transition-colors rounded-full bg-black/40 hover:bg-black/80 cursor-pointer"
              aria-label="Close image popup"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          {/* Prev Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors z-10 cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>

          {/* Current Active Image */}
          <div 
            className="relative max-w-5xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-w-full max-h-[75vh] overflow-hidden rounded-md shadow-2xl bg-black flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                key={galleryImages[lightboxIndex].src}
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].alt}
                decoding="async"
                className="max-w-full max-h-[75vh] w-auto h-auto object-contain select-none animate-in fade-in duration-150"
              />
            </div>
            
            {/* Caption */}
            {galleryImages[lightboxIndex].alt && (
              <p className="mt-3 text-center text-xs sm:text-sm text-gray-300 font-roboto max-w-2xl px-4">
                {galleryImages[lightboxIndex].alt}
              </p>
            )}
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors z-10 cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>
        </div>
      )}

      {/* Hidden preloaded image cache for instant zero-latency navigation */}
      <div className="hidden pointer-events-none" aria-hidden="true">
        {galleryImages.map((img) => (
          <img key={`preload-${img.id}`} src={img.src} alt="" loading="eager" decoding="async" />
        ))}
      </div>

    </main>
  );
}
