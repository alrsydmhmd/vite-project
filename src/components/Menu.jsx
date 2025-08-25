import React from "react";

const menuItems = [
  {
    name: "Chocolate Chip Cookie",
    description: "Cookies renyah dengan potongan cokelat premium.",
    price: "Rp 15.000",
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Cappuccino",
    description: "Kopi susu hangat dengan taburan bubuk kakao.",
    price: "Rp 22.000",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Croissant Almond",
    description: "Pastry lembut dengan isian almond manis.",
    price: "Rp 28.000",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&q=80",
  },
];

export default function Menu() {
  return (
    <section className="bg-gradient-to-b from-[#E2B97F] to-[#C68B59] text-white py-12" id="menu">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#FFF4E6] mb-8 text-center">
          Menu Favorit Kami
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {menuItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FFF4E6] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-xl text-[#6B4226] mb-2">
                  {item.name}
                </h3>
                <p className="text-[#4B2E21] mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-[#C68B59]">{item.price}</span>
                  <button className="bg-[#C68B59] text-white px-4 py-2 rounded hover:bg-[#A7795D] transition text-sm">
                    Pesan
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
