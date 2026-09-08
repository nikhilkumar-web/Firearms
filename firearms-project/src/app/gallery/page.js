'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { subscribeVideos, galleryShorts, galleryImages } from '@/data/gallery';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

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

  // Distribute into 4 balanced columns for perfect masonry layout
  const colCount = 4;
  const columns = Array.from({ length: colCount }, () => []);
  galleryImages.forEach((item, index) => {
    columns[index % colCount].push({ item, index });
  });

  return (
    <main className="bg-[#FFFFFF] text-[#000000] overflow-x-hidden font-roboto">
      
      {/* 1. HERO BANNER SECTION (Elementor 2cce698) */}
      <section 
        className="relative w-full py-[60px] sm:py-[100px] overflow-hidden"
        style={{
          backgroundImage: 'url(/images/about/outdoor-range-group.webp)',
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
            Gallery
          </h1>
        </div>
      </section>

      {/* 2. SUBSCRIBE TO YOUTUBE SECTION (Elementor 66c7e80) */}
      <section className="py-[30px] sm:py-[50px] bg-[#FFFFFF]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 
            className="text-[28px] sm:text-[50px] font-semibold uppercase text-[#000000] font-gabarito leading-[34px] sm:leading-[60px] mb-6"
            style={{ fontFamily: "'Gabarito', sans-serif" }}
          >
            Subscribe To Our Youtube Channel
          </h2>

          {/* 4 Videos Grid matching Elementor elementor-element-aae91bf */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {subscribeVideos.map((video) => (
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
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
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
                padding: '12px 40px'
              }}
              className="inline-flex items-center justify-center text-white font-medium uppercase text-[14px] sm:text-[15px] leading-none tracking-wider transition-all hover:bg-[#000000] shadow-md font-roboto rounded-[2px]"
            >
              Subscribe Now
            </a>
          </div>
        </div>
      </section>

      {/* 3. OUR VIDEOS SECTION (Elementor b0d5352 - YouTube Shorts 1:1 Aspect Ratio) */}
      <section className="py-[30px] sm:py-[50px] bg-[#FFFFFF]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 
            className="text-[28px] sm:text-[50px] font-semibold uppercase text-[#000000] font-gabarito leading-[34px] sm:leading-[60px] mb-8"
            style={{ fontFamily: "'Gabarito', sans-serif" }}
          >
            Our Videos
          </h2>

          {/* 3x3 Grid with 1:1 square aspect ratio matching Elementor --video-aspect-ratio: 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryShorts.map((video, idx) => (
              <div 
                key={`${video.id}-${idx}`}
                className="relative w-full aspect-square overflow-hidden bg-black"
                style={{
                  borderRadius: '5px',
                  boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.6)'
                }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?autoplay=0&controls=1&rel=0`}
                  title={video.title}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>

          {/* Red View More Videos Button matching Elementor c406eb2 */}
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

      {/* 4. OUR GALLERY SECTION (Elementor 40685c0 - Happy Addons Masonry Grid) */}
      <section className="pt-[10px] pb-[60px] bg-[#FFFFFF]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-[28px] sm:text-[50px] font-semibold uppercase text-[#000000] font-gabarito leading-[34px] sm:leading-[60px] text-center mb-8"
            style={{ fontFamily: "'Gabarito', sans-serif" }}
          >
            Our Gallery
          </h2>

          {/* 4-column Masonry Layout with clean column stacks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 items-start">
            {columns.map((col, colIdx) => (
              <div key={colIdx} className="flex flex-col gap-5">
                {col.map(({ item, index }) => (
                  <div
                    key={item.id}
                    onClick={() => openLightbox(index)}
                    className="relative overflow-hidden rounded-[4px] cursor-pointer group shadow-sm hover:shadow-md transition-shadow bg-gray-100"
                  >
                    {/* Image with elementor-animation-grow hover scale */}
                    <div className="relative w-full overflow-hidden">
                      <Image
                        src={item.src}
                        alt={item.alt || `AFN Gallery Image ${item.id}`}
                        width={item.width || 800}
                        height={item.height || 600}
                        className="w-full h-auto object-cover transform transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        loading="lazy"
                      />
                    </div>

                    {/* Subtle Hover Overlay with Zoom Icon */}
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
              className="p-2 text-white hover:text-[#B1800F] transition-colors rounded-full bg-black/40 hover:bg-black/80"
              aria-label="Close image popup"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          {/* Prev Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 text-white hover:text-[#B1800F] transition-colors rounded-full bg-black/50 hover:bg-black/80 z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>

          {/* Current Image Container */}
          <div 
            className="relative max-w-5xl max-h-[85vh] w-full h-[75vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt || 'Gallery photo'}
              fill
              className="object-contain"
              priority
              sizes="90vw"
            />
          </div>

          {/* Next Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 text-white hover:text-[#B1800F] transition-colors rounded-full bg-black/50 hover:bg-black/80 z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>
        </div>
      )}

    </main>
  );
}
