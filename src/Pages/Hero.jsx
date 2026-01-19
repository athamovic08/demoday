import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Kitoblar data
const books = [
  {
    title: "Atomic Habits",
    desc: "Yaxshi odatlarni shakllantirish va yomon odatlardan voz kechish",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
  },
  {
    title: "Rich Dad Poor Dad",
    desc: "Moliyaviy erkinlik qo‘llanmasi",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  },
  {
    title: "Harry Potter",
    desc: "Sehrli va fantaziya olami",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353",
  },
  {
    title: "Thinking Fast & Slow",
    desc: "Fikrlash psixologiyasi",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto karusel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % books.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const book = books[current];

  return (
    <section className="bg-blue-300 min-h-screen flex flex-col items-center justify-center px-8 text-white">

      {/* Hero */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 py-16">
        {/* 🔹 Matn */}
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">{book.title}</h1>
          <p className="text-lg md:text-xl text-blue-100">{book.desc}</p>
        </div>

        {/* 🔹 Rasm */}
        <div className="md:w-1/2 flex justify-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={book.image}
              src={book.image}
              alt={book.title}
              className="w-64 md:w-96 rounded-xl shadow-2xl"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            />
          </AnimatePresence>
        </div>
      </div>

      {/* 🔹 Pastdagi static kard */}
      <div className="w-full max-w-4xl mt-12">
        <div className="bg-white rounded-xl p-6 text-black shadow-lg flex items-center gap-6">
          <img
            src={book.image}
            alt={book.title}
            className="h-32 w-24 rounded-lg object-cover"
          />
          <div>
            <h3 className="font-bold text-xl">{book.title}</h3>
            <p className="text-gray-600">{book.desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
