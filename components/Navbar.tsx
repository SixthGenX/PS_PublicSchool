"use client";

import { useState } from "react";
import Link from "next/link";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa"; // npm install react-icons

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    {
      title: "About Us",
      links: [
        { name: "About School", href: "/about" },
        { name: "Staff & Faculty", href: "/staff-and-faculty" },
        { name: "Mandatory Disclosure", href: "/mandatory-public-disclosure" },
      ],
    },
    {
      title: "Academics",
      links: [
        { name: "Academics Overview", href: "/academic" },
        { name: "Facilities", href: "/facilities" },
        { name: "Student Life", href: "/student-life" },
     
      ],
    },
    {
      title: "Student",
      links: [
        { name: "Students Result", href: "/results" },
        { name: "Datesheet", href: "/datesheet" },
        { name: "Online Fee Payment", href: "/payment" },
        { name: "CBSE Result", href: "https://results.cbse.nic.in/" },
      ],
    },
    {
      title: "Admissions",
      links: [
        { name: "Admissions Info", href: "/admissions" },
        { name: "Apply Online", href: "/admissions#apply" },
      ],
    },
    {
      title: "Gallery",
      links: [
        { name: "Photo Gallery", href: "/gallery" },
        { name: "News & Events", href: "/news" },
      ],
    },
  ];

  const toggleDropdown = (title: string) => {
    setOpenMenu(openMenu === title ? null : title);
  };

  return (
    <nav className="bg-[#1E3A8A] text-white  sticky top-0 z-50 border-b-[0.1px] border-[#FBBF24]">
      <div className="container mx-auto px-4">
        {/* Top row */}
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
         <Link href="/"> <h1 className="text-2xl font-bold tracking-wide">PS Public School</h1></Link>

          
          <ul className="hidden md:flex space-x-8 text-lg font-medium">
            {menuItems.map((menu) => (
              <li key={menu.title} className="relative">
                <button
                  onClick={() => toggleDropdown(menu.title)}
                  className="flex items-center hover:text-[#FBBF24] transition"
                >
                  {menu.title}
                  <FaChevronDown
                    className={`ml-1 text-sm transition-transform ${
                      openMenu === menu.title ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown */}
                {openMenu === menu.title && (
                  <ul className="absolute left-0 mt-3 w-56 bg-white text-[#111827] rounded-lg shadow-lg py-2 z-50">
                    {menu.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          onClick={() => setOpenMenu(null)} 
                          className="block px-5 py-2 hover:bg-[#FBBF24] hover:text-[#111827] transition"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            {/* Contact Button */}
            <li>
              <Link
                href="/contact"
                className="bg-[#FBBF24] text-[#111827] px-5 py-2 rounded-md font-semibold hover:bg-yellow-500 transition"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-[#1E3A8A] text-white p-4 space-y-4">
            {menuItems.map((menu) => (
              <div key={menu.title}>
                <button
                  onClick={() => toggleDropdown(menu.title)}
                  className="flex items-center justify-between w-full font-medium text-lg py-2"
                >
                  {menu.title}
                  <FaChevronDown
                    className={`ml-1 text-sm transition-transform ${
                      openMenu === menu.title ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openMenu === menu.title && (
                  <ul className="bg-white text-[#111827] rounded-lg shadow-lg py-2 mt-2">
                    {menu.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="block px-5 py-2 hover:bg-[#FBBF24] hover:text-[#111827] transition"
                          onClick={() => setMobileOpen(false)}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="block bg-[#FBBF24] text-[#111827] px-5 py-2 rounded-md font-semibold hover:bg-yellow-500 transition text-center"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
