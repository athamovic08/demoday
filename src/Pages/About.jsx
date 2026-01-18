import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const values = [
  {
    title: "Sifat",
    text: "Biz har bir kitobni sinchkovlik bilan tanlaymiz va sifatni birinchi o‘ringa qo‘yamiz.",
  },
  {
    title: "Ishonch",
    text: "Mijozlarimiz ishonchi — bizning eng katta boyligimiz.",
  },
  {
    title: "Rivojlanish",
    text: "Biz doim o‘sishda va yangilikka intilishdamiz.",
  },
];

const About = () => {
  return (
    
    <div className="bg-[#fdfbf7] text-gray-900 font-sans">
        <Navbar />
      {/* 1. Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-stone-900">
        <img
          src="https://images.unsplash.com"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          alt="Katta kutubxona"
        />
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-8">
            Biz Haqimizda
          </h1>
          <div className="h-1 w-32 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl md:text-3xl text-amber-50 italic">
            "Har bir kitob — bu tugallanmagan suhbat."
          </p>
        </div>
      </section>

      {/* 2. Mission */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <img
            src="https://images.unsplash.com"
            className="rounded-2xl shadow-2xl"
            alt="Reading"
          />
          <div className="space-y-8">
            <span className="text-amber-700 font-bold uppercase text-sm">
              Bizning maqsadimiz
            </span>
            <h2 className="text-5xl font-serif font-bold">
              Kitobxonlikni yangi bosqichga olib chiqamiz
            </h2>
            <p className="text-xl text-gray-600">
              Biz shunchaki kitob sotmaymiz, biz bilim ulashamiz.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Stats */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          {[
            { label: "Yillik tajriba", val: "10+" },
            { label: "Kitoblar", val: "250K" },
            { label: "Mijozlar", val: "500K" },
            { label: "Hamkorlar", val: "45" },
          ].map((stat, i) => (
            <div key={i} className="text-center border-l-2 border-amber-600 pl-6">
              <div className="text-5xl font-bold">{stat.val}</div>
              <div className="text-gray-500 uppercase text-xs">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. VALUES – FIX QILINGAN QISM */}
      <section className="py-32 bg-[#f9f7f2]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-serif font-bold text-center mb-20">
            Bizning asosiy tamoyillarimiz
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {values.map((box, i) => (
              <div
                key={i}
                className="bg-white p-12 rounded-3xl shadow-sm hover:shadow-2xl transition"
              >
                <div className="text-amber-700 mb-6 w-10 h-10"></div>
                <h3 className="text-2xl font-bold mb-4">{box.title}</h3>
                <p className="text-gray-600">{box.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-32 text-center bg-stone-900 text-white">
        <h2 className="text-4xl font-serif mb-8">
          Bizning jamoaga qo‘shiling
        </h2>
        <button className="bg-amber-600 px-12 py-4 rounded-full font-bold">
          Vakansiyalarni ko‘rish
        </button>
      </section>
            <Footer />
    </div>
  );
};

export default About;
