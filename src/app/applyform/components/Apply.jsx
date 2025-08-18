"use client";
import { useState } from "react";

export default function AdmissionForm() {
  const [formData, setFormData] = useState({
    admissionNumber: "",
    admissionDate: "",
    admissionFees: "",
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/sendAdmissionMail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Admission form submitted successfully!");
    } else {
      alert("Failed to submit admission form.");
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
                placeholder="Admission Number*"
                value={formData.admissionNumber}
                onChange={handleChange}
                className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <input
                type="date"
                name="admissionDate"
                value={formData.admissionDate}
                onChange={handleChange}
                className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <input
                type="number"
                name="admissionFees"
                placeholder="Admission Fees*"
                value={formData.admissionFees}
                onChange={handleChange}
                className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400 outline-none"
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
                className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <input
                type="text"
                name="middleName"
                placeholder="Middle Name"
                value={formData.middleName}
                onChange={handleChange}
                className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name*"
                value={formData.lastName}
                onChange={handleChange}
                className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400 outline-none"
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
                className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <input
                type="text"
                name="city"
                placeholder="City*"
                value={formData.city}
                onChange={handleChange}
                className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <input
                type="text"
                name="zip"
                placeholder="Zip Code*"
                value={formData.zip}
                onChange={handleChange}
                className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  name="code"
                  value={formData.code}
                  readOnly
                  className="border p-3 rounded-lg w-20 focus:ring-2 focus:ring-blue-400 outline-none"
                />
                <input
                  type="text"
                  name="mobile"
                  placeholder="Mobile Number*"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="border p-3 rounded-lg flex-1 focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400 outline-none"
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
                className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <input
                type="text"
                name="siblings"
                placeholder="Siblings Information"
                value={formData.siblings}
                onChange={handleChange}
                className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <textarea
                name="familyInfo"
                placeholder="Family Information"
                value={formData.familyInfo}
                onChange={handleChange}
                className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#2446a1] hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg shadow-md transition w-full md:w-auto"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
