import { useState, useEffect } from "react";
import { useCart } from "./CartContex";
import Navbar from "../Components/Navbar";

export default function Cart() {
  const { cart, removeFromCart } = useCart();
  const [showModal, setShowModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [orderData, setOrderData] = useState({
    name: "",
    surname: "",
    phone: "",
    address: "",
    district: "",
  });

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = localStorage.getItem("orders");
    if (savedOrders) setOrders(JSON.parse(savedOrders));
  }, []);

  const handleBuy = (item) => {
    setCurrentItem(item);
    setShowModal(true);
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    const newOrder = { ...currentItem, buyer: orderData };
    const updatedOrders = [...orders, newOrder];
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));

    setShowModal(false);
    setOrderData({ name: "", surname: "", phone: "", address: "", district: "" });
    alert("Sotib olish muvaffaqiyatli amalga oshirildi!");
  };

  if (cart.length === 0) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <h2 className="text-2xl text-blue-400 font-semibold">🛒 Cart is empty</h2>
      </div>
    );
  }

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <Navbar />
      <h1 className="text-3xl font-bold text-blue-500 mb-6">Your Cart</h1>

      <div className="space-y-5">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex gap-5 items-center bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition duration-300"
          >
            <img src={item.image} alt={item.title} className="w-24 h-32 object-cover rounded-lg" />
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
              <p className="text-sm text-gray-500">Qty: {item.qty}</p>
              <p className="text-blue-500 font-medium mt-1">{item.price.toLocaleString()} UZS</p>
            </div>

            <div className="flex flex-col gap-2 text-right">
              <button
                onClick={() => handleBuy(item)}
                className="text-sm text-green-500 hover:text-green-700 transition"
              >
                Buy 🛒
              </button>
              <p className="font-semibold text-gray-800">{(item.price * item.qty).toLocaleString()} UZS</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="mt-1 text-sm text-red-500 hover:text-red-700 transition"
              >
                Remove ✕
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-blue-100 rounded-xl p-6 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-700">Total</h2>
        <span className="text-2xl font-bold text-blue-600">{total.toLocaleString()} UZS</span>
      </div>

      {/* BUY MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-2xl w-96">
            <h2 className="text-xl font-bold mb-4">Buy {currentItem.title}</h2>
            <form className="flex flex-col gap-3" onSubmit={handleSubmitOrder}>
              <input
                type="text"
                placeholder="Name"
                value={orderData.name}
                onChange={(e) => setOrderData({ ...orderData, name: e.target.value })}
                className="border px-3 py-2 rounded outline-none"
                required
              />
              <input
                type="text"
                placeholder="Surname"
                value={orderData.surname}
                onChange={(e) => setOrderData({ ...orderData, surname: e.target.value })}
                className="border px-3 py-2 rounded outline-none"
                required
              />
              <input
                type="text"
                placeholder="Phone"
                value={orderData.phone}
                onChange={(e) => setOrderData({ ...orderData, phone: e.target.value })}
                className="border px-3 py-2 rounded outline-none"
                required
              />
              <input
                type="text"
                placeholder="Address"
                value={orderData.address}
                onChange={(e) => setOrderData({ ...orderData, address: e.target.value })}
                className="border px-3 py-2 rounded outline-none"
                required
              />
              <input
                type="text"
                placeholder="District"
                value={orderData.district}
                onChange={(e) => setOrderData({ ...orderData, district: e.target.value })}
                className="border px-3 py-2 rounded outline-none"
                required
              />
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  Confirm Buy
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
