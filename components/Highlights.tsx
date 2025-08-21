"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const data = [
  {
    emoji: "🏆",
    title: "20+ Years of Excellence",
    desc: "Shaping future leaders with pride and passion.",
  },
  {
    emoji: "🏫",
    title: "State-of-the-Art Facilities",
    desc: "Modern labs, library, and sports facilities.",
  },
  {
    emoji: "👩‍🏫",
    title: "Expert Faculty",
    desc: "Dedicated and experienced teachers.",
  },
];

export default function Highlights() {
  return (
    <section className="py-10 md:py-16 bg-white relative overflow-hidden">
      {/* Decorative lines only visible on md+ screens */}
      <Image
        src="/images/line.png"
        alt="Decorative line"
        width={700}
        height={650}
        className="absolute hidden md:block right-0 top-10 w-full max-w-[500px] opacity-70"
      />
      <Image
        src="/images/line2.png"
        alt="Decorative line"
        width={700}
        height={650}
        className="absolute hidden md:block left-0 top-0 w-full max-w-[500px] opacity-70"
      />

      <div className="container mx-auto px-4 relative z-[9] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 text-center">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="p-4 md:p-6 rounded-xl shadow-sm border border-gray-200 bg-gradient-to-b from-[#F9FAFB] to-white hover:shadow-md transition-all"
          >
            <div className="text-3xl md:text-5xl mb-3">{item.emoji}</div>
            <h3 className="text-lg md:text-2xl font-bold text-[#1E3A8A] mb-2 leading-snug">
              {item.title}
            </h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              {item.desc}
            </p>
            <div className="mt-3 md:mt-4 text-yellow-400 text-base md:text-lg">
              {"★".repeat(5)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
