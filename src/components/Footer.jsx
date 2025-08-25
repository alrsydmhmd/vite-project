import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#6B4226] text-[#FFF4E6] mt-5">
      <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
        {/* Logo & Brand */}
        <div className="flex items-center space-x-2">
          <span className="font-bold text-lg">Byte & Bite</span>
          <span className="text-[#FFD6A5]">| Pastry & Coffee</span>
        </div>

        {/* Copyright */}
        <div className="text-[#FFD6A5] mt-2 md:mt-0 text-sm">
          © {new Date().getFullYear()} Byte & Bite. All rights reserved.
        </div>

        {/* Social Links */}
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a
            href="#"
            className="hover:text-white text-[#FFD6A5] text-sm transition"
          >
            Instagram
          </a>
          <a
            href="#"
            className="hover:text-white text-[#FFD6A5] text-sm transition"
          >
            Facebook
          </a>
          <a
            href="#"
            className="hover:text-white text-[#FFD6A5] text-sm transition"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
