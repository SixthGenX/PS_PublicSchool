"use client";
import { useState } from "react";
import { CheckCircle, XCircle, ChevronDown, ChevronUp } from "lucide-react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function Results() {
  const [openClass, setOpenClass] = useState(null);

  // Dummy data for results
  const results = {
    1: [
      { name: "Aarav Sharma", roll: 101, marks: "88%", status: "Pass" },
      { name: "Riya Verma", roll: 102, marks: "76%", status: "Pass" },
      { name: "Vivaan Kapoor", roll: 103, marks: "69%", status: "Pass" },
      { name: "Ishika Malhotra", roll: 104, marks: "82%", status: "Pass" },
      { name: "Arnav Patel", roll: 105, marks: "91%", status: "Pass" },
      { name: "Myra Singh", roll: 106, marks: "73%", status: "Pass" },
      { name: "Krishna Nair", roll: 107, marks: "64%", status: "Pass" },
      { name: "Advika Rathi", roll: 108, marks: "92%", status: "Pass" },
      { name: "Kunal Chauhan", roll: 109, marks: "58%", status: "Pass" },
      { name: "Diya Yadav", roll: 110, marks: "85%", status: "Pass" },
    ],
    2: [
      { name: "Kabir Singh", roll: 201, marks: "91%", status: "Pass" },
      { name: "Simran Kaur", roll: 202, marks: "67%", status: "Pass" },
      { name: "Manav Gupta", roll: 203, marks: "72%", status: "Pass" },
      { name: "Tanya Bansal", roll: 204, marks: "88%", status: "Pass" },
      { name: "Rudra Sharma", roll: 205, marks: "95%", status: "Pass" },
      { name: "Avni Joshi", roll: 206, marks: "63%", status: "Pass" },
      { name: "Hrithik Chauhan", roll: 207, marks: "81%", status: "Pass" },
      { name: "Anika Kapoor", roll: 208, marks: "54%", status: "Pass" },
      { name: "Sarthak Mishra", roll: 209, marks: "77%", status: "Pass" },
      { name: "Meera Rathi", roll: 210, marks: "89%", status: "Pass" },
    ],
    3: [
      { name: "Ananya Gupta", roll: 301, marks: "95%", status: "Pass" },
      { name: "Arjun Mehta", roll: 302, marks: "55%", status: "Pass" },
      { name: "Ira Sharma", roll: 303, marks: "67%", status: "Pass" },
      { name: "Daksh Patel", roll: 304, marks: "73%", status: "Pass" },
      { name: "Sneha Nair", roll: 305, marks: "86%", status: "Pass" },
      { name: "Rahul Singh", roll: 306, marks: "92%", status: "Pass" },
      { name: "Jiya Kapoor", roll: 307, marks: "81%", status: "Pass" },
      { name: "Aryan Chauhan", roll: 308, marks: "59%", status: "Pass" },
      { name: "Ritika Joshi", roll: 309, marks: "74%", status: "Pass" },
      { name: "Mohit Verma", roll: 310, marks: "84%", status: "Pass" },
    ],
    4: [
      { name: "Saanvi Gupta", roll: 401, marks: "89%", status: "Pass" },
      { name: "Aditya Sharma", roll: 402, marks: "71%", status: "Pass" },
      { name: "Kriti Verma", roll: 403, marks: "95%", status: "Pass" },
      { name: "Yuvraj Singh", roll: 404, marks: "62%", status: "Pass" },
      { name: "Tanisha Nair", roll: 405, marks: "80%", status: "Pass" },
      { name: "Raghav Kapoor", roll: 406, marks: "88%", status: "Pass" },
      { name: "Ishaan Malhotra", roll: 407, marks: "76%", status: "Pass" },
      { name: "Pooja Rathi", roll: 408, marks: "69%", status: "Pass" },
      { name: "Lakshya Joshi", roll: 409, marks: "82%", status: "Pass" },
      { name: "Muskan Chauhan", roll: 410, marks: "90%", status: "Pass" },
    ],
    5: [
      { name: "Nikhil Singh", roll: 501, marks: "87%", status: "Pass" },
      { name: "Shreya Gupta", roll: 502, marks: "93%", status: "Pass" },
      { name: "Rohan Verma", roll: 503, marks: "65%", status: "Pass" },
      { name: "Aditi Sharma", roll: 504, marks: "72%", status: "Pass" },
      { name: "Kartik Malhotra", roll: 505, marks: "84%", status: "Pass" },
      { name: "Neha Kapoor", roll: 506, marks: "91%", status: "Pass" },
      { name: "Siddharth Joshi", roll: 507, marks: "78%", status: "Pass" },
      { name: "Avisha Singh", roll: 508, marks: "70%", status: "Pass" },
      { name: "Parth Chauhan", roll: 509, marks: "82%", status: "Pass" },
      { name: "Manya Rathi", roll: 510, marks: "88%", status: "Pass" },
    ],
    6: [
      { name: "Devansh Gupta", roll: 601, marks: "90%", status: "Pass" },
      { name: "Sakshi Verma", roll: 602, marks: "66%", status: "Pass" },
      { name: "Karan Sharma", roll: 603, marks: "74%", status: "Pass" },
      { name: "Aarohi Malhotra", roll: 604, marks: "85%", status: "Pass" },
      { name: "Vansh Kapoor", roll: 605, marks: "92%", status: "Pass" },
      { name: "Riya Joshi", roll: 606, marks: "79%", status: "Pass" },
      { name: "Ansh Chauhan", roll: 607, marks: "61%", status: "Pass" },
      { name: "Tanishq Rathi", roll: 608, marks: "83%", status: "Pass" },
      { name: "Naina Singh", roll: 609, marks: "68%", status: "Pass" },
      { name: "Kavya Patel", roll: 610, marks: "89%", status: "Pass" },
    ],
    7: [
      { name: "Ankit Rana", roll: 701, marks: "83%", status: "Pass" },
      { name: "Roshni Sethi", roll: 702, marks: "79%", status: "Pass" },
      { name: "Aditya Narang", roll: 703, marks: "68%", status: "Pass" },
      { name: "Nisha Gill", roll: 704, marks: "91%", status: "Pass" },
      { name: "Sameer Kapoor", roll: 705, marks: "72%", status: "Pass" },
      { name: "Pooja Malik", roll: 706, marks: "88%", status: "Pass" },
      { name: "Rohit Tandon", roll: 707, marks: "64%", status: "Pass" },
      { name: "Divya Sharma", roll: 708, marks: "97%", status: "Pass" },
      { name: "Arnav Verma", roll: 709, marks: "56%", status: "Pass" },
      { name: "Kritika Bansal", roll: 710, marks: "89%", status: "Pass" },
    ],
    8: [
      { name: "Shivam Chauhan", roll: 801, marks: "84%", status: "Pass" },
      { name: "Aditi Mehra", roll: 802, marks: "92%", status: "Pass" },
      { name: "Lakshay Gupta", roll: 803, marks: "70%", status: "Pass" },
      { name: "Sanya Kapoor", roll: 804, marks: "79%", status: "Pass" },
      { name: "Nitin Yadav", roll: 805, marks: "65%", status: "Pass" },
      { name: "Komal Arora", roll: 806, marks: "88%", status: "Pass" },
      { name: "Ritesh Kumar", roll: 807, marks: "73%", status: "Pass" },
      { name: "Pallavi Sharma", roll: 808, marks: "91%", status: "Pass" },
      { name: "Deepak Rathi", roll: 809, marks: "60%", status: "Pass" },
      { name: "Muskan Gill", roll: 810, marks: "95%", status: "Pass" },
    ],
    9: [
      { name: "Aryan Malhotra", roll: 901, marks: "90%", status: "Pass" },
      { name: "Ritika Verma", roll: 902, marks: "72%", status: "Pass" },
      { name: "Kartik Sharma", roll: 903, marks: "85%", status: "Pass" },
      { name: "Neha Arora", roll: 904, marks: "79%", status: "Pass" },
      { name: "Saurabh Singh", roll: 905, marks: "67%", status: "Pass" },
      { name: "Pooja Sharma", roll: 906, marks: "92%", status: "Pass" },
      { name: "Harsh Patel", roll: 907, marks: "64%", status: "Pass" },
      { name: "Meera Kapoor", roll: 908, marks: "88%", status: "Pass" },
      { name: "Abhay Gupta", roll: 909, marks: "58%", status: "Pass" },
      { name: "Ishika Rana", roll: 910, marks: "94%", status: "Pass" },
    ],
    10: [
      { name: "Vikas Bansal", roll: 1001, marks: "87%", status: "Pass" },
      { name: "Swati Mehta", roll: 1002, marks: "91%", status: "Pass" },
      { name: "Rajesh Kumar", roll: 1003, marks: "75%", status: "Pass" },
      { name: "Anjali Singh", roll: 1004, marks: "82%", status: "Pass" },
      { name: "Karan Chauhan", roll: 1005, marks: "66%", status: "Pass" },
      { name: "Shivani Kapoor", roll: 1006, marks: "93%", status: "Pass" },
      { name: "Aman Gupta", roll: 1007, marks: "70%", status: "Pass" },
      { name: "Radhika Malhotra", roll: 1008, marks: "89%", status: "Pass" },
      { name: "Sumit Yadav", roll: 1009, marks: "62%", status: "Pass" },
      { name: "Naina Sharma", roll: 1010, marks: "95%", status: "Pass" },
    ],
    11: [
      { name: "Parth Sharma", roll: 1101, marks: "83%", status: "Pass" },
      { name: "Riya Khanna", roll: 1102, marks: "78%", status: "Pass" },
      { name: "Mohit Verma", roll: 1103, marks: "88%", status: "Pass" },
      { name: "Simran Arora", roll: 1104, marks: "92%", status: "Pass" },
      { name: "Nikhil Sethi", roll: 1105, marks: "69%", status: "Pass" },
      { name: "Poonam Gupta", roll: 1106, marks: "85%", status: "Pass" },
      { name: "Sahil Kapoor", roll: 1107, marks: "71%", status: "Pass" },
      { name: "Mehak Chauhan", roll: 1108, marks: "95%", status: "Pass" },
      { name: "Rahul Bhatia", roll: 1109, marks: "64%", status: "Pass" },
      { name: "Ankita Mehra", roll: 1110, marks: "89%", status: "Pass" },
    ],
    12: [
      { name: "Dev Sharma", roll: 1201, marks: "91%", status: "Pass" },
      { name: "Shreya Gupta", roll: 1202, marks: "94%", status: "Pass" },
      { name: "Rajat Yadav", roll: 1203, marks: "76%", status: "Pass" },
      { name: "Ayesha Khan", roll: 1204, marks: "88%", status: "Pass" },
      { name: "Harsh Vardhan", roll: 1205, marks: "67%", status: "Pass" },
      { name: "Ira Kapoor", roll: 1206, marks: "95%", status: "Pass" },
      { name: "Aditya Sharma", roll: 1207, marks: "72%", status: "Pass" },
      { name: "Sanya Malhotra", roll: 1208, marks: "89%", status: "Pass" },
      { name: "Kunal Singh", roll: 1209, marks: "64%", status: "Pass" },
      { name: "Pallavi Bansal", roll: 1210, marks: "97%", status: "Pass" },
    ],
  };

  return (
    <div className="min-h-screen bg-blue-900 ">
      {/* <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 relative inline-block">
          Student Results <span className="text-blue-600">(Class 1 – 12)</span>
          <span className="block w-24 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></span>
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Explore the academic performance of our students from Class 1 to Class
          12, showcasing their dedication and achievements.
        </p>
      </div> */}

      <section className="relative bg-blue-900 text-white py-14 sm:py-20 px-4 md:px-6 text-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/group.png"
            alt="Facilities Background"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-blue-900/60"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 md:mb-6">
            Student Results <span className="italic">(Class 1st – 12th)</span>
            <span className="block w-24 h-1 bg-white mx-auto mt-4 rounded-full"></span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-blue-100">
            Explore the academic performance of our students from Class 1 to
            Class 12, showcasing their dedication and achievements.
          </p>
        </div>
      </section>
      <div className="max-w-5xl mx-auto space-y-4 pb-12 md:pb-16 px-4 md:px-6 relative ">
        {Object.keys(results).map((classNum) => {
          const cls = Number(classNum);
          const isOpen = openClass === cls;

          return (
            <div
              key={cls}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              {/* Accordion Header */}
              <button
                onClick={() => setOpenClass(isOpen ? null : cls)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold text-gray-700 hover:bg-gray-100 transition"
              >
                <span>Class {cls} Results</span>
                <ChevronDownIcon
                  className={`h-5 w-5 transform transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Accordion Body */}
              {isOpen && (
                <div className="px-6 pb-6">
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
                      <thead className="bg-gray-200 text-gray-700">
                        <tr>
                          <th className="px-4 py-2 border">Roll No</th>
                          <th className="px-4 py-2 border">Name</th>
                          <th className="px-4 py-2 border">Marks</th>
                          <th className="px-4 py-2 border">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {results[cls].map((student) => (
                          <tr
                            key={student.roll}
                            className="hover:bg-gray-50 transition"
                          >
                            <td className="px-4 py-2 border text-center">
                              {student.roll}
                            </td>
                            <td className="px-4 py-2 border">{student.name}</td>
                            <td className="px-4 py-2 border text-center">
                              {student.marks}
                            </td>
                            <td
                              className={`px-4 py-2 border text-center font-medium ${
                                student.status === "Pass"
                                  ? "text-green-600"
                                  : "text-red-600"
                              }`}
                            >
                              {student.status}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
