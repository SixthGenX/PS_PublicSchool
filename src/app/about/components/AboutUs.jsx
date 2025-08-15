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
          <h1 className="text-5xl font-bold text-[#a04b6e] mb-2">
            PS PUBLIC SCHOOL
          </h1>
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
      <section className="max-w-6xl mx-auto px-6 py-16 bg-gradient-to-br from-blue-50 to-white rounded-t-lg shadow-md">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            School History & Mission
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>

        <div className="space-y-6 text-gray-700 text-lg text-justify leading-relaxed">
          <p>
            Established in{" "}
            <span className="font-semibold text-blue-800">1990</span>, our
            school has grown from a small neighborhood institution to a renowned
            educational center known for excellence in academics, sports, and
            the arts. Over the past three decades, we have nurtured thousands of
            students, preparing them for success in a rapidly changing world.
          </p>

          <div className="bg-white p-6 rounded-lg shadow-sm  border-l-4 border-blue-600">
            <p>
              Our mission is simple yet powerful:{" "}
              <span className="italic">
                to inspire curiosity, build confidence, and cultivate a lifelong
                passion for learning
              </span>
              . We strive to create a safe, inclusive, and dynamic environment
              where students can explore their potential, embrace challenges,
              and develop into compassionate and capable citizens.
            </p>
          </div>
        </div>
      </section>

      {/* Principal’s Message */}
      <section className="bg-white shadow-lg rounded-b-xl max-w-6xl mx-auto px-6 py-16">
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
            <p className="leading-relaxed text-lg text-justify mb-4">
              “Education is not merely about acquiring knowledge — it’s about
              shaping character, nurturing talents, and inspiring a vision for
              the future. At our school, every child is valued, respected, and
              encouraged to dream big. We focus on providing a balanced
              education that develops both intellectual and emotional
              intelligence.”
            </p>
            <p className="leading-relaxed text-justify text-lg">
              I invite you to be part of our vibrant community where students
              are not just prepared for exams, but for life. Together, we can
              build a brighter tomorrow.”
            </p>
            <p className="mt-4 font-semibold text-blue-700">
              — Dr. Jane Smith, Principal
            </p>
          </div>
        </div>
      </section>

      {/* Management Team Section */}
      <section className="py-16 bg-[#1E3A8A] ">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-white text-center mb-10">
            Management Team
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Director */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <img
                src="/images/aboutprinciple.jpg"
                alt="Director"
                className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-blue-500"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                Mr. Rajesh Kumar
              </h3>
              <p className="text-blue-600 font-medium">Director</p>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                Providing visionary leadership to ensure academic excellence and
                holistic development of students.
              </p>
            </div>

            {/* Vice Principal */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <img
                src="/images/aboutprinciple.jpg"
                alt="Vice Principal"
                className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-blue-500"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                Mrs. Priya Sharma
              </h3>
              <p className="text-blue-600 font-medium">Vice Principal</p>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                Supporting academic programs and fostering a positive, inclusive
                school culture.
              </p>
            </div>

            {/* Headmaster */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <img
                src="/images/aboutprinciple.jpg"
                alt="Headmaster"
                className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-blue-500"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                Mr. Anil Verma
              </h3>
              <p className="text-blue-600 font-medium">Headmaster</p>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                Overseeing daily operations and ensuring the highest standards
                of teaching and learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Values */}
      <section className="max-w-6xl mx-auto px-6 py-16  rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Vision & Values
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
            Our vision is to be a beacon of educational excellence, inspiring
            students to achieve their fullest potential and contribute
            meaningfully to society.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border-t-4 border-blue-600">
            <h3 className="text-2xl font-semibold text-blue-700 mb-3">
              Academic Excellence
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Providing a rigorous curriculum that challenges students to think
              critically and solve problems creatively.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border-t-4 border-green-500">
            <h3 className="text-2xl font-semibold text-green-700 mb-3">
              Integrity & Respect
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Fostering a culture where honesty, empathy, and respect are core
              to every interaction.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border-t-4 border-yellow-500">
            <h3 className="text-2xl font-semibold text-yellow-700 mb-3">
              Innovation
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Encouraging curiosity and embracing new technologies and ideas to
              prepare students for the future.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border-t-4 border-purple-500">
            <h3 className="text-2xl font-semibold text-purple-700 mb-3">
              Community & Service
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Inspiring students to give back, fostering a sense of
              responsibility towards society and the environment.
            </p>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="bg-white shadow-lg rounded-xl max-w-6xl mx-auto px-6 py-16 mb-16">
        <h2 className="text-4xl font-semibold text-blue-800 mb-6">
          Accreditations
        </h2>
        <p className="leading-relaxed text-justify text-lg mb-6">
          Our school is accredited by the National Board of Education and is a
          proud member of the International Association of Schools. We have been
          recognized with awards for excellence in STEM education, arts
          programs, and community outreach.
        </p>
        <div className="flex flex-wrap gap-6 mt-6">
          <img
            src="/images/aboutaward.jpg"
            alt="Accreditation Logo"
            className="h-24 object-contain"
          />
          <img
            src="/images/aboutaward2.jpg"
            alt="Award Logo"
            className="h-24 object-contain"
          />
          <img
            src="/images/aboutaward2.jpg"
            alt="Certification Logo"
            className="h-24 object-contain"
          />
        </div>
      </section>
    </div>
  );
}
