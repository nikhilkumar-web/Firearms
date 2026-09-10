import Link from 'next/link';

export const metadata = {
  title: "Disclosure | American Firearms Network",
  description: "Instructor certifications and legal disclosures for American Firearms Network.",
};

export default function DisclosurePage() {
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
            DISCLOSURE
          </h1>
        </div>
      </section>

      {/* 2. CLEAN READABLE DOCUMENT BODY */}
      <section className="py-[35px] sm:py-[55px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-[960px] mx-auto bg-white p-6 sm:p-12 md:p-14 rounded-xl border border-gray-200/90 shadow-sm text-[15.5px] sm:text-[16px] leading-[1.8] text-[#2b2b2b]">

          {/* INTRO */}
          <p className="text-[16px] sm:text-[17px] leading-[1.8] text-[#1a1a1a]">
            <span style={{ fontWeight: 400 }}>At </span>
            <b>The American Firearms Network</b>
            <span style={{ fontWeight: 400 }}> (AFN), our training is led by highly qualified, certified instructors committed to promoting safe, responsible, and effective firearms handling and self-defense education.</span>
          </p>

          <hr className="my-7 border-gray-200" />

          {/* TODD GRAMA */}
          <h2 
            className="text-[22px] sm:text-[25px] font-bold text-black mb-3"
            style={{ fontFamily: "'Gabarito', sans-serif" }}
          >
            <b>Todd Grama – Lead Instructor</b>
          </h2>
          <p className="mb-4 text-[#333333]">
            <span style={{ fontWeight: 400 }}>Todd brings extensive experience and multiple nationally recognized certifications to every session:</span>
          </p>

          <ul className="list-disc pl-6 space-y-2 mb-6 text-[#222222]">
            <li><b>Range Master Certified Instructor</b></li>
            <li><b>USCCA Certified Firearms Instructor</b></li>
            <li><b>USCCA Certified Range Safety Officer</b></li>
            <li><b>NRA Certified Firearms Instructor</b></li>
            <li><b>NRA Certified Pistol Instructor</b></li>
            <li><b>NRA Certified Shotgun Instructor</b></li>
            <li><b>NRA Certified Rifle Instructor</b></li>
            <li><b>NRA Certified Personal Protection In The Home Instructor</b></li>
            <li><b>NRA Certified Personal Protection Outside The Home Instructor</b></li>
            <li><b>NRA Chief Range Safety Officer</b></li>
            <li><b>Code 4 Armed Church Security Certified</b></li>
            <li><b>Licensed Florida Armed Security Officer</b></li>
            <li><span style={{ fontWeight: 400 }}>Featured Instructor on the YouTube Channel </span><b>“The American Firearms Network”</b></li>
          </ul>

          <p className="text-[#333333] mb-6">
            <span style={{ fontWeight: 400 }}>These certifications qualify Todd to teach foundational and advanced firearms safety, marksmanship, concealed carry fundamentals, personal protection strategies, and range operations in accordance with the standards of the NRA, USCCA, Range Master, and other issuing organizations.</span>
          </p>

          <hr className="my-7 border-gray-200" />

          {/* PAUL GAYLE */}
          <h2 
            className="text-[22px] sm:text-[25px] font-bold text-black mb-3"
            style={{ fontFamily: "'Gabarito', sans-serif" }}
          >
            <b>Paul Gayle – Instructor</b>
          </h2>
          <p className="mb-4 text-[#333333]">
            <span style={{ fontWeight: 400 }}>Mr. Paul Gayle (Instructor #2959538 – American Firearms Network / Earthly Shield Securities)</span>
          </p>

          <ul className="list-disc pl-6 space-y-2 mb-4 text-[#222222]">
            <li>
              <b>USCCA Certified Instructor</b>
              <span style={{ fontWeight: 400 }}> (Certified since October 20, 2022; Renewal Date: October 21, 2026)</span>
              <ul className="list-circle pl-6 mt-1 space-y-1">
                <li>
                  <span style={{ fontWeight: 400 }}>Specializing in </span>
                  <b>Concealed Carry &amp; Home Defense Fundamentals</b>
                </li>
              </ul>
            </li>
          </ul>

          <p className="mb-4 text-[#222222]">
            <b>Contact:</b>
            <span style={{ fontWeight: 400 }}> </span>
            <a href="mailto:gaylefurniture@gmail.com" className="text-[#AA8802] hover:underline">gaylefurniture@gmail.com</a>
            <span style={{ fontWeight: 400 }}> | </span>
            <a href="tel:561-225-8615" className="hover:text-[#AA8802]">561-225-8615</a>
            <span style={{ fontWeight: 400 }}> | West Palm Beach, FL</span>
          </p>

          <p className="font-bold text-black mb-2">
            <b>Biography Highlights:</b>
          </p>

          <ul className="list-disc pl-6 space-y-2 mb-6 text-[#222222]">
            <li><span style={{ fontWeight: 400 }}>USCCA Instructor trained by Coach Jose Fernandez (USCCA Training Instructor and RSO)</span></li>
            <li><span style={{ fontWeight: 400 }}>HTK Training Group Black Site Director</span></li>
            <li><span style={{ fontWeight: 400 }}>HTK Range Safety Officer</span></li>
            <li><span style={{ fontWeight: 400 }}>Chief Church/Community Security QRF Liaison</span></li>
            <li><span style={{ fontWeight: 400 }}>Judo Black Belt</span></li>
            <li><span style={{ fontWeight: 400 }}>Former amateur Body Builder</span></li>
            <li><span style={{ fontWeight: 400 }}>Focus areas: CCW, Constitutional Carry, Fun Safety, and community protection through American Firearms Network and Earthly Shield Securities</span></li>
          </ul>

          <p className="text-[#333333] mb-4">
            <span style={{ fontWeight: 400 }}>Paul’s USCCA certification (a “gold standard” in the industry) equips him to deliver practical, scenario-based training in concealed carry, home defense, and defensive pistol skills.</span>
          </p>

          <p className="text-[#555555] mb-6">
            <span style={{ fontWeight: 400 }}>All certifications are current as of the last revision date and subject to renewal requirements set by the issuing organizations.</span>
          </p>

          <hr className="my-7 border-gray-200" />

          {/* IMPORTANT "NO LEGAL ADVICE" DISCLOSURE */}
          <h2 
            className="text-[22px] sm:text-[25px] font-bold text-black mb-4"
            style={{ fontFamily: "'Gabarito', sans-serif" }}
          >
            <b>Important “No Legal Advice” Disclosure</b>
          </h2>

          <div className="space-y-4 text-[#2b2b2b]">
            <p>
              <b>All training, consultations, materials, discussions, and content provided by The American Firearms Network—including but not limited to classroom instruction, range sessions, guides, videos, YouTube content, or conversations about self-defense, use of force, concealed carry, Florida laws (e.g., § 776, Fla. Stat., Stand Your Ground), or any related topics—are provided strictly for general educational and informational purposes only.</b>
            </p>

            <p>
              <b>This information does NOT constitute legal advice, does NOT create an attorney-client relationship, and should NOT be relied upon as a substitute for personalized legal guidance.</b>
            </p>

            <p>
              <span style={{ fontWeight: 400 }}>Firearms laws, self-defense rights, use-of-force standards, and legal consequences are highly complex, fact-specific, subject to frequent changes through legislation and court decisions, and vary based on individual circumstances, jurisdiction, and evolving case law.</span>
            </p>

            <p>
              <span style={{ fontWeight: 400 }}>AFN instructors provide </span>
              <b>practical firearms training</b>
              <span style={{ fontWeight: 400 }}>, </span>
              <b>safety education</b>
              <span style={{ fontWeight: 400 }}>, and </span>
              <b>general awareness</b>
              <span style={{ fontWeight: 400 }}> of relevant concepts based on their certifications (NRA, USCCA, etc.). We do </span>
              <b>not</b>
              <span style={{ fontWeight: 400 }}> offer legal opinions, interpretations of statutes, advice on the lawfulness of specific actions, post-incident legal strategies, or guarantees regarding compliance with any law.</span>
            </p>

            <p>
              <b>You are strongly encouraged</b>
              <span style={{ fontWeight: 400 }}> to consult a licensed Florida attorney for advice tailored to your specific situation, especially regarding self-defense rights, carry laws, use-of-force scenarios, or potential legal outcomes.</span>
            </p>

            <p>
              <b>By accessing our website, materials, or services, you acknowledge and agree</b>
              <span style={{ fontWeight: 400 }}> that:</span>
            </p>

            <ul className="list-disc pl-6 space-y-2 mb-4 text-[#222222]">
              <li><span style={{ fontWeight: 400 }}>You will not hold AFN, its instructors (Todd Grama, Paul Gayle), owners, or affiliates liable for any decisions, actions, inactions, or outcomes based on our content or training.</span></li>
              <li><span style={{ fontWeight: 400 }}>You assume full personal responsibility for complying with all applicable federal, state, and local laws.</span></li>
            </ul>

            <p>
              <span style={{ fontWeight: 400 }}>Safety, responsibility, and lawful conduct start with you. We are proud to support responsible firearms education—train smart, stay informed through qualified professionals, and always prioritize the rules of safe gun handling.</span>
            </p>

            <hr className="my-6 border-gray-200" />

            <p className="text-[#333333]">
              <span style={{ fontWeight: 400 }}>For questions about our programs, instructor credentials, or to book training:</span>
            </p>
            <p className="font-medium text-[#111111]">
              <span style={{ fontWeight: 400 }}>
                <a href="mailto:info@americanfirearmsnetwork.com" className="text-[#AA8802] hover:underline">info@americanfirearmsnetwork.com</a>
                {" "}|{" "}
                <a href="tel:347-853-2249" className="hover:text-[#AA8802]">(347) 853-2249</a>
                {" "}| Homestead, Florida
              </span>
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
