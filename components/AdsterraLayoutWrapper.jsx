"use client";

import { useEffect } from 'react';

export default function AdsterraLayoutWrapper({ children }) {
  useEffect(() => {
    // Fungsi untuk memuat script iklan
    const loadAdScripts = () => {
      // Memuat skrip iklan Native Banner
      if (!document.querySelector('script[src*="ffe26a7a84cd3722c905ac346ea4d0b1"]')) {
        const nativeBannerScript = document.createElement('script');
        nativeBannerScript.src = "//fundingfashioned.com/ffe26a7a84cd3722c905ac346ea4d0b1/invoke.js";
        nativeBannerScript.async = true;
        nativeBannerScript.setAttribute('data-cfasync', 'false');
        document.body.appendChild(nativeBannerScript);
      }

      // Memuat skrip iklan Popunder
      if (!document.querySelector('script[src*="f0fb282e5a3c63871db3461e8c6d0f46"]')) {
        const popunderScript = document.createElement('script');
        popunderScript.type = 'text/javascript';
        popunderScript.src = "//fundingfashioned.com/f0/fb/28/f0fb282e5a3c63871db3461e8c6d0f46.js";
        popunderScript.async = true;
        popunderScript.setAttribute('data-cfasync', 'false');
        document.body.appendChild(popunderScript);
      }

      // Memuat skrip iklan Social Bar
      if (!document.querySelector('script[src*="b5a7d5721325c684a0344048466737f7"]')) {
        const socialBarScript = document.createElement('script');
        socialBarScript.type = 'text/javascript';
        socialBarScript.src = "//fundingfashioned.com/b5/a7/d5/b5a7d5721325c684a0344048466737f7.js";
        socialBarScript.async = true;
        socialBarScript.setAttribute('data-cfasync', 'false');
        document.body.appendChild(socialBarScript);
      }
    };

    // Load scripts dengan delay untuk menghindari blocking
    const timer = setTimeout(loadAdScripts, 1000);

    return () => {
      clearTimeout(timer);
      // Tidak perlu menghapus script karena mereka akan menangani cleanup sendiri
      // dan menghapusnya bisa menyebabkan error
    };
  }, []);

  return <>{children}</>;
}