'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { X, Check, Loader2 } from 'lucide-react';
import { US_STATES, getCitiesForState } from '@/data/locations';
import Recaptcha from '@/components/common/Recaptcha';

export default function ContactPopupModal({ isOpen, onClose }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    timeToCall: '',
    lessonType: '',
    state: '',
    city: '',
    remarks: ''
  });

  const availableCities = getCitiesForState(formData.state);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [recaptchaToken, setRecaptchaToken] = useState('');
  const handleRecaptchaChange = useCallback((token) => setRecaptchaToken(token), []);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'state') {
      setFormData((prev) => ({
        ...prev,
        state: value,
        city: '',
      }));
    } else if (name === 'name') {
      const cleaned = value.replace(/[^a-zA-Z\s]/g, '');
      setFormData((prev) => ({
        ...prev,
        name: cleaned,
      }));
    } else if (name === 'phone') {
      const cleaned = value.replace(/\D/g, '').slice(0, 10);
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
        body: JSON.stringify({ ...formData, recaptchaToken, source: 'contact-popup' }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Unable to submit your request.');
      }

      setIsSubmitting(false);
      setSubmitted(true);
      if (onClose) onClose();
      router.push('/thank-you');
    } catch (error) {
      setIsSubmitting(false);
      setSubmitError(error.message || 'Unable to submit your request.');
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[999999] flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.60)' }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      {/* Exact 1:1 Light Box Theme Container (Theme 2328 / Elementor pum-2779) */}
      <div 
        className="relative w-full max-w-[640px] bg-white my-auto transition-all animate-in fade-in zoom-in-95 duration-200"
        style={{
          border: '8px solid #000000',
          borderRadius: '4px',
          boxShadow: '0px 0px 30px 0px rgba(2, 2, 2, 1.00)',
          backgroundColor: '#FFFFFF',
          padding: '28px 24px 30px 24px'
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Contact Consultation Popup"
      >
        {/* Exact Close Button from Live Theme (.pum-content + .pum-close) */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute flex items-center justify-center cursor-pointer transition-transform hover:scale-110 z-50 group"
          style={{
            position: 'absolute',
            height: '28px',
            width: '28px',
            right: '-14px',
            top: '-14px',
            padding: '0px',
            color: '#ffffff',
            border: '2px solid #ffffff',
            borderRadius: '28px',
            boxShadow: '0px 0px 15px 1px rgba(2, 2, 2, 0.75)',
            backgroundColor: '#000000'
          }}
        >
          <X className="w-4 h-4 stroke-[2.8] text-white" />
        </button>

        {submitted ? (
          <div className="py-12 px-4 text-center">
            <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>
            <h3 
              className="text-2xl font-bold text-gray-900 mb-2"
              style={{ fontFamily: "'Gabarito', sans-serif" }}
            >
              Thank You!
            </h3>
            <p className="text-gray-600 text-sm max-w-md mx-auto mb-6">
              Your consultation request has been submitted successfully. One of our certified instructors will contact you at your preferred time.
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
                  city: '',
                  remarks: ''
                });
                onClose();
              }}
              className="px-6 py-2.5 bg-black text-white text-sm font-semibold rounded-[5px] hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 font-roboto">
            
            {/* Row 1: Name & Phone Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  required
                  pattern="^[a-zA-Z\s]+$"
                  title="Name should only contain letters"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full h-[52px] px-[14px] border border-[#d1d1d1] rounded-[5px] bg-[#fcfcfc] text-[16px] text-black placeholder:text-[#777777] focus:outline-none focus:border-black focus:bg-white transition-all shadow-none"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  required
                  inputMode="numeric"
                  maxLength={10}
                  pattern="[0-9]{10}"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number (10 digits)"
                  className="w-full h-[52px] px-[14px] border border-[#d1d1d1] rounded-[5px] bg-[#fcfcfc] text-[16px] text-black placeholder:text-[#777777] focus:outline-none focus:border-black focus:bg-white transition-all shadow-none"
                />
              </div>
            </div>

            {/* Row 2: Best Time to Call & Lesson Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              <div>
                <select
                  name="timeToCall"
                  value={formData.timeToCall}
                  onChange={handleChange}
                  className="w-full h-[52px] px-[14px] border border-[#d1d1d1] rounded-[5px] bg-[#fcfcfc] text-[16px] text-black focus:outline-none focus:border-black focus:bg-white transition-all shadow-none cursor-pointer"
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
                  className="w-full h-[52px] px-[14px] border border-[#d1d1d1] rounded-[5px] bg-[#fcfcfc] text-[16px] text-black focus:outline-none focus:border-black focus:bg-white transition-all shadow-none cursor-pointer"
                >
                  <option value="">One on One Lesson or Group</option>
                  <option value="One on One Lesson">One on One Lesson</option>
                  <option value="Group">Group</option>
                </select>
              </div>
            </div>

            {/* Row 3: Select State & Select City */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              <div>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full h-[52px] px-[14px] border border-[#d1d1d1] rounded-[5px] bg-[#fcfcfc] text-[16px] text-black focus:outline-none focus:border-black focus:bg-white transition-all shadow-none cursor-pointer"
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
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full h-[52px] px-[14px] border border-[#d1d1d1] rounded-[5px] bg-[#fcfcfc] text-[16px] text-black focus:outline-none focus:border-black focus:bg-white transition-all shadow-none cursor-pointer"
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

            {/* Row 4: Any Remarks? Textarea (Spacious 10 rows like live CF7) */}
            <div>
              <textarea
                name="remarks"
                rows={10}
                value={formData.remarks}
                onChange={handleChange}
                placeholder="Any Remarks?"
                className="w-full h-[230px] sm:h-[250px] p-[16px] border border-[#d1d1d1] rounded-[5px] bg-[#fcfcfc] text-[16px] text-black placeholder:text-[#777777] focus:outline-none focus:border-black focus:bg-white transition-all shadow-none resize-y"
              />
            </div>

            <Recaptcha onChange={handleRecaptchaChange} />

            {/* Row 5: Submit Button */}
            <div className="pt-2 sm:pt-3">
              <button
                type="submit"
                disabled={isSubmitting}
              className="w-full h-[54px] bg-[#000000] text-white font-bold text-[18px] uppercase tracking-wider rounded-[5px] hover:bg-blue-600 disabled:hover:bg-[#000000] transition-colors cursor-pointer disabled:cursor-wait flex items-center justify-center shadow-md disabled:opacity-75"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    SUBMITTING...
                  </span>
                ) : (
                  'SUBMIT'
                )}
              </button>
            </div>

            {submitError && (
              <p role="alert" className="text-sm text-red-600 text-center">
                {submitError}
              </p>
            )}

            {/* Row 6: Consent Disclaimer */}
            <div className="consent-text text-[11.5px] sm:text-[12px] text-[#777777] mt-[14px] leading-[1.6] text-center">
              By clicking &quot;Submit,&quot; I provide my electronic signature and authorize American Firearms Network to contact me at the phone number provided (including by call or text) for scheduling and to share information about training sessions. I acknowledge and agree to the{' '}
              <Link href="/privacy-policy" onClick={onClose} className="text-[#000000] underline hover:opacity-80">
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link href="/terms-of-service" onClick={onClose} className="text-[#000000] underline hover:opacity-80">
                Terms of Service
              </Link>.
            </div>

          </form>
        )}
      </div>
    </div>
  );
}
