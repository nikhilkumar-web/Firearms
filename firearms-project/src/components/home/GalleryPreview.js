import Link from 'next/link';
import Image from 'next/image';
import { galleryImages } from '@/data/gallery';

export default function GalleryPreview() {
  const displayImages = galleryImages.slice(0, 8);

  return (
    <section className="py-20 bg-[#000000] text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Exact Header and View More Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-wide text-white">
            OUR GALLERY
          </h2>
          <Link
            href="/gallery"
            className="px-6 py-2.5 rounded bg-[#BC8914] hover:bg-[#B1800F] text-black font-extrabold uppercase text-xs tracking-wider transition-colors"
          >
            View More
          </Link>
        </div>

        {/* 8 Images Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {displayImages.map((img) => (
            <div
              key={img.id}
              className="relative h-56 sm:h-64 rounded-xl overflow-hidden bg-black/40 border border-white/10 group shadow-md"
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
