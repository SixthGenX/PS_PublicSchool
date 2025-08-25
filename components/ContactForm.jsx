"use client";

import React, { useState } from "react";
import { FaPaperPlane, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    studentName: "",
    grade: "",
    parentName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({ show: false, success: false, message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setModal({
          show: true,
          success: true,
          message: "✅ Message sent successfully!",
        });
        setFormData({
          studentName: "",
          grade: "",
          parentName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setModal({
          show: true,
          success: false,
          message: "❌ Failed to send message.",
        });
      }
    } catch (error) {
      console.error(error);
      setModal({
        show: true,
        success: false,
        message: "⚠️ Server error, please try again.",
      });
    } finally {
      setLoading(false);
    }
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
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
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

          {/* Animated Submit Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            disabled={loading}
            type="submit"
            className={`md:col-span-2 flex items-center justify-center gap-2 p-3 rounded-lg font-semibold text-white transition ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 hover:scale-[1.02]"
            }`}
          >
            {loading ? (
              <motion.div
                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
              />
            ) : (
              <>
                <FaPaperPlane />
                Send Message
              </>
            )}
          </motion.button>
        </form>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modal.show && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white rounded-2xl p-6 shadow-lg max-w-sm w-full text-center"
            >
              {modal.success ? (
                <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
              ) : (
                <FaTimesCircle className="text-red-500 text-5xl mx-auto mb-4" />
              )}
              <p className="text-lg font-medium">{modal.message}</p>
              <button
                onClick={() => setModal({ ...modal, show: false })}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
