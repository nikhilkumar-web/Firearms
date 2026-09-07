import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { courses } from '@/data/courses';
import ConsultationForm from '@/components/forms/ConsultationForm';
import { Clock, ShieldCheck, CheckCircle2, ArrowLeft, ArrowRight, Target, AlertCircle } from 'lucide-react';

export function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export function generateMetadata({ params }) {
  const course = courses.find((c) => c.slug === params.slug);
  if (!course) return { title: 'Course Not Found' };
  return {
    title: `${course.title} | American Firearms Network`,
    description: course.summary,
  };
}

export default async function CourseDetailPage({ params }) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="bg-[#080a0e] text-slate-100 min-h-screen">
      {/* Top Breadcrumb Header */}
      <section className="relative py-16 lg:py-24 overflow-hidden bg-[#07090e] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-[#f5b942] mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Courses</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d99b26]/10 border border-[#d99b26]/20 text-[#f5b942] text-xs font-bold uppercase tracking-widest">
                {course.category}
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {course.title}
              </h1>
              <p className="text-base sm:text-lg text-[#f5b942] font-semibold">
                {course.tagline}
              </p>
              <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
                {course.summary}
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#d99b26]" />
                  <span>Duration: <strong>{course.duration}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#d99b26]" />
                  <span>Skill Level: <strong>{course.level}</strong></span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Details Breakdown */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Details */}
          <div className="lg:col-span-7 space-y-10">
            {/* Syllabus Highlights */}
            <div className="tactical-glass-card rounded-2xl p-8 border border-white/10 space-y-4">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Target className="w-5 h-5 text-[#d99b26]" />
                <span>What You Will Master</span>
              </h2>
              <div className="space-y-3 pt-2">
                {course.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-[#d99b26] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Prerequisites */}
            <div className="tactical-glass-card rounded-2xl p-8 border border-white/10 space-y-3">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#d99b26]" />
                <span>Prerequisites</span>
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {course.prerequisites}
              </p>
            </div>

            {/* Required Gear & Ammo */}
            <div className="tactical-glass-card rounded-2xl p-8 border border-white/10 space-y-3">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-[#d99b26]" />
                <span>Required Gear & Ammunition</span>
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {course.gearRequired}
              </p>
              <div className="text-xs text-slate-400 mt-2 italic">
                * Note: If you do not own a firearm or safety equipment, rental packages and eye/ear protection are available through our partner ranges upon request.
              </div>
            </div>
          </div>

          {/* Right Scheduling Form */}
          <div className="lg:col-span-5">
            <ConsultationForm preselectedType="One on One Lesson" />
          </div>
        </div>
      </section>
    </div>
  );
}
