import Link from 'next/link';

export const metadata = {
  title: "Firearm Safety & Educational Disclaimer | American Firearms Network",
  description: "The 10 rules of safe gun handling and educational safety disclaimer for American Firearms Network.",
};

export default function FirearmSafetyEducationalDisclaimerPage() {
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
            className="text-[26px] sm:text-[40px] font-bold uppercase text-white tracking-wide leading-tight"
            style={{ fontFamily: "'Gabarito', sans-serif" }}
          >
            FIREARM SAFETY &amp; EDUCATIONAL DISCLAIMER
          </h1>
        </div>
      </section>

      {/* 2. CLEAN READABLE DOCUMENT BODY */}
      <section className="py-[35px] sm:py-[55px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-[960px] mx-auto bg-white p-6 sm:p-12 md:p-14 rounded-xl border border-gray-200/90 shadow-sm text-[15.5px] sm:text-[16px] leading-[1.8] text-[#2b2b2b] space-y-6">

          {/* TOP PRIORITY */}
          <div>
            <h2 
              className="text-[22px] sm:text-[25px] font-bold text-black mb-3"
              style={{ fontFamily: "'Gabarito', sans-serif" }}
            >
              <strong>Firearm Safety is Our Top Priority</strong>
            </h2>
            <p className="mb-4 text-[#1a1a1a]">
              <span style={{ fontWeight: 400 }}>At The American Firearms Network (AFN), we are committed to promoting the safe, responsible, and lawful use of firearms. All participants in our training, consultations, and resources must adhere to fundamental safety principles at all times.</span>
            </p>

            <p className="font-bold text-black mb-3">
              <span style={{ fontWeight: 400 }}>The 10 Rules of Safe Gun Handling (adapted from the National Shooting Sports Foundation – NSSF):</span>
            </p>

            <ol className="list-decimal pl-6 space-y-2 mb-4 text-[#222222]">
              <li><span style={{ fontWeight: 400 }}>Treat every firearm as if it is loaded.</span></li>
              <li><span style={{ fontWeight: 400 }}>Never point the muzzle at anything you do not intend to destroy.</span></li>
              <li><span style={{ fontWeight: 400 }}>Keep your finger off the trigger until your sights are on the target and you are ready to shoot.</span></li>
              <li><span style={{ fontWeight: 400 }}>Be sure of your target and what is beyond it.</span></li>
              <li><span style={{ fontWeight: 400 }}>Keep firearms unloaded when not in use. Store firearms and ammunition separately and securely.</span></li>
              <li><span style={{ fontWeight: 400 }}>Never rely on mechanical safety as a substitute for safe gun handling.</span></li>
              <li><span style={{ fontWeight: 400 }}>Never cross obstacles or climb with a loaded firearm. Unload first if necessary.</span></li>
              <li><span style={{ fontWeight: 400 }}>Never pull or push a loaded firearm toward yourself or another person.</span></li>
              <li><span style={{ fontWeight: 400 }}>Wear proper eye and ear protection when shooting or in the vicinity of shooting activities.</span></li>
              <li><span style={{ fontWeight: 400 }}>Learn and follow the mechanical and handling characteristics of the specific firearm you are using.</span></li>
            </ol>

            <p className="text-[#333333]">
              <span style={{ fontWeight: 400 }}>These rules form the foundation of all AFN training sessions. Violation of any safety rule may result in immediate termination of participation without refund.</span>
            </p>
          </div>

          <hr className="my-6 border-gray-200" />

          {/* EDUCATIONAL & INFORMATIONAL PURPOSES */}
          <div>
            <h2 
              className="text-[22px] sm:text-[25px] font-bold text-black mb-3"
              style={{ fontFamily: "'Gabarito', sans-serif" }}
            >
              <b>Educational &amp; Informational Purposes Only – No Legal Advice</b>
            </h2>

            <div className="space-y-4 text-[#2b2b2b]">
              <p>
                <span style={{ fontWeight: 400 }}>All content provided by The American Firearms Network—including but not limited to the website (AMERICANFIREARMSNETWORK.COM), training materials, Handgun Ammunition Guide, YouTube videos, blog posts, consultations, discussions of Florida self-defense laws (e.g., use of force, Stand Your Ground, § 776, Fla. Stat.), concealed carry information, or any other resources—is furnished strictly for general educational and informational purposes only.</span>
              </p>

              <p>
                <b>This information does NOT constitute legal advice, does NOT create an attorney-client relationship, and should NOT be relied upon as a substitute for personalized guidance from a licensed Florida attorney.</b>
              </p>

              <p>
                <span style={{ fontWeight: 400 }}>Firearms laws, self-defense standards, use-of-force regulations, and legal interpretations are highly complex, fact-specific, subject to frequent change, and vary depending on individual circumstances, jurisdiction, and evolving case law. AFN instructors provide practical firearms training and general awareness of relevant concepts, but we do not offer legal representation, formal legal opinions, or guarantees regarding the lawfulness of any actions.</span>
              </p>

              <p>
                <span style={{ fontWeight: 400 }}>You are strongly encouraged to consult a qualified, licensed Florida attorney for advice tailored to your specific situation, especially regarding self-defense rights, carry laws, post-incident procedures, or any potential legal consequences.</span>
              </p>

              <p>
                <span style={{ fontWeight: 400 }}>By accessing our website, materials, or services, you acknowledge and agree that:</span>
              </p>

              <ul className="list-disc pl-6 space-y-2 mb-4 text-[#222222]">
                <li><span style={{ fontWeight: 400 }}>You will not hold AFN, its owners, instructors (including Todd and Paul), or affiliates liable for any decisions, actions, or outcomes based on our content.</span></li>
                <li><span style={{ fontWeight: 400 }}>You assume full responsibility for complying with all applicable federal, state, and local laws.</span></li>
              </ul>

              <p>
                <span style={{ fontWeight: 400 }}>Safety and responsibility start with you. Train smart, stay informed through qualified professionals, and always prioritize the rules above.</span>
              </p>

              <p className="pt-2">
                <b>For questions about our training programs or to book a session, contact us at <a href="mailto:info@americanfirearmsnetwork.com" className="text-[#AA8802] hover:underline">info@americanfirearmsnetwork.com</a> or <a href="tel:347-853-2249" className="text-[#AA8802] hover:underline">(347) 853-2249</a>.</b>
              </p>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
