"use client";

import Image from "next/image";

const images = [
  "/images/heroabout.jpg",
  "/images/heroabout.jpg",
  "/images/heroabout.jpg",
  "/images/heroabout.jpg",
  "/images/heroabout.jpg",
  "/images/heroabout.jpg",
];

export default function GallerySection() {
  return (
    <section className="bg-gray-50 py-10 md:py-14">
      <div className="container mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-[#1E3A8A] font-semibold uppercase tracking-wide mb-2">
            School Gallery
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Moments from Our Campus
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
            A glimpse into the vibrant life at PS Public School – where students
            learn, grow, and create lasting memories.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-xl shadow-lg"
            >
              <Image
                src={src}
                alt={`Gallery image ${idx + 1}`}
                width={500}
                height={350}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
