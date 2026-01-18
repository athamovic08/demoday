import { Link } from "react-router-dom";
import { products } from "../data/products";

const Card = () => {
  return (
    <div>
      <h2 className="font-extrabold mt-2 text-2xl text-center">
        Top Selling Books
      </h2>

      <div className="grid grid-cols-4 gap-6 mt-20 px-10">
        {products.map(product => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="card flex flex-col items-center border rounded-2xl shadow-2xl p-4"
          >
            <div className="bg-red-600 text-white px-4 py-1 rounded-full mb-3">
              {product.badge}%
            </div>

            <img src={product.image} className="h-40" />

            <h4 className="mt-2 font-semibold">{product.title}</h4>
            <p className="text-sm text-gray-500">{product.author}</p>

            <div>⭐ {product.rating}</div>

            <div className="flex gap-4">
              <span>UZS {product.price}</span>
              <span className="line-through text-gray-400">
                UZS {product.oldPrice}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Card;
