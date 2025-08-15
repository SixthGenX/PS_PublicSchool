"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#1E3A8A]  text-white ">
      <Image
        src="/images/line.png"
        alt="School Building"
        width={500}
        height={450}
        className="absolute w-full top-5 md:top-0"
      ></Image>
      <Image
        src="/images/group.png"
        alt="School Building"
        width={500}
        height={250}
        className="absolute z-[9]  bottom-[-80px] left-[30%]"
      ></Image>
      <div className="container mx-auto px-4 md:px-20 py-14 md:py-20 flex flex-col justify-between gap-6 md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to PS Public School
          </h2>
          <p className="mb-6">
            Providing quality education with a focus on academics, sports, and
            creativity.
          </p>
          <button className="bg-[#FBBF24] text-[#111827] px-6 py-3 rounded-md font-semibold hover:bg-yellow-500 transition">
            Explore More
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mt-8 md:mt-0"
        >
          <Image
            src="/images/homehero1.jpg"
            alt="School Building"
            width={500}
            height={450}
            className="rounded-lg relative shadow-lg z-[10]"
          />
        </motion.div>
      </div>
    </section>
  );
}
