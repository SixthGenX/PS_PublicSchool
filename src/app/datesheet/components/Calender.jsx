import React from "react";
import { BookOpen, Calendar, Users, Lightbulb } from "lucide-react";

const Calender = () => {
  return (
    <section className="relative bg-blue-900 py-8 sm:py-14 px-4 bg-cover bg-center">
      <div className="max-w-4xl sm:max-w-5xl mx-auto text-center">
        <Calendar className="mx-auto text-blue-100 w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6" />
        <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-3 sm:mb-4">
          Academic Calendar
        </h2>
        <p className="text-base sm:text-lg text-blue-100 mb-6 px-2">
          Stay updated with important academic events, examination schedules,
          and school activities throughout the year.
        </p>
        <a
          href="/files/academic-calendar.pdf"
          download="/files/academic-calendar.pdf"
          className="bg-white text-blue-900 px-5 sm:px-6 py-3 rounded-lg font-medium hover:bg-blue-200 transition text-sm sm:text-base"
        >
          View Academic Calendar
        </a>
      </div>
    </section>
  );
};

export default Calender;
