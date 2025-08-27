"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade-out after 2.5s
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    // Navigate after 3s
    const timer = setTimeout(() => {
      localStorage.removeItem("adminToken");

      router.push("/admin-login");
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(fadeTimer);
      window.location.reload();
    };
    
  }, [router]);


  return (
    <div
      className={`bg-gray-50 min-h-screen transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <section className="relative bg-blue-900 h-screen text-white py-14 sm:py-18 px-4 sm:px-6 text-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/group.png"
            alt="Academics Background"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-900/70 to-blue-900/40"></div>
        </div>
        <div className="relative z-10 max-w-3xl sm:max-w-4xl mx-auto px-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6 leading-tight animate-bounce">
            Logging Out...
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-blue-100 px-2">
            Please wait while we securely log you out.
          </p>
        </div>
      </section>
    </div>
  );
}
