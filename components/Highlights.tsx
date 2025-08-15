"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const data = [
  { emoji: "🏆", title: "20+ Years of Excellence", desc: "Shaping future leaders with pride and passion." },
  { emoji: "🏫", title: "State-of-the-Art Facilities", desc: "Modern labs, library, and sports facilities." },
  { emoji: "👩‍🏫", title: "Expert Faculty", desc: "Dedicated and experienced teachers." },
];

export default function Highlights() {
  return (
    <section className="py-16 bg-white relative">
       <Image
        src="/images/line.png"
        alt="School Building"
        width={700}
        height={650}
        className="absolute w-full hidden md:block right-0 top-10"
      ></Image>
       <Image
        src="/images/line2.png"
        alt="School Building"
        width={700}
        height={650}
        className="absolute w-full hidden md:block left-0 top-0"
      ></Image>
     
      <div className="container mx-auto px-4 z-[9] relative grid md:grid-cols-3 gap-8 text-center">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="p-6 rounded-lg shadow-md border border-gray-200 bg-gradient-to-b from-[#F9FAFB] to-white hover:shadow-lg transition-all"
          >
            <div className="text-5xl mb-4">{item.emoji}</div>
            <h3 className="text-2xl font-bold text-[#1E3A8A] mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
            <div className="mt-4 text-yellow-400 text-lg">
              {"★".repeat(5)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
