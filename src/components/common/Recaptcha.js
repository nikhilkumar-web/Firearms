'use client';

import { useEffect, useRef, useState } from 'react';

const SCRIPT_ID = 'google-recaptcha-api';
const READY_EVENT = 'google-recaptcha-ready';

function loadRecaptcha() {
  if (window.grecaptcha?.render) return Promise.resolve();

  return new Promise((resolve, reject) => {
    const handleReady = () => resolve();
    window.addEventListener(READY_EVENT, handleReady, { once: true });

    let script = document.getElementById(SCRIPT_ID);
    if (!script) {
      window.__onRecaptchaLoad = () => window.dispatchEvent(new Event(READY_EVENT));
      script = document.createElement('script');
      script.id = SCRIPT_ID;
      script.src = 'https://www.google.com/recaptcha/api.js?onload=__onRecaptchaLoad&render=explicit';
      script.async = true;
      script.defer = true;
      script.onerror = () => reject(new Error('reCAPTCHA could not be loaded.'));
      document.head.appendChild(script);
    }
  });
}

export default function Recaptcha({ onChange, className = '' }) {
  const elementRef = useRef(null);
  const widgetIdRef = useRef(null);
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const [loadError, setLoadError] = useState(() =>
    siteKey ? '' : 'reCAPTCHA is not configured. Please try again later.'
  );

  useEffect(() => {
    if (!siteKey) {
      return;
    }

    let cancelled = false;
    loadRecaptcha()
      .then(() => {
        if (cancelled || !elementRef.current || widgetIdRef.current !== null) return;
        widgetIdRef.current = window.grecaptcha.render(elementRef.current, {
          sitekey: siteKey,
          callback: onChange,
          'expired-callback': () => onChange(''),
          'error-callback': () => onChange(''),
        });
      })
      .catch((error) => {
        if (!cancelled) setLoadError(error.message);
      });

    return () => {
      cancelled = true;
      if (widgetIdRef.current !== null && window.grecaptcha?.reset) {
        window.grecaptcha.reset(widgetIdRef.current);
      }
    };
  }, [siteKey, onChange]);

  if (loadError) {
    return <p role="alert" className="text-sm text-red-600 mb-3">{loadError}</p>;
  }

  return <div ref={elementRef} className={`flex justify-start mb-4 max-w-full overflow-x-auto ${className}`.trim()} />;
}
