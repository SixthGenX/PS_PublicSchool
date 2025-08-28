"use client";

import { useState } from "react";

export default function DatesheetUpdate() {
  const [files, setFiles] = useState({
    NURSERY_TO_LKG: null,
    FIRST_TO_FIFTH_CLASS: null,
    SIXTH_TO_TENTH_CLASS: null,
    ELEVENTH_TO_TWELFTH_CLASS: null,
  });

  const handleFileChange = (e, group) => {
    const file = e.target.files[0];
    if (file) {
      setFiles((prev) => ({ ...prev, [group]: file }));
    }
  };

  const handleUpload = async (group) => {
    if (!files[group]) {
      alert("Please select a file first!");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("image", files[group]);
      formData.append("type", "RESULT");

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/image/upload`,
        {
          method: "POST",
          headers: {
            token: `Bearer ${localStorage.getItem("adminToken")}`, // ✅ fixed
          },
          body: formData,
        }
      );

      if (!res.ok) throw new Error("Image upload failed");

      const data = await res.json();

      // call update with group and returned imageId
      await updateDatesheet(group, data.body.imageId);

      alert(`✅ ${group} datesheet uploaded successfully!`);
      console.log("Server response:", data);
    } catch (error) {
      console.error(error);
      alert(`❌ Failed to upload ${group} datesheet.`);
    }
  };

  const updateDatesheet = async (classRange, imageId) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/date-sheets/upsert`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            token: `Bearer ${localStorage.getItem("adminToken")}`, // ✅ fixed
          },
          body: JSON.stringify({ classRange, imageId }),
        }
      );

      const data = await res.json();

      if (
        !res.ok ||
        data.status?.apiCode === "DATE_SHEET_NOT_FOUND" ||
        "RESULT_ALREADY_EXISTS"
      ) {
        console.log("No datesheet found, creating one...");
        return;
      }

      alert(`✅ Datesheet updated for ${classRange}`);
      console.log("Update response:", data);
    } catch (error) {
      console.error(error);
      alert(`❌ Failed to update ${classRange} datesheet.`);
    }
  };

  const createDatesheet = async (classRange, imageId) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/date-sheets`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            token: `Bearer ${localStorage.getItem("adminToken")}`, // ✅ fixed
          },
          body: JSON.stringify({ classRange, imageId }),
        }
      );

      if (!res.ok) throw new Error("Create failed");

      const data = await res.json();
      alert(`✅ Created datesheet for ${classRange}`);
      console.log("Create response:", data);
    } catch (error) {
      console.error(error);
      alert(`❌ Failed to create ${classRange} datesheet.`);
    }
  };

  return (
    <section className="bg-blue-900 min-h-screen text-white px-4 sm:px-6 py-8 sm:py-10">
      <h1 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center sm:text-left">
        Datesheet Update Panel
      </h1>
      <p className="text-[14px] sm:text-lg text-gray-100 mb-6 px-2">
        *Upload only image files (JPG, JPEG, PNG). PDF, DOCX, Word, or any other
        file formats are not allowed.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <UploadBox
          title="Nursery to LKG"
          group="NURSERY_TO_LKG"
          file={files.NURSERY_TO_LKG}
          onChange={handleFileChange}
          onUpload={handleUpload}
        />

        <UploadBox
          title="1st to 5th Class"
          group="FIRST_TO_FIFTH_CLASS"
          file={files.FIRST_TO_FIFTH_CLASS}
          onChange={handleFileChange}
          onUpload={handleUpload}
        />

        <UploadBox
          title="6th to 10th Class"
          group="SIXTH_TO_TENTH_CLASS"
          file={files.SIXTH_TO_TENTH_CLASS}
          onChange={handleFileChange}
          onUpload={handleUpload}
        />

        <UploadBox
          title="11th to 12th Class"
          group="ELEVENTH_TO_TWELFTH_CLASS"
          file={files.ELEVENTH_TO_TWELFTH_CLASS}
          onChange={handleFileChange}
          onUpload={handleUpload}
        />
      </div>
    </section>
  );
}

function UploadBox({ title, group, file, onChange, onUpload }) {
  return (
    <div className="bg-white/10 border border-white/20 rounded-lg p-4 sm:p-6">
      <h2 className="text-base sm:text-lg font-semibold mb-3">{title}</h2>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => onChange(e, group)}
        className="mb-3 text-sm sm:text-base underline decoration-amber-500 cursor-pointer"
      />
      {file && (
        <img
          src={URL.createObjectURL(file)}
          alt="Preview"
          className="w-full h-40 sm:h-48 object-contain rounded-lg mb-3"
        />
      )}
      <button
        onClick={() => onUpload(group)}
        className="w-full sm:w-auto bg-white text-blue-900 px-4 py-2 rounded-md font-semibold hover:bg-gray-200"
      >
        Upload
      </button>
    </div>
  );
}
