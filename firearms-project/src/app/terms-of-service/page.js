import Link from 'next/link';

export const metadata = {
  title: "Terms of Service | American Firearms Network",
  description: "Terms of Service and legal conditions for American Firearms Network.",
};

export default function TermsOfServicePage() {
  return (
    <main className="bg-[#FBFBFB] text-[#111111] overflow-x-hidden font-roboto min-h-screen">
      
      {/* 1. HERO BANNER */}
      <section 
        className="relative w-full py-[50px] sm:py-[70px] overflow-hidden"
        style={{
          backgroundImage: 'url(/images/about/outdoor-range-group.webp)',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundColor: '#000000', opacity: 0.80 }}
        />

        <div className="relative z-10 max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 
            className="text-[28px] sm:text-[42px] font-bold uppercase text-white tracking-wide leading-tight"
            style={{ fontFamily: "'Gabarito', sans-serif" }}
          >
            TERMS OF SERVICE
          </h1>
        </div>
      </section>

      {/* 2. CLEAN READABLE DOCUMENT BODY */}
      <section className="py-[35px] sm:py-[55px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-[960px] mx-auto bg-white p-6 sm:p-12 md:p-14 rounded-xl border border-gray-200/90 shadow-sm text-[15.5px] sm:text-[16px] leading-[1.8] text-[#2b2b2b] space-y-6">

          {/* DATES META BAR */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-5 pb-5 border-b border-gray-100">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#FFF9E6] border border-[#AA8802]/30 text-[13.5px] text-[#1a1a1a]">
              <svg className="w-4 h-4 text-[#AA8802] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>
                <b className="text-black font-semibold">Effective Date:</b>{' '}
                <span className="text-[#333333]">January 14, 2026</span>
              </span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#F4F4F5] border border-gray-200 text-[13.5px] text-[#1a1a1a]">
              <svg className="w-4 h-4 text-gray-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>
                <b className="text-black font-semibold">Last Revised:</b>{' '}
                <span className="text-[#333333]">January 14, 2026</span>
              </span>
            </div>
          </div>

          {/* NOTICE */}
          <div>

            <p className="text-[15.5px] sm:text-[16px] leading-[1.8] text-[#1a1a1a]">
              <b>PLEASE READ THIS AGREEMENT CAREFULLY. THIS IS A LEGALLY BINDING CONTRACT BETWEEN YOU AND THE AMERICAN FIREARMS NETWORK (“AFN”, “WE”, “US”).</b>
              <span style={{ fontWeight: 400 }}> By accessing or using AMERICANFIREARMSNETWORK.COM (the “Site”), submitting inquiries via contact forms, booking services, or participating in any firearms training, consultations, or related activities offered by AFN, or by contacting us via any official mediums, you acknowledge that you have read, understood, and agree to be bound by these Terms in their entirety. If you do not agree, do not use the Site or our services.</span>
            </p>
          </div>

          <hr className="my-6 border-gray-200" />

          {/* SECTION 1 */}
          <div>
            <h2 
              className="text-[20px] sm:text-[23px] font-bold text-black mb-3"
              style={{ fontFamily: "'Gabarito', sans-serif" }}
            >
              <b>1. ELIGIBILITY &amp; CERTIFICATIONS</b>
            </h2>
            <p className="mb-3">
              <span style={{ fontWeight: 400 }}>You represent and warrant that:</span>
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-3 text-[#222222]">
              <li><span style={{ fontWeight: 400 }}>You are at least 18 years of age (or the age of majority in your jurisdiction).</span></li>
              <li><span style={{ fontWeight: 400 }}>You are not a “prohibited person” under federal law (18 U.S.C. § 922(g)) or Florida law (e.g., § 790.23, Fla. Stat.), including no felony convictions, certain misdemeanors, active protective orders, adjudications of mental defect, or unlawful controlled substance use/addiction.</span></li>
              <li><span style={{ fontWeight: 400 }}>You will not be under the influence of alcohol, drugs, or any impairing substance during any AFN activity.</span></li>
              <li><span style={{ fontWeight: 400 }}>You have the legal right and physical/mental capacity to participate safely.</span></li>
            </ul>
            <p className="text-[#444444]">
              <span style={{ fontWeight: 400 }}>These are continuing representations; breach may result in immediate termination without refund.</span>
            </p>
          </div>

          <hr className="my-6 border-gray-200" />

          {/* SECTION 2 */}
          <div>
            <h2 
              className="text-[20px] sm:text-[23px] font-bold text-black mb-3"
              style={{ fontFamily: "'Gabarito', sans-serif" }}
            >
              <b>2. RANGE &amp; NOISE PROTECTIONS (TO THE EXTENT PERMITTED BY LAW)</b>
            </h2>
            <p>
              <span style={{ fontWeight: 400 }}>AFN complies with applicable Florida laws protecting sport shooting and training ranges. Pursuant to Florida Statute § 823.16 (as may be amended or interpreted), to the fullest extent permitted by current law, you waive any claims based on noise, noise pollution, or nuisance arising from range operations, provided the range met applicable noise ordinances at construction/initial operation. This provision does not limit actions for negligence, recklessness, or other claims outside noise/nuisance.</span>
            </p>
          </div>

          <hr className="my-6 border-gray-200" />

          {/* SECTION 3 */}
          <div>
            <h2 
              className="text-[20px] sm:text-[23px] font-bold text-black mb-3"
              style={{ fontFamily: "'Gabarito', sans-serif" }}
            >
              <b>3. MANDATORY SAFETY RULES &amp; INSTRUCTOR AUTHORITY</b>
            </h2>
            <p className="mb-3">
              <span style={{ fontWeight: 400 }}>Safety is non-negotiable. You agree to:</span>
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-[#222222]">
              <li>
                <span style={{ fontWeight: 400 }}>Follow all range rules, including </span>
                <b>cold range</b>
                <span style={{ fontWeight: 400 }}> policy (firearms unloaded and encased when entering/exiting).</span>
              </li>
              <li><span style={{ fontWeight: 400 }}>Wear mandatory wrap-around eye protection and high-decibel ear protection at all times on the range.</span></li>
              <li><span style={{ fontWeight: 400 }}>Obey all instructor directives immediately.</span></li>
            </ul>
            <p>
              <span style={{ fontWeight: 400 }}>Instructors (including Todd and Paul) have absolute authority to refuse service, terminate participation (without refund), or remove anyone for unsafe, reckless, or non-compliant behavior.</span>
            </p>
          </div>

          <hr className="my-6 border-gray-200" />

          {/* SECTION 4 */}
          <div>
            <h2 
              className="text-[20px] sm:text-[23px] font-bold text-black mb-3"
              style={{ fontFamily: "'Gabarito', sans-serif" }}
            >
              <b>4. EDUCATIONAL &amp; INFORMATIONAL DISCLAIMER – NO LEGAL ADVICE</b>
            </h2>
            <p>
              <span style={{ fontWeight: 400 }}>All content on the Site (e.g., guides, videos, resources) is for general educational/informational purposes only and does </span>
              <b>not</b>
              <span style={{ fontWeight: 400 }}> constitute legal advice, training certification, or professional opinion. Florida self-defense/use-of-force laws are complex and fact-specific; consult a licensed Florida attorney for advice.</span>
            </p>
          </div>

          <hr className="my-6 border-gray-200" />

          {/* SECTION 5 */}
          <div>
            <h2 
              className="text-[20px] sm:text-[23px] font-bold text-black mb-3"
              style={{ fontFamily: "'Gabarito', sans-serif" }}
            >
              <b>5. ASSUMPTION OF RISK, RELEASE OF LIABILITY, &amp; INDEMNIFICATION</b>
            </h2>
            <p className="mb-3 font-bold text-black">
              <b>FIREARMS TRAINING AND RELATED ACTIVITIES ARE INHERENTLY DANGEROUS AND INVOLVE SIGNIFICANT RISKS OF SERIOUS BODILY INJURY, PERMANENT DISABILITY, PROPERTY DAMAGE, OR DEATH.</b>
            </p>
            <p className="mb-3">
              <span style={{ fontWeight: 400 }}>You </span>
              <b>voluntarily assume all such risks</b>
              <span style={{ fontWeight: 400 }}>, known and unknown, including (without limitation) those arising from firearms handling, ammunition, range conditions, equipment, weather, other participants, or ordinary negligence by AFN, its owners, instructors (Todd and Paul), agents, or affiliates.</span>
            </p>
            <p className="mb-3">
              <b>TO THE FULLEST EXTENT PERMITTED BY LAW, YOU HEREBY RELEASE, WAIVE, DISCHARGE, AND COVENANT NOT TO SUE</b>
              <span style={{ fontWeight: 400 }}> AFN and its affiliates from </span>
              <b>any and all liability, claims, demands, actions, or causes of action</b>
              <span style={{ fontWeight: 400 }}> whatsoever arising out of or related to your use of the Site, participation in services, or any injury, loss, or damage (including death) sustained, </span>
              <b>except to the extent caused by AFN’s gross negligence, reckless conduct, or intentional misconduct</b>
              <span style={{ fontWeight: 400 }}> (which cannot be waived under Florida public policy).</span>
            </p>
            <p>
              <span style={{ fontWeight: 400 }}>You agree to </span>
              <b>indemnify, defend, and hold harmless</b>
              <span style={{ fontWeight: 400 }}> AFN from any claims, losses, liabilities, costs (including reasonable attorneys’ fees), or expenses brought by or on behalf of you, your heirs, or third parties arising from your participation or breach of these Terms.</span>
            </p>
          </div>

          <hr className="my-6 border-gray-200" />

          {/* SECTION 6 */}
          <div>
            <h2 
              className="text-[20px] sm:text-[23px] font-bold text-black mb-3"
              style={{ fontFamily: "'Gabarito', sans-serif" }}
            >
              <b>6. BINDING ARBITRATION &amp; CLASS ACTION WAIVER</b>
            </h2>
            <p className="mb-3">
              <span style={{ fontWeight: 400 }}>Any dispute, claim, or controversy arising out of or relating to these Terms, the Site, or AFN services (including validity/enforceability) shall be resolved by </span>
              <b>binding arbitration</b>
              <span style={{ fontWeight: 400 }}> administered by the American Arbitration Association (AAA) under its Consumer Arbitration Rules, in Miami-Dade County, Florida. Judgment on the award may be entered in any court with jurisdiction.</span>
            </p>
            <p>
              <span style={{ fontWeight: 400 }}>You waive any right to a jury trial or to participate in a class action. This arbitration provision survives termination.</span>
            </p>
          </div>

          <hr className="my-6 border-gray-200" />

          {/* SECTION 7 */}
          <div>
            <h2 
              className="text-[20px] sm:text-[23px] font-bold text-black mb-3"
              style={{ fontFamily: "'Gabarito', sans-serif" }}
            >
              <b>7. GOVERNING LAW, VENUE, &amp; JURY TRIAL WAIVER</b>
            </h2>
            <p className="mb-3">
              <span style={{ fontWeight: 400 }}>These Terms are governed exclusively by Florida law (without regard to conflicts principles). Any non-arbitrable matters shall be filed exclusively in state or federal courts in Miami-Dade County, Florida.</span>
            </p>
            <p>
              <b>YOU IRREVOCABLY WAIVE ANY RIGHT TO A TRIAL BY JURY</b>
              <span style={{ fontWeight: 400 }}> in any proceeding related to these Terms or AFN services, to the extent permitted by law.</span>
            </p>
          </div>

          <hr className="my-6 border-gray-200" />

          {/* SECTION 8 */}
          <div>
            <h2 
              className="text-[20px] sm:text-[23px] font-bold text-black mb-3"
              style={{ fontFamily: "'Gabarito', sans-serif" }}
            >
              <b>8. MISCELLANEOUS</b>
            </h2>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-[#222222]">
              <li>
                <b>Severability</b>
                <span style={{ fontWeight: 400 }}> — If any provision is held invalid/unenforceable, the remainder remains in full force.</span>
              </li>
              <li>
                <b>Entire Agreement</b>
                <span style={{ fontWeight: 400 }}> — This is the complete agreement; supersedes prior understandings.</span>
              </li>
              <li>
                <b>No Waiver</b>
                <span style={{ fontWeight: 400 }}> — Failure to enforce any right does not waive it.</span>
              </li>
              <li>
                <b>Updates</b>
                <span style={{ fontWeight: 400 }}> — We may revise these Terms; continued use constitutes acceptance. Check the Site regularly.</span>
              </li>
            </ul>

            <p className="mb-3 text-[#222222]">
              <b>Contact</b>
              <span style={{ fontWeight: 400 }}> — </span>
              <a href="mailto:info@americanfirearmsnetwork.com" className="text-[#AA8802] hover:underline font-medium">info@americanfirearmsnetwork.com</a>
              <span style={{ fontWeight: 400 }}> | </span>
              <a href="tel:347-853-2249" className="hover:text-[#AA8802] font-medium">(347) 853-2249</a>
              <span style={{ fontWeight: 400 }}> | Homestead, Florida.</span>
            </p>

            <p className="text-[#444444]">
              <span style={{ fontWeight: 400 }}>By proceeding, you confirm you are signing voluntarily, have had the opportunity to consult counsel, and understand this is a full release of rights.</span>
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
