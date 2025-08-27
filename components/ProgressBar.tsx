"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// Optional: Customize NProgress look
NProgress.configure({ showSpinner: false, speed: 400, minimum: 0.2 });

export default function ProgressBar() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;

    // Start immediately when path changes
    NProgress.start();

    // Complete after short delay (simulate network / data fetch)
    const timeout = setTimeout(() => {
      NProgress.done();
    }, 700); // tweak as needed

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
