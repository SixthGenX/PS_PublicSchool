"use client";

import { useRef } from "react";
import { FileDown, ArrowRight, CheckCircle2, Phone, Mail, MapPin, CreditCard, ClipboardList } from "lucide-react";

export default function AdmissionPage() {
  const feesRef = useRef(null);
  const procedureRef = useRef(null);

  const scrollTo = (el) => {
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 80; // header offset
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const feeRows = [
    { head: "Registration (one-time, non-refundable)", amount: "₹ 1,000" },
    { head: "Admission (one-time)", amount: "₹ 5,000" },
    { head: "Tuition (Monthly)", amount: "₹ 2,500 – ₹ 4,000 (Class-wise)" },
    { head: "Lab / Library (Quarterly)", amount: "₹ 1,200" },
    { head: "Activity (Quarterly)", amount: "₹ 800" },
    { head: "Transport (Optional, Monthly)", amount: "₹ 1,000 – ₹ 2,000 (Route-wise)" },
  ];

  const documents = [
    "Birth Certificate (photocopy)",
    "Aadhaar / Govt. ID (Student & Parents)",
    "Passport-size Photos (Student x2, Parents x1 each)",
    "Previous School Report Card / TC (if applicable)",
    "Address Proof",
  ];

  return (
    <main className="bg-gray-50 text-gray-800">
      {/* HERO */}
      <section className="relative bg-blue-900 text-white py-16 sm:py-24 px-4 md:px-6 text-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/group.png"
            alt="Admission Background"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-blue-900/70 " />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
            Admissions — <br></br> Session 2026–2027
          </h1>
          <p className="mt-4 text-sm sm:text-lg text-blue-50">
            Join a culture of curiosity, character, and competence. Apply online or visit the school office.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => scrollTo(feesRef.current)}
              className="px-5 sm:px-6 py-2.5 rounded-full bg-white text-blue-900 font-semibold shadow-lg hover:translate-y-[-1px] transition"
            >
              View Fee Structure 
            </button>
            <button
              onClick={() => scrollTo(procedureRef.current)}
              className="px-5 sm:px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg flex items-center gap-2 transition"
            >
              Admission Procedure <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* QUICK ACTIONS */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 -mt-8 sm:-mt-10 relative z-20">
        <div className="grid sm:grid-cols-3 gap-4">
          <a
            href="/admission/admission-form.pdf"
            target="_blank"
            className="bg-white rounded-2xl shadow-md hover:shadow-lg p-4 sm:p-5 flex items-center gap-3 border border-gray-100"
          >
            <ClipboardList className="text-blue-700" />
            <div>
              <p className="font-semibold">Download Admission Form</p>
              <p className="text-xs text-gray-500">Offline submission at school</p>
            </div>
          </a>
          <a
            href="/admission/fee-structure.pdf"
            target="_blank"
            className="bg-white rounded-2xl shadow-md hover:shadow-lg p-4 sm:p-5 flex items-center gap-3 border border-gray-100"
          >
            <CreditCard className="text-blue-700" />
            <div>
              <p className="font-semibold">Download Fee Structure (PDF)</p>
              <p className="text-xs text-gray-500">Updated for current session</p>
            </div>
          </a>
          <a
            href="/admission/prospectus.pdf"
            target="_blank"
            className="bg-white rounded-2xl shadow-md hover:shadow-lg p-4 sm:p-5 flex items-center gap-3 border border-gray-100"
          >
            <FileDown className="text-blue-700" />
            <div>
              <p className="font-semibold">Prospectus</p>
              <p className="text-xs text-gray-500">Courses • Facilities • Policies</p>
            </div>
          </a>
        </div>
      </section>

      {/* PROCEDURE */}
      <section ref={procedureRef} id="procedure" className="max-w-6xl mx-auto px-4 md:px-6 py-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 text-center">Admission Procedure</h2>
        <p className="text-gray-600 text-sm sm:text-base text-center mt-2 max-w-3xl mx-auto">
          Apply online in minutes, or complete your application in person at the school office.
        </p>

        <div className="grid lg:grid-cols-2 gap-6 mt-8">
          {/* Online */}
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-7 border border-gray-100">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Online Admission</h3>
            <ol className="mt-4 space-y-3 text-sm sm:text-base">
              {[
                "Fill the online form and upload documents.",
                "Pay the registration fee online.",
                "Schedule interaction/verification (if required).",
                "Receive confirmation & admission kit via email.",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-600 mt-0.5" />
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <a
              href="/applyform"
              className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Apply Online <ArrowRight size={18} />
            </a>
          </div>

          {/* Offline */}
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-7 border border-gray-100">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Offline (School Office)</h3>
            <ol className="mt-4 space-y-3 text-sm sm:text-base">
              {[
                "Collect the admission form from the office.",
                "Submit filled form with required documents.",
                "Pay registration fee at the counter.",
                "Attend interaction/verification if applicable.",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-600 mt-0.5" />
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <a
              href="/admission/admission-form.pdf"
              target="_blank"
              className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-blue-700 border border-blue-200 font-medium hover:bg-blue-50 transition"
            >
              Download Form (PDF) <FileDown size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* FEE STRUCTURE */}
      <section ref={feesRef} id="fees" className="bg-white/60">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 text-center">Fee Structure</h2>
          <p className="text-gray-600 text-sm sm:text-base text-center mt-2 max-w-3xl mx-auto">
            Fee slabs vary by class. Transport is optional and route-based. All amounts are indicative.
          </p>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-left text-sm sm:text-base">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 sm:px-6 py-3 border-b">Head</th>
                  <th className="px-4 sm:px-6 py-3 border-b">Amount</th>
                </tr>
              </thead>
              <tbody>
                {feeRows.map((r, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="px-4 sm:px-6 py-3 border-b">{r.head}</td>
                    <td className="px-4 sm:px-6 py-3 border-b font-semibold text-gray-800">{r.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/admission/fee-structure.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Download Fee PDF <FileDown size={18} />
            </a>
            <span className="text-xs sm:text-sm text-gray-500">
              * Scholarships / concessions available as per school policy.
            </span>
          </div>
        </div>
      </section>

      {/* DOCUMENTS REQUIRED */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 text-center">Documents Required</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {documents.map((d, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 sm:p-5 flex items-start gap-3">
              <CheckCircle2 className="text-green-600 mt-0.5 shrink-0" />
              <p className="text-sm sm:text-base">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ (lightweight) */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 pb-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 text-center">FAQs</h2>
        <div className="mt-6 space-y-3">
          {[
            {
              q: "What are the admission dates?",
              a: "Admissions open from April–June (main cycle). Late admissions depend on seat availability.",
            },
            { q: "Is there an entrance test?", a: "For select classes, a basic readiness check / interaction may be conducted." },
            { q: "How do I track my online application?", a: "You’ll receive email/SMS updates. You can also contact the admission desk." },
          ].map((item, i) => (
            <details key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
              <summary className="cursor-pointer font-semibold text-gray-800">{item.q}</summary>
              <p className="mt-2 text-sm text-gray-600">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CONTACT CARD */}
      <section className="bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 sm:py-12 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold">Need help with admissions?</h3>
            <p className="text-blue-100 mt-1 text-sm sm:text-base">
              Our admissions team is happy to guide you through the process—online or offline.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a href="tel:+919416293661" className="flex items-center gap-2 bg-white text-blue-900 px-4 py-2.5 rounded-lg font-semibold hover:translate-y-[-1px] transition">
              <Phone size={18} /> Call
            </a>
            <a href="mailto:psbhurri@gmail.com" className="flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2.5 rounded-lg font-semibold hover:bg-white/15 transition">
              <Mail size={18} /> Email
            </a>
            <a href="https://maps.google.com" target="_blank" className="flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2.5 rounded-lg font-semibold hover:bg-white/15 transition">
              <MapPin size={18} /> Visit
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
