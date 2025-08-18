"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import { motion } from "framer-motion";
import Datesheet from "./components/Datesheet";
import Calender from "./components/Calender";

export default function Home() {
  return (
    <>
      <div className="bg-blue-900 text-[#111827]">
        <Datesheet></Datesheet>
        <Calender></Calender>
      </div>
    </>
  );
}
