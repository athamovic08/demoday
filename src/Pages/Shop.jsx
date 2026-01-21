import React from "react";
import { Search, MapPin, Store, Star } from "lucide-react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Shop = () => {
  const shops = [
    { id: 1, name: "Central Book Store", location: "Tashkent, Chilanzar", rating: 4.8, books: 1200, discount: "-20%" },
    { id: 2, name: "Knowledge House", location: "Tashkent, Yunusabad", rating: 4.6, books: 850, discount: "-15%" },
    { id: 3, name: "Smart Books", location: "Samarkand", rating: 4.7, books: 640, discount: "-10%" },
    { id: 4, name: "Readers World", location: "Bukhara", rating: 4.5, books: 430, discount: "-25%" },
    { id: 5, name: "Book City", location: "Andijan", rating: 4.4, books: 980, discount: "-12%" },
    { id: 6, name: "Ilm Ziyosi", location: "Namangan", rating: 4.3, books: 720, discount: "-18%" },
    { id: 7, name: "Ziyo Books", location: "Fergana", rating: 4.2, books: 610, discount: "-10%" },
    { id: 8, name: "Academic Store", location: "Tashkent, Olmazor", rating: 4.9, books: 1500, discount: "-30%" },
    { id: 9, name: "Student Books", location: "Tashkent, Mirzo Ulugbek", rating: 4.6, books: 890, discount: "-14%" },
    { id: 10, name: "Classic Library", location: "Khiva", rating: 4.1, books: 300, discount: "-8%" },
    { id: 11, name: "Modern Reads", location: "Karshi", rating: 4.4, books: 540, discount: "-11%" },
    { id: 12, name: "Global Books", location: "Nukus", rating: 4.0, books: 410, discount: "-9%" },
    { id: 13, name: "Infinity Books", location: "Tashkent, Sergeli", rating: 4.8, books: 1100, discount: "-22%" },
    { id: 14, name: "Premium Book House", location: "Tashkent, Shaykhantahur", rating: 4.9, books: 1700, discount: "-35%" },
    { id: 15, name: "Open Mind", location: "Jizzakh", rating: 4.2, books: 360, discount: "-7%" }
  ];

  return (
    <div className="min-h-screen text-black">
      <Navbar />
      

      {/* HERO */}
      <section className="bg-blue-300 text-black py-24 text-center">
        <h2 className="text-6xl font-extrabold mb-6">
          Book Stores & Shops
        </h2>
        <p className="text-xl mb-8">
          Discover the best book shops across different cities
        </p>
      </section>

      {/* SHOPS GRID */}
      <section className="px-10 py-20">
        <h3 className="text-4xl font-bold mb-12">Popular Book Shops</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {shops.map((shop) => (
            <div
              key={shop.id}
              className="relative bg-blue-300 rounded-3xl border-2 border-black p-6 hover:scale-105 transition"
            >
              {/* Discount badge */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                {shop.discount}
              </div>

              {/* Shop icon */}
              <div className="flex justify-center mt-10 mb-6">
                <Store className="w-16 h-16" />
              </div>

              <h4 className="text-xl font-extrabold text-center mb-2">
                {shop.name}
              </h4>

              <p className="text-center text-gray-600 mb-2">
                {shop.location}
              </p>

              <div className="flex items-center justify-center gap-2 mb-3">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{shop.rating}</span>
              </div>

              <p className="text-center font-semibold mb-6">
                {shop.books}+ books available
              </p>

              <button className="w-full bg-white border-2 border-black py-3 rounded-2xl font-semibold">
                Enter Shop
              </button>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Shop
