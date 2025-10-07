"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-[#1E3A8A] text-white overflow-hidden">
      <Image
        src="/images/line.png"
        alt="School Building"
        width={500}
        height={450}
        className="absolute w-full top-5 md:top-0"
      />
      <Image
        src="/images/group.png"
        alt="School Building"
        width={500}
        height={250}
        className="absolute z-[9] bottom-0 left-[30%] translate-y-1/3"
      />
      <div className="container mx-auto px-4 md:px-20 py-14 md:py-20 flex flex-col justify-between gap-6 md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <h2 className="text-3xl md:text-5xl leading-[50px] md:leading-[60px] font-bold mb-4">
            Welcome to <br></br> P. S. PUBLIC SCHOOL
          </h2>
          <p className="mb-6">
            Providing quality education with a focus on academics, sports, and
            creativity.
          </p>
          <Link href={"/student-life"} className="bg-[#FBBF24] relative z-1 cursor-pointer text-[#111827] px-6 py-3 rounded-md font-semibold hover:bg-yellow-500 transition">
            Explore More
          </Link>
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
