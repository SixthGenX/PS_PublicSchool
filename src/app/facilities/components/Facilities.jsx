"use client";

import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Facilities() {
  const images = [
    "/images/stafflab.jpg",
    "/images/stafflab.jpg",
    "/images/stafflab.jpg",
    "/images/stafflab.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };
  const settingsmobile = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const facilities = [
    {
      title: "Library",
      desc: "Our library offers a rich collection of books, journals, and digital resources to encourage reading and research among students.",
      img: "/images/stafflab.jpg",
    },
    {
      title: "Science & Computer Labs",
      desc: "Well-equipped labs for Physics, Chemistry, Biology, and Computer Science provide students with hands-on learning experiences.",
      img: "/images/stafflab.jpg",
    },
    {
      title: "Sports",
      desc: "From cricket and football grounds to indoor games, we encourage physical fitness and teamwork through sports facilities.",
      img: "/images/stafflab.jpg",
    },
    {
      title: "Transport",
      desc: "Safe and reliable bus services are available for students across nearby towns and villages, ensuring hassle-free travel.",
      img: "/images/stafflab.jpg",
    },
    {
      title: "Hostel",
      desc: "Our hostels provide a safe, comfortable, and homely environment with nutritious meals and supervision for outstation students.",
      img: "/images/stafflab.jpg",
    },
  ];

  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 md:mb-6">
            Our Facilities
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-blue-100">
            We provide world-class facilities to ensure holistic growth of our
            students. From academics to sports, every aspect is designed to
            support learning, well-being, and overall development.
          </p>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="relative bg-gray-50 text-gray-900 py-12 md:py-20 px-4 md:px-12 lg:px-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-blue-800 mb-10 md:mb-16">
          Explore Our Facilities
        </h2>
        <div className="grid gap-10 md:gap-14">
          {facilities.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition p-4 sm:p-6 flex flex-col md:flex-row items-center gap-6 md:gap-8"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={500}
                height={350}
                className="rounded-2xl object-cover w-full md:w-[50%] h-[220px] sm:h-[280px] md:h-[300px]"
              />
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl font-semibold text-blue-700 mb-3 sm:mb-4">
                  {item.title}
                </h2>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Facilities Matter */}
      <section className="bg-blue-50 py-16 md:py-24 px-4 md:px-16 lg:px-28 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-800 mb-6">
          Why Facilities Matter
        </h2>
        <p className="text-base sm:text-lg max-w-4xl mx-auto text-gray-700 mb-10 md:mb-12">
          A well-rounded education goes beyond textbooks. With modern labs,
          sports complexes, libraries, hostels, and reliable transport, we
          empower students to grow academically, socially, and physically. Our
          facilities help build confidence, leadership, and lifelong skills.
        </p>

        {/* Image Carousel */}
        <div className="max-w-6xl mx-auto hidden md:block">
          <Slider {...settings}>
            {images.map((src, i) => (
              <div key={i} className="px-2 sm:px-3">
                <Image
                  src={src}
                  alt={`facility-${i}`}
                  width={800} // large enough base
                  height={500}
                  className="rounded-xl shadow-md object-cover w-full h-auto"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="max-w-6xl mx-auto block md:hidden ">
          <Slider {...settingsmobile}>
            {images.map((src, i) => (
              <div key={i} className="px-2 sm:px-3">
                <Image
                  src={src}
                  alt={`facility-${i}`}
                  width={800} // large enough base
                  height={500}
                  className="rounded-xl shadow-md object-cover w-full h-auto"
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Student Life Section */}
      <section className="relative py-16 md:py-24 px-4 md:px-16 lg:px-28 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <Image
            src="/images/stafflab.jpg"
            alt="Student Life"
            width={700}
            height={450}
            className="rounded-3xl object-cover shadow-lg w-full h-[260px] sm:h-[340px] md:h-[400px]"
          />
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-3 md:mb-4">
              Student Life at Our Campus
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Life at our institution is vibrant and engaging. Students benefit
              from a balance of academics, sports, cultural events, and social
              activities. The diverse campus environment encourages
              collaboration, creativity, and lifelong friendships.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-blue-900 text-white py-16 md:py-24 px-4 md:px-16 lg:px-28 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
          What Students Say
        </h2>
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-10">
          <blockquote className="bg-white/10 p-4 sm:p-6 rounded-2xl italic text-base sm:text-lg">
            "The labs and library have given me countless opportunities to learn
            beyond the classroom."
            <span className="block mt-2 sm:mt-3 font-semibold">
              - Student A
            </span>
          </blockquote>
          <blockquote className="bg-white/10 p-4 sm:p-6 rounded-2xl italic text-base sm:text-lg">
            "Sports and hostel life made my school experience unforgettable!"
            <span className="block mt-2 sm:mt-3 font-semibold">
              - Student B
            </span>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
