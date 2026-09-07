'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, CheckCircle, ArrowRight } from 'lucide-react';

const US_STATES = [
  "Florida", "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", 
  "Delaware", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", 
  "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", 
  "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", 
  "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", 
  "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", 
  "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];

export default function ConsultationForm({ preselectedType = 'One on One Lesson' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    bestTime: 'Morning',
    lessonType: preselectedType,
    state: 'Florida',
    message: '',
    agreeToTerms: true
  });

  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ state: 'loading', message: '' });

    setTimeout(() => {
      setStatus({
        state: 'success',
        message: 'Thank you! Your consultation request has been received. Instructor Todd or Paul will contact you shortly during your preferred time window.'
      });
    }, 1000);
  };

  return (
    <div className="tactical-glass-card rounded-2xl p-6 sm:p-10 border border-white/10 relative overflow-hidden">
      {/* Accent strip */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d99b26] via-[#f5b942] to-[#d99b26]"></div>

      <div className="mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d99b26]/10 border border-[#d99b26]/20 text-[#f5b942] text-xs font-semibold uppercase tracking-wider mb-2">
          <ShieldCheck className="w-3.5 h-3.5" />
          Direct Instructor Scheduling
        </div>
        <h3 className="text-2xl font-bold text-white">
          Contact South Florida&apos;s Premier Firearms Experts Today
        </h3>
        <p className="text-slate-400 text-xs sm:text-sm mt-1">
          Take the first step toward true defensive readiness. Fill out the form below for a personalized training consultation.
        </p>
      </div>

      {status.state === 'success' ? (
        <div className="p-8 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
            <CheckCircle className="w-10 h-10" />
          </div>
          <h4 className="text-xl font-bold text-white">Consultation Request Received!</h4>
          <p className="text-sm text-emerald-200/90 leading-relaxed max-w-md mx-auto">
            {status.message}
          </p>
          <div className="pt-2">
            <button
              onClick={() => {
                setStatus({ state: 'idle', message: '' });
                setFormData({
                  fullName: '',
                  phone: '',
                  email: '',
                  bestTime: 'Morning',
                  lessonType: 'One on One Lesson',
                  state: 'Florida',
                  message: '',
                  agreeToTerms: true
                });
              }}
              className="text-xs text-[#f5b942] underline hover:text-white"
            >
              Submit another request
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. John Miller"
                className="w-full px-4 py-3 rounded-lg bg-[#080b11] border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[#d99b26] text-sm"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="(561) 000-0000"
                className="w-full px-4 py-3 rounded-lg bg-[#080b11] border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[#d99b26] text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email Address */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@domain.com"
                className="w-full px-4 py-3 rounded-lg bg-[#080b11] border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[#d99b26] text-sm"
              />
            </div>

            {/* State Selection */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Select State *
              </label>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#080b11] border border-white/10 text-white focus:outline-none focus:border-[#d99b26] text-sm"
              >
                {US_STATES.map((s) => (
                  <option key={s} value={s} className="bg-[#0f141d] text-white">
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Best Time to Call */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Best Time to Call
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['Morning', 'Afternoon', 'Evening'].map((t) => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => setFormData(p => ({ ...p, bestTime: t }))}
                    className={`py-2 text-xs font-medium rounded-lg border transition-all ${
                      formData.bestTime === t
                        ? 'bg-[#d99b26]/20 border-[#d99b26] text-[#f5b942]'
                        : 'bg-[#080b11] border-white/10 text-slate-400 hover:border-white/20'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Lesson Format */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Lesson Format
              </label>
              <div className="grid grid-cols-2 gap-2">
                {['One on One Lesson', 'Group'].map((f) => (
                  <button
                    type="button"
                    key={f}
                    onClick={() => setFormData(p => ({ ...p, lessonType: f }))}
                    className={`py-2 text-xs font-medium rounded-lg border transition-all ${
                      formData.lessonType === f
                        ? 'bg-[#d99b26]/20 border-[#d99b26] text-[#f5b942]'
                        : 'bg-[#080b11] border-white/10 text-slate-400 hover:border-white/20'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              Training Goals / Experience Level (Optional)
            </label>
            <textarea
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="E.g., New gun owner seeking Florida CCW, holster draw mechanics, private mentorship..."
              className="w-full px-4 py-3 rounded-lg bg-[#080b11] border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[#d99b26] text-sm"
            ></textarea>
          </div>

          {/* Legal check */}
          <div className="flex items-start gap-3 text-[11px] text-slate-400 leading-normal">
            <input
              type="checkbox"
              id="agreeToTerms"
              name="agreeToTerms"
              required
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="mt-1 rounded accent-[#d99b26] cursor-pointer"
            />
            <label htmlFor="agreeToTerms" className="cursor-pointer">
              By clicking &quot;Submit&quot;, I provide my electronic signature and authorize American Firearms Network to contact me at the phone number provided (including by call or text) for scheduling and training sessions. I agree to the{' '}
              <Link href="/privacy-policy" className="text-[#f5b942] underline">Privacy Policy</Link> and{' '}
              <Link href="/terms-of-service" className="text-[#f5b942] underline">Terms of Service</Link>.
            </label>
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              disabled={status.state === 'loading'}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#d99b26] via-[#f5b942] to-[#b87b14] hover:opacity-95 text-black font-extrabold text-sm uppercase tracking-wider shadow-xl flex items-center justify-center gap-2 transition-transform active:scale-[0.99] disabled:opacity-50"
            >
              {status.state === 'loading' ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                  Processing Consultation...
                </span>
              ) : (
                <>
                  <span>Consult Today & Secure Your Spot</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
