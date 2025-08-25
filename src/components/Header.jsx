// Header.jsx
import React from "react";

export default function Header() {
  return (
    <header className="bg-[#F5E0C3] pt-24 pb-12">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#6B4226] mb-4">
          Selamat Datang di Byte & Bite
        </h1>
        <p className="text-lg md:text-xl text-[#4B2E21] mb-6">
          Nikmati berbagai pilihan pastry dan minuman terbaik untuk Anda!
        </p>
        <a
          href="#menu"
          className="inline-block bg-[#FFD6A5] text-[#6B4226] px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-[#E8B97A] transition"
        >
          Lihat Menu
        </a>
      </div>
    </header>
  );
}