"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1E3A8A] overflow-hidden text-white pt-5 md:pt-0 pb-6 relative">
         <Image
        src="/images/group.png"
        alt="School Building"
        width={500}
        height={20}
        className="absolute top-[-100px] opacity-30 md:opacity-100  md:top-[-30px] md:right-0 right-[-150px] "
      ></Image>
      <div className="container mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Quick Links */}
        <div className="hidden md:block">
          <h3 className="text-lg font-semibold mb-3 md:mb-4">Quick Links</h3>
          <ul className="text-[#e2e2e2] space-y-2">
            <li>
              <Link href="/" className="hover:text-yellow-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-yellow-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/addimissioninfo"
                className="hover:text-yellow-400 transition"
              >
                Admission
              </Link>
            </li>
            <li>
              <Link
                href="/student-life"
                className="hover:text-yellow-400 transition"
              >
                Students Life
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-yellow-400 transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3 md:mb-4">Contact Us</h3>
          <p className="mb-1 "> +91 13066-90211</p>
          <p className="mb-1 "> +91 94162-93661</p>
          <p className="underline">psbhurri@gmail.com</p>
        </div>

        {/* Location */}
        <div>
          <h3 className="text-lg font-semibold mb-3 md:mb-4">Location</h3>
          <p className="leading-snug">
            P. S. PUBLIC SCHOOL GANAUR ROAD, BHURRI, (SONIPAT)
          </p>
          <a
            href="https://www.google.com/maps/place/3288%2BXJQ+P.S.Public+School,+Bhurri,+Haryana+131101/data=!4m2!3m1!1s0x390db75191f967cb:0x3af4a1a5adc41e6b?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBzI1LjQwLjgYACDIvAcqUSw5NDI1OTU1MCw5NDI4NDQ4NCw5NDIxMjQ5Niw5NDIwNzUwNiw5NDIwODUwNiw5NDIxNzUyMyw5NDIxODY1Myw0NzA4NDM5Myw5NDIxMzIwMEICSU4%3D&skid=cc3c98cd-f646-436c-888e-9c6f66eca10b&g_st=aw"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex cursor-pointer relative z-999 items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-full font-medium hover:bg-yellow-500 hover:scale-105 transition"
          >
            View on Google Maps <FaLocationArrow />
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-6 border-t border-white/20 pt-3 text-center text-sm">
        © {new Date().getFullYear()} P. S. PUBLIC SCHOOL. All rights reserved.
        <br />
        <Link href={"https://sixthgenx.com/"} target="_blank">
          <p className="cursor-pointer  hover:text-yellow-400">
            Created by <span className="font-semibold  "> SixthGenX</span>
          </p>
        </Link>
      </div>
    </footer>
  );
}
