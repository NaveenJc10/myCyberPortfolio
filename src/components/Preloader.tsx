"use client";

import { Component } from '@/components/ui/sending-loader';
import { useState, useEffect } from 'react';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      // Wait at least 2.5 seconds before starting fade
      setTimeout(() => {
        setIsFading(true);
        // Remove preloader after fade completes
        setTimeout(() => setIsLoading(false), 1500);
      }, 2500);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gray-950 transition-all duration-[1500ms] ease-in-out ${
        isFading ? 'opacity-0 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'
      }`}
    >
      <Component text="Welcome..." />
    </div>
  );
}