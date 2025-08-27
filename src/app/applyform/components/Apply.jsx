"use client";
import { useState, useEffect } from "react";

export default function AdmissionForm() {
  const [formData, setFormData] = useState({
    admissionNumber: "",
    admissionDate: "",
    admissionFees: "00",
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    gender: "",
    address: "",
    state: "",
    city: "",
    zip: "",
    code: "+91",
    mobile: "",
    email: "",
    previousSchool: "",
    siblings: "",
    familyInfo: "",
  });

  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({ show: false, success: true, message: "" });

  // Generate Admission Number & Date
  useEffect(() => {
    generateAdmissionData();
  }, []);

  const generateAdmissionData = () => {
    const now = new Date();
    const admissionNumber = `${now.getFullYear()}${String(
      now.getMonth() + 1
    ).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}-${String(
      now.getHours()
    ).padStart(2, "0")}${String(now.getMinutes()).padStart(2, "0")}${String(
      now.getSeconds()
    ).padStart(2, "0")}`;
    const admissionDate = now.toISOString().split("T")[0];

    setFormData((prev) => ({
      ...prev,
      admissionNumber,
      admissionDate,
    }));
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setModal({
          show: true,
          success: true,
          message: "✅ Admission form submitted successfully!",
        });

        // Reset form but regenerate Admission No & Date
        generateAdmissionData();
        setFormData((prev) => ({
          ...prev,
          admissionFees: "00",
          firstName: "",
          middleName: "",
          lastName: "",
          dob: "",
          gender: "",
          address: "",
          state: "",
          city: "",
          zip: "",
          code: "+91",
          mobile: "",
          email: "",
          previousSchool: "",
          siblings: "",
          familyInfo: "",
        }));
      } else {
        setModal({
          show: true,
          success: false,
          message: "❌ Failed to submit admission form.",
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
    <div className="min-h-screen bg-gradient-to-br from-[#1E3A8A] to-[#1E3A8A]">
      {/* Hero Section */}
      <section className="text-center py-12 px-6 md:py-20 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Student Admission 2025
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-blue-100">
          Apply for admission easily through our online portal. Fill in the
          required details and submit your application securely.
        </p>
      </section>

      {/* Form Container */}
      <div className="max-w-5xl mx-auto bg-white p-6 md:p-10 shadow-2xl rounded-2xl -mt-8 md:-mt-12">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Admission Info */}
          <div className="p-5 md:p-6 border rounded-xl bg-gray-50 shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-blue-800">
              Admission Info
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <input
                type="text"
                name="admissionNumber"
                value={formData.admissionNumber}
                readOnly
                className="border p-3 rounded-lg w-full bg-gray-100 cursor-not-allowed"
              />
              <input
                type="date"
                name="admissionDate"
                value={formData.admissionDate}
                readOnly
                className="border p-3 rounded-lg w-full bg-gray-100 cursor-not-allowed"
              />
              <input
                type="number"
                name="admissionFees"
                value={formData.admissionFees}
                readOnly
                className="border p-3 rounded-lg w-full bg-gray-100 cursor-not-allowed"
              />
            </div>
          </div>

          {/* Student Info */}
          <div className="p-5 md:p-6 border rounded-xl bg-gray-50 shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-blue-800">
              Student Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <input
                type="text"
                name="firstName"
                placeholder="First Name*"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="border p-3 rounded-lg w-full"
              />
              <input
                type="text"
                name="middleName"
                placeholder="Middle Name"
                value={formData.middleName}
                onChange={handleChange}
                className="border p-3 rounded-lg w-full"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name*"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="border p-3 rounded-lg w-full"
              />
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
                className="border p-3 rounded-lg w-full"
              />
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="border p-3 rounded-lg w-full"
              >
                <option value="">Select Gender*</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Contact Info */}
          <div className="p-5 md:p-6 border rounded-xl bg-gray-50 shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-blue-800">
              Contact Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <textarea
                name="address"
                placeholder="Address*"
                value={formData.address}
                onChange={handleChange}
                required
                className="border p-3 rounded-lg w-full"
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                className="border p-3 rounded-lg w-full"
              />
              <input
                type="text"
                name="city"
                placeholder="City*"
                value={formData.city}
                onChange={handleChange}
                required
                className="border p-3 rounded-lg w-full"
              />
              <input
                type="text"
                name="zip"
                placeholder="Zip Code*"
                value={formData.zip}
                onChange={handleChange}
                required
                className="border p-3 rounded-lg w-full"
              />
              <div className="flex  flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  name="code"
                  value={formData.code}
                  readOnly
                  className="border p-3 rounded-lg w-20 bg-gray-100 cursor-not-allowed"
                />
                <input
                  type="text"
                  name="mobile"
                  placeholder="Mobile Number*"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className="border p-3 rounded-lg flex-1"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                required
                className="border p-3 rounded-lg w-full"
              />
            </div>
          </div>

          {/* Extra Info */}
          <div className="p-5 md:p-6 border rounded-xl bg-gray-50 shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-blue-800">
              Additional Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <input
                type="text"
                name="previousSchool"
                placeholder="Previous School"
                value={formData.previousSchool}
                onChange={handleChange}
                className="border p-3 rounded-lg w-full"
              />
              <input
                type="text"
                name="siblings"
                placeholder="Siblings Information"
                value={formData.siblings}
                onChange={handleChange}
                className="border p-3 rounded-lg w-full"
              />
              <textarea
                name="familyInfo"
                placeholder="Family Information"
                value={formData.familyInfo}
                onChange={handleChange}
                className="border p-3 rounded-lg w-full"
              />
            </div>
          </div>

          {/* Submit */}
          <div className="text-center flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className={`bg-[#2446a1] text-white px-6 py-3 rounded-lg text-lg shadow-md transition w-full md:w-auto flex items-center justify-center gap-2 ${
                loading ? "opacity-75 cursor-not-allowed" : "hover:bg-blue-700"
              }`}
            >
              {loading && (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4a8 8 0 00-8 8h4z"
                  ></path>
                </svg>
              )}
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </div>
        </form>
      </div>

      {/* Modal */}
      {modal.show && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 bg-opacity-50 z-50">
          <div className="bg-white rounded-xl shadow-xl p-6 max-w-sm w-full text-center">
            <h2
              className={`text-xl font-semibold ${
                modal.success ? "text-green-600" : "text-red-600"
              }`}
            >
              {modal.success ? "Success 🎉" : "Oops!"}
            </h2>
            <p className="mt-3 text-gray-700">{modal.message}</p>
            <button
              onClick={() => setModal({ ...modal, show: false })}
              className="mt-5 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
