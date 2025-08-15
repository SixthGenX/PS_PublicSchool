"use client";

import Image from "next/image";

export default function SchoolInfo() {
  return (
    <section className="bg-white py-14 px-6 text-center border-b  border-gray-100 relative">
      <Image
        src="/images/line.png"
        alt="School Building"
        width={500}
        height={450}
        className="absolute w-full z-0 top-[50%] md:top-0"
      ></Image>

      
      <div className="max-w-3xl mx-auto ">
        {/* School Name */}
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
          PS Public School
        </h2>

        {/* Tagline */}
        <p className="mt-2 text-lg md:text-xl text-gray-600 font-medium">
          Inspiring Minds • Shaping Futures
        </p>

        {/* Description */}
        <p className="mt-5 text-gray-600 leading-relaxed">
          At PS Public School, we focus on nurturing curiosity, fostering
          creativity, and instilling strong values. Our classrooms blend modern
          teaching techniques with traditional principles, ensuring students
          excel academically and personally.
        </p>

        {/* CTA Button */}
        <a
          href="#admissions"
          className="mt-7 inline-block bg-blue-600 text-white px-6 py-2.5 rounded-full text-base font-medium hover:bg-blue-700 transition"
        >
          Start Learning
        </a>
      </div>
    </section>
  );
}
