import React, { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#C68B59] shadow-lg fixed w-full top-0 left-0 z-50 border-b border-[#8B5E3C]">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="F&B Logo"
            className="w-10 h-10 rounded-full border border-[#FFF4E6]"
          />
          <span className="font-bold text-xl text-[#FFF4E6]">Byte & Bite</span>
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#FFF4E6] focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8h16M4 16h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex space-x-6 font-medium text-[#FFF4E6]">
          <li className="hover:text-[#FFD6A5] cursor-pointer">Home</li>
          <li className="hover:text-[#FFD6A5] cursor-pointer">About</li>
          <li className="hover:text-[#FFD6A5] cursor-pointer">Menu</li>
          <li className="hover:text-[#FFD6A5] cursor-pointer">Contact</li>
        </ul>

        {/* Button */}
        <button className="hidden md:block bg-[#FFD6A5] text-[#6B4226] px-4 py-2 rounded-lg hover:bg-[#E8B97A] transition font-semibold shadow">
          Order Now
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#C68B59] shadow-lg border-t border-[#8B5E3C]">
          <ul className="flex flex-col items-center space-y-4 py-4 font-medium text-[#FFF4E6]">
            <li className="hover:text-[#FFD6A5] cursor-pointer">Home</li>
            <li className="hover:text-[#FFD6A5] cursor-pointer">Menu</li>
            <li className="hover:text-[#FFD6A5] cursor-pointer">About</li>
            <li className="hover:text-[#FFD6A5] cursor-pointer">Contact</li>
            <button className="bg-[#FFD6A5] text-[#6B4226] px-4 py-2 rounded-lg hover:bg-[#E8B97A] transition font-semibold shadow">
              Order Now
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}