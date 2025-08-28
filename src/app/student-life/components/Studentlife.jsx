"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaBookOpen,
  FaTrophy,
  FaUsers,
  FaMusic,
  FaFutbol,
  FaTheaterMasks,
} from "react-icons/fa";

export default function Studentlife() {
  return (
    <section className="bg-gray-50">
      {/* Header */}
    

       <section className="relative bg-blue-900 text-white py-14 sm:py-20 px-4 md:px-6 text-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/group.png"
            alt="Facilities Background"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-blue-900/70"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 md:mb-6">
             Student Life at Our School
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-blue-100">
            At our school, learning goes beyond classrooms. We nurture talents,
            encourage teamwork, and celebrate achievements through vibrant
            student life activities.
          </p>
        </div>
      </section>

      {/* Clubs Section */}
      <div className="max-w-6xl mx-auto py-12 sm:py-16 px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-900 mb-8 text-center">
          Clubs & Societies
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            { 
              icon: <FaBookOpen />,
              title: "Literary Club",
              desc: "Fostering creativity through debates, essay writing, and poetry.",
              img: "/images2/room.jpg",
            },
            {
              icon: <FaMusic />,
              title: "Music & Dance Club",
              desc: "Encouraging rhythm, melody, and movement.",
              img: "/images2/dance2.jpg",
            },
            {
              icon: <FaFutbol />,
              title: "Sports Club",
              desc: "Football, cricket, basketball, athletics and more.",
              img: "/images2/sports.jpg",
            },
            {
              icon: <FaTheaterMasks />,
              title: "Drama Club",
              desc: "Bringing imagination alive with stage plays and skits.",
              img: "/images2/dance.jpg",
            },
            // {
            //   icon: <FaUsers />,
            //   title: "Community Service",
            //   desc: "Volunteering activities and social impact projects.",
            //   img: "/images2/room.jpg",
            // },
            {
              icon: <FaTrophy />,
              title: "Science & Tech Club",
              desc: "Research,  and experiments",
              img: "/schoolimages/chemistrylab.jpg",
            },
            {
              icon: <FaTrophy />,
              title: "Tech Club",
              desc: "Exploring robotics, coding and digital innovations.",
              img: "/schoolimages/computerlab.jpg",
            },
          ].map((club, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-2 sm:p-3 transition"
            >
              <Image
                src={club.img}
                alt={club.title}
                width={400}
                height={250}
                className="rounded-lg mb-3 object-cover w-full h-70 "
              />
              <div className="text-blue-600 text-2xl block sm:hidden sm:text-3xl mb-2">
                {club.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                {club.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mt-1">
                {club.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Extracurricular Section */}
      <div className="bg-blue-50 py-8 sm:py-12 rounded-2xl max-w-6xl mx-auto mb-8 md:mb-10 px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-900 mb-4 md:mb-8 text-center">
          Extracurricular Activities
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {[
            {
              title: "Annual Cultural Fest",
              desc: "A grand celebration of music, dance, and arts where students showcase their creativity and talents.",
              img: "/schoolimages/sports.jpg",
            },
            {
              title: "Sports Day",
              desc: "A day filled with excitement, competition, and teamwork across multiple sports events.",
              img: "/schoolimages/a.jpg",
            },
            {
              title: "Science Fair",
              desc: "Innovative projects, experiments, and models displayed by students to spark curiosity.",
              img: "/schoolimages/event1.jpg",
            },
            {
              title: "Community Outreach",
              desc: "Students participate in tree plantation, cleanliness drives, and social awareness campaigns.",
              img: "/images2/sports2.jpg",
            },
          ].map((activity, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-1 sm:p-2 flex flex-col items-center text-center transition"
            >
              <Image
                src={activity.img}
                alt={activity.title}
                width={500}
                height={500}
                className="rounded-lg mb-3 object-center w-full h-50 sm:h-[400px] object-cover"
              />
              {/* <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">
                {activity.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {activity.desc}
              </p> */}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="max-w-6xl mx-auto pb-12 px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-800 mb-4 md:mb-8 text-center">
          Student Achievements
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              title: "National Level Debate Champion",
              desc: "Our Literary Club students secured 1st place at the National Debate Competition.",
              img: "/images/schoolplayground.jpg",
            },
            {
              title: "State Football Winners",
              desc: "Our football team bagged the championship trophy at the state-level tournament.",
              img: "/images/schoolplayground.jpg",
            },
            {
              title: "Innovative Tech Project",
              desc: "Science Club students developed a low-cost water purification system.",
              img: "/images/schoolplayground.jpg",
            },
          ].map((ach, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-5 sm:p-6 transition"
            >
              <Image
                src={ach.img}
                alt={ach.title}
                width={400}
                height={250}
                className="rounded-lg mb-3 object-cover w-full h-40 sm:h-48"
              />
              <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                {ach.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mt-1">
                {ach.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
