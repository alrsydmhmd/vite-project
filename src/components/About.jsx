import React from "react";

export default function About() {
  return (
    <section className="bg-gradient-to-b from-[#F5E0C3] to-[#E2B97F] py-16" id="about">
      <div className="container mx-auto px-6 md:px-0">
        <h2 className="text-3xl md:text-4xl font-bold text-[#6B4226] mb-6 text-center">
          Tentang Byte & Bite
        </h2>
        <p className="text-[#4E4E4E] text-lg md:text-xl text-center max-w-2xl mx-auto mb-8">
          <span className="font-semibold text-[#6B4226]">Byte & Bite</span> adalah pastry shop bertema teknologi
          yang menggabungkan cita rasa manis dengan kreativitas digital. Nama{" "}
          <span className="font-semibold text-[#6B4226]">“Byte”</span> terinspirasi dari satuan data dalam komputer,
          sementara <span className="font-semibold text-[#6B4226]">“Bite”</span> menggambarkan gigitan lezat dari pastry
          yang baru dipanggang.
        </p>
        <p className="text-[#4E4E4E] text-lg md:text-xl text-center max-w-2xl mx-auto mb-8">
          Setiap kreasi pastry dibuat dengan presisi seperti menulis baris kode—rasa, tekstur, dan tampilan diolah dengan
          detail dan inovasi. Dengan interior bergaya modern-tech dan suasana yang cozy, Byte & Bite menjadi tempat
          sempurna untuk menikmati croissant, tart, atau eclair sambil bekerja, belajar, atau sekadar bersantai. Di sini,
          manisnya pastry bertemu dengan dunia teknologi dalam setiap gigitan.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="bg-[#E6CBA8] p-6 rounded-lg shadow-md w-full md:w-1/3">
            <h3 className="font-semibold text-[#6B4226] mb-2">Pastry Fresh & Premium</h3>
            <p className="text-[#4E4E4E] text-sm">
              Setiap pastry dibuat dari bahan pilihan dan dipanggang fresh setiap hari untuk menjaga kualitas rasa.
            </p>
          </div>
          <div className="bg-[#E6CBA8] p-6 rounded-lg shadow-md w-full md:w-1/3">
            <h3 className="font-semibold text-[#6B4226] mb-2">Kreasi Rasa Unik</h3>
            <p className="text-[#4E4E4E] text-sm">
              Temukan berbagai varian croissant, tart, dan eclair dengan sentuhan inovasi dan cita rasa khas Byte & Bite.
            </p>
          </div>
          <div className="bg-[#E6CBA8] p-6 rounded-lg shadow-md w-full md:w-1/3">
            <h3 className="font-semibold text-[#6B4226] mb-2">Suasana Modern-Tech</h3>
            <p className="text-[#4E4E4E] text-sm">
              Nikmati pastry di ruang bergaya teknologi yang nyaman, cocok untuk bekerja, belajar, atau bersantai.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
