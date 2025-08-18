"use client";

import Image from "next/image";

export default function DateSheetPage() {
  const dateSheets = [
    {
      title: "Class 1–5 Date Sheet",
      img: "/images/datesheet.jpg", // replace with your image
      file: "/datesheets/class1-5.pdf",
      class:"Nursery & LKG"
    },
    {
      title: "Class 6–8 Date Sheet",
      img: "/images/datesheet.jpg",
      file: "/datesheets/class6-8.pdf",
      class:"1st to 5th"
    },
    {
      title: "Class 9–10 Date Sheet",
      img: "/images/datesheet.jpg",
      file: "/datesheets/class9-10.pdf",
      class:"6th to 10th"
    },
    {
      title: "Class 11–12 Date Sheet",
      img: "/images/datesheet.jpg",
      file: "/datesheets/class11-12.pdf",
      class:"11th & 12th"
    },
  ];

  return (
    <section className="relative bg-blue-900 text-white py-14 sm:py-18 px-4 md:px-6 text-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/group.png"
          alt="Date Sheet Background"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-blue-900/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 md:mb-6">
          Examination Date Sheets{" "}
          <br></br>
          <span className="italic text-2xl sm:text-4xl md:text-5xl">(Classes Nursery – 12th)</span>
          <span className="block w-24 h-1 bg-white mx-auto mt-4 rounded-full"></span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-blue-100">
          Stay updated with the latest examination schedules. Download the date
          sheets for your respective class.
        </p>

        {/* Date Sheet Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 lg:mt-16">
          {dateSheets.map((sheet, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
            >
              <img
                src={`${sheet.img}`}
                alt={`Date Sheet ${idx + 1}`}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white text-center">
                <p className="text-base sm:text-lg max-w-4xl mx-auto text-gray-700 mb-2">{sheet.class}</p>
                <a
                  href={`/downloads/${sheet}`}
                  download
                  className="inline-block px-4 py-2 text-white bg-blue-900  font-semibold rounded-lg hover:text-black shadow hover:bg-[#FBBF24] transition"
                >
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
