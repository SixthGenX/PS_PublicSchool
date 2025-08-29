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
    title: "Annual Science Trip",
    description: "Students visited the Nehru Planetarium in New Delhi.",
    image: "/images2/sciencetrip.jpg",
    details: "The Annual Science Trip gave students hands-on exposure to astronomy and space science at the Nehru Planetarium, New Delhi. They explored interactive exhibits, attended a sky show, and learned about celestial bodies, rockets, and space missions. The trip sparked curiosity and enhanced their scientific understanding beyond the classroom."
  },
  {
    id: 2,
    title: "Sports & Yoga Day",
    description: "A full day dedicated to sports competitions and yoga sessions at school.",
    image: "/schoolimages/sports.jpg",
    details: "Sports & Yoga Day promoted fitness, teamwork, and mental well-being. Students participated in track and field events, football, volleyball, and tug-of-war. The day began with a yoga session highlighting the importance of mindfulness and balance. Teachers and parents also joined in to encourage a spirit of healthy competition and unity."
  },
  {
    id: 3,
    title: "Art & Culture Day",
    description: "An exhibition and performances showcasing students’ artistic and cultural talents.",
    image: "/images2/dance2.jpg",
    details: "Art & Culture Day celebrated creativity and diversity through an exhibition of paintings, crafts, and sculptures, along with cultural performances such as dance, music, and drama. Students expressed their imagination and represented different traditions, making the event a vibrant and memorable celebration for the entire school community."
  }
];


  return (
    <section className="py-12  bg-[#F9FAFB] relative">
      <div className="container mx-auto px-4 z-[9] relative">
        <h2 className="text-3xl font-bold text-[#1E3A8A] mb-6 text-center">Events</h2>
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
