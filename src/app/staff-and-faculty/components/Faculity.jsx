"use client";

import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

export default function Facilities() {
  const teachers = [
    {
      name: "Ms Sonam Rana",
      role: "PGT Physics",
      image: "/schoolimages/staff/Sonamrana.jpg",
      thought:
        "Teaching is not just about sharing knowledge; it’s about inspiring curiosity and a love for lifelong learning.",
    },
    {
      name: "Ms Anjali",
      role: "PGT Maths",
      image: "/schoolimages/staff/Anjali.jpg",
      thought:
        "I believe in making complex concepts simple, so that every student can understand and enjoy the subject.",
    },
    {
      name: "Mr Gaurav Aneja",
      role: "TGT English",
      image: "/schoolimages/staff/Gaurav.jpg",
      thought:
        "Language opens doors to cultures and ideas. My mission is to help students express themselves with confidence.",
    },
  ];

  const staff = [
    {
      id: 1,
      name: "Ms Anita Sharma",
      role: "PGT Hindi",
      image: "/schoolimages/staff/Anitasharma.jpg",
    },
    {
      id: 2,
      name: "Ms Sonam Rana",
      role: "PGT Physics",
      image: "/schoolimages/staff/Sonamrana.jpg",
    },
    {
      id: 3,
      name: "Mr. Kashish",
      role: "PGT Chemistry",
      image: "/schoolimages/staff/Kashish.jpg",
    },
    {
      id: 4,
      name: "Ms Manisha Sharma",
      role: "PGT Com. Science",
      image: "/schoolimages/staff/Manisha.jpg",
    },
    {
      id: 5,
      name: "Ms Ritu",
      role: "PGT English",
      image: "/schoolimages/staff/Ritu.jpg",
    },
    {
      id: 6,
      name: "Ms Anjali",
      role: "PGT Maths",
      image: "/schoolimages/staff/Anjali.jpg",
    },
    {
      id: 7,
      name: "Ms Reenu",
      role: "PGT Computer",
      image: "/schoolimages/staff/Reenu.jpg",
    },
    {
      id: 8,
      name: "Mr. Akshya",
      role: "Physical Education",
      image: "/schoolimages/staff/Akshya.jpg",
    },
    {
      id: 9,
      name: "Ms Neelam ",
      role: "TGT",
      image: "/schoolimages/staff/Neelam.jpg",
    },
    {
      id: 10,
      name: "Ms Pinki ",
      role: "TGT Maths",
      image: "/schoolimages/staff/Pinki.jpg",
    },
    {
      id: 11,
      name: "Mr Gaurav Aneja",
      role: "TGT English",
      image: "/schoolimages/staff/Gaurav.jpg",
    },
    {
      id: 12,
      name: "Ms Preeti",
      role: "TGT Social Science",
      image: "/schoolimages/staff/Preeti.jpg",
    },
    {
      id: 13,
      name: "Mr Lokesh",
      role: "TGT Social Science",
      image: "/schoolimages/staff/Lokesh.jpg",
    },
    {
      id: 14,
      name: "Ms. Poonam",
      role: "PRT",
      image: "/schoolimages/staff/Poonam.jpg",
    },
    {
      id: 15,
      name: "Ms. Annu",
      role: "PRT",
      image: "/schoolimages/staff/Annu.jpg",
    },
    {
      id: 16,
      name: "Ms Priyanka",
      role: "PRT",
      image: "/schoolimages/staff/Priyanka.jpg",
    },
    {
      id: 17,
      name: "Ms Manju",
      role: "PRT",
      image: "/schoolimages/staff/Manju.jpg",
    },
    {
      id: 18,
      name: "Ms. Banti",
      role: "PRT",
      image: "/schoolimages/staff/Banti.jpg",
    },
    {
      id: 19,
      name: "Ms Geeta",
      role: "Drawing Trainer",
      image: "/schoolimages/staff/Geeta.jpg",
    },
    {
      id: 20,
      name: "Mr. Atual",
      role: "Librarian",
      image: "/schoolimages/staff/Atual.jpg",
    },
 
  ];



  const staffgroup = [
    {
      id: 1,
      image: "/schoolimages/staff1.jpg",
    },
    {
      id: 2,
      image: "/schoolimages/staff2.jpg",
    },
    {
      id: 3,
      image: "/schoolimages/staff3.jpg",
    },
    {
      id: 5,
      image: "/schoolimages/staff4.jpg",
    },
    {
      id: 6,
      image: "/schoolimages/staff5.jpg",
    },
    {
      id: 4,
      image: "/schoolimages/soloprincipal.jpg",
    },
   
  ];

  const management = [
    {
      name: "SH. Sanjiv Kumar",
      role: "Director",
      image: "/schoolimages/director.jpg",
    },
      {
      name: "SH. Naveen Kumar",
      role: "Principal",
      image: "/schoolimages/principal.jpg",
    },
    {
      name: "SH. Ram Lal",
      role: "Academic Manager",
      image: "/schoolimages/headmaster.jpg",
    },
 
  ];

  return (
    <main className="bg-gray-50">
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
            Our Staff & Faculty
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-blue-100">
            Meet our dedicated faculty and staff members who work tirelessly to
            nurture, guide, and support students in their academic journey.
          </p>
        </div>
      </section>

    

      <section className="bg-white py-10 md:py-16  px-4 sm:px-6">
        <h2 className="text-2xl sm:text-4xl font-semibold text-blue-900 mb-10 text-center">
          Our Dedicated Staff
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {staffgroup.map((person, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={person.image}
                alt={`Staff ${index + 1}`}
                width={300}
                height={300}
                className="w-full h-40 sm:h-60 md:h-72 object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Management Section */}
      <section className="bg-blue-50 py-8 md:py-16 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-4xl font-semibold text-blue-900 mb-6 md:mb-10 text-center">
          School Management
        </h2>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 max-w-4xl md:max-w-6xl mx-auto">
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
                className="w-22 h-22 sm:w-40 sm:h-40 rounded-full mx-auto object-cover"
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

        {/* Staff Section */}
      <section className="bg-white py-16 px-4 sm:px-6">
        {/* <h2 className="text-2xl sm:text-4xl font-semibold text-blue-800 mb-10 text-center">
          Our Dedicated Staff
        </h2> */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
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

      {/* Teachers' Thoughts */}
      <section className="bg-gradient-to-b from-blue-50 to-white pb-12 sm:pb-14 pt-5 sm:pt-10 px-4 sm:px-16 lg:px-28 text-center">
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
