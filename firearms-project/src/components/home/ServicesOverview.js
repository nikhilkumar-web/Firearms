import Link from 'next/link';

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-[#050505] text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Exact Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-wide text-white">
            OUR SERVICES
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#D6DBDD] leading-relaxed">
            Whether you are a first-time owner learning the fundamentals or an experienced professional refining advanced tactics, we provide a disciplined path to total confidence. We bridge the gap between possessing a firearm and operating one with precision, safety, and legal responsibility.
          </p>
        </div>

        {/* Exact 2 Services Cards from Live Site */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Private Sessions */}
          <div className="bg-[#111111] border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:border-[#BC8914] transition-all shadow-xl space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-wide">
                Private Sessions
              </h2>
              <p className="text-sm text-[#D6DBDD] leading-relaxed">
                Elevate your defense game with private, elite-level mentorship. We analyze your technique and build a custom tactical roadmap for maximum effectiveness. Stop practicing bad habits—master real-world proficiency with an expert dedicated solely to your survival.
              </p>
            </div>
            <div>
              <Link
                href="/contact-us?type=one-on-one"
                className="inline-block px-8 py-3.5 rounded bg-[#BC8914] hover:bg-[#B1800F] text-black font-extrabold uppercase text-xs tracking-wider transition-colors"
              >
                Consult Today!
              </Link>
            </div>
          </div>

          {/* Card 2: Group Sessions */}
          <div className="bg-[#111111] border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:border-[#BC8914] transition-all shadow-xl space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-wide">
                Group Sessions
              </h2>
              <p className="text-sm text-[#D6DBDD] leading-relaxed">
                Step into high-energy sessions that blend tactical instruction with friendly competition. Build your skills through coached drills, challenge yourself, and see your progress over time. Join the Network and level up with a supportive team.
              </p>
            </div>
            <div>
              <Link
                href="/contact-us?type=group"
                className="inline-block px-8 py-3.5 rounded bg-[#BC8914] hover:bg-[#B1800F] text-black font-extrabold uppercase text-xs tracking-wider transition-colors"
              >
                Secure yourSpot
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
