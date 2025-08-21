"use client";

import { useState } from "react";

export default function LibraryManagement() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Mathematics Grade 6",
      author: "R.K. Sharma",
      class: 6,
      issuedTo: "Aman",
      rollNo: 21,
      status: "Issued",
    },
    {
      id: 2,
      title: "Science Grade 10",
      author: "Neha Gupta",
      class: 10,
      issuedTo: "",
      rollNo: "",
      status: "Issued",
    },
    {
      id: 3,
      title: "English Grammar Grade 8",
      author: "S. Kumar",
      class: 8,
      issuedTo: "Priya",
      rollNo: 14,
      status: "Issued",
    },
    {
      id: 4,
      title: "History Grade 12",
      author: "Vikas Mehta",
      class: 12,
      issuedTo: "",
      rollNo: "",
      status: "Issued",
    },
  ]);

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    class: "",
    issuedTo: "",
    rollNo: "",
    status: "Issued",
  });

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // add new book
  const handleAddBook = (e) => {
    e.preventDefault();
    const newBook = {
      id: books.length + 1,
      ...formData,
      class: Number(formData.class),
    };
    setBooks([...books, newBook]);
    setFormData({
      title: "",
      author: "",
      class: "",
      issuedTo: "",
      rollNo: "",
      status: "Issued",
    });
  };

  // delete book with confirmation
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this book?"
    );
    if (confirmDelete) {
      setBooks(books.filter((book) => book.id !== id));
    }
  };

  // sort by class
  const sortedBooks = [...books].sort((a, b) => a.class - b.class);

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
            name="title"
            placeholder="Book Title"
            value={formData.title}
            onChange={handleChange}
            required
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="author"
            placeholder="Book No."
            value={formData.author}
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
            {[...Array(12).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>
                Class {num + 1}
              </option>
            ))}
          </select>
          <input
            type="text"
            name="issuedTo"
            placeholder="Issued To (Student Name)"
            value={formData.issuedTo}
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
            name="status"
            value={formData.status}
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
              <th className="p-2 border">ID</th>
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
            {sortedBooks.map((book) => (
              <tr key={book.id} className="text-center">
                <td className="p-2 border">{book.id}</td>
                <td className="p-2 border">{book.title}</td>
                <td className="p-2 border">{book.author}</td>
                <td className="p-2 border">Class {book.class}</td>
                <td className="p-2 border">{book.issuedTo || "-"}</td>
                <td className="p-2 border">{book.rollNo || "-"}</td>
                <td className="p-2 border text-green-600">{book.status}</td>
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
                <td colSpan="8" className="text-center p-4 text-gray-500">
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
