"use client";

import { useState } from "react";

export default function DatesheetUpdate() {
  const [files, setFiles] = useState({
    nursery: null,
    primary: null,
    middle: null,
    senior: null,
  });

  const handleFileChange = (e, group) => {
    const file = e.target.files[0];
    if (file) {
      setFiles((prev) => ({ ...prev, [group]: file }));
    }
  };

  const handleUpload = (group) => {
    if (!files[group]) {
      alert("Please select a file first!");
      return;
    }
    // Upload API call can go here
    alert(`Datesheet for ${group} uploaded successfully!`);
  };

  return (
    <section className="bg-blue-900 min-h-screen text-white px-6 py-10">
      <h1 className="text-2xl font-bold mb-8"> Datesheet Update Panel</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Nursery to LKG */}
        <div className="bg-white/10 border border-white/20 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-3">Nursery to LKG</h2>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, "nursery")}
            className="mb-3 underline decoration-amber-500  cursor-pointer "
          />
          {files.nursery && (
            <img
              src={URL.createObjectURL(files.nursery)}
              alt="Preview"
              className="w-full h-48 object-contain rounded-lg mb-3"
            />
          )}
          <button
            onClick={() => handleUpload("nursery")}
            className="bg-white text-blue-900 px-4 py-2 rounded-md font-semibold hover:bg-gray-200"
          >
            Upload
          </button>
        </div>

        {/* 1st to 5th */}
        <div className="bg-white/10 border border-white/20 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-3">1st to 5th Class</h2>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, "primary")}
            className="mb-3 underline decoration-amber-500  cursor-pointer "
          />
          {files.primary && (
            <img
              src={URL.createObjectURL(files.primary)}
              alt="Preview"
              className="w-full h-48 object-contain rounded-lg mb-3"
            />
          )}
          <button
            onClick={() => handleUpload("primary")}
            className="bg-white text-blue-900 px-4 py-2 rounded-md font-semibold hover:bg-gray-200"
          >
            Upload
          </button>
        </div>

        {/* 6th to 10th */}
        <div className="bg-white/10 border border-white/20 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-3">6th to 10th Class</h2>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, "middle")}
            className="mb-3 underline decoration-amber-500  cursor-pointer "
          />
          {files.middle && (
            <img
              src={URL.createObjectURL(files.middle)}
              alt="Preview"
              className="w-full h-48 object-contain rounded-lg mb-3"
            />
          )}
          <button
            onClick={() => handleUpload("middle")}
            className="bg-white text-blue-900 px-4 py-2 rounded-md font-semibold hover:bg-gray-200"
          >
            Upload
          </button>
        </div>

        {/* 11th to 12th */}
        <div className="bg-white/10 border border-white/20 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-3">11th to 12th Class</h2>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, "senior")}
            className="mb-3 underline decoration-amber-500  cursor-pointer "
          />
          {files.senior && (
            <img
              src={URL.createObjectURL(files.senior)}
              alt="Preview"
              className="w-full h-48 object-contain rounded-lg mb-3"
            />
          )}
          <button
            onClick={() => handleUpload("senior")}
            className="bg-white text-blue-900 px-4 py-2 rounded-md font-semibold hover:bg-gray-200"
          >
            Upload
          </button>
        </div>
      </div>
    </section>
  );
}
