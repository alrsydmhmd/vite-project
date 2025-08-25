import React from "react";

export default function Contact() {
  return (
    <section
      className="bg-gradient-to-b from-[#C68B59] to-[#8B5E3C] py-16"
      id="contact"
    >
      <div className="container mx-auto px-6 md:px-0">
        <h2 className="text-3xl md:text-4xl font-bold text-[#FFF4E6] mb-6 text-center">
          Hubungi Kami
        </h2>
        <p className="text-[#FFD6A5] text-lg text-center mb-8">
          Ada pertanyaan atau ingin melakukan pemesanan? Silakan hubungi kami
          melalui form di bawah ini.
        </p>
        <form className="max-w-xl mx-auto bg-[#FFF4E6] p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label
              className="block text-[#6B4226] font-semibold mb-2"
              htmlFor="name"
            >
              Nama
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#C68B59]"
              placeholder="Nama Anda"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-[#6B4226] font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#C68B59]"
              placeholder="Email Anda"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-[#6B4226] font-semibold mb-2"
              htmlFor="message"
            >
              Pesan
            </label>
            <textarea
              id="message"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#C68B59]"
              rows="4"
              placeholder="Tulis pesan Anda di sini..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#C68B59] text-white px-6 py-2 rounded hover:bg-[#A7795D] transition"
          >
            Kirim Pesan
          </button>
        </form>
      </div>
    </section>
  );
}
