'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

export default function YouTubeSubscribeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already dismissed the modal in this session
    try {
      if (sessionStorage.getItem('yt_modal_dismissed') === 'true') {
        return;
      }
    } catch (e) {}

    const targetTime = Date.now() + 15000;

    const triggerModal = () => {
      try {
        if (sessionStorage.getItem('yt_modal_dismissed') === 'true') return;
      } catch (e) {}
      setIsOpen(true);
    };

    // 15 seconds timer
    let timer = setTimeout(triggerModal, 15000);

    // If tab is opened in background or user switches tabs, ensure timer triggers on active view
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        const remaining = targetTime - Date.now();
        if (remaining <= 0) {
          triggerModal();
        } else {
          clearTimeout(timer);
          timer = setTimeout(triggerModal, remaining);
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    // Allow manual open event if needed
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-youtube-popup', handleOpen);
    return () => window.removeEventListener('open-youtube-popup', handleOpen);
  }, []);

  // When user closes the modal:
  // Saves dismissal to sessionStorage so:
  // 1. REFRESH (F5) will NOT show it again in this tab
  // 2. Navigating pages will NOT show it again in this tab
  // 3. Opening a NEW TAB will still show it after 15 seconds
  const handleClose = () => {
    try {
      sessionStorage.setItem('yt_modal_dismissed', 'true');
    } catch (e) {}
    setIsOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-5 bg-black/70 backdrop-blur-[2px] transition-all duration-300"
      onClick={handleClose}
      aria-modal="true"
      role="dialog"
    >
      {/* Modal Card */}
      <div 
        className="relative bg-white shadow-2xl rounded-[3px] max-w-[620px] w-full p-2.5 sm:p-3.5 mx-auto overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
        style={{
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
        }}
      >
        {/* Black Square Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 z-30 w-7 h-7 sm:w-8 sm:h-8 bg-black hover:bg-neutral-800 text-white flex items-center justify-center cursor-pointer transition-colors shadow-md rounded-[2px]"
          aria-label="Close modal"
        >
          <X className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2.5]" />
        </button>

        {/* YouTube Subscribe Banner Link */}
        <a
          href="https://www.youtube.com/@AMERICANFIREARMSNETWORKS"
          target="_blank"
          rel="noopener noreferrer"
          className="block group overflow-hidden cursor-pointer"
          onClick={handleClose}
        >
          {/* Full un-obscured image */}
          <div className="relative w-full aspect-[16/9] overflow-hidden bg-neutral-100 rounded-[2px]">
            <Image
              src="https://american-firearms.s3-eu-central-2.ionoscloud.com/images/popup/youtube-subscribe-popup.jpeg"
              alt="Subscribe to The American Firearms Network on YouTube"
              fill
              className="object-cover group-hover:scale-[1.015] transition-transform duration-300"
              sizes="(max-width: 650px) 95vw, 620px"
              priority
            />
          </div>

          {/* "SUBSCRIBE NOW" Red Button positioned directly below the image */}
          <div className="pt-3 pb-1 text-center">
            <span
              style={{
                backgroundColor: '#EC062D',
                fontFamily: "'Roboto', sans-serif"
              }}
              className="inline-flex items-center justify-center px-6 sm:px-8 py-2 sm:py-2.5 text-white text-[13px] sm:text-[14px] font-bold uppercase tracking-wider rounded-[3px] shadow-md transition-all duration-200 group-hover:bg-[#CC0526] group-hover:scale-105"
            >
              SUBSCRIBE NOW
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}
