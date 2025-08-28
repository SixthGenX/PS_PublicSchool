"use client";

import { useState } from "react";
import Image from "next/image";
import { FaClosedCaptioning, FaCross } from "react-icons/fa";
import { TbFlagCancel } from "react-icons/tb";

type Event = {
  id: number;
  title: string;
  description: string;
  image: string;
  details: string;
};

export default function NewsSection() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const events: Event[] = [
    {
      id: 1,
      title: "Annual Science Fair",
      description: "Our school hosted the annual science fair where students showcased innovative projects and experiments.",
      image: "/images/heronews.jpg",
      details: "The science fair was a huge success with over 50 projects presented by students from all grades. Topics ranged from renewable energy to AI robotics. Winners will represent the school in the district-level competition."
    },
    {
      id: 2,
      title: "Sports Day Celebration",
      description: "A fun-filled day with various sports activities and competitions for all students.",
      image: "/images/heroabout.jpg",
      details: "The annual sports day brought together students, teachers, and parents in a celebration of physical fitness and teamwork. Events included track races, relay, football, and tug-of-war."
    },
    {
      id: 3,
      title: "Art & Culture Exhibition",
      description: "Students displayed their artistic talents in the annual art and culture exhibition.",
      image: "/images/heronews.jpg",
      details: "The exhibition featured paintings, sculptures, and performances representing diverse cultures. It was a colorful and inspiring event for the whole school community."
    }
  ];

  return (
    <section className="py-12  bg-[#F9FAFB] relative">
      <div className="container mx-auto px-4 z-[9] relative">
        <h2 className="text-3xl font-bold text-[#1E3A8A] mb-6 text-center">Latest News & Events</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-lg transition overflow-hidden"
            >
              <Image
                src={event.image}
                alt={event.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <button
                  onClick={() => setSelectedEvent(event)}
                  className="text-[#1E3A8A] font-semibold hover:underline"
                >
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-[#000000a1] bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg shadow-lg max-w-xl w-full relative p-6">
            {/* Close Button */}
            <button
              className="absolute top-0 right-2 text-gray-500 hover:text-gray-700 text-[32px]"
              onClick={() => setSelectedEvent(null)}
            >
              x
            </button>
            <Image
              src={selectedEvent.image}
              alt={selectedEvent.title}
              width={600}
              height={400}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold mb-2 text-[#1E3A8A]">{selectedEvent.title}</h3>
            <p className="text-gray-700">{selectedEvent.details}</p>
          </div>
        </div>
      )}
    </section>
  );
}
