'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { galleryImages } from '@/data/gallery';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

export default function GalleryPreview() {
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
    <section className="bg-[#E6E6E6] text-[#000000] py-[30px] sm:py-[50px] font-roboto">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Exact Section Heading: Gabarito 50px desktop / 42px tablet / 28px mobile, 600 weight, uppercase, centered */}
        <h2 
          className="text-[28px] sm:text-[42px] lg:text-[50px] font-semibold uppercase text-[#000000] leading-[34px] sm:leading-[50px] lg:leading-[60px] text-center mb-8 sm:mb-10"
          style={{ fontFamily: "'Gabarito', sans-serif" }}
        >
          OUR GALLERY
        </h2>

        {/* 4-column Masonry Layout with clean column stacks matching Gallery page */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 items-start">
          {columns.map((col, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-4 sm:gap-5">
              {col.map(({ item, index }) => (
                <div
                  key={item.id}
                  onClick={() => openLightbox(index)}
                  className="relative overflow-hidden rounded-[4px] cursor-pointer group shadow-sm hover:shadow-md transition-shadow bg-gray-200"
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

        {/* View More Button matching Elementor .elementor-button db40f1d */}
        <div className="mt-10 sm:mt-12 text-center">
          <Link
            href="/gallery"
            style={{
              backgroundImage: 'linear-gradient(219deg, #B1800F 0%, #000000 67%)',
              border: '1px solid #A5AAAB',
              padding: '12px 40px',
              borderRadius: '3px',
              fontFamily: "'Roboto', sans-serif"
            }}
            className="inline-flex items-center justify-center text-white font-medium uppercase text-[14px] leading-[18px] tracking-normal transition-all hover:scale-105 hover:brightness-110 shadow-md rounded-[3px]"
          >
            View More
          </Link>
        </div>

      </div>

      {/* LIGHTBOX MODAL (Magnific Popup Replica) */}
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
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].alt}
                className="max-w-full max-h-[75vh] w-auto h-auto object-contain select-none"
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
    </section>
  );
}
