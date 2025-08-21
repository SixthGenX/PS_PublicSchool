"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import { motion } from "framer-motion";
import NavigationSection from "../components/NavigationSection";
import DatesheetUpdate from "./components/DatesheetUpdate";

export default function Home() {
  return (
    <>
      <div className="bg-[#F9FAFB] text-[#111827]">
        <DatesheetUpdate></DatesheetUpdate>
        <NavigationSection></NavigationSection>
      </div>
    </>
  );
}
