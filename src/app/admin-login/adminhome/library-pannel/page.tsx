"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import { motion } from "framer-motion";
import LibraryManagement from "./components/LibraryManagement"
import NavigationSection from "../components/NavigationSection"



export default function Home() {
  return (
    <>
    <div className="bg-[#F9FAFB] text-[#111827]">
    <LibraryManagement></LibraryManagement>
    <NavigationSection></NavigationSection>
     
      
    </div>
    </>
  );
}
