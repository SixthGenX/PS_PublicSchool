"use client";
import React from "react";
import { BookOpen, FileText, Calendar, LogOutIcon } from "lucide-react"; // icons
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

const NavigationSection = () => {
  return (
    <section className="bg-blue-900 text-white flex items-center justify-center w-full">
      <div className="w-full px-4 md:px-6 pt-10">
        <div className="flex items-center flex-wrap gap-3">
          <Link
            href="/admin-login/adminhome/library-pannel"
            className="flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2.5 rounded-lg font-semibold hover:bg-white/15 transition"
          >
            <BookOpen size={18} /> Library Pannel
          </Link>

          <Link
            href="/admin-login/adminhome/result-update"
            className="flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2.5 rounded-lg font-semibold hover:bg-white/15 transition"
          >
            <FileText size={18} /> Result Update
          </Link>

          <Link
            href="/admin-login/adminhome/datesheet-update"
            className="flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2.5 rounded-lg font-semibold hover:bg-white/15 transition"
          >
            <Calendar size={18} /> Datesheet Update
          </Link>
          <button className="bg-[#FBBF24] flex cursor-pointer  text-[#111827] px-5 py-2 rounded-md font-semibold hover:bg-yellow-500 transition">
            Log Out
            <LogOutIcon
              className={`ml-2 text-sm transition-transform `}
            />
           
          </button>
        </div>
      </div>
    </section>
  );
};

export default NavigationSection;
