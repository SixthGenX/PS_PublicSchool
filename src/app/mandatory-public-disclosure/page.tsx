"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import { motion } from "framer-motion";
import Mandatory from "./components/Mandatory";

export default function Home() {
  return (
    <>
      <div className="bg-[#F9FAFB] text-[#111827]">
        <Mandatory></Mandatory>
      </div>
    </>
  );
}
