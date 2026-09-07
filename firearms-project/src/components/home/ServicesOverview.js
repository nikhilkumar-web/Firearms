'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { courses } from '@/data/courses';
import { User, Users, ArrowRight, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function ServicesOverview() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Defensive Mastery', 'Foundations', 'Licensing & Legal', 'Specialized', 'Tactical Operations'];

  const filteredCourses = activeCategory === 'All' 
    ? courses 
    : courses.filter(c => c.category === activeCategory);

  return (
    <section className="py-20 lg:py-28 bg-[#0a0d14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d99b26]/10 border border-[#d99b26]/20 text-[#f5b942] text-xs font-bold uppercase tracking-widest mb-3">
            Elite Curriculum
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            OUR <span className="gold-gradient-text">SERVICES</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Whether you are a first-time owner learning the fundamentals or an experienced professional refining advanced tactics, we provide a disciplined path to total confidence. We bridge the gap between possessing a firearm and operating one with precision, safety, and legal responsibility.
          </p>
        </div>

        {/* Private vs Group Sessions Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Card 1: Private Sessions */}
          <div className="tactical-glass-card rounded-2xl p-8 border border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <User className="w-28 h-28 text-[#f5b942]" />
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d99b26]/20 text-[#f5b942] text-xs font-bold uppercase tracking-wider mb-4">
              <User className="w-3.5 h-3.5" />
              1-on-1 Elite Mentorship
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Private Sessions</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Elevate your defense game with private, elite-level mentorship. We analyze your technique and build a custom tactical roadmap for maximum effectiveness. Stop practicing bad habits—master real-world proficiency with an expert dedicated solely to your survival.
            </p>
            <ul className="space-y-2.5 mb-8 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#d99b26]" />
                <span>Tailored high-speed video diagnostics</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#d99b26]" />
                <span>One-on-one undivided instructor attention</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#d99b26]" />
                <span>Rapid correction of recoil and grip flaws</span>
              </li>
            </ul>
            <Link
              href="/contact-us?type=one-on-one"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-[#d99b26] to-[#b87b14] hover:from-[#f5b942] hover:to-[#d99b26] text-black font-extrabold text-xs uppercase tracking-wider shadow-lg transition-all"
            >
              <span>Consult Today!</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 2: Group Sessions */}
          <div className="tactical-glass-card rounded-2xl p-8 border border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Users className="w-28 h-28 text-[#f5b942]" />
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider mb-4">
              <Users className="w-3.5 h-3.5 text-[#f5b942]" />
              Supportive Squad Training
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Group Sessions</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Step into high-energy sessions that blend tactical instruction with friendly competition. Build your skills through coached drills, challenge yourself, and see your progress over time. Join the Network and level up with a supportive team.
            </p>
            <ul className="space-y-2.5 mb-8 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#d99b26]" />
                <span>Dynamic stress drills & team communication</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#d99b26]" />
                <span>Affordable per-student tuition rates</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#d99b26]" />
                <span>Competitive timer benchmarks & camaraderie</span>
              </li>
            </ul>
            <Link
              href="/contact-us?type=group"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 hover:border-[#d99b26] text-white font-extrabold text-xs uppercase tracking-wider shadow-lg transition-all"
            >
              <span>Secure Your Spot</span>
              <ArrowRight className="w-4 h-4 text-[#f5b942]" />
            </Link>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? 'bg-[#d99b26] text-black shadow-md'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 10 Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.slug}
              className="tactical-glass-card rounded-2xl overflow-hidden border border-white/10 flex flex-col justify-between group"
            >
              <div className="relative h-48 w-full overflow-hidden bg-black/40">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d121b] via-transparent to-transparent"></div>
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-bold text-[#f5b942]">
                  {course.category}
                </div>
                <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded bg-black/70 text-[11px] text-slate-300">
                  <Clock className="w-3 h-3 text-[#d99b26]" />
                  <span>{course.duration}</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#f5b942] transition-colors line-clamp-1 mb-2">
                    {course.title}
                  </h3>
                  <p className="text-slate-400 text-xs line-clamp-3 mb-4 leading-relaxed">
                    {course.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
                  <span className="text-[11px] text-slate-400 font-medium">
                    Level: <strong className="text-white">{course.level}</strong>
                  </span>
                  <Link
                    href={`/services/${course.slug}`}
                    className="text-xs font-bold text-[#f5b942] hover:text-white flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/20 hover:border-[#d99b26] text-white font-bold text-xs uppercase tracking-wider transition-all"
          >
            <span>Explore Complete 10-Course Syllabus</span>
            <ArrowRight className="w-4 h-4 text-[#f5b942]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
