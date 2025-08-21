"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-[#1E3A8A] text-white py-12 px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
        Join Our School Today
      </h2>
      <p className="mb-6 text-sm sm:text-base md:text-lg font-light max-w-2xl mx-auto">
        Enroll your child in a nurturing, academic, and creative environment.
      </p>
      <Link
        href="/applyform"
        className="inline-block bg-[#FBBF24] text-[#111827] px-5 sm:px-6 py-3 rounded-md font-semibold hover:bg-yellow-500 transition w-full sm:w-auto"
      >
        Apply Now
      </Link>
    </section>
  );
}
