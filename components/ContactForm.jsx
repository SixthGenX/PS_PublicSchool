"use client";
import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    studentName: "",
    grade: "",
    parentName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent!");
    setFormData({
      studentName: "",
      grade: "",
      parentName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section className="bg-[#1E3A8A] pt-16 pb-8 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-blue-700">
            Contact Our School
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            Have questions about admissions, curriculum, or events? Fill out the
            form below and we’ll get back to you soon.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="studentName"
            placeholder="Student Name"
            value={formData.studentName}
            onChange={handleChange}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="text"
            name="grade"
            placeholder="Grade/Class"
            value={formData.grade}
            onChange={handleChange}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="text"
            name="parentName"
            placeholder="Parent/Guardian Name"
            value={formData.parentName}
            onChange={handleChange}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Parent Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Parent Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="md:col-span-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
            required
          />

          <button
            type="submit"
            className="md:col-span-2 flex items-center justify-center gap-2 p-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 hover:scale-[1.02] transition"
          >
            <FaPaperPlane />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
