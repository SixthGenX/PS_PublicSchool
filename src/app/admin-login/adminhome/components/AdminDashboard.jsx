"use client";
import React from "react";
import { BookOpen, FileText, Calendar } from "lucide-react"; // icons
import Link from "next/link";

export default function AdminDashboard() {
  const options = [
    {
      title: "Library Panel",
      description: "Manage books, issue records, and library details.",
      icon: <BookOpen className="w-12 h-12 text-indigo-500" />,
      link:"/admin-login/adminhome/library-pannel"
    },
    {
      title: "Result Update",
      description: "Upload or update student academic results.",
      icon: <FileText className="w-12 h-12 text-green-500" />,
      link:"/admin-login/adminhome/result-update"
    },
    {
      title: "Datesheet Update",
      description: "Manage and update exam schedules easily.",
      icon: <Calendar className="w-12 h-12 text-orange-500" />,
      link:"/admin-login/adminhome/datesheet-update"
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6 py-12">
      <div className="max-w-5xl w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Admin Dashboard
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {options.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl "
            >
              <div className="mb-4">{item.icon}</div>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                {item.title}
              </h2>
              <p className="text-gray-500 text-sm">{item.description}</p>
              <Link href={item.link}>
              <button className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition cursor-pointer">
                Open
              </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
