import Link from 'next/link';

export const metadata = {
  title: "Liability Waiver & Release of Indemnity | American Firearms Network",
  description: "Public liability waiver, release of claims, and assumption of risk for firearms instruction.",
};

export default function LiabilityWaiverReleaseOfIndemnityPage() {
  return (
    <main className="bg-[#FBFBFB] text-[#111111] overflow-x-hidden font-roboto min-h-screen">
      
      {/* 1. HERO BANNER */}
      <section 
        className="relative w-full py-[50px] sm:py-[70px] overflow-hidden"
        style={{
          backgroundImage: 'url(https://american-firearms.s3-eu-central-2.ionoscloud.com/images/about/outdoor-range-group.webp)',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundColor: '#000000', opacity: 0.80 }}
        />

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 
            className="text-[26px] sm:text-[40px] font-bold uppercase text-white tracking-wide leading-tight"
            style={{ fontFamily: "'Gabarito', sans-serif" }}
          >
            LIABILITY WAIVER &amp; RELEASE OF INDEMNITY
          </h1>
        </div>
      </section>

      {/* 2. CLEAN READABLE DOCUMENT BODY */}
      <section className="py-[35px] sm:py-[55px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto bg-white p-6 sm:p-12 md:p-14 rounded-xl border border-gray-200/90 shadow-sm text-[15.5px] sm:text-[16px] leading-[1.8] text-[#2b2b2b] space-y-6">

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

          {/* INTRO */}
          <div>

            <p className="font-bold text-black text-[17px] mb-2 uppercase">
              <b>LIABILITY WAIVER, RELEASE OF LIABILITY, ASSUMPTION OF RISK, AND INDEMNIFICATION</b>
            </p>
            <p className="mb-4">
              <b>The American Firearms Network (“AFN”, “we”, “us”)</b>
              <span style={{ fontWeight: 400 }}> provides this Liability Waiver &amp; Release of Indemnity as a public disclosure of the inherent risks associated with firearms activities and our policies.</span>
            </p>

            <p className="text-[15.5px] sm:text-[16px] leading-[1.8] text-[#1a1a1a]">
              <b>By accessing, browsing, or using</b>
              <span style={{ fontWeight: 400 }}> this website (THEAMERICANFIREARMSNETWORK.COM, the “Site”), </span>
              <b>submitting any inquiry</b>
              <span style={{ fontWeight: 400 }}> (via contact forms, email, phone at (347) 853-2249, or otherwise), or </span>
              <b>participating in</b>
              <span style={{ fontWeight: 400 }}> any firearms training, consultations, range activities, or related services (collectively, the “Activities” — whether now or in the future), you acknowledge that you have read, understand, and agree to the terms below. Continued use of the Site or submission of inquiries constitutes your agreement to these terms. If you do not agree, do not use the Site or contact us.</span>
            </p>
          </div>

          <hr className="my-6 border-gray-200" />

          {/* SECTION 1 */}
          <div>
            <h2 
              className="text-[20px] sm:text-[23px] font-bold text-black mb-3"
              style={{ fontFamily: "'Gabarito', sans-serif" }}
            >
              <b>1. Inherent Risks</b>
            </h2>
            <p>
              <span style={{ fontWeight: 400 }}>Firearms training and related Activities are </span>
              <b>inherently dangerous</b>
              <span style={{ fontWeight: 400 }}> and involve significant risks of </span>
              <b>serious bodily injury, permanent disability, disfigurement, property damage, emotional distress, or death</b>
              <span style={{ fontWeight: 400 }}>, including accidental discharge, ricochets, equipment failure, hearing/eye injury, recoil, slips/falls, range conditions, other participants, weather, or any indirect risks from Site content leading to participation. These risks cannot be fully eliminated, even with safety measures.</span>
            </p>
          </div>

          <hr className="my-6 border-gray-200" />

          {/* SECTION 2 */}
          <div>
            <h2 
              className="text-[20px] sm:text-[23px] font-bold text-black mb-3"
              style={{ fontFamily: "'Gabarito', sans-serif" }}
            >
              <b>2. Express Assumption of Risk</b>
            </h2>
            <p>
              <span style={{ fontWeight: 400 }}>You </span>
              <b>voluntarily assume ALL risks</b>
              <span style={{ fontWeight: 400 }}> (known or unknown, inherent or otherwise) associated with the Site, inquiries, or Activities. Your access, inquiries, or participation are purely voluntary.</span>
            </p>
          </div>

          <hr className="my-6 border-gray-200" />

          {/* SECTION 3 */}
          <div>
            <h2 
              className="text-[20px] sm:text-[23px] font-bold text-black mb-3"
              style={{ fontFamily: "'Gabarito', sans-serif" }}
            >
              <b>3. Release of Liability</b>
            </h2>
            <p className="mb-3">
              <b>TO THE FULLEST EXTENT PERMITTED BY LAW</b>
              <span style={{ fontWeight: 400 }}>, you hereby </span>
              <b>release, waive, discharge, and covenant not to sue</b>
              <span style={{ fontWeight: 400 }}> AFN, its owners, instructors (including Todd and Paul), employees, agents, affiliates, successors, assigns, and any property owner/host (the “Released Parties”) from </span>
              <b>any and all liability, claims, demands, actions, causes of action</b>
              <span style={{ fontWeight: 400 }}>, or judgments arising from:</span>
            </p>

            <ul className="list-disc pl-6 space-y-2 mb-3 text-[#222222]">
              <li><span style={{ fontWeight: 400 }}>Site access or use</span></li>
              <li><span style={{ fontWeight: 400 }}>Any inquiry or communication</span></li>
              <li><span style={{ fontWeight: 400 }}>Participation in Activities</span></li>
              <li><span style={{ fontWeight: 400 }}>Any loss, damage, injury (including death), or expense</span></li>
            </ul>

            <p>
              <span style={{ fontWeight: 400 }}>
                <b>except to the extent directly caused by the Released Parties’ gross negligence, reckless conduct, or intentional misconduct</b> (which cannot be waived under Florida law). This includes claims for <b>ordinary negligence</b>.
              </span>
            </p>
          </div>

          <hr className="my-6 border-gray-200" />

          {/* SECTION 4 */}
          <div>
            <h2 
              className="text-[20px] sm:text-[23px] font-bold text-black mb-3"
              style={{ fontFamily: "'Gabarito', sans-serif" }}
            >
              <b>4. Indemnification &amp; Hold Harmless</b>
            </h2>
            <p>
              <span style={{ fontWeight: 400 }}>You agree to </span>
              <b>indemnify, defend, and hold harmless</b>
              <span style={{ fontWeight: 400 }}> the Released Parties from any claims, liabilities, losses, damages, costs, or expenses (including reasonable attorneys’ fees) arising from your Site use, inquiries, participation, or breach of these terms.</span>
            </p>
          </div>

          <hr className="my-6 border-gray-200" />

          {/* SECTION 5 */}
          <div>
            <h2 
              className="text-[20px] sm:text-[23px] font-bold text-black mb-3"
              style={{ fontFamily: "'Gabarito', sans-serif" }}
            >
              <b>5. Representations</b>
            </h2>
            <p className="mb-3">
              <span style={{ fontWeight: 400 }}>You represent that:</span>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#222222]">
              <li><span style={{ fontWeight: 400 }}>You are at least 18 and legally competent.</span></li>
              <li><span style={{ fontWeight: 400 }}>You are not prohibited under federal (18 U.S.C. § 922) or Florida law (§ 790.23, Fla. Stat.).</span></li>
              <li><span style={{ fontWeight: 400 }}>You are fit to participate safely and not impaired.</span></li>
              <li><span style={{ fontWeight: 400 }}>You will follow all AFN safety rules, instructor directives, and NSSF 10 Rules of Safe Gun Handling.</span></li>
            </ul>
          </div>

          <hr className="my-6 border-gray-200" />

          {/* SECTION 6 */}
          <div>
            <h2 
              className="text-[20px] sm:text-[23px] font-bold text-black mb-3"
              style={{ fontFamily: "'Gabarito', sans-serif" }}
            >
              <b>6. Governing Law &amp; Severability</b>
            </h2>
            <p>
              <span style={{ fontWeight: 400 }}>Governed by Florida law. Invalid provisions do not affect the remainder.</span>
            </p>
          </div>

          <hr className="my-6 border-gray-200" />

          {/* PARTICIPATION & QUESTIONS */}
          <div className="space-y-3">
            <p>
              <b>For Actual Participation</b>
              <span style={{ fontWeight: 400 }}>: While this page provides important notice, </span>
              <b>formal written or electronic agreement</b>
              <span style={{ fontWeight: 400 }}> (e.g., signed waiver at booking or in-person) may be required for training/consultations to ensure full protection. Contact us for details.</span>
            </p>

            <p>
              <b>Questions?</b>
              <span style={{ fontWeight: 400 }}> </span>
              <a href="mailto:info@americanfirearmsnetwork.com" className="text-[#AA8802] hover:underline font-medium">info@americanfirearmsnetwork.com</a>
              <span style={{ fontWeight: 400 }}> | </span>
              <a href="tel:347-853-2249" className="hover:text-[#AA8802] font-medium">(347) 853-2249</a>
              <span style={{ fontWeight: 400 }}> | Homestead, Florida.</span>
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
