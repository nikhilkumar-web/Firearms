import Link from 'next/link';
import Image from 'next/image';

export default function AboutOverview() {
  return (
    <section className="py-20 bg-[#000000] text-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide text-white">
                ABOUT THE AMERICAN FIREARMS NETWORK
              </h2>
              <h4 className="text-base sm:text-lg font-bold text-[#BC8914] uppercase tracking-wider mt-1">
                YOUR ELITE PARTNER IN DEFENSIVE MASTERY
              </h4>
            </div>

            {/* Sub-block 1 */}
            <div className="space-y-2 text-sm text-[#D6DBDD] leading-relaxed">
              <h5 className="font-bold text-white text-base">
                The Gap Between Ownership and Proficiency
              </h5>
              <p>
                In the heart of Florida, the right to bear arms is a cornerstone of our community. But at The American Firearms Network (AFN), we believe a right without proficiency is a liability. Established in West Palm Beach, AFN was forged with a singular mission: to bridge the critical gap between static range practice and real-world tactical survival.
              </p>
            </div>

            {/* Sub-block 2 */}
            <div className="space-y-2 text-sm text-[#D6DBDD] leading-relaxed">
              <h5 className="font-bold text-white text-base">
                More Than a Range—A Comprehensive Learning Ecosystem
              </h5>
              <p>
                We are not just a training facility; we are Florida’s premier hub for the modern protector. Whether you are a first-time owner seeking a Florida Concealed Weapon License (CWL) or an elite professional refining high-cadence drills, our curriculum is engineered for results. We provide a one-stop learning experience that integrates:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-300">
                <li>
                  <strong className="text-white">Precision Indoor Diagnostics:</strong> Master the technical “science” of firearm performance in a controlled environment.
                </li>
                <li>
                  <strong className="text-white">Scenario-Based Outdoor Drills:</strong> Translate your skills to dynamic, real-world stress simulations.
                </li>
                <li>
                  <strong className="text-white">Florida Legal Clarity:</strong> Deep-dive sessions on “Stand Your Ground” laws and the ethical use of force.
                </li>
              </ul>
            </div>

            {/* Sub-block 3 */}
            <div className="space-y-2 text-sm text-[#D6DBDD] leading-relaxed">
              <h5 className="font-bold text-white text-base">
                Digital Intelligence: The AFN YouTube Experience
              </h5>
              <p>
                Our mission extends beyond the firing line. We leverage a high-performance YouTube Network to deliver tactical insights, gear reviews, and training “deep-dives” straight to your screen. We aren’t a passive media channel—we are an active institution using every digital tool to build a more capable, confident, and legally-informed citizenry.
              </p>
            </div>

            {/* Sub-block 4 */}
            <div className="space-y-2 text-sm text-[#D6DBDD] leading-relaxed">
              <h5 className="font-bold text-white text-base">
                Forging the Adaptive Mindset
              </h5>
              <p>
                At AFN, you don’t just “train”—you evolve. Join a network dedicated to the practical application of defensive skills and situational awareness.
              </p>
              <p className="italic text-[#BC8914] font-semibold text-sm pt-1">
                “Standard range days only reveal where you are; AFN takes you where you need to be.”
              </p>
            </div>

            {/* Exact Buttons */}
            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="https://www.youtube.com/@AMERICANFIREARMSNETWORKS?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded bg-[#BC8914] hover:bg-[#B1800F] text-black font-extrabold uppercase text-xs tracking-wider transition-colors"
              >
                Subscribe Now
              </a>
              <Link
                href="/about-us"
                className="px-6 py-3 rounded border border-[#BC8914] hover:bg-[#BC8914]/20 text-[#BC8914] font-extrabold uppercase text-xs tracking-wider transition-colors"
              >
                Read More
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 relative h-96 sm:h-[450px] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src="/images/about/tactical-ecosystem.jpg"
              alt="About The American Firearms Network"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
