"use client";
import { useState, useEffect } from "react";

export default function ResultUpdate() {
  const [formData, setFormData] = useState({
    rollNumber: "",
    name: "",
    marks: "",
    class: "1",
    status: "PASS",
  });

  const [results, setResults] = useState([]);
  const [confirmDeleteIndex, setConfirmDeleteIndex] = useState(null);
  const [confirmDeleteAll, setConfirmDeleteAll] = useState(false);

  // ✅ Fetch Results (GET API)

  function transformResults(data) {
    return data
      .map((item) => {
        // extract class number → "CLASS_1" → 1
        const classNumber = Number(item.class.replace("CLASS_", ""));

        return {
          id: item._id,
          classNumber,
          rollNumber: item.rollNumber,
          name: item.studentId?.name || "Unknown",
          marks: item.marks,
          status: item.status === "PASS" ? "Pass" : "Fail",
        };
      })
      .sort((a, b) => {
        // sort by class first, then roll number
        if (a.classNumber !== b.classNumber) {
          return a.classNumber - b.classNumber;
        }
        return a.rollNumber - b.rollNumber;
      });
  }

  const fetchResults = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/result`,
        {
          headers: {
            "Content-Type": "application/json",
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
        console.log(transformed);
        setResults(transformed);
        console.log("Fetched Results:", transformed);
        // setResults(data?.body || []);
        // console.log(data?.body);
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

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // ✅ Add Result (POST API)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      marks: Number(formData.marks),
      rollNumber: Number(formData.rollNumber),
      class: String(`CLASS_${formData.class}`),
    };
    const tokens = localStorage.getItem("adminToken");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/result/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
            token: `Bearer ${tokens}`,
          },
          body: JSON.stringify(payload),
        }
      );

      let data = null;
      try {
        data = await res.json();
      } catch (_) {}

      if (res.ok) {
        const created = data?.body?.result || { id: Date.now(), ...payload };
        setResults((prev) => [...prev, created]);

        setFormData({
          rollNumber: "",
          name: "",
          marks: "",
          class: "1",
          status: "PASS",
        });

        alert("Result added successfully!");
        fetchResults();
      } else {
        alert(data?.message || "Failed to add result");
        fetchResults();
      }
    } catch (err) {
      console.error("Error adding result:", err);
    }
  };

  const handleDeleteById = async (id) => {
    console.log("Deleting ID:::::::::", id);
    if (!id) {
      alert("Something went wrong");
      return;
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/result/${id}`, // 🔹 
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            token: `Bearer ${localStorage.getItem("adminToken")}`,
          },
        }
      );

      if (!res.ok) {
        console.error("Failed to delete. Status:", res.status);
        alert("Result Deleted successfully!");
      }
    } catch (err) {
      console.error("Error deleting entry:", err);
      alert("Result Deleted successfully!");
    } finally {
      fetchResults(); // 🔄 Always refresh results after delete
      setConfirmDeleteIndex(null); // 🔹 Reset confirmation
    }
  };

  const handleDeleteAllConfirmed = async () => {
    const tokens = localStorage.getItem("adminToken");
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/result`, // 🔹 your API endpoint
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            token: `Bearer ${tokens}`,
          },
        }
      );

      if (res.ok) {
        alert("✅ All data deleted successfully!");
        setConfirmDeleteAll(false);
        fetchResults();
      } else {
        alert("❌ Failed to delete data");
        setConfirmDeleteAll(false);
        fetchResults();
      }
    } catch (err) {
      console.error("Error:", err);
      alert("⚠️ Something went wrong");
      setConfirmDeleteAll(false);
    } finally {
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center text-[#1E3A8A]">
          Result Update
        </h2>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
        >
          <div>
            <label className="block text-sm font-medium mb-1">Roll No*</label>
            <input
              type="number"
              name="rollNumber"
              value={formData.rollNumber}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Name*</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Percentage*</label>
            <input
              type="number"
              name="marks"
              value={formData.marks}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Class*</label>
            <select
              name="class"
              value={formData.class}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
            >
              {[...Array(12)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  Class {i + 1}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Status*</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
            >
              <option value="PASS">Pass</option>
              <option value="FAIL">Fail</option>
            </select>
          </div>

          <div className="sm:col-span-2 flex justify-center">
            <button
              type="submit"
              className="w-full sm:w-auto bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Add Result
            </button>
          </div>
        </form>

        {/* Results Table */}
        {results.length > 0 && (
          <div className="mt-8">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Results</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-sm sm:text-base">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="border p-2">Roll No</th>
                    <th className="border p-2">Name</th>
                    <th className="border p-2">Marks</th>
                    <th className="border p-2">Class</th>
                    <th className="border p-2">Status</th>
                    <th className="border p-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {[...results]
                    .sort((a, b) => Number(a.class) - Number(b.class))
                    .map((res, index) => (
                      <tr key={res.id || index} className="text-center">
                        <td className="border p-2">{res?.rollNumber}</td>
                        <td className="border p-2">{res?.name}</td>
                        <td className="border p-2">{res?.marks}</td>
                        <td className="border p-2">{res?.classNumber}</td>
                        <td
                          className={`border p-2 font-semibold ${
                            res.status === "Pass"
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {res.status}
                        </td>
                        <td className="border p-2">
                          <button
                            onClick={() => setConfirmDeleteIndex(res?.id)}
                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm sm:text-base"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex justify-center">
              {" "}
              <button
                onClick={() => setConfirmDeleteAll(true)}
                className="w-full sm:w-auto bg-red-700 text-white px-6 py-2 rounded-lg hover:bg-red-800"
              >
                {" "}
                Delete All{" "}
              </button>{" "}
            </div>{" "}
          </div>
        )}
      </div>

      {confirmDeleteIndex !== null && (
        <div className="fixed inset-0 bg-black/60 bg-opacity-40 flex items-center justify-center z-50">
          {" "}
          <div className="bg-white rounded-lg p-6 w-80 shadow-lg">
            {" "}
            <h3 className="text-lg font-semibold mb-4 text-center">
              Confirm Delete
            </h3>{" "}
            <p className="mb-6 text-center">
              Are you sure you want to delete this entry?
            </p>{" "}
            <div className="flex justify-between">
              {" "}
              <button
                onClick={() => setConfirmDeleteIndex(null)}
                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
              >
                {" "}
                Cancel{" "}
              </button>{" "}
              <button
                onClick={() => handleDeleteById(confirmDeleteIndex)}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                {" "}
                Delete{" "}
              </button>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      )}
      {confirmDeleteAll && (
        <div className="fixed inset-0 bg-black/60 bg-opacity-40 flex items-center justify-center z-50">
          {" "}
          <div className="bg-white rounded-lg p-6 w-80 shadow-lg">
            {" "}
            <h3 className="text-lg font-semibold mb-4 text-center">
              Confirm Delete All
            </h3>{" "}
            <p className="mb-6 text-center">
              Are you sure you want to delete all results?
            </p>{" "}
            <div className="flex justify-between">
              {" "}
              <button
                onClick={() => setConfirmDeleteAll(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
              >
                {" "}
                Cancel{" "}
              </button>{" "}
              <button
                onClick={handleDeleteAllConfirmed}
                className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800"
              >
                {" "}
                Delete All{" "}
              </button>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      )}
    </div>
  );
}
