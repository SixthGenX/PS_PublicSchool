"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-gray-50 py-8 md:py-16">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left Image */}
        <div className="overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/images/heroabout.jpg" // replace with your image path
            alt="Students learning together"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Right Text */}
        <div>
          <p className="text-blue-800 font-semibold uppercase tracking-wide mb-2">
            Discover About Us
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Nurturing Students for Success
          </h2>
          <p className="text-gray-600 mb-6 text-justify leading-relaxed">
            At PS Public School, we strive to create a nurturing and inspiring educational environment
            that empowers students to reach their full potential. Our school is dedicated to providing
            a holistic education that focuses on academic excellence, character development, and the
            cultivation of essential life skills.
          </p>
          <a
            href="/about"
            className="inline-block bg-blue-700 text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-blue-800 hover:scale-105 transition"
          >
            Start Learning
          </a>
        </div>

      </div>
     
    </section>
  );
}
