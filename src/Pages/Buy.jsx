import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function Buy() {
  const { state } = useLocation();

  if (!state?.product) {
    return <h2 className="p-6">No product selected</h2>;
  }

  const { product, qty } = state;
  const totalPrice = product.price * qty;

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert("Buyurtma qabul qilindi ✅");
  };

  return (
    <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* PRODUCT INFO */}
      <div className="space-y-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-[300px] rounded-xl shadow-lg"
        />

        <h1 className="text-2xl font-semibold">{product.title}</h1>
        <p className="text-gray-500">{product.author}</p>

        <div className="text-lg">
          ⭐ {product.rating} rating
        </div>

        <p>
          Quantity: <b>{qty}</b>
        </p>

        <p className="text-2xl font-bold">
          UZS {totalPrice.toLocaleString()}
        </p>
      </div>

      {/* BUY FORM */}
      <form
        onSubmit={handleSubmit}
        className="border rounded-xl p-6 space-y-4 shadow-lg"
      >
        <h2 className="text-xl font-semibold">Sotib olish</h2>

        <input
          type="text"
          name="name"
          placeholder="Ismingiz"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border px-4 py-2 rounded-lg"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Telefon raqam"
          value={form.phone}
          onChange={handleChange}
          required
          className="w-full border px-4 py-2 rounded-lg"
        />

        <textarea
          name="address"
          placeholder="Manzil"
          value={form.address}
          onChange={handleChange}
          required
          className="w-full border px-4 py-2 rounded-lg"
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
        >
          BUYURTMA BERISH
        </button>
      </form>
    </div>
  );
}
