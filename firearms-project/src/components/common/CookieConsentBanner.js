"use client";

import { useState } from "react";
import Link from "next/link";

export default function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(true);

  const handleAcceptAll = () => {
    setShowBanner(false);
  };

  const handleReject = () => {
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      role="region"
      aria-label="Cookie Consent"
      className="fixed bottom-4 left-4 right-4 sm:right-auto sm:left-6 sm:bottom-6 z-[99999] max-w-[480px] bg-white rounded-xl border border-gray-200 shadow-[0_10px_35px_rgba(0,0,0,0.25)] p-5 sm:p-6 font-roboto animate-in fade-in slide-in-from-bottom-6 duration-300"
      style={{
        boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
      }}
    >
      <div className="flex items-start justify-between gap-3 mb-2.5">
        <div className="flex items-center gap-2.5">
          <span className="text-2xl" role="img" aria-label="Cookie">
            🍪
          </span>
          <h3 className="text-[17px] sm:text-[18px] font-bold text-[#111111] leading-tight">
            We Value Your Privacy
          </h3>
        </div>

        {/* Close X (Dismiss / Reject) */}
        <button
          type="button"
          onClick={handleReject}
          aria-label="Dismiss cookie banner"
          className="text-gray-400 hover:text-black transition-colors p-1 -mr-1 -mt-1 cursor-pointer"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Description text */}
      <p className="text-[13.5px] leading-[22px] text-[#444444] mb-4">
        We use cookies to personalize your experience, analyze site traffic, and optimize our training services. By clicking &quot;Accept All&quot;, you consent to our use of cookies.
        {" "}
        <Link
          href="/privacy-policy"
          className="text-[#AA8802] hover:underline whitespace-nowrap font-medium"
        >
          Privacy Policy
        </Link>
      </p>

      {/* Buttons */}
      <div className="flex items-center gap-3 pt-1">
        <button
          type="button"
          onClick={handleReject}
          className="flex-1 py-2.5 px-4 text-center border border-gray-300 hover:border-black text-[#222222] hover:text-black rounded-lg text-[13.5px] font-semibold transition-all cursor-pointer bg-transparent hover:bg-gray-50"
        >
          Reject
        </button>

        <button
          type="button"
          onClick={handleAcceptAll}
          style={{
            backgroundImage: "linear-gradient(219deg, #B1800F 0%, #000000 67%)",
          }}
          className="flex-1 py-2.5 px-4 text-center text-white rounded-lg text-[13.5px] font-semibold shadow-md hover:brightness-110 transition-all cursor-pointer border border-[#B1800F]"
        >
          Accept All
        </button>
      </div>
    </div>
  );
}
