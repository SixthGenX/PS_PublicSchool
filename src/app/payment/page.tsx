"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import { motion } from "framer-motion";
import Payment from "./components/Payment";
import ContactForm from "../../../components/ContactForm";

export default function Home() {
  return (
    <>
      <div className="bg-[#F9FAFB] text-[#111827]">
        <Payment></Payment>
        <ContactForm></ContactForm>
      </div>
    </>
  );
}
