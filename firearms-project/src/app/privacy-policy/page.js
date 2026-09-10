import Link from 'next/link';

export const metadata = {
  title: "Privacy Policy | American Firearms Network",
  description: "Privacy Policy for American Firearms Network training programs and digital communications.",
};

export default function PrivacyPolicyPage() {
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

        <div className="relative z-10 max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 
            className="text-[28px] sm:text-[42px] font-bold uppercase text-white tracking-wide leading-tight"
            style={{ fontFamily: "'Gabarito', sans-serif" }}
          >
            PRIVACY POLICY
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
                <b className="text-black font-semibold">Last Updated:</b>{' '}
                <span className="text-[#333333]">January 14, 2026</span>
              </span>
            </div>
          </div>

          {/* INTRO */}
          <div>
            <p className="text-[16px] sm:text-[17px] leading-[1.8] text-[#1a1a1a]">
              <span style={{ fontWeight: 400 }}>The American Firearms Network (“AFN,” “we,” “us,” or “our”) is committed to protecting the privacy and security of our users. This Privacy Policy outlines our rigorous standards for collecting, using, and safeguarding the personal information of our users in Homestead, Florida, and across the United States.</span>
            </p>
          </div>

          <hr className="my-6 border-gray-200" />

          {/* SECTION 1 */}
          <div>
            <h2 
              className="text-[20px] sm:text-[23px] font-bold text-black mb-3"
              style={{ fontFamily: "'Gabarito', sans-serif" }}
            >
              <b>1. INFORMATION WE COLLECT</b>
            </h2>
            <p className="mb-4">
              <span style={{ fontWeight: 400 }}>We collect several categories of information to provide professional firearms training, competitive events, and educational resources:</span>
            </p>

            <p className="font-bold text-black mb-2">
              <b>Personal Identifiable Information (PII):</b>
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-[#222222]">
              <li>
                <b>User-Provided Contact Details:</b>
                <span style={{ fontWeight: 400 }}> We collect information you voluntarily provide when submitting inquiries via our contact forms, including your </span>
                <b>Full Name</b>
                <span style={{ fontWeight: 400 }}>, </span>
                <b>Personal Email Address</b>
                <span style={{ fontWeight: 400 }}>, and </span>
                <b>Telephone Number</b>
                <span style={{ fontWeight: 400 }}>.</span>
              </li>
              <li>
                <b>Training &amp; Eligibility Data:</b>
                <span style={{ fontWeight: 400 }}> Information regarding your interest in specific courses, current firearm experience level, and age-verification data required for “Age-Gate” restricted events</span>
              </li>
            </ul>

            <p className="font-bold text-black mb-2">
              <b>Automatically Collected Technical Data:</b>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#222222]">
              <li>
                <b>Usage and Device Information:</b>
                <span style={{ fontWeight: 400 }}> We automatically collect data such as your IP address, browser type, operating system, access times, and referring website addresses to maintain the quality and security of our platform.</span>
              </li>
              <li>
                <b>Cookies and Tracking Technologies:</b>
                <span style={{ fontWeight: 400 }}> We utilize cookies and third-party analytics (such as Google and Facebook) to monitor site performance, manage marketing campaigns, and deliver customized content.</span>
              </li>
            </ul>
          </div>

          <hr className="my-6 border-gray-200" />

          {/* SECTION 2 */}
          <div>
            <h2 
              className="text-[20px] sm:text-[23px] font-bold text-black mb-3"
              style={{ fontFamily: "'Gabarito', sans-serif" }}
            >
              <b>2. HOW WE USE YOUR INFORMATION</b>
            </h2>
            <p className="mb-4">
              <span style={{ fontWeight: 400 }}>We process your data for specific, disclosed purposes based on legitimate business interests and legal obligations:</span>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#222222]">
              <li>
                <b>Service Fulfillment:</b>
                <span style={{ fontWeight: 400 }}> To respond to inquiries, schedule training sessions, and manage competition entries.</span>
              </li>
              <li>
                <b>Direct Marketing:</b>
                <span style={{ fontWeight: 400 }}> To inform you of new training programs, special offers, and latest content from our YouTube channel. </span>
                <b>You may opt out of these communications at any time</b>
                <span style={{ fontWeight: 400 }}>.</span>
              </li>
              <li>
                <b>Compliance and Safety:</b>
                <span style={{ fontWeight: 400 }}> To verify student eligibility for firearms handling under Florida and Federal laws, ensuring we do not provide training to “prohibited persons”.</span>
              </li>
            </ul>
          </div>

          <hr className="my-6 border-gray-200" />

          {/* SECTION 3 */}
          <div>
            <h2 
              className="text-[20px] sm:text-[23px] font-bold text-black mb-3"
              style={{ fontFamily: "'Gabarito', sans-serif" }}
            >
              <b>3. FLORIDA FIREARM OWNER PRIVACY PROTECTION (FS 790.335)</b>
            </h2>
            <p>
              <span style={{ fontWeight: 400 }}>In accordance with </span>
              <b>Florida Statute 790.335</b>
              <span style={{ fontWeight: 400 }}>, AFN does not knowingly or willfully maintain any list, record, or registry of privately owned firearms or their owners that is not expressly required by federal or state law for specific legal purposes. We respect and protect the privacy of law-abiding firearm owners as mandated by Florida’s strict privacy protections.</span>
            </p>
          </div>

          <hr className="my-6 border-gray-200" />

          {/* SECTION 4 */}
          <div>
            <h2 
              className="text-[20px] sm:text-[23px] font-bold text-black mb-3"
              style={{ fontFamily: "'Gabarito', sans-serif" }}
            >
              <b>4. DATA SHARING, DISCLOSURE, AND SALES</b>
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-[#222222]">
              <li>
                <b>No Sale of Personal Data:</b>
                <span style={{ fontWeight: 400 }}> AFN does </span>
                <b>not</b>
                <span style={{ fontWeight: 400 }}> sell, rent, or lease its customer lists to third parties.</span>
              </li>
              <li>
                <b>Third-Party Service Providers:</b>
                <span style={{ fontWeight: 400 }}> We may share data with trusted partners to perform statistical analysis, provide customer support, or manage communications. All such parties are contractually prohibited from using your personal information for any other purpose and are required to maintain strict confidentiality.</span>
              </li>
              <li>
                <b>Legal Disclosure:</b>
                <span style={{ fontWeight: 400 }}> We will disclose personal information, without notice, only if required by law or in the good faith belief that such action is necessary to comply with legal process or protect the safety of the public.</span>
              </li>
            </ul>
          </div>

          <hr className="my-6 border-gray-200" />

          {/* SECTION 5 */}
          <div>
            <h2 
              className="text-[20px] sm:text-[23px] font-bold text-black mb-3"
              style={{ fontFamily: "'Gabarito', sans-serif" }}
            >
              <b>5. YOUR RIGHTS AND OPT-OUT CHOICES</b>
            </h2>
            <p className="mb-4">
              <span style={{ fontWeight: 400 }}>Regardless of your location in the U.S., AFN provides you with comprehensive rights over your data:</span>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#222222]">
              <li>
                <b>Right to Know/Access:</b>
                <span style={{ fontWeight: 400 }}> You may request a report on the categories and specific pieces of personal data we have collected about you.</span>
              </li>
              <li>
                <b>Right to Correct/Delete:</b>
                <span style={{ fontWeight: 400 }}> You may request that we update inaccurate information or delete your personal data, subject to legal record-retention requirements for firearms training.</span>
              </li>
              <li>
                <b>Right to Opt-Out:</b>
                <span style={{ fontWeight: 400 }}> You may opt out of targeted advertising and marketing communications at any time.</span>
              </li>
              <li>
                <b>Non-Discrimination:</b>
                <span style={{ fontWeight: 400 }}> We will not discriminate against you for exercising any of your privacy rights.</span>
              </li>
            </ul>
          </div>

          <hr className="my-6 border-gray-200" />

          {/* SECTION 6 */}
          <div>
            <h2 
              className="text-[20px] sm:text-[23px] font-bold text-black mb-3"
              style={{ fontFamily: "'Gabarito', sans-serif" }}
            >
              <b>6. DATA SECURITY AND PROTECTION (FIPA COMPLIANCE)</b>
            </h2>
            <p>
              <span style={{ fontWeight: 400 }}>Pursuant to the </span>
              <b>Florida Information Protection Act (FIPA)</b>
              <span style={{ fontWeight: 400 }}>, we implement reasonable administrative, technical, and physical security measures—including SSL encryption and firewalls—to protect your personal information from unauthorized access, use, or disclosure. Only authorized employees or agents with a legitimate business purpose are granted access to your PII.</span>
            </p>
          </div>

          <hr className="my-6 border-gray-200" />

          {/* SECTION 7 */}
          <div>
            <h2 
              className="text-[20px] sm:text-[23px] font-bold text-black mb-3"
              style={{ fontFamily: "'Gabarito', sans-serif" }}
            >
              <b>7. CHILDREN’S PRIVACY (COPPA)</b>
            </h2>
            <p>
              <span style={{ fontWeight: 400 }}>Our website and services are intended for a general audience and do not knowingly collect personal information from children under the age of 18 (or 13 for COPPA compliance) without explicit parental consent. If we become aware that we have inadvertently collected such data, we will take immediate steps to delete it.</span>
            </p>
          </div>

          <hr className="my-6 border-gray-200" />

          {/* SECTION 8 */}
          <div>
            <h2 
              className="text-[20px] sm:text-[23px] font-bold text-black mb-3"
              style={{ fontFamily: "'Gabarito', sans-serif" }}
            >
              <b>8. CONTACT INFORMATION</b>
            </h2>
            <p className="mb-4">
              <span style={{ fontWeight: 400 }}>For questions, concerns, or to exercise your privacy rights, please contact us at:</span>
            </p>
            <p className="font-bold text-black">
              <b>The American Firearms Network</b>
            </p>
            <p className="mt-2 text-[#222222]">
              <b>Email:</b> <a href="mailto:info@americanfirearmsnetwork.com" className="text-[#AA8802] hover:underline font-medium"><span style={{ fontWeight: 400 }}>info@americanfirearmsnetwork.com</span></a>
            </p>
            <p className="mt-1 text-[#222222]">
              <b>Phone:</b> <a href="tel:347-853-2249" className="hover:text-[#AA8802] font-medium"><span style={{ fontWeight: 400 }}>(347) 853-2249</span></a>
            </p>
            <p className="mt-1 text-[#222222]">
              <b>Location:</b> <span style={{ fontWeight: 400 }}>Homestead, Florida</span>
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
