"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Highlights from "../../components/Highlights";
import NewsSection from "../../components/NewsSection";
import CTASection from "../../components/CTASection";
import Footer from "../../components/Footer";
import AboutSection from "../../components/AboutSection";
import SchoolInfo from "../../components/SchoolInfo";
import ContactForm from "../../components/ContactForm";

export default function Home() {
  return (
    <>
    <div className="bg-[#F9FAFB] text-[#111827] ">
     
      <Hero />
      <SchoolInfo></SchoolInfo>
      <AboutSection></AboutSection>
      <NewsSection />
      <Highlights />
      <ContactForm />
      
    </div>
    </>
  );
}
