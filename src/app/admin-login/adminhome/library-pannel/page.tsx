/* eslint-disable react-hooks/exhaustive-deps */
"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import { motion } from "framer-motion";
import LibraryManagement from "./components/LibraryManagement"
import NavigationSection from "../components/NavigationSection"
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const navigate = useRouter();
  useEffect(() => {
    const user = localStorage.getItem("adminToken");
    if (!user) {
      navigate.push("/admin-login");
    }
  }, []);
  return (
    <>
    <div className="bg-[#F9FAFB] text-[#111827]">
    <LibraryManagement></LibraryManagement>
    <NavigationSection></NavigationSection>
     
      
    </div>
    </>
  );
}
