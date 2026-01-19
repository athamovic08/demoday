import React from 'react'
import  { useState } from "react";

     
      

export default function Contact() {
    
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Ism kiritilishi kerak";
    if (!form.email.trim()) e.email = "Email kiritilishi kerak";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Noto'g'ri email";
    if (!form.message.trim()) e.message = "Xabar yozing";
    else if (form.message.length < 10)
      e.message = "Xabar kamida 10 ta belgi bo'lishi kerak";
    return e;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const eobj = validate();
    setErrors(eobj);
    if (Object.keys(eobj).length) return;

    setStatus("sending");
    try {
      // O'zingizning endpointni shu yerga qo'ying
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Server error");
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3500);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  }

  function handleChange(e) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  }

  return (
    
    <section className="bg-gradient-to-b from-sky-50 to-white py-16 px-4">
        
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl grid md:grid-cols-2 overflow-hidden">
          {/* Left: Info */}
          <div className="p-8 md:p-10 bg-gradient-to-tr from-sky-50/60 to-white border-r md:border-r md:border-transparent flex flex-col">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
              Biz bilan bog'laning
            </h2>
            <p className="mt-3 text-slate-600">
              Savollar yoki kitob takliflari uchun quyidagi shakl orqali yozing.
              Tez orada javob beramiz.
            </p>

            <ul className="mt-6 space-y-3 text-slate-700">
              <li>
                <span className="block text-sm text-slate-500">Email</span>
                <a
                  className="font-medium text-slate-900 hover:text-sky-600"
                  href="mailto:info@example.com"
                >
                  info@example.com
                </a>
              </li>
              <li>
                <span className="block text-sm text-slate-500">Telefon</span>
                <a
                  className="font-medium text-slate-900 hover:text-sky-600"
                  href="tel:+998901234567"
                >
                  +998 90 123 45 67
                </a>
              </li>
              <li>
                <span className="block text-sm text-slate-500">Manzil</span>
                <span className="font-medium text-slate-900">Toshkent, O'zbekiston</span>
              </li>
            </ul>

            <div className="mt-auto flex items-center gap-3">
              <a
                href="#"
                aria-label="Telegram"
                className="w-10 h-10 rounded-lg bg-white shadow-md flex items-center justify-center text-sky-600 font-semibold"
              >
                TG
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-lg bg-white shadow-md flex items-center justify-center text-pink-500 font-semibold"
              >
                IG
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-lg bg-white shadow-md flex items-center justify-center text-blue-600 font-semibold"
              >
                FB
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="p-8 md:p-10 flex flex-col gap-4"
          >
            <label className="flex flex-col">
              <span className="text-sm text-slate-700">Ism</span>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Ismingiz"
                aria-invalid={errors.name ? "true" : "false"}
                className={`mt-2 px-4 py-3 rounded-xl border ${
                  errors.name ? "border-rose-400" : "border-slate-200"
                } bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-300`}
              />
              {errors.name && (
                <span className="mt-1 text-rose-600 text-sm">{errors.name}</span>
              )}
            </label>

            <label className="flex flex-col">
              <span className="text-sm text-slate-700">Email</span>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="example@mail.com"
                aria-invalid={errors.email ? "true" : "false"}
                className={`mt-2 px-4 py-3 rounded-xl border ${
                  errors.email ? "border-rose-400" : "border-slate-200"
                } bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-300`}
              />
              {errors.email && (
                <span className="mt-1 text-rose-600 text-sm">{errors.email}</span>
              )}
            </label>

            <label className="flex flex-col">
              <span className="text-sm text-slate-700">Xabar</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Xabaringizni yozing..."
                rows="5"
                aria-invalid={errors.message ? "true" : "false"}
                className={`mt-2 px-4 py-3 rounded-xl border resize-y ${
                  errors.message ? "border-rose-400" : "border-slate-200"
                } bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-300`}
              />
              {errors.message && (
                <span className="mt-1 text-rose-600 text-sm">{errors.message}</span>
              )}
            </label>

            <div className="flex items-center gap-3 mt-1">
              <button
                type="submit"
                disabled={status === "sending"}
                className={`inline-flex items-center gap-3 px-5 py-3 rounded-xl text-white font-semibold shadow-md transition-transform ${
                  status === "sending"
                    ? "bg-gradient-to-r from-sky-400 to-sky-600 cursor-wait opacity-90"
                    : "bg-gradient-to-r from-sky-400 to-sky-600 hover:scale-[1.02]"
                }`}
              >
                {status === "sending" ? (
                  <>
                    <svg
                      className="w-4 h-4 animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                    <span>Yuborilyapti...</span>
                  </>
                ) : (
                  <span>Yuborish</span>
                )}
              </button>

              <button
                type="button"
                onClick={() => {
                  setForm({ name: "", email: "", message: "" });
                  setErrors({});
                }}
                className="px-4 py-3 rounded-xl border border-slate-200 text-slate-700 bg-white hover:bg-slate-50"
              >
                Tozalash
              </button>
            </div>

            {/* Toasts */}
            <div aria-live="polite" className="min-h-[44px]">
              {status === "success" && (
                <div className="mt-3 inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold shadow-md">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Xabaringiz muvaffaqiyatli yuborildi!
                </div>
              )}

              {status === "error" && (
                <div
                  role="alert"
                  className="mt-3 inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-rose-500 to-orange-400 text-white font-semibold shadow-md"
                >
                  Xatolik yuz berdi — iltimos keyinroq urinib ko'ring.
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
    
  );
}
   

