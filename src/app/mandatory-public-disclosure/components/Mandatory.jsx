"use client";

import { FaDownload, FaFileAlt } from "react-icons/fa";

const certificates = [
  { title: "Haryana Board Permanent Affiliation (1 to 8)", file: "/certificates/haryana-board.pdf" },
  { title: "School Society Certificate", file: "/certificates/society.pdf" },
  { title: "NOC (1 to 12)", file: "/certificates/noc.pdf" },
  { title: "CBSE Secondary Affiliation Certificate", file: "/certificates/cbse.pdf" },
  { title: "Building Safety Certificate", file: "/certificates/building-safety.pdf" },
  { title: "Fire Safety Certificate", file: "/certificates/fire-safety.pdf" },
  { title: "DEO Certificate", file: "/certificates/deo.pdf" },
  { title: "Hygienic & Safety Certificate", file: "/certificates/hygiene.pdf" },
  { title: "School Managing Committee", file: "/certificates/smc.pdf" },
  { title: "Land Certificate", file: "/certificates/land.pdf" },
  { title: "Transfer Certificate (T.C)", file: "/certificates/tc.pdf" },
  { title: "Water Test Certificate", file: "/certificates/water-test.pdf" },
];

export default function Mandatory() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          School Certificates & Documents
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((doc, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 flex flex-col justify-between transition"
            >
              <div className="flex items-center space-x-4 mb-4">
                <FaFileAlt className="text-blue-600 text-3xl" />
                <h2 className="text-lg font-semibold text-gray-700">{doc.title}</h2>
              </div>
              <a
                href={doc.file}
                download
                className="mt-auto inline-flex items-center justify-center gap-2 bg- border-[1.5px] border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:text-white hover:bg-blue-700 transition"
              >
                <FaDownload /> Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
