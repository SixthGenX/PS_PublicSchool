"use client";

import { FaDownload, FaFileAlt } from "react-icons/fa";

const certificates = [
  {
    title: "Mandatory Public Disclosure",
    file: "/certificates/Mandatory-public-disclosure.pdf",
  },
  {
    title: "Haryana Board Permanent Affiliation (1 to 8)",
    file: "/certificates/Haryana-Board-Permanent-Affliation-1-to-8.pdf",
  },
  {
    title: "School Society Certificate",
    file: "/certificates/School-Society-Certificate.pdf",
  },
  {
    title: "SLC",
    file: "/certificates/SLC.pdf",
  },
  { title: "NOC (1 to 12)", file: "/certificates/NOC-1-to-12.pdf" },
  {
    title: "CBSE Secondary Affiliation Certificate",
    file: "/certificates/CBSE-Secondary-Affiliation-Certificate.pdf",
  },
  {
    title: "Building Safety Certificate",
    file: "/certificates/Building-Safety-Certificate.pdf",
  },
  {
    title: "Fire Safety Certificate",
    file: "/certificates/fire-safety-Certificate.pdf",
  },
  { title: "DEO Certificate", file: "/certificates/DEO-Certificate.pdf" },
  {
    title: "Hygienic & Safety Certificate",
    file: "/certificates/Hygienic.pdf",
  },
  {
    title: "School Managing Committee",
    file: "/certificates/School-Managing-Committee-Certificate.pdf",
  },
  { title: "Land Certificate", file: "/certificates/Certificate-of-land.pdf" },
  { title: "Transfer Certificate (T.C)", file: "/certificates/TC.pdf" },
  { title: "Water Test Certificate", file: "/certificates/water-test.pdf" },
];

export default function Mandatory() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 md:py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* YouTube Video Section */}
        <div
          className="mb-12 relative w-full  overflow-hidden rounded-2xl shadow-lg"
          style={{ paddingTop: "56.25%" }}
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/seyjSN9H3c0"
            title="School Intro Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 md:mb-12">
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
                <h2 className="text-lg font-semibold text-gray-700">
                  {doc.title}
                </h2>
              </div>
              <a
                href={doc.file}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="mt-auto inline-flex items-center justify-center gap-2 border-[1.5px] border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:text-white hover:bg-blue-700 transition"
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
