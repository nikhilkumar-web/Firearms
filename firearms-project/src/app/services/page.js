'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { courses } from '@/data/courses';
import { Clock, ShieldCheck, ArrowRight, CheckCircle2, Target } from 'lucide-react';

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Defensive Mastery', 'Foundations', 'Licensing & Legal', 'Specialized', 'Tactical Operations'];

  const filtered = selectedCategory === 'All'
    ? courses
    : courses.filter(c => c.category === selectedCategory);

  return (
    <div className="bg-[#080a0e] text-slate-100 min-h-screen">
      {/* Header */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-[#07090e] border-b border-white/10">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d99b26]/10 border border-[#d99b26]/20 text-[#f5b942] text-xs font-bold uppercase tracking-widest mb-4">
            Structured Education Curriculum
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            FIREARMS <span className="gold-gradient-text">TRAINING SERVICES</span>
          </h1>
          <p className="mt-4 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            From basic safety and Florida CWL certifications to advanced combatives and dynamic movement under fire.
          </p>
        </div>
      </section>

      {/* Main Catalog */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? 'bg-[#d99b26] text-black shadow-lg scale-105'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((course) => (
            <div
              key={course.slug}
              className="tactical-glass-card rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between group"
            >
              <div className="relative h-60 w-full overflow-hidden bg-black/40">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d121b] via-[#0d121b]/40 to-transparent"></div>
                <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/10 text-xs font-bold text-[#f5b942]">
                  {course.category}
                </div>
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/80 backdrop-blur-md text-xs text-slate-300 border border-white/10">
                  <Clock className="w-3.5 h-3.5 text-[#d99b26]" />
                  <span>{course.duration}</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#d99b26]">
                    Level: {course.level}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-0.5 group-hover:text-[#f5b942] transition-colors">
                    {course.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {course.summary}
                  </p>

                  <div className="space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Core Syllabus Highlights:
                    </div>
                    {course.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#d99b26] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                  <Link
                    href={`/services/${course.slug}`}
                    className="text-xs font-bold text-[#f5b942] hover:text-white flex items-center gap-1.5"
                  >
                    <span>Full Curriculum & Gear Requirements</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href={`/contact-us?course=${course.slug}`}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#d99b26] to-[#b87b14] text-black font-extrabold text-xs uppercase tracking-wider hover:opacity-95 shadow-lg"
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
