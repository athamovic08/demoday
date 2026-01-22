import React, { useState } from "react";
import { Store, Star } from "lucide-react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Shop1 from "../assets/shop(1).jpeg";
import Shop2 from "../assets/shop(2).jpeg";
import Shop3 from "../assets/shop(3).jpeg";
import Shop4 from "../assets/shop(4).jpeg";
import Shop5 from "../assets/shop(5).jpeg";
import Shop6 from "../assets/shop(6).jpeg";
import Shop7 from "../assets/shop(7).jpeg";
import Shop8 from "../assets/shop(8).jpeg";
import Shop9 from "../assets/shop(9).jpeg";

const Shop = () => {
  const shops = [
    { id: 1, image: Shop1, name: "Central Book Store", location: "Tashkent, Chilanzar", rating: 4.8, books: 1200, discount: "-20%" },
    { id: 2, image: Shop2, name: "Knowledge House", location: "Tashkent, Yunusabad", rating: 4.6, books: 850, discount: "-15%" },
    { id: 3, image: Shop3, name: "Smart Books", location: "Samarkand", rating: 4.7, books: 640, discount: "-10%" },
    { id: 4, image: Shop4, name: "Readers World", location: "Bukhara", rating: 4.5, books: 430, discount: "-25%" },
    { id: 5, image: Shop5, name: "Book City", location: "Andijan", rating: 4.4, books: 980, discount: "-12%" },
    { id: 6, image: Shop6, name: "Ilm Ziyosi", location: "Namangan", rating: 4.3, books: 720, discount: "-18%" },
    { id: 7, image: Shop7, name: "Ziyo Books", location: "Fergana", rating: 4.2, books: 610, discount: "-10%" },
    { id: 8, image: Shop8, name: "Academic Store", location: "Tashkent, Olmazor", rating: 4.9, books: 1500, discount: "-30%" },
    { id: 9, image: Shop9, name: "CoddyCamp Store", location: "Tashkent, Navza", rating: 5.0, books: 2500, discount: "-80%" }
  ];

  // BOSHLANG'ICH HOLAT: selectedShop null, ya'ni hech narsa ko'rinmaydi
  const [selectedShop, setSelectedShop] = useState(null);

  return (
    <div className="min-h-screen text-black">
      <Navbar />

      {/* ================= SHOP DETAIL (PRODUCT-STYLE) ================= */}
      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${selectedShop ? "max-h-[2000px] py-16" : "max-h-0 py-0"}`}>
        {selectedShop && (
          <section className="px-10 bg-white border-b">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

              {/* LEFT SIDE (IMAGE) */}
              <div className="flex justify-center">
                <div className="w-[340px] h-[500px] border rounded-xl bg-blue-200 flex items-center justify-center">
                  {selectedShop.image ? (
                    <img
                      src={selectedShop.image}
                      alt={selectedShop.name}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  ) : (
                    <Store className="w-40 h-40" />
                  )}
                </div>
              </div>

              {/* RIGHT SIDE (INFO) */}
              <div>
                <p className="text-gray-500 mb-2">Bookshop</p>
                <h1 className="text-4xl font-bold mb-4">{selectedShop.name}</h1>
                <p className="text-green-600 mb-4">Popular bookshop in {selectedShop.location}</p>

                <div className="flex items-center gap-2 mb-4">
                  <Star className="fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{selectedShop.rating} rating</span>
                </div>

                <p className="text-3xl font-bold mb-2">{selectedShop.books}+ Books</p>
                <p className="text-green-600 font-semibold mb-6">Save {selectedShop.discount}</p>
                <p className="mb-6">
                  Availability: <span className="text-green-600 font-semibold">In stock ✔</span>
                </p>

                <div className="flex flex-col gap-4 max-w-md">
                  <button className="bg-black text-white py-4 rounded-lg font-semibold">
                    ENTER SHOP
                  </button>
                  <button className="bg-yellow-400 py-4 rounded-lg font-semibold">
                    CONTACT SHOP
                  </button>
                </div>

                <p className="text-sm text-gray-500 mt-4">🔒 Secured transaction</p>
              </div>
            </div>

            {/* DETAILS TABLE */}
            <div className="mt-16">
              <h3 className="text-xl font-bold mb-4">Shop Details</h3>
              <div className="border rounded-lg">
                <div className="p-4 border-b">Location: {selectedShop.location}</div>
                <div className="p-4 border-b">Total Books: {selectedShop.books}+</div>
                <div className="p-4">Rating: {selectedShop.rating}</div>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* ================= HERO ================= */}
      <section className="bg-blue-300 py-24 text-center">
        <h2 className="text-6xl font-extrabold mb-6">Book Stores & Shops</h2>
        <p className="text-xl">Discover the best book shops across different cities</p>
      </section>

      {/* ================= SHOPS GRID ================= */}
      <section className="px-10 py-20">
        <h3 className="text-4xl font-bold mb-12">Popular Book Shops</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {shops.map((shop) => (
            <div
              key={shop.id}
              onClick={() => setSelectedShop(shop)}
              className="relative bg-blue-300 rounded-3xl border-2 border-black p-6 hover:scale-105 transition cursor-pointer"
            >
              <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                {shop.discount}
              </div>

              <div className="flex justify-center mt-10 mb-6">
                {shop.image ? (
                  <img
                    src={shop.image}
                    alt={shop.name}
                    className="w-40 h-40 object-cover rounded-xl"
                  />
                ) : (
                  <Store className="w-40 h-40" />
                )}
              </div>

              <h4 className="text-xl font-extrabold text-center mb-2">{shop.name}</h4>
              <p className="text-center text-gray-600 mb-2">{shop.location}</p>

              <div className="flex items-center justify-center gap-2 mb-3">
                <Star className="fill-yellow-400 text-yellow-400 w-5 h-5" />
                <span>{shop.rating}</span>
              </div>

              <p className="text-center font-semibold">{shop.books}+ books available</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;
