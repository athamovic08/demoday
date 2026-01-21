import { useCart } from "./CartContex";
import Navbar from "../Components/Navbar";


export default function Cart() {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <h2 className="text-2xl text-blue-400 font-semibold">
          🛒 Cart is empty
        </h2>
      </div>
    );
  }

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <Navbar/>
      <h1 className="text-3xl font-bold text-blue-500 mb-6">
        Your Cart
      </h1>

      <div className="space-y-5">
        {cart.map(item => (
          <div
            key={item.id}
            className="flex gap-5 items-center bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition duration-300"
          >
            {/* IMAGE */}
            <img
              src={item.image}
              alt={item.title}
              className="w-24 h-32 object-cover rounded-lg"
            />

            {/* INFO */}
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h2>
              <p className="text-sm text-gray-500">
                Qty: {item.qty}
              </p>
              <p className="text-blue-500 font-medium mt-1">
                {item.price.toLocaleString()} UZS
              </p>
            </div>

            {/* PRICE + REMOVE */}
            <div className="text-right">
              <p className="font-semibold text-gray-800">
                {(item.price * item.qty).toLocaleString()} UZS
              </p>

              <button
                onClick={() => removeFromCart(item.id)}
                className="mt-2 text-sm text-red-500 hover:text-red-700 transition"
              >
                Remove ✕
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* TOTAL */}
      <div className="mt-8 bg-blue-100 rounded-xl p-6 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-700">
          Total
        </h2>
        <span className="text-2xl font-bold text-blue-600">
          {total.toLocaleString()} UZS
        </span>
      </div>
    </div>
  );
}
