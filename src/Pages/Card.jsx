import React from 'react'
import ten from "../assets/topten"
import bib from "../assets/bible"
import sto from "../assets/sto"
import awa from "../assets/awarwin"
import ex from "../assets/exlibris"
import lib from "../assets/library"
import sto from "../assets/sto"

const Card = () => {
    const productla = [
        {
          id: 1,
          title: "The Top Ten Writers Pick Their Favorite Books Paperback January 20, 2007",
          model: "Le Bambidou",
          price: 21999,
          badge: "HOT", // HOT | NEW | PRE-LOVED | -40%
          image: {ten},
          liked: false,
        },
        {
          id: 2,
          title: "Ex Libris 100+ Books to Read and Reread Hardcover October 20, 2020",
          model: "Le Bambidou",
          price: 21999,
          badge: "HOT",
          image:{ex},
          liked: false,
        },
        {
            id: 2,
            title: "Ex Libris 100+ Books to Read and Reread Hardcover October 20, 2020",
            model: "Le Bambidou",
            price: 21999,
            badge: "HOT",
            image:{ex},
            liked: false,
          },
        {
          id: 3,
          title: "52 Award-Winning Titles Every Book Lover Should Read 52 Books Every Book Lover ...",
          model: "Le Bambidou",
          price: 21999,
          badge: "PRE-LOVED",
          image: {awa},
          liked: false,
        },
        {
          id: 4,
          title: "The Library of Humanity The Most Influential Books of all Time Paperback July 12, ...",
          model: "Le Bambidou",
          price: 21999,
          badge: "NEW",
          image: {lib},
          liked: false,
        },
        {
          id: 5,
          title: "Lost Books of the Bible The Great Rejected Texts Paperback August 12, 2011",
          model: "Le Bambidou",
          price: 21999,
          badge: "PRE-LOVED",
          image: {bib},
          liked: false,
        },
        {
          id: 6,
          title: "100 Books That Changed the World Hardcover September 3, 2024",
          model: "Le Bambidou",
          price: 21999,
          badge: "NEW",
          image: {sto},
          liked: false,
        },
        {
          id: 7,
          title: "Remarkable Books  The Worlds Most Historic and Significant Works DK History Changers ...",
          model: "Le Bambidou",
          price: 21999,
          badge: "-40%",
          image:{live},
          liked: false,
        },
       
      ];
  return (
    <div>
        {/* kitobla */}
            <div className="grid grid-cols-4 gap-6 mt-20 px-10">

{productla.map((product) => (
  <div key={product.id} className="border border-gray-400 rounded-2xl p-4 relative">

    {product.badge && (
      <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded-2xl">
        {product.badge}
      </span>
    )}
    <img
      src={product.image}
      alt={product.title}
      className="w-full object-cover"
    />
    <h3 className="mt-3 font-medium">{product.title}</h3>
    <p className="text-gray-500">{product.model}</p>
    <p className="font-bold mt-2">{product.price} ₽</p>
  </div>
))}
</div>
{/* kitobla */}
    </div>
  )
}

export default Card