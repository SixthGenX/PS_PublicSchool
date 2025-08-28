"use client";
import { useState, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function Results() {
  const [openClass, setOpenClass] = useState(null);
  const [results, setResults] = useState({});

  // ✅ Transform API data
  function transformResults(data) {
    const grouped = {};

    data.forEach((item) => {
      // "CLASS_1" → 1
      const cls = Number(item.class.replace("CLASS_", ""));

      if (!grouped[cls]) grouped[cls] = [];

      grouped[cls].push({
        id: item._id,
        roll: item.rollNumber,
        name: item.studentId?.name || "Unknown",
        marks: item.marks,
        status: item.status === "PASS" ? "Pass" : "Fail",
      });
    });

    // ✅ Sort classes + roll numbers
    const sorted = {};
    Object.keys(grouped)
      .map(Number)
      .sort((a, b) => a - b)
      .forEach((cls) => {
        sorted[cls] = grouped[cls].sort((a, b) => a.roll - b.roll);
      });

    return sorted;
  }

  // ✅ Fetch API data
  const fetchResults = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/result`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
            token: `Bearer ${localStorage.getItem("adminToken")}`,
          },
        }
      );

      let data = null;
      try {
        data = await res.json();
      } catch (_) {}

      if (res.ok) {
        const transformed = transformResults(data?.body || []);
        setResults(transformed);
      } else {
        console.error("Failed to fetch results:", data?.message);
      }
    } catch (err) {
      console.error("Error fetching results:", err);
    }
  };

  useEffect(() => {
    fetchResults();
  }, []);

  return (
    <div className="min-h-screen bg-blue-900 ">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-14 sm:py-20 px-4 md:px-6 text-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/group.png"
            alt="Facilities Background"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-blue-900/60"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 md:mb-6">
            Student Results <span className="italic">(Class 1st – 12th)</span>
            <span className="block w-24 h-1 bg-white mx-auto mt-4 rounded-full"></span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-blue-100">
            Explore the academic performance of our students from Class 1 to
            Class 12, showcasing their dedication and achievements.
          </p>
        </div>
      </section>

      {/* Accordion Section */}
      <div className="max-w-5xl mx-auto space-y-4 pb-12 md:pb-16 px-4 md:px-6 relative ">
        {Object.keys(results).map((classNum) => {
          const cls = Number(classNum);
          const isOpen = openClass === cls;

          return (
            <div
              key={cls}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              {/* Accordion Header */}
              <button
                onClick={() => setOpenClass(isOpen ? null : cls)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold text-gray-700 hover:bg-gray-100 transition"
              >
                <span>Class {cls} Results</span>
                <ChevronDownIcon
                  className={`h-5 w-5 transform transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Accordion Body */}
              {isOpen && (
                <div className="px-6 pb-6">
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
                      <thead className="bg-gray-200 text-gray-700">
                        <tr>
                          <th className="px-4 py-2 border">Roll No</th>
                          <th className="px-4 py-2 border">Name</th>
                          <th className="px-4 py-2 border">Marks</th>
                          <th className="px-4 py-2 border">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {results[cls].map((student) => (
                          <tr
                            key={student.id}
                            className="hover:bg-gray-50 transition"
                          >
                            <td className="px-4 py-2 border text-center">
                              {student.roll}
                            </td>
                            <td className="px-4 py-2 border">{student.name}</td>
                            <td className="px-4 py-2 border text-center">
                              {student.marks}%
                            </td>
                            <td
                              className={`px-4 py-2 border text-center font-medium ${
                                student.status === "Pass"
                                  ? "text-green-600"
                                  : "text-red-600"
                              }`}
                            >
                              {student.status}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
