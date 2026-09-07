'use client';

import { useState } from 'react';
import Link from 'next/link';

const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", 
  "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", 
  "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", 
  "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", 
  "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", 
  "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", 
  "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    bestTime: 'Morning',
    lessonType: 'One on One Lesson',
    state: 'Florida',
    agree: true
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl">
      {/* Exact Subtitles */}
      <h3 className="text-xl font-bold text-white uppercase tracking-wide">
        Secure Your Strategic Advantage:
      </h3>
      <p className="text-sm text-[#BC8914] font-semibold mt-1 mb-6">
        Contact South Florida’s Premier Firearms Experts Today.
      </p>

      {submitted ? (
        <div className="p-6 rounded-xl bg-emerald-950/50 border border-emerald-500/40 text-center space-y-3">
          <h4 className="text-lg font-bold text-white">Thank You!</h4>
          <p className="text-sm text-emerald-200">
            Your request has been submitted. Instructor Todd or Paul will contact you shortly.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs text-[#BC8914] underline hover:text-white"
          >
            Submit another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5 text-sm">
          {/* Full Name */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded bg-[#0a0a0a] border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[#BC8914]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Phone */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="(561) 000-0000"
                className="w-full px-4 py-3 rounded bg-[#0a0a0a] border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[#BC8914]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@example.com"
                className="w-full px-4 py-3 rounded bg-[#0a0a0a] border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[#BC8914]"
              />
            </div>
          </div>

          {/* Best Time to Call */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">
              Best Time to Call
            </label>
            <div className="flex flex-wrap gap-4">
              {['Morning', 'Afternoon', 'Evening'].map((time) => (
                <label key={time} className="flex items-center gap-2 cursor-pointer text-xs text-slate-300">
                  <input
                    type="radio"
                    name="bestTime"
                    value={time}
                    checked={formData.bestTime === time}
                    onChange={(e) => setFormData({ ...formData, bestTime: e.target.value })}
                    className="accent-[#BC8914]"
                  />
                  <span>{time}</span>
                </label>
              ))}
            </div>
          </div>

          {/* One on One Lesson or Group */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">
              One on One Lesson or Group
            </label>
            <div className="flex flex-wrap gap-4">
              {['One on One Lesson', 'Group'].map((type) => (
                <label key={type} className="flex items-center gap-2 cursor-pointer text-xs text-slate-300">
                  <input
                    type="radio"
                    name="lessonType"
                    value={type}
                    checked={formData.lessonType === type}
                    onChange={(e) => setFormData({ ...formData, lessonType: e.target.value })}
                    className="accent-[#BC8914]"
                  />
                  <span>{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Select State */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
              Select State
            </label>
            <select
              value={formData.state}
              onChange={(e) => setFormData({ ...formData, state: e.target.value })}
              className="w-full px-4 py-3 rounded bg-[#0a0a0a] border border-white/10 text-white focus:outline-none focus:border-[#BC8914]"
            >
              {US_STATES.map((s) => (
                <option key={s} value={s} className="bg-[#111111] text-white">
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Exact Consent Text from Live Site */}
          <div className="flex items-start gap-2 text-xs text-slate-400 leading-relaxed pt-2">
            <input
              type="checkbox"
              required
              checked={formData.agree}
              onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
              className="mt-1 accent-[#BC8914] cursor-pointer"
            />
            <span>
              By clicking &quot;Submit,&quot; I provide my electronic signature and authorize American Firearms Network to contact me at the phone number provided (including by call or text) for scheduling and to share information about training sessions. I acknowledge and agree to the{' '}
              <Link href="/privacy-policy" className="text-[#BC8914] underline">Privacy Policy</Link> and{' '}
              <Link href="/terms-of-service" className="text-[#BC8914] underline">Terms of Service</Link>.
            </span>
          </div>

          {/* Exact Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-4 rounded bg-[#BC8914] hover:bg-[#B1800F] text-black font-extrabold uppercase text-xs tracking-widest transition-colors shadow-lg"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
