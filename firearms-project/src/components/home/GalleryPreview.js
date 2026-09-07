'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { galleryImages } from '@/data/gallery';
import { ArrowRight, Eye, X } from 'lucide-react';

export default function GalleryPreview() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Show first 8 images on homepage preview
  const displayImages = galleryImages.slice(0, 8);

  return (
    <section className="py-20 lg:py-28 bg-[#080a0e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d99b26]/10 border border-[#d99b26]/20 text-[#f5b942] text-xs font-bold uppercase tracking-widest mb-3">
              Action in Florida
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              OUR <span className="gold-gradient-text">GALLERY</span>
            </h2>
            <p className="mt-3 text-slate-400 text-sm max-w-xl">
              Take a look inside our live-fire qualifications, tactical movement courses, and private diagnostic sessions across South Florida ranges.
            </p>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/20 hover:border-[#d99b26] text-white font-bold text-xs uppercase tracking-wider transition-all self-start md:self-auto"
          >
            <span>View Full Gallery</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#f5b942]" />
          </Link>
        </div>

        {/* 8 Images Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {displayImages.map((img) => (
            <div
              key={img.id}
              onClick={() => setSelectedImage(img)}
              className="group relative h-64 rounded-2xl overflow-hidden bg-black/50 border border-white/10 cursor-pointer hover:border-[#d99b26]/50 transition-all shadow-lg"
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>
              
              {/* Category pill */}
              <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-bold text-[#f5b942] uppercase">
                {img.category}
              </div>

              {/* Hover inspect icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-4 h-4 text-[#f5b942]" />
              </div>

              {/* Title info */}
              <div className="absolute bottom-3 left-3 right-3 text-left">
                <h3 className="text-sm font-bold text-white group-hover:text-[#f5b942] transition-colors line-clamp-1">
                  {img.title}
                </h3>
                <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                  {img.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#0d121b] border border-white/20 rounded-2xl overflow-hidden shadow-2xl p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 hover:bg-black text-white hover:text-[#f5b942] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative h-[65vh] w-full rounded-xl overflow-hidden">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-t border-white/10 mt-2">
              <div>
                <span className="text-[10px] font-bold uppercase text-[#d99b26] bg-[#d99b26]/10 px-2 py-0.5 rounded">
                  {selectedImage.category}
                </span>
                <h3 className="text-lg font-bold text-white mt-1">{selectedImage.title}</h3>
                <p className="text-xs text-slate-400">{selectedImage.description}</p>
              </div>
              <Link
                href="/contact-us"
                className="px-5 py-2.5 rounded-lg bg-[#d99b26] hover:bg-[#f5b942] text-black font-bold text-xs uppercase tracking-wider shrink-0"
              >
                Train With Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
