'use client';

import { useEffect } from 'react';

export default function BodyThemeFix({ color = '#0B0C0E' }) {
  useEffect(() => {
    const prevBg = document.body.style.backgroundColor;
    document.body.style.backgroundColor = color;
    document.documentElement.style.backgroundColor = color;

    return () => {
      document.body.style.backgroundColor = prevBg;
      document.documentElement.style.backgroundColor = '';
    };
  }, [color]);

  return (
    <style>{`
      body, html {
        background-color: ${color} !important;
      }
    `}</style>
  );
}
