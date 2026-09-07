export const metadata = {
  title: "Disclosure & Safety Disclaimer | American Firearms Network",
  description: "Educational disclosures and safety disclaimers for American Firearms Network.",
};

export default function DisclosurePage() {
  return (
    <div className="bg-[#080a0e] text-slate-100 min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          FIREARM SAFETY & EDUCATIONAL DISCLAIMER
        </h1>

        <div className="tactical-glass-card rounded-2xl p-8 border border-white/10 space-y-6 text-sm text-slate-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white uppercase tracking-wider text-[#f5b942]">
              Legal & Educational Disclaimer
            </h2>
            <p>
              The content provided by American Firearms Network, both online and during instructional courses, is intended solely for educational, defensive marksmanship, and skill development purposes. It does not constitute formal legal counsel. For specific inquiries regarding Florida statutes or legal defense, consult an attorney licensed with the Florida Bar.
            </p>
          </section>


          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white uppercase tracking-wider text-[#f5b942]">
              Liability Waiver
            </h2>
            <p>
              Firearms training inherently carries mechanical and physical risks. All participants must execute a formal liability release and assumption of risk agreement prior to entering the firing line or engaging in combatives / tactical movement courses.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
