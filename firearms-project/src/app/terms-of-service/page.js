export const metadata = {
  title: "Terms of Service | American Firearms Network",
  description: "Terms of Service and training guidelines for American Firearms Network.",
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-[#080a0e] text-slate-100 min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          TERMS OF SERVICE
        </h1>
        <p className="text-xs text-slate-400">Last updated: February 2026</p>

        <div className="tactical-glass-card rounded-2xl p-8 border border-white/10 space-y-6 text-sm text-slate-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white uppercase tracking-wider text-[#f5b942]">
              1. Firearms Eligibility & Legal Compliance
            </h2>
            <p>
              Students enrolling in any live-fire course with American Firearms Network must be legally permitted to possess firearms and ammunition under federal and Florida state law. Prohibited persons, including convicted felons and individuals subject to domestic violence injunctions, are strictly barred from participation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white uppercase tracking-wider text-[#f5b942]">
              2. Absolute Range Safety Rules
            </h2>
            <p>
              Safety is our absolute paramount priority. Instructors enforce the 4 Universal Rules of Firearms Safety at all times. Any willful violation of safety commands, careless muzzle management, or failure to follow Range Safety Officer (RSO) instructions will result in immediate removal from the range with forfeiture of tuition fees.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white uppercase tracking-wider text-[#f5b942]">
              3. Partner Range Policies
            </h2>
            <p>
              AFN conducts classes at certified partner facilities across Florida. Students agree to abide by all individual facility safety bylaws, lane rules, and waivers in addition to AFN protocols.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
