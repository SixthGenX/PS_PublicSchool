"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import { motion } from "framer-motion";
import ResultUpdate from "./components/ResultUpdate"
import NavigationSection from "../components/NavigationSection"



export default function Home() {
  return (
    <>
    <div className="bg-[#F9FAFB] text-[#111827]">
    <ResultUpdate></ResultUpdate>
     <NavigationSection></NavigationSection>
      
    </div>
    </>
  );
}
