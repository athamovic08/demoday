import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Buy() {
  const { state } = useLocation();

  const saved = JSON.parse(localStorage.getItem("buyProduct"));

  const product = state?.product || saved?.product;
  const qty = state?.qty || saved?.qty;

  if (!product) {
    return <h2 className="p-6">No product selected</h2>;
  }

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

    localStorage.removeItem("buyProduct");

    setForm({
      name: "",
      phone: "",
      address: "",
    });
  };

  return (
    <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-10">
      {/* PRODUCT */}
      <div className="space-y-4">
        <img src={product.image} className="w-64 rounded-xl" />
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p>Quantity: <b>{qty}</b></p>
        <p className="text-2xl font-bold">
          UZS {totalPrice.toLocaleString()}
        </p>
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="border p-6 rounded-xl space-y-4"
      >
        <h2 className="text-xl font-semibold">Sotib olish</h2>

        <input
          name="name"
          placeholder="Ismingiz"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border px-4 py-2 rounded-lg"
        />

        <input
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
<Link to="/">
        <button className="w-full bg-black text-white py-3 rounded-lg">
          BUYURTMA BERISH
        </button></Link>
      </form>
    </div>
  );
}
