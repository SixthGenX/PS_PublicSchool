"use client";

export default function CTASection() {
  return (
    <section className="bg-[#1E3A8A] text-white py-10 md:py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">Join Our School Today</h2>
      <p className="mb-6">Enroll your child in a nurturing, academic, and creative environment.</p>
      <a
        href="/admissions"
        className="bg-[#FBBF24] text-[#111827] px-6 py-3 rounded-md font-semibold hover:bg-yellow-500 transition"
      >
        Apply Now 
      </a>
    </section>
  );
}
