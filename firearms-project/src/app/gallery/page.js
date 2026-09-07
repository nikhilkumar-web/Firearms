'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { galleryImages } from '@/data/gallery';
import { Eye, X, ShieldCheck, ArrowRight } from 'lucide-react';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', 'Handgun', 'Carbine', 'CCW', 'Tactical', 'Safety', 'Private', 'Combatives'];

  const filtered = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="bg-[#080a0e] text-slate-100 min-h-screen">
      {/* Header */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-[#07090e] border-b border-white/10">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d99b26]/10 border border-[#d99b26]/20 text-[#f5b942] text-xs font-bold uppercase tracking-widest mb-4">
            Live Action Showcase
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            AFN <span className="gold-gradient-text">TRAINING GALLERY</span>
          </h1>
          <p className="mt-4 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Real drills, real students, real proficiency. Explore our photographic record of defensive courses across Florida.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? 'bg-[#d99b26] text-black shadow-lg scale-105'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((img) => (
            <div
              key={img.id}
              onClick={() => setSelectedImage(img)}
              className="group relative h-80 rounded-3xl overflow-hidden bg-black/60 border border-white/10 cursor-pointer hover:border-[#d99b26]/50 transition-all shadow-xl"
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/10 text-xs font-bold text-[#f5b942] uppercase">
                {img.category}
              </div>

              {/* Eye hover */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/70 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-5 h-5 text-[#f5b942]" />
              </div>

              {/* Title & Description */}
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <h3 className="text-lg font-bold text-white group-hover:text-[#f5b942] transition-colors line-clamp-1">
                  {img.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2 mt-1 leading-relaxed">
                  {img.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#d99b26] to-[#b87b14] text-black font-extrabold text-xs uppercase tracking-wider shadow-xl hover:scale-[1.02] transition-transform"
          >
            <span>Ready to Train With Us? Consult Today</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#0d121b] border border-white/20 rounded-3xl overflow-hidden shadow-2xl p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 z-10 p-2.5 rounded-full bg-black/80 hover:bg-black text-white hover:text-[#f5b942] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative h-[65vh] w-full rounded-2xl overflow-hidden">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t border-white/10 mt-4">
              <div>
                <span className="text-xs font-bold uppercase text-[#d99b26] bg-[#d99b26]/10 px-2.5 py-1 rounded">
                  {selectedImage.category}
                </span>
                <h3 className="text-xl font-bold text-white mt-1.5">{selectedImage.title}</h3>
                <p className="text-xs text-slate-400 mt-0.5">{selectedImage.description}</p>
              </div>
              <Link
                href="/contact-us"
                className="px-6 py-3 rounded-xl bg-[#d99b26] hover:bg-[#f5b942] text-black font-extrabold text-xs uppercase tracking-wider shrink-0"
              >
                Schedule This Training
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
