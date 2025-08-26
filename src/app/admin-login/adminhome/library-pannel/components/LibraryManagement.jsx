"use client";

import { useState, useEffect } from "react";

export default function LibraryManagement() {
  const [books, setBooks] = useState([]);
  const date = new Date();
  const [formData, setFormData] = useState({
    bookTitle: "",
    bookNumber: "",
    class: "CLASS_1",
    studentName: "",
    rollNo: "",
    bookStatus: "ISSUED",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };


  const fetchBooks = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/library/total?assignedOnly=true`,
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
        setBooks(data?.body?.books || []); // Adjust key based on API response

        console.log(data?.body?.books);
      } else {
        console.error("Failed to fetch books:", data?.message);
      }
    } catch (err) {
      console.error("Error fetching books:", err);
    }
  };

  //  Fetch all books (GET API)
  useEffect(() => {
    fetchBooks();
  }, []);

  // Add new book (POST API)
  const handleAddBook = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      class: String(`CLASS_${formData.class}`),
      rollNo: formData.rollNo ? Number(formData.rollNo) : "",
    };
    try {
      console.log("Adding book with payload:", payload);
      const tokens = localStorage.getItem("adminToken");
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/library`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokens}`,
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
        const created = data?.body?.book || { id: Date.now(), ...payload };
        setBooks((prev) => [...prev, created]);

        setFormData({
          bookTitle: "",
          bookNumber: "",
          class: "CLASS_1",
          studentName: "",
          rollNo: "",
          bookStatus: "ISSUED",
        });

        alert("Book added successfully!");
        fetchBooks();
      } else {
        alert(data?.message || "Failed to add book");
        fetchBooks();
      }
    } catch (err) {
      console.error("Error adding book:", err);
    }
  };

  // ✅ Delete book (local only for now)
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      setBooks((prev) => prev.filter((b) => b.id !== id));
    }
  };

  // const sortedBooks = [...books].sort(
  //   (a, b) =>
  //     Number(a.class.replace("CLASS_", "")) -
  //     Number(b.class.replace("CLASS_", ""))
  // );
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-[#1E3A8A] mb-8">
        School Library Management
      </h1>

      {/* Add Book Form */}
      <form
        onSubmit={handleAddBook}
        className="bg-white shadow-md rounded-xl p-6 max-w-3xl mx-auto mb-10"
      >
        <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-4">
          ➕ Add / Update Book
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="bookTitle"
            placeholder="Book Title"
            value={formData.bookTitle}
            onChange={handleChange}
            required
            className="border p-2 rounded w-full"
          />
          <input
            type="number"
            name="bookNumber"
            placeholder="Book No."
            value={formData.bookNumber}
            onChange={handleChange}
            required
            className="border p-2 rounded w-full"
          />
          <select
            name="class"
            value={formData.class}
            onChange={handleChange}
            required
            className="border p-2 rounded w-full"
          >
            <option value="">Select Class</option>
            {Array.from({ length: 12 }, (_, i) => `${i + 1}`).map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>

          <input
            type="text"
            name="studentName"
            placeholder="Issued To (Student Name)"
            value={formData.studentName}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="number"
            name="rollNo"
            placeholder="Roll No."
            value={formData.rollNo}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <select
            name="bookStatus"
            value={formData.bookStatus}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          >
            <option value="Issued">Issued</option>
          </select>
        </div>
        <button
          type="submit"
          className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Add / Update Book
        </button>
      </form>

      {/* Books Data Table (responsive scroll) */}
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-6 overflow-x-auto">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-4">
          Library Books
        </h2>
        <table className="w-full border border-gray-200 text-sm sm:text-base min-w-[700px]">
          <thead>
            <tr className="bg-indigo-100">
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Title</th>
              <th className="p-2 border">Book No.</th>
              <th className="p-2 border">Class</th>
              <th className="p-2 border">Issued To</th>
              <th className="p-2 border">Roll No</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, idx) => (
              <tr key={book.id || idx} className="text-center">
                 <td className="p-2 border">{book?.createdAt ? new Date(book.createdAt).toLocaleDateString() : "-"}</td>
                <td className="p-2 border">{book?.bookTitle}</td>
                <td className="p-2 border">{book?.bookNumber}</td>
                <td className="p-2 border">{book?.issuedTo?.class}</td>
                <td className="p-2 border">{book?.issuedTo?.name || "-"}</td>
                <td className="p-2 border">{book?.issuedTo?.rollNumber || "-"}</td>
                <td className="p-2 border text-green-600">{book?.bookStatus}</td>
                <td className="p-2 border">
                  <button
                    onClick={() => handleDelete(book.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {books.length === 0 && (
              <tr>
                <td colSpan={8} className="text-center p-4 text-gray-500">
                  No books in library.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
