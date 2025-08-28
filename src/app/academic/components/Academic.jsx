"use client";

import { BookOpen, Calendar, Users, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import {
  FaCalculator,
  FaFlask,
  FaBook,
  FaGlobe,
  FaLaptopCode,
  FaRunning,
  FaPaintBrush,
  FaLeaf,
  FaHandsHelping,
} from "react-icons/fa";

export default function Academic() {
  const toppers = [
    {
      name: "Aarav Sharma",
      class: "Class 10th",
      score: "96%",
      image: "/student/mansi.jpg",
    },
  ];

  const subjects = [
    {
      name: "Mathematics",
      icon: <FaCalculator className="text-blue-600 text-2xl sm:text-3xl" />,
      description:
        "Building problem-solving skills, logical reasoning, and analytical thinking.",
    },
    {
      name: "Science",
      icon: <FaFlask className="text-green-600 text-2xl sm:text-3xl" />,
      description:
        "Exploring physics, chemistry, and biology through experiments and innovation.",
    },
    {
      name: "English Language & Literature",
      icon: <FaBook className="text-purple-600 text-2xl sm:text-3xl" />,
      description: "Improving communication skills and literary appreciation.",
    },
    {
      name: "Social Studies",
      icon: <FaGlobe className="text-yellow-600 text-2xl sm:text-3xl" />,
      description:
        "Understanding history, geography, and culture to shape global citizens.",
    },
    {
      name: "Computer Science",
      icon: <FaLaptopCode className="text-indigo-600 text-2xl sm:text-3xl" />,
      description: "Learning coding, AI, and digital literacy for the future.",
    },
    {
      name: "Physical Education",
      icon: <FaRunning className="text-red-600 text-2xl sm:text-3xl" />,
      description: "Encouraging fitness, sportsmanship, and teamwork.",
    },
    {
      name: "Arts & Music",
      icon: <FaPaintBrush className="text-pink-600 text-2xl sm:text-3xl" />,
      description:
        "Nurturing creativity through visual arts, dance, and music.",
    },
    {
      name: "Environmental Studies",
      icon: <FaLeaf className="text-green-700 text-2xl sm:text-3xl" />,
      description: "Promoting sustainability, ecology, and respect for nature.",
    },
    {
      name: "Moral Education",
      icon: <FaHandsHelping className="text-orange-600 text-2xl sm:text-3xl" />,
      description:
        "Instilling values, ethics, and compassion for a better society.",
    },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -40; // stop 40px above
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-14 sm:py-18 px-4 sm:px-6 text-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/group.png"
            alt="Academics Background"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-900/70 to-blue-900/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl sm:max-w-4xl mx-auto px-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6 leading-tight">
            Academics
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-blue-100 px-2">
            Nurturing curiosity, inspiring creativity, and building strong
            foundations for lifelong learning.
          </p>

          {/* Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4">
            <button
              onClick={() => handleScroll("alumni")}
              className="px-6 sm:px-8 py-3 rounded-full bg-white text-blue-900 font-semibold shadow-lg hover:scale-105 transition text-sm sm:text-base"
            >
              Shining Stars of Success
            </button>
            <button
              onClick={() => handleScroll("subjects")}
              className="px-6 sm:px-8 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 hover:scale-105 transition text-sm sm:text-base"
            >
              Explore Subjects
            </button>
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section
        id="curriculum"
        className="relative bg-gray-50 py-8 sm:py-12 px-4 sm:px-8"
      >
        <div className="relative max-w-5xl sm:max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-bold text-blue-900 mb-6 sm:mb-10 tracking-wide">
            Curriculum Overview
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-800 max-w-3xl sm:max-w-4xl mx-auto px-2">
            Our curriculum is carefully designed to balance academic excellence,
            creativity, and holistic development. From foundational years to
            higher classes, students experience a dynamic blend of traditional
            and modern approaches to learning.
            <br />
            <br />
            We emphasize not just knowledge acquisition but also
            problem-solving, critical thinking, and values that prepare students
            for the challenges of tomorrow.
          </p>
        </div>
      </section>

      {/* Subjects Offered */}
      <section
        id="subjects"
        className="bg-gradient-to-b from-blue-50 to-white py-8 sm:py-12 px-4 sm:px-6"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-5xl font-bold text-blue-800 mb-8 sm:mb-12 text-center"
          >
            Subjects Offered
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {subjects.map((subject, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="p-5 sm:p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl cursor-pointer border border-gray-100 group"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="text-2xl sm:text-3xl">{subject.icon}</span>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                    {subject.name}
                  </h3>
                </div>

                <motion.p className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                  {subject.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:pb-16">
        <h2 className="text-3xl sm:text-4xl font-semibold text-blue-800 mb-10 sm:mb-12 text-center sm:text-left">
          Teaching Methodology
        </h2>
        <div className="grid gap-6 sm:gap-10 sm:grid-cols-2 md:grid-cols-3">
          <div className="p-6 bg-white shadow rounded-xl text-center">
            <Lightbulb className="mx-auto text-yellow-500 w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              Innovative Learning
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Hands-on activities, projects, and experiments to build practical
              knowledge.
            </p>
          </div>
          <div className="p-6 bg-white shadow rounded-xl text-center">
            <Users className="mx-auto text-blue-600 w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              Collaborative Approach
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Group discussions, peer learning, and teamwork to enhance
              communication and leadership.
            </p>
          </div>
          <div className="p-6 bg-white shadow rounded-xl text-center">
            <BookOpen className="mx-auto text-green-600 w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              Personalized Attention
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Small class sizes and mentoring programs to cater to every
              student’s unique learning style.
            </p>
          </div>
        </div>
      </section>

      <section
        id="alumni"
        className="relative bg-blue-900 text-white py-8 sm:py-14 px-6 text-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="/images/group.png"
            alt="Toppers Background"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-blue-900/70"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            Academic Toppers <span className="italic">(Past Years)</span>
            <span className="block w-24 h-1 bg-white mx-auto mt-4 rounded-full"></span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-blue-100">
            Meet our brightest stars who have excelled in academics and made us
            proud.
          </p>
        </div>
      </section>

      {/* Toppers Grid */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {toppers.map((topper, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden text-center hover:shadow-lg transition duration-300"
            >
              <img
                src={topper.image}
                alt={topper.name}
                className="w-full h-[300px] object-cover"
              />
              <div className="p-4">
                <h3 className=" text-sm md:text-lg font-bold text-blue-900">
                  {topper.name}
                </h3>
                <p className="text-sm text-gray-600">{topper.class}</p>
                <p className="text-md font-semibold text-blue-700 mt-1">
                  {topper.score}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="bg-blue-50 py-8 sm:py-12 px-4">
        <div className="max-w-4xl sm:max-w-5xl mx-auto text-center">
          <Calendar className="mx-auto text-blue-700 w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6" />
          <h2 className="text-3xl sm:text-4xl font-semibold text-blue-900 mb-3 sm:mb-4">
            Academic Calendar
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6 px-2">
            Stay updated with important academic events, examination schedules,
            and school activities throughout the year.
          </p>
          <a
            href="/files/academic-calendar.pdf"
            download="/files/academic-calendar.pdf" // 👈 forces download with a file name
            className="bg-blue-700 text-white px-5 sm:px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition text-sm sm:text-base"
          >
            Download Academic Calendar
          </a>
        </div>
      </section>
    </div>
  );
}
