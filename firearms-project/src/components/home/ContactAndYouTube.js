'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { MapPin, CheckCircle } from 'lucide-react';
import Recaptcha from '@/components/common/Recaptcha';

import { US_STATES, getCitiesForState } from '@/data/locations';

const RIGHT_VIDEOS = [
  'ctpQE_j8vyg',
  'JdkoNyPqL5A',
  '3FJ-QV8-FFc',
  'mqybul_khzg'
];

export default function ContactAndYouTube() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    timeToCall: '',
    lessonType: '',
    state: '',
    cityLocation: '',
    remarks: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [recaptchaToken, setRecaptchaToken] = useState('');
  const handleRecaptchaChange = useCallback((token) => setRecaptchaToken(token), []);

  const availableCities = getCitiesForState(formData.state);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'state') {
      setFormData((prev) => ({
        ...prev,
        state: value,
        cityLocation: '',
      }));
    } else if (name === 'phone') {
      const cleaned = value.replace(/[^\d\s\-\(\)\+]/g, '').slice(0, 16);
      setFormData((prev) => ({
        ...prev,
        phone: cleaned,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    const nameTrimmed = formData.name.trim();
    if (nameTrimmed.length < 2) {
      setIsSubmitting(false);
      setSubmitError('Please enter your name.');
      return;
    }

    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      setIsSubmitting(false);
      setSubmitError('Please enter a valid 10-digit phone number.');
      return;
    }

    if (!recaptchaToken) {
      setIsSubmitting(false);
      setSubmitError('Please complete the reCAPTCHA challenge.');
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, recaptchaToken, source: 'home-page' }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Unable to submit your request.');
      }

      setIsSubmitting(false);
      setSubmitted(true);
      router.push('/thank-you');
    } catch (error) {
      setIsSubmitting(false);
      setSubmitError(error.message || 'Unable to submit your request.');
    }
  };

  return (
    <section className="bg-[#FFFFFF] text-[#000000] pt-[30px] sm:pt-[50px] pb-[50px] px-3 sm:px-6 lg:px-8 font-roboto">
      <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row gap-[20px] items-stretch">
        
        {/* LEFT COLUMN: Icon Box + Contact Form + Map (Elementor 3d9bad7 - 64.153%) */}
        <div 
          className="w-full lg:w-[64.153%] bg-[#FFFFFF] p-4 sm:p-7 rounded-[15px] flex flex-col justify-between"
          style={{
            boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.3)'
          }}
        >
          {/* Icon Box (Elementor 992bd0a) */}
          <div className="text-center mb-6">
            <div 
              className="w-[48px] h-[48px] rounded-full mx-auto flex items-center justify-center mb-3 text-black shadow-sm"
              style={{ backgroundColor: '#BE8915' }}
            >
              <MapPin className="w-5 h-5 stroke-[2.2]" />
            </div>
            <h3 
              className="text-[22px] sm:text-[30px] font-semibold text-[#000000] leading-[28px] sm:leading-[38px] mb-[7px] break-words"
              style={{ fontFamily: "'Gabarito', sans-serif" }}
            >
              Secure Your Strategic Advantage:
            </h3>
            <p className="text-[14px] sm:text-[16px] font-medium text-[#000000]">
              Contact South Florida’s Premier Firearms Experts Today.
            </p>
          </div>

          {/* Contact Form 7 Grid (Elementor ef1fe0a) */}
          <div className="max-w-[800px] mx-auto w-full flex-1 flex flex-col justify-between">
            {submitted ? (
              <div className="p-8 text-center bg-[#f7faf7] border border-green-200 rounded-[10px] my-6">
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <h4 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Gabarito', sans-serif" }}>
                  Thank You For Reaching Out!
                </h4>
                <p className="text-gray-600 text-sm max-w-md mx-auto">
                  Your information has been received. One of our certified instructors will contact you at your preferred time.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      phone: '',
                      timeToCall: '',
                      lessonType: '',
                      state: '',
                      cityLocation: '',
                      remarks: ''
                    });
                  }}
                  className="mt-5 px-6 py-2.5 bg-black text-white text-sm font-semibold rounded-[5px] hover:bg-zinc-800 transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="cf7-grid space-y-3 sm:space-y-4 flex-1 flex flex-col justify-between">
                {/* Row 1: Name & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      className="w-full h-[50px] px-[14px] border border-[#d1d1d1] rounded-[5px] bg-[#fcfcfc] text-[16px] text-black placeholder:text-black placeholder:text-[14px] focus:outline-none focus:border-black focus:bg-white transition-all shadow-none"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      required
                      inputMode="numeric"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number (10 digits)"
                      className="w-full h-[50px] px-[14px] border border-[#d1d1d1] rounded-[5px] bg-[#fcfcfc] text-[16px] text-black placeholder:text-black placeholder:text-[14px] focus:outline-none focus:border-black focus:bg-white transition-all shadow-none"
                    />
                  </div>
                </div>

                {/* Row 2: Best Time to Call & Lesson Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <select
                      name="timeToCall"
                      value={formData.timeToCall}
                      onChange={handleChange}
                      className="w-full h-[50px] px-[14px] border border-[#d1d1d1] rounded-[5px] bg-[#fcfcfc] text-[15px] sm:text-[16px] text-black focus:outline-none focus:border-black focus:bg-white transition-all shadow-none cursor-pointer"
                    >
                      <option value="">Best Time to Call</option>
                      <option value="Morning">Morning</option>
                      <option value="Afternoon">Afternoon</option>
                      <option value="Evening">Evening</option>
                    </select>
                  </div>
                  <div>
                    <select
                      name="lessonType"
                      value={formData.lessonType}
                      onChange={handleChange}
                      className="w-full h-[50px] px-[14px] border border-[#d1d1d1] rounded-[5px] bg-[#fcfcfc] text-[15px] sm:text-[16px] text-black focus:outline-none focus:border-black focus:bg-white transition-all shadow-none cursor-pointer"
                    >
                      <option value="">One on One Lesson or Group</option>
                      <option value="One on One Lesson">One on One Lesson</option>
                      <option value="Group">Group</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: Select State & City / Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full h-[50px] px-[14px] border border-[#d1d1d1] rounded-[5px] bg-[#fcfcfc] text-[15px] sm:text-[16px] text-black focus:outline-none focus:border-black focus:bg-white transition-all shadow-none cursor-pointer"
                    >
                      <option value="">Select State</option>
                      {US_STATES.map((st) => (
                        <option key={st} value={st}>
                          {st}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <select
                      name="cityLocation"
                      value={formData.cityLocation}
                      onChange={handleChange}
                      className="w-full h-[50px] px-[14px] border border-[#d1d1d1] rounded-[5px] bg-[#fcfcfc] text-[15px] sm:text-[16px] text-black focus:outline-none focus:border-black focus:bg-white transition-all shadow-none cursor-pointer"
                    >
                      <option value="">{formData.state ? 'Select City' : 'Select state first'}</option>
                      {availableCities.map((ct) => (
                        <option key={ct} value={ct}>
                          {ct}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 4: Remarks Textarea */}
                <div className="flex-1 flex flex-col min-h-[176px]">
                  <textarea
                    name="remarks"
                    rows={6}
                    value={formData.remarks}
                    onChange={handleChange}
                    placeholder="Any Remarks?"
                    className="w-full flex-1 min-h-[176px] p-[14px] border border-[#d1d1d1] rounded-[5px] bg-[#fcfcfc] text-[16px] text-black placeholder:text-black placeholder:text-[14px] focus:outline-none focus:border-black focus:bg-white transition-all shadow-none resize-y"
                  />
                </div>

                {/* Row 5: Submit Area */}
                <div className="pt-1">
                  <Recaptcha onChange={handleRecaptchaChange} />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-[16px] bg-[#000000] text-[#FFFFFF] font-bold text-[18px] uppercase tracking-wider rounded-[5px] hover:bg-blue-600 disabled:hover:bg-[#000000] transition-colors cursor-pointer disabled:cursor-wait flex items-center justify-center shadow-md disabled:opacity-75"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                  {submitError && (
                    <p role="alert" className="mt-3 text-center text-sm font-medium text-red-600">
                      {submitError}
                    </p>
                  )}
                  <div className="text-[12px] text-[#777777] mt-[15px] leading-[1.6] text-center">
                    By clicking &quot;Submit,&quot; I provide my electronic signature and authorize American Firearms Network to contact me at the phone number provided (including by call or text) for scheduling and to share information about training sessions. I acknowledge and agree to the{' '}
                    <Link href="/privacy-policy" className="text-[#000000] underline hover:opacity-80">
                      Privacy Policy
                    </Link>{' '}
                    and{' '}
                    <Link href="/terms-of-service" className="text-[#000000] underline hover:opacity-80">
                      Terms of Service
                    </Link>.
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* Google Maps Embed (Elementor d0e9eda) */}
          <div 
            className="mt-[20px] sm:mt-[25px] rounded-[10px] overflow-hidden h-[211px] sm:h-[276px] w-full shrink-0"
            style={{
              boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.24)'
            }}
          >
            <iframe
              src="https://maps.google.com/maps?q=West%20Palm%20Beach%2C%20Florida&t=m&z=10&output=embed&iwloc=near"
              title="West Palm Beach, Florida"
              aria-label="West Palm Beach, Florida"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* RIGHT COLUMN: Subscribe to YouTube Channel (Elementor ac488f6 - 35.77%) */}
        <div 
          className="w-full lg:w-[35.77%] bg-[#FFFFFF] p-4 sm:p-7 rounded-[15px] flex flex-col justify-between"
          style={{
            boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.3)'
          }}
        >
          <div>
            {/* Heading (Elementor 723300b) */}
            <h2 
              className="text-[24px] sm:text-[28px] lg:text-[30px] font-semibold text-[#000000] text-center leading-[30px] sm:leading-[34px] lg:leading-[38px] mb-2"
              style={{ fontFamily: "'Gabarito', sans-serif" }}
            >
              Subscribe To Our Youtube Channel
            </h2>

            {/* 4 Video Cards */}
            <div className="space-y-[20px] mt-2">
              {RIGHT_VIDEOS.map((id, index) => (
                <div 
                  key={index}
                  className="w-full aspect-[16/9] rounded-[5px] overflow-hidden"
                  style={{
                    boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.6)'
                  }}
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${id}?rel=0`}
                    title={`YouTube video ${index + 1}`}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Subscribe Button (Elementor 9409aa5) */}
          <div className="pt-[15px] sm:pt-[20px] mt-auto text-center">
            <a
              href="https://www.youtube.com/@AMERICANFIREARMSNETWORKS?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tactical-red gap-2.5 px-[30px] lg:px-[40px] py-[12px] text-[15px] leading-[15px] font-medium text-white uppercase tracking-wider rounded-[3px]"
            >
              <span>SUBSCRIBE NOW</span>
              <svg 
                aria-hidden="true" 
                className="w-4 h-4 fill-current shrink-0" 
                viewBox="0 0 576 512" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.583V175.185l142.739 81.205-142.739 81.276z" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
