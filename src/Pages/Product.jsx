import { useParams } from "react-router-dom";
import { useState } from "react";
import { products } from "../data/products";
import Card from "./Card";

export default function Product() {
  const { id } = useParams();
  const product = products.find((c) => c.id === Number(id));

  const [qty, setQty] = useState(1);

  if (!product) {
    return <h2 className="p-6">Product not found</h2>;
  }

  const totalPrice = product.price * qty;
  const totalOldPrice = product.oldPrice * qty;

  return (
    <div>
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-[380px] rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* INFO */}
        <div className="space-y-4">
          <p className="text-sm text-gray-500">{product.author}</p>

          <h1 className="text-2xl font-semibold leading-snug">{product.title}</h1>

          <p className="text-green-600 text-sm font-medium">
            88% of respondents would recommend this to a friend
          </p>

          {/* RATING */}
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400 text-lg">
              {"⭐".repeat(Math.floor(product.rating))}{" "}
              {product.rating % 1 !== 0 ? "☆" : ""}
            </div>
            <span className="text-sm text-gray-600">{product.rating} rating</span>
          </div>

          {/* PRICE */}
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold">
              UZS {totalPrice.toLocaleString()}
            </span>
            <span className="text-gray-400 line-through">
              UZS {totalOldPrice.toLocaleString()}
            </span>
            {product.badge && (
              <span className="text-green-600 text-sm font-medium">
                Save {product.badge}%
              </span>
            )}
          </div>

          {/* AVAILABILITY */}
          <p className="text-sm">
            Availability: <span className="text-green-600 font-medium">In stock ✓</span>
          </p>

          {/* QTY */}
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">QTY:</span>
            <div className="flex items-center border rounded-md overflow-hidden">
              <button
                onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                className="px-3 py-1 hover:bg-gray-100"
              >
                −
              </button>
              <span className="px-4">{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="px-3 py-1 hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="space-y-3 pt-4">
            <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
              ADD TO CART
            </button>

            <button className="w-full bg-yellow-400 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition">
              BUY NOW
            </button>
          </div>

          <p className="text-sm text-gray-500 flex items-center gap-2">
            🔒 Secured transaction
          </p>
        </div>
      </div>

      {/* BOOK DETAILS TABLE */}
      <div className="max-w-6xl mx-auto p-6 mt-10">
        <h2 className="text-xl font-semibold mb-4">Book Details</h2>
        <table className="w-full border border-gray-200 text-left">
          <tbody>
            <tr className="border-b">
              <td className="py-2 px-4 font-medium">Publisher</td>
              <td className="py-2 px-4">{product.publisher || "Clarkson Potter"}</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="py-2 px-4 font-medium">Publication date</td>
              <td className="py-2 px-4">{product.publicationDate || "October 20, 2020"}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4 font-medium">Language</td>
              <td className="py-2 px-4">{product.language || "English"}</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="py-2 px-4 font-medium">Print length</td>
              <td className="py-2 px-4">{product.pages || "304 pages"}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4 font-medium">ISBN-10</td>
              <td className="py-2 px-4">{product.isbn10 || "0525574972"}</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="py-2 px-4 font-medium">ISBN-13</td>
              <td className="py-2 px-4">{product.isbn13 || "978-0525574972"}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4 font-medium">Item Weight</td>
              <td className="py-2 px-4">{product.weight || "1.4 pounds (640 grams)"}</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="py-2 px-4 font-medium">Dimensions</td>
              <td className="py-2 px-4">{product.dimensions || "5.8 x 1.15 x 7.75 inches (14.7 x 2.9 x 19.7 cm)"}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 font-medium">Date First Available</td>
              <td className="py-2 px-4">{product.dateAvailable || "2021-04-18"}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* RELATED PRODUCTS */}
      <Card />
    </div>
  );
}
