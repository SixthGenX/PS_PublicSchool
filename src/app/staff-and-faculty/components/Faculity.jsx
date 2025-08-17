"use client";

import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

export default function Facilities() {
  const teachers = [
    {
      name: "Dr. Anjali Sharma",
      role: "Professor of Physics",
      image: "/images/staff.jpg",
      thought:
        "Teaching is not just about sharing knowledge; it’s about inspiring curiosity and a love for lifelong learning.",
    },
    {
      name: "Mr. Rajesh Kumar",
      role: "Mathematics Lecturer",
      image: "/images/staff.jpg",
      thought:
        "I believe in making complex concepts simple, so that every student can understand and enjoy the subject.",
    },
    {
      name: "Ms. Neha Verma",
      role: "English Teacher",
      image: "/images/staff.jpg",
      thought:
        "Language opens doors to cultures and ideas. My mission is to help students express themselves with confidence.",
    },
  ];

  const staff = [
    {
      id: 1,
      name: "Anita Sharma",
      role: "Mathematics Teacher",
      image: "/images/staff.jpg",
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "Science Teacher",
      image: "/images/staff.jpg",
    },
    {
      id: 3,
      name: "Sunita Verma",
      role: "English Teacher",
      image: "/images/staff.jpg",
    },
    {
      id: 4,
      name: "Amit Patel",
      role: "History Teacher",
      image: "/images/staff.jpg",
    },
    {
      id: 5,
      name: "Meena Gupta",
      role: "Geography Teacher",
      image: "/images/staff.jpg",
    },
    {
      id: 6,
      name: "Suresh Singh",
      role: "Physical Education Teacher",
      image: "/images/staff.jpg",
    },
    {
      id: 7,
      name: "Priya Nair",
      role: "Computer Science Teacher",
      image: "/images/staff.jpg",
    },
    {
      id: 8,
      name: "Vikram Joshi",
      role: "Chemistry Teacher",
      image: "/images/staff.jpg",
    },
    {
      id: 9,
      name: "Neha Kapoor",
      role: "Biology Teacher",
      image: "/images/staff.jpg",
    },
    {
      id: 10,
      name: "Arun Mishra",
      role: "Physics Teacher",
      image: "/images/staff.jpg",
    },
    {
      id: 11,
      name: "Kavita Das",
      role: "Arts Teacher",
      image: "/images/staff.jpg",
    },
    {
      id: 12,
      name: "Manoj Yadav",
      role: "Music Teacher",
      image: "/images/staff.jpg",
    },
  ];

  const management = [
    {
      name: "Principal Sharma",
      role: "Principal",
      image: "/images/aboutprinciple.jpg",
    },
    {
      name: "Mr. Verma",
      role: "Vice Principal",
      image: "/images/aboutprinciple.jpg",
    },
    {
      name: "Mrs. Iyer",
      role: "Head of Administration",
      image: "/images/aboutprinciple.jpg",
    },
  ];

  return (
    <main className="bg-gray-50">
      {/* Header */}

      <section className="relative bg-blue-900 text-white py-20 md:py-28 px-4 md:px-6 text-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/group.png"
            alt="Facilities Background"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-blue-900/800"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 md:mb-6">
            Our Staff & Faculty
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-blue-100">
            Meet our dedicated faculty and staff members who work tirelessly to
            nurture, guide, and support students in their academic journey.
          </p>
        </div>
      </section>

      {/* Staff Section */}
      <section className="bg-white py-16 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-4xl font-semibold text-blue-800 mb-10 text-center">
          Our Dedicated Staff
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {staff.map((person, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl shadow-md p-4 text-center hover:shadow-lg transition"
            >
              <Image
                src={person.image}
                alt={person.name}
                width={150}
                height={150}
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto object-cover"
              />
              <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl font-medium text-gray-800">
                {person.name}
              </h3>
              <p className="text-sm sm:text-base text-gray-500">
                {person.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Management Section */}
      <section className="bg-blue-50 py-14 sm:py-16 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-4xl font-semibold text-blue-800 mb-10 text-center">
          School Management
        </h2>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 max-w-6xl mx-auto">
          {management.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg sm:shadow-xl p-6 sm:p-8 text-center w-72 sm:w-80 hover:scale-105 transition"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={150}
                height={150}
                className="w-28 h-28 sm:w-40 sm:h-40 rounded-full mx-auto object-cover"
              />
              <h3 className="mt-4 sm:mt-6 text-lg sm:text-2xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-sm sm:text-base text-blue-600 font-medium">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Teachers' Thoughts */}
      <section className="bg-gradient-to-b from-blue-50 to-white pb-12 sm:pb-14 pt-8 sm:pt-10 px-4 sm:px-16 lg:px-28 text-center">
        <h2 className="text-2xl sm:text-4xl font-bold text-blue-800 mb-4 sm:mb-6">
          Teachers’ Thoughts
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl sm:max-w-3xl mx-auto mb-8 sm:mb-12">
          Our dedicated faculty share their vision, passion, and commitment
          towards nurturing young minds.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="bg-white shadow-md sm:shadow-lg rounded-2xl p-6 sm:p-8 relative hover:shadow-2xl transition"
            >
              <FaQuoteLeft className="text-blue-300 text-2xl sm:text-3xl absolute -top-3 -left-3" />
              <p className="text-sm sm:text-base text-gray-700 italic mb-4 sm:mb-6">
                “{teacher.thought}”
              </p>
              <div className="flex items-center justify-center gap-3 sm:gap-4">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-blue-600"
                />
                <div className="text-left">
                  <h4 className="font-bold text-gray-800 text-sm sm:text-base md:text-lg">
                    {teacher.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {teacher.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
