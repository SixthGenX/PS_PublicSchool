"use client";

import { useEffect, useState } from "react";

export default function DateSheetPage() {
  const [dateSheets, setDateSheets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Use sessionStorage to avoid re-fetching
    const cached = sessionStorage.getItem("dateSheets");
    if (cached) {
      setDateSheets(JSON.parse(cached));
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/date-sheets?fields=classText,image._id`
        );
        if (!res.ok) throw new Error("Failed to fetch date sheets");
        const data = await res.json();

        const sheets = data.body.dateSheets || [];
        setDateSheets(sheets);
        sessionStorage.setItem("dateSheets", JSON.stringify(sheets));
      } catch (err) {
        console.error("Error fetching date sheets:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Optimized download (only called on click)
  const handleDownload = async (id, name) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/image/${id}`);
      if (!res.ok) throw new Error("Download failed");

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `${name || "datesheet"}.png`;
      document.body.appendChild(a);
      a.click();
      a.remove();

      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Error downloading image:", err);
    }
  };

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
          Examination Date Sheets <br />
          <span className="italic text-2xl sm:text-4xl md:text-5xl">
            (Classes Nursery – 12th)
          </span>
          <span className="block w-24 h-1 bg-white mx-auto mt-4 rounded-full"></span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-blue-100">
          Stay updated with the latest examination schedules. Download the date
          sheets for your respective class.
        </p>

        {/* Loader */}
        {loading && (
          <p className="mt-8 text-yellow-300">Loading date sheets...</p>
        )}

        {/* Date Sheet Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 lg:mt-16">
          {dateSheets?.map((sheet, idx) => (
            <div
              key={sheet._id || idx}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
            >
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/image/${sheet.image._id}`}
                alt={`Date Sheet ${idx + 1}`}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="p-4 bg-white text-center">
                <p className="text-base sm:text-lg max-w-4xl mx-auto text-gray-700 mb-2">
                  {sheet.classText}
                </p>

                {/* Download button only */}
                <button
                  onClick={() => handleDownload(sheet.image._id, sheet.classText)}
                  className="inline-block px-4 py-2 text-white bg-green-600 font-semibold rounded-lg hover:text-black shadow hover:bg-[#FBBF24] transition"
                >
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
