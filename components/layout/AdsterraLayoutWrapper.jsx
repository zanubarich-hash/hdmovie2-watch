// components/layout/AdsterraLayoutWrapper.jsx
"use client";

import { useEffect, useRef } from 'react';
import { getAIOptimizer } from '../../utils/adsterra';

export default function AdsterraLayoutWrapper({ children, countryCode }) {
  const initialized = useRef(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && !initialized.current) {
        const optimizer = getAIOptimizer();
        if (optimizer) {
            optimizer.setGeo(countryCode);
        }

        const nativeContainer = document.getElementById('container-ffe26a7a84cd3722c905ac346ea4d0b1');

        const visibleAds = [
            { id: 'native', src: '//fundingfashioned.com/ffe26a7a84cd3722c905ac346ea4d0b1/invoke.js' },
            { id: 'social', src: '//fundingfashioned.com/b5/a7/d5/b5a7d5721325c684a0344048466737f7.js' }
        ];

        visibleAds.forEach(s => {
            if(document.querySelector(`script[src="${s.src}"]`)) return;
            const el = document.createElement('script');
            el.src = s.src;
            el.async = true;
            
            // PERBAIKAN: Masukkan script native ke kontainer footer jika ada
            if (s.id === 'native' && nativeContainer) {
                nativeContainer.appendChild(el);
            } else {
                document.body.appendChild(el);
            }
        });

        setTimeout(() => {
            if(document.querySelector(`script[src*="f0fb282e5a3c63871db3461e8c6d0f46"]`)) return;
            const popunder = document.createElement('script');
            popunder.src = '//fundingfashioned.com/f0/fb/28/f0fb282e5a3c63871db3461e8c6d0f46.js'; 
            document.head.appendChild(popunder);
        }, 3500);

        initialized.current = true;
    }
  }, [countryCode]);

  return <>{children}</>;
}