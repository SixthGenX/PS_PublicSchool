"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-900 to-blue-700 text-white text-center px-6">
      <h1 className="text-6xl font-bold">404</h1>
      <h2 className="text-2xl sm:text-3xl font-semibold mt-4">Page Not Found</h2>
      <p className="text-blue-100 mt-3 max-w-md">
        Oops! The page you&apos;re looking for doesn’t exist or has been moved.
      </p>

      <div className="mt-8 flex gap-4">
        <Link
          href="/"
          className="bg-white text-blue-900 px-5 py-2 rounded-lg font-semibold shadow-md hover:bg-blue-100 transition"
        >
          Go to Home
        </Link>
        <Link
          href="/contact"
          className="bg-transparent border border-white px-5 py-2 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
