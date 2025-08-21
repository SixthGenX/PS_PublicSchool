"use client";
import { useState } from "react";

export default function ResultUpdate() {
  const [formData, setFormData] = useState({
    rollNo: "",
    name: "",
    marks: "",
    class: "1",
    status: "Pass",
  });

  const [results, setResults] = useState([
    { id: 1, rollNo: "101", name: "Aarav Sharma", marks: 89, class: "10", status: "Pass" },
    { id: 2, rollNo: "102", name: "Priya Verma", marks: 45, class: "8", status: "Pass" },
    { id: 3, rollNo: "103", name: "Rohan Mehta", marks: 32, class: "12", status: "Fail" },
    { id: 4, rollNo: "104", name: "Sneha Patel", marks: 76, class: "7", status: "Pass" },
    { id: 5, rollNo: "105", name: "Aditya Singh", marks: 28, class: "9", status: "Fail" },
  ]);

  const [confirmDeleteIndex, setConfirmDeleteIndex] = useState(null);
  const [confirmDeleteAll, setConfirmDeleteAll] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setResults([...results, { ...formData, id: Date.now() }]);
    setFormData({ rollNo: "", name: "", marks: "", class: "1", status: "Pass" });
  };

  const confirmDeleteOne = (index) => {
    setConfirmDeleteIndex(index);
  };

  const handleDeleteConfirmed = () => {
    const updatedResults = results.filter((_, i) => i !== confirmDeleteIndex);
    setResults(updatedResults);
    setConfirmDeleteIndex(null);
  };

  const handleDeleteAllConfirmed = () => {
    setResults([]);
    setConfirmDeleteAll(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center text-[#1E3A8A]">
          Result Update
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label className="block text-sm font-medium mb-1">Roll No*</label>
            <input
              type="text"
              name="rollNo"
              value={formData.rollNo}
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
            <label className="block text-sm font-medium mb-1">Marks*</label>
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
              <option value="Pass">Pass</option>
              <option value="Fail">Fail</option>
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
                      <tr key={index} className="text-center">
                        <td className="border p-2">{res.rollNo}</td>
                        <td className="border p-2">{res.name}</td>
                        <td className="border p-2">{res.marks}</td>
                        <td className="border p-2">Class {res.class}</td>
                        <td
                          className={`border p-2 font-semibold ${
                            res.status === "Pass" ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          {res.status}
                        </td>
                        <td className="border p-2">
                          <button
                            onClick={() => confirmDeleteOne(index)}
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
              <button
                onClick={() => setConfirmDeleteAll(true)}
                className="w-full sm:w-auto bg-red-700 text-white px-6 py-2 rounded-lg hover:bg-red-800"
              >
                Delete All
              </button>
            </div>
          </div>
        )}

        {/* Confirmation Modal - Delete One */}
        {confirmDeleteIndex !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-80 shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-center">Confirm Delete</h3>
              <p className="mb-6 text-center">Are you sure you want to delete this entry?</p>
              <div className="flex justify-between">
                <button
                  onClick={() => setConfirmDeleteIndex(null)}
                  className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeleteConfirmed}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Confirmation Modal - Delete All */}
        {confirmDeleteAll && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-80 shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-center">Confirm Delete All</h3>
              <p className="mb-6 text-center">Are you sure you want to delete all results?</p>
              <div className="flex justify-between">
                <button
                  onClick={() => setConfirmDeleteAll(false)}
                  className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeleteAllConfirmed}
                  className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800"
                >
                  Delete All
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
