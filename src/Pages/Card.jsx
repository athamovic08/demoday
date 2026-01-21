import { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";

const categories = [
  "All",
  "Biznes",
  "Motivatsiya",
  "Psixologiya",
  "Fantaziya",
  "Texnologiya",
];

const Card = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter(p => {
    const searchMatch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.author.toLowerCase().includes(search.toLowerCase());

    const categoryMatch =
      category === "All" || p.category === category;

    return searchMatch && categoryMatch;
  });

  return (
    <div className="pb-20">
      {/* TITLE */}
      <h2 className="font-extrabold mt-6 text-2xl text-center">
        Top Selling Books
      </h2>

      {/* SEARCH */}
      <div className="flex justify-center mt-6">
        <input
          type="text"
          placeholder="Search book or author..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="border px-6 py-2 rounded-full w-[320px] outline-none"
        />
      </div>

      {/* MARQUEE CATEGORY */}
      <div className="overflow-hidden mt-6 relative">
        <div className="marquee flex gap-4 whitespace-nowrap">
          {[...categories, ...categories].map((cat, i) => (
            <button
              key={i}
              onClick={() => setCategory(cat)}
              className={`px-6 py-2 rounded-full border transition
                ${
                  category === cat
                    ? "bg-black text-white"
                    : "bg-white hover:bg-black hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-4 gap-6 mt-14 px-10">
        {filteredProducts.map(product => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="flex flex-col items-center  rounded-2xl shadow-2xl shadow-blue-500 p-4 hover:scale-105 transition"
          >
            {/* BADGE */}
            <div className="bg-red-600 text-white px-4 py-1 rounded-full mb-3">
              {product.badge}%
            </div>

            {/* IMAGE */}
            <img
              src={product.image}
              alt={product.title}
              className="h-40 object-contain"
            />

            {/* INFO */}
            <h4 className="mt-2 font-semibold text-center">
              {product.title}
            </h4>
            <p className="text-sm text-gray-500">{product.author}</p>

            <div className="mt-1">⭐ {product.rating}</div>

            <div className="flex gap-3 mt-2">
              <span className="font-semibold">
                UZS {product.price}
              </span>
              <span className="line-through text-gray-400">
                UZS {product.oldPrice}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* CSS – HAMMASI SHU YERDA */}
      <style>{`
        .marquee {
          animation: marquee 15s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default Card;
