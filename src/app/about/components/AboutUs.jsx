// src/pages/About.jsx
import React from "react";

export default function AboutUs() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Header Section */}
      {/* About Us Header (Matches School Branding) */}
<div className="bg-gray-50 py-12 px-6 text-center">
  {/* Logo and School Name */}
  <div className="flex flex-col items-center">
    {/* <img
      src="/images/logo-2.png" // replace with your logo path
      alt="School Logo"
      className="w-40 h-40 object-contain mb-4"
    /> */}
    <h1 className="text-5xl font-bold text-[#a04b6e] mb-2">PS PUBLIC SCHOOL</h1>
    <p className="text-lg text-red-800 mb-1">
      GANAUR ROAD, BHURRI, ( SONIPAT )
    </p>
    <p className="italic text-red-700">
      A Unit of Pushp-Sanj Educational Society
    </p>
    <p className="text-xl font-semibold mt-2">CBSE Affiliated School</p>
    <img
      src="/images/logo-1.png" // replace with CBSE logo path
      alt="CBSE Logo"
      className="w-28 mt-4"
    />
  </div>
</div>


      {/* School History & Mission */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-semibold text-blue-800 mb-6">
          School History & Mission
        </h2>
        <p className="leading-relaxed text-lg mb-6">
          Established in 1990, our school has grown from a small neighborhood institution
          to a renowned educational center known for excellence in academics, sports,
          and the arts. Over the past three decades, we have nurtured thousands of students,
          preparing them for success in a rapidly changing world.
        </p>
        <p className="leading-relaxed text-lg">
          Our mission is simple yet powerful: to inspire curiosity, build confidence, and
          cultivate a lifelong passion for learning. We strive to create a safe, inclusive,
          and dynamic environment where students can explore their potential, embrace
          challenges, and develop into compassionate and capable citizens.
        </p>
      </section>

      {/* Principal’s Message */}
      <section className="bg-white shadow-lg rounded-xl max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-semibold text-blue-800 mb-6">
          Principal’s Message
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src="images/aboutprinciple.jpg"
            alt="Principal"
            className="rounded-full w-48 h-48 object-cover border-4 border-blue-500 shadow-md"
          />
          <div>
            <p className="leading-relaxed text-lg mb-4">
              “Education is not merely about acquiring knowledge — it’s about shaping
              character, nurturing talents, and inspiring a vision for the future.
              At our school, every child is valued, respected, and encouraged to dream big.
              We focus on providing a balanced education that develops both intellectual
              and emotional intelligence.”
            </p>
            <p className="leading-relaxed text-lg">
              I invite you to be part of our vibrant community where students are not just
              prepared for exams, but for life. Together, we can build a brighter tomorrow.”
            </p>
            <p className="mt-4 font-semibold text-blue-700">— Dr. Jane Smith, Principal</p>
          </div>
        </div>
      </section>

      {/* Vision & Values */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-semibold text-blue-800 mb-8">Vision & Values</h2>
        <p className="leading-relaxed text-lg mb-6">
          Our vision is to be a beacon of educational excellence, inspiring students to
          achieve their fullest potential and contribute meaningfully to society.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-blue-700 mb-2">Academic Excellence</h3>
            <p>
              Providing a rigorous curriculum that challenges students to think critically
              and solve problems creatively.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-blue-700 mb-2">Integrity & Respect</h3>
            <p>
              Fostering a culture where honesty, empathy, and respect are core to every
              interaction.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-blue-700 mb-2">Innovation</h3>
            <p>
              Encouraging curiosity and embracing new technologies and ideas to prepare
              students for the future.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-blue-700 mb-2">Community & Service</h3>
            <p>
              Inspiring students to give back, fostering a sense of responsibility towards
              society and the environment.
            </p>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="bg-white shadow-lg rounded-xl max-w-6xl mx-auto px-6 py-16 mb-16">
        <h2 className="text-4xl font-semibold text-blue-800 mb-6">Accreditations</h2>
        <p className="leading-relaxed text-lg mb-6">
          Our school is accredited by the National Board of Education and is a proud member
          of the International Association of Schools. We have been recognized with awards
          for excellence in STEM education, arts programs, and community outreach.
        </p>
        <div className="flex flex-wrap gap-6 mt-6">
          <img
            src="https://via.placeholder.com/150"
            alt="Accreditation Logo"
            className="h-24 object-contain"
          />
          <img
            src="https://via.placeholder.com/150"
            alt="Award Logo"
            className="h-24 object-contain"
          />
          <img
            src="https://via.placeholder.com/150"
            alt="Certification Logo"
            className="h-24 object-contain"
          />
        </div>
      </section>
    </div>
  );
}
