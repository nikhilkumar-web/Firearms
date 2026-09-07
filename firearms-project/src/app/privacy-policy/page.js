import Link from 'next/link';

export const metadata = {
  title: "Privacy Policy | American Firearms Network",
  description: "Privacy Policy for American Firearms Network training programs and digital communications.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#080a0e] text-slate-100 min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          PRIVACY POLICY
        </h1>
        <p className="text-xs text-slate-400">Last updated: February 2026</p>

        <div className="tactical-glass-card rounded-2xl p-8 border border-white/10 space-y-6 text-sm text-slate-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white uppercase tracking-wider text-[#f5b942]">
              1. Information We Collect
            </h2>
            <p>
              American Firearms Network collects personal information provided directly by you when you fill out our consultation and scheduling forms, including your full name, telephone number, email address, training goals, and preferred session times.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white uppercase tracking-wider text-[#f5b942]">
              2. How We Use Your Information
            </h2>
            <p>
              Your contact information is used strictly to coordinate firearms instruction sessions, evaluate prerequisites, schedule range bay time at partner facilities, and answer inquiries regarding Florida concealed carry qualifications.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white uppercase tracking-wider text-[#f5b942]">
              3. SMS & Telephone Communications
            </h2>
            <p>
              By submitting a consultation request and checking the authorization box, you authorize American Firearms Network to contact you via telephone or SMS message regarding your scheduled training. We never sell, rent, or trade your personal contact details to third-party telemarketers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white uppercase tracking-wider text-[#f5b942]">
              4. Contact Us
            </h2>
            <p>
              For privacy-related inquiries, please email{' '}
              <a href="mailto:todd@firearmslearning.com" className="text-[#f5b942] underline">
                todd@firearmslearning.com
              </a>{' '}
              or call 347-853-2249.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
